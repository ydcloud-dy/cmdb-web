/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e}from"./index.ABWJOL2Q.js";const o=(o,a)=>void 0===a.name?e({url:"/docker/".concat(o,"/volume/list?page=").concat(a.page,"&pageSize=").concat(a.pageSize),method:"get"}):e({url:"/docker/".concat(o,"/volume/list?name=").concat(a.name,"&page=").concat(a.page,"&pageSize=").concat(a.pageSize),method:"get"}),a=(o,a)=>e({url:"/docker/".concat(o,"/volume"),method:"delete",data:a}),t=(o,a)=>e({url:"/docker/".concat(o,"/volume"),method:"post",data:a}),c=o=>e({url:"/docker/".concat(o,"/system/info"),method:"get"});export{t as c,a as d,c as g,o as l};
