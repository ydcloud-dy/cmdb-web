/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a as l,o as t,c as a,e as o,w as s,b as r,g as i,t as n,h as u,B as p,f as d,U as m,i as c,E as f}from"./index.ABWJOL2Q.js";import{E as y}from"./drawer.XhtctEYG.js";import"./overlay.CDLw2uOw.js";import{E as b,a as v}from"./descriptions-item.C4J2YVui.js";import{E as _,a as w}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";import{E as k}from"./popover.DFR01WU1.js";/* empty css               *//* empty css            */import{t as C}from"./stringFun.hIDu-B3o.js";import{E as j}from"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseIteratee.BPaQBmlP.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./index.6ock-Gvr.js";import"./dropdown.Co_mIot6.js";const h={style:{"text-align":"left"}},g={slot:"content"},x={style:{"text-align":"left"}},I={key:0,class:"custom-span"},D={key:1,class:"custom-span"},z={style:{"text-align":"left"}},P={key:0,class:"custom-span"},E={key:1,class:"custom-span"},U={key:0},V={key:1},A={style:{"text-align":"right","margin-top":"8px"}},T={name:"TableBlock",emits:{update:()=>!0,detail:()=>!0,search:()=>!0,delete:e=>1===e.length}},B=e(Object.assign(T,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup(e,{emit:T}){const B=T,O=l(!1),q=l({}),F=e=>{O.value=!1,e()},H=e=>{const l=e,t=document.createElement("input");t.value=l,document.body.appendChild(t),t.select(),document.execCommand("Copy"),c({message:"复制成功",type:"success"}),t.remove()},K=l({}),L=({prop:e,order:l})=>{e&&("ID"===e&&(e="id"),K.value.orderKey=C(e),K.value.desc="descending"===l),B("search",K.value)};return(l,c)=>{const C=_,T=f,K=k,M=w,N=b,S=v,G=y;return t(),a("div",null,[o(M,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:L},{default:s((()=>[o(C,{type:"selection",width:"55"}),o(C,{align:"left",width:"250",label:"实例ID / 名称",sortable:"custom",prop:"instance_id"},{default:s((e=>[r("div",h,[o(T,{class:"operate-button-primary",link:"",onClick:l=>{return t=e.row,q.value=t,void(O.value=!0);var t}},{default:s((()=>[i(n(e.row.ID),1)])),_:2},1032,["onClick"]),o(T,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:l=>H(e.row.ID)},null,8,["onClick"]),o(T,{link:""},{default:s((()=>[i(n(e.row.name),1)])),_:2},1024),o(T,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:l=>H(e.row.name)},null,8,["onClick"])])])),_:1}),o(C,{label:"状态",width:"95",prop:"status",sortable:"custom",type:"scope"},{default:s((e=>["已验证"===e.row.status?(t(),u(T,{key:0,size:"small",link:"",type:"success"},{default:s((()=>[i(n(e.row.status),1)])),_:2},1024)):(t(),u(T,{key:1,size:"small",link:"",type:"danger"},{default:s((()=>[i(n(e.row.status),1)])),_:2},1024))])),_:1}),o(C,{width:"150",label:"操作系统",prop:"os_type",type:"scope",sortable:"custom"},{default:s((e=>[o(p(j),{placement:"top",class:"box-item",effect:"dark"},{content:s((()=>[r("div",g,n(e.row.os),1)])),default:s((()=>[o(T,{link:""},{default:s((()=>[i(n(e.row.os),1)])),_:2},1024)])),_:2},1024)])),_:1}),o(C,{align:"left",width:"115",label:"配置",type:"scope"},{default:s((e=>[r("div",x,[""!==e.row.cpu?(t(),a("span",I,n(e.row.cpuCount)+" vCPU",1)):d("",!0),""!==e.row.memory?(t(),a("span",D,n(e.row.memory)+" 内存 ",1)):d("",!0)])])),_:1}),o(C,{align:"left",width:"165",label:"IP地址",type:"scope"},{default:s((e=>[r("div",z,[""!==e.row.ip?(t(),a("span",P,n(e.row.publicIP)+" (公)",1)):d("",!0),""!==e.row.ip?(t(),a("span",E,n(e.row.privateIP)+" (私有)",1)):d("",!0)])])),_:1}),o(C,{align:"left",label:"创建时间",prop:"expired_time",width:"230"},{default:s((e=>[""!==e.row.CreatedAt?(t(),a("span",U,n(p(m)(e.row.CreatedAt)),1)):(t(),a("span",V,"无"))])),_:1}),o(C,{fixed:"right",width:"150",label:"操作"},{default:s((e=>[o(T,{size:"small",type:"primary",link:"",icon:"edit",onClick:l=>{return t=e.row,void B("update",t);var t}},{default:s((()=>c[1]||(c[1]=[i("编辑")]))),_:2},1032,["onClick"]),o(K,{modelValue:e.row.visible,"onUpdate:modelValue":l=>e.row.visible=l,placement:"top"},{reference:s((()=>[o(T,{type:"primary",link:"",icon:"delete",size:"small",onClick:l=>e.row.visible=!0},{default:s((()=>c[4]||(c[4]=[i("删除")]))),_:2},1032,["onClick"])])),default:s((()=>[c[5]||(c[5]=r("p",null,"确定要删除吗？",-1)),r("div",A,[o(T,{size:"small",type:"primary",link:"",onClick:l=>e.row.visible=!1},{default:s((()=>c[2]||(c[2]=[i("取消")]))),_:2},1032,["onClick"]),o(T,{type:"primary",size:"small",onClick:l=>{return t=e.row,void B("delete",t);var t}},{default:s((()=>c[3]||(c[3]=[i("确定")]))),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"]),o(G,{"destroy-on-close":"",size:"500",modelValue:O.value,"onUpdate:modelValue":c[0]||(c[0]=e=>O.value=e),"show-close":!0,"before-close":F},{default:s((()=>[c[6]||(c[6]=r("h3",null,"基本信息",-1)),o(S,{column:1,border:""},{default:s((()=>[o(N,{label:"主机名称"},{default:s((()=>[i(n(q.value.name),1)])),_:1}),o(N,{label:"连接地址"},{default:s((()=>[i(n(q.value.username+"@"+q.value.serverHost),1)])),_:1}),o(N,{label:"连接端口"},{default:s((()=>[i(n(q.value.port),1)])),_:1}),o(N,{label:"备注信息"},{default:s((()=>[i(n(q.value.note),1)])),_:1}),o(N,{label:"项目组"},{default:s((()=>[i(n(q.value.note),1)])),_:1})])),_:1}),c[7]||(c[7]=r("h3",null,"扩展信息",-1)),o(S,{column:1,border:""},{default:s((()=>[o(N,{label:"实例ID"},{default:s((()=>[i(n(q.value.ID),1)])),_:1}),o(N,{label:"操作系统"},{default:s((()=>[i(n(q.value.os),1)])),_:1}),o(N,{label:"CPU"},{default:s((()=>[i(n(q.value.cpuCount),1)])),_:1}),o(N,{label:"内存"},{default:s((()=>[i(n(q.value.memory),1)])),_:1}),o(N,{label:"磁盘"},{default:s((()=>[i(n(q.value.diskTotal),1)])),_:1}),o(N,{label:"内网IP"},{default:s((()=>[i(n(q.value.privateIP),1)])),_:1}),o(N,{label:"公网IP"},{default:s((()=>[i(n(q.value.publicIP),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-058696fd"]]);export{B as default};