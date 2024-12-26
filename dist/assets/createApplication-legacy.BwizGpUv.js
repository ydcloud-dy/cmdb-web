/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),u=new U(r||[]);return l(o,"_invoke",{value:L(e,n,u)}),o}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var d="suspendedStart",v="suspendedYield",h="executing",m="completed",g={};function y(){}function b(){}function w(){}var x={};s(x,u,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(I([])));k&&k!==r&&a.call(k,u)&&(x=k);var j=w.prototype=y.prototype=Object.create(x);function V(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(r,l,o,u){var i=p(e[r],e,l);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,o,u)}),(function(e){n("throw",e,o,u)})):t.resolve(s).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,u)}))}u(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(l,l):l()}})}function L(e,n,r){var a=d;return function(l,o){if(a===h)throw Error("Generator is already running");if(a===m){if("throw"===l)throw o;return{value:t,done:!0}}for(r.method=l,r.arg=o;;){var u=r.delegate;if(u){var i=N(u,r);if(i){if(i===g)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var c=p(e,n,r);if("normal"===c.type){if(a=r.done?m:v,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}function N(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var l=p(a,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,g;var o=l.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function U(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function I(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,l(j,"constructor",{value:w,configurable:!0}),l(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},V(E.prototype),s(E.prototype,i,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var o=new E(f(e,t,r,a),l);return n.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},V(j),s(j,c,"Generator"),s(j,u,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=I,U.prototype={constructor:U,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return u.type="throw",u.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:I(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},n}function t(e,t,n,r,a,l,o){try{var u=e[l](o),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,l){var o=e.apply(n,r);function u(e){t(o,a,l,u,i,"next",e)}function i(e){t(o,a,l,u,i,"throw",e)}u(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./button-legacy.CH0FoAJ-.js","./card-legacy.EIB5U9Pv.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./form-legacy.0XPxLcB_.js","./form-item-legacy.BSRxtXpO.js","./input-legacy.DqeBI0DR.js","./step-legacy.Jr2MFj53.js","./breadcrumb-item-legacy.DRRBrPkl.js","./environment-legacy.DTe01SgQ.js","./k8sCluster-legacy.Bhs3SaAk.js","./applications-legacy.BC_EJXjZ.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js","./index-legacy.5aKQ1vKy.js"],(function(t,r){"use strict";var a,l,o,u,i,c,s,f,p,d,v,h,m,g,y,b,w,x,_,k,j,V,E,L,N,C,O,U,I,q;return{setters:[function(e){a=e._,l=e.a,o=e.u,u=e.q,i=e.o,c=e.c,s=e.b,f=e.e,p=e.w,d=e.g,v=e.F,h=e.v,m=e.h,g=e.f,y=e.x,b=e.i,w=e.k,x=e.E},null,function(e){_=e.E},null,function(e){k=e.E,j=e.a},null,null,null,function(e){V=e.a,E=e.E},null,function(e){L=e.E,N=e.a},function(e){C=e.E,O=e.a},function(e){U=e.g},function(e){I=e.g},function(e){q=e.c},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".create-application-container[data-v-88155f56]{max-width:900px;margin:0 auto;padding:20px}.form-container[data-v-88155f56]{padding:20px;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,.1)}.form-card[data-v-88155f56]{margin-top:20px;padding:20px}.button-group[data-v-88155f56]{display:flex;justify-content:space-between;margin-top:20px}.environment-info[data-v-88155f56]{margin-top:20px}\n",document.head.appendChild(r);var P={style:{margin:"20px"}},S={class:"create-application-container"},G={class:"form-container"},F={key:0},D={class:"button-group"},T={key:1},A={class:"environment-list"},z={class:"button-group"},R={__name:"createApplication",setup:function(t){var r=l(1),a=l(null),R=l(null),K=l([]),Y=l([]),J=l({repo:"",branch:"",name:"",identifier:"",description:""}),B=l({owner:[],developers:[],language:"",isCore:!1}),H={repo:[{required:!0,message:"代码仓库不能为空",trigger:"blur"}],branch:[{required:!0,message:"主干分支不能为空",trigger:"blur"}],name:[{required:!0,message:"应用名称不能为空",trigger:"blur"}],identifier:[{required:!0,message:"应用标识不能为空",trigger:"blur"}]},M={owner:[{required:!0,message:"负责人不能为空",trigger:"blur"}],developers:[{required:!0,message:"开发者不能为空",trigger:"change"}],language:[{required:!0,message:"请选择程序设计语言",trigger:"change"}]},Q=l([]),W=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({page:1,pageSize:100});case 2:0===(n=e.sent).code&&(Q.value=n.data.list);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=o(),Z=function(){X.back()};u((function(){W(),$(),ee()}));var $=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U({page:1,pageSize:1e3});case 2:0===(n=e.sent).code&&(K.value=n.data.list.map((function(e){return{value:e.key,label:e.name}})));case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ee=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I({page:1,pageSize:1e3});case 2:0===(n=e.sent).code&&(Y.value=n.data.list.map((function(e){return{value:e.id,label:e.name}})));case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),te=function(){a.value.validate((function(e){e&&R.value.validate((function(e){e&&(r.value=2)}))}))},ne=function(){r.value=1},re=function(){var t=n(e().mark((function t(){var n,r,a,l,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,ae.value.forEach((function(e,t){e.environment&&e.cluster&&e.namespace||(n=!1,b.error("第 ".concat(t+1," 行存在未填写完整的环境、集群或命名空间")))})),n){e.next=4;break}return e.abrupt("return");case 4:return r=ae.value.map((function(e){var t=K.value.find((function(t){return t.value===e.environment})),n=Y.value.find((function(t){return t.value===e.cluster}));return{clusterName:n?n.label:"",clusterId:n?n.value:"",envCode:e.environment,envName:t?t.label:"",namespace:e.namespace}})),a={gitRepo:J.value.repo,branch:J.value.branch,appName:J.value.name,appCode:J.value.identifier,appDesc:J.value.description,develop:B.value.developers.map((function(e){var t=Q.value.find((function(t){return t.ID===e}));return{label:t?t.nickName:e,value:t?t.userName:e,key:t?t.nickName:e,option:t?{avatar:"",nickname:t.nickName,username:t.userName}:{},originLabel:t?t.nickName:e}})),owner:B.value.owner.map((function(e){var t=Q.value.find((function(t){return t.ID===e}));return{label:t?t.nickName:e,value:t?t.userName:e,key:t?t.nickName:e,option:t?{avatar:"",nickname:t.nickName,username:t.userName}:{},originLabel:t?t.nickName:e}})),language:B.value.language},l={envs:r,app:a},e.prev=8,e.next=11,q(l);case 11:0===(o=e.sent).code?(b.success("应用创建成功！"),X.back()):b.error(o.msg||"应用创建失败！"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),b.error("应用创建请求失败，请稍后重试！");case 19:case"end":return e.stop()}}),t,null,[[8,15]])})));return function(){return t.apply(this,arguments)}}(),ae=l([]),le=function(){ae.value.push({environment:"",cluster:"",namespace:""})};return function(e,t){var n=C,l=O,o=L,u=N,y=w,b=V,U=E,I=k,q=j,W=_,X=x;return i(),c(v,null,[s("div",P,[f(l,{separator:"/"},{default:p((function(){return[f(n,{href:"/"},{default:p((function(){return t[8]||(t[8]=[d("首页")])})),_:1}),f(n,null,{default:p((function(){return t[9]||(t[9]=[d("应用发布")])})),_:1}),f(n,null,{default:p((function(){return t[10]||(t[10]=[d("创建应用")])})),_:1})]})),_:1})]),s("div",S,[s("div",G,[t[20]||(t[20]=s("h2",{style:{color:"white"}},"创建应用",-1)),f(u,{active:r.value,"align-center":""},{default:p((function(){return[f(o,{title:"填写应用信息"}),f(o,{title:"关联环境"}),f(o,{title:"完成"})]})),_:1},8,["active"]),1===r.value?(i(),c("div",F,[f(W,{shadow:"always",class:"form-card"},{default:p((function(){return[t[11]||(t[11]=s("h3",null,"基本信息",-1)),f(U,{ref_key:"basicInfoFormRef",ref:a,model:J.value,rules:H,"label-width":"120px"},{default:p((function(){return[f(b,{label:"代码仓库",prop:"repo"},{default:p((function(){return[f(y,{modelValue:J.value.repo,"onUpdate:modelValue":t[0]||(t[0]=function(e){return J.value.repo=e}),placeholder:"请输入代码仓库地址"},null,8,["modelValue"])]})),_:1}),f(b,{label:"主干分支",prop:"branch"},{default:p((function(){return[f(y,{modelValue:J.value.branch,"onUpdate:modelValue":t[1]||(t[1]=function(e){return J.value.branch=e}),placeholder:"请输入主干分支"},null,8,["modelValue"])]})),_:1}),f(b,{label:"应用名称",prop:"name"},{default:p((function(){return[f(y,{modelValue:J.value.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return J.value.name=e}),placeholder:"请输入应用名称"},null,8,["modelValue"])]})),_:1}),f(b,{label:"应用标识",prop:"identifier"},{default:p((function(){return[f(y,{modelValue:J.value.identifier,"onUpdate:modelValue":t[3]||(t[3]=function(e){return J.value.identifier=e}),placeholder:"请输入应用标识"},null,8,["modelValue"])]})),_:1}),f(b,{label:"应用描述"},{default:p((function(){return[f(y,{modelValue:J.value.description,"onUpdate:modelValue":t[4]||(t[4]=function(e){return J.value.description=e}),type:"textarea",maxlength:100,"show-word-limit":"",placeholder:"请输入应用描述"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model"]),t[12]||(t[12]=s("h3",null,"研发信息",-1)),f(U,{ref_key:"developmentFormRef",ref:R,model:B.value,rules:M,"label-width":"120px"},{default:p((function(){return[f(b,{label:"负责人",prop:"owner"},{default:p((function(){return[f(q,{modelValue:B.value.owner,"onUpdate:modelValue":t[5]||(t[5]=function(e){return B.value.owner=e}),placeholder:"请选择负责人",clearable:"",multiple:""},{default:p((function(){return[(i(!0),c(v,null,h(Q.value,(function(e){return i(),m(I,{key:e.ID,label:"".concat(e.userName," / ").concat(e.nickName),value:e.ID},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(b,{label:"开发",prop:"developers"},{default:p((function(){return[f(q,{modelValue:B.value.developers,"onUpdate:modelValue":t[6]||(t[6]=function(e){return B.value.developers=e}),multiple:"",placeholder:"请选择开发人员",clearable:""},{default:p((function(){return[(i(!0),c(v,null,h(Q.value,(function(e){return i(),m(I,{key:e.ID,label:"".concat(e.userName," / ").concat(e.nickName),value:e.ID},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(b,{label:"程序设计语言",prop:"language"},{default:p((function(){return[f(q,{modelValue:B.value.language,"onUpdate:modelValue":t[7]||(t[7]=function(e){return B.value.language=e}),placeholder:"请选择程序设计语言"},{default:p((function(){return[f(I,{label:"Java",value:"java"}),f(I,{label:"Golang",value:"golang"}),f(I,{label:"Python",value:"python"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["model"])]})),_:1}),s("div",D,[f(X,{type:"default",onClick:Z},{default:p((function(){return t[13]||(t[13]=[d("返回")])})),_:1}),f(X,{type:"primary",onClick:te},{default:p((function(){return t[14]||(t[14]=[d("下一步")])})),_:1})])])):g("",!0),2===r.value?(i(),c("div",T,[f(W,{shadow:"always",class:"form-card"},{default:p((function(){return[s("div",A,[(i(!0),c(v,null,h(ae.value,(function(e,n){return i(),c("div",{key:n,class:"environment-item",style:{"margin-top":"10px",display:"flex",gap:"10px"}},[f(q,{modelValue:e.environment,"onUpdate:modelValue":function(t){return e.environment=t},placeholder:"请选择环境",style:{flex:"1"},clearable:""},{default:p((function(){return[(i(!0),c(v,null,h(K.value,(function(e){return i(),m(I,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"]),f(q,{modelValue:e.cluster,"onUpdate:modelValue":function(t){return e.cluster=t},placeholder:"请选择容器集群",style:{flex:"1"},clearable:""},{default:p((function(){return[(i(!0),c(v,null,h(Y.value,(function(e){return i(),m(I,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"]),f(y,{modelValue:e.namespace,"onUpdate:modelValue":function(t){return e.namespace=t},placeholder:"请输入命名空间",style:{flex:"1"}},null,8,["modelValue","onUpdate:modelValue"]),f(X,{type:"danger",icon:"delete",onClick:function(e){return function(e){ae.value.splice(e,1)}(n)}},{default:p((function(){return t[15]||(t[15]=[d("删除")])})),_:2},1032,["onClick"])])})),128))]),f(X,{type:"primary",icon:"plus",onClick:le},{default:p((function(){return t[16]||(t[16]=[d("添加环境")])})),_:1}),t[17]||(t[17]=s("div",{class:"environment-info"},[s("p",null,"保证至少有一个可用的环境关联到应用。"),s("p",null,"使用 Kubernetes 部署能力将应用部署到容器集群，需要提前注册待部署的容器集群。"),s("p",null,"前置工作："),s("ul",null,[s("li",null,"注册 Kubernetes 集群，具体操作可参考 注册集群"),s("li",null,"新建环境信息")])],-1))]})),_:1}),s("div",z,[f(X,{type:"default",onClick:ne},{default:p((function(){return t[18]||(t[18]=[d("上一步")])})),_:1}),f(X,{type:"primary",onClick:re},{default:p((function(){return t[19]||(t[19]=[d("提交")])})),_:1})])])):g("",!0)])])],64)}}};t("default",a(R,[["__scopeId","data-v-88155f56"]]))}}}))}();
