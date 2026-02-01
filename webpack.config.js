const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: './app/index.js',

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html', // optional but recommended
    }),
    new ESLintPlugin(),
     new StylelintPlugin({
      files: "**/*.{css,scss}"
    }),
  ],

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
