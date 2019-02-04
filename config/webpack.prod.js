const merge = require('webpack-merge');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
});
