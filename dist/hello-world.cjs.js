'use strict';

var helloTemplate = (function (_ref) {
  var message = _ref.message,
      _style = _ref._style;
  return "\n<div class=\"".concat(_style.helloWrapper, "\">\n  <p class=\"").concat(_style.hello, "\">").concat(message, "</p>\n</div>\n");
});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
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

var css = "._3Wvu2zlWlQ{width:500px;height:300px;margin:auto}._2QYyy_578r,._3Wvu2zlWlQ{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border:1px solid #000}._2QYyy_578r{width:80%;height:80%}";
var _style = {"helloWrapper":"_3Wvu2zlWlQ","hello":"_2QYyy_578r"};
styleInject(css);

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

module.exports = index;
