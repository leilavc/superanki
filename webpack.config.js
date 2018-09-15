var webpack = require('webpack');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {  
  entry: [
    "./js/app.js"
  ],
  output: {
    path: __dirname + '/static',
    filename: "bundle.js"
  },
  module: {
    rules:[{
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
    }]},
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
  stats: {
    modules: false,
  },
};
