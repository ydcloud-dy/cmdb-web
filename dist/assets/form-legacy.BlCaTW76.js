/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function t(e,t,l){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}System.register(["./index-legacy.Cf1_fyJw.js","./button-legacy.CH0FoAJ-.js","./form-legacy.0XPxLcB_.js","./form-item-legacy.BSRxtXpO.js","./input-legacy.DqeBI0DR.js","./castArray-legacy.Dek4eNNY.js","./_baseClone-legacy.CxPdKCcf.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js"],(function(l,r){"use strict";var n,a,o,u,i,c,f,d,m,p,s,g,b;return{setters:[function(e){n=e._,a=e.a,o=e.N,u=e.o,i=e.c,c=e.e,f=e.w,d=e.b,m=e.g,p=e.k,s=e.E},null,null,function(e){g=e.a,b=e.E},null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".dialog-footer[data-v-91b349ff]{margin-top:20px}\n",document.head.appendChild(r);var v={style:{overflow:"hidden",width:"100%","max-width":"600px","margin-left":"20px"}},y={class:"dialog-footer",align:"right"},j={__name:"form",props:{form:{type:Object,default:function(){return{}}},type:{type:String,default:"create"}},emits:["close","enter"],setup:function(l,r){var n=r.emit,j=l,O=a({name:"",image:"",command:"",args:"",desc:""});o((function(){O.value=function(l){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){t(l,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(n,e))}))}return l}({},j.form)}));var h=a({name:[{required:!0,message:"请输入名称",trigger:"blur"}],image:[{required:!0,message:"请输入镜像地址",trigger:"blur"}]}),_=a(null),V=function(){_.value.resetFields(),n("close")},w=function(){_.value.validate((function(e){e&&n("enter",O.value)}))};return function(e,t){var r=p,n=g,a=b,o=s;return u(),i("div",v,[c(a,{ref_key:"FormBlock",ref:_,model:O.value,rules:h.value,"label-width":"120px"},{default:f((function(){return[c(n,{label:"名称",prop:"name"},{default:f((function(){return[c(r,{modelValue:O.value.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return O.value.name=e}),placeholder:"请输入名称",autocomplete:"off",disabled:"update"===l.type},null,8,["modelValue","disabled"])]})),_:1}),c(n,{label:"镜像地址",prop:"image"},{default:f((function(){return[c(r,{modelValue:O.value.image,"onUpdate:modelValue":t[1]||(t[1]=function(e){return O.value.image=e}),placeholder:"请输入镜像地址",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),c(n,{label:"启动命令",prop:"command"},{default:f((function(){return[c(r,{modelValue:O.value.command,"onUpdate:modelValue":t[2]||(t[2]=function(e){return O.value.command=e}),placeholder:"请输入启动命令",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),c(n,{label:"启动参数",prop:"args"},{default:f((function(){return[c(r,{modelValue:O.value.args,"onUpdate:modelValue":t[3]||(t[3]=function(e){return O.value.args=e}),placeholder:"请输入启动参数",autocomplete:"off"},null,8,["modelValue"])]})),_:1}),c(n,{label:"描述",prop:"desc"},{default:f((function(){return[c(r,{modelValue:O.value.desc,"onUpdate:modelValue":t[4]||(t[4]=function(e){return O.value.desc=e}),placeholder:"请输入描述",type:"textarea",autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"]),d("div",y,[c(o,{size:"small",onClick:V},{default:f((function(){return t[5]||(t[5]=[m("取消")])})),_:1}),c(o,{size:"small",type:"primary",onClick:w},{default:f((function(){return t[6]||(t[6]=[m("确定")])})),_:1})])])}}};l("default",n(j,[["__scopeId","data-v-91b349ff"]]))}}}))}();