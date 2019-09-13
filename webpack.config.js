const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const minimize = mode === 'production';
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode,
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'index.js'),
  ],
  optimization: {
    minimize,
  },
  externals: {
    osjs: 'OSjs'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'html5-wolfenstein3D', to: 'html5-wolfenstein3D'},
      {from: 'icon.png', to: 'icon.png'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
