const less = require('less');

function loader(source) {
  let css;
  less.render(source, (err, c) => {
    // 拿到编译后的css字符串源码
    css = c.css;
  });

  return css;
}

module.exports = loader;
