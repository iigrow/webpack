var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: './index.js',
  output: {
    path: 'build',
    filename: '[name].js'
  },
  plugins: [new UglifyJsPlugin({
    mangle: {
      except: ['$', 'exports', 'require']
    }
  })]
}
