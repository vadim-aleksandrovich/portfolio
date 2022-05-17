
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {cleanWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './js/index.js',
    analytics: './js/analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
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
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use:['file-loader']
      }
    ]
  }
}