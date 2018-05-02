const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");//文件合并
const webpackConfigBase = require("./webpack.base.config");
const openBrowserPlugin = require('open-browser-webpack-plugin');//在浏览器中打开程序

const NODE_ENV = process.env.NODE_ENV
const DEVICE_TYPE = process.env.NODE_DEVICE

const BUILD_DEVICE_PATH = path.resolve(__dirname, `../build/${DEVICE_TYPE}`)
const SRC_DEVICE_PATH = path.resolve(__dirname, `../src/${DEVICE_TYPE}`)
const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')

const webpackConfigDev = {
    mode:'development',
    entry:{
        xfnidx: [
            'webpack/hot/only-dev-server',
            'webpack-dev-server/client?http://localhost:3800',
            path.resolve(APP_PATH, 'index')
        ], //入口文件
        xfnpkg: [
            'react',
            'react-dom'
        ]
    },
    plugins:[
        // new openBrowserPlugin({url:"http://localhost:3800/build/desktop/app/index.html"}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
        // new webpack.HotModuleReplacementPlugin({
        //     multiStep: true
        // }),
    ],
    resolve: {
        alias: {
            app: APP_PATH
        },
        extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg']
    },
    devServer:{
        // historyApiFallback: true,
        // contentBase: path.join(__dirname, "../"),
        publicPath: `/build/${DEVICE_TYPE}`,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3800
    }
}
module.exports = merge(webpackConfigBase, webpackConfigDev);
