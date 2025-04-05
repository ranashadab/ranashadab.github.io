import{Q as X}from"./QBtn-B3jxYfhD.js";import{k as q,c as d,h,r as z,l as U,o as P,g as H,m as R,n as I,p as W,q as k,a as K,t as $,w as T,u as N,v as G,x as Y,y as _,b as Z,z as ee,A as te,B as C,C as ne,f as L,D as oe,E as le,G as ie}from"./index-D_Ha4Za0.js";import{h as D,a as re,b as ae}from"./render-CXTdqwyB.js";import{s as se,g as ue,a as ce,b as de,c as E}from"./scroll-DnnKWhgm.js";const fe=q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},D(f.default))}}),ve=q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},D(f.default))}});function he(){const e=z(!U.value);return e.value===!1&&P(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver<"u",j=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},F=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let n=null,t,o={width:-1,height:-1};function r(a){a===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:i}=t;(a!==o.width||i!==o.height)&&(o={width:a,height:i},f("resize",o))}}const{proxy:g}=H();if(g.trigger=r,J===!0){let a;const i=b=>{t=g.$el.parentNode,t?(a=new ResizeObserver(r),a.observe(t),u()):b!==!0&&W(()=>{i(!0)})};return P(()=>{i()}),R(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),I}else{let a=function(){n!==null&&(clearTimeout(n),n=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",r,k.passive),v=void 0)},i=function(){a(),t&&t.contentDocument&&(v=t.contentDocument.defaultView,v.addEventListener("resize",r,k.passive),u())};const{isHydrated:b}=he();let v;return P(()=>{W(()=>{t=g.$el,t&&i()})}),R(a),()=>{if(b.value===!0)return h("object",{class:"q--avoid-card-border",style:j.style,tabindex:-1,type:"text/html",data:j.url,"aria-hidden":"true",onLoad:i})}}}}),ge=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=H(),o=K(N,$);if(o===$)return console.error("QHeader needs to be child of QLayout"),$;const r=z(parseInt(e.heightHint,10)),u=z(!0),g=d(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),a=d(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?r.value:0;const l=r.value-o.scroll.value.position;return l>0?l:0}),i=d(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),b=d(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),v=d(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=d(()=>{const l=o.rows.value.top,p={};return l[0]==="l"&&o.left.space===!0&&(p[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(p[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),p});function c(l,p){o.update("header",l,p)}function y(l,p){l.value!==p&&(l.value=p)}function V({height:l}){y(r,l),c("size",l)}function O(l){b.value===!0&&y(u,!0),n("focusin",l)}T(()=>e.modelValue,l=>{c("space",l),y(u,!0),o.animate()}),T(a,l=>{c("offset",l)}),T(()=>e.reveal,l=>{l===!1&&y(u,e.modelValue)}),T(u,l=>{o.animate(),n("reveal",l)}),T(o.scroll,l=>{e.reveal===!0&&y(u,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const Q={};return o.instances.header=Q,e.modelValue===!0&&c("size",r.value),c("space",e.modelValue),c("offset",a.value),R(()=>{o.instances.header===Q&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const l=re(f.default,[]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(h(F,{debounce:0,onResize:V})),h("header",{class:v.value,style:x.value,onFocusin:O},l)}}}),me=q({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:n}}=H(),t=K(N,$);if(t===$)return console.error("QPageContainer needs to be child of QLayout"),$;G(Y,!0);const o=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:o.value},D(f.default))}}),{passive:A}=k,be=["both","horizontal","vertical"],pe=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>be.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:se},emits:["scroll"],setup(e,{emit:f}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,r;T(()=>e.scrollTarget,()=>{a(),g()});function u(){t!==null&&t();const v=Math.max(0,ce(o)),x=de(o),c={top:v-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:v,left:x},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),f("scroll",{...n})}function g(){o=ue(r,e.scrollTarget),o.addEventListener("scroll",i,A),i(!0)}function a(){o!==void 0&&(o.removeEventListener("scroll",i,A),o=void 0)}function i(v){if(v===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[x,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(x),t=null}}}const{proxy:b}=H();return T(()=>b.$q.lang.rtl,u),P(()=>{r=b.$el.parentNode,g()}),R(()=>{t!==null&&t(),a()}),Object.assign(b,{trigger:i,getPosition:()=>n}),I}}),ye=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:n}){const{proxy:{$q:t}}=H(),o=z(null),r=z(t.screen.height),u=z(e.container===!0?0:t.screen.width),g=z({position:0,direction:"down",inflectionPoint:0}),a=z(0),i=z(U.value===!0?0:E()),b=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=d(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=d(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(s){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};g.value=m,e.onScroll!==void 0&&n("scroll",m)}}function V(s){const{height:m,width:S}=s;let w=!1;r.value!==m&&(w=!0,r.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),Q()),u.value!==S&&(w=!0,u.value=S),w===!0&&e.onResize!==void 0&&n("resize",s)}function O({height:s}){a.value!==s&&(a.value=s,Q())}function Q(){if(e.container===!0){const s=r.value>a.value?E():0;i.value!==s&&(i.value=s)}}let l=null;const p={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:o,height:r,containerHeight:a,scrollbarWidth:i,totalWidth:d(()=>u.value+i.value),rows:d(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:_({size:0,offset:0,space:!1}),right:_({size:300,offset:0,space:!1}),footer:_({size:0,offset:0,space:!1}),left:_({size:300,offset:0,space:!1}),scroll:g,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,m,S){p[s][m]=S}};if(G(N,p),E()>0){let s=function(){w=null,B.classList.remove("hide-scrollbar")},m=function(){if(w===null){if(B.scrollHeight>t.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(w);w=setTimeout(s,300)},S=function(M){w!==null&&M==="remove"&&(clearTimeout(w),s()),window[`${M}EventListener`]("resize",m)},w=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",S),e.container!==!0&&S("add"),Z(()=>{S("remove")})}return()=>{const s=ae(f.default,[h(pe,{onScroll:y}),h(F,{onResize:V})]),m=h("div",{class:b.value,style:v.value,ref:e.container===!0?void 0:o,tabindex:-1},s);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:o},[h(F,{onResize:O}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:c.value},[m])])]):m}}}),Te={__name:"MainLayout",setup(e){const f=z(!1);function n(){f.value=!f.value}return(t,o)=>{const r=ne("router-view");return te(),ee(ye,{view:"lHh Lpr lFf"},{default:C(()=>[L(ge,{elevated:""},{default:C(()=>[L(ve,null,{default:C(()=>[L(X,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:n}),L(fe,null,{default:C(()=>o[0]||(o[0]=[le(" Quasar App ")])),_:1}),oe("div",null,"Quasar v"+ie(t.$q.version),1)]),_:1})]),_:1}),L(me,null,{default:C(()=>[L(r)]),_:1})]),_:1})}}};export{Te as default};
