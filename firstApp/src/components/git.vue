<template>
  <div class="git media-style-git">

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          <i class="icon iconfont icon-github"></i>
          chendong32/vue
        </h4>
        <div>
          <ul class="all-tag clear-float media-style-tag-parent">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel、PDF等等；基于thinkphp扩展了大量的功能；而不改动thinkphp核心；非常方便的升级、移植和使用；
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="tag-left-style media-style-tag">Latest commit <strong>2018-09-14</strong></div>
          <a href="https://codeload.github.com/chendong32/vue/zip/master" class="tag-tail-a">Download ZIP</a>
        </div>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          <i class="icon iconfont icon-github"></i>
          chendong32/vue
        </h4>
        <div>
          <ul class="all-tag clear-float media-style-tag-parent">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel、PDF等等；基于thinkphp扩展了大量的功能；而不改动thinkphp核心；非常方便的升级、移植和使用；
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="tag-left-style media-style-tag">Latest commit <strong>2018-09-14</strong></div>
          <a href="https://codeload.github.com/chendong32/vue/zip/master" class="tag-tail-a">Download ZIP</a>
        </div>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          <i class="icon iconfont icon-github"></i>
          chendong32/vue
        </h4>
        <div>
          <ul class="all-tag clear-float media-style-tag-parent">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel……
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="tag-left-style media-style-tag">Latest commit <strong>2018-09-14</strong></div>
          <a href="https://codeload.github.com/chendong32/vue/zip/master" class="tag-tail-a">Download ZIP</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'git',
    data() {
      return {
        url1: '',
        url2: ''
      }
    },
    mounted() {
      this.url1 = 'https://api.github.com/repos/chendong32/vue'
      this.url2 = 'https://api.github.com/repos/chendong32/activti'
    }
  }
</script>

<style scoped>
  .git {
    width: 65%;
    float: left;
  }

  .left-content{
    padding: 20px;
  }

  .left-panel{
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 1px 2px 0 #E2E2E2;
    margin-bottom: 20px;
  }

  .all-tag li{
    float: left;
    margin-right: 2em;
  }
  .tag-tail-a{
    background-color: #008CBA;
    display: block;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    float: right;
    color: #ffffff;
  }

  .tag-left-style {
    float: left;
    height: 20px;
    line-height: 20px;
  }

  .tag-tail a:hover{
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  .tag-tail a:hover{
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 1500px) and (min-width: 0px){
    .media-style-pad {
      padding: 0 3em;
    }
    .down-container {
      padding: 6em 3em 0;
    }
  }
  @media (max-width: 1200px) and (min-width: 0px){
    .media-style-none {
      display: none!important;
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
  }
  @media (max-width: 600px) and (min-width: 0px){
    .media-style-pad {
      padding: 0 1em;
    }
    .down-container {
      padding: 6em 1em 0;
    }
    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child, .media-style-tag-parent li:nth-child(4){
      display: none;
    }
  }
  @media (max-width: 400px) and (min-width: 0px){
    .media-style-tag-parent li:nth-child(4), .media-style-page-start, .media-style-page-end {
      display: none;
    }
    .media-style-tag {
      width: 55%;
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
    }
  }
</style>
