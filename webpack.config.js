/* eslint-disable no-undef */

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
const config = {
  mode,
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    hot: true,
    compress: false,
    port: 3000,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/detail\/index.js$/,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          to: function (context) {
            return 'index.js';
          },
        },
        {
          from: /^\/detail\/.$/,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          to: function (context) {
            return 'index.html';
          },
        },
      ],
    },
  },
  devtool: mode === 'development' ? 'source-map' : undefined,
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: { modules: true }
          },]
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
export default config;

