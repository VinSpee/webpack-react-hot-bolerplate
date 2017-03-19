const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { DIST_PATH, APP_PATH } = require('./paths');

const PRODUCTION_CONFIG = {
  entry: {
    client: [
      APP_PATH,
    ],
  },

  output: {
    path: DIST_PATH,
    filename: '[name]-[chunkhash].bundle.js',
    chunkFilename: '[id]-[chunkhash].bundle.js',
  },

  performance: {
    hints: 'warning',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true,
    }),

    new ManifestPlugin({
      fileName: 'webpack-asset-manifest.json',
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
  ],
};

module.exports = PRODUCTION_CONFIG;
