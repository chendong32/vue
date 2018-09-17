<template>
  <div id="app">

    <div class="nav-header app-container header-color media-style-pad clear-float">
      <div class="header media-style-header" @click="home(isSelect)">
        <router-link to="/">
          <div class="header-background">
            <div class="header-title">
              <span class="name-color">B</span><span class="name-color1">a</span><span class="name-color2">i</span>
              <span class="name-color3">a</span><span class="name-color">I</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="nav">
        <ul class="nav-parent media-style-nav-parent">
          <li class="nav-child nav-active media-style-nav-active" :style="{width:activeWidth + 'px' , left:activeLeft + 'px'}"></li>
          <li v-for="item in nav" class="nav-child media-style-nav-child" @mouseover="getPosition" @mouseout="movePosition"
              @click="choose(item.url,$event)" :class="{'choose':isSelect == item.url}">
            <router-link :to="{path:item.url}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="tail">
        <ul class="nav-parent">
          <li class="nav-child nav-tail">
            <a @click="login">登录</a>
          </li>
          <li class="nav-child nav-tail">
            <a @click="logout">退出</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="app-container down-container media-style-pad clear-float">

    <router-view></router-view>

    <div class="nav-right col-lg-4 media-style-none">

      <div class="right-panel">

        <div class="b-tags">
          <h4 class="b-title">热门标签</h4>
          <ul class="all-tag">
            <li><a class="tag-style">docker</a></li>
            <li><a class="tag-style">linux</a></li>
            <li><a class="tag-style">nginx</a></li>
            <li><a class="tag-style">镜像</a></li>
            <li><a class="tag-style">服务器</a></li>
          </ul>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-tags">
          <h4 class="b-title">置顶推荐</h4>
          <ul class="all-tag">
            <li class="recommend-style"><i class="icon iconfont icon-diantileimu"></i><a> Docker最新简单易懂使用教程</a></li>
            <li class="recommend-style"><i class="icon iconfont icon-diantileimu"></i><a> 对Docker的理解</a></li>
            <li class="recommend-style"><i class="icon iconfont icon-diantileimu"></i><a> Docker的使用</a></li>
          </ul>
        </div>

      </div>

      <div class="right-panel">
        <div class="b-tags">
          <h4 class="b-title">最新评论</h4>
          <ul class="all-tag">
            <li class="comment-style"><span>PapaMan</span> 发表在《<a>Docker最新简单易懂使用教程</a>》</li>
            <li class="comment-style"><span>PapaMan</span> 发表在《<a>对Docker的理解</a>》</li>
            <li  class="comment-style comment-end"><span>PapaMan</span> 发表在《<a>Docker的使用</a>》</li>
          </ul>
        </div>
      </div>

      <div class="right-panel">

        <div class="b-tags">
          <h4 class="b-title">友情链接</h4>
          <ul class="all-tag">
            <li class="recommend-style"><i class="icon iconfont icon-lianjie"></i><a href="http://www.kevinli.com.cn/" target="_blank"> PAPAMAN的个人博客</a></li>
          </ul>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-search">
          <form class="form-inline" role="form">
            <input class="b-search-text" type="text" name="search_word">
            <input class="b-search-submit" type="submit" value="搜索">
          </form>
        </div>

      </div>

    </div>

    </div>

    <div>
      <div>© 2014-2017 baiai.com 版权所有</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import login from '@/components/login'

  export default {
    name: 'App',
    data() {
      return {
        isSelect: '/',
        activeWidth: 0,
        activeLeft: 0,
        nav: [
          {title: '首页', url: '/'},
          {title: 'Java', url: '/category/1'},
          {title: 'Linux', url: '/category/2'},
          {title: 'Git', url: '/git'},
          {title: '文章留言', url: '/chat'}
        ]
      }
    },
    methods: {

      getPosition: function (event) {
        var el = event.currentTarget;
        var par = event.target.parentElement;
        //console.log(par.offsetLeft+" "+par.offsetHeight+" "+par.offsetParent+" "+par.offsetTop+" "+par.offsetWidth);
        this.activeLeft = el.getBoundingClientRect().left;
        //this.activeLeft = par.offsetLeft;
        this.activeWidth = el.getBoundingClientRect().width;
        $('.nav-active').stop().animate({'left': par.offsetLeft, 'width': this.activeWidth}, 300);
      },
      choose: function (isSelect, event) {
        this.isSelect = isSelect;
        var el = event.currentTarget;
        this.activeLeft = el.getBoundingClientRect().left;
        this.activeWidth = el.getBoundingClientRect().width;
      },
      movePosition: function () {
        this.activeLeft = $('.choose').position().left;
        this.activeWidth = $('.choose').width();
        $('.nav-active').stop().animate({'left': this.activeLeft, 'width': this.activeWidth}, 300);
      },
      home: function (isSelect) {
        this.isSelect = this.$route.path;
        this.$nextTick(function () {
          this.movePosition();
        })
      },
      login: function () {
        this.$layer.iframe({
          content: {
            content: login, //传递的组件对象
            parent: this,//当前的vue对象
            data:{}//props
          },
          area:['308px','300px'],
          title:"Sign in to BaiaI"
        });
      },
      logout:function () {
        this.$router.replace("/");
      }
    },
    mounted() {/*解决页面刷新时选中状态问题*/
      this.home();
    },
    watch:{/* 监听,当路由发生变化的时候执行*/
      $route(to,from){
        this.home();
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
    font-size: 14px;
  }

  #app .choose > a {
    color: #ffffff;
  }


  #app p{
    text-indent:2em;
    text-align:justify!important;
    color:#333;
  }

  .header {
    float: left;
  }

  .header-background {
    background: #466380 url('/static/img/button_bg.png');
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s;
  }

  .header-background:hover {
    background-position: bottom right;
  }

  .header-title {
    height: 50px;
    font-size: 30px;
    line-height: 50px;
  }

  .nav {
    float: left;
  }

  .tail {
    float: right;
  }

  .clear-float:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .header-color{
    zoom: 1;
    background: #2c3e50;
  }

  .nav-parent {
    list-style: none;
    height: 50px;
    margin: 0.3em 0 1em;
    position: relative;
    padding: 0;
  }

  .nav-child {
    position: relative;
    float: left;
    text-align: center;
    line-height: 40px;
    height: 60px;
  }

  .nav-header {
    right: 0;
    left: 0;
    position: fixed;
  }

  .nav-header a {
    padding: 10px;
    text-decoration: none;
    color: #9d9d9d;
    display: block;
    text-shadow: 0 1px 0 rgba(255, 255, 255, .25);
  }

  .nav-header a:hover {
    color: #ffffff;
  }

  .nav-active {
    position: absolute;
    background: #008CBA;
  }

  .nav-right {
    float: right;
    width: 30%;
  }

  .right-panel {
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  .b-search-text {
    margin-right: 0;
    padding: 0 5px;
    width: 70%;
    height: 33px;
    line-height: 35px;
    border: 1px solid #ccc;
    float: left;
  }

  .b-search-submit {
    margin-left: 0;
    width: 22%;
    height: 35px;
    color: #fff;
    border: none;
    float: left;
    background:#008CBA url('/static/img/button_bg.png');
    -webkit-transition: background-position 0.5s;
    -moz-transition: background-position 0.5s;
    transition: background-position 0.5s;
  }

  .b-search-submit:hover {
    background-position: bottom right;
  }

  .col-lg-4 {
    width: 33.33333333%;
  }

  .tag-style {
    border: 1px solid #ddd;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: block;
    padding: 4px 10px 5px;
    -webkit-transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.3s ease-in-out;
    word-wrap: break-word;
  }

  .all-tag {
    padding: 0px;
    list-style: none;
  }

  .all-tag li{
    padding: 0;
    margin: 4px 4px 0 0;
    line-height: 25px;
    float: left;
  }

  .all-tag li a:hover{
    cursor: pointer;
    color: #000;
    box-shadow: inset 0 0 0 rgba(0, 0, 0, 0), 0 1px 1px #E2E2E2;
  }

  .b-tags, .b-search {
    padding: 20px;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 #E2E2E2;
  }

  .b-title {
    color: #333;
    font-size: 18px;
    text-align: left;
    margin: 0px;
  }
  .app-container{
    padding: 0 200px;
    margin: auto;
  }
  .down-container{
    padding-top: 6em;
  }

  .comment-style{
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
  }
  .comment-end{
    border: none;
  }
  .recommend-style{
    text-align: left;
    width: 100%;
    color: #008CBA;
  }
  input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  .nav-tail a:hover{
    background: #008CBA;
  }

  .name-color{
    animation: color-change 5s linear 2s infinite alternate;
    -webkit-animation: color-change 5s linear 2s infinite alternate;
  }
  @-webkit-keyframes color-change /* Safari 和 Chrome */
  {
    0%   {color: #9d9d9d;}
    100%  {color: #E1E1E1;}
  }

  @media (max-width: 1300px) and (min-width: 0px){
    .media-style-none {
      display: none!important;
    }
    .media-style-pad {
      padding: 0 6em;
    }
    .down-container {
      padding: 6em 6em 0;
    }
    .media-style-category,.media-style-chat,.media-style-git,.media-style-home{
      width: 100%;
    }
  }
  @media (max-width: 820px) and (min-width: 0px){
    .media-style-nav-parent{
      position: absolute;
    }
    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child{
      display: none;
    }
    .media-style-nav-active{
      background: rgba(0,0,0,0);
    }
  }
  @media (max-width: 600px) and (min-width: 0px){
    .media-style-pad {
      padding: 0 1em;
    }
    .down-container {
      padding: 6em 1em 0;
    }
    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child{
      display: none;
    }
  }
  @media (max-width: 400px) and (min-width: 0px){
    .media-style-header{
      display: none!important;
    }
  }
</style>
