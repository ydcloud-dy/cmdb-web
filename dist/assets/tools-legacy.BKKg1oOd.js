/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,l){if(e){if("string"==typeof e)return n(e,l);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,l):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var l=0,t=Array(n);l<n;l++)t[l]=e[l];return t}System.register(["./index-legacy.Cf1_fyJw.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./index-legacy.CS2hYA1v.js","./dialog-legacy.DSWM2KL1.js","./overlay-legacy.BUxXTiH4.js","./button-legacy.CH0FoAJ-.js","./index-legacy.CjsCdAav.js","./drawer-legacy.B124LicV.js","./index-legacy.DGP8eUsx.js","./input-legacy.DqeBI0DR.js","./input-number-legacy.CcemxZE2.js","./index-legacy.xSvwTSbp.js","./switch-legacy.BQgdxH-G.js","./index-legacy.bFg0b3wT.js","./form-legacy.0XPxLcB_.js","./form-item-legacy.BSRxtXpO.js","./castArray-legacy.Dek4eNNY.js","./_baseClone-legacy.CxPdKCcf.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./tag-legacy.Ca3_ouli.js","./select-legacy.L6EZLrW8.js","./scrollbar-legacy.dKZTD6w2.js","./index-legacy.DPmmO7_J.js","./token-legacy.D8ssuuq3.js","./strings-legacy.Wo7ipnce.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./_baseIteratee-legacy.D0Xxhk8-.js","./index-legacy.DglejgZI.js","./k8sCluster-legacy.Bhs3SaAk.js","./namespaces-legacy.BQEEK17s.js","./index-legacy.BT2UQshy.js","./warningBar-legacy.CnYSZ35K.js","./terminal-legacy.CNeayivl.js","./xterm-legacy.C7iTxYx2.js","./xterm-legacy.CncnO5QC.js","./xterm-addon-fit-legacy.BgFhqBhw.js","./files-legacy.BSjLAwWU.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./link-legacy.9nArvqF3.js","./upload-legacy.CtTk_xln.js","./progress-legacy.DmXn2V_b.js","./cloneDeep-legacy.dnKVeAL8.js","./position-legacy.B38PmsFl.js","./refs-legacy.DKcspM8g.js"],(function(n,l){"use strict";var t,r,a,u,o,i,c,s,d,g,y,f,p,m,v,b,h,j,x,k,w,_,q,C,A,E;return{setters:[function(e){t=e.d1,r=e.l,a=e.u,u=e.df,o=e.a,i=e.r,c=e.R,s=e.o,d=e.h,g=e.w,y=e.S,f=e.b,p=e.aw,m=e.e,v=e.g,b=e.c,h=e.F,j=e.v,x=e.t,k=e.f,w=e.E,_=e.P,q=e.Q},null,null,function(e){C=e.default},function(e){A=e.E},null,null,function(e){E=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".overlay{border-radius:4px}.overlay .el-dialog__header{padding:0!important;margin-right:0!important}.overlay .el-dialog__body{padding:12px!important;height:50vh;overflow:auto!important}.overlay .quick-title{margin-top:8px;font-size:12px;font-weight:600;color:#666}.overlay .quick-input{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.overlay .quick-input:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(31 41 55 / var(--tw-bg-opacity))}.overlay .quick-input{color:#666;border-radius:4px 4px 0 0;border:none;padding:12px 16px;box-sizing:border-box;width:100%;font-size:16px;border-bottom:1px solid #ddd}.overlay .quick-item{font-size:14px;padding:8px;margin:4px 0}.overlay .quick-item:hover{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.overlay .quick-item:hover:is(.dark *){--tw-bg-opacity: 1;background-color:rgb(100 116 139 / var(--tw-bg-opacity))}.overlay .quick-item:hover{cursor:pointer;border-radius:4px}\n",document.head.appendChild(l);var S={key:0,class:"quick-title"},O=["onClick"],I={class:"dialog-footer"},U=Object.assign({name:"CommandMenu"},{__name:"index",setup:function(n,l){var _=l.expose,q=t(),C=r(),E=a(),U=a(),z=u(),M=o(!1),T=o(""),V=i([]),D=function(n){var l=[];return n.forEach((function(n){n.children&&n.children.length>0?l.push.apply(l,e(D(n.children))):n.meta.title&&n.meta.title.indexOf(T.value)>-1&&l.push({label:n.meta.title,func:function(){return L(n)}})})),l},F=function(){var n,l={label:"跳转",children:[]},t=D(z.asyncRouters[0].children);(n=l.children).push.apply(n,e(t)),V.push(l)},K=function(){var n,l={label:"操作",children:[]},t=[{label:"亮色主题",func:function(){return P("light")}},{label:"暗色主题",func:function(){return P("dark")}},{label:"退出登录",func:function(){return C.LoginOut()}}];(n=l.children).push.apply(n,e(t.filter((function(e){return e.label.indexOf(T.value)>-1})))),V.push(l)};F(),K();var L=function(e){var n,l,t=e.name,r={},a={};(null===(n=z.routeMap[t])||void 0===n?void 0:n.parameters)&&(null===(l=z.routeMap[t])||void 0===l||l.parameters.forEach((function(e){"query"===e.type?r[e.key]=e.value:a[e.key]=e.value}))),t!==U.name&&(e.name.indexOf("http://")>-1||e.name.indexOf("https://")>-1?window.open(e.name):E.push({name:t,query:r,params:a}),M.value=!1)},P=function(e){null!==e?q.toggleTheme(!0):q.toggleTheme(!1)},Q=function(){M.value=!1};return _({open:function(){M.value=!0}}),c(T,(function(){V.length=0,F(),K()})),function(e,n){var l=w,t=A;return s(),d(t,{modelValue:M.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return M.value=e}),width:"30%",class:"overlay","show-close":!1},{header:g((function(){return[y(f("input",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return T.value=e}),class:"quick-input",placeholder:"请输入你需要快捷到达的功能"},null,512),[[p,T.value]])]})),footer:g((function(){return[f("span",I,[m(l,{onClick:Q},{default:g((function(){return n[2]||(n[2]=[v("关闭")])})),_:1})])]})),default:g((function(){return[(s(!0),b(h,null,j(V,(function(e,n){return s(),b("div",{key:n},[e.children.length?(s(),b("div",S,x(e.label),1)):k("",!0),(s(!0),b(h,null,j(e.children,(function(e,l){return s(),b("div",{key:n+"-"+l,class:"quick-item",onClick:e.func},x(e.label),9,O)})),128))])})),128))]})),_:1},8,["modelValue"])}}}),z={class:"flex items-center mx-4 gap-4"};n("default",{__name:"tools",setup:function(e){t();var n=o(!1);o(!1);var l=o(""),r=o(),a=function(){r.value.open()};return function(){"WIN"===window.localStorage.getItem("osType")?l.value="Ctrl":l.value="⌘";window.addEventListener("keydown",(function(e){e.ctrlKey&&"k"===e.key&&(e.preventDefault(),a())}))}(),function(e,l){var t=_("Search"),u=q,o=E;return s(),b("div",z,[m(o,{class:"",effect:"dark",content:"搜索",placement:"bottom"},{default:g((function(){return[m(u,{onClick:a,class:"w-8 h-8 shadow rounded-full border border-gray-200 dark:border-gray-600 cursor-pointer border-solid"},{default:g((function(){return[m(t)]})),_:1})]})),_:1}),m(C,{drawer:n.value,"onUpdate:drawer":l[0]||(l[0]=function(e){return n.value=e})},null,8,["drawer"]),m(U,{ref_key:"command",ref:r},null,512)])}}})}}}))}();