var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BowerWebpackPlugin = require("bower-webpack-plugin");
module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },//{ test: /\.html$/, loader: 'file?name=templates/[name]-[hash:6].html' },
      { test: /\.css$/, loader: 'style!css' },
      //method1
      { test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=[name].[ext]" }
      //method2
      // {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      // {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      // {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      // {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    }),
    new BowerWebpackPlugin({
      modulesDirectories: ["bower_components"],
      manifestFiles: "bower.json",
      includes: /.*/,
      excludes: [],
      searchResolveModulesDirectories: false
    }),
    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    })
  ]
};
