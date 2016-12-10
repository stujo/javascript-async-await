module.exports = {
    entry: ['babel-polyfill', "./src/01-example-async-await.js"],
    output: {
        path: __dirname,
        filename: "build/bundle.js"
    },
    module: {
        loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }]
    }
};