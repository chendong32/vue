<template>
  <div class="profile">
    <input v-model="name" placeholder="编辑我……">
    <p>消息是: {{ name }}</p>

    <select v-model="selected" name="fruit">
      <option value="">选择一个网站</option>
      <option value="www.runoob.com">Runoob</option>
      <option value="www.google.com">Google</option>
    </select>

    <div id="output">
      选择的网站是: {{selected}}
    </div>

    <button v-on:click="submit">提交</button>
  </div>
</template>

<script>
    export default {
        name: "",
        data(){
          return {
            name : '',
            selected : ''
          }
        },
        methods: {
          submit: function () {
          // replace getPost with your data fetching util / API wrapper
          this.$http.get(
            'static/json/data.json',
              {
                params: {
                  name: this.name,
                  selected: this.selected
                }
              }
          ).then(function (response) {
            alert('请求成功')
              this.$router.replace({ path: '/bar/posts'})
          }
          )
        }
      }
    }
</script>

<style scoped>

</style>
