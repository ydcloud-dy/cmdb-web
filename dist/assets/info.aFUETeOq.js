/*! 
 Build based on  
 Time : 1735190558000 */
import{M as e,u as a,a as l,r as t,o as s,c as o,b as r,e as u,w as i,F as m,v as n,h as p,g as d,i as c,k as j,E as f}from"./index.ABWJOL2Q.js";/* empty css             *//* empty css               *//* empty css            */import{E as v,a as b}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               */import{a as y,E as _}from"./form-item.ujPiwBAF.js";/* empty css              */import{_ as h,a as g,g as V,f as k,c as w,u as x}from"./rich-edit.B-XA77E4.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./castArray.9wqFpW2Z.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./upload.-Ej7EZzx.js";import"./progress.KCbgDfe_.js";import"./cloneDeep.BwH6oqGn.js";import"./image.CN53lrx2.js";const I={class:"dycloud-form-box"},D=Object.assign({name:"InfoForm"},{__name:"info",setup(D){const U=e(),C=a(),E=l(""),q=l({title:"",content:"",userID:void 0,attachments:[]}),F=t({}),A=l(),O=l([]);(async()=>{const e=await V();0===e.code&&(O.value=e.data)})();(async()=>{if(U.query.id){const e=await k({ID:U.query.id});0===e.code&&(q.value=e.data,E.value="update")}else E.value="create"})();const M=async()=>{var e;null==(e=A.value)||e.validate((async e=>{if(!e)return;let a;switch(E.value){case"create":default:a=await w(q.value);break;case"update":a=await x(q.value)}0===a.code&&c({type:"success",message:"创建/更改成功"})}))},R=()=>{C.go(-1)};return(e,a)=>{const l=j,t=y,c=v,V=b,k=f,w=_;return s(),o("div",null,[r("div",I,[u(w,{model:q.value,ref_key:"elFormRef",ref:A,"label-position":"right",rules:F,"label-width":"80px"},{default:i((()=>[u(t,{label:"标题:",prop:"title"},{default:i((()=>[u(l,{modelValue:q.value.title,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.title=e),clearable:!0,placeholder:"请输入标题"},null,8,["modelValue"])])),_:1}),u(t,{label:"内容:",prop:"content"},{default:i((()=>[u(h,{modelValue:q.value.content,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.content=e)},null,8,["modelValue"])])),_:1}),u(t,{label:"作者:",prop:"userID"},{default:i((()=>[u(V,{modelValue:q.value.userID,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.userID=e),placeholder:"请选择作者",style:{width:"100%"},clearable:!0},{default:i((()=>[(s(!0),o(m,null,n(O.value.userID,((e,a)=>(s(),p(c,{key:a,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),u(t,{label:"附件:",prop:"attachments"},{default:i((()=>[u(g,{modelValue:q.value.attachments,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.attachments=e)},null,8,["modelValue"])])),_:1}),u(t,null,{default:i((()=>[u(k,{type:"primary",onClick:M},{default:i((()=>a[4]||(a[4]=[d("保存")]))),_:1}),u(k,{type:"primary",onClick:R},{default:i((()=>a[5]||(a[5]=[d("返回")]))),_:1})])),_:1})])),_:1},8,["model","rules"])])])}}});export{D as default};