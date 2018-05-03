const webpack = require("webpack")
const path = require("path")
const webpackConfigBase = require("./webpack.base.config")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const merge = require("webpack-merge")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const DEVICE_TYPE = process.env.NODE_DEVICE

const BUILD_DEVICE_PATH = path.resolve(__dirname, `../build/${DEVICE_TYPE}`)
const SRC_DEVICE_PATH = path.resolve(__dirname, `../src/${DEVICE_TYPE}`)
const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')

const webpackConfigProd = {
    mode: "production",
    entry:{
        xfnidx: [path.resolve(APP_PATH, 'containers/index')], //入口文件
        xfnpkg: [
            'antd',
            'react',
            'react-dom'
        ]
    },
    plugins:[
        new CleanWebpackPlugin(["build"],{
            root: path.join(__dirname, "../")
        }),
        // new ExtractPlugin('styles.[contentHash:8].css')
        // new webpack.optimize.CommonsChunkPlugin("xfnpkg", 'js/[name].js', Infinity)
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'xfnpkg',
                    priority: 10,
                    enforce: true
                }
            }
        }
    }
}

module.exports = merge(webpackConfigBase, webpackConfigProd);
