/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as a,c as t,e as l,w as s,b as r,t as i,F as o,v as p,g as n,h as d,f as c,B as m,E as u}from"./index.ABWJOL2Q.js";import{E as f,a as b}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as w}from"./popover.DFR01WU1.js";/* empty css            *//* empty css               */import{A as k}from"./age.Du5VDnjl.js";import{E as y}from"./index.D4uEcQv3.js";import{E as _}from"./index.DglrVZRl.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";import"./index.BRjlB3m5.js";const j=["onClick"],R={style:{"text-align":"right","margin-top":"8px"}},g={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},v=e(Object.assign(g,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup(e,{emit:g}){const v=g;return(g,x)=>{const C=f,T=u,h=y,E=_,z=w,A=b;return a(),t("div",null,[l(A,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:s((()=>[l(C,{type:"selection",width:"55"}),l(C,{align:"left",label:"名称",prop:"metadata.name"},{default:s((e=>[r("span",{class:"operate-span-primary",onClick:a=>{return t=e.row,void v("detail",t);var t}},i(e.row.metadata.name),9,j),l(h,{placement:"top"},{content:s((()=>[(a(!0),t(o,null,p(e.row.metadata.labels,((e,l,s)=>(a(),t("div",{slot:"content",key:s},[r("span",null,i(l)+": "+i(e),1)])))),128))])),default:s((()=>[l(T,{size:"small",type:"primary",link:"",icon:"PriceTag"})])),_:2},1024)])),_:1}),l(C,{label:"命名空间",prop:"namespace",type:"scope"},{default:s((e=>[r("span",null,i(e.row.metadata.namespace),1)])),_:1}),l(C,{label:"Workload",prop:"spec.scaleTargetRef.kind"},{default:s((e=>[n(i(e.row.spec.scaleTargetRef.kind)+"/"+i(e.row.spec.scaleTargetRef.name),1)])),_:1}),l(C,{label:"Min Replicas",prop:"spec.scaleTargetRef.minReplicas "},{default:s((e=>[n(i(e.row.spec.minReplicas),1)])),_:1}),l(C,{label:"Max Replicas",prop:"spec.scaleTargetRef.maxReplicas"},{default:s((e=>[n(i(e.row.spec.maxReplicas),1)])),_:1}),l(C,{label:"Current Replicas",prop:"status.currentReplicas"},{default:s((e=>[n(i(e.row.status.currentReplicas),1)])),_:1}),l(C,{label:"状态",prop:"metadata.status"},{default:s((e=>[e.row.status.currentReplicas===e.row.status.desiredReplicas?(a(),d(E,{key:0,type:"success",round:""},{default:s((()=>x[0]||(x[0]=[n(" Active ")]))),_:1})):c("",!0),e.row.status.currentReplicas!==e.row.status.desiredReplicas?(a(),d(E,{key:1,type:"danger",round:""},{default:s((()=>x[1]||(x[1]=[n(" Pending ")]))),_:1})):c("",!0)])),_:1}),l(C,{label:"存活时间",prop:"metadata.creationTimestamp",width:"180"},{default:s((e=>[r("span",null,i(m(k)(e.row.metadata.creationTimestamp)),1)])),_:1}),l(C,{label:"操作"},{default:s((e=>[l(T,{size:"small",type:"primary",link:"",icon:"edit",onClick:a=>{return t=e.row,void v("update",t);var t}},{default:s((()=>x[2]||(x[2]=[n("编辑")]))),_:2},1032,["onClick"]),l(z,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top"},{reference:s((()=>[l(T,{type:"primary",link:"",icon:"delete",size:"small",onClick:a=>e.row.visible=!0},{default:s((()=>x[5]||(x[5]=[n("删除")]))),_:2},1032,["onClick"])])),default:s((()=>[x[6]||(x[6]=r("p",null,"确定要删除吗？",-1)),r("div",R,[l(T,{size:"small",type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:s((()=>x[3]||(x[3]=[n("取消")]))),_:2},1032,["onClick"]),l(T,{type:"primary",size:"small",onClick:a=>{return t=e.row,void v("delete",t);var t}},{default:s((()=>x[4]||(x[4]=[n("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-72c11579"]]);export{v as default};
