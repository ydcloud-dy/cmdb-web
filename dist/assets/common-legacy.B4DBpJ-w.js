/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js","./upload-legacy.CtTk_xln.js","./progress-legacy.DmXn2V_b.js","./button-legacy.CH0FoAJ-.js","./image-legacy.C9t4zlps.js"],(function(e,t){"use strict";var n,o,a,r,i,l,u,d,c,s,p,f,m,g,v,b;return{setters:[function(e){n=e.s,o=e._,a=e.o,r=e.c,i=e.e,l=e.w,u=e.g,d=e.B,c=e.di,s=e.i,p=e.E,f=e.a},function(e){m=e.E},null,null,function(e){g=e.I,v=e.i,b=e.a}],execute:function(){var t=document.createElement("style");t.textContent=".image-uploader[data-v-2dbbcee1]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;border-color:#409eff}.image-uploader-icon[data-v-2dbbcee1]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-2dbbcee1]{width:178px;height:178px;display:block}\n",document.head.appendChild(t),e("g",(function(e){return n({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),e("d",(function(e){return n({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),e("e",(function(e){return n({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})})),e("i",(function(e){return n({url:"/fileUploadAndDownload/importURL",method:"post",data:e})})),e("U",o(Object.assign({name:"UploadImage"},{__name:"image",props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,o=e,f=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return s.error("上传头像图片只能是 jpg或png 格式!"),!1;var a=e.size/1024<o.fileSize;return a||new g(e,o.fileSize,o.maxWH).compress()},v=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=p,o=m;return a(),r("div",null,[i(o,{action:"".concat(d(c)(),"/fileUploadAndDownload/upload"),"show-file-list":!1,"on-success":v,"before-upload":f,multiple:!1},{default:l((function(){return[i(n,{type:"primary"},{default:l((function(){return t[0]||(t[0]=[u("压缩上传")])})),_:1})]})),_:1},8,["action"])])}}}),[["__scopeId","data-v-2dbbcee1"]])),e("_",Object.assign({name:"UploadCommon"},{__name:"common",emits:["on-success"],setup:function(e,t){var n=t.emit,o=f(!1),g=function(e){o.value=!0;var t=e.size/1024/1024<.5,n=e.size/1024/1024<5,a=v(e.type),r=b(e.type),i=!0;return a||r||(s.error("上传图片只能是 jpg,png,svg,webp 格式, 上传视频只能是 mp4,webm 格式!"),o.value=!1,i=!1),!n&&a&&(s.error("上传视频大小不能超过 5MB"),o.value=!1,i=!1),!t&&r&&(s.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),o.value=!1,i=!1),i},y=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},h=function(){s({type:"error",message:"上传失败"}),o.value=!1};return function(e,t){var n=p,o=m;return a(),r("div",null,[i(o,{action:"".concat(d(c)(),"/fileUploadAndDownload/upload"),"before-upload":g,"on-error":h,"on-success":y,"show-file-list":!1,multiple:"",class:"upload-btn"},{default:l((function(){return[i(n,{type:"primary"},{default:l((function(){return t[0]||(t[0]=[u("普通上传")])})),_:1})]})),_:1},8,["action"])])}}}))}}}));
