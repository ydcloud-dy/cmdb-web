/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},i=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,u=Object.create(a.prototype),i=new P(n||[]);return o(u,"_invoke",{value:O(e,r,i)}),u}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",v="suspendedYield",h="executing",y="completed",m={};function g(){}function w(){}function b(){}var x={};s(x,i,(function(){return this}));var j=Object.getPrototypeOf,_=j&&j(j(z([])));_&&_!==n&&a.call(_,i)&&(x=_);var k=b.prototype=g.prototype=Object.create(x);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(n,o,u,i){var l=d(e[n],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,u,i)}),(function(e){r("throw",e,u,i)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return r("throw",e,u,i)}))}i(l.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}})}function O(e,r,n){var a=p;return function(o,u){if(a===h)throw Error("Generator is already running");if(a===y){if("throw"===o)throw u;return{value:t,done:!0}}for(n.method=o,n.arg=u;;){var i=n.delegate;if(i){var l=N(i,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===p)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=h;var c=d(e,r,n);if("normal"===c.type){if(a=n.done?y:v,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function N(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,N(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=d(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var u=o.arg;return u?u.done?(r[e.resultName]=u.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):u:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function z(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},E(L.prototype),s(L.prototype,l,(function(){return this})),r.AsyncIterator=L,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var u=new L(f(e,t,n,a),o);return r.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},E(k),s(k,c,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=z,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var l=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(l&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(l){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:z(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function t(e,t,r,n,a,o,u){try{var i=e[o](u),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function r(e){return function(){var r=this,n=arguments;return new Promise((function(a,o){var u=e.apply(r,n);function i(e){t(u,a,o,i,l,"next",e)}function l(e){t(u,a,o,i,l,"throw",e)}i(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./persistentvolumeclaims-legacy.DQMBfojV.js","./k8s-legacy.DMyObMmE.js","./index-legacy.CrLAlmUo.js","./table-legacy.DR5yrfJ-.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./index-legacy.CjsCdAav.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./monaco-editor-vue3.es-legacy.a46gbKys.js","./js-yaml-legacy.DvjpT7r5.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popover-legacy.BVoPCIBV.js","./dropdown-legacy.Ei32dkXV.js","./age-legacy.B6tOd1kw.js"],(function(t,n){"use strict";var a,o,u,i,l,c,s,f,d,p,v,h,y,m,g,w,b,x,j,_,k,E,L;return{setters:[function(e){a=e.a,o=e.o,u=e.c,i=e.b,l=e.e,c=e.w,s=e.g,f=e.f,d=e.i,p=e.k,v=e.E},function(e){h=e.E},null,function(e){y=e.E},null,null,null,null,null,null,null,function(e){m=e.a,g=e.E},function(e){w=e.P,b=e.a,x=e.b,j=e.c,_=e.d},function(e){k=e.g},function(e){E=e._},function(e){L=e.default},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"dycloud-table-box"},O={class:"dycloud-btn-list"},N={key:0},S={class:"dycloud-pagination"},C={key:0},P={class:"dialog-footer"},z={name:"PersistentVolumeClaims"};t("default",Object.assign(z,{setup:function(t){var z=a({}),I=a(1),G=a(0),F=a(10),V=a([]),T=a(""),U=a({keywords:"",namespace:""}),A=a(!1),D=function(){U.value.keywords=""},Y=function(){I.value=1,F.value=10,M()},q=function(e){F.value=e,M()},H=function(e){I.value=e,M()},M=function(){var t=r(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({cluster_id:U.value.cluster_id,page:I.value,pageSize:F.value,namespace:U.value.namespace,keyword:U.value.keywords});case 2:0===(r=e.sent).code&&(V.value=r.data.items,G.value=r.data.total,I.value=r.data.page,F.value=r.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=a(!1),J=a(""),K=function(){var t=r(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return J.value="update",T.value="编辑",e.next=4,b({cluster_id:U.value.cluster_id,namespace:r.metadata.namespace,pvcName:r.metadata.name});case 4:if(!(n=e.sent).data.items){e.next=9;break}if(!n.data.items.code){e.next=9;break}return d({type:"error",message:n.data.items.message}),e.abrupt("return");case 9:0===n.code&&(z.value=n.data.items,A.value=!1,B.value=!0);case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Q=function(){B.value=!1,z.value={}},R=function(){var t=r(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.visible=!1,e.next=3,x({cluster_id:U.value.cluster_id,namespace:r.metadata.namespace,pvcName:r.metadata.name});case 3:if(!(n=e.sent).data.items){e.next=8;break}if(!n.data.items.code){e.next=8;break}return d({type:"error",message:n.data.items.message}),e.abrupt("return");case 8:0===n.code&&(d({type:"success",message:"删除成功"}),M());case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=r(e().mark((function t(r){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===r.code&&(d({type:"success",message:r.msg}),M());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),X=function(){var t=r(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=J.value,e.next="create"===e.t0?3:"update"===e.t0?7:11;break;case 3:return e.next=5,j({cluster_id:U.value.cluster_id,namespace:r.metadata.namespace,content:r});case 5:return n=e.sent,e.abrupt("break",15);case 7:return e.next=9,_({cluster_id:U.value.cluster_id,namespace:r.metadata.namespace,pvcName:r.metadata.name,content:r});case 9:return n=e.sent,e.abrupt("break",15);case 11:return e.next=13,j({cluster_id:U.value.cluster_id,content:r});case 13:return n=e.sent,e.abrupt("break",15);case 15:if(!n.data.items){e.next=19;break}if(!n.data.items.code){e.next=19;break}return d({type:"error",message:n.data.items.message}),e.abrupt("return");case 19:0===n.code&&(Q(),W(n));case 20:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z=function(){var t=r(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({cluster_id:U.value.cluster_id,namespace:r.metadata.namespace,pvcName:r.metadata.name});case 2:if(!(n=e.sent).data.items){e.next=7;break}if(!n.data.items.code){e.next=7;break}return d({type:"error",message:n.data.items.message}),e.abrupt("return");case 7:0===n.code&&(T.value="详情",z.value=n.data.items,z.value.cluster_id=U.value.cluster_id,A.value=!0,B.value=!0);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return window.addEventListener("setItemCluster",(function(e){U.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(function(e){U.value.namespace=localStorage.getItem("namespace"),M()})),function(e,t){var r=p,a=m,d=v,w=g,b=y,x=h;return o(),u("div",null,[i("div",n,[i("div",O,[l(w,{ref:"searchForm",inline:!0,model:U.value},{default:c((function(){return[l(a,{label:"名称"},{default:c((function(){return[l(r,{modelValue:U.value.keywords,"onUpdate:modelValue":t[0]||(t[0]=function(e){return U.value.keywords=e}),placeholder:"名称"},null,8,["modelValue"])]})),_:1}),l(a,null,{default:c((function(){return[l(d,{size:"small",type:"primary",icon:"search",onClick:Y},{default:c((function(){return t[3]||(t[3]=[s("查询")])})),_:1}),l(d,{size:"small",icon:"refresh",onClick:D},{default:c((function(){return t[4]||(t[4]=[s("重置")])})),_:1}),l(d,{size:"small",type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return J.value="create",T.value="创建",A.value=!1,z.value=k("persistentvolumeclaims",U.value.namespace,""),void(B.value=!0)})},{default:c((function(){return t[5]||(t[5]=[s("新增")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),V.value?(o(),u("div",N,[l(L,{"table-data":V.value,onUpdate:K,onDetail:Z,onDelete:R},null,8,["table-data"])])):f("",!0)]),i("div",S,[l(b,{"current-page":I.value,"page-size":F.value,"page-sizes":[10,30,50,100],total:G.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:H,onSizeChange:q},null,8,["current-page","page-size","total"])]),B.value?(o(),u("div",C,[l(x,{modelValue:B.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.value=e}),width:"60%",title:T.value},{default:c((function(){return[i("div",P,[l(E,{data:z.value,"read-only":A.value,onClose:Q,onEnter:X},null,8,["data","read-only"])])]})),_:1},8,["modelValue","title"])])):f("",!0)])}}}))}}}))}();