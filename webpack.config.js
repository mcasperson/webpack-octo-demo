const path = require('path');
const OctoWebpackPlugin = require('@octopusdeploy/octo-webpack-plugin')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new OctoWebpackPlugin({
            apikey: "blah",
            host: "http://localhost",
            replace: true,
            type: 'zip'
        })
    ]
};
