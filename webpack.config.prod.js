const path = require('path')
const webpack = require('webpack')
import Bourbon from 'bourbon';

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
    rules: [
    {test: [
        /animation\.gsap\.js/,
        /ScrollMagic\.js/,
        /TweenMax\.js/,
        /TimelineMax\.js/
    ], use: 'imports-loader?define=>false'},
      { test: /\.js?$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader'],
        exclude: /node_modules/ },
      { test: /\.scss$/, use: [
        {loader: "style-loader"},
        {loader: "css-loader"},
        {loader: "sass-loader", options: {
            includePaths: [
                Bourbon.includePaths,
                "node_modules/bootstrap-sass/assets/stylesheets"
            ]
        }}
      ] },
      {test: /\.(jpe?g|png|gif|svg)$/i, use: "file-loader?name=images/[name].[ext]"},
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: 'file-loader'}
    ]
  }
}
