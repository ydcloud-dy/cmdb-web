/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./button-legacy.CH0FoAJ-.js","./tag-legacy.Ca3_ouli.js","./stringFun-legacy.CSG30FnU.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js"],(function(e,l){"use strict";var t,n,a,r,c,o,i,u,s,d,f,p,g;return{setters:[function(e){t=e.a,n=e.o,a=e.c,r=e.e,c=e.w,o=e.g,i=e.t,u=e.B,s=e.cw,d=e.E},function(e){f=e.E,p=e.a},null,null,null,null,null,null,function(e){g=e.t},null,null,null,null,null,null,null,null],execute:function(){var l={name:"TableBlock",emits:{update:function(){return!0},search:function(){return!0},delete:function(e){return 1===e.length}}};e("default",Object.assign(l,{props:{tableData:{default:function(){return[]},type:Array}},emits:["play","delete","search","select"],setup:function(e,l){var y=l.emit,b=t({}),m=function(e){var l=e.prop,t=e.order;l&&("ID"===l&&(l="id"),b.value.orderKey=g(l),b.value.desc="descending"===t),y("search",b.value)},j=function(e){y("select",e)};return function(l,t){var g=f,b=d,h=p;return n(),a("div",null,[r(h,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:m,onSelectionChange:j},{default:c((function(){return[r(g,{type:"selection",width:"55"}),r(g,{align:"left",label:"ID",prop:"id",sortable:"custom",width:"55"}),r(g,{align:"left",label:"集群",prop:"cluster",sortable:"custom"}),r(g,{align:"left",label:"命名空间",prop:"namespace",sortable:"custom"}),r(g,{align:"left",label:"Pod",prop:"pod_name",sortable:"custom"}),r(g,{align:"left",label:"Container",prop:"container_name",sortable:"custom"}),r(g,{align:"left",label:"用户",prop:"nickName",sortable:"custom",width:"100"}),r(g,{align:"left",label:"创建时间",prop:"created_at",width:"180"},{default:c((function(e){return[o(i(u(s)(e.row.created_at)),1)]})),_:1}),r(g,{align:"left",label:"操作"},{default:c((function(e){return[r(b,{size:"small",type:"primary",link:"",icon:"CaretRight",onClick:function(l){return t=e.row,void y("play",t);var t}},{default:c((function(){return t[0]||(t[0]=[o("播放")])})),_:2},1032,["onClick"]),r(b,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(l){return t=e.row,void y("delete",t);var t}},{default:c((function(){return t[1]||(t[1]=[o("删除")])})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])])}}}))}}}));
