# 如何开发自定义loader

1. loader接受一个参数`source`源码字符串，返回的是经过加工处理后的`source`;每个loader里的this都指向loaderContext(loader上下文),这个上下文可以配合loader-utils来使用。

2. loader是可以链式调用的，按照配置文件配置的顺序逆向执行。经过加工的source一级一级传递，那么我们注意了，最后一个loader的结尾一定是这样的`module.exports=${JSON.stringfy(source)}`，他应该是一个符合模块化的loader，因为最后一个loader返回的源代码是要交给__webpack_require__的。

3. 几个开发loader时常用的库。`loader-utils`: loader的工具库，这个库可以配合this拿到options参数，也可以解析绝对路径。`schema-utils`: 骨架校验，这个库可以去校验配置文件中loader的参数是否符合预期。



# 如何编写自定义插件

1. plugin是一个类。通过类的constructor可以拿到配置文件中传入的参数。

2. 每个plugin类里都有一个apply方法。这个方法接受一个参数`compiler` Compiler的实例，可以通过这个实例拿到`compiler.hooks`生命周期钩子，然后通过生命周期的tap方法去订阅一个该生命周期执行的事件。
