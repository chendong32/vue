<template>
  <div id="app">
    <div class="nav-header clearfloat">
    <div class="header" @click = "home(isSelect)">
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
      <li v-for="item in nav" class = "nav-child" @mouseover = "getPosition" @mouseout = "movePosition" @click = "choose(item.title,$event)" :class="{'choose':isSelect == item.title}">
        <router-link  :to="{path:item.url}">{{item.title}}</router-link>
      </li>
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
      isSelect : '首页',
      activeWidth : 0,
      activeLeft : 0,
      nav: [
        {title: '首页', url: '/'},
        {title: 'Java', url: '/category/1'},
        {title: 'Linux', url: '/category/2'},
        {title: 'php', url: '/category/3'},
        {title: '随言碎语', url: '/chat'},
        {title: '开源项目', url: '/git'}
      ]
    }
  },
  methods:{

    getPosition:function (event) {
      var el = event.currentTarget;
      this.activeLeft = el.getBoundingClientRect().left;
      this.activeWidth = el.getBoundingClientRect().width;
      $('.active').stop().animate({'left':this.activeLeft,'width':this.activeWidth}, 300);
    },
    choose:function (isSelect,event) {
      this.isSelect = isSelect;
      var el = event.currentTarget;
      this.activeLeft = el.getBoundingClientRect().left;
      this.activeWidth = el.getBoundingClientRect().width;
    },
    movePosition:function () {
      this.activeLeft = $('.choose').position().left;
      this.activeWidth = $('.choose').width();
      $('.active').stop().animate({'left':this.activeLeft,'width':this.activeWidth}, 300);
    },
    home:function (isSelect) {
      this.isSelect = '首页';
      this.$nextTick(function () {
        this.movePosition();
      })
    }
  },
  mounted(){
    this.isSelect = this.$route.name;
    this.$nextTick(function () {
      this.movePosition();
    })
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
    height:70px;
    font-size: 30px;
    line-height: 70px;
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
