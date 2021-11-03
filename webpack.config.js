

var path = require('path');
let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let entry = path.resolve(__dirname, './src/index.js')
module.exports = {
  entry,
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              [
                '@babel/preset-env',
                {
                  modules: 'auto',
                  targets: {
                    esmodules: true,
                    node: 'current',
                  },
                },
              ],
            ],
            plugins: [
              require('@babel/plugin-proposal-optional-chaining')
            ]
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: path.join(__dirname, './scripts/ts.js'),
            },
          }

        ]
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        include: [/\.module\.less$/],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          },
        ],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
  },
};
