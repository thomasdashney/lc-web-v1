const config = require('config')
const fs = require('fs')
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const S3Plugin = require('webpack-s3-plugin')

const environment = process.env.NODE_ENV || 'development'

// https://github.com/lorenwest/node-config/wiki/Webpack-Usage
const configPath = resolve(__dirname, 'config.json')
fs.writeFileSync(configPath, JSON.stringify(config))

const appStyleRules = {
  test: /\.scss$/,
  include: resolve(__dirname, 'src'),
  use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[path][name]__[local]_[hash:base64:5]'
      }
    },
    'sass-loader'
  ]
}

const vendorStyleRules = {
  test: /\.css$/,
  include: resolve(__dirname, 'node_modules'),
  use: ['css-loader']
}

const webpackConfig = {
  entry: [
    './index.js'
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      config: configPath,
      app: resolve(__dirname, 'src/app'),
      services: resolve(__dirname, 'src/services'),
      shared: resolve(__dirname, 'src/shared')
    },
    modules: ['node_modules']
  },
  context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      appStyleRules,
      vendorStyleRules
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
      favicon: resolve(__dirname, './src/favicon.ico')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
}

if (environment === 'development') {
  webpackConfig.output.filename = 'bundle.js'
  webpackConfig.devtool = 'eval'
  webpackConfig.devServer = {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    port: 8080
  }
  webpackConfig.entry.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080'
  )
  webpackConfig.plugins.push(new webpack.NamedModulesPlugin())

  // use style-loader in development for hot module reloading
  ;[appStyleRules, vendorStyleRules].forEach(rules => {
    rules.use.unshift('style-loader')
  })
} else {
  webpackConfig.output.filename = '[name].[chunkhash].js'
  webpackConfig.output.sourceMapFilename = '[name].[chunkhash].map'
  webpackConfig.devtool = 'source-map'

  // extract css to files
  const extractAppCss = new ExtractTextPlugin('app.[chunkhash].css')
  const extractVendorCss = new ExtractTextPlugin('vendor.[chunkhash].css')
  appStyleRules.use = extractAppCss.extract({
    use: appStyleRules.use,
    fallback: 'style-loader'
  })
  vendorStyleRules.use = extractVendorCss.extract({
    use: vendorStyleRules.use,
    fallback: 'style-loader'
  })
  webpackConfig.plugins.push(extractAppCss, extractVendorCss)

  // extract vendor modules to common bundle
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  )

  // minify bundles
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })

  )

  const { aws: AWSConfig } = config

  if (AWSConfig) {
    webpackConfig.plugins.push(
      new S3Plugin(Object.assign({}, AWSConfig, {
        s3Options: {
          accessKeyId: AWSConfig.accessKey,
          secretAccessKey: AWSConfig.secretAccessKey,
          region: AWSConfig.region
        },
        s3UploadOptions: {
          Bucket: AWSConfig.bucket
        },
        cloudfrontInvalidateOptions: {
          DistributionId: AWSConfig.cloudfrontDistributionId,
          Items: ['/index.html']
        }
      }))
    )
  }
}

module.exports = webpackConfig
