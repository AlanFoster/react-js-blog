var webpack = require('webpack');
const DEV_PORT = 3000;

module.exports = {
  entry: [
    `webpack-dev-server/client?http://0.0.0.0:${DEV_PORT}`,
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
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
