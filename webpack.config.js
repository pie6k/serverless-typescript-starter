var path = require('path');

module.exports = {
  entry: './src/handler.ts',
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: 'handler.js',
  },
  target: 'node',
  module: {
    loaders: [{ test: /\.ts(x?)$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', ''],
  },
};

// module.exports = {
//   entry: './src/handler.ts',
//   output: {
//     filename: 'handler.js',
//     path: path.join(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         loader: 'ts-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
// };
