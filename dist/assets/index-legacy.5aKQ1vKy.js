/*! 
 Build based on  
 Time : 1735190558000 */
System.register(["./index-legacy.Cf1_fyJw.js"],(function(n,e){"use strict";var t,u,r;return{setters:[function(n){t=n.aZ,u=n.bC,r=n.bD}],execute:function(){n("u",(function(n,e){var i={},c=t([]);return{children:c,addChild:function(t){i[t.uid]=t,c.value=function(n,e,t){return u(n.subTree).filter((function(n){var t;return r(n)&&(null==(t=n.type)?void 0:t.name)===e&&!!n.component})).map((function(n){return n.component.uid})).map((function(n){return t[n]})).filter((function(n){return!!n}))}(n,e,i)},removeChild:function(n){delete i[n],c.value=c.value.filter((function(e){return e.uid!==n}))}}}))}}}));
