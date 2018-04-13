<template>
  <div class="get">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="sites" class="content">
        <p v-for="site in sites">
          {{ site.id }}{{ site.name }} {{ site.age }}
        </p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        sites: null,
        error: null
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.error = this.get = null
        this.loading = true
        // replace getPost with your data fetching util / API wrapper
        this.$http.get('/api/activiti/login.do').then((get,err)=>{
            this.loading = false

            if (err) {
              this.error = err.toString()
            } else {
              this.sites = get.data.data
            }

          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
