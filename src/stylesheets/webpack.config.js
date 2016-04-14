var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: 'build',
        filename: '[name].js'
    },
    module: {
        loaders: [{ test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader!less-loader') }]
    },
    plugins: [new ExtractTextPlugin('[name].css')]
}