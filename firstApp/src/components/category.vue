<template>
  <div class="category media-style-category">

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          Docker最新简单易懂使用教程
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-people_fill"></i><span> test</span></li>
            <li><i class="icon iconfont icon-qiandao"></i> 09-14</li>
            <li><i class="icon iconfont icon-fenlei"></i> JAVA</li>
            <li><i class="icon iconfont icon-accessory"></i> 服务器</li>
          </ul>
        </div>
        <div>
          <p>
            其实PapaMan在学习docker的过程中，也查阅过很多资料，发现大多数文章要么就是写的很细，面面俱到；要么就是写的很深，跳过基础，却忽略了初学者，和希望了解docker技术的同学们的感受，使他们绕了弯路，或者望而却步；再有就是每个功能介绍的太独立，没有互相联系，也没有例子方便理解。</p>
        </div>
        <div class="tag-tail"><a class="tag-tail-a" :class="{ expand:isExpand == 1}" @click="expand(1)">阅读全文</a></div>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          对Docker的理解
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-people_fill"></i><span> test</span></li>
            <li><i class="icon iconfont icon-qiandao"></i> 09-14</li>
            <li><i class="icon iconfont icon-fenlei"></i> JAVA</li>
            <li><i class="icon iconfont icon-accessory"></i> 服务器</li>
          </ul>
        </div>
        <div>
          <p>
            我相信看到这篇文章的同学肯定不需要我大讲特讲docker的基本原理，大家一定在概念方面都有了一定的了解，如果还有一些些小模糊的话，看看能不能通过我对于docker在学习过程中的一些理解上的小转变来提供一些帮助。
          </p>
        </div>
        <div class="tag-tail"><a class="tag-tail-a" :class="{ expand:isExpand == 2}" @click="expand(2)">阅读全文</a></div>
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
    name: 'category',
    data() {
      return {
        isExpand: 0
      }
    },
    computed: {
      username() {
        // 我们很快就会看到 `params` 是什么
        return this.$route.params.username
      }
    },
    props: {
      name: {
        type: String,
        default: 'Vue!'
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },
      expand: function (isExpand) {
        this.isExpand = this.isExpand == isExpand? 0: isExpand;
      }
    }
  }
</script>

<style scoped>
  .category {
    width: 65%;
    float: left;
  }

  .page {
    padding: 30px 15px;
    background: #FFF;
    text-align: center;
    overflow: hidden;
  }

  .left-content {
    padding: 20px;
  }

  .left-panel {
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 1px 2px 0 #E2E2E2;
    margin-bottom: 20px;
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

  .all-tag li {
    float: left;
    margin-right: 2em;
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

  .page a:not(.not-allowed):hover, .tag-tail a:hover {
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

  @media (max-width: 1300px) and (min-width: 0px) {
    .media-style-none {
      display: none !important;
    }

    .media-style-pad {
      padding: 0 6em;
    }

    .down-container {
      padding: 6em 6em 0;
    }

    .media-style-category, .media-style-chat, .media-style-git, .media-style-home {
      width: 100%;
    }
  }

  @media (max-width: 820px) and (min-width: 0px) {
    .media-style-nav-parent {
      position: absolute;
    }

    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child {
      display: none;
    }
  }

  @media (max-width: 600px) and (min-width: 0px) {
    .media-style-pad {
      padding: 0 1em;
    }

    .down-container {
      padding: 6em 1em 0;
    }

    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child {
      display: none;
    }
  }
</style>
