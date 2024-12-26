/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,o as t,c as l,e as s,b as o,w as i,h as u,g as d,f as n,E as m,u as r,l as c,F as v,v as p,i as f,cu as y,k as g}from"./index.ABWJOL2Q.js";import{E as j}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as _}from"./pagination.BfYt3rvk.js";/* empty css            */import{E as h,a as w}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              *//* empty css             *//* empty css               */import{a as b,E as k}from"./form-item.ujPiwBAF.js";import{g as x}from"./k8sCluster.LvLN1W31.js";import{G as V,D as C,N as S,a as N}from"./nodes.Bn2Bf7KU.js";import{a as U}from"./metrics.Dq7Dbl3h.js";import{P as T,G as z,e as E,b as F}from"./terminal.CkdZuQYW.js";import{T as P,c as I,m as B}from"./table.CjWm7Pcm.js";import D from"./form.EuU8PRWj.js";import M from"./detail.Bqe96sKf.js";import A from"./monitor.CFujk3dD.js";import{_ as O}from"./index.CLE9PzC_.js";import{_ as G,a as L}from"./index.D2JmR_vB.js";import{_ as R}from"./warningBar.BzThqhMC.js";import{F as W}from"./files.U5RRtO1D.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./xterm.BR7SOqRe.js";/* empty css              */import"./xterm-addon-fit.onOJMBm7.js";import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */import"./dropdown-item.Bdep7Ju0.js";import"./dropdown.Co_mIot6.js";import"./age.Du5VDnjl.js";import"./tab-pane.fs024GHS.js";import"./index.C5gbd99D.js";import"./detail.12K7B398.js";import"./index.DDa397GF.js";import"./index.DrIIbIcU.js";import"./terminal-log.p9WpB3Ej.js";import"./monaco-editor-vue3.es.BmYKexe9.js";import"./js-yaml.B_ZKWvuw.js";import"./date-picker.CCiP3Fyg.js";import"./dayjs.min.DOWqlKAh.js";import"./arrays.CvpzyGiz.js";import"./index.7ugBSK5z.js";import"./pods.C9ExxS47.js";import"./link.QK3LjIND.js";import"./upload.-Ej7EZzx.js";import"./progress.KCbgDfe_.js";import"./cloneDeep.BwH6oqGn.js";const Y={class:"dycloud-btn-list"},q={key:0,class:"dialog-footer"},H={key:1},J={class:"dialog-footer"},K={name:"CloudTTY"},X=Object.assign(K,{props:{node_name:{default:function(){return""},type:String}},setup(r){const c=r,v=a(""),p=a(""),f=a(""),y=a(""),g=a(""),_=a(!1),h=a([]),w=async(e,a)=>{const t=await z({cluster_id:x.value,namespace:e,labelSelector:a});0===t.code&&t.data.items&&(h.value=t.data.items)},x=a(0),V=a("");(async()=>{try{x.value=parseInt(localStorage.getItem("cluster_id")),V.value=c.node_name,p.value="devops/podName=";const t=await(a={cluster_id:x.value,node_name:V.value},e({url:"/kubernetes/nodetty/get",method:"post",data:a,doNotShowLoading:!0}));0===t.code&&t.data&&t.data.name&&(p.value+=t.data.name,v.value=t.data.namespace,y.value=t.data.container,await(async()=>{let e=0;for(;e<100;){e+=1;try{if(await w(v.value,p.value),!h.value||0===h.value.length){await new Promise((e=>setTimeout(e,3e3)));continue}const e=h.value.find((e=>e.status&&e.status.phase));if(!e){await new Promise((e=>setTimeout(e,3e3)));continue}if("Running"===e.status.phase){f.value=e.metadata.name,g.value=e,g.value.cluster_id=x.value;break}}catch(a){}await new Promise((e=>setTimeout(e,3e3)))}})())}catch(t){}var a})();const C=a(""),S=()=>{_.value=!1};return(e,a)=>{const r=m,c=b,v=k,p=j;return t(),l("div",null,[s(R,{title:"注：NodeShell Pod 需要创建特权权限，请确保有足够的权限。"}),o("div",Y,[s(v,{ref:"searchForm",inline:!0},{default:i((()=>[s(c,null,{default:i((()=>[g.value?(t(),u(r,{key:0,icon:"Files",type:"primary",onClick:a[0]||(a[0]=e=>(C.value="Pod: "+g.value.metadata.name+" Container: "+y.value+"  文件浏览",g.value.container_name=y,void(_.value=!0)))},{default:i((()=>a[2]||(a[2]=[d("文件浏览")]))),_:1})):n("",!0)])),_:1})])),_:1},512)]),g.value?(t(),l("div",q,[o("div",null,[s(T,{data:g.value,name:y.value},null,8,["data","name"])])])):n("",!0),_.value?(t(),l("div",H,[s(p,{ref:"files",modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=e=>_.value=e),width:"70%",title:C.value},{default:i((()=>[o("div",J,[s(W,{form:g.value,onClose:S},null,8,["form"])])])),_:1},8,["modelValue","title"])])):n("",!0)])}}}),Q={class:"dycloud-search-box"},Z={class:"dycloud-table-box"},$={key:0},ee={class:"dycloud-pagination"},ae={key:0},te={class:"dialog-footer"},le={key:1},se={key:2},oe={class:"dialog-footer"},ie={key:3},ue={class:"dialog-footer"},de={key:4},ne={class:"dialog-footer"},me={key:5},re={class:"dialog-footer"},ce={name:"Index"},ve=Object.assign(ce,{setup(e){const T=a({apiVersion:"v1",kind:"Node",metadata:{name:"",annotations:{},labels:{}}}),R=a(1),W=a(0),Y=a(10),q=a([]),H=a(""),J=a({keywords:""}),K=a([]);r();const ce=()=>{J.value={}},ve=()=>{R.value=1,Y.value=10,ye()},pe=e=>{Y.value=e,ye()},fe=e=>{R.value=e,ye()},ye=async e=>{var a,t;e&&await(async()=>{const e=await x({page:1,pageSize:1e4});0===e.code&&(K.value=e.data.list,J.value.cluster_id=K.value[0].id,parseInt(localStorage.getItem("cluster_id"))>0?(J.value.cluster_id=parseInt(localStorage.getItem("cluster_id")),L(J.value.cluster_id)):L(K.value[0].id))})();const l=await V({cluster_id:J.value.cluster_id,page:R.value,pageSize:Y.value,keyword:J.value.keywords});if(0===l.code){const e=await U({cluster_id:J.value.cluster_id});if(0===e.code){q.value=l.data.items,W.value=l.data.total;for(const s of l.data.items)for(const l of e.data.items)s.metadata.name===l.metadata.name&&((null==(a=l.usage)?void 0:a.cpu)&&(s.cpuUsage=I(l.usage.cpu)+"m",s.cpuUsagePersent=Math.round(100*(I(l.usage.cpu)/I(s.status.allocatable.cpu)).toFixed(2))),(null==(t=l.usage)?void 0:t.memory)&&(s.memoryUsage=B(l.usage.memory).toFixed(2)+"Mi",s.memoryUsagePersent=Math.round(100*(B(l.usage.memory)/B(s.status.allocatable.memory)).toFixed(2))))}}};ye(!0);const ge=a(!1),je=a(""),_e=async e=>{const a=await C({cluster_id:J.value.cluster_id,nodeName:e.metadata.name});a.data.items&&a.data.items.code?f({type:"error",message:a.data.items.message}):0===a.code&&(je.value="update",H.value="编辑",T.value=a.data.items,ge.value=!0)},he=()=>{ge.value=!1,Ue.value=!1,Ee.value=!1,Pe.value=!1,Be.value=!1,T.value={}},we=async e=>{y.confirm("您确定要删除  "+e.metadata.name+" 节点？, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{e.visible=!1;const a=await S(J.value.cluster_id,e.metadata.name);a.data.items&&a.data.items.code?f({type:"error",message:a.data.items.message}):0===a.code&&(f({type:"success",message:"删除成功"}),1===q.value.length&&R.value>1&&R.value--,ye())})).catch((()=>{f({type:"info",message:"已取消删除!"})}))},be=async e=>{let a;je.value,a=await N({cluster_id:J.value.cluster_id,nodeName:e.metadata.name,content:e}),a.data.items&&a.data.items.code?f({type:"error",message:a.data.items.message}):0===a.code&&(he(),(async e=>{0===e.code&&(f({type:"success",message:e.msg}),1===q.value.length&&R.value>1&&R.value--,ye())})(a))},ke=async()=>{L(J.value.cluster_id),ye()};a([]);const xe=async e=>{y.confirm("此操作将节点: "+e.metadata.name+" Pod全部排空，是否继续?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((async()=>{await E({cluster_id:J.value.cluster_id,nodeName:e.metadata.name,fieldSelector:"spec.nodeName=".concat(e.metadata.name)}),f({type:"success",message:"节点Pod排空成功！"})})).catch((()=>{f({type:"info",message:"已取消排空"}),ye()}))},Ve=async(e,a)=>{y.confirm("此操作将节点: "+e.metadata.name+a+" 是否继续?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((async()=>{const a=await N({cluster_id:J.value.cluster_id,nodeName:e.metadata.name,content:e});if(a.data.items&&a.data.items.code)return f({type:"error",message:a.data.items.message}),void ye();0===a.code&&(f({type:"success",message:"设置成功"}),ye())})).catch((()=>{f({type:"info",message:"已取消设置"}),ye()}))},Ce=async e=>{e.spec.unschedulable?(e.spec.unschedulable=!1,Ve(e,"设置可调度")):(e.spec.unschedulable=!0,Ve(e,"设置不可调度"))},Se=a(!1),Ne=async e=>{T.value=e,T.value.cluster_id=J.value.cluster_id,H.value="详情",Se.value=!0},Ue=a(!1),Te=async e=>{H.value="编辑";const a=await C({cluster_id:J.value.cluster_id,nodeName:e.metadata.name});a.data.items&&a.data.items.code?f({type:"error",message:a.data.items.message}):0===a.code&&(T.value=a.data.items,Ue.value=!0)},ze=async e=>{const a=await N({cluster_id:J.value.cluster_id,nodeName:e.metadata.name,content:e});a.data.items&&a.data.items.code?f({type:"error",message:a.data.items.message}):0===a.code&&(f({type:"success",message:"更新成功"}),he(),ye())},Ee=a(!1),Fe=e=>{H.value="节点 名称: "+e.metadata.name,T.value=e,T.value.cluster_id=J.value.cluster_id,Ee.value=!0},Pe=a(!1),Ie=()=>{H.value="CloudShell",Pe.value=!0},Be=a(!1),De=a(""),Me=e=>{H.value="NodeShell 节点名称："+e.metadata.name,De.value=e.metadata.name,Be.value=!0},Ae=a([]),Oe=async(e,a)=>{const t=await z({cluster_id:J.value.cluster_id,namespace:e,selector:a});0===t.code&&t.data.items&&(Ae.value=t.data.items,Ae.value.length>0&&await(async e=>{for(const a of e)await F({cluster_id:J.value.cluster_id,namespace:a.metadata.namespace,podName:a.metadata.name})})(Ae.value))},Ge=c(),Le=a(""),Re=async()=>{Be.value=!1,Le.value="devops/username="+Ge.userInfo.userName,await Oe("default",Le.value)};return(e,a)=>{const r=h,c=w,f=b,y=g,x=m,V=k,C=_,S=j;return t(),l("div",null,[o("div",Q,[s(V,{ref:"searchForm",inline:!0,model:J.value},{default:i((()=>[s(f,{label:"集群"},{default:i((()=>[s(c,{modelValue:J.value.cluster_id,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value.cluster_id=e),placeholder:"请选择集群",style:{width:"200px"},onChange:ke},{default:i((()=>[(t(!0),l(v,null,p(K.value,(e=>(t(),u(r,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(f,{label:"名称"},{default:i((()=>[s(y,{modelValue:J.value.keywords,"onUpdate:modelValue":a[1]||(a[1]=e=>J.value.keywords=e),placeholder:"名称"},null,8,["modelValue"])])),_:1}),s(f,null,{default:i((()=>[s(x,{size:"small",type:"primary",icon:"search",onClick:ve},{default:i((()=>a[8]||(a[8]=[d("查询")]))),_:1}),s(x,{size:"small",icon:"refresh",onClick:ce},{default:i((()=>a[9]||(a[9]=[d("重置")]))),_:1})])),_:1}),s(f,null,{default:i((()=>[s(x,{size:"small",type:"primary",icon:"Cloudy",onClick:Ie},{default:i((()=>a[10]||(a[10]=[d("CloudShell")]))),_:1})])),_:1})])),_:1},8,["model"])]),o("div",Z,[q.value?(t(),l("div",$,[s(P,{"table-data":q.value,onUpdate:_e,onDelete:we,onSchedule:Ce,onDrain:xe,onDetail:Ne,onYaml:Te,onMonitor:Fe,onShell:Me},null,8,["table-data"])])):n("",!0)]),o("div",ee,[s(C,{"current-page":R.value,"page-size":Y.value,"page-sizes":[10,30,50,100],total:W.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:fe,onSizeChange:pe},null,8,["current-page","page-size","total"])]),ge.value?(t(),l("div",ae,[s(S,{modelValue:ge.value,"onUpdate:modelValue":a[2]||(a[2]=e=>ge.value=e),width:"40%",title:H.value,"show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:i((()=>[o("div",te,[s(D,{form:T.value,optype:je.value,onClose:he,onEnter:be},null,8,["form","optype"])])])),_:1},8,["modelValue","title"])])):n("",!0),Se.value?(t(),l("div",le,[s(S,{modelValue:Se.value,"onUpdate:modelValue":a[3]||(a[3]=e=>Se.value=e),width:"70%",title:H.value},{default:i((()=>[s(M,{form:T.value},null,8,["form"])])),_:1},8,["modelValue","title"])])):n("",!0),Ue.value?(t(),l("div",se,[s(S,{modelValue:Ue.value,"onUpdate:modelValue":a[4]||(a[4]=e=>Ue.value=e),width:"60%",title:H.value},{default:i((()=>[o("div",oe,[s(O,{data:T.value,onClose:he,onEnter:ze},null,8,["data"])])])),_:1},8,["modelValue","title"])])):n("",!0),Ee.value?(t(),l("div",ie,[s(S,{ref:"monitor",modelValue:Ee.value,"onUpdate:modelValue":a[5]||(a[5]=e=>Ee.value=e),width:"60%",title:H.value},{default:i((()=>[o("div",ue,[s(A,{data:T.value,onClose:he},null,8,["data"])])])),_:1},8,["modelValue","title"])])):n("",!0),Pe.value?(t(),l("div",de,[s(S,{modelValue:Pe.value,"onUpdate:modelValue":a[6]||(a[6]=e=>Pe.value=e),width:"70%",title:H.value,center:!0},{default:i((()=>[o("div",ne,[s(G,{onClose:he})])])),_:1},8,["modelValue","title"])])):n("",!0),Be.value?(t(),l("div",me,[s(S,{modelValue:Be.value,"onUpdate:modelValue":a[7]||(a[7]=e=>Be.value=e),width:"70%",title:H.value,center:!0,onClose:Re},{default:i((()=>[o("div",re,[s(X,{node_name:De.value},null,8,["node_name"])])])),_:1},8,["modelValue","title"])])):n("",!0)])}}});export{ve as default};