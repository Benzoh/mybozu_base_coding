const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './_assets/js/index.js',
  output: {
    path: path.resolve(__dirname, '_assets', 'js', 'dist'),
    filename: './bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};