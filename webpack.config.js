const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {proxyPort, apiServer} = require("./bin/config");
module.exports = {
    cache:true,
    devtool: 'cheap-module-source-map',
    entry: {
        production: path.resolve(__dirname, './views/app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx','.ts','.tsx'],
        alias: {
            '@':path.resolve(__dirname,'views'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react','@babel/preset-typescript'],
                        }
                    }
                    ,'ts-loader'],
                include: [path.resolve(__dirname, 'views')],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env','@babel/preset-react','@babel/preset-typescript'],
                        }
                    }
                    ,'ts-loader'],
                include: [path.resolve(__dirname, 'views')],
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                       presets:['@babel/preset-env','@babel/preset-react']
                    },
                },
                include: [path.resolve(__dirname, 'views')],
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'views'),path.resolve(__dirname, 'node_modules/@wangeditor'),path.resolve(__dirname, 'node_modules/swiper')],
                use: ['style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:false,
                        }
                    },
                ],
            },
            { test: /\.less$/, exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            modules:true,
                        }
                    },
                    {
                        loader: "less-loader",
                        options:{},
                    },
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'asset/[name].[ext]',
                            esModule:false
                        },
                    },
                ],
            },
        ],
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './views/index.ejs'),
            inject: 'body',
            hase: true,
            minify: {
                // 压缩HTML文件
                removeComments: false,      // 移除HTML中的注释
                collapseWhitespace: false,  // 删除空白符与换行符
            },
            chunks: ['production'],
        }),
    ],
    devServer: {
        port: proxyPort,                            // 前端代理端口
        static: path.resolve(__dirname, 'dist'),    // 临时的打包目录（在内存中）
        historyApiFallback: true,                   // 启用历史API回退
        hot: true,
        open: true,
        compress:false,
        client:{
            overlay:{
                runtimeErrors:(error)=> error.message !== "ResizeObserver loop limit exceeded"
            }
        },
        proxy:{
            '/api':{
                target: `${apiServer}`,             // 后端服务地址
                changeOrigin: true,
            },
            '/services':{
                target: `${apiServer}`,             // 后端服务地址
                changeOrigin: true,
            }
        }
    }
};
