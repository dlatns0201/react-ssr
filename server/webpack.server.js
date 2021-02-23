const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExtenrals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const config = {
  // browser 가 아닌 node 에서 돌아갈 번들이란 것을 설정
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')
  },

  externals: [
    // express 등 외부 라이브러리를 사용할 때 코드에 사용된 것 외의 의존하는 모듈들을 제거해준다.
    // 따라서, 번들링할 때 속도가 빨라지게 만들어준다.
    webpackNodeExtenrals()
  ]
};

module.exports = merge(baseConfig, config);