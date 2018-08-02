const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'examples/index.jsx'),
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // enforce: 'pre',
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: { minimize: true },
        },
      },
      {
        test: /\.ttf$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 50000,
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
      {
        oneOf: [
          {
            exclude: [/\.(js|jsx)$/, /\.html$/, /\.scss$/, /\.json$/],
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '*'],
    modules: ['node_modules', path.resolve(__dirname, 'examples'), path.resolve(__dirname, 'src')],
    alias: {
      'react-progressive-entrance': path.resolve(__dirname, 'src/index.js'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './examples/index.html'),
    }),
  ],
  devServer: {
    port: 9000,
    publicPath: '/',
    host: '0.0.0.0',
    historyApiFallback: true,
  },
}
