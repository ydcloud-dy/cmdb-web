/*! 
 Build based on  
 Time : 1735190558000 */
import{D as e,af as a,aL as t,a as l,H as n,B as o,R as i,aZ as r,q as s,a2 as u,a0 as c,au as v,am as d,bC as f,bD as h,Z as p,y as m,z as g,G as y,o as b,c as w,h as C,w as I,S as k,b as S,n as M,O as x,e as T,Q as _,cd as B,T as E,aE as H,f as L,bR as N,J as A,K as V,F as j,v as D,t as G,C as O,V as P,r as R,bM as z,ab as K,L as W,aA as Z}from"./index.ABWJOL2Q.js";import{t as $,E as q}from"./image-viewer.Dd9ZIujV.js";import{u as F}from"./index.C5gbd99D.js";import"./index.BRjlB3m5.js";import"./debounce.CkdGDwJt.js";import"./position.DTC6E8em.js";const J=e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},cardScale:{type:Number,default:.83},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0},motionBlur:Boolean}),Q={change:(e,t)=>[e,t].every(a)},X=Symbol("carouselContextKey"),Y="ElCarouselItem",U=(e,a,m)=>{const{children:g,addChild:y,removeChild:b}=F(p(),Y),w=t(),C=l(-1),I=l(null),k=l(!1),S=l(),M=l(0),x=l(!0),T=l(!0),_=l(!1),B=n((()=>"never"!==e.arrow&&!o(L))),E=n((()=>g.value.some((e=>e.props.label.toString().length>0)))),H=n((()=>"card"===e.type)),L=n((()=>"vertical"===e.direction)),N=n((()=>"auto"!==e.height?{height:e.height}:{height:"".concat(M.value,"px"),overflow:"hidden"})),A=$((e=>{O(e)}),300,{trailing:!0}),V=$((a=>{!function(a){"hover"===e.trigger&&a!==C.value&&(C.value=a,T.value||(_.value=!0))}(a)}),300);function j(){I.value&&(clearInterval(I.value),I.value=null)}function D(){e.interval<=0||!e.autoplay||I.value||(I.value=setInterval((()=>G()),e.interval))}const G=()=>{T.value||(_.value=!0),T.value=!1,C.value<g.value.length-1?C.value=C.value+1:e.loop?C.value=0:_.value=!1};function O(a){if(T.value||(_.value=!0),T.value=!1,d(a)){const e=g.value.filter((e=>e.props.name===a));e.length>0&&(a=g.value.indexOf(e[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const t=g.value.length,l=C.value;C.value=a<0?e.loop?t-1:0:a>=t?e.loop?0:t-1:a,l===C.value&&P(l),R()}function P(e){g.value.forEach(((a,t)=>{a.translateItem(t,C.value,e)}))}function R(){j(),e.pauseOnHover||D()}i((()=>C.value),((e,t)=>{P(t),x.value&&(e%=2,t%=2),t>-1&&a("change",e,t)})),i((()=>e.autoplay),(e=>{e?D():j()})),i((()=>e.loop),(()=>{O(C.value)})),i((()=>e.interval),(()=>{R()}));const z=r();return s((()=>{i((()=>g.value),(()=>{g.value.length>0&&O(e.initialIndex)}),{immediate:!0}),z.value=u(S.value,(()=>{P()})),D()})),c((()=>{j(),S.value&&z.value&&z.value.stop()})),v(X,{root:S,isCardType:H,isVertical:L,items:g,loop:e.loop,cardScale:e.cardScale,addItem:y,removeItem:b,setActiveItem:O,setContainerHeight:function(a){"auto"===e.height&&(M.value=a)}}),{root:S,activeIndex:C,arrowDisplay:B,hasLabel:E,hover:k,isCardType:H,isTransitioning:_,items:g,isVertical:L,containerStyle:N,isItemsTwoLength:x,handleButtonEnter:function(e){o(L)||g.value.forEach(((a,t)=>{e===function(e,a){var t,l,n,i;const r=o(g),s=r.length;if(0===s||!e.states.inStage)return!1;const u=a+1,c=a-1,v=s-1,d=r[v].states.active,f=r[0].states.active,h=null==(l=null==(t=r[u])?void 0:t.states)?void 0:l.active,p=null==(i=null==(n=r[c])?void 0:n.states)?void 0:i.active;return a===v&&f||h?"left":!!(0===a&&d||p)&&"right"}(a,t)&&(a.states.hover=!0)}))},handleTransitionEnd:function(){_.value=!1},handleButtonLeave:function(){o(L)||g.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){e!==C.value&&(T.value||(_.value=!0)),C.value=e},handleMouseEnter:function(){k.value=!0,e.pauseOnHover&&j()},handleMouseLeave:function(){k.value=!1,D()},setActiveItem:O,prev:function(){O(C.value-1)},next:function(){O(C.value+1)},PlaceholderItem:function(){var a;const t=null==(a=w.default)?void 0:a.call(w);if(!t)return null;const l=f(t).filter((e=>h(e)&&e.type.name===Y));return 2===(null==l?void 0:l.length)&&e.loop&&!H.value?(x.value=!0,l):(x.value=!1,null)},isTwoLengthShow:e=>!x.value||(C.value<=1?e<=1:e>1),throttledArrowClick:A,throttledIndicatorHover:V}},ee=m({name:"ElCarousel"});var ae=O(m({...ee,props:J,emits:Q,setup(e,{expose:a,emit:t}){const l=e,{root:i,activeIndex:r,arrowDisplay:s,hasLabel:u,hover:c,isCardType:v,items:d,isVertical:f,containerStyle:h,handleButtonEnter:p,handleButtonLeave:m,isTransitioning:O,handleIndicatorClick:P,handleMouseEnter:R,handleMouseLeave:z,handleTransitionEnd:K,setActiveItem:W,prev:Z,next:$,PlaceholderItem:q,isTwoLengthShow:F,throttledArrowClick:J,throttledIndicatorHover:Q}=U(l,t),X=g("carousel"),{t:Y}=y(),ee=n((()=>{const e=[X.b(),X.m(l.direction)];return o(v)&&e.push(X.m("card")),e})),ae=n((()=>{const e=[X.e("container")];return l.motionBlur&&o(O)&&d.value.length>1&&e.push(o(f)?"".concat(X.namespace.value,"-transitioning-vertical"):"".concat(X.namespace.value,"-transitioning")),e})),te=n((()=>{const e=[X.e("indicators"),X.em("indicators",l.direction)];return o(u)&&e.push(X.em("indicators","labels")),"outside"===l.indicatorPosition&&e.push(X.em("indicators","outside")),o(f)&&e.push(X.em("indicators","right")),e}));return a({activeIndex:r,setActiveItem:W,prev:Z,next:$}),(e,a)=>(b(),w("div",{ref_key:"root",ref:i,class:M(o(ee)),onMouseenter:x(o(R),["stop"]),onMouseleave:x(o(z),["stop"])},[o(s)?(b(),C(H,{key:0,name:"carousel-arrow-left",persisted:""},{default:I((()=>[k(S("button",{type:"button",class:M([o(X).e("arrow"),o(X).em("arrow","left")]),"aria-label":o(Y)("el.carousel.leftArrow"),onMouseenter:e=>o(p)("left"),onMouseleave:o(m),onClick:x((e=>o(J)(o(r)-1)),["stop"])},[T(o(_),null,{default:I((()=>[T(o(B))])),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[E,("always"===e.arrow||o(c))&&(l.loop||o(r)>0)]])])),_:1})):L("v-if",!0),o(s)?(b(),C(H,{key:1,name:"carousel-arrow-right",persisted:""},{default:I((()=>[k(S("button",{type:"button",class:M([o(X).e("arrow"),o(X).em("arrow","right")]),"aria-label":o(Y)("el.carousel.rightArrow"),onMouseenter:e=>o(p)("right"),onMouseleave:o(m),onClick:x((e=>o(J)(o(r)+1)),["stop"])},[T(o(_),null,{default:I((()=>[T(o(N))])),_:1})],42,["aria-label","onMouseenter","onMouseleave","onClick"]),[[E,("always"===e.arrow||o(c))&&(l.loop||o(r)<o(d).length-1)]])])),_:1})):L("v-if",!0),S("div",{class:M(o(ae)),style:V(o(h)),onTransitionend:o(K)},[T(o(q)),A(e.$slots,"default")],46,["onTransitionend"]),"none"!==e.indicatorPosition?(b(),w("ul",{key:2,class:M(o(te))},[(b(!0),w(j,null,D(o(d),((a,t)=>k((b(),w("li",{key:t,class:M([o(X).e("indicator"),o(X).em("indicator",e.direction),o(X).is("active",t===o(r))]),onMouseenter:e=>o(Q)(t),onClick:x((e=>o(P)(t)),["stop"])},[S("button",{class:M(o(X).e("button")),"aria-label":o(Y)("el.carousel.indicator",{index:t+1})},[o(u)?(b(),w("span",{key:0},G(a.props.label),1)):L("v-if",!0)],10,["aria-label"])],42,["onMouseenter","onClick"])),[[E,o(F)(t)]]))),128))],2)):L("v-if",!0),l.motionBlur?(b(),w("svg",{key:3,xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"}},[S("defs",null,[S("filter",{id:"elCarouselHorizontal"},[S("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"12,0"})]),S("filter",{id:"elCarouselVertical"},[S("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0,10"})])])])):L("v-if",!0)],42,["onMouseenter","onMouseleave"]))}}),[["__file","carousel.vue"]]);const te=e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),le=e=>{const a=P(X),t=p(),n=l(),i=l(!1),r=l(0),u=l(1),c=l(!1),v=l(!1),d=l(!1),f=l(!1),{isCardType:h,isVertical:m,cardScale:g}=a;const y=(e,t,l)=>{var i;const s=o(h),p=null!=(i=a.items.value.length)?i:Number.NaN,y=e===t;s||K(l)||(f.value=y||e===l),!y&&p>2&&a.loop&&(e=function(e,a,t){const l=t-1,n=t/2;return 0===a&&e===l?-1:a===l&&0===e?t:e<a-1&&a-e>=n?t+1:e>a+1&&e-a>=n?-2:e}(e,t,p));const b=o(m);c.value=y,s?(d.value=Math.round(Math.abs(e-t))<=1,r.value=function(e,t){var l,n;const i=o(m)?(null==(l=a.root.value)?void 0:l.offsetHeight)||0:(null==(n=a.root.value)?void 0:n.offsetWidth)||0;return d.value?i*((2-g)*(e-t)+1)/4:e<t?-(1+g)*i/4:(3+g)*i/4}(e,t),u.value=o(c)?1:g):r.value=function(e,t,l){const n=a.root.value;return n?((l?n.offsetHeight:n.offsetWidth)||0)*(e-t):0}(e,t,b),v.value=!0,y&&n.value&&a.setContainerHeight(n.value.offsetHeight)};return s((()=>{a.addItem({props:e,states:R({hover:i,translate:r,scale:u,active:c,ready:v,inStage:d,animating:f}),uid:t.uid,translateItem:y})})),z((()=>{a.removeItem(t.uid)})),{carouselItemRef:n,active:c,animating:f,hover:i,inStage:d,isVertical:m,translate:r,isCardType:h,scale:u,ready:v,handleItemClick:function(){if(a&&o(h)){const e=a.items.value.findIndex((({uid:e})=>e===t.uid));a.setActiveItem(e)}}}},ne=m({name:Y});var oe=O(m({...ne,props:te,setup(e){const a=e,t=g("carousel"),{carouselItemRef:l,active:i,animating:r,hover:s,inStage:u,isVertical:c,translate:v,isCardType:d,scale:f,ready:h,handleItemClick:p}=le(a),m=n((()=>[t.e("item"),t.is("active",i.value),t.is("in-stage",u.value),t.is("hover",s.value),t.is("animating",r.value),{[t.em("item","card")]:d.value,[t.em("item","card-vertical")]:d.value&&c.value}])),y=n((()=>{const e="translate".concat(o(c)?"Y":"X");return{transform:["".concat(e,"(").concat(o(v),"px)"),"scale(".concat(o(f),")")].join(" ")}}));return(e,a)=>k((b(),w("div",{ref_key:"carouselItemRef",ref:l,class:M(o(m)),style:V(o(y)),onClick:o(p)},[o(d)?k((b(),w("div",{key:0,class:M(o(t).e("mask"))},null,2)),[[E,!o(i)]]):L("v-if",!0),A(e.$slots,"default")],14,["onClick"])),[[E,o(h)]])}}),[["__file","carousel-item.vue"]]);const ie=W(ae,{CarouselItem:oe}),re=Z(oe),se={__name:"banner",setup(e){const a=[];return(e,t)=>{const l=q,n=re,o=ie;return b(),C(o,{class:"-mt-2"},{default:I((()=>[(b(),w(j,null,D(a,((e,a)=>T(n,{class:"cursor-pointer lg:h-40",key:a,onClick:a=>{return t=e.link,void window.open(t,"_blank");var t}},{default:I((()=>[T(l,{class:"h-full w-full",src:e.img,fit:"fill"},null,8,["src"])])),_:2},1032,["onClick"]))),64))])),_:1})}}};export{se as default};