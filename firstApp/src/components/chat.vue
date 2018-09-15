<template>
  <div class="chat media-style-chat">

    <div class="left-panel">
      <div class="left-content clear-float">
        <div class="tag-tail clear-float">
          <div class="tag-left-style">Latest comment <strong>2018-09-14</strong></div>
          <a class="tag-tail-a">comment</a>
        </div>
        <div class="time-line time-line-container">
          <div class="time-one">
            <div class="clear-float">
              <hr class="time-length-short"/>
              <div class="time-title-short"><span>PapaMan</span> 发表在《<a>Docker最新简单易懂使用教程</a>》</div>
            </div>
            <div class="time-content">
              <p>
                关于为什么用nginx举例子，哈哈，前几天公司的技术部门来请教我组长，centos上的nginx怎么装，两个人聊了半天什么下载啊、配置啊、为什么启动不了之类的。我默默的说了一句，用docker起一个呗，他楞了一下，我在终端里敲了一行指令
                docker run -d -p 80:80 nginx，然后打开 http://localhost 页面给他看，他愣住了。。。
              </p>
            </div>
            <div class="clear-float">
              <hr class="time-length-short"/>
              <div class="time-title-short"><span>PapaMan</span> 发表在《<a>对Docker的理解</a>》</div>
            </div>
            <div class="time-content">
              <p>
                PapaMan希望结合自己的学习经验和踩过的坑，以简单使用为主，先忽略掉复杂、不常用的功能，尽量浅显的介绍docker的核心使用方法，做到看了就懂，懂了就能用。
              </p>
            </div>
          </div>
          <div class="time-one">
            <div class="clear-float">
              <hr class="time-length-long"/>
              <div class="time-title-long">08月</div>
            </div>
            <div class="clear-float">
              <hr class="time-length-short"/>
              <div class="time-title-short"><span>PapaMan</span> 发表在《<a>Docker的使用</a>》</div>
            </div>
            <div class="time-content">
              <p>
                PapaMan并不想按照系统的方式按部就班的讲解，况且这只是第一篇，后面会慢慢拓展。我更希望按照我们学习新知识时管用的思维方式，理解方式，来讲解；以快速上手，理解最基本核心功能为目的，掌握了核心再去拓展，你会发现容易很多，要先学会开机，才能上网、看视频、玩游戏不是？希望刚刚入门，或者希望了解docker的同学，看了这篇分享后，已经足够将容器玩的飞起。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="left-panel">
      <div class="page">
        <a class="page-num">首页</a>
        <a class="page-num not-allowed">上一页</a>
        <span class="page-current">1</span>
        <a class="page-num not-allowed">下一页</a>
        <a class="page-num">末页</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        name: '',
        selected: ''
      }
    },
    methods: {
      submit: function () {
        // replace getPost with your data fetching util / API wrapper
        this.$http.get(
          'static/json/data.json',
          {
            params: {
              name: this.name,
              selected: this.selected
            }
          }
        ).then(function (response) {
            alert('请求成功')
            this.$router.replace({path: '/bar/posts'})
          }
        )
      }
    }
  }
</script>

<style scoped>
  .chat {
    width: 65%;
    float: left;
  }

  .page {
    padding: 30px 15px;
    background: #FFF;
    text-align: center;
    overflow: hidden;
  }

  .page-num, .page-current {
    padding: 8px 11px;
    margin: 0px 5px;
    display: inline-block;
    color: #008CBA;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
  }

  .page-current {
    background-color: #008CBA;
    color: #FFF;
    border-radius: 5px;
    border: 1px solid #008CBA;
  }

  .page a:not(.not-allowed):hover, .tag-tail a:hover {
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  .not-allowed {
    cursor: not-allowed;
  }

  .left-panel {
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 1px 2px 0 #E2E2E2;
    margin-bottom: 20px;
  }

  .left-content {
    padding: 20px;
  }

  .time-line {
    border-left: 2px solid #ccc;
    margin: 2em 0em 2em 2em;
  }

  .time-length-long, .time-title-long, .time-length-short, .time-title-short {
    float: left;
  }

  .time-length-long {
    width: 2em;
    margin: 2.8em 0;
  }

  .time-title-long {
    border-radius: 4px;
    padding: 5px;
    font-size: 1.5em;
    margin-top: 1em;
  }

  .time-length-short {
    width: 1em;
    margin-top: 1.6em;
  }

  .time-title-short {
    margin: 1em;
  }

  .time-content {
    padding-left: 3em;
  }

  .time-content p {
    margin: 0;
  }

  .tag-tail-a {
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

  .tag-tail a:hover, .time-title-short a:hover {
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 1300px) and (min-width: 0px){
    .media-style-nav-active {
      display: block;
    }
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
    .media-style-nav-active {
      width: 0;
      background: rgba(0,0,0,0);
    }
    .media-style-nav-parent{
      width: 5em;
      position: absolute;
      top: 5em;
    }
    .media-style-nav-child {
      width: 6em;
      height: auto;
      background:rgba(220,220,220,0.4);
    }
    .media-style-nav-child a{
      padding: 0;
    }
  }

  @media (max-width: 600px) and (min-width: 0px){
    .media-style-nav-active {
      width: 0;
      background: rgba(0,0,0,0);
    }
    .media-style-pad {
      padding: 0 1em;
    }
    .down-container {
      padding: 6em 1em 0;
    }
  }
</style>
