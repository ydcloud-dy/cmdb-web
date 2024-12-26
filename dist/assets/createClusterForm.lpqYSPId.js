/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,o as l,c as a,e as u,w as t,g as o,b as r,h as s,f as p,ax as d,k as m,Q as i,E as _}from"./index.ABWJOL2Q.js";/* empty css               *//* empty css             */import{E as n}from"./divider.CphDijCu.js";/* empty css                    *//* empty css              */import{a as f,E as h}from"./form-item.ujPiwBAF.js";/* empty css              */import{E as c,a as v}from"./index.DINKPDpR.js";import"./castArray.9wqFpW2Z.js";import"./_baseClone.gl1e0kmI.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";const b={style:{overflow:"hidden",width:"100%"}},g={key:0},y={class:"input-icon"},k={class:"dialog-footer",align:"right"},V={name:"FormBlock",emits:{close:()=>!0,enter:e=>1===e.length}},j=Object.assign(V,{props:{form:{default:function(){return{}},type:Object}},emits:["close","enter"],setup(V,{emit:j}){const U=j,w=V,x=e({name:[{required:!0,message:"请输入名称",trigger:"blur"}],kube_type:[{required:!0,message:"请输选择凭据类型",trigger:"blur"}],kube_config:[{required:!0,message:"请输入集群凭据",trigger:"blur"}],api_address:[{required:!0,message:"请输入Master接口地址",trigger:"blur"}],prometheus_auth_type:[{required:!0,message:"请选择认证类型",trigger:"blur"}],prometheus_user:[{required:!0,message:"请输入用户名",trigger:"blur"}],prometheus_pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]}),C=e({}),q=e(!1);C.value=w.form,2===C.value.prometheus_auth_type&&(q.value=!0),C.value.prometheus_auth_type||(C.value.prometheus_auth_type=1),C.value.kube_type||(C.value.kube_type=1);const A=()=>{E.value.resetFields(),U("close")},E=e(null),B=async()=>{E.value.validate((async e=>{e&&U("enter",C.value)}))},F=e=>{2===e&&(q.value=!0)},O=e("lock"),z=()=>{O.value="lock"===O.value?"unlock":"lock"};return e("lock"),(e,V)=>{const j=m,U=f,w=c,M=v,P=n,K=i,Q=h,R=_;return l(),a("div",b,[u(Q,{ref_key:"FormBlock",ref:E,model:C.value,rules:x.value,"label-width":"100px"},{default:t((()=>[u(U,{label:"名称",prop:"name"},{default:t((()=>[u(j,{modelValue:C.value.name,"onUpdate:modelValue":V[0]||(V[0]=e=>C.value.name=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(U,{label:"凭据类型",prop:"kube_type"},{default:t((()=>[u(M,{modelValue:C.value.kube_type,"onUpdate:modelValue":V[1]||(V[1]=e=>C.value.kube_type=e)},{default:t((()=>[u(w,{label:1},{default:t((()=>V[8]||(V[8]=[o("KubeConfig")]))),_:1}),u(w,{label:2},{default:t((()=>V[9]||(V[9]=[o("Token")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),u(U,{label:"集群凭证",prop:"kubeconfig"},{default:t((()=>[u(j,{modelValue:C.value.kube_config,"onUpdate:modelValue":V[2]||(V[2]=e=>C.value.kube_config=e),autocomplete:"off",type:"textarea"},null,8,["modelValue"])])),_:1}),u(U,{label:"接口地址",prop:"api_address"},{default:t((()=>[u(j,{modelValue:C.value.api_address,"onUpdate:modelValue":V[3]||(V[3]=e=>C.value.api_address=e),autocomplete:"off",placeholder:"请输入Master APi 地址, 例如: https://127.0.0.1:6443"},null,8,["modelValue"])])),_:1}),u(P,null,{default:t((()=>V[10]||(V[10]=[r("span",null,"Prometheus监控",-1)]))),_:1}),u(U,{label:"监控地址",prop:"prometheus_url"},{default:t((()=>[u(j,{modelValue:C.value.prometheus_url,"onUpdate:modelValue":V[4]||(V[4]=e=>C.value.prometheus_url=e),autocomplete:"off",placeholder:"请输入普罗米修斯监控地址, 例如: http://127.0.0.1:9090"},null,8,["modelValue"])])),_:1}),u(U,{label:"认证类型",prop:"prometheus_auth_type"},{default:t((()=>[u(M,{modelValue:C.value.prometheus_auth_type,"onUpdate:modelValue":V[5]||(V[5]=e=>C.value.prometheus_auth_type=e),onChange:F},{default:t((()=>[u(w,{label:1},{default:t((()=>V[11]||(V[11]=[o("无")]))),_:1}),u(w,{label:2},{default:t((()=>V[12]||(V[12]=[o("BaseAuth")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),q.value?(l(),a("div",g,[2===C.value.prometheus_auth_type?(l(),s(U,{key:0,label:"用户名",prop:"prometheus_user"},{default:t((()=>[u(j,{modelValue:C.value.prometheus_user,"onUpdate:modelValue":V[6]||(V[6]=e=>C.value.prometheus_user=e),autocomplete:"off",placeholder:"请输入普罗米修斯认证用户"},null,8,["modelValue"])])),_:1})):p("",!0),2===C.value.prometheus_auth_type?(l(),s(U,{key:1,label:"密码",prop:"prometheus_pwd"},{default:t((()=>[u(j,{modelValue:C.value.prometheus_pwd,"onUpdate:modelValue":V[7]||(V[7]=e=>C.value.prometheus_pwd=e),type:"lock"===O.value?"password":"text",placeholder:"请输入普罗米修斯认证密码"},{suffix:t((()=>[r("span",y,[u(K,null,{default:t((()=>[(l(),s(d(O.value),{onClick:z}))])),_:1})])])),_:1},8,["modelValue","type"])])),_:1})):p("",!0)])):p("",!0)])),_:1},8,["model","rules"]),r("div",k,[u(R,{size:"small",onClick:A},{default:t((()=>V[13]||(V[13]=[o("取 消")]))),_:1}),u(R,{size:"small",type:"primary",onClick:B},{default:t((()=>V[14]||(V[14]=[o("确 定")]))),_:1})])])}}});export{j as default};