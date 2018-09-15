<template>
  <div class="home">

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          Docker最新简单易懂使用教程
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-people_fill"></i><span> test</span></li>
            <li><i class="icon iconfont icon-qiandao"></i> 2018-09-14</li>
            <li><i class="icon iconfont icon-classify"></i> 测试分类</li>
            <li><i class="icon iconfont icon-accessory"></i> 测试</li>
          </ul>
        </div>

          <!-- 文章描述开始 -->
          <div>
            <p>其实PapaMan在学习docker的过程中，也查阅过很多资料，发现大多数文章要么就是写的很细，面面俱到；要么就是写的很深，跳过基础，却忽略了初学者，和希望了解docker技术的同学们的感受，使他们绕了弯路，或者望而却步；再有就是每个功能介绍的太独立，没有互相联系，也没有例子方便理解。</p>
          </div>

        <div class="tag-tail"><a class="tag-tail-a">阅读全文</a></div>
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
            <li><i class="icon iconfont icon-qiandao"></i> 2018-09-14</li>
            <li><i class="icon iconfont icon-classify"></i> 测试分类</li>
            <li><i class="icon iconfont icon-accessory"></i> 测试</li>
          </ul>
        </div>

        <!-- 文章描述开始 -->
        <div>
          <p>
            我相信看到这篇文章的同学肯定不需要我大讲特讲docker的基本原理，大家一定在概念方面都有了一定的了解，如果还有一些些小模糊的话，看看能不能通过我对于docker在学习过程中的一些理解上的小转变来提供一些帮助。
          </p>
        </div>

        <div class="tag-tail"><a class="tag-tail-a">阅读全文</a></div>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          Docker的使用
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li><i class="icon iconfont icon-people_fill"></i><span> test</span></li>
            <li><i class="icon iconfont icon-qiandao"></i> 2018-09-14</li>
            <li><i class="icon iconfont icon-classify"></i> 测试分类</li>
            <li><i class="icon iconfont icon-accessory"></i> 测试</li>
          </ul>
        </div>

        <!-- 文章描述开始 -->
        <div>
          <p>废话不多说，docker的核心功能一定是启动镜像，也就是run命令，下面我们以nginx为例，介绍如何使用docker启动镜像。</p>
        </div>

        <div class="tag-tail"><a class="tag-tail-a">阅读全文</a></div>
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
  name: 'home',
  data () {
    return {
      msg: 'assest',
      message: '<em>show</em>'
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    padding: 8px 16px;
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

</style>
