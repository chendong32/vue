<template>
  <div class="foo">
    <input v-model="msg" placeholder="编辑我……">
    <p>消息是: {{ msg }}</p>
    <p>User {{name}}{{$attrs}}</p>
  </div>
</template>

<script>
    export default {
      name: 'foo',
      data () {
        return {
          msg: 'assest'
        }
      },
      computed: {
        username () {
          // 我们很快就会看到 `params` 是什么
          return this.$route.params.username
        }
      },
      props: {
        name: {
          type: String,
          default: 'Vue!'
        }
      },
      methods: {
        goBack () {
          window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  .foo {
    border: 1px solid red;
    width: 65%;
    float: left;
  }
</style>
