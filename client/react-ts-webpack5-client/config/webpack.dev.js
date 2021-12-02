const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// 优化输出日志
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HOST = 'localhost';
const PORT = 3304;

// https://github.com/wgm7512/react-router-dom-v6-example
/**
 * 在我们引入antd之后，发现 Webpack 编译报错"Module build failed"
 *
 * 我们根据报错中的 issue 地址去找解决方案，有方案说Less加上javascriptEnabled即可，设置完成后重启项目并观察界面效果，但是我们发现 Antd 还是没有样式，那么我们继续查找 issue。
 *
 * 因为我们的 webpack 项目配置了 css-modules ，它会将 Ant 的样式模块化前缀及哈希化处理，导致样式不匹配.
 * 因此建议 CSS 模块化配置将 node_modules 目录文件 exclude 掉，不要让它们走 CSS Modules
 * 换句话说，就是让 antd 的 less 不通过 css-module-loader，只让项目自己的 less 文件通过 css-module-loader
 *
 * 正确的配置如下
 */

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/i,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
              // 热更新加载器
              'react-refresh/babel',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 热更新插件
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/],
    }),
    // 使用fork-ts-checker-webpack-plugin 让 Webpack 构建过程支持类型检查。这意味着 Webpack 会通知我们任何类型相关的错误
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    // 使用 ESLintPlugin 来使 Webpack 构建过程能够使用 ESLint 进行代码规范校验
    // 比如：'unused' is declared but its value is never read.
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://${HOST}:${PORT}`],
      },
      clearConsole: true,
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    // webpack v4+ 版本不支持contentBase，改成static
    // contentBase: path.join(__dirname, '../build'),
    static: {
      directory: path.join(__dirname, '../build'),
    },
    host: HOST,
    // 如果是自己通过 webpack 配置的项目，一定要在 devServe 中加 historyApiFallback: true ，解决 history 模式页面刷新后出现 404 的情况。
    // 以及 `output` 中的 publicPath
    historyApiFallback: true,
    port: PORT,
    hot: true,
    // historyApiFallback: {
    //   disableDotRule: true,
    // },
  },
});
