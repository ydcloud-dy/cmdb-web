/*! 
 Build based on  
 Time : 1735190558000 */
import{s as t}from"./index.ABWJOL2Q.js";const a=a=>t({url:"/cicd/applications",method:"post",data:a,loadingOption:{target:".right-container"}}),o=a=>t({url:"/cicd/applications/deploymentInfo",method:"post",data:a,loadingOption:{target:".right-container"}}),i=a=>t({url:"/cicd/applications/".concat(a),method:"delete",loadingOption:{target:".right-container"}}),c=a=>t({url:"/cicd/applications",method:"put",data:a}),e=a=>t({url:"/cicd/applications/".concat(a),method:"get"}),p=a=>t({url:"/cicd/applicationsByName",method:"get",params:a}),n=a=>t({url:"/cicd/applications",method:"get",params:a}),r=a=>t({url:"/configCenter/sourceCode/repo/projects",method:"get",params:a});export{r as G,n as a,i as b,a as c,e as d,p as e,o as g,c as u};
