const __vite__fileDeps=["assets/TabOne-eiJGeDK9.js","assets/index-BtSF692j.js","assets/index-C9TDb7w4.css","assets/TabTwo-BrWkyMcL.js","assets/TabThree-d0vh46Sy.js","assets/TabFour-DaGnMlqK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{p as W,o as we,m as je,g as z,u as qe,r as Y,c as b,a as L,V as q,b as y,F as K,d as F,f as Ke,e as Ne,s as Je,k as Te,h as se,i as le,j as Qe,l as Ze,n as ke,q as et,t as Ve,v as B,w as Ce,x as tt,y as Ee,z as nt,A as Ie,B as Pe,C as ot,D as at,E as st,G as lt,H as it,I as rt,J as ut,M as ct,K as ae,L as dt,T as Be,N as ze,O as We,P as ft,Q as ce,R as vt,S as ht,U as yt,W as de,X as mt,Y as fe,Z as ve,_ as gt,$ as bt,a0 as St,a1 as xt,a2 as R,a3 as _t,a4 as wt,a5 as Tt,a6 as Ae,a7 as kt,a8 as p,a9 as X,aa as O,ab as he,ac as ye,ad as Vt,ae as Ct,af as Et,ag as me,ah as It,ai as Pt,aj as U,ak as j}from"./index-BtSF692j.js";const ie=Symbol.for("vuetify:v-tabs"),Bt=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...we(je({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),$e=z()({name:"VTab",props:Bt(),setup(e,a){let{slots:o,attrs:t}=a;const{textColorClasses:l,textColorStyles:r}=qe(e,"sliderColor"),n=Y(),s=Y(),c=b(()=>e.direction==="horizontal"),m=b(()=>{var v,i;return((i=(v=n.value)==null?void 0:v.group)==null?void 0:i.isSelected.value)??!1});function _(v){var f,h;let{value:i}=v;if(i){const w=(h=(f=n.value)==null?void 0:f.$el.parentElement)==null?void 0:h.querySelector(".v-tab--selected .v-tab__slider"),P=s.value;if(!w||!P)return;const A=getComputedStyle(w).color,C=w.getBoundingClientRect(),E=P.getBoundingClientRect(),g=c.value?"x":"y",S=c.value?"X":"Y",T=c.value?"right":"bottom",V=c.value?"width":"height",N=C[g],J=E[g],I=N>J?C[T]-E[T]:C[g]-E[g],Q=Math.sign(I)>0?c.value?"right":"bottom":Math.sign(I)<0?c.value?"left":"top":"center",ee=(Math.abs(I)+(Math.sign(I)<0?C[V]:E[V]))/Math.max(C[V],E[V])||0,$=C[V]/E[V]||0,H=1.5;Ne(P,{backgroundColor:[A,"currentcolor"],transform:[`translate${S}(${I}px) scale${S}(${$})`,`translate${S}(${I/H}px) scale${S}(${(ee-1)/H+1})`,"none"],transformOrigin:Array(3).fill(Q)},{duration:225,easing:Je})}}return L(()=>{const v=q.filterProps(e);return y(q,F({symbol:ie,ref:n,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},v,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":_}),{...o,default:()=>{var i;return y(K,null,[((i=o.default)==null?void 0:i.call(o))??e.text,!e.hideSlider&&y("div",{ref:s,class:["v-tab__slider",l.value],style:r.value},null)])}})}),Ke({},n)}}),zt=e=>{const{touchstartX:a,touchendX:o,touchstartY:t,touchendY:l}=e,r=.5,n=16;e.offsetX=o-a,e.offsetY=l-t,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&o<a-n&&e.left(e),e.right&&o>a+n&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&l<t-n&&e.up(e),e.down&&l>t+n&&e.down(e))};function Wt(e,a){var t;const o=e.changedTouches[0];a.touchstartX=o.clientX,a.touchstartY=o.clientY,(t=a.start)==null||t.call(a,{originalEvent:e,...a})}function At(e,a){var t;const o=e.changedTouches[0];a.touchendX=o.clientX,a.touchendY=o.clientY,(t=a.end)==null||t.call(a,{originalEvent:e,...a}),zt(a)}function $t(e,a){var t;const o=e.changedTouches[0];a.touchmoveX=o.clientX,a.touchmoveY=o.clientY,(t=a.move)==null||t.call(a,{originalEvent:e,...a})}function Rt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const a={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>Wt(o,a),touchend:o=>At(o,a),touchmove:o=>$t(o,a)}}function Ot(e,a){var s;const o=a.value,t=o!=null&&o.parent?e.parentElement:e,l=(o==null?void 0:o.options)??{passive:!0},r=(s=a.instance)==null?void 0:s.$.uid;if(!t||!r)return;const n=Rt(a.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[r]=n,Te(n).forEach(c=>{t.addEventListener(c,n[c],l)})}function pt(e,a){var r,n;const o=(r=a.value)!=null&&r.parent?e.parentElement:e,t=(n=a.instance)==null?void 0:n.$.uid;if(!(o!=null&&o._touchHandlers)||!t)return;const l=o._touchHandlers[t];Te(l).forEach(s=>{o.removeEventListener(s,l[s])}),delete o._touchHandlers[t]}const Re={mounted:Ot,unmounted:pt},Lt=Re,Oe=Symbol.for("vuetify:v-window"),pe=Symbol.for("vuetify:v-window-group"),Le=W({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...se(),...le(),...Qe()},"VWindow"),ge=z()({name:"VWindow",directives:{Touch:Re},props:Le(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const{themeClasses:t}=Ze(e),{isRtl:l}=ke(),{t:r}=et(),n=Ve(e,pe),s=Y(),c=b(()=>l.value?!e.reverse:e.reverse),m=B(!1),_=b(()=>{const g=e.direction==="vertical"?"y":"x",T=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${g}${T}-transition`}),v=B(0),i=Y(void 0),f=b(()=>n.items.value.findIndex(g=>n.selected.value.includes(g.id)));Ce(f,(g,S)=>{const T=n.items.value.length,V=T-1;T<=2?m.value=g<S:g===V&&S===0?m.value=!0:g===0&&S===V?m.value=!1:m.value=g<S}),tt(Oe,{transition:_,isReversed:m,transitionCount:v,transitionHeight:i,rootRef:s});const h=b(()=>e.continuous||f.value!==0),w=b(()=>e.continuous||f.value!==n.items.value.length-1);function P(){h.value&&n.prev()}function A(){w.value&&n.next()}const C=b(()=>{const g=[],S={icon:l.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:n.prev,"aria-label":r("$vuetify.carousel.prev")};g.push(h.value?o.prev?o.prev({props:S}):y(q,S,null):y("div",null,null));const T={icon:l.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:n.next,"aria-label":r("$vuetify.carousel.next")};return g.push(w.value?o.next?o.next({props:T}):y(q,T,null):y("div",null,null)),g}),E=b(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?P():A()},right:()=>{c.value?A():P()},start:S=>{let{originalEvent:T}=S;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return L(()=>Ee(y(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var g,S;return[y("div",{class:"v-window__container",style:{height:i.value}},[(g=o.default)==null?void 0:g.call(o,{group:n}),e.showArrows!==!1&&y("div",{class:"v-window__controls"},[C.value])]),(S=o.additional)==null?void 0:S.call(o,{group:n})]}}),[[nt("touch"),E.value]])),{group:n}}}),Ht=W({...we(Le(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),He=z()({name:"VTabsWindow",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const t=Ie(ie,null),l=Pe(e,"modelValue"),r=b({get(){var n;return l.value!=null||!t?l.value:(n=t.items.value.find(s=>t.selected.value.includes(s.id)))==null?void 0:n.value},set(n){l.value=n}});return L(()=>{const n=ge.filterProps(e);return y(ge,F({_as:"VTabsWindow"},n,{modelValue:r.value,"onUpdate:modelValue":s=>r.value=s,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),o)}),{}}});function Mt(){const e=B(!1);return ot(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:b(()=>e.value?void 0:{transition:"none !important"}),isBooted:at(e)}}const Me=W({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...se(),...st(),...lt()},"VWindowItem"),be=z()({name:"VWindowItem",directives:{Touch:Lt},props:Me(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:o}=a;const t=Ie(Oe),l=it(e,pe),{isBooted:r}=Mt();if(!t||!l)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const n=B(!1),s=b(()=>r.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!n.value||!t||(n.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var h;n.value||!t||(n.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=ae((h=t.rootRef.value)==null?void 0:h.clientHeight)),t.transitionCount.value+=1)}function _(){c()}function v(h){n.value&&dt(()=>{!s.value||!n.value||!t||(t.transitionHeight.value=ae(h.clientHeight))})}const i=b(()=>{const h=t.isReversed.value?e.reverseTransition:e.transition;return s.value?{name:typeof h!="string"?t.transition.value:h,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:_,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:_,onEnter:v}:!1}),{hasContent:f}=rt(e,l.isSelected);return L(()=>y(ct,{transition:i.value,disabled:!r.value},{default:()=>{var h;return[Ee(y("div",{class:["v-window-item",l.selectedClass.value,e.class],style:e.style},[f.value&&((h=o.default)==null?void 0:h.call(o))]),[[ut,l.isSelected.value]])]}})),{groupItem:l}}}),Ft=W({...Me()},"VTabsWindowItem"),Fe=z()({name:"VTabsWindowItem",props:Ft(),setup(e,a){let{slots:o}=a;return L(()=>{const t=be.filterProps(e);return y(be,F({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),o)}),{}}}),Xt=W({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function k(e,a,o){return z()({name:e,props:Xt({mode:o,origin:a}),setup(t,l){let{slots:r}=l;const n={onBeforeEnter(s){t.origin&&(s.style.transformOrigin=t.origin)},onLeave(s){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:m,offsetWidth:_,offsetHeight:v}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${c}px`,s.style.left=`${m}px`,s.style.width=`${_}px`,s.style.height=`${v}px`}t.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(t.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:c,top:m,left:_,width:v,height:i}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=c||"",s.style.top=m||"",s.style.left=_||"",s.style.width=v||"",s.style.height=i||""}}};return()=>{const s=t.group?Be:ze;return We(s,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:n},r.default)}}})}function Xe(e,a){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return z()({name:e,props:{mode:{type:String,default:o},disabled:Boolean,group:Boolean},setup(t,l){let{slots:r}=l;const n=t.group?Be:ze;return()=>We(n,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},r.default)}})}function Ye(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const o=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ft(`offset-${o}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[o]:n.style[o]}},onEnter(n){const s=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const c=`${n[t]}px`;n.style[o]="0",n.offsetHeight,n.style.transition=s.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[o]=c})},onAfterEnter:r,onEnterCancelled:r,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[o]:n.style[o]},n.style.overflow="hidden",n.style[o]=`${n[t]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[o]="0")},onAfterLeave:l,onLeaveCancelled:l};function l(n){e&&n._parent&&n._parent.classList.remove(e),r(n)}function r(n){const s=n._initialStyle[o];n.style.overflow=n._initialStyle.overflow,s!=null&&(n.style[o]=s),delete n._initialStyle}}k("fab-transition","center center","out-in");k("dialog-bottom-transition");k("dialog-top-transition");const Se=k("fade-transition");k("scale-transition");k("scroll-x-transition");k("scroll-x-reverse-transition");k("scroll-y-transition");k("scroll-y-reverse-transition");k("slide-x-transition");k("slide-x-reverse-transition");k("slide-y-transition");k("slide-y-reverse-transition");Xe("expand-transition",Ye());Xe("expand-x-transition",Ye("",!0));function Yt(e){let{selectedElement:a,containerElement:o,isRtl:t,isHorizontal:l}=e;const r=D(l,o),n=De(l,t,o),s=D(l,a),c=Ge(l,a),m=s*.4;return n>c?c-m:n+r<c+s?c-r+s+m:n}function Dt(e){let{selectedElement:a,containerElement:o,isHorizontal:t}=e;const l=D(t,o),r=Ge(t,a),n=D(t,a);return r-l/2+n/2}function xe(e,a){const o=e?"scrollWidth":"scrollHeight";return(a==null?void 0:a[o])||0}function Gt(e,a){const o=e?"clientWidth":"clientHeight";return(a==null?void 0:a[o])||0}function De(e,a,o){if(!o)return 0;const{scrollLeft:t,offsetWidth:l,scrollWidth:r}=o;return e?a?r-l+t:t:o.scrollTop}function D(e,a){const o=e?"offsetWidth":"offsetHeight";return(a==null?void 0:a[o])||0}function Ge(e,a){const o=e?"offsetLeft":"offsetTop";return(a==null?void 0:a[o])||0}const Ut=Symbol.for("vuetify:v-slide-group"),Ue=W({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ut},nextIcon:{type:ce,default:"$next"},prevIcon:{type:ce,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...se(),...vt({mobile:null}),...le(),...ht({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),_e=z()({name:"VSlideGroup",props:Ue(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const{isRtl:t}=ke(),{displayClasses:l,mobile:r}=yt(e),n=Ve(e,e.symbol),s=B(!1),c=B(0),m=B(0),_=B(0),v=b(()=>e.direction==="horizontal"),{resizeRef:i,contentRect:f}=de(),{resizeRef:h,contentRect:w}=de(),P=mt(),A=b(()=>({container:i.el,duration:200,easing:"easeOutQuart"})),C=b(()=>n.selected.value.length?n.items.value.findIndex(u=>u.id===n.selected.value[0]):-1),E=b(()=>n.selected.value.length?n.items.value.findIndex(u=>u.id===n.selected.value[n.selected.value.length-1]):-1);if(fe){let u=-1;Ce(()=>[n.selected.value,f.value,w.value,v.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(f.value&&w.value){const d=v.value?"width":"height";m.value=f.value[d],_.value=w.value[d],s.value=m.value+1<_.value}if(C.value>=0&&h.el){const d=h.el.children[E.value];S(d,e.centerActive)}})})}const g=B(!1);function S(u,d){let x=0;d?x=Dt({containerElement:i.el,isHorizontal:v.value,selectedElement:u}):x=Yt({containerElement:i.el,isHorizontal:v.value,isRtl:t.value,selectedElement:u}),T(x)}function T(u){if(!fe||!i.el)return;const d=D(v.value,i.el),x=De(v.value,t.value,i.el);if(!(xe(v.value,i.el)<=d||Math.abs(u-x)<16)){if(v.value&&t.value&&i.el){const{scrollWidth:G,offsetWidth:oe}=i.el;u=G-oe-u}v.value?P.horizontal(u,A.value):P(u,A.value)}}function V(u){const{scrollTop:d,scrollLeft:x}=u.target;c.value=v.value?x:d}function N(u){if(g.value=!0,!(!s.value||!h.el)){for(const d of u.composedPath())for(const x of h.el.children)if(x===d){S(x);return}}}function J(u){g.value=!1}let I=!1;function Q(u){var d;!I&&!g.value&&!(u.relatedTarget&&((d=h.el)!=null&&d.contains(u.relatedTarget)))&&$(),I=!1}function Z(){I=!0}function ee(u){if(!h.el)return;function d(x){u.preventDefault(),$(x)}v.value?u.key==="ArrowRight"?d(t.value?"prev":"next"):u.key==="ArrowLeft"&&d(t.value?"next":"prev"):u.key==="ArrowDown"?d("next"):u.key==="ArrowUp"&&d("prev"),u.key==="Home"?d("first"):u.key==="End"&&d("last")}function $(u){var x,M;if(!h.el)return;let d;if(!u)d=gt(h.el)[0];else if(u==="next"){if(d=(x=h.el.querySelector(":focus"))==null?void 0:x.nextElementSibling,!d)return $("first")}else if(u==="prev"){if(d=(M=h.el.querySelector(":focus"))==null?void 0:M.previousElementSibling,!d)return $("last")}else u==="first"?d=h.el.firstElementChild:u==="last"&&(d=h.el.lastElementChild);d&&d.focus({preventScroll:!0})}function H(u){const d=v.value&&t.value?-1:1,x=(u==="prev"?-d:d)*m.value;let M=c.value+x;if(v.value&&t.value&&i.el){const{scrollWidth:G,offsetWidth:oe}=i.el;M+=G-oe}T(M)}const te=b(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),ne=b(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return s.value||Math.abs(c.value)>0;case"mobile":return r.value||s.value||Math.abs(c.value)>0;default:return!r.value&&(s.value||Math.abs(c.value)>0)}}),re=b(()=>Math.abs(c.value)>1),ue=b(()=>{if(!i.value)return!1;const u=xe(v.value,i.el),d=Gt(v.value,i.el);return u-d-Math.abs(c.value)>1});return L(()=>y(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":ne.value,"v-slide-group--is-overflowing":s.value},l.value,e.class],style:e.style,tabindex:g.value||n.selected.value.length?-1:0,onFocus:Q},{default:()=>{var u,d,x;return[ne.value&&y("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!re.value}],onMousedown:Z,onClick:()=>re.value&&H("prev")},[((u=o.prev)==null?void 0:u.call(o,te.value))??y(Se,null,{default:()=>[y(ve,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),y("div",{key:"container",ref:i,class:"v-slide-group__container",onScroll:V},[y("div",{ref:h,class:"v-slide-group__content",onFocusin:N,onFocusout:J,onKeydown:ee},[(d=o.default)==null?void 0:d.call(o,te.value)])]),ne.value&&y("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ue.value}],onMousedown:Z,onClick:()=>ue.value&&H("next")},[((x=o.next)==null?void 0:x.call(o,te.value))??y(Se,null,{default:()=>[y(ve,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:H,scrollOffset:c,focus:$}}});function jt(e){return e?e.map(a=>Tt(a)?a:{text:a,value:a}):[]}const qt=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ue({mandatory:"force",selectedClass:"v-tab-item--selected"}),...bt(),...le()},"VTabs"),Kt=z()({name:"VTabs",props:qt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:o,slots:t}=a;const l=Pe(e,"modelValue"),r=b(()=>jt(e.items)),{densityClasses:n}=St(e),{backgroundColorClasses:s,backgroundColorStyles:c}=xt(R(e,"bgColor")),{scopeId:m}=_t();return wt({VTab:{color:R(e,"color"),direction:R(e,"direction"),stacked:R(e,"stacked"),fixed:R(e,"fixedTabs"),sliderColor:R(e,"sliderColor"),hideSlider:R(e,"hideSlider")}}),L(()=>{const _=_e.filterProps(e),v=!!(t.window||e.items.length>0);return y(K,null,[y(_e,F(_,{modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},n.value,s.value,e.class],style:[{"--v-tabs-height":ae(e.height)},c.value,e.style],role:"tablist",symbol:ie},m,o),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??r.value.map(f=>{var h;return((h=t.tab)==null?void 0:h.call(t,{item:f}))??y($e,F(f,{key:f.text,value:f.value}),{default:t[`tab.${f.value}`]?()=>{var w;return(w=t[`tab.${f.value}`])==null?void 0:w.call(t,{item:f})}:void 0})})]}}),v&&y(He,F({modelValue:l.value,"onUpdate:modelValue":i=>l.value=i,key:"tabs-window"},m),{default:()=>{var i;return[r.value.map(f=>{var h;return((h=t.item)==null?void 0:h.call(t,{item:f}))??y(Fe,{value:f.value},{default:()=>{var w;return(w=t[`item.${f.value}`])==null?void 0:w.call(t,{item:f})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}}),Nt=Ae({__name:"MenuNav",setup(e){const{t:a,locale:o}=kt(),t=Y("tabOne"),l=[{key:"tabOne",labelKey:"tabOne"},{key:"tabTwo",labelKey:"tabTwo"},{key:"tabThree",labelKey:"tabThree"},{key:"tabFour",labelKey:"tabFour"}],r=b(()=>l.map(v=>({key:v.key,label:a(v.labelKey)}))),n=U(()=>j(()=>import("./TabOne-eiJGeDK9.js"),__vite__mapDeps([0,1,2]))),s=U(()=>j(()=>import("./TabTwo-BrWkyMcL.js"),__vite__mapDeps([3,1,2]))),c=U(()=>j(()=>import("./TabThree-d0vh46Sy.js"),__vite__mapDeps([4,1,2]))),m=U(()=>j(()=>import("./TabFour-DaGnMlqK.js"),__vite__mapDeps([5,1,2]))),_={tabOne:n,tabTwo:s,tabThree:c,tabFour:m};return(v,i)=>(p(),X(me,{color:"basil"},{default:O(()=>[y(Kt,{modelValue:t.value,"onUpdate:modelValue":i[0]||(i[0]=f=>t.value=f),"bg-color":"transparent",color:"basil",grow:""},{default:O(()=>[(p(!0),he(K,null,ye(r.value,f=>(p(),X($e,{key:f.key,value:f.key},{default:O(()=>[Vt("span",{class:Ct({"text-no-select":t.value!==f.key})},Et(f.label),3)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),y(He,{modelValue:t.value,"onUpdate:modelValue":i[1]||(i[1]=f=>t.value=f)},{default:O(()=>[(p(!0),he(K,null,ye(r.value,f=>(p(),X(Fe,{key:f.key,value:f.key},{default:O(()=>[y(me,{color:"basil",flat:""},{default:O(()=>[y(It,{class:"text-basil"},{default:O(()=>[(p(),X(Pt(_[f.key])))]),_:2},1024)]),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}))}}),Qt=Ae({__name:"index",setup(e){return(a,o)=>{const t=Nt;return p(),X(t)}}});export{Qt as default};
