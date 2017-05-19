(function(window) {
  // 定义一个对象
  var Zepto = function(selector) {
    this.elements = [];
    return this.$all(selector);
  };
  // Zepto原型定义方法
  Zepto.prototype = {
    // 选择属性
    $all: function(ctx) {
      this.elements = window.document.querySelectorAll(ctx);
      return this;
    },
    // methods
    hide : function() {
      for(let i = 0;i<this.elements.length;i++) {
        this.elements[i].style.display = 'none';
      }
      return this;
    },
    show : function() {
      for(let i = 0;i<this.elements.length;i++) {
        this.elements[i].style.display = 'block';
      }
      return this;
    }
  }
  window.$ = function(ctx) {
    return new Zepto(ctx);
  }
})(window);
