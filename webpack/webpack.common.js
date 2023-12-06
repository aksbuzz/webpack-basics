const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')

module.exports = {
  // ENTRY POINT
  entry: {
    main: paths.src + '/index.js',
  },
  // OUTPUT - The [name] in the output will be
  // 'main', as specified in the entry object.
  output: {
    path: paths.output,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    // removes build folders when rebuilding
    new CleanWebpackPlugin(),
    // copies files from target to destination
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: paths.src + '/index.html', // input file
      filename: 'index.html', // output file
    }),
  ],

  module: {
    rules: [
      // Javascript. Use babel to transpile
      { test: /\.js$/, use: ['babel-loader'] },

      // Images - a type and not a loader
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource', // built-in
      },

      // Fonts, SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}
