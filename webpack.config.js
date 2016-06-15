var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },
  plugins: [
        // just use in production dev
    new UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
        // separate common code
        // new CommonsChunkPlugin('init.js')
  ],
};
