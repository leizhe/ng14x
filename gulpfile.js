var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var gutil = require('gulp-util');
var serve = require('browser-sync');
var webpackDevMiddelware = require('webpack-dev-middleware');
var webpachHotMiddelware = require('webpack-hot-middleware');
var colorsSupported = require('supports-color');
var historyApiFallback = require('connect-history-api-fallback');
var del = require('del');
var root = 'src';

var resolveToApp = function(glob){
   return path.join(root, 'app', glob);
}

var paths = {
  js: resolveToApp('**/*.js'),
  css:resolveToApp('**/*.css'),
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

gulp.task('webpack', ['clean'], (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

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

gulp.task('watch', ['serve']);

gulp.task('clean', (cb) => {
  del([paths.dest]).then(function (paths) {
    gutil.log("[clean]", paths);
    cb();
  })
});

gulp.task('default', ['watch']);
