/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./tag-legacy.Ca3_ouli.js","./age-legacy.B6tOd1kw.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./link-legacy.9nArvqF3.js","./index-legacy.DPmmO7_J.js","./index-legacy.CjsCdAav.js"],(function(e,l){"use strict";var t,n,a,u,i,s,c,r,o,d,v,f,p,m,y,g,j;return{setters:[function(e){t=e.a,n=e.o,a=e.c,u=e.h,i=e.w,s=e.g,c=e.t,r=e.f,o=e.F,d=e.v,v=e.b,f=e.e,p=e.B},null,function(e){m=e.A},null,null,function(e){y=e.E},function(e){g=e.E},function(e){j=e.E}],execute:function(){var l={key:1},k={name:"DetailKeyValue"},b=Object.assign(k,{props:{form:{default:function(){return{}},type:Object}},setup:function(e){var v=e,f=t({}),p=t(!1),m=t(!1);return f.value=v.form,m.value=Object.keys(f).length>5,p.value=!m.value,function(e,t){var v=y,k=g,b=j;return n(),a("div",null,[m.value?(n(),u(v,{key:0,onClick:t[0]||(t[0]=function(e){return p.value=!p.value})},{default:i((function(){return[s(c(p.value?"收起":"展开"),1)]})),_:1})):r("",!0),p.value?(n(),a("div",l,[(n(!0),a(o,null,d(f.value,(function(e,l,t){return n(),a("div",{key:t,class:"myTag"},[e.length<50?(n(),u(k,{key:0,type:"info",size:"small"},{default:i((function(){return[s(c(l)+" = "+c(e),1)]})),_:2},1024)):r("",!0),e.length>50?(n(),u(b,{key:1,content:e,placement:"top"},{default:i((function(){return[e.length>=50?(n(),u(k,{key:0,type:"info",size:"small"},{default:i((function(){return[s(c(l)+" = "+c(e.substring(0,50)+"..."),1)]})),_:2},1024)):r("",!0)]})),_:2},1032,["content"])):r("",!0)])})),128))])):r("",!0)])}}}),h={style:{width:"100%"},class:"myTable"},z={colspan:"4"},T={key:0},_={colspan:"4"},O={key:1},x={colspan:"4"},E={colspan:"4"},w={colspan:"4"},A={colspan:"4"},B={colspan:"4"},D={name:"DetailBasic"};e("_",Object.assign(D,{props:{form:{default:function(){return{}},type:Object}},setup:function(e){var l,y,j=e,k=t([]),D=t({});return D.value=j.form,null!==(l=D.value.spec)&&void 0!==l&&null!==(l=l.template)&&void 0!==l&&null!==(l=l.spec)&&void 0!==l&&l.containers?k.value=D.value.spec.template.spec.containers:null!==(y=D.value.spec)&&void 0!==y&&null!==(y=y.jobTemplate)&&void 0!==y&&null!==(y=y.spec)&&void 0!==y&&null!==(y=y.template)&&void 0!==y&&null!==(y=y.spec)&&void 0!==y&&y.containers&&(k.value=D.value.spec.jobTemplate.spec.template.spec.containers),function(e,l){var t=g;return n(),a("div",null,[l[7]||(l[7]=v("h3",null,"基本信息",-1)),v("table",h,[v("tr",null,[l[0]||(l[0]=v("td",null,"名称",-1)),v("td",z,c(D.value.metadata.name),1)]),D.value.metadata.namespace?(n(),a("tr",T,[l[1]||(l[1]=v("td",null,"命名空间",-1)),v("td",_,c(D.value.metadata.namespace),1)])):r("",!0),D.value.metadata.finalizers?(n(),a("tr",O,[l[2]||(l[2]=v("td",null,"Finalizers",-1)),v("td",x,[(n(!0),a(o,null,d(D.value.metadata.finalizers,(function(e){return n(),a("div",{key:e,class:"myTag"},[f(t,{type:"info",size:"small"},{default:i((function(){return[s(c(e.length>100?e.substring(0,100)+"...":e),1)]})),_:2},1024)])})),128))])])):r("",!0),v("tr",null,[l[3]||(l[3]=v("td",null,"镜像名称",-1)),v("td",E,[(n(!0),a(o,null,d(k.value,(function(e,l){return n(),a("div",{key:l,class:"myTag"},[f(t,{type:"info",size:"small"},{default:i((function(){return[s(c(e.image),1)]})),_:2},1024)])})),128))])]),v("tr",null,[l[4]||(l[4]=v("td",null,"存活时间",-1)),v("td",w,c(p(m)(D.value.metadata.creationTimestamp)),1)]),v("tr",null,[l[5]||(l[5]=v("td",null,"标签",-1)),v("td",A,[D.value.metadata.labels?(n(),u(b,{key:0,form:D.value.metadata.labels},null,8,["form"])):r("",!0)])]),v("tr",null,[l[6]||(l[6]=v("td",null,"注解",-1)),v("td",B,[D.value.metadata.annotations?(n(),u(b,{key:0,form:D.value.metadata.annotations},null,8,["form"])):r("",!0)])])])])}}}))}}}));