var webpack = require('webpack');
const DEV_PORT = process.env.port || 3000;
const DEV_HOST = '127.0.0.1';

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${DEV_HOST}:${DEV_PORT}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },
  devServer: {
    contentBase: './dist',
    port: DEV_PORT,
    host: DEV_HOST,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
