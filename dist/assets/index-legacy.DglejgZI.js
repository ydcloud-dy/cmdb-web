/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function n(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return t(n,e);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var o=0,a=function(){};return{s:a,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return i=n.done,n},e:function(n){c=!0,u=n},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw u}}}}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.Cf1_fyJw.js"],(function(t,e){"use strict";var r,o,a;return{setters:[function(n){r=n.ae,o=n.a8,a=n.aV}],execute:function(){var e,u=new Map;r&&(document.addEventListener("mousedown",(function(n){return e=n})),document.addEventListener("mouseup",(function(t){if(e){var r,o=n(u.values());try{for(o.s();!(r=o.n()).done;){var a,i=n(r.value);try{for(i.s();!(a=i.n()).done;){(0,a.value.documentHandler)(t,e)}}catch(c){i.e(c)}finally{i.f()}}}catch(c){o.e(c)}finally{o.f()}e=void 0}})));function i(n,t){var e=[];return o(t.arg)?e=t.arg:a(t.arg)&&e.push(t.arg),function(r,o){var a=t.instance.popperRef,u=r.target,i=null==o?void 0:o.target,c=!t||!t.instance,l=!u||!i,f=n.contains(u)||n.contains(i),s=n===u,d=e.length&&e.some((function(n){return null==n?void 0:n.contains(u)}))||e.length&&e.includes(i),v=a&&(a.contains(u)||a.contains(i));c||l||f||s||d||v||t.value(r,o)}}t("C",{beforeMount:function(n,t){u.has(n)||u.set(n,[]),u.get(n).push({documentHandler:i(n,t),bindingFn:t.value})},updated:function(n,t){u.has(n)||u.set(n,[]);var e=u.get(n),r=e.findIndex((function(n){return n.bindingFn===t.oldValue})),o={documentHandler:i(n,t),bindingFn:t.value};r>=0?e.splice(r,1,o):e.push(o)},unmounted:function(n){u.delete(n)}})}}}))}();
