/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e}from"./index.ABWJOL2Q.js";const a=(a,t)=>void 0===t.name?e({url:"/docker/".concat(a,"/image/list?page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}):e({url:"/docker/".concat(a,"/image/list?name=").concat(t.name,"&page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}),t=(a,t)=>e({url:"/docker/".concat(a,"/image"),method:"delete",data:t}),c=(a,t)=>e({url:"/docker/".concat(a,"/image/pull"),method:"post",data:t});export{t as d,a as l,c as p};
