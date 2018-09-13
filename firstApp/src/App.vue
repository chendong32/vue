<template>
  <div id="app">
    <div class="nav-header app-container header-color clear-float">
      <div class="header" @click="home(isSelect)">
        <router-link to="/">
          <div class="header-background">
            <div class="header-title">Bai aI</div>
          </div>
        </router-link>
      </div>
      <div class="nav">
        <ul class="nav-parent">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <li class="nav-child nav-active" :style="{width:activeWidth + 'px' , left:activeLeft + 'px'}"></li>
          <li v-for="item in nav" class="nav-child" @mouseover="getPosition" @mouseout="movePosition"
              @click="choose(item.title,$event)" :class="{'choose':isSelect == item.title}">
            <router-link :to="{path:item.url}">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <div class="tail">
        <ul class="nav-parent">
          <li class="nav-child">
            <router-link to="/123">登录</router-link>
          </li>
          <li class="nav-child">
            <router-link to="/432">退出</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="app-container clear-float">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <div class="nav-right col-lg-4 ">
      <div class="right-panel">

        <div class="b-tags">
          <h4 class="b-title">热门标签</h4>
          <ul class="all-tag">
            <li class="one-tag"><a class="tag-style">测试数据</a></li>
            <li class="one-tag"><a class="tag-style">测试数据</a></li>
          </ul>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-link">
          <h4 class="b-title">置顶推荐</h4>
          <div>
          </div>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-link">
          <h4 class="b-title">最新评论</h4>
          <div>
          </div>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-link">
          <h4 class="b-title">友情链接</h4>
          <div>
          </div>
        </div>

      </div>

      <div class="right-panel">

        <div class="b-search">
          <form class="form-inline" role="form">
            <input class="b-search-text" type="text" name="search_word">
            <input class="b-search-submit" type="submit" value="全站搜索">
          </form>
        </div>

      </div>
    </div>

    </div>

    <div>
      <p>开源博客程序搭建  © 2014-2017 BaiAi.com 版权所有 ICP证：豫ICP备14009546号-3</p>
      <p>联系邮箱：baiai@baiai.com</p>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'App',
    data() {
      return {
        isSelect: '首页',
        activeWidth: 0,
        activeLeft: 0,
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
    methods: {

      getPosition: function (event) {
        var el = event.currentTarget;
        this.activeLeft = el.getBoundingClientRect().left;
        this.activeWidth = el.getBoundingClientRect().width;
        $('.nav-active').stop().animate({'left': this.activeLeft, 'width': this.activeWidth}, 300);
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
        if (this.$route.name == null) {
          this.isSelect = '首页';
        } else {
          this.isSelect = this.$route.name;
        }
        this.$nextTick(function () {
          this.movePosition();
        })
      }
    },
    mounted() {/*解决页面刷新时选中状态问题*/
      this.home();
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

  .header {
    float: left;
  }

  .header-background {
    background-image: url('/static/img/button_bg.png');
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

  }

  .nav-child {
    position: relative;
    float: left;
    text-align: center;
    line-height: 40px;
    height: 60px;
  }

  .nav-header {
    margin-bottom: 20px;
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

  /* 搜索开始 */
  .b-search-text {
    margin-right: 0;
    padding: 0 5px;
    width: 73%;
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

  /* 搜索结束 */

  .col-lg-4 {
    width: 33.33333333%;
  }

  .tag-style {
    background-color: #F3A557;
    display: block;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    float: left;
    margin-right: 5px;
    color: #ffffff;
  }

  .all-tag {
    padding: 0px;
    list-style: none;
  }

  .b-tags, .b-link, .b-search {
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
    margin-right: auto;
    margin-left: auto;
  }
</style>
