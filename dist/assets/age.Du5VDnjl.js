/*! 
 Build based on  
 Time : 1735190558000 */
function e(e){if(null==e)return"";const t=new Date(e),n=(new Date).getTime()-t.getTime(),r=Math.floor(n/864e5);let o="";if(r>0)return o=o+r+" days",o;const s=n%864e5,u=Math.floor(s/36e5);if(u>0)return o=o+u+" hours",o;const a=s%36e5,f=Math.floor(a/6e4);if(f>0)return o=o+f+" mins",o;const i=a%6e4,c=Math.round(i/1e3);return c>0?(o=o+c+" secs",o):o}export{e as A};
