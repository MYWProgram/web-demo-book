!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/demo-book/",e(e.s=321)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(29))},10:function(t,n,e){var r=e(19),o=e(14);t.exports=function(t){return r(o(t))}},11:function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},118:function(t,n,e){t.exports=e(322)},12:function(t,n,e){var r=e(2),o=e(15),c=e(13),u=e(11),i=Object.defineProperty;n.f=r?i:function(t,n,e){if(c(t),n=u(n,!0),c(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},13:function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},14:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},15:function(t,n,e){var r=e(2),o=e(0),c=e(24);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},16:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},17:function(t,n,e){var r=e(31);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},19:function(t,n,e){var r=e(0),o=e(16),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},2:function(t,n,e){var r=e(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},21:function(t,n,e){var r=e(2),o=e(23),c=e(9),u=e(10),i=e(11),f=e(4),l=e(15),a=Object.getOwnPropertyDescriptor;n.f=r?a:function(t,n){if(t=u(t),n=i(n,!0),l)try{return a(t,n)}catch(t){}if(f(t,n))return c(!o.f.call(t,n),t[n])}},23:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},24:function(t,n,e){var r=e(1),o=e(3),c=r.document,u=o(c)&&o(c.createElement);t.exports=function(t){return u?c.createElement(t):{}}},27:function(t,n,e){var r=e(5),o=e(1),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},29:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},3:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},30:function(t,n,e){var r=e(0),o=/#|\.prototype\./,c=function(t,n){var e=i[u(t)];return e==l||e!=f&&("function"==typeof n?r(n):!!n)},u=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=c.data={},f=c.NATIVE="N",l=c.POLYFILL="P";t.exports=c},31:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},321:function(t,n,e){"use strict";e.r(n);var r=e(118),o=e.n(r);e(323);document.querySelector(".scrollTo-button").addEventListener("click",(function(){window.scrollTo({left:0,top:0,behavior:"smooth"})})),document.querySelector(".scrollBy-button").addEventListener("click",(function(){window.scrollBy({left:0,top:1080,behavior:"smooth"})})),document.querySelector(".scrollTop-button").addEventListener("click",(function(){document.scrollingElement.scrollTop=0})),document.querySelector(".scrollIntoView-button").addEventListener("click",(function(){document.querySelector(".box").scrollIntoView({behavior:"smooth",block:"end"})})),document.querySelector(".scrollHeight-button").addEventListener("click",(function(){window.scrollTo({left:0,top:document.scrollingElement.scrollHeight,behavior:"smooth"})})),window.addEventListener("scroll",(function(){var t=document.scrollingElement,n=t.scrollTop,e=t.scrollHeight;n+t.clientHeight>=e&&confirm("已到达底部")})),window.addEventListener("scroll",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,e=null;return function(){var r=arguments,c=this;clearTimeout(e),e=o()((function(){t.apply(c,r)}),n)}}((function(){return console.log("滚动结束！")}))),window.addEventListener("scroll",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,e=!0;return function(){var r=arguments,c=this;e&&(e=!1,o()((function(){t.apply(c,r),e=!0}),n))}}((function(){return console.log("我在滚我在滚！")})))},322:function(t,n,e){e(76);var r=e(5);t.exports=r.setTimeout},323:function(t,n,e){},39:function(t,n,e){var r=e(27);t.exports=r("navigator","userAgent")||""},4:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5:function(t,n){t.exports={}},7:function(t,n,e){"use strict";var r=e(1),o=e(21).f,c=e(30),u=e(5),i=e(17),f=e(8),l=e(4),a=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,s,p,v,d,y,b,h,m=t.target,g=t.global,w=t.stat,x=t.proto,j=g?r:w?r[m]:(r[m]||{}).prototype,E=g?u:u[m]||(u[m]={}),T=E.prototype;for(p in n)e=!c(g?p:m+(w?".":"#")+p,t.forced)&&j&&l(j,p),d=E[p],e&&(y=t.noTargetGet?(h=o(j,p))&&h.value:j[p]),v=e&&y?y:n[p],e&&typeof d==typeof v||(b=t.bind&&e?i(v,r):t.wrap&&e?a(v):x&&"function"==typeof v?i(Function.call,v):v,(t.sham||v&&v.sham||d&&d.sham)&&f(b,"sham",!0),E[p]=b,x&&(l(u,s=m+"Prototype")||f(u,s,{}),u[s][p]=v,t.real&&T&&!T[p]&&f(T,p,v)))}},76:function(t,n,e){var r=e(7),o=e(1),c=e(39),u=[].slice,i=function(t){return function(n,e){var r=arguments.length>2,o=r?u.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(c)},{setTimeout:i(o.setTimeout),setInterval:i(o.setInterval)})},8:function(t,n,e){var r=e(2),o=e(12),c=e(9);t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},9:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}}});