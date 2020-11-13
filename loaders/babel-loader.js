const babel = require('@babel/core');
const loaderUtils = require('loader-utils');

function loader (source) {
  // 取出presets预设
  const options = loaderUtils.getOptions(this);
  // 异步回调
  const cb = this.async();
  babel.transform(source, {
    ...options,
    sourceMaps: true,
    // filename: this.resourcePath.split('/').pop()
    filename: 'babelLoaderTest'
  }, function(err, result) {
    cb(err, result.code, result.map);
  });
};

module.exports = loader;