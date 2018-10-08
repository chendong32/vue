<template>
  <leftPanel :result.asyc="contentList"></leftPanel>
</template>

<script>
  export default {
    name: 'java',
    data() {
      return {
        contentList: []
      }
    },
    methods: {
      load:function () {
        this.axios.get('api/category/1').then((response)=>{
          this.contentList=response.data;
        }).catch((response)=>{
          console.log(response);
        })
      }
    },
    mounted() {
      this.load();
    }
  }
</script>
