!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/demo-book/",e(e.s=285)}({0:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(34))},10:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},11:function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},110:function(t,n,e){e(92);var r=e(7);t.exports=r.setTimeout},12:function(t,n,e){var r=e(3),o=e(18),u=e(11),c=e(13),i=Object.defineProperty;n.f=r?i:function(t,n,e){if(u(t),n=c(n,!0),u(e),o)try{return i(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},13:function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},16:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},17:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},18:function(t,n,e){var r=e(3),o=e(0),u=e(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},19:function(t,n,e){var r=e(35);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},2:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},22:function(t,n,e){var r=e(0),o=e(16),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},23:function(t,n,e){var r=e(1),o=e(5),u=r.document,c=o(u)&&o(u.createElement);t.exports=function(t){return c?u.createElement(t):{}}},24:function(t,n,e){var r=e(3),o=e(27),u=e(10),c=e(9),i=e(13),f=e(2),a=e(18),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=c(t),n=i(n,!0),a)try{return l(t,n)}catch(t){}if(f(t,n))return u(!o.f.call(t,n),t[n])}},27:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);n.f=u?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},285:function(t,n,e){"use strict";e.r(n);var r=e(79),o=e.n(r),u=(e(286),document.querySelector(".drop-btn span")),c=document.querySelector(".tooltip"),i=document.querySelector(".wrapper"),f=document.querySelector(".menu-bar"),a=document.querySelector(".setting-drop"),l=document.querySelector(".help-drop"),p=document.querySelector(".setting-item"),s=document.querySelector(".help-item"),y=document.querySelector(".back-setting-btn"),d=document.querySelector(".back-help-btn");u.onclick=function(){i.classList.toggle("show"),c.classList.toggle("show")},p.onclick=function(){f.style.marginLeft="-400px",o()((function(){a.style.display="block"}),100)},s.onclick=function(){f.style.marginLeft="-400px",o()((function(){l.style.display="block"}),100)},y.onclick=function(){f.style.marginLeft="0px",a.style.display="none"},d.onclick=function(){l.style.display="none",f.style.marginLeft="0px"}},286:function(t,n,e){},29:function(t,n,e){var r=e(7),o=e(1),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?u(r[t])||u(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},3:function(t,n,e){var r=e(0);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},34:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},35:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},36:function(t,n,e){var r=e(0),o=/#|\.prototype\./,u=function(t,n){var e=i[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=u.data={},f=u.NATIVE="N",a=u.POLYFILL="P";t.exports=u},5:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},51:function(t,n,e){var r=e(29);t.exports=r("navigator","userAgent")||""},6:function(t,n,e){var r=e(3),o=e(12),u=e(10);t.exports=r?function(t,n,e){return o.f(t,n,u(1,e))}:function(t,n,e){return t[n]=e,t}},7:function(t,n){t.exports={}},79:function(t,n,e){t.exports=e(110)},8:function(t,n,e){"use strict";var r=e(1),o=e(24).f,u=e(36),c=e(7),i=e(19),f=e(6),a=e(2),l=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,p,s,y,d,v,b,g,m=t.target,h=t.global,x=t.stat,w=t.proto,j=h?r:x?r[m]:(r[m]||{}).prototype,S=h?c:c[m]||(c[m]={}),O=S.prototype;for(s in n)e=!u(h?s:m+(x?".":"#")+s,t.forced)&&j&&a(j,s),d=S[s],e&&(v=t.noTargetGet?(g=o(j,s))&&g.value:j[s]),y=e&&v?v:n[s],e&&typeof d==typeof y||(b=t.bind&&e?i(y,r):t.wrap&&e?l(y):w&&"function"==typeof y?i(Function.call,y):y,(t.sham||y&&y.sham||d&&d.sham)&&f(b,"sham",!0),S[s]=b,w&&(a(c,p=m+"Prototype")||f(c,p,{}),c[p][s]=y,t.real&&O&&!O[s]&&f(O,s,y)))}},9:function(t,n,e){var r=e(22),o=e(17);t.exports=function(t){return r(o(t))}},92:function(t,n,e){var r=e(8),o=e(1),u=e(51),c=[].slice,i=function(t){return function(n,e){var r=arguments.length>2,o=r?c.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(u)},{setTimeout:i(o.setTimeout),setInterval:i(o.setInterval)})}});