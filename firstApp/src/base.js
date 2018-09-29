exports.install = function (Vue, options) {
  Vue.prototype.backTop = function (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
};
