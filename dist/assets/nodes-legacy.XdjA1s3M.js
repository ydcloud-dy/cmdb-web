/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.s}],execute:function(){var t=function(e){return"/kubernetes/".concat(e,"/api/v1/nodes")};e("G",(function(e){return n({url:"/kubernetes/nodes",method:"get",params:e})})),e("D",(function(e){return n({url:"/kubernetes/nodeDetails",method:"get",params:e})})),e("a",(function(e){return n({url:"/kubernetes/nodes",method:"put",data:e})})),e("N",(function(e,r){return n({url:"".concat(t(e),"/").concat(r),method:"delete"})}))}}}));
