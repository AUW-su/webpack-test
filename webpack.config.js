const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // name 占位符
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: "babel-loader",
        }]

    }
}