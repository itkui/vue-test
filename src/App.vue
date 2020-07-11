<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/lodash">Lodash</router-link>|
      <router-link to="/html2">html2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  /* 依赖注入的方法注册 */
  provide() {
    return {
      testData: this.testProvide,
      testMethod: this.logData,
    };
  },
  data() {
    return {
      testProvide: '依赖注入测试数据',
    };
  },
  methods: {
    logData() {
      return '依赖注册测试方法';
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
