// @flow
/* REQUIRES */
const path = require('path');
// const glob = require('glob');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/* CONFIG */
const config = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[id].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          /* {
            loader: 'cache-loader',
            options: {
              // provide a cache directory where cache items should be stored
              cacheDirectory: path.resolve('.cache')
            }
          }, */
          'babel-loader'
        ]
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }

      // {
      //  test: /\.js$/,
      //  loader: 'flowtype-loader',
      //  enforce: 'pre',
      //  exclude: /node_modules/
      // }
    ]
  },

  plugins: [
    new LodashModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ]

};

/* EXPORTS */
module.exports = config;
