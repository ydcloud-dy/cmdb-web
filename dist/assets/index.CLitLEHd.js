/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,o as t,c as s,b as l,e as o,w as r,g as i,f as m,i as d,k as u,E as n}from"./index.ABWJOL2Q.js";import{E as c}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as p}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as v,E as g}from"./form-item.ujPiwBAF.js";import{g as j}from"./k8s.DUZ1Kw0R.js";import{_ as y}from"./index.CLE9PzC_.js";import _ from"./table.CgAhq2D9.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */import"./popover.DFR01WU1.js";import"./dropdown.Co_mIot6.js";import"./age.Du5VDnjl.js";const b=a=>e({url:"/kubernetes/storageClassDetails",method:"get",params:a}),f=a=>e({url:"/kubernetes/storageClass",method:"post",data:a}),k={class:"dycloud-table-box"},w={class:"dycloud-btn-list"},C={key:0},h={class:"dycloud-pagination"},x={key:0},z={class:"dialog-footer"},E={name:"StorageClass"},V=Object.assign(E,{setup(E){const V=a({}),S=a(1),D=a(0),I=a(10),N=a([]),U=a(""),A=a({keywords:"",namespace:""}),F=a(!1),L=()=>{A.value.keywords=""},O=()=>{S.value=1,I.value=10,M()},q=e=>{I.value=e,M()},H=e=>{S.value=e,M()},M=async()=>{const a=await(t={cluster_id:A.value.cluster_id,page:S.value,pageSize:I.value,namespace:A.value.namespace,keyword:A.value.keywords},e({url:"/kubernetes/storageClass",method:"get",params:t}));var t;0===a.code&&(N.value=a.data.items,D.value=a.data.total,S.value=a.data.page,I.value=a.data.pageSize)},B=a(!1),G=a(""),J=async e=>{G.value="update",U.value="编辑";const a=await b({cluster_id:A.value.cluster_id,namespace:e.metadata.namespace,storageClassName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(V.value=a.data.items,F.value=!1,B.value=!0)},K=()=>{B.value=!1,V.value={}},P=async a=>{a.visible=!1;const t=await(s={cluster_id:A.value.cluster_id,namespace:a.metadata.namespace,storageClassName:a.metadata.name},e({url:"/kubernetes/storageClass",method:"delete",data:s}));var s;t.data.items&&t.data.items.code?d({type:"error",message:t.data.items.message}):0===t.code&&(d({type:"success",message:"删除成功"}),M())},Q=async a=>{let t;switch(G.value){case"create":t=await f({cluster_id:A.value.cluster_id,namespace:a.metadata.namespace,content:a});break;case"update":t=await(s={cluster_id:A.value.cluster_id,namespace:a.metadata.namespace,storageName:a.metadata.name,content:a},e({url:"/kubernetes/storageClass",method:"put",data:s}));break;default:t=await f({cluster_id:A.value.cluster_id,content:a})}var s;t.data.items&&t.data.items.code?d({type:"error",message:t.data.items.message}):0===t.code&&(K(),(async e=>{0===e.code&&(d({type:"success",message:e.msg}),M())})(t))},R=async e=>{const a=await b({cluster_id:A.value.cluster_id,namespace:e.metadata.namespace,storageNameClass:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(U.value="详情",V.value=a.data.items,F.value=!0,B.value=!0)};return window.addEventListener("setItemCluster",(e=>{A.value.cluster_id=parseInt(localStorage.getItem("cluster_id")),M()})),(e,a)=>{const d=u,b=v,f=n,E=g,M=p,T=c;return t(),s("div",null,[l("div",k,[l("div",w,[o(E,{ref:"searchForm",inline:!0,model:A.value},{default:r((()=>[o(b,{label:"名称"},{default:r((()=>[o(d,{modelValue:A.value.keywords,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),o(b,null,{default:r((()=>[o(f,{size:"small",type:"primary",icon:"search",onClick:O},{default:r((()=>a[3]||(a[3]=[i("查询")]))),_:1}),o(f,{size:"small",icon:"refresh",onClick:L},{default:r((()=>a[4]||(a[4]=[i("重置")]))),_:1}),o(f,{size:"small",type:"primary",icon:"plus",onClick:a[1]||(a[1]=e=>(G.value="create",U.value="创建",V.value=j("storageclasses",A.value.namespace,""),F.value=!1,void(B.value=!0)))},{default:r((()=>a[5]||(a[5]=[i("新增")]))),_:1})])),_:1})])),_:1},8,["model"])]),N.value?(t(),s("div",C,[o(_,{"table-data":N.value,onUpdate:J,onDetail:R,onDelete:P},null,8,["table-data"])])):m("",!0)]),l("div",h,[o(M,{"current-page":S.value,"page-size":I.value,"page-sizes":[10,30,50,100],total:D.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:H,onSizeChange:q},null,8,["current-page","page-size","total"])]),B.value?(t(),s("div",x,[o(T,{modelValue:B.value,"onUpdate:modelValue":a[2]||(a[2]=e=>B.value=e),width:"60%",title:U.value},{default:r((()=>[l("div",z,[o(y,{data:V.value,"read-only":F.value,onClose:K,onEnter:Q},null,8,["data","read-only"])])])),_:1},8,["modelValue","title"])])):m("",!0)])}}});export{V as default};
