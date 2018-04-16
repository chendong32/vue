<template>
  <div id="app">
    <div class="nav-header clearfloat">
    <div class="header" @click = "home(index)">
      <router-link to="/" >
      <div class="header-background">
        <div class="header-title">only learn</div>
      </div>
      </router-link>
    </div>
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
    },
    home:function (index) {
      this.index = 0;
      this.$nextTick(function () {
        this.movePosition();
      })
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
  color: #9d9d9d;
  margin-top: 60px;
  font-size: 14px;
}
  #app .choose>a{
    color: #ffffff;
  }

  .header{
    float : left;
  }
  .header-background{
    background-image:url('/static/img/button_bg.png');
    -webkit-transition:background-position 0.5s;
    -moz-transition:background-position 0.5s;
    transition:background-position 0.5s;
  }
  .header-background:hover{
    background-position:bottom right;
  }
  .header-title{
    height:80px;
    font-size: 30px;
    line-height: 80px;
  }
  .nav{
    float : left;
  }
  .clearfloat:after {
    display:block;
    clear:both;
    content:"";
    visibility:hidden;
    height:0
  }
  .clearfloat{
    zoom:1;
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
  .nav-header a{
    padding: 10px;
    text-decoration: none;
    color: #9d9d9d;
    display: block;
    text-shadow: 0 1px 0 rgba(255,255,255,.25);
  }
  .nav-header a:hover{
    color: #ffffff;
  }
  .active{
    position: absolute;
    background: #008CBA;
  }

</style>
