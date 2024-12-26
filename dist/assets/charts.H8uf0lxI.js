/*! 
 Build based on  
 Time : 1735190558000 */
import{t as e,i as t}from"./index.DrIIbIcU.js";import{y as n,aZ as o,V as s,$ as a,H as i,Z as r,R as l,N as u,q as c,a0 as p,bQ as d,bK as f,B as h,a1 as v,a as g,o as m,h as y,K as O,f as _,d1 as b}from"./index.ABWJOL2Q.js";import{n as E,i as w,t as j,a as x,b as z,c as L}from"./index.BkD0mVs7.js";const A=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function C(e){return function(){const t=Object.create(null);return A.forEach((n=>{t[n]=function(t){return(...n)=>{if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[t].apply(e.value,n)}}(n)})),t}()}const k={autoresize:[Boolean,Object]},H=/^on[^a-z]/,R=e=>H.test(e);function U(e,t){const n=f(e)?h(e):e;return n&&"object"==typeof n&&"value"in n?n.value||t:n||t}const D={loading:Boolean,loadingOptions:Object};let B=null;const M="x-vue-echarts";document.head.appendChild(document.createElement("style")).textContent="x-vue-echarts{display:block;width:100%;height:100%;min-width:0}\n";const S=function(){if(null!=B)return B;if("undefined"==typeof HTMLElement||"undefined"==typeof customElements)return B=!1;try{new Function("tag","class EChartsElement extends HTMLElement{__dispose=null;disconnectedCallback(){this.__dispose&&(this.__dispose(),this.__dispose=null)}}customElements.get(tag)==null&&customElements.define(tag,EChartsElement);")(M)}catch(e){return B=!1}return B=!0}(),T=/(^&?~?!?)native:/;var W=n({name:"echarts",props:{option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean,...k,...D},emits:{},inheritAttrs:!1,setup(n,{attrs:d}){const f=o(),h=o(),g=o(),m=s("ecTheme",null),y=s("ecInitOptions",null),O=s("ecUpdateOptions",null),{autoresize:_,manualUpdate:b,loading:E,loadingOptions:w}=a(n),j=i((()=>g.value||n.option||null)),x=i((()=>n.theme||U(m,{}))),z=i((()=>n.initOptions||U(y,{}))),L=i((()=>n.updateOptions||U(O,{}))),A=i((()=>function(e){const t={};for(const n in e)R(n)||(t[n]=e[n]);return t}(d))),k={},H=r().proxy.$listeners,D={};function B(e){if(!f.value)return;const o=h.value=t(f.value,x.value,z.value);function s(){const t=e||j.value;t&&o.setOption(t,L.value)}n.group&&(o.group=n.group),Object.keys(D).forEach((e=>{let t=D[e];if(!t)return;let n=e.toLowerCase();"~"===n.charAt(0)&&(n=n.substring(1),t.__once__=!0);let s=o;if(0===n.indexOf("zr:")&&(s=o.getZr(),n=n.substring(3)),t.__once__){delete t.__once__;const e=t;t=(...o)=>{e(...o),s.off(n,t)}}s.on(n,t)})),_.value?v((()=>{o&&!o.isDisposed()&&o.resize(),s()})):s()}function M(){h.value&&(h.value.dispose(),h.value=void 0)}H?Object.keys(H).forEach((e=>{T.test(e)?k[e.replace(T,"$1")]=H[e]:D[e]=H[e]})):Object.keys(d).filter((e=>R(e))).forEach((e=>{let t=e.charAt(2).toLowerCase()+e.slice(3);if(0!==t.indexOf("native:"))"Once"===t.substring(t.length-4)&&(t="~".concat(t.substring(0,t.length-4))),D[t]=d[e];else{const n="on".concat(t.charAt(7).toUpperCase()).concat(t.slice(8));k[n]=d[e]}}));let W=null;l(b,(e=>{"function"==typeof W&&(W(),W=null),e||(W=l((()=>n.option),((e,t)=>{e&&(h.value?h.value.setOption(e,{notMerge:e!==t,...L.value}):B())}),{deep:!0}))}),{immediate:!0}),l([x,z],(()=>{M(),B()}),{deep:!0}),u((()=>{n.group&&h.value&&(h.value.group=n.group)}));const $=C(h);return function(e,t,n){const o=s("ecLoadingOptions",{}),a=i((()=>({...U(o,{}),...null==n?void 0:n.value})));u((()=>{const n=e.value;n&&(t.value?n.showLoading(a.value):n.hideLoading())}))}(h,E,w),function(t,n,o){l([o,t,n],(([t,n,o],s,a)=>{let i=null;if(t&&n&&o){const{offsetWidth:s,offsetHeight:a}=t,r=!0===o?{}:o,{throttle:l=100,onResize:u}=r;let c=!1;const p=()=>{n.resize(),null==u||u()},d=l?e(p,l):p;i=new ResizeObserver((()=>{(c||(c=!0,t.offsetWidth!==s||t.offsetHeight!==a))&&d()})),i.observe(t)}a((()=>{i&&(i.disconnect(),i=null)}))}))}(h,_,f),c((()=>{B()})),p((()=>{S&&f.value?f.value.__dispose=M:M()})),{chart:h,root:f,setOption:function(e,t){n.manualUpdate&&(g.value=e),h.value?h.value.setOption(e,t||{}):B(e)},nonEventAttrs:A,nativeListeners:k,...$}},render(){const e={...this.nonEventAttrs,...this.nativeListeners};return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",d(M,e)}});const $=z?window:void 0;function P(e){var t;const n=j(e);return null!=(t=null==n?void 0:n.$el)?t:n}const Z=o(0),F=o(0),K=e=>{const t=()=>{Z.value=window.innerWidth,F.value=window.innerHeight,e&&"function"==typeof e&&e(Z.value,F.value)};return L(t),function(...e){let t,n,o,s;if("string"==typeof e[0]||Array.isArray(e[0])?([n,o,s]=e,t=$):[t,n,o,s]=e,!t)return E;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const a=[],i=()=>{a.forEach((e=>e())),a.length=0},r=l((()=>[P(t),j(s)]),(([e,t])=>{if(i(),!e)return;const s=w(t)?{...t}:t;a.push(...n.flatMap((t=>o.map((n=>((e,t,n,o)=>(e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)))(e,t,n,s))))))}),{immediate:!0,flush:"post"}),u=()=>{r(),i()};x(u)}("resize",t,{passive:!0}),{width:Z,height:F}},q={__name:"index",props:{options:{type:Object,default:()=>({})},autoResize:{type:Boolean,default:!0},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},setup(e){const t=g(!1);return v((()=>{t.value=!0})),K((()=>{t.value=!1,v((()=>{t.value=!0}))})),(n,o)=>t.value?(m(),y(h(W),{key:0,option:e.options,autoresize:e.autoResize,style:O({width:e.width,height:e.height})},null,8,["option","autoresize","style"])):_("",!0)}};function I(e){const t=b(),n=i((()=>"dark"===t.theme));return{chartOption:i((()=>e(n.value)))}}export{q as _,I as u};
