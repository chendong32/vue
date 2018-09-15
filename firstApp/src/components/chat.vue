<template>
  <div class="chat">
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
        data(){
          return {
            name : '',
            selected : ''
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
              this.$router.replace({ path: '/bar/posts'})
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
