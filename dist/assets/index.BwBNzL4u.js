/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,r as l,o as t,c as o,e as s,b as m,w as d,g as i,i as u,k as r,E as n}from"./index.ABWJOL2Q.js";/* empty css             *//* empty css               */import{a as c,E as p}from"./form-item.ujPiwBAF.js";/* empty css              */import{_ as b}from"./warningBar.BzThqhMC.js";import"./castArray.9wqFpW2Z.js";import"./_baseClone.gl1e0kmI.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";const f=a=>e({url:"/email/emailTest",method:"post",data:a}),j={class:"dycloud-form-box"},_=Object.assign({name:"Email"},{__name:"index",setup(e){const _=a(null),y=l({to:"",subject:"",body:""}),V=async()=>{0===(await f()).code&&u.success("发送成功")},x=async()=>{0===(await f()).code&&u.success("发送成功,请查收")};return(e,a)=>{const l=r,u=c,f=n,w=p;return t(),o("div",null,[s(b,{title:"需要提前配置email配置文件，为防止不必要的垃圾邮件，在线体验功能不开放此功能体验。"}),m("div",j,[s(w,{ref_key:"emailForm",ref:_,"label-position":"right","label-width":"80px",model:y},{default:d((()=>[s(u,{label:"目标邮箱"},{default:d((()=>[s(l,{modelValue:y.to,"onUpdate:modelValue":a[0]||(a[0]=e=>y.to=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件"},{default:d((()=>[s(l,{modelValue:y.subject,"onUpdate:modelValue":a[1]||(a[1]=e=>y.subject=e)},null,8,["modelValue"])])),_:1}),s(u,{label:"邮件内容"},{default:d((()=>[s(l,{modelValue:y.body,"onUpdate:modelValue":a[2]||(a[2]=e=>y.body=e),type:"textarea"},null,8,["modelValue"])])),_:1}),s(u,null,{default:d((()=>[s(f,{onClick:V},{default:d((()=>a[3]||(a[3]=[i("发送测试邮件")]))),_:1}),s(f,{onClick:x},{default:d((()=>a[4]||(a[4]=[i("发送邮件")]))),_:1})])),_:1})])),_:1},8,["model"])])])}}});export{_ as default};