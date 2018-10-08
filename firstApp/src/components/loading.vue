<template>

    <div class="timeline-item" v-show="isLoading == 1">
      <div class="animated-background">
        <div class="background-masker header-top"></div>
        <div class="background-masker header-left"></div>
        <div class="background-masker header-right"></div>
        <div class="background-masker header-bottom"></div>
        <div class="background-masker subheader-left"></div>
        <div class="background-masker subheader-right"></div>
        <div class="background-masker subheader-bottom"></div>
      </div>
    </div>

</template>
<script>
  export default {
    name: 'loading',
    props: {
      result: {
        required: true
      }
    },
    data() {
      return {
        isLoading: 1 //1.开启loading，0.关闭loading
      }
    },
    watch: {
      result(value) {
        this.load(value);
      }
    },
    mounted() {
      this.load(this.isLoading);
    },
    methods: {
      load(isLoading) {
        let that = this;
        //console.log("curVal: "+isLoading+" oldVal: "+this.isLoading);
        setTimeout(function () {
          that.isLoading = isLoading;
        }, 300);
      }
    }
  }
</script>
<style scoped>
  .timeline-item {
    background: #fff;
    border-bottom: 1px solid #f2f2f2;
    padding: 25px;
    margin: 0 auto;
  }

  @keyframes placeHolderShimmer {
    0% {
      background-position: -468px 0
    }
    100% {
      background-position: 468px 0
    }
  }

  .animated-background {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 40px;
    position: relative;
  }

  .background-masker {
    background: #fff;
    position: absolute;
  }

  .background-masker.header-top,
  .background-masker.header-bottom,
  .background-masker.subheader-bottom {
    top: 0;
    left: 40px;
    right: 0;
    height: 10px;
  }

  .background-masker.header-left,
  .background-masker.subheader-left,
  .background-masker.header-right,
  .background-masker.subheader-right {
    top: 10px;
    left: 40px;
    height: 8px;
    width: 10px;
  }

  .background-masker.header-bottom {
    top: 18px;
    height: 6px;
  }

  .background-masker.subheader-left,
  .background-masker.subheader-right {
    top: 24px;
    height: 6px;
  }

  .background-masker.header-right,
  .background-masker.subheader-right {
    width: auto;
    left: 300px;
    right: 0;
  }

  .background-masker.subheader-right {
    left: 230px;
  }

  .background-masker.subheader-bottom {
    top: 30px;
    height: 10px;
  }
</style>
