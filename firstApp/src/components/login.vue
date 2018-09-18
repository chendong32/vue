<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="loginForm">
      <form @submit.prevent="submit">
        <label for="login_field">
          Username or email address
        </label>
        <input type="text" name="login" v-model="inputText.login" id="login_field" class="input-block input-font-style">
        <label for="password">
          Password
        </label>
        <input type="password" name="password" v-model="inputText.password" id="password"
               class="input-block input-font-style"/>
        <input type="submit" name="commit" v-model="signText" class="btn-block input-font-style"
               :class="{ signing:isLogin == true}" v-bind:disabled="isLogin"/>
      </form>
    </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        isLogin: false,
        signText: "Sign in",
        isError: true,
        inputText: {}
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      },
      submit: function () {
        if (this.inputText.login != undefined && this.inputText.password != undefined) {
          this.signText = "Signing in…"
          this.isLogin = true;
          this.$parent.isLogin = 0;//主动登录状态
        } else if (this.isError) {
          $(".vl-notice-title").html("Incorrect username or password.");
          $(".vl-notice-title").css({"background-color":"#ffdce0","color": "#86181d"});
          this.isError = false;
        }

      }
    }
  }
</script>
<style>
  label {
    display: block;
    margin-bottom: 7px;
  }

  .input-block {
    width: 100%;
    display: block;
    margin-top: 5px;
    margin-bottom: 15px;
    box-sizing: border-box;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  }

  .btn-block {
    display: block;
    width: 100%;
    margin-top: 20px;
    background-color: #279f43;
    box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
    color: #fff;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 0.25em;
    box-sizing: border-box;
    font-weight: 600;
    cursor: pointer;
  }

  .input-font-style {
    font-size: 14px;
    line-height: 20px;
    padding: 6px 12px;
  }

  .signing {
    background-color: rgba(47, 193, 81, 0.8);
    cursor: default;
  }

</style>
