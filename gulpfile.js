var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var sync = require('run-sequence');
var gutil = require('gulp-util');
var serve = require('browser-sync');
var webpackDevMiddelware = require('webpack-dev-middleware');
var webpachHotMiddelware = require('webpack-hot-middleware');
var colorsSupported = require('supports-color');
var historyApiFallback = require('connect-history-api-fallback');

var root = 'src';

var resolveToApp = function(glob){
   return path.join(root, 'app', glob);
}

var paths = {
  js: resolveToApp('**/*.js'),
  css:resolveToApp('styles/*.css'),
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: [
    path.join(__dirname, root, 'app/app.js')
  ],
  output: root,
  dest: path.join(__dirname, 'dist')
}

gulp.task('serve' , function(){
  var config = require('./webpack.dev.config');
  config.entry.app = [
   // this modules required to make HRM working
   // it responsible for all this webpack magic
   'webpack-hot-middleware/client?reload=true',
   // application entry point
 ].concat(paths.entry);
 var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: root},
    middleware: [
      historyApiFallback(),
      webpackDevMiddelware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpachHotMiddelware(compiler)
    ]
  });
});
