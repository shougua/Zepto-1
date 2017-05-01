(function(window) {

  // 定义一个对象
  var Zepto = function(selector) {
    this.element = [];
    return this.$all(selector);
  };
  // Zepto原型定义方法
  Zepto.prototype = {

    $all: function(ctx) {

      this.elements = window.document.querySelectorAll(ctx);
      return this.elements;

    }

  }

  window.$ = function(ctx) {
    return new Zepto(ctx);
  }


})(window)
