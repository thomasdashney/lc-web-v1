const config = require('config')
const fs = require('fs')
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://github.com/lorenwest/node-config/wiki/Webpack-Usage
const configPath = resolve(__dirname, 'config.json')
fs.writeFileSync(configPath, JSON.stringify(config))

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      config: configPath
    },
    modules: ['src/modules', 'node_modules']
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html')
    })
  ]
}
