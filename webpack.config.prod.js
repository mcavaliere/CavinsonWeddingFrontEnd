const path = require('path')
const webpack = require('webpack')

export default {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_HOST': JSON.stringify('https://cav-wedding-api-prod.herokuapp.com/')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        include: path.join(__dirname, 'src')
        use: ['babel-loader'],
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        use: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles') },
      { test: /\.png$/,
        use: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file'}
    ]
  }
}
