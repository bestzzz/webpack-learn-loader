const loaderUtils = require('loader-utils'); // 获取参数
const {validate} = require('schema-utils'); // 骨架校验
const fs = require('fs');

function loader(source) {
  // 取出参数use.options
  const options = loaderUtils.getOptions(this);
  // 创建异步回调 接收两个参数，第一个是error，第二个是要返回出去的源码
  // 异步回调一旦创建就不可使用同步的return将源码返回，应该用异步回调返回
  const cb = this.async();

  // 创建校验参数的骨架
  const schema = {
    type: 'object',
    properties: {
      text: {
        type: 'string'
      },
      filename: {
        type: 'string'
      }
    }
  };
  // 骨架校验 如果options与骨架不对，则抛出banner-loader的异常
  validate(schema, options, 'banner-loader');

  // 当存在filename参数时，读取filename，否则用text
  if (options.filename) {
    // 将filename添加到文件依赖中，这样当watch: true(打开监听时)，filename发生变化，webpack就会去自动打包编译
    this.addDependency(options.filename);
    // 读取filename文件
    fs.readFile(options.filename, 'utf8', function(e, data) {
      cb(e, `/** ${data} **/\n${source}`);
    });
  } else {
    cb(null, `/** ${options.text} **/\n${source}`);
  }
}

module.exports = loader;