/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return t};var e,t={},a=Object.prototype,r=a.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function d(e,t,n,a){var r=t&&t.prototype instanceof g?t:g,u=Object.create(r.prototype),o=new O(a||[]);return l(u,"_invoke",{value:S(e,n,o)}),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var p="suspendedStart",v="suspendedYield",m="executing",h="completed",y={};function g(){}function b(){}function x(){}var _={};s(_,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(T([])));k&&k!==a&&r.call(k,o)&&(_=k);var V=x.prototype=g.prototype=Object.create(_);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(a,l,u,o){var i=f(e[a],e,l);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var a;l(this,"_invoke",{value:function(e,r){function l(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(l,l):l()}})}function S(t,n,a){var r=p;return function(l,u){if(r===m)throw Error("Generator is already running");if(r===h){if("throw"===l)throw u;return{value:e,done:!0}}for(a.method=l,a.arg=u;;){var o=a.delegate;if(o){var i=E(o,a);if(i){if(i===y)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===p)throw r=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=m;var c=f(t,n,a);if("normal"===c.type){if(r=a.done?h:v,c.arg===y)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r=h,a.method="throw",a.arg=c.arg)}}}function E(t,n){var a=n.method,r=t.iterator[a];if(r===e)return n.delegate=null,"throw"===a&&t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+a+"' method")),y;var l=f(r,t.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var u=l.arg;return u?u.done?(n[t.resultName]=u.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function T(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,l=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return l.next=l}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=x,l(V,"constructor",{value:x,configurable:!0}),l(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,c,"GeneratorFunction")),e.prototype=Object.create(V),e},t.awrap=function(e){return{__await:e}},j(C.prototype),s(C.prototype,i,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,a,r,l){void 0===l&&(l=Promise);var u=new C(d(e,n,a,r),l);return t.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},j(V),s(V,c,"Generator"),s(V,o,(function(){return this})),s(V,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(U),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(a,r){return o.type="throw",o.arg=t,n.next=a,r&&(n.method="next",n.arg=e),!!r}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return a("end");if(u.tryLoc<=this.prev){var i=r.call(u,"catchLoc"),c=r.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return a(u.catchLoc,!0);if(this.prev<u.finallyLoc)return a(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return a(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return a(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,y):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),U(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;U(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(t,n,a){return this.delegate={iterator:T(t),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=e),y}},t}function a(e,t,n,a,r,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var u=e.apply(t,n);function o(e){a(u,r,l,o,i,"next",e)}function i(e){a(u,r,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./main-legacy.DYQPWQ3I.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./tag-legacy.Ca3_ouli.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./drawer-legacy.B124LicV.js","./switch-legacy.BQgdxH-G.js","./radio-group-legacy.b3NdNxxp.js","./radio-legacy.DUa6CodL.js","./button-legacy.CH0FoAJ-.js","./card-legacy.EIB5U9Pv.js","./form-legacy.0XPxLcB_.js","./col-legacy.tMI9428i.js","./select-legacy.L6EZLrW8.js","./form-item-legacy.BSRxtXpO.js","./input-legacy.DqeBI0DR.js","./service-legacy.DwQLevEh.js","./flow-frame-legacy.CY--TKPW.js","./applications-legacy.BC_EJXjZ.js","./buildEnv-legacy.o1JkwB5I.js","./pipelines-legacy.CEeVZNhh.js","./codeSource-legacy.DmIOpL3T.js","./index-legacy.DPmmO7_J.js","./index-legacy.VcYNc2Mg.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./refs-legacy.DKcspM8g.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./_baseClone-legacy.CxPdKCcf.js"],(function(t,a){"use strict";var l,u,o,i,c,s,d,f,p,v,m,h,y,g,b,x,_,w,k,V,j,C,S,E,L,U,O,T,N,q,P,I,A,z,D,B,R,F,G,J,M,H,Y,K,Q,W,$,X,Z;return{setters:[function(e){l=e._,u=e.a,o=e.M,i=e.r,c=e.q,s=e.H,d=e.i,f=e.P,p=e.o,v=e.h,m=e.w,h=e.e,y=e.b,g=e.c,b=e.F,x=e.v,_=e.g,w=e.t,k=e.f,V=e.n,j=e.B,C=e.k,S=e.E,E=e.Q},function(e){L=e.E,U=e.a,O=e.b},function(e){T=e.E,N=e.a},null,null,null,function(e){q=e.E},null,function(e){P=e.E},null,function(e){I=e.E},function(e){A=e.E},null,null,null,function(e){z=e.E},null,function(e){D=e.E,B=e.a},function(e){R=e.E,F=e.a},function(e){G=e.a,J=e.E},null,function(e){M=e.g},function(e){H=e.default},function(e){Y=e.d},function(e){K=e.g},function(e){Q=e.c},function(e){W=e.g},function(e){$=e.E},function(e){X=e.E,Z=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".page-scrollbar[data-v-58851ec4]{height:100vh}.card-section[data-v-58851ec4]{margin-bottom:20px}.stage-task[data-v-58851ec4]{display:flex;padding:20px 0;gap:10px;flex-wrap:wrap;width:100%}.stage-task-left[data-v-58851ec4]{flex:3;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.stage-task-right[data-v-58851ec4]{flex:7;display:flex;flex-direction:column;transform:translate(-20px);justify-content:flex-start;align-items:flex-start}.task-source[data-v-58851ec4]{display:flex;align-items:center}.task-card[data-v-58851ec4]{display:inline-flex;align-items:center;justify-content:space-between;border:1px solid #dcdfe6;border-radius:6px;background-color:#293742}.task-content[data-v-58851ec4]{display:flex;flex-direction:column;align-items:flex-start}.repo-url[data-v-58851ec4]{margin-top:10px;color:#409eff;font-size:14px}.branch-info[data-v-58851ec4]{display:flex;align-items:center;gap:5px;margin-top:5px}.line-and-button[data-v-58851ec4]{display:flex;align-items:center}.line[data-v-58851ec4]{width:30px;height:2px;background-color:#dcdfe6;margin-right:8px}.add-task-icon[data-v-58851ec4]{font-size:24px;color:#409eff;background:none;border:none;cursor:pointer}.flow-list[data-v-58851ec4]{margin-top:15px;width:280px;display:flex}.flow-item[data-v-58851ec4]{display:inline-flex;justify-content:space-between;flex:1}.footer-buttons[data-v-58851ec4]{display:flex;justify-content:flex-start;gap:10px;padding:20px 0}.param-row[data-v-58851ec4]{display:flex;align-items:center;gap:10px;margin-bottom:10px}.addBtn[data-v-58851ec4]{border:1px dashed rgb(44,94,181);border-radius:0;width:100%;margin-top:10px;height:40px;color:#2c5eb5}.deleteBtn[data-v-58851ec4]{border:1px dashed rgb(245,108,108);border-radius:0;color:#f56c6c}.footer[data-v-58851ec4]{width:500px;height:100px;margin-top:20px}.label[data-v-58851ec4]{margin-top:8px;background:#283345}.footer-edit[data-v-58851ec4]{display:flex;justify-content:space-around}\n",document.head.appendChild(a);var ee={class:"stage-task"},te={class:"stage-task-left"},ne={class:"task-source"},ae={class:"task-content"},re={key:0,class:"repo-url"},le={key:1,class:"branch-info"},ue={class:"stage-task-right"},oe={class:"flow-list"},ie={class:"header",style:{cursor:"pointer"}},ce={class:"footer-buttons"},se=["id"],de={class:"footer-edit"},fe={class:"footer"},pe={__name:"createPipeline",setup:function(t){var a=u([]),l=u([]),pe=o(),ve=u(!1),me=u("编辑任务");u(-1),u(-1);var he=u(!1),ye=pe.query.appId;pe.query.name,pe.query.gitUrl;var ge=i({namespace:"",name:"",environment:"",environmentOptions:[]}),be=i({url:"",appCode:"",defaultBranch:"",gitType:"",voucherType:"",branch:"",codeSourceStatus:0,repoId:null});u([]);var xe=i({name:"",executor:"",params:[]}),_e=u(!1),we=u(!1),ke=u([]),Ve=u([]);c(r(n().mark((function e(){var t,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze();case 2:return je(),e.prev=3,e.next=6,M({page:1,pageSize:1e3});case 6:(t=e.sent)&&t.data&&t.data.list&&(l.value=t.data.list,l.value.length>0&&(Be.value.warehouse=l.value[0].config.url)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3);case 13:return e.prev=13,e.next=16,K({page:1,pageSize:10});case 16:(a=e.sent)&&a.data&&a.data.list&&(Ve.value=a.data.list,Ve.value.length>0&&(Be.value.image=Ve.value[0].image)),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(13);case 23:case"end":return e.stop()}}),e,null,[[3,10],[13,20]])})))),u(-1);var je=function(){var e=r(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W({page:1,pageSize:1e4});case 3:0===(t=e.sent).code&&t.data.list&&(ke.value=t.data.list),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Ce=function(){we.value=!0},Se=function(){for(var e in Be.value)Be.value[e]=""},Ee=function(t,n){"group"==n?(xe.name="",xe.params=[],_e.value=!0,Ue.value=t,xe.name=t.name,xe.params=e(t.params),he.value=!0):(Se(),Le.value=!0,Oe.value=t,_e.value=!0)},Le=u(!1),Ue=u({}),Oe=u({}),Te=u(null),Ne=function(){if(ke.value&&0!==ke.value.length&&be.gitType){var e=ke.value.find((function(e){return e.name===be.gitType}));e&&(be.repoId=e.ID)}},qe=function(){Ne(),be.url&&be.defaultBranch?(be.defaultBranch="main",be.branch="main",d.success("关联代码库成功"),we.value=!1):d.error("请填写完整信息")};s((function(){return a.value.length})),s((function(){return 0===a.value.length?0:a.value[0].length}));var Pe=function(){Ue.value.taskList.splice(Te.value,1),a.value=a.value.filter((function(e){return e.taskList.length>0})),ve.value=!1,d.success("任务已删除")},Ie=function(){he.value=!1,_e.value=!0},Ae=function(e,t){_e.value=!0,he.value=!1},ze=function(){var e=r(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=2,e.next=5,Y(ye);case 5:0===(t=e.sent).code&&t.data?(be.url=t.data.gitRepo||"",be.defaultBranch=t.data.branch||"main",be.appCode=t.data.appCode,ge.environmentOptions=t.data.envs.map((function(e){return{label:e.envName,value:e.envCode,namespace:e.namespace,clusterName:e.clusterName}}))):d.error(t.msg||"获取应用详情失败"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),d.error("加载应用详情失败，请稍后重试");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),De=function(){if(he.value){var e=JSON.parse(JSON.stringify(xe));for(var t in e)Ue.value[t]=e[t];_e.value=!1,d.success("阶段已修改")}else xe.name?(a.value.push({name:xe.name,params:xe.params,taskList:[{transformIndex:0,name:"",branch:"",image:"",voucherType:"1",textarea:"#!/bin/sh",spatialName:"",warehouse:"",mirrorTag:"",dockerfile:"",contextPath:"",productName:"",productPath:"",version:"",resource:"",yamlResource:"",goalResource:"",openScript:""}]}),_e.value=!1,d.success("新阶段已添加")):d.error("请填写阶段名称");xe.name="",xe.params=[],he.value=!1},Be=u({transformIndex:0,name:"",branch:"",image:"",voucherType:"1",textarea:"#!/bin/sh",spatialName:"",warehouse:"",mirrorTag:"",dockerfile:"",contextPath:"",productName:"",productPath:"",version:"",resource:"",yamlResource:"",goalResource:"",openScript:""});u();var Re=function(){if(ve.value=!1,Be.value.transformIndex=Date.now(),Le.value){var e=JSON.parse(JSON.stringify(Be.value));for(var t in e)Oe.value[t]=e[t]}else Ue.value.taskList.push(JSON.parse(JSON.stringify(Be.value)));d.success("并行任务已添加")},Fe=function(){xe.params.push({name:"",defaultValue:""})},Ge=function(e){Be.value.textarea="1"==e?"#!/bin/sh":"2"==e?"#!/bin/bash":"#!/bin/python"},Je=function(e){};function Me(e){var t=l.value.find((function(t){return t.config.url===e}));return t?{username:t.config.username,password:t.config.password}:{username:"",password:""}}var He=function(){var e=r(n().mark((function e(){var t,r,l,u;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:ge.name,app_name:be.appCode,env_name:ge.environment,build_script:"#!/bin/sh",k8s_namespace:Ye(ge.environment,"namespace"),k8s_cluster_name:Ye(ge.environment,"clusterName"),registry_url:"".concat(Be.value.warehouse,"/").concat(Be.value.spatialName),registry_user:Me(Be.value.warehouse).username,registry_pass:Me(Be.value.warehouse).password,git_url:"https://gitee.com/dycloud5416/spring-boot-helloWorld.git",git_branch:"main",repo_id:be.repoId,git_commit_id:"",stages:a.value.map((function(e,t){return{name:e.name,params:e.params.map((function(e){return{name:e.name,defaultValue:e.defaultValue}})),task_list:e.taskList.map((function(e,t){return{name:e.name,branch:e.branch||"".concat(t+1),plugin:"maven"===e.name?"执行脚本":"build-and-push"===e.name?"镜像打包并推送到仓库":"deploy"===e.name?"部署到Kubernetes":"",image:e.image||"",script:e.textarea||"",spatial_name:e.spatialName||"",warehouse:e.warehouse||"",mirror_tag:e.mirrorTag||"",dockerfile:e.dockerfile||"",context_path:e.contextPath||"",product_name:e.productName||"",product_path:e.productPath||"",version:e.version||"",resource:e.resource||"",yaml_resource:e.yamlResource||"",goal_resource:e.goalResource||"",open_script:e.openScript||""}}))}}))},r=ge.environment,l=ge.environmentOptions.find((function(e){return e.value===r})),t.k8s_namespace=l?l.namespace:"default",e.next=10,Q(t);case 10:(u=e.sent)&&0===u.code?d.success("流水线已保存"):d({type:"error",message:u?u.msg:"操作失败"});case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Ye(e,t){if(!ge.environmentOptions||!Array.isArray(ge.environmentOptions))return"";var n=ge.environmentOptions.find((function(t){return t.value===e}));return n?n[t]:""}var Ke=function(){d.info("操作已取消")};return function(e,t){var n=L,r=C,u=G,o=D,i=R,c=F,s=B,d=J,M=z,Y=S,K=$,Q=U,W=f("CircleCloseFilled"),pe=E,he=X,ye=Z,je=A,ze=I,Me=f("QuestionFilled"),Ye=P,Qe=T,We=N,$e=O;return p(),v(j(q),{class:"page-scrollbar"},{default:m((function(){return[h($e,null,{default:m((function(){return[h(n,null,{default:m((function(){return t[31]||(t[31]=[y("h2",null,"创建流水线",-1)])})),_:1}),h(Q,null,{default:m((function(){return[h(M,{class:"card-section",shadow:"never"},{default:m((function(){return[t[32]||(t[32]=y("h3",null,"基本信息",-1)),h(d,{model:ge,"label-width":"80px"},{default:m((function(){return[h(s,{gutter:20},{default:m((function(){return[h(o,{span:12},{default:m((function(){return[h(u,{label:"名称",required:""},{default:m((function(){return[h(r,{modelValue:ge.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return ge.name=e}),placeholder:"请输入流水线名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),h(o,{span:12},{default:m((function(){return[h(u,{label:"关联环境",required:""},{default:m((function(){return[h(c,{modelValue:ge.environment,"onUpdate:modelValue":t[1]||(t[1]=function(e){return ge.environment=e}),placeholder:"请选择关联环境"},{default:m((function(){return[(p(!0),g(b,null,x(ge.environmentOptions,(function(e){return p(),v(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1}),h(M,{class:"card-section",shadow:"never"},{default:m((function(){return[t[36]||(t[36]=y("h3",null,"阶段任务",-1)),y("div",ee,[y("div",te,[y("div",ne,[h(M,{class:"task-card",shadow:"always"},{default:m((function(){return[y("div",ae,[h(Y,{type:"primary",plain:"",onClick:Ce},{default:m((function(){return t[33]||(t[33]=[_("关联代码库")])})),_:1}),be.url?(p(),g("p",re,w(be.url),1)):k("",!0),be.branch&&be.url?(p(),g("div",le,[t[34]||(t[34]=y("i",{class:"el-icon-branch"},null,-1)),h(K,{type:"success"},{default:m((function(){return[_(w(be.branch),1)]})),_:1})])):k("",!0)])]})),_:1}),y("div",{class:"line-and-button"},[t[35]||(t[35]=y("span",{class:"line"},null,-1)),y("button",{class:"add-task-icon",onClick:Ie}," + ")])])]),y("div",ue,[y("div",oe,[(p(!0),g(b,null,x(a.value,(function(e,t){return p(),g("div",{key:t,class:"task-group"},[y("div",ie,[h(K,{effect:"dark",round:"",onClick:function(t){return Ee(e,"group")}},{default:m((function(){return[_(w(e.name||"#test"),1)]})),_:2},1032,["onClick"])]),(p(!0),g(b,null,x(e.taskList,(function(n,a){return p(),g("div",{key:a,class:"flow-item"},[h(H,{x:t,y:a,"transform-index":n,phaseName:e.name,isShowAddTaskDialog:0==a,isShowwAdd:a==e.taskList.length-1,onEditTask:function(e){return Ee(n)},onCreateTask:function(t){return function(e){Se(),xe.name="",xe.params=[],Le.value=!1,Ue.value=e,ve.value=!0}(e)},onHandleCircleClick:function(t){return function(e,t,n){for(var a in Le.value=!0,Oe.value=e,Ue.value=t,Te.value=n,e)Be.value[a]=e[a];ve.value=!0}(n,e,a)},onOpenAddTaskDialogFlow:Ae,"is-show":!0},null,8,["x","y","transform-index","phaseName","isShowAddTaskDialog","isShowwAdd","onEditTask","onCreateTask","onHandleCircleClick"])])})),128))])})),128))])])])]})),_:1}),y("div",ce,[h(Y,{type:"primary",onClick:He},{default:m((function(){return t[37]||(t[37]=[_("保存")])})),_:1}),h(Y,{onClick:Ke},{default:m((function(){return t[38]||(t[38]=[_("取消")])})),_:1})])]})),_:1}),h(ze,{modelValue:we.value,"onUpdate:modelValue":t[8]||(t[8]=function(e){return we.value=e}),"show-close":!1},{header:m((function(e){var n=e.close,a=e.titleId,r=e.titleClass;return[y("h4",{id:a,class:V(r)},"关联代码库",10,se),h(Y,{type:"danger",onClick:n},{default:m((function(){return[h(pe,{class:"el-icon--left"},{default:m((function(){return[h(W)]})),_:1}),t[39]||(t[39]=_(" Close "))]})),_:2},1032,["onClick"])]})),footer:m((function(){return[h(Y,{onClick:t[7]||(t[7]=function(e){return we.value=!1})},{default:m((function(){return t[42]||(t[42]=[_("取消")])})),_:1}),h(Y,{type:"primary",onClick:qe},{default:m((function(){return t[43]||(t[43]=[_("确认")])})),_:1})]})),default:m((function(){return[h(d,{model:be,"label-width":"130px"},{default:m((function(){return[h(u,{label:"代码库地址",required:""},{default:m((function(){return[h(r,{modelValue:be.url,"onUpdate:modelValue":t[2]||(t[2]=function(e){return be.url=e}),disabled:!0},null,8,["modelValue"])]})),_:1}),h(u,{label:"默认分支",required:""},{default:m((function(){return[h(r,{modelValue:be.defaultBranch,"onUpdate:modelValue":t[3]||(t[3]=function(e){return be.defaultBranch=e}),disabled:!0},null,8,["modelValue"])]})),_:1}),h(u,{label:"选择凭证类型",required:""},{default:m((function(){return[h(ye,{modelValue:be.voucherType,"onUpdate:modelValue":t[4]||(t[4]=function(e){return be.voucherType=e})},{default:m((function(){return[h(he,{value:1},{default:m((function(){return t[40]||(t[40]=[_("密码方式")])})),_:1}),h(he,{value:2},{default:m((function(){return t[41]||(t[41]=[_("密钥方式")])})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"服务连接",required:""},{default:m((function(){return[h(c,{modelValue:be.gitType,"onUpdate:modelValue":t[5]||(t[5]=function(e){return be.gitType=e}),placeholder:"请选择连接",onChange:Ne},{default:m((function(){return[(p(!0),g(b,null,x(ke.value,(function(e){return p(),v(i,{key:e.ID,label:e.name,value:e.name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"开启代码源触发",required:""},{default:m((function(){return[h(je,{modelValue:be.codeSourceStatus,"onUpdate:modelValue":t[6]||(t[6]=function(e){return be.codeSourceStatus=e})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"]),h(Ye,{modelValue:ve.value,"onUpdate:modelValue":t[27]||(t[27]=function(e){return ve.value=e}),title:me.value},{footer:m((function(){return[y("footer",de,[y("div",null,[h(Y,{type:"primary",onClick:Re},{default:m((function(){return t[63]||(t[63]=[_("确认")])})),_:1}),h(Y,{onClick:Pe,disabled:!Le.value,class:"deleteBtn"},{default:m((function(){return t[64]||(t[64]=[_("删除")])})),_:1},8,["disabled"])]),h(Y,{onClick:t[26]||(t[26]=function(e){return ve.value=!1})},{default:m((function(){return t[65]||(t[65]=[_("取消")])})),_:1})])]})),default:m((function(){return[h(d,{model:Be.value,"label-width":"130px"},{default:m((function(){return[h(u,{label:"任务名称",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.name,"onUpdate:modelValue":t[9]||(t[9]=function(e){return Be.value.name=e}),placeholder:"请输入任务名称"},null,8,["modelValue"])]})),_:1}),h(u,{label:"任务插件",required:""},{default:m((function(){return[h(c,{modelValue:Be.value.branch,"onUpdate:modelValue":t[10]||(t[10]=function(e){return Be.value.branch=e}),placeholder:"请选择任务插件",onChange:Je},{default:m((function(){return[h(i,{label:"执行脚本",value:"1"}),h(i,{label:"镜像打包并推送到仓库",value:"2"}),h(i,{label:"构建产物上传至OSS",value:"3"}),h(i,{label:"KBS资源部署",value:"4"}),h(i,{label:"产物上传制品库",value:"5"})]})),_:1},8,["modelValue"])]})),_:1}),"1"==Be.value.branch?(p(),v(M,{key:0,class:"card-section",shadow:"never"},{default:m((function(){return[h(u,{label:"目标资源",required:""},{default:m((function(){return[h(c,{modelValue:Be.value.image,"onUpdate:modelValue":t[11]||(t[11]=function(e){return Be.value.image=e}),placeholder:"请选择目标资源"},{default:m((function(){return[(p(!0),g(b,null,x(Ve.value,(function(e){return p(),v(i,{key:e.ID,label:e.image,value:e.image},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"脚本类型",required:""},{default:m((function(){return[h(ye,{modelValue:Be.value.voucherType,"onUpdate:modelValue":t[12]||(t[12]=function(e){return Be.value.voucherType=e}),onChange:Ge},{default:m((function(){return[h(he,{value:"1"},{default:m((function(){return t[44]||(t[44]=[_("sh")])})),_:1}),h(he,{value:"2"},{default:m((function(){return t[45]||(t[45]=[_("bash")])})),_:1}),h(he,{value:"3"},{default:m((function(){return t[46]||(t[46]=[_("python")])})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"执行脚本",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.textarea,"onUpdate:modelValue":t[13]||(t[13]=function(e){return Be.value.textarea=e}),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])]})),_:1})]})),_:1})):k("",!0),"2"==Be.value.branch?(p(),v(M,{key:1,class:"card-section",shadow:"never"},{default:m((function(){return[h(u,{label:"镜像仓库：",required:""},{label:m((function(){return[t[47]||(t[47]=y("span",null,"镜像仓库",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[48]||(t[48]=_(" : "))]})),default:m((function(){return[h(c,{modelValue:Be.value.warehouse,"onUpdate:modelValue":t[14]||(t[14]=function(e){return Be.value.warehouse=e}),placeholder:"请选择镜像仓库",filterable:"","allow-create":""},{default:m((function(){return[(p(!0),g(b,null,x(l.value,(function(e,t){return p(),v(i,{key:t,label:e.config.url,value:e.config.url},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"空间名称：",required:""},{label:m((function(){return[t[49]||(t[49]=y("span",null,"空间名称",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[50]||(t[50]=_(": "))]})),default:m((function(){return[h(r,{modelValue:Be.value.spatialName,"onUpdate:modelValue":t[15]||(t[15]=function(e){return Be.value.spatialName=e}),placeholder:"请输入空间名称"},null,8,["modelValue"])]})),_:1}),h(u,{label:"镜像标签：",required:""},{label:m((function(){return[t[51]||(t[51]=y("span",null,"镜像标签",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[52]||(t[52]=_(": "))]})),default:m((function(){return[h(r,{modelValue:Be.value.mirrorTag,"onUpdate:modelValue":t[16]||(t[16]=function(e){return Be.value.mirrorTag=e}),placeholder:"请输入镜像标签"},null,8,["modelValue"])]})),_:1}),h(u,{label:"Dockerfile：",required:""},{label:m((function(){return[t[53]||(t[53]=y("span",null,"Dockerfile",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[54]||(t[54]=_(": "))]})),default:m((function(){return[h(r,{modelValue:Be.value.dockerfile,"onUpdate:modelValue":t[17]||(t[17]=function(e){return Be.value.dockerfile=e}),placeholder:"请输入Dockerfile"},null,8,["modelValue"])]})),_:1}),h(u,{label:"ContextPath："},{label:m((function(){return[t[55]||(t[55]=y("span",null,"ContextPath",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[56]||(t[56]=_(": "))]})),default:m((function(){return[h(r,{modelValue:Be.value.contextPath,"onUpdate:modelValue":t[18]||(t[18]=function(e){return Be.value.contextPath=e}),placeholder:"请输入ContextPath"},null,8,["modelValue"])]})),_:1})]})),_:1})):k("",!0),"3"==Be.value.branch?(p(),v(M,{key:2,class:"card-section",shadow:"never"},{default:m((function(){return[h(u,{label:"产品名称：",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.productName,"onUpdate:modelValue":t[19]||(t[19]=function(e){return Be.value.productName=e}),placeholder:"请输入产品名称"},null,8,["modelValue"])]})),_:1}),h(u,{label:"产品路径：",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.productPath,"onUpdate:modelValue":t[20]||(t[20]=function(e){return Be.value.productPath=e}),placeholder:"请输入产品路径"},null,8,["modelValue"])]})),_:1})]})),_:1})):k("",!0),"4"==Be.value.branch?(p(),v(M,{key:3,class:"card-section",shadow:"never"},{default:m((function(){return[h(u,{label:"kubectl版本",required:""},{label:m((function(){return[t[57]||(t[57]=y("span",null,"kubectl版本",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[58]||(t[58]=_(": "))]})),default:m((function(){return[h(c,{modelValue:Be.value.image,"onUpdate:modelValue":t[21]||(t[21]=function(e){return Be.value.image=e}),placeholder:"请选择kubectl版本"},{default:m((function(){return[(p(!0),g(b,null,x(Ve.value,(function(e){return p(),v(i,{key:e.ID,label:e.image,value:e.image},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"资源类型：",required:""},{label:m((function(){return[t[59]||(t[59]=y("span",null,"资源类型",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[60]||(t[60]=_(": "))]})),default:m((function(){return[h(c,{modelValue:Be.value.resource,"onUpdate:modelValue":t[22]||(t[22]=function(e){return Be.value.resource=e}),placeholder:"请选择资源类型"},{default:m((function(){return[h(i,{label:"Deployment",value:"1"}),h(i,{label:"Statefulset",value:"2"}),h(i,{label:"DaemonSet",value:"3"}),h(i,{label:"Service",value:"4"}),h(i,{label:"Ingress",value:"5"}),h(i,{label:"ConfigMap",value:"6"}),h(i,{label:"Secret",value:"7"})]})),_:1},8,["modelValue"])]})),_:1}),h(u,{label:"YAML资源",required:""},{label:m((function(){return[t[61]||(t[61]=y("span",null,"YAML资源",-1)),h(pe,{class:"label",style:{"font-size":"15px"}},{default:m((function(){return[h(Me)]})),_:1}),t[62]||(t[62]=_(": "))]})),default:m((function(){return[h(r,{modelValue:Be.value.yamlResource,"onUpdate:modelValue":t[23]||(t[23]=function(e){return Be.value.yamlResource=e}),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])]})),_:1})]})),_:1})):k("",!0),"5"==Be.value.branch?(p(),v(M,{key:4,class:"card-section",shadow:"never"},{default:m((function(){return[h(u,{label:"目标资源：",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.name,"onUpdate:modelValue":t[24]||(t[24]=function(e){return Be.value.name=e}),placeholder:"请输入目标资源"},null,8,["modelValue"])]})),_:1}),h(u,{label:"执行脚本",required:""},{default:m((function(){return[h(r,{modelValue:Be.value.openScript,"onUpdate:modelValue":t[25]||(t[25]=function(e){return Be.value.openScript=e}),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])]})),_:1})]})),_:1})):k("",!0)]})),_:1},8,["model"])]})),_:1},8,["modelValue","title"]),h(Ye,{modelValue:_e.value,"onUpdate:modelValue":t[30]||(t[30]=function(e){return _e.value=e}),title:"添加阶段"},{default:m((function(){return[h(d,{model:xe,"label-width":"80px"},{default:m((function(){return[h(u,{label:"阶段名称",required:!0},{default:m((function(){return[h(r,{modelValue:xe.name,"onUpdate:modelValue":t[28]||(t[28]=function(e){return xe.name=e}),placeholder:"请输入阶段名称"},null,8,["modelValue"])]})),_:1}),h(u,{label:"阶段参数",required:!0},{default:m((function(){return[h(We,{"empty-text":"",data:xe.params},{default:m((function(){return[h(Qe,{prop:"name",label:"参数"},{default:m((function(e){var t=e.row;return[h(r,{modelValue:t.name,"onUpdate:modelValue":function(e){return t.name=e},placeholder:"参数名称"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),h(Qe,{prop:"defaultValue",label:"默认值"},{default:m((function(e){var t=e.row;return[h(r,{modelValue:t.defaultValue,"onUpdate:modelValue":function(e){return t.defaultValue=e},placeholder:"请输入参数默认值"},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),h(Qe,{label:""},{default:m((function(e){e.row;var n=e.index;return[h(Y,{onClick:function(e){return function(e,t){xe.params.splice(t,1)}(0,n)},type:"text",size:"small"},{default:m((function(){return t[66]||(t[66]=[_("删除")])})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),h(Y,{onClick:Fe,class:"addBtn"},{default:m((function(){return t[67]||(t[67]=[_("+ 添加自定义参数")])})),_:1}),y("footer",fe,[h(Y,{style:{"border-radius":"0px",background:"blue",border:"none"},type:"primary",onClick:De},{default:m((function(){return t[68]||(t[68]=[_("确定")])})),_:1}),h(Y,{style:{"border-radius":"0px"},onClick:t[29]||(t[29]=function(e){return _e.value=!1})},{default:m((function(){return t[69]||(t[69]=[_("取消")])})),_:1})])]})),_:1})]})),_:1},8,["model"])]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})}}};t("default",l(pe,[["__scopeId","data-v-58851ec4"]]))}}}))}();
