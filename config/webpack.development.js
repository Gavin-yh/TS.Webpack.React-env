let webpack = require('webpack')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
module.exports = {
    devServer: {
        hot: true,
        contentBase: './dist',
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),  //友好的错误提示信息，当出错时
        new WebpackBuildNotifierPlugin({
            title: "My Project Webpack Build",
            // logo: path.resolve("./img/favicon.png"),
            suppressSuccess: true
        })
        // new webpack.HotModuleReplacementPlugin()  针对css 模块更新会比较友好
    ]
}