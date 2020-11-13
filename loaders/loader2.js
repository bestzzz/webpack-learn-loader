// loader
// loader是个函数 接受一个参数源码，处理后将源码返回

function loader (source) {
  console.log('loader2');
  return source;
}

module.exports = loader;