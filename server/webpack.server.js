const path = require('path');

module.exports = {
  // browser 가 아닌 node 에서 돌아갈 번들이란 것을 설정
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|build)/,
        options: {
          presets: [
            'react',
            // async await
            'stage-0',
            [
              'env',
              {
                target: {
                  browsers: [
                    'last 2 versions'
                  ]
                }
              }
            ]
          ]
        }
      }
    ]
  }
}