<template>
  <div class="hello">
    <h1>{{ msg|capitalize}}|{{ msg.split('').reverse().join('')|capitalize}}</h1>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="class1" id="r1">
    <br><br>
    <div v-bind:class="{'class1': class1}">
      {{ reversedMessage}}
    </div>
    <div v-html="message"></div>
    <input v-model="msg" placeholder="编辑我……">
    <p>消息是: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'assest',
      message: '<em>show</em>',
      class1: false
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    }
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.class1{
  background: #444;
  color: #eee;
}
  .hello{
    border: 1px solid red;
    width: 65%;
    float: left;
  }
</style>
