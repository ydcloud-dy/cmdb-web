/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,_ as a,a as l,o as t,c as s,e as o,w as i,b as r,F as d,v as n,g as u,t as p,i as m,k as c,E as v}from"./index.ABWJOL2Q.js";import{E as f,a as j}from"./col.BzMVCOvM.js";import{E as g}from"./pagination.BfYt3rvk.js";/* empty css            */import"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as _,E as b}from"./form-item.ujPiwBAF.js";import{E as h,a as y,b as k}from"./dropdown-item.Bdep7Ju0.js";import{E as x}from"./card.RgDT494R.js";/* empty css             */import"./checkbox.BcMUmSPv.js";import{E as w}from"./virtual-list.D0tgIX0Q.js";import C from"./table.DYuhOqv8.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./dropdown.Co_mIot6.js";import"./refs.CZv2DkwS.js";import"./table-column.ChuwY-lb.js";/* empty css                */import"./popover.DFR01WU1.js";import"./stringFun.hIDu-B3o.js";const z={class:"dycloud-search-box"},E={class:"dycloud-table-box"},I={class:"dycloud-pagination"},F={name:"Index"},M=a(Object.assign(F,{setup(a){const F={value:"id",label:"name",children:"region"},M=l(1),S=l(0),V=l(10),A=l({keyword:"",region:"",field:""}),D=l([]),N=l([]),O=l("识别搜索"),U=[{id:1,field:"name",name:"实例名称"},{id:2,field:"instance_id",name:"实例ID"},{id:8,field:"os",name:"操作系统"},{id:9,field:"os_type",name:"系统类型"},{id:10,field:"private_addr",name:"私网地址"},{id:11,field:"public_addr",name:"公网地址"},{id:12,field:"region",name:"区域ID"},{id:13,field:"region_name",name:"区域名称"},{id:14,field:"status",name:"状态"}],q=async()=>{const a=await(a=>e({url:"/cloudcmdb/virtualMachine/tree",method:"post",data:a}))();0===a.code&&(D.value=a.data.list)};q();const H=l(0),K=async()=>{if(0===H.value)return void m({message:"请单击左侧，选择要同步的厂商",type:"warning"});const a=await(a=>e({url:"/cloudcmdb/virtualMachine/sync",method:"post",data:a}))({id:H.value});0===a.code&&m({message:"同步操作，异步执行中，请稍后！",type:"success"})},L=e=>{e.region_id&&(A.value.region=e.region_id,R()),(e.region||null===e.region)&&(H.value=e.id)},R=async()=>{const a=await(a=>e({url:"/cloudcmdb/virtualMachine/list",method:"post",data:a}))({page:M.value,pageSize:V.value,...A.value});0===a.code&&(N.value=a.data.list,S.value=a.data.total,M.value=a.data.page,V.value=a.data.pageSize)};R();const X=()=>{A.value={},O.value="识别搜索",H.value=0},Y=()=>{"识别搜索"!==U.value?(M.value=1,V.value=10,R(),q()):m({message:"请选择搜索类型",type:"warning"})},Z=e=>{V.value=e,R()},B=e=>{M.value=e,R()},G=e=>{A.value=e,R()};return(e,a)=>{const l=w,m=x,q=f,H=h,R=y,J=k,P=_,Q=c,T=v,W=b,$=g,ee=j;return t(),s("div",null,[o(m,{class:"box-card",shadow:"hover"},{header:i((()=>a[1]||(a[1]=[r("div",{class:"card-header"},[r("span",null,"资产管理")],-1)]))),default:i((()=>[o(ee,{gutter:24},{default:i((()=>[o(q,{span:3},{default:i((()=>[o(m,{class:"box-card",shadow:"hover"},{header:i((()=>a[2]||(a[2]=[r("div",{class:"card-header"},[r("span",null,"资源分布")],-1)]))),default:i((()=>[o(l,{ref:"treeRef",data:D.value,props:F,"node-key":"region","default-expanded-keys":["0"],"expand-on-click-node":!1,onNodeClick:L},null,8,["data"])])),_:1})])),_:1}),o(q,{span:21},{default:i((()=>[o(m,{class:"el-card"},{default:i((()=>[r("div",z,[o(W,{ref:"searchForm",inline:!0,model:A.value},{default:i((()=>[o(P,null,{default:i((()=>[o(J,{"split-button":""},{dropdown:i((()=>[o(R,null,{default:i((()=>[(t(),s(d,null,n(U,((e,a)=>r("div",{key:a},[o(H,{onClick:a=>{return l=e.name,t=e.field,A.value.field=t,void(O.value=l);var l,t}},{default:i((()=>[u(p(e.name),1)])),_:2},1032,["onClick"])]))),64))])),_:1})])),default:i((()=>[u(p(O.value)+" ",1)])),_:1})])),_:1}),o(P,null,{default:i((()=>[o(Q,{modelValue:A.value.keyword,"onUpdate:modelValue":a[0]||(a[0]=e=>A.value.keyword=e),placeholder:"请输入搜索关键字"},null,8,["modelValue"])])),_:1}),o(P,null,{default:i((()=>[o(T,{size:"small",type:"primary",icon:"search",onClick:Y},{default:i((()=>a[3]||(a[3]=[u("查询")]))),_:1}),o(T,{size:"small",icon:"refresh",onClick:X},{default:i((()=>a[4]||(a[4]=[u("重置")]))),_:1}),o(T,{size:"small",type:"primary",icon:"refresh",onClick:K},{default:i((()=>a[5]||(a[5]=[u("同步")]))),_:1})])),_:1})])),_:1},8,["model"])]),r("div",E,[o(C,{"table-data":N.value,onSearch:G},null,8,["table-data"])]),r("div",I,[o($,{"current-page":M.value,"page-size":V.value,"page-sizes":[10,30,50,100],total:S.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:B,onSizeChange:Z},null,8,["current-page","page-size","total"])])])),_:1})])),_:1})])),_:1})])),_:1})])}}}),[["__scopeId","data-v-6f44ac79"]]);export{M as default};