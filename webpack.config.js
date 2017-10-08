const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'watan': './src/client/index.ts',
        'watan.min': './src/client/index.ts'
    },
    output: {
        path: path.resolve('dist/client/bundle'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'watan',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        loaders: [
            { test: /pixi\.js/, loader: 'expose-loader?PIXI' },
            { test: /phaser-split\.js$/, loader: 'expose-loader?Phaser' },
            { test: /p2\.js/, loader: 'expose-loader?p2' },
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader?configFileName=tsconfig.client.json'},
        ]
    },
    externals: {
        "Phaser": "Phaser",
        "socket.io-client": "socket.io-client"
    },
    resolve: {
        alias: {
            'pixi': path.resolve('node_modules/phaser-ce/build/custom/pixi.js'),
            'p2': path.resolve('node_modules/phaser-ce/build/custom/p2.js'),
            'phaser': path.resolve('node_modules/phaser-ce/build/custom/phaser-split.js'),
        }
    }
}