/*! 
 Build based on  
 Time : 1735190558000 */
import{u as t,o as e,c as s,b as a,F as l,v as i,e as r,w as o,h as c,ax as d,t as n,d5 as u,d6 as g,d7 as p,d8 as x,d9 as h,da as m,Q as k}from"./index.ABWJOL2Q.js";const v={class:"mt-8 w-full"},f={class:"grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4"},b=["onClick"],y={class:"w-8 h-8 rounded bg-gray-200 dark:bg-slate-500 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white"},w={class:"text-xs mt-2 text-gray-700 dark:text-gray-300"},C={class:"grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 mt-8"},_=["onClick"],j={class:"w-8 h-8 rounded bg-gray-200 dark:bg-slate-500 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white"},P={class:"text-xs mt-2 text-gray-700 dark:text-gray-300"},q={__name:"quickLinks",setup(q){const A=t(),F=[{icon:u,title:"菜单管理",path:"menu"},{icon:g,title:"API管理",path:"api"},{icon:p,title:"角色管理",path:"authority"},{icon:x,title:"用户管理",path:"user"},{icon:h,title:"自动化包",path:"autoPkg"},{icon:m,title:"自动代码",path:"autoCode"}],I=[];return(t,u)=>{const g=k;return e(),s("div",v,[a("div",f,[(e(),s(l,null,i(F,((t,s)=>a("div",{key:s,class:"flex flex-col items-center mb-3 group cursor-pointer",onClick:e=>(t=>{A.push({name:t.path})})(t)},[a("div",y,[r(g,null,{default:o((()=>[(e(),c(d(t.icon)))])),_:2},1024)]),a("div",w,n(t.title),1)],8,b))),64))]),a("div",C,[(e(),s(l,null,i(I,((t,s)=>a("div",{key:s,class:"flex flex-col items-center mb-3 group cursor-pointer",onClick:e=>(t=>{window.open(t.path,"_blank")})(t)},[a("div",j,[r(g,null,{default:o((()=>[(e(),c(d(t.icon)))])),_:2},1024)]),a("div",P,n(t.title),1)],8,_))),64))])])}}};export{q as default};
