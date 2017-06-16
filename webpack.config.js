
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    path.resolve(__dirname, './script/app.js')
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: false
          }
        }],
      },
      {
        test: /\.(es6|js)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: '/node_modules/',
        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", 'sass-loader'] }),
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]'
　　　　}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template:  __dirname + "/app/views/index.html"
    }),
    new ExtractTextPlugin({ filename: "style.css" })
  ]
};