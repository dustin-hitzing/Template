var webpack = require('webpack');

module.exports = {
    entry: './app.tsx',
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        inline: true,
        contentBase: './build',
        port: 8080
    },
    resolve: {
        extensions: ["",".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ],
        preLoaders: [
           { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}

