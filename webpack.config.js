const path = require('path');
const PugPlugin = require('pug-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
    },
    plugins: [
        new PugPlugin({
            pretty: 'auto',
            entry: {
                index: 'src/pug/template.pug',
            },
            js: {
                filename: 'js/[name].[contenthash:8].js',
            },
            css: {
                filename: 'css/[name].[contenthash:8].css',
            },
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(ico|png|jp?g|webp|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext][query]',
                }
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        watchFiles: {
            paths: ['src/**/*.*', 'assets/**/*.*'],
            options: {
                usePolling: true
            }
        },
        hot: true,
    },
}