/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js"],(function(e,t){"use strict";var c;return{setters:[function(e){c=e.s}],execute:function(){e("l",(function(e,t){return void 0===t.name?c({url:"/docker/".concat(e,"/image/list?page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"}):c({url:"/docker/".concat(e,"/image/list?name=").concat(t.name,"&page=").concat(t.page,"&pageSize=").concat(t.pageSize),method:"get"})})),e("d",(function(e,t){return c({url:"/docker/".concat(e,"/image"),method:"delete",data:t})})),e("p",(function(e,t){return c({url:"/docker/".concat(e,"/image/pull"),method:"post",data:t})}))}}}));
