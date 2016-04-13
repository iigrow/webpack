var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  contextbase: '/src',
  entry: getEntry(),
  output: {
    path: 'build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader:'style-loader!css-loader!less-loader' }
    ]
  },
  plugins: [
    // new ExtractTextPlugin("css/[name].css",{allChunks:false}),
    new CommonsChunkPlugin({
      name: 'js/common/name'
    })
  ],
  resolve: {
    // alias:{},
    // root: [],
    modulesDirectories:['src/js']
  }
}

function getEntry() {
  var entry = {};
  glob.sync('src/js/*.js').forEach(function(name) {
    var n = name.slice(name.lastIndexOf('js/') + 3, name.length - 3);
    entry[n] = [path.resolve(__dirname, name.split('.js')[0])]
  });
  return entry;
}