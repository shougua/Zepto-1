(function (window) {
  // 定义一个对象
  var Zepto = function (selector) {
    this.elements = [];
    return this.$all(selector);
  };
  // Zepto原型定义方法
  Zepto.prototype = {
    // 选择属性
    $all: function (ctx) {
      this.elements = window.document.querySelectorAll(ctx);
      return this;
    }
  }
  window.$ = function (ctx) {
    return new Zepto(ctx);
  }
  // 定义可扩展方法
  window.$.extend = function (source) {
    //遍历对象
    for (let i in source) {
      Zepto.prototype[i] = source[i];
    }
  };
})(window);

$.extend({
  //数据类型检测
  isNumber: function (val) {
    return typeof val === 'number' && isFinite(val)
  },
  isBoolean: function (val) {
    return typeof val === "boolean";
  },
  isString: function (val) {
    return typeof val === "string";
  },
  isUndefined: function (val) {
    return typeof val === "undefined";
  },
  isObj: function (str) {
    if (str === null || typeof str === 'undefined') {
      return false;
    }
    return typeof str === 'object';
  },
  isNull: function (val) {
    return val === null;
  },
  isArray: function (arr) {
    if (arr === null || typeof arr === 'undefined') {
      return false;
    }
    return Object.prototype.toString.call(arr).match(/^\[object\s(.*)\]$/)[1] === 'Array';
  },
  // methods
  hide: function () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.display = 'none';
    }
    return this;
  },
  show: function () {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].style.display = 'block';
    }
    return this;
  },
  // css设置
  css: function (val) {
    // 如果val是字符串代表要获取  如果是json代码要设置
    if (this.isObj(val)) {
      // 设置
      for (let item in val) {
        if (item === 'width' && this.isNumber(val[item]) || item === 'height' && this.isNumber(val[item])) {
          val[item] = val[item] + 'px';
        }
        for (let i = 0; i < this.elements.length; i++) {
          this.elements[i].style[item] = val[item];
        }
      }
      return this;
    } else if (this.isString(val)) {
      if (this.elements[0].currentStyle) {
        return this.elements[0].currentStyle[val];
      } else {
        return getComputedStyle(this.elements[0], null)[val];
      }
    }
  },
})

