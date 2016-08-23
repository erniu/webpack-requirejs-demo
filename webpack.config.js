var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: {
        pageA: "./js/app/main1",
        pageB: "./js/app/main2",
        common: ['./js/lib/jquery.js', './js/lib/require.js']
    },
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, 'js/lib/jquery')
        }
    },
    externals: {
        jquery: 'jQuery'
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js')
    ]
};

