const loaderUtils = require('loader-utils');
const mime = require('mime'); // 用于获取图片类型(jpg/png/gif...)

function loader(source) {
  // 获取use.options 拿到limit参数
  const options = loaderUtils.getOptions(this);
  const {limit} = options;

  if (limit && limit > source.length) {
    return `module.exports="data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`;
  } else {
    return require('./file-loader').call(this, source);
  }
}

loader.raw = true;
module.exports = loader;