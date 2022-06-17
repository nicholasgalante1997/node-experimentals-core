const path = require('path');

module.exports = {
    entry: path.resolve(process.cwd(), 'src', 'server', 'index.js'),
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
        path: path.resolve(process.cwd(), 'server_dist'),
        filename: 'server.node.js'
    },
    target: 'node',
    node: {
        global: false,
    }
};