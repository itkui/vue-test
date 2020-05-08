export default {
  install: function(Vue, options) {
    Vue.logOptions = function() {
      console.log(options);
    };

    Vue.mixin({
      beforeCreate() {
        console.log('vue项目准备创建中');
      },
      beforeDestroy() {
        console.log('vue项目准备注销中');
      },
    });

    // 4. 添加实例方法
    Vue.prototype.$alert = function(e) {
      alert(e);
    };
  },
};
