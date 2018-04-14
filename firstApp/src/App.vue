<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
    <ul class = "nav-parent">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li class = "nav-child" @click = "getPosition(0)" :class="{'active': 0 == index}"><router-link to="/" >首页</router-link></li>
      <li class = "nav-child" @click = "getPosition(1)" :class="{'active': 1 == index}"><router-link to="/bar">Go to Bar</router-link></li>
      <li class = "nav-child" @click = "getPosition(2)" :class="{'active': 2 == index}"><router-link to="/foo/attrs">Go to Foo</router-link></li>
      <li class = "nav-child" @click = "getPosition(3)" :class="{'active': 3 == index}"><router-link to="/foo">Go to Foo</router-link></li>

    </ul>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      index: 0
    }
  },
  methods:{

    getPosition:function (index) {
      this.index = index;
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
  font-size: 14px;
}
  .nav{
    background: #2c3e50;
  }
  .nav-parent{
    list-style: none;
    height: 60px;

  }
  .nav-child{
    float : left;
    text-align: center;
    line-height: 40px;
    height: 60px;
  }
  .nav>ul>li a{
    padding: 10px;
    text-decoration: none;
    color: #9d9d9d;
  }
  .nav>ul>li a{
    display: block;
    text-shadow: 0 1px 0 rgba(255,255,255,.25);

  }
  .nav>ul>li a:hover{
    color: #ffffff;
  }
  .active{
    background: #008CBA;
  }
</style>
