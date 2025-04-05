import{u as He,a as Qe,b as A,Q as z}from"./QBtn-B3jxYfhD.js";import{u as Ne,v as De,a as re,b as R,c as Ae,d as Le,p as ne,e as Be,f as Ie,g as Re,h as Ue,i as Ye,j as Ke,k as je,r as se,s as Xe,l as G,m as Ge,n as Je,o as We,_ as we,Q as Ze,q as $e,C as et,t as le,w as ue,x as ce,y as de,z as tt,A as ot}from"./_plugin-vue_export-helper-DXTgLTG7.js";import{Q as it}from"./QPage-D6ZXuiPE.js";import{g as W,t as U,c as C,a as at,h as x,u as rt,k as N,r as h,w as me,m as fe,J as Q,K as E,L as nt,M as xe,N as st,O as M,P as Y,n as lt,Q as J,R as pe,S as K,U as ut,I as ct,V as dt,A as V,f as b,B as v,W as ve,z as P,X as D,E as k,D as H,Y as ge,o as mt,C as ft}from"./index-D_Ha4Za0.js";import{h as Z,c as pt}from"./render-CXTdqwyB.js";import{s as vt,g as gt}from"./scroll-DnnKWhgm.js";const bt={position:{type:String,default:"bottom-right",validator:o=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(o)},offset:{type:Array,validator:o=>o.length===2},expand:Boolean};function ht(){const{props:o,proxy:{$q:t}}=W(),n=at(rt,U);if(n===U)return console.error("QPageSticky needs to be child of QLayout"),U;const i=C(()=>{const d=o.position;return{top:d.indexOf("top")!==-1,right:d.indexOf("right")!==-1,bottom:d.indexOf("bottom")!==-1,left:d.indexOf("left")!==-1,vertical:d==="top"||d==="bottom",horizontal:d==="left"||d==="right"}}),e=C(()=>n.header.offset),a=C(()=>n.right.offset),r=C(()=>n.footer.offset),s=C(()=>n.left.offset),c=C(()=>{let d=0,p=0;const u=i.value,m=t.lang.rtl===!0?-1:1;u.top===!0&&e.value!==0?p=`${e.value}px`:u.bottom===!0&&r.value!==0&&(p=`${-r.value}px`),u.left===!0&&s.value!==0?d=`${m*s.value}px`:u.right===!0&&a.value!==0&&(d=`${-m*a.value}px`);const f={transform:`translate(${d}, ${p})`};return o.offset&&(f.margin=`${o.offset[1]}px ${o.offset[0]}px`),u.vertical===!0?(s.value!==0&&(f[t.lang.rtl===!0?"right":"left"]=`${s.value}px`),a.value!==0&&(f[t.lang.rtl===!0?"left":"right"]=`${a.value}px`)):u.horizontal===!0&&(e.value!==0&&(f.top=`${e.value}px`),r.value!==0&&(f.bottom=`${r.value}px`)),f}),l=C(()=>`q-page-sticky row flex-center fixed-${o.position} q-page-sticky--${o.expand===!0?"expand":"shrink"}`);function g(d){const p=Z(d.default);return x("div",{class:l.value,style:c.value},o.expand===!0?p:[x("div",p)])}return{$layout:n,getStickyContent:g}}const yt=N({name:"QPageSticky",props:bt,setup(o,{slots:t}){const{getStickyContent:n}=ht();return()=>n(t)}}),Ct=N({name:"QSpace",setup(){const o=x("div",{class:"q-space"});return()=>o}}),j=N({name:"QTooltip",inheritAttrs:!1,props:{...Le,...Ae,...R,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...R.transitionShow,default:"jump-down"},transitionHide:{...R.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:re},self:{type:String,default:"top middle",validator:re},offset:{type:Array,default:()=>[14,14],validator:De},scrollTarget:vt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ne],setup(o,{slots:t,emit:n,attrs:i}){let e,a;const r=W(),{proxy:{$q:s}}=r,c=h(null),l=h(!1),g=C(()=>ne(o.anchor,s.lang.rtl)),d=C(()=>ne(o.self,s.lang.rtl)),p=C(()=>o.persistent!==!0),{registerTick:u,removeTick:m}=Be(),{registerTimeout:f}=Ie(),{transitionProps:L,transitionStyle:F}=Re(o),{localScrollTarget:T,changeScrollEvent:Se,unconfigureScrollTarget:ke}=Ue(o,ie),{anchorEl:w,canShow:qe,anchorEvents:_}=Ye({showing:l,configureAnchorEl:Oe}),{show:Ve,hide:B}=Ke({showing:l,canShow:qe,handleShow:Pe,handleHide:Ee,hideOnRouteChange:p,processOnMount:!0});Object.assign(_,{delayShow:Fe,delayHide:_e});const{showPortal:ee,hidePortal:te,renderPortal:Te}=je(r,c,Me,"tooltip");if(s.platform.is.mobile===!0){const y={anchorEl:w,innerRef:c,onClickOutside(S){return B(S),S.target.classList.contains("q-dialog__backdrop")&&xe(S),!0}},I=C(()=>o.modelValue===null&&o.persistent!==!0&&l.value===!0);me(I,S=>{(S===!0?Ge:se)(y)}),fe(()=>{se(y)})}function Pe(y){ee(),u(()=>{a=new MutationObserver(()=>O()),a.observe(c.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),O(),ie()}),e===void 0&&(e=me(()=>s.screen.width+"|"+s.screen.height+"|"+o.self+"|"+o.anchor+"|"+s.lang.rtl,O)),f(()=>{ee(!0),n("show",y)},o.transitionDuration)}function Ee(y){m(),te(),oe(),f(()=>{te(!0),n("hide",y)},o.transitionDuration)}function oe(){a!==void 0&&(a.disconnect(),a=void 0),e!==void 0&&(e(),e=void 0),ke(),Q(_,"tooltipTemp")}function O(){Xe({targetEl:c.value,offset:o.offset,anchorEl:w.value,anchorOrigin:g.value,selfOrigin:d.value,maxHeight:o.maxHeight,maxWidth:o.maxWidth})}function Fe(y){if(s.platform.is.mobile===!0){G(),document.body.classList.add("non-selectable");const I=w.value,S=["touchmove","touchcancel","touchend","click"].map(ae=>[I,ae,"delayHide","passiveCapture"]);E(_,"tooltipTemp",S)}f(()=>{Ve(y)},o.delay)}function _e(y){s.platform.is.mobile===!0&&(Q(_,"tooltipTemp"),G(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),f(()=>{B(y)},o.hideDelay)}function Oe(){if(o.noParentEvent===!0||w.value===null)return;const y=s.platform.is.mobile===!0?[[w.value,"touchstart","delayShow","passive"]]:[[w.value,"mouseenter","delayShow","passive"],[w.value,"mouseleave","delayHide","passive"]];E(_,"anchor",y)}function ie(){if(w.value!==null||o.scrollTarget!==void 0){T.value=gt(w.value,o.scrollTarget);const y=o.noParentEvent===!0?O:B;Se(T.value,y)}}function ze(){return l.value===!0?x("div",{...i,ref:c,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",i.class],style:[i.style,F.value],role:"tooltip"},Z(t.default)):null}function Me(){return x(nt,L.value,ze)}return fe(oe),Object.assign(r.proxy,{updatePosition:O}),Te}}),wt=N({name:"QBar",props:{...Je,dense:Boolean},setup(o,{slots:t}){const{proxy:{$q:n}}=W(),i=We(o,n),e=C(()=>`q-bar row no-wrap items-center q-bar--${o.dense===!0?"dense":"standard"}  q-bar--${i.value===!0?"dark":"light"}`);return()=>x("div",{class:e.value,role:"toolbar"},Z(t.default))}}),xt=N({name:"QAvatar",props:{...He,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(o,{slots:t}){const n=Qe(o),i=C(()=>"q-avatar"+(o.color?` bg-${o.color}`:"")+(o.textColor?` text-${o.textColor} q-chip--colored`:"")+(o.square===!0?" q-avatar--square":o.rounded===!0?" rounded-borders":"")),e=C(()=>o.fontSize?{fontSize:o.fontSize}:null);return()=>{const a=o.icon!==void 0?[x(A,{name:o.icon})]:void 0;return x("div",{class:i.value,style:n.value},[x("div",{class:"q-avatar__content row flex-center overflow-hidden",style:e.value},pt(t.default,a))])}}}),$={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},St=Object.keys($);$.all=!0;function be(o){const t={};for(const n of St)o[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?$:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const kt=["INPUT","TEXTAREA"];function he(o,t){return t.event===void 0&&o.target!==void 0&&o.target.draggable!==!0&&typeof t.handler=="function"&&kt.includes(o.target.nodeName.toUpperCase())===!1&&(o.qClonedBy===void 0||o.qClonedBy.indexOf(t.uid)===-1)}function X(o,t,n){const i=J(o);let e,a=i.left-t.event.x,r=i.top-t.event.y,s=Math.abs(a),c=Math.abs(r);const l=t.direction;l.horizontal===!0&&l.vertical!==!0?e=a<0?"left":"right":l.horizontal!==!0&&l.vertical===!0?e=r<0?"up":"down":l.up===!0&&r<0?(e="up",s>c&&(l.left===!0&&a<0?e="left":l.right===!0&&a>0&&(e="right"))):l.down===!0&&r>0?(e="down",s>c&&(l.left===!0&&a<0?e="left":l.right===!0&&a>0&&(e="right"))):l.left===!0&&a<0?(e="left",s<c&&(l.up===!0&&r<0?e="up":l.down===!0&&r>0&&(e="down"))):l.right===!0&&a>0&&(e="right",s<c&&(l.up===!0&&r<0?e="up":l.down===!0&&r>0&&(e="down")));let g=!1;if(e===void 0&&n===!1){if(t.event.isFirst===!0||t.event.lastDir===void 0)return{};e=t.event.lastDir,g=!0,e==="left"||e==="right"?(i.left-=a,s=0,a=0):(i.top-=r,c=0,r=0)}return{synthetic:g,payload:{evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse===!0,position:i,direction:e,isFirst:t.event.isFirst,isFinal:n===!0,duration:Date.now()-t.event.time,distance:{x:s,y:c},offset:{x:a,y:r},delta:{x:i.left-t.event.lastX,y:i.top-t.event.lastY}}}}let qt=0;const Vt=st({name:"touch-pan",beforeMount(o,{value:t,modifiers:n}){if(n.mouse!==!0&&M.has.touch!==!0)return;function i(a,r){n.mouse===!0&&r===!0?xe(a):(n.stop===!0&&K(a),n.prevent===!0&&pe(a))}const e={uid:"qvtp_"+qt++,handler:t,modifiers:n,direction:be(n),noop:lt,mouseStart(a){he(a,e)&&ut(a)&&(E(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(a,!0))},touchStart(a){if(he(a,e)){const r=a.target;E(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(a)}},start(a,r){if(M.is.firefox===!0&&Y(o,!0),e.lastEvt=a,r===!0||n.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const l=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&pe(l),a.cancelBubble===!0&&K(l),Object.assign(l,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[e.uid]:a.qClonedBy.concat(e.uid)}),e.initialEvent={target:a.target,event:l}}K(a)}const{left:s,top:c}=J(a);e.event={x:s,y:c,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:c}},move(a){if(e.event===void 0)return;const r=J(a),s=r.left-e.event.x,c=r.top-e.event.y;if(s===0&&c===0)return;e.lastEvt=a;const l=e.event.mouse===!0,g=()=>{i(a,l);let u;n.preserveCursor!==!0&&n.preservecursor!==!0&&(u=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),l===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),G(),e.styleCleanup=m=>{if(e.styleCleanup=void 0,u!==void 0&&(document.documentElement.style.cursor=u),document.body.classList.remove("non-selectable"),l===!0){const f=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{f(),m()},50):f()}else m!==void 0&&m()}};if(e.event.detected===!0){e.event.isFirst!==!0&&i(a,e.event.mouse);const{payload:u,synthetic:m}=X(a,e,!1);u!==void 0&&(e.handler(u)===!1?e.end(a):(e.styleCleanup===void 0&&e.event.isFirst===!0&&g(),e.event.lastX=u.position.left,e.event.lastY=u.position.top,e.event.lastDir=m===!0?void 0:u.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||l===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){g(),e.event.detected=!0,e.move(a);return}const d=Math.abs(s),p=Math.abs(c);d!==p&&(e.direction.horizontal===!0&&d>p||e.direction.vertical===!0&&d<p||e.direction.up===!0&&d<p&&c<0||e.direction.down===!0&&d<p&&c>0||e.direction.left===!0&&d>p&&s<0||e.direction.right===!0&&d>p&&s>0?(e.event.detected=!0,e.move(a)):e.end(a,!0))},end(a,r){if(e.event!==void 0){if(Q(e,"temp"),M.is.firefox===!0&&Y(o,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(X(a===void 0?e.lastEvt:a,e).payload);const{payload:s}=X(a===void 0?e.lastEvt:a,e,!0),c=()=>{e.handler(s)};e.styleCleanup!==void 0?e.styleCleanup(c):c()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(o.__qtouchpan=e,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";E(e,"main",[[o,"mousedown","mouseStart",`passive${a}`]])}M.has.touch===!0&&E(e,"main",[[o,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[o,"touchmove","noop","notPassiveCapture"]])},updated(o,t){const n=o.__qtouchpan;n!==void 0&&(t.oldValue!==t.value&&(typeof value!="function"&&n.end(),n.handler=t.value),n.direction=be(t.modifiers))},beforeUnmount(o){const t=o.__qtouchpan;t!==void 0&&(t.event!==void 0&&t.end(),Q(t,"main"),Q(t,"temp"),M.is.firefox===!0&&Y(o,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete o.__qtouchpan)}}),ye=["Google","Facebook","Twitter","Apple","Oracle"],Ce=["VH0001","VH0002","VH0003","VH0004","VH0005"],Tt={setup(){const o=ct(),t=h([18,18]),n=h(!1),i=h(["Google","Facebook","Twitter","Apple","Oracle"]),e=h(["VH0001","VH0002","VH0003","VH0004","VH0005"]),a=h("Vehicle number is required"),r=h("Customer name is required"),s=h(!1),c=(u,m,f,L)=>{if(u.length<3){f();return}setTimeout(()=>{m(()=>{if(L){if(u==="")i.value=ye;else{s.value=!1;const F=u.toLowerCase();i.value=ye.filter(T=>T.toLowerCase().indexOf(F)>-1)}return}if(u==="")e.value=Ce;else{s.value=!1;const F=u.toLowerCase();e.value=Ce.filter(T=>T.toLowerCase().indexOf(F)>-1)}})},500)},l=[{customer_name:"Google",vehicle_number:"VH0001"},{customer_name:"Facebook",vehicle_number:"VH0002"},{customer_name:"Twitter",vehicle_number:"VH0003"},{customer_name:"Apple",vehicle_number:"VH0004"},{customer_name:"Oracle",vehicle_number:"VH0005"}],g=h(!0),d=h(null),p=h(null);return{fabPos:t,draggingFab:n,moveFab(u){n.value=u.isFirst!==!0&&u.isFinal!==!0,t.value=[t.value[0]-u.delta.x,t.value[1]-u.delta.y]},dialog:h(!1),maximizedToggle:h(!1),show(){this.dialog=!0},hide(){this.dialog=!1},toggle(){this.dialog=!this.dialog},customerModel:d,vehicleModel:p,customerOptions:i,vehicleOptions:e,vehicleErrorMessage:a,customerErrorMessage:r,isValid:g,options:h(["VH0001","VH0002","VH0003","VH0004","VH0005"]),filterFn:c,customerUpdated:u=>{if(u===""){p.value="";return}p.value=l.find(m=>m.customer_name===u)?.vehicle_number},customerFilterFn:(u,m,f)=>c(u,m,f,!0),vehicleFilterFn:(u,m,f)=>c(u,m,f),createValue(u,m){s.value=!0,m(u,"add-unique")},next(){g.value=!0,(d.value===""||!d.value)&&(r.value="Customer name is required",g.value=!1),(p.value===""||!p.value)&&(a.value="Vehicle number is required",g.value=!1),s.value,g.value!==!1&&(o.push({path:"/inspections/inspection/2"}),console.log("Next clicked",d.value,p.value))}}}},Pt={class:"q-pa-md q-gutter-sm"},Et={class:"row"},Ft={class:"col-5"},_t={class:"col-5 offset-1"};function Ot(o,t,n,i,e,a){return V(),dt("div",Pt,[b(yt,{position:"bottom-right",offset:i.fabPos},{default:v(()=>[ve(b(z,{round:"",icon:"start",size:"xl",color:"primary",disable:i.draggingFab,onClick:t[0]||(t[0]=r=>i.toggle())},null,8,["disable"]),[[Vt,i.moveFab,void 0,{prevent:!0,mouse:!0}]])]),_:1},8,["offset"]),b(Ze,{modelValue:i.dialog,"onUpdate:modelValue":t[7]||(t[7]=r=>i.dialog=r),persistent:"",maximized:i.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},{default:v(()=>[b($e,{class:"bg-primary text-white",style:{width:"60vw","max-width":"80vw"}},{default:v(()=>[b(wt,null,{default:v(()=>[b(Ct),b(z,{dense:"",flat:"",icon:"minimize",onClick:t[1]||(t[1]=r=>i.maximizedToggle=!1),disable:!i.maximizedToggle},{default:v(()=>[i.maximizedToggle?(V(),P(j,{key:0,class:"bg-white text-primary"},{default:v(()=>t[8]||(t[8]=[k("Minimize")])),_:1})):D("",!0)]),_:1},8,["disable"]),b(z,{dense:"",flat:"",icon:"crop_square",onClick:t[2]||(t[2]=r=>i.maximizedToggle=!0),disable:i.maximizedToggle},{default:v(()=>[i.maximizedToggle?D("",!0):(V(),P(j,{key:0,class:"bg-white text-primary"},{default:v(()=>t[9]||(t[9]=[k("Maximize")])),_:1}))]),_:1},8,["disable"]),ve((V(),P(z,{dense:"",flat:"",icon:"close"},{default:v(()=>[b(j,{class:"bg-white text-primary"},{default:v(()=>t[10]||(t[10]=[k("Close")])),_:1})]),_:1})),[[et]])]),_:1}),b(le,null,{default:v(()=>[H("div",Et,[H("div",Ft,[b(ue,{filled:"","hide-selected":"","fill-input":"","bottom-slots":"","use-input":"",modelValue:i.customerModel,"onUpdate:modelValue":[t[4]||(t[4]=r=>i.customerModel=r),i.customerUpdated],label:"Customer Name","input-debounce":"0",options:i.customerOptions,onFilter:i.customerFilterFn,onNewValue:i.createValue,"error-message":i.customerErrorMessage,error:!i.isValid},{before:v(()=>[b(xt,null,{default:v(()=>t[11]||(t[11]=[H("img",{src:"https://cdn.quasar.dev/img/avatar5.jpg"},null,-1)])),_:1})]),append:v(()=>[i.customerModel!==""?(V(),P(A,{key:0,name:"close",onClick:t[3]||(t[3]=ge(r=>{i.customerModel="",i.vehicleModel=""},["stop","prevent"])),class:"cursor-pointer"})):D("",!0)]),hint:v(()=>t[12]||(t[12]=[k(" Enter customer name. ")])),"no-option":v(()=>[b(ce,null,{default:v(()=>[b(de,{class:"text-grey"},{default:v(()=>t[13]||(t[13]=[k(" No results ")])),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter","onUpdate:modelValue","onNewValue","error-message","error"])]),H("div",_t,[b(ue,{filled:"","hide-selected":"","fill-input":"","bottom-slots":"","use-input":"",modelValue:i.vehicleModel,"onUpdate:modelValue":t[6]||(t[6]=r=>i.vehicleModel=r),label:"Vehicle Number","input-debounce":"0",options:i.customerOptions,onFilter:i.vehicleFilterFn,onNewValue:i.createValue,"error-message":i.vehicleErrorMessage,error:!i.isValid},{append:v(()=>[i.vehicleModel!==""?(V(),P(A,{key:0,name:"close",onClick:t[5]||(t[5]=ge(r=>{i.vehicleModel="",i.customerModel=""},["stop","prevent"])),class:"cursor-pointer"})):D("",!0)]),hint:v(()=>t[14]||(t[14]=[k(" Enter customer's vehicle number. ")])),"no-option":v(()=>[b(ce,null,{default:v(()=>[b(de,{class:"text-grey"},{default:v(()=>t[15]||(t[15]=[k(" No results ")])),_:1})]),_:1})]),after:v(()=>[b(z,{round:"",dense:"",flat:"",icon:"send",onClick:i.next},null,8,["onClick"])]),_:1},8,["modelValue","options","onFilter","onNewValue","error-message","error"])])])]),_:1}),b(le,{class:"q-pt-5"})]),_:1})]),_:1},8,["modelValue","maximized"])])}const zt=we(Tt,[["render",Ot]]),Mt=[{name:"desc",required:!0,label:"Dessert (100g serving)",align:"left",field:o=>o.name,format:o=>`${o}`,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs",sortable:!0},{name:"protein",label:"Protein (g)",field:"protein",sortable:!0},{name:"sodium",label:"Sodium (mg)",field:"sodium",sortable:!0},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:(o,t)=>parseInt(o,10)-parseInt(t,10)},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:(o,t)=>parseInt(o,10)-parseInt(t,10)}],q=[{id:1,name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:3,name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:4,name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:5,name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:6,name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:7,name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:8,name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:9,name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:10,name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:11,name:"Frozen Yogurt-1",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:12,name:"Ice cream sandwich-1",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:13,name:"Eclair-1",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:14,name:"Cupcake-1",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:15,name:"Gingerbread-1",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:16,name:"Jelly bean-1",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:17,name:"Lollipop-1",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:18,name:"Honeycomb-1",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:19,name:"Donut-1",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:20,name:"KitKat-1",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:21,name:"Frozen Yogurt-2",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:22,name:"Ice cream sandwich-2",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:23,name:"Eclair-2",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:24,name:"Cupcake-2",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:25,name:"Gingerbread-2",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:26,name:"Jelly bean-2",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:27,name:"Lollipop-2",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:28,name:"Honeycomb-2",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:29,name:"Donut-2",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:30,name:"KitKat-2",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"},{id:31,name:"Frozen Yogurt-3",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{id:32,name:"Ice cream sandwich-3",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{id:33,name:"Eclair-3",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{id:34,name:"Cupcake-3",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{id:35,name:"Gingerbread-3",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{id:36,name:"Jelly bean-3",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{id:37,name:"Lollipop-3",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{id:38,name:"Honeycomb-3",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{id:39,name:"Donut-3",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{id:40,name:"KitKat-3",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}],Ht={setup(){const o=h(),t=h(""),n=h(!1),i=h({sortBy:"desc",descending:!1,page:1,rowsPerPage:3,rowsNumber:10});function e(s,c,l,g,d){const p=l?q.filter(u=>u.name.includes(l)):q.slice();if(g){const u=g==="desc"?d?(m,f)=>m.name>f.name?-1:m.name<f.name?1:0:(m,f)=>m.name>f.name?1:m.name<f.name?-1:0:d?(m,f)=>parseFloat(f[g])-parseFloat(m[g]):(m,f)=>parseFloat(m[g])-parseFloat(f[g]);p.sort(u)}return p.slice(s,s+c)}function a(s){if(!s)return q.length;let c=0;return q.forEach(l=>{l.name.includes(s)&&++c}),c}function r(s){const{page:c,rowsPerPage:l,sortBy:g,descending:d}=s.pagination,p=s.filter;n.value=!0,setTimeout(()=>{i.value.rowsNumber=a(p);const u=l===0?i.value.rowsNumber:l,m=(c-1)*l,f=e(m,u,p,g,d);q.value.splice(0,q.value.length,...f),i.value.page=c,i.value.rowsPerPage=l,i.value.sortBy=g,i.value.descending=d,n.value=!1},1500)}return mt(()=>{}),{tableRef:o,filter:t,loading:n,pagination:i,columns:Mt,rows:q,onClick(){},onRequest:r}},components:{CustomerSelection:zt}},Qt={class:"q-pa-md"};function Nt(o,t,n,i,e,a){const r=ft("CustomerSelection");return V(),P(it,{padding:""},{default:v(()=>[H("div",Qt,[b(tt,{flat:"",bordered:"",ref:"tableRef",title:"Treats",rows:i.rows,columns:i.columns,"row-key":"id",pagination:i.pagination,"onUpdate:pagination":t[1]||(t[1]=s=>i.pagination=s),loading:i.loading,filter:i.filter,"binary-state-sort":"",onRequest:i.onRequest},{"top-right":v(()=>[b(ot,{borderless:"",dense:"",debounce:"300",modelValue:i.filter,"onUpdate:modelValue":t[0]||(t[0]=s=>i.filter=s),placeholder:"Search"},{append:v(()=>[b(A,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","pagination","loading","filter","onRequest"])]),b(r)]),_:1})}const Ut=we(Ht,[["render",Nt]]);export{Ut as default};
