/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a,o as t,h as l,w as r,b as o,t as s,e as n,c as u,F as i,v as d,g as p,O as m,k as c,E as f}from"./index.ABWJOL2Q.js";/* empty css             *//* empty css               *//* empty css              */import{a as v,E as b}from"./form-item.ujPiwBAF.js";/* empty css            */import{E as j,a as g}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               */import{E as y}from"./divider.CphDijCu.js";import"./castArray.9wqFpW2Z.js";import"./_baseClone.gl1e0kmI.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";const _={class:"static-content-item"},h={class:"static-content-item"},V={class:"input-container"},I={class:"static-content-item"},x={class:"grid-content bg-purple-light"},q={style:{float:"right","margin-top":"10px"}},k={name:"CreateHost"},w=e(Object.assign(k,{props:{form:{default:function(){return{}},type:Object},dataInfo:{default:function(){return{}},type:Object},data:{default:function(){return{}},type:Object},cluster:{default:function(){return 0},type:Number},type:{default:function(){return 0},type:String},title:{default:function(){return 0},type:String},readOnly:{default:function(){return!1},type:Boolean},operation:{default:function(){return 0},type:String}},emits:["close","enter"],setup(e,{emit:k}){const w=k,H=e,O={project:[{required:!0,message:"字段值不可为空"}],name:[{required:!0,message:"字段值不可为空"}],serverHost:[{required:!0,message:"字段值不可为空"}],username:[{required:!0,message:"字段值不可为空"}],port:[{required:!0,message:"字段值不可为空"}],password:[{required:!0,message:"字段值不可为空"}]},U=a(H.data.map((e=>({label:e.name,value:e.ID}))));a(null),a([]),a(!1),a(!1);const C=a({});null!=H.dataInfo&&(C.value.name=H.dataInfo.name,C.value.id=H.dataInfo.ID,C.value.project=H.dataInfo.project,C.value.projectId=H.dataInfo.project,C.value.serverHost=H.dataInfo.serverHost,C.value.port=H.dataInfo.port,C.value.username=H.dataInfo.username,C.value.note=H.dataInfo.note,C.value.password=H.dataInfo.password);const z=a(null),E=()=>{z.value.resetFields(),w("close")},S=async()=>{await z.value.validate()&&w("enter",C.value)};return(a,k)=>{const w=y,H=j,F=g,A=v,B=c,D=f,N=b;return t(),l(N,{model:C.value,ref_key:"FormBlock",ref:z,rules:O,"label-position":"left","label-width":"150px",size:"medium",onSubmit:k[6]||(k[6]=m((()=>{}),["prevent"])),class:"form-container"},{default:r((()=>[o("div",_,[o("div",null,s(e.title),1)]),o("div",h,[n(w,{direction:"horizontal",style:{"margin-bottom":"10px"}})]),n(A,{label:"项目组:",prop:"project",class:"required label-right-align"},{default:r((()=>[n(F,{modelValue:C.value.project,"onUpdate:modelValue":k[0]||(k[0]=e=>C.value.project=e),class:"short-input",clearable:""},{default:r((()=>[(t(!0),u(i,null,d(U.value,((e,a)=>(t(),l(H,{key:a,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(A,{label:"主机名称:",prop:"name",class:"required label-right-align"},{default:r((()=>[n(B,{modelValue:C.value.name,"onUpdate:modelValue":k[1]||(k[1]=e=>C.value.name=e),type:"text",placeholder:"请输入主机名称",clearable:"",class:"short-input"},null,8,["modelValue"])])),_:1}),o("div",V,[n(A,{label:"连接地址:",prop:"username",class:"input-item"},{default:r((()=>[n(B,{modelValue:C.value.username,"onUpdate:modelValue":k[2]||(k[2]=e=>C.value.username=e),type:"text",placeholder:"用户名",clearable:""},{prepend:r((()=>k[7]||(k[7]=[p("用户名")]))),_:1},8,["modelValue"])])),_:1}),n(A,{label:"",prop:"serverHost",class:"input-item"},{default:r((()=>[n(B,{modelValue:C.value.serverHost,"onUpdate:modelValue":k[3]||(k[3]=e=>C.value.serverHost=e),type:"text",placeholder:"主机名",clearable:""},{prepend:r((()=>k[8]||(k[8]=[p("地址")]))),_:1},8,["modelValue"])])),_:1}),n(A,{label:"",prop:"port",class:"input-item"},{default:r((()=>[n(B,{modelValue:C.value.port,"onUpdate:modelValue":k[4]||(k[4]=e=>C.value.port=e),type:"text",placeholder:"端口",clearable:""},{prepend:r((()=>k[9]||(k[9]=[p("端口")]))),_:1},8,["modelValue"])])),_:1})]),n(A,{label:"备注信息",prop:"note",class:"label-right-align"},{default:r((()=>[n(B,{type:"textarea",modelValue:C.value.note,"onUpdate:modelValue":k[5]||(k[5]=e=>C.value.note=e),placeholder:"请输入主机备注信息",rows:"3",class:"short-input"},null,8,["modelValue"])])),_:1}),o("div",I,[n(w,{direction:"horizontal"})]),o("div",x,[o("div",q,[n(D,{size:"small",onClick:E},{default:r((()=>k[10]||(k[10]=[p("取 消")]))),_:1}),n(D,{size:"small",type:"primary",onClick:S},{default:r((()=>k[11]||(k[11]=[p("确 定")]))),_:1})])])])),_:1},8,["model"])}}}),[["__scopeId","data-v-ed9c0f8f"]]);export{w as default};