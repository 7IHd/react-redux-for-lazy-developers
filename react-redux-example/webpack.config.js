const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js/build')
    },
    module: { // Loaders apply transformations before a file is added to the bundle
        loaders: [
            {
                test: /\.js$/, // transform all .js files
                exclude: /node_modules/, // except for node_modules
                loader: 'babel-loader', // apply the babel-loader to compile
                query: {
                    presets: ['react', 'es2015'] // load the react, es2015 babel presets
                }
            }
        ]
    }
}