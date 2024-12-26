/*! 
 Build based on  
 Time : 1735190558000 */
import{s as e}from"./index.ABWJOL2Q.js";const t=e=>"/kubernetes/".concat(e,"/api/v1/nodes"),s=t=>e({url:"/kubernetes/nodes",method:"get",params:t}),a=t=>e({url:"/kubernetes/nodeDetails",method:"get",params:t}),o=t=>e({url:"/kubernetes/nodes",method:"put",data:t}),n=(s,a)=>e({url:"".concat(t(s),"/").concat(a),method:"delete"});export{a as D,s as G,n as N,o as a};
