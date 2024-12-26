/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,H as a,o as t,c as s,b as o,e as l,w as i,g as r,f as m,i as d,k as u,E as n}from"./index.ABWJOL2Q.js";import{E as p}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as c}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as v,E as j}from"./form-item.ujPiwBAF.js";import g from"./restoreYaml.Bk89MwZE.js";import y from"./restoreTable.Cl5izHfE.js";import f from"./detail.BhVZTrzv.js";import _ from"./createRestore.CZ3DXa1Q.js";import{k as w,l as b,m as k,h as x,j as V}from"./velero.Buhf202L.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */import"./popover.DFR01WU1.js";import"./dropdown.Co_mIot6.js";import"./col.BzMVCOvM.js";import"./tab-pane.fs024GHS.js";import"./index.C5gbd99D.js";import"./card.RgDT494R.js";import"./detail-basic.C5XH3jbK.js";import"./age.Du5VDnjl.js";import"./link.QK3LjIND.js";import"./detail-pods.B6dtbEQc.js";import"./dropdown-item.Bdep7Ju0.js";import"./metrics.Dq7Dbl3h.js";import"./terminal.CkdZuQYW.js";import"./xterm.BR7SOqRe.js";/* empty css              */import"./xterm-addon-fit.onOJMBm7.js";import"./index.DDa397GF.js";import"./index.DrIIbIcU.js";import"./terminal-log.p9WpB3Ej.js";import"./monitor.CqRBZu0a.js";import"./date-picker.CCiP3Fyg.js";import"./dayjs.min.DOWqlKAh.js";import"./arrays.CvpzyGiz.js";import"./index.7ugBSK5z.js";import"./detail-ports.B1_yjkTj.js";/* empty css                    *//* empty css              */import"./namespaces.DIn9v7pI.js";import"./index.DINKPDpR.js";const h={class:"dycloud-table-box"},E={class:"dycloud-btn-list"},T={key:0},C={class:"dycloud-pagination"},R={key:0},S={class:"dialog-footer"},z={key:1},D={class:"dialog-footer"},L={key:2},I={class:"dialog-footer"},N={name:"veleroTasks"},U=Object.assign(N,{setup(N){const U=e({}),A=e(1),F=e(0),H=e(10),O=e([]),K=e(""),M=e({keywords:"",namespace:""}),Y=e(!1),q=()=>{M.value.keywords=""},B=()=>{A.value=1,H.value=10,G()},J=e=>{H.value=e,G()},X=e=>{A.value=e,G()},G=async()=>{const e=await w({cluster_id:M.value.cluster_id,page:A.value,pageSize:H.value,namespace:M.value.namespace,keyword:M.value.keywords});0===e.code&&(e.data.items.forEach((e=>{e.status.expiration&&(e.status.expiration=new Date(e.status.expiration).toLocaleString()),e.metadata.creationTimestamp&&(e.metadata.creationTimestamp=new Date(e.metadata.creationTimestamp).toLocaleString()),e.status.startTimestamp&&(e.status.startTimestamp=new Date(e.status.startTimestamp).toLocaleString()),e.status.completionTimestamp&&(e.status.completionTimestamp=new Date(e.status.completionTimestamp).toLocaleString())})),O.value=e.data.items,F.value=e.data.total,A.value=e.data.page,H.value=e.data.pageSize)},P=e(!1),Q=e("");a((()=>"create"===Q.value?"新增":"更新"));const W=async e=>{Q.value="update",K.value="编辑";const a=await b({cluster_id:M.value.cluster_id,namespace:e.metadata.namespace,VeleroRestoreName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(U.value=a.data.items,P.value=!0)},Z=async e=>{se.value=!0},$=async e=>{Q.value="update",K.value="编辑";const a=await b({cluster_id:M.value.cluster_id,namespace:e.metadata.namespace,VeleroRestoreName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(U.value=a.data.items,Y.value=!0,se.value=!0)},ee=()=>{P.value=!1,se.value=!1,oe.value=!1,U.value={}},ae=async e=>{e.visible=!1;const a=await k({cluster_id:M.value.cluster_id,namespace:e.metadata.namespace,VeleroRestoreName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(d({type:"success",message:"删除成功"}),G())},te=async e=>{let a;switch(Q.value){case"create":default:a=await x({cluster_id:M.value.cluster_id,content:e});break;case"update":a=await V({cluster_id:M.value.cluster_id,namespace:e.metadata.namespace,VeleroRecordName:e.metadata.name,content:e})}a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(ee(),(async e=>{0===e.code&&(d({type:"success",message:e.msg}),G())})(a))},se=e(!1),oe=e(!1),le=async e=>{const a=await b({cluster_id:M.value.cluster_id,namespace:e.metadata.namespace,VeleroRestoreName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):(0===a.code&&(K.value="详情",U.value=a.data.items,U.value.cluster_id=M.value.cluster_id,U.value.type="veleroRestore"),P.value=!0)};return window.addEventListener("setItemCluster",(e=>{M.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(e=>{M.value.namespace=localStorage.getItem("namespace"),G()})),(e,a)=>{const d=u,w=v,b=n,k=j,x=c,V=p;return t(),s("div",null,[o("div",h,[o("div",E,[l(k,{ref:"searchForm",inline:!0,model:M.value},{default:i((()=>[l(w,{label:"名称"},{default:i((()=>[l(d,{modelValue:M.value.keywords,"onUpdate:modelValue":a[0]||(a[0]=e=>M.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),l(w,null,{default:i((()=>[l(b,{size:"small",type:"primary",icon:"search",onClick:B},{default:i((()=>a[4]||(a[4]=[r("查询")]))),_:1}),l(b,{size:"small",icon:"refresh",onClick:q},{default:i((()=>a[5]||(a[5]=[r("重置")]))),_:1})])),_:1})])),_:1},8,["model"])]),O.value?(t(),s("div",T,[l(y,{"table-data":O.value,onYaml_update:W,onReduction:Z,onUpdate:$,onVeleroRestoreDetail:le,onDelete:ae},null,8,["table-data"])])):m("",!0)]),o("div",C,[l(x,{"current-page":A.value,"page-size":H.value,"page-sizes":[10,30,50,100],total:F.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:X,onSizeChange:J},null,8,["current-page","page-size","total"])]),P.value?(t(),s("div",R,[l(V,{modelValue:P.value,"onUpdate:modelValue":a[1]||(a[1]=e=>P.value=e),width:"60%",title:K.value},{default:i((()=>[o("div",S,[l(g,{data:U.value,onClose:ee,onEnter:te},null,8,["data"])])])),_:1},8,["modelValue","title"])])):m("",!0),se.value?(t(),s("div",z,[l(V,{modelValue:se.value,"onUpdate:modelValue":a[2]||(a[2]=e=>se.value=e),title:"dialogTitle",width:"70%"},{default:i((()=>[o("div",D,[l(_,{cluster:M.value.cluster_id,form:U.value,readonly:Y.value,onClose:ee,onEnter:te},null,8,["cluster","form","readonly"])])])),_:1},8,["modelValue"])])):m("",!0),oe.value?(t(),s("div",L,[l(V,{modelValue:oe.value,"onUpdate:modelValue":a[3]||(a[3]=e=>oe.value=e),width:"70%",title:K.value},{default:i((()=>[o("div",I,[l(f,{data:U.value,"read-only":Y.value,onClose:ee,onEnter:te},null,8,["data","read-only"])])])),_:1},8,["modelValue","title"])])):m("",!0)])}}});export{U as default};