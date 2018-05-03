const webpack = require("webpack")
const path = require("path")
const webpackConfigBase = require("./webpack.base.config")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const merge = require("webpack-merge")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const NODE_ENV = process.env.NODE_ENV
const DEVICE_TYPE = process.env.NODE_DEVICE

const BUILD_DEVICE_PATH = path.resolve(__dirname, `../build/${DEVICE_TYPE}`)
const SRC_DEVICE_PATH = path.resolve(__dirname, `../src/${DEVICE_TYPE}`)
const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')

const webpackConfigProd = {
    mode: "production",
    entry:{
        xfnidx: [path.resolve(APP_PATH, 'containers/index')] //入口文件
    },
    plugins:[
        new CleanWebpackPlugin(["build/desktop"],{
            root: path.join(__dirname, "../")
        })
    ],
    optimization: {
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
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: false
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}

module.exports = merge(webpackConfigBase, webpackConfigProd);
