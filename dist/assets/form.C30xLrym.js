/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,o as a,c as l,e as t,w as r,h as s,f as o,b as m,g as u,E as n}from"./index.ABWJOL2Q.js";import{E as i}from"./card.RgDT494R.js";/* empty css               *//* empty css             */import{E as p,a as d}from"./tab-pane.fs024GHS.js";import{E as f,a as c}from"./col.BzMVCOvM.js";/* empty css            */import{E as v,a as y}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               */import{a as b,E as j}from"./form-item.ujPiwBAF.js";import{_}from"./index.B0d1JK95.js";import{_ as x,a as k}from"./key-value.C1obDZCo.js";import{_ as g,a as E,b as V,c as N}from"./service-ip-addresses.ByBXmRy7.js";import"./strings.C2tuonvC.js";import"./index.C5gbd99D.js";import"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./castArray.9wqFpW2Z.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";/* empty css                    *//* empty css              *//* empty css                       */import"./checkbox.BcMUmSPv.js";/* empty css              */import"./index.DINKPDpR.js";import"./namespaces.DIn9v7pI.js";const h={class:"grid-content bg-purple-light"},P={style:{float:"right","margin-top":"10px"}},C={name:"FormBlock"},w=Object.assign(C,{props:{form:{default:function(){return{}},type:Object},cluster:{default:function(){return 0},type:Number},readonly:{default:function(){return!1},type:Boolean}},emits:["close","enter"],setup(C,{emit:w}){const I=w,S=C,U=e("ServicePorts"),A=e=>{"Headless"===e?(B.value.spec.type="ClusterIP",B.value.spec.clusterIP="None"):B.value.spec.type=e,U.value="ExternalName"===e?"ExternalName":"ServicePorts"},B=e({}),q=e({}),O=e("ClusterIP"),z=e({"metadata.name":[{required:!0,message:"请输入名称",trigger:"blur"}],"metadata.namespace":[{required:!0,message:"请选择命名空间",trigger:"blur"}]}),F=e(!1);B.value=S.form,S.form.spec.type&&(O.value=S.form.spec.type),A(O.value),q.value=S.cluster,F.value=S.readonly;const H=async e=>{B.value.metadata&&(B.value.metadata.namespace=e)},L=e(null),K=()=>{L.value.resetFields(),I("close")},R=e(null),T=e(null),W=e(null),D=e(null),G=async()=>{B.value&&("ExternalName"!==O.value&&(await R.value.transformationformat(B.value),await T.value.transformationformat(B.value,"selector")),await W.value.transformationformat(B.value,"labels"),await D.value.transformationformat(B.value,"annotations")),I("enter",B.value)},J=e=>{U.value=e.name};return(e,C)=>{const w=b,I=f,S=v,M=y,Q=c,X=p,Y=d,Z=j,$=n,ee=i;return a(),l("div",null,[t(ee,{class:"el-card"},{default:r((()=>[t(Z,{ref_key:"FormBlock",ref:L,model:B.value,rules:z.value,"label-width":"100px"},{default:r((()=>[t(Q,{gutter:24},{default:r((()=>[t(I,{span:8},{default:r((()=>[t(w,{label:"名称",prop:"metadata.name"},{default:r((()=>[F.value?(a(),s(_,{key:0,modelValue:B.value.metadata.name,"onUpdate:modelValue":C[0]||(C[0]=e=>B.value.metadata.name=e),style:{width:"100%"},disabled:"","item-type":"input"},null,8,["modelValue"])):(a(),s(_,{key:1,modelValue:B.value.metadata.name,"onUpdate:modelValue":C[1]||(C[1]=e=>B.value.metadata.name=e),placeholder:"请输入名称","item-type":"input",style:{width:"100%"}},null,8,["modelValue"]))])),_:1})])),_:1}),t(I,{span:8},{default:r((()=>[t(w,{label:"命名空间",required:"",prop:"metadata.namespace"},{default:r((()=>[F.value?(a(),s(_,{key:0,modelValue:B.value.metadata.namespace,"onUpdate:modelValue":C[2]||(C[2]=e=>B.value.metadata.namespace=e),style:{width:"100%"},disabled:"","item-type":"select2"},null,8,["modelValue"])):(a(),s(x,{key:1,cluster:q.value,namespace:B.value.metadata.namespace,onEnter:H},null,8,["cluster","namespace"]))])),_:1})])),_:1}),t(I,{span:8},{default:r((()=>[t(w,{label:"类型"},{default:r((()=>[t(M,{modelValue:O.value,"onUpdate:modelValue":C[3]||(C[3]=e=>O.value=e),onChange:A},{default:r((()=>[t(S,{label:"Cluster IP",value:"ClusterIP"}),t(S,{label:"Headless",value:"Headless"}),t(S,{label:"External Name",value:"ExternalName"}),t(S,{label:"Load Balancer",value:"LoadBalancer"}),t(S,{label:"Node Port",value:"NodePort"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),t(I,{span:24},{default:r((()=>[t(Y,{ref:"tabs",modelValue:U.value,"onUpdate:modelValue":C[4]||(C[4]=e=>U.value=e),"tab-position":"top",type:"border-card",onTabClick:J},{default:r((()=>["ExternalName"===B.value.spec.type?(a(),s(X,{key:0,name:"ExternalName",label:"External Name"},{default:r((()=>[t(g,{form:B.value.spec},null,8,["form"])])),_:1})):o("",!0),"ExternalName"!==B.value.spec.type?(a(),s(X,{key:1,name:"ServicePorts",label:"端口"},{default:r((()=>[t(E,{ref_key:"serviceports",ref:R,type:O.value,form:B.value.spec},null,8,["type","form"])])),_:1})):o("",!0),"ExternalName"!==B.value.spec.type?(a(),s(X,{key:2,name:"Selectors",label:"选择器"},{default:r((()=>[t(k,{ref_key:"selector",ref:T,title:"选择器",form:B.value.spec.selector},null,8,["form"])])),_:1})):o("",!0),"ExternalName"!==B.value.spec.type?(a(),s(X,{key:3,name:"SessionAffinity",label:"Session Affinity"},{default:r((()=>[t(V,{form:B.value.spec},null,8,["form"])])),_:1})):o("",!0),t(X,{name:"IPAddresses",label:"IP地址"},{default:r((()=>[t(N,{type:O.value,form:B.value.spec},null,8,["type","form"])])),_:1}),t(X,{name:"Labels",label:"标签/注解"},{default:r((()=>[t(k,{ref_key:"labels",ref:W,title:"标签",form:B.value.metadata.labels},null,8,["form"]),t(k,{ref_key:"annotations",ref:D,title:"注解",form:B.value.metadata.annotations},null,8,["form"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"]),m("div",h,[m("div",P,[t($,{size:"small",onClick:K},{default:r((()=>C[5]||(C[5]=[u("取 消")]))),_:1}),t($,{size:"small",type:"primary",onClick:G},{default:r((()=>C[6]||(C[6]=[u("确 定")]))),_:1})])])])),_:1})])}}});export{w as default};