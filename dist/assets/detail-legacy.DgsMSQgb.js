/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},a=Object.prototype,r=a.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(t){c=function(e,t,n){return e[t]=n}}function p(e,t,n,a){var r=t&&t.prototype instanceof g?t:g,u=Object.create(r.prototype),o=new S(a||[]);return l(u,"_invoke",{value:I(e,n,o)}),u}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=p;var f="suspendedStart",v="suspendedYield",y="executing",m="completed",h={};function g(){}function w(){}function b(){}var k={};c(k,o,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(T([])));_&&_!==a&&r.call(_,o)&&(k=_);var j=b.prototype=g.prototype=Object.create(k);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(a,l,u,o){var i=d(e[a],e,l);if("throw"!==i.type){var s=i.arg,c=s.value;return c&&"object"==typeof c&&r.call(c,"__await")?t.resolve(c.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(c).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var a;l(this,"_invoke",{value:function(e,r){function l(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(l,l):l()}})}function I(e,n,a){var r=f;return function(l,u){if(r===y)throw Error("Generator is already running");if(r===m){if("throw"===l)throw u;return{value:t,done:!0}}for(a.method=l,a.arg=u;;){var o=a.delegate;if(o){var i=L(o,a);if(i){if(i===h)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===f)throw r=m,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=y;var s=d(e,n,a);if("normal"===s.type){if(r=a.done?m:v,s.arg===h)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r=m,a.method="throw",a.arg=s.arg)}}}function L(e,n){var a=n.method,r=e.iterator[a];if(r===t)return n.delegate=null,"throw"===a&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),h;var l=d(r,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,h;var u=l.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,l=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,l(j,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:w,configurable:!0}),w.displayName=c(b,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},E(C.prototype),c(C.prototype,i,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,a,r,l){void 0===l&&(l=Promise);var u=new C(p(e,t,a,r),l);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},E(j),c(j,s,"Generator"),c(j,o,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},n.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(a,r){return o.type="throw",o.arg=e,n.next=a,r&&(n.method="next",n.arg=t),!!r}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),s=r.call(u,"finallyLoc");if(i&&s){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,h):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,n,a){return this.delegate={iterator:T(e),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=t),h}},n}function t(e,t,n,a,r,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(a,r)}function n(e){return function(){var n=this,a=arguments;return new Promise((function(r,l){var u=e.apply(n,a);function o(e){t(u,r,l,o,i,"next",e)}function i(e){t(u,r,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./tab-pane-legacy.DpVaa-__.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./tag-legacy.Ca3_ouli.js","./age-legacy.B6tOd1kw.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./pagination-legacy.BvZzwGgF.js","./select-legacy.L6EZLrW8.js","./input-legacy.DqeBI0DR.js","./button-legacy.CH0FoAJ-.js","./dropdown-item-legacy.CVx0pdJ_.js","./terminal-legacy.CNeayivl.js","./detail-legacy.DI6Oc7Tp.js","./index-legacy.-ouNXvAL.js","./index-legacy.CrLAlmUo.js","./terminal-log-legacy.BTG7uPc4.js","./index-legacy.CjsCdAav.js","./index-legacy.DPmmO7_J.js","./strings-legacy.Wo7ipnce.js","./index-legacy.5aKQ1vKy.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./index-legacy.DGP8eUsx.js","./refs-legacy.DKcspM8g.js","./token-legacy.D8ssuuq3.js","./castArray-legacy.Dek4eNNY.js","./dropdown-legacy.Ei32dkXV.js","./xterm-legacy.C7iTxYx2.js","./xterm-legacy.CncnO5QC.js","./xterm-addon-fit-legacy.BgFhqBhw.js","./form-legacy.0XPxLcB_.js","./form-item-legacy.BSRxtXpO.js","./_baseClone-legacy.CxPdKCcf.js","./index-legacy.MUWnlxzq.js","./metrics-legacy.DN4d2MBK.js","./monaco-editor-vue3.es-legacy.a46gbKys.js","./js-yaml-legacy.DvjpT7r5.js"],(function(t,a){"use strict";var r,l,u,o,i,s,c,p,d,f,v,y,m,h,g,w,b,k,x,_,j,E,C,I,L,P,O,S,T,V,N,z,D,U,F,G,R,A,B,K;return{setters:[function(e){r=e._,l=e.a,u=e.o,o=e.c,i=e.h,s=e.w,c=e.e,p=e.b,d=e.t,f=e.F,v=e.v,y=e.f,m=e.g,h=e.B,g=e.cu,w=e.i,b=e.E,k=e.cw},function(e){x=e.a},function(e){_=e.E,j=e.a},null,null,null,null,null,function(e){E=e.A},function(e){C=e.E},null,function(e){I=e.E},null,null,null,function(e){L=e.E,P=e.a,O=e.b},function(e){S=e.P,T=e.b,V=e.c,N=e.d,z=e.G},function(e){D=e.P,U=e.E},function(e){F=e._,G=e.R},function(e){R=e._},function(e){A=e.P},function(e){B=e.E},function(e){K=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".operate-span-primary[data-v-3f7f2aa8]{color:var(--el-color-primary);cursor:pointer;font-weight:700}.label-custom[data-v-4c367b30]{margin-right:8px;margin-bottom:8px;display:inline-block;padding:0 8px;cursor:pointer;height:24px;line-height:24px;border-radius:12px;-webkit-border-radius:12px;-moz-border-radius:12px;-ms-border-radius:12px;-o-border-radius:12px;border:1px solid #bcbdbf}\n",document.head.appendChild(a);var M=["onClick"],Y={key:0},q={slot:"content"},H={key:1},J={slot:"content"},W={key:2},X={slot:"content"},Q={key:3},Z={slot:"content"},$={key:0},ee={class:"operate-span"},te={class:"dycloud-pagination"},ne={key:0},ae={class:"dialog-footer"},re={key:1},le={class:"dialog-footer"},ue={key:2},oe={style:{"text-align":"right"}},ie={class:"dialog-footer"},se={key:3},ce={class:"dialog-footer"},pe={style:{"text-align":"right"}},de={name:"PodsTableBlock"},fe=Object.assign(de,{props:{data:{default:function(){return{}},type:Object}},setup:function(t){var a=t,r=l(1),k=l(10),x=l(0),de=l([]),fe=l(!1),ve=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,z({cluster_id:ye.value,page:r.value,pageSize:k.value,fieldSelector:"spec.nodeName=".concat(me.value)});case 3:0===(n=e.sent).code&&(de.value=n.data.items,r.value=n.data.page,k.value=n.data.pageSize,x.value=n.data.total);case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ye=l(0),me=l(""),he=function(){ye.value=a.data.cluster_id,me.value=a.data.metadata.name,ve()};he();var ge=function(){var t=n(e().mark((function t(a){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.confirm("此操作将删除Pod: "+a.metadata.name+" 是否继续?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T({cluster_id:ye.value,namespace:a.metadata.namespace,podName:a.metadata.name});case 2:if(0!==e.sent.code){e.next=7;break}return w({type:"success",message:"删除成功"}),e.next=7,ve();case 7:case"end":return e.stop()}}),t)})))).catch((function(){w({type:"info",message:"已取消删除"})}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),we=function(e){r.value=e,ve()},be=function(e){k.value=e,ve()},ke=l(!1),xe=l(""),_e=l({}),je=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe.value="详情",_e.value=n,e.next=4,U({cluster_id:ye.value,fieldSelector:"involvedObject.name="+n.metadata.name,namespace:n.metadata.namespace});case 4:if(!(a=e.sent).data.items){e.next=9;break}if(!a.data.items.code){e.next=9;break}return w({type:"error",message:a.data.items.message}),e.abrupt("return");case 9:0===a.code&&(_e.value.events=a.data.items),ke.value=!0;case 11:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ee=l(!1),Ce=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe.value="编辑",e.next=3,V({cluster_id:ye.value,namespace:n.metadata.namespace,podName:n.metadata.name});case 3:if(!(a=e.sent).data.items){e.next=8;break}if(!a.data.items.code){e.next=8;break}return w({type:"error",message:a.data.items.message}),e.abrupt("return");case 8:0===a.code&&(_e.value=a.data.items,Ee.value=!0);case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ie=function(){Ee.value=!1,Te.value=!1,Pe.value=!1,fe.value=!1},Le=function(){var t=n(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({cluster_id:ye.value,namespace:n.metadata.namespace,podName:n.metadata.name,content:n});case 2:0===e.sent.code&&(w({type:"success",message:"更新成功!"}),Ee.value=!1,he());case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Pe=l(!1),Oe=l({}),Se=l(""),Te=l(!1),Ve=function(){fe.value?fe.value=!1:fe.value=!0};return function(e,t){var n=b,a=B,l=_,g=K,w=L,T=P,V=O,N=j,z=I,U=C;return u(),o("div",null,[(u(),i(N,{data:de.value,key:de.value,stripe:"",style:{width:"100%"}},{default:s((function(){return[c(l,{label:"名称",prop:"name",type:"scope",width:"300"},{default:s((function(e){return[t[4]||(t[4]=p("img",{style:{width:"14px","margin-right":"2px"},src:"//g.alicdn.com/aliyun/cos/1.38.27/images/icon_docker.png"},null,-1)),p("span",{class:"operate-span-primary",onClick:function(t){return je(e.row)}},d(e.row.metadata.name),9,M),c(a,{placement:"top"},{content:s((function(){return[(u(!0),o(f,null,v(e.row.metadata.labels,(function(e,t,n){return u(),o("div",{slot:"content",key:n},[p("span",null,d(t)+": "+d(e),1)])})),128))]})),default:s((function(){return[c(n,{size:"small",type:"primary",link:"",icon:"PriceTag"})]})),_:2},1024)]})),_:1}),c(l,{label:"容器",prop:"container",type:"scope"},{default:s((function(e){return[(u(!0),o(f,null,v(e.row.status.containerStatuses,(function(e,t){return u(),o("div",{key:t,class:"gridChart"},[e.ready?(u(),o("div",Y,[c(a,{placement:"top"},{content:s((function(){return[p("div",q,d(e.name)+"（running, ready） ",1)]})),default:s((function(){return[c(g,{class:"ml-2",type:"success",effect:"dark"})]})),_:2},1024)])):!e.ready&&e.state.waiting?(u(),o("div",H,[c(a,{placement:"top"},{content:s((function(){return[p("div",J,d(e.name)+" 报错信息: "+d(e.state.waiting.reason),1)]})),default:s((function(){return[c(g,{class:"ml-2",type:"danger",effect:"dark"})]})),_:2},1024)])):!e.ready&&e.state.terminated?(u(),o("div",W,[c(a,{placement:"top"},{content:s((function(){return[p("div",X,d(e.name)+" "+d(e.state.terminated.reason),1)]})),default:s((function(){return[c(g,{class:"ml-2",type:"info",effect:"dark"})]})),_:2},1024)])):(u(),o("div",Q,[c(a,{placement:"top"},{content:s((function(){return[p("div",Z,d(e.name),1)]})),default:s((function(){return[c(g,{class:"ml-2",type:"info",effect:"dark"})]})),_:2},1024)]))])})),128))]})),_:1}),c(l,{prop:"status",label:"CPU/内存/TCP",type:"scope",width:"200"},{default:s((function(e){return[e.row?(u(),o("div",$,[c(F,{data:e.row,cluster_id:ye.value},null,8,["data","cluster_id"])])):y("",!0)]})),_:1}),c(l,{label:"状态",prop:"status",type:"scope",width:"90"},{default:s((function(e){return["Running"===e.row.status.phase?(u(),i(g,{key:0,type:"success"},{default:s((function(){return t[5]||(t[5]=[m("Running")])})),_:1})):"Succeeded"===e.row.status.phase?(u(),i(g,{key:1,type:"info"},{default:s((function(){return t[6]||(t[6]=[m("Completed")])})),_:1})):(u(),i(g,{key:2,type:"danger"},{default:s((function(){return[m(d(e.row.status.phase),1)]})),_:2},1024))]})),_:1}),c(l,{label:"重启次数",prop:"restarts",type:"scope"},{default:s((function(e){return[p("span",null,d(h(G)(e.row.status.containerStatuses)),1)]})),_:1}),c(l,{label:"命名空间",prop:"namespace",type:"scope"},{default:s((function(e){return[p("span",null,d(e.row.metadata.namespace),1)]})),_:1}),c(l,{label:"Pod IP",prop:"Pod_IP",type:"scope",width:"100"},{default:s((function(e){return[p("span",null,d(e.row.status.podIP),1)]})),_:1}),c(l,{label:"调度节点",prop:"hostIP",type:"scope"},{default:s((function(e){return[p("span",ee,d(e.row.status.hostIP),1)]})),_:1}),c(l,{label:"存活时间",prop:"creationTimestamp",type:"scope"},{default:s((function(e){return[p("span",null,d(h(E)(e.row.metadata.creationTimestamp)),1)]})),_:1}),c(l,{fixed:"right",label:"操作",width:"100",type:"scope"},{default:s((function(e){return[c(n,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(t){return Ce(e.row)}},{default:s((function(){return t[7]||(t[7]=[m("编辑")])})),_:2},1032,["onClick"]),p("div",null,[c(V,null,{dropdown:s((function(){return[c(T,null,{default:s((function(){return[(u(!0),o(f,null,v(e.row.spec.containers,(function(t,n){return u(),o("div",{key:n},[c(w,{onClick:function(n){return a=e.row,r=t.name,Oe.value=a,xe.value="容器组名："+a.metadata.name+" 容器名："+r+" 终端",Oe.value.cluster_id=ye.value,Se.value=r,void(Pe.value=!0);var a,r}},{default:s((function(){return[m(d(t.name)+" 终端 ",1)]})),_:2},1032,["onClick"])])})),128)),(u(!0),o(f,null,v(e.row.spec.containers,(function(t,n){return u(),o("div",{key:n},[c(w,{onClick:function(n){return a=e.row,r=t.name,Oe.value=a,xe.value="容器组名："+a.metadata.name+" 容器名："+r+" 终端日志",Oe.value.cluster_id=ye.value,Se.value=r,void(Te.value=!0);var a,r}},{default:s((function(){return[m(d(t.name)+" 终端日志 ",1)]})),_:2},1032,["onClick"])])})),128)),c(w,{icon:"delete",onClick:function(t){return ge(e.row)}},{default:s((function(){return t[9]||(t[9]=[m("删除")])})),_:2},1032,["onClick"])]})),_:2},1024)]})),default:s((function(){return[c(n,{type:"primary",link:"",icon:"MoreFilled",size:"small"},{default:s((function(){return t[8]||(t[8]=[m("更多")])})),_:1})]})),_:2},1024)])]})),_:1})]})),_:1},8,["data"])),p("div",te,[c(z,{"current-page":r.value,"page-size":k.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:x.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:we,onSizeChange:be},null,8,["current-page","page-size","total"])]),ke.value?(u(),o("div",ne,[c(U,{modelValue:ke.value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return ke.value=e}),width:"60%",title:xe.value},{default:s((function(){return[p("div",ae,[c(D,{data:_e.value},null,8,["data"])])]})),_:1},8,["modelValue","title"])])):y("",!0),Ee.value?(u(),o("div",re,[c(U,{modelValue:Ee.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Ee.value=e}),width:"60%",title:xe.value},{default:s((function(){return[p("div",le,[c(R,{data:_e.value,onClose:Ie,onEnter:Le},null,8,["data"])])]})),_:1},8,["modelValue","title"])])):y("",!0),Pe.value?(u(),o("div",ue,[c(U,{modelValue:Pe.value,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Pe.value=e}),width:"60%",title:xe.value,"show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1,fullscreen:fe.value,center:!0},{default:s((function(){return[p("div",oe,[c(n,{type:"primary",link:"",icon:"FullScreen",onClick:Ve}),c(n,{type:"primary",link:"",icon:"Close",onClick:Ie})]),p("div",ie,[c(S,{data:Oe.value,name:Se.value,onClose:Ie},null,8,["data","name"])])]})),_:1},8,["modelValue","title","fullscreen"])])):y("",!0),Te.value?(u(),o("div",se,[c(U,{modelValue:Te.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return Te.value=e}),width:"60%",title:xe.value,"show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1,fullscreen:fe.value,center:!0},{default:s((function(){return[p("div",ce,[p("div",pe,[c(n,{type:"primary",link:"",icon:"FullScreen",onClick:Ve}),c(n,{type:"primary",link:"",icon:"Close",onClick:Ie})]),c(A,{data:Oe.value,name:Se.value,onClose:Ie},null,8,["data","name"])])]})),_:1},8,["modelValue","title","fullscreen"])])):y("",!0)])}}}),ve=r(fe,[["__scopeId","data-v-3f7f2aa8"]]),ye={key:0},me={class:"table-default-viewer"},he={style:{width:"50%"}},ge={style:{width:"50%"}},we={style:{width:"50%"}},be={key:0},ke={key:1},xe={colspan:"2"},_e={class:"label-custom",type:"info"},je={colspan:"2"},Ee={class:"margin-right label-custom",type:"info"},Ce={colspan:"2"},Ie={key:0},Le={key:1},Pe={key:0},Oe={key:1},Se={class:"container"},Te={name:"DetailBlock"};t("default",r(Object.assign(Te,{props:{form:{default:function(){return{}},type:Object}},setup:function(e){var t=e,n=l({});return n.value=t.form,function(e,t){var a=K,r=_,l=j,g=x;return n.value?(u(),o("div",ye,[t[39]||(t[39]=p("div",{class:"pull-left"},[p("h4",null,"基本信息")],-1)),p("table",me,[p("tbody",null,[p("tr",null,[p("td",he,[t[0]||(t[0]=p("span",null,"名称",-1)),t[1]||(t[1]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.metadata.name),1)]),p("td",ge,[t[2]||(t[2]=p("span",null,"存活时间",-1)),t[3]||(t[3]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(h(E)(n.value.metadata.creationTimestamp)),1)])]),p("tr",null,[p("td",we,[t[4]||(t[4]=p("span",null,"UID",-1)),t[5]||(t[5]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.metadata.uid),1)])]),p("tr",null,[p("td",null,[t[6]||(t[6]=p("span",null,[p("span",null,"容器组"),m(" CIDR ")],-1)),t[7]||(t[7]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.spec.podCIDR),1)]),p("td",null,[t[8]||(t[8]=p("span",null,"调度状态：",-1)),n.value.spec.unschedulable?(u(),o("span",be,"不可调度")):(u(),o("span",ke,"可调度"))])]),p("tr",null,[p("td",null,[t[11]||(t[11]=p("span",null,"IP 地址",-1)),t[12]||(t[12]=p("span",{class:"margin-right"}," : ",-1)),(u(!0),o(f,null,v(n.value.status.addresses,(function(e){return u(),o("span",{key:e.index},[p("span",null,d(e.type)+" : "+d(e.address),1),t[9]||(t[9]=m()),t[10]||(t[10]=p("br",null,null,-1))])})),128))])]),p("tr",null,[p("td",xe,[t[13]||(t[13]=p("span",null,"标签",-1)),t[14]||(t[14]=p("span",{class:"margin-right"}," : ",-1)),(u(!0),o(f,null,v(n.value.metadata.labels,(function(e,t,n){return u(),o("span",{key:n},[p("span",_e,d(e)+": "+d(t),1)])})),128))])]),p("tr",null,[p("td",je,[t[15]||(t[15]=p("span",null,"注解",-1)),t[16]||(t[16]=p("span",null," :",-1)),(u(!0),o(f,null,v(n.value.metadata.annotations,(function(e,t,n){return u(),o("span",{key:n},[p("span",Ee,d(e)+": "+d(t),1)])})),128))])]),p("tr",null,[p("td",null,[t[17]||(t[17]=p("span",null,"系统镜像",-1)),t[18]||(t[18]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.osImage),1)]),p("td",null,[t[19]||(t[19]=p("span",null,"内核版本",-1)),t[20]||(t[20]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.kernelVersion),1)])]),p("tr",null,[p("td",null,[t[21]||(t[21]=p("span",null,"Kubelet 版本",-1)),t[22]||(t[22]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.kubeletVersion),1)]),p("td",null,[t[23]||(t[23]=p("span",null,"Kube-Proxy 版本",-1)),t[24]||(t[24]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.kubeProxyVersion),1)])]),p("tr",null,[p("td",null,[t[25]||(t[25]=p("span",null,"机器 ID",-1)),t[26]||(t[26]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.machineID),1)]),p("td",null,[t[27]||(t[27]=p("span",null,"系统 UUID",-1)),t[28]||(t[28]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.systemUUID),1)])]),p("tr",null,[p("td",null,[t[29]||(t[29]=p("span",null,"启动 ID",-1)),t[30]||(t[30]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.bootID),1)]),p("td",null,[t[31]||(t[31]=p("span",null,"容器运行时版本",-1)),t[32]||(t[32]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.containerRuntimeVersion),1)])]),p("tr",null,[p("td",null,[t[33]||(t[33]=p("span",null,"操作系统",-1)),t[34]||(t[34]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.operatingSystem),1)]),p("td",null,[t[35]||(t[35]=p("span",null,"架构",-1)),t[36]||(t[36]=p("span",{class:"margin-right"}," : ",-1)),p("span",null,d(n.value.status.nodeInfo.architecture),1)])]),p("tr",null,[p("td",Ce,[t[37]||(t[37]=p("span",null,"污点 （Taints）",-1)),t[38]||(t[38]=p("span",{class:"margin-right"}," : ",-1)),(u(!0),o(f,null,v(n.value.spec.taints,(function(e,t){return u(),i(a,{key:t,style:{background:"#999999",color:"white"}},{default:s((function(){return[m(d(e.key)+": "+d(e.value)+" Effect: "+d(e.effect),1)]})),_:2},1024)})),128))])])])]),t[40]||(t[40]=p("div",{class:"pull-left"},[p("h4",null,"状态")],-1)),t[41]||(t[41]=p("p",null,null,-1)),p("div",null,[c(l,{data:n.value.status.conditions,stripe:"",style:{width:"100%"}},{default:s((function(){return[c(r,{label:"类型",prop:"type",type:"scope"},{default:s((function(e){return[p("span",null,d(e.row.type),1)]})),_:1}),c(r,{label:"状态",prop:"status",type:"scope"},{default:s((function(e){return[p("span",null,d(e.row.status),1)]})),_:1}),c(r,{label:"更新时间",prop:"status",type:"scope"},{default:s((function(e){return[p("span",null,d(h(k)(e.row.lastTransitionTime)),1)]})),_:1}),c(r,{label:"内容",prop:"reason",type:"scope"},{default:s((function(e){return[e.row.reason?(u(),o("span",Ie,d(e.row.reason),1)):(u(),o("span",Le,"-"))]})),_:1}),c(r,{label:"消息",prop:"message",type:"scope"},{default:s((function(e){return[e.row.message?(u(),o("span",Pe,d(e.row.message),1)):(u(),o("span",Oe,"-"))]})),_:1})]})),_:1},8,["data"])]),t[42]||(t[42]=p("div",{class:"pull-left"},[p("h4",null,"容器组")],-1)),t[43]||(t[43]=p("p",null,null,-1)),p("div",Se,[c(g,{style:{width:"100%"}},{default:s((function(){return[c(ve,{data:n.value},null,8,["data"])]})),_:1})])])):y("",!0)}}}),[["__scopeId","data-v-4c367b30"]]))}}}))}();