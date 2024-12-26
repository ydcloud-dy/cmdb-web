/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var e,n={},r=Object.prototype,o=r.hasOwnProperty,u=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new M(r||[]);return u(a,"_invoke",{value:j(t,n,i)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=s;var d="suspendedStart",h="suspendedYield",v="executing",y="completed",g={};function m(){}function _(){}function x(){}var w={};f(w,i,(function(){return this}));var b=Object.getPrototypeOf,C=b&&b(b(S([])));C&&C!==r&&o.call(C,i)&&(w=C);var L=x.prototype=m.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(r,u,a,i){var c=p(t[r],t,u);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,i)}),(function(t){n("throw",t,a,i)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,i)}))}i(c.arg)}var r;u(this,"_invoke",{value:function(t,o){function u(){return new e((function(e,r){n(t,o,e,r)}))}return r=r?r.then(u,u):u()}})}function j(t,n,r){var o=d;return function(u,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===u)throw a;return{value:e,done:!0}}for(r.method=u,r.arg=a;;){var i=r.delegate;if(i){var c=G(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?y:h,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=y,r.method="throw",r.arg=l.arg)}}}function G(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,G(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var u=p(o,t.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,g;var a=u.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,u=function n(){for(;++r<t.length;)if(o.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return u.next=u}}throw new TypeError(typeof t+" is not iterable")}return _.prototype=x,u(L,"constructor",{value:x,configurable:!0}),u(x,"constructor",{value:_,configurable:!0}),_.displayName=f(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},n.awrap=function(t){return{__await:t}},E(k.prototype),f(k.prototype,c,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,o,u){void 0===u&&(u=Promise);var a=new k(s(t,e,r,o),u);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),f(L,l,"Generator"),f(L,i,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var u=this.tryEntries.length-1;u>=0;--u){var a=this.tryEntries[u],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var u=r;break}}u&&("break"===t||"continue"===t)&&u.tryLoc<=e&&e<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=t,a.arg=e,u?(this.method="next",this.next=u.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}function e(t,e,n,r,o,u,a){try{var i=t[u](a),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}System.register(["./index-legacy.Cf1_fyJw.js","./progress-legacy.DmXn2V_b.js","./card-legacy.EIB5U9Pv.js","./col-legacy.tMI9428i.js"],(function(n,r){"use strict";var o,u,a,i,c,l,f,s,p,d,h,v,y,g,m,_,x,w;return{setters:[function(t){o=t.s,u=t.a,a=t.bM,i=t.o,c=t.c,l=t.e,f=t.w,s=t.h,p=t.b,d=t.g,h=t.t,v=t.f,y=t.F,g=t.v},function(t){m=t.E},function(t){_=t.E},function(t){x=t.E,w=t.a}],execute:function(){var r=document.createElement("style");r.textContent=".card_item{margin:.5rem;height:20rem;border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:1.5rem;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity))}.card_item:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity));--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}\n",document.head.appendChild(r);n("default",Object.assign({name:"State"},{__name:"state",setup:function(n){var r=u(null),b=u({}),C=u([{color:"#5cb87a",percentage:20},{color:"#e6a23c",percentage:40},{color:"#f56c6c",percentage:80}]),L=function(){var n,r=(n=t().mark((function e(){var n,r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o({url:"/system/getServerInfo",method:"post",donNotShowLoading:!0});case 2:n=t.sent,r=n.data,b.value=r.server;case 5:case"end":return t.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,u){var a=n.apply(t,r);function i(t){e(a,o,u,i,c,"next",t)}function c(t){e(a,o,u,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return L(),r.value=setInterval((function(){L()}),1e4),a((function(){clearInterval(r.value),r.value=null})),function(t,e){var n=x,r=w,o=_,u=m;return i(),c("div",null,[l(r,{gutter:15,class:"py-1"},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[b.value.os?(i(),s(o,{key:0,class:"card_item"},{header:f((function(){return e[0]||(e[0]=[p("div",null,"Runtime",-1)])})),default:f((function(){return[p("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[1]||(e[1]=[d("os:")])})),_:1}),l(n,{span:12,textContent:h(b.value.os.goos)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[2]||(e[2]=[d("cpu nums:")])})),_:1}),l(n,{span:12,textContent:h(b.value.os.numCpu)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[3]||(e[3]=[d("compiler:")])})),_:1}),l(n,{span:12,textContent:h(b.value.os.compiler)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[4]||(e[4]=[d("go version:")])})),_:1}),l(n,{span:12,textContent:h(b.value.os.goVersion)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[5]||(e[5]=[d("goroutine nums:")])})),_:1}),l(n,{span:12,textContent:h(b.value.os.numGoroutine)},null,8,["textContent"])]})),_:1})])]})),_:1})):v("",!0)]})),_:1}),l(n,{span:12},{default:f((function(){return[b.value.disk?(i(),s(o,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:f((function(){return e[6]||(e[6]=[p("div",null,"Disk",-1)])})),default:f((function(){return[p("div",null,[(i(!0),c(y,null,g(b.value.disk,(function(t,o){return i(),s(r,{key:o,gutter:10,style:{"margin-bottom":"2rem"}},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[7]||(e[7]=[d("MountPoint")])})),_:1}),l(n,{span:12,textContent:h(t.mountPoint)},null,8,["textContent"])]})),_:2},1024),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[8]||(e[8]=[d("total (MB)")])})),_:1}),l(n,{span:12,textContent:h(t.totalMb)},null,8,["textContent"])]})),_:2},1024),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[9]||(e[9]=[d("used (MB)")])})),_:1}),l(n,{span:12,textContent:h(t.usedMb)},null,8,["textContent"])]})),_:2},1024),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[10]||(e[10]=[d("total (GB)")])})),_:1}),l(n,{span:12,textContent:h(t.totalGb)},null,8,["textContent"])]})),_:2},1024),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[11]||(e[11]=[d("used (GB)")])})),_:1}),l(n,{span:12,textContent:h(t.usedGb)},null,8,["textContent"])]})),_:2},1024)]})),_:2},1024),l(n,{span:12},{default:f((function(){return[l(u,{type:"dashboard",percentage:t.usedPercent,color:C.value},null,8,["percentage","color"])]})),_:2},1024)]})),_:2},1024)})),128))])]})),_:1})):v("",!0)]})),_:1})]})),_:1}),l(r,{gutter:15,class:"py-1"},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[b.value.cpu?(i(),s(o,{key:0,class:"card_item","body-style":{height:"180px","overflow-y":"scroll"}},{header:f((function(){return e[12]||(e[12]=[p("div",null,"CPU",-1)])})),default:f((function(){return[p("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[13]||(e[13]=[d("physical number of cores:")])})),_:1}),l(n,{span:12,textContent:h(b.value.cpu.cores)},null,8,["textContent"])]})),_:1}),(i(!0),c(y,null,g(b.value.cpu.cpus,(function(t,e){return i(),s(r,{key:e,gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[d("core "+h(e)+":",1)]})),_:2},1024),l(n,{span:12},{default:f((function(){return[l(u,{type:"line",percentage:+t.toFixed(0),color:C.value},null,8,["percentage","color"])]})),_:2},1024)]})),_:2},1024)})),128))])]})),_:1})):v("",!0)]})),_:1}),l(n,{span:12},{default:f((function(){return[b.value.ram?(i(),s(o,{key:0,class:"card_item"},{header:f((function(){return e[14]||(e[14]=[p("div",null,"Ram",-1)])})),default:f((function(){return[p("div",null,[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return[l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[15]||(e[15]=[d("total (MB)")])})),_:1}),l(n,{span:12,textContent:h(b.value.ram.totalMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[16]||(e[16]=[d("used (MB)")])})),_:1}),l(n,{span:12,textContent:h(b.value.ram.usedMb)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[17]||(e[17]=[d("total (GB)")])})),_:1}),l(n,{span:12,textContent:h(b.value.ram.totalMb/1024)},null,8,["textContent"])]})),_:1}),l(r,{gutter:10},{default:f((function(){return[l(n,{span:12},{default:f((function(){return e[18]||(e[18]=[d("used (GB)")])})),_:1}),l(n,{span:12,textContent:h((b.value.ram.usedMb/1024).toFixed(2))},null,8,["textContent"])]})),_:1})]})),_:1}),l(n,{span:12},{default:f((function(){return[l(u,{type:"dashboard",percentage:b.value.ram.usedPercent,color:C.value},null,8,["percentage","color"])]})),_:1})]})),_:1})])]})),_:1})):v("",!0)]})),_:1})]})),_:1})])}}}))}}}))}();