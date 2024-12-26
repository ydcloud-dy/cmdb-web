/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./popover-legacy.BVoPCIBV.js","./tag-legacy.Ca3_ouli.js","./button-legacy.CH0FoAJ-.js","./age-legacy.B6tOd1kw.js","./index-legacy.CjsCdAav.js","./index-legacy.DPmmO7_J.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js","./index-legacy.DGP8eUsx.js"],(function(e,t){"use strict";var n,a,l,r,u,i,c,o,s,p,d,f,m,y,g,b,w,k,v,_;return{setters:[function(e){n=e._,a=e.o,l=e.c,r=e.e,u=e.w,i=e.b,c=e.t,o=e.F,s=e.v,p=e.g,d=e.h,f=e.f,m=e.B,y=e.E},function(e){g=e.E,b=e.a},null,null,null,null,function(e){w=e.E},null,null,function(e){k=e.A},function(e){v=e.E},function(e){_=e.E},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".operate-span-primary[data-v-72c11579]{color:var(--el-color-primary);cursor:pointer;font-weight:700}\n",document.head.appendChild(t);var j=["onClick"],R={style:{"text-align":"right","margin-top":"8px"}},x={name:"TableBlock",emits:{update:function(){return!0},search:function(){return!0},detail:function(){return!0},delete:function(e){return 1===e.length}}};e("default",n(Object.assign(x,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup:function(e,t){var n=t.emit;return function(t,x){var C=g,h=y,T=v,E=_,z=w,A=b;return a(),l("div",null,[r(A,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID"},{default:u((function(){return[r(C,{type:"selection",width:"55"}),r(C,{align:"left",label:"名称",prop:"metadata.name"},{default:u((function(e){return[i("span",{class:"operate-span-primary",onClick:function(t){return a=e.row,void n("detail",a);var a}},c(e.row.metadata.name),9,j),r(T,{placement:"top"},{content:u((function(){return[(a(!0),l(o,null,s(e.row.metadata.labels,(function(e,t,n){return a(),l("div",{slot:"content",key:n},[i("span",null,c(t)+": "+c(e),1)])})),128))]})),default:u((function(){return[r(h,{size:"small",type:"primary",link:"",icon:"PriceTag"})]})),_:2},1024)]})),_:1}),r(C,{label:"命名空间",prop:"namespace",type:"scope"},{default:u((function(e){return[i("span",null,c(e.row.metadata.namespace),1)]})),_:1}),r(C,{label:"Workload",prop:"spec.scaleTargetRef.kind"},{default:u((function(e){return[p(c(e.row.spec.scaleTargetRef.kind)+"/"+c(e.row.spec.scaleTargetRef.name),1)]})),_:1}),r(C,{label:"Min Replicas",prop:"spec.scaleTargetRef.minReplicas "},{default:u((function(e){return[p(c(e.row.spec.minReplicas),1)]})),_:1}),r(C,{label:"Max Replicas",prop:"spec.scaleTargetRef.maxReplicas"},{default:u((function(e){return[p(c(e.row.spec.maxReplicas),1)]})),_:1}),r(C,{label:"Current Replicas",prop:"status.currentReplicas"},{default:u((function(e){return[p(c(e.row.status.currentReplicas),1)]})),_:1}),r(C,{label:"状态",prop:"metadata.status"},{default:u((function(e){return[e.row.status.currentReplicas===e.row.status.desiredReplicas?(a(),d(E,{key:0,type:"success",round:""},{default:u((function(){return x[0]||(x[0]=[p(" Active ")])})),_:1})):f("",!0),e.row.status.currentReplicas!==e.row.status.desiredReplicas?(a(),d(E,{key:1,type:"danger",round:""},{default:u((function(){return x[1]||(x[1]=[p(" Pending ")])})),_:1})):f("",!0)]})),_:1}),r(C,{label:"存活时间",prop:"metadata.creationTimestamp",width:"180"},{default:u((function(e){return[i("span",null,c(m(k)(e.row.metadata.creationTimestamp)),1)]})),_:1}),r(C,{label:"操作"},{default:u((function(e){return[r(h,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(t){return a=e.row,void n("update",a);var a}},{default:u((function(){return x[2]||(x[2]=[p("编辑")])})),_:2},1032,["onClick"]),r(z,{modelValue:e.row.visible,"onUpdate:modelValue":function(t){return e.row.visible=t},placement:"top"},{reference:u((function(){return[r(h,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(t){return e.row.visible=!0}},{default:u((function(){return x[5]||(x[5]=[p("删除")])})),_:2},1032,["onClick"])]})),default:u((function(){return[x[6]||(x[6]=i("p",null,"确定要删除吗？",-1)),i("div",R,[r(h,{size:"small",type:"primary",link:"",onClick:function(t){return e.row.visible=!1}},{default:u((function(){return x[3]||(x[3]=[p("取消")])})),_:2},1032,["onClick"]),r(h,{type:"primary",size:"small",onClick:function(t){return a=e.row,void n("delete",a);var a}},{default:u((function(){return x[4]||(x[4]=[p("确定")])})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"])])}}}),[["__scopeId","data-v-72c11579"]]))}}}));
