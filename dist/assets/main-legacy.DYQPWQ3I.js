/*! 
 Build based on  
 Time : 1735190558000 */
!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.Cf1_fyJw.js"],(function(e,r){"use strict";var n,i,o,a,l,u,s,c,f,d,p,h,b;return{setters:[function(e){n=e.y,i=e.aL,o=e.z,a=e.H,l=e.o,u=e.c,s=e.J,c=e.n,f=e.B,d=e.C,p=e.K,h=e.L,b=e.aA}],execute:function(){var r=document.createElement("style");r.textContent=".el-container{display:flex;flex-direction:row;flex:1;flex-basis:auto;box-sizing:border-box;min-width:0}.el-container.is-vertical{flex-direction:column}.el-aside{overflow:auto;box-sizing:border-box;flex-shrink:0;width:var(--el-aside-width, 300px)}.el-footer{--el-footer-padding: 0 20px;--el-footer-height: 60px;padding:var(--el-footer-padding);box-sizing:border-box;flex-shrink:0;height:var(--el-footer-height)}.el-header{--el-header-padding: 0 20px;--el-header-height: 60px;padding:var(--el-header-padding);box-sizing:border-box;flex-shrink:0;height:var(--el-header-height)}.el-main{--el-main-padding: 20px;display:block;flex:1;flex-basis:auto;overflow:auto;box-sizing:border-box;padding:var(--el-main-padding)}\n",document.head.appendChild(r);var g=n({name:"ElContainer"}),v=n(t(t({},g),{},{props:{direction:{type:String}},setup:function(e){var t=e,r=i(),n=o("container"),d=a((function(){return"vertical"===t.direction||"horizontal"!==t.direction&&(!(!r||!r.default)&&r.default().some((function(e){var t=e.type.name;return"ElHeader"===t||"ElFooter"===t})))}));return function(e,t){return l(),u("section",{class:c([f(n).b(),f(n).is("vertical",f(d))])},[s(e.$slots,"default")],2)}}})),y=d(v,[["__file","container.vue"]]),m=n({name:"ElAside"}),x=n(t(t({},m),{},{props:{width:{type:String,default:null}},setup:function(e){var t=e,r=o("aside"),n=a((function(){return t.width?r.cssVarBlock({width:t.width}):{}}));return function(e,t){return l(),u("aside",{class:c(f(r).b()),style:p(f(n))},[s(e.$slots,"default")],6)}}})),w=d(x,[["__file","aside.vue"]]),O=n({name:"ElFooter"}),j=n(t(t({},O),{},{props:{height:{type:String,default:null}},setup:function(e){var t=e,r=o("footer"),n=a((function(){return t.height?r.cssVarBlock({height:t.height}):{}}));return function(e,t){return l(),u("footer",{class:c(f(r).b()),style:p(f(n))},[s(e.$slots,"default")],6)}}})),E=d(j,[["__file","footer.vue"]]),P=n({name:"ElHeader"}),_=n(t(t({},P),{},{props:{height:{type:String,default:null}},setup:function(e){var t=e,r=o("header"),n=a((function(){return t.height?r.cssVarBlock({height:t.height}):{}}));return function(e,t){return l(),u("header",{class:c(f(r).b()),style:p(f(n))},[s(e.$slots,"default")],6)}}})),S=d(_,[["__file","header.vue"]]),k=n({name:"ElMain"}),z=n(t(t({},k),{},{setup:function(e){var t=o("main");return function(e,r){return l(),u("main",{class:c(f(t).b())},[s(e.$slots,"default")],2)}}})),$=d(z,[["__file","main.vue"]]);e("b",h(y,{Aside:w,Footer:E,Header:S,Main:$})),e("c",b(w));b(E);e("E",b(S)),e("a",b($))}}}))}();
