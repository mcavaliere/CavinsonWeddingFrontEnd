import webpack from 'webpack';
import path from 'path';
import Bourbon from 'bourbon';

export default {
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
       debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'API_HOST': JSON.stringify('http://localhost:5000')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [
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
    //   { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + JSON.stringify(bourbon)},
      {test: /\.scss$/, use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader", options: {
              includePaths: [
                  Bourbon.includePaths,
                  "node_modules/bootstrap-sass/assets/stylesheets"
              ]
          }}
      ]},
      {test: [
          /animation\.gsap\.js/,
          /ScrollMagic\.js/,
          /TweenMax\.js/,
          /TimelineMax\.js/
      ], use: 'imports-loader?define=>false'},
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: ['babel-loader']},
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=public/fonts/[name].[ext]'
      },
    //   {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file'},
    //   {test: /\.(woff|woff2)$/, use: 'url?prefix=font/&limit=5000'},
    //   {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url?limit=10000&mimetype=application/octet-stream'},
    //   {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  // resolve: {
  //   alias: {
  //       "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
  //       "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
  //       "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
  //       "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
  //       "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
  //       "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
  //       "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
  //   }
  // },
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./src/scss")]
  // }
};
