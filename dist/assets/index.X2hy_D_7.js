/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,o as a,c as t,b as s,e as l,w as o,g as i,f as m,i as r,k as d,E as p}from"./index.ABWJOL2Q.js";import{E as u}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as n}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as c,E as v}from"./form-item.ujPiwBAF.js";import{_ as j,D as y,a as g,b as _,c as f,d as b}from"./detail-index.BCE-FH-e.js";import{g as w}from"./k8s.DUZ1Kw0R.js";import{_ as x}from"./index.CLE9PzC_.js";import k from"./table.BoDP_ltl.js";import{_ as h}from"./index.DInaC5Wr.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./col.BzMVCOvM.js";import"./tab-pane.fs024GHS.js";import"./index.C5gbd99D.js";import"./card.RgDT494R.js";import"./detail-basic.C5XH3jbK.js";import"./age.Du5VDnjl.js";/* empty css                */import"./link.QK3LjIND.js";import"./detail-pods.B6dtbEQc.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";import"./dropdown-item.Bdep7Ju0.js";import"./dropdown.Co_mIot6.js";import"./metrics.Dq7Dbl3h.js";import"./terminal.CkdZuQYW.js";import"./xterm.BR7SOqRe.js";/* empty css              */import"./xterm-addon-fit.onOJMBm7.js";import"./index.DDa397GF.js";import"./index.DrIIbIcU.js";import"./terminal-log.p9WpB3Ej.js";import"./monitor.CqRBZu0a.js";import"./date-picker.CCiP3Fyg.js";import"./dayjs.min.DOWqlKAh.js";import"./arrays.CvpzyGiz.js";import"./index.7ugBSK5z.js";import"./alert.DuAMTUGg.js";import"./services.B6UNrciu.js";import"./ingress.xNVH-CrT.js";import"./detail-conditions.Ch3mQiZh.js";import"./warningBar.BzThqhMC.js";/* empty css                    *//* empty css              */import"./index.DINKPDpR.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./popover.DFR01WU1.js";/* empty css                     */import"./index.B0d1JK95.js";/* empty css                       */import"./nodes.Bn2Bf7KU.js";import"./index.gYVODlrW.js";import"./secrets.hDCpAdRW.js";import"./serviceaccounts.FyKKM7DW.js";import"./namespaces.DIn9v7pI.js";import"./persistentvolumeclaims.C7-g1nKS.js";import"./configmaps.BgmpeECD.js";const C={class:"dycloud-table-box"},V={class:"dycloud-btn-list"},E={key:0},z={class:"dycloud-pagination"},I={key:0},U={class:"dialog-footer"},N={key:1},S={class:"dialog-footer"},A={key:2},D={class:"dialog-footer"},L={name:"Deployments"},B=Object.assign(L,{setup(L){const B=e({}),F=e(1),M=e(0),O=e(10),Y=e([]),H=e(""),K=e({keywords:"",namespace:""}),X=e(!1),q=()=>{K.value={}},G=()=>{F.value=1,O.value=10,Q()},J=e=>{O.value=e,Q()},P=e=>{F.value=e,Q()},Q=async()=>{"All Namespaces"==K.value.namespace&&(K.value.namespace="");const e=await y({cluster_id:K.value.cluster_id,page:F.value,pageSize:O.value,namespace:K.value.namespace,keyword:K.value.keywords});0===e.code&&(Y.value=e.data.items,M.value=e.data.total,F.value=e.data.page,O.value=e.data.pageSize)},R=async e=>{Z.value="update",H.value="编辑",X.value=!0;const a=await g({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,deploymentName:e.metadata.name});a.data.items&&a.data.items.code?r({type:"error",message:a.data.items.message}):0===a.code&&(B.value=a.data.items,te.value=!0)},W=e(!1),Z=e(""),$=async e=>{Z.value="update",H.value="编辑";const a=await g({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,deploymentName:e.metadata.name});a.data.items&&a.data.items.code?r({type:"error",message:a.data.items.message}):0===a.code&&(B.value=a.data.items,W.value=!0)},T=()=>{W.value=!1,te.value=!1,B.value={}},ee=async e=>{e.visible=!1;const a=await _({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,deploymentName:e.metadata.name});a.data.items&&a.data.items.code?r({type:"error",message:a.data.items.message}):0===a.code&&(r({type:"success",message:"删除成功"}),Q())},ae=async e=>{let a;switch(Z.value){case"create":a=await f({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,content:e});break;case"update":a=await b({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,deploymentName:e.metadata.name,content:e});break;default:a=await f({cluster_id:K.value.cluster_id,content:e})}a.data.items&&a.data.items.code?r({type:"error",message:a.data.items.message}):0===a.code&&(T(),(async e=>{0===e.code&&(r({type:"success",message:e.msg}),Q())})(a))},te=e(!1),se=e(!1),le=async e=>{const a=await g({cluster_id:K.value.cluster_id,namespace:e.metadata.namespace,deploymentName:e.metadata.name});a.data.items&&a.data.items.code?r({type:"error",message:a.data.items.message}):(0===a.code&&(H.value="详情",B.value=a.data.items,B.value.cluster_id=K.value.cluster_id,B.value.type="deployment"),se.value=!0)};return window.addEventListener("setItemCluster",(e=>{K.value.cluster_id=parseInt(localStorage.getItem("cluster_id"))})),window.addEventListener("setItemNamespace",(e=>{K.value.namespace=localStorage.getItem("namespace"),Q()})),(e,r)=>{const y=d,g=c,_=p,f=v,b=n,L=u;return a(),t("div",null,[s("div",C,[s("div",V,[l(f,{ref:"searchForm",inline:!0,model:K.value},{default:o((()=>[l(g,{label:"名称"},{default:o((()=>[l(y,{modelValue:K.value.keywords,"onUpdate:modelValue":r[0]||(r[0]=e=>K.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),l(g,null,{default:o((()=>[l(_,{size:"small",type:"primary",icon:"search",onClick:G},{default:o((()=>r[6]||(r[6]=[i("查询")]))),_:1}),l(_,{size:"small",icon:"refresh",onClick:q},{default:o((()=>r[7]||(r[7]=[i("重置")]))),_:1})])),_:1}),l(g,null,{default:o((()=>[l(_,{size:"small",type:"primary",icon:"plus",onClick:r[1]||(r[1]=e=>(Z.value="create",H.value="创建",X.value=!1,B.value=w("deployments",K.value.namespace,""),void(W.value=!0)))},{default:o((()=>r[8]||(r[8]=[i("YAML")]))),_:1}),l(_,{size:"small",type:"primary",icon:"plus",onClick:r[2]||(r[2]=e=>(Z.value="create",H.value="创建",X.value=!1,B.value=w("deploymentsinit",K.value.namespace,""),void(te.value=!0)))},{default:o((()=>r[9]||(r[9]=[i("新增")]))),_:1})])),_:1})])),_:1},8,["model"])]),Y.value?(a(),t("div",E,[l(k,{"table-data":Y.value,onYaml_update:$,onUpdate:R,onDetail:le,onDelete:ee},null,8,["table-data"])])):m("",!0)]),s("div",z,[l(b,{"current-page":F.value,"page-size":O.value,"page-sizes":[10,30,50,100],total:M.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:P,onSizeChange:J},null,8,["current-page","page-size","total"])]),W.value?(a(),t("div",I,[l(L,{modelValue:W.value,"onUpdate:modelValue":r[3]||(r[3]=e=>W.value=e),width:"70%",title:H.value},{default:o((()=>[s("div",U,[l(x,{data:B.value,onClose:T,onEnter:ae},null,8,["data"])])])),_:1},8,["modelValue","title"])])):m("",!0),te.value?(a(),t("div",N,[l(L,{modelValue:te.value,"onUpdate:modelValue":r[4]||(r[4]=e=>te.value=e),width:"70%",title:H.value},{default:o((()=>[s("div",S,[l(h,{form:B.value,"read-only":X.value,cluster:K.value.cluster_id,operation:Z.value,type:"deployments",onClose:T,onEnter:ae},null,8,["form","read-only","cluster","operation"])])])),_:1},8,["modelValue","title"])])):m("",!0),se.value?(a(),t("div",A,[l(L,{modelValue:se.value,"onUpdate:modelValue":r[5]||(r[5]=e=>se.value=e),width:"70%",title:H.value},{default:o((()=>[s("div",D,[l(j,{data:B.value,onClose:T,onEnter:ae},null,8,["data"])])])),_:1},8,["modelValue","title"])])):m("",!0)])}}});export{B as default};
