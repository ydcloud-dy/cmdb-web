/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./scrollbar-legacy.dKZTD6w2.js","./menu-legacy.D-8T2TaW.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./index-legacy.qdrgykbD.js","./index-legacy.BxvOPqjW.js","./menuItem-legacy.BuFsGvom.js","./menu-item-legacy.DJvkFyUq.js","./index-legacy.DQDNgjSh.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./index-legacy.DglejgZI.js","./asyncSubmenu-legacy.ebMVssBQ.js"],(function(e,t){"use strict";var l,n,a,u,r,o,i,c,s,d,f,v,m,y,p,g,h,x,b,w,j,k,_,M,q,A;return{setters:[function(e){l=e.d1,n=e.d2,a=e.M,u=e.u,r=e.df,o=e.a,i=e.H,c=e.N,s=e.au,d=e.P,f=e.o,v=e.c,m=e.e,y=e.w,p=e.F,g=e.v,h=e.B,x=e.h,b=e.f,w=e.n,j=e.K,k=e.b,_=e.Q},function(e){M=e.E},null,null,null,function(e){q=e.default},function(e){A=e.a},null,null,null,null,null,null,null],execute:function(){var t={class:"h-full"},S={key:0,class:"bg-white h-[calc(100%-4px)] text-slate-700 dark:text-slate-300 mx-2 dark:bg-slate-900 flex items-center w-[calc(100vw-600px)] overflow-auto"};e("default",Object.assign({name:"GvaAside"},{__name:"combinationMode",props:{mode:{type:String,default:"normal"}},setup:function(e){var z=l(),O=n(z),C=O.device,D=O.config,E=a(),L=u(),N=r(),B=o(!1),F=o(""),G=i((function(){return B.value?D.value.layout_side_collapsed_width:D.value.layout_side_width}));c((function(){F.value=E.meta.activeName||E.name})),c((function(){"mobile"===C.value?B.value=!0:B.value=!1})),s("isCollapse",B);var H=function(e,t,l,n){var a,u,r={},o={};if((null===(a=N.routeMap[e])||void 0===a?void 0:a.parameters)&&(null===(u=N.routeMap[e])||void 0===u||u.parameters.forEach((function(e){"query"===e.type?r[e.key]=e.value:o[e.key]=e.value}))),e!==E.name)if(e.indexOf("http://")>-1||e.indexOf("https://")>-1)window.open(e);else{if(!n)return void L.push({name:e,query:r,params:o});N.setLeftMenu(e)||L.push({name:e,query:r,params:o})}},I=function(){B.value=!B.value};return function(l,n){var a=A,u=M,r=d("DArrowLeft"),o=_,i=d("DArrowRight");return f(),v("div",t,["head"===e.mode?(f(),v("div",S,[m(a,{"default-active":h(N).topActive,mode:"horizontal",class:"border-r-0 border-b-0 w-full flex gap-1 items-center box-border h-[calc(100%-1px)]","unique-opened":"",onSelect:n[0]||(n[0]=function(e,t,l){return H(e,0,0,!0)})},{default:y((function(){return[(f(!0),v(p,null,g(h(N).topMenu,(function(e){return f(),v(p,null,[e.hidden?b("",!0):(f(),x(q,{key:e.name,"router-info":e,mode:"horizontal"},null,8,["router-info"]))],64)})),256))]})),_:1},8,["default-active"])])):b("",!0),"normal"===e.mode?(f(),v("div",{key:1,class:w(["relative h-full bg-white text-slate-700 dark:text-slate-300 dark:bg-slate-900 border-r shadow dark:shadow-gray-700",B.value?"":"  px-2"]),style:j({width:G.value+"px"})},[m(u,null,{default:y((function(){return[m(a,{collapse:B.value,"collapse-transition":!1,"default-active":F.value,class:"border-r-0 w-full","unique-opened":"",onSelect:n[1]||(n[1]=function(e,t,l){return H(e,0,0,!1)})},{default:y((function(){return[(f(!0),v(p,null,g(h(N).leftMenu,(function(e){return f(),v(p,null,[e.hidden?b("",!0):(f(),x(q,{key:e.name,"router-info":e},null,8,["router-info"]))],64)})),256))]})),_:1},8,["collapse","default-active"])]})),_:1}),k("div",{class:w(["absolute bottom-8 right-2 w-8 h-8 bg-gray-50 dark:bg-slate-800 flex items-center justify-center rounded cursor-pointer",B.value?"right-0 left-0 mx-auto":"right-2"]),onClick:I},[B.value?(f(),x(o,{key:1},{default:y((function(){return[m(i)]})),_:1})):(f(),x(o,{key:0},{default:y((function(){return[m(r)]})),_:1}))],2)],6)):b("",!0)])}}}))}}}));