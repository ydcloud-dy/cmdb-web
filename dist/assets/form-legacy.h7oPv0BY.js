/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,o=n.hasOwnProperty,u=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),l=new P(n||[]);return u(a,"_invoke",{value:E(e,r,l)}),a}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var d="suspendedStart",y="suspendedYield",h="executing",g="completed",v={};function m(){}function b(){}function w(){}var j={};s(j,l,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(S([])));x&&x!==n&&o.call(x,l)&&(j=x);var _=w.prototype=m.prototype=Object.create(j);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(n,u,a,l){var i=p(e[n],e,u);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(s).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(i.arg)}var n;u(this,"_invoke",{value:function(e,o){function u(){return new t((function(t,n){r(e,o,t,n)}))}return n=n?n.then(u,u):u()}})}function E(e,r,n){var o=d;return function(u,a){if(o===h)throw Error("Generator is already running");if(o===g){if("throw"===u)throw a;return{value:t,done:!0}}for(n.method=u,n.arg=a;;){var l=n.delegate;if(l){var i=V(l,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var c=p(e,r,n);if("normal"===c.type){if(o=n.done?g:y,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=g,n.method="throw",n.arg=c.arg)}}}function V(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,V(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var u=p(o,e.iterator,r.arg);if("throw"===u.type)return r.method="throw",r.arg=u.arg,r.delegate=null,v;var a=u.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function S(e){if(e||""===e){var r=e[l];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,u=function r(){for(;++n<e.length;)if(o.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return u.next=u}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,u(_,"constructor",{value:w,configurable:!0}),u(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},O(T.prototype),s(T.prototype,i,(function(){return this})),r.AsyncIterator=T,r.async=function(e,t,n,o,u){void 0===u&&(u=Promise);var a=new T(f(e,t,n,o),u);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(_),s(_,c,"Generator"),s(_,l,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=S,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!e)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var u=this.tryEntries.length-1;u>=0;--u){var a=this.tryEntries[u],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var u=n;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=t&&t<=u.finallyLoc&&(u=null);var a=u?u.completion:{};return a.type=e,a.arg=t,u?(this.method="next",this.next=u.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),U(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;U(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:S(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},r}function t(e,t,r,n,o,u,a){try{var l=e[u](a),i=l.value}catch(e){return void r(e)}l.done?t(i):Promise.resolve(i).then(n,o)}function r(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function l(e){t(a,o,u,l,i,"next",e)}function i(e){t(a,o,u,l,i,"throw",e)}l(void 0)}))}}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.Cf1_fyJw.js","./button-legacy.CH0FoAJ-.js","./form-legacy.0XPxLcB_.js","./switch-legacy.BQgdxH-G.js","./radio-group-legacy.b3NdNxxp.js","./radio-legacy.DUa6CodL.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./form-item-legacy.BSRxtXpO.js","./input-legacy.DqeBI0DR.js","./index-legacy.VcYNc2Mg.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./castArray-legacy.Dek4eNNY.js","./isEqual-legacy.wQ-Y-8LH.js","./_Uint8Array-legacy.CS4Mx2ig.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./_baseClone-legacy.CxPdKCcf.js","./_initCloneObject-legacy.JrJoSfNx.js"],(function(t,u){"use strict";var a,l,i,c,s,f,p,d,y,h,g,v,m,b,w,j,k,x,_,O,T,E;return{setters:[function(e){a=e._,l=e.a,i=e.N,c=e.R,s=e.o,f=e.c,p=e.e,d=e.w,y=e.F,h=e.g,g=e.h,v=e.f,m=e.b,b=e.k,w=e.E},null,null,function(e){j=e.E},null,null,null,function(e){k=e.E,x=e.a},null,null,function(e){_=e.a,O=e.E},null,function(e){T=e.E,E=e.a},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var u=document.createElement("style");u.textContent=".dialog-footer[data-v-c856f033]{margin-top:20px}\n",document.head.appendChild(u);var V={style:{overflow:"hidden",width:"100%","max-width":"600px","margin-left":"20px"}},L={class:"dialog-footer",align:"right"},U={name:"FormBlock",emits:{close:function(){return!0},enter:function(e){return!!e.name}}},P=Object.assign(U,{props:{form:{default:function(){return{}},type:Object}},emits:["close","enter"],setup:function(t,u){var a=u.emit,U=t,P=l({name:"",type:null,authType:"config",conf:"",url:"",kubeToken:"",registryUrl:"",username:"",password:"",isHttps:!1,desc:""});i((function(){P.value=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},U.form)})),c((function(){return P.value.type}),(function(e){0===e&&(P.value.authType="config")}));var S=l({name:[{required:!0,message:"请输入名称",trigger:"blur"}],type:[{required:!0,message:"请选择配置类型",trigger:"change"}],conf:[{required:function(e){return"config"===e.authType&&0===e.type},message:"请输入Kubernetes Config",trigger:"blur"}],url:[{required:function(e){return"token"===e.authType&&0===e.type},message:"请输入Kubernetes URL",trigger:"blur"}],kubeToken:[{required:function(e){return"token"===e.authType&&0===e.type},message:"请输入Kubernetes Token",trigger:"blur"}],registryUrl:[{required:function(e){return 1===e.type},message:"请输入Registry URL",trigger:"blur"}],username:[{required:function(e){return 1===e.type},message:"请输入用户名",trigger:"blur"}],password:[{required:function(e){return 1===e.type},message:"请输入密码",trigger:"blur"}],desc:[{required:!1,message:"请输入描述信息",trigger:"blur"}]}),R=function(){q.value.resetFields(),a("close")},q=l(null),C=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.value.validate(function(){var t=r(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(n={id:P.value.ID,name:P.value.name,desc:P.value.desc,type:P.value.type,config:{}},0===P.value.type?(n.config.type="config"===P.value.authType?0:1,"config"===P.value.authType?n.config.conf=P.value.conf:"token"===P.value.authType&&(n.config.url=P.value.url,n.config.conf=P.value.kubeToken)):1===P.value.type?(n.config.url=P.value.registryUrl,n.config.username=P.value.username,n.config.password=P.value.password,n.config.isHttps=P.value.isHttps):2===P.value.type&&(n.config.url=P.value.jenkinsUrl,n.config.username=P.value.jenkinsUsername,n.config.token=P.value.jenkinsToken,n.config.workspace=P.value.workspace,n.config.namespace=P.value.namespace),a("enter",n));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return function(e,t){var r=b,n=_,o=k,u=x,a=T,l=E,i=j,c=O,U=w;return s(),f("div",V,[p(c,{ref_key:"FormBlock",ref:q,model:P.value,rules:S.value,"label-width":"120px"},{default:d((function(){return[p(n,{label:"名称",prop:"name"},{default:d((function(){return[p(r,{modelValue:P.value.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return P.value.name=e}),placeholder:"请输入名称",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),p(n,{label:"配置类型",prop:"type"},{default:d((function(){return[p(u,{modelValue:P.value.type,"onUpdate:modelValue":t[1]||(t[1]=function(e){return P.value.type=e}),placeholder:"请选择配置类型"},{default:d((function(){return[p(o,{label:"kubernetes",value:0}),p(o,{label:"registry",value:1})]})),_:1},8,["modelValue"])]})),_:1}),0===P.value.type?(s(),f(y,{key:0},[p(n,{label:"认证类型",prop:"authType"},{default:d((function(){return[p(l,{modelValue:P.value.authType,"onUpdate:modelValue":t[2]||(t[2]=function(e){return P.value.authType=e})},{default:d((function(){return[p(a,{label:"config"},{default:d((function(){return t[11]||(t[11]=[h("Kubernetes Config")])})),_:1}),p(a,{label:"token"},{default:d((function(){return t[12]||(t[12]=[h("Service Account Token")])})),_:1})]})),_:1},8,["modelValue"])]})),_:1}),"config"===P.value.authType?(s(),g(n,{key:0,label:"Kubernetes Config",prop:"conf"},{default:d((function(){return[p(r,{type:"textarea",modelValue:P.value.conf,"onUpdate:modelValue":t[3]||(t[3]=function(e){return P.value.conf=e}),placeholder:"请输入Kubernetes Config",autocomplete:"off"},null,8,["modelValue"])]})),_:1})):v("",!0),"token"===P.value.authType?(s(),g(n,{key:1,label:"Kubernetes URL",prop:"url"},{default:d((function(){return[p(r,{modelValue:P.value.url,"onUpdate:modelValue":t[4]||(t[4]=function(e){return P.value.url=e}),placeholder:"请输入Kubernetes地址",autocomplete:"off"},null,8,["modelValue"])]})),_:1})):v("",!0),"token"===P.value.authType?(s(),g(n,{key:2,label:"Kubernetes Token",prop:"kubeToken"},{default:d((function(){return[p(r,{type:"textarea",modelValue:P.value.kubeToken,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.value.kubeToken=e}),placeholder:"请输入Kubernetes Token",autocomplete:"off"},null,8,["modelValue"])]})),_:1})):v("",!0)],64)):v("",!0),1===P.value.type?(s(),f(y,{key:1},[p(n,{label:"Registry URL",prop:"registryUrl"},{default:d((function(){return[p(r,{modelValue:P.value.registryUrl,"onUpdate:modelValue":t[6]||(t[6]=function(e){return P.value.registryUrl=e}),placeholder:"请输入Registry地址",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),p(n,{label:"用户名",prop:"username"},{default:d((function(){return[p(r,{modelValue:P.value.username,"onUpdate:modelValue":t[7]||(t[7]=function(e){return P.value.username=e}),placeholder:"请输入Registry用户名",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),p(n,{label:"用户密码",prop:"password"},{default:d((function(){return[p(r,{modelValue:P.value.password,"onUpdate:modelValue":t[8]||(t[8]=function(e){return P.value.password=e}),placeholder:"请输入Registry密码",type:"password",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),p(n,{label:"是否HTTPS",prop:"isHttps"},{default:d((function(){return[p(i,{modelValue:P.value.isHttps,"onUpdate:modelValue":t[9]||(t[9]=function(e){return P.value.isHttps=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0),p(n,{label:"描述",prop:"desc"},{default:d((function(){return[p(r,{modelValue:P.value.desc,"onUpdate:modelValue":t[10]||(t[10]=function(e){return P.value.desc=e}),placeholder:"请输入描述",type:"textarea",autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"]),m("div",L,[p(U,{size:"small",onClick:R},{default:d((function(){return t[13]||(t[13]=[h("取 消")])})),_:1}),p(U,{size:"small",type:"primary",onClick:C},{default:d((function(){return t[14]||(t[14]=[h("确 定")])})),_:1})])])}}});t("default",a(P,[["__scopeId","data-v-c856f033"]]))}}}))}();