var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    switchboard: './src/index.js'
  },
  output: {
    path: path.resolve('build'),
    filename: 'content.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.json',
        to: 'manifest.json'
      }
    ])
  ]
};
