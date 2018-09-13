const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
//过滤不用的CSS,暂时无法用
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
let obj = {
    mode: 'development', //设置模式（开发/生产）
    entry: {
        app:'./2.js'
    },
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [ 'style-loader', 'css-loader' ],
                // use:ExtractTextPlugin.extract({
                //     fallback:"style.loader",
                //     use:"css-loader"
                // }),
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },        
        ]
    } ,
    plugins: [
        // new ExtractTextPlugin("1.css"),
        new MiniCssExtractPlugin({
            filename: "1.css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: './wp.html',
            minify:{
                removeAttributeQuotes:true, //去掉引号
                collapseWhitespace:true, //去掉空格
            }
        }),
        new OpenBrowserPlugin({url:'http://localhost:3000'}), //自动打开一个浏览器窗口
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new PurifyCSSPlugin({
        //     paths:glob.sync(path.join(__dirname,'./*.html')),
        // })             
    ],
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        compress:true,
        port:3000,
        hot:true
    }
};
module.exports = obj;