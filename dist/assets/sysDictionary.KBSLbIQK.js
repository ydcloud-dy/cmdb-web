/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e,a,P as t,o as l,c as s,e as r,b as i,w as o,g as u,F as n,v as d,n as c,t as m,O as p,B as y,dF as v,cu as b,i as f,E as j,Q as x,k as g}from"./index.ABWJOL2Q.js";import{E as h}from"./drawer.XhtctEYG.js";import"./overlay.CDLw2uOw.js";/* empty css             */import{E as w}from"./switch.CqADXIhW.js";import{a as D,E as k}from"./form-item.ujPiwBAF.js";/* empty css              */import{E as _}from"./scrollbar.3ySweVnY.js";/* empty css               */import{_ as V}from"./warningBar.BzThqhMC.js";import C from"./sysDictionaryDetail.Cs1UCx3H.js";import"./index.BRjlB3m5.js";import"./index.D4uEcQv3.js";import"./castArray.9wqFpW2Z.js";import"./_baseClone.gl1e0kmI.js";import"./_Uint8Array.BjvNwsUf.js";import"./_initCloneObject.jmqS1x-g.js";import"./input-number.DAPMCn-P.js";import"./index.7ugBSK5z.js";import"./pagination.BfYt3rvk.js";import"./select.C2tLDQ30.js";import"./index.DglrVZRl.js";import"./token.DWNpOE8r.js";import"./strings.C2tuonvC.js";import"./isEqual.CtpQH3Dm.js";import"./debounce.CkdGDwJt.js";import"./_baseIteratee.BPaQBmlP.js";import"./index.6ock-Gvr.js";/* empty css            *//* empty css               */import"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                */const I=a=>e({url:"/sysDictionary/createSysDictionary",method:"post",data:a}),E={class:"flex gap-4 p-2"},U={class:"flex-none w-52 bg-white text-slate-700 dark:text-slate-400 dark:bg-slate-900 rounded p-4"},S={class:"flex justify-between items-center"},q=["onClick"],F={class:"max-w-[160px] truncate"},B={class:"min-w-[40px]"},O={class:"flex-1 bg-white text-slate-700 dark:text-slate-400 dark:bg-slate-900"},A={class:"flex justify-between items-center"},P={class:"text-lg"},Q=Object.assign({name:"SysDictionary"},{__name:"sysDictionary",setup(Q){const T=a(0),z=a({name:null,type:null,status:!0,desc:null}),L=a({name:[{required:!0,message:"请输入字典名（中）",trigger:"blur"}],type:[{required:!0,message:"请输入字典名（英）",trigger:"blur"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]}),G=a([]),H=async()=>{const a=await e({url:"/sysDictionary/getSysDictionaryList",method:"get",params:t});var t;0===a.code&&(G.value=a.data,T.value=a.data[0].ID)};H();const J=a(!1),K=a(""),M=async a=>{const t=await(l={ID:a.ID,status:a.status},e({url:"/sysDictionary/findSysDictionary",method:"get",params:l}));var l;K.value="update",0===t.code&&(z.value=t.data.resysDictionary,J.value=!0)},N=()=>{J.value=!1,z.value={name:null,type:null,status:!0,desc:null}},R=async a=>{b.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{var t;0===(await(t={ID:a.ID},e({url:"/sysDictionary/deleteSysDictionary",method:"delete",data:t}))).code&&(f({type:"success",message:"删除成功"}),H())}))},W=a(null),X=async()=>{W.value.validate((async a=>{if(!a)return;let t;switch(K.value){case"create":default:t=await I(z.value);break;case"update":t=await(l=z.value,e({url:"/sysDictionary/updateSysDictionary",method:"put",data:l}))}var l;0===t.code&&(f.success("操作成功"),N(),H())}))},Y=()=>{K.value="create",W.value&&W.value.clearValidate(),J.value=!0};return(e,a)=>{const b=j,f=x,I=t("Delete"),Q=_,H=g,Z=D,$=w,ee=k,ae=h;return l(),s("div",null,[r(V,{title:"获取字典且缓存方法已在前端utils/dictionary 已经封装完成 不必自己书写 使用方法查看文件内注释"}),i("div",E,[i("div",U,[i("div",S,[a[6]||(a[6]=i("span",{class:"text font-bold"},"字典列表",-1)),r(b,{type:"primary",onClick:Y},{default:o((()=>a[5]||(a[5]=[u(" 新增 ")]))),_:1})]),r(Q,{class:"mt-4",style:{height:"calc(100vh - 300px)"}},{default:o((()=>[(l(!0),s(n,null,d(G.value,(e=>(l(),s("div",{key:e.ID,class:c(["rounded flex justify-between items-center px-2 py-4 cursor-pointer mt-2 hover:bg-blue-50 dark:hover:bg-blue-900 bg-gray-50 dark:bg-gray-800 gap-4",T.value===e.ID?"text-active":"text-slate-700 dark:text-slate-50"]),onClick:a=>{return t=e,void(T.value=t.ID);var t}},[i("span",F,m(e.name),1),i("div",B,[r(f,{class:"text-blue-500",onClick:p((a=>M(e)),["stop"])},{default:o((()=>[r(y(v))])),_:2},1032,["onClick"]),r(f,{class:"ml-2 text-red-500",onClick:a=>R(e)},{default:o((()=>[r(I)])),_:2},1032,["onClick"])])],10,q)))),128))])),_:1})]),i("div",O,[r(C,{"sys-dictionary-i-d":T.value},null,8,["sys-dictionary-i-d"])])]),r(ae,{modelValue:J.value,"onUpdate:modelValue":a[4]||(a[4]=e=>J.value=e),size:"30%","show-close":!1,"before-close":N},{header:o((()=>[i("div",A,[i("span",P,m("create"===K.value?"添加字典":"修改字典"),1),i("div",null,[r(b,{onClick:N},{default:o((()=>a[7]||(a[7]=[u(" 取 消 ")]))),_:1}),r(b,{type:"primary",onClick:X},{default:o((()=>a[8]||(a[8]=[u(" 确 定 ")]))),_:1})])])])),default:o((()=>[r(ee,{ref_key:"drawerForm",ref:W,model:z.value,rules:L.value,"label-width":"110px"},{default:o((()=>[r(Z,{label:"字典名（中）",prop:"name"},{default:o((()=>[r(H,{modelValue:z.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value.name=e),placeholder:"请输入字典名（中）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),r(Z,{label:"字典名（英）",prop:"type"},{default:o((()=>[r(H,{modelValue:z.value.type,"onUpdate:modelValue":a[1]||(a[1]=e=>z.value.type=e),placeholder:"请输入字典名（英）",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),r(Z,{label:"状态",prop:"status",required:""},{default:o((()=>[r($,{modelValue:z.value.status,"onUpdate:modelValue":a[2]||(a[2]=e=>z.value.status=e),"active-text":"开启","inactive-text":"停用"},null,8,["modelValue"])])),_:1}),r(Z,{label:"描述",prop:"desc"},{default:o((()=>[r(H,{modelValue:z.value.desc,"onUpdate:modelValue":a[3]||(a[3]=e=>z.value.desc=e),placeholder:"请输入描述",clearable:"",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{Q as default};
