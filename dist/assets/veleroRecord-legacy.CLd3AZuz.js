/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return a};var t,a={},n=Object.prototype,r=n.hasOwnProperty,l=Object.defineProperty||function(e,t,a){e[t]=a.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,a){return e[t]=a}}function d(e,t,a,n){var r=t&&t.prototype instanceof h?t:h,u=Object.create(r.prototype),o=new N(n||[]);return l(u,"_invoke",{value:V(e,a,o)}),u}function f(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}a.wrap=d;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",g={};function h(){}function j(){}function w(){}var b={};s(b,o,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(C([])));k&&k!==n&&r.call(k,o)&&(b=k);var _=w.prototype=h.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function a(n,l,u,o){var i=f(e[n],e,l);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){a("next",e,u,o)}),(function(e){a("throw",e,u,o)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return a("throw",e,u,o)}))}o(i.arg)}var n;l(this,"_invoke",{value:function(e,r){function l(){return new t((function(t,n){a(e,r,t,n)}))}return n=n?n.then(l,l):l()}})}function V(e,a,n){var r=p;return function(l,u){if(r===m)throw Error("Generator is already running");if(r===y){if("throw"===l)throw u;return{value:t,done:!0}}for(n.method=l,n.arg=u;;){var o=n.delegate;if(o){var i=T(o,n);if(i){if(i===g)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var c=f(e,a,n);if("normal"===c.type){if(r=n.done?y:v,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=y,n.method="throw",n.arg=c.arg)}}}function T(e,a){var n=a.method,r=e.iterator[n];if(r===t)return a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=t,T(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var l=f(r,e.iterator,a.arg);if("throw"===l.type)return a.method="throw",a.arg=l.arg,a.delegate=null,g;var u=l.arg;return u?u.done?(a[e.resultName]=u.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,g):u:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function C(e){if(e||""===e){var a=e[o];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function a(){for(;++n<e.length;)if(r.call(e,n))return a.value=e[n],a.done=!1,a;return a.value=t,a.done=!0,a};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return j.prototype=w,l(_,"constructor",{value:w,configurable:!0}),l(w,"constructor",{value:j,configurable:!0}),j.displayName=s(w,c,"GeneratorFunction"),a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},a.awrap=function(e){return{__await:e}},E(L.prototype),s(L.prototype,i,(function(){return this})),a.AsyncIterator=L,a.async=function(e,t,n,r,l){void 0===l&&(l=Promise);var u=new L(d(e,t,n,r),l);return a.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},E(_),s(_,c,"Generator"),s(_,o,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),a.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},a.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function n(n,r){return o.type="throw",o.arg=e,a.next=n,r&&(a.method="next",a.arg=t),!!r}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,g):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),S(a),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;S(a)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,a,n){return this.delegate={iterator:C(e),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=t),g}},a}function t(e,t,a,n,r,l,u){try{var o=e[l](u),i=o.value}catch(e){return void a(e)}o.done?t(i):Promise.resolve(i).then(n,r)}function a(e){return function(){var a=this,n=arguments;return new Promise((function(r,l){var u=e.apply(a,n);function o(e){t(u,r,l,o,i,"next",e)}function i(e){t(u,r,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./k8s-legacy.DMyObMmE.js","./yaml-legacy.I1TApIMY.js","./recordTable-legacy.CzcozjaL.js","./detail-legacy.BD0rEbi1.js","./createRestore-legacy.CFkbLA_0.js","./velero-legacy.yU7msqZM.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./index-legacy.CjsCdAav.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./monaco-editor-vue3.es-legacy.a46gbKys.js","./js-yaml-legacy.DvjpT7r5.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popover-legacy.BVoPCIBV.js","./dropdown-legacy.Ei32dkXV.js","./col-legacy.tMI9428i.js","./tab-pane-legacy.DpVaa-__.js","./index-legacy.5aKQ1vKy.js","./card-legacy.EIB5U9Pv.js","./detail-basic-legacy.D6mIBUYv.js","./age-legacy.B6tOd1kw.js","./link-legacy.9nArvqF3.js","./detail-pods-legacy.C8pMqjri.js","./dropdown-item-legacy.CVx0pdJ_.js","./metrics-legacy.DN4d2MBK.js","./terminal-legacy.CNeayivl.js","./xterm-legacy.C7iTxYx2.js","./xterm-legacy.CncnO5QC.js","./xterm-addon-fit-legacy.BgFhqBhw.js","./index-legacy.-ouNXvAL.js","./index-legacy.MUWnlxzq.js","./terminal-log-legacy.BTG7uPc4.js","./monitor-legacy.XOs_Tcev.js","./date-picker-legacy.Cu_U60XV.js","./dayjs.min-legacy.jnpfY90f.js","./arrays-legacy.DowQ5ujz.js","./index-legacy.xSvwTSbp.js","./detail-ports-legacy.DIetkROR.js","./radio-group-legacy.b3NdNxxp.js","./radio-legacy.DUa6CodL.js","./namespaces-legacy.BQEEK17s.js","./index-legacy.VcYNc2Mg.js"],(function(t,n){"use strict";var r,l,u,o,i,c,s,d,f,p,v,m,y,g,h,j,w,b,x,k,_,E,L,V,T,O,S,N;return{setters:[function(e){r=e.a,l=e.H,u=e.P,o=e.o,i=e.c,c=e.b,s=e.e,d=e.w,f=e.g,p=e.f,v=e.i,m=e.k,y=e.E},function(e){g=e.E},null,function(e){h=e.E},null,null,null,null,null,null,null,function(e){j=e.a,w=e.E},function(e){b=e.g},function(e){x=e.default},function(e){k=e.default},function(e){_=e.default},function(e){E=e.default},function(e){L=e.e,V=e.f,T=e.g,O=e.h,S=e.i,N=e.j},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n={class:"dycloud-table-box"},C={class:"dycloud-btn-list"},z={key:0},I={class:"dycloud-pagination"},P={key:0},R={class:"dialog-footer"},D={key:1},F={class:"dialog-footer"},G={key:2},U={class:"dialog-footer"},A={key:3},Y={class:"dialog-footer"},H={name:"veleroTasks"};t("default",Object.assign(H,{setup:function(t){var H=r({}),M=r(1),B=r(0),K=r(10),q=r([]),J=r(""),X=r({keywords:"",namespace:""}),Q=r(!1),W=function(){X.value.keywords=""},Z=function(){M.value=1,K.value=10,te()},$=function(e){K.value=e,te()},ee=function(e){M.value=e,te()},te=function(){var t=a(e().mark((function t(){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({cluster_id:X.value.cluster_id,page:M.value,pageSize:K.value,namespace:X.value.namespace,keyword:X.value.keywords});case 2:0===(a=e.sent).code&&(a.data.items.forEach((function(e){e.status.expiration&&(e.status.expiration=new Date(e.status.expiration).toLocaleString()),e.metadata.creationTimestamp&&(e.metadata.creationTimestamp=new Date(e.metadata.creationTimestamp).toLocaleString()),e.status.startTimestamp&&(e.status.startTimestamp=new Date(e.status.startTimestamp).toLocaleString()),e.status.completionTimestamp&&(e.status.completionTimestamp=new Date(e.status.completionTimestamp).toLocaleString())})),q.value=a.data.items,B.value=a.data.total,M.value=a.data.page,K.value=a.data.pageSize);case 6:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ae=r(!1),ne=r("");l((function(){return"create"===ne.value?"新增":"更新"}));var re=function(){var t=a(e().mark((function t(a){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne.value="update",J.value="编辑",e.next=4,V({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,VeleroRecordName:a.metadata.name});case 4:if(!(n=e.sent).data.items){e.next=9;break}if(!n.data.items.code){e.next=9;break}return v({type:"error",message:n.data.items.message}),e.abrupt("return");case 9:0===n.code&&(H.value=n.data.items,ae.value=!0);case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),le=r(!1),ue=function(){var t=a(e().mark((function t(a){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ne.value="restore",J.value="还原",Q.value=!1,H.value=b("restore",X.value.namespace,""),le.value=!0,H.value.spec.backupName=a.metadata.name;case 13:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=function(){var t=a(e().mark((function t(a){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ne.value="update",J.value="编辑",e.next=4,V({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,VeleroRecordName:a.metadata.name});case 4:if(!(n=e.sent).data.items){e.next=9;break}if(!n.data.items.code){e.next=9;break}return v({type:"error",message:n.data.items.message}),e.abrupt("return");case 9:0===n.code&&(H.value=n.data.items,Q.value=!0,fe.value=!0);case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ie=function(){ae.value=!1,fe.value=!1,pe.value=!1,le.value=!1,H.value={}},ce=function(){var t=a(e().mark((function t(a){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.visible=!1,e.next=3,T({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,VeleroRecordName:a.metadata.name});case 3:if(!(n=e.sent).data.items){e.next=8;break}if(!n.data.items.code){e.next=8;break}return v({type:"error",message:n.data.items.message}),e.abrupt("return");case 8:0===n.code&&(v({type:"success",message:"删除成功"}),te());case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),se=function(){var t=a(e().mark((function t(a){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===a.code&&(v({type:"success",message:a.msg}),te());case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),de=function(){var t=a(e().mark((function t(a){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=ne.value,e.next="create"===e.t0?6:"update"===e.t0?10:"restore"===e.t0?14:18;break;case 6:return e.next=8,O({cluster_id:X.value.cluster_id,content:a});case 8:return n=e.sent,e.abrupt("break",22);case 10:return e.next=12,N({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,VeleroRecordName:a.metadata.name,content:a});case 12:return n=e.sent,e.abrupt("break",22);case 14:return e.next=16,S({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,content:a});case 16:return n=e.sent,e.abrupt("break",22);case 18:return e.next=20,O({cluster_id:X.value.cluster_id,content:a});case 20:return n=e.sent,e.abrupt("break",22);case 22:if(!n.data.items){e.next=26;break}if(!n.data.items.code){e.next=26;break}return v({type:"error",message:n.data.items.message}),e.abrupt("return");case 26:0===n.code&&(ie(),se(n));case 27:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fe=r(!1),pe=r(!1),ve=function(){var t=a(e().mark((function t(a){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V({cluster_id:X.value.cluster_id,namespace:a.metadata.namespace,VeleroRecordName:a.metadata.name});case 2:if(!(n=e.sent).data.items){e.next=7;break}if(!n.data.items.code){e.next=7;break}return v({type:"error",message:n.data.items.message}),e.abrupt("return");case 7:0===n.code&&(J.value="详情",H.value=n.data.items,H.value.cluster_id=X.value.cluster_id,H.value.type="deployment"),pe.value=!0;case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return window.addEventListener("setItemCluster",(function(e){X.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(function(e){X.value.namespace=localStorage.getItem("namespace"),te()})),function(e,t){var a=m,r=j,l=y,v=w,L=h,V=g,T=u("CreateVeleroRecord");return o(),i("div",null,[c("div",n,[c("div",C,[s(v,{ref:"searchForm",inline:!0,model:X.value},{default:d((function(){return[s(r,{label:"名称"},{default:d((function(){return[s(a,{modelValue:X.value.keywords,"onUpdate:modelValue":t[0]||(t[0]=function(e){return X.value.keywords=e}),placeholder:"名称"},null,8,["modelValue"])]})),_:1}),s(r,null,{default:d((function(){return[s(l,{size:"small",type:"primary",icon:"search",onClick:Z},{default:d((function(){return t[7]||(t[7]=[f("查询")])})),_:1}),s(l,{size:"small",icon:"refresh",onClick:W},{default:d((function(){return t[8]||(t[8]=[f("重置")])})),_:1}),s(l,{size:"small",type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return ne.value="create",J.value="创建",H.value=b("backup",X.value.namespace,""),void(ae.value=!0)})},{default:d((function(){return t[9]||(t[9]=[f("YAML")])})),_:1}),s(l,{size:"small",type:"primary",icon:"plus",onClick:t[2]||(t[2]=function(e){return ne.value="create",J.value="创建",Q.value=!1,H.value=b("backup",X.value.namespace,""),void(fe.value=!0)})},{default:d((function(){return t[10]||(t[10]=[f("新增")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),q.value?(o(),i("div",z,[s(k,{"table-data":q.value,onYaml_update:re,onReduction:ue,onUpdate:oe,onDetail:ve,onDelete:ce},null,8,["table-data"])])):p("",!0)]),c("div",I,[s(L,{"current-page":M.value,"page-size":K.value,"page-sizes":[10,30,50,100],total:B.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ee,onSizeChange:$},null,8,["current-page","page-size","total"])]),ae.value?(o(),i("div",P,[s(V,{modelValue:ae.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return ae.value=e}),width:"60%",title:J.value},{default:d((function(){return[c("div",R,[s(x,{data:H.value,onClose:ie,onEnter:de},null,8,["data"])])]})),_:1},8,["modelValue","title"])])):p("",!0),fe.value?(o(),i("div",D,[s(V,{modelValue:fe.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return fe.value=e}),title:"dialogTitle",width:"70%"},{default:d((function(){return[c("div",F,[s(T,{cluster:X.value.cluster_id,form:H.value,readonly:Q.value,onClose:ie,onEnter:de},null,8,["cluster","form","readonly"])])]})),_:1},8,["modelValue"])])):p("",!0),le.value?(o(),i("div",G,[s(V,{modelValue:le.value,"onUpdate:modelValue":t[5]||(t[5]=function(e){return le.value=e}),title:"dialogTitle",width:"70%"},{default:d((function(){return[c("div",U,[s(E,{cluster:X.value.cluster_id,form:H.value,readonly:Q.value,onClose:ie,onEnter:de},null,8,["cluster","form","readonly"])])]})),_:1},8,["modelValue"])])):p("",!0),pe.value?(o(),i("div",A,[s(V,{modelValue:pe.value,"onUpdate:modelValue":t[6]||(t[6]=function(e){return pe.value=e}),width:"70%",title:J.value},{default:d((function(){return[c("div",Y,[s(_,{data:H.value,"read-only":Q.value,onClose:ie,onEnter:de},null,8,["data","read-only"])])]})),_:1},8,["modelValue","title"])])):p("",!0)])}}}))}}}))}();
