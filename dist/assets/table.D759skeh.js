/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as a,c as t,e as l,w as o,b as s,t as p,F as i,v as r,h as n,g as d,B as m,E as c}from"./index.ABWJOL2Q.js";import{E as u,a as y}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as f}from"./popover.DFR01WU1.js";/* empty css            *//* empty css               */import{A as w}from"./age.Du5VDnjl.js";import{E as b}from"./index.D4uEcQv3.js";import{E as _}from"./index.DglrVZRl.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";import"./index.BRjlB3m5.js";const j=["onClick"],k={style:{"text-align":"right","margin-top":"8px"}},v={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},h=e(Object.assign(v,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup(e,{emit:v}){const h=v;return(v,x)=>{const g=u,C=c,E=b,V=_,z=f,T=y;return a(),t("div",null,[l(T,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:o((()=>[l(g,{type:"selection",width:"55"}),l(g,{align:"left",label:"名称",prop:"metadata.name"},{default:o((e=>[s("span",{class:"operate-span-primary",onClick:a=>{return t=e.row,void h("detail",t);var t}},p(e.row.metadata.name),9,j),l(E,{placement:"top"},{content:o((()=>[(a(!0),t(i,null,r(e.row.metadata.labels,((e,l,o)=>(a(),t("div",{slot:"content",key:o},[s("span",null,p(l)+": "+p(e),1)])))),128))])),default:o((()=>[l(C,{size:"small",type:"primary",link:"",icon:"PriceTag"})])),_:2},1024)])),_:1}),l(g,{label:"命名空间",prop:"namespace",type:"scope"},{default:o((e=>[s("span",null,p(e.row.metadata.namespace),1)])),_:1}),l(g,{label:"状态",prop:"status",width:"100px",type:"scope"},{default:o((e=>["Bound"===e.row.status.phase||"Available"===e.row.status.phase?(a(),n(V,{key:0,type:"success"},{default:o((()=>x[0]||(x[0]=[d("Bound")]))),_:1})):(a(),n(V,{key:1,type:"danger"},{default:o((()=>[d(p(e.row.status.phase),1)])),_:2},1024))])),_:1}),l(g,{label:"访问模式",prop:"accessModes",width:"200px",type:"scope"},{default:o((e=>[(a(!0),t(i,null,r(e.row.spec.accessModes,((e,t)=>(a(),n(V,{key:t,type:"info"},{default:o((()=>[d(p(e),1)])),_:2},1024)))),128))])),_:1}),l(g,{label:"卷类型",prop:"status",width:"100px",type:"scope"},{default:o((e=>[d(p(e.row.spec.volumeMode),1)])),_:1}),l(g,{label:"回收策略",prop:"persistentVolumeReclaimPolicy",width:"100px",type:"scope"},{default:o((e=>[s("span",null,p(e.row.spec.persistentVolumeReclaimPolicy),1)])),_:1}),l(g,{label:"容量Gi",prop:"storage",width:"100px",type:"scope"},{default:o((e=>[s("span",null,p(e.row.spec.capacity.storage),1)])),_:1}),l(g,{label:"存活时间",prop:"metadata.creationTimestamp",width:"180"},{default:o((e=>[s("span",null,p(m(w)(e.row.metadata.creationTimestamp)),1)])),_:1}),l(g,{label:"操作"},{default:o((e=>[l(C,{size:"small",type:"primary",link:"",icon:"edit",onClick:a=>{return t=e.row,void h("update",t);var t}},{default:o((()=>x[1]||(x[1]=[d("编辑")]))),_:2},1032,["onClick"]),l(z,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top"},{reference:o((()=>[l(C,{type:"primary",link:"",icon:"delete",size:"small",onClick:a=>e.row.visible=!0},{default:o((()=>x[4]||(x[4]=[d("删除")]))),_:2},1032,["onClick"])])),default:o((()=>[x[5]||(x[5]=s("p",null,"确定要删除吗？",-1)),s("div",k,[l(C,{size:"small",type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:o((()=>x[2]||(x[2]=[d("取消")]))),_:2},1032,["onClick"]),l(C,{type:"primary",size:"small",onClick:a=>{return t=e.row,void h("delete",t);var t}},{default:o((()=>x[3]||(x[3]=[d("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-089dea94"]]);export{h as default};
