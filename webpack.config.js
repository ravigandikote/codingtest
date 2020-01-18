const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  performance: {
    hints: false
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
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
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.svg', 'jpg'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      container: path.resolve(__dirname, 'src/components/container'),
      routes: path.resolve(__dirname, 'src/routes'),
      components: path.resolve(__dirname, 'src/components'),
      src: path.resolve(__dirname, 'src'),
      store: path.resolve(__dirname, 'src/store')
    }
  }
}
