/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,o as t,c as l,e as s,b as o,w as n,h as u,g as r,f as i,E as d}from"./index.ABWJOL2Q.js";import{E as m}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";/* empty css             */import{a as c,E as v}from"./form-item.ujPiwBAF.js";/* empty css               */import{_ as p}from"./warningBar.BzThqhMC.js";import{P as f,G as g}from"./terminal.CkdZuQYW.js";import{F as w}from"./files.U5RRtO1D.js";const y=e=>{var a=document.createEvent("StorageEvent");return function(e){localStorage.setItem("cluster_id",e),a.initStorageEvent("setItemCluster",!1,!1,"cluster_id",null,e,null,null),window.dispatchEvent(a)}(e)},h=e=>{var a=document.createEvent("StorageEvent");return function(e){localStorage.setItem("namespace",e),a.initStorageEvent("setItemNamespace",!1,!1,"namespace",null,e,null,null),window.dispatchEvent(a)}(e)},_={class:"dycloud-btn-list"},E={key:0,class:"dialog-footer"},j={key:1},b={class:"dialog-footer"},S={name:"CloudTTY"},k=Object.assign(S,{setup(y){const h=a(""),S=a(""),k=a(""),C=a(""),I=a(""),T=a(!1),P=a([]),F=async(e,a)=>{const t=await g({cluster_id:V.value,namespace:e,selector:a});0===t.code&&t.data.items&&(P.value=t.data.items)},V=a(0);(async()=>{V.value=parseInt(localStorage.getItem("cluster_id")),S.value="cloudshell.cloudtty.io/owner-name=";const a=await(t={cluster_id:V.value},e({url:"/kubernetes/cloudtty/get",method:"post",data:t}));var t;0===a.code&&a.data&&a.data.name&&(S.value+=a.data.name,h.value=a.data.namespace,C.value=a.data.container,await(async()=>{let e=0;for(;e<100;){e+=1;try{await F(h.value,S.value),P.value.length>1&&await new Promise((e=>setTimeout(e,3e3)));const e=P.value[0];if(e.status.phase&&"Running"===e.status.phase){k.value=e.metadata.name,I.value=e,I.value.cluster_id=V.value;break}}catch(a){}await new Promise((e=>setTimeout(e,3e3)))}})())})();const x=a(""),Y=()=>{T.value=!1};return(e,a)=>{const g=d,y=c,h=v,S=m;return t(),l("div",null,[s(p,{title:"注：请在Kubernetes集群内安装CloudTTY以便于使用该功能。（地址: https://github.com/cloudtty/cloudtty)"}),o("div",_,[s(h,{ref:"searchForm",inline:!0},{default:n((()=>[s(y,null,{default:n((()=>[I.value?(t(),u(g,{key:0,icon:"Files",type:"primary",onClick:a[0]||(a[0]=e=>(x.value="Pod: "+I.value.metadata.name+" Container: "+C.value+"  文件浏览",I.value.container_name=C,void(T.value=!0)))},{default:n((()=>a[2]||(a[2]=[r("文件浏览")]))),_:1})):i("",!0)])),_:1})])),_:1},512)]),I.value?(t(),l("div",E,[o("div",null,[s(f,{data:I.value,name:C.value},null,8,["data","name"])])])):i("",!0),T.value?(t(),l("div",j,[s(S,{ref:"files",modelValue:T.value,"onUpdate:modelValue":a[1]||(a[1]=e=>T.value=e),width:"70%",title:x.value},{default:n((()=>[o("div",b,[s(w,{form:I.value,onClose:Y},null,8,["form"])])])),_:1},8,["modelValue","title"])])):i("",!0)])}}});export{k as _,y as a,h as d};