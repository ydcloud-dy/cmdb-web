/*! 
 Build based on  
 Time : 1735190558000 */
import{D as s,aH as a,y as e,aa as o,z as n,H as l,o as t,c,b as i,J as r,n as u,B as p,h as d,w as m,e as f,b9 as b,O as k,Q as v,f as y,K as g,aE as C,C as h,L as B}from"./index.ABWJOL2Q.js";const E=s({type:{type:String,values:["primary","success","info","warning","danger"],default:"primary"},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:String,size:{type:String,values:a},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),T={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},_=e({name:"ElTag"});const S=B(h(e({..._,props:E,emits:T,setup(s,{emit:a}){const e=s,h=o(),B=n("tag"),E=l((()=>{const{type:s,hit:a,effect:o,closable:n,round:l}=e;return[B.b(),B.is("closable",n),B.m(s||"primary"),B.m(h.value),B.m(o),B.is("hit",a),B.is("round",l)]})),T=s=>{a("close",s)},_=s=>{a("click",s)},S=s=>{var a,e,o;(null==(o=null==(e=null==(a=null==s?void 0:s.component)?void 0:a.subTree)?void 0:e.component)?void 0:o.bum)&&(s.component.subTree.component.bum=null)};return(s,a)=>s.disableTransitions?(t(),c("span",{key:0,class:u(p(E)),style:g({backgroundColor:s.color}),onClick:_},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(v),{key:0,class:u(p(B).e("close")),onClick:k(T,["stop"])},{default:m((()=>[f(p(b))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)):(t(),d(C,{key:1,name:"".concat(p(B).namespace.value,"-zoom-in-center"),appear:"",onVnodeMounted:S},{default:m((()=>[i("span",{class:u(p(E)),style:g({backgroundColor:s.color}),onClick:_},[i("span",{class:u(p(B).e("content"))},[r(s.$slots,"default")],2),s.closable?(t(),d(p(v),{key:0,class:u(p(B).e("close")),onClick:k(T,["stop"])},{default:m((()=>[f(p(b))])),_:1},8,["class","onClick"])):y("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","tag.vue"]]));export{S as E,E as t};