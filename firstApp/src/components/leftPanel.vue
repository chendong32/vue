<template>
  <div class="leftPanel media-style-home">
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
            <span v-html="item.content" v-show="isExpand==1+index"></span>
          </div>
          <div class="tag-tail"><a class="tag-tail-a" :class="{ expand:isExpand == 1+index}" @click="expand(1+index)">{{isExpand == 0 ? 'expand':'diminish'}}</a></div>
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
    result: {
      required: true
    }
  },
  data () {
    return {
      isExpand: 0,
      contentList:[]
    }
  },
  created () {
    //this.$layer.alert("created");//后台一次性获取数据
  },
  watch: {
    result (value) {
      this.load(value)
    }
  },
  mounted () {
    this.load(this.contentList)
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    expand: function (isExpand) {
      this.isExpand = this.isExpand == isExpand? 0: isExpand;
      if(this.$route.path.indexOf("/choose/")!=-1 && this.isExpand == 0){
        this.$router.push({path:"/"});
      }
    },
    page: function (pageNo) {
      this.$layer.alert(pageNo);//分页方法
    },
    load (contentList) {
      if (contentList && contentList.length > 0) {
        this.contentList = contentList;
      }
    }
  }
}
</script>

<style scoped>
  .leftPanel {
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
    .media-style-home{
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
