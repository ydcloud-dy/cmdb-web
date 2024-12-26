/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js"],(function(e,t){"use strict";var n;return{setters:[function(e){n=e.s}],execute:function(){e("l",(function(e,t){return void 0===t.name?n({url:"/docker/".concat(e,"/network/list?page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}):n({url:"/docker/".concat(e,"/network/list?name=").concat(t.name,"&page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"})})),e("d",(function(e,t){return n({url:"/docker/".concat(e,"/network"),method:"delete",data:t})})),e("c",(function(e,t){return n({url:"/docker/".concat(e,"/network"),method:"post",data:t})}))}}}));
