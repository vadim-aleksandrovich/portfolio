target: 'web'
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {cleanWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpack = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimiseCssAssetsPlugin(),
      new TerserWebpack()
    ]
  }
  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/index.js',
    analytics: './js/analytics.js',
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@certificates': path.resolve(__dirname, 'src/assets/images/certificates'),
      '@links': path.resolve(__dirname, 'src/assets/images/links'),
      '@projects': path.resolve(__dirname, 'src/assets/images/projects'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@content': path.resolve(__dirname, 'src/js/content'),
      '@elements': path.resolve(__dirname, 'src/js/elements'),
      '@utils': path.resolve(__dirname, 'src/js/utils'),
    }
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname,'src/assets'), to: path.resolve(__dirname, 'dist/assets') }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
          },
        },
        'css-loader',
        'sass-loader'
      ]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use:['file-loader']
      }
    ]
  }
}