/*! 
 Build based on  
 Time : 1735190558000 */
import{ag as e}from"./index.ABWJOL2Q.js";const t=100,o=600,n={beforeMount(n,a){const r=a.value,{interval:s=t,delay:d=o}=e(r)?{}:r;let i,l;const u=()=>e(r)?r():r.handler(),v=()=>{l&&(clearTimeout(l),l=void 0),i&&(clearInterval(i),i=void 0)};n.addEventListener("mousedown",(e=>{0===e.button&&(v(),u(),document.addEventListener("mouseup",(()=>v()),{once:!0}),l=setTimeout((()=>{i=setInterval((()=>{u()}),s)}),d))}))}};export{n as v};
