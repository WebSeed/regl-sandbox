const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const srcDir = path.resolve(__dirname, 'src')
const distDir = path.resolve(__dirname, 'dist')

const config = {
  context: srcDir,
  entry: {
    main: './index.js'
  },
  output: {
    path: distDir,
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.glsl']
  },
  module: {
    rules: [
      {
        test: /\.glsl$/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        include: [srcDir],
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanPlugin([distDir]),
    new HtmlPlugin({
      template: `${srcDir}/index.html`
    })
  ],
  devServer: {
    contentBase: '/'
  },
  devtool: 'cheap-module-source-map'
}

module.exports = config
