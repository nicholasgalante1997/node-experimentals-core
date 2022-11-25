const path = require('path');
const webpack = require('webpack');

const EnvironmentPlugin = webpack.EnvironmentPlugin;

require('dotenv').config();

module.exports = {
    entry: path.resolve(process.cwd(), 'compile-static-markup.tsx'),
    mode: 'production',
    target: 'node',
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
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        fallback: {
            "fs": false,
            "path": false
        },
    },
    plugins: [
        new EnvironmentPlugin({ ...process.env })
    ],
    output: {
        clean: true,
        path: path.resolve(process.cwd(), '.generated-markup'),
        filename: 'compile-static-markup.js'
    }
};