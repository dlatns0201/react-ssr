const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // browser 가 아닌 node 에서 돌아갈 번들이란 것을 설정
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')
  }
};

module.exports = merge(baseConfig, config);