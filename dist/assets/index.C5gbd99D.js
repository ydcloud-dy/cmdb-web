/*! 
 Build based on  
 Time : 1735190558000 */
import{aZ as e,bC as r,bD as a}from"./index.ABWJOL2Q.js";const t=(t,i)=>{const l={},n=e([]);return{children:n,addChild:e=>{l[e.uid]=e,n.value=((e,t,i)=>r(e.subTree).filter((e=>{var r;return a(e)&&(null==(r=e.type)?void 0:r.name)===t&&!!e.component})).map((e=>e.component.uid)).map((e=>i[e])).filter((e=>!!e)))(t,i,l)},removeChild:e=>{delete l[e],n.value=n.value.filter((r=>r.uid!==e))}}};export{t as u};
