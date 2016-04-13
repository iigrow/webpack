var CommonChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        a: './a',
        b: './b'
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    plugins: [
        new CommonChunkPlugin('common.js')
    ]
}