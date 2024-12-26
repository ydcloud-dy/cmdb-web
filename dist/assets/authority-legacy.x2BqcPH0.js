/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},i=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,u=Object.create(a.prototype),i=new O(n||[]);return o(u,"_invoke",{value:L(t,r,i)}),u}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",y="suspendedYield",p="executing",v="completed",g={};function m(){}function w(){}function b(){}var j={};s(j,i,(function(){return this}));var x=Object.getPrototypeOf,I=x&&x(x(P([])));I&&I!==n&&a.call(I,i)&&(j=I);var _=b.prototype=m.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(n,o,u,i){var l=d(t[n],t,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,i)}),(function(t){r("throw",t,u,i)})):e.resolve(s).then((function(t){c.value=t,u(c)}),(function(t){return r("throw",t,u,i)}))}i(l.arg)}var n;o(this,"_invoke",{value:function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}})}function L(t,r,n){var a=h;return function(o,u){if(a===p)throw Error("Generator is already running");if(a===v){if("throw"===o)throw u;return{value:e,done:!0}}for(n.method=o,n.arg=u;;){var i=n.delegate;if(i){var l=N(i,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var c=d(t,r,n);if("normal"===c.type){if(a=n.done?v:y,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function N(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=d(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var u=o.arg;return u?u.done?(r[t.resultName]=u.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):u:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return w.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=s(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},r.awrap=function(t){return{__await:t}},k(E.prototype),s(E.prototype,l,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,a,o){void 0===o&&(o=Promise);var u=new E(f(t,e,n,a),o);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},k(_),s(_,c,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var l=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(l&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(l){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;V(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function e(t,e,r,n,a,o,u){try{var i=t[o](u),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(n,a)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(a,o){var u=t.apply(r,n);function i(t){e(u,a,o,i,l,"next",t)}function l(t){e(u,a,o,i,l,"throw",t)}i(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./tab-pane-legacy.DpVaa-__.js","./drawer-legacy.B124LicV.js","./overlay-legacy.BUxXTiH4.js","./form-legacy.0XPxLcB_.js","./input-legacy.DqeBI0DR.js","./form-item-legacy.BSRxtXpO.js","./cascader-panel-legacy.BpDdM8c3.js","./popper-legacy.BkTYt---.js","./tag-legacy.Ca3_ouli.js","./checkbox-legacy.CC9hZC3z.js","./radio-legacy.DUa6CodL.js","./scrollbar-legacy.dKZTD6w2.js","./table-column-legacy.BxF_olX2.js","./tooltip-legacy.DJvkFyUq.js","./button-legacy.CH0FoAJ-.js","./authority-legacy.BFtZTrUh.js","./menus-legacy.CbekgzmL.js","./apis-legacy.dWzTQ3SF.js","./datas-legacy.CkrnPVDs.js","./warningBar-legacy.CnYSZ35K.js","./strings-legacy.Wo7ipnce.js","./index-legacy.5aKQ1vKy.js","./index-legacy.DGP8eUsx.js","./index-legacy.CjsCdAav.js","./castArray-legacy.Dek4eNNY.js","./_baseClone-legacy.CxPdKCcf.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./index-legacy.VcYNc2Mg.js","./isEqual-legacy.wQ-Y-8LH.js","./arrays-legacy.DowQ5ujz.js","./cloneDeep-legacy.dnKVeAL8.js","./index-legacy.DPmmO7_J.js","./index-legacy.DglejgZI.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./dialog-legacy.DSWM2KL1.js","./refs-legacy.DKcspM8g.js","./tree-legacy.Cae1zmsE.js","./authorityBtn-legacy.CUUsdd54.js","./index-legacy.BYSbXEkb.js","./token-legacy.D8ssuuq3.js","./index-legacy.DQDNgjSh.js","./api-legacy.CXAuBNVS.js","./checkbox-group-legacy.BUdIK1Mh.js"],(function(e,n){"use strict";var a,o,u,i,l,c,s,f,d,h,y,p,v,g,m,w,b,j,x,I,_,k,E,L,N,C,V,O,P,A,S;return{setters:[function(t){a=t.a,o=t.o,u=t.c,i=t.e,l=t.b,c=t.w,s=t.g,f=t.t,d=t.h,h=t.f,y=t.cu,p=t.i,v=t.E,g=t.k},function(t){m=t.E,w=t.a},function(t){b=t.E},null,null,null,function(t){j=t.a,x=t.E},function(t){I=t.E},null,null,null,null,null,function(t){_=t.E,k=t.a},null,null,function(t){E=t.g,L=t.d,N=t.c,C=t.u,V=t.a},function(t){O=t.default},function(t){P=t.default},function(t){A=t.default},function(t){S=t._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".authority .el-input-number{margin-left:15px}.authority .el-input-number span{display:none}.tree-content{margin-top:10px;height:calc(100vh - 158px);overflow:auto}\n",document.head.appendChild(n);var G={class:"authority"},T={class:"dycloud-table-box"},F={class:"dycloud-btn-list"},U={class:"flex justify-between items-center"},D={class:"text-lg"};e("default",Object.assign({name:"Authority"},{__name:"authority",setup:function(e){var n=a([{authorityId:0,authorityName:"根角色/严格模式下为当前角色"}]),q=a(!1),B=a("add"),R=a({}),Y=a("新增角色"),z=a(!1),H=a(!1),Q=a({}),W=a({authorityId:0,authorityName:"",parentId:0}),Z=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:function(t,e,r){return/^[0-9]*[1-9][0-9]*$/.test(e)?r():r(new Error("请输入正整数"))},trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),$=a([]),J=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:0===(r=t.sent).code&&($.value=r.data);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();J();var K=function(t,e){R.value[t]=e},M=a(null),X=a(null),tt=a(null),et=function(t,e){var r=[M,X,tt];e&&r[e].value.needConfirm&&(r[e].value.enterAndNext(),r[e].value.needConfirm=!1)},rt=a(null),nt=function(){rt.value&&rt.value.resetFields(),W.value={authorityId:0,authorityName:"",parentId:0}},at=function(){nt(),z.value=!1,H.value=!1},ot=function(){rt.value.validate(function(){var e=r(t().mark((function e(r){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=27;break}W.value.authorityId=Number(W.value.authorityId),t.t0=B.value,t.next="add"===t.t0?5:"edit"===t.t0?10:"copy"===t.t0?15:25;break;case 5:return t.next=7,V(W.value);case 7:return 0===t.sent.code&&(p({type:"success",message:"添加成功!"}),J(),at()),t.abrupt("break",25);case 10:return t.next=12,C(W.value);case 12:return 0===t.sent.code&&(p({type:"success",message:"添加成功!"}),J(),at()),t.abrupt("break",25);case 15:return(n={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0}).authority.authorityId=W.value.authorityId,n.authority.authorityName=W.value.authorityName,n.authority.parentId=W.value.parentId,n.authority.dataAuthorityId=Q.value.dataAuthorityId,n.oldAuthorityId=Q.value.authorityId,t.next=23,N(n);case 23:0===t.sent.code&&(p({type:"success",message:"复制成功！"}),J());case 25:nt(),z.value=!1;case 27:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ut=function(){n.value=[{authorityId:0,authorityName:"根角色(严格模式下为当前用户角色)"}],it($.value,n.value,!1)},it=function(t,e,r){t&&t.forEach((function(t){if(t.children&&t.children.length){var n={authorityId:t.authorityId,authorityName:t.authorityName,disabled:r||t.authorityId===W.value.authorityId,children:[]};it(t.children,n.children,r||t.authorityId===W.value.authorityId),e.push(n)}else{var a={authorityId:t.authorityId,authorityName:t.authorityName,disabled:r||t.authorityId===W.value.authorityId};e.push(a)}}))},lt=function(t){nt(),Y.value="新增角色",B.value="add",W.value.parentId=t,ut(),z.value=!0};return function(e,a){var E=v,N=_,C=k,V=I,H=j,nt=g,it=x,ct=b,st=m,ft=w;return o(),u("div",G,[i(S,{title:"注：右上角头像下拉可切换角色"}),l("div",T,[l("div",F,[i(E,{type:"primary",icon:"plus",onClick:a[0]||(a[0]=function(t){return lt(0)})},{default:c((function(){return a[6]||(a[6]=[s("新增角色")])})),_:1})]),i(C,{data:$.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:c((function(){return[i(N,{label:"角色ID","min-width":"180",prop:"authorityId"}),i(N,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),i(N,{align:"left",label:"操作",width:"460"},{default:c((function(e){return[i(E,{icon:"setting",type:"primary",link:"",onClick:function(t){return r=e.row,q.value=!0,void(R.value=r);var r}},{default:c((function(){return a[7]||(a[7]=[s("设置权限")])})),_:2},1032,["onClick"]),i(E,{icon:"plus",type:"primary",link:"",onClick:function(t){return lt(e.row.authorityId)}},{default:c((function(){return a[8]||(a[8]=[s("新增子角色")])})),_:2},1032,["onClick"]),i(E,{icon:"copy-document",type:"primary",link:"",onClick:function(t){return function(t){for(var e in ut(),Y.value="拷贝角色",B.value="copy",W.value)W.value[e]=t[e];Q.value=t,z.value=!0}(e.row)}},{default:c((function(){return a[9]||(a[9]=[s("拷贝")])})),_:2},1032,["onClick"]),i(E,{icon:"edit",type:"primary",link:"",onClick:function(t){return function(t){for(var e in ut(),Y.value="编辑角色",B.value="edit",W.value)W.value[e]=t[e];ut(),rt.value&&rt.value.clearValidate(),z.value=!0}(e.row)}},{default:c((function(){return a[10]||(a[10]=[s("编辑")])})),_:2},1032,["onClick"]),i(E,{icon:"delete",type:"primary",link:"",onClick:function(n){return a=e.row,void y.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L({authorityId:a.authorityId});case 2:0===t.sent.code&&(p({type:"success",message:"删除成功!"}),J());case 4:case"end":return t.stop()}}),e)})))).catch((function(){p({type:"info",message:"已取消删除"})}));var a}},{default:c((function(){return a[11]||(a[11]=[s("删除")])})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),i(ct,{modelValue:z.value,"onUpdate:modelValue":a[4]||(a[4]=function(t){return z.value=t}),"show-close":!1},{header:c((function(){return[l("div",U,[l("span",D,f(Y.value),1),l("div",null,[i(E,{onClick:at},{default:c((function(){return a[12]||(a[12]=[s("取 消")])})),_:1}),i(E,{type:"primary",onClick:ot},{default:c((function(){return a[13]||(a[13]=[s("确 定")])})),_:1})])])]})),default:c((function(){return[i(it,{ref_key:"authorityForm",ref:rt,model:W.value,rules:Z.value,"label-width":"80px"},{default:c((function(){return[i(H,{label:"父级角色",prop:"parentId"},{default:c((function(){return[i(V,{modelValue:W.value.parentId,"onUpdate:modelValue":a[1]||(a[1]=function(t){return W.value.parentId=t}),style:{width:"100%"},disabled:"add"===B.value,options:n.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),i(H,{label:"角色ID",prop:"authorityId"},{default:c((function(){return[i(nt,{modelValue:W.value.authorityId,"onUpdate:modelValue":a[2]||(a[2]=function(t){return W.value.authorityId=t}),disabled:"edit"===B.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])]})),_:1}),i(H,{label:"角色姓名",prop:"authorityName"},{default:c((function(){return[i(nt,{modelValue:W.value.authorityName,"onUpdate:modelValue":a[3]||(a[3]=function(t){return W.value.authorityName=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"]),q.value?(o(),d(ct,{key:0,modelValue:q.value,"onUpdate:modelValue":a[5]||(a[5]=function(t){return q.value=t}),"with-header":!1,size:"40%",title:"角色配置"},{default:c((function(){return[i(ft,{"before-leave":et,type:"border-card"},{default:c((function(){return[i(st,{label:"角色菜单"},{default:c((function(){return[i(O,{ref_key:"menus",ref:M,row:R.value,onChangeRow:K},null,8,["row"])]})),_:1}),i(st,{label:"角色api"},{default:c((function(){return[i(P,{ref_key:"apis",ref:X,row:R.value,onChangeRow:K},null,8,["row"])]})),_:1}),i(st,{label:"资源权限"},{default:c((function(){return[i(A,{ref_key:"datas",ref:tt,authority:$.value,row:R.value,onChangeRow:K},null,8,["authority","row"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])):h("",!0)])}}}))}}}))}();