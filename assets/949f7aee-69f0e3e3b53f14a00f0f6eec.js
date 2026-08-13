/*pic-time proprietary code. any use outside of a licensed pic-time site is not allowed*/var _pictimeProduction=true;
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_ES6=!1;$jscomp.ASSUME_ES2020=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.ISOLATE_POLYFILLS=!1;$jscomp.FORCE_POLYFILL_PROMISE=!1;$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;$jscomp.INSTRUMENT_ASYNC_CONTEXT=!0;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||typeof Object.defineProperties=="function"?Object.defineProperty:function(d,f,e){if(d==Array.prototype||d==Object.prototype)return d;d[f]=e.value;return d};$jscomp.getGlobal=function(d){d=["object"==typeof globalThis&&globalThis,d,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var f=0;f<d.length;++f){var e=d[f];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};
$jscomp.global=$jscomp.ASSUME_ES2020?globalThis:$jscomp.getGlobal(this);$jscomp.IS_SYMBOL_NATIVE=typeof Symbol==="function"&&typeof Symbol("x")==="symbol";$jscomp.TRUST_ES6_POLYFILLS=!$jscomp.ISOLATE_POLYFILLS||$jscomp.IS_SYMBOL_NATIVE;$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";var $jscomp$lookupPolyfilledValue=function(d,f,e){if(!e||d!=null){e=$jscomp.propertyToPolyfillSymbol[f];if(e==null)return d[f];e=d[e];return e!==void 0?e:d[f]}};
$jscomp.TYPED_ARRAY_CLASSES=function(){var d="Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64".split(" ");$jscomp.global.BigInt64Array&&(d.push("BigInt64"),d.push("BigUint64"));return d}();$jscomp.polyfillTypedArrayMethod=function(d,f,e,g){if(f)for(var h=0;h<$jscomp.TYPED_ARRAY_CLASSES.length;h++){var m=$jscomp.TYPED_ARRAY_CLASSES[h]+"Array.prototype."+d;$jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(m,f,e,g):$jscomp.polyfillUnisolated(m,f,e,g)}};
$jscomp.polyfill=function(d,f,e,g){f&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(d,f,e,g):$jscomp.polyfillUnisolated(d,f,e,g))};$jscomp.polyfillUnisolated=function(d,f,e,g){e=$jscomp.global;d=d.split(".");for(g=0;g<d.length-1;g++){var h=d[g];if(!(h in e))return;e=e[h]}d=d[d.length-1];g=e[d];f=f(g);f!=g&&f!=null&&$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:f})};
$jscomp.polyfillIsolated=function(d,f,e,g){var h=d.split(".");d=h.length===1;g=h[0];g=!d&&g in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var m=0;m<h.length-1;m++){var q=h[m];if(!(q in g))return;g=g[q]}h=h[h.length-1];e=$jscomp.IS_SYMBOL_NATIVE&&e==="es6"?g[h]:null;f=f(e);f!=null&&(d?$jscomp.defineProperty($jscomp.polyfills,h,{configurable:!0,writable:!0,value:f}):f!==e&&($jscomp.propertyToPolyfillSymbol[h]===void 0&&(e=Math.random()*1E9>>>0,$jscomp.propertyToPolyfillSymbol[h]=$jscomp.IS_SYMBOL_NATIVE?
$jscomp.global.Symbol(h):$jscomp.POLYFILL_PREFIX+e+"$"+h),$jscomp.defineProperty(g,$jscomp.propertyToPolyfillSymbol[h],{configurable:!0,writable:!0,value:f})))};$jscomp.polyfill("Array.prototype.flat",function(d){return d?d:function(f){f=f===void 0?1:f;var e=[];Array.prototype.forEach.call(this,function(g){Array.isArray(g)&&f>0?(g=Array.prototype.flat.call(g,f-1),e.push.apply(e,g)):e.push(g)});return e}},"es9","es5");
$jscomp.polyfill("Array.prototype.includes",function(d){return d?d:function(f,e){var g=this;g instanceof String&&(g=String(g));var h=g.length;e=e||0;for(e<0&&(e=Math.max(e+h,0));e<h;e++){var m=g[e];if(m===f||Object.is(m,f))return!0}return!1}},"es7","es3");
function blogLoader69f0e3e3b53f14a00f0f6eec(){function d(a=""){const b=document.createElement("template");b.innerHTML=a.trim();return b.content.firstChild}function f(a="",b=document.head){a=d(`<style class="pt-style">${a}</style>`);b.append(a)}function e(a=""){return a.split(",").filter(b=>b)}function g(a,b,c=200){const k=setInterval(()=>{a()&&(clearInterval(k),b())},c)}function h(a,b){const c=new Image;c.addEventListener("load",()=>b(c));c.addEventListener("error",()=>b(null));c.src=a}function m(a){let b;
window.isPinterestLoaded||(window.isPinterestLoaded=!0,window.PinUtils&&(b=window.PinUtils),q(),y());g(()=>window.PTPinUtils||window.PinUtils,()=>{window.PTPinUtils||(window.PTPinUtils=window.PinUtils);b&&(window.PinUtils=b);a()})}function q(){const a=document.createElement("SCRIPT");a.async=!0;a.src="//assets.pinterest.com/js/pinit.js";a.dataset.pinUtil="PTPinUtils";a.dataset.pinHover="true";a.dataset.pinRound="true";a.dataset.pinSticky="false";r&&(a.dataset.pinTall="true");document.head.append(a)}
function y(){const a=d("\n\t\t\t<style>\n\t\t\t\tpicture[data-pt-pinterest] {\n\t\t\t\t\tdisplay:  block;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\n\t\t\t\tpicture[data-pt-pinterest] [data-pin-href] {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop:      10px;\n\t\t\t\t\tleft:     10px;\n\t\t\t\t}\n\n\t\t\t\tpicture[data-pt-pinterest]:not(:hover) [data-pin-href] {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t</style>\n\t\t");document.head.append(a)}function z(a){function b(c){var k;if(!c.hasPin){var l=
location.href,n=c.querySelector("img");l=d(`
				<a data-pin-do="buttonPin" data-pin-round="true"
				   data-pin-url="${l}" data-pin-media="${n.src}" data-pin-description="${n.alt||document.title}"
				   href="https://www.pinterest.com/pin/create/button/"
				></a>
			`);c.append(l);c.dataset.ptPinterest="";(k=window.PTPinUtils)===null||k===void 0||k.build(c);c.hasPin=!0}}a instanceof HTMLPictureElement?b(a):a.querySelectorAll("picture").forEach(b)}function A(a){function b(c){c.querySelector("img").dataset.pinNopin="true"}a instanceof HTMLPictureElement?b(a):a.querySelectorAll("picture").forEach(b)}function t(a,b=document){let c=b.querySelector(`.pt-${a}`);if(c)return c;c=d(`<div class="pt-${a}" style="display: none"></div>`);b.body.append(c);return c}function B(){const a=
document.querySelectorAll('template[data-pt-slideshowid="69f0e3e3b53f14a00f0f6eec"]');return a.length?[...a]:[...document.scripts].filter(b=>/slideswebcomponentembed\.js\/69f0e3e3b53f14a00f0f6eec\/?(\?.*)?$/i.test(b.src))}const r=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|CriOS/i.test(navigator.userAgent);var C=4,D=134273682400000;const E=`<!-- _PT_SCRIPTVER_blogVer:58         _PT_SCRIPTSLIDEID:69f0e3e3b53f14a00f0f6eec --><style >.overlay[data-v-44337222]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;position:fixed}@-webkit-keyframes rotate-360-44337222{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-44337222{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-44337222],icon-elem[type=spinner] svg[data-v-44337222]{-webkit-animation:rotate-360-44337222 1s linear infinite;animation:rotate-360-44337222 1s linear infinite}.overlay[data-v-44337222]{z-index:9999;background:#f5f1ed}.overlay.no-overlay[data-v-44337222]{background:rgba(0,0,0,0);pointer-events:none}.overlay.no-overlay .dialog[data-v-44337222]{pointer-events:auto}.overlay.fade-enter-active[data-v-44337222],.overlay.fade-leave-active[data-v-44337222]{-webkit-transition:opacity .5s;transition:opacity .5s}.overlay.fade-enter-to[data-v-44337222],.overlay.fade-leave-to[data-v-44337222]{opacity:0}.overlay.fade-enter-to[data-v-44337222]{opacity:1}.overlay.fade-pop-enter-active[data-v-44337222],.overlay.fade-pop-leave-active[data-v-44337222]{-webkit-transition:opacity .5s;transition:opacity .5s}.overlay.fade-pop-enter-active .content[data-v-44337222],.overlay.fade-pop-leave-active .content[data-v-44337222]{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.overlay.fade-pop-enter-from[data-v-44337222],.overlay.fade-pop-leave-to[data-v-44337222]{opacity:0}.overlay.fade-pop-enter-to[data-v-44337222]{opacity:1}.overlay.fade-pop-enter-to .content[data-v-44337222]{margin-bottom:-100vh;-webkit-transform:translateY(-100vh);-ms-transform:translateY(-100vh);transform:translateY(-100vh)}.overlay.fade-pop-leave-to .content[data-v-44337222]{-webkit-transform:translateY(100vh);-ms-transform:translateY(100vh);transform:translateY(100vh)}.close[data-v-44337222]{position:fixed;font-size:36px;cursor:pointer;opacity:.9;-webkit-transition:opacity .3s;transition:opacity .3s;z-index:999}@media(min-width:651px){.close[data-v-44337222]{top:50px;right:50px}}@media(max-width:650px){.close[data-v-44337222]{top:15px;right:15px}}.close[data-v-44337222]:hover{opacity:1}.close .svg-icon[data-v-44337222]{width:20px;height:20px;stroke:#444}.content[data-v-44337222]{width:100%;height:100%}.dialog.common-dialog[data-v-44337222]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px;background:#fff;border-radius:3px;-webkit-box-shadow:1px 1px 3px rgba(0,0,0,.4);box-shadow:1px 1px 3px rgba(0,0,0,.4)}.dialog.common-dialog[data-v-44337222] .actions{margin-top:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.dialog.common-dialog[data-v-44337222] .actions button{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:200px}.dialog.pop-enter-active[data-v-44337222],.dialog.pop-leave-active[data-v-44337222]{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.dialog.pop-enter[data-v-44337222],.dialog.pop-leave-to[data-v-44337222]{-webkit-transform:translateY(100vh);-ms-transform:translateY(100vh);transform:translateY(100vh)}@-webkit-keyframes rotate-360-637ce637{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-637ce637{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-637ce637],icon-elem[type=spinner] svg[data-v-637ce637]{-webkit-animation:rotate-360-637ce637 1s linear infinite;animation:rotate-360-637ce637 1s linear infinite}.select-box[data-v-637ce637]{cursor:pointer;position:relative}.select-box.opened ul[data-v-637ce637]{display:block}.select-box.opened .svg-icon[data-v-637ce637]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.select-box.opened .current[data-v-637ce637]:after{opacity:1}.current[data-v-637ce637],.li[data-v-637ce637]{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:40px;padding:12px 14px 13px;width:100%}.current[data-v-637ce637]{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:30px}.current[data-v-637ce637]:hover{opacity:.9}.current[data-v-637ce637]:after{content:"";display:block;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;width:100%;height:100%;border-width:1px;border-style:solid;opacity:.5;-webkit-transition:opacity .5s;transition:opacity .5s}.current.ghost[data-v-637ce637]{pointer-events:none}.svg-icon[data-v-637ce637]{height:16px;position:absolute;right:13px;top:0;bottom:0;margin:auto 0;-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}.ul[data-v-637ce637]{display:none;position:absolute;top:40px;width:100%;padding:7px 0;max-height:430px;overflow-y:auto;background:#fff;color:#444;border-width:1px;border-style:solid;z-index:1}.li[data-v-637ce637]:hover{background:#ececec}.native-select[data-v-637ce637]{height:40px;position:absolute;top:0;left:0;width:100%;opacity:0}[data-v-28ed9d2c]:not(#dummy) .menu-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@-webkit-keyframes rotate-360-28ed9d2c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-28ed9d2c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-28ed9d2c],icon-elem[type=spinner] svg[data-v-28ed9d2c]{-webkit-animation:rotate-360-28ed9d2c 1s linear infinite;animation:rotate-360-28ed9d2c 1s linear infinite}[data-v-28ed9d2c]:not(#dummy) .menu-item,[data-v-28ed9d2c]:not(#dummy) .menu-list:after,[data-v-28ed9d2c]:not(#dummy) .menu-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;height:64px;padding:0 20px}[data-v-28ed9d2c]:not(#dummy) .menu-list:after{content:""}[data-v-28ed9d2c]:not(#dummy) .menu-item>.svg-icon,[data-v-28ed9d2c]:not(#dummy) .menu-title>.svg-icon{margin-right:20px}:not(#dummy) .mobile-menu-dialog:before{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;position:fixed}:not(#dummy) .mobile-menu-dialog{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;background:none;color:var(--body-text-color,#444)}:not(#dummy) .mobile-menu-dialog:before{content:"";background:var(--body-text-color,#444);opacity:.9;z-index:-1}:not(#dummy) .mobile-menu-dialog .content{height:auto;background:var(--background-color,#f5f1ed);color:var(--body-text-color,#444)}:not(#dummy) .mobile-menu-dialog .content .svg-icon:not(.fill-icon){stroke:var(--body-text-color,#444);fill:rgba(0,0,0,0)}:not(#dummy) .mobile-menu-dialog .content .svg-icon.fill-icon{fill:var(--body-text-color,#444)}:not(#dummy) .mobile-menu-dialog .close .svg-icon{stroke:var(--background-color,#f5f1ed)}@-webkit-keyframes rotate-360-245ebe51{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-245ebe51{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-245ebe51],icon-elem[type=spinner] svg[data-v-245ebe51]{-webkit-animation:rotate-360-245ebe51 1s linear infinite;animation:rotate-360-245ebe51 1s linear infinite}.embed[data-v-245ebe51]{width:100%;height:100%}@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-box-sizing:content-box;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(270deg,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(90deg,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(0deg,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/44*27);height:var(--swiper-navigation-size);margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:"next"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:opacity .3s;transition:opacity .3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);-ms-transform:scale(.66);transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);-ms-transform:scale(.33);transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;-webkit-box-shadow:none;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:transform .2s,top .2s;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,left .2s;transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:transform .2s,right .2s;transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;-ms-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s linear infinite;animation:swiper-preloader-spin 1s linear infinite;-webkit-box-sizing:border-box;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:rgba(0,0,0,0)}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;-ms-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes rotate-360-76869b6e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-76869b6e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-76869b6e],icon-elem[type=spinner] svg[data-v-76869b6e]{-webkit-animation:rotate-360-76869b6e 1s linear infinite;animation:rotate-360-76869b6e 1s linear infinite}.sortable[data-v-76869b6e]{position:relative;width:100%}.sortable.cloaked .main-wrapper[data-v-76869b6e]{opacity:0}.sortable.cloaked .ghost-wrapper[data-v-76869b6e]{opacity:1!important}.sortable.dragging[data-v-76869b6e] .sortable-item{-webkit-transition:width .3s,height .3s,-webkit-transform .3s;transition:width .3s,height .3s,-webkit-transform .3s;transition:transform .3s,width .3s,height .3s;transition:transform .3s,width .3s,height .3s,-webkit-transform .3s}.sortable.free-style .ghost-wrapper[data-v-76869b6e] .dragged{opacity:.3}.ghost-wrapper[data-v-76869b6e]{position:absolute;display:block!important;margin:0!important;padding:0!important;top:0;left:0;right:0;bottom:0;z-index:1;pointer-events:none;opacity:0}.ghost-wrapper[data-v-76869b6e] .ghost-container{position:static!important}.ghost-wrapper[data-v-76869b6e] .sortable-item{position:absolute!important;top:0!important;left:0!important;margin:0!important}.ghost-wrapper[data-v-76869b6e] .drag-ghost{pointer-events:none!important;position:absolute!important;top:0!important;left:0!important;opacity:.4!important;z-index:100000!important}.main-wrapper[data-v-76869b6e]{width:100%;z-index:-2}.main-wrapper[data-v-76869b6e] *{-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sortable.free-style .main-wrapper[data-v-76869b6e] :hover{z-index:1000!important}@-webkit-keyframes rotate-360-d2bf8e5a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-d2bf8e5a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-d2bf8e5a],icon-elem[type=spinner] svg[data-v-d2bf8e5a]{-webkit-animation:rotate-360-d2bf8e5a 1s linear infinite;animation:rotate-360-d2bf8e5a 1s linear infinite}img[data-v-d2bf8e5a]{width:95%}.proofing-scene[data-v-d2bf8e5a]{text-align:center;padding:4%;background-color:rgba(36,52,106,.86);top:12px;position:relative;margin-bottom:15px}.proofing-scene-title[data-v-d2bf8e5a]{font-family:Crimson Text,serif;font-size:24px;font-weight:600;color:#fff;letter-spacing:0;text-transform:uppercase}.proofing-scene-subtitle[data-v-d2bf8e5a]{font-family:Crimson Text,serif;font-weight:600;font-size:16px;color:#fff;letter-spacing:0;margin:15px 0}.start-proofing-btn[data-v-d2bf8e5a]{font-family:Gotham Narrow SSm Medium,sans-serif;font-size:16px;background:#fff;border-radius:2px;padding:12px 50px;color:#596280;cursor:pointer}@-webkit-keyframes rotate-360-33786603{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-33786603{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-33786603],icon-elem[type=spinner] svg[data-v-33786603]{-webkit-animation:rotate-360-33786603 1s linear infinite;animation:rotate-360-33786603 1s linear infinite}.face[data-v-33786603]{width:60px;min-width:60px;height:60px;background:#e2d3c0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.face__image[data-v-33786603]{width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:50%}.face__image--selected[data-v-33786603]{width:44px;height:44px}.face__select-icon[data-v-33786603]{width:12px;height:12px;border:1px solid #fff;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#c8b39d;margin-left:calc(100% - 8px);margin-top:calc(100% - 8px)}.face__select-icon .vee-icon[data-v-33786603]{width:8px;height:5px;stroke:#fff!important}.face--large[data-v-33786603]{width:160px;min-width:160px;height:160px}.face--large .face__image--selected[data-v-33786603]{width:128px;height:128px}.face--large .face__select-icon[data-v-33786603]{width:24px;height:24px;margin-left:calc(100% - 14px);margin-top:calc(100% - 14px)}.face--large .face__select-icon .vee-icon[data-v-33786603]{width:12px;height:8px}@-webkit-keyframes rotate-360-6ba84078{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-6ba84078{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-6ba84078],icon-elem[type=spinner] svg[data-v-6ba84078]{-webkit-animation:rotate-360-6ba84078 1s linear infinite;animation:rotate-360-6ba84078 1s linear infinite}.face-recognition[data-v-6ba84078]{font-family:Crimson Text,serif;text-align:center}.face-recognition__title[data-v-6ba84078]{font-size:24px;font-weight:600;letter-spacing:2.25px;text-transform:uppercase;color:#444;text-align:center;margin:60px 0 5px}.face-recognition__sub-title[data-v-6ba84078]{font-weight:600;font-size:16px;letter-spacing:1.5px;text-align:center}.face-recognition__list[data-v-6ba84078]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:50px}.face-recognition__item[data-v-6ba84078]{margin:9px 9px 0 0;cursor:default!important}.show-faces-btn[data-v-6ba84078]{background:#000;border:none;border-radius:0;padding:4px 35px;font-family:Gotham Narrow SSm,sans-serif;font-size:18px;letter-spacing:.9px;color:#fff;text-align:center;cursor:pointer;margin:50px auto}@-webkit-keyframes rotate-360-210f5f83{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-210f5f83{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-210f5f83],icon-elem[type=spinner] svg[data-v-210f5f83]{-webkit-animation:rotate-360-210f5f83 1s linear infinite;animation:rotate-360-210f5f83 1s linear infinite}.temp-like-btn[data-v-210f5f83]{background-color:#fff;padding:3px 7px}.selected[data-v-210f5f83]{position:relative;top:90%;left:90%;width:10%;background-color:hsla(0,0%,100%,.6509803921568628);font-weight:700;cursor:pointer}.delete-btn[data-v-210f5f83]{top:10px;left:14px;width:40px;height:40px;background:rgba(255,70,70,.541)}.delete-btn[data-v-210f5f83],.select-btn[data-v-210f5f83]{display:none;position:absolute;border-radius:50%;border:1px solid #fff;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}.select-btn[data-v-210f5f83]{bottom:15px;right:15px;width:30px;height:30px;background:hsla(0,0%,82%,.75);opacity:.9;-webkit-filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));-webkit-transition:all .2s ease;transition:all .2s ease}.select-btn svg[data-v-210f5f83]{-webkit-transition:opacity .2s ease;transition:opacity .2s ease}.select-btn svg path[data-v-210f5f83]{-webkit-transition:all .2s ease;transition:all .2s ease}.select-btn[data-v-210f5f83]:hover{opacity:1;background:#d1d1d1}.select-btn:hover svg[data-v-210f5f83]{opacity:1}.select-btn:hover svg path[data-v-210f5f83]{stroke:#000}.select-btn--active[data-v-210f5f83]{display:-webkit-box;display:-ms-flexbox;display:flex;background:hsla(0,0%,82%,0)}.select-btn--active svg[data-v-210f5f83]{opacity:0}.select-btn--selected[data-v-210f5f83]{background:rgba(200,179,157,.9);-webkit-filter:drop-shadow(0 2px 4px rgba(0,0,0,0));filter:drop-shadow(0 2px 4px rgba(0,0,0,0))}.select-btn--selected svg[data-v-210f5f83]{opacity:1}.preview-btn[data-v-210f5f83]{display:none;position:absolute;bottom:-4px;left:15px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;cursor:pointer}.resize-btn[data-v-210f5f83]{display:none;position:absolute;top:0;right:0;cursor:pointer;color:#fff}.resize-btn .resize-icon[data-v-210f5f83]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:25px;height:25px;background-position:-80px -105px}.resize-btn:hover .resize-icon[data-v-210f5f83]{background-position:-80px -140px}.img[data-v-210f5f83]{background-size:100%!important;background-repeat:no-repeat;background-position:50%;-webkit-transition:background-size .2s ease;transition:background-size .2s ease}.img--select-mode[data-v-210f5f83]{background-color:#e6dfd6!important;cursor:pointer}.img--select-mode:hover .preview-btn[data-v-210f5f83]{display:-webkit-box;display:-ms-flexbox;display:flex}.img--select-mode:hover .select-btn[data-v-210f5f83]{opacity:1;background:#d1d1d1}.img--select-mode:hover .select-btn svg[data-v-210f5f83]{opacity:1}.img--select-mode:hover .select-btn svg path[data-v-210f5f83]{stroke:#000}.img--selected[data-v-210f5f83]{background-size:90%!important}.img-hovered:hover .delete-btn[data-v-210f5f83],.img-hovered:hover .resize-btn[data-v-210f5f83],.img-hovered:hover .select-btn[data-v-210f5f83]{display:-webkit-box;display:-ms-flexbox;display:flex}.img-mobile-selected-mode .mobile-select-btn[data-v-210f5f83]{width:26px;height:26px;border-radius:50%;border:1px solid #fff;background:hsla(0,0%,100%,.4);padding:0;position:absolute;right:10px;bottom:10px}.img-mobile-selected-mode .mobile-select-btn--selected[data-v-210f5f83]{background:rgba(69,58,0,.8);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.img-mobile-selected-mode .mobile-select-btn__icon[data-v-210f5f83]{width:10px;height:10px;stroke:#fff;stroke-width:2px}@-webkit-keyframes rotate-360-83bb7a40{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-83bb7a40{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-83bb7a40],icon-elem[type=spinner] svg[data-v-83bb7a40]{-webkit-animation:rotate-360-83bb7a40 1s linear infinite;animation:rotate-360-83bb7a40 1s linear infinite}.GridImg[data-v-83bb7a40]{width:100%;height:100%}.photoGrid[data-v-83bb7a40]{--sceneCollapsedHeight:430px}.photoGrid--large[data-v-83bb7a40]{overflow:hidden;-webkit-transition:height 1s ease;transition:height 1s ease}.photoGrid--large.photoGrid--collapsed[data-v-83bb7a40]{height:var(--sceneCollapsedHeight)!important;-webkit-transition:height .5s ease;transition:height .5s ease}.photoScene[data-v-83bb7a40]{position:relative}.photoScene--large[data-v-83bb7a40]:before{content:"";width:100%;height:75px;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(#fff));background:linear-gradient(180deg,hsla(0,0%,100%,0),#fff);position:absolute;bottom:0;left:0;z-index:5;pointer-events:none;opacity:0;visibility:hidden;-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.photoScene--large.photoScene--collapsed[data-v-83bb7a40]:before{opacity:1;visibility:visible}.photo-stream[data-v-83bb7a40]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:40px 20px}.photo[data-v-83bb7a40]{position:relative;width:200px;height:200px;border:2px solid #555;margin:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.photo:hover>.photo__check[data-v-83bb7a40]{display:block}.photo__check[data-v-83bb7a40]{display:none;position:absolute;bottom:10px;left:10px;z-index:2;width:30px;height:30px;border-radius:50%;border:2px solid #f4f4f4;background:#c8b39d;opacity:.5}.photo__check--selected[data-v-83bb7a40]{display:block;opacity:1}.check-icon[data-v-83bb7a40]{display:block;margin:5px}.photoGrid--hide[data-v-83bb7a40]{-webkit-animation:hideGrid-83bb7a40 .5s linear;animation:hideGrid-83bb7a40 .5s linear;opacity:0}.photoGrid--show[data-v-83bb7a40]{-webkit-animation:showGrid-83bb7a40 .5s linear;animation:showGrid-83bb7a40 .5s linear}.resized-photo[data-v-83bb7a40]{position:absolute;z-index:2;background-color:rgba(0,0,0,0)}.resized-photo-img[data-v-83bb7a40]{background-size:cover}.resized-photo--show[data-v-83bb7a40]{-webkit-animation:imageIncrease-83bb7a40 .6s linear;animation:imageIncrease-83bb7a40 .6s linear;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes showGrid-83bb7a40{0%{opacity:0}to{opacity:1}}@keyframes showGrid-83bb7a40{0%{opacity:0}to{opacity:1}}@-webkit-keyframes hideGrid-83bb7a40{0%{opacity:1}to{opacity:0}}@keyframes hideGrid-83bb7a40{0%{opacity:1}to{opacity:0}}@-webkit-keyframes imageIncrease-83bb7a40{to{width:100%;height:100%}}@keyframes imageIncrease-83bb7a40{to{width:100%;height:100%}}.scene-tools[data-v-83bb7a40]{margin-bottom:10px}.collapse-btn[data-v-83bb7a40]{border:1px solid #999;border-radius:4px;padding:2px 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.collapse-btn[data-v-83bb7a40]:hover{border-color:#555}.collapse-btn:hover .arrow-icon[data-v-83bb7a40]{stroke:#555}.arrow-icon[data-v-83bb7a40]{width:20px;height:16px;stroke:#999}.arrow-icon--up[data-v-83bb7a40]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.slide-enter-active[data-v-83bb7a40]{-webkit-transition:all .3s ease-out;transition:all .3s ease-out;max-height:500px}.slide-leave-active[data-v-83bb7a40]{-webkit-transition:all .5s;transition:all .5s;max-height:500px}.slide-enter-from[data-v-83bb7a40],.slide-leave-to[data-v-83bb7a40]{opacity:.1;max-height:0}.video-scene[data-v-4ff3221f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-3af30f5c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-3af30f5c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-3af30f5c],icon-elem[type=spinner] svg[data-v-3af30f5c]{-webkit-animation:rotate-360-3af30f5c 1s linear infinite;animation:rotate-360-3af30f5c 1s linear infinite}.sceneTitle[data-v-3af30f5c]{padding-bottom:2%;padding-top:2%;left:41vw;text-align:center;scroll-margin-top:150px}.sceneTitle__customizable[data-v-3af30f5c]{color:var(--stream-title-color);font-family:var(--stream-title-font-family);font-size:var(--stream-title-font-size)}@-webkit-keyframes rotate-360-e18b99cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-e18b99cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-e18b99cc],icon-elem[type=spinner] svg[data-v-e18b99cc]{-webkit-animation:rotate-360-e18b99cc 1s linear infinite;animation:rotate-360-e18b99cc 1s linear infinite}.modal-bg[data-v-e18b99cc]{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:99;background:hsla(0,0%,81.6%,.9);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.modal-bg--top[data-v-e18b99cc]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.modal-bg--bottom[data-v-e18b99cc]{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.close-btn[data-v-e18b99cc]{position:absolute;top:30px;right:30px;cursor:pointer;border:none;outline:none;background:rgba(0,0,0,0)}.close-btn__icon[data-v-e18b99cc]{width:16px;height:16px;stroke:#000}.close-icon[data-v-e18b99cc]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:20px;height:20px;background-position:-20px -720px}.close-icon[data-v-e18b99cc]:hover{background-position:-20px -750px}.modal--relative[data-v-e18b99cc]{position:relative}.modal--relative .close-btn[data-v-e18b99cc]{top:25px;right:30px}@-webkit-keyframes rotate-360-7d376326{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-7d376326{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-7d376326],icon-elem[type=spinner] svg[data-v-7d376326]{-webkit-animation:rotate-360-7d376326 1s linear infinite;animation:rotate-360-7d376326 1s linear infinite}img[data-v-7d376326]{width:95%}.edit-collection-btn[data-v-7d376326]{cursor:pointer;border:1px solid #000;border-radius:4px;padding:5px 20px;margin:0 30px 30px 0}.clear-modal[data-v-7d376326]{width:675px;height:350px;background:#fff;font-family:Crimson Text,serif;color:#000;padding-top:85px}.clear-modal__title[data-v-7d376326]{font-family:Gotham Narrow SSm,sans-serif;font-size:24px;text-align:center;letter-spacing:2.25px;text-transform:uppercase}.clear-modal__sub-title[data-v-7d376326]{font-size:16px;text-align:center;letter-spacing:.5px;margin:16px 0 80px}.clear-modal__tools[data-v-7d376326]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.clear-modal__btn[data-v-7d376326]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;min-width:230px;height:50px;font-family:Gotham Narrow SSm,sans-serif;font-size:16px;line-height:19px;letter-spacing:.6px;border-radius:2px}.clear-modal__btn--confirm[data-v-7d376326]{background:#000;color:#fff;margin-left:20px}.clear-modal__btn--cancel[data-v-7d376326]{background:#fff;color:#000;border:1px solid #000}.scrollable-wrapper{width:100%;height:100vh;overflow:auto}.logo[data-v-2a8d4c1c]{width:30%}@-webkit-keyframes rotate-360-f02732ea{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-f02732ea{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-f02732ea],icon-elem[type=spinner] svg[data-v-f02732ea]{-webkit-animation:rotate-360-f02732ea 1s linear infinite;animation:rotate-360-f02732ea 1s linear infinite}.dropdown[data-v-f02732ea]{position:relative}.dropdown-list[data-v-f02732ea]{position:absolute;z-index:2;top:60px;left:-130px;background:#fff;-webkit-box-shadow:0 0 9px hsla(0,0%,76.1%,.5);box-shadow:0 0 9px hsla(0,0%,76.1%,.5)}.dropdown-list[data-v-f02732ea]:before{display:block;content:"";width:0;height:0;position:absolute;top:0;left:50%;border-width:10px;border-style:solid;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff #fff;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg);-webkit-box-shadow:-3px 3px 3px 0 hsla(0,0%,76.1%,.5);box-shadow:-3px 3px 3px 0 hsla(0,0%,76.1%,.5)}@-webkit-keyframes rotate-360-26151d44{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-26151d44{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-26151d44],icon-elem[type=spinner] svg[data-v-26151d44]{-webkit-animation:rotate-360-26151d44 1s linear infinite;animation:rotate-360-26151d44 1s linear infinite}.pt-tooltip[data-v-26151d44]{-webkit-box-sizing:border-box;box-sizing:border-box;width:-webkit-max-content;width:-moz-max-content;width:max-content;background:#e7e7e7;border-radius:4px;padding:17px 15px;font-family:Gotham Narrow SSm,sans-serif;font-size:13px;line-height:15px;text-align:center;letter-spacing:.2px;color:#000;position:absolute;top:calc(100% + 20px);z-index:99999999}.pt-tooltip[data-v-26151d44]:before{content:"";display:block;width:0;height:0;border-left:10px solid rgba(0,0,0,0);border-right:10px solid rgba(0,0,0,0);border-bottom:10px solid #e7e7e7;border-top:none;position:absolute;top:-7px;left:calc(50% - 7px)}@-webkit-keyframes rotate-360-3c868c3f{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-3c868c3f{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-3c868c3f],icon-elem[type=spinner] svg[data-v-3c868c3f]{-webkit-animation:rotate-360-3c868c3f 1s linear infinite;animation:rotate-360-3c868c3f 1s linear infinite}.share-list[data-v-3c868c3f]{list-style-type:none;width:330px;margin:0;padding:60px 0 34px;font-family:Gotham Narrow SSm Medium,sans-serif;font-size:14px;color:#444}.share-list li[data-v-3c868c3f]{padding:15px 0 15px 35px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.share-list li[data-v-3c868c3f]:hover{background:#f9f9f9}.share-list-icon[data-v-3c868c3f]{width:85px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.share-icon[data-v-3c868c3f]{background-position:-80px -880px;margin-top:20px}.fb-icon[data-v-3c868c3f],.share-icon[data-v-3c868c3f]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:20px;height:21px}.fb-icon[data-v-3c868c3f]{background-position:-55px -750px}.pinterest-icon[data-v-3c868c3f]{background-position:-55px -840px}.pinterest-icon[data-v-3c868c3f],.whatsapp-icon[data-v-3c868c3f]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:20px;height:21px}.whatsapp-icon[data-v-3c868c3f]{background-position:-540px -120px}.email-icon[data-v-3c868c3f]{background-position:-80px -350px}.email-icon[data-v-3c868c3f],.link-icon[data-v-3c868c3f]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:24px;height:21px}.link-icon[data-v-3c868c3f]{background-position:-540px -300px}.share-btn[data-v-3c868c3f]{position:relative;background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer}.share-btn__tooltip[data-v-3c868c3f]{display:none;width:200px;left:-90px}.share-btn:hover .share-btn__tooltip[data-v-3c868c3f]{display:block}.hoverImg{position:fixed;right:0;top:15%}img[data-v-5f7866b4]{margin-top:1.2%;width:3%;height:59%}.selected-mode-btn[data-v-5f7866b4]{background:rgba(0,0,0,0);border:none;padding:0;font-family:Inter,Gotham Narrow SSm,sans-serif;font-size:15px;color:#666;margin-right:17px}@-webkit-keyframes rotate-360-331ef274{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-331ef274{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-331ef274],icon-elem[type=spinner] svg[data-v-331ef274]{-webkit-animation:rotate-360-331ef274 1s linear infinite;animation:rotate-360-331ef274 1s linear infinite}.top-bar-nav[data-v-331ef274]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex}.top-bar-nav__link[data-v-331ef274]{font-family:Crimson Text,serif;font-size:18px;font-weight:700;line-height:22px;letter-spacing:1.7px;text-transform:uppercase;color:#1c1c1c;margin-right:30px}.top-bar-nav__underline[data-v-331ef274]{position:absolute;height:2px;top:100%;background:#1c1c1c;-webkit-transition:transform .2s ease;transition:transform .2s ease}.topBarSceneNavButton[data-v-4cf87ef4]{font-size:13px;line-height:13px;margin:0 15px 0 15px;cursor:pointer}.topBarSceneNavDropdownButton[data-v-074729cd]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:13px;line-height:13px;margin:0 0 0 15px;cursor:pointer;border-right:1px solid #000}.topBarSceneNavDropdownButton div[data-v-074729cd]{margin-left:10px}@-webkit-keyframes rotate-360-fdd81676{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-fdd81676{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-fdd81676],icon-elem[type=spinner] svg[data-v-fdd81676]{-webkit-animation:rotate-360-fdd81676 1s linear infinite;animation:rotate-360-fdd81676 1s linear infinite}.selected-tool[data-v-fdd81676]{width:100%;height:80px;background:#f4f1ee;color:#444;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.selected-tool__left-col[data-v-fdd81676]{margin-left:52px}@media(max-width:650px){.selected-tool__left-col[data-v-fdd81676]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:0}}.selected-tool__center-col[data-v-fdd81676],.selected-tool__right-col[data-v-fdd81676]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.selected-tool__right-col[data-v-fdd81676]{margin-right:68px}@media(max-width:650px){.selected-tool__right-col[data-v-fdd81676]{margin-right:0}}[data-v-fdd81676] .selected-btn{border:none;background:rgba(0,0,0,0);cursor:pointer}[data-v-fdd81676] .selected-btn--save{font-family:Gotham Narrow SSm Medium,sans-serif;font-size:18px;text-transform:uppercase;color:#1c1c1c}@media(max-width:650px){[data-v-fdd81676] .selected-btn--save{font-size:14px}}.selected-btn--buy[data-v-fdd81676]{font-family:Gotham Narrow Medium,sans-serif;font-size:16px;color:#444}.share-icon[data-v-fdd81676]{background-position:-80px -874px}.download-icon[data-v-fdd81676],.share-icon[data-v-fdd81676]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:24px;height:24px}.download-icon[data-v-fdd81676]{background-position:-476px -206px;background-color:rgba(0,0,0,0)}.close-icon[data-v-fdd81676]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:24px;height:24px;background-position:-20px -750px}.selected-label[data-v-fdd81676]{font-family:Gotham Narrow SSm Medium,sans-serif;font-size:16px;color:#444}@media(max-width:650px){.selected-label[data-v-fdd81676]{font-size:14px}}.share-out-icon[data-v-fdd81676]{width:22px;height:22px;fill:#555;stroke:#555}.confirm-modal[data-v-fdd81676]{width:100vw;height:495px;background:#fff;border-radius:13px 13px 0 0;font-family:Inter,Gotham Narrow SSm,sans-serif;color:#000;text-align:center;padding:75px 33px 0}.confirm-modal__title[data-v-fdd81676]{font-size:22px;font-weight:600;margin-bottom:40px}.confirm-modal__sub-title[data-v-fdd81676]{font-size:14px;margin:0 0 53px}.confirm-modal__btn[data-v-fdd81676]{width:100%;height:50px;border-radius:5px;font-weight:500;font-size:15px}.confirm-modal__btn--yes[data-v-fdd81676]{background:#333;color:#fff}.confirm-modal__btn--no[data-v-fdd81676]{background:#fff;border:1px solid #333;color:#333;margin-top:16px}@-webkit-keyframes rotate-360-2863ff16{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-2863ff16{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-2863ff16],icon-elem[type=spinner] svg[data-v-2863ff16]{-webkit-animation:rotate-360-2863ff16 1s linear infinite;animation:rotate-360-2863ff16 1s linear infinite}.filters-bar[data-v-2863ff16],div[data-v-2863ff16]{-webkit-box-sizing:border-box;box-sizing:border-box}.filters-bar[data-v-2863ff16]{width:100%;height:50px;background:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Gotham Narrow SSm,sans-serif;color:#fff}@media(max-width:650px){.filters-bar[data-v-2863ff16]{display:none}}.filters-bar--modal[data-v-2863ff16]{height:74px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 30px 0 45px}.filters-bar--full[data-v-2863ff16]{width:100vw!important;margin-left:0!important}.filters-tags-row[data-v-2863ff16]{width:calc(100% - 190px);overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.filters-tags-row--modal[data-v-2863ff16]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 20px}.filter-bar-tag[data-v-2863ff16]{height:30px;border:1px solid #fff;border-radius:4px;padding-right:16px;margin-left:10px;font-size:14px;font-weight:400;letter-spacing:1.31px;text-transform:capitalize;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.filter-bar-tag__label[data-v-2863ff16]{white-space:nowrap;padding-left:16px}.filter-bar-tag__image[data-v-2863ff16]{width:22px;min-width:22px;height:22px;background-repeat:no-repeat;background-size:cover;background-position:50%;margin:0 2px}.filter-bar-tag__close-btn[data-v-2863ff16]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;margin-left:10px}.filter-bar-tag--modal[data-v-2863ff16]{height:44px}.filter-bar-tag--modal .filter-bar-tag__image[data-v-2863ff16]{width:36px;min-width:36px;height:36px}.filters-btn[data-v-2863ff16]{width:30px;min-width:30px;height:30px;background:#fff;border-radius:4px;border:none;margin-left:10px;cursor:pointer}.filters-btn__icon[data-v-2863ff16]{width:20px;height:20px;stroke:#000}.close-icon[data-v-2863ff16]{width:10px;height:10px;stroke:#fff!important}.clear-btn[data-v-2863ff16]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;color:#fff;font-size:12px;font-weight:400;line-height:14px;letter-spacing:.38px;margin:0 50px 0 30px}.close-btn[data-v-2863ff16]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;min-width:200px;height:40px;font-size:18px;text-align:center;letter-spacing:.9px;color:#000;background:#fff;border-radius:2px}.close-cross-btn[data-v-2863ff16]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer}.close-cross-btn__icon[data-v-2863ff16]{width:20px;height:20px;stroke:#fff!important}.clear-modal[data-v-2863ff16]{width:675px;height:350px;background:#fff;font-family:Crimson Text,serif;color:#000;padding-top:85px}.clear-modal__title[data-v-2863ff16]{font-family:Gotham Narrow SSm,sans-serif;font-size:24px;text-align:center;letter-spacing:2.25px;text-transform:uppercase}.clear-modal__sub-title[data-v-2863ff16]{font-size:16px;text-align:center;letter-spacing:.5px;margin:16px 0 80px}.clear-modal__tools[data-v-2863ff16]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.clear-modal__btn[data-v-2863ff16]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;min-width:230px;height:50px;font-family:Gotham Narrow SSm,sans-serif;font-size:16px;line-height:19px;letter-spacing:.6px;border-radius:2px}.clear-modal__btn--confirm[data-v-2863ff16]{background:#000;color:#fff;margin-left:20px}.clear-modal__btn--cancel[data-v-2863ff16]{background:#fff;color:#000;border:1px solid #000}@-webkit-keyframes rotate-360-4674e9d8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4674e9d8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4674e9d8],icon-elem[type=spinner] svg[data-v-4674e9d8]{-webkit-animation:rotate-360-4674e9d8 1s linear infinite;animation:rotate-360-4674e9d8 1s linear infinite}.filters-bar-header[data-v-4674e9d8],div[data-v-4674e9d8]{-webkit-box-sizing:border-box;box-sizing:border-box}.filters-bar-header[data-v-4674e9d8]{width:100%;background:#000;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Gotham Narrow SSm,sans-serif;color:#fff;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 10px;display:none}@media(max-width:650px){.filters-bar-header[data-v-4674e9d8]{display:-webkit-box;display:-ms-flexbox;display:flex}}.filters-bar[data-v-4674e9d8]{width:100%;height:50px;background:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:Gotham Narrow SSm,sans-serif;color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.filters-bar--modal[data-v-4674e9d8]{height:74px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 30px 0 45px}.filters-bar--full[data-v-4674e9d8]{width:100vw!important;margin-left:0!important}.filters-bar--mobile[data-v-4674e9d8]{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto;padding:0;padding-bottom:10px}@media(max-width:650px){.filters-bar--mobile[data-v-4674e9d8]{display:-webkit-box;display:-ms-flexbox;display:flex}}.filters-tags-row[data-v-4674e9d8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:auto;padding:10px 0;padding-right:10px}.filters-tags-row--modal[data-v-4674e9d8]{margin:0 20px}.filter-bar-tag[data-v-4674e9d8]{height:30px;border:1px solid #fff;border-radius:4px;padding-right:16px;margin-left:10px;font-size:14px;font-weight:400;letter-spacing:1.31px;text-transform:capitalize;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.filter-bar-tag__label[data-v-4674e9d8]{white-space:nowrap;padding-left:16px}.filter-bar-tag__image[data-v-4674e9d8]{width:22px;min-width:22px;height:22px;background-repeat:no-repeat;background-size:cover;background-position:50%;margin:0 2px}.filter-bar-tag__close-btn[data-v-4674e9d8]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;margin-left:10px}.filter-bar-tag--modal[data-v-4674e9d8]{height:44px}.filter-bar-tag--modal .filter-bar-tag__image[data-v-4674e9d8]{width:36px;min-width:36px;height:36px}.filters-btn[data-v-4674e9d8]{width:30px;min-width:30px;height:30px;background:#fff;border-radius:4px;border:none;margin-left:10px;cursor:pointer}.filters-btn__icon[data-v-4674e9d8]{width:20px;height:20px;stroke:#000}.close-icon[data-v-4674e9d8]{width:10px;height:10px;stroke:#fff!important}.clear-btn[data-v-4674e9d8]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;color:#fff;font-size:12px;font-weight:400;line-height:14px;letter-spacing:.38px;margin:0 50px 0 30px}.close-btn[data-v-4674e9d8]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;min-width:200px;height:40px;font-size:18px;text-align:center;letter-spacing:.9px;color:#000;background:#fff;border-radius:2px}.close-cross-btn[data-v-4674e9d8]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer}.close-cross-btn__icon[data-v-4674e9d8]{width:20px;height:20px;stroke:#fff!important}.clear-modal[data-v-4674e9d8]{width:675px;height:350px;background:#fff;font-family:Crimson Text,serif;color:#000;padding-top:85px}@media(max-width:650px){.clear-modal[data-v-4674e9d8]{width:auto;padding:50px}}.clear-modal__title[data-v-4674e9d8]{font-family:Gotham Narrow SSm,sans-serif;font-size:24px;text-align:center;letter-spacing:2.25px;text-transform:uppercase}.clear-modal__sub-title[data-v-4674e9d8]{font-size:16px;text-align:center;letter-spacing:.5px;margin:16px 0 80px}.clear-modal__tools[data-v-4674e9d8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media(max-width:650px){.clear-modal__tools[data-v-4674e9d8]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.clear-modal__btn[data-v-4674e9d8]{background:rgba(0,0,0,0);border:none;padding:0;cursor:pointer;min-width:230px;height:50px;font-family:Gotham Narrow SSm,sans-serif;font-size:16px;line-height:19px;letter-spacing:.6px;border-radius:2px}.clear-modal__btn--confirm[data-v-4674e9d8]{background:#000;color:#fff;margin-left:20px}@media(max-width:650px){.clear-modal__btn--confirm[data-v-4674e9d8]{margin-left:0;margin-top:20px}}.clear-modal__btn--cancel[data-v-4674e9d8]{background:#fff;color:#000;border:1px solid #000}@-webkit-keyframes rotate-360-cfe32700{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-cfe32700{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-cfe32700],icon-elem[type=spinner] svg[data-v-cfe32700]{-webkit-animation:rotate-360-cfe32700 1s linear infinite;animation:rotate-360-cfe32700 1s linear infinite}.Topbar[data-v-cfe32700]{background-color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:10;width:100%;-webkit-box-shadow:1px 9px 20px -2px grey;box-shadow:1px 9px 20px -2px grey;display:block}@media(max-width:650px){.ClientGalleryTopbar[data-v-cfe32700]{padding:12px;-webkit-box-shadow:0 4px 4px rgba(0,0,0,.08);box-shadow:0 4px 4px rgba(0,0,0,.08)}}@media(max-width:650px){.SceneNavTopbar[data-v-cfe32700]{width:100vw;overflow:auto;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:12px}}@media(max-width:650px){.topbarBlock--icons[data-v-cfe32700]{display:none}}@media(max-width:650px){.topbarBlock--nav[data-v-cfe32700]{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}.ClientGalleryTopbar[data-v-cfe32700]{height:60%;padding-top:1%}.ClientGalleryTopbar[data-v-cfe32700],.SceneNavTopbar[data-v-cfe32700]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.SceneNavTopbar[data-v-cfe32700]{height:40%;padding-bottom:20px}.SceneNavTopbar[data-v-cfe32700],.topbarBlock[data-v-cfe32700]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.topbarBlock[data-v-cfe32700]{display:-webkit-box;display:-ms-flexbox;display:flex;width:inherit;margin:auto}.selectedSceneButton[data-v-cfe32700]{font-weight:500}.compare-tool[data-v-cfe32700]{text-align:right;position:relative;top:-65px}.filters-btn[data-v-cfe32700]{background:rgba(0,0,0,0);border:none;cursor:pointer;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.filters-icon[data-v-cfe32700]{width:18px;height:15px;stroke:#4e4b4c!important;margin-right:7px}@media(max-width:650px){.topbarBlock.topbarLogo[data-v-cfe32700]{display:none}}@media(max-width:650px){.topbarSceneButton[data-v-cfe32700]{-ms-flex-negative:0;flex-shrink:0}}@-webkit-keyframes rotate-360-48b78660{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-48b78660{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-48b78660],icon-elem[type=spinner] svg[data-v-48b78660]{-webkit-animation:rotate-360-48b78660 1s linear infinite;animation:rotate-360-48b78660 1s linear infinite}.photostream2[data-v-48b78660]{background-color:var(--stream-body-background-color);color:var(--stream-body-color);font-family:var(--stream-body-font-family);font-size:var(--stream-body-font-size)}.photoStreamWrapper[data-v-48b78660]{margin-top:4%;padding:0 61px 50px;position:relative;height:100%}.photoStreamWrapper--mobile[data-v-48b78660]{width:100vw;padding:0 0 50px}@-webkit-keyframes rotate-360-797924f6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-797924f6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-797924f6],icon-elem[type=spinner] svg[data-v-797924f6]{-webkit-animation:rotate-360-797924f6 1s linear infinite;animation:rotate-360-797924f6 1s linear infinite}.full-modal[data-v-797924f6]{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:99;background:#fff}.close-btn[data-v-797924f6]{position:absolute;top:30px;right:30px;cursor:pointer;z-index:99;border:none;outline:none}@media(max-width:650px){.close-btn[data-v-797924f6]{top:22px;right:22px}}.close-icon[data-v-797924f6]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:20px;height:20px;background-position:-20px -720px}.close-icon[data-v-797924f6]:hover{background-position:-20px -750px}@-webkit-keyframes rotate-360-ae389188{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-ae389188{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-ae389188],icon-elem[type=spinner] svg[data-v-ae389188]{-webkit-animation:rotate-360-ae389188 1s linear infinite;animation:rotate-360-ae389188 1s linear infinite}.proofing_progress__bar-active[data-v-ae389188]{width:0;height:100%;background-color:orange}.proofing_progress__bar-label[data-v-ae389188]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);right:5px;color:#333}.proofing_progress__bar[data-v-ae389188]{width:200px;height:25px;max-width:100%;background-color:#eee;border:1px solid #333;border-radius:3px;overflow:hidden;position:relative}@media(max-width:650px){.proofing_progress__bar[data-v-ae389188]{display:none}}.photoStreamWrapper[data-v-20cdebe6]{height:100vh;padding:0 61px 50px;position:relative;overflow:auto}@-webkit-keyframes rotate-360-46cb8662{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-46cb8662{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-46cb8662],icon-elem[type=spinner] svg[data-v-46cb8662]{-webkit-animation:rotate-360-46cb8662 1s linear infinite;animation:rotate-360-46cb8662 1s linear infinite}.pt-checkbox[data-v-46cb8662]{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer}.pt-checkbox .pt-checkbox-box[data-v-46cb8662]{display:block;width:18px;height:18px;border:1px solid #e0e0e0;padding:0!important;margin-right:5px}.pt-checkbox input[type=checkbox]:checked+.pt-checkbox-box>.check-icon[data-v-46cb8662]{width:14px;height:14px;display:block;stroke:#555}.pt-checkbox input[data-v-46cb8662]{display:none}@-webkit-keyframes rotate-360-69f24cc6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-69f24cc6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-69f24cc6],icon-elem[type=spinner] svg[data-v-69f24cc6]{-webkit-animation:rotate-360-69f24cc6 1s linear infinite;animation:rotate-360-69f24cc6 1s linear infinite}.selected-tool[data-v-69f24cc6]{width:100%;height:80px;background:#a99683;color:#444;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.selected-tool__left-col[data-v-69f24cc6]{margin-left:52px;display:-webkit-box;display:-ms-flexbox;display:flex}.selected-tool__center-col[data-v-69f24cc6],.selected-tool__right-col[data-v-69f24cc6]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.selected-tool__right-col[data-v-69f24cc6]{margin-right:68px}.selected-btn[data-v-69f24cc6]{border:none;background:rgba(0,0,0,0);cursor:pointer}.selected-btn--save[data-v-69f24cc6]{font-family:Gotham Narrow SSm Medium,sans-serif;font-size:18px;text-transform:uppercase;color:#1c1c1c}.selected-btn--buy[data-v-69f24cc6]{font-family:Gotham Narrow Medium,sans-serif;font-size:16px;color:#444}.share-icon[data-v-69f24cc6]{background-position:-80px -874px}.download-icon[data-v-69f24cc6],.share-icon[data-v-69f24cc6]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:24px;height:24px}.download-icon[data-v-69f24cc6]{background-position:-476px -206px;background-color:rgba(0,0,0,0)}.close-icon[data-v-69f24cc6]{background-image:url(https://pictimecloudaf-m.azureedge.net/pictures/photostore/32/locales_debug/en-us/resources/sprites/dashboard.svg?r=r108.1);background-repeat:no-repeat;display:block;width:24px;height:24px;background-position:-20px -750px}.selected-label[data-v-69f24cc6]{font-family:Gotham Narrow SSm Medium,sans-serif;font-size:16px;color:#444}@-webkit-keyframes rotate-360-38ffd6a0{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-38ffd6a0{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-38ffd6a0],icon-elem[type=spinner] svg[data-v-38ffd6a0]{-webkit-animation:rotate-360-38ffd6a0 1s linear infinite;animation:rotate-360-38ffd6a0 1s linear infinite}div[data-v-38ffd6a0],label[data-v-38ffd6a0]{-webkit-box-sizing:border-box;box-sizing:border-box}.radio-buttons-suit[data-v-38ffd6a0]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.radio-buttons-suit--2 .radio-btn[data-v-38ffd6a0]{width:50%}.radio-buttons-suit--2 .radio-btn:not(:nth-child(odd)) .radio-btn__label[data-v-38ffd6a0]{border-left-color:rgba(0,0,0,0)}.radio-buttons-suit--2 .radio-btn:not(:nth-child(-n+2)) .radio-btn__label[data-v-38ffd6a0]{border-top-color:rgba(0,0,0,0)}.radio-buttons-suit--2 .radio-btn-selection[data-v-38ffd6a0]{width:50%}.radio-buttons-suit--3 .radio-btn[data-v-38ffd6a0]{width:33.3%}.radio-buttons-suit--3 .radio-btn:not(:nth-child(3n+1)) .radio-btn__label[data-v-38ffd6a0]{border-left-color:rgba(0,0,0,0)}.radio-buttons-suit--3 .radio-btn:not(:nth-child(-n+3)) .radio-btn__label[data-v-38ffd6a0]{border-top-color:rgba(0,0,0,0)}.radio-buttons-suit--3 .radio-btn-selection[data-v-38ffd6a0]{width:33.3%}.radio-buttons-suit--4 .radio-btn[data-v-38ffd6a0]{width:25%}.radio-buttons-suit--4 .radio-btn:not(:nth-child(4n+1)) .radio-btn__label[data-v-38ffd6a0]{border-left-color:rgba(0,0,0,0)}.radio-buttons-suit--4 .radio-btn:not(:nth-child(-n+4)) .radio-btn__label[data-v-38ffd6a0]{border-top-color:rgba(0,0,0,0)}.radio-buttons-suit--4 .radio-btn-selection[data-v-38ffd6a0]{width:25%}.radio-btn[data-v-38ffd6a0]{min-height:40px;z-index:1;background:rgba(0,0,0,0)}.radio-btn__input[data-v-38ffd6a0]{display:none}.radio-btn:not(.radio-btn--with-selection) .radio-btn__input:checked+.radio-btn__label[data-v-38ffd6a0]{background:#f2f2f2;border:1px solid #343434!important;color:#343434}.radio-btn:not(.radio-btn--with-selection) .radio-btn__input:checked+.radio-btn__label .radio-btn__sub-title[data-v-38ffd6a0]{color:#343434}.radio-btn__label[data-v-38ffd6a0]{display:block;width:100%;height:100%;background:#fff;border:1px solid #b7b7b7;text-align:center;font-family:Gotham Narrow SSm,sans-serif;font-size:14px;color:#525252;padding:11px 0}.radio-btn__title[data-v-38ffd6a0]{display:block}.radio-btn__sub-title[data-v-38ffd6a0]{display:block;font-size:12px;color:#979797;margin-top:5px}.radio-btn--with-selection .radio-btn__label[data-v-38ffd6a0]{background:rgba(0,0,0,0)!important}.radio-btn-selection[data-v-38ffd6a0]{background:#e6ded5;position:absolute;z-index:0;-webkit-transition:all .4s linear;transition:all .4s linear}@-webkit-keyframes rotate-360-141464e2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-141464e2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-141464e2],icon-elem[type=spinner] svg[data-v-141464e2]{-webkit-animation:rotate-360-141464e2 1s linear infinite;animation:rotate-360-141464e2 1s linear infinite}div[data-v-141464e2]{-webkit-box-sizing:border-box;box-sizing:border-box}ul[data-v-141464e2]{margin:0;padding:0;list-style-type:none}li[data-v-141464e2]{margin:0;padding:0}.pt-dropdown[data-v-141464e2]{position:relative}.pt-dropdown__title[data-v-141464e2]{width:100%;height:40px;border:1px solid #b7b7b7;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;font-size:14px;color:#343434;cursor:pointer}.pt-dropdown__list[data-v-141464e2]{width:250px;max-height:400px;background:#fff;border-radius:2px;-webkit-box-shadow:1px 1px 4px #555,-1px -1px 4px #555;box-shadow:1px 1px 4px #555,-1px -1px 4px #555;padding:20px 12px;overflow-y:auto;position:absolute;top:45px;z-index:2}.pt-dropdown__list .list-item[data-v-141464e2]{padding:13px;font-size:17px;color:#979797;text-align:center;cursor:pointer}.pt-dropdown__list .list-item[data-v-141464e2]:hover{background:#f9f9f9}.pt-dropdown__list .list-item--selected[data-v-141464e2]{background:#f2f2f2;color:#343434}.pt-dropdown__list .list-item__sub-title[data-v-141464e2]{display:block;font-size:11px;margin-top:3px}.pt-dropdown__list--mobile[data-v-141464e2]{position:fixed;width:calc(100vw - 10px);height:calc(100vh - 10px);max-height:calc(100vh - 10px);top:5px;left:5px;z-index:3}.arrow-icon[data-v-141464e2]{width:18px;height:16px;position:absolute;top:12px;right:10px;stroke:#525252;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}@-webkit-keyframes rotate-360-15a20c47{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-15a20c47{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-15a20c47],icon-elem[type=spinner] svg[data-v-15a20c47]{-webkit-animation:rotate-360-15a20c47 1s linear infinite;animation:rotate-360-15a20c47 1s linear infinite}.pt-button[data-v-15a20c47]{min-height:48px;font-family:Gotham Narrow SSm,sans-serif;font-size:16px;font-weight:400;letter-spacing:1px;text-align:center;padding:13px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;cursor:pointer}.pt-button--primary[data-v-15a20c47]{background:#444;color:#fff}@-webkit-keyframes rotate-360-7cf50dc9{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-7cf50dc9{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-7cf50dc9],icon-elem[type=spinner] svg[data-v-7cf50dc9]{-webkit-animation:rotate-360-7cf50dc9 1s linear infinite;animation:rotate-360-7cf50dc9 1s linear infinite}.carousel[data-v-7cf50dc9]{width:100%;height:100px;position:relative}.carousel__list[data-v-7cf50dc9]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;overflow:hidden;position:relative}.carousel__item[data-v-7cf50dc9]{width:100%;min-width:100%;height:100%;position:absolute}.carousel__tools[data-v-7cf50dc9]{width:100%;position:absolute;bottom:15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carousel__button[data-v-7cf50dc9]{margin:0 5px}.slide-enter-active[data-v-7cf50dc9],.slide-leave-active[data-v-7cf50dc9]{-webkit-transition:all .8s linear;transition:all .8s linear}.slide-enter-from[data-v-7cf50dc9]{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}.slide-enter-to[data-v-7cf50dc9],.slide-leave-from[data-v-7cf50dc9]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.slide-leave-to[data-v-7cf50dc9]{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.seeker[data-v-70d283b1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.seeker .progress-bar[data-v-70d283b1]:before{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-70d283b1{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-70d283b1{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-70d283b1],icon-elem[type=spinner] svg[data-v-70d283b1]{-webkit-animation:rotate-360-70d283b1 1s linear infinite;animation:rotate-360-70d283b1 1s linear infinite}.seeker[data-v-70d283b1]{cursor:pointer}.seeker .progress-bar[data-v-70d283b1]{position:relative;width:100%;height:4px}.seeker .progress-bar[data-v-70d283b1]:before{content:"";opacity:.2;background:var(--body-text-color,#444)}.seeker .progress-bar .hover-indicator[data-v-70d283b1]{opacity:.4}.seeker .progress-bar .hover-indicator[data-v-70d283b1],.seeker .progress-bar .indicator[data-v-70d283b1]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;height:100%;background:var(--body-text-color,#444)}.seeker .progress-bar .indicator[data-v-70d283b1]:after{content:"";position:absolute;width:10px;height:10px;-webkit-transform:translateX(5px);-ms-transform:translateX(5px);transform:translateX(5px);border-radius:50%;background:var(--body-text-color,#444);opacity:0}.seeker-dragging .indicator[data-v-70d283b1]:after,.seeker:hover .indicator[data-v-70d283b1]:after{opacity:1!important}.audio-player[data-v-5d5b7e05],.audio-player button[data-v-5d5b7e05]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-5d5b7e05{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-5d5b7e05{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-5d5b7e05],icon-elem[type=spinner] svg[data-v-5d5b7e05]{-webkit-animation:rotate-360-5d5b7e05 1s linear infinite;animation:rotate-360-5d5b7e05 1s linear infinite}.audio-player audio[data-v-5d5b7e05]{display:none}.audio-player-seeker[data-v-5d5b7e05]{-webkit-transition:all .4s;transition:all .4s;width:0}.opened .audio-player-seeker[data-v-5d5b7e05]{width:140px}@-webkit-keyframes rotate-360-38d45cd4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-38d45cd4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-38d45cd4],icon-elem[type=spinner] svg[data-v-38d45cd4]{-webkit-animation:rotate-360-38d45cd4 1s linear infinite;animation:rotate-360-38d45cd4 1s linear infinite}.dataView[data-v-38d45cd4]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 20px}.slide-error[data-v-35b3e2ce],.slide[data-v-35b3e2ce]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.slide-error[data-v-35b3e2ce]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@-webkit-keyframes rotate-360-35b3e2ce{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-35b3e2ce{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-35b3e2ce],icon-elem[type=spinner] svg[data-v-35b3e2ce]{-webkit-animation:rotate-360-35b3e2ce 1s linear infinite;animation:rotate-360-35b3e2ce 1s linear infinite}[data-v-35b3e2ce] .watermark{position:absolute;background-position:50%;background-size:contain;background-repeat:no-repeat;width:calc(var(--size-factor)*var(--short-edge));height:calc(var(--size-factor)*var(--short-edge))}[data-v-35b3e2ce] .watermark-type10{background-size:calc(var(--size-factor)*var(--short-edge))}[data-v-35b3e2ce] .watermark-size0{--size-factor:0.22}[data-v-35b3e2ce] .watermark-size1{--size-factor:0.35}[data-v-35b3e2ce] .watermark-size2{--size-factor:0.50}[data-v-35b3e2ce] .watermark-size3{--size-factor:0.75}[data-v-35b3e2ce] .watermark-type0{display:none}[data-v-35b3e2ce] .watermark-type2{left:calc(var(--short-edge)*0.05);bottom:calc(var(--short-edge)*0.05);background-position:0 100%}[data-v-35b3e2ce] .watermark-type3{left:0;right:0;margin:0 auto;bottom:calc(var(--short-edge)*0.05);background-position:bottom}[data-v-35b3e2ce] .watermark-type4{right:calc(var(--short-edge)*0.05);bottom:calc(var(--short-edge)*0.05);background-position:100% 100%}[data-v-35b3e2ce] .watermark-type5{left:0;right:0;top:0;bottom:0;margin:auto auto}[data-v-35b3e2ce] .watermark-type6{left:calc(var(--short-edge)*0.15);bottom:calc(var(--short-edge)*0.25);background-position:0 100%}[data-v-35b3e2ce] .watermark-type7{right:calc(var(--short-edge)*0.15);bottom:calc(var(--short-edge)*0.25);background-position:100% 100%}[data-v-35b3e2ce] .watermark-type8{right:0;bottom:0;background-position:100% 100%}[data-v-35b3e2ce] .watermark-type9{left:0;bottom:0;background-position:0 100%}[data-v-35b3e2ce] .watermark-type10{width:100%!important;height:100%!important;background-repeat:repeat;background-position:0 0}[data-v-35b3e2ce] .SLD_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}[data-v-35b3e2ce] .SLD_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}[data-v-35b3e2ce] .SLD_F2{font-family:PT Sans,sans-serif!important}[data-v-35b3e2ce] .SLD_F3{font-family:PT Sans Narrow,sans-serif!important}[data-v-35b3e2ce] .SLD_F4{font-family:Montserrat,sans-serif!important}[data-v-35b3e2ce] .SLD_F5{font-family:Varela Round,sans-serif!important}[data-v-35b3e2ce] .SLD_F6{font-family:Titillium Web,sans-serif!important}[data-v-35b3e2ce] .SLD_F7{font-family:Roboto,sans-serif!important}[data-v-35b3e2ce] .SLD_F8{font-family:Oswald,sans-serif!important}[data-v-35b3e2ce] .SLD_F9{font-family:garamond-premier-pro-display,serif!important}[data-v-35b3e2ce] .SLD_F10{font-family:Crimson Text,serif!important}[data-v-35b3e2ce] .SLD_F11{font-family:Volkhov,serif!important}[data-v-35b3e2ce] .SLD_F12{font-family:Old Standard TT,serif!important}[data-v-35b3e2ce] .SLD_F13{font-family:Libre Baskerville,serif!important}[data-v-35b3e2ce] .SLD_F14{font-family:Sanchez,sans-serif!important}[data-v-35b3e2ce] .SLD_F15{font-family:Roboto Slab,sans-serif!important}[data-v-35b3e2ce] .SLD_F16{font-family:Glegoo,sans-serif!important}[data-v-35b3e2ce] .SLD_F17{font-family:Sail,cursive!important}[data-v-35b3e2ce] .SLD_F18{font-family:Playball,cursive!important}[data-v-35b3e2ce] .SLD_F19{font-family:Oleo Script,cursive!important}[data-v-35b3e2ce] .SLD_F20{font-family:Cormorant!important}[data-v-35b3e2ce] .SLD_F21{font-family:Public Sans!important}[data-v-35b3e2ce] .SLD_F22{font-family:Overpass!important}[data-v-35b3e2ce] .SLD_F23{font-family:Karla!important}[data-v-35b3e2ce] .SLD_F24{font-family:Gentium Basic!important}[data-v-35b3e2ce] .SLD_F25{font-family:Archivo!important}[data-v-35b3e2ce] .SLD_F26{font-family:Space Mono!important}[data-v-35b3e2ce] .SLD_F27{font-family:minerva-modern,sans-serif!important}[data-v-35b3e2ce] .SLD_F28{font-family:Poppins,sans-serif!important}[data-v-35b3e2ce] .SLD_F29{font-family:baskerville-urw,sans-serif!important}[data-v-35b3e2ce] .SLD_F30{font-family:nimbus-sans,sans-serif!important}[data-v-35b3e2ce] .SLD_F31{font-family:articulat-cf,sans-serif!important}[data-v-35b3e2ce] .SLD_F32{font-family:europa,sans-serif!important}[data-v-35b3e2ce] .SLD_F33{font-family:adobe-handwriting-ernie,sans-serif!important}[data-v-35b3e2ce] .SLD_F34{font-family:DM Sans!important}[data-v-35b3e2ce] .SLD_F35{font-family:Courier Prime!important}[data-v-35b3e2ce] .SLD_F36{font-family:Italiana!important}[data-v-35b3e2ce] .SLD_S1{font-size:1.3em!important}[data-v-35b3e2ce] .SLD_S2{font-size:2.1em!important}[data-v-35b3e2ce] .SLD_S3{font-size:3.2em!important}[data-v-35b3e2ce] .SLD_S4{font-size:4.7em!important}[data-v-35b3e2ce] .SLD_S5{font-size:6.3em!important}[data-v-35b3e2ce] .SLD_S6{font-size:8em!important}[data-v-35b3e2ce] .SLD_S7{font-size:12em!important}[data-v-35b3e2ce] .SLD_L1{letter-spacing:0!important}[data-v-35b3e2ce] .SLD_L2{letter-spacing:.03em!important}[data-v-35b3e2ce] .SLD_L3{letter-spacing:.1em!important}[data-v-35b3e2ce] .SLD_L4{letter-spacing:.15em!important}[data-v-35b3e2ce] .SLD_L5{letter-spacing:.25em!important}[data-v-35b3e2ce] .SLD_L6{letter-spacing:.35em!important}[data-v-35b3e2ce] .SLD_H1{line-height:80%!important}[data-v-35b3e2ce] .SLD_H2{line-height:100%!important}[data-v-35b3e2ce] .SLD_H3{line-height:125%!important}[data-v-35b3e2ce] .SLD_H4{line-height:150%!important}[data-v-35b3e2ce] .SLD_H5{line-height:200%!important}[data-v-35b3e2ce] .SLD_W1{font-weight:100!important}[data-v-35b3e2ce] .SLD_W2{font-weight:200!important}[data-v-35b3e2ce] .SLD_W3{font-weight:300!important}[data-v-35b3e2ce] .SLD_W4{font-weight:400!important}[data-v-35b3e2ce] .SLD_W5{font-weight:500!important}[data-v-35b3e2ce] .SLD_W6{font-weight:600!important}[data-v-35b3e2ce] .SLD_W7{font-weight:700!important}[data-v-35b3e2ce] .SLD_W8{font-weight:800!important}[data-v-35b3e2ce] .SLD_W9{font-weight:900!important}[data-v-35b3e2ce] .SLD_U1{text-transform:none!important}[data-v-35b3e2ce] .SLD_U2{text-transform:uppercase!important}[data-v-35b3e2ce] .SLD_FS1{font-style:normal!important}[data-v-35b3e2ce] .SLD_FS2{font-style:italic!important}[data-v-35b3e2ce] .SLD_FS3{font-style:oblique!important}[data-v-35b3e2ce] .SLD_D1{direction:ltr!important}[data-v-35b3e2ce] .SLD_D2{direction:rtl!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S1{font-size:3em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S2{font-size:4.2em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S3{font-size:5.5em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S4{font-size:6.6em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S5{font-size:8em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S6{font-size:11em!important}.force-mobile-view [data-v-35b3e2ce].slidetextmobile .SLD_S7{font-size:15em!important}@media(max-width:650px){[data-v-35b3e2ce] .BLG_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}[data-v-35b3e2ce] .BLG_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}[data-v-35b3e2ce] .BLG_F2{font-family:PT Sans,sans-serif!important}[data-v-35b3e2ce] .BLG_F3{font-family:PT Sans Narrow,sans-serif!important}[data-v-35b3e2ce] .BLG_F4{font-family:Montserrat,sans-serif!important}[data-v-35b3e2ce] .BLG_F5{font-family:Varela Round,sans-serif!important}[data-v-35b3e2ce] .BLG_F6{font-family:Titillium Web,sans-serif!important}[data-v-35b3e2ce] .BLG_F7{font-family:Roboto,sans-serif!important}[data-v-35b3e2ce] .BLG_F8{font-family:Oswald,sans-serif!important}[data-v-35b3e2ce] .BLG_F9{font-family:garamond-premier-pro-display,serif!important}[data-v-35b3e2ce] .BLG_F10{font-family:Crimson Text,serif!important}[data-v-35b3e2ce] .BLG_F11{font-family:Volkhov,serif!important}[data-v-35b3e2ce] .BLG_F12{font-family:Old Standard TT,serif!important}[data-v-35b3e2ce] .BLG_F13{font-family:Libre Baskerville,serif!important}[data-v-35b3e2ce] .BLG_F14{font-family:Sanchez,sans-serif!important}[data-v-35b3e2ce] .BLG_F15{font-family:Roboto Slab,sans-serif!important}[data-v-35b3e2ce] .BLG_F16{font-family:Glegoo,sans-serif!important}[data-v-35b3e2ce] .BLG_F17{font-family:Sail,cursive!important}[data-v-35b3e2ce] .BLG_F18{font-family:Playball,cursive!important}[data-v-35b3e2ce] .BLG_F19{font-family:Oleo Script,cursive!important}[data-v-35b3e2ce] .BLG_F20{font-family:Cormorant!important}[data-v-35b3e2ce] .BLG_F21{font-family:Public Sans!important}[data-v-35b3e2ce] .BLG_F22{font-family:Overpass!important}[data-v-35b3e2ce] .BLG_F23{font-family:Karla!important}[data-v-35b3e2ce] .BLG_F24{font-family:Gentium Basic!important}[data-v-35b3e2ce] .BLG_F25{font-family:Archivo!important}[data-v-35b3e2ce] .BLG_F26{font-family:Space Mono!important}[data-v-35b3e2ce] .BLG_F27{font-family:minerva-modern,sans-serif!important}[data-v-35b3e2ce] .BLG_F28{font-family:Poppins,sans-serif!important}[data-v-35b3e2ce] .BLG_F29{font-family:baskerville-urw,sans-serif!important}[data-v-35b3e2ce] .BLG_F30{font-family:nimbus-sans,sans-serif!important}[data-v-35b3e2ce] .BLG_F31{font-family:articulat-cf,sans-serif!important}[data-v-35b3e2ce] .BLG_F32{font-family:europa,sans-serif!important}[data-v-35b3e2ce] .BLG_F33{font-family:adobe-handwriting-ernie,sans-serif!important}[data-v-35b3e2ce] .BLG_F34{font-family:DM Sans!important}[data-v-35b3e2ce] .BLG_F35{font-family:Courier Prime!important}[data-v-35b3e2ce] .BLG_F36{font-family:Italiana!important}[data-v-35b3e2ce] .BLG_S1,[data-v-35b3e2ce] .BLG_S2{font-size:10px!important}[data-v-35b3e2ce] .BLG_S3{font-size:11px!important}[data-v-35b3e2ce] .BLG_S4{font-size:12px!important}[data-v-35b3e2ce] .BLG_S5{font-size:13px!important}[data-v-35b3e2ce] .BLG_S6{font-size:15px!important}[data-v-35b3e2ce] .BLG_S7{font-size:16px!important}[data-v-35b3e2ce] .BLG_S8{font-size:20px!important}[data-v-35b3e2ce] .BLG_S9{font-size:24px!important}[data-v-35b3e2ce] .BLG_S10{font-size:32px!important}[data-v-35b3e2ce] .BLG_S11{font-size:36px!important}[data-v-35b3e2ce] .BLG_S12{font-size:40px!important}[data-v-35b3e2ce] .BLG_S13{font-size:48px!important}[data-v-35b3e2ce] .BLG_S14{font-size:56px!important}[data-v-35b3e2ce] .BLG_L1{letter-spacing:0!important}[data-v-35b3e2ce] .BLG_L2{letter-spacing:.03em!important}[data-v-35b3e2ce] .BLG_L3{letter-spacing:.1em!important}[data-v-35b3e2ce] .BLG_L4{letter-spacing:.15em!important}[data-v-35b3e2ce] .BLG_L5{letter-spacing:.25em!important}[data-v-35b3e2ce] .BLG_L6{letter-spacing:.35em!important}[data-v-35b3e2ce] .BLG_H1{line-height:80%!important}[data-v-35b3e2ce] .BLG_H2{line-height:100%!important}[data-v-35b3e2ce] .BLG_H3{line-height:125%!important}[data-v-35b3e2ce] .BLG_H4{line-height:150%!important}[data-v-35b3e2ce] .BLG_H5{line-height:200%!important}[data-v-35b3e2ce] .BLG_W1{font-weight:100!important}[data-v-35b3e2ce] .BLG_W2{font-weight:200!important}[data-v-35b3e2ce] .BLG_W3{font-weight:300!important}[data-v-35b3e2ce] .BLG_W4{font-weight:400!important}[data-v-35b3e2ce] .BLG_W5{font-weight:500!important}[data-v-35b3e2ce] .BLG_W6{font-weight:600!important}[data-v-35b3e2ce] .BLG_W7{font-weight:700!important}[data-v-35b3e2ce] .BLG_W8{font-weight:800!important}[data-v-35b3e2ce] .BLG_W9{font-weight:900!important}[data-v-35b3e2ce] .BLG_U1{text-transform:none!important}[data-v-35b3e2ce] .BLG_U2{text-transform:uppercase!important}[data-v-35b3e2ce] .BLG_FS1{font-style:normal!important}[data-v-35b3e2ce] .BLG_FS2{font-style:italic!important}[data-v-35b3e2ce] .BLG_FS3{font-style:oblique!important}[data-v-35b3e2ce] .BLG_D1{direction:ltr!important}[data-v-35b3e2ce] .BLG_D2{direction:rtl!important}}.force-mobile-view [data-v-35b3e2ce] .BLG_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F2{font-family:PT Sans,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F3{font-family:PT Sans Narrow,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F4{font-family:Montserrat,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F5{font-family:Varela Round,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F6{font-family:Titillium Web,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F7{font-family:Roboto,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F8{font-family:Oswald,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F9{font-family:garamond-premier-pro-display,serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F10{font-family:Crimson Text,serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F11{font-family:Volkhov,serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F12{font-family:Old Standard TT,serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F13{font-family:Libre Baskerville,serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F14{font-family:Sanchez,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F15{font-family:Roboto Slab,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F16{font-family:Glegoo,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F17{font-family:Sail,cursive!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F18{font-family:Playball,cursive!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F19{font-family:Oleo Script,cursive!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F20{font-family:Cormorant!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F21{font-family:Public Sans!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F22{font-family:Overpass!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F23{font-family:Karla!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F24{font-family:Gentium Basic!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F25{font-family:Archivo!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F26{font-family:Space Mono!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F27{font-family:minerva-modern,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F28{font-family:Poppins,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F29{font-family:baskerville-urw,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F30{font-family:nimbus-sans,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F31{font-family:articulat-cf,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F32{font-family:europa,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F33{font-family:adobe-handwriting-ernie,sans-serif!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F34{font-family:DM Sans!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F35{font-family:Courier Prime!important}.force-mobile-view [data-v-35b3e2ce] .BLG_F36{font-family:Italiana!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S1,.force-mobile-view [data-v-35b3e2ce] .BLG_S2{font-size:10px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S3{font-size:11px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S4{font-size:12px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S5{font-size:13px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S6{font-size:15px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S7{font-size:16px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S8{font-size:20px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S9{font-size:24px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S10{font-size:32px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S11{font-size:36px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S12{font-size:40px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S13{font-size:48px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_S14{font-size:56px!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L1{letter-spacing:0!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L2{letter-spacing:.03em!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L3{letter-spacing:.1em!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L4{letter-spacing:.15em!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L5{letter-spacing:.25em!important}.force-mobile-view [data-v-35b3e2ce] .BLG_L6{letter-spacing:.35em!important}.force-mobile-view [data-v-35b3e2ce] .BLG_H1{line-height:80%!important}.force-mobile-view [data-v-35b3e2ce] .BLG_H2{line-height:100%!important}.force-mobile-view [data-v-35b3e2ce] .BLG_H3{line-height:125%!important}.force-mobile-view [data-v-35b3e2ce] .BLG_H4{line-height:150%!important}.force-mobile-view [data-v-35b3e2ce] .BLG_H5{line-height:200%!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W1{font-weight:100!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W2{font-weight:200!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W3{font-weight:300!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W4{font-weight:400!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W5{font-weight:500!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W6{font-weight:600!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W7{font-weight:700!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W8{font-weight:800!important}.force-mobile-view [data-v-35b3e2ce] .BLG_W9{font-weight:900!important}.force-mobile-view [data-v-35b3e2ce] .BLG_U1{text-transform:none!important}.force-mobile-view [data-v-35b3e2ce] .BLG_U2{text-transform:uppercase!important}.force-mobile-view [data-v-35b3e2ce] .BLG_FS1{font-style:normal!important}.force-mobile-view [data-v-35b3e2ce] .BLG_FS2{font-style:italic!important}.force-mobile-view [data-v-35b3e2ce] .BLG_FS3{font-style:oblique!important}.force-mobile-view [data-v-35b3e2ce] .BLG_D1{direction:ltr!important}.force-mobile-view [data-v-35b3e2ce] .BLG_D2{direction:rtl!important}@media(min-width:651px){[data-v-35b3e2ce] .BLG_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}[data-v-35b3e2ce] .BLG_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}[data-v-35b3e2ce] .BLG_F2{font-family:PT Sans,sans-serif!important}[data-v-35b3e2ce] .BLG_F3{font-family:PT Sans Narrow,sans-serif!important}[data-v-35b3e2ce] .BLG_F4{font-family:Montserrat,sans-serif!important}[data-v-35b3e2ce] .BLG_F5{font-family:Varela Round,sans-serif!important}[data-v-35b3e2ce] .BLG_F6{font-family:Titillium Web,sans-serif!important}[data-v-35b3e2ce] .BLG_F7{font-family:Roboto,sans-serif!important}[data-v-35b3e2ce] .BLG_F8{font-family:Oswald,sans-serif!important}[data-v-35b3e2ce] .BLG_F9{font-family:garamond-premier-pro-display,serif!important}[data-v-35b3e2ce] .BLG_F10{font-family:Crimson Text,serif!important}[data-v-35b3e2ce] .BLG_F11{font-family:Volkhov,serif!important}[data-v-35b3e2ce] .BLG_F12{font-family:Old Standard TT,serif!important}[data-v-35b3e2ce] .BLG_F13{font-family:Libre Baskerville,serif!important}[data-v-35b3e2ce] .BLG_F14{font-family:Sanchez,sans-serif!important}[data-v-35b3e2ce] .BLG_F15{font-family:Roboto Slab,sans-serif!important}[data-v-35b3e2ce] .BLG_F16{font-family:Glegoo,sans-serif!important}[data-v-35b3e2ce] .BLG_F17{font-family:Sail,cursive!important}[data-v-35b3e2ce] .BLG_F18{font-family:Playball,cursive!important}[data-v-35b3e2ce] .BLG_F19{font-family:Oleo Script,cursive!important}[data-v-35b3e2ce] .BLG_F20{font-family:Cormorant!important}[data-v-35b3e2ce] .BLG_F21{font-family:Public Sans!important}[data-v-35b3e2ce] .BLG_F22{font-family:Overpass!important}[data-v-35b3e2ce] .BLG_F23{font-family:Karla!important}[data-v-35b3e2ce] .BLG_F24{font-family:Gentium Basic!important}[data-v-35b3e2ce] .BLG_F25{font-family:Archivo!important}[data-v-35b3e2ce] .BLG_F26{font-family:Space Mono!important}[data-v-35b3e2ce] .BLG_F27{font-family:minerva-modern,sans-serif!important}[data-v-35b3e2ce] .BLG_F28{font-family:Poppins,sans-serif!important}[data-v-35b3e2ce] .BLG_F29{font-family:baskerville-urw,sans-serif!important}[data-v-35b3e2ce] .BLG_F30{font-family:nimbus-sans,sans-serif!important}[data-v-35b3e2ce] .BLG_F31{font-family:articulat-cf,sans-serif!important}[data-v-35b3e2ce] .BLG_F32{font-family:europa,sans-serif!important}[data-v-35b3e2ce] .BLG_F33{font-family:adobe-handwriting-ernie,sans-serif!important}[data-v-35b3e2ce] .BLG_F34{font-family:DM Sans!important}[data-v-35b3e2ce] .BLG_F35{font-family:Courier Prime!important}[data-v-35b3e2ce] .BLG_F36{font-family:Italiana!important}[data-v-35b3e2ce] .BLG_S1{font-size:10px!important}[data-v-35b3e2ce] .BLG_S2{font-size:11px!important}[data-v-35b3e2ce] .BLG_S3{font-size:12px!important}[data-v-35b3e2ce] .BLG_S4{font-size:14px!important}[data-v-35b3e2ce] .BLG_S5{font-size:16px!important}[data-v-35b3e2ce] .BLG_S6{font-size:18px!important}[data-v-35b3e2ce] .BLG_S7{font-size:20px!important}[data-v-35b3e2ce] .BLG_S8{font-size:24px!important}[data-v-35b3e2ce] .BLG_S9{font-size:32px!important}[data-v-35b3e2ce] .BLG_S10{font-size:40px!important}[data-v-35b3e2ce] .BLG_S11{font-size:48px!important}[data-v-35b3e2ce] .BLG_S12{font-size:64px!important}[data-v-35b3e2ce] .BLG_S13{font-size:72px!important}[data-v-35b3e2ce] .BLG_S14{font-size:80px!important}[data-v-35b3e2ce] .BLG_L1{letter-spacing:0!important}[data-v-35b3e2ce] .BLG_L2{letter-spacing:.03em!important}[data-v-35b3e2ce] .BLG_L3{letter-spacing:.1em!important}[data-v-35b3e2ce] .BLG_L4{letter-spacing:.15em!important}[data-v-35b3e2ce] .BLG_L5{letter-spacing:.25em!important}[data-v-35b3e2ce] .BLG_L6{letter-spacing:.35em!important}[data-v-35b3e2ce] .BLG_H1{line-height:80%!important}[data-v-35b3e2ce] .BLG_H2{line-height:100%!important}[data-v-35b3e2ce] .BLG_H3{line-height:125%!important}[data-v-35b3e2ce] .BLG_H4{line-height:150%!important}[data-v-35b3e2ce] .BLG_H5{line-height:200%!important}[data-v-35b3e2ce] .BLG_W1{font-weight:100!important}[data-v-35b3e2ce] .BLG_W2{font-weight:200!important}[data-v-35b3e2ce] .BLG_W3{font-weight:300!important}[data-v-35b3e2ce] .BLG_W4{font-weight:400!important}[data-v-35b3e2ce] .BLG_W5{font-weight:500!important}[data-v-35b3e2ce] .BLG_W6{font-weight:600!important}[data-v-35b3e2ce] .BLG_W7{font-weight:700!important}[data-v-35b3e2ce] .BLG_W8{font-weight:800!important}[data-v-35b3e2ce] .BLG_W9{font-weight:900!important}[data-v-35b3e2ce] .BLG_U1{text-transform:none!important}[data-v-35b3e2ce] .BLG_U2{text-transform:uppercase!important}[data-v-35b3e2ce] .BLG_FS1{font-style:normal!important}[data-v-35b3e2ce] .BLG_FS2{font-style:italic!important}[data-v-35b3e2ce] .BLG_FS3{font-style:oblique!important}[data-v-35b3e2ce] .BLG_D1{direction:ltr!important}[data-v-35b3e2ce] .BLG_D2{direction:rtl!important}}.slide[data-v-35b3e2ce]{overflow:hidden;background:var(--background_color)}.slide-wrap[data-v-35b3e2ce],.slide[data-v-35b3e2ce]{position:relative;width:100%;height:100%}.slide-error[data-v-35b3e2ce]{position:absolute;top:0;width:100%;height:100%;background:hsla(0,0%,100%,.9)}.slide-error-icon[data-v-35b3e2ce]{opacity:.8;width:40px;height:40px}[data-v-35b3e2ce] .slide>.layout-wrap{position:relative;width:100%;height:100%}[data-v-35b3e2ce] .slide>.layout-wrap>.layout{width:100%;height:100%;padding:var(--margin_around_top) var(--margin_around_right) var(--margin_around_bottom) var(--margin_around_left);--margin_around_top_actual:calc(var(--margin_around_top_frac)*var(--width-edge));--margin_around_right_actual:calc(var(--margin_around_right_frac)*var(--width-edge));--margin_around_bottom_actual:calc(var(--margin_around_bottom_frac)*var(--width-edge));--margin_around_left_actual:calc(var(--margin_around_left_frac)*var(--width-edge));--margin_between_actual:calc(var(--margin_between_frac)*var(--width-edge));--height-edge:calc(var(--proportions)*var(--width-edge));--width-edge-inner_frac:calc(1 - var(--margin_around_right_frac) - var(--margin_around_left_frac));--width-edge-without-padding:calc(var(--width-edge-inner_frac)*var(--width-edge))}@media(max-width:650px){[data-v-35b3e2ce] .slide>.layout-wrap>.layout{--margin_around_top:var(--margin_around_top_mobile);--margin_around_top_frac:var(--margin_around_top_mobile_frac);--margin_around_right:var(--margin_around_right_mobile);--margin_around_right_frac:var(--margin_around_right_mobile_frac);--margin_around_bottom:var(--margin_around_bottom_mobile);--margin_around_bottom_frac:var(--margin_around_bottom_mobile_frac);--margin_around_left:var(--margin_around_left_mobile);--margin_around_left_frac:var(--margin_around_left_mobile_frac);--margin_between:var(--margin_between_mobile);--margin_between_frac:var(--margin_between_mobile_frac)}}.force-mobile-view [data-v-35b3e2ce] .slide>.layout-wrap>.layout{--margin_around_top:var(--margin_around_top_mobile);--margin_around_top_frac:var(--margin_around_top_mobile_frac);--margin_around_right:var(--margin_around_right_mobile);--margin_around_right_frac:var(--margin_around_right_mobile_frac);--margin_around_bottom:var(--margin_around_bottom_mobile);--margin_around_bottom_frac:var(--margin_around_bottom_mobile_frac);--margin_around_left:var(--margin_around_left_mobile);--margin_around_left_frac:var(--margin_around_left_mobile_frac);--margin_between:var(--margin_between_mobile);--margin_between_frac:var(--margin_between_mobile_frac)}@media(min-width:651px){[data-v-35b3e2ce] .slide>.layout-wrap>.layout{--margin_around_top:var(--margin_around_top_desktop);--margin_around_top_frac:var(--margin_around_top_desktop_frac);--margin_around_right:var(--margin_around_right_desktop);--margin_around_right_frac:var(--margin_around_right_desktop_frac);--margin_around_bottom:var(--margin_around_bottom_desktop);--margin_around_bottom_frac:var(--margin_around_bottom_desktop_frac);--margin_around_left:var(--margin_around_left_desktop);--margin_around_left_frac:var(--margin_around_left_desktop_frac);--margin_between:var(--margin_between_desktop);--margin_between_frac:var(--margin_between_desktop_frac)}}@-webkit-keyframes rotate-360-76c1bf44{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-76c1bf44{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-76c1bf44],icon-elem[type=spinner] svg[data-v-76c1bf44]{-webkit-animation:rotate-360-76c1bf44 1s linear infinite;animation:rotate-360-76c1bf44 1s linear infinite}.simple-modal-bg[data-v-76c1bf44]{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:99;background-color:hsla(0,0%,81.6%,.9);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.close-btn[data-v-76c1bf44]{position:absolute;top:4vw;right:4vw;cursor:pointer;background:rgba(0,0,0,0);border:none;outline:none}.simple-modal[data-v-76c1bf44]{background:#fff;padding:40px}.simple-modal-tools[data-v-76c1bf44]{min-width:300px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:40px}.done-btn[data-v-76c1bf44]{min-width:140px;height:40px;background:#ececec!important;cursor:pointer;color:#444!important;font-family:Gotham XNarr SSm,sans-serif!important;font-size:12px!important;font-weight:400!important;letter-spacing:1px!important;line-height:15px!important;text-align:center;text-transform:uppercase}.done-btn[data-v-76c1bf44]:hover{background:#d0d0d0!important}.slideshow[data-v-08859d88]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-08859d88{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-08859d88{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-08859d88],icon-elem[type=spinner] svg[data-v-08859d88]{-webkit-animation:rotate-360-08859d88 1s linear infinite;animation:rotate-360-08859d88 1s linear infinite}.transition-wrap[data-v-08859d88]{--duration1:min(var(--duration,5s),0.5s);--duration2:min(var(--duration,5s),1s);--duration3:min(var(--duration,5s),1.5s)}.dissolve-leave-active[data-v-08859d88]{z-index:11;-webkit-transition:opacity var(--duration1) linear;transition:opacity var(--duration1) linear}.dissolve-leave-to[data-v-08859d88]{opacity:0}.dissolveSlow-leave-active[data-v-08859d88]{z-index:11;-webkit-transition:opacity var(--duration3) linear;transition:opacity var(--duration3) linear}.dissolveSlow-leave-to[data-v-08859d88],.fadeIntoColor-leave-to[data-v-08859d88],.fadeIntoColor .slideshow-slide[data-v-08859d88]:not(.active){opacity:0}.fadeIntoColor .slideshow-slide[data-v-08859d88]{-webkit-transition:opacity var(--duration1) var(--duration1);transition:opacity var(--duration1) var(--duration1)}.fadeIntoColor .slideshow-slide.active[data-v-08859d88]{visibility:unset!important}.fadeIntoColor-leave-active[data-v-08859d88]{z-index:11;-webkit-transition-delay:0s!important;transition-delay:0s!important}.next_fadeIntoColor .slideshow-slide[data-v-08859d88]:not(.active){opacity:0}.slide-up-enter-active[data-v-08859d88],.slide-up-leave-active[data-v-08859d88]{-webkit-transition:top var(--duration1),z-index var(--duration1);transition:top var(--duration1),z-index var(--duration1)}.slide-up-enter-from[data-v-08859d88]{top:100%}.slide-up-enter-to[data-v-08859d88]{top:0}.slide-down-enter-active[data-v-08859d88],.slide-down-leave-active[data-v-08859d88]{-webkit-transition:bottom var(--duration1),z-index var(--duration1);transition:bottom var(--duration1),z-index var(--duration1)}.slide-down-enter-from[data-v-08859d88]{bottom:100%}.slide-down-enter-to[data-v-08859d88]{bottom:0}.slide-left-enter-active[data-v-08859d88],.slide-left-leave-active[data-v-08859d88]{-webkit-transition:left var(--duration1),z-index var(--duration1);transition:left var(--duration1),z-index var(--duration1)}.slide-left-enter-from[data-v-08859d88]{left:100%}.slide-left-enter-to[data-v-08859d88]{left:0}.slide-right-enter-active[data-v-08859d88],.slide-right-leave-active[data-v-08859d88]{-webkit-transition:right var(--duration1),z-index var(--duration1);transition:right var(--duration1),z-index var(--duration1)}.slide-right-enter-from[data-v-08859d88]{right:100%}.slide-right-enter-to[data-v-08859d88]{right:0}.dissolve-enter-active[data-v-08859d88],.fadeIntoColor-enter-active[data-v-08859d88],.slide-down-enter-active[data-v-08859d88],.slide-left-enter-active[data-v-08859d88],.slide-right-enter-active[data-v-08859d88],.slide-up-enter-active[data-v-08859d88]{z-index:10}.slideshow[data-v-08859d88]{-webkit-transition:all .4s;transition:all .4s;width:100%;height:100%}.slideshow-view[data-v-08859d88]{position:relative;overflow:hidden;width:100%;height:100%}.slideshow-slide[data-v-08859d88]{position:absolute;width:100%;height:100%;top:0}.drag-preview[data-v-59dcd0f3],.drag[data-v-59dcd0f3]:after,.drag[data-v-59dcd0f3]:before{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-59dcd0f3{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-59dcd0f3{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-59dcd0f3],icon-elem[type=spinner] svg[data-v-59dcd0f3]{-webkit-animation:rotate-360-59dcd0f3 1s linear infinite;animation:rotate-360-59dcd0f3 1s linear infinite}.drag[data-v-59dcd0f3]{overflow:hidden}.drag-preview[data-v-59dcd0f3]{-webkit-filter:blur(4px);filter:blur(4px)}.drag[data-v-59dcd0f3]:before{content:"";background:#fff}.drag[data-v-59dcd0f3]:after{content:"";background:rgba(68,68,68,.8)}.controls-audio-volume .rangeWrapper[data-v-7334367a],.controls-audio-volume[data-v-7334367a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-7334367a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-7334367a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-7334367a],icon-elem[type=spinner] svg[data-v-7334367a]{-webkit-animation:rotate-360-7334367a 1s linear infinite;animation:rotate-360-7334367a 1s linear infinite}.controls[data-v-7334367a]{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif;font-size:13px;font-weight:400;letter-spacing:.2px;text-transform:none;background:var(--background-color);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;--margin:6px}.controls-button[data-v-7334367a]{width:32px;height:40px}.controls-button .svg-icon[data-v-7334367a]{width:20px;height:20px}.controls-button[data-v-7334367a]:hover{opacity:.85}.controls-timer[data-v-7334367a]{text-align:center;white-space:nowrap;margin:auto var(--margin)}.controls-seeker[data-v-7334367a]{-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 var(--margin)}.controls-audio[data-v-7334367a]{position:relative}.controls-audio:not(.controls-audio-showVolume) .controls-audio-volume[data-v-7334367a]{visibility:hidden;opacity:0;-webkit-transition:visibility 0s .5s,opacity .5s ease;transition:visibility 0s .5s,opacity .5s ease}.controls-audio-volume[data-v-7334367a]{position:absolute;top:0;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transition:visibility 0s,opacity .5s ease;transition:visibility 0s,opacity .5s ease;z-index:2}.controls-audio-volume .rangeWrapper[data-v-7334367a]{height:27px;padding:0 9px;margin:0 8px;background:var(--background-color)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]{--track-size:68px;--track-width:3px;--track-color:#bcbcbc;--thumb-size:9px;--thumb-color:#444;all:revert;-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0;height:100%;width:var(--track-size);overflow:hidden;cursor:-webkit-grab;cursor:grab;background:var(--background-color)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]:active{cursor:-webkit-grabbing;cursor:grabbing}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]::-webkit-slider-runnable-track{background:-webkit-gradient(linear,left top,left bottom,color-stop(0,var(--track-color))) no-repeat 50%/100% var(--track-width);background:linear-gradient(var(--track-color) 0 0) no-repeat 50%/100% var(--track-width)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background:var(--thumb-color);--clip-top:calc(var(--thumb-size)*0.5 - var(--track-width)*0.5);--clip-bottom:calc(var(--thumb-size) - var(--clip-top));--clip-buffer:7%;-webkit-box-shadow:calc(0px - var(--thumb-size) - var(--track-size)) 0 0 var(--track-size) var(--thumb-color);box-shadow:calc(0px - var(--thumb-size) - var(--track-size)) 0 0 var(--track-size) var(--thumb-color);-webkit-clip-path:polygon(100% 0,var(--clip-buffer) 0,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--clip-buffer) 100%,100% 100%);clip-path:polygon(100% 0,var(--clip-buffer) 0,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--clip-buffer) 100%,100% 100%)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]::-moz-range-track{background:var(--track-color)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]::-moz-range-progress{background:var(--thumb-color)}.controls-audio-volume .rangeWrapper input[type=range i][data-v-7334367a]::-moz-range-thumb{-moz-appearance:none;appearance:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background:var(--thumb-color);border:none}.controls-audio-volume .rangeWrapper:hover input[data-v-7334367a]{--thumb-size:11px}.gallery-controls button[data-v-71f7875f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-71f7875f{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-71f7875f{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-71f7875f],icon-elem[type=spinner] svg[data-v-71f7875f]{-webkit-animation:rotate-360-71f7875f 1s linear infinite;animation:rotate-360-71f7875f 1s linear infinite}.gallery-controls[data-v-71f7875f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;position:absolute;width:100%;height:100px;bottom:0;padding:8px;color:#fff;font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif;font-size:13px;font-weight:300;letter-spacing:1px;text-transform:none;background:-webkit-gradient(linear,left top,left bottom,color-stop(35%,rgba(0,0,0,0)),color-stop(75%,rgba(0,0,0,.35)),to(rgba(0,0,0,.65)));background:linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.35) 75%,rgba(0,0,0,.65))}.gallery-controls .svg-icon[data-v-71f7875f]:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.gallery-controls .svg-icon.fill-icon[data-v-71f7875f]{fill:#fff}.gallery-controls button[data-v-71f7875f]{padding:0;height:32px;z-index:10000}.gallery-controls button[data-v-71f7875f]:not(:last-child){-webkit-margin-start:24px;margin-inline-start:24px}.gallery-controls button .svg-icon[data-v-71f7875f]{margin:0 5px;width:24px;height:24px}.gallery-controls button-share .svg-icon[data-v-71f7875f]{width:20px;height:20px}.gallery-controls:not(.showLabels) .label[data-v-71f7875f]{display:none}.gallery-controls:not(.showLabels) button[data-v-71f7875f]{-webkit-margin-start:16px;margin-inline-start:16px}@-webkit-keyframes rotate-360-dad1eb9c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-dad1eb9c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-dad1eb9c],icon-elem[type=spinner] svg[data-v-dad1eb9c]{-webkit-animation:rotate-360-dad1eb9c 1s linear infinite;animation:rotate-360-dad1eb9c 1s linear infinite}.fade-enter-active[data-v-dad1eb9c],.fade-leave-active[data-v-dad1eb9c]{-webkit-transition:opacity .4s;transition:opacity .4s}.fade-enter-from[data-v-dad1eb9c],.fade-leave-to[data-v-dad1eb9c]{opacity:0}.tooltip[data-v-dad1eb9c]{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif;font-size:13px;font-weight:400;letter-spacing:.2px;text-transform:none;color:#444;background-color:#fff;position:absolute;left:0;top:-12px;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);min-width:288px;border:.6px solid #979797;border-radius:12px}.tooltip .content[data-v-dad1eb9c],.tooltip[data-v-dad1eb9c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tooltip .content[data-v-dad1eb9c]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:20px 30px 14px 30px;text-align:center;line-height:19px}.tooltip .actions[data-v-dad1eb9c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #e0e0e0}.tooltip .actions>div[data-v-dad1eb9c]{width:100%;text-align:center;border-right:1px solid #e0e0e0;line-height:32px}.tooltip .actions>div[data-v-dad1eb9c]:hover{background-color:#f9f9f9}.tooltip .actions>div[data-v-dad1eb9c]:first-child{border-bottom-left-radius:12px}.tooltip .actions>div[data-v-dad1eb9c]:last-child{border-right:none;border-bottom-right-radius:12px}@-webkit-keyframes rotate-360-b46d2fd8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-b46d2fd8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-b46d2fd8],icon-elem[type=spinner] svg[data-v-b46d2fd8]{-webkit-animation:rotate-360-b46d2fd8 1s linear infinite;animation:rotate-360-b46d2fd8 1s linear infinite}.cast-message[data-v-b46d2fd8]{position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);color:#fff;font-size:24px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.uncast-button[data-v-b46d2fd8]{width:28px;height:28px;padding:0;margin-left:10px;opacity:.9}.uncast-button[data-v-b46d2fd8] :hover{opacity:1}.player-4kalert-anchor[data-v-30981ee4],.player-slideshow-drag[data-v-30981ee4],.player-slideshow-loader[data-v-30981ee4],.player-slideshow-playbtn-wrap[data-v-30981ee4],.player-slideshow-playbtn[data-v-30981ee4],.player-slideshow-preview[data-v-30981ee4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-slideshow-drag[data-v-30981ee4],.player-slideshow-loader[data-v-30981ee4],.player-slideshow-playbtn-wrap[data-v-30981ee4],.player-slideshow-playbtn[data-v-30981ee4],.player-slideshow-preview[data-v-30981ee4],.player-view[data-v-30981ee4],.player[data-v-30981ee4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.player-view[data-v-30981ee4]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.player-fullscreen .player-view[data-v-30981ee4],.player-slideshow-drag[data-v-30981ee4],.player-slideshow-loader[data-v-30981ee4],.player-slideshow-playbtn-wrap[data-v-30981ee4],.player-slideshow-preview[data-v-30981ee4]{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-30981ee4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-30981ee4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-30981ee4],icon-elem[type=spinner] svg[data-v-30981ee4]{-webkit-animation:rotate-360-30981ee4 1s linear infinite;animation:rotate-360-30981ee4 1s linear infinite}.fade-enter-active[data-v-30981ee4],.fade-leave-active[data-v-30981ee4]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-enter-from[data-v-30981ee4],.fade-leave-to[data-v-30981ee4]{opacity:0}.player[data-v-30981ee4]{color:#444;--body-text-color:#444;width:100%;height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.player .svg-icon[data-v-30981ee4]:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.player .svg-icon.fill-icon[data-v-30981ee4]{fill:#444}.player[data-v-30981ee4]:where(:not(.player-transparent-bg)){background-color:#868686}.player-view[data-v-30981ee4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;cursor:pointer;overflow:hidden;z-index:1}.player-4kalert[data-v-30981ee4]{position:absolute;bottom:12px;left:12px;z-index:10}.player-4kalert-anchor[data-v-30981ee4]{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif;font-size:13px;font-weight:300;letter-spacing:.2px;text-transform:none;color:#fff;background-color:rgba(28,28,28,.5);width:48px;height:24px;border-radius:4px;-webkit-transition:all .4s;transition:all .4s}.player-4kalert-anchor .svg-icon[data-v-30981ee4]:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-4kalert-anchor .svg-icon.fill-icon[data-v-30981ee4]{fill:#fff}.player-4kalert-anchor[data-v-30981ee4]:hover{background-color:rgba(28,28,28,.75)}.player-4kalert-anchor-label[data-v-30981ee4],.player-4kalert-anchor .svg-icon[data-v-30981ee4]{margin:0 2px}.player-4kalert-anchor .svg-icon[data-v-30981ee4]{width:14px;height:14px}.player-slideshow[data-v-30981ee4]{position:relative}.player-slideshow-drag[data-v-30981ee4],.player-slideshow-loader[data-v-30981ee4],.player-slideshow-playbtn-wrap[data-v-30981ee4],.player-slideshow-preview[data-v-30981ee4]{z-index:1}.player-slideshow-drag .svg-icon[data-v-30981ee4],.player-slideshow-loader .svg-icon[data-v-30981ee4],.player-slideshow-playbtn-wrap .svg-icon[data-v-30981ee4],.player-slideshow-preview .svg-icon[data-v-30981ee4]{width:32px;height:32px}.player-slideshow-loader[data-v-30981ee4]{background:hsla(0,0%,100%,.8)}.player-slideshow-loader .svg-icon[data-v-30981ee4]{opacity:.8}.player-slideshow-playbtn[data-v-30981ee4]{color:#fff;width:60px;height:60px;border:3px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.05);padding-left:4px}.player-slideshow-playbtn .svg-icon[data-v-30981ee4]:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-slideshow-playbtn .svg-icon.fill-icon[data-v-30981ee4]{fill:#fff}.player-slideshow-playbtn-wrap[data-v-30981ee4]{background-color:rgba(0,0,0,.05)}.player-controls[data-v-30981ee4]{--background-color:#fff;position:relative;top:0;margin-top:auto}.player .controls-slide-down-enter-active[data-v-30981ee4],.player .controls-slide-down-leave-active[data-v-30981ee4]{-webkit-transition:top .4s;transition:top .4s}.player .controls-slide-down-enter-from[data-v-30981ee4],.player .controls-slide-down-leave-to[data-v-30981ee4]{top:-40px}.player-gallery-controls[data-v-30981ee4]{z-index:2;-webkit-transition:opacity .4s;transition:opacity .4s}.player:not(:hover) .player-gallery-controls[data-v-30981ee4]:not(.player:not(:hover) .player-gallery-controls-fixed){opacity:0}.player-fullscreen[data-v-30981ee4]{background-color:#000}.player-fullscreen-clean [data-v-30981ee4]{cursor:none}.player-fullscreen .player-view[data-v-30981ee4]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-fullscreen .player-controls[data-v-30981ee4]{top:unset;bottom:0;z-index:10}.player-fullscreen .controls-slide-up-enter-active[data-v-30981ee4],.player-fullscreen .controls-slide-up-leave-active[data-v-30981ee4]{-webkit-transition:bottom .4s;transition:bottom .4s}.player-fullscreen .controls-slide-up-enter-from[data-v-30981ee4],.player-fullscreen .controls-slide-up-leave-to[data-v-30981ee4]{bottom:-40px}.player-fullscreen[data-v-30981ee4] .player-controls{color:#fff;background-color:#000;--body-text-color:#fff}.player-fullscreen[data-v-30981ee4] .player-controls .svg-icon:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-fullscreen[data-v-30981ee4] .player-controls .svg-icon.fill-icon{fill:#fff}@-webkit-keyframes rotate-360-bd08a45e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-bd08a45e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-bd08a45e],icon-elem[type=spinner] svg[data-v-bd08a45e]{-webkit-animation:rotate-360-bd08a45e 1s linear infinite;animation:rotate-360-bd08a45e 1s linear infinite}.action[data-v-bd08a45e]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50px;min-width:50px;height:50px;border-radius:50px;margin-left:16px;background-color:rgba(68,68,68,.4)}.action.active[data-v-bd08a45e],.action[data-v-bd08a45e]:hover{background-color:rgba(68,68,68,.8)}.action[data-v-bd08a45e]:not(.useMargin):first-child{margin-left:0}.action svg[data-v-bd08a45e]{height:25px;stroke:#fff!important}.action .playerContainerModal[data-v-bd08a45e]{width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px)}.delete .playerContainerModal[data-v-bd08a45e]{z-index:2}.delete .playerContainerModal[data-v-bd08a45e] .actions>div{line-height:unset;padding:20px}@-webkit-keyframes rotate-360-0a6b50e8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-0a6b50e8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-0a6b50e8],icon-elem[type=spinner] svg[data-v-0a6b50e8]{-webkit-animation:rotate-360-0a6b50e8 1s linear infinite;animation:rotate-360-0a6b50e8 1s linear infinite}.addVideo[data-v-0a6b50e8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;gap:20px}.addVideo .formWrapper[data-v-0a6b50e8]{display:-webkit-box;display:-ms-flexbox;display:flex;gap:14px;min-height:61px}.addVideo .formWrapper .form[data-v-0a6b50e8]{-webkit-box-flex:1;-ms-flex:1;flex:1;max-width:470px}.addVideo .formWrapper .form[data-v-0a6b50e8] .field{margin:0}.addVideo .formWrapper .form+.pButton[data-v-0a6b50e8]{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important}@-webkit-keyframes rotate-360-53debe4b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-53debe4b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-53debe4b],icon-elem[type=spinner] svg[data-v-53debe4b]{-webkit-animation:rotate-360-53debe4b 1s linear infinite;animation:rotate-360-53debe4b 1s linear infinite}.action[data-v-53debe4b]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50px;min-width:50px;height:50px;border-radius:50px;margin-left:16px;background-color:rgba(68,68,68,.4)}.action.active[data-v-53debe4b],.action[data-v-53debe4b]:hover{background-color:rgba(68,68,68,.8)}.action[data-v-53debe4b]:not(.useMargin):first-child{margin-left:0}.action svg[data-v-53debe4b]{height:25px;stroke:#fff!important}.action .playerContainerModal[data-v-53debe4b]{width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px)}.crop[data-v-53debe4b]{display:contents}@-webkit-keyframes rotate-360-6093bce1{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-6093bce1{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-6093bce1],icon-elem[type=spinner] svg[data-v-6093bce1]{-webkit-animation:rotate-360-6093bce1 1s linear infinite;animation:rotate-360-6093bce1 1s linear infinite}.action[data-v-6093bce1]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:50px;min-width:50px;height:50px;border-radius:50px;margin-left:16px;background-color:rgba(68,68,68,.4)}.action.active[data-v-6093bce1],.action[data-v-6093bce1]:hover{background-color:rgba(68,68,68,.8)}.action[data-v-6093bce1]:not(.useMargin):first-child{margin-left:0}.action svg[data-v-6093bce1]{height:25px;stroke:#fff!important}.action .playerContainerModal[data-v-6093bce1]{width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px)}.simpleTooltip[data-v-6093bce1]{background-color:#444}@-webkit-keyframes rotate-360-0cfb5f52{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-0cfb5f52{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-0cfb5f52],icon-elem[type=spinner] svg[data-v-0cfb5f52]{-webkit-animation:rotate-360-0cfb5f52 1s linear infinite;animation:rotate-360-0cfb5f52 1s linear infinite}.actions[data-v-0cfb5f52]{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%}.actions.active[data-v-0cfb5f52],.overlayMessageWrapper[data-v-3f413154]{display:-webkit-box;display:-ms-flexbox;display:flex}.overlayMessageWrapper[data-v-3f413154]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-3f413154{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-3f413154{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-3f413154],icon-elem[type=spinner] svg[data-v-3f413154]{-webkit-animation:rotate-360-3f413154 1s linear infinite;animation:rotate-360-3f413154 1s linear infinite}.overlayMessageWrapper[data-v-3f413154]{position:absolute;top:0;right:0;bottom:0;left:0}.overlayMessageWrapper .overlayMessage[data-v-3f413154]{padding:10px 15px;text-align:center}@-webkit-keyframes rotate-360-4a43c88d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4a43c88d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4a43c88d],icon-elem[type=spinner] svg[data-v-4a43c88d]{-webkit-animation:rotate-360-4a43c88d 1s linear infinite;animation:rotate-360-4a43c88d 1s linear infinite}.slideEditorWrapper[data-v-4a43c88d]{position:relative;left:2px;width:calc(100% - 3px)}.slideEditorWrapper.onFocus[data-v-4a43c88d]{outline:1px solid #fff;height:calc(100% - 1px)}.slideEditorWrapper.onFocus[data-v-4a43c88d]:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;outline:1px dashed #000;pointer-events:none}.slideEditorWrapper .topEditWrapper[data-v-4a43c88d]{position:absolute;height:100%;left:0;right:0}.slideEditorWrapper .topEditWrapper .playerContainerOverlayTopEdit[data-v-4a43c88d]{position:-webkit-sticky;position:sticky;top:0}.slideEditorWrapper .topEditWrapper .playerContainerOverlayTopEdit.forceVisible[data-v-4a43c88d]{z-index:2}.slideEditorWrapper .topEditWrapper .playerContainerOverlayTopEdit[data-v-4a43c88d] .deleteSlideWrapper .simpleTooltip{position:absolute!important;right:-3px;top:40px}.slideEditorWrapper .slide-wrap-editor.desktopView[data-v-4a43c88d]{width:calc(100vw - 310px)}.slideEditorWrapper .slide-wrap-editor.slidetextmobile[data-v-4a43c88d]:not(.desktopView):not(.thumbMode){--width-edge:375px!important}.slideEditorWrapper[data-v-4a43c88d] .slide-wrap-editor picture[data-assetid^=img]{position:relative;opacity:1!important;visibility:initial!important}.slideEditorWrapper[data-v-4a43c88d] .slide-wrap-editor picture[data-assetid^=img].ui-draggable-dragging{z-index:999}.slideEditorWrapper[data-v-4a43c88d] .slide-wrap-editor picture[data-assetid^=img] img[src=""]{visibility:hidden}.slideEditorWrapper[data-v-4a43c88d] .slide-wrap-editor .embed-target{position:relative}.slideEditorWrapper[data-v-4a43c88d] .slide-wrap-editor.fixSlideHeight picture[data-assetid^=img]{min-height:200px}.teleported[data-v-4a43c88d]{position:absolute;top:0;right:0;bottom:0;left:0}.teleported[data-v-4a43c88d]:hover{background:hsla(0,0%,100%,.5)}.teleported:hover .actions[data-v-4a43c88d]{display:-webkit-box;display:-ms-flexbox;display:flex}.teleported.isDragging[data-v-4a43c88d]:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0}.teleported.isDragging.missing[data-v-4a43c88d]{background-color:hsla(0,0%,100%,.5)}.teleported.isDragging.missing[data-v-4a43c88d]>.assetMissing:before{border:3px solid #868686!important}.teleported.isDragging.dragOver.missing[data-v-4a43c88d]{background-color:hsla(0,0%,100%,.8)}.teleported.isDragging.dragOver.missing[data-v-4a43c88d]>.assetMissing:before{border:3px solid #444!important}.teleported.isDragging.dragOver[data-v-4a43c88d]:not(.missing):before{border:3px solid #444;background-color:hsla(0,0%,100%,.5)}.teleported.isDragging[data-v-4a43c88d]>.assetMissing{background-color:initial!important}.slides-collection:not(.spread) .slides-collection-view[data-v-26918ecc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-26918ecc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-26918ecc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-26918ecc],icon-elem[type=spinner] svg[data-v-26918ecc]{-webkit-animation:rotate-360-26918ecc 1s linear infinite;animation:rotate-360-26918ecc 1s linear infinite}.fade-out-in-enter-active[data-v-26918ecc],.fade-out-in-leave-active[data-v-26918ecc]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-out-in-enter-active[data-v-26918ecc]{-webkit-transition-delay:.4s;transition-delay:.4s}.fade-out-in-enter-from[data-v-26918ecc],.fade-out-in-leave-to[data-v-26918ecc]{opacity:0}.slides-collection[data-v-26918ecc]{-webkit-transition:all .4s;transition:all .4s;width:100%}.slides-collection-view[data-v-26918ecc]{position:relative;overflow:hidden;width:100%;height:100%}.slides-collection-slide-wrap[data-v-26918ecc]{position:relative;aspect-ratio:var(--slide-proportions);width:100%;overflow:auto}.slides-collection.spread .slides-collection-view[data-v-26918ecc]{display:grid;grid-template-columns:repeat(var(--grid-columns),var(--slide-width));gap:var(--grid-gap);-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.slides-collection[data-v-26918ecc]:not(.spread){height:100%}.slides-collection:not(.spread) .slides-collection-slide-wrap[data-v-26918ecc]{position:absolute}@-webkit-keyframes rotate-360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner,icon-elem[type=spinner] svg{-webkit-animation:rotate-360 1s linear infinite;animation:rotate-360 1s linear infinite}body.pt-fullscreen-active{overflow:hidden}.fullscreen-content[data-v-778911c4],.fullscreen-wrap[data-v-778911c4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.fullscreen-wrap[data-v-778911c4],.fullscreen-wrap[data-v-778911c4]:before{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.fullscreen-wrap[data-v-778911c4]{position:fixed}@-webkit-keyframes rotate-360-778911c4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-778911c4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-778911c4],icon-elem[type=spinner] svg[data-v-778911c4]{-webkit-animation:rotate-360-778911c4 1s linear infinite;animation:rotate-360-778911c4 1s linear infinite}.fullscreen-wrap[data-v-778911c4]{z-index:9999}.fullscreen-wrap[data-v-778911c4]:before{content:"";background:var(--background_color);opacity:.95;z-index:-1;cursor:pointer}.fullscreen-wrap[data-v-778911c4]::-webkit-backdrop{display:none}.fullscreen-wrap[data-v-778911c4]::backdrop{display:none}.fullscreen-close-everywhere[data-v-778911c4]{cursor:pointer}.fullscreen-content[data-v-778911c4]{--max-width:min(100vw,var(--max-size));--max-height:min(100vh,var(--max-size));max-width:var(--max-width);max-height:var(--max-height)}.close-icon[data-v-778911c4]{position:absolute;top:32px;right:32px;width:16px;height:16px;cursor:pointer}[data-v-778911c4] picture img{max-width:var(--max-width);max-height:var(--max-height);-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.viewer-slideshow-loader[data-v-91f7ee98]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.viewer-slideshow-loader[data-v-91f7ee98],.viewer[data-v-91f7ee98]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.viewer-slideshow-loader[data-v-91f7ee98]{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-91f7ee98{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-91f7ee98{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-91f7ee98],icon-elem[type=spinner] svg[data-v-91f7ee98]{-webkit-animation:rotate-360-91f7ee98 1s linear infinite;animation:rotate-360-91f7ee98 1s linear infinite}.fade-enter-active[data-v-91f7ee98],.fade-leave-active[data-v-91f7ee98]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-enter-from[data-v-91f7ee98],.fade-leave-to[data-v-91f7ee98]{opacity:0}.viewer[data-v-91f7ee98]{color:#444;--body-text-color:#444;width:100%;height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer .svg-icon[data-v-91f7ee98]:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.viewer .svg-icon.fill-icon[data-v-91f7ee98]{fill:#444}.viewer[data-v-91f7ee98]:where(:not(.viewer-transparent-bg)){background-color:#868686}.viewer-view[data-v-91f7ee98]{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;cursor:pointer;overflow:auto;z-index:1}.viewer-slideshow[data-v-91f7ee98]{position:relative}.viewer-slideshow-loader[data-v-91f7ee98]{z-index:1}.viewer-slideshow-loader .svg-icon[data-v-91f7ee98]{width:32px;height:32px}.viewer-slideshow-loader[data-v-91f7ee98]{background:hsla(0,0%,100%,.8)}.viewer-slideshow-loader .svg-icon[data-v-91f7ee98]{opacity:.8}.viewer-gallery-controls[data-v-91f7ee98]{-webkit-transition:opacity .4s;transition:opacity .4s}.viewer .slides-collection-slide-wrap:not(:hover) .viewer-gallery-controls[data-v-91f7ee98]:not(.viewer .slides-collection-slide-wrap:not(:hover) .viewer-gallery-controls-fixed){opacity:0}.viewer[data-v-91f7ee98] .slides-collection-slide-wrap{border:1px solid #d0d0d0}.viewer-slideshow-loader[data-v-445a1178]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.viewer-slideshow-loader[data-v-445a1178],.viewer[data-v-445a1178]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.viewer[data-v-445a1178]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.viewer-slideshow-loader[data-v-445a1178]{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-445a1178{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-445a1178{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-445a1178],icon-elem[type=spinner] svg[data-v-445a1178]{-webkit-animation:rotate-360-445a1178 1s linear infinite;animation:rotate-360-445a1178 1s linear infinite}.fade-enter-active[data-v-445a1178],.fade-leave-active[data-v-445a1178]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-enter-from[data-v-445a1178],.fade-leave-to[data-v-445a1178]{opacity:0}.viewer[data-v-445a1178]{color:#444;--body-text-color:#444;--content-max-width:1280px;width:100%;margin:0 auto}.viewer .svg-icon[data-v-445a1178]:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.viewer .svg-icon.fill-icon[data-v-445a1178]{fill:#444}.viewer[data-v-445a1178] picture{-webkit-touch-callout:none}.viewer[data-v-445a1178] .slide .layout-wrap{max-width:var(--content-max-width)}.viewer[data-v-445a1178].feature-lightbox .viewer-slideshow picture img{cursor:pointer}.viewer-view[data-v-445a1178]{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;z-index:1}.viewer-slideshow[data-v-445a1178]{position:relative}.viewer-slideshow-loader[data-v-445a1178]{z-index:1}.viewer-slideshow-loader .svg-icon[data-v-445a1178]{width:32px;height:32px}.viewer-slideshow-loader[data-v-445a1178]{background:hsla(0,0%,100%,.8)}.viewer-slideshow-loader .svg-icon[data-v-445a1178]{opacity:.8}@-webkit-keyframes rotate-360-9444ba2a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-9444ba2a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-9444ba2a],icon-elem[type=spinner] svg[data-v-9444ba2a]{-webkit-animation:rotate-360-9444ba2a 1s linear infinite;animation:rotate-360-9444ba2a 1s linear infinite}.integrationDialog[data-v-9444ba2a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;padding-bottom:40px}.integrationDialog .title[data-v-9444ba2a]{margin-bottom:10px!important}.integrationDialog .description[data-v-9444ba2a]{margin-bottom:40px}.integrationDialog textarea[data-v-9444ba2a]{-webkit-box-flex:1;-ms-flex:1;flex:1;resize:none}.integrationDialog .formWrapper[data-v-9444ba2a] .field{margin-bottom:24px}.integrationDialog .formWrapper[data-v-9444ba2a] .field:last-of-type{margin-top:40px;margin-bottom:-5px}@-webkit-keyframes rotate-360-5b77ef51{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-5b77ef51{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-5b77ef51],icon-elem[type=spinner] svg[data-v-5b77ef51]{-webkit-animation:rotate-360-5b77ef51 1s linear infinite;animation:rotate-360-5b77ef51 1s linear infinite}.tabs[data-v-5b77ef51]{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #ececec;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;margin-bottom:40px}.tabs .tab[data-v-5b77ef51]{cursor:pointer;margin-right:40px;padding-bottom:5px}.tabs .tab.selected[data-v-5b77ef51]{border-bottom:2px solid}.tabs .tab[data-v-5b77ef51]:hover{color:#444!important}.tabs-content .tab-content[data-v-5b77ef51]:not(.visible){display:none}.player-loader[data-v-f0d8d690],.player-playbtn-wrap[data-v-f0d8d690],.player-playbtn[data-v-f0d8d690]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-loader[data-v-f0d8d690],.player-playbtn-wrap[data-v-f0d8d690],.player-playbtn[data-v-f0d8d690],.player-view[data-v-f0d8d690],.player[data-v-f0d8d690]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.player-view[data-v-f0d8d690]{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.player-fullscreen .player-view[data-v-f0d8d690],.player-loader[data-v-f0d8d690],.player-playbtn-wrap[data-v-f0d8d690]{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-f0d8d690{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-f0d8d690{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-f0d8d690],icon-elem[type=spinner] svg[data-v-f0d8d690]{-webkit-animation:rotate-360-f0d8d690 1s linear infinite;animation:rotate-360-f0d8d690 1s linear infinite}.fade-enter-active[data-v-f0d8d690],.fade-leave-active[data-v-f0d8d690]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-enter-from[data-v-f0d8d690],.fade-leave-to[data-v-f0d8d690]{opacity:0}.player video[data-v-f0d8d690]{display:block}.player .video[data-v-f0d8d690]{width:100%;height:100%}.player .video-wrap[data-v-f0d8d690]{position:relative;max-width:100%;max-height:100%}.player-view[data-v-f0d8d690]{-webkit-box-flex:1;-ms-flex:1;flex:1;position:relative;cursor:pointer;overflow:hidden;z-index:1}.player-controls[data-v-f0d8d690]{--background-color:#fff;position:relative;top:0;margin-top:auto}.player .controls-slide-down-enter-active[data-v-f0d8d690],.player .controls-slide-down-leave-active[data-v-f0d8d690]{-webkit-transition:top .4s;transition:top .4s}.player .controls-slide-down-enter-from[data-v-f0d8d690],.player .controls-slide-down-leave-to[data-v-f0d8d690]{top:-40px}.player-loader[data-v-f0d8d690],.player-playbtn-wrap[data-v-f0d8d690]{z-index:1}.player-loader .svg-icon[data-v-f0d8d690],.player-playbtn-wrap .svg-icon[data-v-f0d8d690]{width:32px;height:32px}.player-loader[data-v-f0d8d690]{background:hsla(0,0%,100%,.8)}.player-loader .svg-icon[data-v-f0d8d690]{opacity:.8}.player-playbtn[data-v-f0d8d690]{color:#fff;width:60px;height:60px;border:3px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.05);padding-left:4px}.player-playbtn .svg-icon[data-v-f0d8d690]:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-playbtn .svg-icon.fill-icon[data-v-f0d8d690]{fill:#fff}.player-playbtn-wrap[data-v-f0d8d690]{background-color:rgba(0,0,0,.05)}.player-gallery-controls[data-v-f0d8d690]{z-index:2;-webkit-transition:opacity .4s;transition:opacity .4s}.player:not(:hover) .player-gallery-controls[data-v-f0d8d690]:not(.player:not(:hover) .player-gallery-controls-fixed){opacity:0}.player-fullscreen[data-v-f0d8d690]{background-color:#000}.player-fullscreen .player-view[data-v-f0d8d690]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-fullscreen .player-controls[data-v-f0d8d690]{top:unset;bottom:0;z-index:10}.player-fullscreen .controls-slide-up-enter-active[data-v-f0d8d690],.player-fullscreen .controls-slide-up-leave-active[data-v-f0d8d690]{-webkit-transition:bottom .4s;transition:bottom .4s}.player-fullscreen .controls-slide-up-enter-from[data-v-f0d8d690],.player-fullscreen .controls-slide-up-leave-to[data-v-f0d8d690]{bottom:-40px}.player-fullscreen[data-v-f0d8d690] .player-controls{color:#fff;background-color:#000;--body-text-color:#fff}.player-fullscreen[data-v-f0d8d690] .player-controls .svg-icon:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-fullscreen[data-v-f0d8d690] .player-controls .svg-icon.fill-icon{fill:#fff}</style><style >.social-buttons a[data-v-2b2fb540]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-2b2fb540{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-2b2fb540{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-2b2fb540],icon-elem[type=spinner] svg[data-v-2b2fb540]{-webkit-animation:rotate-360-2b2fb540 1s linear infinite;animation:rotate-360-2b2fb540 1s linear infinite}.social-buttons ul[data-v-2b2fb540]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 -6px}.social-buttons a[data-v-2b2fb540]{padding:0 6px}.social-buttons .svg-icon[data-v-2b2fb540]{width:20px;height:20px}.carousel .swiper-slide[data-v-a1c54ce4],.carousel[data-v-a1c54ce4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carousel[data-v-a1c54ce4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@-webkit-keyframes rotate-360-a1c54ce4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-a1c54ce4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-a1c54ce4],icon-elem[type=spinner] svg[data-v-a1c54ce4]{-webkit-animation:rotate-360-a1c54ce4 1s linear infinite;animation:rotate-360-a1c54ce4 1s linear infinite}.carousel[data-v-a1c54ce4]{text-align:center}.carousel .swiper-container[data-v-a1c54ce4]{width:100%;height:calc(100% - 100px)}.carousel .swiper-slide[data-v-a1c54ce4]{height:100%}.carousel .swiper-slide img[data-v-a1c54ce4]{-o-object-fit:scale-down;object-fit:scale-down;height:100%}.carousel .swiper-lazy-preloader[data-v-a1c54ce4]{--swiper-theme-color:var(--body-text-color);border-width:2px}.carousel .pagination[data-v-a1c54ce4]{margin:0 auto}.carousel .arrows[data-v-a1c54ce4]{cursor:pointer!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.carousel .arrows .btn[data-v-a1c54ce4]{position:absolute;top:calc(50% - 30px);width:60px;height:60px;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;stroke-width:.3333333333;z-index:1}.carousel .arrows .btn-prev[data-v-a1c54ce4]{right:auto;left:60px;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.carousel .arrows .btn-prev[data-v-a1c54ce4]:hover{-webkit-transform:scale(1.1) rotate(90deg);-ms-transform:scale(1.1) rotate(90deg);transform:scale(1.1) rotate(90deg)}.carousel .arrows .btn-next[data-v-a1c54ce4]{left:auto;right:60px;-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.carousel .arrows .btn-next[data-v-a1c54ce4]:hover{-webkit-transform:scale(1.1) rotate(270deg);-ms-transform:scale(1.1) rotate(270deg);transform:scale(1.1) rotate(270deg)}.carousel[data-v-a1c54ce4] .swiper-pagination-bullet{margin:0 6px;width:6px;height:6px;background:none;border:1px solid var(--body-text-color);opacity:.5}.carousel[data-v-a1c54ce4] .swiper-pagination-bullet-active{background:var(--body-text-color);opacity:1}@-webkit-keyframes rotate-360-dfe6a680{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-dfe6a680{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-dfe6a680],icon-elem[type=spinner] svg[data-v-dfe6a680]{-webkit-animation:rotate-360-dfe6a680 1s linear infinite;animation:rotate-360-dfe6a680 1s linear infinite}.product-preview[data-v-dfe6a680]{height:100%}.product-preview[data-v-dfe6a680]:not(#dummy){position:revert;background:revert}.product-preview .carousel[data-v-dfe6a680]{height:100%}.product-preview .carousel[data-v-dfe6a680] img{max-height:700px;max-width:700px}@media(max-width:650px){.product-preview .carousel[data-v-dfe6a680] img{width:100vw}}.player-preview-loader[data-v-2a558258],.player-preview-playbtn-wrap[data-v-2a558258],.player-preview-playbtn[data-v-2a558258]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.player-preview-loader[data-v-2a558258],.player-preview-playbtn-wrap[data-v-2a558258],.player-preview-playbtn[data-v-2a558258],.player[data-v-2a558258]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.player-preview-loader[data-v-2a558258],.player-preview-playbtn-wrap[data-v-2a558258]{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-2a558258{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-2a558258{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-2a558258],icon-elem[type=spinner] svg[data-v-2a558258]{-webkit-animation:rotate-360-2a558258 1s linear infinite;animation:rotate-360-2a558258 1s linear infinite}.fade-enter-active[data-v-2a558258],.fade-leave-active[data-v-2a558258]{-webkit-transition:opacity .4s,z-index .4s;transition:opacity .4s,z-index .4s}.fade-enter-from[data-v-2a558258],.fade-leave-to[data-v-2a558258]{opacity:0}.player[data-v-2a558258]{color:#444;--body-text-color:#444;width:100%;height:100%}.player .svg-icon[data-v-2a558258]:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.player .svg-icon.fill-icon[data-v-2a558258]{fill:#444}.player[data-v-2a558258]:where(:not(.player-transparent-bg)){background-color:#868686}.player-preview-wrap[data-v-2a558258],.player-video[data-v-2a558258]{position:absolute;width:100%;height:100%}.player-preview-wrap[data-v-2a558258]{-webkit-box-flex:1;-ms-flex:1;flex:1;cursor:pointer;overflow:hidden;border:1px solid #e0e0e0;z-index:1}.player-preview-loader[data-v-2a558258],.player-preview-playbtn-wrap[data-v-2a558258]{z-index:1}.player-preview-loader .svg-icon[data-v-2a558258],.player-preview-playbtn-wrap .svg-icon[data-v-2a558258]{width:32px;height:32px}.player-preview-loader[data-v-2a558258]{background:hsla(0,0%,100%,.8)}.player-preview-loader .svg-icon[data-v-2a558258]{opacity:.8}.player-preview-playbtn[data-v-2a558258]{color:#fff;width:60px;height:60px;border:3px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.05);padding-left:4px}.player-preview-playbtn .svg-icon[data-v-2a558258]:not(.fill-icon){stroke:#fff;fill:rgba(0,0,0,0)}.player-preview-playbtn .svg-icon.fill-icon[data-v-2a558258]{fill:#fff}.player-preview-playbtn-wrap[data-v-2a558258]{background-color:rgba(0,0,0,.05)}.slideshow-app-doc picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.slideshow-app-doc{color:#444;overflow:hidden}.slideshow-app-doc *,.slideshow-app-doc :after,.slideshow-app-doc :before{-webkit-box-sizing:border-box;box-sizing:border-box}.slideshow-app-doc body,.slideshow-app-doc html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.slideshow-app-doc h1,.slideshow-app-doc h2,.slideshow-app-doc h3,.slideshow-app-doc h4,.slideshow-app-doc h5,.slideshow-app-doc h6{margin:0}.slideshow-app-doc a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}.slideshow-app-doc button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}.slideshow-app-doc button:not(:disabled){cursor:pointer}.slideshow-app-doc img{border-style:none}.slideshow-app-doc li,.slideshow-app-doc ul{list-style:none;margin:0;padding:0}.slideshow-app-doc [hidden],.slideshow-app-doc template{display:none}.slideshow-app-doc :focus{outline:none}.slideshow-app-doc picture{display:block;position:relative}.slideshow-app-doc .svg-icon:not(.fill-icon){stroke:currentColor}.slideshow-app-doc .svg-icon.fill-icon{fill:currentColor}.slideshow-app-doc .svg-icon:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.slideshow-app-doc .svg-icon.fill-icon{fill:#444}[data-v-003def1c] picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-003def1c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-003def1c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-003def1c],icon-elem[type=spinner] svg[data-v-003def1c]{-webkit-animation:rotate-360-003def1c 1s linear infinite;animation:rotate-360-003def1c 1s linear infinite}[data-v-003def1c] *,[data-v-003def1c] :after,[data-v-003def1c] :before{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-003def1c] body,[data-v-003def1c] html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}[data-v-003def1c] h1,[data-v-003def1c] h2,[data-v-003def1c] h3,[data-v-003def1c] h4,[data-v-003def1c] h5,[data-v-003def1c] h6{margin:0}[data-v-003def1c] a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}[data-v-003def1c] button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}[data-v-003def1c] button:not(:disabled){cursor:pointer}[data-v-003def1c] img{border-style:none}[data-v-003def1c] li,[data-v-003def1c] ul{list-style:none;margin:0;padding:0}[data-v-003def1c] [hidden],[data-v-003def1c] template{display:none}[data-v-003def1c] :focus{outline:none}[data-v-003def1c] picture{display:block;position:relative}[data-v-003def1c] .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}[data-v-003def1c] .svg-icon.fill-icon{fill:currentColor}.player[data-v-003def1c]{width:100%;height:100%}.player-wrap[data-v-003def1c]{width:100vw;height:100vh}@-webkit-keyframes rotate-360-53b6e9eb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-53b6e9eb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-53b6e9eb],icon-elem[type=spinner] svg[data-v-53b6e9eb]{-webkit-animation:rotate-360-53b6e9eb 1s linear infinite;animation:rotate-360-53b6e9eb 1s linear infinite}.playerContainerModal[data-v-53b6e9eb]{position:absolute;border:.6px solid #979797;border-radius:12px;color:#444;background-color:#fff}.playerContainerModal .content[data-v-53b6e9eb],.playerContainerModal[data-v-53b6e9eb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.playerContainerModal .content[data-v-53b6e9eb]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:20px 30px 14px 30px;text-align:center;line-height:19px}.playerContainerModal .actions[data-v-53b6e9eb]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-top:1px solid #e0e0e0}.playerContainerModal .actions>div[data-v-53b6e9eb]{width:100%;text-align:center;border-right:1px solid #e0e0e0;line-height:32px}.playerContainerModal .actions>div[data-v-53b6e9eb]:hover{background-color:#f9f9f9}.playerContainerModal .actions>div[data-v-53b6e9eb]:first-child{border-bottom-left-radius:12px}.playerContainerModal .actions>div[data-v-53b6e9eb]:last-child{border-right:none;border-bottom-right-radius:12px}.playerContainerModal.list .content[data-v-53b6e9eb]{white-space:nowrap;padding:0}.playerContainerModal.list .content[data-v-53b6e9eb]>div{padding:8px 22px;width:100%;border-bottom:1px solid #e0e0e0}.playerContainerModal.list .content[data-v-53b6e9eb]>div:hover{background-color:#f9f9f9}.playerContainerModal.list .content[data-v-53b6e9eb]>div:first-child{border-top-left-radius:12px;border-top-right-radius:12px}.playerContainerModal.list .content[data-v-53b6e9eb]>div:last-child{border-bottom:none;border-bottom-right-radius:12px;border-bottom-left-radius:12px}.playerContainerModal.fixed[data-v-53b6e9eb]{position:fixed}@-webkit-keyframes rotate-360-4eb960ea{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4eb960ea{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4eb960ea],icon-elem[type=spinner] svg[data-v-4eb960ea]{-webkit-animation:rotate-360-4eb960ea 1s linear infinite;animation:rotate-360-4eb960ea 1s linear infinite}.image-crop[data-v-4eb960ea]{width:100%;height:100%;position:relative;cursor:move}.transparent-img[data-v-4eb960ea]{position:absolute;z-index:2;opacity:.4;background-repeat:no-repeat}.bg-img[data-v-4eb960ea]{width:100%;height:100%;background-repeat:no-repeat;position:relative;z-index:3}.done-btn[data-v-4eb960ea]{width:50px;height:50px;position:absolute;z-index:4;top:calc(50% - 25px);right:calc(50% - 25px);background:rgba(68,68,68,.4)!important;border:none;border-radius:50%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.done-btn[data-v-4eb960ea]:active,.done-btn[data-v-4eb960ea]:focus{border:none;outline:none}.done-btn[data-v-4eb960ea]:hover{background:rgba(68,68,68,.8)!important}.done-icon[data-v-4eb960ea]{width:28px;height:20px;stroke:#fff!important}.successMessage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px;height:100%}.successMessage .icon-done{width:40px;height:40px}.successMessage .message{margin-top:0!important}.popupWindow.alert.VueDialog.fullscreen{top:0!important;left:0!important;width:100%!important;height:100%!important}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_] .content{margin:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_] .content .title{margin-top:0;margin-bottom:40px}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_] .content.lockedHeight{height:100%}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_] .btnWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;gap:25px}.popupWindow.alert.VueDialog .pColumn1[id^=vue_dialog_] .pButton{position:static;width:100%}.tab .head.normal .tabName[data-v-b48860f4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-b48860f4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-b48860f4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-b48860f4],icon-elem[type=spinner] svg[data-v-b48860f4]{-webkit-animation:rotate-360-b48860f4 1s linear infinite;animation:rotate-360-b48860f4 1s linear infinite}.tab .head.normal[data-v-b48860f4]{display:-webkit-box;display:-ms-flexbox;display:flex;border:1px solid #e0e0e0;border-radius:4px;line-height:35px;margin-bottom:16px;cursor:pointer}.tab .head.normal .tabName[data-v-b48860f4]{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif;font-size:12px;color:#bcbcbc;font-weight:400;letter-spacing:1px;text-transform:uppercase;-webkit-box-flex:1;-ms-flex:1;flex:1}.tab .head.normal .tabName[data-v-b48860f4]:hover{color:#444}.tab .head.normal .tabName.active[data-v-b48860f4]{background-color:#f2f2f2;color:#444}.tab .head.normal .tabName.active .icon[data-v-b48860f4]{display:block}.tab .head.normal .tabName[data-v-b48860f4]:not(:first-child){border-left:1px solid #e0e0e0}.tab .head.normal .tabName .name[data-v-b48860f4]{position:relative}.tab .head.normal .tabName .icon[data-v-b48860f4]{display:none;width:18px;height:18px;background-position:-21px -481px;margin-top:-1px;-webkit-margin-end:4px;margin-inline-end:4px;position:absolute;left:-23px;top:8px}.tab .head.dense[data-v-b48860f4]{display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;margin:15px 0;border-bottom:1px solid #d0d0d0}.tab .head.dense .tabName[data-v-b48860f4]{color:#bcbcbc;padding-bottom:6px;margin-right:40px;-webkit-transform:translateY(1.5px);-ms-transform:translateY(1.5px);transform:translateY(1.5px)}.tab .head.dense .tabName[data-v-b48860f4]:hover{color:#444}.tab .head.dense .tabName.active[data-v-b48860f4]{color:#444;border-bottom:2px solid #1c1c1c}.tab .head.dense .tabName.tabDisabled[data-v-b48860f4]{pointer-events:none}.tab .slide-forward-enter-active[data-v-b48860f4],.tab .slide-forward-leave-active[data-v-b48860f4]{-webkit-transition:left .5s,opacity .5s,width .5s;transition:left .5s,opacity .5s,width .5s}.tab .slide-forward-enter-from[data-v-b48860f4]{width:0;left:100%}.tab .slide-forward-enter-active[data-v-b48860f4]{position:absolute;overflow:hidden;background-color:#fff}.tab .slide-forward-enter-active[data-v-b48860f4] *{white-space:nowrap}.tab .slide-forward-enter-to[data-v-b48860f4]{width:100%;left:0}.tab .slide-forward-leave-from[data-v-b48860f4]{opacity:1}.tab .slide-forward-leave-active[data-v-b48860f4]{position:absolute;top:0;right:0;left:0}.tab .slide-forward-leave-to[data-v-b48860f4]{opacity:0}.selectSlideshow .urlInput .submitButton[data-v-00d80525]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-00d80525{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-00d80525{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-00d80525],icon-elem[type=spinner] svg[data-v-00d80525]{-webkit-animation:rotate-360-00d80525 1s linear infinite;animation:rotate-360-00d80525 1s linear infinite}.selectSlideshow .urlInput[data-v-00d80525]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px;padding-bottom:35px}.selectSlideshow .urlInput .urlInputTitle[data-v-00d80525]{width:100%}.selectSlideshow .urlInput .urlInputForm[data-v-00d80525]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:466px}.selectSlideshow .urlInput .urlInputForm[data-v-00d80525] .field{margin:0}.selectSlideshow .urlInput .submitButton[data-v-00d80525]{max-height:40px;padding:0 20px;text-align:center;cursor:pointer}.selectSlideshow .embedTitle[data-v-00d80525]{margin-top:40px;margin-bottom:32px}.selectSlideshow .embedSelect[data-v-00d80525]{display:grid;grid-template-columns:repeat(auto-fill,176px);gap:48px 70px;padding-bottom:48px}.selectSlideshow .embedSelect .embedBox[data-v-00d80525]{height:130px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;gap:10px}.selectSlideshow .embedSelect .embedBox.active .cover[data-v-00d80525]{border:3px solid #1c1c1c}.selectSlideshow .embedSelect .embedBox.active .name[data-v-00d80525]{font-weight:500}.selectSlideshow .embedSelect .embedBox .cover[data-v-00d80525]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:none;background-size:contain;background-position:50%;background-repeat:no-repeat}.selectSlideshow .embedSelect .embedBox .cover[data-v-00d80525]:hover{opacity:.85}.selectSlideshow .embedSelect .embedBox .name[data-v-00d80525]{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.selectVideo .urlInput .submitButton[data-v-9deafb7e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-9deafb7e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-9deafb7e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-9deafb7e],icon-elem[type=spinner] svg[data-v-9deafb7e]{-webkit-animation:rotate-360-9deafb7e 1s linear infinite;animation:rotate-360-9deafb7e 1s linear infinite}.selectVideo .urlInput[data-v-9deafb7e]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px;padding-bottom:35px}.selectVideo .urlInput .urlInputTitle[data-v-9deafb7e]{width:100%}.selectVideo .urlInput .urlInputForm[data-v-9deafb7e]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:466px}.selectVideo .urlInput .urlInputForm[data-v-9deafb7e] .field{margin:0}.selectVideo .urlInput .submitButton[data-v-9deafb7e]{max-height:40px;padding:0 20px;text-align:center;cursor:pointer}.selectVideo .embedTitle[data-v-9deafb7e]{margin-top:40px;margin-bottom:32px}.selectVideo .embedSelect[data-v-9deafb7e]{display:grid;grid-template-columns:repeat(auto-fill,176px);gap:48px 70px;padding-bottom:48px}.selectVideo .embedSelect .embedBox[data-v-9deafb7e]{height:130px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;gap:10px}.selectVideo .embedSelect .embedBox.active .cover[data-v-9deafb7e]{border:3px solid #1c1c1c}.selectVideo .embedSelect .embedBox.active .name[data-v-9deafb7e]{font-weight:500}.selectVideo .embedSelect .embedBox .cover[data-v-9deafb7e]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:none;background-size:contain;background-position:50%;background-repeat:no-repeat}.selectVideo .embedSelect .embedBox .cover[data-v-9deafb7e]:hover{opacity:.85}.selectVideo .embedSelect .embedBox .name[data-v-9deafb7e]{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.selectVideo>.videoSelection+.urlInputTitle[data-v-9deafb7e]{margin-top:24px}.selectVideo .urlInputTitle[data-v-9deafb7e]{margin-top:40px;margin-bottom:24px}.selectVideo .blogEditorAddVideoComponent[data-v-9deafb7e]{margin-bottom:40px}.embedIframe .urlInput .submitButton[data-v-8b3e2648]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-8b3e2648{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-8b3e2648{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-8b3e2648],icon-elem[type=spinner] svg[data-v-8b3e2648]{-webkit-animation:rotate-360-8b3e2648 1s linear infinite;animation:rotate-360-8b3e2648 1s linear infinite}.embedIframe[data-v-8b3e2648]{margin-top:40px}.embedIframe .urlInput[data-v-8b3e2648]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:24px;padding-bottom:35px}.embedIframe .urlInput .urlInputTitle[data-v-8b3e2648]{width:100%}.embedIframe .urlInput .urlInputForm[data-v-8b3e2648]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:466px}.embedIframe .urlInput .urlInputForm[data-v-8b3e2648] .field{margin:0}.embedIframe .urlInput .submitButton[data-v-8b3e2648]{max-height:40px;text-align:center;cursor:pointer}.embedIframe .embedTitle[data-v-8b3e2648]{margin-top:40px;margin-bottom:32px}.embedIframe .embedSelect[data-v-8b3e2648]{display:grid;grid-template-columns:repeat(auto-fill,176px);gap:48px 70px;padding-bottom:48px}.embedIframe .embedSelect .embedBox[data-v-8b3e2648]{height:130px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;gap:10px}.embedIframe .embedSelect .embedBox.active .cover[data-v-8b3e2648]{border:3px solid #1c1c1c}.embedIframe .embedSelect .embedBox.active .name[data-v-8b3e2648]{font-weight:500}.embedIframe .embedSelect .embedBox .cover[data-v-8b3e2648]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;outline:none;background-size:contain;background-position:50%;background-repeat:no-repeat}.embedIframe .embedSelect .embedBox .cover[data-v-8b3e2648]:hover{opacity:.85}.embedIframe .embedSelect .embedBox .name[data-v-8b3e2648]{text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embedIframe .urlInput[data-v-8b3e2648]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.embedIframe .urlInput .urlInputForm[data-v-8b3e2648] textarea{resize:none;height:140px}.embedIframe .urlInput .submitButton[data-v-8b3e2648]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:40px;padding:0 20px}@-webkit-keyframes rotate-360-4ad1abf5{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4ad1abf5{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4ad1abf5],icon-elem[type=spinner] svg[data-v-4ad1abf5]{-webkit-animation:rotate-360-4ad1abf5 1s linear infinite;animation:rotate-360-4ad1abf5 1s linear infinite}.tabs-list[data-v-4ad1abf5]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch}.tab-item[data-v-4ad1abf5]{min-width:80px;height:40px;border:1px solid #e0e0e0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#fff;color:#868686;cursor:pointer}.tab-item[data-v-4ad1abf5]:not(:last-child){border-right:none}.tab-item[data-v-4ad1abf5]:hover{background:#f9f9f9}.tab-item--active[data-v-4ad1abf5]{background:#ececec;color:#1c1c1c}.tab-item--active[data-v-4ad1abf5]:hover{background:#e0e0e0}@-webkit-keyframes rotate-360-246a7a09{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-246a7a09{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-246a7a09],icon-elem[type=spinner] svg[data-v-246a7a09]{-webkit-animation:rotate-360-246a7a09 1s linear infinite;animation:rotate-360-246a7a09 1s linear infinite}.layoutContainer[data-v-246a7a09]{position:fixed;width:auto;height:auto;max-height:450px;overflow-y:scroll;background-color:#fff;padding:25px 40px 42px;border-radius:10px;border:1px solid #bcbcbc;-webkit-box-shadow:2px 2px 11px rgba(0,0,0,.07),-1px -1px 11px rgba(0,0,0,.07);box-shadow:2px 2px 11px rgba(0,0,0,.07),-1px -1px 11px rgba(0,0,0,.07)}.layoutContainer--alignCenter[data-v-246a7a09]{position:fixed!important;max-height:600px;left:50%!important;top:50%!important;-webkit-transform:translateX(-50%) translateY(-50%)!important;-ms-transform:translateX(-50%) translateY(-50%)!important;transform:translateX(-50%) translateY(-50%)!important}.layoutContainer--alignLeft[data-v-246a7a09]{-webkit-transform:translateX(calc(-100% + 42px));-ms-transform:translateX(calc(-100% + 42px));transform:translateX(calc(-100% + 42px))}.layoutContainer.centerPos[data-v-246a7a09]{-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.layoutContainer .categoryTitle[data-v-246a7a09]{line-height:18px;padding:18px 0 12px}.layoutContainer--blog[data-v-246a7a09]{width:513px;padding:0 35px 42px}.layoutContainer--blog .categoryTitle[data-v-246a7a09]{line-height:18px;padding:18px 0 9px}.layoutContainer--with-filters[data-v-246a7a09]{padding-top:0!important}.layoutContainer .layoutSubContainer[data-v-246a7a09]{display:grid;grid-template-columns:repeat(5,54px);row-gap:19px;-webkit-column-gap:24px;-moz-column-gap:24px;column-gap:24px}.layoutContainer .layoutSubContainer--blog[data-v-246a7a09]{grid-template-columns:repeat(auto-fit,60px)!important;-webkit-column-gap:15px;-moz-column-gap:15px;column-gap:15px;row-gap:6px}.layoutContainer .layoutSubContainer.mobileLayouts[data-v-246a7a09]{grid-template-columns:repeat(5,30px);-webkit-column-gap:24px;-moz-column-gap:24px;column-gap:24px;row-gap:15px}.layoutContainer .layoutSubContainer .layoutElement .layoutThumb[data-v-246a7a09]{cursor:pointer;position:relative}.layoutContainer .layoutSubContainer .layoutElement .layoutThumb[data-v-246a7a09]:after{position:absolute;top:0;right:0;bottom:3px;left:0;border:2px solid #868686}.layoutContainer .layoutSubContainer .layoutElement .layoutThumb[data-v-246a7a09]:hover:after{content:""}.layoutContainer .layoutSubContainer .layoutElement .layoutThumb img[data-v-246a7a09]{width:100%}.layoutContainer .layoutSubContainer .layoutElement.SelectedLayout .layoutThumb[data-v-246a7a09]:after{content:"";border:3px solid #444}.layoutContainer[data-v-246a7a09]::-webkit-scrollbar-track{margin:10px 0}.layoutContainer .excluded-layout[data-v-246a7a09]{width:60px}.layoutContainerMobile[data-v-246a7a09]{padding:9px 35px 31px}.layoutContainerMobile .categoryTitle[data-v-246a7a09]{padding:17px 0 9px}.layoutContainerMobile--blog[data-v-246a7a09]{padding:10px 35px 42px}.layoutContainerMobile--blog .categoryTitle[data-v-246a7a09]{padding:26px 0 8px}.layoutContainerMobile .layoutSubContainer--blog[data-v-246a7a09]{grid-template-columns:repeat(9,30px)!important;-webkit-column-gap:14px;-moz-column-gap:14px;column-gap:14px;row-gap:14px}.layoutContainerMobile .excluded-layout[data-v-246a7a09]{width:30px}.filters-header[data-v-246a7a09]{position:-webkit-sticky;position:sticky;top:0;z-index:5;background:#fff;padding-top:16px}.filter-title[data-v-246a7a09]{padding-top:30px}.filters-list[data-v-246a7a09]{padding:16px 0 36px}.excluded-layouts[data-v-246a7a09]{width:100px;display:-webkit-box;display:-ms-flexbox;display:flex}.excluded-layouts[data-v-246a7a09]:before{content:"";height:40px;margin-left:10px;padding-left:24px;border-left:1px solid #868686}.excluded-layouts--next-line[data-v-246a7a09]{grid-column-start:1}@-webkit-keyframes rotate-360-514aa17b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-514aa17b{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-514aa17b],icon-elem[type=spinner] svg[data-v-514aa17b]{-webkit-animation:rotate-360-514aa17b 1s linear infinite;animation:rotate-360-514aa17b 1s linear infinite}.category[data-v-514aa17b]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1}.category[data-v-514aa17b]:not(:last-child){border-bottom:1px solid #e0e0e0}.category.arrowOnHover svg.icon-arrow-right[data-v-514aa17b]{visibility:hidden}.category.arrowOnHover:hover svg.icon-arrow-right[data-v-514aa17b]{visibility:visible}.category .categoryContent[data-v-514aa17b]{width:100%}.category svg.icon-arrow-right[data-v-514aa17b]{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);min-width:20px;margin-right:10px}@-webkit-keyframes rotate-360-b16ec69a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-b16ec69a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-b16ec69a],icon-elem[type=spinner] svg[data-v-b16ec69a]{-webkit-animation:rotate-360-b16ec69a 1s linear infinite;animation:rotate-360-b16ec69a 1s linear infinite}.listView[data-v-b16ec69a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.listView .category[data-v-b16ec69a]{padding-left:24px}.listView .category .categoryName[data-v-b16ec69a]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding-right:60px;max-width:25em}.listView .category[data-v-b16ec69a] .categoryContent{height:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:left}.headerReturn .slotWrapper .parentComponentName[data-v-41c9a7c8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-41c9a7c8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-41c9a7c8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-41c9a7c8],icon-elem[type=spinner] svg[data-v-41c9a7c8]{-webkit-animation:rotate-360-41c9a7c8 1s linear infinite;animation:rotate-360-41c9a7c8 1s linear infinite}.headerReturn[data-v-41c9a7c8]{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:55px;padding:0 10px;border-bottom:1px solid #e0e0e0}.headerReturn svg.icon-arrow-left[data-v-41c9a7c8]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);margin-right:10px;min-width:20px}.headerReturn .slotWrapper[data-v-41c9a7c8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.headerReturn .slotWrapper .parentComponentName[data-v-41c9a7c8]{margin-right:30px;-webkit-box-flex:1;-ms-flex:1;flex:1}.headerReturn .slotWrapper *+.parentComponentName[data-v-41c9a7c8]{margin-right:10px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}@-webkit-keyframes rotate-360-2dd9ffd2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-2dd9ffd2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-2dd9ffd2],icon-elem[type=spinner] svg[data-v-2dd9ffd2]{-webkit-animation:rotate-360-2dd9ffd2 1s linear infinite;animation:rotate-360-2dd9ffd2 1s linear infinite}.fontsList__item[data-v-2dd9ffd2]{border-bottom:1px solid #e0e0e0;height:48px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.fontsList__item svg[data-v-2dd9ffd2]{width:10px;height:10px}.upload[data-v-2dd9ffd2]{margin-top:55px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.upload__btn[data-v-2dd9ffd2]:not(#dummy){margin-bottom:10px;width:180px}.separator[data-v-2dd9ffd2]{position:relative;left:-40px;width:calc(100% + 80px);height:1px}.copyrightTerms__invalid[data-v-2dd9ffd2]{margin-bottom:10px;margin-top:64px}.copyrightTerms__invalid.visible+div[data-v-2dd9ffd2]{margin-top:0}.copyrightTerms .note[data-v-2dd9ffd2]{margin-top:90px}.copyrightTerms .copyRightForm[data-v-2dd9ffd2] .field[data-fldid=enableCopyright]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px;margin-bottom:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.copyrightTerms .copyRightForm[data-v-2dd9ffd2] .field[data-fldid=enableCopyright] .pSecondFieldLabel{margin-left:0}.popupWindow.progress.hideButtons .btnWrapper{display:none!important}.popupWindow.progress .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.popupWindow.fontUpload .pColumn1{height:auto}.uploadedFontNameBody[data-v-2dd9ffd2]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}@-webkit-keyframes rotate-360-29478200{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-29478200{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-29478200],icon-elem[type=spinner] svg[data-v-29478200]{-webkit-animation:rotate-360-29478200 1s linear infinite;animation:rotate-360-29478200 1s linear infinite}[data-v-29478200] .dd-option-image,[data-v-29478200] .dd-selected-image{display:none}.buttons-body[data-v-29478200]{margin-top:40px;width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.mb-32[data-v-29478200]{margin-bottom:32px}.mt-16[data-v-29478200]{margin-top:16px}.mb-40[data-v-29478200]{margin-bottom:40px}.delete[data-v-29478200]{width:100%;color:#fff;margin-right:20px}.delete[data-v-29478200]:hover{background-color:#cb1b21}.close[data-v-29478200]{width:100%;color:#444}.close[data-v-29478200]:hover{background-color:#e0e0e0}.conteiner[data-v-29478200]{width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}div[app=RichTextEdit].forceMobile .BLG_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F2{font-family:PT Sans,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F3{font-family:PT Sans Narrow,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F4{font-family:Montserrat,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F5{font-family:Varela Round,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F6{font-family:Titillium Web,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F7{font-family:Roboto,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F8{font-family:Oswald,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F9{font-family:garamond-premier-pro-display,serif!important}div[app=RichTextEdit].forceMobile .BLG_F10{font-family:Crimson Text,serif!important}div[app=RichTextEdit].forceMobile .BLG_F11{font-family:Volkhov,serif!important}div[app=RichTextEdit].forceMobile .BLG_F12{font-family:Old Standard TT,serif!important}div[app=RichTextEdit].forceMobile .BLG_F13{font-family:Libre Baskerville,serif!important}div[app=RichTextEdit].forceMobile .BLG_F14{font-family:Sanchez,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F15{font-family:Roboto Slab,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F16{font-family:Glegoo,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F17{font-family:Sail,cursive!important}div[app=RichTextEdit].forceMobile .BLG_F18{font-family:Playball,cursive!important}div[app=RichTextEdit].forceMobile .BLG_F19{font-family:Oleo Script,cursive!important}div[app=RichTextEdit].forceMobile .BLG_F20{font-family:Cormorant!important}div[app=RichTextEdit].forceMobile .BLG_F21{font-family:Public Sans!important}div[app=RichTextEdit].forceMobile .BLG_F22{font-family:Overpass!important}div[app=RichTextEdit].forceMobile .BLG_F23{font-family:Karla!important}div[app=RichTextEdit].forceMobile .BLG_F24{font-family:Gentium Basic!important}div[app=RichTextEdit].forceMobile .BLG_F25{font-family:Archivo!important}div[app=RichTextEdit].forceMobile .BLG_F26{font-family:Space Mono!important}div[app=RichTextEdit].forceMobile .BLG_F27{font-family:minerva-modern,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F28{font-family:Poppins,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F29{font-family:baskerville-urw,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F30{font-family:nimbus-sans,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F31{font-family:articulat-cf,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F32{font-family:europa,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F33{font-family:adobe-handwriting-ernie,sans-serif!important}div[app=RichTextEdit].forceMobile .BLG_F34{font-family:DM Sans!important}div[app=RichTextEdit].forceMobile .BLG_F35{font-family:Courier Prime!important}div[app=RichTextEdit].forceMobile .BLG_F36{font-family:Italiana!important}div[app=RichTextEdit].forceMobile .BLG_S1,div[app=RichTextEdit].forceMobile .BLG_S2{font-size:10px!important}div[app=RichTextEdit].forceMobile .BLG_S3{font-size:11px!important}div[app=RichTextEdit].forceMobile .BLG_S4{font-size:12px!important}div[app=RichTextEdit].forceMobile .BLG_S5{font-size:13px!important}div[app=RichTextEdit].forceMobile .BLG_S6{font-size:15px!important}div[app=RichTextEdit].forceMobile .BLG_S7{font-size:16px!important}div[app=RichTextEdit].forceMobile .BLG_S8{font-size:20px!important}div[app=RichTextEdit].forceMobile .BLG_S9{font-size:24px!important}div[app=RichTextEdit].forceMobile .BLG_S10{font-size:32px!important}div[app=RichTextEdit].forceMobile .BLG_S11{font-size:36px!important}div[app=RichTextEdit].forceMobile .BLG_S12{font-size:40px!important}div[app=RichTextEdit].forceMobile .BLG_S13{font-size:48px!important}div[app=RichTextEdit].forceMobile .BLG_S14{font-size:56px!important}div[app=RichTextEdit].forceMobile .BLG_L1{letter-spacing:0!important}div[app=RichTextEdit].forceMobile .BLG_L2{letter-spacing:.03em!important}div[app=RichTextEdit].forceMobile .BLG_L3{letter-spacing:.1em!important}div[app=RichTextEdit].forceMobile .BLG_L4{letter-spacing:.15em!important}div[app=RichTextEdit].forceMobile .BLG_L5{letter-spacing:.25em!important}div[app=RichTextEdit].forceMobile .BLG_L6{letter-spacing:.35em!important}div[app=RichTextEdit].forceMobile .BLG_H1{line-height:80%!important}div[app=RichTextEdit].forceMobile .BLG_H2{line-height:100%!important}div[app=RichTextEdit].forceMobile .BLG_H3{line-height:125%!important}div[app=RichTextEdit].forceMobile .BLG_H4{line-height:150%!important}div[app=RichTextEdit].forceMobile .BLG_H5{line-height:200%!important}div[app=RichTextEdit].forceMobile .BLG_W1{font-weight:100!important}div[app=RichTextEdit].forceMobile .BLG_W2{font-weight:200!important}div[app=RichTextEdit].forceMobile .BLG_W3{font-weight:300!important}div[app=RichTextEdit].forceMobile .BLG_W4{font-weight:400!important}div[app=RichTextEdit].forceMobile .BLG_W5{font-weight:500!important}div[app=RichTextEdit].forceMobile .BLG_W6{font-weight:600!important}div[app=RichTextEdit].forceMobile .BLG_W7{font-weight:700!important}div[app=RichTextEdit].forceMobile .BLG_W8{font-weight:800!important}div[app=RichTextEdit].forceMobile .BLG_W9{font-weight:900!important}div[app=RichTextEdit].forceMobile .BLG_U1{text-transform:none!important}div[app=RichTextEdit].forceMobile .BLG_U2{text-transform:uppercase!important}div[app=RichTextEdit].forceMobile .BLG_FS1{font-style:normal!important}div[app=RichTextEdit].forceMobile .BLG_FS2{font-style:italic!important}div[app=RichTextEdit].forceMobile .BLG_FS3{font-style:oblique!important}div[app=RichTextEdit].forceMobile .BLG_D1{direction:ltr!important}div[app=RichTextEdit].forceMobile .BLG_D2{direction:rtl!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F2{font-family:PT Sans,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F3{font-family:PT Sans Narrow,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F4{font-family:Montserrat,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F5{font-family:Varela Round,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F6{font-family:Titillium Web,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F7{font-family:Roboto,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F8{font-family:Oswald,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F9{font-family:garamond-premier-pro-display,serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F10{font-family:Crimson Text,serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F11{font-family:Volkhov,serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F12{font-family:Old Standard TT,serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F13{font-family:Libre Baskerville,serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F14{font-family:Sanchez,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F15{font-family:Roboto Slab,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F16{font-family:Glegoo,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F17{font-family:Sail,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F18{font-family:Playball,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F19{font-family:Oleo Script,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F20{font-family:Cormorant!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F21{font-family:Public Sans!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F22{font-family:Overpass!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F23{font-family:Karla!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F24{font-family:Gentium Basic!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F25{font-family:Archivo!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F26{font-family:Space Mono!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F27{font-family:minerva-modern,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F28{font-family:Poppins,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F29{font-family:baskerville-urw,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F30{font-family:nimbus-sans,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F31{font-family:articulat-cf,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F32{font-family:europa,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F33{font-family:adobe-handwriting-ernie,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F34{font-family:DM Sans!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F35{font-family:Courier Prime!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_F36{font-family:Italiana!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S1{font-size:10px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S2{font-size:11px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S3{font-size:12px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S4{font-size:14px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S5{font-size:16px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S6{font-size:18px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S7{font-size:20px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S8{font-size:24px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S9{font-size:32px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S10{font-size:40px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S11{font-size:48px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S12{font-size:64px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S13{font-size:72px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_S14{font-size:80px!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L1{letter-spacing:0!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L2{letter-spacing:.03em!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L3{letter-spacing:.1em!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L4{letter-spacing:.15em!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L5{letter-spacing:.25em!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_L6{letter-spacing:.35em!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_H1{line-height:80%!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_H2{line-height:100%!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_H3{line-height:125%!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_H4{line-height:150%!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_H5{line-height:200%!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W1{font-weight:100!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W2{font-weight:200!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W3{font-weight:300!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W4{font-weight:400!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W5{font-weight:500!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W6{font-weight:600!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W7{font-weight:700!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W8{font-weight:800!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_W9{font-weight:900!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_U1{text-transform:none!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_U2{text-transform:uppercase!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_FS1{font-style:normal!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_FS2{font-style:italic!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_FS3{font-style:oblique!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_D1{direction:ltr!important}div[app=RichTextEdit]:not(.forceMobile) .BLG_D2{direction:rtl!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F0{font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F1{font-family:Gotham XNarrow SSm A,Gotham XNarrow SSm B,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F2{font-family:PT Sans,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F3{font-family:PT Sans Narrow,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F4{font-family:Montserrat,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F5{font-family:Varela Round,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F6{font-family:Titillium Web,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F7{font-family:Roboto,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F8{font-family:Oswald,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F9{font-family:garamond-premier-pro-display,serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F10{font-family:Crimson Text,serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F11{font-family:Volkhov,serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F12{font-family:Old Standard TT,serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F13{font-family:Libre Baskerville,serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F14{font-family:Sanchez,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F15{font-family:Roboto Slab,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F16{font-family:Glegoo,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F17{font-family:Sail,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F18{font-family:Playball,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F19{font-family:Oleo Script,cursive!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F20{font-family:Cormorant!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F21{font-family:Public Sans!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F22{font-family:Overpass!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F23{font-family:Karla!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F24{font-family:Gentium Basic!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F25{font-family:Archivo!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F26{font-family:Space Mono!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F27{font-family:minerva-modern,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F28{font-family:Poppins,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F29{font-family:baskerville-urw,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F30{font-family:nimbus-sans,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F31{font-family:articulat-cf,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F32{font-family:europa,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F33{font-family:adobe-handwriting-ernie,sans-serif!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F34{font-family:DM Sans!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F35{font-family:Courier Prime!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_F36{font-family:Italiana!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_S1{font-size:10px!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_S2{font-size:15px!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_S3{font-size:25px!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_S4{font-size:40px!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_S5{font-size:60px!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L1{letter-spacing:0!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L2{letter-spacing:.03em!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L3{letter-spacing:.1em!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L4{letter-spacing:.15em!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L5{letter-spacing:.25em!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_L6{letter-spacing:.35em!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_H1{line-height:80%!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_H2{line-height:100%!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_H3{line-height:125%!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_H4{line-height:150%!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_H5{line-height:200%!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W1{font-weight:100!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W2{font-weight:200!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W3{font-weight:300!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W4{font-weight:400!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W5{font-weight:500!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W6{font-weight:600!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W7{font-weight:700!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W8{font-weight:800!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_W9{font-weight:900!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_U1{text-transform:none!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_U2{text-transform:uppercase!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_FS1{font-style:normal!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_FS2{font-style:italic!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_FS3{font-style:oblique!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_D1{direction:ltr!important}div[app=RichTextEdit]:not(.forceMobile) .SLD_D2{direction:rtl!important}@-webkit-keyframes rotate-360-fdbce6fe{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-fdbce6fe{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-fdbce6fe],icon-elem[type=spinner] svg[data-v-fdbce6fe]{-webkit-animation:rotate-360-fdbce6fe 1s linear infinite;animation:rotate-360-fdbce6fe 1s linear infinite}.editView[data-v-fdbce6fe]{width:560px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.editView[data-v-fdbce6fe] .tabHeader .parentComponentName{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:start}.editView>.tabHeader+.editor[data-v-fdbce6fe] .menu{border-radius:0}.editView>.editor[data-v-fdbce6fe] .menu{border-radius:15px}.editView .editor[data-v-fdbce6fe] .fontSizeForm ul.dd-options{max-height:250px}.editView .editor[data-v-fdbce6fe] .fontSelectionForm ul.dd-options{max-height:356px!important;overflow:hidden!important}.editView .add-font-btn[data-v-fdbce6fe]{position:-webkit-sticky;position:sticky;bottom:0;width:100%;height:58px;font-size:14px;font-weight:325;background:#f2f2f2!important;text-align:center;z-index:13}.editView .add-font-btn[data-v-fdbce6fe]:hover{background:#e0e0e0!important}.uploadedFontNameBody[data-v-fdbce6fe]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%}.simpleTooltip[data-v-fdbce6fe]{left:-71px;top:32px}.simpleTooltip[data-v-fdbce6fe]:after{right:-70px!important}.fontCollectionItemDelete[data-v-fdbce6fe]{cursor:pointer;position:absolute;opacity:0;right:10px;top:6px;z-index:4}[data-v-fdbce6fe] li{position:relative}[data-v-fdbce6fe] li:hover .fontCollectionItemDelete{opacity:1!important}@-webkit-keyframes rotate-360-e82745ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-e82745ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-e82745ca],icon-elem[type=spinner] svg[data-v-e82745ca]{-webkit-animation:rotate-360-e82745ca 1s linear infinite;animation:rotate-360-e82745ca 1s linear infinite}.quickTextContainer .quickTextContainerTabs[data-v-e82745ca]{position:relative;width:100%}@-webkit-keyframes rotate-360-270011ec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-270011ec{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-270011ec],icon-elem[type=spinner] svg[data-v-270011ec]{-webkit-animation:rotate-360-270011ec 1s linear infinite;animation:rotate-360-270011ec 1s linear infinite}.rangeInput[data-v-270011ec]{width:100%;height:31px}.rangeInputField[data-v-270011ec]{z-index:2;position:relative;cursor:pointer;padding-top:18px;padding-bottom:10px}.rangeAxisLine[data-v-270011ec]{width:100%;height:3px;background:#d0d0d0;margin-top:-9px;border-radius:2px}.selectedTrack[data-v-270011ec]{height:5px;background:#000;border-radius:4px;cursor:pointer;position:absolute;top:8px;left:0;z-index:1}.hoveredTrack[data-v-270011ec]{height:5px;background:#bcbcbc;border-radius:4px;position:absolute;top:8px;z-index:2}.sliderThumb[data-v-270011ec]{width:11px;height:11px;background-color:#1c1c1c;border:6px solid rgba(0,0,0,0);border-radius:50%;cursor:pointer;position:absolute;top:9px;z-index:4;margin-top:-5px;margin-left:-7px;-webkit-transition:width 50ms ease-in,height 50ms ease-in,margin-top 50ms ease-in,margin-left 50ms ease-in;transition:width 50ms ease-in,height 50ms ease-in,margin-top 50ms ease-in,margin-left 50ms ease-in}.sliderThumb[data-v-270011ec]:hover{width:15px!important;height:15px!important;margin-top:-6px;margin-left:-9px}.sliderThumbBlock[data-v-270011ec]{position:absolute;width:30px;height:30px;left:-14px;top:-14px}.rangeInputTick[data-v-270011ec]{width:3px;height:3px;position:absolute;top:9px;background:#444;border-radius:50%;z-index:3;cursor:pointer;margin-left:-2px}.rangeInputTick--hovered[data-v-270011ec],.rangeInputTick[data-v-270011ec]:hover{width:5px;height:5px;margin-top:-1px;margin-left:-3px!important}.rangeInputTick--hide[data-v-270011ec]{display:none}.rangeInputTick--first[data-v-270011ec]{margin-left:1px!important}.rangeInputTick--last[data-v-270011ec]{margin-left:-4px!important}.rangeInputTick--tracked[data-v-270011ec]{background:#d0d0d0}.rangeInputAxis[data-v-270011ec]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;top:-14px}.rangeInputLabel[data-v-270011ec]{font-size:11px;letter-spacing:.2px;color:#868686;font-weight:325;text-align:center;padding-top:1px;cursor:pointer}.hidden-ghost[data-v-270011ec]{display:none}.borderRow[data-v-e434f732]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:8px 24px 24px 40px}.borderRange[data-v-e434f732]{width:256px}.customBtn[data-v-e434f732]{height:32px;background:#f2f2f2!important;text-align:center;padding-top:3px}@-webkit-keyframes rotate-360-d7b8aae4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-d7b8aae4{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-d7b8aae4],icon-elem[type=spinner] svg[data-v-d7b8aae4]{-webkit-animation:rotate-360-d7b8aae4 1s linear infinite;animation:rotate-360-d7b8aae4 1s linear infinite}.aroundBordersList[data-v-d7b8aae4]{border-bottom:1px solid #e0e0e0}.borderListItem[data-v-d7b8aae4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:26px 40px 26px 35px}.borderListItem--between[data-v-d7b8aae4]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.borderRange[data-v-d7b8aae4]{width:256px}.borderTitle[data-v-d7b8aae4]{padding:20px 0 0 35px}@-webkit-keyframes rotate-360-81383cb6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-81383cb6{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-81383cb6],icon-elem[type=spinner] svg[data-v-81383cb6]{-webkit-animation:rotate-360-81383cb6 1s linear infinite;animation:rotate-360-81383cb6 1s linear infinite}.playerContainerBorderEdit .borderTitle[data-v-81383cb6]{font-size:13px;letter-spacing:.2px;color:#444;font-weight:400;padding:24px 0 0 40px}.playerContainerBorderEdit .tabTitle[data-v-81383cb6]{font-weight:500;height:56px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e0e0e0;cursor:pointer}.playerContainerBorderEdit .tabTitleLabel[data-v-81383cb6]{margin-left:15px}.playerContainerBorderEdit svg.iconArrowLeft[data-v-81383cb6]{width:20px;display:block;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);margin-left:10px}@-webkit-keyframes rotate-360-8728cb78{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-8728cb78{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-8728cb78],icon-elem[type=spinner] svg[data-v-8728cb78]{-webkit-animation:rotate-360-8728cb78 1s linear infinite;animation:rotate-360-8728cb78 1s linear infinite}.color-icon[data-v-8728cb78]{width:38px;min-width:38px;height:38px;border:1px solid #e0e0e0}.color-icon-box[data-v-8728cb78]{height:100%;border-bottom:5px solid rgba(0,0,0,0);font-family:Inter,sans-serif;font-size:18px;font-weight:500;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@-webkit-keyframes rotate-360-3ac5e7cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-3ac5e7cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-3ac5e7cc],icon-elem[type=spinner] svg[data-v-3ac5e7cc]{-webkit-animation:rotate-360-3ac5e7cc 1s linear infinite;animation:rotate-360-3ac5e7cc 1s linear infinite}.confirm-message[data-v-3ac5e7cc]{width:310px;min-height:122px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:#fff;border:1px solid #d0d0d0;border-radius:12px;-webkit-box-shadow:2px 2px 11px 0 rgba(0,0,0,.07);box-shadow:2px 2px 11px 0 rgba(0,0,0,.07)}.confirm-title[data-v-3ac5e7cc]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center;padding:18px 10px}.confirm-title[data-v-3ac5e7cc],.confirm-tools[data-v-3ac5e7cc]{display:-webkit-box;display:-ms-flexbox;display:flex}.confirm-btn[data-v-3ac5e7cc]{width:50%;min-height:50px;display:block;border-top:1px solid #e0e0e0!important;color:#1c1c1c!important;font-family:Gotham Narrow SSm,sans-serif;font-size:13px!important;font-weight:400!important;letter-spacing:.2px;line-height:17px;padding:17px 10px}.confirm-btn[data-v-3ac5e7cc]:first-child{border-right:1px solid #e0e0e0;border-bottom-left-radius:12px}.confirm-btn[data-v-3ac5e7cc]:last-child{border-bottom-right-radius:12px}.confirm-btn[data-v-3ac5e7cc]:hover{background:#f9f9f9}#cp-custom .picker_cancel,#cp-custom .picker_done,#cp-custom .picker_sample{display:none}#cp-custom{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}#cp-custom,#cp-custom .picker_wrapper{display:-webkit-box;display:-ms-flexbox;display:flex}#cp-custom .picker_wrapper{background:#fff;-webkit-box-shadow:none;box-shadow:none;width:auto;padding:0}#cp-custom .picker_wrapper .picker_hue{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}#cp-custom .picker_sl{width:296px!important;height:212px}#cp-custom .picker_sl:before{padding-bottom:0}@-webkit-keyframes rotate-360-0ab93d34{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-0ab93d34{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-0ab93d34],icon-elem[type=spinner] svg[data-v-0ab93d34]{-webkit-animation:rotate-360-0ab93d34 1s linear infinite;animation:rotate-360-0ab93d34 1s linear infinite}div[data-v-0ab93d34]{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-box-sizing:border-box}.color-selector[data-v-0ab93d34]{width:360px;background:#fff;border-radius:12px;border:1px solid #d0d0d0;-webkit-box-shadow:2px 2px 11px rgba(0,0,0,.07),-1px -1px 11px rgba(0,0,0,.07);box-shadow:2px 2px 11px rgba(0,0,0,.07),-1px -1px 11px rgba(0,0,0,.07);letter-spacing:.2px}.color-selector div[data-v-0ab93d34]{-webkit-box-sizing:border-box;box-sizing:border-box}.cs-content[data-v-0ab93d34]{overflow:auto;padding:0 0 24px 32px}.cs-content--photo[data-v-0ab93d34]{max-height:calc(100vh - 200px)}.cp-edit-icon[data-v-0ab93d34]{width:16px;height:16px;stroke:#1c1c1c!important;margin:6px 0 0 5px}.cp-edit-icon--white[data-v-0ab93d34]{stroke:#fff!important}.cp-mode-nav[data-v-0ab93d34]{height:46px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #ddd;line-height:150%;padding:20px 32px 0;font-size:13px}.cp-mode[data-v-0ab93d34]{color:#bcbcbc;cursor:pointer;padding-bottom:7px}.cp-mode-active[data-v-0ab93d34]{color:#444;border-bottom:2px solid #444}.palette-colors[data-v-0ab93d34]{padding:16px 32px 0}.palette-list[data-v-0ab93d34]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:8px}.color-title[data-v-0ab93d34]{width:300px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:25px 0 25px 32px}.color-circle[data-v-0ab93d34]{width:30px;height:30px;border-radius:50%;border:2px solid #1c1c1c}.color-circle--palette[data-v-0ab93d34]{border:1px solid #e0e0e0;margin-right:9px;cursor:pointer}.color-label[data-v-0ab93d34]{font-size:14px;color:#444;text-transform:uppercase;margin-left:10px}.color-input[data-v-0ab93d34]{width:256px;text-transform:uppercase;margin-left:10px}.cs-canvas[data-v-0ab93d34]{cursor:crosshair}.cs-picker[data-v-0ab93d34]{width:295px}@-webkit-keyframes rotate-360-4e0c71bb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4e0c71bb{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4e0c71bb],icon-elem[type=spinner] svg[data-v-4e0c71bb]{-webkit-animation:rotate-360-4e0c71bb 1s linear infinite;animation:rotate-360-4e0c71bb 1s linear infinite}.custom-header[data-v-4e0c71bb]{height:55px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e0e0e0;padding:0 21px}.icon-arrow-left[data-v-4e0c71bb]{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);cursor:pointer}.colorTool[data-v-4e0c71bb]{position:absolute;top:0;left:calc(100% + 4px);z-index:4}.colorTool--alignLeft[data-v-4e0c71bb]{left:-364px!important}.custom-palette-row[data-v-4e0c71bb]{display:-webkit-box;display:-ms-flexbox;display:flex}.colors-list[data-v-4e0c71bb]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.color-item[data-v-4e0c71bb]{height:65px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:15px;padding-left:24px;cursor:pointer}.color-item[data-v-4e0c71bb]:not(:last-child){border-bottom:1px solid #f2f2f2}.color[data-v-4e0c71bb]{width:30px;min-width:30px;height:30px;border-radius:50%;border:1px solid #e0e0e0}.icon-column[data-v-4e0c71bb]{width:80px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-left:1px solid #f2f2f2}.delete[data-v-4e0c71bb]{position:relative;cursor:pointer}.delete .simpleTooltip[data-v-4e0c71bb]{width:auto;white-space:nowrap;-webkit-transform:translateX(calc(-100% + 32px));-ms-transform:translateX(calc(-100% + 32px));transform:translateX(calc(-100% + 32px))}.delete .simpleTooltip[data-v-4e0c71bb]:after{left:auto!important;right:12px!important}.confirmDelete[data-v-4e0c71bb]{position:fixed;z-index:9999;margin:140px 0 0 36px}@-webkit-keyframes rotate-360-f71bf4fc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-f71bf4fc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-f71bf4fc],icon-elem[type=spinner] svg[data-v-f71bf4fc]{-webkit-animation:rotate-360-f71bf4fc 1s linear infinite;animation:rotate-360-f71bf4fc 1s linear infinite}.usePaletteCategory[data-v-f71bf4fc]{height:74px;padding-left:20px;border-top:1px solid #e0e0e0}@-webkit-keyframes rotate-360-7f9f1e9e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-7f9f1e9e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-7f9f1e9e],icon-elem[type=spinner] svg[data-v-7f9f1e9e]{-webkit-animation:rotate-360-7f9f1e9e 1s linear infinite;animation:rotate-360-7f9f1e9e 1s linear infinite}.colorPalettePreview[data-v-7f9f1e9e]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;min-height:64px;padding-left:24px}.colorPalettePreview:hover .actions .icons[data-v-7f9f1e9e],.colorPalettePreview[data-v-7f9f1e9e]{display:-webkit-box;display:-ms-flexbox;display:flex}.colorPalettePreview:hover .actions .icons+.name[data-v-7f9f1e9e]{display:none}.colorPalettePreview .actions[data-v-7f9f1e9e]{white-space:nowrap;margin-right:20px}.colorPalettePreview .actions .icons[data-v-7f9f1e9e]{display:none}.colorPalettePreview .actions .icons .edit[data-v-7f9f1e9e]{position:relative;cursor:pointer}.colorPalettePreview .actions .icons .edit .simpleTooltip[data-v-7f9f1e9e]{-webkit-transform:translateX(calc(-100% + 32px));-ms-transform:translateX(calc(-100% + 32px));transform:translateX(calc(-100% + 32px))}.colorPalettePreview .actions .icons .edit .simpleTooltip[data-v-7f9f1e9e]:after{left:auto!important;right:16px!important}.colorPalettePreview .actions .icons .duplicate[data-v-7f9f1e9e]{position:relative;cursor:pointer}.colorPalettePreview .actions .icons .duplicate .simpleTooltip[data-v-7f9f1e9e]{width:auto;top:calc(100% + 10px);-webkit-transform:translateX(calc(-100% + 32px));-ms-transform:translateX(calc(-100% + 32px));transform:translateX(calc(-100% + 32px))}.colorPalettePreview .actions .icons .duplicate .simpleTooltip[data-v-7f9f1e9e]:after{left:auto!important;right:16px!important}.colorPalettePreview .palette-title[data-v-7f9f1e9e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.colorPalettePreview .palette-name[data-v-7f9f1e9e]{margin-left:16px}@-webkit-keyframes rotate-360-4238ad42{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4238ad42{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4238ad42],icon-elem[type=spinner] svg[data-v-4238ad42]{-webkit-animation:rotate-360-4238ad42 1s linear infinite;animation:rotate-360-4238ad42 1s linear infinite}.palette-list[data-v-4238ad42]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.palette-list[data-v-4238ad42]:not(:last-child){border-bottom:1px solid #e0e0e0!important}.palette[data-v-4238ad42]{width:calc(50% - .5px);height:64px;border-bottom:1px solid #f2f2f2}.palette[data-v-4238ad42]:nth-last-child(-n+1),.palette[data-v-4238ad42]:nth-last-child(-n+2):not(:nth-child(2n)){border-bottom:none!important}.palette[data-v-4238ad42]:nth-child(odd):not(.palette--custom){border-right:1px solid #f2f2f2}.palette[data-v-4238ad42]:hover{background:#f2f2f2}.palette--custom[data-v-4238ad42]{width:100%}.add-palette-btn[data-v-4238ad42]{width:100%;height:72px;font-size:14px;font-weight:325;background:#f2f2f2!important;text-align:center}.add-palette-btn[data-v-4238ad42]:hover{background:#e0e0e0!important}@-webkit-keyframes rotate-360-68629251{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-68629251{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-68629251],icon-elem[type=spinner] svg[data-v-68629251]{-webkit-animation:rotate-360-68629251 1s linear infinite;animation:rotate-360-68629251 1s linear infinite}.styleTabs[data-v-68629251]{position:relative;width:100%;background-color:#fff;border-radius:12px}.styleTabs[data-v-68629251]>*{max-height:calc(100vh - 180px);overflow-y:auto}@-webkit-keyframes rotate-360-1fa359ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-1fa359ca{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-1fa359ca],icon-elem[type=spinner] svg[data-v-1fa359ca]{-webkit-animation:rotate-360-1fa359ca 1s linear infinite;animation:rotate-360-1fa359ca 1s linear infinite}.playerContainerOverlayTopEdit[data-v-1fa359ca]{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;width:100%;height:0;overflow:hidden;background:-webkit-gradient(linear,left top,left bottom,from(rgba(68,68,68,.5)),to(hsla(0,0%,47.5%,0)));background:linear-gradient(180deg,rgba(68,68,68,.5),hsla(0,0%,47.5%,0));-webkit-transition:height .2s;transition:height .2s;z-index:1}.playerContainerOverlayTopEdit.forceVisible[data-v-1fa359ca]{height:115px;overflow:initial}.playerContainerOverlayTopEdit.forceVisible.blogEditor[data-v-1fa359ca]{height:60px}.playerContainerOverlayTopEdit>.borderContainerWrapper[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper[data-v-1fa359ca]{position:relative;min-width:42px;min-height:42px;height:42px;border-radius:50%;margin:10px 0 0 15px}.playerContainerOverlayTopEdit>.borderContainerWrapper.active[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper.active[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper.active[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper.active[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper.active[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper.active[data-v-1fa359ca]{background:#fff;z-index:1}.playerContainerOverlayTopEdit>.borderContainerWrapper.active>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper.active>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper.active>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper.active>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper.active>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper.active>svg[data-v-1fa359ca]{stroke:#000!important}.playerContainerOverlayTopEdit>.borderContainerWrapper.active .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper.active .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper.active .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper.active .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper.active .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper.active .simpleTooltip[data-v-1fa359ca]{display:none}.playerContainerOverlayTopEdit>.borderContainerWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper>svg[data-v-1fa359ca]{display:block;height:100%;width:21px;margin:auto;stroke:#fff!important}.playerContainerOverlayTopEdit>.borderContainerWrapper .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper .simpleTooltip[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper .simpleTooltip[data-v-1fa359ca]{width:auto;white-space:nowrap}.playerContainerOverlayTopEdit>.borderContainerWrapper .simpleTooltip[data-v-1fa359ca]:hover,.playerContainerOverlayTopEdit>.colorSelectorWrapper .simpleTooltip[data-v-1fa359ca]:hover,.playerContainerOverlayTopEdit>.deleteSlideWrapper .simpleTooltip[data-v-1fa359ca]:hover,.playerContainerOverlayTopEdit>.duplicateSlideWrapper .simpleTooltip[data-v-1fa359ca]:hover,.playerContainerOverlayTopEdit>.layoutPickerWrapper .simpleTooltip[data-v-1fa359ca]:hover,.playerContainerOverlayTopEdit>.quickTextContainerWrapper .simpleTooltip[data-v-1fa359ca]:hover{display:none}.playerContainerOverlayTopEdit>.borderContainerWrapper .playerContainerModal[data-v-1fa359ca],.playerContainerOverlayTopEdit>.colorSelectorWrapper .playerContainerModal[data-v-1fa359ca],.playerContainerOverlayTopEdit>.deleteSlideWrapper .playerContainerModal[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper .playerContainerModal[data-v-1fa359ca],.playerContainerOverlayTopEdit>.layoutPickerWrapper .playerContainerModal[data-v-1fa359ca],.playerContainerOverlayTopEdit>.quickTextContainerWrapper .playerContainerModal[data-v-1fa359ca]{border:1px solid #bcbcbc}.playerContainerOverlayTopEdit>.quickTextContainerWrapper>svg[data-v-1fa359ca]{width:20px;margin-top:1px}.playerContainerOverlayTopEdit>.deleteSlideWrapper>svg[data-v-1fa359ca],.playerContainerOverlayTopEdit>.duplicateSlideWrapper>svg[data-v-1fa359ca]{width:23px}.playerContainerOverlayTopEdit>.quickTextContainerWrapper.active[data-v-1fa359ca]{z-index:1}.playerContainerOverlayTopEdit>div.spacer[data-v-1fa359ca]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.playerContainerOverlayTopEdit .borderContainerWrapper>svg[data-v-1fa359ca]{fill:#fff!important}.playerContainerOverlayTopEdit .borderContainerWrapper.active>svg[data-v-1fa359ca]{fill:#000!important}.playerContainerOverlayTopEdit .borderContainerWrapper .PlayerContainerBorderEditModal[data-v-1fa359ca]>.content{padding:0;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;text-align:unset}.playerContainerOverlayTopEdit .layoutPicker[data-v-1fa359ca],.playerContainerOverlayTopEdit .PlayerContainerBorderEditModal[data-v-1fa359ca],.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca],.playerContainerOverlayTopEdit .PlayerContainerTextQuickEditModal[data-v-1fa359ca]{margin-top:6px}.playerContainerOverlayTopEdit .PlayerContainerTextQuickEditModal[data-v-1fa359ca]>.content{padding:0;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset}.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]{background:#fff;border-radius:12px}.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]>.content{padding:0;-webkit-box-align:unset;-ms-flex-align:unset;align-items:unset;text-align:unset}.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]>.content .colorPalette,.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]>.content .colorPaletteCustom{border-radius:12px}.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]>.content .category:first-child,.playerContainerOverlayTopEdit .PlayerContainerTextQuickEditModal[data-v-1fa359ca]>.content .category:first-child{border-top-left-radius:12px;border-top-right-radius:12px}.playerContainerOverlayTopEdit .PlayerContainerColorEditModal[data-v-1fa359ca]>.content .category:last-child,.playerContainerOverlayTopEdit .PlayerContainerTextQuickEditModal[data-v-1fa359ca]>.content .category:last-child{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.playerContainerOverlayTopEdit .colorModalAlignCenter[data-v-1fa359ca]{margin-left:-120px}.playerContainerOverlayTopEdit .borderModalAlignLeft[data-v-1fa359ca]{-webkit-transform:translateX(calc(-100% + 42px));-ms-transform:translateX(calc(-100% + 42px));transform:translateX(calc(-100% + 42px))}.playerContainerOverlayTopEdit .deleteSlideWrapper[data-v-1fa359ca]{margin-right:15px}.playerContainerOverlayTopEdit .deleteSlideWrapper .deleteSlideConfirmation[data-v-1fa359ca]{width:300px;top:50px;right:0;-webkit-box-shadow:2px 3px 6px 0 rgba(0,0,0,.0784313725490196);box-shadow:2px 3px 6px 0 rgba(0,0,0,.0784313725490196)}.playerContainerOverlayTopEdit .deleteSlideWrapper .deleteSlideConfirmation+.simpleTooltip[data-v-1fa359ca]{display:none}.playerContainerOverlayTopEdit .deleteSlideWrapper .simpleTooltip[data-v-1fa359ca]{position:fixed!important;left:auto;right:10px;margin-top:10px}.playerContainerOverlayTopEdit .deleteSlideWrapper .simpleTooltip[data-v-1fa359ca]:after{left:calc(100% - 33px)}.playerContainerOverlayTopEdit .deleteSlideWrapper span[data-v-1fa359ca]{font-size:14px;line-height:21px}.playerContainerOverlayTopEdit .deleteSlideWrapper .deleteSlideConfirmation[data-v-1fa359ca]>.content{padding:25px 30px 25px 30px}.playerContainerOverlayTopEdit .deleteSlideWrapper .deleteSlideConfirmation[data-v-1fa359ca]>.actions div{line-height:42px}.cp-wrapper[data-v-1fa359ca]{margin:10px 0 0 15px}.layoutConfirm[data-v-1fa359ca]{width:300px;height:112px;position:absolute;top:260px;left:80px;background:#fff;border-radius:12px;border:1px solid #979797}.layoutConfirm:hover~.simpleTooltip[data-v-1fa359ca]{display:none}.layoutConfirm.DECREASE_IMG[data-v-1fa359ca]{width:320px}.confirmContent[data-v-1fa359ca]{padding:17px 30px 13px;text-align:center;line-height:19px}.confirmButtons[data-v-1fa359ca]{display:-webkit-box;display:-ms-flexbox;display:flex;border-top:1px solid #e0e0e0}.confirmButtons>.okGotItBtn[data-v-1fa359ca]{width:100%;height:41px;border:none;font-size:13px!important;border-bottom-left-radius:12px;border-bottom-right-radius:12px}.confirmButtons button[data-v-1fa359ca]:hover{background:#f9f9f9;color:#1c1c1c}.confirmSeparateBtn[data-v-1fa359ca]{width:180px;height:41px;border:none;font-size:13px!important;border-bottom-left-radius:12px}.confirmRemoveBtn[data-v-1fa359ca]{width:118px;height:41px;border-top:none;border-right:none;border-bottom:none;border-left:1px solid #e0e0e0!important;font-size:13px!important;border-bottom-right-radius:12px}.colorPickerIcon[data-v-1fa359ca]{stroke:#fff!important;stroke-width:1.5px!important;margin:auto!important}@-webkit-keyframes rotate-360-1a3adc22{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-1a3adc22{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-1a3adc22],icon-elem[type=spinner] svg[data-v-1a3adc22]{-webkit-animation:rotate-360-1a3adc22 1s linear infinite;animation:rotate-360-1a3adc22 1s linear infinite}.header[data-v-1a3adc22]{z-index:6;position:fixed;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:40px 4vw;background-color:#f2f2f2}.header[data-v-1a3adc22],.name[data-v-1a3adc22]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.name[data-v-1a3adc22]{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.description[data-v-1a3adc22]{margin-left:16px}.ButtonPanel[data-v-1a3adc22]{margin-right:60px}.slideshowSelectionBtn[data-v-1a3adc22]{position:relative;display:inline-block}.dropdown-btn[data-v-1a3adc22]{background:#444;color:#fff;padding:8px 16px;font-size:14px;border:none;cursor:pointer}.dropdown-menu[data-v-1a3adc22]{width:100%;padding-left:0;text-transform:none;text-align:left;opacity:0;visibility:hidden;-webkit-transform:translateY(5px);-ms-transform:translateY(5px);transform:translateY(5px);-webkit-transition:opacity .2s ease,visibility .2s,-webkit-transform .2s ease;transition:opacity .2s ease,visibility .2s,-webkit-transform .2s ease;transition:opacity .2s ease,transform .2s ease,visibility .2s;transition:opacity .2s ease,transform .2s ease,visibility .2s,-webkit-transform .2s ease;position:absolute;left:0;top:40px;background:#fff;border:1px solid #ddd;min-width:160px;-webkit-box-shadow:0 2px 6px rgba(0,0,0,.15);box-shadow:0 2px 6px rgba(0,0,0,.15);z-index:100}.slideshowSelectionBtn:hover .dropdown-menu[data-v-1a3adc22]{opacity:1;visibility:visible;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.option[data-v-1a3adc22]{padding:6px 18px}.iconBefore[data-v-1a3adc22]:before{position:absolute;width:16px;height:16px;background-position:0 -216px;left:150px;top:11px}@-webkit-keyframes rotate-360-43593e3c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-43593e3c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-43593e3c],icon-elem[type=spinner] svg[data-v-43593e3c]{-webkit-animation:rotate-360-43593e3c 1s linear infinite;animation:rotate-360-43593e3c 1s linear infinite}.photo[data-v-43593e3c]{cursor:pointer;position:relative}.photo:hover .fullscreen[data-v-43593e3c],.photo:hover .imageAnimationPlaceholderCover[data-v-43593e3c],.photo:hover .photoInfoBox[data-v-43593e3c],.photo:hover .select[data-v-43593e3c]{display:block}.select[data-v-43593e3c]{display:none;position:absolute;left:0;bottom:0;background-position:-80px 0;width:25px;height:25px;z-index:2}.selected .imageAnimationPlaceholderCover[data-v-43593e3c],.selected .select[data-v-43593e3c]{display:block}.selected .select.icon[data-v-43593e3c]{background-position:-80px -245px!important}.imageAnimationPlaceholderCover[data-v-43593e3c]{display:none;width:98px;height:66px;background-color:hsla(0,0%,100%,.51);position:absolute;left:0;top:0}.placeholder-img[data-v-43593e3c],img[data-v-43593e3c]{position:relative;margin-right:20px;margin-bottom:74px;width:98px;height:66px;-o-object-fit:cover;object-fit:cover}.portrait .imageAnimationPlaceholderCover[data-v-43593e3c],.portrait .placeholder-img[data-v-43593e3c],.portrait img[data-v-43593e3c]{width:66px!important;height:100px!important}.portrait .photoInfoBox[data-v-43593e3c]{left:-17px}.photoInfoBox[data-v-43593e3c]{position:absolute;bottom:47px;width:100px;color:#333;background-color:#fff;text-align:center;display:none;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;left:0;margin:auto}.fullscreen[data-v-43593e3c]{display:none;position:absolute;width:25px;height:25px;top:0;right:20px;background-position:-80px -105px}.fullscreen[data-v-43593e3c]:hover{background-position:-80px -140px}.play[data-v-43593e3c]{display:block!important;background:rgba(0,0,0,.45);background-position:-106px -109px!important}.play[data-v-43593e3c]:hover{background:rgba(0,0,0,.85);background-position:-106px -109px!important}[data-v-43593e3c] .fill-icon{fill:currentColor!important}icon-elem[data-v-43593e3c]{position:absolute;left:3px;top:1px;color:#fff;-webkit-transform:scale(.6);-ms-transform:scale(.6);transform:scale(.6)}.loading[data-v-43593e3c]:before{width:25px!important;height:25px!important;right:auto!important;bottom:auto!important}.placeholder-img[data-v-43593e3c]{margin-right:20px;margin-bottom:74px;width:98px;height:66px;background:#eee}.portrait .placeholder-img[data-v-43593e3c]{width:66px!important;height:100px!important}.selectPhotosFullscreen .container>.slide .wrapper[data-v-d2c6fd58],.selectPhotosFullscreen .container>.topBar .actions .remove[data-v-d2c6fd58]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-d2c6fd58{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-d2c6fd58{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-d2c6fd58],icon-elem[type=spinner] svg[data-v-d2c6fd58]{-webkit-animation:rotate-360-d2c6fd58 1s linear infinite;animation:rotate-360-d2c6fd58 1s linear infinite}.dissolve-enter-from[data-v-d2c6fd58]{opacity:0}.dissolve-enter-active[data-v-d2c6fd58]{-webkit-transition:opacity .5;transition:opacity .5}.dissolve-enter-to[data-v-d2c6fd58],.dissolve-leave-from[data-v-d2c6fd58]{opacity:1}.dissolve-leave-active[data-v-d2c6fd58]{-webkit-transition:opacity .5;transition:opacity .5}.dissolve-leave-to[data-v-d2c6fd58]{opacity:0}.dissolve-enter-active[data-v-d2c6fd58]{z-index:100}.selectPhotosFullscreen .container>.arrow[data-v-d2c6fd58]:after,.selectPhotosFullscreen[data-v-d2c6fd58]{top:0;right:0;bottom:0;left:0}.selectPhotosFullscreen[data-v-d2c6fd58]{position:fixed;background:#fff;z-index:100}.selectPhotosFullscreen .container[data-v-d2c6fd58]{display:grid;grid-template-areas:"topBar topBar topBar" "leftArrow slide rightArrow";grid-template-rows:85px 1fr;grid-template-columns:100px 1fr 100px;height:100%}.selectPhotosFullscreen .container>.topBar[data-v-d2c6fd58]{grid-area:topBar;border-bottom:1px solid #d0d0d0}.selectPhotosFullscreen .container>.topBar .actions[data-v-d2c6fd58]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:40px}.selectPhotosFullscreen .container>.topBar .actions .remove[data-v-d2c6fd58]{margin-right:12px;padding:10px}.selectPhotosFullscreen .container>.topBar .actions .remove svg[data-v-d2c6fd58]{height:16px}.selectPhotosFullscreen .container>.topBar .actions .remove span.text[data-v-d2c6fd58]{margin-left:6px}.selectPhotosFullscreen .container>.topBar .actions svg[data-v-d2c6fd58]{height:25px}.selectPhotosFullscreen .container>.slide[data-v-d2c6fd58]{grid-area:slide;margin:50px 0}.selectPhotosFullscreen .container>.slide .wrapper[data-v-d2c6fd58]{height:100%;position:relative;max-width:1400px;margin:auto}.selectPhotosFullscreen .container>.slide .wrapper .slideContainer[data-v-d2c6fd58]{position:absolute}.selectPhotosFullscreen .container>.arrow[data-v-d2c6fd58]{position:relative}.selectPhotosFullscreen .container>.arrow[data-v-d2c6fd58]:after{position:absolute;margin:auto;background-position-x:-160px}.selectPhotosFullscreen .container>.arrow.left[data-v-d2c6fd58]{grid-area:leftArrow}.selectPhotosFullscreen .container>.arrow.left[data-v-d2c6fd58]:after{background-position-y:-230px}.selectPhotosFullscreen .container>.arrow.left[data-v-d2c6fd58]:hover:after{background-position-y:-140px}.selectPhotosFullscreen .container>.arrow.right[data-v-d2c6fd58]{grid-area:rightArrow}.selectPhotosFullscreen .container>.arrow.right[data-v-d2c6fd58]:after{background-position-y:-90px}.selectPhotosFullscreen .container>.arrow.right[data-v-d2c6fd58]:hover:after{background-position-y:0}.fileName[data-v-d2c6fd58]{padding-left:40px;line-height:85px;float:left;max-width:calc(100vw - 720px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.iframeSlide[data-v-d2c6fd58]{border:none;width:100%;height:100%}.iframeWrapper[data-v-d2c6fd58]{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.slideContainer:hover .select[data-v-d2c6fd58]{display:block}.select[data-v-d2c6fd58]{cursor:pointer;display:none;position:absolute;bottom:10px;left:10px;background-position:-80px 0;width:25px;height:25px;z-index:2}.selected .select[data-v-d2c6fd58]{display:block!important}.selected .select.icon[data-v-d2c6fd58]{background-position:-80px -245px!important}@-webkit-keyframes rotate-360-4f2c03c8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4f2c03c8{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4f2c03c8],icon-elem[type=spinner] svg[data-v-4f2c03c8]{-webkit-animation:rotate-360-4f2c03c8 1s linear infinite;animation:rotate-360-4f2c03c8 1s linear infinite}.scene[data-v-4f2c03c8]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:0 4vw}.header[data-v-4f2c03c8],.scene[data-v-4f2c03c8]{width:100%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.header[data-v-4f2c03c8]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-bottom:30px;vertical-align:top}.sep[data-v-4f2c03c8]{padding-right:12px;padding-left:12px}.photo-body[data-v-4f2c03c8]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:0}.btn[data-v-4f2c03c8],.photo-body[data-v-4f2c03c8]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.btn[data-v-4f2c03c8]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;position:relative;cursor:pointer;border:none;margin-bottom:48px}.btn[data-v-4f2c03c8]:before{left:0}.btn[data-v-4f2c03c8]:after,.btn[data-v-4f2c03c8]:before{content:" ";top:0;width:calc(50% - 80px);border-bottom:1px solid #ddd}.btn[data-v-4f2c03c8]:after{left:calc(50% + 80px)}.text[data-v-4f2c03c8]{margin-left:6px}.icon[data-v-4f2c03c8]{width:10px;height:10px;margin-left:20px;background-position:0 -220px}.btn:hover .icon[data-v-4f2c03c8]{background-position:0 -180px}.btn:hover .text[data-v-4f2c03c8]{color:#444}.btn[data-v-4f2c03c8]:hover:after,.btn[data-v-4f2c03c8]:hover:before{border-color:#444}.expand .icon[data-v-4f2c03c8]{background-position:0 -160px}.expand:hover .icon[data-v-4f2c03c8]{background-position:0 -120px!important}.sceneoption[data-v-4f2c03c8]{position:absolute;top:27px;left:0;height:18px;width:18px;cursor:pointer}.sceneoption .icon[data-v-4f2c03c8]{background-position:-20px -300px;width:20px;height:20px;margin-left:0!important}[data-v-4f2c03c8] .option{cursor:pointer;line-height:28px;margin-left:18px;margin-bottom:12px;margin-right:12px}[data-v-4f2c03c8] .option:first-child{margin-top:12px}@-webkit-keyframes rotate-360-755bd44c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-755bd44c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-755bd44c],icon-elem[type=spinner] svg[data-v-755bd44c]{-webkit-animation:rotate-360-755bd44c 1s linear infinite;animation:rotate-360-755bd44c 1s linear infinite}.addPhotos[data-v-755bd44c]{border:0;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#f2f2f2;width:100px;height:66px;position:relative;margin-top:0;margin-right:10px;display:inline-block;cursor:pointer;float:left}.photo-body[data-v-755bd44c]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:0}[data-v-755bd44c] .photo .placeholder-img,[data-v-755bd44c] .photo img{margin-bottom:0!important}[data-v-755bd44c] .photo .photoInfoBox{bottom:-22px!important}.iconAfter svg[data-v-755bd44c]{position:relative;top:7px;height:35px;width:35px;stroke:#444}.addItemBtnText[data-v-755bd44c]{display:block;position:absolute;left:0;width:100%;bottom:-2px;letter-spacing:.3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:Gotham Narrow SSm A,Gotham Narrow SSm B,sans-serif;font-size:10px;font-weight:400;text-transform:none}.uploader[data-v-755bd44c]{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:0;padding:0 4vw;width:100%}.uploaderResize[data-v-755bd44c] .photo img{margin-top:0!important;margin-bottom:0!important}.uploaderResize[data-v-755bd44c] .photo .viewLargeThumb .photo img{margin-bottom:0!important}.uploaderResize[data-v-755bd44c] .photo .fullscreen,.uploaderResize[data-v-755bd44c] .photo .imageAnimationPlaceholderCover{top:0!important}.uploaderResize .addPhotos[data-v-755bd44c]{width:17.1vw!important;height:11.3vw!important;max-width:329px;max-height:217px}.uploaderResize .addItemBtnText[data-v-755bd44c]{bottom:32px!important}.uploaderResize .iconAfter[data-v-755bd44c]:after{bottom:58px!important}@-webkit-keyframes rotate-360-4c366af2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4c366af2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4c366af2],icon-elem[type=spinner] svg[data-v-4c366af2]{-webkit-animation:rotate-360-4c366af2 1s linear infinite;animation:rotate-360-4c366af2 1s linear infinite}[data-v-4c366af2] .searchBar_labelsWrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1vw;gap:4px}[data-v-4c366af2] .field{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}[data-v-4c366af2] .pMSelect.active{background-color:#ececec!important}[data-v-4c366af2] .pMSelect:hover{background-color:#f2f2f2}[data-v-4c366af2] .pMSelect .topLine{border:none!important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 26px 0 16px}[data-v-4c366af2] .pMSelect .collectionsSelect .pMSelectPanel{width:100%;max-width:300px}[data-v-4c366af2] .pMSelect .collectionsSelect .checkbox{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}[data-v-4c366af2] .pMSelect .collectionsSelect .checkbox:hover{overflow:initial!important;text-overflow:clip!important}[data-v-4c366af2] .pMSelect .pMSelectPanel{width:unset;border:1px solid #868686;white-space:nowrap;padding:10px 16px 10px 4px;max-height:calc(100vh - 8vw - 100px)!important}[data-v-4c366af2] .pMSelect .pMSelectPanel .active{font-weight:700}.searchBarChips[data-v-4c366af2]{-ms-flex-wrap:wrap;flex-wrap:wrap;gap:8px;margin-top:1vw}.searchBarChip[data-v-4c366af2],.searchBarChips[data-v-4c366af2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.searchBarChip[data-v-4c366af2]{background:#ececec;border-radius:30px;padding:0 0 0 12px;height:22px;line-height:22px;gap:0;cursor:default;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.searchBarChip:hover .searchBarChipCloseButton[data-v-4c366af2]{background-position:-20px -60px}.searchBarChipContent[data-v-4c366af2]{max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.searchBarChipCloseButton[data-v-4c366af2]{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-position:-20px 0;width:20px;height:20px;scale:.6;padding-right:4px}.searchBar_closeFilter[data-v-4c366af2]{white-space:nowrap;padding:16px 6px 6px 56px;position:relative;cursor:pointer;height:-webkit-min-content;height:-moz-min-content;height:min-content}.searchBar_closeFilter .icon[data-v-4c366af2]{position:absolute;left:30px;top:63%;background-position:-20px 0;width:20px;height:20px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.searchBar_closeFilter .icon[data-v-4c366af2]:hover{color:#bcbcbc;background-position:-20px -60px}@-webkit-keyframes rotate-360-a1ff6830{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-a1ff6830{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-a1ff6830],icon-elem[type=spinner] svg[data-v-a1ff6830]{-webkit-animation:rotate-360-a1ff6830 1s linear infinite;animation:rotate-360-a1ff6830 1s linear infinite}.pHelper[data-v-a1ff6830] .pHelperBtn{top:0!important;left:0}.pHelper[helpercode][data-v-a1ff6830] .pHelperBtn .optionsPanel{width:-webkit-max-content;width:-moz-max-content;width:max-content}.pHelper[helpercode][data-v-a1ff6830] .pHelperBtn .optionsPanel .optionsPanelInner>div{padding:24px}@-webkit-keyframes rotate-360-131534e2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-131534e2{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-131534e2],icon-elem[type=spinner] svg[data-v-131534e2]{-webkit-animation:rotate-360-131534e2 1s linear infinite;animation:rotate-360-131534e2 1s linear infinite}.modal-bg[data-v-131534e2]{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,0);display:-webkit-box;display:-ms-flexbox;display:flex}.modal-bg-layout[data-v-131534e2]{width:100%;height:100%;background-color:#d0d0d0;opacity:.9;position:absolute;z-index:0}.modal-content[data-v-131534e2]{overflow-y:auto;width:100%;height:100%;background:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:2}.uploading-line[data-v-131534e2]{width:220px;height:3px;background:#e0e0e0;margin-bottom:16px}.uploading-state[data-v-131534e2]{height:3px;background:#444}.conteiner[data-v-131534e2]{width:100%;margin-top:144px}.uploading-message[data-v-131534e2]{white-space:pre-line}.pnlDialogCloseXButton[data-v-131534e2]{display:block!important;z-index:7;right:47px!important;top:61px!important}.pnlDialogBox_x_button_img[data-v-131534e2]{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8)}.name[data-v-131534e2]{margin-top:40px;padding:0 4vw;padding-bottom:2vw}.buttons-actions[data-v-131534e2],.name[data-v-131534e2]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.buttons-actions[data-v-131534e2]{top:0;width:100%}.photoCollectionIcon[data-v-131534e2]{-ms-flex-item-align:center;align-self:center;width:25px;height:25px;background-position:-505px -1190px}.totalPhotos[data-v-131534e2]{margin-right:30px}.selectAll[data-v-131534e2],.totalPhotosAligner[data-v-131534e2],.unselectAll[data-v-131534e2]{gap:1em}.selectAll .icon[data-v-131534e2]{background-position:-22px -451px}.unselectAll .icon[data-v-131534e2]{background-position:-22px 0}.pHelper[data-v-131534e2]{position:relative;left:4px;top:-1px}.topBarButtonAction[data-v-131534e2]{top:0;padding:0 6px 0 6px;margin:0 8px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:auto;height:36px;line-height:36px;position:relative}.topBarButtonAction .icon[data-v-131534e2]{top:-2px;width:16px;height:16px;display:inline-block}.overlay[data-v-131534e2]{opacity:.07;height:100%;width:100%;left:0;top:0;position:absolute}.topBarButtonAction:hover .overlay[data-v-131534e2]{background-color:#444}.topBar[data-v-131534e2]{min-height:60px;position:-webkit-sticky;position:sticky;top:144px;left:0;background:hsla(0,0%,100%,.95);z-index:5;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #ddd}.filters[data-v-131534e2],.topBar[data-v-131534e2]{padding:0 4vw;display:-webkit-box;display:-ms-flexbox;display:flex}.filters[data-v-131534e2]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:40px}.filter[data-v-131534e2]{cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.filter .search-icon[data-v-131534e2]{margin-right:10px}.fade-slide-enter-active[data-v-131534e2],.fade-slide-leave-active[data-v-131534e2]{-webkit-transition:all .6s ease;transition:all .6s ease}.fade-slide-enter-from[data-v-131534e2],.fade-slide-leave-to[data-v-131534e2]{opacity:0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}.fade-slide-enter-to[data-v-131534e2],.fade-slide-leave-from[data-v-131534e2]{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.buttonsPanel[data-v-131534e2]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.viewLarge[data-v-131534e2]{cursor:pointer;margin-left:20px;margin-right:15px;width:20px;height:20px;background-position:-50px -420px}.viewLarge[data-v-131534e2]:hover{background-position:-50px -390px}.viewSmall[data-v-131534e2]{cursor:pointer;width:20px;height:20px;background-position:-50px -510px}.viewSmall[data-v-131534e2]:hover{background-position:-50px -480px}.viewLargeThumb[data-v-131534e2] .photo img{width:17.1vw;height:11.3vw;margin:6.7vw .3vw;margin-top:0!important;max-width:329px;max-height:217px}.viewLargeThumb[data-v-131534e2] .photo .imageAnimationPlaceholderCover{width:17.1vw;height:11.3vw;left:5px;top:0}.viewLargeThumb[data-v-131534e2] .photo .fullscreen{top:0;right:4px}.viewLargeThumb[data-v-131534e2] .photo .photoInfoBox{bottom:4vw;left:5vw}.viewLargeThumb[data-v-131534e2] .portrait img{height:17vw!important;width:11.3vw!important;margin:0 .5vw 5.8vw .5vw!important;max-width:217px!important;max-height:329px!important}.viewLargeThumb[data-v-131534e2] .portrait .imageAnimationPlaceholderCover{height:17vw!important;width:11.3vw!important;top:0!important;left:8px!important}.viewLargeThumb[data-v-131534e2] .portrait .fullscreen{top:0!important;right:6px}.viewLargeThumb[data-v-131534e2] .portrait .photoInfoBox{bottom:3vw!important;left:3vw!important}.selectPhotosButton[data-v-79c8ce46]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-79c8ce46{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-79c8ce46{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-79c8ce46],icon-elem[type=spinner] svg[data-v-79c8ce46]{-webkit-animation:rotate-360-79c8ce46 1s linear infinite;animation:rotate-360-79c8ce46 1s linear infinite}.selectPhotosButton[data-v-79c8ce46]{position:relative;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#f9f7f5;border:1px solid #d0d0d0}.selectPhotosButton[data-v-79c8ce46]:hover{background-color:#f3f1ef}.selectPhotosButton svg[data-v-79c8ce46]{width:18px;height:18px;stroke:#1c1c1c!important;margin-bottom:5px}.selectPhotosButton .addPhotoBtnCaption[data-v-79c8ce46]{letter-spacing:.22px;line-height:18px;text-align:center}.selectPhotosButton .simpleTooltip.setArrowInCenter[data-v-79c8ce46]{-webkit-transform:translateX(calc(50px - 50%)) rotate(180deg);-ms-transform:translateX(calc(50px - 50%)) rotate(180deg);transform:translateX(calc(50px - 50%)) rotate(180deg);top:calc(-100% - 10px);left:0}.selectPhotosButton .simpleTooltip.setArrowInCenter div[data-v-79c8ce46]{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}@-webkit-keyframes rotate-360-4f8c681e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-4f8c681e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-4f8c681e],icon-elem[type=spinner] svg[data-v-4f8c681e]{-webkit-animation:rotate-360-4f8c681e 1s linear infinite;animation:rotate-360-4f8c681e 1s linear infinite}.playerContainerSlideLayoutDrop[data-v-4f8c681e]{position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.playerContainerSlideLayoutDrop.dropDisabled[data-v-4f8c681e],.playerContainerSlideLayoutDrop[data-v-4f8c681e]:not(.slideDragInProgress){visibility:hidden}.playerContainerSlideLayoutDrop.slideDragInProgress.maxImages[data-v-4f8c681e]{visibility:visible}.playerContainerSlideLayoutDrop .dropMessage[data-v-4f8c681e]{position:absolute;padding:10px 15px;text-align:center}.dragMessageOverlay[data-v-4f8c681e]{background:hsla(0,0%,100%,.25)}@-webkit-keyframes rotate-360-5b0fab6a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-5b0fab6a{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-5b0fab6a],icon-elem[type=spinner] svg[data-v-5b0fab6a]{-webkit-animation:rotate-360-5b0fab6a 1s linear infinite;animation:rotate-360-5b0fab6a 1s linear infinite}.assetMissing[data-v-5b0fab6a]{height:100%;position:relative}.assetMissing .assetPlaceholderWrapper[data-v-5b0fab6a],.assetMissing[data-v-5b0fab6a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.assetMissing .assetPlaceholderWrapper .assetPlaceholder[data-v-5b0fab6a]{width:50px;height:50px;border-radius:50px;background-color:#444;opacity:.41}.assetMissing .assetPlaceholderWrapper .icon[data-v-5b0fab6a]{position:absolute;background-position-x:-112px;background-position-y:-898px;-webkit-transform:scale(.9);-ms-transform:scale(.9);transform:scale(.9);-webkit-filter:invert(1);filter:invert(1)}.assetMissing .assetPlaceholderWrapper .simpleTooltip[data-v-5b0fab6a]{position:fixed;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content;white-space:nowrap;-webkit-box-sizing:content-box;box-sizing:content-box;left:auto;right:auto;bottom:auto;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);margin:auto;text-align:center}.assetMissing .assetPlaceholderWrapper .simpleTooltip[data-v-5b0fab6a]:after{left:0;right:0;margin:auto}.assetMissing .assetPlaceholderWrapper:hover .simpleTooltip[data-v-5b0fab6a]{display:block}.assetMissing.dragInProgress.allowDrop[data-v-5b0fab6a]:before{content:"";position:absolute;border:3px solid #000;width:100%;height:100%;top:0;-webkit-box-sizing:border-box;box-sizing:border-box}.assetMissing.dragInProgress.allowDrop .simpleTooltip[data-v-5b0fab6a]{display:block;opacity:1!important;visibility:visible!important}.addSlide[data-v-154f24cc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes rotate-360-154f24cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-154f24cc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-154f24cc],icon-elem[type=spinner] svg[data-v-154f24cc]{-webkit-animation:rotate-360-154f24cc 1s linear infinite;animation:rotate-360-154f24cc 1s linear infinite}.addSlide[data-v-154f24cc]{background-color:#1c1c1c;position:absolute;left:0;right:0;width:27px;height:27px;margin:auto;font-size:27px;border-radius:27px;border:1px solid #fff;z-index:6}.addSlide.top[data-v-154f24cc]{top:-14.5px}.addSlide.bottom[data-v-154f24cc]{bottom:-13.5px}.addSlide.bottom.deletingAssetIdVisible[data-v-154f24cc],.addSlide.bottom.editToolModalVisible[data-v-154f24cc],.addSlide.bottom.layoutModalVisible[data-v-154f24cc],.addSlide.bottom.textQuickEditVisible[data-v-154f24cc]{z-index:1}.addSlide.active[data-v-154f24cc]{z-index:7}.addSlide .addSlideContent[data-v-154f24cc]{position:relative}.addSlide .addSlideContent .plusButton[data-v-154f24cc]{color:#fff;font-weight:100}.addSlide .addSlideContent .plusButton+.simpleTooltip[data-v-154f24cc]{-webkit-transform:translate(calc(8.5px - 50%),-10px);-ms-transform:translate(calc(8.5px - 50%),-10px);transform:translate(calc(8.5px - 50%),-10px);z-index:0}.addSlide .addSlideContent .spreadSlidesModal[data-v-154f24cc]{cursor:auto}.addSlide .addSlideContent .layoutPicker[data-v-154f24cc]{position:absolute;height:450px}.addSlide .addSlideContent .layoutPicker[data-v-154f24cc] .layoutThumb:after{bottom:5px}@-webkit-keyframes rotate-360-d25c7a8c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-d25c7a8c{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-d25c7a8c],icon-elem[type=spinner] svg[data-v-d25c7a8c]{-webkit-animation:rotate-360-d25c7a8c 1s linear infinite;animation:rotate-360-d25c7a8c 1s linear infinite}.dropAssetArea[data-v-d25c7a8c]{width:100%;height:auto;position:absolute;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.dropAssetArea[data-v-d25c7a8c]:not(.active){z-index:-1}.dropAssetArea.active[data-v-d25c7a8c]{z-index:2}.dropAssetArea .holderArea[data-v-d25c7a8c]{width:100%;height:20px}.dropAssetArea .line[data-v-d25c7a8c]{width:100%;height:6px;visibility:hidden;position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;background-color:#1c1c1c}.dropAssetArea .line.over[data-v-d25c7a8c]{visibility:visible}.slide-render-app-doc-single-slide{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.slide-render-app-doc-single-slide,.slide-render-app-doc picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.slide-render-app-doc{color:#444}.slide-render-app-doc *,.slide-render-app-doc :after,.slide-render-app-doc :before{-webkit-box-sizing:border-box;box-sizing:border-box}.slide-render-app-doc body,.slide-render-app-doc html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.slide-render-app-doc h1,.slide-render-app-doc h2,.slide-render-app-doc h3,.slide-render-app-doc h4,.slide-render-app-doc h5,.slide-render-app-doc h6{margin:0}.slide-render-app-doc a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}.slide-render-app-doc button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}.slide-render-app-doc button:not(:disabled){cursor:pointer}.slide-render-app-doc img{border-style:none}.slide-render-app-doc li,.slide-render-app-doc ul{list-style:none;margin:0;padding:0}.slide-render-app-doc [hidden],.slide-render-app-doc template{display:none}.slide-render-app-doc :focus{outline:none}.slide-render-app-doc picture{display:block;position:relative}.slide-render-app-doc .svg-icon:not(.fill-icon){stroke:currentColor}.slide-render-app-doc .svg-icon.fill-icon{fill:currentColor}.slide-render-app-doc .svg-icon:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.slide-render-app-doc .svg-icon.fill-icon{fill:#444}.slide-render-app-doc-single-slide{overflow:hidden}[data-v-34e1fb9e] picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-34e1fb9e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-34e1fb9e{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-34e1fb9e],icon-elem[type=spinner] svg[data-v-34e1fb9e]{-webkit-animation:rotate-360-34e1fb9e 1s linear infinite;animation:rotate-360-34e1fb9e 1s linear infinite}[data-v-34e1fb9e] *,[data-v-34e1fb9e] :after,[data-v-34e1fb9e] :before{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-34e1fb9e] body,[data-v-34e1fb9e] html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}[data-v-34e1fb9e] h1,[data-v-34e1fb9e] h2,[data-v-34e1fb9e] h3,[data-v-34e1fb9e] h4,[data-v-34e1fb9e] h5,[data-v-34e1fb9e] h6{margin:0}[data-v-34e1fb9e] a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}[data-v-34e1fb9e] button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}[data-v-34e1fb9e] button:not(:disabled){cursor:pointer}[data-v-34e1fb9e] img{border-style:none}[data-v-34e1fb9e] li,[data-v-34e1fb9e] ul{list-style:none;margin:0;padding:0}[data-v-34e1fb9e] [hidden],[data-v-34e1fb9e] template{display:none}[data-v-34e1fb9e] :focus{outline:none}[data-v-34e1fb9e] picture{display:block;position:relative}[data-v-34e1fb9e] .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}[data-v-34e1fb9e] .svg-icon.fill-icon{fill:currentColor}.slide-render-app[data-v-34e1fb9e]{margin:0 auto}.slide-render-app.height-based[data-v-34e1fb9e]:not(.render-html):not(.force-mobile-view){width:100vw;height:calc(var(--proportions)*100vw)}.slide-render-app.height-based:not(.render-html).force-mobile-view[data-v-34e1fb9e]{width:calc(100vh/var(--proportions));height:100vh}.socialmedia-app-doc picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.socialmedia-app-doc{color:#444}.socialmedia-app-doc *,.socialmedia-app-doc :after,.socialmedia-app-doc :before{-webkit-box-sizing:border-box;box-sizing:border-box}.socialmedia-app-doc body,.socialmedia-app-doc html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.socialmedia-app-doc h1,.socialmedia-app-doc h2,.socialmedia-app-doc h3,.socialmedia-app-doc h4,.socialmedia-app-doc h5,.socialmedia-app-doc h6{margin:0}.socialmedia-app-doc a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}.socialmedia-app-doc button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}.socialmedia-app-doc button:not(:disabled){cursor:pointer}.socialmedia-app-doc img{border-style:none}.socialmedia-app-doc li,.socialmedia-app-doc ul{list-style:none;margin:0;padding:0}.socialmedia-app-doc [hidden],.socialmedia-app-doc template{display:none}.socialmedia-app-doc :focus{outline:none}.socialmedia-app-doc picture{display:block;position:relative}.socialmedia-app-doc .svg-icon:not(.fill-icon){stroke:currentColor}.socialmedia-app-doc .svg-icon.fill-icon{fill:currentColor}.socialmedia-app-doc .svg-icon:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.socialmedia-app-doc .svg-icon.fill-icon{fill:#444}[data-v-53fd6e5d] picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-53fd6e5d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-53fd6e5d{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-53fd6e5d],icon-elem[type=spinner] svg[data-v-53fd6e5d]{-webkit-animation:rotate-360-53fd6e5d 1s linear infinite;animation:rotate-360-53fd6e5d 1s linear infinite}[data-v-53fd6e5d] *,[data-v-53fd6e5d] :after,[data-v-53fd6e5d] :before{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-53fd6e5d] body,[data-v-53fd6e5d] html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}[data-v-53fd6e5d] h1,[data-v-53fd6e5d] h2,[data-v-53fd6e5d] h3,[data-v-53fd6e5d] h4,[data-v-53fd6e5d] h5,[data-v-53fd6e5d] h6{margin:0}[data-v-53fd6e5d] a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}[data-v-53fd6e5d] button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}[data-v-53fd6e5d] button:not(:disabled){cursor:pointer}[data-v-53fd6e5d] img{border-style:none}[data-v-53fd6e5d] li,[data-v-53fd6e5d] ul{list-style:none;margin:0;padding:0}[data-v-53fd6e5d] [hidden],[data-v-53fd6e5d] template{display:none}[data-v-53fd6e5d] :focus{outline:none}[data-v-53fd6e5d] picture{display:block;position:relative}[data-v-53fd6e5d] .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}[data-v-53fd6e5d] .svg-icon.fill-icon{fill:currentColor}.viewer[data-v-53fd6e5d]{width:100%;height:100%}.viewer-wrap[data-v-53fd6e5d]{width:100vw;height:100vh}.blog-app-doc picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.blog-app-doc{color:#444}.blog-app-doc *,.blog-app-doc :after,.blog-app-doc :before{-webkit-box-sizing:border-box;box-sizing:border-box}.blog-app-doc body,.blog-app-doc html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.blog-app-doc h1,.blog-app-doc h2,.blog-app-doc h3,.blog-app-doc h4,.blog-app-doc h5,.blog-app-doc h6{margin:0}.blog-app-doc a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}.blog-app-doc button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}.blog-app-doc button:not(:disabled){cursor:pointer}.blog-app-doc img{border-style:none}.blog-app-doc li,.blog-app-doc ul{list-style:none;margin:0;padding:0}.blog-app-doc [hidden],.blog-app-doc template{display:none}.blog-app-doc :focus{outline:none}.blog-app-doc picture{display:block;position:relative}.blog-app-doc .svg-icon:not(.fill-icon){stroke:currentColor}.blog-app-doc .svg-icon.fill-icon{fill:currentColor}.blog-app-doc .svg-icon:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.blog-app-doc .svg-icon.fill-icon{fill:#444}[data-v-6d683a28] picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-6d683a28{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-6d683a28{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-6d683a28],icon-elem[type=spinner] svg[data-v-6d683a28]{-webkit-animation:rotate-360-6d683a28 1s linear infinite;animation:rotate-360-6d683a28 1s linear infinite}[data-v-6d683a28] *,[data-v-6d683a28] :after,[data-v-6d683a28] :before{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-6d683a28] body,[data-v-6d683a28] html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}[data-v-6d683a28] h1,[data-v-6d683a28] h2,[data-v-6d683a28] h3,[data-v-6d683a28] h4,[data-v-6d683a28] h5,[data-v-6d683a28] h6{margin:0}[data-v-6d683a28] a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}[data-v-6d683a28] button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}[data-v-6d683a28] button:not(:disabled){cursor:pointer}[data-v-6d683a28] img{border-style:none}[data-v-6d683a28] li,[data-v-6d683a28] ul{list-style:none;margin:0;padding:0}[data-v-6d683a28] [hidden],[data-v-6d683a28] template{display:none}[data-v-6d683a28] :focus{outline:none}[data-v-6d683a28] picture{display:block;position:relative}[data-v-6d683a28] .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}[data-v-6d683a28] .svg-icon.fill-icon{fill:currentColor}.viewer[data-v-6d683a28]{width:100%}.videoPlayer-app-doc picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner,icon-elem[type=spinner] svg{-webkit-animation:rotate-360 1s linear infinite;animation:rotate-360 1s linear infinite}.videoPlayer-app-doc *,.videoPlayer-app-doc :after,.videoPlayer-app-doc :before{-webkit-box-sizing:border-box;box-sizing:border-box}.videoPlayer-app-doc body,.videoPlayer-app-doc html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}.videoPlayer-app-doc h1,.videoPlayer-app-doc h2,.videoPlayer-app-doc h3,.videoPlayer-app-doc h4,.videoPlayer-app-doc h5,.videoPlayer-app-doc h6{margin:0}.videoPlayer-app-doc a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}.videoPlayer-app-doc button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}.videoPlayer-app-doc button:not(:disabled){cursor:pointer}.videoPlayer-app-doc img{border-style:none}.videoPlayer-app-doc li,.videoPlayer-app-doc ul{list-style:none;margin:0;padding:0}.videoPlayer-app-doc [hidden],.videoPlayer-app-doc template{display:none}.videoPlayer-app-doc :focus{outline:none}.videoPlayer-app-doc picture{display:block;position:relative}.videoPlayer-app-doc .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}.videoPlayer-app-doc .svg-icon.fill-icon{fill:currentColor}.videoPlayer-app-doc body{overflow:hidden}[data-v-6a872acc] picture>img{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}@-webkit-keyframes rotate-360-6a872acc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-360-6a872acc{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.svg-icon-spinner[data-v-6a872acc],icon-elem[type=spinner] svg[data-v-6a872acc]{-webkit-animation:rotate-360-6a872acc 1s linear infinite;animation:rotate-360-6a872acc 1s linear infinite}[data-v-6a872acc] *,[data-v-6a872acc] :after,[data-v-6a872acc] :before{-webkit-box-sizing:border-box;box-sizing:border-box}[data-v-6a872acc] body,[data-v-6a872acc] html{margin:0;padding:0;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none}[data-v-6a872acc] h1,[data-v-6a872acc] h2,[data-v-6a872acc] h3,[data-v-6a872acc] h4,[data-v-6a872acc] h5,[data-v-6a872acc] h6{margin:0}[data-v-6a872acc] a{color:inherit;background-color:rgba(0,0,0,0);text-decoration:none;cursor:pointer}[data-v-6a872acc] button{color:unset;background:unset;border:unset;font:unset;letter-spacing:unset}[data-v-6a872acc] button:not(:disabled){cursor:pointer}[data-v-6a872acc] img{border-style:none}[data-v-6a872acc] li,[data-v-6a872acc] ul{list-style:none;margin:0;padding:0}[data-v-6a872acc] [hidden],[data-v-6a872acc] template{display:none}[data-v-6a872acc] :focus{outline:none}[data-v-6a872acc] picture{display:block;position:relative}[data-v-6a872acc] .svg-icon:not(.fill-icon){stroke:currentColor;fill:rgba(0,0,0,0)}[data-v-6a872acc] .svg-icon.fill-icon{fill:currentColor}.player[data-v-6a872acc]{width:100%;height:100%}.player-wrap[data-v-6a872acc]{color:#444}.player-wrap .svg-icon[data-v-6a872acc]:not(.fill-icon){stroke:#444;fill:rgba(0,0,0,0)}.player-wrap .svg-icon.fill-icon[data-v-6a872acc]{fill:#444}.player-wrap.embedded[data-v-6a872acc]{width:100vw;height:100vh}</style><style >/*
 * SCSS Variables //@import 'variables';
 */
/* Screen breaks */
/* misc. */
/* font family */
/* font size */
/* font style */
/* font uppercase */
/* font letter-spacing */
/* font weights */
/* colors */
/* line height */
/* /Variables */
/* Placeholders */
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 .inner-wrap, .layout-1f1a72626a467604137c99b0b9763527 .inner-wrap, .layout-4dfa59c310e041d2076c1992be594740 .inner-wrap, .layout-06e3844bedef11879fba319b44a665c4, .layout-54dac0c8b414e931f187eb10f12432a3, .layout-e2a43bc7904c501bf7ed92a6d7a85baf, .layout-68602ff52eacef69ffaeb5a59c617514, .layout-1041200ad4efded28c813a3b6b9a85e8, .layout-b538be93156bdd4dadea18faf181e03a .inner-wrap, .layout-3a80a3114614db3d92c678f438da4c37 .inner-wrap, .layout-c4044227eff0354413754927a8cb61a8, .layout-6e74eba7135119aec58ab9699af9bdae .inner-wrap, .layout-037727da2d7ccfd29ca90d1aeab7f5d9, .layout-d394bdfa5b6b533831614e756003043f, .layout-0704d9a52838001777aaba6cff43398f, .layout-30becb26147ba86ad1d9b2bcbff02249 .inner-wrap, .layout-fceaf1076b06a8c01745b903980b528f .inner-wrap, .layout-706ed58bc09c66e6fc7d14607a6d399b, .layout-8f577c77e886968c601e707024cabfe0, .layout-2de42129a0e265ea55560a6f12a7adcf {
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-935e0e02b8e63ac623cc322b00aac403, .layout-ca91389ae9752132a4969ab32a032cc9 .text-block, .layout-ea857127f3a296b254e125fadb017659 .text-block {
  display: flex;
  flex-direction: column;
}

.layout-ca91389ae9752132a4969ab32a032cc9 .text-block, .layout-ea857127f3a296b254e125fadb017659 .text-block {
  align-items: center;
}

[data-layout] picture > img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

/* /Placeholders */
/*
 * SCSS Mixins //@import 'mixins';
 */
/*
 * Screen breaks
 */
/*
 * Image templates
 */
/* /Mixins */
/*
 * SCSS Functions //@import 'functions';
 */
/* /Functions */
/* Blogs Layouts */
/*
 * dynamic-title-1
 */
.layout-935e0e02b8e63ac623cc322b00aac403 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 .inner-wrap {
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 .inner-wrap {
    padding: 4% 0;
  }
}
.force-mobile-view * .layout-935e0e02b8e63ac623cc322b00aac403 .inner-wrap {
  padding: 4% 0;
}
@media ( min-width: 651px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid] {
    padding: 16px 24px;
  }
}
@media ( max-width: 650px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid] {
    padding: 16px 2%;
  }
}
.force-mobile-view * .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid] {
  padding: 16px 2%;
}
@media ( min-width: 651px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text1] {
    padding-bottom: 224px;
  }
}
@media ( max-width: 650px ) {
  .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text1] {
    padding-bottom: 104px;
  }
}
.force-mobile-view * .layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text1] {
  padding-bottom: 104px;
}
.layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text2] {
  padding-top: 0 !important;
}
.layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text2],
.layout-935e0e02b8e63ac623cc322b00aac403 [data-tokenid=text3] {
  padding-top: 0;
  border-bottom: 1px solid var(--colorfrmt4);
}

/*
 * dynamic-title-2
 */
.layout-ea857127f3a296b254e125fadb017659 {
  display: flex;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-ea857127f3a296b254e125fadb017659 .layout-column {
  width: 50%;
}
.layout-ea857127f3a296b254e125fadb017659 .text-block {
  justify-content: space-between;
  text-align: center;
  margin: 32px;
}
.layout-ea857127f3a296b254e125fadb017659 picture {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.layout-ea857127f3a296b254e125fadb017659 picture > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-ea857127f3a296b254e125fadb017659 picture::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-ea857127f3a296b254e125fadb017659 picture::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ea857127f3a296b254e125fadb017659 picture {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-ea857127f3a296b254e125fadb017659 picture {
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
    --max_proportions: 472 / 380;
  }
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 picture {
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
  --max_proportions: 472 / 380;
}
@media ( max-width: 650px ) {
  .layout-ea857127f3a296b254e125fadb017659 {
    flex-wrap: wrap;
  }
  .layout-ea857127f3a296b254e125fadb017659 .layout-column {
    width: 100%;
  }
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 {
  flex-wrap: wrap;
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 .layout-column {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text3] {
    margin-bottom: 24px;
  }
}
@media ( max-width: 650px ) {
  .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text1] {
    margin: 8px 0 32px;
  }
  .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text2] {
    margin-bottom: 16px;
  }
  .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text3] {
    margin-bottom: 16px;
  }
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text1] {
  margin: 8px 0 32px;
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text2] {
  margin-bottom: 16px;
}
.force-mobile-view * .layout-ea857127f3a296b254e125fadb017659 [data-tokenid=text3] {
  margin-bottom: 16px;
}

/*
 * dynamic-title-3
 */
.layout-857ab05c9283f727ce11199491f89315 {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-857ab05c9283f727ce11199491f89315 .inner-wrap {
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-857ab05c9283f727ce11199491f89315 .inner-wrap {
    padding: 3%;
  }
}
.force-mobile-view * .layout-857ab05c9283f727ce11199491f89315 .inner-wrap {
  padding: 3%;
}
.layout-857ab05c9283f727ce11199491f89315 [data-tokenid=text1] {
  margin-bottom: var(--margin_between_actual) !important;
}
@media ( min-width: 651px ) {
  .layout-857ab05c9283f727ce11199491f89315 [data-tokenid=text3] {
    padding-top: 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-857ab05c9283f727ce11199491f89315 [data-tokenid=text3] {
    padding-top: 4%;
  }
}
.force-mobile-view * .layout-857ab05c9283f727ce11199491f89315 [data-tokenid=text3] {
  padding-top: 4%;
}

/*
 * dynamic-title-4
 */
.layout-ca34f9a8d9100807681ff56255033636 {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-ca34f9a8d9100807681ff56255033636 .inner-wrap {
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.5%;
}
.layout-ca34f9a8d9100807681ff56255033636 [data-tokenid=text2] {
  text-align: right;
  width: fit-content;
}
.layout-ca34f9a8d9100807681ff56255033636 [data-tokenid=text3] {
  text-align: left;
  width: fit-content;
}
.layout-ca34f9a8d9100807681ff56255033636 .border-line {
  background: var(--colorfrmt4);
  width: 1px;
  height: 17px;
}
@media ( min-width: 651px ) {
  .layout-ca34f9a8d9100807681ff56255033636 .border-line {
    margin: 3px 1% 0 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-ca34f9a8d9100807681ff56255033636 .border-line {
    margin: 0 3% 0 3%;
  }
}
.force-mobile-view * .layout-ca34f9a8d9100807681ff56255033636 .border-line {
  margin: 0 3% 0 3%;
}

/*
 * dynamic-title-photo-1
 */
.layout-5602e99f38f77a55bfa186a8eff833a7 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-5602e99f38f77a55bfa186a8eff833a7 .inner-wrap {
  display: flex;
  justify-content: space-between;
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .inner-wrap {
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .inner-wrap {
    padding: 4%;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 .inner-wrap {
  padding: 4%;
  flex-direction: column;
}
.layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body {
  display: inline-flex;
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body {
    width: 61%;
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body {
    width: 100%;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body:first-child {
    width: 30%;
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body:first-child {
    width: 100%;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 .slide-asset-body:first-child {
  width: 100%;
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text2] {
    margin-bottom: 5%;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text2] {
  margin-bottom: 5%;
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text3] {
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text3] {
  margin-bottom: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text2], .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text3] {
    width: 100%;
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text2], .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text3] {
    width: auto;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text2], .force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text3] {
  width: auto;
  margin-right: 0;
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text1] {
    margin-top: 5%;
    margin-bottom: 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text1] {
    margin-top: 10%;
    margin-bottom: 0;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-tokenid=text1] {
  margin-top: 10%;
  margin-bottom: 0;
}
.layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] {
    width: calc(auto * var(--width-edge-without-padding));
    min-width: calc(auto * var(--width-edge-without-padding));
  }
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] {
    width: calc(0.92 * var(--width-edge-without-padding));
    min-width: calc(0.92 * var(--width-edge-without-padding));
  }
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 72%;
  }
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] {
  width: calc(0.92 * var(--width-edge-without-padding));
  min-width: calc(0.92 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 72%;
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] {
    margin-top: 20%;
  }
}
.force-mobile-view * .layout-5602e99f38f77a55bfa186a8eff833a7 [data-assetid=img1] {
  margin-top: 20%;
}

/*
 * dynamic-title-photo-2
 */
.layout-565ab6a5c1121abc293f7bb842419d8d {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-565ab6a5c1121abc293f7bb842419d8d .inner-wrap {
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .inner-wrap {
    display: grid;
    grid-template-areas: "title img" "etc img";
    grid-template-columns: calc(60% + var(--margin_between_actual)) calc(40% - var(--margin_between_actual));
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .inner-wrap {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
.force-mobile-view * .layout-565ab6a5c1121abc293f7bb842419d8d .inner-wrap {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part1 {
  grid-area: title;
}
@media ( min-width: 651px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part1 {
    width: 75%;
    top: 0;
  }
}
@media ( max-width: 650px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part1 {
    width: 100%;
    position: relative;
    padding: 3%;
  }
}
.force-mobile-view * .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part1 {
  width: 100%;
  position: relative;
  padding: 3%;
}
.layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part3 {
  grid-area: etc;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
@media ( min-width: 651px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part3 {
    width: 65%;
    bottom: 0;
  }
}
@media ( max-width: 650px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part3 {
    width: 100%;
    position: relative;
    padding: 3%;
  }
}
.force-mobile-view * .layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part3 {
  width: 100%;
  position: relative;
  padding: 3%;
}
.layout-565ab6a5c1121abc293f7bb842419d8d .slide-asset-body.part3 [data-tokenid=text3] {
  margin-top: 3%;
}
.layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1] {
  grid-area: img;
}
.layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1] {
    width: 100%;
    margin-left: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1] {
    width: 70%;
    margin-top: var(--margin_between_actual);
    margin-bottom: var(--margin_between_actual);
    margin-left: auto !important;
  }
}
.force-mobile-view * .layout-565ab6a5c1121abc293f7bb842419d8d [data-assetid=img1] {
  width: 70%;
  margin-top: var(--margin_between_actual);
  margin-bottom: var(--margin_between_actual);
  margin-left: auto !important;
}

/*
 * dynamic-title-photo-3
 */
.layout-f7a9171616a9571821f1a6ac9d79ea12 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 .inner-wrap {
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .inner-wrap {
    display: grid;
    grid-template-areas: "title img" "etc img";
    grid-template-columns: calc(60% - var(--margin_between_actual) / 2) calc(40% - var(--margin_between_actual) / 2);
    column-gap: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .inner-wrap {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
.force-mobile-view * .layout-f7a9171616a9571821f1a6ac9d79ea12 .inner-wrap {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part1 {
  grid-area: title;
}
@media ( min-width: 651px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part1 {
    width: 100%;
    top: 0;
  }
}
@media ( max-width: 650px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part1 {
    width: 100%;
    position: relative;
    padding: 3%;
  }
}
.force-mobile-view * .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part1 {
  width: 100%;
  position: relative;
  padding: 3%;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part3 {
  grid-area: etc;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
@media ( min-width: 651px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part3 {
    width: 65%;
    bottom: 0;
  }
}
@media ( max-width: 650px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part3 {
    width: 100%;
    position: relative;
    padding: 3%;
  }
}
.force-mobile-view * .layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part3 {
  width: 100%;
  position: relative;
  padding: 3%;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 .slide-asset-body.part3 [data-tokenid=text3] {
  margin-top: 3%;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1] {
  grid-area: img;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 67%;
}
.layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1] {
    width: 100%;
    margin-left: auto;
    margin-top: 25%;
  }
}
@media ( max-width: 650px ) {
  .layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1] {
    width: 100%;
    margin-top: var(--margin_between_actual);
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-f7a9171616a9571821f1a6ac9d79ea12 [data-assetid=img1] {
  width: 100%;
  margin-top: var(--margin_between_actual);
  margin-bottom: var(--margin_between_actual);
}

/*
 * dynamic-title-photo-4
 */
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 .inner-wrap {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part1 {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part1 {
    padding-top: 0.3%;
  }
}
@media ( max-width: 650px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part1 {
    padding-top: 2%;
  }
}
.force-mobile-view * .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part1 {
  padding-top: 2%;
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part3 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part3 {
    padding-top: 0.3%;
  }
}
@media ( max-width: 650px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part3 {
    padding-top: 1%;
  }
}
.force-mobile-view * .layout-7ff4e16e4282345e2bab23f2d8ec8f17 .slide-asset-body.part3 {
  padding-top: 1%;
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1] {
  margin-bottom: 2%;
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 60%;
}
.layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1] {
    margin-top: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1] {
    margin-top: 4%;
  }
}
.force-mobile-view * .layout-7ff4e16e4282345e2bab23f2d8ec8f17 [data-assetid=img1] {
  margin-top: 4%;
}

/*
 * dynamic-title-photo-5
 */
.layout-9010c9c7ab8dba9a9222217bc065ec2c {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: flex;
  justify-content: center;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c .inner-wrap {
  display: inline-flex;
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-9010c9c7ab8dba9a9222217bc065ec2c .inner-wrap {
    width: 50%;
    padding-top: 3%;
    padding-bottom: 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-9010c9c7ab8dba9a9222217bc065ec2c .inner-wrap {
    width: 100%;
    padding: 2%;
  }
}
.force-mobile-view * .layout-9010c9c7ab8dba9a9222217bc065ec2c .inner-wrap {
  width: 100%;
  padding: 2%;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c .slide-asset-body.part1 {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c .slide-asset-body.part3 {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-9010c9c7ab8dba9a9222217bc065ec2c [data-tokenid=text2] {
    margin-top: 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-9010c9c7ab8dba9a9222217bc065ec2c [data-tokenid=text2] {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-9010c9c7ab8dba9a9222217bc065ec2c [data-tokenid=text2] {
  margin-top: 0;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c [data-assetid=img1] {
  margin-bottom: 10%;
  margin-top: 10%;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 137%;
}
.layout-9010c9c7ab8dba9a9222217bc065ec2c [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-title-photo-6
 */
.layout-0f7bf413d3924a95bfc04f021204b209 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: flex;
  justify-content: center;
}
.layout-0f7bf413d3924a95bfc04f021204b209 .inner-wrap {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .inner-wrap {
    padding: 3% 3% 2% 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .inner-wrap {
    padding: 4% 15.5%;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 .inner-wrap {
  padding: 4% 15.5%;
}
.layout-0f7bf413d3924a95bfc04f021204b209 .picture-body {
  order: 2;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .picture-body {
    width: 23.43%;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .picture-body {
    width: 100%;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 .picture-body {
  width: 100%;
}
.layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part1 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part1 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part1 {
  flex-direction: column;
}
.layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part2 {
  background-color: var(--colorfrmt4);
  width: 1px;
  margin-top: 7%;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part2 {
    height: 110px;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part2 {
    height: 84px;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 .slide-asset-body.part2 {
  height: 84px;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1], .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
    width: 186px;
    margin-top: 9%;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1], .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
    width: 100%;
    margin-top: 0;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1], .force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
  width: 100%;
  margin-top: 0;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1] {
    margin-right: 12%;
    text-align: right;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1] {
    text-align: center;
    order: 2;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text1] {
  text-align: center;
  order: 2;
  margin-right: 0;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text2] {
    margin-bottom: 30% !important;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text2] {
    margin-bottom: 15% !important;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text2] {
  margin-bottom: 15% !important;
}
.layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
  order: 3;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
    text-align: left;
    margin-left: 12%;
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
    text-align: center;
    margin-left: 0;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-tokenid=text3] {
  text-align: center;
  margin-left: 0;
}
.layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] {
    margin-bottom: 7%;
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] {
  margin-bottom: 7%;
}
@media ( min-width: 651px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] img {
    border-top-left-radius: calc(0.4 * var(--width-edge));
    border-top-right-radius: calc(0.4 * var(--width-edge));
  }
}
@media ( max-width: 650px ) {
  .layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] img {
    border-top-left-radius: calc(0.5 * var(--width-edge));
    border-top-right-radius: calc(0.5 * var(--width-edge));
  }
}
.force-mobile-view * .layout-0f7bf413d3924a95bfc04f021204b209 [data-assetid=img1] img {
  border-top-left-radius: calc(0.5 * var(--width-edge));
  border-top-right-radius: calc(0.5 * var(--width-edge));
}

/*
 * dynamic-text-image-1
 */
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b .inner-wrap {
  display: flex;
  justify-content: space-between;
}
@media ( max-width: 650px ) {
  .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b .inner-wrap {
    flex-direction: column-reverse;
  }
}
.force-mobile-view * .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b .inner-wrap {
  flex-direction: column-reverse;
}
@media ( min-width: 651px ) {
  .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-tokenid=text4] {
    width: 50%;
    margin-right: var(--margin_between_actual);
    padding-top: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-tokenid=text4] {
    width: auto;
    margin-right: 0;
    margin-top: var(--margin_between_actual);
    padding: 3%;
  }
}
.force-mobile-view * .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-tokenid=text4] {
  width: auto;
  margin-right: 0;
  margin-top: var(--margin_between_actual);
  padding: 3%;
}
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1] {
  height: 100%;
  --max_proportions: 1;
}
@media ( min-width: 651px ) {
  .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1] {
    width: 50%;
    margin-left: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1] {
    width: auto;
    margin-left: 0;
  }
}
.force-mobile-view * .layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1] {
  width: auto;
  margin-left: 0;
}
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-ea05b9c46ea3415c5fa7f4b7d78fbb9b [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-image-2
 */
.layout-ac6fbe96028ac2c13b0575b9f9eaae84 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-ac6fbe96028ac2c13b0575b9f9eaae84 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( min-width: 651px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .inner-wrap {
    align-items: flex-end;
    padding-bottom: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .inner-wrap {
    align-items: revert;
    flex-direction: column-reverse;
    padding-bottom: 4%;
  }
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .inner-wrap {
  align-items: revert;
  flex-direction: column-reverse;
  padding-bottom: 4%;
}
@media ( min-width: 651px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .text-block {
    width: 50%;
    margin-right: 64px;
  }
}
@media ( max-width: 650px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .text-block {
    width: 100%;
    margin: 26px 0 0 0;
    padding: 0 4%;
  }
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 .text-block {
  width: 100%;
  margin: 26px 0 0 0;
  padding: 0 4%;
}
@media ( min-width: 651px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-tokenid=text1] {
    margin-bottom: 16px;
  }
}
@media ( max-width: 650px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-tokenid=text1] {
    margin-bottom: 24px;
  }
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-tokenid=text1] {
  margin-bottom: 24px;
}
.layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 120%;
  }
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
    width: calc(1 * var(--width-edge-without-padding));
    min-width: calc(1 * var(--width-edge-without-padding));
  }
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 120%;
  }
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
  width: calc(1 * var(--width-edge-without-padding));
  min-width: calc(1 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 120%;
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
    margin: 0 auto;
    margin-left: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-ac6fbe96028ac2c13b0575b9f9eaae84 [data-assetid=img1] {
  margin: 0 auto;
  margin-left: 0;
  margin-bottom: var(--margin_between_actual);
}

/*
 * dynamic-text-image-3
 */
.layout-2de42129a0e265ea55560a6f12a7adcf {
  min-height: 100px;
  color: var(--colorfrmt1);
  background: var(--colorfrmt1);
  position: relative;
}
.layout-2de42129a0e265ea55560a6f12a7adcf [data-tokenid=text4] {
  position: absolute;
  right: 0;
  top: 5%;
  padding: 4%;
  background-color: var(--colorfrmt3);
}
@media ( min-width: 651px ) {
  .layout-2de42129a0e265ea55560a6f12a7adcf [data-tokenid=text4] {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-2de42129a0e265ea55560a6f12a7adcf [data-tokenid=text4] {
    width: 90%;
  }
}
.force-mobile-view * .layout-2de42129a0e265ea55560a6f12a7adcf [data-tokenid=text4] {
  width: 90%;
}
.layout-2de42129a0e265ea55560a6f12a7adcf .inner-wrap {
  width: 100%;
  position: relative;
}
.layout-2de42129a0e265ea55560a6f12a7adcf .inner-wrap:before {
  display: block;
  content: "";
  width: 100%;
}
.layout-2de42129a0e265ea55560a6f12a7adcf picture {
  --max_proportions: 2 / 3;
  width: 100%;
}
.layout-2de42129a0e265ea55560a6f12a7adcf picture > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-2de42129a0e265ea55560a6f12a7adcf picture::before {
    content: "";
    float: left;
    padding-top: 60%;
  }
  .layout-2de42129a0e265ea55560a6f12a7adcf picture::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-2de42129a0e265ea55560a6f12a7adcf picture::before {
    content: "";
    float: left;
    padding-top: 140%;
  }
  .layout-2de42129a0e265ea55560a6f12a7adcf picture::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-2de42129a0e265ea55560a6f12a7adcf picture::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.force-mobile-view * .layout-2de42129a0e265ea55560a6f12a7adcf picture::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-image-4
 */
.layout-915b49ec64abe6527305965ebb033dad {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-915b49ec64abe6527305965ebb033dad .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad .inner-wrap {
    padding-top: 15%;
    padding-bottom: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad .inner-wrap {
    align-items: revert;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad .inner-wrap {
  align-items: revert;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
.layout-915b49ec64abe6527305965ebb033dad .text-block {
  display: inline-flex;
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad .text-block {
    width: 64%;
    margin-right: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad .text-block {
    flex-direction: column;
    width: 100%;
    margin: 26px 0 0 0;
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad .text-block {
  flex-direction: column;
  width: 100%;
  margin: 26px 0 0 0;
}
.layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text1] {
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text1] {
    top: -45px;
    width: 55%;
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text1] {
    top: 0;
    width: 100%;
    margin-bottom: 5%;
    padding: 0 4%;
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text1] {
  top: 0;
  width: 100%;
  margin-bottom: 5%;
  padding: 0 4%;
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text4] {
    width: 60%;
    margin-left: 13%;
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text4] {
    width: 83%;
    margin-left: auto;
    margin-bottom: 7%;
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-tokenid=text4] {
  width: 83%;
  margin-left: auto;
  margin-bottom: 7%;
}
.layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
  height: fit-content;
}
.layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
    width: calc(0.84 * var(--width-edge-without-padding));
    min-width: calc(0.84 * var(--width-edge-without-padding));
  }
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
  width: calc(0.84 * var(--width-edge-without-padding));
  min-width: calc(0.84 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
    margin-left: auto;
    margin-top: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-915b49ec64abe6527305965ebb033dad [data-assetid=img1] {
  margin-left: auto;
  margin-top: var(--margin_between_actual);
}

/*
 * dynamic-text-image-5
 */
.layout-8f577c77e886968c601e707024cabfe0 {
  min-height: 100px;
  color: var(--colorfrmt1);
  background: var(--colorfrmt1);
  position: relative;
}
.layout-8f577c77e886968c601e707024cabfe0 [data-tokenid=text4] {
  position: absolute;
  right: 0;
  top: 5%;
  padding: 4%;
}
@media ( min-width: 651px ) {
  .layout-8f577c77e886968c601e707024cabfe0 [data-tokenid=text4] {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-8f577c77e886968c601e707024cabfe0 [data-tokenid=text4] {
    width: 90%;
  }
}
.force-mobile-view * .layout-8f577c77e886968c601e707024cabfe0 [data-tokenid=text4] {
  width: 90%;
}
.layout-8f577c77e886968c601e707024cabfe0 .inner-wrap {
  width: 100%;
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-8f577c77e886968c601e707024cabfe0 .inner-wrap {
    --max_proportions: 2 / 3;
  }
}
@media ( max-width: 650px ) {
  .layout-8f577c77e886968c601e707024cabfe0 .inner-wrap {
    aspect-ratio: 5/7;
  }
}
.force-mobile-view * .layout-8f577c77e886968c601e707024cabfe0 .inner-wrap {
  aspect-ratio: 5/7;
}
.layout-8f577c77e886968c601e707024cabfe0 picture {
  --max_proportions: 2 / 3;
  width: 100%;
}
.layout-8f577c77e886968c601e707024cabfe0 picture > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-8f577c77e886968c601e707024cabfe0 picture::before {
    content: "";
    float: left;
    padding-top: 60%;
  }
  .layout-8f577c77e886968c601e707024cabfe0 picture::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-8f577c77e886968c601e707024cabfe0 picture::before {
    content: "";
    float: left;
    padding-top: 140%;
  }
  .layout-8f577c77e886968c601e707024cabfe0 picture::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-8f577c77e886968c601e707024cabfe0 picture::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.force-mobile-view * .layout-8f577c77e886968c601e707024cabfe0 picture::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-image-6
 */
.layout-fe4a8c2d44bc2417924f5345d123e02e {
  display: inline-flex;
  background: var(--colorfrmt1);
  color: var(--colorfrmt4);
}
@media ( max-width: 650px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e {
  flex-direction: column;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  background-position: center left;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap:before {
  display: block;
  content: "";
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap {
    width: 50%;
    height: 100%;
    background-size: 72% 100%;
  }
  .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap:before {
    padding-top: 105%;
  }
}
@media ( max-width: 650px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap {
    width: 100%;
    height: fit-content;
    background-size: 61% 100%;
  }
  .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap:before {
    padding-top: 98%;
  }
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap {
  width: 100%;
  height: fit-content;
  background-size: 61% 100%;
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e .inner-wrap:before {
  padding-top: 98%;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e .text-wrap {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e .text-wrap {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e .text-wrap {
    width: 100%;
    padding-left: 10%;
    margin-top: 10%;
  }
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e .text-wrap {
  width: 100%;
  padding-left: 10%;
  margin-top: 10%;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e [data-tokenid=text4] {
  width: 100%;
  height: fit-content;
  margin-right: 10%;
}
@media ( min-width: 651px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e [data-tokenid=text4] {
    margin-top: 35%;
  }
}
@media ( max-width: 650px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e [data-tokenid=text4] {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e [data-tokenid=text4] {
  margin-top: 0;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e .text-block {
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  width: 15%;
  height: 100%;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1] {
  position: absolute;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1] {
    width: 85%;
    margin-left: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1] {
    width: 78%;
    margin-left: 11%;
  }
}
.force-mobile-view * .layout-fe4a8c2d44bc2417924f5345d123e02e [data-assetid=img1] {
  width: 78%;
  margin-left: 11%;
}

/*
 * dynamic-text-image-7
 */
.layout-06e6d2bd87ef994221310cc2b6d0282d {
  background: var(--colorfrmt1);
  color: var(--colorfrmt4);
}
.layout-06e6d2bd87ef994221310cc2b6d0282d .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d .inner-wrap {
  flex-direction: column;
}
.layout-06e6d2bd87ef994221310cc2b6d0282d [data-tokenid=text4] {
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-tokenid=text4] {
    width: 32%;
    margin: 10% 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-tokenid=text4] {
    width: 100%;
    margin: 0;
    padding: 3%;
  }
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-tokenid=text4] {
  width: 100%;
  margin: 0;
  padding: 3%;
}
.layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1] {
  margin: 0 0 auto;
}
.layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1] {
    width: calc(0.32 * var(--width-edge-without-padding));
    min-width: calc(0.32 * var(--width-edge-without-padding));
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
    width: calc(0.32 * var(--width-edge-without-padding));
    min-width: calc(0.32 * var(--width-edge-without-padding));
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
    margin: 10% var(--margin_between_actual) 0;
  }
}
@media ( max-width: 650px ) {
  .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-06e6d2bd87ef994221310cc2b6d0282d [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
}

.layout-f2bd12f714685f7a44b48fcc767366ed {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
  display: flex;
  justify-content: space-between;
}
@media ( min-width: 651px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
    align-items: flex-start;
  }
}
@media ( max-width: 650px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
    align-items: center;
  }
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
  align-items: center;
}
.layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
  height: fit-content;
}
.layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
    width: calc(0.92 * var(--width-edge-without-padding));
    min-width: calc(0.92 * var(--width-edge-without-padding));
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
  width: calc(0.92 * var(--width-edge-without-padding));
  min-width: calc(0.92 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
    margin-top: 3%;
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-assetid=img1] {
  margin-top: 3%;
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}
.layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-tokenid=text4] {
  margin-top: auto;
  margin-bottom: auto;
}
@media ( min-width: 651px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-tokenid=text4] {
    margin-left: 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-tokenid=text4] {
    margin-left: 0;
    padding: 4%;
  }
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap [data-tokenid=text4] {
  margin-left: 0;
  padding: 4%;
}
@media ( min-width: 651px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
    margin: 2% 0;
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap > div {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
    flex-direction: column;
    margin: 0;
  }
  .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap > div {
    width: 100%;
    height: 50%;
  }
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap {
  flex-direction: column;
  margin: 0;
}
.force-mobile-view * .layout-f2bd12f714685f7a44b48fcc767366ed .inner-wrap > div {
  width: 100%;
  height: 50%;
}

.layout-f898ebb02a3f1950ab893a87d80d23f3 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}
@media ( min-width: 651px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
    align-items: flex-start;
  }
}
@media ( max-width: 650px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
    align-items: center;
  }
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
  align-items: center;
}
.layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
    width: calc(0.36 * var(--width-edge-without-padding));
    min-width: calc(0.36 * var(--width-edge-without-padding));
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
    width: calc(0.91 * var(--width-edge-without-padding));
    min-width: calc(0.91 * var(--width-edge-without-padding));
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
  width: calc(0.91 * var(--width-edge-without-padding));
  min-width: calc(0.91 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
    margin-right: 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
    margin-top: 3%;
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-assetid=img1] {
  margin-top: 3%;
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}
.layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap [data-tokenid] {
  margin-top: auto;
  margin-bottom: auto;
}
@media ( min-width: 651px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
    margin: 1% 0;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div:first-child {
    width: 61%;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div:first-child[data-tokenid] {
    margin-left: var(--margin_between_actual);
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div:last-child {
    width: 32%;
  }
}
@media ( max-width: 650px ) {
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
    flex-direction: column-reverse;
    margin: 2%;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div {
    width: 100%;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div[data-tokenid] {
    padding: 3%;
    margin-left: 0;
  }
  .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div:last-child {
    width: 55%;
  }
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap {
  flex-direction: column-reverse;
  margin: 2%;
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div {
  width: 100%;
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div[data-tokenid] {
  padding: 3%;
  margin-left: 0;
}
.force-mobile-view * .layout-f898ebb02a3f1950ab893a87d80d23f3 .inner-wrap > div:last-child {
  width: 55%;
}

/*
 * dynamic-text-image-10
 */
.layout-aff38e8d9da8d967f81f571c29523692 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-aff38e8d9da8d967f81f571c29523692 .inner-wrap {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
@media ( max-width: 650px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 .inner-wrap {
  flex-direction: column;
}
.layout-aff38e8d9da8d967f81f571c29523692 [data-tokenid=text4] {
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-tokenid=text4] {
    width: 60%;
    margin-left: var(--margin_between_actual);
    margin-top: 3%;
    margin-bottom: 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-tokenid=text4] {
    width: 85%;
    margin: var(--margin_between_actual) 2% 3% auto;
  }
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 [data-tokenid=text4] {
  width: 85%;
  margin: var(--margin_between_actual) 2% 3% auto;
}
.layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
    width: calc(0.42 * var(--width-edge-without-padding));
    min-width: calc(0.42 * var(--width-edge-without-padding));
  }
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 73.6%;
  }
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
    width: calc(0.69 * var(--width-edge-without-padding));
    min-width: calc(0.69 * var(--width-edge-without-padding));
  }
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
  width: calc(0.69 * var(--width-edge-without-padding));
  min-width: calc(0.69 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
    --max_proportions: 1;
  }
}
@media ( max-width: 650px ) {
  .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
    --max_proportions: 5 / 4;
    margin-bottom: 3%;
  }
}
.force-mobile-view * .layout-aff38e8d9da8d967f81f571c29523692 [data-assetid=img1] {
  --max_proportions: 5 / 4;
  margin-bottom: 3%;
}

/*
 * dynamic-text-image-11
 */
.layout-c75b008788ad67817a08868f3d41bb69 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-c75b008788ad67817a08868f3d41bb69 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 .inner-wrap {
  flex-direction: column;
}
.layout-c75b008788ad67817a08868f3d41bb69 [data-tokenid=text4] {
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-tokenid=text4] {
    width: 45%;
    margin-left: var(--margin_between_actual);
    margin-top: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-tokenid=text4] {
    width: 100%;
    margin-left: 0;
    margin-top: var(--margin_between_actual);
    padding: 0 3% 3% 12%;
  }
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 [data-tokenid=text4] {
  width: 100%;
  margin-left: 0;
  margin-top: var(--margin_between_actual);
  padding: 0 3% 3% 12%;
}
.layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 133.3%;
  }
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
    width: calc(0.7 * var(--width-edge-without-padding));
    min-width: calc(0.7 * var(--width-edge-without-padding));
  }
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 144.3%;
  }
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
  width: calc(0.7 * var(--width-edge-without-padding));
  min-width: calc(0.7 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 144.3%;
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
    --max_proportions: 1;
    margin-right: 1%;
  }
}
@media ( max-width: 650px ) {
  .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
    --max_proportions: 5 / 4;
    margin-right: 0;
    margin-bottom: 3%;
  }
}
.force-mobile-view * .layout-c75b008788ad67817a08868f3d41bb69 [data-assetid=img1] {
  --max_proportions: 5 / 4;
  margin-right: 0;
  margin-bottom: 3%;
}

/*
 * dynamic-image-intro-1
 */
.layout-412c1a12c1a975c53797d3a789766b6e {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--colorfrmt1);
}
.layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
  margin-left: var(--margin_between_actual);
}
.layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
    width: calc(0.55 * var(--width-edge-without-padding));
    min-width: calc(0.55 * var(--width-edge-without-padding));
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
    width: calc(0.52 * var(--width-edge-without-padding));
    min-width: calc(0.52 * var(--width-edge-without-padding));
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
  width: calc(0.52 * var(--width-edge-without-padding));
  min-width: calc(0.52 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
    margin-top: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
    margin-top: 18%;
  }
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img2] {
  margin-top: 18%;
}
.layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1] {
  height: fit-content;
}
.layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1] {
    width: calc(0.45 * var(--width-edge-without-padding));
    min-width: calc(0.45 * var(--width-edge-without-padding));
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1] {
    width: calc(0.457 * var(--width-edge-without-padding));
    min-width: calc(0.457 * var(--width-edge-without-padding));
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1] {
  width: calc(0.457 * var(--width-edge-without-padding));
  min-width: calc(0.457 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-412c1a12c1a975c53797d3a789766b6e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-image-intro-2
 */
.layout-5078f8a2cc8b8c0fd5c805b15260dabf {
  background: var(--colorfrmt1);
}
.layout-5078f8a2cc8b8c0fd5c805b15260dabf .inner-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  aspect-ratio: 7/4;
  position: relative;
}
.layout-5078f8a2cc8b8c0fd5c805b15260dabf .inner-wrap:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 57.1428571429%;
}
@media ( min-width: 651px ) {
  .layout-5078f8a2cc8b8c0fd5c805b15260dabf .inner-wrap {
    height: 100%;
    background-size: 384px 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-5078f8a2cc8b8c0fd5c805b15260dabf .inner-wrap {
    height: 65%;
    background-size: 204px 100%;
    margin: 72px 20px;
  }
}
.force-mobile-view * .layout-5078f8a2cc8b8c0fd5c805b15260dabf .inner-wrap {
  height: 65%;
  background-size: 204px 100%;
  margin: 72px 20px;
}
.layout-5078f8a2cc8b8c0fd5c805b15260dabf [data-assetid=img1] {
  aspect-ratio: 1;
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
}
.layout-5078f8a2cc8b8c0fd5c805b15260dabf [data-assetid=img1]:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 100%;
}
@media ( min-width: 651px ) {
  .layout-5078f8a2cc8b8c0fd5c805b15260dabf [data-assetid=img1] {
    background-position: top center;
    width: 44%;
    margin-left: 124px;
  }
}
@media ( max-width: 650px ) {
  .layout-5078f8a2cc8b8c0fd5c805b15260dabf [data-assetid=img1] {
    background-position: top right;
    width: 60%;
    margin-left: 48px;
  }
}
.force-mobile-view * .layout-5078f8a2cc8b8c0fd5c805b15260dabf [data-assetid=img1] {
  background-position: top right;
  width: 60%;
  margin-left: 48px;
}

/*
 * dynamic-image-intro-2-1
 */
.layout-dd6eff8790161ffdb9937d26d904ade7 {
  background: var(--colorfrmt1);
}
.layout-dd6eff8790161ffdb9937d26d904ade7 .inner-wrap {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( max-width: 650px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 .inner-wrap {
    flex-direction: column;
    align-items: center;
  }
}
.force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 .inner-wrap {
  flex-direction: column;
  align-items: center;
}
.layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img3] {
  background-repeat: no-repeat;
  background-size: cover;
}
@media ( min-width: 651px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img3] {
    width: 33.333%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2], .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img3] {
    width: 100%;
  }
}
.force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1], .force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2], .force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img3] {
  width: 100%;
}
.layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1] {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img1] {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2] {
  background-image: var(--img2_url);
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2] {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img2] {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-dd6eff8790161ffdb9937d26d904ade7 [data-assetid=img3] {
  background-image: var(--img3_url);
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}

/*
 * dynamic-image-intro-2-2
 */
.layout-99167248293320ffcc15c2aa6bc58c50 {
  background: var(--colorfrmt1);
}
.layout-99167248293320ffcc15c2aa6bc58c50 .inner-wrap {
  display: flex;
  justify-content: center;
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img2] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.66%;
}
.layout-99167248293320ffcc15c2aa6bc58c50 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-image-intro-2-3
 */
.layout-fed78901c54d8cd887f1efb49e559418 {
  background: var(--colorfrmt1);
}
.layout-fed78901c54d8cd887f1efb49e559418 .inner-wrap {
  display: flex;
  justify-content: end;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  background-position: center right;
}
@media ( min-width: 651px ) {
  .layout-fed78901c54d8cd887f1efb49e559418 .inner-wrap {
    align-items: end;
    aspect-ratio: 7/4;
    height: 100%;
    background-size: 508px 85%;
  }
}
@media ( max-width: 650px ) {
  .layout-fed78901c54d8cd887f1efb49e559418 .inner-wrap {
    align-items: flex-end;
    background-size: 50% 90%;
  }
}
.force-mobile-view * .layout-fed78901c54d8cd887f1efb49e559418 .inner-wrap {
  align-items: flex-end;
  background-size: 50% 90%;
}
.layout-fed78901c54d8cd887f1efb49e559418 [data-assetid=img1] {
  aspect-ratio: 1;
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: contain;
}
@media ( min-width: 651px ) {
  .layout-fed78901c54d8cd887f1efb49e559418 [data-assetid=img1] {
    width: 50%;
    margin-right: 74.4px;
    background-position: center left;
  }
}
@media ( max-width: 650px ) {
  .layout-fed78901c54d8cd887f1efb49e559418 [data-assetid=img1] {
    width: 50%;
    margin-right: 44.8px;
    background-position: center left;
  }
}
.force-mobile-view * .layout-fed78901c54d8cd887f1efb49e559418 [data-assetid=img1] {
  width: 50%;
  margin-right: 44.8px;
  background-position: center left;
}

/*
 * dynamic-image-intro-2-4
 */
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 {
  display: flex;
  justify-content: space-between;
  background: var(--colorfrmt1);
}
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .inner-wrap {
  display: inline-flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
  aspect-ratio: 7/8;
}
@media ( min-width: 651px ) {
  .layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img1] {
    width: 50%;
  }
}
@media ( min-width: 651px ) {
  .layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img2], .layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img3], .layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img4] {
    width: 35%;
  }
}
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img2] {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: var(--img2_url);
  background-position: var(--img2_offset_x) var(--img2_offset_y);
  aspect-ratio: 8/5;
  margin-bottom: var(--margin_between_actual);
}
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img3] {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: var(--img3_url);
  background-position: var(--img3_offset_x) var(--img3_offset_y);
  aspect-ratio: 8/5;
  margin-bottom: var(--margin_between_actual);
}
.layout-6489245d77c5b67a4cfc22c0ac1bb8d7 .slide-asset[data-assetid=img4] {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: var(--img4_url);
  background-position: var(--img4_offset_x) var(--img4_offset_y);
  aspect-ratio: 8/5;
}

/*
 * dynamic-image-intro-3
 */
.layout-9542652d6d0f5de3b6790fa3e854cfc5 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 {
  flex-direction: column;
}
.layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
    width: calc(0.63 * var(--width-edge-without-padding));
    min-width: calc(0.63 * var(--width-edge-without-padding));
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
    width: calc(0.62 * var(--width-edge-without-padding));
    min-width: calc(0.62 * var(--width-edge-without-padding));
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
  width: calc(0.62 * var(--width-edge-without-padding));
  min-width: calc(0.62 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
    margin-top: 10%;
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
    margin-top: var(--margin_between_actual);
    margin-left: auto;
  }
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img2] {
  margin-top: var(--margin_between_actual);
  margin-left: auto;
}
.layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1] {
  height: fit-content;
}
.layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1] {
    width: calc(0.375 * var(--width-edge-without-padding));
    min-width: calc(0.375 * var(--width-edge-without-padding));
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1] {
    width: calc(0.488 * var(--width-edge-without-padding));
    min-width: calc(0.488 * var(--width-edge-without-padding));
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1] {
  width: calc(0.488 * var(--width-edge-without-padding));
  min-width: calc(0.488 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-9542652d6d0f5de3b6790fa3e854cfc5 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-image-intro-4
 */
.layout-d11a7f3b85eacf32838181a1059279af {
  background: var(--colorfrmt1);
}
.layout-d11a7f3b85eacf32838181a1059279af .inner-wrap {
  display: flex;
  justify-content: center;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
  width: 31%;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img2] {
  width: 69%;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66%;
}
.layout-d11a7f3b85eacf32838181a1059279af [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-1
 */
.layout-cd86d63c3fc790204472d2ae9e3276b6 {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-cd86d63c3fc790204472d2ae9e3276b6 .inner-wrap {
    max-width: 952px;
    padding: 2% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-cd86d63c3fc790204472d2ae9e3276b6 .inner-wrap {
    padding: 4% 0;
  }
}
.force-mobile-view * .layout-cd86d63c3fc790204472d2ae9e3276b6 .inner-wrap {
  padding: 4% 0;
}

/*
 * dynamic-text-2
 */
.layout-524b619cecc316e1b315e8e1265f1036 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  text-align: left;
}
@media ( min-width: 651px ) {
  .layout-524b619cecc316e1b315e8e1265f1036 .inner-wrap {
    width: 100%;
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-524b619cecc316e1b315e8e1265f1036 .inner-wrap {
    width: auto;
    padding: 4%;
  }
}
.force-mobile-view * .layout-524b619cecc316e1b315e8e1265f1036 .inner-wrap {
  width: auto;
  padding: 4%;
}

/*
 * dynamic-text-3
 */
.layout-e2a2243ed00af3e3b261ca8de20ba6c7 {
  text-align: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-e2a2243ed00af3e3b261ca8de20ba6c7 .inner-wrap {
    width: 100%;
    padding: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-e2a2243ed00af3e3b261ca8de20ba6c7 .inner-wrap {
    width: auto;
    padding: 4%;
  }
}
.force-mobile-view * .layout-e2a2243ed00af3e3b261ca8de20ba6c7 .inner-wrap {
  width: auto;
  padding: 4%;
}

/*
 * dynamic-text-4
 */
.layout-51984ddce796e085dde6d3ab3984ba93 {
  text-align: left;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-51984ddce796e085dde6d3ab3984ba93 .inner-wrap {
    width: 100%;
    padding: 1% 4%;
  }
}
@media ( max-width: 650px ) {
  .layout-51984ddce796e085dde6d3ab3984ba93 .inner-wrap {
    width: auto;
    padding: 4%;
  }
}
.force-mobile-view * .layout-51984ddce796e085dde6d3ab3984ba93 .inner-wrap {
  width: auto;
  padding: 4%;
}

/*
 * dynamic-text-6
 */
.layout-2e1c1023ddc716e1187b011bd3c7aae6 {
  text-align: left;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( min-width: 651px ) {
  .layout-2e1c1023ddc716e1187b011bd3c7aae6 .inner-wrap {
    width: 100%;
    padding: 1% 4%;
  }
}
@media ( max-width: 650px ) {
  .layout-2e1c1023ddc716e1187b011bd3c7aae6 .inner-wrap {
    width: auto;
    padding: 4%;
  }
}
.force-mobile-view * .layout-2e1c1023ddc716e1187b011bd3c7aae6 .inner-wrap {
  width: auto;
  padding: 4%;
}
.layout-2e1c1023ddc716e1187b011bd3c7aae6 [data-tokenid=text5] {
  margin-bottom: 2% !important;
}

/*
 * dynamic-photo-grid-single-1
 */
.layout-706ed58bc09c66e6fc7d14607a6d399b {
  min-height: 100px;
  background: var(--colorfrmt1);
}
.layout-706ed58bc09c66e6fc7d14607a6d399b [data-assetid=img1] {
  --max_proportions: 2 / 3;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  width: 100%;
}
.layout-706ed58bc09c66e6fc7d14607a6d399b [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-706ed58bc09c66e6fc7d14607a6d399b [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--final_proportions) * 100%);
}
.layout-706ed58bc09c66e6fc7d14607a6d399b [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-2
 */
.layout-fceaf1076b06a8c01745b903980b528f {
  background: var(--colorfrmt1);
}
.layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1] {
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1] > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1].width-based > img {
  width: 100%;
  height: auto;
}
.layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1].height-based > img {
  width: auto;
  height: 100%;
}
.layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1]:not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: center center;
}
@media ( min-width: 651px ) {
  .layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1] {
    width: calc(0.45 * var(--width-edge-without-padding));
    height: calc(0.45 * var(--width-edge-without-padding) * 1.5);
  }
}
@media ( max-width: 650px ) {
  .layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1] {
    width: calc(1 * var(--width-edge-without-padding));
    height: calc(1 * var(--width-edge-without-padding) * 1.5);
  }
}
.force-mobile-view * .layout-fceaf1076b06a8c01745b903980b528f [data-assetid=img1] {
  width: calc(1 * var(--width-edge-without-padding));
  height: calc(1 * var(--width-edge-without-padding) * 1.5);
}

/*
 * dynamic-photo-grid-single-3
 */
.layout-30becb26147ba86ad1d9b2bcbff02249 {
  background: var(--colorfrmt1);
}
.layout-30becb26147ba86ad1d9b2bcbff02249 [data-assetid=img1] {
  flex: 1;
  --max_proportions: 2 / 3;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(1 * var(--width-edge-without-padding));
  height: calc(1 * var(--width-edge-without-padding) * var(--final_proportions));
}
.layout-30becb26147ba86ad1d9b2bcbff02249 [data-assetid=img1] > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.layout-30becb26147ba86ad1d9b2bcbff02249 [data-assetid=img1].width-based > img {
  width: 100%;
  height: auto;
}
.layout-30becb26147ba86ad1d9b2bcbff02249 [data-assetid=img1].height-based > img {
  width: auto;
  height: 100%;
}
.layout-30becb26147ba86ad1d9b2bcbff02249 [data-assetid=img1]:not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: center center;
}

/*
 * dynamic-photo-grid-single-4
 */
.layout-9890b27635bb8f09e83f8a8b3c5e92ce {
  background: var(--colorfrmt1);
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce .inner-wrap {
  position: relative;
  display: flex;
  justify-content: end;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  background-position: 100%;
  align-items: center;
  aspect-ratio: 8/5;
  height: 100%;
  background-size: 40% 100%;
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce .inner-wrap:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 62.5%;
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce [data-assetid=img1] {
  position: absolute !important;
  width: calc(0.82 * var(--width-edge-without-padding));
  min-width: calc(0.82 * var(--width-edge-without-padding));
  margin-right: 9%;
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 60%;
}
.layout-9890b27635bb8f09e83f8a8b3c5e92ce [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-5
 */
.layout-0704d9a52838001777aaba6cff43398f {
  min-height: 100px;
  background: var(--colorfrmt1);
}
.layout-0704d9a52838001777aaba6cff43398f [data-assetid=img1] {
  --max_proportions: 2 / 3;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  width: 100%;
}
.layout-0704d9a52838001777aaba6cff43398f [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-0704d9a52838001777aaba6cff43398f [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--final_proportions) * 100%);
}
.layout-0704d9a52838001777aaba6cff43398f [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-6
 */
.layout-d394bdfa5b6b533831614e756003043f {
  background: var(--colorfrmt1);
}
.layout-d394bdfa5b6b533831614e756003043f .inner-wrap {
  min-height: 100px;
}
@media ( min-width: 651px ) {
  .layout-d394bdfa5b6b533831614e756003043f .inner-wrap {
    width: 72%;
  }
}
@media ( max-width: 650px ) {
  .layout-d394bdfa5b6b533831614e756003043f .inner-wrap {
    width: 100%;
  }
}
.force-mobile-view * .layout-d394bdfa5b6b533831614e756003043f .inner-wrap {
  width: 100%;
}
.layout-d394bdfa5b6b533831614e756003043f [data-assetid=img1] {
  --max_proportions: 3 / 2;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  width: 100%;
}
.layout-d394bdfa5b6b533831614e756003043f [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-d394bdfa5b6b533831614e756003043f [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--final_proportions) * 100%);
}
.layout-d394bdfa5b6b533831614e756003043f [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-7
 */
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 {
  background: var(--colorfrmt1);
}
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 .inner-wrap {
  min-height: 100px;
}
@media ( min-width: 651px ) {
  .layout-037727da2d7ccfd29ca90d1aeab7f5d9 .inner-wrap {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-037727da2d7ccfd29ca90d1aeab7f5d9 .inner-wrap {
    width: 100%;
  }
}
.force-mobile-view * .layout-037727da2d7ccfd29ca90d1aeab7f5d9 .inner-wrap {
  width: 100%;
}
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 [data-assetid=img1] {
  width: 100%;
}
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-037727da2d7ccfd29ca90d1aeab7f5d9 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-8
 */
.layout-6e74eba7135119aec58ab9699af9bdae {
  background: var(--colorfrmt1);
}
.layout-6e74eba7135119aec58ab9699af9bdae [data-assetid=img1] {
  flex: 1;
  width: 100%;
}
.layout-6e74eba7135119aec58ab9699af9bdae [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-6e74eba7135119aec58ab9699af9bdae [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-6e74eba7135119aec58ab9699af9bdae [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-9
 */
.layout-c4044227eff0354413754927a8cb61a8 {
  background: var(--colorfrmt1);
}
.layout-c4044227eff0354413754927a8cb61a8 .inner-wrap {
  min-height: 100px;
}
@media ( min-width: 651px ) {
  .layout-c4044227eff0354413754927a8cb61a8 .inner-wrap {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-c4044227eff0354413754927a8cb61a8 .inner-wrap {
    width: 100%;
  }
}
.force-mobile-view * .layout-c4044227eff0354413754927a8cb61a8 .inner-wrap {
  width: 100%;
}
.layout-c4044227eff0354413754927a8cb61a8 [data-assetid=img1] {
  width: 100%;
}
.layout-c4044227eff0354413754927a8cb61a8 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-c4044227eff0354413754927a8cb61a8 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-c4044227eff0354413754927a8cb61a8 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-single-10
 */
.layout-3a80a3114614db3d92c678f438da4c37 {
  background: var(--colorfrmt1);
}
.layout-3a80a3114614db3d92c678f438da4c37 [data-assetid=img1] {
  width: 100% !important;
  max-height: 60vw;
  flex: 1;
  --max_proportions: 1 / 1;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  width: calc(1 * var(--width-edge-without-padding));
  height: calc(1 * var(--width-edge-without-padding) * var(--final_proportions));
}
.layout-3a80a3114614db3d92c678f438da4c37 [data-assetid=img1] img {
  object-fit: contain;
  object-position: center center;
}

/*
 * dynamic-photo-grid-single-11
 */
.layout-b538be93156bdd4dadea18faf181e03a {
  background: var(--colorfrmt1);
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1] {
  max-height: 60vw;
  flex: 1;
  --max_proportions: 1 / 1;
  --final_proportions: min(var(--max_proportions), var(--img1_proportions));
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(1 * var(--width-edge-without-padding));
  height: calc(1 * var(--width-edge-without-padding) * var(--final_proportions));
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1] > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1].width-based > img {
  width: 100%;
  height: auto;
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1].height-based > img {
  width: auto;
  height: 100%;
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1]:not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: center center;
}
.layout-b538be93156bdd4dadea18faf181e03a [data-assetid=img1] img {
  object-fit: contain;
  object-position: center center;
  margin-left: auto;
  margin-right: auto;
  width: 100% !important;
}

/*
 * dynamic-photo-grid-double-1
 */
.layout-1041200ad4efded28c813a3b6b9a85e8 {
  flex-direction: row;
  min-height: 100px;
  background: var(--colorfrmt1);
  --default_prop: 2 / 3;
  --img1_prop: var(--img1_proportions, var(--default_prop));
  --img2_prop: var(--img2_proportions, var(--default_prop));
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset {
  height: 100%;
  width: calc((100% - var(--margin_between, 0px)) / (1 + var(--self_prop) / var(--other_prop)));
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img1] {
  --self_prop: var(--img1_prop);
  --other_prop: var(--img2_prop);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img2] {
  --self_prop: var(--img2_prop);
  --other_prop: var(--img1_prop);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-1041200ad4efded28c813a3b6b9a85e8 .slide-asset:not(:last-child) {
  margin-right: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-double-2
 */
.layout-875c52275bd549d32a8b84c62c25d935 {
  background: var(--colorfrmt1);
}
.layout-875c52275bd549d32a8b84c62c25d935 .inner-wrap {
  display: flex;
  justify-content: space-between;
}
@media ( min-width: 651px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .inner-wrap {
    margin: 0 64px;
    height: 760px;
  }
}
@media ( max-width: 650px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .inner-wrap {
    height: auto;
    flex-direction: column;
    margin: 0;
  }
}
.force-mobile-view * .layout-875c52275bd549d32a8b84c62c25d935 .inner-wrap {
  height: auto;
  flex-direction: column;
  margin: 0;
}
.layout-875c52275bd549d32a8b84c62c25d935 .slide-asset {
  width: var(--img_block_size);
  aspect-ratio: 1;
  background-repeat: no-repeat;
  background-size: contain;
}
@media ( min-width: 651px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset {
    --img_block_size: 42%;
  }
}
@media ( max-width: 650px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset {
    --img_block_size: 74%;
  }
}
.force-mobile-view * .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset {
  --img_block_size: 74%;
}
.layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img1] {
  background-image: var(--img1_url);
}
@media ( min-width: 651px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img1] {
    background-position: top center;
    margin: 0 0 auto;
  }
}
@media ( max-width: 650px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img1] {
    background-position: top left;
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img1] {
  background-position: top left;
  margin: 0 auto 0 0;
}
.layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img2] {
  background-image: var(--img2_url);
}
@media ( min-width: 651px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img2] {
    background-position: bottom center;
    margin: auto 0 0;
  }
}
@media ( max-width: 650px ) {
  .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img2] {
    background-position: bottom right;
    margin: 32px 0 0 auto;
  }
}
.force-mobile-view * .layout-875c52275bd549d32a8b84c62c25d935 .slide-asset[data-assetid=img2] {
  background-position: bottom right;
  margin: 32px 0 0 auto;
}

/*
 * dynamic-photo-grid-double-2-1
 */
.layout-e7ed3ffc19f9d3506a9c8165887b9f08 {
  background: var(--colorfrmt1);
}
.layout-e7ed3ffc19f9d3506a9c8165887b9f08 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-e7ed3ffc19f9d3506a9c8165887b9f08 .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-e7ed3ffc19f9d3506a9c8165887b9f08 .inner-wrap {
  flex-direction: column;
}
.layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
}
@media ( min-width: 651px ) {
  .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img1] {
    width: 61%;
    height: auto;
    aspect-ratio: 7/6;
  }
}
@media ( max-width: 650px ) {
  .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img1] {
    margin: 0 auto 16px 0;
    width: 77%;
    aspect-ratio: 7/7;
  }
}
.force-mobile-view * .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img1] {
  margin: 0 auto 16px 0;
  width: 77%;
  aspect-ratio: 7/7;
}
.layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
}
@media ( min-width: 651px ) {
  .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img2] {
    margin: auto 0 0 var(--margin_between_actual);
    width: 25%;
    height: auto;
    aspect-ratio: 7/5;
  }
}
@media ( max-width: 650px ) {
  .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 0 auto;
    width: 44%;
  }
}
.force-mobile-view * .layout-e7ed3ffc19f9d3506a9c8165887b9f08 [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 0 auto;
  width: 44%;
}

/*
 * dynamic-photo-grid-double-2-2
 */
/*
 * [DEPRECATED] Not In Use!
 */
.layout-114bcc54505962c80a46266a4847f4be {
  background: var(--colorfrmt1);
}
.layout-114bcc54505962c80a46266a4847f4be .inner-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be .inner-wrap {
  flex-direction: column;
}
.layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
  flex: 2;
}
.layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    margin-right: 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    margin: 0 auto var(--margin_between_actual) auto;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] > img {
    object-fit: cover;
    object-position: var(--img1_offset_x) var(--img1_offset_y);
  }
}
@media ( max-width: 650px ) and ( min-width: 651px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    width: calc(0.65 * var(--width-edge-without-padding));
    min-width: calc(0.65 * var(--width-edge-without-padding));
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) and ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    width: calc(0.9 * var(--width-edge-without-padding));
    min-width: calc(0.9 * var(--width-edge-without-padding));
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    width: calc(0.9 * var(--width-edge-without-padding));
    min-width: calc(0.9 * var(--width-edge-without-padding));
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
  margin: 0 auto var(--margin_between_actual) auto;
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    width: calc(0.65 * var(--width-edge-without-padding));
    min-width: calc(0.65 * var(--width-edge-without-padding));
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
    width: calc(0.9 * var(--width-edge-without-padding));
    min-width: calc(0.9 * var(--width-edge-without-padding));
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1] {
  width: calc(0.9 * var(--width-edge-without-padding));
  min-width: calc(0.9 * var(--width-edge-without-padding));
}
.force-mobile-view * .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
  flex: 1;
}
@media ( min-width: 651px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] > img {
    position: static;
    max-width: 100%;
    max-height: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].width-based > img {
    width: 100%;
    height: auto;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].height-based > img {
    width: auto;
    height: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2]:not(.width-based):not(.height-based) > img {
    object-fit: contain;
    object-position: center right;
  }
}
@media ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] > img {
    position: static;
    max-width: 100%;
    max-height: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].width-based > img {
    width: 100%;
    height: auto;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].height-based > img {
    width: auto;
    height: 100%;
  }
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2]:not(.width-based):not(.height-based) > img {
    object-fit: contain;
    object-position: bottom center;
  }
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].width-based > img {
  width: 100%;
  height: auto;
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2].height-based > img {
  width: auto;
  height: 100%;
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2]:not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: bottom center;
}
@media ( min-width: 651px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    width: calc(0.39 * var(--width-edge-without-padding));
    height: calc(0.39 * var(--width-edge-without-padding) * 1);
  }
}
@media ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    width: calc(0.6 * var(--width-edge-without-padding));
    height: calc(0.6 * var(--width-edge-without-padding) * 1);
  }
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
  width: calc(0.6 * var(--width-edge-without-padding));
  height: calc(0.6 * var(--width-edge-without-padding) * 1);
}
@media ( min-width: 651px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
    margin: 8px auto 0 auto;
  }
}
.force-mobile-view * .layout-114bcc54505962c80a46266a4847f4be [data-assetid=img2] {
  margin: 8px auto 0 auto;
}

/*
 * dynamic-photo-grid-double-2-3
 */
.layout-9c371b20cd89469260efe9aecc1827c1 {
  background: var(--colorfrmt1);
}
.layout-9c371b20cd89469260efe9aecc1827c1 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( min-width: 651px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 .inner-wrap {
    height: 804px;
    padding: 0 57.6px;
  }
}
@media ( max-width: 650px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 .inner-wrap {
    flex-direction: column-reverse;
    padding: 0;
    height: auto;
  }
}
.force-mobile-view * .layout-9c371b20cd89469260efe9aecc1827c1 .inner-wrap {
  flex-direction: column-reverse;
  padding: 0;
  height: auto;
}
@media ( min-width: 651px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid] {
    width: 50%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid] {
    width: 75%;
  }
}
.force-mobile-view * .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid] {
  width: 75%;
}
.layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
}
@media ( min-width: 651px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img1] {
    margin: auto var(--margin_between_actual) 0 0;
  }
}
@media ( max-width: 650px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img1] {
    margin: 32px auto 0 0;
  }
}
.force-mobile-view * .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img1] {
  margin: 32px auto 0 0;
}
.layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
}
@media ( min-width: 651px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img2] {
    margin: 0 0 auto 37.6px;
  }
}
@media ( max-width: 650px ) {
  .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img2] {
    margin: 0 0 var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-9c371b20cd89469260efe9aecc1827c1 [data-assetid=img2] {
  margin: 0 0 var(--margin_between_actual) auto;
}

/*
 * dynamic-photo-grid-double-2-6
 */
.layout-8f3e8526de719a8e7976d2d145460bfd {
  background: var(--colorfrmt1);
}
.layout-8f3e8526de719a8e7976d2d145460bfd .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
@media ( min-width: 651px ) {
  .layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img2], .layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img1] {
    width: 50%;
    height: auto;
    aspect-ratio: 5/8;
  }
}
.layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( max-width: 650px ) {
  .layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img1] {
    margin-right: 9.6px;
  }
}
.force-mobile-view * .layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img1] {
  margin-right: 9.6px;
}
.layout-8f3e8526de719a8e7976d2d145460bfd [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
  margin-left: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-double-2-7
 */
.layout-f169883e87ae9272c31954a19cc45946 {
  background: var(--colorfrmt1);
}
.layout-f169883e87ae9272c31954a19cc45946 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-f169883e87ae9272c31954a19cc45946 .inner-wrap {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 .inner-wrap {
  flex-direction: column;
}
.layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
    width: calc(0.323 * var(--width-edge-without-padding));
    min-width: calc(0.323 * var(--width-edge-without-padding));
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
    width: calc(0.456 * var(--width-edge-without-padding));
    min-width: calc(0.456 * var(--width-edge-without-padding));
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
  width: calc(0.456 * var(--width-edge-without-padding));
  min-width: calc(0.456 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
    height: fit-content;
  }
}
@media ( max-width: 650px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img1] {
  margin: 0 auto 0 0;
}
.layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
    width: calc(0.68 * var(--width-edge-without-padding));
    min-width: calc(0.68 * var(--width-edge-without-padding));
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
    width: calc(0.8 * var(--width-edge-without-padding));
    min-width: calc(0.8 * var(--width-edge-without-padding));
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
    margin: 20% 0 0 var(--margin_between_actual);
    height: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 0 auto;
  }
}
.force-mobile-view * .layout-f169883e87ae9272c31954a19cc45946 [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 0 auto;
}

/*
 * dynamic-photo-grid-double-2-8
 */
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 {
  background: var(--colorfrmt1);
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-cb0c6c32d2eb6d149df6ab7b5c468477 .inner-wrap {
    align-items: center;
  }
}
.force-mobile-view * .layout-cb0c6c32d2eb6d149df6ab7b5c468477 .inner-wrap {
  align-items: center;
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid] {
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid] {
    width: 50%;
  }
}
.force-mobile-view * .layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid] {
  width: 50%;
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-cb0c6c32d2eb6d149df6ab7b5c468477 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-double-2-9
 */
.layout-4e6e0dba792d7593642f46b2cfbed7a1 {
  background: var(--colorfrmt1);
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-4e6e0dba792d7593642f46b2cfbed7a1 .inner-wrap {
    flex-direction: column;
    align-items: center;
  }
}
.force-mobile-view * .layout-4e6e0dba792d7593642f46b2cfbed7a1 .inner-wrap {
  flex-direction: column;
  align-items: center;
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 picture {
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-4e6e0dba792d7593642f46b2cfbed7a1 picture {
    width: 100%;
  }
}
.force-mobile-view * .layout-4e6e0dba792d7593642f46b2cfbed7a1 picture {
  width: 100%;
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1] {
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img1] {
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-4e6e0dba792d7593642f46b2cfbed7a1 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-double-3
 */
.layout-68602ff52eacef69ffaeb5a59c617514 {
  min-height: 100px;
  background: var(--colorfrmt1);
  --default_prop: 2 / 3;
  --img1_prop: var(--img1_proportions, var(--default_prop));
  --img2_prop: var(--img2_proportions, var(--default_prop));
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset {
  height: 100%;
  width: calc((100% - var(--margin_between, 0px)) / (1 + var(--self_prop) / var(--other_prop)));
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img1] {
  --self_prop: var(--img1_prop);
  --other_prop: var(--img2_prop);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img2] {
  --self_prop: var(--img2_prop);
  --other_prop: var(--img1_prop);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-68602ff52eacef69ffaeb5a59c617514 .slide-asset:not(:last-child) {
  margin-right: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-double-4
 */
.layout-e2a43bc7904c501bf7ed92a6d7a85baf {
  min-height: 100px;
  background: var(--colorfrmt1);
  --default_prop: 2 / 3;
  --img1_prop: var(--img1_proportions, var(--default_prop));
  --img2_prop: var(--img2_proportions, var(--default_prop));
}
@media ( min-width: 651px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf {
    flex-direction: row;
  }
}
@media ( max-width: 650px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-e2a43bc7904c501bf7ed92a6d7a85baf {
  flex-direction: column;
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset {
  height: 100%;
}
@media ( min-width: 651px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset {
    width: calc((100% - var(--margin_between, 0px)) / (1 + var(--self_prop) / var(--other_prop)));
  }
}
@media ( max-width: 650px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset {
    width: 100%;
  }
}
.force-mobile-view * .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset {
  width: 100%;
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img1] {
  --self_prop: var(--img1_prop);
  --other_prop: var(--img2_prop);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img2] {
  --self_prop: var(--img2_prop);
  --other_prop: var(--img1_prop);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset:not(:last-child) {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset:not(:last-child) {
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-e2a43bc7904c501bf7ed92a6d7a85baf .slide-asset:not(:last-child) {
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-triple-1
 */
.layout-54dac0c8b414e931f187eb10f12432a3 {
  min-height: 100px;
  background: var(--colorfrmt1);
  --default_prop: 2 / 3;
  --img1_prop: var(--img1_proportions, var(--default_prop));
  --img2_prop: var(--img2_proportions, var(--default_prop));
  --img3_prop: var(--img3_proportions, var(--default_prop));
  --prop-factor: calc(var(--img1_prop) * var(--img2_prop) + var(--img1_prop) * var(--img3_prop) + var(--img2_prop) * var(--img3_prop));
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset {
  height: 100%;
  width: calc((100% - 2 * var(--margin_between, 0px)) * var(--other1_prop) * var(--other2_prop) / var(--prop-factor));
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img1] {
  --self_prop: var(--img1_prop);
  --other1_prop: var(--img2_prop);
  --other2_prop: var(--img3_prop);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img2] {
  --self_prop: var(--img2_prop);
  --other1_prop: var(--img3_prop);
  --other2_prop: var(--img1_prop);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img3] {
  --self_prop: var(--img3_prop);
  --other1_prop: var(--img1_prop);
  --other2_prop: var(--img2_prop);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset[data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-54dac0c8b414e931f187eb10f12432a3 .slide-asset:not(:last-child) {
  margin-right: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-triple-1-2
 */
.layout-06e3844bedef11879fba319b44a665c4 {
  min-height: 100px;
  background: var(--colorfrmt1);
  --default_prop: 2 / 3;
  --img1_prop: var(--img1_proportions, var(--default_prop));
  --img2_prop: var(--img2_proportions, var(--default_prop));
  --img3_prop: var(--img3_proportions, var(--default_prop));
  --prop-factor: calc(var(--img1_prop) * var(--img2_prop) + var(--img1_prop) * var(--img3_prop) + var(--img2_prop) * var(--img3_prop));
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset {
  height: 100%;
  width: calc((100% - 2 * var(--margin_between, 0px)) * var(--other1_prop) * var(--other2_prop) / var(--prop-factor));
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img1] {
  --self_prop: var(--img1_prop);
  --other1_prop: var(--img2_prop);
  --other2_prop: var(--img3_prop);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img2] {
  --self_prop: var(--img2_prop);
  --other1_prop: var(--img3_prop);
  --other2_prop: var(--img1_prop);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img3] {
  --self_prop: var(--img3_prop);
  --other1_prop: var(--img1_prop);
  --other2_prop: var(--img2_prop);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: calc(var(--self_prop) * 100%);
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset[data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-06e3844bedef11879fba319b44a665c4 .slide-asset:not(:last-child) {
  margin-right: var(--margin_between_actual);
}

/*
 * dynamic-photo-grid-triple-2
 */
.layout-5dcd04f55862d8d487e6c35507406e84 {
  background: var(--colorfrmt1);
}
.layout-5dcd04f55862d8d487e6c35507406e84 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 .inner-wrap {
    margin: 0 32px;
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 .inner-wrap {
    flex-direction: column;
    margin: 0;
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 .inner-wrap {
  flex-direction: column;
  margin: 0;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1).width-based > img {
  width: 100%;
  height: auto;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1).height-based > img {
  width: auto;
  height: 100%;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1):not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: center right;
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
    width: calc(0.2 * var(--width-edge-without-padding));
    height: calc(0.2 * var(--width-edge-without-padding) * 1);
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
    width: calc(0.73 * var(--width-edge-without-padding));
    height: calc(0.73 * var(--width-edge-without-padding) * 1);
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
  width: calc(0.73 * var(--width-edge-without-padding));
  height: calc(0.73 * var(--width-edge-without-padding) * 1);
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
    margin: 152px 0 auto;
    margin-right: 24px;
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
    margin: 0 0 var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(1) {
  margin: 0 0 var(--margin_between_actual) auto;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
  height: 100%;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
    width: calc(0.41 * var(--width-edge-without-padding));
    min-width: calc(0.41 * var(--width-edge-without-padding));
  }
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::before {
    content: "";
    float: left;
    padding-top: 114.2%;
  }
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
    width: calc(0.67 * var(--width-edge-without-padding));
    min-width: calc(0.67 * var(--width-edge-without-padding));
  }
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
  width: calc(0.67 * var(--width-edge-without-padding));
  min-width: calc(0.67 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2)::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
    margin-right: var(--margin_between_actual);
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
    margin: 36px auto var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(2) {
  margin: 36px auto var(--margin_between_actual) auto;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) > img {
  position: static;
  max-width: 100%;
  max-height: 100%;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3).width-based > img {
  width: 100%;
  height: auto;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3).height-based > img {
  width: auto;
  height: 100%;
}
.layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3):not(.width-based):not(.height-based) > img {
  object-fit: contain;
  object-position: center left;
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
    width: calc(0.3 * var(--width-edge-without-padding));
    height: calc(0.3 * var(--width-edge-without-padding) * 1);
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
    width: calc(0.44 * var(--width-edge-without-padding));
    height: calc(0.44 * var(--width-edge-without-padding) * 1);
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
  width: calc(0.44 * var(--width-edge-without-padding));
  height: calc(0.44 * var(--width-edge-without-padding) * 1);
}
@media ( min-width: 651px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
    margin: auto 0;
    margin-left: 24px;
  }
}
@media ( max-width: 650px ) {
  .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
    margin: 36px 0 0 0;
  }
}
.force-mobile-view * .layout-5dcd04f55862d8d487e6c35507406e84 picture:nth-child(3) {
  margin: 36px 0 0 0;
}

/*
 * dynamic-photo-grid-triple-2-1
 */
.layout-18ea4357d2bc1400a28938573573f3fd {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd {
  flex-direction: column;
}
.layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap {
    width: 100%;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap {
  width: 100%;
  flex-direction: column;
}
.layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap:first-child {
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap:nth-child(2) {
    width: 34%;
    margin-right: 136px;
    margin-left: var(--margin_between_actual);
    padding-left: 76px;
  }
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap:nth-child(2) {
    padding-left: 0;
    margin: 22.4px auto 0 62.4px;
    width: 46%;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd .inner-wrap:nth-child(2) {
  padding-left: 0;
  margin: 22.4px auto 0 62.4px;
  width: 46%;
}
@media ( min-width: 651px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box {
    width: 55%;
  }
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box {
    width: 46%;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd .photo-box {
  width: 46%;
}
@media ( min-width: 651px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:first-child {
    margin-right: 88px;
    margin-bottom: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:first-child {
    margin: 0 auto 22.4px 36.8px;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:first-child {
  margin: 0 auto 22.4px 36.8px;
}
@media ( min-width: 651px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:nth-child(3) {
    margin-top: 76px;
  }
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:nth-child(3) {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd .photo-box:nth-child(3) {
  margin-top: 0;
}
@media ( min-width: 651px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd [data-assetid] {
    width: 100%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
.layout-18ea4357d2bc1400a28938573573f3fd [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-18ea4357d2bc1400a28938573573f3fd [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-18ea4357d2bc1400a28938573573f3fd [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( max-width: 650px ) {
  .layout-18ea4357d2bc1400a28938573573f3fd [data-assetid=img3] {
    margin: var(--margin_between_actual) 20px var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-18ea4357d2bc1400a28938573573f3fd [data-assetid=img3] {
  margin: var(--margin_between_actual) 20px var(--margin_between_actual) auto;
}

/*
 * dynamic-photo-grid-triple-2-2
 */
.layout-3d6b02b053f0a34720d59cc296c3db23 {
  background: var(--colorfrmt1);
}
.layout-3d6b02b053f0a34720d59cc296c3db23 .inner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 .inner-wrap {
    height: 791.2px;
  }
}
@media ( max-width: 650px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 .inner-wrap {
    flex-direction: column-reverse;
    height: auto;
  }
}
.force-mobile-view * .layout-3d6b02b053f0a34720d59cc296c3db23 .inner-wrap {
  flex-direction: column-reverse;
  height: auto;
}
.layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img1] {
    margin: auto 20px 0 0;
    width: 20%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img1] {
    margin: 20px auto 0 0;
    width: 37%;
  }
}
.force-mobile-view * .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img1] {
  margin: 20px auto 0 0;
  width: 37%;
}
@media ( min-width: 651px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 .img-conteiner {
    margin: auto var(--margin_between_actual) auto var(--margin_between_actual);
    width: 30%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 .img-conteiner {
    margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
    width: 59%;
  }
}
.force-mobile-view * .layout-3d6b02b053f0a34720d59cc296c3db23 .img-conteiner {
  margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
  width: 59%;
}
.layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img2] {
    margin-top: 60%;
    width: 100%;
    height: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img2] {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img2] {
  margin-top: 0;
}
.layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img3] {
    margin: 0 0 auto 20px;
    width: 40%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img3] {
    margin: 0 0 20px auto;
    width: 72%;
  }
}
.force-mobile-view * .layout-3d6b02b053f0a34720d59cc296c3db23 [data-assetid=img3] {
  margin: 0 0 20px auto;
  width: 72%;
}

/*
 * dynamic-photo-grid-triple-2-3
 */
.layout-9958992c693092374ce36a9c2728326f {
  background: var(--colorfrmt1);
}
.layout-9958992c693092374ce36a9c2728326f .inner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-9958992c693092374ce36a9c2728326f .inner-wrap {
    height: 773.6px;
  }
}
@media ( max-width: 650px ) {
  .layout-9958992c693092374ce36a9c2728326f .inner-wrap {
    flex-direction: column-reverse;
    height: auto;
  }
}
.force-mobile-view * .layout-9958992c693092374ce36a9c2728326f .inner-wrap {
  flex-direction: column-reverse;
  height: auto;
}
@media ( min-width: 651px ) {
  .layout-9958992c693092374ce36a9c2728326f .img-conteiner {
    margin: auto var(--margin_between_actual) auto var(--margin_between_actual);
    width: 30%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-9958992c693092374ce36a9c2728326f .img-conteiner {
    margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
    width: 59%;
  }
}
.force-mobile-view * .layout-9958992c693092374ce36a9c2728326f .img-conteiner {
  margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
  width: 59%;
}
.layout-9958992c693092374ce36a9c2728326f [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img1] {
    margin: auto 18.4px 0 0;
    width: 40%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img1] {
    margin: 18.4px auto 0 0;
    width: 72%;
  }
}
.force-mobile-view * .layout-9958992c693092374ce36a9c2728326f [data-assetid=img1] {
  margin: 18.4px auto 0 0;
  width: 72%;
}
.layout-9958992c693092374ce36a9c2728326f [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img2] {
    margin-bottom: 60%;
    width: 100%;
    height: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img2] {
    margin-bottom: 0;
  }
}
.force-mobile-view * .layout-9958992c693092374ce36a9c2728326f [data-assetid=img2] {
  margin-bottom: 0;
}
.layout-9958992c693092374ce36a9c2728326f [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img3] {
    margin: 0 0 auto 18.4px;
    width: 20%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-9958992c693092374ce36a9c2728326f [data-assetid=img3] {
    margin: 0 0 18.4px auto;
    width: 37%;
  }
}
.force-mobile-view * .layout-9958992c693092374ce36a9c2728326f [data-assetid=img3] {
  margin: 0 0 18.4px auto;
  width: 37%;
}

/*
 * dynamic-photo-grid-triple-2-4
 */
.layout-08b9c19ff6474eaff26e006f9b369ebc {
  background: var(--colorfrmt1);
}
.layout-08b9c19ff6474eaff26e006f9b369ebc .inner-wrap {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc .inner-wrap {
    height: 773.6px;
  }
}
@media ( max-width: 650px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc .inner-wrap {
    flex-direction: column-reverse;
    height: auto;
  }
}
.force-mobile-view * .layout-08b9c19ff6474eaff26e006f9b369ebc .inner-wrap {
  flex-direction: column-reverse;
  height: auto;
}
@media ( min-width: 651px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc .img-conteiner {
    margin: auto var(--margin_between_actual) auto var(--margin_between_actual);
    width: 30%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc .img-conteiner {
    margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
    width: 59%;
  }
}
.force-mobile-view * .layout-08b9c19ff6474eaff26e006f9b369ebc .img-conteiner {
  margin: var(--margin_between_actual) auto var(--margin_between_actual) auto;
  width: 59%;
}
.layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img1] {
    margin: auto 0 0 18.4px;
    width: 20%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img1] {
    margin: 18.4px 0 0 auto;
    width: 37%;
  }
}
.force-mobile-view * .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img1] {
  margin: 18.4px 0 0 auto;
  width: 37%;
}
.layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img2] {
    margin-top: 60%;
    width: 100%;
    height: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img2] {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img2] {
  margin-top: 0;
}
.layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img3] {
    margin: 0 18.4px auto 0;
    width: 40%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img3] {
    margin: 0 auto 18.4px 0;
    width: 72%;
  }
}
.force-mobile-view * .layout-08b9c19ff6474eaff26e006f9b369ebc [data-assetid=img3] {
  margin: 0 auto 18.4px 0;
  width: 72%;
}

/*
 * dynamic-photo-grid-triple-2-5
 */
.layout-75aa40e771e9761542e5d4d3daaf84c6 {
  background: var(--colorfrmt1);
}
.layout-75aa40e771e9761542e5d4d3daaf84c6 .inner-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media ( max-width: 650px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 .inner-wrap {
    flex-direction: column-reverse;
    height: auto;
  }
}
.force-mobile-view * .layout-75aa40e771e9761542e5d4d3daaf84c6 .inner-wrap {
  flex-direction: column-reverse;
  height: auto;
}
.layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img1] {
    margin-right: 27.2px;
    width: 52.2%;
    height: auto;
    aspect-ratio: 7/6;
  }
}
@media ( max-width: 650px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img1] {
    margin-right: 0;
    margin-top: 38.4px;
    width: 100%;
    aspect-ratio: 7/5;
  }
}
.force-mobile-view * .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img1] {
  margin-right: 0;
  margin-top: 38.4px;
  width: 100%;
  aspect-ratio: 7/5;
}
.layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img2] {
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
@media ( min-width: 651px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img2] {
    margin: auto var(--margin_between_actual) auto var(--margin_between_actual);
    width: 22%;
    height: auto;
    aspect-ratio: 7/7;
  }
}
@media ( max-width: 650px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 var(--margin_between_actual) 0;
    width: 37%;
  }
}
.force-mobile-view * .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 var(--margin_between_actual) 0;
  width: 37%;
}
.layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img3] {
    margin-left: 27.2px;
    width: 28%;
    height: auto;
    aspect-ratio: 5/8;
  }
}
@media ( max-width: 650px ) {
  .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img3] {
    margin-left: 0;
    margin-bottom: 38.4px;
    width: 100%;
    aspect-ratio: 7/9;
  }
}
.force-mobile-view * .layout-75aa40e771e9761542e5d4d3daaf84c6 [data-assetid=img3] {
  margin-left: 0;
  margin-bottom: 38.4px;
  width: 100%;
  aspect-ratio: 7/9;
}

/*
 * dynamic-photo-grid-triple-2-6
 */
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 {
  background: var(--colorfrmt1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 36px 0 39.2px 0;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap {
  display: flex;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:first-child {
  height: auto;
  aspect-ratio: 7/7;
}
@media ( min-width: 651px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:first-child {
    width: 30%;
    margin-right: calc(var(--margin_between_actual) + 24px);
    margin-left: 88px;
  }
}
@media ( max-width: 650px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:first-child {
    width: 32%;
    margin-right: calc(var(--margin_between_actual) + 12.8px);
    margin-left: 0;
  }
}
.force-mobile-view * .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:first-child {
  width: 32%;
  margin-right: calc(var(--margin_between_actual) + 12.8px);
  margin-left: 0;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:nth-child(2) {
  width: 50%;
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:nth-child(2) {
    margin-left: 24px;
  }
}
@media ( max-width: 650px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:nth-child(2) {
    margin-left: 8px;
  }
}
.force-mobile-view * .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 .inner-wrap:nth-child(2) {
  margin-left: 8px;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center left;
  width: 100%;
  height: 100%;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img2] {
  margin-bottom: var(--margin_between_actual);
  background-image: var(--img2_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img2] {
    width: 81%;
    height: auto;
    aspect-ratio: 7/5;
  }
}
@media ( max-width: 650px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img2] {
    width: 100%;
  }
}
.force-mobile-view * .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img2] {
  width: 100%;
}
.layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img3] {
  background-image: var(--img3_url);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img3] {
    margin-top: 48px;
    width: 59%;
    height: auto;
    aspect-ratio: 7/5;
  }
}
@media ( max-width: 650px ) {
  .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img3] {
    margin-top: 16px;
    width: 100%;
  }
}
.force-mobile-view * .layout-d19e8a2115f6b20f4a9e7b8906ec9bc6 [data-assetid=img3] {
  margin-top: 16px;
  width: 100%;
}

/*
 * dynamic-photo-grid-triple-2-7
 */
.layout-ea7b91d37b1d89cfe8730e5d6aef596a {
  background: var(--colorfrmt1);
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a .inner-wrap {
  display: flex;
  align-items: center;
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a .inner-wrap {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a .inner-wrap {
    justify-content: center;
    height: auto;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a .inner-wrap {
  justify-content: center;
  height: auto;
  flex-direction: column;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a .slide-asset-body {
  top: 0;
  width: 100%;
  display: inline-flex;
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a .slide-asset-body {
    position: absolute;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a .slide-asset-body {
    position: relative;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a .slide-asset-body {
  position: relative;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
  top: 0;
  position: absolute;
  z-index: 1;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
    left: 10%;
    height: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
    left: 0;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img1] {
  left: 0;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2] {
  height: fit-content;
  position: relative;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 71.4%;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2] {
    width: calc(77% - var(--margin_between_actual));
    margin-left: auto;
    margin-top: 20%;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2] {
    width: 80%;
    margin-top: 40%;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img2] {
  width: 80%;
  margin-top: 40%;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
  position: relative;
  height: auto;
}
.layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
    width: calc(0.23 * var(--width-edge-without-padding));
    min-width: calc(0.23 * var(--width-edge-without-padding));
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
    margin-top: calc(45.2% + var(--margin_between_actual));
  }
}
@media ( max-width: 650px ) {
  .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
    right: 3%;
    margin-top: calc(var(--margin_between_actual) + 2%);
    margin-right: auto;
    left: 10%;
  }
}
.force-mobile-view * .layout-ea7b91d37b1d89cfe8730e5d6aef596a [data-assetid=img3] {
  right: 3%;
  margin-top: calc(var(--margin_between_actual) + 2%);
  margin-right: auto;
  left: 10%;
}

/*
 * dynamic-photo-grid-triple-2-8
 */
.layout-17040382b0ce7407cf65dde9c58fde4e {
  background: var(--colorfrmt1);
  display: inline-flex;
  justify-content: center;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap {
  display: flex;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child {
  width: 52.9%;
  flex-direction: column;
  margin-right: var(--margin_between_actual);
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(1) {
  margin-bottom: var(--margin_between_actual);
  width: 100%;
  height: 50%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(1) > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(1)::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(1)::after {
  content: "";
  display: block;
  clear: both;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(2) {
  width: 100%;
  height: 50%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(2) > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(2)::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:first-child picture:nth-child(2)::after {
  content: "";
  display: block;
  clear: both;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:last-child {
  width: 47%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:last-child picture:nth-child(1) {
  width: 100%;
  height: auto;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:last-child picture:nth-child(1) > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:last-child picture:nth-child(1)::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-17040382b0ce7407cf65dde9c58fde4e .inner-wrap:last-child picture:nth-child(1)::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-9
 */
.layout-171f2938a5d98c6a3bd0d987bad17ea6 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 {
  flex-direction: column;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(70% - var(--margin_between_actual) / 2) calc(30% - var(--margin_between_actual) / 2);
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 .inner-wrap {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 .inner-wrap {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
  order: 1;
  grid-area: img1;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
    width: calc(0.45 * var(--width-edge-without-padding));
    min-width: calc(0.45 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
    width: calc(0.69 * var(--width-edge-without-padding));
    min-width: calc(0.69 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
  width: calc(0.69 * var(--width-edge-without-padding));
  min-width: calc(0.69 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
    margin-right: auto;
    margin-bottom: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img1] {
  margin: 0 auto 0 0;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
  order: 3;
  grid-area: img3;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
    width: calc(0.45 * var(--width-edge-without-padding));
    min-width: calc(0.45 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
    width: calc(0.68 * var(--width-edge-without-padding));
    min-width: calc(0.68 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
  width: calc(0.68 * var(--width-edge-without-padding));
  min-width: calc(0.68 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
    margin-left: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
    margin: 0 auto 0 8%;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img3] {
  margin: 0 auto 0 8%;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
  order: 2;
  grid-area: img2;
  height: fit-content;
}
.layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
    width: calc(0.42 * var(--width-edge-without-padding));
    min-width: calc(0.42 * var(--width-edge-without-padding));
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
  width: calc(0.42 * var(--width-edge-without-padding));
  min-width: calc(0.42 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-171f2938a5d98c6a3bd0d987bad17ea6 [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
}

/*
 * dynamic-photo-grid-triple-2-10
 */
.layout-18397a0b3142dbaedaa4c4750e5fe88d {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d {
  flex-direction: column;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(70% - var(--margin_between_actual) / 2) calc(30% - var(--margin_between_actual) / 2);
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap {
    grid-template-areas: "img1 img1" "img3 img2";
    column-gap: initial;
    grid-template-columns: auto;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap {
  grid-template-areas: "img1 img1" "img3 img2";
  column-gap: initial;
  grid-template-columns: auto;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap {
  flex-direction: column;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
  grid-area: img1;
  order: 1;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
    width: calc(0.8 * var(--width-edge-without-padding));
    min-width: calc(0.8 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
    width: 98%;
    margin-right: auto;
    margin-bottom: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img1] {
  margin: 0 auto 0 0;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
  grid-area: img2;
  order: 2;
  height: fit-content;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
    width: calc(0.27 * var(--width-edge-without-padding));
    min-width: calc(0.27 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
    width: calc(0.35 * var(--width-edge-without-padding));
    min-width: calc(0.35 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
  width: calc(0.35 * var(--width-edge-without-padding));
  min-width: calc(0.35 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
    width: 82%;
    margin: 70% 0 0 auto;
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 0 auto;
    width: calc(0.35 * var(--width-edge) - var(--margin_between_actual) / 2);
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d .inner-wrap [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 0 auto;
  width: calc(0.35 * var(--width-edge) - var(--margin_between_actual) / 2);
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
  grid-area: img3;
  order: 3;
}
.layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
    margin-left: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
    width: calc(0.65 * var(--width-edge) - var(--margin_between_actual) / 2);
    margin-left: 0;
    margin-right: auto;
    margin-top: calc(60% + var(--margin_between_actual));
  }
}
.force-mobile-view * .layout-18397a0b3142dbaedaa4c4750e5fe88d [data-assetid=img3] {
  width: calc(0.65 * var(--width-edge) - var(--margin_between_actual) / 2);
  margin-left: 0;
  margin-right: auto;
  margin-top: calc(60% + var(--margin_between_actual));
}

/*
 * dynamic-photo-grid-triple-2-11
 */
.layout-b9b019f1de1416d9ef051d966641b20f {
  background: var(--colorfrmt1);
}
.layout-b9b019f1de1416d9ef051d966641b20f .inner-wrap {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( max-width: 650px ) {
  .layout-b9b019f1de1416d9ef051d966641b20f .inner-wrap {
    flex-direction: column;
    align-items: center;
    padding: 0 15%;
  }
}
.force-mobile-view * .layout-b9b019f1de1416d9ef051d966641b20f .inner-wrap {
  flex-direction: column;
  align-items: center;
  padding: 0 15%;
}
@media ( min-width: 651px ) {
  .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1], .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1], .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2] {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1], .force-mobile-view * .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2] {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid] {
  height: auto;
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid] {
    width: 100%;
  }
}
.force-mobile-view * .layout-b9b019f1de1416d9ef051d966641b20f [data-assetid] {
  width: 100%;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 65%;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 65%;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 65%;
}
.layout-b9b019f1de1416d9ef051d966641b20f [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-12
 */
.layout-bf8356ef55b06bc56105b1b2036c1c47 {
  background: var(--colorfrmt1);
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 .inner-wrap {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( max-width: 650px ) {
  .layout-bf8356ef55b06bc56105b1b2036c1c47 .inner-wrap {
    flex-direction: column;
    align-items: center;
    padding: 0 20%;
  }
}
.force-mobile-view * .layout-bf8356ef55b06bc56105b1b2036c1c47 .inner-wrap {
  flex-direction: column;
  align-items: center;
  padding: 0 20%;
}
@media ( min-width: 651px ) {
  .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1], .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1], .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2] {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1], .force-mobile-view * .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2] {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid] {
  flex: 1;
  height: auto;
}
@media ( max-width: 650px ) {
  .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid] {
    width: 100%;
  }
}
.force-mobile-view * .layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid] {
  width: 100%;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-bf8356ef55b06bc56105b1b2036c1c47 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-13
 */
.layout-19e097824095a4c9691049b6148e7a5b {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b {
  flex-direction: column;
}
.layout-19e097824095a4c9691049b6148e7a5b .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(70% - var(--margin_between_actual)) 30%;
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b .inner-wrap {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b .inner-wrap {
  width: 100%;
  display: inline-flex;
  flex-direction: column;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
  order: 1;
  grid-area: img1;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
    width: calc(0.42 * var(--width-edge-without-padding));
    min-width: calc(0.42 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
  width: calc(0.42 * var(--width-edge-without-padding));
  min-width: calc(0.42 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
    margin-left: auto;
    margin-bottom: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
    margin: 0 auto 0 20%;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img1] {
  margin: 0 auto 0 20%;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
  order: 3;
  grid-area: img3;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
    width: calc(0.45 * var(--width-edge-without-padding));
    min-width: calc(0.45 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
    width: calc(0.64 * var(--width-edge-without-padding));
    min-width: calc(0.64 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 63%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
  width: calc(0.64 * var(--width-edge-without-padding));
  min-width: calc(0.64 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 63%;
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img3] {
  margin: 0 auto 0 0;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
  order: 2;
  grid-area: img2;
  height: fit-content;
}
.layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
    width: calc(0.42 * var(--width-edge-without-padding));
    min-width: calc(0.42 * var(--width-edge-without-padding));
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
  width: calc(0.42 * var(--width-edge-without-padding));
  min-width: calc(0.42 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
    margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-19e097824095a4c9691049b6148e7a5b [data-assetid=img2] {
  margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
}

/*
 * dynamic-photo-grid-triple-2-14
 */
.layout-85e279a6c4bf901a87a995ba37fb5041 {
  background: var(--colorfrmt1);
  display: inline-flex;
  justify-content: center;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap {
  display: flex;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child {
  width: 52.9%;
  flex-direction: column;
  margin-right: var(--margin_between_actual);
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(1) {
  margin-bottom: var(--margin_between_actual);
  width: 100%;
  height: 50%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(1) > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(1)::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(1)::after {
  content: "";
  display: block;
  clear: both;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(2) {
  width: 100%;
  height: 50%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(2) > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(2)::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:first-child picture:nth-child(2)::after {
  content: "";
  display: block;
  clear: both;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:last-child {
  width: 47%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:last-child picture:nth-child(1) {
  width: 100%;
  height: auto;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:last-child picture:nth-child(1) > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:last-child picture:nth-child(1)::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-85e279a6c4bf901a87a995ba37fb5041 .inner-wrap:last-child picture:nth-child(1)::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-15
 */
.layout-3e7b73f0a7c0d5f396dabab731680857 {
  background: var(--colorfrmt1);
}
.layout-3e7b73f0a7c0d5f396dabab731680857 .inner-wrap {
  display: grid;
  column-gap: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-3e7b73f0a7c0d5f396dabab731680857 .inner-wrap {
    grid-template-areas: "img1 img2 img2 img3";
    grid-template-columns: calc(25% - var(--margin_between_actual) / 2) calc(25% - var(--margin_between_actual)) calc(25% - var(--margin_between_actual)) calc(25% - var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-3e7b73f0a7c0d5f396dabab731680857 .inner-wrap {
    grid-template-areas: "img2 img2" "img1 img3";
    row-gap: var(--margin_between_actual);
    grid-template-columns: auto;
  }
}
.force-mobile-view * .layout-3e7b73f0a7c0d5f396dabab731680857 .inner-wrap {
  grid-template-areas: "img2 img2" "img1 img3";
  row-gap: var(--margin_between_actual);
  grid-template-columns: auto;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img1] {
  grid-area: img1;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img2] {
  grid-area: img2;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3] {
  grid-area: img3;
}
.layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.force-mobile-view * .layout-3e7b73f0a7c0d5f396dabab731680857 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-16
 */
.layout-954d34d543dfed902aaab5b00483d927 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 {
  flex-direction: column;
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(74% - var(--margin_between_actual)) 26%;
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap {
    grid-template-areas: "img1" "img2" "img3";
    column-gap: initial;
    grid-template-columns: auto;
    row-gap: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap {
  grid-template-areas: "img1" "img2" "img3";
  column-gap: initial;
  grid-template-columns: auto;
  row-gap: var(--margin_between_actual);
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap {
  flex-direction: column;
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
  grid-area: img1;
  order: 1;
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
    width: calc(0.74 * var(--width-edge-without-padding));
    min-width: calc(0.74 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
    width: calc(0.735 * var(--width-edge-without-padding));
    min-width: calc(0.735 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
  width: calc(0.735 * var(--width-edge-without-padding));
  min-width: calc(0.735 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
    width: 100%;
    margin-right: auto;
    margin-bottom: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img1] {
  margin: 0 auto 0 0;
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
  grid-area: img2;
  order: 2;
  height: fit-content;
}
.layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
    width: calc(0.26 * var(--width-edge-without-padding));
    min-width: calc(0.26 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
    width: calc(0.32 * var(--width-edge-without-padding));
    min-width: calc(0.32 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
  width: calc(0.32 * var(--width-edge-without-padding));
  min-width: calc(0.32 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
    width: 100%;
    margin: auto 0 65% auto;
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
    margin: 0 0 0 auto;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 .inner-wrap [data-assetid=img2] {
  margin: 0 0 0 auto;
}
.layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
  grid-area: img3;
  order: 3;
}
.layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
    width: calc(0.42 * var(--width-edge-without-padding));
    min-width: calc(0.42 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
    width: calc(0.519 * var(--width-edge-without-padding));
    min-width: calc(0.519 * var(--width-edge-without-padding));
  }
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 65%;
  }
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
  width: calc(0.519 * var(--width-edge-without-padding));
  min-width: calc(0.519 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 65%;
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
    width: 66.7%;
    margin-left: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
    margin-right: auto;
    margin-left: 7%;
  }
}
.force-mobile-view * .layout-954d34d543dfed902aaab5b00483d927 [data-assetid=img3] {
  margin-right: auto;
  margin-left: 7%;
}

/*
 * dynamic-photo-grid-triple-2-17
 */
.layout-1e22f68246ef8357bd34cfa99c251983 {
  background: var(--colorfrmt1);
}
.layout-1e22f68246ef8357bd34cfa99c251983 .inner-wrap {
  display: grid;
}
@media ( min-width: 651px ) {
  .layout-1e22f68246ef8357bd34cfa99c251983 .inner-wrap {
    grid-template-areas: "img1 img1 img2 img3 img3";
  }
}
@media ( max-width: 650px ) {
  .layout-1e22f68246ef8357bd34cfa99c251983 .inner-wrap {
    grid-template-areas: "img1 img1" "img2 img3";
    row-gap: var(--margin_between_actual);
    column-gap: var(--margin_between_actual);
    grid-template-columns: calc(65% - var(--margin_between_actual) / 2) calc(35% - var(--margin_between_actual) / 2);
  }
}
.force-mobile-view * .layout-1e22f68246ef8357bd34cfa99c251983 .inner-wrap {
  grid-template-areas: "img1 img1" "img2 img3";
  row-gap: var(--margin_between_actual);
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(65% - var(--margin_between_actual) / 2) calc(35% - var(--margin_between_actual) / 2);
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img1] {
  grid-area: img1;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 69%;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2] {
  grid-area: img2;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 69%;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2] {
    margin-left: var(--margin_between_actual);
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2] {
    margin-left: 0;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img2] {
  margin-left: 0;
  margin-right: 0;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img3] {
  grid-area: img3;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 69%;
}
.layout-1e22f68246ef8357bd34cfa99c251983 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-18
 */
.layout-97931d03339c03b12e47bd04a30d7f38 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap {
    grid-template-columns: calc(67% - var(--margin_between_actual)) 33%;
  }
}
@media ( max-width: 650px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap {
    grid-template-columns: calc(68% - var(--margin_between_actual)) 32%;
  }
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap {
  grid-template-columns: calc(68% - var(--margin_between_actual)) 32%;
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap {
  flex-direction: column;
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1] {
  grid-area: img1;
  order: 1;
  margin-right: auto;
  margin-bottom: var(--margin_between_actual);
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1] {
    width: calc(0.416 * var(--width-edge-without-padding));
    min-width: calc(0.416 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1] {
    width: calc(0.39 * var(--width-edge-without-padding));
    min-width: calc(0.39 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1] {
  width: calc(0.39 * var(--width-edge-without-padding));
  min-width: calc(0.39 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2] {
  grid-area: img2;
  order: 2;
  height: fit-content;
  margin: auto 0 auto auto;
}
.layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2] {
    width: calc(0.332 * var(--width-edge-without-padding));
    min-width: calc(0.332 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2] {
    width: calc(0.31 * var(--width-edge-without-padding));
    min-width: calc(0.31 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2] {
  width: calc(0.31 * var(--width-edge-without-padding));
  min-width: calc(0.31 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 .inner-wrap [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3] {
  grid-area: img3;
  order: 3;
  margin-left: auto;
}
.layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3] {
    width: calc(0.336 * var(--width-edge-without-padding));
    min-width: calc(0.336 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3] {
    width: calc(0.315 * var(--width-edge-without-padding));
    min-width: calc(0.315 * var(--width-edge-without-padding));
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3] {
  width: calc(0.315 * var(--width-edge-without-padding));
  min-width: calc(0.315 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-97931d03339c03b12e47bd04a30d7f38 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-triple-2-19
 */
.layout-44f46a69bce7b7d51a40405ba3eb05d4 {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap {
    grid-template-columns: calc(67% - var(--margin_between_actual)) 33%;
  }
}
@media ( max-width: 650px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap {
    grid-template-columns: calc(67.5% - var(--margin_between_actual)) 32.5%;
  }
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap {
  grid-template-columns: calc(67.5% - var(--margin_between_actual)) 32.5%;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap {
  flex-direction: column;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1] {
  grid-area: img1;
  order: 1;
  margin-right: auto;
  margin-bottom: var(--margin_between_actual);
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1] {
    width: calc(0.416 * var(--width-edge-without-padding));
    min-width: calc(0.416 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1] {
    width: calc(0.415 * var(--width-edge-without-padding));
    min-width: calc(0.415 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1] {
  width: calc(0.415 * var(--width-edge-without-padding));
  min-width: calc(0.415 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2] {
  grid-area: img2;
  order: 2;
  height: fit-content;
  margin: auto 0 25% auto;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2] {
    width: calc(0.332 * var(--width-edge-without-padding));
    min-width: calc(0.332 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2] {
    width: calc(0.329 * var(--width-edge-without-padding));
    min-width: calc(0.329 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2] {
  width: calc(0.329 * var(--width-edge-without-padding));
  min-width: calc(0.329 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 .inner-wrap [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3] {
  grid-area: img3;
  order: 3;
  margin-left: auto;
}
.layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3] {
    width: calc(0.425 * var(--width-edge-without-padding));
    min-width: calc(0.425 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3] {
    width: calc(0.423 * var(--width-edge-without-padding));
    min-width: calc(0.423 * var(--width-edge-without-padding));
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3] {
  width: calc(0.423 * var(--width-edge-without-padding));
  min-width: calc(0.423 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-44f46a69bce7b7d51a40405ba3eb05d4 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-sextuple-2
 */
.layout-8c525c5680e76ab28d0e7263160731ff {
  background: var(--colorfrmt1);
}
.layout-8c525c5680e76ab28d0e7263160731ff .layout-block {
  width: 100%;
  display: grid;
  column-gap: var(--margin_between_actual);
  row-gap: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff .layout-block {
    grid-template-areas: "img1 img2 img3" "img4 img2 img6" "img4 img5 img6";
  }
}
@media ( max-width: 650px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff .layout-block {
    grid-template-areas: "img1 img2" "img4 img2" "img4 img5" "img4 img6" "img3 img6";
    grid-template-rows: auto;
    grid-template-columns: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
  }
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff .layout-block {
  grid-template-areas: "img1 img2" "img4 img2" "img4 img5" "img4 img6" "img3 img6";
  grid-template-rows: auto;
  grid-template-columns: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1] {
  grid-area: img1;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 106%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 106%;
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2] {
  grid-area: img2;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 160%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3] {
  grid-area: img3;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 106%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 106%;
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img4] {
  grid-area: img4;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img5] {
  grid-area: img5;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img5] > img {
  object-fit: cover;
  object-position: var(--img5_offset_x) var(--img5_offset_y);
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img5]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img5]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6] {
  grid-area: img6;
}
.layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6] > img {
  object-fit: cover;
  object-position: var(--img6_offset_x) var(--img6_offset_y);
}
@media ( min-width: 651px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.force-mobile-view * .layout-8c525c5680e76ab28d0e7263160731ff [data-assetid=img6]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8c525c5680e76ab28d0e7263160731ff picture {
  flex: 1;
}

/*
 * dynamic-photo-grid-sextuple-3
 */
.layout-a7f441008c8a70897b64fba29b3c7b91 {
  background: var(--colorfrmt1);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 .inner-wrap {
  display: grid;
  row-gap: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 .inner-wrap {
    grid-template-areas: "img1 img2 img2 img2 img3" "img4 img4 img5 img6 img6";
    grid-template-columns: 28% 9% 26% 9% 28%;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 .inner-wrap {
    grid-template-areas: "img1 img2 img2" "img4 img4 img5" "img3 img6 img6";
    grid-template-columns: calc(41% - var(--margin_between_actual) / 2) calc(17% - var(--margin_between_actual)) calc(42% - var(--margin_between_actual) / 2);
    column-gap: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 .inner-wrap {
  grid-template-areas: "img1 img2 img2" "img4 img4 img5" "img3 img6 img6";
  grid-template-columns: calc(41% - var(--margin_between_actual) / 2) calc(17% - var(--margin_between_actual)) calc(42% - var(--margin_between_actual) / 2);
  column-gap: var(--margin_between_actual);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1] {
  grid-area: img1;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1] {
    width: calc(100% - var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1] {
    width: 100%;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img1] {
  width: 100%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2] {
  grid-area: img2;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 55%;
  }
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 62%;
  }
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 62%;
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2] {
    width: calc(100% - var(--margin_between_actual));
    margin-left: auto;
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img2] {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3] {
  grid-area: img3;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3] {
    width: calc(100% - var(--margin_between_actual) / 2);
    margin-left: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3] {
    width: 100%;
    margin-left: 0;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img3] {
  width: 100%;
  margin-left: 0;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4] {
  grid-area: img4;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 57.1%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4] {
    width: calc(100% - var(--margin_between_actual) / 1.5);
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4] {
    width: 100%;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img4] {
  width: 100%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5] {
  grid-area: img5;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5] > img {
  object-fit: cover;
  object-position: var(--img5_offset_x) var(--img5_offset_y);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5] {
    width: calc(100% - var(--margin_between_actual) / 1.5);
    margin-left: auto;
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5] {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img5] {
  width: 100%;
  margin-left: 0;
  margin-right: 0;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6] {
  grid-area: img6;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6] > img {
  object-fit: cover;
  object-position: var(--img6_offset_x) var(--img6_offset_y);
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6]::before {
  content: "";
  float: left;
  padding-top: 57.1%;
}
.layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6] {
    width: calc(100% - var(--margin_between_actual) / 1.5);
    margin-left: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6] {
    width: 100%;
    margin-left: 0;
  }
}
.force-mobile-view * .layout-a7f441008c8a70897b64fba29b3c7b91 [data-assetid=img6] {
  width: 100%;
  margin-left: 0;
}

/*
 *  dynamic-photo-grid-sextuple-4
 */
.layout-72d8c629a7a81e34a87c6517baf9be7c {
  background: var(--colorfrmt1);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c .inner-wrap {
  width: 100%;
  display: grid;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c .inner-wrap {
    grid-template-areas: "img1 img1 img2 img3 img3" "img4 img5 img5 img5 img6" "img4 img5 img5 img5 img6";
    grid-template-columns: 33% 8% 19% 3% 37%;
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c .inner-wrap {
    grid-template-areas: "img1" "img2" "img3" "img6" "img5" "img4";
    grid-template-columns: auto;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c .inner-wrap {
  grid-template-areas: "img1" "img2" "img3" "img6" "img5" "img4";
  grid-template-columns: auto;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid] {
  height: fit-content;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1] {
  grid-area: img1;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 67%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1] {
    width: calc(69% - var(--margin_between_actual) / 3);
    margin: auto var(--margin_between_actual) var(--margin_between_actual) auto;
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1] {
    width: 48%;
    margin: 0 0 var(--margin_between_actual) 10%;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img1] {
  width: 48%;
  margin: 0 0 var(--margin_between_actual) 10%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2] {
  grid-area: img2;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2] {
    margin-bottom: calc(var(--margin_between_actual) / 2);
    width: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2] {
    width: 36%;
    margin: 0 15% var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img2] {
  width: 36%;
  margin: 0 15% var(--margin_between_actual) auto;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3] {
  grid-area: img3;
  margin-top: auto;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3] {
    margin-left: var(--margin_between_actual);
    width: calc(68% - var(--margin_between_actual) / 3);
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3] {
    width: 51%;
    margin-left: 10%;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img3] {
  width: 51%;
  margin-left: 10%;
  margin-bottom: var(--margin_between_actual);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4] {
  margin-left: auto;
  grid-area: img4;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4] {
    width: 40%;
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4] {
    width: 37%;
    margin-right: 0;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img4] {
  width: 37%;
  margin-right: 0;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5] {
  grid-area: img5;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5] > img {
  object-fit: cover;
  object-position: var(--img5_offset_x) var(--img5_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5]::before {
  content: "";
  float: left;
  padding-top: 72%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5] {
    width: 100%;
    margin-top: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5] {
    width: 64%;
    margin: 0 0 var(--margin_between_actual) 10%;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img5] {
  width: 64%;
  margin: 0 0 var(--margin_between_actual) 10%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6] {
  grid-area: img6;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6] > img {
  object-fit: cover;
  object-position: var(--img6_offset_x) var(--img6_offset_y);
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6] {
    width: 47%;
    margin-left: var(--margin_between_actual);
    margin-top: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6] {
    width: 56%;
    margin: 0 10% var(--margin_between_actual) auto;
  }
}
.force-mobile-view * .layout-72d8c629a7a81e34a87c6517baf9be7c [data-assetid=img6] {
  width: 56%;
  margin: 0 10% var(--margin_between_actual) auto;
}

/*
 * dynamic-photo-grid-sextuple-5
 */
.layout-1316bcb9b439b2c34b626b77e50deaf0 {
  background: var(--colorfrmt1);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 .inner-wrap {
  width: 100%;
  display: grid;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 .inner-wrap {
    grid-template-areas: "img1 img1 img2 img3" "img1 img1 img2 img3" "img4 empty img2 img6" "img4 img5 img5 img6" "img4 img5 img5 img6";
    grid-template-columns: 39% 1% 26% 34%;
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 .inner-wrap {
    grid-template-areas: "img1 img2" "img3 img6" "img5 img5" "img4 img4";
    grid-template-columns: calc(51% - var(--margin_between_actual)) 49%;
    row-gap: var(--margin_between_actual);
    column-gap: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 .inner-wrap {
  grid-template-areas: "img1 img2" "img3 img6" "img5 img5" "img4 img4";
  grid-template-columns: calc(51% - var(--margin_between_actual)) 49%;
  row-gap: var(--margin_between_actual);
  column-gap: var(--margin_between_actual);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid] {
  height: fit-content;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 .empty {
  grid-area: empty;
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 .empty {
    display: none;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 .empty {
  display: none;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1] {
  grid-area: img1;
  margin-left: auto;
  margin-top: auto;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1] {
    width: 59%;
    margin: auto var(--margin_between_actual) calc(var(--margin_between_actual) / 2) auto;
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1] {
    width: 100%;
    margin: 0;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img1] {
  width: 100%;
  margin: 0;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2] {
  grid-area: img2;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2] {
    margin-bottom: calc(var(--margin_between_actual) / 2);
    width: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2] {
    width: 100%;
    margin-top: 50%;
    margin-bottom: 0;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img2] {
  width: 100%;
  margin-top: 50%;
  margin-bottom: 0;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3] {
  grid-area: img3;
  margin-top: auto;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3] {
    margin-left: var(--margin_between_actual);
    margin-bottom: var(--margin_between_actual);
    width: 43%;
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3] {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: auto;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img3] {
  width: 100%;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: auto;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4] {
  margin-left: auto;
  grid-area: img4;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4] {
    width: 36.6%;
    margin-top: calc(var(--margin_between_actual) / 2);
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4] {
    width: 38%;
    margin-right: 10%;
    margin-top: 0;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img4] {
  width: 38%;
  margin-right: 10%;
  margin-top: 0;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5] {
  grid-area: img5;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5] > img {
  object-fit: cover;
  object-position: var(--img5_offset_x) var(--img5_offset_y);
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5] {
    width: 96%;
    margin-top: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5] {
    width: 50%;
    margin-top: 0;
    margin-left: 15%;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img5] {
  width: 50%;
  margin-top: 0;
  margin-left: 15%;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6] {
  grid-area: img6;
}
.layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6] > img {
  object-fit: cover;
  object-position: var(--img6_offset_x) var(--img6_offset_y);
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6] {
    width: 52%;
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6] {
    width: 100%;
    margin-left: 0;
    margin-top: 50%;
  }
}
.force-mobile-view * .layout-1316bcb9b439b2c34b626b77e50deaf0 [data-assetid=img6] {
  width: 100%;
  margin-left: 0;
  margin-top: 50%;
}

/*
 * dynamic-embedded-1
 */
.layout-a1e720ff37ac98be2872c261b550dcfa {
  background: var(--colorfrmt1);
}
.layout-a1e720ff37ac98be2872c261b550dcfa .embed-target {
  height: calc(var(--final_proportions) * var(--width-edge));
}
@media ( min-width: 651px ) {
  .layout-a1e720ff37ac98be2872c261b550dcfa .embed-target {
    --max_proportions: 0.5;
    --final_proportions: min(var(--max_proportions), var(--proportions));
  }
}
@media ( max-width: 650px ) {
  .layout-a1e720ff37ac98be2872c261b550dcfa .embed-target {
    --final_proportions: var(--proportions);
  }
}
.force-mobile-view * .layout-a1e720ff37ac98be2872c261b550dcfa .embed-target {
  --final_proportions: var(--proportions);
}

/*
 * dynamic-embedded-2
 */
.layout-30654ca0f8512d6a7b62b56a936eba44 {
  background: var(--colorfrmt1);
}

/*
 * dynamic-embedded-text-1
 */
.layout-9a7f5788adec384ba9e4b78dd25e055b {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: inline-flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-9a7f5788adec384ba9e4b78dd25e055b {
    align-items: center;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-9a7f5788adec384ba9e4b78dd25e055b {
  align-items: center;
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-9a7f5788adec384ba9e4b78dd25e055b .inner-wrap {
    margin-right: 70.4px;
    width: 70%;
  }
}
@media ( max-width: 650px ) {
  .layout-9a7f5788adec384ba9e4b78dd25e055b .inner-wrap {
    width: 100%;
    margin-right: 0;
    margin-bottom: 35.2px;
  }
}
.force-mobile-view * .layout-9a7f5788adec384ba9e4b78dd25e055b .inner-wrap {
  width: 100%;
  margin-right: 0;
  margin-bottom: 35.2px;
}
.layout-9a7f5788adec384ba9e4b78dd25e055b [data-tokenid=text4] {
  text-align: left;
}
@media ( min-width: 651px ) {
  .layout-9a7f5788adec384ba9e4b78dd25e055b [data-tokenid=text4] {
    margin-left: var(--margin_between_actual);
    width: 30%;
  }
}
@media ( max-width: 650px ) {
  .layout-9a7f5788adec384ba9e4b78dd25e055b [data-tokenid=text4] {
    margin-left: 0;
    margin-top: var(--margin_between_actual);
    width: auto;
  }
}
.force-mobile-view * .layout-9a7f5788adec384ba9e4b78dd25e055b [data-tokenid=text4] {
  margin-left: 0;
  margin-top: var(--margin_between_actual);
  width: auto;
}

/*
 * dynamic-embedded-text-1-1
 */
.layout-d5d329ab96f465ee7a1e0ef895191e9d {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: inline-flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-d5d329ab96f465ee7a1e0ef895191e9d {
    align-items: center;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-d5d329ab96f465ee7a1e0ef895191e9d {
  align-items: center;
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-d5d329ab96f465ee7a1e0ef895191e9d .inner-wrap {
    margin-left: 70.4px;
    width: 70%;
  }
}
@media ( max-width: 650px ) {
  .layout-d5d329ab96f465ee7a1e0ef895191e9d .inner-wrap {
    margin-left: 0;
    margin-top: 35.2px;
    width: 100%;
  }
}
.force-mobile-view * .layout-d5d329ab96f465ee7a1e0ef895191e9d .inner-wrap {
  margin-left: 0;
  margin-top: 35.2px;
  width: 100%;
}
.layout-d5d329ab96f465ee7a1e0ef895191e9d [data-tokenid=text4] {
  text-align: left;
}
@media ( min-width: 651px ) {
  .layout-d5d329ab96f465ee7a1e0ef895191e9d [data-tokenid=text4] {
    margin-right: var(--margin_between_actual);
    width: 30%;
  }
}
@media ( max-width: 650px ) {
  .layout-d5d329ab96f465ee7a1e0ef895191e9d [data-tokenid=text4] {
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
    width: auto;
  }
}
.force-mobile-view * .layout-d5d329ab96f465ee7a1e0ef895191e9d [data-tokenid=text4] {
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
  width: auto;
}

/*
 * dynamic-credits-1
 */
.layout-84a347746641e56cdd4dbbec49ce83cf {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-84a347746641e56cdd4dbbec49ce83cf .inner-wrap {
  text-align: center;
  border-bottom: 1px solid var(--colorfrmt4);
}
@media ( min-width: 651px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf .inner-wrap {
    margin: 2% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf .inner-wrap {
    margin: 4% 0;
  }
}
.force-mobile-view * .layout-84a347746641e56cdd4dbbec49ce83cf .inner-wrap {
  margin: 4% 0;
}
.layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text6] {
  border-bottom: 1px solid var(--colorfrmt4);
}
@media ( min-width: 651px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text6] {
    padding: calc(0.02 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text6] {
    padding: calc(0.05 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text6] {
  padding: calc(0.05 * var(--width-edge-without-padding));
}
@media ( min-width: 651px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text7] {
    padding: calc(0.035 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text7] {
    padding: calc(0.1 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-84a347746641e56cdd4dbbec49ce83cf [data-tokenid=text7] {
  padding: calc(0.1 * var(--width-edge-without-padding));
}

/*
 * dynamic-credits-2
 */
.layout-efd0a8727298e405fda58efcd1f29814 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-efd0a8727298e405fda58efcd1f29814 .inner-wrap {
  text-align: center;
}
@media ( min-width: 651px ) {
  .layout-efd0a8727298e405fda58efcd1f29814 .inner-wrap {
    margin: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-efd0a8727298e405fda58efcd1f29814 .inner-wrap {
    margin: 4%;
  }
}
.force-mobile-view * .layout-efd0a8727298e405fda58efcd1f29814 .inner-wrap {
  margin: 4%;
}
@media ( min-width: 651px ) {
  .layout-efd0a8727298e405fda58efcd1f29814 [data-tokenid] {
    margin: calc(0.04 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-efd0a8727298e405fda58efcd1f29814 [data-tokenid] {
    margin: calc(0.12 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-efd0a8727298e405fda58efcd1f29814 [data-tokenid] {
  margin: calc(0.12 * var(--width-edge-without-padding));
}

/*
 * dynamic-credits-3
 */
.layout-345acd74bab4c609a21c3e92f650a6ee {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-345acd74bab4c609a21c3e92f650a6ee .inner-wrap {
  text-align: center;
  border-bottom: 1px solid var(--colorfrmt4);
}
@media ( min-width: 651px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee .inner-wrap {
    margin: 2% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee .inner-wrap {
    margin: 4% 0;
  }
}
.force-mobile-view * .layout-345acd74bab4c609a21c3e92f650a6ee .inner-wrap {
  margin: 4% 0;
}
.layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text6] {
  border-bottom: 1px solid var(--colorfrmt4);
}
@media ( min-width: 651px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text6] {
    padding: calc(0.02 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text6] {
    padding: calc(0.05 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text6] {
  padding: calc(0.05 * var(--width-edge-without-padding));
}
@media ( min-width: 651px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text7] {
    padding: calc(0.035 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text7] {
    padding: calc(0.1 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-345acd74bab4c609a21c3e92f650a6ee [data-tokenid=text7] {
  padding: calc(0.1 * var(--width-edge-without-padding));
}

/*
 * dynamic-credits-4
 */
.layout-1102038bd8267a3d228ac9fff2f05d91 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-1102038bd8267a3d228ac9fff2f05d91 .inner-wrap {
  text-align: center;
}
@media ( min-width: 651px ) {
  .layout-1102038bd8267a3d228ac9fff2f05d91 .inner-wrap {
    margin: 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-1102038bd8267a3d228ac9fff2f05d91 .inner-wrap {
    margin: 4%;
  }
}
.force-mobile-view * .layout-1102038bd8267a3d228ac9fff2f05d91 .inner-wrap {
  margin: 4%;
}
@media ( min-width: 651px ) {
  .layout-1102038bd8267a3d228ac9fff2f05d91 [data-tokenid] {
    margin: calc(0.04 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-1102038bd8267a3d228ac9fff2f05d91 [data-tokenid] {
    margin: calc(0.12 * var(--width-edge-without-padding));
  }
}
.force-mobile-view * .layout-1102038bd8267a3d228ac9fff2f05d91 [data-tokenid] {
  margin: calc(0.12 * var(--width-edge-without-padding));
}

/*
 * dynamic-related-posts-1
 */
.layout-32e3bdbf09c8435fdd089f2dbe62821f {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-32e3bdbf09c8435fdd089f2dbe62821f .inner-wrap {
  padding: 64px 24px 104px;
}
.layout-32e3bdbf09c8435fdd089f2dbe62821f .posts-list {
  display: flex;
  justify-content: space-between;
  border-top: solid 1px var(--colorfrmt4);
  border-bottom: solid 1px var(--colorfrmt4);
  padding: 6%;
}
@media ( max-width: 650px ) {
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .posts-list {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .posts-list {
  flex-direction: column;
}
.layout-32e3bdbf09c8435fdd089f2dbe62821f .post {
  width: 33.333%;
  text-align: center;
  text-decoration: underline;
}
.layout-32e3bdbf09c8435fdd089f2dbe62821f [data-assetid^=img] {
  width: 100%;
  aspect-ratio: 5/5;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 12%;
}
@media ( max-width: 650px ) {
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .post:first-child {
    padding: 0;
  }
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .post:first-child {
  padding: 0;
}
@media ( min-width: 651px ) {
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .post:nth-child(2) {
    margin-left: var(--margin_between_actual);
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .post:nth-child(2) {
    margin: var(--margin_between_actual) 0;
  }
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .post:nth-child(2) {
  margin: var(--margin_between_actual) 0;
}
.layout-32e3bdbf09c8435fdd089f2dbe62821f [data-tokenid=text1] {
  padding: 0 0 16px 24px;
}
@media ( max-width: 650px ) {
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .inner-wrap {
    padding: 24px 0 48px;
  }
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .posts-list {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10% 0;
  }
  .layout-32e3bdbf09c8435fdd089f2dbe62821f .post {
    width: 100%;
  }
  .layout-32e3bdbf09c8435fdd089f2dbe62821f [data-assetid^=img] {
    width: 67%;
    margin: 0 auto 8px;
  }
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .inner-wrap {
  padding: 24px 0 48px;
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .posts-list {
  flex-wrap: wrap;
  justify-content: center;
  padding: 10% 0;
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f .post {
  width: 100%;
}
.force-mobile-view * .layout-32e3bdbf09c8435fdd089f2dbe62821f [data-assetid^=img] {
  width: 67%;
  margin: 0 auto 8px;
}

/*
 * dynamic-related-posts-2
 */
.layout-83edebe69888d32cb04744e1561b115e {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
@media ( max-width: 650px ) {
  .layout-83edebe69888d32cb04744e1561b115e .slide-conteiner {
    flex-direction: column;
    align-items: center;
  }
  .layout-83edebe69888d32cb04744e1561b115e .slide-block {
    display: flex;
    flex-direction: row;
  }
  .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text1] {
    margin-bottom: 72px;
  }
  .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text2], .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text3], .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text4] {
    margin-top: 0;
    margin-left: 8px;
  }
  .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img1], .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img2], .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img3] {
    width: 168px;
    height: 120px;
  }
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e .slide-conteiner {
  flex-direction: column;
  align-items: center;
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e .slide-block {
  display: flex;
  flex-direction: row;
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text1] {
  margin-bottom: 72px;
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text2], .force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text3], .force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text4] {
  margin-top: 0;
  margin-left: 8px;
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img1], .force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img2], .force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img3] {
  width: 168px;
  height: 120px;
}
@media ( min-width: 651px ) {
  .layout-83edebe69888d32cb04744e1561b115e .slide-block {
    width: 29.333%;
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-83edebe69888d32cb04744e1561b115e .slide-block {
    width: 100%;
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e .slide-block {
  width: 100%;
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}
@media ( min-width: 651px ) {
  .layout-83edebe69888d32cb04744e1561b115e .slide-block:last-child {
    margin-right: 0;
  }
}
@media ( max-width: 650px ) {
  .layout-83edebe69888d32cb04744e1561b115e .slide-block:last-child {
    margin-bottom: 0;
  }
}
.force-mobile-view * .layout-83edebe69888d32cb04744e1561b115e .slide-block:last-child {
  margin-bottom: 0;
}
.layout-83edebe69888d32cb04744e1561b115e .slide-conteiner {
  width: 100%;
  display: flex;
  justify-content: center;
}
.layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text1] {
  text-align: center;
  margin-bottom: 88px;
}
.layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text2], .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text3], .layout-83edebe69888d32cb04744e1561b115e [data-tokenid=text4] {
  margin-top: 16px;
  width: 200px;
  text-align: left;
}
.layout-83edebe69888d32cb04744e1561b115e [data-assetid=img1], .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img2], .layout-83edebe69888d32cb04744e1561b115e [data-assetid=img3] {
  width: 100%;
  height: 216px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  aspect-ratio: max(1, 1 / var(--img1_proportions));
}

/*
 * dynamic-view-gallery
 */
.layout-30a510dcf673978f09b09a8a7c03d308 {
  display: inline-flex;
  justify-content: center;
  text-align: center;
  color: var(--colorfrmt1);
  background: var(--colorfrmt1);
}
.layout-30a510dcf673978f09b09a8a7c03d308 .inner-wrap {
  width: 100%;
  padding-bottom: 20%;
}
.layout-30a510dcf673978f09b09a8a7c03d308 button {
  color: var(--colorfrmt1) !important;
  background: var(--colorfrmt4) !important;
}
@media ( min-width: 651px ) {
  .layout-30a510dcf673978f09b09a8a7c03d308 button {
    padding: 2% 13%;
  }
}
@media ( max-width: 650px ) {
  .layout-30a510dcf673978f09b09a8a7c03d308 button {
    padding: 0;
    width: 100%;
    height: 62.4px;
  }
}
.force-mobile-view * .layout-30a510dcf673978f09b09a8a7c03d308 button {
  padding: 0;
  width: 100%;
  height: 62.4px;
}

/*
 * dynamic-photo-grid-text-double-image-1
 */
.layout-b20b3e4077dd72209de49a89846e5562 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: flex;
  justify-content: center;
  height: fit-content;
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 {
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .display_mob {
    display: none;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .display_mob {
    display: block;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .display_mob {
  display: block;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .display_des {
    display: block;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .display_des {
    display: none;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .display_des {
  display: none;
}
.layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap {
  display: inline-flex;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap {
    flex-direction: column;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap {
    flex-direction: row;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap {
  flex-direction: row;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child {
    width: 70.6%;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child {
    width: 100%;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child {
  width: 100%;
}
.layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
    width: calc(0.555 * var(--width-edge-without-padding));
    min-width: calc(0.555 * var(--width-edge-without-padding));
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
    width: calc(0.65 * var(--width-edge-without-padding));
    min-width: calc(0.65 * var(--width-edge-without-padding));
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
  width: calc(0.65 * var(--width-edge-without-padding));
  min-width: calc(0.65 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
    margin: 0 auto 0 0;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:first-child [data-assetid=img1] {
  margin: 0 auto 0 0;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child {
    width: 29.3%;
    margin-left: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child {
    flex-direction: column-reverse;
    width: 100%;
    margin-left: 0;
    margin-top: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child {
  flex-direction: column-reverse;
  width: 100%;
  margin-left: 0;
  margin-top: var(--margin_between_actual);
}
.layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
    width: calc(auto * var(--width-edge-without-padding));
    min-width: calc(auto * var(--width-edge-without-padding));
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150.6%;
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
    width: calc(0.316 * var(--width-edge-without-padding));
    min-width: calc(0.316 * var(--width-edge-without-padding));
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
  width: calc(0.316 * var(--width-edge-without-padding));
  min-width: calc(0.316 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
    margin-top: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
    margin-left: auto;
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
    height: fit-content;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 .inner-wrap:last-child [data-assetid=img2] {
  margin-left: auto;
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 [data-tokenid=text4] {
    margin-top: 9%;
  }
}
@media ( max-width: 650px ) {
  .layout-b20b3e4077dd72209de49a89846e5562 [data-tokenid=text4] {
    margin: 3% 0;
  }
}
.force-mobile-view * .layout-b20b3e4077dd72209de49a89846e5562 [data-tokenid=text4] {
  margin: 3% 0;
}

/*
 * dynamic-photo-grid-text-double-image-2
 */
.layout-254b759681717618e681e793dcdc9b9d {
  background: var(--colorfrmt1);
  color: var(--colorfrmt4);
}
@media ( min-width: 651px ) {
  .layout-254b759681717618e681e793dcdc9b9d .inner-wrap {
    display: grid;
    grid-template-columns: 25% calc(75% - var(--margin_between_actual));
    grid-template-areas: "img1 text4" "img1 img2";
    column-gap: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-254b759681717618e681e793dcdc9b9d .inner-wrap {
    display: flex;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-254b759681717618e681e793dcdc9b9d .inner-wrap {
  display: flex;
  flex-direction: column;
}
@media ( max-width: 650px ) {
  .layout-254b759681717618e681e793dcdc9b9d [data-assetid] {
    margin-top: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-254b759681717618e681e793dcdc9b9d [data-assetid] {
  margin-top: var(--margin_between_actual);
}
.layout-254b759681717618e681e793dcdc9b9d [data-tokenid=text4] {
  grid-area: text4;
  min-height: calc(0.14 * var(--width-edge-without-padding));
}
@media ( min-width: 651px ) {
  .layout-254b759681717618e681e793dcdc9b9d [data-tokenid=text4] {
    margin: calc(0.02 * var(--width-edge-without-padding));
  }
}
@media ( max-width: 650px ) {
  .layout-254b759681717618e681e793dcdc9b9d [data-tokenid=text4] {
    margin: 3%;
  }
}
.force-mobile-view * .layout-254b759681717618e681e793dcdc9b9d [data-tokenid=text4] {
  margin: 3%;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1] {
  grid-area: img1;
  height: fit-content;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1] {
    width: 45%;
    margin-right: auto;
  }
}
.force-mobile-view * .layout-254b759681717618e681e793dcdc9b9d [data-assetid=img1] {
  width: 45%;
  margin-right: auto;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2] {
  grid-area: img2;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66%;
}
.layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2] {
    width: 90%;
    margin-left: auto;
  }
}
.force-mobile-view * .layout-254b759681717618e681e793dcdc9b9d [data-assetid=img2] {
  width: 90%;
  margin-left: auto;
}

/*
 * dynamic-photo-grid-text-double-image-3
 */
.layout-ad37e48466eb60b11b854495137b4395 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: flex;
  justify-content: center;
  height: fit-content;
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 {
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .display_mob {
    display: none;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .display_mob {
    display: block;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .display_mob {
  display: block;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .display_des {
    display: block;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .display_des {
    display: none;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .display_des {
  display: none;
}
.layout-ad37e48466eb60b11b854495137b4395 .inner-wrap {
  display: inline-flex;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap {
    flex-direction: column;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap {
    flex-direction: row;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap {
  flex-direction: row;
}
.layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child {
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child {
    width: 68%;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child {
    width: 100%;
    height: 32px;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child {
  width: 100%;
  height: 32px;
}
.layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
    width: calc(0.293 * var(--width-edge-without-padding));
    min-width: calc(0.293 * var(--width-edge-without-padding));
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
    width: calc(0.453 * var(--width-edge-without-padding));
    min-width: calc(0.453 * var(--width-edge-without-padding));
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
  width: calc(0.453 * var(--width-edge-without-padding));
  min-width: calc(0.453 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
    margin: 0 auto 0 0;
    position: absolute;
    top: 24%;
    left: 3%;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:first-child [data-assetid=img1] {
  margin: 0 auto 0 0;
  position: absolute;
  top: 24%;
  left: 3%;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child {
    width: 32.2%;
    margin-left: var(--margin_between_actual);
    padding-bottom: 2%;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child {
    flex-direction: column-reverse;
    width: 100%;
    margin-left: 0;
    padding-bottom: 0;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child {
  flex-direction: column-reverse;
  width: 100%;
  margin-left: 0;
  padding-bottom: 0;
}
.layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
    width: calc(auto * var(--width-edge-without-padding));
    min-width: calc(auto * var(--width-edge-without-padding));
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
    width: calc(0.33 * var(--width-edge-without-padding));
    min-width: calc(0.33 * var(--width-edge-without-padding));
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
  width: calc(0.33 * var(--width-edge-without-padding));
  min-width: calc(0.33 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
    margin-top: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
    margin: 55% 3% var(--margin_between_actual) auto;
    height: fit-content;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 .inner-wrap:last-child [data-assetid=img2] {
  margin: 55% 3% var(--margin_between_actual) auto;
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-ad37e48466eb60b11b854495137b4395 [data-tokenid=text4] {
    margin: 8% 2% 2% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-ad37e48466eb60b11b854495137b4395 [data-tokenid=text4] {
    margin: 8% 3% 3% 3%;
  }
}
.force-mobile-view * .layout-ad37e48466eb60b11b854495137b4395 [data-tokenid=text4] {
  margin: 8% 3% 3% 3%;
}

/*
 * dynamic-photo-grid-text-double-image-4
 */
.layout-63ebdb3e54f96bf6b212e2f1dea679ae {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  display: flex;
  justify-content: center;
  height: fit-content;
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae {
  flex-direction: column;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_mob {
    display: none;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_mob {
    display: block;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_mob {
  display: block;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_des {
    display: block;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_des {
    display: none;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .display_des {
  display: none;
}
.layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap {
  display: inline-flex;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap {
    flex-direction: column;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap {
    flex-direction: row;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap {
  flex-direction: row;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child {
    width: 63.3%;
    padding-bottom: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child {
    width: 100%;
    padding-bottom: 0;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child {
  width: 100%;
  padding-bottom: 0;
}
.layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
    width: calc(auto * var(--width-edge-without-padding));
    min-width: calc(auto * var(--width-edge-without-padding));
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
    width: calc(0.647 * var(--width-edge-without-padding));
    min-width: calc(0.647 * var(--width-edge-without-padding));
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
  width: calc(0.647 * var(--width-edge-without-padding));
  min-width: calc(0.647 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
    width: 100%;
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
    margin: 3% auto 0 3%;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:first-child [data-assetid=img1] {
  margin: 3% auto 0 3%;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child {
    width: 49.3%;
    margin-left: var(--margin_between_actual);
    padding-top: 25%;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child {
    flex-direction: column-reverse;
    width: 100%;
    margin-left: 0;
    margin-top: var(--margin_between_actual);
    padding-top: 0;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child {
  flex-direction: column-reverse;
  width: 100%;
  margin-left: 0;
  margin-top: var(--margin_between_actual);
  padding-top: 0;
}
.layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
    width: calc(auto * var(--width-edge-without-padding));
    min-width: calc(auto * var(--width-edge-without-padding));
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
    width: calc(0.478 * var(--width-edge-without-padding));
    min-width: calc(0.478 * var(--width-edge-without-padding));
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
  width: calc(0.478 * var(--width-edge-without-padding));
  min-width: calc(0.478 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
    margin-left: auto;
    margin-right: 3%;
    margin-bottom: var(--margin_between_actual);
    height: fit-content;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae .inner-wrap:last-child [data-assetid=img2] {
  margin-left: auto;
  margin-right: 3%;
  margin-bottom: var(--margin_between_actual);
  height: fit-content;
}
@media ( min-width: 651px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae [data-tokenid=text4] {
    margin-top: 9%;
  }
}
@media ( max-width: 650px ) {
  .layout-63ebdb3e54f96bf6b212e2f1dea679ae [data-tokenid=text4] {
    margin: 3%;
  }
}
.force-mobile-view * .layout-63ebdb3e54f96bf6b212e2f1dea679ae [data-tokenid=text4] {
  margin: 3%;
}

/*
 * dynamic-photo-grid-text-double-image-5
 */
.layout-8e8c5fea7cb8a38f43bdab82611ba86a {
  background: var(--colorfrmt1);
  color: var(--colorfrmt4);
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-8e8c5fea7cb8a38f43bdab82611ba86a .inner-wrap {
    align-items: center;
    padding: 3% 3% 0;
  }
}
.force-mobile-view * .layout-8e8c5fea7cb8a38f43bdab82611ba86a .inner-wrap {
  align-items: center;
  padding: 3% 3% 0;
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid] {
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid] {
    width: 50%;
  }
}
.force-mobile-view * .layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid] {
  width: 50%;
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-tokenid=text4] {
    margin-bottom: 1%;
    margin-top: 4%;
  }
}
@media ( max-width: 650px ) {
  .layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-tokenid=text4] {
    margin-top: 3%;
    padding: 0 3%;
    margin-bottom: 3%;
  }
}
.force-mobile-view * .layout-8e8c5fea7cb8a38f43bdab82611ba86a [data-tokenid=text4] {
  margin-top: 3%;
  padding: 0 3%;
  margin-bottom: 3%;
}

/*
 * dynamic-photo-grid-text-double-image-6
 */
.layout-cf13d600848d2af4657fa2e985767502 {
  background: var(--colorfrmt1);
  color: var(--colorfrmt4);
}
.layout-cf13d600848d2af4657fa2e985767502 .inner-wrap {
  display: flex;
  justify-content: center;
}
@media ( max-width: 650px ) {
  .layout-cf13d600848d2af4657fa2e985767502 .inner-wrap {
    padding: 3% 3% 0;
    flex-direction: column;
    align-items: center;
  }
}
.force-mobile-view * .layout-cf13d600848d2af4657fa2e985767502 .inner-wrap {
  padding: 3% 3% 0;
  flex-direction: column;
  align-items: center;
}
.layout-cf13d600848d2af4657fa2e985767502 picture {
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-cf13d600848d2af4657fa2e985767502 picture {
    width: 100%;
  }
}
.force-mobile-view * .layout-cf13d600848d2af4657fa2e985767502 picture {
  width: 100%;
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1] {
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img1] {
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-cf13d600848d2af4657fa2e985767502 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-cf13d600848d2af4657fa2e985767502 [data-tokenid=text4] {
    margin-bottom: 1%;
    margin-top: 4%;
  }
}
@media ( max-width: 650px ) {
  .layout-cf13d600848d2af4657fa2e985767502 [data-tokenid=text4] {
    margin-top: 3%;
    padding: 0 3%;
    margin-bottom: 3%;
  }
}
.force-mobile-view * .layout-cf13d600848d2af4657fa2e985767502 [data-tokenid=text4] {
  margin-top: 3%;
  padding: 0 3%;
  margin-bottom: 3%;
}

/*
 * dynamic-photo-grid-quadruple-2
 */
.layout-2d9ee54139fcbb6d432147343a660d0b {
  background: var(--colorfrmt1);
  display: flex;
}
@media ( max-width: 650px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-2d9ee54139fcbb6d432147343a660d0b {
  flex-direction: column;
}
.layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( min-width: 651px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap {
    width: 100%;
    align-items: center;
  }
}
.force-mobile-view * .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap {
  width: 100%;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap:first-child {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap:first-child {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-2d9ee54139fcbb6d432147343a660d0b .inner-wrap:first-child {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img1], .layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img3] {
  margin-right: var(--margin_between_actual);
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid] {
  height: auto;
  flex: 1;
}
@media ( max-width: 650px ) {
  .layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid] {
    width: 100%;
  }
}
.force-mobile-view * .layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid] {
  width: 100%;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-2d9ee54139fcbb6d432147343a660d0b [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-quadruple-3
 */
.layout-a1d5b38b5c79825ae403a9447734d9ad {
  background: var(--colorfrmt1);
  display: flex;
}
@media ( max-width: 650px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad {
    flex-direction: column;
  }
}
.force-mobile-view * .layout-a1d5b38b5c79825ae403a9447734d9ad {
  flex-direction: column;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap {
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( min-width: 651px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap {
    width: 100%;
    align-items: center;
  }
}
.force-mobile-view * .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap {
  width: 100%;
  align-items: center;
}
@media ( min-width: 651px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap:first-child {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap:first-child {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-a1d5b38b5c79825ae403a9447734d9ad .inner-wrap:first-child {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img1], .layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img3] {
  margin-right: var(--margin_between_actual);
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid] {
  flex: 1;
  height: auto;
}
@media ( max-width: 650px ) {
  .layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid] {
    width: 100%;
  }
}
.force-mobile-view * .layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid] {
  width: 100%;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-a1d5b38b5c79825ae403a9447734d9ad [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-photo-grid-quadruple-4
 */
.layout-23de1822e61aa00c4a2d8bda785649f2 {
  background: var(--colorfrmt1);
  display: flex;
  flex-direction: column;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 .inner-wrap {
  width: 100%;
  display: grid;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 .inner-wrap {
    grid-template-areas: "img1 img2 img4" "img1 img3 img4";
    grid-template-columns: 22% calc(38% - var(--margin_between_actual)) calc(40% - var(--margin_between_actual));
    column-gap: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 .inner-wrap {
    grid-template-areas: "img1 img2 img2" "img1 empty img3" "img4 img4 img3";
    grid-template-columns: 49% 10% 41%;
    column-gap: 0;
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 .inner-wrap {
  grid-template-areas: "img1 img2 img2" "img1 empty img3" "img4 img4 img3";
  grid-template-columns: 49% 10% 41%;
  column-gap: 0;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 .empty {
    display: none;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 .empty {
    grid-area: empty;
    display: block;
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 .empty {
  grid-area: empty;
  display: block;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1] {
  grid-area: img1;
  height: fit-content;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 140%;
  }
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 135%;
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1] {
    margin-top: auto;
    margin-bottom: 60%;
    width: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1] {
    margin-top: 63%;
    margin-bottom: 0;
    margin-right: auto;
    width: calc(0.42 * var(--width-edge) - var(--margin_between_actual) / 2);
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img1] {
  margin-top: 63%;
  margin-bottom: 0;
  margin-right: auto;
  width: calc(0.42 * var(--width-edge) - var(--margin_between_actual) / 2);
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2] {
  grid-area: img2;
  height: fit-content;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 135%;
  }
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 137%;
  }
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 137%;
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2] {
    width: 51%;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2] {
    margin-left: calc(var(--margin_between_actual) / 1.5);
    margin-right: auto;
    width: calc(0.34 * var(--width-edge));
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img2] {
  margin-left: calc(var(--margin_between_actual) / 1.5);
  margin-right: auto;
  width: calc(0.34 * var(--width-edge));
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3] {
  grid-area: img3;
  height: fit-content;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 137%;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3] {
    margin-left: auto;
    margin-right: 6%;
    margin-top: 90%;
    width: 63%;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3] {
    margin-top: 0;
    margin-right: 0;
    width: calc(0.35 * var(--width-edge) - var(--margin_between_actual) / 2);
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img3] {
  margin-top: 0;
  margin-right: 0;
  width: calc(0.35 * var(--width-edge) - var(--margin_between_actual) / 2);
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4] {
  grid-area: img4;
  height: fit-content;
  margin-left: auto;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 137%;
}
.layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4] {
    margin-top: 35%;
    width: 94%;
  }
}
@media ( max-width: 650px ) {
  .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4] {
    margin-right: calc(var(--margin_between_actual) / 1.5);
    margin-top: 43%;
    width: calc(0.4 * var(--width-edge));
  }
}
.force-mobile-view * .layout-23de1822e61aa00c4a2d8bda785649f2 [data-assetid=img4] {
  margin-right: calc(var(--margin_between_actual) / 1.5);
  margin-top: 43%;
  width: calc(0.4 * var(--width-edge));
}

/*
 * dynamic-photo-grid-quadruple-5
 */
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 {
  background: var(--colorfrmt1);
  display: flex;
  flex-direction: column;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 .inner-wrap {
  width: 100%;
  display: flex;
  background-repeat: no-repeat;
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 .inner-wrap {
    flex-direction: column-reverse;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 .inner-wrap {
  flex-direction: column-reverse;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 .inner-wrap:first-child {
  margin-bottom: var(--margin_between_actual);
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 .inner-wrap:last-child {
  justify-content: space-between;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1], .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3] {
  margin-right: var(--margin_between_actual);
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid] {
  height: fit-content;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1] {
  margin-left: 8%;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 70%;
  }
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 69%;
  }
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 69%;
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1] {
    margin-top: 10%;
    width: 45%;
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1] {
    margin-right: auto;
    margin-top: 8%;
    width: 65.8%;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img1] {
  margin-right: auto;
  margin-top: 8%;
  width: 65.8%;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 74%;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2] {
    width: 22%;
    margin-left: 10%;
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2] {
    width: 39.5%;
    margin-left: auto;
    margin-right: 13%;
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img2] {
  width: 39.5%;
  margin-left: auto;
  margin-right: 13%;
  margin-bottom: var(--margin_between_actual);
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 71%;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3] {
    width: 33%;
    margin-top: 6%;
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3] {
    width: 43.4%;
    margin-top: 2%;
    margin-right: auto;
    margin-left: 14%;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img3] {
  width: 43.4%;
  margin-top: 2%;
  margin-right: auto;
  margin-left: 14%;
}
.layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 70%;
  }
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 68%;
  }
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 68%;
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4] {
    width: 33%;
    margin-right: 3%;
  }
}
@media ( max-width: 650px ) {
  .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4] {
    width: 55.6%;
    margin-right: 0;
    margin-bottom: var(--margin_between_actual);
    margin-left: auto;
  }
}
.force-mobile-view * .layout-73847ead4f0c0eb6ea210d9d6acfddc3 [data-assetid=img4] {
  width: 55.6%;
  margin-right: 0;
  margin-bottom: var(--margin_between_actual);
  margin-left: auto;
}

/*
 * dynamic-photo-grid-quadruple-6
 */
.layout-93f45c80246a2ee92a28847d3a666308 {
  background: var(--colorfrmt1);
  display: flex;
  flex-direction: column;
}
.layout-93f45c80246a2ee92a28847d3a666308 .inner-wrap {
  width: 100%;
  display: grid;
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 .inner-wrap {
    grid-template-areas: "img1 img2" "img1 img4" "img3 img4";
    grid-template-rows: 35% 20% 45%;
    grid-template-columns: 54% 46%;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 .inner-wrap {
    grid-template-areas: "img2 img2" "img1 img4" "img3 img3";
    grid-template-rows: auto;
    grid-template-columns: auto;
    row-gap: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 .inner-wrap {
  grid-template-areas: "img2 img2" "img1 img4" "img3 img3";
  grid-template-rows: auto;
  grid-template-columns: auto;
  row-gap: var(--margin_between_actual);
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1] {
  grid-area: img1;
  height: fit-content;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 144%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 140%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1] {
    margin: auto auto var(--margin_between_actual);
    width: 32.7%;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1] {
    margin: 0;
    margin-top: 9%;
    width: 78.2%;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img1] {
  margin: 0;
  margin-top: 9%;
  width: 78.2%;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2] {
  grid-area: img2;
  height: auto;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2] {
    width: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2] {
    margin-left: auto;
    width: 59.3%;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img2] {
  margin-left: auto;
  width: 59.3%;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3] {
  grid-area: img3;
  height: auto;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 90%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 70%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3] {
    margin-top: 5%;
    width: 97.3%;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3] {
    margin-top: 4%;
    width: 73%;
    margin-left: 10%;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img3] {
  margin-top: 4%;
  width: 73%;
  margin-left: 10%;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4] {
  grid-area: img4;
  height: fit-content;
}
.layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 145%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 144%;
  }
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 144%;
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4] {
    margin-top: calc(var(--margin_between_actual) + 6%);
    margin-left: auto;
    margin-right: 15%;
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4] {
    margin-top: 90%;
    width: 81.3%;
  }
}
.force-mobile-view * .layout-93f45c80246a2ee92a28847d3a666308 [data-assetid=img4] {
  margin-top: 90%;
  width: 81.3%;
}

/*
 * dynamic-photo-grid-quadruple-7
 */
.layout-0ba2750f8215c4fe03e9a38e5e34a118 {
  background: var(--colorfrmt1);
  display: flex;
  flex-direction: column;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
@media ( max-width: 650px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 .inner-wrap {
    padding: 0;
    align-items: center;
  }
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 .inner-wrap {
  padding: 0;
  align-items: center;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 .inner-wrap:first-child {
  margin-bottom: var(--margin_between_actual);
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1], .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img3] {
  margin-right: var(--margin_between_actual);
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid] {
  height: auto !important;
}
@media ( max-width: 650px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid] {
    height: 100% !important;
  }
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid] {
  height: 100% !important;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1] {
  width: 37%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 68%;
  }
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 134%;
  }
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 134%;
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img2] {
  width: 73%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 68%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img3] {
  width: 73%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 68%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4] {
  width: 37%;
}
.layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 68%;
  }
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 134%;
  }
  .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 134%;
}
.force-mobile-view * .layout-0ba2750f8215c4fe03e9a38e5e34a118 [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-image-quadruple-1
 */
.layout-e79225675c550693f71c83a65bcb0fe1 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-e79225675c550693f71c83a65bcb0fe1 .inner-wrap {
  position: relative;
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .inner-wrap {
    height: 100%;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .inner-wrap {
    height: auto;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .inner-wrap {
  height: auto;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row {
  width: 100%;
  display: flex;
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row {
    margin-bottom: auto;
    position: relative;
    flex-wrap: wrap;
    height: auto;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row {
  margin-bottom: auto;
  position: relative;
  flex-wrap: wrap;
  height: auto;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:first-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child {
  bottom: 0;
  top: auto;
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child {
    margin-top: 8px;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child {
    margin-top: 0;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child {
  margin-top: 0;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
  margin-right: var(--margin_between_actual);
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
    margin-left: auto;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img3] {
  margin-left: auto;
}
.layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 .row:last-child [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-e79225675c550693f71c83a65bcb0fe1 [data-tokenid=text4] {
  margin-left: 0;
}
@media ( min-width: 651px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 [data-tokenid=text4] {
    flex: 1;
    margin: 24px 64px 0 0;
  }
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 [data-tokenid=text4] {
    flex: auto;
    width: 100%;
    margin: 10% 64px 0 0;
    padding: 0 0 10% 3%;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 [data-tokenid=text4] {
  flex: auto;
  width: 100%;
  margin: 10% 64px 0 0;
  padding: 0 0 10% 3%;
}
.layout-e79225675c550693f71c83a65bcb0fe1 [data-assetid] {
  --max_proportions: 1.5;
}
@media ( max-width: 650px ) {
  .layout-e79225675c550693f71c83a65bcb0fe1 [data-assetid] {
    height: 25%;
  }
}
.force-mobile-view * .layout-e79225675c550693f71c83a65bcb0fe1 [data-assetid] {
  height: 25%;
}

/*
 * dynamic-text-image-quadruple-2
 */
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f .inner-wrap {
  display: flex;
  flex-wrap: wrap;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f .inner-wrap {
    justify-content: flex-end;
    align-items: flex-end;
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f .inner-wrap {
    justify-content: space-between;
    aspect-ratio: 0;
    height: auto;
    display: grid;
    grid-template-columns: 50%;
    grid-template-areas: "hideblock text4" "hideblock text4" "img1 text4" "img2 text4" "img3 img4";
    column-gap: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f .inner-wrap {
  justify-content: space-between;
  aspect-ratio: 0;
  height: auto;
  display: grid;
  grid-template-columns: 50%;
  grid-template-areas: "hideblock text4" "hideblock text4" "img1 text4" "img2 text4" "img3 img4";
  column-gap: var(--margin_between_actual);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f .hideblock {
  display: none;
  grid-area: hideblock;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-tokenid=text4] {
  grid-area: text4;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-tokenid=text4] {
    width: 64%;
    align-self: flex-end;
    padding: 0 0 16px 8px;
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-tokenid=text4] {
    width: calc(100% - var(--margin_between_actual) / 2);
    padding: 3% 10% 3% 3%;
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-tokenid=text4] {
  width: calc(100% - var(--margin_between_actual) / 2);
  padding: 3% 10% 3% 3%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid] {
  height: auto;
  --max_proportions: 0.67;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid] {
    width: calc(33.333% - var(--margin_between_actual) * 2 / 3);
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid] {
    width: 100%;
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid] {
  width: 100%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1] {
  grid-area: img1;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1] {
    margin-right: auto;
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1] {
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img1] {
  margin-bottom: var(--margin_between_actual);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2] {
  grid-area: img2;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2] {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2] {
    margin-right: 0;
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img2] {
  margin-right: 0;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3] {
  grid-area: img3;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3] {
    margin-top: var(--margin_between_actual);
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3] {
    margin-top: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img3] {
  margin-top: var(--margin_between_actual);
  margin-right: 0;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img4] {
  grid-area: img4;
  margin-top: var(--margin_between_actual);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 70%;
}
.layout-ca6deee0cf74bdd3f1cb77ee0cc69c1f [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * dynamic-text-image-quadruple-3
 */
.layout-b564dda943c4e949225bc76fdd629b46 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-b564dda943c4e949225bc76fdd629b46 .inner-wrap {
  width: 100%;
  position: relative;
  display: inline-flex;
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .inner-wrap {
    height: auto;
    flex-direction: column;
    padding: 3% 3% 0;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .inner-wrap {
  height: auto;
  flex-direction: column;
  padding: 3% 3% 0;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row {
  display: flex;
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row {
    width: calc(50% - var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row {
    width: 100%;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row {
  width: 100%;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1] {
  margin-right: var(--margin_between_actual);
  min-width: auto !important;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2] {
  min-width: auto !important;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:first-child {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4] {
  min-width: auto !important;
}
.layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 .row:last-child [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-b564dda943c4e949225bc76fdd629b46 [data-tokenid=text4] {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 [data-tokenid=text4] {
    flex: 1;
    margin: 3% 0 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 [data-tokenid=text4] {
    flex: auto;
    margin: 0;
    padding: 4%;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 [data-tokenid=text4] {
  flex: auto;
  margin: 0;
  padding: 4%;
}
.layout-b564dda943c4e949225bc76fdd629b46 [data-assetid] {
  --max_proportions: 1.5;
}
@media ( max-width: 650px ) {
  .layout-b564dda943c4e949225bc76fdd629b46 [data-assetid] {
    height: 25%;
  }
}
.force-mobile-view * .layout-b564dda943c4e949225bc76fdd629b46 [data-assetid] {
  height: 25%;
}

/*
 * dynamic-text-image-quadruple-4
 */
.layout-86988048e70b311f55b44093a9964ea6 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-86988048e70b311f55b44093a9964ea6 .inner-wrap {
  width: 100%;
  position: relative;
  display: inline-flex;
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .inner-wrap {
    height: auto;
    flex-direction: column;
    padding: 0 4.5%;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .inner-wrap {
  height: auto;
  flex-direction: column;
  padding: 0 4.5%;
}
.layout-86988048e70b311f55b44093a9964ea6 .row {
  display: flex;
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row {
    width: calc(50% - var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row {
    width: 100%;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row {
  width: 100%;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2] {
  min-width: auto !important;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child {
    margin-right: var(--margin_between_actual);
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:first-child {
    margin-bottom: var(--margin_between_actual);
    margin-right: 0;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:first-child {
  margin-bottom: var(--margin_between_actual);
  margin-right: 0;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4] {
  min-width: auto !important;
}
.layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4] {
    width: calc(0.25 * var(--width-edge-without-padding));
    min-width: calc(0.25 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4] {
    width: calc(0.5 * var(--width-edge-without-padding));
    min-width: calc(0.5 * var(--width-edge-without-padding));
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 66.6%;
  }
  .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 .row:last-child [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-86988048e70b311f55b44093a9964ea6 [data-tokenid=text4] {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-86988048e70b311f55b44093a9964ea6 [data-tokenid=text4] {
    flex: 1;
    margin: 3% 0 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 [data-tokenid=text4] {
    flex: auto;
    margin: 0;
    padding: 4%;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 [data-tokenid=text4] {
  flex: auto;
  margin: 0;
  padding: 4%;
}
.layout-86988048e70b311f55b44093a9964ea6 [data-assetid] {
  --max_proportions: 1.5;
}
@media ( max-width: 650px ) {
  .layout-86988048e70b311f55b44093a9964ea6 [data-assetid] {
    height: 25%;
  }
}
.force-mobile-view * .layout-86988048e70b311f55b44093a9964ea6 [data-assetid] {
  height: 25%;
}

/*
 * dynamic-text-image-quadruple-5
 */
.layout-7137756138cbadfe0b55c7652f1593c5 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-7137756138cbadfe0b55c7652f1593c5 .inner-wrap {
  width: 100%;
  position: relative;
  display: inline-flex;
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .inner-wrap {
    height: auto;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .inner-wrap {
  height: auto;
  flex-direction: column;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row {
  display: flex;
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row {
    width: 100%;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row {
  width: 100%;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1] {
    width: calc(0.39 * var(--width-edge-without-padding));
    min-width: calc(0.39 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1] {
  width: calc(0.39 * var(--width-edge-without-padding));
  min-width: calc(0.39 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
  min-width: auto !important;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
    width: calc(0.588 * var(--width-edge-without-padding));
    min-width: calc(0.588 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
  width: calc(0.588 * var(--width-edge-without-padding));
  min-width: calc(0.588 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
    margin-right: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
    margin-right: 0;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child [data-assetid=img2] {
  margin-right: 0;
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child {
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:first-child {
  margin-bottom: var(--margin_between_actual);
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
    width: calc(0.588 * var(--width-edge-without-padding));
    min-width: calc(0.588 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
  width: calc(0.588 * var(--width-edge-without-padding));
  min-width: calc(0.588 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
    margin-left: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
    margin-left: 0;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img3] {
  margin-left: 0;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4] {
  min-width: auto !important;
}
.layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4] {
    width: calc(0.39 * var(--width-edge-without-padding));
    min-width: calc(0.39 * var(--width-edge-without-padding));
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 150%;
  }
  .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4] {
  width: calc(0.39 * var(--width-edge-without-padding));
  min-width: calc(0.39 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 .row:last-child [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-7137756138cbadfe0b55c7652f1593c5 [data-tokenid=text4] {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 [data-tokenid=text4] {
    flex: 1;
    margin: 3% 0 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-7137756138cbadfe0b55c7652f1593c5 [data-tokenid=text4] {
    flex: auto;
    margin: 0;
    padding: 4%;
  }
}
.force-mobile-view * .layout-7137756138cbadfe0b55c7652f1593c5 [data-tokenid=text4] {
  flex: auto;
  margin: 0;
  padding: 4%;
}

/*
 * dynamic-text-image-quadruple-6
 */
.layout-5b2af287ec6574eba0179bab3adb3974 {
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-5b2af287ec6574eba0179bab3adb3974 .inner-wrap {
  width: 100%;
  position: relative;
  display: inline-flex;
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .inner-wrap {
    height: auto;
    flex-direction: column;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .inner-wrap {
  height: auto;
  flex-direction: column;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row {
  display: flex;
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row {
    width: 50%;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row {
    width: 100%;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row {
  width: 100%;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
  min-width: auto !important;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::before {
    content: "";
    float: left;
    padding-top: 66%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66%;
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
    margin-right: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
    margin-right: 0;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child [data-assetid=img2] {
  margin-right: 0;
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child {
    margin-bottom: var(--margin_between_actual);
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:first-child {
  margin-bottom: var(--margin_between_actual);
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
  min-width: auto !important;
  margin-right: var(--margin_between_actual);
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
    width: calc(0.3 * var(--width-edge-without-padding));
    min-width: calc(0.3 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
    width: calc(0.6 * var(--width-edge-without-padding));
    min-width: calc(0.6 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::before {
    content: "";
    float: left;
    padding-top: 66%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66%;
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
    margin-left: calc(var(--margin_between_actual) / 2);
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
    margin-left: 0;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img3] {
  margin-left: 0;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4] {
  min-width: auto !important;
}
.layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4] > img {
  object-fit: cover;
  object-position: var(--img4_offset_x) var(--img4_offset_y);
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4] {
    width: calc(0.2 * var(--width-edge-without-padding));
    min-width: calc(0.2 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4] {
    width: calc(0.4 * var(--width-edge-without-padding));
    min-width: calc(0.4 * var(--width-edge-without-padding));
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::after {
    content: "";
    display: block;
    clear: both;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 .row:last-child [data-assetid=img4]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-5b2af287ec6574eba0179bab3adb3974 [data-tokenid=text4] {
  width: 100%;
}
@media ( min-width: 651px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 [data-tokenid=text4] {
    flex: 1;
    margin: 3% 0 1% 0;
  }
}
@media ( max-width: 650px ) {
  .layout-5b2af287ec6574eba0179bab3adb3974 [data-tokenid=text4] {
    flex: auto;
    margin: 0;
    padding: 4%;
  }
}
.force-mobile-view * .layout-5b2af287ec6574eba0179bab3adb3974 [data-tokenid=text4] {
  flex: auto;
  margin: 0;
  padding: 4%;
}

/*
 * single-sl1
 */
.layout-4dfa59c310e041d2076c1992be594740 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-4dfa59c310e041d2076c1992be594740 .inner-wrap {
  width: 100%;
  padding: 0 22%;
}
.force-mobile-view * .layout-4dfa59c310e041d2076c1992be594740 .inner-wrap {
  padding: 0;
}
.layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1] {
  width: calc(0.381 * var(--width-edge-without-padding));
  min-width: calc(0.381 * var(--width-edge-without-padding));
}
.layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1] {
  width: calc(0.75 * var(--width-edge-without-padding));
  min-width: calc(0.75 * var(--width-edge-without-padding));
  padding: 0;
}
.force-mobile-view * .layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-4dfa59c310e041d2076c1992be594740 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl2
 */
.layout-1f1a72626a467604137c99b0b9763527 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-1f1a72626a467604137c99b0b9763527 .inner-wrap {
  width: 100%;
}
.layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1] {
  width: calc(0.78 * var(--width-edge-without-padding));
  min-width: calc(0.78 * var(--width-edge-without-padding));
}
.layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  padding: 0;
}
.force-mobile-view * .layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-1f1a72626a467604137c99b0b9763527 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl3
 */
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 .inner-wrap {
  width: 100%;
}
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1] {
  width: calc(0.51 * var(--width-edge-without-padding));
  min-width: calc(0.51 * var(--width-edge-without-padding));
}
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  padding: 0;
}
.force-mobile-view * .layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-d9b7306bbb262fce0f9999f55b0ecbd9 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl4
 */
.layout-13a7d9a8dc73bd3d66820064b2a728d6 {
  display: flex;
  background: var(--colorfrmt1);
}
.layout-13a7d9a8dc73bd3d66820064b2a728d6 .inner-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 14%;
}
.force-mobile-view * .layout-13a7d9a8dc73bd3d66820064b2a728d6 .inner-wrap {
  padding-left: 16%;
}
.layout-13a7d9a8dc73bd3d66820064b2a728d6 [data-assetid=img1] {
  height: 100%;
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
}
.layout-13a7d9a8dc73bd3d66820064b2a728d6 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-13a7d9a8dc73bd3d66820064b2a728d6 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-13a7d9a8dc73bd3d66820064b2a728d6 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-13a7d9a8dc73bd3d66820064b2a728d6 [data-assetid=img1] {
  height: auto;
}

/*
 * single-sl7
 */
.layout-adfbd503b47cb49a8e688926a8731d7a {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-adfbd503b47cb49a8e688926a8731d7a .inner-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  height: 100%;
  aspect-ratio: 7/4;
  background-size: 38% 100%;
  background-position: 40%;
}
.force-mobile-view * .layout-adfbd503b47cb49a8e688926a8731d7a .inner-wrap {
  height: auto;
  background-position: 29%;
  aspect-ratio: 7/8;
  background-size: 64% 85%;
}
.layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1] {
  width: calc(0.45 * var(--width-edge-without-padding));
  min-width: calc(0.45 * var(--width-edge-without-padding));
  margin-left: 10%;
}
.layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1] {
  width: calc(0.7 * var(--width-edge-without-padding));
  min-width: calc(0.7 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-adfbd503b47cb49a8e688926a8731d7a [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl8
 */
.layout-d9a828bb0703a91d61c5901c9d6b7d59 {
  display: flex;
  justify-content: space-between;
  background: var(--colorfrmt1);
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 {
  flex-direction: column;
  align-items: center;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
  height: 100%;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1] {
  width: calc(0.68 * var(--width-edge-without-padding));
  min-width: calc(0.68 * var(--width-edge-without-padding));
  height: 52%;
  margin-right: 0;
  margin-bottom: var(--margin_between);
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2] {
  width: calc(0.23 * var(--width-edge-without-padding));
  min-width: calc(0.23 * var(--width-edge-without-padding));
  margin: auto;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2] {
  width: calc(0.49 * var(--width-edge-without-padding));
  min-width: calc(0.49 * var(--width-edge-without-padding));
  height: 40%;
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-d9a828bb0703a91d61c5901c9d6b7d59 .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl11
 */
.layout-0c6f908218711028aa4390d5f728b275 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-0c6f908218711028aa4390d5f728b275 .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 .inner-wrap {
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1], .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2] {
  height: auto;
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-0c6f908218711028aa4390d5f728b275 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl13
 */
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 .inner-wrap {
  padding: 15% 0 15% 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1] {
  width: calc(0.23 * var(--width-edge-without-padding));
  min-width: calc(0.23 * var(--width-edge-without-padding));
  height: auto;
  aspect-ratio: 8/5;
  margin-bottom: 23%;
  margin-right: var(--margin_between);
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
  margin-right: auto;
  margin-bottom: var(--margin_between);
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2] {
  width: calc(0.55 * var(--width-edge-without-padding));
  min-width: calc(0.55 * var(--width-edge-without-padding));
  margin-top: 20%;
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2] {
  width: calc(0.68 * var(--width-edge-without-padding));
  min-width: calc(0.68 * var(--width-edge-without-padding));
  margin-left: auto;
  margin-top: 0;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-cb0cd7aea5b4e1b2a87bab1ffe85bb54 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl15
 */
.layout-851eff3cd4f3cfa81457be752c859346 {
  display: inline-flex;
  align-items: center;
  background-color: var(--colorfrmt1);
}
.layout-851eff3cd4f3cfa81457be752c859346 .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
  padding: 0 8%;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 .inner-wrap {
  padding: 0;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1], .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2], .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3] {
  height: auto;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-851eff3cd4f3cfa81457be752c859346 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl17
 */
.layout-2c29f707c3c503a25cdab929f4458972 {
  display: flex;
  background: var(--colorfrmt1);
}
.force-mobile-view * .layout-2c29f707c3c503a25cdab929f4458972 {
  flex-direction: column;
}
.layout-2c29f707c3c503a25cdab929f4458972 .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  row-gap: var(--margin_between_actual);
  grid-template-columns: calc(65% - var(--margin_between_actual) / 2) calc(35% - var(--margin_between_actual) / 2);
  grid-template-rows: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
}
.force-mobile-view * .layout-2c29f707c3c503a25cdab929f4458972 .inner-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 0;
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img1] {
  grid-area: img1;
  width: calc(0.485 * var(--width-edge-without-padding) - var(--margin_between_actual));
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img1] {
  width: calc(73% - var(--margin_between_actual) / 1.5);
  margin-right: auto;
  margin-bottom: var(--margin_between_actual);
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img2] {
  grid-area: img2;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img2] {
  width: calc(53% - var(--margin_between_actual) / 1.5);
  margin-left: auto;
  margin-top: 0;
  margin-bottom: var(--margin_between_actual);
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img3] {
  grid-area: img3;
  margin-left: auto;
  width: calc(0.485 * var(--width-edge-without-padding) - var(--margin_between_actual));
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2c29f707c3c503a25cdab929f4458972 [data-assetid=img3] {
  width: calc(73% - var(--margin_between_actual) / 1.5);
  margin-right: auto;
}

/*
 * single-sl16
 */
.layout-2ff93885013833edd92392e6ab7e0c11 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-2ff93885013833edd92392e6ab7e0c11 .inner-wrap {
  display: flex;
  align-items: center;
  justify-content: end;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-size: 40% 100%;
  aspect-ratio: 7/4;
  background-position: 82%;
}
.force-mobile-view * .layout-2ff93885013833edd92392e6ab7e0c11 .inner-wrap {
  height: auto;
  background-size: 60% 100%;
  background-position: 100%;
  aspect-ratio: 7/6;
}
.layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1] {
  width: calc(0.71 * var(--width-edge-without-padding));
  min-width: calc(0.71 * var(--width-edge-without-padding));
  margin-right: 18%;
}
.layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1] {
  width: calc(0.9 * var(--width-edge-without-padding));
  min-width: calc(0.9 * var(--width-edge-without-padding));
  margin-right: 10%;
}
.force-mobile-view * .layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-2ff93885013833edd92392e6ab7e0c11 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl18
 */
.layout-43326f677bbc6b2e7953251306a26f2e {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.force-mobile-view * .layout-43326f677bbc6b2e7953251306a26f2e {
  justify-content: center;
}
.layout-43326f677bbc6b2e7953251306a26f2e .inner-wrap {
  display: flex;
  width: 77%;
  height: 100%;
  padding: 4%;
  border: 1px solid var(--colorfrmt4);
}
.force-mobile-view * .layout-43326f677bbc6b2e7953251306a26f2e .inner-wrap {
  height: auto;
}
.layout-43326f677bbc6b2e7953251306a26f2e .layout-column {
  width: 100%;
}
.layout-43326f677bbc6b2e7953251306a26f2e .text-block {
  justify-content: space-between;
  text-align: center;
}
.layout-43326f677bbc6b2e7953251306a26f2e [data-assetid=img1] {
  width: 100%;
  height: 100%;
}
.layout-43326f677bbc6b2e7953251306a26f2e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-43326f677bbc6b2e7953251306a26f2e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-43326f677bbc6b2e7953251306a26f2e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-43326f677bbc6b2e7953251306a26f2e [data-tokenid=text1] {
  margin: 0px 32px 12px 32px;
}

/*
 * single-sl20
 */
.layout-dc45189beb2c18923e9f50a7da7ee519 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-dc45189beb2c18923e9f50a7da7ee519 .layout-column {
  width: 100%;
}
.layout-dc45189beb2c18923e9f50a7da7ee519 .text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 6%;
  margin-top: 0;
}
.layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1] {
  width: calc(0.52 * var(--width-edge-without-padding));
  min-width: calc(0.52 * var(--width-edge-without-padding));
  height: auto;
  margin-bottom: 2%;
}
.layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-dc45189beb2c18923e9f50a7da7ee519 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-dc45189beb2c18923e9f50a7da7ee519 [data-tokenid=text2] {
  margin-top: 2%;
}

/*
 * single-sl21
 */
.layout-440603d0fff7c5cc570d40c28cae6bcf {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-440603d0fff7c5cc570d40c28cae6bcf .layout-column {
  width: 100%;
}
.layout-440603d0fff7c5cc570d40c28cae6bcf [data-tokenid=text1] {
  margin-bottom: 2%;
}
.layout-440603d0fff7c5cc570d40c28cae6bcf .text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 6%;
  margin-top: 0;
}
.layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1] {
  width: calc(0.44 * var(--width-edge-without-padding));
  min-width: calc(0.44 * var(--width-edge-without-padding));
  height: auto;
}
.layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 100%;
}
.force-mobile-view * .layout-440603d0fff7c5cc570d40c28cae6bcf [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-440603d0fff7c5cc570d40c28cae6bcf [data-tokenid=text2] {
  margin-top: 2px;
}

.layout-440603d0fff7c5cc570d40c28cae6bcf::before {
  display: none !important;
}

/*
 * single-sl25
 */
.layout-219e3b9c47eb5f088fa730bda651a015 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-219e3b9c47eb5f088fa730bda651a015 .slide-conteiner {
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: row;
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 .slide-conteiner {
  width: 85%;
  flex-direction: column;
}
.layout-219e3b9c47eb5f088fa730bda651a015 .layout-column {
  width: 100%;
}
.layout-219e3b9c47eb5f088fa730bda651a015 [data-tokenid=text1] {
  margin-top: 2%;
}
.layout-219e3b9c47eb5f088fa730bda651a015 .text-block {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  padding-right: 2%;
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 .text-block {
  margin-bottom: 5%;
}
.layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1] {
  width: calc(0.68 * var(--width-edge-without-padding));
  min-width: calc(0.68 * var(--width-edge-without-padding));
  height: 100%;
}
.layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  height: fit-content;
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-219e3b9c47eb5f088fa730bda651a015 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl26
 */
.layout-ca91389ae9752132a4969ab32a032cc9 {
  display: inline-flex;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
  align-items: baseline;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 {
  justify-content: center;
  align-items: center;
}
.layout-ca91389ae9752132a4969ab32a032cc9 .inner-wrap {
  position: relative;
  display: flex;
  align-items: center;
  background-image: linear-gradient(var(--colorfrmt3), var(--colorfrmt3));
  background-repeat: no-repeat;
  width: 100%;
  background-position: bottom right;
  justify-content: flex-end;
  background-size: 35% 100%;
  margin-right: 4%;
  aspect-ratio: 6/3;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 .inner-wrap {
  background-position: 100% 52%;
  justify-content: center;
  background-size: 60% 85%;
  aspect-ratio: 7/7;
  margin-right: 0;
}
.layout-ca91389ae9752132a4969ab32a032cc9 .layout-column {
  position: absolute;
  width: 100%;
  padding-left: 10%;
  height: 100%;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 .layout-column {
  padding-left: 0;
  height: 120%;
}
.layout-ca91389ae9752132a4969ab32a032cc9 .text-block {
  justify-content: space-between;
  align-items: flex-start;
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-tokenid=text1] {
  word-break: break-word;
  position: relative;
  width: 67%;
  height: 16%;
  padding-right: 37%;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-tokenid=text1] {
  width: 100%;
  height: auto;
  margin-top: 10%;
  bottom: 0;
  padding-right: 0;
}
.layout-ca91389ae9752132a4969ab32a032cc9 .text-body {
  width: inherit;
  position: absolute;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 .text-body {
  width: auto;
  position: relative;
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-tokenid=text2] {
  word-break: break-word;
  width: 100%;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-tokenid=text2] {
  margin-bottom: 10%;
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
  margin-right: 5%;
  height: 80%;
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  height: auto;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-ca91389ae9752132a4969ab32a032cc9 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl30
 */
.layout-b3c2ea969f33f7415710b4d36d323b23 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-b3c2ea969f33f7415710b4d36d323b23 .slide-block {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
}
.force-mobile-view * .layout-b3c2ea969f33f7415710b4d36d323b23 .slide-block {
  width: 65%;
  height: 35%;
}
.layout-b3c2ea969f33f7415710b4d36d323b23 .text-wrap {
  margin-top: 2%;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 8%;
  word-break: break-word;
}
.layout-b3c2ea969f33f7415710b4d36d323b23 .logo-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-b3c2ea969f33f7415710b4d36d323b23 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  height: 30%;
}
.force-mobile-view * .layout-b3c2ea969f33f7415710b4d36d323b23 [data-assetid=logo1] {
  width: 50%;
  height: 50%;
}
.layout-b3c2ea969f33f7415710b4d36d323b23 [data-assetid=img1] {
  background-image: var(--img1_url);
  background-position: var(--img1_offset_x) var(--img1_offset_y);
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 15%;
  height: auto !important;
  aspect-ratio: 7/7;
  width: 20%;
}
.force-mobile-view * .layout-b3c2ea969f33f7415710b4d36d323b23 [data-assetid=img1] {
  aspect-ratio: 7/5;
  width: 32%;
}

/*
 * single-sl31
 */
.layout-1d642e77540e6ad8d3eedd404db8b898 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-1d642e77540e6ad8d3eedd404db8b898 .slide-block {
  border: 1px solid var(--colorfrmt4);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
}
.layout-1d642e77540e6ad8d3eedd404db8b898 .text-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  word-break: break-word;
  margin-top: 5%;
  padding: 0 5%;
}
.force-mobile-view * .layout-1d642e77540e6ad8d3eedd404db8b898 .text-wrap {
  margin-top: 0;
  padding: 10% 5% 20% 5%;
}
.layout-1d642e77540e6ad8d3eedd404db8b898 .slide-conteiner {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 7%;
  height: 100%;
}
.force-mobile-view * .layout-1d642e77540e6ad8d3eedd404db8b898 .slide-conteiner {
  width: 100%;
  padding: 0 5%;
  height: auto;
}
.layout-1d642e77540e6ad8d3eedd404db8b898 .logo-wrap {
  border-bottom: 1px solid var(--colorfrmt4);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
}
.force-mobile-view * .layout-1d642e77540e6ad8d3eedd404db8b898 .logo-wrap {
  height: auto;
}
.layout-1d642e77540e6ad8d3eedd404db8b898 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 50%;
  height: 50%;
}
.force-mobile-view * .layout-1d642e77540e6ad8d3eedd404db8b898 [data-assetid=logo1] {
  aspect-ratio: 7/4;
}

/*
 * single-sl32
 */
.layout-10ee1d2bbab5d4236502c64f4af1814f {
  display: flex;
  justify-content: space-between;
  background: var(--colorfrmt1);
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f {
  flex-direction: column;
  align-items: center;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
  height: 100%;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  height: 60%;
  margin-right: 0;
  margin-bottom: var(--margin_between);
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2] {
  width: calc(0.3 * var(--width-edge-without-padding));
  min-width: calc(0.3 * var(--width-edge-without-padding));
  margin: auto;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2] {
  width: calc(0.5 * var(--width-edge-without-padding));
  min-width: calc(0.5 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-10ee1d2bbab5d4236502c64f4af1814f .slide-asset[data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl33
 */
.layout-cb4643459f1f08b58fe3493ff51de280 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-cb4643459f1f08b58fe3493ff51de280 .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 .inner-wrap {
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
  height: fit-content;
  margin-right: var(--margin_between);
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1] {
  width: calc(0.65 * var(--width-edge-without-padding));
  min-width: calc(0.65 * var(--width-edge-without-padding));
  margin-right: auto;
  margin-bottom: var(--margin_between);
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
  height: auto;
  margin-top: 20%;
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2] {
  width: calc(0.93 * var(--width-edge-without-padding));
  min-width: calc(0.93 * var(--width-edge-without-padding));
  margin-left: auto;
  margin-top: 35%;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-cb4643459f1f08b58fe3493ff51de280 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl34
 */
.layout-380d20d0f53e0259945475ad645f5ebc {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-380d20d0f53e0259945475ad645f5ebc .layout-column {
  width: 100%;
}
.layout-380d20d0f53e0259945475ad645f5ebc [data-tokenid=text1] {
  margin-bottom: 2%;
}
.layout-380d20d0f53e0259945475ad645f5ebc .text-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 3%;
  margin-top: 0;
}
.layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1] {
  width: calc(0.344 * var(--width-edge-without-padding));
  min-width: calc(0.344 * var(--width-edge-without-padding));
  height: auto;
}
.layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1] {
  width: calc(0.6 * var(--width-edge-without-padding));
  min-width: calc(0.6 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 140%;
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc [data-tokenid=text2] {
  margin-top: 2px;
}
.force-mobile-view * .layout-380d20d0f53e0259945475ad645f5ebc .text-block {
  margin-bottom: 5%;
}

/*
 * single-sl35
 */
.layout-47a2aaf23474bde372dfeb31a3244ad0 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 .inner-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 .inner-wrap {
  padding: 8% 0 8% 0;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1] {
  width: calc(0.368 * var(--width-edge-without-padding));
  min-width: calc(0.368 * var(--width-edge-without-padding));
  height: auto;
  margin-bottom: 12%;
  margin-right: var(--margin_between_actual);
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1] {
  width: calc(0.55 * var(--width-edge-without-padding));
  min-width: calc(0.55 * var(--width-edge-without-padding));
  margin-left: 8%;
  margin-right: auto;
  margin-bottom: var(--margin_between_actual);
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2] {
  width: calc(0.314 * var(--width-edge-without-padding));
  min-width: calc(0.314 * var(--width-edge-without-padding));
  height: auto;
  margin-top: 20%;
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2] {
  width: calc(0.45 * var(--width-edge-without-padding));
  min-width: calc(0.45 * var(--width-edge-without-padding));
  margin-left: auto;
  margin-right: 8%;
  margin-top: 0;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-47a2aaf23474bde372dfeb31a3244ad0 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl36
 */
.layout-0c4caff763c91fe51d99453455a9c33e {
  display: flex;
  background: var(--colorfrmt1);
}
.layout-0c4caff763c91fe51d99453455a9c33e .inner-wrap {
  width: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  row-gap: var(--margin_between_actual);
  grid-template-columns: calc(59% - var(--margin_between_actual) / 2) calc(41% - var(--margin_between_actual) / 2);
  grid-template-rows: calc(58% - var(--margin_between_actual) / 2) calc(42% - var(--margin_between_actual) / 2);
}
.force-mobile-view * .layout-0c4caff763c91fe51d99453455a9c33e .inner-wrap {
  grid-template-areas: "img1 img2" "img3 img3";
  grid-template-columns: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
  grid-template-rows: calc(65% - var(--margin_between_actual) / 2) calc(35% - var(--margin_between_actual) / 2);
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img1] {
  grid-area: img1;
  width: calc(0.304 * var(--width-edge-without-padding) - var(--margin_between_actual) / 1.5);
  margin-left: auto;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img1] {
  width: 100%;
  margin-bottom: 0;
  height: fit-content;
  margin-top: 27%;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img2] {
  grid-area: img2;
  width: calc(0.304 * var(--width-edge-without-padding) - var(--margin_between_actual) / 1.5);
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img2] {
  width: 100%;
  margin: auto 0 0 0;
  height: fit-content;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img3] {
  grid-area: img3;
  width: calc(0.454 * var(--width-edge-without-padding) - var(--margin_between_actual));
  margin-left: auto;
  margin-right: 10%;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-0c4caff763c91fe51d99453455a9c33e [data-assetid=img3] {
  width: 70%;
  height: fit-content;
  margin-right: auto;
  margin-left: 0;
}

/*
 * single-sl38
 */
.layout-1fb874c5060aec48c70472a7ba6c5718 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-1fb874c5060aec48c70472a7ba6c5718 .inner-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 .inner-wrap {
  height: 100%;
  flex-direction: column;
  align-items: center;
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
  height: auto;
  margin-right: var(--margin_between);
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1] {
  width: calc(0.7 * var(--width-edge-without-padding));
  min-width: calc(0.7 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
  height: auto;
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2] {
  width: calc(0.7 * var(--width-edge-without-padding));
  min-width: calc(0.7 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-1fb874c5060aec48c70472a7ba6c5718 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl39
 */
.layout-40730049da8d2801a2fb946a3fd2ef0c {
  display: inline-flex;
  align-items: center;
  background-color: var(--colorfrmt1);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c .inner-wrap {
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3] {
  width: calc(0.333 * var(--width-edge-without-padding));
  min-width: calc(0.333 * var(--width-edge-without-padding));
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3] {
  width: calc(0.85 * var(--width-edge-without-padding));
  min-width: calc(0.85 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-40730049da8d2801a2fb946a3fd2ef0c [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl40
 */
.layout-77411c5ac4ad94b22e05286e72502d2e {
  display: inline-flex;
  align-items: center;
  background-color: var(--colorfrmt1);
}
.layout-77411c5ac4ad94b22e05286e72502d2e .inner-wrap {
  width: 100%;
  display: flex;
  justify-content: center;
  background-repeat: no-repeat;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e .inner-wrap {
  flex-direction: column-reverse;
  align-items: center;
  height: 100%;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1] {
  width: calc(0.2 * var(--width-edge-without-padding));
  min-width: calc(0.2 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
  margin-right: var(--margin_between);
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
  margin-bottom: var(--margin_between);
  margin-right: 0;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3] {
  width: calc(0.4 * var(--width-edge-without-padding));
  min-width: calc(0.4 * var(--width-edge-without-padding));
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3] {
  width: calc(0.8 * var(--width-edge-without-padding));
  min-width: calc(0.8 * var(--width-edge-without-padding));
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.force-mobile-view * .layout-77411c5ac4ad94b22e05286e72502d2e [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}

/*
 * single-sl41
 */
.layout-8dcf64f787f75884d3a10d314c5efb48 {
  display: inline-flex;
  background: var(--colorfrmt1);
}
.force-mobile-view * .layout-8dcf64f787f75884d3a10d314c5efb48 {
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
  grid-template-rows: 50%;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img1] {
  height: auto;
  width: calc(0.35 * var(--width-edge-without-padding));
  margin-bottom: auto;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img1] {
  order: 1;
  grid-area: img1;
  width: 100%;
  height: fit-content;
  margin-bottom: auto;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img2] {
  height: auto;
  width: calc(0.35 * var(--width-edge-without-padding));
  margin-top: auto;
  margin-right: var(--margin_between_actual);
  margin-left: var(--margin_between_actual);
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img2] {
  order: 2;
  grid-area: img2;
  width: 100% !important;
  height: fit-content;
  margin: auto 0;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img3] {
  height: fit-content;
  width: calc(0.35 * var(--width-edge-without-padding));
  margin-top: calc(1% + var(--margin_between_actual) * 1.2);
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-8dcf64f787f75884d3a10d314c5efb48 [data-assetid=img3] {
  order: 3;
  grid-area: img3;
  width: 100%;
  height: fit-content;
  margin-top: auto;
}

/*
 * single-sl42
 */
.layout-2422f9d911b78827c956c0c9edd9cb75 {
  background: var(--colorfrmt1);
}
.layout-2422f9d911b78827c956c0c9edd9cb75 .inner-wrap {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "img1 img2" "img3 img2";
  row-gap: var(--margin_between_actual);
  column-gap: var(--margin_between_actual);
  grid-template-columns: calc(55% - var(--margin_between_actual) / 2) calc(45% - var(--margin_between_actual) / 2);
  grid-template-rows: calc(50% - var(--margin_between_actual) / 2) calc(50% - var(--margin_between_actual) / 2);
}
.force-mobile-view * .layout-2422f9d911b78827c956c0c9edd9cb75 .inner-wrap {
  display: inline-flex;
  flex-direction: column;
  row-gap: 0;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img1] {
  order: 1;
  grid-area: img1;
  margin-right: auto;
  margin-top: auto;
  height: inherit;
  width: calc(0.51 * var(--width-edge-without-padding) - var(--margin_between_actual));
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img1] {
  width: calc(83% - var(--margin_between_actual) / 2);
  margin: 0 auto 0 0;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img3] {
  order: 3;
  grid-area: img3;
  width: calc(0.51 * var(--width-edge-without-padding) - var(--margin_between_actual));
  margin-left: auto;
  height: inherit;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img3] > img {
  object-fit: cover;
  object-position: var(--img3_offset_x) var(--img3_offset_y);
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img3]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img3]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img3] {
  width: calc(83% - var(--margin_between_actual) / 2);
  margin: 0 auto 0 auto;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img2] {
  order: 2;
  grid-area: img2;
  height: fit-content;
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-2422f9d911b78827c956c0c9edd9cb75 [data-assetid=img2] {
  width: calc(83% - var(--margin_between_actual) / 2);
  height: inherit;
  margin: var(--margin_between_actual) 0 var(--margin_between_actual) auto;
}

/*
 * single-sl43
 */
.layout-c22ee6bdfc6af0a4f01b5da552e18198 {
  display: inline-flex;
  align-items: center;
  background: var(--colorfrmt1);
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 .inner-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10% 0;
}
.force-mobile-view * .layout-c22ee6bdfc6af0a4f01b5da552e18198 .inner-wrap {
  height: 100%;
  flex-direction: column;
  padding: 0 11.7%;
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img1] {
  width: calc(0.28 * var(--width-edge-without-padding));
  min-width: calc(0.28 * var(--width-edge-without-padding));
  height: inherit;
  margin-right: var(--margin_between_actual);
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img1] > img {
  object-fit: cover;
  object-position: var(--img1_offset_x) var(--img1_offset_y);
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img1]::before {
  content: "";
  float: left;
  padding-top: 150%;
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img1]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img1] {
  width: 100% !important;
  height: 70%;
  margin-right: 0;
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img2] {
  width: calc(0.72 * var(--width-edge-without-padding));
  min-width: calc(0.72 * var(--width-edge-without-padding));
  height: inherit;
  min-width: fit-content !important;
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img2] > img {
  object-fit: cover;
  object-position: var(--img2_offset_x) var(--img2_offset_y);
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img2]::before {
  content: "";
  float: left;
  padding-top: 66.6%;
}
.layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img2]::after {
  content: "";
  display: block;
  clear: both;
}
.force-mobile-view * .layout-c22ee6bdfc6af0a4f01b5da552e18198 [data-assetid=img2] {
  width: 100% !important;
  height: 30%;
  margin-top: var(--margin_between_actual);
}

/*
 * double-horizontal-cover
 */
.layout-835947b573acc3fc1b6f689c244de1fc {
  width: 100%;
  height: 100%;
  background: var(--colorfrmt1);
}
.layout-835947b573acc3fc1b6f689c244de1fc .slide-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.layout-835947b573acc3fc1b6f689c244de1fc .slide-asset {
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.layout-835947b573acc3fc1b6f689c244de1fc .slide-asset:first-child {
  top: 3%;
  right: 3%;
  width: 65%;
  height: calc(60% - var(--margin_between));
}
.layout-835947b573acc3fc1b6f689c244de1fc .slide-asset:last-child {
  bottom: 3%;
  left: 3%;
  width: 52%;
  height: calc(45% - var(--margin_between));
}

/*
 * double-horizontal-cover
 */
.layout-1776a034039acc7f7e7c6ac0be46dd02 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background: var(--colorfrmt1);
}
.layout-1776a034039acc7f7e7c6ac0be46dd02 .slide-asset {
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-1776a034039acc7f7e7c6ac0be46dd02 .slide-asset:last-child {
  margin-top: var(--margin_between);
}

/*
 * double-horizontal-cover
 */
.layout-5c0ca749bb05efa52779bda4fd28ebdf {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 33.3333333333% auto;
  background: var(--colorfrmt1);
}
.layout-5c0ca749bb05efa52779bda4fd28ebdf .slide-asset {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-5c0ca749bb05efa52779bda4fd28ebdf .slide-asset:last-child {
  margin: 4% 7%;
  margin-top: var(--margin_between);
}

/*
 * single-contain
 */
.layout-0303a07f126f89d2afd656ed3b1a86f5 {
  height: 100%;
  width: 100%;
  padding: 12% !important;
  background: var(--colorfrmt1);
}
.layout-0303a07f126f89d2afd656ed3b1a86f5 [data-assetid=img1] {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

/*
 * single-cover
 */
.layout-665c05a9d3d534fcba48b0e79bb78b0e {
  height: 100%;
  width: 100%;
  padding: 12% !important;
  background: var(--colorfrmt1);
}
.layout-665c05a9d3d534fcba48b0e79bb78b0e [data-assetid=img1] {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * double-horizontal-cover
 */
.layout-8a2053fa2eb528a2ffce4d0b90940cbd {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--colorfrmt1);
}
.layout-8a2053fa2eb528a2ffce4d0b90940cbd .slide-asset {
  height: 50%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-8a2053fa2eb528a2ffce4d0b90940cbd .slide-asset:first-child {
  margin-bottom: var(--margin_between);
}

/*
 * double-vertical-cover
 */
.layout-1ad7a703ad92bdbd6c17575a4eadbb2d {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: var(--colorfrmt1);
}
.layout-1ad7a703ad92bdbd6c17575a4eadbb2d .slide-asset {
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50%;
}
.force-mobile-view * .layout-1ad7a703ad92bdbd6c17575a4eadbb2d .slide-asset {
  width: 100%;
}
.layout-1ad7a703ad92bdbd6c17575a4eadbb2d .slide-asset:first-child {
  margin-right: var(--margin_between);
}

/*
 * single-contain
 */
.layout-12abd8cfb0f7fa6cc51409beea870d55 {
  height: 100%;
  width: 100%;
}
.layout-12abd8cfb0f7fa6cc51409beea870d55 [data-assetid=img1] {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

/*
 * single-cover
 */
.layout-ce5b84bba78c1f080e4e5bbe75762868 {
  height: 100%;
  width: 100%;
}
.layout-ce5b84bba78c1f080e4e5bbe75762868 [data-assetid=img1] {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * single-cover-text-horizontal
 */
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 .slide-block {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 .slide-block-top {
  justify-content: space-evenly;
  height: 40%;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 .slide-block-bottom {
  height: 60%;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 .slide-block:first-child {
  margin-bottom: var(--margin_between);
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 .slide-block-logo {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 [data-tokenid=text1] {
  text-align: center;
  padding: 0 4%;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 50%;
  height: 100%;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 [data-tokenid=text1] {
  width: 100%;
}
.layout-2038e4e3cbac11ef0c8ee5778fe5f9e2 [data-assetid=img1] {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * single-cover-text-center
 */
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  background: var(--colorfrmt1);
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-assetid=img1] {
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-assetid=img1]:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 .slide-block {
  flex: 1;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 .text-wrap {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  padding: 0 8%;
  z-index: 1;
}
.force-mobile-view * .layout-b0048d8af766ff2ecf1dd2e1cfd26728 .text-wrap {
  justify-content: center;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 .logo-wrap {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 6%;
  height: 30%;
}
.force-mobile-view * .layout-b0048d8af766ff2ecf1dd2e1cfd26728 .logo-wrap {
  height: 15%;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-tokenid=text1] {
  margin-top: auto;
}
.force-mobile-view * .layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-tokenid=text1] {
  margin-top: 20%;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-tokenid=text2] {
  margin-top: 3%;
}
.layout-b0048d8af766ff2ecf1dd2e1cfd26728 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  margin-bottom: 5%;
  height: 60%;
}

/*
 * single-cover-text-left
 */
.layout-a5b228ffd1d6aa3e9e18bc03d0fa1149 {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  background: var(--colorfrmt1);
}
.layout-a5b228ffd1d6aa3e9e18bc03d0fa1149 [data-assetid=img1] {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1 !important;
}
.layout-a5b228ffd1d6aa3e9e18bc03d0fa1149 [data-assetid=img1]:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-a5b228ffd1d6aa3e9e18bc03d0fa1149 [data-tokenid=text1] {
  flex: 1;
  margin: auto 8% 8%;
  z-index: 1;
}

/*
 * single-cover-text-right
 */
.layout-71481eca9cbbd2a10d77845526d3ded4 {
  width: 100%;
  height: 100%;
}
.layout-71481eca9cbbd2a10d77845526d3ded4 [data-tokenid=text1] {
  flex: 1;
  margin: 0 15%;
  text-align: right;
}
.layout-71481eca9cbbd2a10d77845526d3ded4 [data-assetid=img1] {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * single-cover-text-vertical
 */
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 .slide-block {
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  width: 50%;
}
.force-mobile-view * .layout-3b6b38de0d74dcce5359ff0efe6fa9b7 .slide-block {
  width: 100%;
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 .slide-block:first-child {
  margin-right: var(--margin_between);
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 .text-wrap {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  padding: 0 8%;
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 .logo-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 [data-tokenid=text2] {
  margin-top: 7%;
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 30%;
  height: 30%;
}
.layout-3b6b38de0d74dcce5359ff0efe6fa9b7 [data-assetid=img1] {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * single-cover-text-top-horizontal
 */
.layout-7f83b972bfb7cf559519442b0b20c057 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-7f83b972bfb7cf559519442b0b20c057 .slide-block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.layout-7f83b972bfb7cf559519442b0b20c057 .slide-block-top {
  justify-content: space-evenly;
  height: 40%;
}
.layout-7f83b972bfb7cf559519442b0b20c057 .slide-block-bottom {
  height: 60%;
}
.layout-7f83b972bfb7cf559519442b0b20c057 .slide-block:first-child {
  margin-bottom: var(--margin_between);
}
.layout-7f83b972bfb7cf559519442b0b20c057 .slide-block-logo {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-7f83b972bfb7cf559519442b0b20c057 [data-tokenid=text1] {
  width: 100%;
  text-align: center;
  padding: 0 4%;
}
.layout-7f83b972bfb7cf559519442b0b20c057 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 20%;
  height: 20%;
}
.layout-7f83b972bfb7cf559519442b0b20c057 [data-assetid=img1] {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/*
 * text-only
 */
.layout-927ebcb97d47015007a9a9e9b6ca42e9 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-927ebcb97d47015007a9a9e9b6ca42e9 [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  margin-bottom: 5%;
  min-width: 20%;
  min-height: 17%;
}
.force-mobile-view * .layout-927ebcb97d47015007a9a9e9b6ca42e9 [data-assetid=logo1] {
  min-width: 35%;
  min-height: 10%;
}
.layout-927ebcb97d47015007a9a9e9b6ca42e9 .text-body {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.layout-927ebcb97d47015007a9a9e9b6ca42e9 [data-tokenid=text1] {
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 16.5%;
}
.force-mobile-view * .layout-927ebcb97d47015007a9a9e9b6ca42e9 [data-tokenid=text1] {
  padding-top: 22%;
}

/*
 * text-only-bottom
 */
.layout-3b31f3fc4103d62ff30d27c0fcfe1a1a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  color: var(--colorfrmt4);
  background: var(--colorfrmt1);
}
.layout-3b31f3fc4103d62ff30d27c0fcfe1a1a [data-assetid=logo1] {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  min-width: 20%;
  min-height: 17%;
}
.force-mobile-view * .layout-3b31f3fc4103d62ff30d27c0fcfe1a1a [data-assetid=logo1] {
  min-width: 35%;
  min-height: 10%;
}
.layout-3b31f3fc4103d62ff30d27c0fcfe1a1a [data-tokenid=text1] {
  width: 100%;
  text-align: center;
  margin-bottom: 10%;
  margin-top: 8%;
  padding-left: 5%;
  padding-right: 5%;
}

/*
 * triple-horizontal-cover
 */
.layout-1f5feb3fa143cecd0a7109e800099e48 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.layout-1f5feb3fa143cecd0a7109e800099e48 .slide-asset {
  height: 33.3333333333%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.layout-1f5feb3fa143cecd0a7109e800099e48 .slide-asset:nth-child(2) {
  margin-top: var(--margin_between);
  margin-bottom: var(--margin_between);
}

/*
 * triple-vertical-cover
 */
.layout-cc5fb496956e062bd52db98d13a33d55 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.layout-cc5fb496956e062bd52db98d13a33d55 .slide-asset {
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 33.3333333333%;
}
.force-mobile-view * .layout-cc5fb496956e062bd52db98d13a33d55 .slide-asset {
  width: 100%;
}
.layout-cc5fb496956e062bd52db98d13a33d55 [data-assetid=img1] {
  margin-right: var(--margin_between);
}
.layout-cc5fb496956e062bd52db98d13a33d55 [data-assetid=img2] {
  margin-right: var(--margin_between);
}

/*
 * video
 */
.layout-421b47ffd946ca083b65cd668c6b17e6 {
  height: 100%;
  width: 100%;
}
.layout-421b47ffd946ca083b65cd668c6b17e6 [data-assetid=vid1] {
  height: 100%;
  width: 100%;
}

[data-layout] {
  word-break: break-word;
}
[data-layout] a:not(#dummy) {
  text-decoration: underline;
}
[data-layout] a:not(#dummy):hover {
  opacity: 0.8;
}
[data-layout] picture {
  display: block;
  position: relative;
}
[data-layout] video {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

/*# sourceMappingURL=slides.css.map */
</style><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:100,200,300,400,500,600,700,800" type="text/css" data-pt-type="font"><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cormorant:300,400,500,600,700" type="text/css" data-pt-type="font"><div id="maincanvas" class="maincanvas" data-v-app=""><div class="slide-render-app render-html" data-v-34e1fb9e=""><div class="viewer viewer-blog viewer" tabindex="0" noimagequeue="true" data-v-445a1178="" data-v-34e1fb9e=""><div class="viewer-view" data-v-445a1178=""><div class="slides-collection spread viewer-slideshow" data-v-26918ecc="" data-v-445a1178="" style="--slide-proportions: Infinity; --slide-width: 1fr; --grid-columns: 1; --grid-gap: 0px;"><div class="slides-collection-view" data-v-26918ecc=""><div class="slides-collection-slide-wrap" data-v-26918ecc="" style="visibility: unset;"><div class="slide-wrap slidetextmobile slides-collection-slide active" data-tags="fullStyle,organizedStyle,editorialStyle" data-slideid="0" data-v-35b3e2ce="" data-v-26918ecc="" style="--width-edge: 1200px;"><div class="slide" data-v-35b3e2ce="" style="--img1_proportions: 0.667; --img1_offset_x: 50%; --img1_offset_y: 25%; --colorfrmt1: #FAF8F3; --colorfrmt3: #EAE4D6; --colorfrmt4: #63310D; --background_color: #FAF8F3; --margin_around_top_desktop_frac: 0.07; --margin_around_top_desktop: 7%; --margin_around_bottom_desktop_frac: 0.07; --margin_around_bottom_desktop: 7%; --margin_around_left_desktop_frac: 0.07; --margin_around_left_desktop: 7%; --margin_around_right_desktop_frac: 0.07; --margin_around_right_desktop: 7%; --margin_around_top_mobile_frac: 0.07; --margin_around_top_mobile: 7%; --margin_around_bottom_mobile_frac: 0.07; --margin_around_bottom_mobile: 7%; --margin_around_left_mobile_frac: 0.07; --margin_around_left_mobile: 7%; --margin_around_right_mobile_frac: 0.07; --margin_around_right_mobile: 7%; --margin_between_desktop: 0px; --margin_between_mobile: 0px;"><div class="layout-wrap"><div class="layout layout-6e74eba7135119aec58ab9699af9bdae" data-layout="dynamic-photo-grid-single-8">
	<div class="inner-wrap">
		<picture class="slide-asset" data-assetid="img1"><source data="" media="(max-width:130px)" srcset="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/thumbs/4c3a0772_pt(11672897361).jpg?rev=2 1x, https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images_small/4c3a0772_pt(11672897361).jpg?rev=2 2x"><source data="" media="(max-width:650px)" srcset="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images_small/4c3a0772_pt(11672897361).jpg?rev=2 1x, https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images/4c3a0772_pt(11672897361).jpg?rev=2 2x">
			<img src="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images/4c3a0772_pt(11672897361).jpg?rev=2" loading="lazy">
		</picture>
	</div>
</div>
</div></div><!----><!----></div></div><div class="slides-collection-slide-wrap" data-v-26918ecc="" style="visibility: unset;"><div class="slide-wrap slidetextmobile slides-collection-slide" data-tags="fullStyle,organizedStyle,editorialStyle" data-slideid="1" data-v-35b3e2ce="" data-v-26918ecc="" style="--width-edge: 1200px;"><div class="slide" data-v-35b3e2ce="" style="--img1_proportions: 0.667; --img1_offset_x: 50%; --img1_offset_y: 25%; --colorfrmt1: #FAF8F3; --colorfrmt3: #EAE4D6; --colorfrmt4: #63310D; --background_color: #FAF8F3; --margin_around_top_desktop_frac: 0.07; --margin_around_top_desktop: 7%; --margin_around_bottom_desktop_frac: 0.07; --margin_around_bottom_desktop: 7%; --margin_around_left_desktop_frac: 0.07; --margin_around_left_desktop: 7%; --margin_around_right_desktop_frac: 0.07; --margin_around_right_desktop: 7%; --margin_around_top_mobile_frac: 0.07; --margin_around_top_mobile: 7%; --margin_around_bottom_mobile_frac: 0.07; --margin_around_bottom_mobile: 7%; --margin_around_left_mobile_frac: 0.07; --margin_around_left_mobile: 7%; --margin_around_right_mobile_frac: 0.07; --margin_around_right_mobile: 7%; --margin_between_desktop: 0px; --margin_between_mobile: 0px;"><div class="layout-wrap"><div class="layout layout-6e74eba7135119aec58ab9699af9bdae" data-layout="dynamic-photo-grid-single-8">
	<div class="inner-wrap">
		<picture class="slide-asset" data-assetid="img1"><source data="" media="(max-width:130px)" srcset="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/thumbs/4c3a0778_pt(11672897363).jpg?rev=2 1x, https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images_small/4c3a0778_pt(11672897363).jpg?rev=2 2x"><source data="" media="(max-width:650px)" srcset="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images_small/4c3a0778_pt(11672897363).jpg?rev=2 1x, https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images/4c3a0778_pt(11672897363).jpg?rev=2 2x">
			<img src="https://pictime7eus1public-pub-hdf3hecqdpaqeuev.a02.azurefd.net/pictures/50/559/50559575/slideshows/69f0e3e3b53f14a00f0f6eec/images/4c3a0778_pt(11672897363).jpg?rev=2" loading="lazy">
		</picture>
	</div>
</div>
</div></div><!----><!----></div></div><div class="slides-collection-slide-wrap" data-v-26918ecc="" style="visibility: unset;"><div class="slide-wrap slidetextmobile slides-collection-slide" data-tags="organizedStyle,editorialStyle" data-slideid="2" data-v-35b3e2ce="" data-v-26918ecc="" style="--width-edge: 1200px;"><div class="slide" data-v-35b3e2ce="" style="--default_text: true; --colorfrmt1: #FAF8F3; --colorfrmt3: #EAE4D6; --colorfrmt4: #63310D; --background_color: #FAF8F3; --margin_around_top_desktop_frac: 0.07; --margin_around_top_desktop: 7%; --margin_around_bottom_desktop_frac: 0.07; --margin_around_bottom_desktop: 7%; --margin_around_left_desktop_frac: 0.07; --margin_around_left_desktop: 7%; --margin_around_right_desktop_frac: 0.07; --margin_around_right_desktop: 7%; --margin_around_top_mobile_frac: 0.07; --margin_around_top_mobile: 7%; --margin_around_bottom_mobile_frac: 0.07; --margin_around_bottom_mobile: 7%; --margin_around_left_mobile_frac: 0.07; --margin_around_left_mobile: 7%; --margin_around_right_mobile_frac: 0.07; --margin_around_right_mobile: 7%; --margin_between_desktop: 0px; --margin_between_mobile: 0px;"><div class="layout-wrap"><div class="layout layout-efd0a8727298e405fda58efcd1f29814" data-layout="dynamic-credits-2">
	<div class="inner-wrap">
		<div data-tokenid="text6" class="slide-asset BLG_F21 BLG_W4 BLG_S8 BLG_H4 BLG_U1 BLG_L1">Vendors</div>
		<div data-tokenid="text7" class="slide-asset BLG_F20 BLG_I1 BLG_W4 BLG_S5 BLG_H4 BLG_U1 BLG_L2">Photographer<br><a href="about:blank" target="blank">MARA FRIEDMAN</a><br><br>Makeup<br>MAKEUP ARTIST NAME<br><br>Hair<br>HAIR STYLIST NAME<br><br>Venue<br>VENUE NAME AND LOCATION</div>
	</div>
</div>
</div></div><!----><!----></div></div><div class="slides-collection-slide-wrap" data-v-26918ecc="" style="visibility: unset;"><div class="slide-wrap slidetextmobile slides-collection-slide" data-tags="galleryaccess,organizedStyle,editorialStyle,fullStyle" data-slideid="3" data-v-35b3e2ce="" data-v-26918ecc="" style="--width-edge: 1200px;"><div class="slide" data-v-35b3e2ce="" style="--colorfrmt1: #FAF8F3; --colorfrmt3: #EAE4D6; --colorfrmt4: #63310D; --background_color: #FAF8F3; --margin_around_top_desktop_frac: 0.07; --margin_around_top_desktop: 7%; --margin_around_bottom_desktop_frac: 0.07; --margin_around_bottom_desktop: 7%; --margin_around_left_desktop_frac: 0.07; --margin_around_left_desktop: 7%; --margin_around_right_desktop_frac: 0.07; --margin_around_right_desktop: 7%; --margin_around_top_mobile_frac: 0.07; --margin_around_top_mobile: 7%; --margin_around_bottom_mobile_frac: 0.07; --margin_around_bottom_mobile: 7%; --margin_around_left_mobile_frac: 0.07; --margin_around_left_mobile: 7%; --margin_around_right_mobile_frac: 0.07; --margin_around_right_mobile: 7%; --margin_between_desktop: 0px; --margin_between_mobile: 0px;"><div class="layout-wrap"><div class="layout layout-30a510dcf673978f09b09a8a7c03d308" data-layout="dynamic-view-gallery">
	<div class="inner-wrap">
		<button data-action="click-openGallery">
			<div data-tokenid="text9" class="slide-asset BLG_F21 BLG_W7 BLG_S5 BLG_H4 BLG_L2 BLG_U1">View Full Gallery</div>
		</button>
	</div>
</div>
</div></div><!----><!----></div></div></div><!----></div></div><div class="fullscreen-wrap" data-v-778911c4="" data-v-445a1178="" style="--max-size: 660px; display: none;"><svg viewBox="0 0 20 20" class="svg-icon svg-icon-cross close-icon" data-v-778911c4=""><use href="#svg-icon-cross"></use></svg><div class="fullscreen-content" data-v-778911c4=""></div></div></div></div></div><style >.BLG_F1000000{font-family: "IBM Plex Mono" !important;}.SLD_F1000000{font-family: "IBM Plex Mono" !important;}.BLG_F1000001{font-family: "Archivo" !important;}.SLD_F1000001{font-family: "Archivo" !important;}</style>`,F={openGallery(){window.open("https://madewithmara.pic-time.com/-crystalandjoe")}};class u extends HTMLElement{constructor(a){super();(this.noShadowDom=
a)?this.root=this:(this.attachShadow({mode:"open"}),this.root=this.shadowRoot)}append(a){typeof a==="string"&&(a=d(`<div>${a}</div>`));this.noShadowDom?super.append(a):this.root.append(a)}addStyleCode(a=""){f(a,this)}getTopComponent(){if(this.noShadowDom)return this;let a=this.shadowRoot,b;do b=a.host,a=b.getRootNode();while(a!==document);return b}propagateEventsToBody(a,b){this.root.addEventListener(a,c=>{if(b===null||b===void 0||!b.propagate||b!==null&&b!==void 0&&b.propagate(c)){var k=new MouseEvent(a,
c);Object.defineProperty(k,"target",{value:c.target});if(b===null||b===void 0?0:b.preventDefault)typeof b.preventDefault==="function"?b.preventDefault(c)&&c.preventDefault():c.preventDefault();setTimeout(()=>document.body.dispatchEvent(k))}})}}class v extends u{constructor(a){const b=a.features.includes("shadow-blog-opt-out"),c=!a.features.includes("style-reset-opt-out");super(b);Object.assign(this,a);a&&(this.dataset.ptFeatures=a.features.toString(),this.dataset.ptFiltertags=a.filterTags.toString());
this.setAttribute("style",c?"all: initial; width: 100%;":"width: 100%;");this.createContent();this.startResizeObserver();this.applyFilterTags();this.setActionElements();this.startLightBox();this.startPinterest()}createContent(){this.append(E);this.blog=this.root.querySelector(".viewer-blog");this.blog.classList.add(...this.featureClasses);this.blog.oncontextmenu=this.preventHandler;this.photos.forEach(a=>{a.ondragstart=this.preventHandler})}get preventHandler(){return()=>!1}get featureClasses(){return this.features.map(a=>
`feature-${a}`)}get slides(){return[...this.blog.querySelectorAll(".slide-wrap")]}get photos(){return[...this.blog.querySelectorAll("picture")]}get hasLightbox(){return this.features.includes("lightbox")}get hasPinterest(){return this.features.includes("pinterest")}startResizeObserver(){(new ResizeObserver(()=>{setTimeout(()=>{const a=this.blog.querySelector(".layout-wrap");if(a){var b=a.clientWidth;this.slides.forEach(c=>{c.style.setProperty("--width-edge",b+"px")});this.adjustContainedPictures()}})})).observe(this.blog)}adjustContainedPictures(){this.blog.querySelectorAll("picture.contained").forEach(a=>
{const b=a.querySelector("img");b.getAttribute("src")&&h(b.src,c=>{c&&(c=c.height/c.width<a.clientHeight/a.clientWidth,a.classList.toggle("width-based",c),a.classList.toggle("height-based",!c))})})}applyFilterTags(){this.filterTags.length&&this.slides.forEach(a=>{e(a.dataset.tags).some(b=>this.filterTags.includes(b))&&(a.style.display="none")})}setActionElements(){this.blog.querySelectorAll("[data-action]").forEach(a=>{var b,c;(c=(b=a.dataset.action)===null||b===void 0?void 0:b.split(";"))===null||
c===void 0||c.forEach(k=>{const [l,n]=k.split("-");a.addEventListener(l,w=>{F[n]();w.stopPropagation();w.preventDefault()})})})}startLightBox(){if(this.hasLightbox){try{var a=window.self!==window.top}catch(c){a=!1}if(!a||document.fullscreenEnabled||document.webkitFullscreenEnabled){var b=this.ptFullscreen=new x({addPinterest:this.hasPinterest});b.ondragstart=b.oncontextmenu=this.preventHandler;window.document.body.append(b);this.blog.addEventListener("click",c=>{if(c.target instanceof HTMLImageElement&&
c.target.parentElement instanceof HTMLPictureElement){const k=c.target.closest(".slide").getAttribute("style");b.setAttribute("style",k);b.startFullscreen(c.target.parentElement)}})}}}startPinterest(){this.hasPinterest&&(this.hasLightbox&&r&&A(this.blog),m(()=>setTimeout(()=>{document.querySelectorAll("style").forEach(a=>{/\.pin_\d+_button_pin\b|\[data-pt-pinterest\]/i.test(a.innerText)&&(this.root.append(a.cloneNode(!0)),this.ptFullscreen&&this.ptFullscreen.root.append(a.cloneNode(!0)))});this.propagateEventsToBody("mouseover");
if(this.ptFullscreen){const a=b=>!!b.target.dataset.pinHref;this.ptFullscreen.propagateEventsToBody("click",{propagate:a,preventDefault:a})}})))}}customElements.get("pt-blog-69f0e3e3b53f14a00f0f6eec")||customElements.define("pt-blog-69f0e3e3b53f14a00f0f6eec",v);class x extends u{constructor(a){super();this.target=this.content=this.wrapper=null;Object.assign(this,a);this.reset();this.addEventListener("fullscreenchange",b=>{this.isFullscreenActive()||this.reset()});this.createWrapper();this.append(this.wrapper);this.addStyleCode('\n\t\t\t\t.fullscreen-content, .fullscreen-wrap {\n\t\t\t\t\tdisplay:           -webkit-box;\n\t\t\t\t\tdisplay:           -ms-flexbox;\n\t\t\t\t\tdisplay:           flex;\n\t\t\t\t\t-webkit-box-align: center;\n\t\t\t\t\t-ms-flex-align:    center;\n\t\t\t\t\talign-items:       center;\n\t\t\t\t\t-webkit-box-pack:  center;\n\t\t\t\t\t-ms-flex-pack:     center;\n\t\t\t\t\tjustify-content:   center;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-wrap, .fullscreen-wrap:before {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft:     0;\n\t\t\t\t\tright:    0;\n\t\t\t\t\ttop:      0;\n\t\t\t\t\tbottom:   0;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-wrap {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\tz-index:  9999;\n\t\t\t\t\t// Goddamn iPhone! \u10da(\u0ca0_\u0ca0\u10da)\n\t\t\t\t\twidth:    100vw;\n\t\t\t\t\theight:   100vh;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-wrap:before {\n\t\t\t\t\tcontent:    "";\n\t\t\t\t\tbackground: var(--background_color);\n\t\t\t\t\topacity:    0.95;\n\t\t\t\t\tz-index:    -1;\n\t\t\t\t\tcursor:     pointer;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-wrap::-webkit-backdrop {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-wrap::backdrop {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-close-everywhere {\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.fullscreen-content {\n\t\t\t\t\t--max-width:  min(100vw, var(--max-size));\n\t\t\t\t\t--max-height: min(100vh, var(--max-size));\n\t\t\t\t\tmax-width:    var(--max-width);\n\t\t\t\t\tmax-height:   var(--max-height);\n\t\t\t\t}\n\n\t\t\t\t.close-icon {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop:      32px;\n\t\t\t\t\tright:    32px;\n\t\t\t\t\twidth:    16px;\n\t\t\t\t\theight:   16px;\n\t\t\t\t\tcursor:   pointer;\n\t\t\t\t}\n\n\t\t\t\tpicture img {\n\t\t\t\t\tmax-width:          var(--max-width);\n\t\t\t\t\tmax-height:         var(--max-height);\n\t\t\t\t\t-o-object-fit:      cover;\n\t\t\t\t\t   object-fit:      cover;\n\t\t\t\t\t-o-object-position: center;\n\t\t\t\t\t   object-position: center;\n\t\t\t\t}\n\t\t\t');
f("\n\t\t\t\tbody.pt-fullscreen-active {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t")}createWrapper(){const a=d(`
				<div class="fullscreen-wrap ${this.closeOnTargetClick?"fullscreen-close-everywhere":""}">
					<div class="fullscreen-content"></div>
				</div>
			`),b=new p("cross");b.className="close-icon";a.prepend(b);a.addEventListener("click",this.clickHandler.bind(this));this.wrapper=a;this.content=a.querySelector(".fullscreen-content");this.content.style.setProperty("--max-size",this.maxSize)}show(){this.style.display=""}hide(){this.style.display="none"}clickHandler(a){!this.closeOnTargetClick&&this.target.contains(a.target)||this.exitFullscreen()}get hasFullscreenApi(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}reset(){var a;
this.hide();(a=this.target)===null||a===void 0||a.remove();this.target=null}startFullscreen(a){this.reset();a=a.cloneNode(!0);this.content.append(a);this.target=a;this.show();this.addPinterest&&z(a);if(this.hasFullscreenApi){{a=this.wrapper;const b=a.requestFullscreen||a.webkitRequestFullScreen||a.mozRequestFullScreen;(document.fullscreenEnabled||document.webkitFullscreenEnabled)&&b?a=b.call(a):(console.error("Fullscreen API not available"),a=void 0)}return a}document.body.classList.add("pt-fullscreen-active");
window.parent.postMessage({type:"manualFullscreenHandler",value:!0,isMobile:r},"*")}exitFullscreen(){this.reset();if(this.hasFullscreenApi){if(this.isFullscreenActive()){var a;(a=document.exitFullscreen||document.cancelFullScreen||document.webkitCancelFullScreen||document.mozCancelFullScreen)?a=a.call(document):(console.error("Fullscreen API not available"),a=void 0);return a}}else document.body.classList.remove("pt-fullscreen-active"),window.parent.postMessage({type:"manualFullscreenHandler",value:!1},
"*")}isFullscreenActive(){const a=this.getTopComponent(),b=document.fullscreenElement||document.webkitFullscreenElement;return a?a===b:!!b}get maxSize(){return Math.min(1200,Math.max(screen.width,screen.height)-140)+"px"}}customElements.get("pt-fullscreen-69f0e3e3b53f14a00f0f6eec")||customElements.define("pt-fullscreen-69f0e3e3b53f14a00f0f6eec",x);class p extends u{constructor(a){super();p.loadSvgBaseFile();this.setSvgBase();this.name=a!==null&&a!==void 0?a:this.getAttribute("name");a=`svg-icon-${this.name}`;const b=
/-fill$/.test(this.name);this.append(`
				<svg viewBox="0 0 20 20" class="svg-icon" class="${a} ${b?"fill-icon":""}">
					<use xlink:href="#${a}"></use>
				</svg>
			`);this.addStyleCode("\n\t\t\t\tsvg {\n\t\t\t\t\tfill: transparent;\n\t\t\t\t}\n\t\t\t\tsvg.fill-icon {\n\t\t\t\t\tfill: #444;\n\t\t\t\t}\n\t\t\t\tsvg:not(.fill-icon) {\n\t\t\t\t\tstroke: #444;\n\t\t\t\t}\n\t\t\t")}setSvgBase(){p.svgDataPromise.then(a=>{this.append(`<div class="pt-svg-icons" style="display: none">${a}</div>`)})}static loadSvgBaseFile(){p.svgDataPromise||(p.svgDataPromise=fetch(`${"https://pictimecloudaf-pub-g3csanfebyefg3dm.a02.azurefd.net"}/pictures/photostore/${C}/locales${""}/en-us/resources/sprites/client2.svg?r=${D}`,
{}).then(a=>a.text()))}}customElements.get("pt-icon-69f0e3e3b53f14a00f0f6eec")||customElements.define("pt-icon-69f0e3e3b53f14a00f0f6eec",p);(function(){function a(b){const c=window.document.querySelectorAll("iframe"),k=[...window.document.querySelectorAll("pt-blog-69f0e3e3b53f14a00f0f6eec")].map(l=>[...l.root.querySelectorAll("iframe")]).flat();return[...c,...k].find(l=>l.contentWindow===b.source)}window.addEventListener("message",function(b){if(b.data&&b.data.pictime)switch(b.data.type){case "updateHeight":var c=b.data;
if(b=a(b))b.style.height=c.height+"px"}},!1)})();(function(a){try{const b=t("fonts"),c=a?t("photos"):null;B().forEach(function(k){if(!k.dataset.created){var l=new v({features:e("pinterest"),filterTags:e("galleryaccess")});k.after(l);l.root.querySelectorAll('link[data-pt-type="font"]').forEach(n=>{b.append(n)});c&&c.append(...l.photos.map(n=>n.cloneNode(!0)));k.dataset.created="true"}});try{c&&self!==top&&t("photos",top.document).append(...c.cloneNode(!0).children)}catch(k){}}catch(b){}})(!1)}
blogLoader69f0e3e3b53f14a00f0f6eec();

