/*! 
 Build based on  
 Time : 1735190558000 */
import{b as e,u as t,E as o}from"./index.D4uEcQv3.js";import{d as a}from"./dropdown.Co_mIot6.js";import{D as r,aI as s,y as p,H as i,z as n,a as l,B as f,I as d,o as c,h as b,w as u,c as v,n as m,t as h,f as g,J as w,g as y,aY as x,C as S,cf as A,L as C}from"./index.ABWJOL2Q.js";const B=r({trigger:e.trigger,placement:a.placement,disabled:e.disabled,visible:t.visible,transition:t.transition,popperOptions:a.popperOptions,tabindex:a.tabindex,content:t.content,popperStyle:t.popperStyle,popperClass:t.popperClass,enterable:{...t.enterable,default:!0},effect:{...t.effect,default:"light"},teleported:t.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),N={"update:visible":e=>s(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},R=p({name:"ElPopover"}),U=p({...R,props:B,emits:N,setup(e,{expose:t,emit:a}){const r=e,s=i((()=>r["onUpdate:visible"])),p=n("popover"),S=l(),A=i((()=>{var e;return null==(e=f(S))?void 0:e.popperRef})),C=i((()=>[{width:d(r.width)},r.popperStyle])),B=i((()=>[p.b(),r.popperClass,{[p.m("plain")]:!!r.content}])),N=i((()=>r.transition==="".concat(p.namespace.value,"-fade-in-linear"))),R=()=>{a("before-enter")},U=()=>{a("before-leave")},$=()=>{a("after-enter")},_=()=>{a("update:visible",!1),a("after-leave")};return t({popperRef:A,hide:()=>{var e;null==(e=S.value)||e.hide()}}),(e,t)=>(c(),b(f(o),x({ref_key:"tooltipRef",ref:S},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":f(B),"popper-style":f(C),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":f(N),"onUpdate:visible":f(s),onBeforeShow:R,onBeforeHide:U,onShow:$,onHide:_}),{content:u((()=>[e.title?(c(),v("div",{key:0,class:m(f(p).e("title")),role:"title"},h(e.title),3)):g("v-if",!0),w(e.$slots,"default",{},(()=>[y(h(e.content),1)]))])),default:u((()=>[e.$slots.reference?w(e.$slots,"reference",{key:0}):g("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});const $=(e,t)=>{const o=t.arg||t.value,a=null==o?void 0:o.popperRef;a&&(a.triggerRef=e)};const _=C(S(U,[["__file","popover.vue"]]),{directive:A({mounted(e,t){$(e,t)},updated(e,t){$(e,t)}},"popover")});export{_ as E};