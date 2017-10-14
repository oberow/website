const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: [
        './source/App.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.jsx?$/, //match .js or .jsx files ?= 0 or 1
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'source/index.template.ejs',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: "./dist", //get files from where
        historyApiFallback: true,
        inline: true,
        //heroku sets the port dynamically so use the port defined in the process instead
        // port: process.env.PORT
    }
};