/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as t,c as l,e as a,w as o,b as p,t as s,g as i,F as r,v as n,f as d,h as c,E as m}from"./index.ABWJOL2Q.js";import{E as u,a as y}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as f}from"./popover.DFR01WU1.js";/* empty css               *//* empty css            */import{E as b}from"./index.DglrVZRl.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";const k=["onClick"],w={key:0},_={key:0},j={key:0},v={key:1},h={style:{"text-align":"right","margin-top":"8px"}},C={name:"TableBlock",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},g=e(Object.assign(C,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail","yaml_update"],setup(e,{emit:C}){const g=C;return(C,x)=>{const z=u,E=b,R=m,T=f,V=y;return t(),l("div",null,[a(V,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:o((()=>[a(z,{type:"selection",width:"55"}),a(z,{align:"left",label:"名称",prop:"metadata.name"},{default:o((e=>[p("span",{class:"operate-span-primary",onClick:t=>{return l=e.row,void g("detail",l);var l}},s(e.row.metadata.name),9,k)])),_:1}),a(z,{label:"备份策略",prop:"schedule",type:"scope"},{default:o((e=>[p("span",null,s(e.row.spec.schedule),1)])),_:1}),a(z,{label:"保留时长",prop:"ttl",type:"scope"},{default:o((e=>[i(s(e.row.spec.template.ttl),1)])),_:1}),a(z,{label:"包含的命名空间",prop:"includedNamespaces",type:"scope"},{default:o((e=>[(t(!0),l(r,null,n(e.row.spec.template.includedNamespaces,((a,o)=>(t(),l("div",{key:o},[p("span",null,[i(s(a),1),o<e.row.spec.template.includedNamespaces.length-1?(t(),l("span",w,",")):d("",!0)])])))),128))])),_:1}),a(z,{label:"包含的资源类型",prop:"includedResources",type:"scope"},{default:o((e=>[e.row.spec.template.includedResources&&e.row.spec.template.includedResources.length>0?(t(),l("div",_,[(t(!0),l(r,null,n(e.row.spec.template.includedResources,((a,o)=>(t(),l("div",{key:o},[p("span",null,[i(s(a),1),o<e.row.spec.template.includedResources.length-1?(t(),l("span",j,",")):d("",!0)])])))),128))])):(t(),l("div",v,x[0]||(x[0]=[p("span",null,"*",-1)])))])),_:1}),a(z,{label:"创建时间",prop:"creationTimestamp",type:"scope"},{default:o((e=>[i(s(e.row.metadata.creationTimestamp),1)])),_:1}),a(z,{label:"存储位置",prop:"endpoint",type:"scope"},{default:o((e=>x[1]||(x[1]=[]))),_:1}),a(z,{label:"命名空间",prop:"selector"},{default:o((e=>[(t(!0),l(r,null,n(e.row.spec.selector,((e,l,a)=>(t(),c(E,{key:a,type:"info"},{default:o((()=>[i(s(l)+"="+s(e),1)])),_:2},1024)))),128))])),_:1}),a(z,{align:"left",label:"操作"},{default:o((e=>[a(R,{size:"small",type:"primary",link:"",icon:"edit",onClick:t=>{return l=e.row,void g("yaml_update",l);var l}},{default:o((()=>x[2]||(x[2]=[i("YAML")]))),_:2},1032,["onClick"]),a(R,{size:"small",type:"primary",link:"",icon:"edit",onClick:t=>{return l=e.row,void g("update",l);var l}},{default:o((()=>x[3]||(x[3]=[i("编辑")]))),_:2},1032,["onClick"]),a(T,{modelValue:e.row.visible,"onUpdate:modelValue":t=>e.row.visible=t,placement:"top"},{reference:o((()=>[a(R,{type:"primary",link:"",icon:"delete",size:"small",onClick:t=>e.row.visible=!0},{default:o((()=>x[6]||(x[6]=[i("删除")]))),_:2},1032,["onClick"])])),default:o((()=>[x[7]||(x[7]=p("p",null,"确定要删除吗？",-1)),p("div",h,[a(R,{size:"small",type:"primary",link:"",onClick:t=>e.row.visible=!1},{default:o((()=>x[4]||(x[4]=[i("取消")]))),_:2},1032,["onClick"]),a(R,{type:"primary",size:"small",onClick:t=>{return l=e.row,void g("delete",l);var l}},{default:o((()=>x[5]||(x[5]=[i("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-8b4a09e4"]]);export{g as default};
