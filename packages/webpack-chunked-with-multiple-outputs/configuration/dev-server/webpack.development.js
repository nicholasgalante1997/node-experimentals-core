const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const EnvironmentPlugin = webpack.EnvironmentPlugin;

require('dotenv').config();

module.exports = {
    entry: {
        app: path.resolve(process.cwd(), 'src', 'entry-points', 'development.tsx')
    },
    mode: 'development',
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
            template: './html/development.html',
        }),
        new EnvironmentPlugin({ ...process.env })
    ],
    devServer: {
        port: 4040,
        hot: true,
        https: false,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    }
};