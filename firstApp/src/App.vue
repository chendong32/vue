<template>
  <div id="app">
    <div class="nav">
    <ul class = "nav-parent">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li class = "nav-child active" :style="{width:activeWidth + 'px' , left:activeLeft + 'px'}" ></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(0,$event)" :class="{'choose':index == 0}"><router-link to="/" >首页</router-link></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(1,$event)" :class="{'choose':index == 1}"><router-link to="/bar">Go to Bar</router-link></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(2,$event)" :class="{'choose':index == 2}"><router-link to="/foo/attrs">Go to Foo</router-link></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(3,$event)" :class="{'choose':index == 3}"><router-link to="/foo">Go to Foo</router-link></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(4,$event)" :class="{'choose':index == 4}"><router-link to="/foo">Go to Foo</router-link></li>
      <li class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(5,$event)" :class="{'choose':index == 5}"><router-link to="/foo">Go to Foo</router-link></li>

    </ul>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'App',
  data(){
    return {
      index: 0,
      activeWidth : 0,
      activeLeft : 0
    }
  },
  methods:{

    getPosition:function (event) {
      var el = event.currentTarget;
      this.activeLeft = el.getBoundingClientRect().left;
      this.activeWidth = el.getBoundingClientRect().width;
      $('.active').stop().animate({'left':this.activeLeft,'width':this.activeWidth}, 300);
    },
    choose:function (index,event) {
      this.index = index;
      var el = event.currentTarget;
      this.activeLeft = el.getBoundingClientRect().left;
      this.activeWidth = el.getBoundingClientRect().width;
    },
    movePosition:function () {
      this.activeLeft = $('.choose').position().left;
      this.activeWidth = $('.choose').width();
      $('.active').stop().animate({'left':this.activeLeft,'width':this.activeWidth}, 300);
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
    position: relative;
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
    position: absolute;
    background: #008CBA;
  }

</style>
