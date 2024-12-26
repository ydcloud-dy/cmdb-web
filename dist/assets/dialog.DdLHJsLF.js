/*! 
 Build based on  
 Time : 1735190558000 */
import{y as e,G as o,V as s,b$ as a,H as l,c0 as t,o as r,c as n,b as i,J as d,n as c,B as f,t as u,e as v,w as p,h as b,ax as g,Q as y,f as m,K as h,C,c1 as k,aL as R,bV as w,z as $,a as A,au as _,aE as x,S as L,c2 as E,b0 as F,aY as I,c3 as M,T as P,c4 as T,L as j}from"./index.ABWJOL2Q.js";import{E as z}from"./index.BRjlB3m5.js";import{d as B,a as S,b as q,c as D,u as H}from"./overlay.CDLw2uOw.js";import{c as K}from"./refs.CZv2DkwS.js";const V=Symbol("dialogInjectionKey"),G=e({name:"ElDialogContent"});var J=C(e({...G,props:B,emits:S,setup(e,{expose:C}){const R=e,{t:w}=o(),{Close:$}=k,{dialogRef:A,headerRef:_,bodyId:x,ns:L,style:E}=s(V),{focusTrapRef:F}=s(a),I=l((()=>[L.b(),L.is("fullscreen",R.fullscreen),L.is("draggable",R.draggable),L.is("align-center",R.alignCenter),{[L.m("center")]:R.center}])),M=K(F,A),P=l((()=>R.draggable)),T=l((()=>R.overflow)),{resetPosition:j}=t(A,_,P,T);return C({resetPosition:j}),(e,o)=>(r(),n("div",{ref:f(M),class:c(f(I)),style:h(f(E)),tabindex:"-1"},[i("header",{ref_key:"headerRef",ref:_,class:c([f(L).e("header"),{"show-close":e.showClose}])},[d(e.$slots,"header",{},(()=>[i("span",{role:"heading","aria-level":e.ariaLevel,class:c(f(L).e("title"))},u(e.title),11,["aria-level"])])),e.showClose?(r(),n("button",{key:0,"aria-label":f(w)("el.dialog.close"),class:c(f(L).e("headerbtn")),type:"button",onClick:o=>e.$emit("close")},[v(f(y),{class:c(f(L).e("close"))},{default:p((()=>[(r(),b(g(e.closeIcon||f($))))])),_:1},8,["class"])],10,["aria-label","onClick"])):m("v-if",!0)],2),i("div",{id:f(x),class:c(f(L).e("body"))},[d(e.$slots,"default")],10,["id"]),e.$slots.footer?(r(),n("footer",{key:0,class:c(f(L).e("footer"))},[d(e.$slots,"footer")],2)):m("v-if",!0)],6))}}),[["__file","dialog-content.vue"]]);const O=e({name:"ElDialog",inheritAttrs:!1});const Q=j(C(e({...O,props:q,emits:D,setup(e,{expose:o}){const s=e,a=R();w({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},l((()=>!!a.title)));const t=$("dialog"),n=A(),u=A(),g=A(),{visible:y,titleId:C,bodyId:k,style:j,overlayDialogStyle:B,rendered:S,zIndex:q,afterEnter:D,afterLeave:K,beforeLeave:G,handleClose:O,onModalClick:Q,onOpenAutoFocus:U,onCloseAutoFocus:Y,onCloseRequested:N,onFocusoutPrevented:W}=H(s,n);_(V,{dialogRef:n,headerRef:u,bodyId:k,ns:t,rendered:S,style:j});const X=T(Q),Z=l((()=>s.draggable&&!s.fullscreen));return o({visible:y,dialogContentRef:g,resetPosition:()=>{var e;null==(e=g.value)||e.resetPosition()}}),(e,o)=>(r(),b(f(z),{to:e.appendTo,disabled:"body"===e.appendTo&&!e.appendToBody},{default:p((()=>[v(x,{name:"dialog-fade",onAfterEnter:f(D),onAfterLeave:f(K),onBeforeLeave:f(G),persisted:""},{default:p((()=>[L(v(f(E),{"custom-mask-event":"",mask:e.modal,"overlay-class":e.modalClass,"z-index":f(q)},{default:p((()=>[i("div",{role:"dialog","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:f(C),"aria-describedby":f(k),class:c("".concat(f(t).namespace.value,"-overlay-dialog")),style:h(f(B)),onClick:f(X).onClick,onMousedown:f(X).onMousedown,onMouseup:f(X).onMouseup},[v(f(F),{loop:"",trapped:f(y),"focus-start-el":"container",onFocusAfterTrapped:f(U),onFocusAfterReleased:f(Y),onFocusoutPrevented:f(W),onReleaseRequested:f(N)},{default:p((()=>[f(S)?(r(),b(J,I({key:0,ref_key:"dialogContentRef",ref:g},e.$attrs,{center:e.center,"align-center":e.alignCenter,"close-icon":e.closeIcon,draggable:f(Z),overflow:e.overflow,fullscreen:e.fullscreen,"show-close":e.showClose,title:e.title,"aria-level":e.headerAriaLevel,onClose:f(O)}),M({header:p((()=>[e.$slots.title?d(e.$slots,"title",{key:1}):d(e.$slots,"header",{key:0,close:f(O),titleId:f(C),titleClass:f(t).e("title")})])),default:p((()=>[d(e.$slots,"default")])),_:2},[e.$slots.footer?{name:"footer",fn:p((()=>[d(e.$slots,"footer")]))}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):m("v-if",!0)])),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,["aria-label","aria-labelledby","aria-describedby","onClick","onMousedown","onMouseup"])])),_:3},8,["mask","overlay-class","z-index"]),[[P,f(y)]])])),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])])),_:3},8,["to","disabled"]))}}),[["__file","dialog.vue"]]));export{Q as E};
