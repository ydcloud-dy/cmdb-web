/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,o as t,c as s,b as o,e as l,w as r,g as i,f as d,i as m,k as u,E as n}from"./index.ABWJOL2Q.js";import{E as c}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as p}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as v,E as j}from"./form-item.ujPiwBAF.js";import{g}from"./k8s.DUZ1Kw0R.js";import{_ as y}from"./index.CLE9PzC_.js";import _ from"./table.CU-f2eO_.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */import"./popover.DFR01WU1.js";import"./dropdown.Co_mIot6.js";import"./age.Du5VDnjl.js";const b=a=>e({url:"/kubernetes/horizontalPodDetail",method:"get",params:a}),f=a=>e({url:"/kubernetes/horizontalPod",method:"post",data:a}),k={class:"dycloud-table-box"},w={class:"dycloud-btn-list"},h={key:0},z={class:"dycloud-pagination"},x={key:0},C={class:"dialog-footer"},P={name:"HorizontalPodAutoScalers"},E=Object.assign(P,{setup(P){const E=a({}),H=a(1),I=a(0),S=a(10),V=a([]),N=a(""),D=a({keywords:"",namespace:""}),U=a(!1),A=()=>{D.value.keywords=""},L=()=>{H.value=1,S.value=10,q()},F=e=>{S.value=e,q()},O=e=>{H.value=e,q()},q=async()=>{const a=await(t={cluster_id:D.value.cluster_id,page:H.value,pageSize:S.value,namespace:D.value.namespace,keyword:D.value.keywords},e({url:"/kubernetes/horizontalPod",method:"get",params:t}));var t;0===a.code&&(V.value=a.data.items,I.value=a.data.total,H.value=a.data.page,S.value=a.data.pageSize)},M=a(!1),B=a(""),G=async e=>{B.value="update",N.value="编辑";const a=await b({cluster_id:D.value.cluster_id,namespace:e.metadata.namespace,HorizontalPodName:e.metadata.name});a.data.items&&a.data.items.code?m({type:"error",message:a.data.items.message}):0===a.code&&(E.value=a.data.items,U.value=!1,M.value=!0)},J=()=>{M.value=!1,E.value={}},K=async a=>{a.visible=!1;const t=await(s={cluster_id:D.value.cluster_id,namespace:a.metadata.namespace,HorizontalPodName:a.metadata.name},e({url:"/kubernetes/horizontalPod",method:"delete",data:s}));var s;t.data.items&&t.data.items.code?m({type:"error",message:t.data.items.message}):0===t.code&&(m({type:"success",message:"删除成功"}),q())},Q=async a=>{let t;switch(B.value){case"create":t=await f({cluster_id:D.value.cluster_id,namespace:a.metadata.namespace,content:a});break;case"update":t=await(s={cluster_id:D.value.cluster_id,namespace:a.metadata.namespace,HorizontalPodName:a.metadata.name,content:a},e({url:"/kubernetes/horizontalPod",method:"put",data:s}));break;default:t=await f({cluster_id:D.value.cluster_id,content:a})}var s;t.data.items&&t.data.items.code?m({type:"error",message:t.data.items.message}):0===t.code&&(J(),(async e=>{0===e.code&&(m({type:"success",message:e.msg}),q())})(t))},R=async e=>{const a=await b({cluster_id:D.value.cluster_id,namespace:e.metadata.namespace,HorizontalPodName:e.metadata.name});a.data.items&&a.data.items.code?m({type:"error",message:a.data.items.message}):0===a.code&&(N.value="详情",E.value=a.data.items,U.value=!0,M.value=!0)};return window.addEventListener("setItemCluster",(e=>{D.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(e=>{D.value.namespace=localStorage.getItem("namespace"),q()})),(e,a)=>{const m=u,b=v,f=n,P=j,q=p,T=c;return t(),s("div",null,[o("div",k,[o("div",w,[l(P,{ref:"searchForm",inline:!0,model:D.value},{default:r((()=>[l(b,{label:"名称"},{default:r((()=>[l(m,{modelValue:D.value.keywords,"onUpdate:modelValue":a[0]||(a[0]=e=>D.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),l(b,null,{default:r((()=>[l(f,{size:"small",type:"primary",icon:"search",onClick:L},{default:r((()=>a[3]||(a[3]=[i("查询")]))),_:1}),l(f,{size:"small",icon:"refresh",onClick:A},{default:r((()=>a[4]||(a[4]=[i("重置")]))),_:1})])),_:1}),l(b,null,{default:r((()=>[l(f,{size:"small",type:"primary",icon:"plus",onClick:a[1]||(a[1]=e=>(B.value="create",N.value="创建",E.value=g("horizontalpodautoscalers",D.value.namespace,""),U.value=!1,void(M.value=!0)))},{default:r((()=>a[5]||(a[5]=[i("新增")]))),_:1})])),_:1})])),_:1},8,["model"])]),V.value?(t(),s("div",h,[l(_,{"table-data":V.value,onUpdate:G,onDetail:R,onDelete:K},null,8,["table-data"])])):d("",!0)]),o("div",z,[l(q,{"current-page":H.value,"page-size":S.value,"page-sizes":[10,30,50,100],total:I.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:O,onSizeChange:F},null,8,["current-page","page-size","total"])]),M.value?(t(),s("div",x,[l(T,{modelValue:M.value,"onUpdate:modelValue":a[2]||(a[2]=e=>M.value=e),width:"60%",title:N.value},{default:r((()=>[o("div",C,[l(y,{data:E.value,"read-only":U.value,onClose:J,onEnter:Q},null,8,["data","read-only"])])])),_:1},8,["modelValue","title"])])):d("",!0)])}}});export{E as default};