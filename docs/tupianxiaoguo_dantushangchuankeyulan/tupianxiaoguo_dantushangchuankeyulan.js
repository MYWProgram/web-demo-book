!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/web-demo-book/",n(n.s=258)}({258:function(e,t,n){"use strict";n.r(t);n(259);var r=document.querySelector(".wrapper"),o=document.querySelector(".file-name"),u=document.querySelector("#default-btn"),c=document.querySelector("#custom-btn"),i=document.querySelector("#cancel-btn span"),a=document.querySelector("img"),l=/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;c.addEventListener("click",(function(){u.click()})),u.addEventListener("change",(function(){var e=this.files[0];if(e){var t=new FileReader;t.onload=function(){var e=t.result;a.src=e,r.classList.add("active")},i.addEventListener("click",(function(){a.src="",r.classList.remove("active")})),t.readAsDataURL(e)}if(this.value){var n=this.value.match(l);o.textContent=n}}))},259:function(e,t,n){}});