<template>
  <div class="leftPanel media-style-home">
    <div v-for='(item, index) in contentList'>
      <div class="left-panel" v-show="(isExpand==0 || isExpand==1+index) && pageNo*pageSize > index && pageNo*pageSize <= index + pageSize">
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
    <div class="left-panel" v-show="isExpand==0 && total>1">
      <div class="page">
        <a class="page-num media-style-page-start" @click="firstPage(pageNo, pageSize)">首页</a>
        <a class="page-num" :class="{ notAllowed:pageNo <= 1}"  @click="pageNo>1 && prevPage(pageNo, pageSize)">上一页</a>
        <span class="page-current">{{pageNo}}</span>
        <a class="page-num" :class="{ notAllowed:pageNo >= pages}" @click="pageNo<pages && nextPage(pageNo, pageSize)">下一页</a>
        <a class="page-num media-style-page-end" @click="lastPage(pageNo, pageSize)">末页</a>
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
      contentList:[],
      pageNo: 1,
      pageSize: 3,
      total: 0,
      pages: 0
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
      this.backTop();
      if(this.total==1){
        this.$router.push('/');
      }else{
        this.isExpand = this.isExpand == isExpand? 0: isExpand;
      }
    },
    prevPage: function (pageNo, pageSize) {
      this.backTop();
      if (pageNo > 1){
        this.pageNo = pageNo - 1;
      }
    },
    nextPage: function (pageNo, pageSize) {
      this.backTop();
      if (pageNo < this.pages){
        this.pageNo = pageNo + 1;
      }
    },
    firstPage: function (pageNo, pageSize) {
      this.backTop();
      if (pageNo != 1){
        this.pageNo = 1;
      }
    },
    lastPage: function (pageNo, pageSize) {
      this.backTop();
      if (pageNo != this.pages){
        this.pageNo = this.pages;
      }
    },
    load (contentList) {
      if (contentList && contentList.length >= 0) {
        this.contentList = contentList;
        this.total = this.contentList.length;
        this.pages = Math.ceil(this.total/this.pageSize);
        this.pageNo = 1;
        this.pageSize = 3;
        if(this.total==1){
          this.isExpand = 1
        } else {
          this.isExpand = 0;
        }
        //console.log("pageNo: "+this.pageNo+" pageSize: "+this.pageSize+" total: "+this.total+" pages: "+this.pages);
      }
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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
  .page a:not(.notAllowed):hover, .tag-tail a:hover{
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  .notAllowed {
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
