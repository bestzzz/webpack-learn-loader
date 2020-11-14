class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', (status) => {
      console.log('编译完成hhhhhhhhhhh');
    });
  }
}

module.exports = DonePlugin;
