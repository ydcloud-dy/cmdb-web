/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,r as l,q as a,dG as t,a as o,o as u,c as d,b as n,e as i,w as p,g as s,t as r,h as m,ax as c,f,F as v,v as h,B as b,dH as _,dI as y,cu as w,dJ as V,i as g,dK as k,dL as j,dM as x,E as I,Q as D,k as U}from"./index.ABWJOL2Q.js";import{E as C}from"./drawer.XhtctEYG.js";import"./overlay.CDLw2uOw.js";/* empty css             *//* empty css                *//* empty css               */import{E}from"./cascader-panel.BQdm0Z6T.js";/* empty css              *//* empty css            */import{E as B}from"./checkbox.BcMUmSPv.js";/* empty css              */import"./scrollbar.3ySweVnY.js";import{E as N,a as q}from"./col.BzMVCOvM.js";import{a as A,E as T}from"./form-item.ujPiwBAF.js";import{E as M,a as F}from"./select.C2tLDQ30.js";import{E as P,a as K}from"./table-column.ChuwY-lb.js";/* empty css               */import z from"./icon.B7TDqDwT.js";import{_ as H}from"./warningBar.BzThqhMC.js";import{c as O}from"./authorityBtn.CNV2FmNx.js";import{a as S}from"./stringFun.hIDu-B3o.js";import{E as $}from"./index.D4uEcQv3.js";import"./index.BRjlB3m5.js";import"./index.DINKPDpR.js";import"./strings.C2tuonvC.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./arrays.CvpzyGiz.js";import"./cloneDeep.BwH6oqGn.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";import"./index.DglrVZRl.js";import"./index.6ock-Gvr.js";import"./debounce.CkdGDwJt.js";import"./castArray.9wqFpW2Z.js";import"./token.DWNpOE8r.js";import"./_baseIteratee.BPaQBmlP.js";const G={class:"dycloud-table-box"},J={class:"dycloud-btn-list"},L={key:0,class:"icon-column"},Q={class:"flex justify-between items-center"},W={class:"text-lg"},R={style:{display:"inline-flex","align-items":"center"}},X={class:"flex items-center gap-2"},Y={class:"flex items-center gap-2 mt-3"},Z=e(Object.assign({name:"Menus"},{__name:"menu",setup(e){const Z=l({});a((()=>{for(let e in t)Z[e.replace(/^\/src\//,"")]=t[e]}));const ee=l({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),le=o([]),ae=async()=>{const e=await y();0===e.code&&(le.value=e.data)};ae();const te=()=>{oe.value.component=oe.value.component.replace(/\\/g,"/"),oe.value.name=S(Z[oe.value.component]),oe.value.path=oe.value.name},oe=o({ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),ue=()=>{oe.value.path=oe.value.name},de=e=>{pe(),e()},ne=o(null),ie=o(!1),pe=()=>{ie.value=!1,ne.value.resetFields(),oe.value={ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},se=o(!1),re=()=>{pe(),se.value=!1},me=async()=>{ne.value.validate((async e=>{if(e){let e;e=he.value?await k(oe.value):await j(oe.value),0===e.code&&(g({type:"success",message:he.value?"编辑成功":"添加成功!"}),ae()),pe(),se.value=!1}}))},ce=o([{ID:"0",title:"根菜单"}]),fe=()=>{ce.value=[{ID:0,title:"根目录"}],ve(le.value,ce.value,!1)},ve=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===oe.value.ID,children:[]};ve(e.children,t.children,a||e.ID===oe.value.ID),l.push(t)}else{const t={title:e.meta.title,ID:e.ID,disabled:a||e.ID===oe.value.ID};l.push(t)}}))},he=o(!1),be=o("新增菜单"),_e=e=>{be.value="新增菜单",oe.value.parentId=e,he.value=!1,fe(),se.value=!0};return(e,l)=>{const a=I,t=P,o=D,y=K,k=M,j=F,S=A,pe=N,ve=U,ye=q,we=B,Ve=E,ge=$,ke=T,je=C;return u(),d("div",null,[n("div",G,[n("div",J,[i(a,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>_e(0))},{default:p((()=>l[18]||(l[18]=[s(" 新增根菜单 ")]))),_:1})]),i(y,{data:le.value,"row-key":"ID"},{default:p((()=>[i(t,{align:"left",label:"ID","min-width":"100",prop:"ID"}),i(t,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:p((e=>[n("span",null,r(e.row.meta.title),1)])),_:1}),i(t,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:p((e=>[e.row.meta.icon?(u(),d("div",L,[i(o,null,{default:p((()=>[(u(),m(c(e.row.meta.icon)))])),_:2},1024),n("span",null,r(e.row.meta.icon),1)])):f("",!0)])),_:1}),i(t,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),i(t,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),i(t,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:p((e=>[n("span",null,r(e.row.hidden?"隐藏":"显示"),1)])),_:1}),i(t,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),i(t,{align:"left",label:"排序","min-width":"70",prop:"sort"}),i(t,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),i(t,{align:"left",fixed:"right",label:"操作",width:"300"},{default:p((e=>[i(a,{type:"primary",link:"",icon:"plus",onClick:l=>_e(e.row.ID)},{default:p((()=>l[19]||(l[19]=[s(" 添加子菜单 ")]))),_:2},1032,["onClick"]),i(a,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{be.value="编辑菜单";const l=await x({id:e});oe.value=l.data.menu,he.value=!0,fe(),se.value=!0})(e.row.ID)},{default:p((()=>l[20]||(l[20]=[s(" 编辑 ")]))),_:2},1032,["onClick"]),i(a,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.ID,void w.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await V({ID:a})).code&&(g({type:"success",message:"删除成功!"}),ae())})).catch((()=>{g({type:"info",message:"已取消删除"})}));var a}},{default:p((()=>l[21]||(l[21]=[s(" 删除 ")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),i(je,{modelValue:se.value,"onUpdate:modelValue":l[17]||(l[17]=e=>se.value=e),size:"60%","before-close":de,"show-close":!1},{header:p((()=>[n("div",Q,[n("span",W,r(be.value),1),n("div",null,[i(a,{onClick:re},{default:p((()=>l[22]||(l[22]=[s(" 取 消 ")]))),_:1}),i(a,{type:"primary",onClick:me},{default:p((()=>l[23]||(l[23]=[s(" 确 定 ")]))),_:1})])])])),default:p((()=>[i(H,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),se.value?(u(),m(ke,{key:0,ref_key:"menuForm",ref:ne,inline:!0,model:oe.value,rules:ee,"label-position":"top"},{default:p((()=>[i(ye,{class:"w-full"},{default:p((()=>[i(pe,{span:16},{default:p((()=>[i(S,{label:"文件路径",prop:"component"},{default:p((()=>[i(j,{modelValue:oe.value.component,"onUpdate:modelValue":l[1]||(l[1]=e=>oe.value.component=e),filterable:"","allow-create":"",autocomplete:"off",style:{width:"100%"},placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue","default-first-option":"",onChange:te},{default:p((()=>[(u(!0),d(v,null,h(Z,((e,l)=>(u(),m(k,{key:l,label:l,value:l},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),l[25]||(l[25]=n("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1)),i(a,{style:{"margin-top":"4px"},onClick:l[2]||(l[2]=e=>oe.value.component="view/routerHolder.vue")},{default:p((()=>l[24]||(l[24]=[s(" 点我设置 ")]))),_:1})])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"展示名称",prop:"meta.title"},{default:p((()=>[i(ve,{modelValue:oe.value.meta.title,"onUpdate:modelValue":l[3]||(l[3]=e=>oe.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(ye,{class:"w-full"},{default:p((()=>[i(pe,{span:8},{default:p((()=>[i(S,{label:"路由Name",prop:"path"},{default:p((()=>[i(ve,{modelValue:oe.value.name,"onUpdate:modelValue":l[4]||(l[4]=e=>oe.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:ue},null,8,["modelValue"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{prop:"path"},{label:p((()=>[n("span",R,[l[27]||(l[27]=n("span",null,"路由Path",-1)),i(we,{modelValue:ie.value,"onUpdate:modelValue":l[5]||(l[5]=e=>ie.value=e),style:{"margin-left":"12px",height:"auto"}},{default:p((()=>l[26]||(l[26]=[s("添加参数")]))),_:1},8,["modelValue"])])])),default:p((()=>[i(ve,{modelValue:oe.value.path,"onUpdate:modelValue":l[6]||(l[6]=e=>oe.value.path=e),disabled:!ie.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"是否隐藏"},{default:p((()=>[i(j,{modelValue:oe.value.hidden,"onUpdate:modelValue":l[7]||(l[7]=e=>oe.value.hidden=e),style:{width:"100%"},placeholder:"是否在列表隐藏"},{default:p((()=>[i(k,{value:!1,label:"否"}),i(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(ye,{class:"w-full"},{default:p((()=>[i(pe,{span:8},{default:p((()=>[i(S,{label:"父节点ID"},{default:p((()=>[i(Ve,{modelValue:oe.value.parentId,"onUpdate:modelValue":l[8]||(l[8]=e=>oe.value.parentId=e),style:{width:"100%"},disabled:!he.value,options:ce.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"图标",prop:"meta.icon"},{default:p((()=>[i(z,{modelValue:oe.value.meta.icon,"onUpdate:modelValue":l[9]||(l[9]=e=>oe.value.meta.icon=e)},null,8,["modelValue"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"排序标记",prop:"sort"},{default:p((()=>[i(ve,{modelValue:oe.value.sort,"onUpdate:modelValue":l[10]||(l[10]=e=>oe.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(ye,{class:"w-full"},{default:p((()=>[i(pe,{span:8},{default:p((()=>[i(S,{prop:"meta.activeName"},{label:p((()=>[n("div",null,[l[28]||(l[28]=n("span",null," 高亮菜单 ",-1)),i(ge,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:p((()=>[i(o,null,{default:p((()=>[i(b(_))])),_:1})])),_:1})])])),default:p((()=>[i(ve,{modelValue:oe.value.meta.activeName,"onUpdate:modelValue":l[11]||(l[11]=e=>oe.value.meta.activeName=e),placeholder:oe.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"KeepAlive",prop:"meta.keepAlive"},{default:p((()=>[i(j,{modelValue:oe.value.meta.keepAlive,"onUpdate:modelValue":l[12]||(l[12]=e=>oe.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:p((()=>[i(k,{value:!1,label:"否"}),i(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(pe,{span:8},{default:p((()=>[i(S,{label:"CloseTab",prop:"meta.closeTab"},{default:p((()=>[i(j,{modelValue:oe.value.meta.closeTab,"onUpdate:modelValue":l[13]||(l[13]=e=>oe.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:p((()=>[i(k,{value:!1,label:"否"}),i(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),i(ye,{class:"w-full"},{default:p((()=>[i(pe,{span:8},{default:p((()=>[i(S,null,{label:p((()=>[n("div",null,[l[29]||(l[29]=n("span",null," 是否为基础页面 ",-1)),i(ge,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:p((()=>[i(o,null,{default:p((()=>[i(b(_))])),_:1})])),_:1})])])),default:p((()=>[i(j,{modelValue:oe.value.meta.defaultMenu,"onUpdate:modelValue":l[14]||(l[14]=e=>oe.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:p((()=>[i(k,{value:!1,label:"否"}),i(k,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])):f("",!0),n("div",null,[n("div",X,[i(a,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=e=>{return(l=oe.value).parameters||(l.parameters=[]),void l.parameters.push({type:"query",key:"",value:""});var l})},{default:p((()=>l[30]||(l[30]=[s(" 新增菜单参数 ")]))),_:1})]),i(y,{data:oe.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:p((()=>[i(t,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:p((e=>[i(j,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:p((()=>[i(k,{key:"query",value:"query",label:"query"}),i(k,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),i(t,{align:"left",prop:"key",label:"参数key",width:"180"},{default:p((e=>[n("div",null,[i(ve,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(t,{align:"left",prop:"value",label:"参数值"},{default:p((e=>[n("div",null,[i(ve,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(t,{align:"left"},{default:p((e=>[n("div",null,[i(a,{type:"danger",icon:"delete",onClick:l=>{return a=oe.value.parameters,t=e.$index,void a.splice(t,1);var a,t}},{default:p((()=>l[31]||(l[31]=[s(" 删除 ")]))),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),n("div",Y,[i(a,{type:"primary",icon:"edit",onClick:l[16]||(l[16]=e=>{return(l=oe.value).menuBtn||(l.menuBtn=[]),void l.menuBtn.push({name:"",desc:""});var l})},{default:p((()=>l[32]||(l[32]=[s(" 新增可控按钮 ")]))),_:1})]),i(y,{data:oe.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:p((()=>[i(t,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:p((e=>[n("div",null,[i(ve,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(t,{align:"left",prop:"name",label:"备注",width:"180"},{default:p((e=>[n("div",null,[i(ve,{modelValue:e.row.desc,"onUpdate:modelValue":l=>e.row.desc=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),i(t,{align:"left"},{default:p((e=>[n("div",null,[i(a,{type:"danger",icon:"delete",onClick:l=>(async(e,l)=>{const a=e[l];if(0===a.ID)return void e.splice(l,1);0===(await O({id:a.ID})).code&&e.splice(l,1)})(oe.value.menuBtn,e.$index)},{default:p((()=>l[33]||(l[33]=[s(" 删除 ")]))),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-429be229"]]);export{Z as default};