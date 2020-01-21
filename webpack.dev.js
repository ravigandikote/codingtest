const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const Dotenv = require('dotenv-webpack')
const common = require('./webpack.common.js')

const plugins = [
  new Dotenv(),
  new HtmlWebPackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    favicon: 'src/assets/images/logo.png',
    filename: './index.html'
  }),
  new webpack.DefinePlugin({
    'process.env.API_BASE_URL': JSON.stringify(
      'https://content.guardianapis.com/'
    ),
    'process.env.API_KEY': JSON.stringify(
      '360c3597-78d5-4a80-9998-2042b859578f'
    )
  })
]

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: plugins,
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
})
