module.exports = {
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