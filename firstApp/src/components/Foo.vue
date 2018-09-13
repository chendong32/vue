<template>
  <div class="foo">

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          测试文章
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li class="tag-style">test</li>
            <li class="tag-style">2018-09-13 22:41:00</li>
            <li class="tag-style">测试分类</li>
            <li class="tag-style">测试</li>
          </ul>
        </div>
        <div>
            <!-- 文章封面图片开始 -->
            <div>
              图片
            </div>
            <!-- 文章封面图片结束 -->

            <!-- 文章描述开始 -->
            <div>
              文章详情
            </div>

        </div>
        <a class="tag-tail">阅读全文</a>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          测试文章
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li class="tag-style">test</li>
            <li class="tag-style">2018-09-13 22:41:00</li>
            <li class="tag-style">测试分类</li>
            <li class="tag-style">测试</li>
          </ul>
        </div>
        <div>
          <!-- 文章封面图片开始 -->
          <div>
            图片
          </div>
          <!-- 文章封面图片结束 -->

          <!-- 文章描述开始 -->
          <div>
            文章详情
          </div>

        </div>
        <a class="tag-tail">阅读全文</a>
      </div>
    </div>

    <div class="left-panel">
      <div class="left-content clear-float">
        <h4 class="b-title">
          测试文章
        </h4>
        <div>
          <ul class="all-tag clear-float">
            <li class="tag-style">test</li>
            <li class="tag-style">2018-09-13 22:41:00</li>
            <li class="tag-style">测试分类</li>
            <li class="tag-style">测试</li>
          </ul>
        </div>
        <div>
          <!-- 文章封面图片开始 -->
          <div>
            图片
          </div>
          <!-- 文章封面图片结束 -->

          <!-- 文章描述开始 -->
          <div>
            文章详情
          </div>

        </div>
        <a class="tag-tail">阅读全文</a>
      </div>
    </div>

    <div class="left-panel">
      <div class="page">
        <a class="page-num">首页</a>
        <a class="page-num not-allowed">上一页</a>
        <span class="page-current">1</span>
        <a class="page-num not-allowed">下一页</a>
        <a class="page-num">末页</a> <span>共 3 条记录</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'foo',
    data() {
      return {
        msg: 'assest'
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
      }
    }
  }
</script>

<style scoped>
  .foo {
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

  .not-allowed {
    cursor: not-allowed;
  }

  .all-tag{
    padding: 0px;
    list-style: none;
  }

  .tag-style{
    float: left;
    margin-right: 20px;
  }

  .clear-float:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .tag-tail{
    background-color: #008CBA;
    display: block;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    float: right;
    color: #ffffff;
  }

</style>
