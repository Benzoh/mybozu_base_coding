const path = require('path');

module.exports = {
  entry: './_assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/_assets/js/dist')
  }
};