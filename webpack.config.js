const path = require('path');
const OctoWebpackPlugin = require('@octopusdeploy/octo-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new OctoWebpackPlugin({
            apikey: "blah",
            host: "http://localhost"
        })
    ]
};
