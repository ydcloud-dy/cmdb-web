/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a as l,N as a,q as o,o as u,c as r,e as t,w as i,F as d,v as m,h as p,f as n,b as s,g as f,k as v,E as _}from"./index.ABWJOL2Q.js";/* empty css               *//* empty css             *//* empty css              */import{a as c,E as g}from"./form-item.ujPiwBAF.js";/* empty css            */import{E as b,a as h}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               */import{g as j}from"./codeSource.zRy1fTFq.js";import{G as k}from"./applications.GrMV9Sfs.js";import{g as V}from"./buildEnv.vyGXBGni.js";import"./castArray.9wqFpW2Z.js";import"./_baseClone.gl1e0kmI.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";const y={style:{overflow:"hidden",width:"100%","max-width":"600px","margin-left":"20px"}},D={class:"dialog-footer",align:"right"},I=e({__name:"form",props:{form:{type:Object,default:()=>({})}},emits:["close","enter"],setup(e,{emit:I}){const x=e,q=I,w=l(x.form);a((()=>{w.value={...x.form}}));const U=l([]),C=l([]),E=l([]);o((async()=>{x.form.build_path||(x.form.build_path="/"),x.form.dockerfile||(x.form.dockerfile="Dockerfile");const e=await j({page:1,pageSize:1e3});if(0===e.code){U.value=e.data.list;const l=U.value.find((e=>e.ID===w.value.repo_id));l&&(w.value.repo_id=l.ID)}const l=await V({page:1,pageSize:1e3});0===l.code&&(E.value=l.data.list)}));const z=async()=>{if(w.value.repo_id)try{const e=await k({id:w.value.repo_id});0===e.code&&(C.value=e.data.map((e=>({full_name:e.full_name,path:e.path})))),w.value.full_name="",w.value.name=""}catch(e){}},G=()=>{const e=w.value.full_name;e&&(w.value.name=e.split("/").pop())},J=l({repo_id:[{required:!0,message:"请选择代码源",trigger:"change"}],full_name:[{required:!0,message:"请选择/输入仓库路径",trigger:"change"}],name:[{required:!0,message:"请输入应用名",trigger:"blur"}],language:[{required:!0,message:"请选择语言类型",trigger:"change"}],build_path:[{required:!1}],dockerfile:[{required:!1}],compile_env_id:[{required:!1}]}),N=()=>{q("close")},S=()=>{A.value.validate((e=>{if(e){const e=C.value.find((e=>e.full_name===w.value.full_name)),l=E.value.find((e=>e.ID===w.value.compile_env_id)),a={ID:w.value.ID,name:w.value.name,full_name:w.value.full_name,language:w.value.language,build_path:w.value.build_path,dockerfile:w.value.dockerfile,repo_id:w.value.repo_id,path:e?e.path:"",compile_env_id:l?l.ID:null};q("enter",a)}}))},A=l(null);return(e,l)=>{const a=b,o=h,j=c,k=v,V=g,I=_;return u(),r("div",y,[t(V,{ref_key:"FormBlock",ref:A,model:w.value,rules:J.value,"label-width":"120px"},{default:i((()=>[t(j,{label:"代码源",prop:"repo_id"},{default:i((()=>[t(o,{modelValue:w.value.repo_id,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value.repo_id=e),placeholder:"请选择代码源",onChange:z},{default:i((()=>[(u(!0),r(d,null,m(U.value,(e=>(u(),p(a,{key:e.ID,label:e.name,value:e.ID},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w.value.repo_id?(u(),p(j,{key:0,label:"仓库路径",prop:"full_name"},{default:i((()=>[t(o,{modelValue:w.value.full_name,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.full_name=e),placeholder:"请选择/输入仓库路径",onChange:G},{default:i((()=>[(u(!0),r(d,null,m(C.value,(e=>(u(),p(a,{key:e.full_name,label:e.full_name,value:e.full_name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})):n("",!0),t(j,{label:"应用名",prop:"name"},{default:i((()=>[t(k,{modelValue:w.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>w.value.name=e),placeholder:"请输入应用名",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(j,{label:"语言类型",prop:"language"},{default:i((()=>[t(o,{modelValue:w.value.language,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value.language=e),placeholder:"请选择语言类型"},{default:i((()=>[t(a,{label:"Java",value:"Java"}),t(a,{label:"Python",value:"Python"}),t(a,{label:"Go",value:"Go"}),t(a,{label:"Node.js",value:"Node"})])),_:1},8,["modelValue"])])),_:1}),t(j,{label:"构建目录",prop:"build_path"},{default:i((()=>[t(k,{modelValue:w.value.build_path,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value.build_path=e),placeholder:"/",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(j,{label:"Dockerfile",prop:"dockerfile"},{default:i((()=>[t(k,{modelValue:w.value.dockerfile,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value.dockerfile=e),placeholder:"Dockerfile",autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(j,{label:"编译环境",prop:"compile_env_id"},{default:i((()=>[t(o,{modelValue:w.value.compile_env_id,"onUpdate:modelValue":l[6]||(l[6]=e=>w.value.compile_env_id=e),placeholder:"请选择编译环境"},{default:i((()=>[(u(!0),r(d,null,m(E.value,(e=>(u(),p(a,{key:e.ID,label:e.name,value:e.ID},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),s("div",D,[t(I,{size:"small",onClick:N},{default:i((()=>l[7]||(l[7]=[f("取消")]))),_:1}),t(I,{size:"small",type:"primary",onClick:S},{default:i((()=>l[8]||(l[8]=[f("确定")]))),_:1})])])}}},[["__scopeId","data-v-0bab645d"]]);export{I as default};
