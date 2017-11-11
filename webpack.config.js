const path = require('path');
const webpack = require('webpack');
const src_dirname = path.join(__dirname + '/client/src');
const dist_dirname = path.join(__dirname + '/client/dist');


module.exports = {
  entry: src_dirname + '/index.jsx',
  output: {
    path: path.resolve(dist_dirname),
    filename: 'meowify-bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};