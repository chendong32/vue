<template>
  <div class="git">
    <!--<div class="loading" v-if="loading">
      Loading...
    </div>-->
    <!--<div v-if="sites" class="content">
        <p v-for="site in sites">
          {{ site.id }}{{ site.name }} {{ site.age }}
        </p>
      </div>-->
    <!--<v-html-panel :url.asyc="url1"></v-html-panel>
    <v-html-panel :url.asyc="url2"></v-html-panel>
    <my-component></my-component>-->

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          <i class="icon iconfont icon-github"></i>
          chendong32/vue
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel、PDF等等；基于thinkphp扩展了大量的功能；而不改动thinkphp核心；非常方便的升级、移植和使用；
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="git-left-style">Latest commit <strong>2018-09-14</strong></div>
          <a class="tag-tail-a">Download as zip</a>
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
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel、PDF等等；基于thinkphp扩展了大量的功能；而不改动thinkphp核心；非常方便的升级、移植和使用；
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="git-left-style">Latest commit <strong>2018-09-14</strong></div>
          <a class="tag-tail-a">Download as zip</a>
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
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-browse"></i> 0</li>
            <li><i class="icon iconfont icon-collection"></i> 0</li>
            <li><i class="icon iconfont icon-fenlei"></i> JavaScript</li>
            <li><i class="icon iconfont icon-share"></i> master</li>
          </ul>
        </div>
        <div class="git-content-style">
          <p>
            thinkphp整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel、PDF等等；基于thinkphp扩展了大量的功能；而不改动thinkphp核心；非常方便的升级、移植和使用；
          </p>
        </div>
        <div class="tag-tail clear-float">
          <div class="git-left-style">Latest commit <strong>2018-09-14</strong></div>
          <a class="tag-tail-a">Download as zip</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        sites: null,
        url1: '',
        url2: ''
      }
    },
    created() {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.error = this.get = null
        this.loading = true
        // replace getPost with your data fetching util / API wrapper
        this.$http.get('/static/json/data.json').then((get, err) => {
            this.loading = false

            if (err) {
              this.error = err.toString()
            } else {
              this.sites = get.data.data
            }

          }
        )
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

  .git-left-style {
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
</style>
