const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const helpers = require('./helpers');

const { NODE_ENV } = process.env;
// const isProd = NODE_ENV === 'production';

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      helpers.root('client/app/index.jsx'),
    ],
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.html'],
    alias: {
      app: 'client/app',
      'styled-components': `${helpers.root()}/node_modules/styled-components`,
    },
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: helpers.root('client'),
        loader: 'babel-loader',
      },

      // SCSS files
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),

    new HtmlWebpackPlugin({
      template: helpers.root('client/public/index.html'),
      inject: 'body',
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),

    new CopyWebpackPlugin([{
      patterns: [helpers.root('client/public')],
    }]),
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
    new webpack.IgnorePlugin({ resourceRegExp: /moment$|^\.\/locale$/ }),
  ],
};
