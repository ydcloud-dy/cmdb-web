/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./popover-legacy.BVoPCIBV.js","./button-legacy.CH0FoAJ-.js","./tag-legacy.Ca3_ouli.js","./dayjs.min-legacy.jnpfY90f.js","./stringFun-legacy.CSG30FnU.js","./index-legacy.DPmmO7_J.js","./index-legacy.CjsCdAav.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js","./index-legacy.DGP8eUsx.js"],(function(e,l){"use strict";var n,t,a,r,i,o,u,c,s,f,d,p,g,y,m,b;return{setters:[function(e){n=e.a,t=e.o,a=e.c,r=e.e,i=e.w,o=e.g,u=e.t,c=e.b,s=e.E},function(e){f=e.E,d=e.a},null,null,null,null,function(e){p=e.E},null,null,function(e){g=e.d},function(e){y=e.t},function(e){m=e.E},function(e){b=e.E},null,null,null,null,null,null,null,null],execute:function(){var l={style:{"text-align":"right","margin-top":"8px"}};e("default",{__name:"table",props:{tableData:{default:function(){return[]},type:Array}},emits:["update","delete","search","region","test"],setup:function(e,j){var v=j.emit,k=function(e,l,n){return n?g(n).format("YYYY-MM-DD HH:mm:ss"):""},_=n({}),w=function(e){var l=e.prop,n=e.order;l&&("ID"===l&&(l="id"),_.value.orderKey=y(l),_.value.desc="descending"===n),v("search",_.value)},C=function(e){v("select",e)};return function(n,g){var y=f,j=m,_=b,x=s,h=p,D=d;return t(),a("div",null,[r(D,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:w,onSelectionChange:C},{default:i((function(){return[r(y,{type:"selection",width:"55"}),r(y,{align:"left",label:"ID",prop:"ID",sortable:"custom"}),r(y,{align:"left",label:"名称",prop:"name",sortable:"custom"},{default:i((function(e){return[r(j,{type:"success"},{default:i((function(){return[o(u(e.row.name),1)]})),_:2},1024)]})),_:1}),r(y,{align:"left",label:"镜像地址",prop:"image"},{default:i((function(e){return[r(_,{class:"item",effect:"dark",content:e.row.image,placement:"top"},{default:i((function(){return[c("span",null,u(e.row.image),1)]})),_:2},1032,["content"])]})),_:1}),r(y,{align:"left",label:"启动命令",prop:"command"}),r(y,{align:"left",label:"启动参数",prop:"args"}),r(y,{align:"left",label:"描述",prop:"desc"}),r(y,{align:"left",label:"创建者",prop:"CreatedName"}),r(y,{align:"left",label:"创建时间",prop:"CreatedAt",formatter:k}),r(y,{align:"left",label:"操作"},{default:i((function(e){return[r(x,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(l){return n=e.row,void v("update",n);var n}},{default:i((function(){return g[0]||(g[0]=[o("编辑")])})),_:2},1032,["onClick"]),r(h,{modelValue:e.row.visible,"onUpdate:modelValue":function(l){return e.row.visible=l},placement:"top"},{reference:i((function(){return[r(x,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(l){return e.row.visible=!0}},{default:i((function(){return g[3]||(g[3]=[o("删除")])})),_:2},1032,["onClick"])]})),default:i((function(){return[g[4]||(g[4]=c("p",null,"确定要删除吗？",-1)),c("div",l,[r(x,{size:"small",type:"primary",link:"",onClick:function(l){return e.row.visible=!1}},{default:i((function(){return g[1]||(g[1]=[o("取消")])})),_:2},1032,["onClick"]),r(x,{type:"primary",size:"small",onClick:function(l){return n=e.row,void v("delete",n);var n}},{default:i((function(){return g[2]||(g[2]=[o("确定")])})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"])])}}})}}}));
