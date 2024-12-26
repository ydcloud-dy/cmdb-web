/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e}from"./index.ABWJOL2Q.js";const a=(a,t)=>void 0===t.name?e({url:"/docker/".concat(a,"/network/list?page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}):e({url:"/docker/".concat(a,"/network/list?name=").concat(t.name,"&page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}),t=(a,t)=>e({url:"/docker/".concat(a,"/network"),method:"delete",data:t}),o=(a,t)=>e({url:"/docker/".concat(a,"/network"),method:"post",data:t});export{o as c,t as d,a as l};
