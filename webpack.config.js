const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main/js/ngCropperjs.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
};