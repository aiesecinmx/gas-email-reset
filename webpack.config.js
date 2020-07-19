const GasPlugin = require('gas-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app.ts',
  output: {
    filename: 'Code.js',
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
    ],
  },
  plugins: [
    new GasPlugin(),
  ],
};