/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./popover-legacy.BVoPCIBV.js","./button-legacy.CH0FoAJ-.js","./tag-legacy.Ca3_ouli.js","./stringFun-legacy.CSG30FnU.js","./index-legacy.CjsCdAav.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js","./index-legacy.DGP8eUsx.js"],(function(e,t){"use strict";var n,l,r,a,o,i,u,c,s,d,p,f,y,m,w,g,k,b,_,v;return{setters:[function(e){n=e._,l=e.a,r=e.o,a=e.c,o=e.e,i=e.w,u=e.b,c=e.g,s=e.t,d=e.h,p=e.B,f=e.f,y=e.U,m=e.i,w=e.E},function(e){g=e.E,k=e.a},null,null,null,null,function(e){b=e.E},null,null,function(e){_=e.t},function(e){v=e.E},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".custom-span[data-v-a8a760fd]{word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden}.operate-button-primary[data-v-a8a760fd]{color:var(--el-color-primary);cursor:pointer;font-weight:700}\n",document.head.appendChild(t);var h={style:{"text-align":"left"}},j={slot:"content"},C={style:{"text-align":"left"}},x={key:0,class:"custom-span"},z={key:1,class:"custom-span"},D={style:{"text-align":"left"}},E={key:0,class:"custom-span"},I={key:1,class:"custom-span"},U={key:0},V={key:1},B={style:{"text-align":"right","margin-top":"8px"}},A={name:"TableBlock",emits:{update:function(){return!0},search:function(){return!0},delete:function(e){return 1===e.length}}};e("default",n(Object.assign(A,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search"],setup:function(e,t){var n=t.emit,A=function(e){var t=e,n=document.createElement("input");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),m({message:"复制成功",type:"success"}),n.remove()},M=l({}),O=function(e){var t=e.prop,l=e.order;t&&("ID"===t&&(t="id"),M.value.orderKey=_(t),M.value.desc="descending"===l),n("search",M.value)};return function(t,l){var m=g,_=w,M=b,P=k;return r(),a("div",null,[o(P,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:O},{default:i((function(){return[o(m,{type:"selection",width:"55"}),o(m,{align:"left",width:"455",label:"实例ID / 名称",sortable:"custom",prop:"instance_id"},{default:i((function(e){return[u("div",h,[o(_,{class:"operate-button-primary",link:""},{default:i((function(){return[c(s(e.row.instance_id),1)]})),_:2},1024),o(_,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:function(t){return A(e.row.instance_id)}},null,8,["onClick"]),o(_,{link:""},{default:i((function(){return[c(s(e.row.name),1)]})),_:2},1024),o(_,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:function(t){return A(e.row.name)}},null,8,["onClick"])])]})),_:1}),o(m,{label:"状态",width:"95",prop:"status",sortable:"custom",type:"scope"},{default:i((function(e){return["运行中"===e.row.status?(r(),d(_,{key:0,size:"small",link:"",type:"success"},{default:i((function(){return[c(s(e.row.status),1)]})),_:2},1024)):(r(),d(_,{key:1,size:"small",link:"",type:"danger"},{default:i((function(){return[c(s(e.row.status),1)]})),_:2},1024))]})),_:1}),o(m,{width:"95",label:"操作系统",prop:"os_type",type:"scope",sortable:"custom"},{default:i((function(e){return[o(p(v),{placement:"top",class:"box-item",effect:"dark"},{content:i((function(){return[u("div",j,s(e.row.os),1)]})),default:i((function(){return[o(_,{link:""},{default:i((function(){return[c(s(e.row.os_type),1)]})),_:2},1024)]})),_:2},1024)]})),_:1}),o(m,{align:"left",width:"115",label:"可用区",prop:"region_name"}),o(m,{align:"left",width:"115",label:"配置",type:"scope"},{default:i((function(e){return[u("div",C,[""!==e.row.cpu?(r(),a("span",x,s(e.row.cpu)+" vCPU",1)):f("",!0),""!==e.row.memory?(r(),a("span",z,s(e.row.memory)+" MiB ",1)):f("",!0)])]})),_:1}),o(m,{align:"left",width:"165",label:"IP地址",type:"scope"},{default:i((function(e){return[u("div",D,[""!==e.row.public_addr?(r(),a("span",E,s(e.row.public_addr)+" (公)",1)):f("",!0),""!==e.row.private_addr?(r(),a("span",I,s(e.row.private_addr)+" (私有)",1)):f("",!0)])]})),_:1}),o(m,{align:"left",label:"到期时间",prop:"expired_time",width:"230"},{default:i((function(e){return[""!==e.row.expired_time?(r(),a("span",U,s(p(y)(e.row.expired_time))+" 到期",1)):(r(),a("span",V,"无"))]})),_:1}),o(m,{fixed:"right",width:"150",label:"操作"},{default:i((function(e){return[o(_,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(t){return l=e.row,void n("update",l);var l}},{default:i((function(){return l[0]||(l[0]=[c("编辑")])})),_:2},1032,["onClick"]),o(M,{modelValue:e.row.visible,"onUpdate:modelValue":function(t){return e.row.visible=t},placement:"top"},{reference:i((function(){return[o(_,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(t){return e.row.visible=!0}},{default:i((function(){return l[3]||(l[3]=[c("删除")])})),_:2},1032,["onClick"])]})),default:i((function(){return[l[4]||(l[4]=u("p",null,"确定要删除吗？",-1)),u("div",B,[o(_,{size:"small",type:"primary",link:"",onClick:function(t){return e.row.visible=!1}},{default:i((function(){return l[1]||(l[1]=[c("取消")])})),_:2},1032,["onClick"]),o(_,{type:"primary",size:"small",onClick:function(t){return l=e.row,void n("delete",l);var l}},{default:i((function(){return l[2]||(l[2]=[c("确定")])})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"])])}}}),[["__scopeId","data-v-a8a760fd"]]))}}}));
