/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as a,c as t,e as l,w as o,b as i,t as r,F as s,v as p,B as n,g as m,E as d}from"./index.ABWJOL2Q.js";import{E as c,a as u}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as f}from"./popover.DFR01WU1.js";/* empty css               *//* empty css            */import{A as b}from"./age.Du5VDnjl.js";import{E as j}from"./index.D4uEcQv3.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";import"./index.BRjlB3m5.js";const y=["onClick"],k={style:{"text-align":"right","margin-top":"8px"}},w={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},_=e(Object.assign(w,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup(e,{emit:w}){const _=w;return(w,v)=>{const C=c,g=d,x=j,h=f,z=u;return a(),t("div",null,[l(z,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:o((()=>[l(C,{type:"selection",width:"55"}),l(C,{align:"left",label:"名称",prop:"metadata.name"},{default:o((e=>[i("span",{class:"operate-span-primary",onClick:a=>{return t=e.row,void _("detail",t);var t}},r(e.row.metadata.name),9,y),l(x,{placement:"top"},{content:o((()=>[(a(!0),t(s,null,p(e.row.metadata.labels,((e,l,o)=>(a(),t("div",{slot:"content",key:o},[i("span",null,r(l)+": "+r(e),1)])))),128))])),default:o((()=>[l(g,{size:"small",type:"primary",link:"",icon:"PriceTag"})])),_:2},1024)])),_:1}),l(C,{label:"命名空间",prop:"namespace",type:"scope"},{default:o((e=>[i("span",null,r(e.row.metadata.namespace),1)])),_:1}),l(C,{label:"存活时间",prop:"metadata.creationTimestamp",width:"180"},{default:o((e=>[i("span",null,r(n(b)(e.row.metadata.creationTimestamp)),1)])),_:1}),l(C,{label:"操作"},{default:o((e=>[l(g,{size:"small",type:"primary",link:"",icon:"edit",onClick:a=>{return t=e.row,void _("update",t);var t}},{default:o((()=>v[0]||(v[0]=[m("编辑")]))),_:2},1032,["onClick"]),l(h,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top"},{reference:o((()=>[l(g,{type:"primary",link:"",icon:"delete",size:"small",onClick:a=>e.row.visible=!0},{default:o((()=>v[3]||(v[3]=[m("删除")]))),_:2},1032,["onClick"])])),default:o((()=>[v[4]||(v[4]=i("p",null,"确定要删除吗？",-1)),i("div",k,[l(g,{size:"small",type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:o((()=>v[1]||(v[1]=[m("取消")]))),_:2},1032,["onClick"]),l(g,{type:"primary",size:"small",onClick:a=>{return t=e.row,void _("delete",t);var t}},{default:o((()=>v[2]||(v[2]=[m("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-94678e59"]]);export{_ as default};
