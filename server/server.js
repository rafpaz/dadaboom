const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const cloudinary = require('cloudinary');
const morgan = require('morgan');
const expressWinston = require('express-winston');
const winston = require('../config/winston');
require('dotenvenc')(process.env.DOTENVENC_KEY);
require('dotenv').config();

const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8080;


// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? process.env.DB_DEV : process.env.DB, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const app = express();
app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressWinston.logger(winston));

// API routes
require('./routes')(app);

app.use(expressWinston.errorLogger(winston));

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false,
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  });
}

app.use((err, req, res, next) => {
  winston.error(err.stack);
  next(err);
});

cloudinary.config({
  cloud_name: process.env.CODUINARY_NAME,
  api_key: process.env.CLODINARY_API_KEY,
  api_secret: process.env.CLODINARY_API_SECRET,
});

const httpServer = http.createServer(app);

httpServer.listen(port);

module.exports = app;
