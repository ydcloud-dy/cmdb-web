/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a,u as l,M as t,r as o,q as u,i as r,H as s,P as d,o as n,c as i,e as c,w as m,g as p,b as v,t as f,f as h,F as b,v as _,n as y,h as g,E as V,Q as k,k as w}from"./index.ABWJOL2Q.js";import{E as x,a as C}from"./tab-pane.fs024GHS.js";/* empty css                       */import{E as j,a as U}from"./checkbox.BcMUmSPv.js";import{E as S}from"./scrollbar.3ySweVnY.js";import{E as T}from"./dialog.DdLHJsLF.js";import"./overlay.CDLw2uOw.js";import{E as q}from"./drawer.XhtctEYG.js";/* empty css             */import{E}from"./switch.CqADXIhW.js";/* empty css            */import{E as N,a as P}from"./select.C2tLDQ30.js";/* empty css               *//* empty css                    *//* empty css              */import{a as I,E as O}from"./form-item.ujPiwBAF.js";/* empty css              */import{E as D}from"./card.RgDT494R.js";/* empty css               */import{E as R,a as A}from"./table-column.ChuwY-lb.js";/* empty css                */import{E as z,a as L}from"./breadcrumb-item.DBo9yA-L.js";import{e as B}from"./applications.GrMV9Sfs.js";import{D as F,G as H,a as M,u as W,b as J,d as Y}from"./pipelines.B5fOuFXJ.js";import K from"./flow-frame.DUxEqhhJ.js";import{d as Q}from"./dayjs.min.DOWqlKAh.js";import{g as $}from"./service.5FwJlJUs.js";import{g as G}from"./buildEnv.vyGXBGni.js";import{g as X}from"./codeSource.zRy1fTFq.js";import{E as Z}from"./index.DglrVZRl.js";import{E as ee,a as ae}from"./index.DINKPDpR.js";import"./strings.C2tuonvC.js";import"./index.C5gbd99D.js";import"./isEqual.CtpQH3Dm.js";import"./_Uint8Array.BjvNwsUf.js";import"./index.BRjlB3m5.js";import"./refs.CZv2DkwS.js";import"./index.D4uEcQv3.js";import"./token.DWNpOE8r.js";import"./castArray.9wqFpW2Z.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";import"./_baseClone.gl1e0kmI.js";import"./_initCloneObject.jmqS1x-g.js";const le={style:{width:"100%",padding:"20px"}},te={class:"stage-task"},oe={class:"stage-task-left"},ue={class:"task-source"},re={class:"task-content"},se={key:0,class:"repo-url"},de={key:1,class:"branch-info"},ne={class:"stage-task-right"},ie={class:"flow-list"},ce={class:"header",style:{cursor:"pointer"}},me={class:"footer-buttons"},pe=["id"],ve={class:"footer-edit"},fe={class:"footer"},he={style:{padding:"20px"}},be={key:0},_e={style:{display:"flex",gap:"10px","margin-bottom":"10px"}},ye={style:{"margin-top":"10px","font-size":"12px",color:"#409EFF"}},ge=["innerHTML"],Ve={style:{padding:"20px"}},ke={key:0},we=e({__name:"detail",setup(e){const we=a([]),xe=a(!1),Ce=a(!1),je=()=>{r.info("操作已取消")},Ue=l(),Se=t().query.id,Te=a(!1),qe=a("basic-info"),Ee=o([]),Ne=a("编辑任务"),Pe=e=>{Xe.value.textarea="1"==e?"#!/bin/sh":"2"==e?"#!/bin/bash":"#!/bin/python"},Ie=()=>{Ke.value.taskList.splice($e.value,1),we.value=we.value.filter((e=>e.taskList.length>0)),Ge.value=!1,r.success("任务已删除")},Oe=e=>{},De=()=>{Ze.params.push({name:"",defaultValue:""})},Re=()=>{Be(),ta.url&&ta.defaultBranch?(ta.defaultBranch="main",ta.branch="main",r.success("关联代码库成功"),xe.value=!1):r.error("请填写完整信息")},Ae=a([]),ze=a([]);function Le(e){const a=Ae.value.find((a=>a.config.url===e));return a?{username:a.config.username,password:a.config.password}:{username:"",password:""}}const Be=()=>{if(!ze.value||0===ze.value.length)return;if(!ta.gitType)return;const e=ze.value.find((e=>e.name===ta.gitType));e&&(ta.repoId=e.ID)},Fe=a([]);function He(e,a){if(!na.environmentOptions||!Array.isArray(na.environmentOptions))return"";const l=na.environmentOptions.find((a=>a.value===e));return l?l[a]:""}const Me=()=>{if(Te.value){const e=JSON.parse(JSON.stringify(Ze));for(let a in e)Ke.value[a]=e[a];Ce.value=!1,r.success("阶段已修改")}else Ze.name?(we.value.push({name:Ze.name,params:Ze.params,taskList:[{transformIndex:0,name:"",branch:"",image:"",voucherType:"1",textarea:"#!/bin/sh",spatialName:"",warehouse:"",mirrorTag:"",dockerfile:"",contextPath:"",productName:"",productPath:"",version:"",resource:"",yamlResource:"",goalResource:"",openScript:""}]}),Ce.value=!1,r.success("新阶段已添加")):r.error("请填写阶段名称");Ze.name="",Ze.params=[],Te.value=!1},We=()=>{if(Ge.value=!1,Xe.value.transformIndex=Date.now(),Ye.value){const e=JSON.parse(JSON.stringify(Xe.value));for(let a in e)Qe.value[a]=e[a]}else Ke.value.taskList.push(JSON.parse(JSON.stringify(Xe.value)));r.success("并行任务已添加")},Je=(e,a)=>{Ce.value=!0,Te.value=!1},Ye=a(!1),Ke=a({}),Qe=a({}),$e=a(null),Ge=a(!1),Xe=a({transformIndex:0,name:"",branch:"",image:"",voucherType:"1",textarea:"#!/bin/sh",spatialName:"",warehouse:"",mirrorTag:"",dockerfile:"",contextPath:"",productName:"",productPath:"",version:"",resource:"",yamlResource:"",goalResource:"",openScript:""}),Ze=o({name:"",executor:"",params:[]}),ea=()=>{for(let e in Xe.value)Xe.value[e]=""},aa=(e,a)=>{"group"==a?(Ze.name="",Ze.params=[],Ce.value=!0,Ke.value=e,Ze.name=e.name,Ze.params=[...e.params],Te.value=!0):(ea(),Ye.value=!0,Qe.value=e,Ce.value=!0)},la=(e=-1)=>{Te.value=!1,Ce.value=!0},ta=o({url:"",appCode:"",defaultBranch:"",gitType:"",voucherType:"",branch:"",codeSourceStatus:0,repoId:null});let oa=a(),ua="";u((async()=>{ra();try{const e=await F(Se);if(0===e.code&&e.data){const a=e.data;oa.value=a,ta.url=a.git_url,ta.appCode=a.app_name,ta.defaultBranch=a.git_branch,ta.branch=a.git_branch;const l=Q(a.CreatedAt).format("YYYY-MM-DD HH:mm:ss");ua=a.app_name,a.stages.forEach((e=>{const a=e.task_list.map((e=>({transformIndex:0,name:e.name,branch:e.branch,image:e.image||"",voucherType:"1",textarea:e.script||"#!/bin/sh",spatialName:e.spatial_name||"",warehouse:e.warehouse||"",mirrorTag:e.mirror_tag||"",dockerfile:e.dockerfile||"",contextPath:e.context_path||"",productName:e.product_name||"",productPath:e.product_path||"",version:e.version||"",resource:e.resource||"",yamlResource:e.yaml_resource||"",goalResource:e.goal_resource||"",openScript:e.open_script||""})));we.value.push({name:e.name,params:e.params||[],taskList:a})})),Ee.push({label:"应用标识",value:a.app_name},{label:"仓库地址",value:a.git_url},{label:"环境",value:a.env_name},{label:"创建时间",value:l},{label:"默认分支",value:a.git_branch},{label:"凭证",value:a.registry_user})}}catch(e){}await da();try{const e=await $({page:1,pageSize:1e3});e&&e.data&&e.data.list&&(Ae.value=e.data.list,Ae.value.length>0&&(Xe.value.warehouse=Ae.value[0].config.url))}catch(e){}try{const e=await G({page:1,pageSize:10});e&&e.data&&e.data.list&&(Fe.value=e.data.list,Fe.value.length>0&&(Xe.value.image=Fe.value[0].image))}catch(e){}try{const e=await H(Se);1===e.data.enable?ba.value=!0:ba.value=!1,_a.value=e.data.cache_option,ya.value=e.data.cache_dir}catch(e){}try{const e=await M(Se);1===e.data.enable?ca.value=!0:ca.value=!1,ma.value=e.data.notice_event,pa.value=e.data.notice_type,va.value=e.data.webhook}catch(e){}}));const ra=async()=>{try{const e=await X({page:1,pageSize:1e4});0===e.code&&e.data.list&&(ze.value=e.data.list)}catch(e){}},sa=async()=>{const e={ID:parseInt(Se),name:oa.value.name,app_name:ta.appCode,env_name:oa.value.env_name,build_script:"#!/bin/sh",k8s_namespace:He(na.environment,"namespace"),k8s_cluster_name:oa.value.k8s_cluster_name,registry_url:"".concat(Xe.value.warehouse,"/").concat(Xe.value.spatialName),registry_user:Le(Xe.value.warehouse).username,registry_pass:Le(Xe.value.warehouse).password,git_url:"https://gitee.com/dycloud5416/spring-boot-helloWorld.git",git_branch:"main",repo_id:ta.repoId,git_commit_id:"",stages:we.value.map(((e,a)=>({name:e.name,params:e.params.map((e=>({name:e.name,defaultValue:e.defaultValue}))),task_list:e.taskList.map(((e,a)=>({name:e.name,branch:e.branch||"".concat(a+1),plugin:"maven"===e.name?"执行脚本":"build-and-push"===e.name?"镜像打包并推送到仓库":"deploy"===e.name?"部署到Kubernetes":"",image:"deploy"===e.name?"swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/rancher/kubectl:v1.23.3":e.image||"",script:e.textarea||"",spatial_name:e.spatialName||"",warehouse:"build-and-push"===e.name?"registry.cn-hangzhou.aliyuncs.com/dyclouds":e.warehouse||"",mirror_tag:e.mirrorTag||"",dockerfile:e.dockerfile||"",context_path:e.contextPath||"",product_name:e.productName||"",product_path:e.productPath||"",version:e.version||"",resource:e.resource||"",yaml_resource:e.yamlResource||"",goal_resource:e.goalResource||"",open_script:e.openScript||""})))})))},a=na.environment,l=na.environmentOptions.find((e=>e.value===a));let t;e.k8s_namespace=l?l.namespace:"default",t=await W(e),t&&0===t.code?r.success("流水线已保存"):r({type:"error",message:t?t.msg:"操作失败"})},da=async()=>{try{const e=await B({app_code:ua});0===e.code&&e.data?(ta.url=e.data.gitRepo||"",ta.defaultBranch=e.data.branch||"main",ta.appCode=e.data.appCode,na.environmentOptions=e.data.envs.map((e=>({label:e.envName,value:e.envCode,namespace:e.namespace,clusterName:e.clusterName})))):r.error(e.msg||"获取应用详情失败")}catch(e){r.error("加载应用详情失败，请稍后重试")}},na=o({namespace:"",name:"",environment:"",environmentOptions:[]}),ia=()=>{xe.value=!0},ca=a(!1),ma=a(["构建开始","构建成功"]),pa=a("钉钉通知"),va=a(""),fa=s((()=>"钉钉通知"===pa.value?'添加钉钉机器人方式， 可参考 <a href="https://open.dingtalk.com" target="_blank">钉钉开放平台</a>':"飞书通知"===pa.value?'添加飞书机器人方式， 可参考 <a href="https://open.feishu.cn" target="_blank">飞书开发者指南</a>':"请选择通知方式并填写Webhook URL")),ha=async()=>{let e;e=1==ca.value?1:2;try{const a=await J({pipeline_id:parseInt(Se,10),enable:e,notice_event:ma.value,notice_type:pa.value,webhook:va.value});0===a.code&&a.data?r.success("更新成功"):r.error(a.msg||"创建通知失败")}catch(a){r.error("创建通知失败，请稍后重试")}},ba=a(!1),_a=a("workspace"),ya=a(""),ga=async()=>{let e,a;e="workspace"==_a.value?"${WORKSPACE}/cache":ya.value,a=1==ba.value?1:2;try{const l=await Y({pipeline_id:parseInt(Se,10),enable:a,cache_option:_a.value,cache_dir:e});0===l.code&&l.data?r.success("更新成功"):r.error(l.msg||"创建通知失败")}catch(l){r.error("创建通知失败，请稍后重试")}},Va=()=>{ba.value=!1,_a.value="workspace",ya.value=""},ka=()=>{Ue.push("/")},wa=()=>{Ue.back()};return(e,a)=>{const l=z,t=L,o=R,u=A,r=x,s=V,B=Z,F=D,H=d("CircleCloseFilled"),M=k,W=w,J=I,Y=ee,Q=ae,$=N,G=P,X=E,Ue=O,Se=q,Te=d("QuestionFilled"),Le=T,He=S,oa=j,ua=U,ra=C;return n(),i("div",le,[c(t,{separator:"/"},{default:m((()=>[c(l,{onClick:ka,style:{cursor:"pointer"}},{default:m((()=>a[37]||(a[37]=[p("首页")]))),_:1}),c(l,{onClick:wa,style:{cursor:"pointer"}},{default:m((()=>a[38]||(a[38]=[p("流水线")]))),_:1}),c(l,null,{default:m((()=>a[39]||(a[39]=[p("构建详情")]))),_:1})])),_:1}),a[89]||(a[89]=v("h2",{style:{margin:"20px 0"}},"构建详情",-1)),c(ra,{modelValue:qe.value,"onUpdate:modelValue":a[36]||(a[36]=e=>qe.value=e),type:"border-card","tab-bar-style":"border-bottom: 2px solid #409EFF;",class:"custom-tabs"},{default:m((()=>[c(r,{label:"基本信息",name:"basic-info"},{default:m((()=>[a[40]||(a[40]=v("h3",{style:{"margin-bottom":"20px"}},"基本信息",-1)),c(u,{data:Ee,border:"",style:{width:"100%"}},{default:m((()=>[c(o,{prop:"label",label:"字段",width:"150"}),c(o,{prop:"value",label:"值"})])),_:1},8,["data"])])),_:1}),c(r,{label:"流程编排",name:"flow-design"},{default:m((()=>[c(He,{class:"page-scrollbar"},{default:m((()=>[c(F,{class:"card-section",shadow:"never"},{default:m((()=>[a[44]||(a[44]=v("h3",null,"阶段任务",-1)),v("div",te,[v("div",oe,[v("div",ue,[c(F,{class:"task-card",shadow:"always"},{default:m((()=>[v("div",re,[c(s,{type:"primary",plain:"",onClick:ia},{default:m((()=>a[41]||(a[41]=[p("关联代码库")]))),_:1}),ta.url?(n(),i("p",se,f(ta.url),1)):h("",!0),ta.branch&&ta.url?(n(),i("div",de,[a[42]||(a[42]=v("i",{class:"el-icon-branch"},null,-1)),c(B,{type:"success"},{default:m((()=>[p(f(ta.branch),1)])),_:1})])):h("",!0)])])),_:1}),v("div",{class:"line-and-button"},[a[43]||(a[43]=v("span",{class:"line"},null,-1)),v("button",{class:"add-task-icon",onClick:la}," + ")])])]),v("div",ne,[v("div",ie,[(n(!0),i(b,null,_(we.value,((e,a)=>(n(),i("div",{key:a,class:"task-group"},[v("div",ce,[c(B,{effect:"dark",round:"",onClick:a=>aa(e,"group")},{default:m((()=>[p(f(e.name||"#test"),1)])),_:2},1032,["onClick"])]),(n(!0),i(b,null,_(e.taskList,((l,t)=>(n(),i("div",{key:t,class:"flow-item"},[c(K,{x:a,y:t,"transform-index":l,phaseName:e.name,isShowAddTaskDialog:0==t,isShowwAdd:t==e.taskList.length-1,onEditTask:e=>aa(l),onCreateTask:a=>(e=>{ea(),Ze.name="",Ze.params=[],Ye.value=!1,Ke.value=e,Ge.value=!0})(e),onHandleCircleClick:a=>((e,a,l)=>{Ye.value=!0,Qe.value=e,Ke.value=a,$e.value=l;for(let t in e)Xe.value[t]=e[t];Ge.value=!0})(l,e,t),onOpenAddTaskDialogFlow:Je,"is-show":!0},null,8,["x","y","transform-index","phaseName","isShowAddTaskDialog","isShowwAdd","onEditTask","onCreateTask","onHandleCircleClick"])])))),128))])))),128))])])])])),_:1}),v("div",me,[c(s,{type:"primary",onClick:sa},{default:m((()=>a[45]||(a[45]=[p("保存")]))),_:1}),c(s,{onClick:je},{default:m((()=>a[46]||(a[46]=[p("取消")]))),_:1})]),c(Se,{modelValue:xe.value,"onUpdate:modelValue":a[6]||(a[6]=e=>xe.value=e),"show-close":!1},{header:m((({close:e,titleId:l,titleClass:t})=>[v("h4",{id:l,class:y(t)},"关联代码库",10,pe),c(s,{type:"danger",onClick:e},{default:m((()=>[c(M,{class:"el-icon--left"},{default:m((()=>[c(H)])),_:1}),a[47]||(a[47]=p(" Close "))])),_:2},1032,["onClick"])])),footer:m((()=>[c(s,{onClick:a[5]||(a[5]=e=>xe.value=!1)},{default:m((()=>a[50]||(a[50]=[p("取消")]))),_:1}),c(s,{type:"primary",onClick:Re},{default:m((()=>a[51]||(a[51]=[p("确认")]))),_:1})])),default:m((()=>[c(Ue,{model:ta,"label-width":"130px"},{default:m((()=>[c(J,{label:"代码库地址",required:""},{default:m((()=>[c(W,{modelValue:ta.url,"onUpdate:modelValue":a[0]||(a[0]=e=>ta.url=e),disabled:!0},null,8,["modelValue"])])),_:1}),c(J,{label:"默认分支",required:""},{default:m((()=>[c(W,{modelValue:ta.defaultBranch,"onUpdate:modelValue":a[1]||(a[1]=e=>ta.defaultBranch=e),disabled:!0},null,8,["modelValue"])])),_:1}),c(J,{label:"选择凭证类型",required:""},{default:m((()=>[c(Q,{modelValue:ta.voucherType,"onUpdate:modelValue":a[2]||(a[2]=e=>ta.voucherType=e)},{default:m((()=>[c(Y,{value:1},{default:m((()=>a[48]||(a[48]=[p("密码方式")]))),_:1}),c(Y,{value:2},{default:m((()=>a[49]||(a[49]=[p("密钥方式")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"服务连接",required:""},{default:m((()=>[c(G,{modelValue:ta.gitType,"onUpdate:modelValue":a[3]||(a[3]=e=>ta.gitType=e),placeholder:"请选择连接",onChange:Be},{default:m((()=>[(n(!0),i(b,null,_(ze.value,(e=>(n(),g($,{key:e.ID,label:e.name,value:e.name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"开启代码源触发",required:""},{default:m((()=>[c(X,{modelValue:ta.codeSourceStatus,"onUpdate:modelValue":a[4]||(a[4]=e=>ta.codeSourceStatus=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),c(Le,{modelValue:Ge.value,"onUpdate:modelValue":a[25]||(a[25]=e=>Ge.value=e),title:Ne.value},{footer:m((()=>[v("footer",ve,[v("div",null,[c(s,{type:"primary",onClick:We},{default:m((()=>a[71]||(a[71]=[p("确认")]))),_:1}),c(s,{onClick:Ie,disabled:!Ye.value,class:"deleteBtn"},{default:m((()=>a[72]||(a[72]=[p("删除")]))),_:1},8,["disabled"])]),c(s,{onClick:a[24]||(a[24]=e=>Ge.value=!1)},{default:m((()=>a[73]||(a[73]=[p("取消")]))),_:1})])])),default:m((()=>[c(Ue,{model:Xe.value,"label-width":"130px"},{default:m((()=>[c(J,{label:"任务名称",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.name,"onUpdate:modelValue":a[7]||(a[7]=e=>Xe.value.name=e),placeholder:"请输入任务名称"},null,8,["modelValue"])])),_:1}),c(J,{label:"任务插件",required:""},{default:m((()=>[c(G,{modelValue:Xe.value.branch,"onUpdate:modelValue":a[8]||(a[8]=e=>Xe.value.branch=e),placeholder:"请选择任务插件",onChange:Oe},{default:m((()=>[c($,{label:"执行脚本",value:"1"}),c($,{label:"镜像打包并推送到仓库",value:"2"}),c($,{label:"构建产物上传至OSS",value:"3"}),c($,{label:"KBS资源部署",value:"4"}),c($,{label:"产物上传制品库",value:"5"})])),_:1},8,["modelValue"])])),_:1}),"1"==Xe.value.branch?(n(),g(F,{key:0,class:"card-section",shadow:"never"},{default:m((()=>[c(J,{label:"目标资源",required:""},{default:m((()=>[c(G,{modelValue:Xe.value.image,"onUpdate:modelValue":a[9]||(a[9]=e=>Xe.value.image=e),placeholder:"请选择目标资源"},{default:m((()=>[(n(!0),i(b,null,_(Fe.value,(e=>(n(),g($,{key:e.ID,label:e.image,value:e.image},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"脚本类型",required:""},{default:m((()=>[c(Q,{modelValue:Xe.value.voucherType,"onUpdate:modelValue":a[10]||(a[10]=e=>Xe.value.voucherType=e),onChange:Pe},{default:m((()=>[c(Y,{value:"1"},{default:m((()=>a[52]||(a[52]=[p("sh")]))),_:1}),c(Y,{value:"2"},{default:m((()=>a[53]||(a[53]=[p("bash")]))),_:1}),c(Y,{value:"3"},{default:m((()=>a[54]||(a[54]=[p("python")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"执行脚本",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.textarea,"onUpdate:modelValue":a[11]||(a[11]=e=>Xe.value.textarea=e),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])),_:1})])),_:1})):h("",!0),"2"==Xe.value.branch?(n(),g(F,{key:1,class:"card-section",shadow:"never"},{default:m((()=>[c(J,{label:"镜像仓库：",required:""},{label:m((()=>[a[55]||(a[55]=v("span",null,"镜像仓库",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[56]||(a[56]=p(" : "))])),default:m((()=>[c(G,{modelValue:Xe.value.warehouse,"onUpdate:modelValue":a[12]||(a[12]=e=>Xe.value.warehouse=e),placeholder:"请选择镜像仓库",filterable:"","allow-create":""},{default:m((()=>[(n(!0),i(b,null,_(Ae.value,((e,a)=>(n(),g($,{key:a,label:e.config.url,value:e.config.url},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"空间名称：",required:""},{label:m((()=>[a[57]||(a[57]=v("span",null,"空间名称",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[58]||(a[58]=p(": "))])),default:m((()=>[c(W,{modelValue:Xe.value.spatialName,"onUpdate:modelValue":a[13]||(a[13]=e=>Xe.value.spatialName=e),placeholder:"请输入空间名称"},null,8,["modelValue"])])),_:1}),c(J,{label:"镜像标签：",required:""},{label:m((()=>[a[59]||(a[59]=v("span",null,"镜像标签",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[60]||(a[60]=p(": "))])),default:m((()=>[c(W,{modelValue:Xe.value.mirrorTag,"onUpdate:modelValue":a[14]||(a[14]=e=>Xe.value.mirrorTag=e),placeholder:"请输入镜像标签"},null,8,["modelValue"])])),_:1}),c(J,{label:"Dockerfile：",required:""},{label:m((()=>[a[61]||(a[61]=v("span",null,"Dockerfile",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[62]||(a[62]=p(": "))])),default:m((()=>[c(W,{modelValue:Xe.value.dockerfile,"onUpdate:modelValue":a[15]||(a[15]=e=>Xe.value.dockerfile=e),placeholder:"请输入Dockerfile"},null,8,["modelValue"])])),_:1}),c(J,{label:"ContextPath："},{label:m((()=>[a[63]||(a[63]=v("span",null,"ContextPath",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[64]||(a[64]=p(": "))])),default:m((()=>[c(W,{modelValue:Xe.value.contextPath,"onUpdate:modelValue":a[16]||(a[16]=e=>Xe.value.contextPath=e),placeholder:"请输入ContextPath"},null,8,["modelValue"])])),_:1})])),_:1})):h("",!0),"3"==Xe.value.branch?(n(),g(F,{key:2,class:"card-section",shadow:"never"},{default:m((()=>[c(J,{label:"产品名称：",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.productName,"onUpdate:modelValue":a[17]||(a[17]=e=>Xe.value.productName=e),placeholder:"请输入产品名称"},null,8,["modelValue"])])),_:1}),c(J,{label:"产品路径：",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.productPath,"onUpdate:modelValue":a[18]||(a[18]=e=>Xe.value.productPath=e),placeholder:"请输入产品路径"},null,8,["modelValue"])])),_:1})])),_:1})):h("",!0),"4"==Xe.value.branch?(n(),g(F,{key:3,class:"card-section",shadow:"never"},{default:m((()=>[c(J,{label:"kubectl版本",required:""},{label:m((()=>[a[65]||(a[65]=v("span",null,"kubectl版本",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[66]||(a[66]=p(": "))])),default:m((()=>[c(G,{modelValue:Xe.value.version,"onUpdate:modelValue":a[19]||(a[19]=e=>Xe.value.version=e),placeholder:"请选择kubectl版本"},{default:m((()=>[c($,{label:"swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/rancher/kubectl:v1.23.3",value:"1"}),c($,{label:"v1.23.6",value:"2"})])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"资源类型：",required:""},{label:m((()=>[a[67]||(a[67]=v("span",null,"资源类型",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[68]||(a[68]=p(": "))])),default:m((()=>[c(G,{modelValue:Xe.value.resource,"onUpdate:modelValue":a[20]||(a[20]=e=>Xe.value.resource=e),placeholder:"请选择资源类型"},{default:m((()=>[c($,{label:"Deployment",value:"1"}),c($,{label:"Statefulset",value:"2"}),c($,{label:"DaemonSet",value:"3"}),c($,{label:"Service",value:"4"}),c($,{label:"Ingress",value:"5"}),c($,{label:"ConfigMap",value:"6"}),c($,{label:"Secret",value:"7"})])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"YAML资源",required:""},{label:m((()=>[a[69]||(a[69]=v("span",null,"YAML资源",-1)),c(M,{class:"label",style:{"font-size":"15px"}},{default:m((()=>[c(Te)])),_:1}),a[70]||(a[70]=p(": "))])),default:m((()=>[c(W,{modelValue:Xe.value.yamlResource,"onUpdate:modelValue":a[21]||(a[21]=e=>Xe.value.yamlResource=e),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])),_:1})])),_:1})):h("",!0),"5"==Xe.value.branch?(n(),g(F,{key:4,class:"card-section",shadow:"never"},{default:m((()=>[c(J,{label:"目标资源：",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.name,"onUpdate:modelValue":a[22]||(a[22]=e=>Xe.value.name=e),placeholder:"请输入目标资源"},null,8,["modelValue"])])),_:1}),c(J,{label:"执行脚本",required:""},{default:m((()=>[c(W,{modelValue:Xe.value.openScript,"onUpdate:modelValue":a[23]||(a[23]=e=>Xe.value.openScript=e),style:{width:"550px"},rows:10,type:"textarea",placeholder:"Please input"},null,8,["modelValue"])])),_:1})])),_:1})):h("",!0)])),_:1},8,["model"])])),_:1},8,["modelValue","title"]),c(Le,{modelValue:Ce.value,"onUpdate:modelValue":a[28]||(a[28]=e=>Ce.value=e),title:"添加阶段"},{default:m((()=>[c(Ue,{model:Ze,"label-width":"80px"},{default:m((()=>[c(J,{label:"阶段名称",required:!0},{default:m((()=>[c(W,{modelValue:Ze.name,"onUpdate:modelValue":a[26]||(a[26]=e=>Ze.name=e),placeholder:"请输入阶段名称"},null,8,["modelValue"])])),_:1}),c(J,{label:"阶段参数",required:!0},{default:m((()=>[c(u,{"empty-text":"",data:Ze.params},{default:m((()=>[c(o,{prop:"name",label:"参数"},{default:m((({row:e})=>[c(W,{modelValue:e.name,"onUpdate:modelValue":a=>e.name=a,placeholder:"参数名称"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),c(o,{prop:"defaultValue",label:"默认值"},{default:m((({row:e})=>[c(W,{modelValue:e.defaultValue,"onUpdate:modelValue":a=>e.defaultValue=a,placeholder:"请输入参数默认值"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),c(o,{label:""},{default:m((({row:e,index:l})=>[c(s,{onClick:e=>((e,a)=>{Ze.params.splice(a,1)})(0,l),type:"text",size:"small"},{default:m((()=>a[74]||(a[74]=[p("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),c(s,{onClick:De,class:"addBtn"},{default:m((()=>a[75]||(a[75]=[p("+ 添加自定义参数")]))),_:1}),v("footer",fe,[c(s,{style:{"border-radius":"0px",background:"blue",border:"none"},type:"primary",onClick:Me},{default:m((()=>a[76]||(a[76]=[p("确定")]))),_:1}),c(s,{style:{"border-radius":"0px"},onClick:a[27]||(a[27]=e=>Ce.value=!1)},{default:m((()=>a[77]||(a[77]=[p("取消")]))),_:1})])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),c(r,{label:"消息通知",name:"message-notify"},{default:m((()=>[v("div",he,[a[80]||(a[80]=v("h3",null,"消息通知",-1)),a[81]||(a[81]=v("p",{style:{color:"#888"}},"开启通知提醒开关，并配置通知事件和通知方式",-1)),c(Ue,null,{default:m((()=>[c(J,{label:"通知提醒：",style:{"margin-bottom":"20px"}},{default:m((()=>[c(X,{modelValue:ca.value,"onUpdate:modelValue":a[29]||(a[29]=e=>ca.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),ca.value?(n(),i("div",be,[c(J,{label:"通知事件：",style:{"margin-bottom":"20px"}},{default:m((()=>[c(ua,{modelValue:ma.value,"onUpdate:modelValue":a[30]||(a[30]=e=>ma.value=e)},{default:m((()=>[c(oa,{label:"构建开始"}),c(oa,{label:"构建成功"}),c(oa,{label:"构建失败"}),c(oa,{label:"构建中止"})])),_:1},8,["modelValue"])])),_:1}),c(J,{label:"通知方式：",style:{"margin-bottom":"20px"}},{default:m((()=>[v("div",null,[a[78]||(a[78]=v("p",null,"Webhook通知 推送一条POST请求，详细样例见文档",-1)),v("div",_e,[c(G,{modelValue:pa.value,"onUpdate:modelValue":a[31]||(a[31]=e=>pa.value=e),placeholder:"选择通知方式",style:{flex:"2"}},{default:m((()=>[c($,{label:"钉钉通知",value:"钉钉通知"}),c($,{label:"飞书通知",value:"飞书通知"})])),_:1},8,["modelValue"]),c(W,{modelValue:va.value,"onUpdate:modelValue":a[32]||(a[32]=e=>va.value=e),placeholder:"请输入Webhook URL",style:{flex:"3"}},null,8,["modelValue"])]),v("div",ye,[v("span",{innerHTML:fa.value},null,8,ge)])])])),_:1}),c(s,{type:"primary",onClick:ha},{default:m((()=>a[79]||(a[79]=[p("更新")]))),_:1})])):h("",!0)])])),_:1}),c(r,{label:"缓存目录",name:"cache-dir"},{default:m((()=>[v("div",Ve,[a[86]||(a[86]=v("h3",null,"缓存目录",-1)),a[87]||(a[87]=v("p",{style:{color:"#888"}},"持续交付默认提供以下缓存目录，用于提高构建效率",-1)),c(Ue,null,{default:m((()=>[c(J,{label:"缓存配置",style:{"margin-bottom":"20px"}},{default:m((()=>[c(X,{modelValue:ba.value,"onUpdate:modelValue":a[33]||(a[33]=e=>ba.value=e)},null,8,["modelValue"])])),_:1})])),_:1}),ba.value?(n(),i("div",ke,[c(J,null,{default:m((()=>[c(Q,{modelValue:_a.value,"onUpdate:modelValue":a[34]||(a[34]=e=>_a.value=e)},{default:m((()=>[c(Y,{label:"workspace"},{default:m((()=>a[82]||(a[82]=[p("工作空间 ${WORKSPACE}/cache")]))),_:1}),c(Y,{label:"custom"},{default:m((()=>a[83]||(a[83]=[p("自定义目录")]))),_:1})])),_:1},8,["modelValue"])])),_:1}),"custom"===_a.value?(n(),g(J,{key:0,style:{"margin-top":"10px"}},{default:m((()=>[c(W,{modelValue:ya.value,"onUpdate:modelValue":a[35]||(a[35]=e=>ya.value=e),placeholder:"以变量方式定义，例如：${WORKSPACE}/gomod"},null,8,["modelValue"])])),_:1})):h("",!0),c(J,{style:{"margin-top":"20px"}},{default:m((()=>[c(s,{type:"primary",onClick:ga},{default:m((()=>a[84]||(a[84]=[p("保存")]))),_:1}),c(s,{onClick:Va},{default:m((()=>a[85]||(a[85]=[p("取消")]))),_:1})])),_:1})])):h("",!0)])])),_:1}),c(r,{label:"构建历史",name:"build-history"},{default:m((()=>a[88]||(a[88]=[p(" 构建历史内容... ")]))),_:1})])),_:1},8,["modelValue"])])}}},[["__scopeId","data-v-427ed31d"]]);export{we as default};