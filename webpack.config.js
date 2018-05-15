const path = require('path')

module.exports = {
  mode: 'none',
  entry: './_assets/js/index.js',
  output: {
    path: path.resolve(__dirname, '_assets', 'js', 'dist'),
    filename: './bundle.js',
  }
};