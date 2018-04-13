<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/">首页</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <button @click="toBar">Go to Bar</button>
      <router-link to="/foo/attrs">Go to Foo</router-link>
      <button @click="toFoo">Go to Foo</button>
      <router-link to="/foo">Go to Foo</router-link>

    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    toBar(){
      this.$router.push({path:"/bar"});
    },
    toFoo(){
      this.$router.push({name: 'foo', params: { name: 'hello'}});
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
