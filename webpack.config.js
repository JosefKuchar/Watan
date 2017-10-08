const webpack = require('webpack');
const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
    entry: {
        'watan': './src/client/index.ts',
        'watan.min': './src/client/index.ts',
        vendor: ['pixi', 'p2', 'phaser']
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
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ],
    module: {
        rules: [
            { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
            { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
            { test: /p2\.js/, use: ['expose-loader?p2'] },
            { test: /socket\.io\.js/, use: 'expose-loader?socket.io-client'},
            { test: /\.tsx?$/, use: 'awesome-typescript-loader?configFileName=tsconfig.client.json'},
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      },
    resolve: {
        alias: {
          'phaser': phaser,
          'pixi': pixi,
          'p2': p2
        }
    }
}