(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.helloWorld = factory());
})(this, (function () { 'use strict';

  var helloTemplate = (function (_ref) {
    var message = _ref.message,
      _style = _ref._style;
    return "\n<div class=\"".concat(_style.helloWrapper, "\">\n  <p class=\"").concat(_style.hello, "\">").concat(message, "</p>\n</div>\n");
  });

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;
    if (typeof document === 'undefined') {
      return;
    }
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".index__hello,.index__helloWrapper{align-items:center;border:1px solid #000;display:flex;justify-content:center}.index__helloWrapper{height:300px;margin:auto;width:500px}.index__hello{height:80%;width:80%}";
  var _style = {"hello":"index__hello","helloWrapper":"index__helloWrapper"};
  styleInject(css_248z);

  var helloWorld = function helloWorld() {
    return 'hello world!';
  };
  var helloElement = helloTemplate({
    message: 'hello world!',
    _style: _style
  });
  var index = {
    helloWorld: helloWorld,
    helloElement: helloElement,
    _style: _style
  };

  return index;

}));
