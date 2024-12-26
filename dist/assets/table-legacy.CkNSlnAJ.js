/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./drawer-legacy.B124LicV.js","./overlay-legacy.BUxXTiH4.js","./descriptions-item-legacy.DaqoHh9G.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./popover-legacy.BVoPCIBV.js","./button-legacy.CH0FoAJ-.js","./tag-legacy.Ca3_ouli.js","./stringFun-legacy.CSG30FnU.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js"],(function(e,t){"use strict";var n,l,u,r,a,o,i,c,s,d,f,p,y,m,v,b,w,g,_,k,C,h,j;return{setters:[function(e){n=e._,l=e.a,u=e.o,r=e.c,a=e.e,o=e.w,i=e.b,c=e.g,s=e.t,d=e.h,f=e.B,p=e.f,y=e.U,m=e.i,v=e.E},function(e){b=e.E},null,function(e){w=e.E,g=e.a},function(e){_=e.E,k=e.a},null,null,null,null,function(e){C=e.E},null,null,function(e){h=e.t},function(e){j=e.E},null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".custom-span[data-v-058696fd]{word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden}.operate-button-primary[data-v-058696fd]{color:var(--el-color-primary);cursor:pointer;font-weight:700}\n",document.head.appendChild(t);var x={style:{"text-align":"left"}},I={slot:"content"},D={style:{"text-align":"left"}},z={key:0,class:"custom-span"},E={key:1,class:"custom-span"},P={style:{"text-align":"left"}},U={key:0,class:"custom-span"},V={key:1,class:"custom-span"},A={key:0},T={key:1},B={style:{"text-align":"right","margin-top":"8px"}},O={name:"TableBlock",emits:{update:function(){return!0},detail:function(){return!0},search:function(){return!0},delete:function(e){return 1===e.length}}};e("default",n(Object.assign(O,{props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","detail"],setup:function(e,t){var n=t.emit,O=l(!1),S=l({}),q=function(e){O.value=!1,e()},F=function(e){var t=e,n=document.createElement("input");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),m({message:"复制成功",type:"success"}),n.remove()},H=l({}),K=function(e){var t=e.prop,l=e.order;t&&("ID"===t&&(t="id"),H.value.orderKey=h(t),H.value.desc="descending"===l),n("search",H.value)};return function(t,l){var m=_,h=v,H=C,L=k,M=w,N=g,G=b;return u(),r("div",null,[a(L,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:K},{default:o((function(){return[a(m,{type:"selection",width:"55"}),a(m,{align:"left",width:"250",label:"实例ID / 名称",sortable:"custom",prop:"instance_id"},{default:o((function(e){return[i("div",x,[a(h,{class:"operate-button-primary",link:"",onClick:function(t){return n=e.row,S.value=n,void(O.value=!0);var n}},{default:o((function(){return[c(s(e.row.ID),1)]})),_:2},1032,["onClick"]),a(h,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:function(t){return F(e.row.ID)}},null,8,["onClick"]),a(h,{link:""},{default:o((function(){return[c(s(e.row.name),1)]})),_:2},1024),a(h,{size:"small",type:"primary",link:"",icon:"DocumentCopy",onClick:function(t){return F(e.row.name)}},null,8,["onClick"])])]})),_:1}),a(m,{label:"状态",width:"95",prop:"status",sortable:"custom",type:"scope"},{default:o((function(e){return["已验证"===e.row.status?(u(),d(h,{key:0,size:"small",link:"",type:"success"},{default:o((function(){return[c(s(e.row.status),1)]})),_:2},1024)):(u(),d(h,{key:1,size:"small",link:"",type:"danger"},{default:o((function(){return[c(s(e.row.status),1)]})),_:2},1024))]})),_:1}),a(m,{width:"150",label:"操作系统",prop:"os_type",type:"scope",sortable:"custom"},{default:o((function(e){return[a(f(j),{placement:"top",class:"box-item",effect:"dark"},{content:o((function(){return[i("div",I,s(e.row.os),1)]})),default:o((function(){return[a(h,{link:""},{default:o((function(){return[c(s(e.row.os),1)]})),_:2},1024)]})),_:2},1024)]})),_:1}),a(m,{align:"left",width:"115",label:"配置",type:"scope"},{default:o((function(e){return[i("div",D,[""!==e.row.cpu?(u(),r("span",z,s(e.row.cpuCount)+" vCPU",1)):p("",!0),""!==e.row.memory?(u(),r("span",E,s(e.row.memory)+" 内存 ",1)):p("",!0)])]})),_:1}),a(m,{align:"left",width:"165",label:"IP地址",type:"scope"},{default:o((function(e){return[i("div",P,[""!==e.row.ip?(u(),r("span",U,s(e.row.publicIP)+" (公)",1)):p("",!0),""!==e.row.ip?(u(),r("span",V,s(e.row.privateIP)+" (私有)",1)):p("",!0)])]})),_:1}),a(m,{align:"left",label:"创建时间",prop:"expired_time",width:"230"},{default:o((function(e){return[""!==e.row.CreatedAt?(u(),r("span",A,s(f(y)(e.row.CreatedAt)),1)):(u(),r("span",T,"无"))]})),_:1}),a(m,{fixed:"right",width:"150",label:"操作"},{default:o((function(e){return[a(h,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(t){return l=e.row,void n("update",l);var l}},{default:o((function(){return l[1]||(l[1]=[c("编辑")])})),_:2},1032,["onClick"]),a(H,{modelValue:e.row.visible,"onUpdate:modelValue":function(t){return e.row.visible=t},placement:"top"},{reference:o((function(){return[a(h,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(t){return e.row.visible=!0}},{default:o((function(){return l[4]||(l[4]=[c("删除")])})),_:2},1032,["onClick"])]})),default:o((function(){return[l[5]||(l[5]=i("p",null,"确定要删除吗？",-1)),i("div",B,[a(h,{size:"small",type:"primary",link:"",onClick:function(t){return e.row.visible=!1}},{default:o((function(){return l[2]||(l[2]=[c("取消")])})),_:2},1032,["onClick"]),a(h,{type:"primary",size:"small",onClick:function(t){return l=e.row,void n("delete",l);var l}},{default:o((function(){return l[3]||(l[3]=[c("确定")])})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"]),a(G,{"destroy-on-close":"",size:"500",modelValue:O.value,"onUpdate:modelValue":l[0]||(l[0]=function(e){return O.value=e}),"show-close":!0,"before-close":q},{default:o((function(){return[l[6]||(l[6]=i("h3",null,"基本信息",-1)),a(N,{column:1,border:""},{default:o((function(){return[a(M,{label:"主机名称"},{default:o((function(){return[c(s(S.value.name),1)]})),_:1}),a(M,{label:"连接地址"},{default:o((function(){return[c(s(S.value.username+"@"+S.value.serverHost),1)]})),_:1}),a(M,{label:"连接端口"},{default:o((function(){return[c(s(S.value.port),1)]})),_:1}),a(M,{label:"备注信息"},{default:o((function(){return[c(s(S.value.note),1)]})),_:1}),a(M,{label:"项目组"},{default:o((function(){return[c(s(S.value.note),1)]})),_:1})]})),_:1}),l[7]||(l[7]=i("h3",null,"扩展信息",-1)),a(N,{column:1,border:""},{default:o((function(){return[a(M,{label:"实例ID"},{default:o((function(){return[c(s(S.value.ID),1)]})),_:1}),a(M,{label:"操作系统"},{default:o((function(){return[c(s(S.value.os),1)]})),_:1}),a(M,{label:"CPU"},{default:o((function(){return[c(s(S.value.cpuCount),1)]})),_:1}),a(M,{label:"内存"},{default:o((function(){return[c(s(S.value.memory),1)]})),_:1}),a(M,{label:"磁盘"},{default:o((function(){return[c(s(S.value.diskTotal),1)]})),_:1}),a(M,{label:"内网IP"},{default:o((function(){return[c(s(S.value.privateIP),1)]})),_:1}),a(M,{label:"公网IP"},{default:o((function(){return[c(s(S.value.publicIP),1)]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-058696fd"]]))}}}));