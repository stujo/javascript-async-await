module.exports = {
    entry: ['./src/index.js'],
    target: 'node',
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [
            {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader'
            },
            { test: /\.json$/, loader: "json-loader"}
        ]
    }
};