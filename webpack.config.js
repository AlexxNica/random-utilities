const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

/*/ CONFIG /*/
const config = {
  entry: {
    //babelPolyfill: 'babel-polyfill',
    main: './src/index.js',
    //vendors: './src/vendors.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename : '[name]-[id].js',
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
          {
            loader: 'cache-loader',
            options: {
              // provide a cache directory where cache items should be stored
              cacheDirectory: path.resolve('.cache')
            }
          },
          'babel-loader'
        ]//use
      },//rule

      //{
      //  test: /\.tsx?$/,
      //  loader: 'ts-loader'
      //},//rule

      //{
      //  test: /\.css$/,
      //  use: ExtractTextPlugin.extract({
      //    fallback: 'style-loader',
      //    { loader: 'css-loader', options: { importLoaders: 1 } },
      //    { loader: 'postcss-loader', options: { sourceMap: true } },
      //  })//use
      //},//rule

      //{
      //  test: /\.js$/,
      //  loader: 'flowtype-loader',
      //  enforce: 'pre',
      //  exclude: /node_modules/
      //}//rule
    ]//rules
  }//module

};

/*/ EXPORTS /*/
module.exports = config;
