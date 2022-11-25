const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const EnvironmentPlugin = webpack.EnvironmentPlugin;

const packageJson = require('../../package.json');

require('dotenv').config();

module.exports = {
    entry: {
        home: path.resolve(process.cwd(), 'src', 'entry-points', 'home', 'index.tsx'),
        region: path.resolve(process.cwd(), 'src', 'entry-points', 'region', 'index.tsx')
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: 'javascript/auto',
                resolve: {
                    fullySpecified: false
                }

            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/home.html',
            filename: 'home.html',
            inject: true,
            chunks: ['home'],
            excludeChunks: ['region']
        }),
        new HtmlWebpackPlugin({
            template: './html/region.html',
            filename: 'region.html',
            inject: true,
            chunks: ['region'],
            excludeChunks: ['home']
        }),
        new EnvironmentPlugin({ ...process.env })
    ],
    output: {
        clean: true,
        publicPath: 'auto',
        path: path.resolve(process.cwd(), 'build-static'),
        filename: '[name].bundle.js'
    }
};