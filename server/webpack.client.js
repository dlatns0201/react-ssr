const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('public')
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
