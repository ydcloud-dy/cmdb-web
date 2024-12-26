/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,u=Object.create(a.prototype),o=new z(r||[]);return l(u,"_invoke",{value:C(e,n,o)}),u}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",v="suspendedYield",h="executing",m="completed",y={};function g(){}function b(){}function w(){}var x={};s(x,o,(function(){return this}));var _=Object.getPrototypeOf,V=_&&_(_(P([])));V&&V!==r&&a.call(V,o)&&(x=V);var j=w.prototype=g.prototype=Object.create(x);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(r,l,u,o){var i=d(e[r],e,l);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(l,l):l()}})}function C(e,n,r){var a=p;return function(l,u){if(a===h)throw Error("Generator is already running");if(a===m){if("throw"===l)throw u;return{value:t,done:!0}}for(r.method=l,r.arg=u;;){var o=r.delegate;if(o){var i=S(o,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var c=d(e,n,r);if("normal"===c.type){if(a=r.done?m:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}function S(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=d(a,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var u=l.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,l(j,"constructor",{value:w,configurable:!0}),l(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},k(E.prototype),s(E.prototype,i,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var u=new E(f(e,t,r,a),l);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},k(j),s(j,c,"Generator"),s(j,o,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,y):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),U(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;U(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function t(e,t,n,r,a,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,l){var u=e.apply(n,r);function o(e){t(u,a,l,o,i,"next",e)}function i(e){t(u,a,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./pagination-legacy.BvZzwGgF.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./input-legacy.DqeBI0DR.js","./descriptions-item-legacy.DaqoHh9G.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./link-legacy.9nArvqF3.js","./switch-legacy.BQgdxH-G.js","./radio-group-legacy.b3NdNxxp.js","./radio-button-legacy.pAMGVoLJ.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./form-item-legacy.BSRxtXpO.js","./system-legacy.lGNhuL6N.js","./host-legacy.C5YmXIdQ.js","./index-legacy.DPmmO7_J.js","./index-legacy.VcYNc2Mg.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./refs-legacy.DKcspM8g.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseClone-legacy.CxPdKCcf.js"],(function(t,r){"use strict";var a,l,u,o,i,c,s,f,d,p,v,h,m,y,g,b,w,x,_,V,j,k,E,C,S,L,U,z,P,F,O,I,N,G,A,T,q;return{setters:[function(e){a=e.a,l=e.q,u=e.o,o=e.c,i=e.b,c=e.e,s=e.w,f=e.F,d=e.v,p=e.h,v=e.g,h=e.m,m=e.t,y=e.f,g=e.i,b=e.E,w=e.k},function(e){x=e.E},null,function(e){_=e.E,V=e.a},null,null,null,function(e){j=e.E,k=e.a},function(e){E=e.E},null,function(e){C=e.E},function(e){S=e.E},null,null,function(e){L=e.E,U=e.a},null,null,null,null,function(e){z=e.a,P=e.E},function(e){F=e.l,O=e.c,I=e.d,N=e.g},function(e){G=e.g},function(e){A=e.E},function(e){T=e.b,q=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent="body{font-family:Consolas}.search-input{width:300px}\n",document.head.appendChild(r);var D={class:"dycloud-form-box"},W={style:{"margin-bottom":"20px",display:"inline-block"}},H={class:"dialog-footer"},R={slot:"footer",class:"dialog-footer"},Y={class:"dycloud-pagination"},M={name:"Volume"};t("default",Object.assign(M,{setup:function(t){var r=a(1),M=a(0),K=a(10),Q=function(e){K.value=e,ee()},X=function(e){r.value=e,ee()},B=a({Containers:0,ContainersRunning:0,ContainersPaused:0,ContainersStopped:0,Images:0,NCPU:0,MemTotal:0,Plugins:{Volume:[],Network:[]}}),J=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(xe.value);case 2:0===(n=e.sent).code&&(B.value=n.data);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=a({name:""}),$=a([]),ee=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(xe.value,{page:r.value,pageSize:K.value,name:Z.value.name});case 2:0===(n=e.sent).code&&(M.value=n.data.total,r.value=n.data.page,K.value=n.data.pageSize,$.value=n.data.items);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),te=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.value=1,K.value=10,ee();case 3:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ne=a([{label:"NFS4",value:"NFS4"},{label:"NFS",value:"NFS"}]),re=a([{label:"CIFS v2.1 (Used by Windows 7 / Server 2008 R2)",value:"v2.1"},{label:"CIFS v1.0 (Used by Windows XP / Server 2003 and earlier)",value:"v1.0"},{label:"CIFS v2.0 (Used by Windows Vista / Server 2008)",value:"v2.0"},{label:"CIFS 3.0 (Used by Windows 8 / Server 2012 and newer)",value:"v3.0"}]),ae=a({name:"",driver:"local",mountPoint:"",driverOption:[],nfs:{enable:!1,addr:"",device:"",version:"NFS4",option:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},cifs:{enable:!1,device:"",addr:"",version:"v2.1",username:"",password:""}}),le=a(!1),ue=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le.value=!0;case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),oe=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:le.value=!1;case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ie=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(xe.value,ae.value);case 2:0===e.sent.code&&(oe(),g({type:"success",message:"创建成功"}),ee());case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ce=a(!1),se=a({Ids:[]}),fe=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ce.value=!1;case 1:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),de=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:se.value.Ids=[n.name],ce.value=!0;case 2:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),pe=function(){var t=n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(xe.value,se.value);case 2:0===e.sent.code&&(g({type:"success",message:"删除成功"}),fe(),se.value.Ids=[],ee());case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ve=a([]),he=function(e){ve.value=e},me=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],0!==ve.value.length){e.next=4;break}return g({type:"warning",message:"请选择要删除的数据"}),e.abrupt("return");case 4:ve.value&&ve.value.map((function(e){n.push(e.name)})),se.value.Ids=n,ce.value=!0;case 7:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ye=a(!1),ge=a({name:"",created:"",mountPoint:"",driver:"",options:{device:"",o:"",type:""}}),be=a([]),we=function(){var t=n(e().mark((function t(){var n,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return be.value=[],e.next=3,G({pageSize:1e4});case 3:if(0===(n=e.sent).code)for(r=0;r<n.data.list.length;r++)be.value.push({value:n.data.list[r].name,label:n.data.list[r].name});case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),xe=a("host"),_e=function(e){xe.value=e,window.localStorage.setItem("currentHost",e),Ve()},Ve=function(){J(),ee()};return l((function(){var e;(e=window.localStorage.getItem("currentHost"))&&(xe.value=e),we(),Ve()})),function(e,t){var n=_,a=V,l=z,g=b,F=w,O=P,I=L,N=A,G=U,J=T,ee=q,se=S,we=C,Ve=E,je=j,ke=k,Ee=x;return u(),o("div",D,[i("div",W,[c(O,{inline:!0,model:Z.value,onKeyup:t[4]||(t[4]=h((function(e){return te(Z.value.name)}),["native","enter"]))},{default:s((function(){return[c(l,{label:"主机:"},{default:s((function(){return[c(a,{modelValue:xe.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return xe.value=e}),onChange:_e,placeholder:"请选择主机"},{default:s((function(){return[(u(!0),o(f,null,d(be.value,(function(e){return u(),p(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),c(l,null,{default:s((function(){return[c(g,{type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return ue()})},{default:s((function(){return t[23]||(t[23]=[v("创建存储卷")])})),_:1})]})),_:1}),c(l,null,{default:s((function(){return[c(g,{icon:"delete",style:{"margin-left":"10px"},disabled:!ve.value.length,onClick:me},{default:s((function(){return t[24]||(t[24]=[v("批量删除")])})),_:1},8,["disabled"])]})),_:1}),c(l,null,{default:s((function(){return[c(F,{modelValue:Z.value.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Z.value.name=e}),class:"search-input",placeholder:"输入存储卷名称"},null,8,["modelValue"]),c(g,{style:{"margin-left":"20px"},type:"primary",icon:"search",onClick:t[3]||(t[3]=function(e){return te(Z.value.name)})},{default:s((function(){return t[25]||(t[25]=[v("查询 ")])})),_:1})]})),_:1})]})),_:1},8,["model"])]),c(G,{data:$.value,style:{color:"#ffffff"},"row-key":"id",onSelectionChange:he},{default:s((function(){return[c(I,{type:"selection",width:"55"}),c(I,{label:"存储卷名称",prop:"name"},{default:s((function(e){return[c(g,{type:"text",onClick:function(t){return n=e.row,ye.value=!0,void(ge.value=n);var n}},{default:s((function(){return[v(m(e.row.name),1)]})),_:2},1032,["onClick"]),"bridge"===e.row.name||"host"===e.row.name||"none"===e.row.name?(u(),p(N,{key:0,type:"danger","disable-transitions":""},{default:s((function(){return t[26]||(t[26]=[v("未使用")])})),_:1})):y("",!0)]})),_:1}),c(I,{label:"存储卷驱动",prop:"driver",width:"150px"}),c(I,{label:"挂载点",prop:"mountPoint"}),c(I,{label:"创建时间",sortable:"",prop:"created"}),c(I,{label:"操作"},{default:s((function(e){return[c(g,{type:"danger",icon:"delete-filled",round:"",onClick:function(t){return de(e.row)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["data"]),c(Ve,{modelValue:le.value,"onUpdate:modelValue":t[20]||(t[20]=function(e){return le.value=e}),title:"创建存储卷",width:"800px","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:s((function(){return[i("div",H,[c(g,{onClick:oe},{default:s((function(){return t[29]||(t[29]=[v("取 消")])})),_:1}),c(g,{type:"primary",onClick:ie},{default:s((function(){return t[30]||(t[30]=[v("确 定")])})),_:1})])]})),default:s((function(){return[c(O,{ref:"addVolumeFrom",rules:e.rules,model:ae.value,"label-width":"250px;","label-position":"left"},{default:s((function(){return[c(l,{label:"存储卷名称:",prop:"name",rules:[{required:!0,message:"存储卷名称不能为空"}]},{default:s((function(){return[c(F,{modelValue:ae.value.name,"onUpdate:modelValue":t[5]||(t[5]=function(e){return ae.value.name=e}),placeholder:"my volume",style:{width:"240px"}},null,8,["modelValue"])]})),_:1}),c(l,{label:"存储卷驱动:",prop:"driver"},{default:s((function(){return[c(ee,{modelValue:ae.value.driver,"onUpdate:modelValue":t[6]||(t[6]=function(e){return ae.value.driver=e})},{default:s((function(){return[(u(!0),o(f,null,d(B.value.Plugins.Volume,(function(e){return u(),p(J,{label:e},null,8,["label"])})),256))]})),_:1},8,["modelValue"])]})),_:1}),c(l,{label:"是否开启nfs存储卷:",prop:"ipam"},{default:s((function(){return[c(se,{modelValue:ae.value.nfs.enable,"onUpdate:modelValue":t[7]||(t[7]=function(e){return ae.value.nfs.enable=e}),"active-color":"#13ce66","inactive-color":"#ff4949",onChange:t[8]||(t[8]=function(e){ae.value.nfs.enable&&(ae.value.cifs={enable:!1,device:"",addr:"",version:"v2.1",username:"",password:""})})},null,8,["modelValue"]),c(we,{style:{color:"#ED6A0C","margin-left":"20px"},disabled:"true",icon:"question-filled"},{default:s((function(){return t[27]||(t[27]=[v(" 注意: 开启nfs存储卷,需要先安装nfs-utils")])})),_:1})]})),_:1}),ae.value.nfs.enable?(u(),p(l,{key:0,label:"nfs访问地址:",prop:"address"},{default:s((function(){return[c(F,{modelValue:ae.value.nfs.addr,"onUpdate:modelValue":t[9]||(t[9]=function(e){return ae.value.nfs.addr=e}),placeholder:"my.nfs-server.com 或 xxx.xxx.xxx.xxx",style:{width:"300px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),ae.value.nfs.enable?(u(),p(l,{key:1,label:"nfs版本:",prop:"version"},{default:s((function(){return[c(a,{modelValue:ae.value.nfs.version,"onUpdate:modelValue":t[10]||(t[10]=function(e){return ae.value.nfs.version=e}),style:{width:"100px"},placeholder:"请选择"},{default:s((function(){return[(u(!0),o(f,null,d(ne.value,(function(e){return u(),p(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})):y("",!0),ae.value.nfs.enable?(u(),p(l,{key:2,label:"nfs挂载点:",prop:"nfsMountPoint"},{default:s((function(){return[c(F,{modelValue:ae.value.nfs.device,"onUpdate:modelValue":t[11]||(t[11]=function(e){return ae.value.nfs.device=e}),placeholder:"/export/share",style:{width:"250px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),ae.value.nfs.enable?(u(),p(l,{key:3,label:"nfs挂载参数:",prop:"nfsOption"},{default:s((function(){return[c(F,{modelValue:ae.value.nfs.args,"onUpdate:modelValue":t[12]||(t[12]=function(e){return ae.value.nfs.args=e}),placeholder:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14",style:{width:"400px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),c(l,{label:"是否开启cifs存储卷:",prop:"ipam"},{default:s((function(){return[c(se,{modelValue:ae.value.cifs.enable,"onUpdate:modelValue":t[13]||(t[13]=function(e){return ae.value.cifs.enable=e}),"active-color":"#13ce66","inactive-color":"#ff4949",onChange:t[14]||(t[14]=function(e){ae.value.cifs.enable&&(ae.value.nfs={enable:!1,addr:"",device:"",version:"NFS4",option:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"})})},null,8,["modelValue"]),c(we,{style:{color:"#ED6A0C","margin-left":"20px"},disabled:"true",icon:"question-filled"},{default:s((function(){return t[28]||(t[28]=[v(" 注意: 开启cifs存储卷,需要先安装cifs-utils")])})),_:1})]})),_:1}),ae.value.cifs.enable?(u(),p(l,{key:4,label:"cifs访问地址:",prop:"address"},{default:s((function(){return[c(F,{modelValue:ae.value.cifs.addr,"onUpdate:modelValue":t[15]||(t[15]=function(e){return ae.value.cifs.addr=e}),placeholder:"my.nfs-server.com 或 xxx.xxx.xxx.xxx",style:{width:"300px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),ae.value.cifs.enable?(u(),p(l,{key:5,label:"cifs版本:",prop:"version"},{default:s((function(){return[c(a,{modelValue:ae.value.cifs.version,"onUpdate:modelValue":t[16]||(t[16]=function(e){return ae.value.cifs.version=e}),style:{width:"500px"},placeholder:"请选择"},{default:s((function(){return[(u(!0),o(f,null,d(re.value,(function(e){return u(),p(n,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})):y("",!0),ae.value.cifs.enable?(u(),p(l,{key:6,label:"cifs共享目录:",prop:"share"},{default:s((function(){return[c(F,{modelValue:ae.value.cifs.device,"onUpdate:modelValue":t[17]||(t[17]=function(e){return ae.value.cifs.device=e}),placeholder:"/export/share",style:{width:"300px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),ae.value.cifs.enable?(u(),p(l,{key:7,label:"用户名:",prop:"username"},{default:s((function(){return[c(F,{modelValue:ae.value.cifs.username,"onUpdate:modelValue":t[18]||(t[18]=function(e){return ae.value.cifs.username=e}),placeholder:"your username",style:{width:"300px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0),ae.value.cifs.enable?(u(),p(l,{key:8,label:"密码:",prop:"password"},{default:s((function(){return[c(F,{modelValue:ae.value.cifs.password,"onUpdate:modelValue":t[19]||(t[19]=function(e){return ae.value.cifs.password=e}),placeholder:"your password",style:{width:"300px"},size:"small"},null,8,["modelValue"])]})),_:1})):y("",!0)]})),_:1},8,["rules","model"])]})),_:1},8,["modelValue"]),c(Ve,{modelValue:ce.value,"onUpdate:modelValue":t[21]||(t[21]=function(e){return ce.value=e}),title:"是否确定删除?",width:"300px","show-close":!1},{default:s((function(){return[i("div",R,[c(g,{type:"primary",onClick:pe},{default:s((function(){return t[31]||(t[31]=[v("是")])})),_:1}),c(g,{onClick:fe},{default:s((function(){return t[32]||(t[32]=[v("否")])})),_:1})])]})),_:1},8,["modelValue"]),c(Ve,{modelValue:ye.value,"onUpdate:modelValue":t[22]||(t[22]=function(e){return ye.value=e}),title:"详细信息",width:"1000px"},{default:s((function(){return[c(ke,{title:"存储卷详细信息",column:2,direction:"vertical",border:""},{default:s((function(){return[c(je,{label:"ID:"},{default:s((function(){return[v(m(ge.value.name),1)]})),_:1}),c(je,{label:"创建时间:"},{default:s((function(){return[v(m(ge.value.created),1)]})),_:1}),c(je,{label:"挂载路径:"},{default:s((function(){return[v(m(ge.value.mountPoint),1)]})),_:1}),c(je,{label:"驱动:"},{default:s((function(){return[v(m(ge.value.driver),1)]})),_:1})]})),_:1}),ge.value.options?(u(),p(ke,{key:0,title:"存储卷参数",column:2,direction:"vertical",border:""},{default:s((function(){return[c(je,{label:"type:"},{default:s((function(){return[v(m(ge.value.options.type),1)]})),_:1}),c(je,{label:"device:"},{default:s((function(){return[v(m(ge.value.options.device),1)]})),_:1}),c(je,{label:"o:"},{default:s((function(){return[v(m(ge.value.options.o),1)]})),_:1})]})),_:1})):y("",!0)]})),_:1},8,["modelValue"]),i("div",Y,[c(Ee,{"current-page":r.value,"page-size":K.value,"page-sizes":[10,30,50,100],total:M.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:X,onSizeChange:Q},null,8,["current-page","page-size","total"])])])}}}))}}}))}();
