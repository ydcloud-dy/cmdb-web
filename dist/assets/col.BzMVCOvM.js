/*! 
 Build based on  
 Time : 1735190558000 */
import{D as t,ao as e,c9 as a,y as s,V as u,H as c,z as n,af as l,W as o,o as r,h as p,w as f,J as d,n as i,B as g,K as b,ax as y,C as m,L as h,au as j}from"./index.ABWJOL2Q.js";const v=t({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:e([Number,Object]),default:()=>a({})},sm:{type:e([Number,Object]),default:()=>a({})},md:{type:e([Number,Object]),default:()=>a({})},lg:{type:e([Number,Object]),default:()=>a({})},xl:{type:e([Number,Object]),default:()=>a({})}}),x=Symbol("rowContextKey"),N=s({name:"ElCol"});const w=h(m(s({...N,props:v,setup(t){const e=t,{gutter:a}=u(x,{gutter:c((()=>0))}),s=n("col"),m=c((()=>{const t={};return a.value&&(t.paddingLeft=t.paddingRight="".concat(a.value/2,"px")),t})),h=c((()=>{const t=[];["span","offset","pull","push"].forEach((a=>{const u=e[a];l(u)&&("span"===a?t.push(s.b("".concat(e[a]))):u>0&&t.push(s.b("".concat(a,"-").concat(e[a]))))}));return["xs","sm","md","lg","xl"].forEach((a=>{l(e[a])?t.push(s.b("".concat(a,"-").concat(e[a]))):o(e[a])&&Object.entries(e[a]).forEach((([e,u])=>{t.push("span"!==e?s.b("".concat(a,"-").concat(e,"-").concat(u)):s.b("".concat(a,"-").concat(u)))}))})),a.value&&t.push(s.is("guttered")),[s.b(),t]}));return(t,e)=>(r(),p(y(t.tag),{class:i(g(h)),style:b(g(m))},{default:f((()=>[d(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","col.vue"]])),E=t({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:["start","center","end","space-around","space-between","space-evenly"],default:"start"},align:{type:String,values:["top","middle","bottom"]}}),O=s({name:"ElRow"});const _=h(m(s({...O,props:E,setup(t){const e=t,a=n("row"),s=c((()=>e.gutter));j(x,{gutter:s});const u=c((()=>{const t={};return e.gutter?(t.marginRight=t.marginLeft="-".concat(e.gutter/2,"px"),t):t})),l=c((()=>[a.b(),a.is("justify-".concat(e.justify),"start"!==e.justify),a.is("align-".concat(e.align),!!e.align)]));return(t,e)=>(r(),p(y(t.tag),{class:i(g(l)),style:b(g(u))},{default:f((()=>[d(t.$slots,"default")])),_:3},8,["class","style"]))}}),[["__file","row.vue"]]));export{w as E,_ as a};