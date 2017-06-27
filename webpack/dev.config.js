'use strict';

var path = require('path'),
    SRC_PATH = path.join(__dirname, '../src'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config'),
    customTheme = require('../theme.json'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var _host = "0.0.0.0",
    _port = 3000,
    _localPublicPath = 'http://' + _host + ':' + _port + '/';

config.devtool = 'source-map';

config.entry.app.unshift('webpack/hot/only-dev-server');
config.entry.app.unshift('webpack-dev-server/client?' + _localPublicPath);
config.entry.app.unshift('react-hot-loader/patch');

config.output.publicPath = _localPublicPath;

config.module.rules[1].use = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    {
      loader: "css-loader",
    },
    {
      loader: "postcss-loader"
    },
    {
      loader: "less-loader",
      options: {
        paths: [SRC_PATH],
        modifyVars: customTheme
      }
    },
  ],
});

// config.module.rules[1].use = [
//   {
//     loader: "style-loader"
//   },
//   {
//     loader: "css-loader",
//     options: {
//       sourceMap: true,
//     }
//   },
//   {
//     loader: "postcss-loader"
//   },
//   {
//     loader: "less-loader",
//     options: {
//       sourceMap: true,
//       paths: [SRC_PATH],
//       modifyVars: customTheme
//     }
//   },
// ];

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(
  new ExtractTextPlugin({
    filename: "[name]-[hash].css",
    allChunks: true,
  })
);

module.exports = config;
