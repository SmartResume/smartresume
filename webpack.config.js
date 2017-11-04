const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('./dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SmartResume',
      template: './src/template.html'
    })
  ]
}