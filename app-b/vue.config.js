// step2. 修改 webpack 配置便于 qiankun 识别子应用
const packageName = require('./package.json').name;

const port = 3002;

module.exports = {
  publicPath: `//localhost:${port}`, // 设置绝对地址，避免子应用在主应用中使用主应用的 publicPath 来加载资源导致失败。
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  devServer: {
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
