/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as t,c as a,e as l,w as i,b as o,t as s,F as r,v as p,h as n,g as d,B as m,E as c}from"./index.ABWJOL2Q.js";import{E as u,a as f}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as b}from"./popover.DFR01WU1.js";/* empty css            *//* empty css               */import{A as y}from"./age.Du5VDnjl.js";import{E as k}from"./index.D4uEcQv3.js";import{E as j}from"./index.DglrVZRl.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";import"./index.BRjlB3m5.js";const w=["onClick"],_={style:{"text-align":"right","margin-top":"8px"}},v={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},x=e(Object.assign(v,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup(e,{emit:v}){const x=v;return(v,C)=>{const g=u,h=c,E=k,z=j,T=b,V=f;return t(),a("div",null,[l(V,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:i((()=>[l(g,{type:"selection",width:"55"}),l(g,{align:"left",label:"名称",prop:"metadata.name"},{default:i((e=>[o("span",{class:"operate-span-primary",onClick:t=>{return a=e.row,void x("detail",a);var a}},s(e.row.metadata.name),9,w),l(E,{placement:"top"},{content:i((()=>[(t(!0),a(r,null,p(e.row.metadata.labels,((e,l,i)=>(t(),a("div",{slot:"content",key:i},[o("span",null,s(l)+": "+s(e),1)])))),128))])),default:i((()=>[l(h,{size:"small",type:"primary",link:"",icon:"PriceTag"})])),_:2},1024)])),_:1}),l(g,{label:"命名空间",prop:"namespace",type:"scope"},{default:i((e=>[o("span",null,s(e.row.metadata.namespace),1)])),_:1}),l(g,{label:"Endpoints",prop:"subsets","min-width":"200px"},{default:i((e=>[(t(!0),a(r,null,p(e.row.subsets,((e,l)=>(t(),a("div",{key:l},[(t(!0),a(r,null,p(e.addresses,((l,o)=>(t(),a("div",{key:o,style:{display:"inline-block"}},[(t(!0),a(r,null,p(e.ports,((e,a)=>(t(),n(z,{key:a,type:"info"},{default:i((()=>[d(s(l.ip)+":"+s(e.port),1)])),_:2},1024)))),128))])))),128))])))),128))])),_:1}),l(g,{label:"存活时间",prop:"metadata.creationTimestamp",width:"180"},{default:i((e=>[o("span",null,s(m(y)(e.row.metadata.creationTimestamp)),1)])),_:1}),l(g,{label:"操作"},{default:i((e=>[l(h,{size:"small",type:"primary",link:"",icon:"edit",onClick:t=>{return a=e.row,void x("update",a);var a}},{default:i((()=>C[0]||(C[0]=[d("编辑")]))),_:2},1032,["onClick"]),l(T,{modelValue:e.row.visible,"onUpdate:modelValue":t=>e.row.visible=t,placement:"top"},{reference:i((()=>[l(h,{type:"primary",link:"",icon:"delete",size:"small",onClick:t=>e.row.visible=!0},{default:i((()=>C[3]||(C[3]=[d("删除")]))),_:2},1032,["onClick"])])),default:i((()=>[C[4]||(C[4]=o("p",null,"确定要删除吗？",-1)),o("div",_,[l(h,{size:"small",type:"primary",link:"",onClick:t=>e.row.visible=!1},{default:i((()=>C[1]||(C[1]=[d("取消")]))),_:2},1032,["onClick"]),l(h,{type:"primary",size:"small",onClick:t=>{return a=e.row,void x("delete",a);var a}},{default:i((()=>C[2]||(C[2]=[d("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-caedcd02"]]);export{x as default};
