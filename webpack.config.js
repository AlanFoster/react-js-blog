module.exports = {
  entry: [
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
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000
  }
};
