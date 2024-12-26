/*! 
 Build based on  
 Time : 1735190558000 */
import{V as e,H as l,W as t,X as a,Y as o,R as s,Z as n,C as i,y as r,z as u,A as p,B as d,r as c,$ as v,a0 as f,a1 as m,S as b,T as h,o as g,c as y,J as S,b as x,t as C,n as w,O,a as V,q as I,a2 as T,f as k,K as E,G as R,a3 as B,a4 as D,a5 as M,a6 as L,a7 as z,a8 as $,a9 as W,aa as F,ab as _,ac as K,ad as N,ae as j,af as P,N as H,ag as A,ah as q,ai as G,aj as Q,ak as U,al as J,am as X,D as Y,an as Z,ao as ee,ap as le,aq as te,ar as ae,as as oe,at as se,Q as ne,au as ie,P as re,av as ue,e as pe,w as de,F as ce,v as ve,g as fe,h as me,m as be,aw as he,ax as ge,ay as ye,az as Se,L as xe,aA as Ce}from"./index.ABWJOL2Q.js";import{u as we,a as Oe,E as Ve}from"./index.D4uEcQv3.js";import{E as Ie}from"./scrollbar.3ySweVnY.js";import{t as Te,E as ke}from"./index.DglrVZRl.js";import{s as Ee,a as Re}from"./token.DWNpOE8r.js";import{e as Be}from"./strings.C2tuonvC.js";import{c as De}from"./castArray.9wqFpW2Z.js";import{i as Me}from"./isEqual.CtpQH3Dm.js";import{d as Le}from"./debounce.CkdGDwJt.js";import{b as ze}from"./_baseIteratee.BPaQBmlP.js";import{C as $e}from"./index.6ock-Gvr.js";var We=i(r({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:Boolean},setup(i){const r=u("select"),b=p(),h=l((()=>[r.be("dropdown","item"),r.is("disabled",d(x)),r.is("selected",d(S)),r.is("hovering",d(I))])),g=c({index:-1,groupDisabled:!1,visible:!0,hover:!1}),{currentLabel:y,itemSelected:S,isDisabled:x,select:C,hoverItem:w,updateOption:O}=function(i,r){const u=e(Ee),p=e(Re,{disabled:!1}),d=l((()=>h(De(u.props.modelValue),i.value))),c=l((()=>{var e;if(u.props.multiple){const l=De(null!=(e=u.props.modelValue)?e:[]);return!d.value&&l.length>=u.props.multipleLimit&&u.props.multipleLimit>0}return!1})),v=l((()=>i.label||(t(i.value)?"":i.value))),f=l((()=>i.value||i.label||"")),m=l((()=>i.disabled||r.groupDisabled||c.value)),b=n(),h=(e=[],l)=>{if(t(i.value)){const t=u.props.valueKey;return e&&e.some((e=>a(o(e,t))===o(l,t)))}return e&&e.includes(l)};return s((()=>v.value),(()=>{i.created||u.props.remote||u.setSelected()})),s((()=>i.value),((e,l)=>{const{remote:a,valueKey:o}=u.props;if(e!==l&&(u.onOptionDestroy(l,b.proxy),u.onOptionCreate(b.proxy)),!i.created&&!a){if(o&&t(e)&&t(l)&&e[o]===l[o])return;u.setSelected()}})),s((()=>p.disabled),(()=>{r.groupDisabled=p.disabled}),{immediate:!0}),{select:u,currentLabel:v,currentValue:f,itemSelected:d,isDisabled:m,hoverItem:()=>{i.disabled||p.disabled||(u.states.hoveringIndex=u.optionsArray.indexOf(b.proxy))},updateOption:e=>{const l=new RegExp(Be(e),"i");r.visible=l.test(v.value)||i.created}}}(i,g),{visible:V,hover:I}=v(g),T=n().proxy;return C.onOptionCreate(T),f((()=>{const e=T.value,{selected:l}=C.states,t=l.some((e=>e.value===T.value));m((()=>{C.states.cachedOptions.get(e)!==T||t||C.states.cachedOptions.delete(e)})),C.onOptionDestroy(e,T)})),{ns:r,id:b,containerKls:h,currentLabel:y,itemSelected:S,isDisabled:x,select:C,hoverItem:w,updateOption:O,visible:V,hover:I,selectOptionClick:function(){x.value||C.handleOptionSelect(T)},states:g}}}),[["render",function(e,l,t,a,o,s){return b((g(),y("li",{id:e.id,class:w(e.containerKls),role:"option","aria-disabled":e.isDisabled||void 0,"aria-selected":e.itemSelected,onMousemove:e.hoverItem,onClick:O(e.selectOptionClick,["stop"])},[S(e.$slots,"default",{},(()=>[x("span",null,C(e.currentLabel),1)]))],42,["id","aria-disabled","aria-selected","onMousemove","onClick"])),[[h,e.visible]])}],["__file","option.vue"]]);var Fe=i(r({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const t=e(Ee),a=u("select"),o=l((()=>t.props.popperClass)),s=l((()=>t.props.multiple)),n=l((()=>t.props.fitInputWidth)),i=V("");function r(){var e;i.value="".concat(null==(e=t.selectRef)?void 0:e.offsetWidth,"px")}return I((()=>{r(),T(t.selectRef,r)})),{ns:a,minWidth:i,popperClass:o,isMultiple:s,isFitInputWidth:n}}}),[["render",function(e,l,t,a,o,s){return g(),y("div",{class:w([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:E({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[e.$slots.header?(g(),y("div",{key:0,class:w(e.ns.be("dropdown","header"))},[S(e.$slots,"header")],2)):k("v-if",!0),S(e.$slots,"default"),e.$slots.footer?(g(),y("div",{key:1,class:w(e.ns.be("dropdown","footer"))},[S(e.$slots,"footer")],2)):k("v-if",!0)],6)}],["__file","select-dropdown.vue"]]);const _e=(e,a)=>{const{t:n}=R(),i=p(),r=u("select"),d=u("input"),v=c({inputValue:"",options:new Map,cachedOptions:new Map,optionValues:[],selected:[],selectionWidth:0,calculatorWidth:0,collapseItemWidth:0,selectedLabel:"",hoveringIndex:-1,previousQuery:null,inputHovering:!1,menuVisibleOnFocus:!1,isBeforeHide:!1}),f=V(null),b=V(null),h=V(null),g=V(null),y=V(null),S=V(null),x=V(null),C=V(null),w=V(null),O=V(null),k=V(null),E=V(null),{isComposing:X,handleCompositionStart:Y,handleCompositionUpdate:Z,handleCompositionEnd:ee}=B({afterComposition:e=>Ae(e)}),{wrapperRef:le,isFocused:te,handleBlur:ae}=D(y,{beforeFocus:()=>de.value,afterFocus(){e.automaticDropdown&&!oe.value&&(oe.value=!0,v.menuVisibleOnFocus=!0)},beforeBlur(e){var l,t;return(null==(l=h.value)?void 0:l.isFocusInsideContent(e))||(null==(t=g.value)?void 0:t.isFocusInsideContent(e))},afterBlur(){oe.value=!1,v.menuVisibleOnFocus=!1}}),oe=V(!1),se=V(),{form:ne,formItem:ie}=M(),{inputId:re}=L(e,{formItemContext:ie}),{valueOnClear:ue,isEmptyValue:pe}=z(e),de=l((()=>e.disabled||(null==ne?void 0:ne.disabled))),ce=l((()=>$(e.modelValue)?e.modelValue.length>0:!pe(e.modelValue))),ve=l((()=>{var e;return null!=(e=null==ne?void 0:ne.statusIcon)&&e})),fe=l((()=>e.clearable&&!de.value&&v.inputHovering&&ce.value)),me=l((()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon)),be=l((()=>r.is("reverse",me.value&&oe.value))),he=l((()=>(null==ie?void 0:ie.validateState)||"")),ge=l((()=>W[he.value])),ye=l((()=>e.remote?300:0)),Se=l((()=>e.loading?e.loadingText||n("el.select.loading"):!(e.remote&&!v.inputValue&&0===v.options.size)&&(e.filterable&&v.inputValue&&v.options.size>0&&0===xe.value?e.noMatchText||n("el.select.noMatch"):0===v.options.size?e.noDataText||n("el.select.noData"):null))),xe=l((()=>Ce.value.filter((e=>e.visible)).length)),Ce=l((()=>{const e=Array.from(v.options.values()),l=[];return v.optionValues.forEach((t=>{const a=e.findIndex((e=>e.value===t));a>-1&&l.push(e[a])})),l.length>=e.length?l:e})),we=l((()=>Array.from(v.cachedOptions.values()))),Oe=l((()=>{const l=Ce.value.filter((e=>!e.created)).some((e=>e.currentLabel===v.inputValue));return e.filterable&&e.allowCreate&&""!==v.inputValue&&!l})),Ve=()=>{e.filterable&&A(e.filterMethod)||e.filterable&&e.remote&&A(e.remoteMethod)||Ce.value.forEach((e=>{var l;null==(l=e.updateOption)||l.call(e,v.inputValue)}))},Ie=F(),Te=l((()=>["small"].includes(Ie.value)?"small":"default")),ke=l({get:()=>oe.value&&!1!==Se.value,set(e){oe.value=e}}),Ee=l((()=>{if(e.multiple&&!_(e.modelValue))return 0===De(e.modelValue).length&&!v.inputValue;const l=$(e.modelValue)?e.modelValue[0]:e.modelValue;return!e.filterable&&!_(l)||!v.inputValue})),Re=l((()=>{var l;const t=null!=(l=e.placeholder)?l:n("el.select.placeholder");return e.multiple||!ce.value?t:v.selectedLabel})),Be=l((()=>K?null:"mouseenter"));s((()=>e.modelValue),((l,t)=>{e.multiple&&e.filterable&&!e.reserveKeyword&&(v.inputValue="",$e("")),Fe(),!Me(l,t)&&e.validateEvent&&(null==ie||ie.validate("change").catch((e=>N())))}),{flush:"post",deep:!0}),s((()=>oe.value),(e=>{e?$e(v.inputValue):(v.inputValue="",v.previousQuery=null,v.isBeforeHide=!0),a("visible-change",e)})),s((()=>v.options.entries()),(()=>{j&&(Fe(),e.defaultFirstOption&&(e.filterable||e.remote)&&xe.value&&We())}),{flush:"post"}),s((()=>v.hoveringIndex),(e=>{P(e)&&e>-1?se.value=Ce.value[e]||{}:se.value={},Ce.value.forEach((e=>{e.hover=se.value===e}))})),H((()=>{v.isBeforeHide||Ve()}));const $e=l=>{v.previousQuery===l||X.value||(v.previousQuery=l,e.filterable&&A(e.filterMethod)?e.filterMethod(l):e.filterable&&e.remote&&A(e.remoteMethod)&&e.remoteMethod(l),e.defaultFirstOption&&(e.filterable||e.remote)&&xe.value?m(We):m(Ke))},We=()=>{const e=Ce.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),t=e[0],a=Ce.value.map((e=>e.value));v.hoveringIndex=Xe(a,l||t)},Fe=()=>{if(!e.multiple){const l=$(e.modelValue)?e.modelValue[0]:e.modelValue,t=_e(l);return v.selectedLabel=t.currentLabel,void(v.selected=[t])}v.selectedLabel="";const l=[];_(e.modelValue)||De(e.modelValue).forEach((e=>{l.push(_e(e))})),v.selected=l},_e=l=>{let t;const a=q(l);for(let s=v.cachedOptions.size-1;s>=0;s--){const n=we.value[s];if(a?o(n.value,e.valueKey)===o(l,e.valueKey):n.value===l){t={value:l,currentLabel:n.currentLabel,get isDisabled(){return n.isDisabled}};break}}if(t)return t;return{value:l,currentLabel:a?l.label:null!=l?l:""}},Ke=()=>{v.hoveringIndex=Ce.value.findIndex((e=>v.selected.some((l=>tl(l)===tl(e)))))},Ne=()=>{v.calculatorWidth=S.value.getBoundingClientRect().width},je=()=>{var e,l;null==(l=null==(e=h.value)?void 0:e.updatePopper)||l.call(e)},Pe=()=>{var e,l;null==(l=null==(e=g.value)?void 0:e.updatePopper)||l.call(e)},He=()=>{v.inputValue.length>0&&!oe.value&&(oe.value=!0),$e(v.inputValue)},Ae=l=>{if(v.inputValue=l.target.value,!e.remote)return He();qe()},qe=Le((()=>{He()}),ye.value),Ge=l=>{Me(e.modelValue,l)||a(J,l)},Qe=e=>function(e,l){var t=null==e?0:e.length;if(!t)return-1;var a=t-1;return function(e,l,t){e.length;for(var a=t+1;a--;)if(l(e[a],a,e))return a;return-1}(e,ze(l),a)}(e,(e=>{const l=v.cachedOptions.get(e);return l&&!l.disabled&&!l.states.groupDisabled})),Ue=l=>{l.stopPropagation();const t=e.multiple?[]:ue.value;if(e.multiple)for(const e of v.selected)e.isDisabled&&t.push(e.value);a(Q,t),Ge(t),v.hoveringIndex=-1,oe.value=!1,a("clear"),el()},Je=l=>{var t;if(e.multiple){const o=De(null!=(t=e.modelValue)?t:[]).slice(),s=Xe(o,l);s>-1?o.splice(s,1):(e.multipleLimit<=0||o.length<e.multipleLimit)&&o.push(l.value),a(Q,o),Ge(o),l.created&&$e(""),e.filterable&&!e.reserveKeyword&&(v.inputValue="")}else a(Q,l.value),Ge(l.value),oe.value=!1;el(),oe.value||m((()=>{Ye(l)}))},Xe=(l=[],a)=>_(a)?-1:t(a.value)?l.findIndex((l=>Me(o(l,e.valueKey),tl(a)))):l.indexOf(a.value),Ye=e=>{var l,t,a,o,s;const n=$(e)?e[0]:e;let i=null;if(null==n?void 0:n.value){const e=Ce.value.filter((e=>e.value===n.value));e.length>0&&(i=e[0].$el)}if(h.value&&i){const e=null==(o=null==(a=null==(t=null==(l=h.value)?void 0:l.popperRef)?void 0:t.contentRef)?void 0:a.querySelector)?void 0:o.call(a,".".concat(r.be("dropdown","wrap")));e&&U(e,i)}null==(s=E.value)||s.handleScroll()},Ze=l((()=>{var e,l;return null==(l=null==(e=h.value)?void 0:e.popperRef)?void 0:l.contentRef})),el=()=>{var e;null==(e=y.value)||e.focus()},ll=()=>{de.value||(K&&(v.inputHovering=!0),v.menuVisibleOnFocus?v.menuVisibleOnFocus=!1:oe.value=!oe.value)},tl=l=>t(l.value)?o(l.value,e.valueKey):l.value,al=l((()=>Ce.value.filter((e=>e.visible)).every((e=>e.isDisabled)))),ol=l((()=>e.multiple?e.collapseTags?v.selected.slice(0,e.maxCollapseTags):v.selected:[])),sl=l((()=>e.multiple&&e.collapseTags?v.selected.slice(e.maxCollapseTags):[])),nl=e=>{if(oe.value){if(0!==v.options.size&&0!==xe.value&&!X.value&&!al.value){"next"===e?(v.hoveringIndex++,v.hoveringIndex===v.options.size&&(v.hoveringIndex=0)):"prev"===e&&(v.hoveringIndex--,v.hoveringIndex<0&&(v.hoveringIndex=v.options.size-1));const l=Ce.value[v.hoveringIndex];!l.isDisabled&&l.visible||nl(e),m((()=>Ye(se.value)))}}else oe.value=!0},il=l((()=>{const l=(()=>{if(!b.value)return 0;const e=window.getComputedStyle(b.value);return Number.parseFloat(e.gap||"6px")})(),t=k.value&&1===e.maxCollapseTags?v.selectionWidth-v.collapseItemWidth-l:v.selectionWidth;return{maxWidth:"".concat(t,"px")}})),rl=l((()=>({maxWidth:"".concat(v.selectionWidth,"px")}))),ul=l((()=>({width:"".concat(Math.max(v.calculatorWidth,11),"px")})));return T(b,(()=>{v.selectionWidth=b.value.getBoundingClientRect().width})),T(S,Ne),T(w,je),T(le,je),T(O,Pe),T(k,(()=>{v.collapseItemWidth=k.value.getBoundingClientRect().width})),I((()=>{Fe()})),{inputId:re,contentId:i,nsSelect:r,nsInput:d,states:v,isFocused:te,expanded:oe,optionsArray:Ce,hoverOption:se,selectSize:Ie,filteredOptionsCount:xe,resetCalculatorWidth:Ne,updateTooltip:je,updateTagTooltip:Pe,debouncedOnInputChange:qe,onInput:Ae,deletePrevTag:l=>{if(e.multiple&&l.code!==G.delete&&l.target.value.length<=0){const l=De(e.modelValue).slice(),t=Qe(l);if(t<0)return;const o=l[t];l.splice(t,1),a(Q,l),Ge(l),a("remove-tag",o)}},deleteTag:(l,t)=>{const o=v.selected.indexOf(t);if(o>-1&&!de.value){const l=De(e.modelValue).slice();l.splice(o,1),a(Q,l),Ge(l),a("remove-tag",t.value)}l.stopPropagation(),el()},deleteSelected:Ue,handleOptionSelect:Je,scrollToOption:Ye,hasModelValue:ce,shouldShowPlaceholder:Ee,currentPlaceholder:Re,mouseEnterEventName:Be,needStatusIcon:ve,showClose:fe,iconComponent:me,iconReverse:be,validateState:he,validateIcon:ge,showNewOption:Oe,updateOptions:Ve,collapseTagSize:Te,setSelected:Fe,selectDisabled:de,emptyText:Se,handleCompositionStart:Y,handleCompositionUpdate:Z,handleCompositionEnd:ee,onOptionCreate:e=>{v.options.set(e.value,e),v.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{v.options.get(e)===l&&v.options.delete(e)},handleMenuEnter:()=>{v.isBeforeHide=!1,m((()=>Ye(v.selected)))},focus:el,blur:()=>{var e;if(oe.value)return oe.value=!1,void m((()=>{var e;return null==(e=y.value)?void 0:e.blur()}));null==(e=y.value)||e.blur()},handleClearClick:e=>{Ue(e)},handleClickOutside:e=>{if(oe.value=!1,te.value){const l=new FocusEvent("focus",e);m((()=>ae(l)))}},handleEsc:()=>{v.inputValue.length>0?v.inputValue="":oe.value=!1},toggleMenu:ll,selectOption:()=>{if(oe.value){const e=Ce.value[v.hoveringIndex];e&&!e.isDisabled&&Je(e)}else ll()},getValueKey:tl,navigateOptions:nl,dropdownMenuVisible:ke,showTagList:ol,collapseTagList:sl,tagStyle:il,collapseTagStyle:rl,inputStyle:ul,popperRef:Ze,inputRef:y,tooltipRef:h,tagTooltipRef:g,calculatorRef:S,prefixRef:x,suffixRef:C,selectRef:f,wrapperRef:le,selectionRef:b,scrollbarRef:E,menuRef:w,tagMenuRef:O,collapseItemRef:k}};var Ke=r({name:"ElOptions",setup(l,{slots:t}){const a=e(Ee);let o=[];return()=>{var e,l;const s=null==(e=t.default)?void 0:e.call(t),n=[];return s.length&&function e(l){$(l)&&l.forEach((l=>{var t,a,o,s;const i=null==(t=(null==l?void 0:l.type)||{})?void 0:t.name;"ElOptionGroup"===i?e(X(l.children)||$(l.children)||!A(null==(a=l.children)?void 0:a.default)?l.children:null==(o=l.children)?void 0:o.default()):"ElOption"===i?n.push(null==(s=l.props)?void 0:s.value):$(l.children)&&e(l.children)}))}(null==(l=s[0])?void 0:l.children),Me(n,o)||(o=n,a&&(a.states.optionValues=n)),s}}});const Ne="ElSelect";var je=i(r({name:Ne,componentName:Ne,components:{ElSelectMenu:Fe,ElOption:We,ElOptions:Ke,ElTag:ke,ElScrollbar:Ie,ElTooltip:Ve,ElIcon:ne},directives:{ClickOutside:$e},props:Y({name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:Z,effect:{type:ee(String),default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:ee(Object),default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:Boolean,maxCollapseTags:{type:Number,default:1},teleported:we.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:le,default:te},fitInputWidth:Boolean,suffixIcon:{type:le,default:ae},tagType:{...Te.type,default:"info"},tagEffect:{...Te.effect,default:"light"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:Boolean,showArrow:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:ee(String),values:Oe,default:"bottom-start"},fallbackPlacements:{type:ee(Array),default:["bottom-start","top-start","right","left"]},tabindex:{type:[String,Number],default:0},appendTo:String,...oe,...se(["ariaLabel"])}),emits:[Q,J,"remove-tag","clear","visible-change","focus","blur"],setup(e,{emit:t}){const a=l((()=>{const{modelValue:l,multiple:t}=e,a=t?[]:void 0;return $(l)?t?l:a:t?a:l})),o=c({...v(e),modelValue:a}),s=_e(o,t);ie(Ee,c({props:o,states:s.states,optionsArray:s.optionsArray,handleOptionSelect:s.handleOptionSelect,onOptionCreate:s.onOptionCreate,onOptionDestroy:s.onOptionDestroy,selectRef:s.selectRef,setSelected:s.setSelected}));const n=l((()=>e.multiple?s.states.selected.map((e=>e.currentLabel)):s.states.selectedLabel));return{...s,modelValue:a,selectedLabel:n}}}),[["render",function(e,l,t,a,o,s){const n=re("el-tag"),i=re("el-tooltip"),r=re("el-icon"),u=re("el-option"),p=re("el-options"),d=re("el-scrollbar"),c=re("el-select-menu"),v=ue("click-outside");return b((g(),y("div",{ref:"selectRef",class:w([e.nsSelect.b(),e.nsSelect.m(e.selectSize)]),[ye(e.mouseEnterEventName)]:l=>e.states.inputHovering=!0,onMouseleave:l=>e.states.inputHovering=!1},[pe(i,{ref:"tooltipRef",visible:e.dropdownMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":e.fallbackPlacements,effect:e.effect,pure:"",trigger:"click",transition:"".concat(e.nsSelect.namespace.value,"-zoom-in-top"),"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,"append-to":e.appendTo,"show-arrow":e.showArrow,offset:e.offset,onBeforeShow:e.handleMenuEnter,onHide:l=>e.states.isBeforeHide=!1},{default:de((()=>{var l;return[x("div",{ref:"wrapperRef",class:w([e.nsSelect.e("wrapper"),e.nsSelect.is("focused",e.isFocused),e.nsSelect.is("hovering",e.states.inputHovering),e.nsSelect.is("filterable",e.filterable),e.nsSelect.is("disabled",e.selectDisabled)]),onClick:O(e.toggleMenu,["prevent"])},[e.$slots.prefix?(g(),y("div",{key:0,ref:"prefixRef",class:w(e.nsSelect.e("prefix"))},[S(e.$slots,"prefix")],2)):k("v-if",!0),x("div",{ref:"selectionRef",class:w([e.nsSelect.e("selection"),e.nsSelect.is("near",e.multiple&&!e.$slots.prefix&&!!e.states.selected.length)])},[e.multiple?S(e.$slots,"tag",{key:0},(()=>[(g(!0),y(ce,null,ve(e.showTagList,(l=>(g(),y("div",{key:e.getValueKey(l),class:w(e.nsSelect.e("selected-item"))},[pe(n,{closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:E(e.tagStyle),onClose:t=>e.deleteTag(t,l)},{default:de((()=>[x("span",{class:w(e.nsSelect.e("tags-text"))},[S(e.$slots,"label",{label:l.currentLabel,value:l.value},(()=>[fe(C(l.currentLabel),1)]))],2)])),_:2},1032,["closable","size","type","effect","style","onClose"])],2)))),128)),e.collapseTags&&e.states.selected.length>e.maxCollapseTags?(g(),me(i,{key:0,ref:"tagTooltipRef",disabled:e.dropdownMenuVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:de((()=>[x("div",{ref:"collapseItemRef",class:w(e.nsSelect.e("selected-item"))},[pe(n,{closable:!1,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",style:E(e.collapseTagStyle)},{default:de((()=>[x("span",{class:w(e.nsSelect.e("tags-text"))}," + "+C(e.states.selected.length-e.maxCollapseTags),3)])),_:1},8,["size","type","effect","style"])],2)])),content:de((()=>[x("div",{ref:"tagMenuRef",class:w(e.nsSelect.e("selection"))},[(g(!0),y(ce,null,ve(e.collapseTagList,(l=>(g(),y("div",{key:e.getValueKey(l),class:w(e.nsSelect.e("selected-item"))},[pe(n,{class:"in-tooltip",closable:!e.selectDisabled&&!l.isDisabled,size:e.collapseTagSize,type:e.tagType,effect:e.tagEffect,"disable-transitions":"",onClose:t=>e.deleteTag(t,l)},{default:de((()=>[x("span",{class:w(e.nsSelect.e("tags-text"))},[S(e.$slots,"label",{label:l.currentLabel,value:l.value},(()=>[fe(C(l.currentLabel),1)]))],2)])),_:2},1032,["closable","size","type","effect","onClose"])],2)))),128))],2)])),_:3},8,["disabled","effect","teleported"])):k("v-if",!0)])):k("v-if",!0),x("div",{class:w([e.nsSelect.e("selected-item"),e.nsSelect.e("input-wrapper"),e.nsSelect.is("hidden",!e.filterable)])},[b(x("input",{id:e.inputId,ref:"inputRef","onUpdate:modelValue":l=>e.states.inputValue=l,type:"text",name:e.name,class:w([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:E(e.inputStyle),tabindex:e.tabindex,role:"combobox",readonly:!e.filterable,spellcheck:"false","aria-activedescendant":(null==(l=e.hoverOption)?void 0:l.id)||"","aria-controls":e.contentId,"aria-expanded":e.dropdownMenuVisible,"aria-label":e.ariaLabel,"aria-autocomplete":"none","aria-haspopup":"listbox",onKeydown:[be(O((l=>e.navigateOptions("next")),["stop","prevent"]),["down"]),be(O((l=>e.navigateOptions("prev")),["stop","prevent"]),["up"]),be(O(e.handleEsc,["stop","prevent"]),["esc"]),be(O(e.selectOption,["stop","prevent"]),["enter"]),be(O(e.deletePrevTag,["stop"]),["delete"])],onCompositionstart:e.handleCompositionStart,onCompositionupdate:e.handleCompositionUpdate,onCompositionend:e.handleCompositionEnd,onInput:e.onInput,onClick:O(e.toggleMenu,["stop"])},null,46,["id","onUpdate:modelValue","name","disabled","autocomplete","tabindex","readonly","aria-activedescendant","aria-controls","aria-expanded","aria-label","onKeydown","onCompositionstart","onCompositionupdate","onCompositionend","onInput","onClick"]),[[he,e.states.inputValue]]),e.filterable?(g(),y("span",{key:0,ref:"calculatorRef","aria-hidden":"true",class:w(e.nsSelect.e("input-calculator")),textContent:C(e.states.inputValue)},null,10,["textContent"])):k("v-if",!0)],2),e.shouldShowPlaceholder?(g(),y("div",{key:1,class:w([e.nsSelect.e("selected-item"),e.nsSelect.e("placeholder"),e.nsSelect.is("transparent",!e.hasModelValue||e.expanded&&!e.states.inputValue)])},[e.hasModelValue?S(e.$slots,"label",{key:0,label:e.currentPlaceholder,value:e.modelValue},(()=>[x("span",null,C(e.currentPlaceholder),1)])):(g(),y("span",{key:1},C(e.currentPlaceholder),1))],2)):k("v-if",!0)],2),x("div",{ref:"suffixRef",class:w(e.nsSelect.e("suffix"))},[e.iconComponent&&!e.showClose?(g(),me(r,{key:0,class:w([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:de((()=>[(g(),me(ge(e.iconComponent)))])),_:1},8,["class"])):k("v-if",!0),e.showClose&&e.clearIcon?(g(),me(r,{key:1,class:w([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.nsSelect.e("clear")]),onClick:e.handleClearClick},{default:de((()=>[(g(),me(ge(e.clearIcon)))])),_:1},8,["class","onClick"])):k("v-if",!0),e.validateState&&e.validateIcon&&e.needStatusIcon?(g(),me(r,{key:2,class:w([e.nsInput.e("icon"),e.nsInput.e("validateIcon")])},{default:de((()=>[(g(),me(ge(e.validateIcon)))])),_:1},8,["class"])):k("v-if",!0)],2)],10,["onClick"])]})),content:de((()=>[pe(c,{ref:"menuRef"},{default:de((()=>[e.$slots.header?(g(),y("div",{key:0,class:w(e.nsSelect.be("dropdown","header")),onClick:O((()=>{}),["stop"])},[S(e.$slots,"header")],10,["onClick"])):k("v-if",!0),b(pe(d,{id:e.contentId,ref:"scrollbarRef",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:w([e.nsSelect.is("empty",0===e.filteredOptionsCount)]),role:"listbox","aria-label":e.ariaLabel,"aria-orientation":"vertical"},{default:de((()=>[e.showNewOption?(g(),me(u,{key:0,value:e.states.inputValue,created:!0},null,8,["value"])):k("v-if",!0),pe(p,null,{default:de((()=>[S(e.$slots,"default")])),_:3})])),_:3},8,["id","wrap-class","view-class","class","aria-label"]),[[h,e.states.options.size>0&&!e.loading]]),e.$slots.loading&&e.loading?(g(),y("div",{key:1,class:w(e.nsSelect.be("dropdown","loading"))},[S(e.$slots,"loading")],2)):e.loading||0===e.filteredOptionsCount?(g(),y("div",{key:2,class:w(e.nsSelect.be("dropdown","empty"))},[S(e.$slots,"empty",{},(()=>[x("span",null,C(e.emptyText),1)]))],2)):k("v-if",!0),e.$slots.footer?(g(),y("div",{key:3,class:w(e.nsSelect.be("dropdown","footer")),onClick:O((()=>{}),["stop"])},[S(e.$slots,"footer")],10,["onClick"])):k("v-if",!0)])),_:3},512)])),_:3},8,["visible","placement","teleported","popper-class","popper-options","fallback-placements","effect","transition","persistent","append-to","show-arrow","offset","onBeforeShow","onHide"])],16,["onMouseleave"])),[[v,e.handleClickOutside,e.popperRef]])}],["__file","select.vue"]]);var Pe=i(r({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:Boolean},setup(e){const t=u("select"),a=V(null),o=n(),s=V([]);ie(Re,c({...v(e)}));const i=l((()=>s.value.some((e=>!0===e.visible)))),r=e=>{const l=De(e),t=[];return l.forEach((e=>{var l,a;(e=>{var l,t;return"ElOption"===(null==(l=e.type)?void 0:l.name)&&!!(null==(t=e.component)?void 0:t.proxy)})(e)?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)?t.push(...r(e.children)):(null==(a=e.component)?void 0:a.subTree)&&t.push(...r(e.component.subTree))})),t},p=()=>{s.value=r(o.subTree)};return I((()=>{p()})),Se(a,p,{attributes:!0,subtree:!0,childList:!0}),{groupRef:a,visible:i,ns:t}}}),[["render",function(e,l,t,a,o,s){return b((g(),y("ul",{ref:"groupRef",class:w(e.ns.be("group","wrap"))},[x("li",{class:w(e.ns.be("group","title"))},C(e.label),3),x("li",null,[x("ul",{class:w(e.ns.b("group"))},[S(e.$slots,"default")],2)])],2)),[[h,e.visible]])}],["__file","option-group.vue"]]);const He=xe(je,{Option:We,OptionGroup:Pe}),Ae=Ce(We);Ce(Pe);export{Ae as E,He as a};