<template>
  <div class="login">

      <label for="login_field">
        Username or email address
      </label>
      <input type="text" name="login" id="login_field" class="input-block input-font-style">
      <label for="password">
        Password
      </label>
      <input type="password" name="password" id="password" class="input-block input-font-style"/>
      <input type="submit" name="commit" value="Sign in" class="btn-block input-font-style"/>
  </div>
</template>
<script>
  export default{
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
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075);
  }
  .btn-block{
    display: block;
    width: 100%;
    margin-top: 20px;
    background-color: #279f43;
    box-shadow: inset 0 0.15em 0.3em rgba(27,31,35,0.15);
    color: #fff;
    border: 1px solid rgba(27,31,35,0.2);
    border-radius: 0.25em;
    box-sizing: border-box;
    font-weight: 600;
  }
  .input-font-style{
    font-size: 14px;
    line-height: 20px;
    padding: 6px 12px;
  }
</style>
