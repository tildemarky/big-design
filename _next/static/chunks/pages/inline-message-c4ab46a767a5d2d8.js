(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2523],{68148:function(e,n,r){"use strict";r.d(n,{Oq:function(){return h},Pt:function(){return p},uu:function(){return d},vH:function(){return m}});var t=r(95235),i=(r(2784),r(4757)),s=r(6353),a=r(36858),o=r(52322);function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:(0,o.jsx)(i.p,{href:{hash:"message-item-prop-table",query:{props:"message-item"}},children:"MessageItem"}),description:(0,o.jsxs)(o.Fragment,{children:["See"," ",(0,o.jsx)(i.p,{href:{hash:"message-item-prop-table",query:{props:"message-item"}},children:"MessageItem"})," ","for usage."]}),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],u=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:(0,o.jsx)(i.p,{href:{hash:"message-link-item-prop-table",query:{props:"message-link-item"}},children:"MessageLinkItem"}),description:(0,o.jsxs)(o.Fragment,{children:["See"," ",(0,o.jsx)(i.p,{href:{hash:"message-link-item-prop-table",query:{props:"message-link-item"}},children:"MessageLinkItem"})," ","for usage."]})}],p=[{name:"external",types:"boolean",description:(0,o.jsxs)(o.Fragment,{children:["Shows an external icon when the ",(0,o.jsx)(s.E,{primary:!0,children:"external"}),' prop is set and target="_blank".']})},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],h=function(e){return(0,o.jsx)(a.n,l(l({propList:u,title:""},e),{},{id:"message-item-prop-table"}))},m=function(e){return(0,o.jsx)(a.n,l(l({propList:p,title:""},e),{},{id:"message-link-item-prop-table"}))}},39971:function(e,n,r){"use strict";r.d(n,{F:function(){return m}});var t=r(95235),i=r(91056),s=r(37483),a=(r(2784),r(82269)),o=r(5632),c=["render"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u=r(52322);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var h=function(e){var n=function(e,n){var r=(0,o.useRouter)(),i=r.query,s=r.push,l=e.map((function(e){return e.render,(0,a.Z)(e,c)})),u=i[n],p=u&&!Array.isArray(u)?u:e[0].id;return{activeContent:e.find((function(e){return e.id===p})),activePills:p?[p]:[],pills:l,handlePillClick:function(e){s({query:d(d({},i),{},(0,t.Z)({},n,e))},void 0,{scroll:!1,shallow:!0})}}}(e.routes,e.id),r=n.activeContent,l=n.activePills,p=n.pills,h=n.handlePillClick;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.N,{activePills:l,items:p,onPillClick:h}),(0,u.jsx)(s.x,{marginTop:"xSmall",children:null===r||void 0===r?void 0:r.render()})]})},m=function(e){return 0===e.routes.length?null:(0,u.jsx)(h,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e))}},77949:function(e,n,r){"use strict";r.d(n,{t:function(){return d}});var t=r(32698),i=r(88367),s=r(96207),a=r(37483),o=r(35805),c=r(44732),l=(r(2784),r(52322)),d=function(e){var n=e.recommended,r=e.discouraged;return(0,l.jsxs)(l.Fragment,{children:[n.length>0&&(0,l.jsx)(t.W,{columns:[{header:"Do",hash:"do",render:function(e){return e.recommend}}],items:n.map((function(e){return{recommend:(0,l.jsxs)(i.k,{alignItems:"center",children:[(0,l.jsx)(s.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(o.r,{color:"success"})}),(0,l.jsx)(s.B,{children:e})]})}}))}),r.length>0&&(0,l.jsx)(a.x,{marginTop:"xLarge",children:(0,l.jsx)(t.W,{columns:[{header:"Don't",hash:"dont",render:function(e){return e.discourage}}],items:r.map((function(e){return{discourage:(0,l.jsxs)(i.k,{alignItems:"center",children:[(0,l.jsx)(s.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(c.P,{color:"danger"})}),(0,l.jsx)(s.B,{children:e})]})}}))})})]})}},36858:function(e,n,r){"use strict";r.d(n,{n:function(){return g}});var t=r(8529),i=r(57055),s=r(394),a=r(88367),o=r(20177),c=r(2784),l=r(6353),d=r(63575),u=r(19447),p=(0,r(75545).ZP)(a.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),h=r(52322),m=function(e){var n=e.children,r=e.title,t=(0,c.useState)(!0),i=t[0],a=t[1],o=function(){return a(!i)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{alignItems:"center",marginBottom:"xSmall",onClick:o,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||o()},tabIndex:0,children:[i?(0,h.jsx)(d.X,{title:"Expand"}):(0,h.jsx)(u.h,{title:"Collapse"}),(0,h.jsx)(s.xv,{children:r})]}),!i&&n]})},g=function(e){var n=e.collapsible,r=e.id,o=e.propList,c=e.title,d=e.inheritedProps,u=e.nativeElement,p=function(){return o.length>0?(0,h.jsxs)(i.r,{marginBottom:n||d?"xLarge":"none",children:[(0,h.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var n=e.name,r=e.required;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.E,{primary:!0,children:n}),r?(0,h.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var n=e.types;return(0,h.jsx)(x,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return(0,h.jsx)(l.E,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return(0,h.jsx)(s.xv,{children:n})}}],id:r,items:o}),(0,h.jsx)(s.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null},g=function(){if(u){var e=(0,t.Z)(u,2),n=e[0],r=e[1];return(0,h.jsxs)(s.xv,{children:["Supports ",r," native ",(0,h.jsxs)(l.E,{children:["<",n," />"]})," element attributes."]})}return null};return n?(0,h.jsx)(m,{title:"".concat(c," Props"),children:p()}):(0,h.jsxs)(h.Fragment,{children:[g(),p(),d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.H3,{children:"Inherited"}),(0,h.jsx)(a.k,{flexDirection:"column",children:d})]}):null]})},x=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,r){var t;return(0,h.jsxs)(c.Fragment,{children:[e.type===o.r?(0,h.jsx)(l.E,{highlight:!1,children:e}):(0,h.jsx)(l.E,{children:e}),r<n.length-1?" | ":null]},null!==(t=e.key)&&void 0!==t?t:r)})):n.type===o.r?(0,h.jsx)(l.E,{highlight:!1,children:n}):(0,h.jsx)(l.E,{children:n})}},83011:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t=r(394),i=r(26109),s=r(2784),a=r(6353),o=r(962),c=r(39971),l=r(4757),d=r(81108),u=r(77949),p=r(95235),h=r(52746),m=r(36858),g=r(68148),x=r(52322);function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var j=[{name:"actions",types:"object[]",description:(0,x.jsxs)(x.Fragment,{children:["Accepts an array of objects with ",(0,x.jsx)(l.p,{href:"/button",children:"Button"})," props and an additional ",(0,x.jsx)(a.E,{children:"text"}),' prop. Also, only two variants will be available to use: "secondary" and "subtle". See example for usage.']})}].concat((0,h.Z)(g.uu)),y=function(e){return(0,x.jsx)(m.n,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?f(Object(r),!0).forEach((function(n){(0,p.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({propList:j,title:"InlineMessage"},e))},b=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.H1,{children:"InlineMessage"}),(0,x.jsxs)(i.s,{header:"Overview",headerId:"overview",children:[(0,x.jsxs)(t.xv,{children:[(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," inform merchants about important component/section level changes or persistent conditions that need their attention."]}),(0,x.jsx)(t.xv,{bold:!0,children:"When to use:"}),(0,x.jsx)(o.a,{children:(0,x.jsx)(o.a.Item,{children:"To alert the merchant of a change or condition related to an individual component or section."})})]}),(0,x.jsx)(i.s,{header:"Implementation",headerId:"implementation",children:(0,x.jsx)(c.F,{id:"implementation",routes:[{id:"basic",title:"Basic",render:function(){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsxs)(t.xv,{children:["An inline message, mostly used for displaying alerts within"," ",(0,x.jsx)(a.E,{primary:!0,children:"Modals"}),". Is a condensed version of the"," ",(0,x.jsx)(l.p,{href:"/message",children:"Message"})," component."]}),(0,x.jsx)(d.G,{children:"<InlineMessage\n  header=\"Header\"\n  messages={[\n    {\n      text: 'Required description copy.',\n      link: {\n        text: 'Optional Link',\n        href: '#',\n      },\n    },\n  ]}\n  onClose={() => null}\n/>"})]},"basic")}},{id:"types",title:"Types",render:function(){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsxs)(t.xv,{children:["There are four types of ",(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," based on the level of message you want to display."]}),(0,x.jsx)(d.G,{children:'<>\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="error"\n  />\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="success"\n  />\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="warning"\n  />\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="info"\n  />\n</>'})]},"types")}},{id:"header",title:"Header",render:function(){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsxs)(t.xv,{children:[(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," allow you to pass an optional"," ",(0,x.jsx)(a.E,{primary:!0,children:"header"})," prop."]}),(0,x.jsx)(d.G,{children:'<>\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="success"\n  />\n  <InlineMessage\n    header="Header"\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="success"\n  />\n</>'})]},"header")}},{id:"onclose",title:"onClose",render:function(){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(t.xv,{children:"Toggles the visibility of the close button, and provides an on click callback."}),(0,x.jsx)(d.G,{children:'<>\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="info"\n  />\n  <InlineMessage\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    onClose={() => null}\n    type="info"\n  />\n</>'})]},"onclose")}},{id:"actions",title:"Actions",render:function(){return(0,x.jsxs)(s.Fragment,{children:[(0,x.jsxs)(t.xv,{children:[(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," allow you to pass an optional"," ",(0,x.jsx)(a.E,{primary:!0,children:"actions"})," prop."]}),(0,x.jsx)(d.G,{children:'<>\n  <InlineMessage\n    header="header"\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="info"\n  />\n  <InlineMessage\n    actions={[\n      { text: \'First Action\', onClick: () => null },\n      { text: \'Second Action\', variant: \'subtle\', onClick: () => null },\n    ]}\n    header="header"\n    marginVertical="medium"\n    messages={[{ text: \'Required description copy.\' }]}\n    type="info"\n  />\n</>'})]},"actions")}}]})}),(0,x.jsx)(i.s,{header:"Props",headerId:"props",children:(0,x.jsx)(c.F,{id:"props",routes:[{id:"inline-message",title:"InlineMessage",render:function(){return(0,x.jsx)(y,{})}},{id:"message-item",title:"MessageItem",render:function(){return(0,x.jsx)(g.Oq,{id:"message-item-prop-table"})}},{id:"message-link-item",title:"MessageLinkItem",render:function(){return(0,x.jsx)(g.vH,{id:"message-link-item-prop-table"})}}]})}),(0,x.jsx)(i.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,x.jsx)(u.t,{discouraged:[(0,x.jsxs)(x.Fragment,{children:["Never use ",(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," for marketing information or upsell."]}),(0,x.jsxs)(x.Fragment,{children:["Don\u2019t use ",(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," as the primary entry point for information or actions that the merchant needs on a regular basis."]}),(0,x.jsxs)(x.Fragment,{children:["Never place ",(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," in the middle or at the bottom of a page. Instead use a ",(0,x.jsx)(l.p,{href:"/message",children:"Message"}),"."]}),(0,x.jsxs)(x.Fragment,{children:["Never use ",(0,x.jsx)(a.E,{primary:!0,children:"InlineMessages"})," for quick, dismissable feedback on actions. Instead use ",(0,x.jsx)(l.p,{href:"/alert",children:"Alerts"}),"."]})],recommended:[(0,x.jsxs)(x.Fragment,{children:["Place message within the ",(0,x.jsx)(a.E,{primary:!0,children:"Modal"})," or ",(0,x.jsx)(a.E,{primary:!0,children:"Panel"})," ","where the information or actions related to the message are located."]}),"Can be persistent (until the issue is resolved)  or dismissable.","Focus on a single theme or piece of information and include a clear description that summarises the issue and how to resolve it. ","Should be written in sentence case with appropriate punctuation. "]})})]})}},68912:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/inline-message",function(){return r(83011)}])}},function(e){e.O(0,[9961,5713,2859,777,6139,494,2561,3614,1108,9774,2888,179],(function(){return n=68912,e(e.s=n);var n}));var n=e.O();_N_E=n}]);