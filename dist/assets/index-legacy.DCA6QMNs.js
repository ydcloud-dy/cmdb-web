/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,u=Object.create(a.prototype),l=new I(r||[]);return o(u,"_invoke",{value:O(e,n,l)}),u}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var y="suspendedStart",h="suspendedYield",v="executing",d="completed",g={};function m(){}function w(){}function b(){}var j={};s(j,l,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(C([])));k&&k!==r&&a.call(k,l)&&(j=k);var E=b.prototype=m.prototype=Object.create(j);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(r,o,u,l){var i=p(e[r],e,o);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,l)}),(function(e){n("throw",e,u,l)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,l)}))}l(i.arg)}var r;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(o,o):o()}})}function O(e,n,r){var a=y;return function(o,u){if(a===v)throw Error("Generator is already running");if(a===d){if("throw"===o)throw u;return{value:t,done:!0}}for(r.method=o,r.arg=u;;){var l=r.delegate;if(l){var i=T(l,r);if(i){if(i===g)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===y)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=p(e,n,r);if("normal"===c.type){if(a=r.done?d:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=d,r.method="throw",r.arg=c.arg)}}}function T(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var u=o.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function z(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},L(_.prototype),s(_.prototype,i,(function(){return this})),n.AsyncIterator=_,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var u=new _(f(e,t,r,a),o);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},L(E),s(E,c,"Generator"),s(E,l,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=C,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],l=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),z(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;z(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function t(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){return void n(e)}l.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var u=e.apply(n,r);function l(e){t(u,a,o,l,i,"next",e)}function i(e){t(u,a,o,l,i,"throw",e)}l(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./codeSource-legacy.DmIOpL3T.js","./form-legacy.PWwxzAJJ.js","./table-legacy.DRIfdjri.js","./cloud_region-legacy.BAuqFRj_.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./index-legacy.CjsCdAav.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./radio-group-legacy.b3NdNxxp.js","./radio-legacy.DUa6CodL.js","./index-legacy.VcYNc2Mg.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popover-legacy.BVoPCIBV.js","./dropdown-legacy.Ei32dkXV.js","./dayjs.min-legacy.jnpfY90f.js","./stringFun-legacy.CSG30FnU.js"],(function(t,r){"use strict";var a,o,u,l,i,c,s,f,p,y,h,v,d,g,m,w,b,j,x,k,E,L,_,O;return{setters:[function(e){a=e.a,o=e.o,u=e.c,l=e.b,i=e.e,c=e.w,s=e.g,f=e.f,p=e.i,y=e.k,h=e.E},function(e){v=e.E},null,function(e){d=e.E},null,null,null,null,null,null,null,function(e){g=e.a,m=e.E},function(e){w=e.g,b=e.d,j=e.a,x=e.c,k=e.u,E=e.T},function(e){L=e.default},function(e){_=e.default},function(e){O=e.s},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={class:"dycloud-search-box"},T={class:"dycloud-table-box"},S={class:"dycloud-btn-list"},z={key:0},I={class:"dycloud-pagination"},C={key:0},G={name:"Index"};t("default",Object.assign(G,{setup:function(t){var G=a({}),N=a(1),P=a(0),F=a(10),U=a([]),D=a(""),V=a({});a(!1);var A=a([]),H=a([]),R=function(){V.value={}},Y=function(e){V.value=e,J()},q=function(){N.value=1,F.value=10,J()},B=function(e){F.value=e,J()},M=function(e){N.value=e,J()},J=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({page:N.value,pageSize:F.value,keyword:V.value.name});case 2:0===(n=e.sent).code&&(U.value=n.data.list,P.value=n.data.total,N.value=n.data.page,F.value=n.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();J();var K=a(!1),Q=a("请输入地址"),W=a(!1),X=a(""),Z=function(){var t=n(e().mark((function t(n){var r,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n.ID);case 2:r=e.sent,X.value="update",D.value="更新",0===r.code&&(a=r.data,G.value={ID:a.ID,name:a.name,desc:a.desc,type:a.type,repositoryType:0===a.config.type?"private":"public",url:a.config.url||"",username:3===a.type&&0===a.config.type?a.config.username:"",token:a.config.token||""},4===a.type?(G.value.url="https://github.com",K.value=!0,Q.value="https://github.com"):5===a.type?(G.value.url="https://gitee.com",K.value=!0,Q.value="https://gitee.com"):(K.value=!1,Q.value="请输入地址"),W.value=!0);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({id:n.id});case 2:0===e.sent.code&&(p({type:"success",message:"操作成功"}),J());case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ee=function(){W.value=!1,G.value={}},te=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.visible=!1,e.next=3,j(n.ID);case 3:0===e.sent.code&&(p({type:"success",message:"删除成功"}),1===U.value.length&&N.value>1&&N.value--,J());case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ne=function(e){A.value=e},re=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===n.code&&(p({type:"success",message:n.msg}),1===U.value.length&&N.value>1&&N.value--,J());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ae=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"kubernetes"===n.type?(n.type=0,n.config={type:0,conf:"config"===n.authType?n.conf:void 0,url:"token"===n.authType?n.url:void 0,token:"token"===n.authType?n.kubeToken:void 0},delete n.conf,delete n.url,delete n.kubeToken):"registry"===n.type&&(n.type=1,n.config={url:n.registryUrl,username:n.username,password:n.password,isHttps:n.isHttps},delete n.registryUrl,delete n.username,delete n.password,delete n.isHttps),delete n.authType,e.t0=X.value,e.next="create"===e.t0?7:"update"===e.t0?11:15;break;case 7:return e.next=9,x(n);case 9:return r=e.sent,e.abrupt("break",19);case 11:return e.next=13,k(n);case 13:return r=e.sent,e.abrupt("break",19);case 15:return e.next=17,x(n);case 17:return r=e.sent,e.abrupt("break",19);case 19:0===r.code&&(ee(),re(r));case 20:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,E(n);case 3:0===(r=e.sent).code&&p({type:"success",message:r.data});case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(e,t){var n=y,a=g,p=h,w=m,b=d,j=v;return o(),u("div",null,[l("div",r,[i(w,{ref:"searchForm",inline:!0,model:V.value},{default:c((function(){return[i(a,{label:"名称"},{default:c((function(){return[i(n,{modelValue:V.value.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.value.name=e}),placeholder:"名称"},null,8,["modelValue"])]})),_:1}),i(a,null,{default:c((function(){return[i(p,{size:"small",type:"primary",icon:"search",onClick:q},{default:c((function(){return t[3]||(t[3]=[s("查询")])})),_:1}),i(p,{size:"small",icon:"refresh",onClick:R},{default:c((function(){return t[4]||(t[4]=[s("重置")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),l("div",T,[l("div",S,[i(p,{size:"small",type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return X.value="create",D.value="创建",G.value={repositoryType:"private",type:3},void(W.value=!0)})},{default:c((function(){return t[5]||(t[5]=[s("新增")])})),_:1})]),U.value?(o(),u("div",z,[i(_,{"table-data":U.value,onUpdate:Z,onSearch:Y,onTest:oe,onSelect:ne,onDelete:te,onRegion:$},null,8,["table-data"])])):f("",!0)]),l("div",I,[i(b,{"current-page":N.value,"page-size":F.value,"page-sizes":[10,30,50,100],total:P.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:M,onSizeChange:B},null,8,["current-page","page-size","total"])]),W.value?(o(),u("div",C,[i(j,{modelValue:W.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return W.value=e}),width:"40%",title:D.value,"show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{default:c((function(){return[i(L,{form:G.value,regions:H.value,"is-url-disabled":K.value,"url-placeholder":Q.value,onClose:ee,type:X.value,onEnter:ae},null,8,["form","regions","is-url-disabled","url-placeholder","type"])]})),_:1},8,["modelValue","title"])])):f("",!0)])}}}))}}}))}();