/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./table-column-legacy.BxF_olX2.js","./checkbox-legacy.CC9hZC3z.js","./tooltip-legacy.DJvkFyUq.js","./popper-legacy.BkTYt---.js","./scrollbar-legacy.dKZTD6w2.js","./popover-legacy.BVoPCIBV.js","./button-legacy.CH0FoAJ-.js","./link-legacy.9nArvqF3.js","./tag-legacy.Ca3_ouli.js","./dayjs.min-legacy.jnpfY90f.js","./stringFun-legacy.CSG30FnU.js","./index-legacy.CjsCdAav.js","./index-legacy.DGP8eUsx.js","./_Uint8Array-legacy.CS4Mx2ig.js","./_initCloneObject-legacy.JrJoSfNx.js","./_baseIteratee-legacy.D0Xxhk8-.js","./isEqual-legacy.wQ-Y-8LH.js","./debounce-legacy.Csxk0W50.js","./index-legacy.DglejgZI.js","./dropdown-legacy.Ei32dkXV.js"],(function(e,l){"use strict";var n,t,r,a,i,o,u,c,s,f,d,p,g,y,m,b,j;return{setters:[function(e){n=e.u,t=e.a,r=e.o,a=e.c,i=e.e,o=e.w,u=e.O,c=e.g,s=e.t,f=e.b,d=e.E},function(e){p=e.E,g=e.a},null,null,null,null,function(e){y=e.E},null,function(e){m=e.E},null,function(e){b=e.d},function(e){j=e.t},null,null,null,null,null,null,null,null,null],execute:function(){var l={style:{"text-align":"right","margin-top":"8px"}};e("default",{__name:"table",props:{tableData:{default:function(){return[]},type:Array}},emits:["run","delete","search","region","test"],setup:function(e,v){var k=v.emit,w=n(),_=k,C=function(e,l,n){return n?b(n).format("YYYY-MM-DD HH:mm:ss"):""},h=t({}),D=function(e){var l=e.prop,n=e.order;l&&("ID"===l&&(l="id"),h.value.orderKey=j(l),h.value.desc="descending"===n),_("search",h.value)},x=function(e){_("select",e)};return function(n,t){var b=p,j=m,v=d,k=y,h=g;return r(),a("div",null,[i(h,{ref:"multipleTable",data:e.tableData,style:{width:"100%"},"tooltip-effect":"dark","row-key":"ID",onSortChange:D,onSelectionChange:x,"highlight-current-row":""},{default:o((function(){return[i(b,{type:"selection",width:"55"}),i(b,{align:"left",label:"ID",prop:"ID",width:"80",sortable:"custom"}),i(b,{align:"left",label:"流水线名称",prop:"name",sortable:"custom"},{default:o((function(e){return[i(j,{onClick:u((function(l){return n=e.row.ID,void w.push({name:"pipelineDetail",query:{id:n}});var n}),["prevent"]),style:{cursor:"pointer"}},{default:o((function(){return[c(s(e.row.name),1)]})),_:2},1032,["onClick"])]})),_:1}),i(b,{align:"left",label:"应用名称",prop:"app_name"}),i(b,{align:"left",label:"环境",prop:"env_name"}),i(b,{align:"left",label:"创建人",prop:"CreatedName"}),i(b,{align:"left",label:"创建时间",prop:"CreatedAt",formatter:C}),i(b,{align:"left",label:"修改时间",prop:"UpdatedAt",formatter:C}),i(b,{align:"left",label:"操作"},{default:o((function(e){return[i(v,{size:"small",type:"primary",link:"",icon:"edit",onClick:function(l){return n=e.row,void _("run",n);var n}},{default:o((function(){return t[0]||(t[0]=[c("运行")])})),_:2},1032,["onClick"]),i(k,{modelValue:e.row.visible,"onUpdate:modelValue":function(l){return e.row.visible=l},placement:"top"},{reference:o((function(){return[i(v,{type:"primary",link:"",icon:"delete",size:"small",onClick:function(l){return e.row.visible=!0}},{default:o((function(){return t[3]||(t[3]=[c("删除")])})),_:2},1032,["onClick"])]})),default:o((function(){return[t[4]||(t[4]=f("p",null,"确定要删除吗？",-1)),f("div",l,[i(v,{size:"small",type:"primary",link:"",onClick:function(l){return e.row.visible=!1}},{default:o((function(){return t[1]||(t[1]=[c("取消")])})),_:2},1032,["onClick"]),i(v,{type:"primary",size:"small",onClick:function(l){return n=e.row,void _("delete",n);var n}},{default:o((function(){return t[2]||(t[2]=[c("确定")])})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"])])}}})}}}));