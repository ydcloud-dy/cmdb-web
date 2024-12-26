/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var e,n={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,l=Object.create(o.prototype),i=new S(r||[]);return a(l,"_invoke",{value:k(t,n,i)}),l}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var y="suspendedStart",p="suspendedYield",g="executing",d="completed",v={};function m(){}function j(){}function w(){}var b={};s(b,i,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(F([])));L&&L!==r&&o.call(L,i)&&(b=L);var E=w.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(r,a,l,i){var c=h(t[r],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,l,i)}),(function(t){n("throw",t,l,i)})):e.resolve(s).then((function(t){u.value=t,l(u)}),(function(t){return n("throw",t,l,i)}))}i(c.arg)}var r;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(a,a):a()}})}function k(t,n,r){var o=y;return function(a,l){if(o===g)throw Error("Generator is already running");if(o===d){if("throw"===a)throw l;return{value:e,done:!0}}for(r.method=a,r.arg=l;;){var i=r.delegate;if(i){var c=P(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var u=h(t,n,r);if("normal"===u.type){if(o=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=d,r.method="throw",r.arg=u.arg)}}}function P(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,P(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=h(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var l=a.arg;return l?l.done?(n[t.resultName]=l.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):l:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return j.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:j,configurable:!0}),j.displayName=s(w,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},_(O.prototype),s(O.prototype,c,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var l=new O(f(t,e,r,o),a);return n.isGeneratorFunction(e)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},_(E),s(E,u,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],i=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=o.call(l,"catchLoc"),u=o.call(l,"finallyLoc");if(c&&u){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=t,l.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;N(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},n}function e(t,e,n,r,o,a,l){try{var i=t[a](l),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}System.register(["./index-legacy.Cf1_fyJw.js","./col-legacy.tMI9428i.js","./tab-pane-legacy.DpVaa-__.js","./card-legacy.EIB5U9Pv.js","./detail-basic-legacy.D6mIBUYv.js","./detail-pods-legacy.C8pMqjri.js","./detail-conditions-legacy.DK-63WSZ.js","./strings-legacy.Wo7ipnce.js","./index-legacy.5aKQ1vKy.js","./tag-legacy.Ca3_ouli.js","./age-legacy.B6tOd1kw.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./link-legacy.9nArvqF3.js","./index-legacy.DPmmO7_J.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./refs-legacy.DKcspM8g.js","./table-column-legacy.BxF_olX2.js","./scrollbar-legacy.dKZTD6w2.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./checkbox-legacy.CC9hZC3z.js","./index-legacy.DglejgZI.js","./dropdown-item-legacy.CVx0pdJ_.js","./dropdown-legacy.Ei32dkXV.js","./castArray-legacy.Dek4eNNY.js","./button-legacy.CH0FoAJ-.js","./metrics-legacy.DN4d2MBK.js","./terminal-legacy.CNeayivl.js","./xterm-legacy.C7iTxYx2.js","./xterm-legacy.CncnO5QC.js","./xterm-addon-fit-legacy.BgFhqBhw.js","./index-legacy.-ouNXvAL.js","./index-legacy.MUWnlxzq.js","./terminal-log-legacy.BTG7uPc4.js","./monitor-legacy.XOs_Tcev.js","./form-item-legacy.BSRxtXpO.js","./_baseClone-legacy.CxPdKCcf.js","./date-picker-legacy.Cu_U60XV.js","./dayjs.min-legacy.jnpfY90f.js","./arrays-legacy.DowQ5ujz.js","./index-legacy.xSvwTSbp.js","./input-legacy.DqeBI0DR.js"],(function(n,r){"use strict";var o,a,l,i,c,u,s,f,h,y,p,g,d;return{setters:[function(t){o=t.a,a=t.o,l=t.c,i=t.e,c=t.w},function(t){u=t.E,s=t.a},function(t){f=t.E,h=t.a},function(t){y=t.E},function(t){p=t._},function(t){g=t._},function(t){d=t._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={name:"DetailBlock"};n("default",Object.assign(r,{props:{data:{default:function(){return{}},type:Object}},setup:function(n){var r=n,v=o(""),m=function(){var n,r=(n=t().mark((function e(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(w.value.spec.selector.matchLabels){for(n in w.value.spec.selector.matchLabels)Object.prototype.hasOwnProperty.call(w.value.spec.selector.matchLabels,n)&&(v.value+=n+"="+w.value.spec.selector.matchLabels[n]+",");v.value=0!==v.value.length?v.value.substring(0,v.value.length-1):""}case 1:case"end":return t.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,a){var l=n.apply(t,r);function i(t){e(l,o,a,i,c,"next",t)}function c(t){e(l,o,a,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}(),j=o(""),w=o({});return j.value="pods",w.value=r.data,m(),function(t,e){var n=y,r=u,o=f,m=h,b=s;return a(),l("div",null,[i(b,{gutter:20,class:"row-box"},{default:c((function(){return[i(r,{span:24},{default:c((function(){return[i(n,{class:"el-card"},{default:c((function(){return[i(p,{form:w.value},null,8,["form"])]})),_:1})]})),_:1}),i(r,{span:24},{default:c((function(){return[i(m,{modelValue:j.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return j.value=t}),type:"border-card"},{default:c((function(){return[i(o,{name:"pods",label:"容器组"},{default:c((function(){return[i(g,{data:w.value,selectors:v.value},null,8,["data","selectors"])]})),_:1}),i(o,{name:"conditions",label:"运行时信息"},{default:c((function(){return[i(d,{conditions:w.value.status.conditions},null,8,["conditions"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})])}}}))}}}))}();