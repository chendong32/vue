<template>
  <div class="htmlPanel">
    <p v-html="html"></p>
  </div>
</template>
<style>

</style>
<script>
  export default{
    // 使用时请使用 :url.sync=""传值
    props: {
      url: {
        required: true
      }
    },
    data () {
      return {
        html: ''
      }
    },
    watch: {
      url (value) {
        this.load(value)
      }
    },
    mounted () {
      this.load(this.url)
    },
    methods: {
      load (url) {
        if (url && url.length > 0) {
          let param = {
            accept: 'text/html, text/plain'
          }
          this.$http.get(url, param).then((response) => {
            // 处理HTML显示
            this.html = response.data
          }).catch(() => {
            this.html = '加载失败'
          })
        }
      }
    }
  }
</script>
