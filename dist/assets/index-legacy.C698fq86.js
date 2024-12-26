/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},i=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,u=Object.create(a.prototype),i=new C(r||[]);return o(u,"_invoke",{value:O(e,n,i)}),u}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var d="suspendedStart",v="suspendedYield",h="executing",y="completed",g={};function m(){}function w(){}function b(){}var x={};s(x,i,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(I([])));k&&k!==r&&a.call(k,i)&&(x=k);var E=b.prototype=m.prototype=Object.create(x);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function n(r,o,u,i){var l=p(e[r],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,i)}),(function(e){n("throw",e,u,i)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,i)}))}i(l.arg)}var r;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(o,o):o()}})}function O(e,n,r){var a=d;return function(o,u){if(a===h)throw Error("Generator is already running");if(a===y){if("throw"===o)throw u;return{value:t,done:!0}}for(r.method=o,r.arg=u;;){var i=r.delegate;if(i){var l=T(i,r);if(l){if(l===g)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var c=p(e,n,r);if("normal"===c.type){if(a=r.done?y:v,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=y,r.method="throw",r.arg=c.arg)}}}function T(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=p(a,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var u=o.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function z(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(z,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},_(L.prototype),s(L.prototype,l,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,a,o){void 0===o&&(o=Promise);var u=new L(f(e,t,r,a),o);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},_(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return i.type="throw",i.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var l=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(l&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(l){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function t(e,t,n,r,a,o,u){try{var i=e[o](u),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var u=e.apply(n,r);function i(e){t(u,a,o,i,l,"next",e)}function l(e){t(u,a,o,i,l,"throw",e)}i(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./popover-legacy.BVoPCIBV.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./buildEnv-legacy.o1JkwB5I.js","./form-legacy.BlCaTW76.js","./table-legacy.DwY7oids.js","./cloud_region-legacy.BAuqFRj_.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./index-legacy.CjsCdAav.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./dayjs.min-legacy.jnpfY90f.js","./stringFun-legacy.CSG30FnU.js"],(function(t,r){"use strict";var a,o,u,i,l,c,s,f,p,d,v,h,y,g,m,w,b,x,j,k,E,_,L,O,T;return{setters:[function(e){a=e.a,o=e.o,u=e.c,i=e.b,l=e.e,c=e.w,s=e.g,f=e.f,p=e.i,d=e.k,v=e.E},function(e){h=e.E},null,function(e){y=e.E},null,null,null,null,null,function(e){g=e.E},null,null,function(e){m=e.a,w=e.E},function(e){b=e.g,x=e.d,j=e.a,k=e.b,E=e.c,_=e.u},function(e){L=e.default},function(e){O=e.default},function(e){T=e.s},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r={class:"dycloud-search-box"},z={class:"dycloud-table-box"},S={class:"dycloud-btn-list"},C={style:{"text-align":"right","margin-top":"8px"}},I={key:0},G={class:"dycloud-pagination"},N={key:0},P={name:"Index"};t("default",Object.assign(P,{setup:function(t){var P=a({}),V=a(1),F=a(0),D=a(10),U=a([]),A=a(""),H=a({}),Y=a(!1),q=a([]),B=a([]),J=function(){H.value={}},M=function(e){H.value=e,Q()},R=function(){V.value=1,D.value=10,Q()},$=function(e){D.value=e,Q()},K=function(e){V.value=e,Q()},Q=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({page:V.value,pageSize:D.value,keyword:H.value.name});case 2:0===(n=e.sent).code&&(U.value=n.data.list,F.value=n.data.total,V.value=n.data.page,D.value=n.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Q();var W=a(!1),X=a(""),Z=function(){var t=n(e().mark((function t(n){var r,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n.ID);case 2:r=e.sent,X.value="update",A.value="更新",0===r.code&&(a=r.data,P.value={ID:a.ID,name:a.name,image:a.image,command:a.command,args:a.args,desc:a.desc},W.value=!0);case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ee=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({id:n.id});case 2:0===e.sent.code&&(p({type:"success",message:"操作成功"}),Q());case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),te=function(){W.value=!1,P.value={}},ne=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.visible=!1,e.next=3,j(n.ID);case 3:0===e.sent.code&&(p({type:"success",message:"删除成功"}),1===U.value.length&&V.value>1&&V.value--,Q());case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),re=function(e){q.value=e},ae=function(){var t=n(e().mark((function t(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q.value.map((function(e){return e.ID})),e.next=3,k({ids:n});case 3:0===(r=e.sent).code&&(p({type:"success",message:r.msg}),U.value.length===n.length&&V.value>1&&V.value--,Y.value=!1,Q());case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),oe=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===n.code&&(p({type:"success",message:n.msg}),1===U.value.length&&V.value>1&&V.value--,Q());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ue=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"kubernetes"===n.type?(n.type=0,n.config={type:0,conf:"config"===n.authType?n.conf:void 0,url:"token"===n.authType?n.url:void 0,token:"token"===n.authType?n.kubeToken:void 0},delete n.conf,delete n.url,delete n.kubeToken):"registry"===n.type&&(n.type=1,n.config={url:n.registryUrl,username:n.username,password:n.password,isHttps:n.isHttps},delete n.registryUrl,delete n.username,delete n.password,delete n.isHttps),delete n.authType,e.t0=X.value,e.next="create"===e.t0?7:"update"===e.t0?11:15;break;case 7:return e.next=9,E(n);case 9:return r=e.sent,e.abrupt("break",19);case 11:return e.next=13,_(n);case 13:return r=e.sent,e.abrupt("break",19);case 15:return e.next=17,E(n);case 17:return r=e.sent,e.abrupt("break",19);case 19:0===r.code&&(te(),oe(r));case 20:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ie=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,TestService(n);case 3:0===(r=e.sent).code&&p({type:"success",message:r.data});case 6:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(e,t){var n=d,a=m,p=v,b=w,x=g,j=y,k=h;return o(),u("div",null,[i("div",r,[l(b,{ref:"searchForm",inline:!0,model:H.value},{default:c((function(){return[l(a,{label:"名称"},{default:c((function(){return[l(n,{modelValue:H.value.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return H.value.name=e}),placeholder:"名称"},null,8,["modelValue"])]})),_:1}),l(a,null,{default:c((function(){return[l(p,{size:"small",type:"primary",icon:"search",onClick:R},{default:c((function(){return t[6]||(t[6]=[s("查询")])})),_:1}),l(p,{size:"small",icon:"refresh",onClick:J},{default:c((function(){return t[7]||(t[7]=[s("重置")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),i("div",z,[i("div",S,[l(p,{size:"small",type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return X.value="create",A.value="创建",P.value={name:"",image:"",command:"",args:"",desc:""},void(W.value=!0)})},{default:c((function(){return t[8]||(t[8]=[s("新增")])})),_:1}),l(x,{modelValue:Y.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Y.value=e}),placement:"top",width:"160"},{reference:c((function(){return[l(p,{icon:"delete",size:"small",disabled:!q.value.length,style:{"margin-left":"10px"},onClick:t[3]||(t[3]=function(e){return Y.value=!0})},{default:c((function(){return t[11]||(t[11]=[s("删除")])})),_:1},8,["disabled"])]})),default:c((function(){return[t[12]||(t[12]=i("p",null,"确定要删除吗？",-1)),i("div",C,[l(p,{size:"small",type:"primary",link:"",onClick:t[2]||(t[2]=function(e){return Y.value=!1})},{default:c((function(){return t[9]||(t[9]=[s("取消")])})),_:1}),l(p,{size:"small",type:"primary",onClick:ae},{default:c((function(){return t[10]||(t[10]=[s("确定")])})),_:1})])]})),_:1},8,["modelValue"])]),U.value?(o(),u("div",I,[l(O,{"table-data":U.value,onUpdate:Z,onSearch:M,onTest:ie,onSelect:re,onDelete:ne,onRegion:ee},null,8,["table-data"])])):f("",!0)]),i("div",G,[l(j,{"current-page":V.value,"page-size":D.value,"page-sizes":[10,30,50,100],total:F.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:K,onSizeChange:$},null,8,["current-page","page-size","total"])]),W.value?(o(),u("div",N,[l(k,{modelValue:W.value,"onUpdate:modelValue":t[5]||(t[5]=function(e){return W.value=e}),width:"40%",title:A.value,"show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{default:c((function(){return[l(L,{form:P.value,regions:B.value,onClose:te,type:X.value,onEnter:ue},null,8,["form","regions","type"])]})),_:1},8,["modelValue","title"])])):f("",!0)])}}}))}}}))}();