const loaderUtils = require('loader-utils');

function loader (source) {
  // 生成文件名
  const filename = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source });
  // 发射文件
  this.emitFile(filename, source);

  // file-loader需要返回一个路径
  return `module.exports="${filename}";`;
};

loader.raw = true; // 二进制
module.exports = loader;
