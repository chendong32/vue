<template>
  <leftPanel :result.asyc="contentList"></leftPanel>
</template>

<script>
  export default {
    name: 'choose',
    data() {
      return {
        contentList: []
      }
    },
    watch: {
      '$route' (to, from) {
        console.log(to.path);
      }
    },
    mounted() {
      this.contentList = [{
        "accessory": "服务器",
        "classify": "JAVA",
        "summary": "<p>其实PapaMan在学习docker的过程中。</p>",
        "content": "<p>PapaMan希望结合自己的学习经验和踩过的坑，以简单使用为主，先忽略掉复杂、不常用的功能，尽量浅显的介绍docker的核心使用方法，做到看了就懂，懂了就能用。</p>",
        "people_fill": "test",
        "qiandao": "09-14",
        "title": "Docker最新简单易懂使用教程"
      }]
    }
  }
</script>
