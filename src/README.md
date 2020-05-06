# 这个项目是用来自己测试vue3.0自己还不是很熟悉的功能

## 已完成深化使用
+ 依赖注入（provide，inject）
```
// parent
provide() {
    return {
        dataName: this.dataName,
        methodName: this.methodName
    }
}

// children or deep children
inject: ['dataName', 'methodName']
```
+ 渲染函数&JSX
  - 节点、树以及虚拟 DOM
    > 虚拟DOM VNode 即包含页面节点渲染信息以及子节点描述信息的vue VNode树
+ 程序化侦听器实现自动化清理
```
this.$once('hook:beforeDestroy', function () {
    // do something
  })
```
+ 自定义指令 directives