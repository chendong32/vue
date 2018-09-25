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
    methods: {
      load:function (id) {
        this.axios.get('static/json/'+id+'.json').then((response)=>{
          this.contentList=response.data;
          if(this.contentList.length == 0){
            this.contentList = []
          }
        }).catch((response)=>{
          this.$router.push('/')
        })
      }
    },
    watch: {
      '$route' (to, from) {
        this.load(to.params.id);
      }
    },
    mounted() {
      this.load(this.$route.params.id);
    }
  }
</script>
