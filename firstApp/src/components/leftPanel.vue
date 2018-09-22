<template>
  <div class="home media-style-home">

    <div v-for='(item, index) in contentList'>
      <div class="left-panel" v-show="isExpand==0 || isExpand==1+index">
        <div class="left-content clear-float">
          <h4 class="b-title">
            {{item.title}}
          </h4>
          <div>
            <ul class="all-tag clear-float media-style-tag-parent">
              <li><i class="icon iconfont icon-people_fill"></i> {{item.people_fill}}</li>
              <li><i class="icon iconfont icon-qiandao"></i> {{item.qiandao}}</li>
              <li><i class="icon iconfont icon-classify"></i> {{item.classify}}</li>
              <li><i class="icon iconfont icon-accessory"></i> {{item.accessory}}</li>
            </ul>
          </div>
          <div>
            <span v-html="item.summary"></span>
            <span v-html="item.content"></span>
          </div>
          <div class="tag-tail"><a class="tag-tail-a" :class="{ expand:isExpand == 1+index}" @click="expand(1+index)">阅读全文</a></div>
        </div>
      </div>
    </div>

    <div class="left-panel" v-show="isExpand==0">
      <div class="page">
        <a class="page-num media-style-page-start" @click="page(1)">首页</a>
        <a class="page-num not-allowed" @click="1>1 && page(1)">上一页</a>
        <span class="page-current">1</span>
        <a class="page-num not-allowed" @click="1<1 && page(2)">下一页</a>
        <a class="page-num media-style-page-end" @click="page(2)">末页</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'leftPanel',
  props: {
    url: {
      required: true
    }
  },
  data () {
    return {
      isExpand: 0,
      contentList:[{
        "accessory": "服务器",
        "classify": "JAVA",
        "summary": "<p>其实PapaMan在学习docker的过程中，也查阅过很多资料，发现大多数文章要么就是写的很细，面面俱到；要么就是写的很深，跳过基础，却忽略了初学者，和希望了解docker技术的同学们的感受，使他们绕了弯路，或者望而却步；再有就是每个功能介绍的太独立，没有互相联系，也没有例子方便理解。</p>",
        "content": "<p>PapaMan希望结合自己的学习经验和踩过的坑，以简单使用为主，先忽略掉复杂、不常用的功能，尽量浅显的介绍docker的核心使用方法，做到看了就懂，懂了就能用。</p><p>废话不多说，docker的核心功能一定是启动镜像，也就是run命令，下面我们以nginx为例，介绍如何使用docker启动镜像。</p>",
        "people_fill": "test",
        "qiandao": "09-14",
        "title": "Docker最新简单易懂使用教程"
      }, {
        "accessory": "镜像",
        "classify": "JAVA",
        "summary": "<p>其实PapaMan在学习docker的过程中，也查阅过很多资料，发现大多数文章要么就是写的很细，面面俱到；要么就是写的很深，跳过基础，却忽略了初学者，和希望了解docker技术的同学们的感受，使他们绕了弯路，或者望而却步；再有就是每个功能介绍的太独立，没有互相联系，也没有例子方便理解。</p>",
        "content": "<p>PapaMan希望结合自己的学习经验和踩过的坑，以简单使用为主，先忽略掉复杂、不常用的功能，尽量浅显的介绍docker的核心使用方法，做到看了就懂，懂了就能用。</p><p>废话不多说，docker的核心功能一定是启动镜像，也就是run命令，下面我们以nginx为例，介绍如何使用docker启动镜像。</p>",
        "people_fill": "admin",
        "qiandao": "09-14",
        "title": "对Docker的理解"
      }, {
        "accessory": "容器",
        "classify": "JAVA",
        "summary": "<p>其实PapaMan在学习docker的过程中，也查阅过很多资料，发现大多数文章要么就是写的很细，面面俱到；要么就是写的很深，跳过基础，却忽略了初学者，和希望了解docker技术的同学们的感受，使他们绕了弯路，或者望而却步；再有就是每个功能介绍的太独立，没有互相联系，也没有例子方便理解。</p>",
        "content": "<p>PapaMan希望结合自己的学习经验和踩过的坑，以简单使用为主，先忽略掉复杂、不常用的功能，尽量浅显的介绍docker的核心使用方法，做到看了就懂，懂了就能用。</p><p>废话不多说，docker的核心功能一定是启动镜像，也就是run命令，下面我们以nginx为例，介绍如何使用docker启动镜像。</p>",
        "people_fill": "baiai",
        "qiandao": "09-14",
        "title": "Docker的使用"
      }
      ]
    }
  },
  created () {
    //this.$layer.alert("created");//后台一次性获取数据
  },
  watch: {
    url (value) {
      this.load(value)
    }
  },
  mounted () {
    this.load(this.url)
  },
  methods: {
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    expand: function (isExpand) {
      this.isExpand = this.isExpand == isExpand? 0: isExpand;
    },
    page: function (pageNo) {
      this.$layer.alert(pageNo);//分页方法
    },
    load (url) {
      if (url && url.length > 0) {
        this.$layer.alert(url);
      }
    }
  }
}
</script>

<style scoped>
  .home {
    width: 65%;
    float: left;
  }

  .page {
    padding: 30px 15px;
    background: #FFF;
    text-align: center;
    overflow: hidden;
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

  .page-num, .page-current{
    padding: 8px 11px;
    margin: 0px 5px;
    display: inline-block;
    color: #008CBA;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
  }
  .page-current{
    background-color: #008CBA;
    color: #FFF;
    border-radius: 5px;
    border: 1px solid #008CBA;
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
  .page a:not(.not-allowed):hover, .tag-tail a:hover{
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  .not-allowed {
    cursor: not-allowed;
  }

  .expand{
    background-color: #dcdcdc;
    color: #008CBA;
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
  }
</style>
