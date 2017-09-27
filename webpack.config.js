module.exports = {
    entry: [
        './source/App.js'
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, //match .js or .jsx files ?= 0 or 1
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devServer: {
        // contentBase: "./source", //get files from where
        historyApiFallback: true,
        inline: true,
        //heroku sets the port dynamically so use the port defined in the process instead
        port: process.env.PORT
    }
};