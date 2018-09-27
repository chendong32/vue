<template>
  <div class="chat media-style-chat">

    <div class="left-panel">
      <div class="left-content clear-float">
        <div class="clear-float" :class="{'tag-tail':isLogin==0}">
          <div class="tag-left-style media-style-tag">Latest comment <strong>2018-09-14</strong></div>
          <a class="tag-tail-a" @click="isLogin==0 && comment()" :class="{'not-allowed':isLogin==1}">comment</a>
        </div>
        <div class="time-line media-time-line">
          <div v-for='(item, index) in contentList'>
            <div class="time-one">
              <div class="clear-float" v-show="qiandao!=item.titleLong">
                <hr class="time-length-long"/>
                <div class="time-title-long">{{item.titleLong}}</div>
              </div>
              <div v-for='(shorts, index) in item.titleShort'>
                <div class="clear-float time-short-inline">
                  <hr class="time-length-short"/>
                  <div class="time-title-short"><strong>{{shorts.people_fill}}</strong>
                    <router-link to="/choose/2">{{shorts.title}}</router-link>
                  </div>
                </div>
                <div class="time-content media-time-content">
                  <p>{{shorts.content}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import comment from '@/components/comment'

  export default {
    name: "chat",
    data() {
      return {
        isLogin: 1,//默认是未登录状态，无法提交评论
        isCommentFrame: '',
        isComment: 0,
        contentList: [],
        qiandao:''
      }
    },
    created() {
      this.isLogin = this.$route.params.isLogin == undefined ? this.isLogin : this.$route.params.isLogin;//访问参数
      console.log("chat->isLogin: " + (this.isLogin == 0 ? "ok" : "error"));//0 表示登录状态，可提交评论
    },
    methods: {
      comment: function () {
        this.isCommentFrame = this.$layer.iframe({
          content: {
            content: comment, //传递的组件对象
            parent: this,//当前的vue对象
            data: {}//props
          },
          area: ['308px', '300px'],
          title: "Enter a comment"
        });
      },
      load: function () {
        this.axios.get('static/json/chat.json').then((response) => {
          this.contentList = response.data;
          var month = new Date().getMonth() + 1;
          this.qiandao =  month >= 1 && month <= 9 ? "0" + month + "月" : month + "月";
        }).catch((response) => {
          console.log(response);
        })
      }
    },
    watch: {
      isComment(curVal, oldVal) {
        this.$layer.close(this.isCommentFrame);
      }
    },
    mounted() {
      this.load();
    }
  }
</script>

<style scoped>
  .chat {
    width: 65%;
    float: left;
  }

  .tag-tail a:hover {
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

  .time-length-long, .time-length-short {
    background-color: #ccc;
    border: none;
  }

  .time-length-long {
    height: 2px;
  }

  .time-length-short {
    height: 1px;
  }

  .time-length-long, .time-title-long, .time-length-short, .time-title-short {
    float: left;
  }

  .time-length-long {
    width: 2em;
    margin: 2.6em 0;
  }

  .time-title-long {
    border-radius: 4px;
    padding: .1em;
    font-size: 1.5em;
    margin-top: 1em;
  }

  .time-length-short {
    width: 5%;
    margin-top: 1.6em;
  }

  .time-title-short {
    width: 85%;
    margin: 1em 0 1em 1em;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
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

  .time-title-short a {
    color: #008CBA;
  }

  .tag-tail a:hover, .time-title-short a:hover {
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 1500px) and (min-width: 0px) {
    .media-style-pad {
      padding: 0 3em;
    }

    .down-container {
      padding: 6em 3em 0;
    }
  }

  @media (max-width: 1200px) and (min-width: 0px) {
    .media-style-none {
      display: none !important;
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

    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child, .media-style-tag-parent li:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 400px) and (min-width: 0px) {
    .media-style-tag-parent li:nth-child(4), .media-style-page-start, .media-style-page-end {
      display: none;
    }

    .media-style-tag {
      width: 60%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .media-time-line {
      margin: 1em 0em 1em 1em;
    }

    .media-time-content {
      padding-left: 1em;
    }
  }
</style>
