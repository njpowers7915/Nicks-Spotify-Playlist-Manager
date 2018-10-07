var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, '../src/main')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      inject: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../assets'),
        to: path.join(__dirname, '../dist/assets')
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    outputPath: '/lol',
    hot: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, '../src')
      }
    ]
  }
};
