/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a as t,o as a,c as l,e as i,w as o,b as s,g as r,t as n,h as p,f as d,i as m,E as c}from"./index.ABWJOL2Q.js";import{E as u,a as y}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as f}from"./popover.DFR01WU1.js";/* empty css               *//* empty css            */import{t as k}from"./stringFun.hIDu-B3o.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";const b={style:{"text-align":"left"}},w={style:{"text-align":"left"}},_={key:0,class:"custom-span"},j={key:1,class:"custom-span"},v={style:{"text-align":"right","margin-top":"8px"}},g={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,delete:e=>1===e.length}},C=e(Object.assign(g,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search"],setup(e,{emit:g}){const C=g,h=e=>{const t=e,a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),document.execCommand("Copy"),m({message:"复制成功",type:"success"}),a.remove()},x=t({}),z=({prop:e,order:t})=>{e&&("ID"===e&&(e="id"),x.value.orderKey=k(e),x.value.desc="descending"===t),C("search",x.value)};return(t,m)=>{const k=u,g=c,x=f,D=y;return a(),l("div",null,[i(D,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:z},{default:o((()=>[i(k,{type:"selection",width:"55"}),i(k,{align:"left",width:"455",label:"实例ID / 名称",sortable:"custom",prop:"instance_id"},{default:o((e=>[s("div",b,[i(g,{class:"operate-button-primary",link:""},{default:o((()=>[r(n(e.row.instance_id),1)])),_:2},1024),i(g,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:t=>h(e.row.instance_id)},null,8,["onClick"]),i(g,{link:""},{default:o((()=>[r(n(e.row.name),1)])),_:2},1024),i(g,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:t=>h(e.row.name)},null,8,["onClick"])])])),_:1}),i(k,{label:"状态",width:"95",prop:"status",sortable:"custom",type:"scope"},{default:o((e=>["运行中"===e.row.status?(a(),p(g,{key:0,size:"small",link:"",type:"success"},{default:o((()=>[r(n(e.row.status),1)])),_:2},1024)):(a(),p(g,{key:1,size:"small",link:"",type:"danger"},{default:o((()=>[r(n(e.row.status),1)])),_:2},1024))])),_:1}),i(k,{align:"left",width:"115",label:"可用区",prop:"region_name"}),i(k,{align:"left",width:"165",label:"IP地址",type:"scope"},{default:o((e=>[s("div",w,[""!==e.row.public_addr?(a(),l("span",_,n(e.row.public_addr)+" (公)",1)):d("",!0),""!==e.row.private_addr?(a(),l("span",j,n(e.row.private_addr)+" (私有)",1)):d("",!0)])])),_:1}),i(k,{fixed:"right",width:"150",label:"操作"},{default:o((e=>[i(g,{size:"small",type:"primary",link:"",icon:"edit",onClick:t=>{return a=e.row,void C("update",a);var a}},{default:o((()=>m[0]||(m[0]=[r("编辑")]))),_:2},1032,["onClick"]),i(x,{modelValue:e.row.visible,"onUpdate:modelValue":t=>e.row.visible=t,placement:"top"},{reference:o((()=>[i(g,{type:"primary",link:"",icon:"delete",size:"small",onClick:t=>e.row.visible=!0},{default:o((()=>m[3]||(m[3]=[r("删除")]))),_:2},1032,["onClick"])])),default:o((()=>[m[4]||(m[4]=s("p",null,"确定要删除吗？",-1)),s("div",v,[i(g,{size:"small",type:"primary",link:"",onClick:t=>e.row.visible=!1},{default:o((()=>m[1]||(m[1]=[r("取消")]))),_:2},1032,["onClick"]),i(g,{type:"primary",size:"small",onClick:t=>{return a=e.row,void C("delete",a);var a}},{default:o((()=>m[2]||(m[2]=[r("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-18907e65"]]);export{C as default};
