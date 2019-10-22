const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/bundle/'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",//ES6转ES5
                options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"] //babel-loader需要的预设
                }
            }

        ]
    }
}