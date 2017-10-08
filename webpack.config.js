const webpack = require('webpack');
const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
    entry: {
        app: [
            path.resolve('./src/client/index.ts')
        ],
        vendor: ['pixi', 'p2', 'phaser', 'socket.io-client']
    },
    output: {
        path: path.resolve('dist/client/bundle'),
        filename: '[name].bundle.js',
        //libraryTarget: 'umd',
        //library: 'watan',
        //umdNamedDefine: true
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor'/* chunkName= */, 
            filename: 'vendor.bundle.js', /* filename= */
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            comments: false,
            include: /\.js$/,
        })
    ],
    module: {
        rules: [
            { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
            { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
            { test: /p2\.js/, use: ['expose-loader?p2'] },
            { test: [/\.ts/, /\.tsx/], use: 'awesome-typescript-loader?configFileName=tsconfig.client.json'},
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
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    }
}