const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  // 解析loader
  resolveLoader: {
    // 先从node_modules里找，找不到了再去找后面的路径
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
    // 别名
    // alias: {
    //   loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    // }
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: [
  //         'loader3', 'loader2', 'loader1'
  //       ]
  //     }
  //   ]
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
};
