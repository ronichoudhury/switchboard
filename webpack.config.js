var path = require('path');

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
  }
};
