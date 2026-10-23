;(function(){try{if(typeof document!='undefined'){var e=document.createElement('style');e.appendChild(document.createTextNode(".index-module__hello-wrapper,.index-module__hello{justify-content:center;align-items:center;display:flex}.index-module__hello,.index-module__hello-wrapper{border:1px solid #000}.index-module__hello-wrapper{width:500px;height:300px;margin:auto}.index-module__hello{width:80%;height:80%}"));document.head.appendChild(e)}}catch(t){console.error('inject-css',t)}})();
(function(global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define([], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.helloWorld = factory());
})(this, function() {
	var index_module_default = {
		helloWrapper: "index-module__hello-wrapper",
		hello: "index-module__hello"
	};
	// src/template/helloTemplate.js
	var helloTemplate_default = ({ message, _style }) => `
<div class="${_style.helloWrapper}">
  <p class="${_style.hello}">${message}</p>
</div>
`;
	// src/index.js
	var helloWorld = () => "hello world!";
	return {
		helloWorld,
		helloElement: helloTemplate_default({
			message: "hello world!",
			_style: index_module_default
		}),
		_style: index_module_default
	};
});
