(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8272],{39971:function(e,r,n){"use strict";n.d(r,{F:function(){return m}});var t=n(95235),i=n(91056),s=n(37483),o=(n(2784),n(82269)),c=n(5632),a=["render"];function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var u=n(52322);function h(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var p=function(e){var r=function(e,r){var n=(0,c.useRouter)(),i=n.query,s=n.push,l=e.map((function(e){return e.render,(0,o.Z)(e,a)})),u=i[r],h=u&&!Array.isArray(u)?u:e[0].id;return{activeContent:e.find((function(e){return e.id===h})),activePills:h?[h]:[],pills:l,handlePillClick:function(e){s({query:d(d({},i),{},(0,t.Z)({},r,e))},void 0,{scroll:!1,shallow:!0})}}}(e.routes,e.id),n=r.activeContent,l=r.activePills,h=r.pills,p=r.handlePillClick;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.N,{activePills:l,items:h,onPillClick:p}),(0,u.jsx)(s.x,{marginTop:"xSmall",children:null===n||void 0===n?void 0:n.render()})]})},m=function(e){return 0===e.routes.length?null:(0,u.jsx)(p,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?h(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e))}},77949:function(e,r,n){"use strict";n.d(r,{t:function(){return d}});var t=n(32698),i=n(88367),s=n(96207),o=n(37483),c=n(35805),a=n(44732),l=(n(2784),n(52322)),d=function(e){var r=e.recommended,n=e.discouraged;return(0,l.jsxs)(l.Fragment,{children:[r.length>0&&(0,l.jsx)(t.W,{columns:[{header:"Do",hash:"do",render:function(e){return e.recommend}}],items:r.map((function(e){return{recommend:(0,l.jsxs)(i.k,{alignItems:"center",children:[(0,l.jsx)(s.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(c.r,{color:"success"})}),(0,l.jsx)(s.B,{children:e})]})}}))}),n.length>0&&(0,l.jsx)(o.x,{marginTop:"xLarge",children:(0,l.jsx)(t.W,{columns:[{header:"Don't",hash:"dont",render:function(e){return e.discourage}}],items:n.map((function(e){return{discourage:(0,l.jsxs)(i.k,{alignItems:"center",children:[(0,l.jsx)(s.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(a.P,{color:"danger"})}),(0,l.jsx)(s.B,{children:e})]})}}))})})]})}},36858:function(e,r,n){"use strict";n.d(r,{n:function(){return f}});var t=n(8529),i=n(57055),s=n(394),o=n(88367),c=n(20177),a=n(2784),l=n(6353),d=n(63575),u=n(19447),h=(0,n(75545).ZP)(o.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=n(52322),m=function(e){var r=e.children,n=e.title,t=(0,a.useState)(!0),i=t[0],o=t[1],c=function(){return o(!i)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(h,{alignItems:"center",marginBottom:"xSmall",onClick:c,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||c()},tabIndex:0,children:[i?(0,p.jsx)(d.X,{title:"Expand"}):(0,p.jsx)(u.h,{title:"Collapse"}),(0,p.jsx)(s.xv,{children:n})]}),!i&&r]})},f=function(e){var r=e.collapsible,n=e.id,c=e.propList,a=e.title,d=e.inheritedProps,u=e.nativeElement,h=function(){return c.length>0?(0,p.jsxs)(i.r,{marginBottom:r||d?"xLarge":"none",children:[(0,p.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var r=e.name,n=e.required;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.E,{primary:!0,children:r}),n?(0,p.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var r=e.types;return(0,p.jsx)(j,{types:r})}},{header:"Default",hash:"default",render:function(e){var r=e.defaultValue;return(0,p.jsx)(l.E,{highlight:!1,children:r})}},{header:"Description",hash:"description",width:"50%",render:function(e){var r=e.description;return(0,p.jsx)(s.xv,{children:r})}}],id:n,items:c}),(0,p.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null},f=function(){if(u){var e=(0,t.Z)(u,2),r=e[0],n=e[1];return(0,p.jsxs)(s.xv,{children:["Supports ",n," native ",(0,p.jsxs)(l.E,{children:["<",r," />"]})," element attributes."]})}return null};return r?(0,p.jsx)(m,{title:"".concat(a," Props"),children:h()}):(0,p.jsxs)(p.Fragment,{children:[f(),h(),d?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.H3,{children:"Inherited"}),(0,p.jsx)(o.k,{flexDirection:"column",children:d})]}):null]})},j=function(e){var r=e.types;return Array.isArray(r)?r.map((function(e,n){var t;return(0,p.jsxs)(a.Fragment,{children:[e.type===c.r?(0,p.jsx)(l.E,{highlight:!1,children:e}):(0,p.jsx)(l.E,{children:e}),n<r.length-1?" | ":null]},null!==(t=e.key)&&void 0!==t?t:n)})):r.type===c.r?(0,p.jsx)(l.E,{highlight:!1,children:r}):(0,p.jsx)(l.E,{children:r})}},80846:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x}});var t=n(394),i=n(26109),s=n(2784),o=n(962),c=n(39971),a=n(6353),l=n(81108),d=n(77949),u=n(95235),h=n(36858),p=n(52322);function m(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var f=[{name:"error",types:"boolean",description:"Sets state to error."},{name:"percent",types:"number",description:"Sets the fill length from 0 to 100."},{name:"size",types:["xxSmall","xSmall","small","medium","large"],defaultValue:"medium",description:"Size of the component."}],j=function(e){return(0,p.jsx)(h.n,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?m(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({propList:f,title:"ProgressCircle"},e))},x=function(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.H1,{children:"ProgressCircle"}),(0,p.jsxs)(i.s,{header:"Overview",headerId:"overview",children:[(0,p.jsx)(t.xv,{children:"Progress indicators give the user system visibility when a front end action triggers a need from the back end."}),(0,p.jsx)(t.xv,{bold:!0,children:"When to use:"}),(0,p.jsxs)(o.a,{children:[(0,p.jsx)(o.a.Item,{children:"Progress indicators can be combined with additional status feedback."}),(0,p.jsx)(o.a.Item,{children:"Use when there is a greater than one second waiting time."})]}),(0,p.jsx)(t.xv,{children:"Loader"}),(0,p.jsx)(o.a,{children:(0,p.jsx)(o.a.Item,{children:"Use when there is indeterminant progress, where there is an unknown amount of time for a task to complete."})}),(0,p.jsx)(t.xv,{children:"Circular progress"}),(0,p.jsx)(o.a,{children:(0,p.jsx)(o.a.Item,{children:"Use when there is determinant progress, where there is a known amount of time for a task to complete."})})]}),(0,p.jsx)(i.s,{header:"Implementation",headerId:"implementation",children:(0,p.jsx)(c.F,{id:"implementation",routes:[{id:"determinant",title:"Determinant",render:function(){return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)(t.xv,{children:["Determinant Progress represents a known amount of time or completeness for a task. A ",(0,p.jsx)(a.E,{primary:!0,children:"percent"})," prop needs to be passed to render a determinate progress."]}),(0,p.jsx)(l.G,{children:'<ProgressCircle error={false} percent={50} size="large" />'})]},"determinant")}},{id:"indeterminant",title:"Indeterminant",render:function(){return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)(t.xv,{children:["Indeterminant Progress represents an unknown amount of time for a task to complete. Component will render an indeterminant progress when missing a"," ",(0,p.jsx)(a.E,{primary:!0,children:"percent"})," prop."]}),(0,p.jsx)(l.G,{children:'<ProgressCircle size="large" />'})]},"indeterminant")}}]})}),(0,p.jsx)(i.s,{header:"Props",headerId:"pros",children:(0,p.jsx)(j,{})}),(0,p.jsx)(i.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,p.jsx)(d.t,{discouraged:[(0,p.jsx)(p.Fragment,{children:"Don\u2019t use if an action is not triggering a back end action."}),(0,p.jsx)(p.Fragment,{children:"Don\u2019t use to indicate the completeness of a user-dependent task."})],recommended:[(0,p.jsx)(p.Fragment,{children:"Status feedback should be clear and direct. Limit verbiage and information."}),(0,p.jsx)(p.Fragment,{children:"If progress is determinate, use a percentage to reflect the completeness of the action."})]})})]})}},84101:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/progress-circle",function(){return n(80846)}])}},function(e){e.O(0,[9961,5713,2859,777,6139,494,2561,3614,1108,9774,2888,179],(function(){return r=84101,e(e.s=r);var r}));var r=e.O();_N_E=r}]);