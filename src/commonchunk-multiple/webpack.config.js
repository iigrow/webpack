var CommonChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
module.exports = {
    entry: {
        a: './a',
        b: './b',
        c: './c'
    },
    output: {
        path: 'build',
        filename: '[name].js'
    },
    plugins: [
        new CommonChunkPlugin('common1.js', ['a', 'b']),
        new CommonChunkPlugin('common2.js', ['a', 'c'])
    ]
}