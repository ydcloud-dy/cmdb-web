/*! 
 Build based on  
 Time : 1735190558000 */
import{_ as e,a,l,o as t,c as o,b as s,e as n,w as c,g as i,B as r,F as u,v as p,t as m,h as d,cw as v,i as k,cu as f,E as y}from"./index.ABWJOL2Q.js";import{E as b,a as g}from"./table-column.ChuwY-lb.js";import"./checkbox.BcMUmSPv.js";/* empty css                *//* empty css               */import"./scrollbar.3ySweVnY.js";/* empty css            */import{E as h}from"./link.QK3LjIND.js";import{E as _}from"./upload.-Ej7EZzx.js";import"./progress.KCbgDfe_.js";/* empty css               */import{D as j,a as w}from"./terminal.CkdZuQYW.js";const x={class:"dycloud-btn-list"},C={style:{"margin-top":"20px",height:"20px"}},F={key:0},z={key:1,class:"operate-span-primary"},T={class:"dycloud-table-box"},B={name:"FilesBlock"},D=e(Object.assign(B,{props:{form:{default:function(){return{}},type:Object}},setup(e){const B=a("https://"),D=a(void 0),E=a("/api"),O=l(),I=e,N=a([]),A=a("/"),S=a([]),q=async(e,a)=>{H.value.path=e;const l=await w(H.value);0===l.code&&(S.value=l.data.files,A.value=e,N.value=a)},G=a({}),H=a({});G.value=I.form,G.value&&(H.value={cluster_id:G.value.cluster_id,namespace:G.value.metadata.namespace,podName:G.value.metadata.name,containerName:G.value.container_name,path:"/"}),q("/",[]);const J=async e=>{const a=(e=>{H.value.path=Q(e);let a="";const l=Object.keys(H.value);for(let t=0;t<l.length;t++)H.value[l[t]]&&(a+=a?"&".concat(l[t],"=").concat(H.value[l[t]]):"?".concat(l[t],"=").concat(H.value[l[t]]));return a})(e.name),l=localStorage.getItem("token"),t="".concat(B.value,":").concat(D.value,"/kubernetes/pods/downloadFile").concat(a,"&x-token=").concat(l);window.open(t,"_blank")},K=a(""),L=()=>{K.value=E.value+"/kubernetes/pods/uploadFile"+(()=>{let e="";const a=Object.keys(H.value);for(let l=0;l<a.length;l++)H.value[a[l]]&&(e+=e?"&".concat(a[l],"=").concat(H.value[a[l]]):"?".concat(a[l],"=").concat(H.value[a[l]]));return e})()},M=e=>{0===e.code?k({type:"success",message:e.msg}):k({type:"error",message:e.msg}),q(H.value.path,N.value)},P=()=>{k({type:"error",message:"上传失败"})},Q=e=>"/"===A.value?A.value+e:A.value+"/"+e,R=()=>{q("/",[])};return(e,l)=>{const w=y,B=_,D=h,E=b,I=g;return t(),o("div",null,[s("div",x,[n(B,{action:"".concat(K.value),headers:{"x-token":r(O).token},"on-error":P,"on-success":M,"show-file-list":!1,multiple:!0,class:"upload-btn"},{default:c((()=>[n(w,{icon:"Files",size:"small",type:"primary",onClick:L},{default:c((()=>l[0]||(l[0]=[i("上传文件")]))),_:1})])),_:1},8,["action","headers"])]),s("div",C,[n(w,{size:"small",type:"primary",link:"",icon:"Folder",onClick:R},{default:c((()=>l[1]||(l[1]=[i("根目录")]))),_:1}),(t(!0),o(u,null,p(N.value,((e,i)=>(t(),o("span",{key:i},[l[2]||(l[2]=s("span",null,"/",-1)),n(D,{disabled:i===N.value.length-1,onClick:l=>(e=>{const l=a("/"),t=a([]);for(const a of N.value)if(t.value.push(a),l.value=l.value+a+"/",e===a)break;q(l.value,t.value)})(e)},{default:c((()=>[i===N.value.length-1?(t(),o("span",F,m(e),1)):(t(),o("span",z,m(e),1))])),_:2},1032,["disabled","onClick"])])))),128))]),s("div",T,[(t(),d(I,{ref:"multipleTable",key:S.value,data:S.value,style:{width:"100%"},"tooltip-effect":"dark"},{default:c((()=>[n(E,{label:"名称",prop:"name",type:"scope"},{default:c((({row:e})=>[e.isDir?(t(),d(w,{key:0,link:"",icon:"Folder",class:"operate-span-primary",onClick:a=>(e=>{const a=e.name,l=Q(a),t=N.value.concat([a]);q(l,t)})(e)},{default:c((()=>[i(m(e.name)+m(e.link?" -> "+e.link:""),1)])),_:2},1032,["onClick"])):(t(),d(w,{key:1,link:"",icon:"Files",class:"operate-span",onClick:a=>(e=>{""===e.link||k({type:"info",message:"链接文件 不支持此操作"})})(e)},{default:c((()=>[i(m(e.name)+m(e.link?" -> "+e.link:""),1)])),_:2},1032,["onClick"]))])),_:1}),n(E,{label:"大小",prop:"size"}),n(E,{label:"权限",prop:"mode"}),n(E,{label:"所有者",prop:"user"}),n(E,{label:"所属组",prop:"group"}),n(E,{label:"最后修改时间",prop:"modTime",type:"scope"},{default:c((({row:e})=>[s("span",null,m(r(v)(e.modTime)),1)])),_:1}),n(E,{fixed:"right",label:"操作",type:"scope"},{default:c((e=>[n(w,{size:"small",type:"primary",link:"",icon:"Download",onClick:a=>J(e.row)},{default:c((()=>l[3]||(l[3]=[i("下载")]))),_:2},1032,["onClick"]),n(w,{size:"small",type:"primary",link:"",icon:"delete",onClick:l=>(async e=>{const l=a("");e.isDir?l.value="  文件夹":l.value="  文件",f.confirm("您确定要删除  "+e.name+l.value+"  ？该操作不可逆, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{H.value.path=Q(e.name);const a=await j(H.value);0===a.code&&(k({type:"success",message:a.msg}),q(A.value,N.value))})).catch((()=>{k({type:"info",message:"已取消删除!"})}))})(e.row)},{default:c((()=>l[4]||(l[4]=[i("删除")]))),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]))])])}}}),[["__scopeId","data-v-f25daed1"]]);export{D as F};