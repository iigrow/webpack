var glob = require('glob');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  contextbase: '/src',
  entry: getEntry(),
  output: {
    path: 'build',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!less-loader') }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css")
  ],
  resolve: {
    // alias:{},
    // root: []
  }
}

function getEntry() {
  var entry = {};
  glob.sync('src/js/*.js').forEach(function(name) {
    var n = name.slice(name.lastIndexOf('js/') + 3, name.length - 3);
    entry[n] = [path.resolve(__dirname, name.split('.js')[0])]
  });
  console.log(entry);
  return entry;
}