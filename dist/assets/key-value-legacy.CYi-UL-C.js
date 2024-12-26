/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),u=new P(n||[]);return a(i,"_invoke",{value:O(t,r,u)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=s;var p="suspendedStart",d="suspendedYield",y="executing",v="completed",m={};function g(){}function b(){}function w(){}var x={};f(x,u,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(A([])));k&&k!==n&&o.call(k,u)&&(x=k);var E=w.prototype=g.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(n,a,i,u){var l=h(t[n],t,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return r("throw",t,i,u)}))}u(l.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function O(t,r,n){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var u=n.delegate;if(u){var l=S(u,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var c=h(t,r,n);if("normal"===c.type){if(o=n.done?v:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=v,n.method="throw",n.arg=c.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=h(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function A(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},L(_.prototype),f(_.prototype,l,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(s(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),f(E,c,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}function e(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e,r,n,o,a,i){try{var u=t[a](i),l=u.value}catch(t){return void r(t)}u.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,l,"next",t)}function l(t){n(i,o,a,u,l,"throw",t)}u(void 0)}))}}System.register(["./index-legacy.Cf1_fyJw.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./popper-legacy.BkTYt---.js","./namespaces-legacy.BQEEK17s.js","./card-legacy.EIB5U9Pv.js","./col-legacy.tMI9428i.js","./form-legacy.0XPxLcB_.js","./button-legacy.CH0FoAJ-.js","./index-legacy.B3YBBaMC.js","./form-item-legacy.BSRxtXpO.js"],(function(r,n){"use strict";var a,i,u,l,c,f,s,h,p,d,y,v,m,g,b,w,x,j,k,E;return{setters:[function(t){a=t.a,i=t.o,u=t.h,l=t.w,c=t.c,f=t.F,s=t.v,h=t.e,p=t.b,d=t.t,y=t.g,v=t.E},null,function(t){m=t.E,g=t.a},null,null,function(t){b=t.g},function(t){w=t.E},function(t){x=t.E,j=t.a},null,null,function(t){k=t._},function(t){E=t.E}],execute:function(){var n={name:"NamespaceSelectBlock",emits:{enter:function(t){return 1===t.length}}},L=(r("_",Object.assign(n,{props:{namespace:{default:function(){return""},type:String},cluster:{default:function(){return 0},type:Number}},emits:["enter"],setup:function(r,n){var h=n.emit,p=r,d=function(){var r=o(t().mark((function r(n){var o,a,i,u,l;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b({id:n});case 2:if(0===(o=t.sent).code){w.value=[],a=e(o.data.namespaces);try{for(a.s();!(i=a.n()).done;)u=i.value,l={id:Math.random(),name:u},w.value.push(l)}catch(r){a.e(r)}finally{a.f()}}case 4:case"end":return t.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),y=a(""),v=a(0),w=a([]);y.value=p.namespace,v.value=p.cluster,d(v.value);var x=function(t){h("enter",t)};return function(t,e){var r=m,n=g;return i(),u(n,{modelValue:y.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return y.value=t}),filterable:"",onChange:x},{default:l((function(){return[(i(!0),c(f,null,s(w.value,(function(t){return i(),u(r,{key:t.id,label:t.name,value:t.name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])}}})),{style:{"margin-top":"20px"}}),_={class:"card-header"},O={style:{width:"98%"},class:"tab-table"},S={align:"left"},V={name:"KeyValueBlock"};r("a",Object.assign(V,{props:{form:{default:function(){return{}},type:Object},title:{default:function(){return""},type:String}},setup:function(e,r){var n=r.expose,u=e,m=a([]),g=a(!1),b=a("");!function(){if(b.value=u.title,u.form)for(var t in u.form)Object.prototype.hasOwnProperty.call(u.form,t)&&m.value.push({index:Math.random(),key:t,value:u.form[t]});g.value=u.isreadonly}();var V=function(){var t={index:Math.random(),key:"",value:""};m.value.push(t)},N=function(t,e){if(m.value){for(var r={},n=0;n<m.value.length;n++)""!==m.value[n].key&&(r[m.value[n].key]=m.value[n].value);switch(e){case"selector":t.spec&&(t.spec.selector=r);break;case"labels":t.metadata&&(t.metadata.labels=r);break;case"annotations":t.metadata&&(t.metadata.annotations=r);break;case"data":t&&(t.data=r);break;case"binaryData":t&&(t.binaryData=r)}}},P=function(){var e=o(t().mark((function e(r,n){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(r,n);case 1:case"end":return t.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return n({transformationformat:P}),function(t,e){var r=v,n=E,o=x,a=j,u=w;return i(),c("div",L,[h(u,{class:"box-card",shadow:"hover"},{header:l((function(){return[p("div",_,[p("span",null,d(b.value),1)])]})),default:l((function(){return[h(a,null,{default:l((function(){return[h(o,{span:24},{default:l((function(){return[h(n,{disabled:g.value},{default:l((function(){return[p("table",O,[e[2]||(e[2]=p("tr",null,[p("th",{scope:"col",width:"48%",align:"left"},[p("label",null,"键")]),p("th",{scope:"col",width:"48%",align:"left"},[p("label",null,"值")]),p("th",{align:"left"})],-1)),(i(!0),c(f,null,s(m.value,(function(t,n){return i(),c("tr",{key:n},[p("td",null,[h(k,{modelValue:t.key,"onUpdate:modelValue":function(e){return t.key=e},placeholder:"e.g. foo","item-type":"input"},null,8,["modelValue","onUpdate:modelValue"])]),p("td",null,[h(k,{modelValue:t.value,"onUpdate:modelValue":function(e){return t.value=e},placeholder:"e.g. bar","item-type":"textarea"},null,8,["modelValue","onUpdate:modelValue"])]),p("td",null,[h(r,{type:"danger",link:"",icon:"delete",size:"small",onClick:function(t){return function(t){m.value.splice(t,1)}(n)}},{default:l((function(){return e[0]||(e[0]=[y("删除 ")])})),_:2},1032,["onClick"])])])})),128)),p("tr",null,[p("td",S,[h(r,{size:"small",type:"primary",link:"",icon:"plus",onClick:V},{default:l((function(){return e[1]||(e[1]=[y("添加")])})),_:1})])])])]})),_:1},8,["disabled"])]})),_:1})]})),_:1})]})),_:1})])}}}))}}}))}();