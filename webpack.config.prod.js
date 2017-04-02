const path = require('path')
const webpack = require('webpack')
import Bourbon from 'bourbon';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    // publicPath: '/public/'
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
   }),
   new ExtractTextPlugin("styles.css"),
   new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery"
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

        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            //resolve-url-loader may be chained before sass-loader if necessary
            use: [
                {loader: 'css-loader'},
                {loader: 'sass-loader', options: {
                    includePaths: [
                        Bourbon.includePaths,
                        "node_modules/bootstrap-sass/assets/stylesheets"
                    ]
                }}
            ]
          })
      },

      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              {loader: "file-loader", options: {'name': 'images/[name].[ext]'}},
              {loader: "image-webpack-loader", options: {
                  progressive: true,
                  optimizationLevel: 8,
                  interlaced: false,
                  pngquant: {
                    quality: '65-90',
                    speed: 4
                  }
              }}
          ]
      },

      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: 'file-loader'}
    ]
  }
}
