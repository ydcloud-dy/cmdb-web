/*! 
 Build based on  
 Time : 1735190558000 */
import{a as e,o as l,c as a,e as t,w as o,b as n,k as s,f as u,F as d,v as r,g as i,E as p,t as c}from"./index.ABWJOL2Q.js";import{E as m}from"./card.RgDT494R.js";import{E as f,a as v}from"./col.BzMVCOvM.js";/* empty css              *//* empty css               *//* empty css            */import{E as y,a as h}from"./select.C2tLDQ30.js";import"./scrollbar.3ySweVnY.js";/* empty css               *//* empty css                    *//* empty css              */import{E as g,a as P}from"./index.DINKPDpR.js";const V={style:{"margin-top":"20px"}},b={name:"ServiceExternalName"},x=Object.assign(b,{props:{form:{default:function(){return{}},type:Object}},setup(u){const d=u,r=e("");return r.value=d.form,r.value.externalName||(r.value.externalName=""),(e,u)=>{const d=s,i=f,p=v,c=m;return l(),a("div",V,[t(c,{class:"box-card",shadow:"hover"},{header:o((()=>u[1]||(u[1]=[n("div",{class:"card-header"},[n("span",null,"External Name")],-1)]))),default:o((()=>[t(p,null,{default:o((()=>[t(i,{span:12},{default:o((()=>[t(d,{modelValue:r.value.externalName,"onUpdate:modelValue":u[0]||(u[0]=e=>r.value.externalName=e),placeholder:"e.g. www.example.com"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])}}}),_={style:{"margin-top":"20px"}},I={style:{width:"100%",padding:"0"},class:"tab-table"},C={key:0,scope:"col",width:"20%",align:"left"},j={key:0},U={align:"left"},k={name:"ServicePorts"},w=Object.assign(k,{props:{form:{default:function(){return{}},type:Object},type:{default:function(){return{}},type:String}},setup(c,{expose:g}){const P=c,V=e(""),b=e(""),x=e([]);V.value=P.form,b.value=P.value,V.value.ports&&(x.value=V.value.ports);const k=()=>{x.value.push({name:"",port:"",protocol:"TCP",targetPort:""})};return g({transformationformat:async e=>{(e=>{e.spec&&(e.spec.ports=x.value)})(e)}}),(e,c)=>{const g=s,P=y,V=h,w=p,S=f,A=v,N=m;return l(),a("div",_,[t(N,{class:"box-card",shadow:"hover"},{header:o((()=>c[0]||(c[0]=[n("div",{class:"card-header"},[n("span",null,"端口")],-1)]))),default:o((()=>[t(A,null,{default:o((()=>[t(S,{span:24},{default:o((()=>[n("table",I,[n("tr",null,[c[2]||(c[2]=n("th",{scope:"col",width:"20%",align:"left"},[n("label",null,"端口名称")],-1)),c[3]||(c[3]=n("th",{scope:"col",width:"20%",align:"left"},[n("label",null,"监听端口")],-1)),c[4]||(c[4]=n("th",{scope:"col",width:"10%",align:"left"},[n("label",null,"协议")],-1)),c[5]||(c[5]=n("th",{scope:"col",width:"20%",align:"left"},[n("label",null,"目标端口")],-1)),"NodePort"===b.value?(l(),a("th",C,c[1]||(c[1]=[n("label",null,null,-1)]))):u("",!0),c[6]||(c[6]=n("th",null,null,-1))]),(l(!0),a(d,null,r(x.value,((e,s)=>(l(),a("tr",{key:s},[n("td",null,[t(g,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l},null,8,["modelValue","onUpdate:modelValue"])]),n("td",null,[t(g,{modelValue:e.port,"onUpdate:modelValue":l=>e.port=l,modelModifiers:{number:!0},placeholder:"80"},null,8,["modelValue","onUpdate:modelValue"])]),n("td",null,[t(V,{modelValue:e.protocol,"onUpdate:modelValue":l=>e.protocol=l,style:{width:"100%"}},{default:o((()=>[t(P,{label:"TCP",value:"TCP"}),t(P,{label:"UDP",value:"UDP"})])),_:2},1032,["modelValue","onUpdate:modelValue"])]),n("td",null,[t(g,{modelValue:e.targetPort,"onUpdate:modelValue":l=>e.targetPort=l,modelModifiers:{number:!0},placeholder:"80"},null,8,["modelValue","onUpdate:modelValue"])]),"NodePort"===b.value?(l(),a("th",j,[t(g,{modelValue:e.nodePort,"onUpdate:modelValue":l=>e.nodePort=l,modelModifiers:{number:!0},placeholder:"30001"},null,8,["modelValue","onUpdate:modelValue"])])):u("",!0),n("td",null,[t(w,{type:"danger",link:"",icon:"delete",size:"small",onClick:e=>(e=>{x.value.splice(e,1)})(s)},{default:o((()=>c[7]||(c[7]=[i("删除 ")]))),_:2},1032,["onClick"])])])))),128)),n("tr",null,[n("td",U,[t(w,{size:"small",type:"primary",link:"",icon:"plus",onClick:k},{default:o((()=>c[8]||(c[8]=[i("添加")]))),_:1})])])])])),_:1})])),_:1})])),_:1})])}}}),S={style:{"margin-top":"20px"}},A={style:{width:"100%"}},N={style:{width:"100%"}},O={key:0},E={name:"ServiceSessionAffinity"},z=Object.assign(E,{props:{form:{default:function(){return{}},type:Object}},setup(d){const r=d,p=e([]);p.value=r.form,p.value.sessionAffinityConfig||(p.value.sessionAffinity="None",p.value.sessionAffinityConfig={clientIP:{}});return(e,d)=>{const r=g,c=P,y=f,h=s,V=v,b=m;return l(),a("div",S,[t(b,{class:"box-card",shadow:"hover"},{header:o((()=>d[3]||(d[3]=[n("div",{class:"card-header"},[n("span",null,"Session Affinity")],-1)]))),default:o((()=>[t(V,{gutter:20},{default:o((()=>[t(y,{span:12},{default:o((()=>[t(c,{modelValue:p.value.sessionAffinity,"onUpdate:modelValue":d[0]||(d[0]=e=>p.value.sessionAffinity=e),onChange:d[1]||(d[1]=e=>{"ClientIP"===p.value.sessionAffinity?p.value.sessionAffinityConfig.clientIP.timeoutSeconds=10800:delete p.value.sessionAffinityConfig.clientIP.timeoutSeconds})},{default:o((()=>[n("div",A,[t(r,{label:"None"},{default:o((()=>d[4]||(d[4]=[i("None")]))),_:1})]),n("div",N,[t(r,{label:"ClientIP"},{default:o((()=>d[5]||(d[5]=[i("Client IP")]))),_:1})])])),_:1},8,["modelValue"])])),_:1}),"ClientIP"===p.value.sessionAffinity?(l(),a("div",O,[t(y,{span:24},{default:o((()=>[d[7]||(d[7]=n("div",null,"Session Sticky Time",-1)),t(h,{modelValue:p.value.sessionAffinityConfig.clientIP.timeoutSeconds,"onUpdate:modelValue":d[2]||(d[2]=e=>p.value.sessionAffinityConfig.clientIP.timeoutSeconds=e),modelModifiers:{number:!0}},{default:o((()=>d[6]||(d[6]=[n("template",{slot:"append"},[i("Seconds")],-1)]))),_:1},8,["modelValue"])])),_:1})])):u("",!0)])),_:1})])),_:1})])}}}),M={style:{"margin-top":"20px"}},T={key:0},D={style:{"margin-top":"5px"}},B={name:"ServiceIpAddresses"},F=Object.assign(B,{props:{form:{default:function(){return{}},type:Object},type:{default:function(){return""},type:String}},setup(c){const y=c,h=e({});h.value=y.form,h.value&&(h.value.externalIPs||(h.value.externalIPs=[]),h.value.clusterIP||(h.value.clusterIP=""));const g=()=>{h.value.externalIPs.push("")};return(e,y)=>{const P=s,V=f,b=v,x=p,_=m;return l(),a("div",M,[t(_,{class:"box-card",shadow:"hover"},{header:o((()=>y[2]||(y[2]=[n("div",{class:"card-header"},[n("span",null,"IP 地址")],-1)]))),default:o((()=>["ClusterIP"===c.type||"LoadBalancer"===c.type||"NodePort"===c.type?(l(),a("div",T,[t(b,null,{default:o((()=>[t(V,{span:12},{default:o((()=>[t(P,{modelValue:h.value.clusterIP,"onUpdate:modelValue":y[0]||(y[0]=e=>h.value.clusterIP=e),placeholder:"e.g. 1.1.1.1"},null,8,["modelValue"])])),_:1})])),_:1}),y[3]||(y[3]=n("h2",null,"外部IP",-1))])):u("",!0),n("div",null,[(l(!0),a(d,null,r(h.value.externalIPs,((n,s)=>(l(),a("div",{key:s,style:{"margin-top":"5px"}},[u("",!0),t(b,{gutter:20},{default:o((()=>[t(V,{span:12},{default:o((()=>[t(P,{modelValue:h.value.externalIPs[s],"onUpdate:modelValue":e=>h.value.externalIPs[s]=e,placeholder:"e.g. 1.1.1.1",onInput:y[1]||(y[1]=l=>e.$forceUpdate())},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),t(V,{span:2},{default:o((()=>[t(x,{type:"danger",link:"",icon:"delete",size:"small",onClick:e=>(e=>{h.value.externalIPs.splice(e,1)})(s)},{default:o((()=>y[4]||(y[4]=[i("删除")]))),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])))),128))]),n("div",D,[t(x,{size:"small",type:"primary",link:"",icon:"Plus",onClick:g},{default:o((()=>y[5]||(y[5]=[i("添加")]))),_:1})])])),_:1})])}}});export{x as _,w as a,z as b,F as c};