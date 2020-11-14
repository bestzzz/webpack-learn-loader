const path = require('path');

const DonePlugin = require('./plugins/DonePlugin');
const FileListPlugin = require('./plugins/FileListPlugin');

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
      },
      {
        test: /\.js$/,
        use: {
          loader: 'banner-loader',
          options: {
            text: 'write by zz',
            filename: path.resolve(__dirname, 'banner-text.txt')
          }
        }
      },
      {
        test: /\.png$/,
        // 目的是根据图片生成一个md5 发射到dist目录下，file-loader还会返回当前图片路径
        // use: 'file-loader',
        // url-loader
        use: {
          loader: 'url-loader',
          options: {
            limit: 200*1024
          }
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },

  plugins: [
    new DonePlugin(),
    new FileListPlugin({
      filename: 'readme.md'
    })
  ]
};
