const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '/src/app.ts'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  module: {
    rules: [{ 
      test: /\.ts|js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-typescript', '@babel/preset-env'],
          plugins: ['@babel/plugin-transform-typescript'],
        },
      },
    }],
  },
};