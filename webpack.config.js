'use strict';

var dependency = [
    'angular',
    'angular-ui-router',
    'angular-resource',
    'angular-mocks',
    'angular-animate',
    'httpbackend',
    'jquery',
    'lodash',
    'bootstrap',
    'angular-bootstrap',
];

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.module',
        vendor: dependency
    },
    output: {
        path: __dirname + '/web/',
        filename: '[name].budle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.css', '.html'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                query: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([
                {
                    context: __dirname + '/app/',
                    from: '**/*.html',
                    to: __dirname + '/web/app/'
                },
                {
                    context: __dirname,
                    from: 'index.html',
                    to: __dirname + '/web/'
                },
                {
                    context: __dirname + '/app/',
                    from: '**/*.json',
                    to: __dirname + '/web/app/'
                },
            ],
            {
                copyUnmodified: true
            }),
        new ExtractTextPlugin('styles.bundle.css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '__': 'lodash'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            beautify: true,
            mangle: false
        }),
        new webpack.optimize.DedupePlugin()
    ],
    devServer: {
        contentBase: './web',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        inline: true,
        historyApiFallback: true
    }
};
