/*! 
 Build based on  
 Time : 1735190558000 */
System.register([],(function(e,r){"use strict";return{execute:function(){e("A",(function(e){if(null==e)return"";var r=new Date(e),t=(new Date).getTime()-r.getTime(),n=Math.floor(t/864e5),u="";if(n>0)return u=u+n+" days";var i=t%864e5,a=Math.floor(i/36e5);if(a>0)return u=u+a+" hours";var o=i%36e5,f=Math.floor(o/6e4);if(f>0)return u=u+f+" mins";var s=o%6e4,c=Math.round(s/1e3);return c>0?u=u+c+" secs":u}))}}}));
