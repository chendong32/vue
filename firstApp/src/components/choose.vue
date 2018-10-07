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
        this.axios.get('api/choose/'+id).then((response)=>{
          this.contentList=response.data;
        }).catch((response)=>{
          this.$router.push('/');
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
