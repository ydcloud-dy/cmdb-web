/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,u=Object.create(a.prototype),c=new C(r||[]);return o(u,"_invoke",{value:O(e,n,c)}),u}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var d="suspendedStart",v="suspendedYield",h="executing",y="completed",g={};function m(){}function w(){}function b(){}var x={};s(x,c,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(N([])));k&&k!==r&&a.call(k,c)&&(x=k);var _=b.prototype=m.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(r,o,u,c){var i=p(e[r],e,o);if("throw"!==i.type){var l=i.arg,s=l.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):t.resolve(s).then((function(e){l.value=e,u(l)}),(function(e){return n("throw",e,u,c)}))}c(i.arg)}var r;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(o,o):o()}})}function O(e,n,r){var a=d;return function(o,u){if(a===h)throw Error("Generator is already running");if(a===y){if("throw"===o)throw u;return{value:t,done:!0}}for(r.method=o,r.arg=u;;){var c=r.delegate;if(c){var i=S(c,r);if(i){if(i===g)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var l=p(e,n,r);if("normal"===l.type){if(a=r.done?y:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a=y,r.method="throw",r.arg=l.arg)}}}function S(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var u=o.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},n.awrap=function(e){return{__await:e}},E(L.prototype),s(L.prototype,i,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var u=new L(f(e,t,r,a),o);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},E(_),s(_,l,"Generator"),s(_,c,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=N,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],c=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),l=a.call(u,"finallyLoc");if(i&&l){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function t(e,t,n,r,a,o,u){try{var c=e[o](u),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var u=e.apply(n,r);function c(e){t(u,a,o,c,i,"next",e)}function i(e){t(u,a,o,c,i,"throw",e)}c(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./k8s-legacy.DMyObMmE.js","./index-legacy.CrLAlmUo.js","./table-legacy.WQkyAg7c.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./index-legacy.CjsCdAav.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./monaco-editor-vue3.es-legacy.a46gbKys.js","./js-yaml-legacy.DvjpT7r5.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popover-legacy.BVoPCIBV.js","./dropdown-legacy.Ei32dkXV.js","./age-legacy.B6tOd1kw.js"],(function(t,r){"use strict";var a,o,u,c,i,l,s,f,p,d,v,h,y,g,m,w,b,x,j;return{setters:[function(e){a=e.s,o=e.a,u=e.o,c=e.c,i=e.b,l=e.e,s=e.w,f=e.g,p=e.f,d=e.i,v=e.k,h=e.E},function(e){y=e.E},null,function(e){g=e.E},null,null,null,null,null,null,null,function(e){m=e.a,w=e.E},function(e){b=e.g},function(e){x=e._},function(e){j=e.default},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=function(e){return"/kubernetes/proxy/".concat(e,"/apis/policy/v1beta1/podsecuritypolicies")},k=function(e,t){return"/kubernetes/proxy/".concat(e,"/apis/policy/v1beta1/podsecuritypolicies")},_=function(e,t,n,o,u,c){return a(o&&"All Namespaces"!==o?{url:"".concat(k(e),"?search=true&keywords=").concat(u,"&page=").concat(t,"&pageSize=").concat(n,"&labelSelector=").concat(c),method:"get"}:{url:"".concat(r(e),"?search=true&keywords=").concat(u,"&page=").concat(t,"&pageSize=").concat(n),method:"get"})},E=function(e,t,n){return a({url:"".concat(k(e),"/").concat(n),method:"get"})},L=function(e,t,n){return a({url:"".concat(k(e)),method:"post",data:n})},O={class:"dycloud-table-box"},S={class:"dycloud-btn-list"},z={key:0},P={class:"dycloud-pagination"},C={key:0},N={class:"dialog-footer"},G={name:"PodSecurityPolicies"};t("default",Object.assign(G,{setup:function(t){var r=o({}),G=o(1),F=o(0),I=o(10),T=o([]),V=o(""),A=o({keywords:"",namespace:""}),U=o(!1),D=function(){A.value.keywords=""},Y=function(){G.value=1,I.value=10,M()},q=function(e){I.value=e,M()},H=function(e){G.value=e,M()},M=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(A.value.cluster_id,G.value,I.value,A.value.namespace,A.value.keywords,"");case 2:0===(n=e.sent).code&&(T.value=n.data.items,F.value=n.data.total,G.value=n.data.page,I.value=n.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=o(!1),J=o(""),K=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.value="update",V.value="编辑",e.next=4,E(A.value.cluster_id,n.metadata.namespace,n.metadata.name);case 4:0===(a=e.sent).code&&(r.value=a.data.items,U.value=!1,B.value=!0);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){B.value=!1,r.value={}},R=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.visible=!1,e.next=3,t=A.value.cluster_id,n.metadata.namespace,o=n.metadata.name,a({url:"".concat(k(t),"/").concat(o),method:"delete"});case 3:if(!(r=e.sent).data.items){e.next=8;break}if(!r.data.items.code){e.next=8;break}return d({type:"error",message:r.data.items.message}),e.abrupt("return");case 8:0===r.code&&(d({type:"success",message:"删除成功"}),M());case 9:case"end":return e.stop()}var t,o}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===n.code&&(d({type:"success",message:n.msg}),M());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=J.value,e.next="create"===e.t0?3:"update"===e.t0?7:11;break;case 3:return e.next=5,L(A.value.cluster_id,n.metadata.namespace,n);case 5:return r=e.sent,e.abrupt("break",15);case 7:return e.next=9,t=A.value.cluster_id,n.metadata.namespace,o=n.metadata.name,u=n,a({url:"".concat(k(t),"/").concat(o),method:"put",data:u});case 9:return r=e.sent,e.abrupt("break",15);case 11:return e.next=13,L(A.value.cluster_id);case 13:return r=e.sent,e.abrupt("break",15);case 15:if(!r.data.items){e.next=19;break}if(!r.data.items.code){e.next=19;break}return d({type:"error",message:r.data.items.message}),e.abrupt("return");case 19:0===r.code&&(Q(),W(r));case 20:case"end":return e.stop()}var t,o,u}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(A.value.cluster_id,n.metadata.namespace,n.metadata.name);case 2:0===(a=e.sent).code&&(V.value="详情",r.value=a.data.items,U.value=!0,B.value=!0);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return window.addEventListener("setItemCluster",(function(e){A.value.cluster_id=parseInt(localStorage.getItem("cluster_id")),M()})),function(e,t){var n=v,a=m,o=h,d=w,k=g,_=y;return u(),c("div",null,[i("div",O,[i("div",S,[l(d,{ref:"searchForm",inline:!0,model:A.value},{default:s((function(){return[l(a,{label:"名称"},{default:s((function(){return[l(n,{modelValue:A.value.keywords,"onUpdate:modelValue":t[0]||(t[0]=function(e){return A.value.keywords=e}),placeholder:"名称"},null,8,["modelValue"])]})),_:1}),l(a,null,{default:s((function(){return[l(o,{size:"small",type:"primary",icon:"search",onClick:Y},{default:s((function(){return t[3]||(t[3]=[f("查询")])})),_:1}),l(o,{size:"small",icon:"refresh",onClick:D},{default:s((function(){return t[4]||(t[4]=[f("重置")])})),_:1})]})),_:1}),l(a,null,{default:s((function(){return[l(o,{size:"small",type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return J.value="create",V.value="创建",r.value=b("podsecuritypolicies",A.value.namespace,""),U.value=!1,void(B.value=!0)})},{default:s((function(){return t[5]||(t[5]=[f("新增")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),T.value?(u(),c("div",z,[l(j,{"table-data":T.value,onUpdate:K,onDetail:Z,onDelete:R},null,8,["table-data"])])):p("",!0)]),i("div",P,[l(k,{"current-page":G.value,"page-size":I.value,"page-sizes":[10,30,50,100],total:F.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:H,onSizeChange:q},null,8,["current-page","page-size","total"])]),B.value?(u(),c("div",C,[l(_,{modelValue:B.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.value=e}),width:"60%",title:V.value},{default:s((function(){return[i("div",N,[l(x,{data:r.value,"read-only":U.value,onClose:Q,onEnter:X},null,8,["data","read-only"])])]})),_:1},8,["modelValue","title"])])):p("",!0)])}}}))}}}))}();