/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,o as a,c as t,e as l,w as s,b as o,t as p,g as r,F as i,v as n,f as d,h as c,E as u}from"./index.ABWJOL2Q.js";import{E as m,a as f}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as y}from"./popover.DFR01WU1.js";/* empty css               *//* empty css            */import{E as b}from"./index.DglrVZRl.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";const w=["onClick"],_={class:"operate-span-primary"},k={key:0},j={key:0},v={key:0},g={key:1},h={style:{"text-align":"right","margin-top":"8px"}},x={name:"RecordTable",emits:{update:()=>!0,search:()=>!0,detail:()=>!0,delete:e=>1===e.length}},C=e(Object.assign(x,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","reduction","yaml_update"],setup(e,{emit:x}){const C=x;return(x,T)=>{const R=m,E=b,N=u,D=y,V=f;return a(),t("div",null,[l(V,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:s((()=>[l(R,{type:"selection",width:"55"}),l(R,{align:"left",label:"名称",prop:"metadata.name"},{default:s((e=>[o("span",{class:"operate-span-primary",onClick:a=>{return t=e.row,void C("veleroRestoreDetail",t);var t}},p(e.row.metadata.name),9,w)])),_:1}),l(R,{align:"left",label:"备份名称",prop:"backupName"},{default:s((e=>[o("span",_,p(e.row.spec.backupName),1)])),_:1}),l(R,{label:"恢复状态",prop:"schedule",type:"scope"},{default:s((e=>[o("span",null,p(e.row.status.phase),1)])),_:1}),l(R,{label:"恢复告警数量",prop:"warnings",type:"scope"},{default:s((e=>[o("span",null,p(e.row.status.warnings),1)])),_:1}),l(R,{label:"恢复错误数量",prop:"warnings",type:"scope"},{default:s((e=>[o("span",null,p(e.row.status.warnings),1)])),_:1}),l(R,{label:"开始时间",prop:"startTime",type:"scope"},{default:s((e=>[r(p(e.row.status.startTimestamp),1)])),_:1}),l(R,{label:"结束时间",prop:"endTime",type:"scope"},{default:s((e=>[r(p(e.row.status.completionTimestamp),1)])),_:1}),l(R,{label:"过期时间",prop:"expiration",type:"scope"},{default:s((e=>[r(p(e.row.status.expiration),1)])),_:1}),l(R,{label:"包含的命名空间",prop:"includedNamespaces",type:"scope"},{default:s((e=>[(a(!0),t(i,null,n(e.row.spec.includedNamespaces,((l,s)=>(a(),t("div",{key:s},[o("span",null,[r(p(l),1),s<e.row.spec.includedNamespaces.length-1?(a(),t("span",k,",")):d("",!0)])])))),128))])),_:1}),l(R,{label:"包含的资源类型",prop:"includedResources",type:"scope"},{default:s((e=>[e.row.spec.includedResources&&e.row.spec.includedResources.length>0?(a(),t("div",j,[(a(!0),t(i,null,n(e.row.spec.includedResources,((l,s)=>(a(),t("div",{key:s},[o("span",null,[r(p(l),1),s<e.row.spec.includedResources.length-1?(a(),t("span",v,",")):d("",!0)])])))),128))])):(a(),t("div",g,T[0]||(T[0]=[o("span",null,"*",-1)])))])),_:1}),l(R,{label:"创建时间",prop:"creationTimestamp",type:"scope"},{default:s((e=>[r(p(e.row.metadata.creationTimestamp),1)])),_:1}),l(R,{label:"命名空间",prop:"selector"},{default:s((e=>[(a(!0),t(i,null,n(e.row.spec.selector,((e,t,l)=>(a(),c(E,{key:l,type:"info"},{default:s((()=>[r(p(t)+"="+p(e),1)])),_:2},1024)))),128))])),_:1}),l(R,{align:"left",label:"操作"},{default:s((e=>[l(D,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top"},{reference:s((()=>[l(N,{type:"primary",link:"",icon:"delete",size:"small",onClick:a=>e.row.visible=!0},{default:s((()=>T[3]||(T[3]=[r("删除")]))),_:2},1032,["onClick"])])),default:s((()=>[T[4]||(T[4]=o("p",null,"确定要删除吗？",-1)),o("div",h,[l(N,{size:"small",type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:s((()=>T[1]||(T[1]=[r("取消")]))),_:2},1032,["onClick"]),l(N,{type:"primary",size:"small",onClick:a=>{return t=e.row,void C("delete",t);var t}},{default:s((()=>T[2]||(T[2]=[r("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])}}}),[["__scopeId","data-v-49988de9"]]);export{C as default};
