const path = require('path');

module.exports = {
    entry: path.resolve(process.cwd(), 'src', 'client', 'index.jsx'),
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
        path: path.resolve(process.cwd(), 'client-dist'),
        filename: 'bundle.js'
    }
};