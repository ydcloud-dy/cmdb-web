/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,q as l,o as a,c as o,b as s,e as t,w as u,F as n,v as d,h as i,g as r,m,t as p,f as v,i as c,E as f,k as b}from"./index.ABWJOL2Q.js";import{E as y}from"./pagination.BfYt3rvk.js";/* empty css            */import{E as V,a as x}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css              */import{E as w,a as g}from"./descriptions-item.C4J2YVui.js";import{E as h}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as _}from"./link.QK3LjIND.js";import{E as j}from"./switch.CqADXIhW.js";/* empty css                    *//* empty css                     */import{E as k,a as C}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css             *//* empty css               */import{a as U,E as z}from"./form-item.ujPiwBAF.js";import{l as S,c as E,d as F,g as I}from"./system.Bh3wKi0g.js";import{g as P}from"./host.9Piocw2G.js";import{E as N}from"./index.DglrVZRl.js";import{b as q,a as A}from"./index.DINKPDpR.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./refs.CZv2DkwS.js";import"./_initCloneObject.jmqS1x-g.js";import"./_baseClone.gl1e0kmI.js";const D={class:"dycloud-form-box"},O={style:{"margin-bottom":"20px",display:"inline-block"}},W={class:"dialog-footer"},H={slot:"footer",class:"dialog-footer"},R={class:"dycloud-pagination"},M={name:"Volume"},K=Object.assign(M,{setup(M){const K=e(1),Q=e(0),T=e(10),X=e=>{T.value=e,L()},Y=e=>{K.value=e,L()},B=e({Containers:0,ContainersRunning:0,ContainersPaused:0,ContainersStopped:0,Images:0,NCPU:0,MemTotal:0,Plugins:{Volume:[],Network:[]}}),G=e({name:""}),J=e([]),L=async()=>{const e=await S(fe.value,{page:K.value,pageSize:T.value,name:G.value.name});0===e.code&&(Q.value=e.data.total,K.value=e.data.page,T.value=e.data.pageSize,J.value=e.data.items)},Z=async()=>{K.value=1,T.value=10,L()},$=e([{label:"NFS4",value:"NFS4"},{label:"NFS",value:"NFS"}]),ee=e([{label:"CIFS v2.1 (Used by Windows 7 / Server 2008 R2)",value:"v2.1"},{label:"CIFS v1.0 (Used by Windows XP / Server 2003 and earlier)",value:"v1.0"},{label:"CIFS v2.0 (Used by Windows Vista / Server 2008)",value:"v2.0"},{label:"CIFS 3.0 (Used by Windows 8 / Server 2012 and newer)",value:"v3.0"}]),le=e({name:"",driver:"local",mountPoint:"",driverOption:[],nfs:{enable:!1,addr:"",device:"",version:"NFS4",option:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"},cifs:{enable:!1,device:"",addr:"",version:"v2.1",username:"",password:""}}),ae=e(!1),oe=async()=>{ae.value=!1},se=async()=>{0===(await E(fe.value,le.value)).code&&(oe(),c({type:"success",message:"创建成功"}),L())},te=e(!1),ue=e({Ids:[]}),ne=async()=>{te.value=!1},de=async()=>{0===(await F(fe.value,ue.value)).code&&(c({type:"success",message:"删除成功"}),ne(),ue.value.Ids=[],L())},ie=e([]),re=e=>{ie.value=e},me=async()=>{const e=[];0!==ie.value.length?(ie.value&&ie.value.map((l=>{e.push(l.name)})),ue.value.Ids=e,te.value=!0):c({type:"warning",message:"请选择要删除的数据"})},pe=e(!1),ve=e({name:"",created:"",mountPoint:"",driver:"",options:{device:"",o:"",type:""}}),ce=e([]),fe=e("host"),be=e=>{fe.value=e,window.localStorage.setItem("currentHost",e),ye()},ye=()=>{(async()=>{const e=await I(fe.value);0===e.code&&(B.value=e.data)})(),L()};return l((()=>{(()=>{const e=window.localStorage.getItem("currentHost");e&&(fe.value=e)})(),(async()=>{ce.value=[];const e=await P({pageSize:1e4});if(0===e.code)for(let l=0;l<e.data.list.length;l++)ce.value.push({value:e.data.list[l].name,label:e.data.list[l].name})})(),ye()})),(e,l)=>{const c=V,S=x,E=U,F=f,I=b,P=z,M=k,L=N,ye=C,Ve=q,xe=A,we=j,ge=_,he=h,_e=w,je=g,ke=y;return a(),o("div",D,[s("div",O,[t(P,{inline:!0,model:G.value,onKeyup:l[4]||(l[4]=m((e=>Z(G.value.name)),["native","enter"]))},{default:u((()=>[t(E,{label:"主机:"},{default:u((()=>[t(S,{modelValue:fe.value,"onUpdate:modelValue":l[0]||(l[0]=e=>fe.value=e),onChange:be,placeholder:"请选择主机"},{default:u((()=>[(a(!0),o(n,null,d(ce.value,(e=>(a(),i(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),t(E,null,{default:u((()=>[t(F,{type:"primary",icon:"plus",onClick:l[1]||(l[1]=e=>(async()=>{ae.value=!0})())},{default:u((()=>l[23]||(l[23]=[r("创建存储卷")]))),_:1})])),_:1}),t(E,null,{default:u((()=>[t(F,{icon:"delete",style:{"margin-left":"10px"},disabled:!ie.value.length,onClick:me},{default:u((()=>l[24]||(l[24]=[r("批量删除")]))),_:1},8,["disabled"])])),_:1}),t(E,null,{default:u((()=>[t(I,{modelValue:G.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>G.value.name=e),class:"search-input",placeholder:"输入存储卷名称"},null,8,["modelValue"]),t(F,{style:{"margin-left":"20px"},type:"primary",icon:"search",onClick:l[3]||(l[3]=e=>Z(G.value.name))},{default:u((()=>l[25]||(l[25]=[r("查询 ")]))),_:1})])),_:1})])),_:1},8,["model"])]),t(ye,{data:J.value,style:{color:"#ffffff"},"row-key":"id",onSelectionChange:re},{default:u((()=>[t(M,{type:"selection",width:"55"}),t(M,{label:"存储卷名称",prop:"name"},{default:u((e=>[t(F,{type:"text",onClick:l=>{return a=e.row,pe.value=!0,void(ve.value=a);var a}},{default:u((()=>[r(p(e.row.name),1)])),_:2},1032,["onClick"]),"bridge"===e.row.name||"host"===e.row.name||"none"===e.row.name?(a(),i(L,{key:0,type:"danger","disable-transitions":""},{default:u((()=>l[26]||(l[26]=[r("未使用")]))),_:1})):v("",!0)])),_:1}),t(M,{label:"存储卷驱动",prop:"driver",width:"150px"}),t(M,{label:"挂载点",prop:"mountPoint"}),t(M,{label:"创建时间",sortable:"",prop:"created"}),t(M,{label:"操作"},{default:u((e=>[t(F,{type:"danger",icon:"delete-filled",round:"",onClick:l=>(async e=>{ue.value.Ids=[e.name],te.value=!0})(e.row)},null,8,["onClick"])])),_:1})])),_:1},8,["data"]),t(he,{modelValue:ae.value,"onUpdate:modelValue":l[20]||(l[20]=e=>ae.value=e),title:"创建存储卷",width:"800px","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:u((()=>[s("div",W,[t(F,{onClick:oe},{default:u((()=>l[29]||(l[29]=[r("取 消")]))),_:1}),t(F,{type:"primary",onClick:se},{default:u((()=>l[30]||(l[30]=[r("确 定")]))),_:1})])])),default:u((()=>[t(P,{ref:"addVolumeFrom",rules:e.rules,model:le.value,"label-width":"250px;","label-position":"left"},{default:u((()=>[t(E,{label:"存储卷名称:",prop:"name",rules:[{required:!0,message:"存储卷名称不能为空"}]},{default:u((()=>[t(I,{modelValue:le.value.name,"onUpdate:modelValue":l[5]||(l[5]=e=>le.value.name=e),placeholder:"my volume",style:{width:"240px"}},null,8,["modelValue"])])),_:1}),t(E,{label:"存储卷驱动:",prop:"driver"},{default:u((()=>[t(xe,{modelValue:le.value.driver,"onUpdate:modelValue":l[6]||(l[6]=e=>le.value.driver=e)},{default:u((()=>[(a(!0),o(n,null,d(B.value.Plugins.Volume,(e=>(a(),i(Ve,{label:e},null,8,["label"])))),256))])),_:1},8,["modelValue"])])),_:1}),t(E,{label:"是否开启nfs存储卷:",prop:"ipam"},{default:u((()=>[t(we,{modelValue:le.value.nfs.enable,"onUpdate:modelValue":l[7]||(l[7]=e=>le.value.nfs.enable=e),"active-color":"#13ce66","inactive-color":"#ff4949",onChange:l[8]||(l[8]=e=>{le.value.nfs.enable&&(le.value.cifs={enable:!1,device:"",addr:"",version:"v2.1",username:"",password:""})})},null,8,["modelValue"]),t(ge,{style:{color:"#ED6A0C","margin-left":"20px"},disabled:"true",icon:"question-filled"},{default:u((()=>l[27]||(l[27]=[r(" 注意: 开启nfs存储卷,需要先安装nfs-utils")]))),_:1})])),_:1}),le.value.nfs.enable?(a(),i(E,{key:0,label:"nfs访问地址:",prop:"address"},{default:u((()=>[t(I,{modelValue:le.value.nfs.addr,"onUpdate:modelValue":l[9]||(l[9]=e=>le.value.nfs.addr=e),placeholder:"my.nfs-server.com 或 xxx.xxx.xxx.xxx",style:{width:"300px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),le.value.nfs.enable?(a(),i(E,{key:1,label:"nfs版本:",prop:"version"},{default:u((()=>[t(S,{modelValue:le.value.nfs.version,"onUpdate:modelValue":l[10]||(l[10]=e=>le.value.nfs.version=e),style:{width:"100px"},placeholder:"请选择"},{default:u((()=>[(a(!0),o(n,null,d($.value,(e=>(a(),i(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):v("",!0),le.value.nfs.enable?(a(),i(E,{key:2,label:"nfs挂载点:",prop:"nfsMountPoint"},{default:u((()=>[t(I,{modelValue:le.value.nfs.device,"onUpdate:modelValue":l[11]||(l[11]=e=>le.value.nfs.device=e),placeholder:"/export/share",style:{width:"250px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),le.value.nfs.enable?(a(),i(E,{key:3,label:"nfs挂载参数:",prop:"nfsOption"},{default:u((()=>[t(I,{modelValue:le.value.nfs.args,"onUpdate:modelValue":l[12]||(l[12]=e=>le.value.nfs.args=e),placeholder:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14",style:{width:"400px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),t(E,{label:"是否开启cifs存储卷:",prop:"ipam"},{default:u((()=>[t(we,{modelValue:le.value.cifs.enable,"onUpdate:modelValue":l[13]||(l[13]=e=>le.value.cifs.enable=e),"active-color":"#13ce66","inactive-color":"#ff4949",onChange:l[14]||(l[14]=e=>{le.value.cifs.enable&&(le.value.nfs={enable:!1,addr:"",device:"",version:"NFS4",option:"rw,noatime,rsize=8192,wsize=8192,tcp,timeo=14"})})},null,8,["modelValue"]),t(ge,{style:{color:"#ED6A0C","margin-left":"20px"},disabled:"true",icon:"question-filled"},{default:u((()=>l[28]||(l[28]=[r(" 注意: 开启cifs存储卷,需要先安装cifs-utils")]))),_:1})])),_:1}),le.value.cifs.enable?(a(),i(E,{key:4,label:"cifs访问地址:",prop:"address"},{default:u((()=>[t(I,{modelValue:le.value.cifs.addr,"onUpdate:modelValue":l[15]||(l[15]=e=>le.value.cifs.addr=e),placeholder:"my.nfs-server.com 或 xxx.xxx.xxx.xxx",style:{width:"300px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),le.value.cifs.enable?(a(),i(E,{key:5,label:"cifs版本:",prop:"version"},{default:u((()=>[t(S,{modelValue:le.value.cifs.version,"onUpdate:modelValue":l[16]||(l[16]=e=>le.value.cifs.version=e),style:{width:"500px"},placeholder:"请选择"},{default:u((()=>[(a(!0),o(n,null,d(ee.value,(e=>(a(),i(c,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):v("",!0),le.value.cifs.enable?(a(),i(E,{key:6,label:"cifs共享目录:",prop:"share"},{default:u((()=>[t(I,{modelValue:le.value.cifs.device,"onUpdate:modelValue":l[17]||(l[17]=e=>le.value.cifs.device=e),placeholder:"/export/share",style:{width:"300px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),le.value.cifs.enable?(a(),i(E,{key:7,label:"用户名:",prop:"username"},{default:u((()=>[t(I,{modelValue:le.value.cifs.username,"onUpdate:modelValue":l[18]||(l[18]=e=>le.value.cifs.username=e),placeholder:"your username",style:{width:"300px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0),le.value.cifs.enable?(a(),i(E,{key:8,label:"密码:",prop:"password"},{default:u((()=>[t(I,{modelValue:le.value.cifs.password,"onUpdate:modelValue":l[19]||(l[19]=e=>le.value.cifs.password=e),placeholder:"your password",style:{width:"300px"},size:"small"},null,8,["modelValue"])])),_:1})):v("",!0)])),_:1},8,["rules","model"])])),_:1},8,["modelValue"]),t(he,{modelValue:te.value,"onUpdate:modelValue":l[21]||(l[21]=e=>te.value=e),title:"是否确定删除?",width:"300px","show-close":!1},{default:u((()=>[s("div",H,[t(F,{type:"primary",onClick:de},{default:u((()=>l[31]||(l[31]=[r("是")]))),_:1}),t(F,{onClick:ne},{default:u((()=>l[32]||(l[32]=[r("否")]))),_:1})])])),_:1},8,["modelValue"]),t(he,{modelValue:pe.value,"onUpdate:modelValue":l[22]||(l[22]=e=>pe.value=e),title:"详细信息",width:"1000px"},{default:u((()=>[t(je,{title:"存储卷详细信息",column:2,direction:"vertical",border:""},{default:u((()=>[t(_e,{label:"ID:"},{default:u((()=>[r(p(ve.value.name),1)])),_:1}),t(_e,{label:"创建时间:"},{default:u((()=>[r(p(ve.value.created),1)])),_:1}),t(_e,{label:"挂载路径:"},{default:u((()=>[r(p(ve.value.mountPoint),1)])),_:1}),t(_e,{label:"驱动:"},{default:u((()=>[r(p(ve.value.driver),1)])),_:1})])),_:1}),ve.value.options?(a(),i(je,{key:0,title:"存储卷参数",column:2,direction:"vertical",border:""},{default:u((()=>[t(_e,{label:"type:"},{default:u((()=>[r(p(ve.value.options.type),1)])),_:1}),t(_e,{label:"device:"},{default:u((()=>[r(p(ve.value.options.device),1)])),_:1}),t(_e,{label:"o:"},{default:u((()=>[r(p(ve.value.options.o),1)])),_:1})])),_:1})):v("",!0)])),_:1},8,["modelValue"]),s("div",R,[t(ke,{"current-page":K.value,"page-size":T.value,"page-sizes":[10,30,50,100],total:Q.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:Y,onSizeChange:X},null,8,["current-page","page-size","total"])])])}}});export{K as default};
