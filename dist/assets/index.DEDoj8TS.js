/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,o as t,c as s,b as o,e as l,w as i,g as r,f as m,i as d,k as u,E as n}from"./index.ABWJOL2Q.js";import{E as p}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as c}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as v,E as j}from"./form-item.ujPiwBAF.js";import{g}from"./k8s.DUZ1Kw0R.js";import{_ as y}from"./index.CLE9PzC_.js";import _ from"./table.CprRHbC4.js";import{_ as f}from"./detail-index.BCE-FH-e.js";import{_ as b}from"./index.DInaC5Wr.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */import"./popover.DFR01WU1.js";import"./dropdown.Co_mIot6.js";import"./age.Du5VDnjl.js";import"./col.BzMVCOvM.js";import"./tab-pane.fs024GHS.js";import"./index.C5gbd99D.js";import"./card.RgDT494R.js";import"./detail-basic.C5XH3jbK.js";import"./link.QK3LjIND.js";import"./detail-pods.B6dtbEQc.js";import"./dropdown-item.Bdep7Ju0.js";import"./metrics.Dq7Dbl3h.js";import"./terminal.CkdZuQYW.js";import"./xterm.BR7SOqRe.js";/* empty css              */import"./xterm-addon-fit.onOJMBm7.js";import"./index.DDa397GF.js";import"./index.DrIIbIcU.js";import"./terminal-log.p9WpB3Ej.js";import"./monitor.CqRBZu0a.js";import"./date-picker.CCiP3Fyg.js";import"./dayjs.min.DOWqlKAh.js";import"./arrays.CvpzyGiz.js";import"./index.7ugBSK5z.js";import"./alert.DuAMTUGg.js";import"./services.B6UNrciu.js";import"./ingress.xNVH-CrT.js";import"./detail-conditions.Ch3mQiZh.js";import"./warningBar.BzThqhMC.js";/* empty css                    *//* empty css              */import"./index.DINKPDpR.js";/* empty css                     */import"./index.B0d1JK95.js";/* empty css                       */import"./nodes.Bn2Bf7KU.js";import"./index.gYVODlrW.js";import"./secrets.hDCpAdRW.js";import"./serviceaccounts.FyKKM7DW.js";import"./namespaces.DIn9v7pI.js";import"./persistentvolumeclaims.C7-g1nKS.js";import"./configmaps.BgmpeECD.js";const k=a=>e({url:"/kubernetes/daemonsetDetails",method:"get",params:a}),w=a=>e({url:"/kubernetes/daemonset",method:"post",data:a}),x={class:"dycloud-table-box"},h={class:"dycloud-btn-list"},C={key:0},V={class:"dycloud-pagination"},E={key:0},z={class:"dialog-footer"},U={key:1},I={class:"dialog-footer"},S={key:2},A={class:"dialog-footer"},D={name:"Daemonsets"},N=Object.assign(D,{setup(D){const N=a({}),L=a(1),B=a(0),F=a(10),M=a([]),O=a(""),Y=a({keywords:"",namespace:""}),G=a(!1),H=()=>{Y.value.keywords=""},K=()=>{L.value=1,F.value=10,J()},X=e=>{F.value=e,J()},q=e=>{L.value=e,J()},J=async()=>{"All Namespaces"==Y.value.namespace&&Y.value.namespace;const a=await(t={cluster_id:Y.value.cluster_id,page:L.value,pageSize:F.value,namespace:Y.value.namespace,keyword:Y.value.keywords},e({url:"/kubernetes/daemonset",method:"get",params:t}));var t;0===a.code&&(M.value=a.data.items,B.value=a.data.total,L.value=a.data.page,F.value=a.data.pageSize)},P=async e=>{R.value="update",O.value="编辑",G.value=!0;const a=await k({cluster_id:Y.value.cluster_id,namespace:e.metadata.namespace,daemonsetName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(N.value=a.data.items,ee.value=!0)},Q=a(!1),R=a(""),W=async e=>{R.value="update",O.value="编辑";const a=await k({cluster_id:Y.value.cluster_id,namespace:e.metadata.namespace,daemonsetName:e.metadata.name});a.data.items&&a.data.items.code?d({type:"error",message:a.data.items.message}):0===a.code&&(N.value=a.data.items,Q.value=!0)},Z=()=>{Q.value=!1,ee.value=!1,N.value={}},$=async a=>{a.visible=!1;const t=await(s={cluster_id:Y.value.cluster_id,namespace:a.metadata.namespace,daemonsetName:a.metadata.name},e({url:"/kubernetes/daemonset",method:"delete",data:s}));var s;t.data.items&&t.data.items.code?d({type:"error",message:t.data.items.message}):0===t.code&&(d({type:"success",message:"删除成功"}),J())},T=async a=>{let t;switch(R.value){case"create":t=await w({cluster_id:Y.value.cluster_id,namespace:a.metadata.namespace,content:a});break;case"update":t=await(s={cluster_id:Y.value.cluster_id,namespace:a.metadata.namespace,daemonsetName:a.metadata.name,content:a},e({url:"/kubernetes/daemonset",method:"put",data:s}));break;default:t=await w({cluster_id:Y.value.cluster_id,content:a})}var s;t.data.items&&t.data.items.code?d({type:"error",message:t.data.items.message}):0===t.code&&(Z(),(async e=>{0===e.code&&(d({type:"success",message:e.msg}),J())})(t))},ee=a(!1),ae=a(!1),te=async e=>{N.value=e,N.value.cluster_id=Y.value.cluster_id,O.value="详情",ae.value=!0};return window.addEventListener("setItemCluster",(e=>{Y.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(e=>{Y.value.namespace=localStorage.getItem("namespace"),J()})),(e,a)=>{const d=u,k=v,w=n,D=j,J=c,se=p;return t(),s("div",null,[o("div",x,[o("div",h,[l(D,{ref:"searchForm",inline:!0,model:Y.value},{default:i((()=>[l(k,{label:"名称"},{default:i((()=>[l(d,{modelValue:Y.value.keywords,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),l(k,null,{default:i((()=>[l(w,{size:"small",type:"primary",icon:"search",onClick:K},{default:i((()=>a[6]||(a[6]=[r("查询")]))),_:1}),l(w,{size:"small",icon:"refresh",onClick:H},{default:i((()=>a[7]||(a[7]=[r("重置")]))),_:1})])),_:1}),l(k,null,{default:i((()=>[l(w,{size:"small",type:"primary",icon:"plus",onClick:a[1]||(a[1]=e=>(R.value="create",O.value="创建",N.value=g("daemonsets",Y.value.namespace,""),void(Q.value=!0)))},{default:i((()=>a[8]||(a[8]=[r("YAML")]))),_:1}),l(w,{size:"small",type:"primary",icon:"plus",onClick:a[2]||(a[2]=e=>(R.value="create",O.value="创建",G.value=!1,N.value=g("deploymentsinit",Y.value.namespace,""),void(ee.value=!0)))},{default:i((()=>a[9]||(a[9]=[r("新增")]))),_:1})])),_:1})])),_:1},8,["model"])]),M.value?(t(),s("div",C,[l(_,{"table-data":M.value,onYaml_update:W,onUpdate:P,onDetail:te,onDelete:$},null,8,["table-data"])])):m("",!0)]),o("div",V,[l(J,{"current-page":L.value,"page-size":F.value,"page-sizes":[10,30,50,100],total:B.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:q,onSizeChange:X},null,8,["current-page","page-size","total"])]),Q.value?(t(),s("div",E,[l(se,{modelValue:Q.value,"onUpdate:modelValue":a[3]||(a[3]=e=>Q.value=e),width:"60%",title:O.value},{default:i((()=>[o("div",z,[l(y,{data:N.value,onClose:Z,onEnter:T},null,8,["data"])])])),_:1},8,["modelValue","title"])])):m("",!0),ee.value?(t(),s("div",U,[l(se,{modelValue:ee.value,"onUpdate:modelValue":a[4]||(a[4]=e=>ee.value=e),width:"70%",title:O.value},{default:i((()=>[o("div",I,[l(b,{form:N.value,"read-only":G.value,cluster:Y.value.cluster_id,operation:R.value,type:"daemonsets",onClose:Z,onEnter:T},null,8,["form","read-only","cluster","operation"])])])),_:1},8,["modelValue","title"])])):m("",!0),ae.value?(t(),s("div",S,[l(se,{modelValue:ae.value,"onUpdate:modelValue":a[5]||(a[5]=e=>ae.value=e),width:"60%",title:O.value},{default:i((()=>[o("div",A,[l(f,{data:N.value,onClose:Z,onEnter:T},null,8,["data"])])])),_:1},8,["modelValue","title"])])):m("",!0)])}}});export{N as default};
