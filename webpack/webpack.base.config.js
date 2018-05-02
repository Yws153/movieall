const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//html插件，需要安装依赖项 npm install htmp-webpack-plugin --save-dev
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//压缩css文件

const NODE_ENV = process.env.NODE_ENV
const DEVICE_TYPE = process.env.NODE_DEVICE

if (DEVICE_TYPE !== 'mobile' && DEVICE_TYPE !== 'desktop') {
  throw new Error('you should set device type, such as NODE_DEVICE=mobile | desktop')
}

const BUILD_DEVICE_PATH = path.resolve(__dirname, `../build/${DEVICE_TYPE}`)
const SRC_DEVICE_PATH = path.resolve(__dirname, `../src/${DEVICE_TYPE}`)
const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')

module.exports = {
    // entry:{
    //     xfnidx: [path.resolve(APP_PATH, 'index')], //入口文件
    //     xfnpkg: [
    //         'react',
    //         'react-dom'
    //     ]
    // },
    output:{
        path: BUILD_DEVICE_PATH, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '../', //模板、样式、脚本、图片等资源对应的的路径
        filename: 'js/[name].js' //每个页面对应的主js的生成配置
           // chunkFilename: 'js/[id].chunk.js' //chunk生成的配置
    },
    resolve:{
        extensions:['.js','.jsx','json','.css'], //需要编译的文件类型
    },
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'     //jsx js转码配置
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader'], //css转码，需要安装依赖项css-loader

            },
            {
                test: /\.(less|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Sass to CSS
                    }
                ]

            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            // {
            //     test: /\.(ico)$/,
            //     use:"raw-loader", //加载ico文件
            // },
            {
                test:/\.(svg|png)$/,
                use:'file-loader', //加载文件
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: './app/index.html',
            template: path.resolve(SRC_DEVICE_PATH, 'template/template.html'),
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}

// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//
// const DEVICE_TYPE = process.env.NODE_DEVICE
//
// if (DEVICE_TYPE !== 'mobile' && DEVICE_TYPE !== 'desktop') {
//   throw new Error('you should set device type, such as NODE_DEVICE=mobile | desktop')
// }
//
// const BUILD_DEVICE_PATH = path.resolve(__dirname, `build/${DEVICE_TYPE}`)
// const SRC_DEVICE_PATH = path.resolve(__dirname, `src/${DEVICE_TYPE}`)
// const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')
//
// const config = {
//
//     mode: 'production',
//     entry: {
//         xfnidx: [path.resolve(APP_PATH, 'index')]
//     },
//     output: {
//         path: BUILD_DEVICE_PATH, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
//         publicPath: '../', //模板、样式、脚本、图片等资源对应的的路径
//         filename: 'js/[name].js' //每个页面对应的主js的生成配置
//             // chunkFilename: 'js/[id].chunk.js' //chunk生成的配置
//     },
//     module: {
//         rules: [
//             { test: /\.jsx?$/, use: 'babel-loader' }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: './app/index.html',
//             template: path.resolve(SRC_DEVICE_PATH, 'template/template.html'),
//             inject: 'body',
//         })
//     ],
//     optimization: {
//         minimizer: [
//             new UglifyJsPlugin({
//                 uglifyOptions: {
//                     compress: false
//                 }
//             })
//         ]
//     },
// }
//
// module.exports = config
