(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{39971:function(e,n,r){"use strict";r.d(n,{F:function(){return m}});var t=r(95235),i=r(91056),l=r(37483),s=(r(2784),r(82269)),a=r(5632),o=["render"];function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u=r(52322);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var h=function(e){var n=function(e,n){var r=(0,a.useRouter)(),i=r.query,l=r.push,c=e.map((function(e){return e.render,(0,s.Z)(e,o)})),u=i[n],p=u&&!Array.isArray(u)?u:e[0].id;return{activeContent:e.find((function(e){return e.id===p})),activePills:p?[p]:[],pills:c,handlePillClick:function(e){l({query:d(d({},i),{},(0,t.Z)({},n,e))},void 0,{scroll:!1,shallow:!0})}}}(e.routes,e.id),r=n.activeContent,c=n.activePills,p=n.pills,h=n.handlePillClick;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.N,{activePills:c,items:p,onPillClick:h}),(0,u.jsx)(l.x,{marginTop:"xSmall",children:null===r||void 0===r?void 0:r.render()})]})},m=function(e){return 0===e.routes.length?null:(0,u.jsx)(h,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},e))}},77949:function(e,n,r){"use strict";r.d(n,{t:function(){return d}});var t=r(32698),i=r(88367),l=r(96207),s=r(37483),a=r(35805),o=r(44732),c=(r(2784),r(52322)),d=function(e){var n=e.recommended,r=e.discouraged;return(0,c.jsxs)(c.Fragment,{children:[n.length>0&&(0,c.jsx)(t.W,{columns:[{header:"Do",hash:"do",render:function(e){return e.recommend}}],items:n.map((function(e){return{recommend:(0,c.jsxs)(i.k,{alignItems:"center",children:[(0,c.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,c.jsx)(a.r,{color:"success"})}),(0,c.jsx)(l.B,{children:e})]})}}))}),r.length>0&&(0,c.jsx)(s.x,{marginTop:"xLarge",children:(0,c.jsx)(t.W,{columns:[{header:"Don't",hash:"dont",render:function(e){return e.discourage}}],items:r.map((function(e){return{discourage:(0,c.jsxs)(i.k,{alignItems:"center",children:[(0,c.jsx)(l.B,{flexGrow:0,marginRight:"large",children:(0,c.jsx)(o.P,{color:"danger"})}),(0,c.jsx)(l.B,{children:e})]})}}))})})]})}},36858:function(e,n,r){"use strict";r.d(n,{n:function(){return f}});var t=r(8529),i=r(57055),l=r(394),s=r(88367),a=r(20177),o=r(2784),c=r(6353),d=r(63575),u=r(19447),p=(0,r(75545).ZP)(s.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),h=r(52322),m=function(e){var n=e.children,r=e.title,t=(0,o.useState)(!0),i=t[0],s=t[1],a=function(){return s(!i)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{alignItems:"center",marginBottom:"xSmall",onClick:a,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||a()},tabIndex:0,children:[i?(0,h.jsx)(d.X,{title:"Expand"}):(0,h.jsx)(u.h,{title:"Collapse"}),(0,h.jsx)(l.xv,{children:r})]}),!i&&n]})},f=function(e){var n=e.collapsible,r=e.id,a=e.propList,o=e.title,d=e.inheritedProps,u=e.nativeElement,p=function(){return a.length>0?(0,h.jsxs)(i.r,{marginBottom:n||d?"xLarge":"none",children:[(0,h.jsx)(i.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var n=e.name,r=e.required;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.E,{primary:!0,children:n}),r?(0,h.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var n=e.types;return(0,h.jsx)(x,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return(0,h.jsx)(c.E,{highlight:!1,children:n})}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return(0,h.jsx)(l.xv,{children:n})}}],id:r,items:a}),(0,h.jsx)(l.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null},f=function(){if(u){var e=(0,t.Z)(u,2),n=e[0],r=e[1];return(0,h.jsxs)(l.xv,{children:["Supports ",r," native ",(0,h.jsxs)(c.E,{children:["<",n," />"]})," element attributes."]})}return null};return n?(0,h.jsx)(m,{title:"".concat(o," Props"),children:p()}):(0,h.jsxs)(h.Fragment,{children:[f(),p(),d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.H3,{children:"Inherited"}),(0,h.jsx)(s.k,{flexDirection:"column",children:d})]}):null]})},x=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,r){var t;return(0,h.jsxs)(o.Fragment,{children:[e.type===a.r?(0,h.jsx)(c.E,{highlight:!1,children:e}):(0,h.jsx)(c.E,{children:e}),r<n.length-1?" | ":null]},null!==(t=e.key)&&void 0!==t?t:r)})):n.type===a.r?(0,h.jsx)(c.E,{highlight:!1,children:n}):(0,h.jsx)(c.E,{children:n})}},85283:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(394),i=r(26109),l=(r(2784),r(6353)),s=r(962),a=r(81108),o=r(39971),c=r(77949),d=r(95235),u=r(4757),p=r(36858),h=r(52322);function m(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){(0,d.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var x=[{name:"activePills",types:"string[]",description:"The currently active pill ids as an array of strings."},{description:(0,h.jsxs)(h.Fragment,{children:["See"," ",(0,h.jsx)(u.p,{href:{hash:"pill-tabs-items-prop-table",query:{props:"pill-tab-item"}},children:"PillTabItem"})," ","for usage."]}),name:"items",required:!0,types:(0,h.jsx)(u.p,{href:{hash:"pill-tabs-items-prop-table",query:{props:"pill-tab-item"}},children:"PillTabItem[]"})},{name:"onPillClick",types:"(itemId: string) => void",description:"Function that will get called when a pill tab is clicked.",required:!0}],j=function(e){return(0,h.jsx)(p.n,f({propList:x,title:"PillTabs"},e))},g=[{name:"title",types:"string",description:"The text inside the Pill Tab Item.",required:!0},{description:"A unique identifier for the pill.",name:"id",required:!0,types:"string"}],b=function(e){return(0,h.jsx)(p.n,f({propList:g,title:"PillTabs[PillTabItem]"},e))},v=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(t.H1,{children:"PillTabs"}),(0,h.jsxs)(i.s,{header:"Overview",headerId:"overview",children:[(0,h.jsxs)(t.xv,{children:[(0,h.jsx)(l.E,{primary:!0,children:"PillTabs"})," are horizontal navigation buttons within panels. They switch between frequently used filters or sub-views of the same content."]}),(0,h.jsx)(t.xv,{bold:!0,children:"When to use:"}),(0,h.jsxs)(s.a,{children:[(0,h.jsx)(s.a.Item,{children:"To switch between different views or filters of data within a table."}),(0,h.jsx)(s.a.Item,{children:"To switch between different variants of content."})]})]}),(0,h.jsx)(i.s,{header:"Implementation",headerId:"implementation",children:(0,h.jsx)(a.G,{children:"function Example() {\n  const [activePills, setActivePills] = useState<string[]>([]);\n  const Card: React.FC<{ name: string; description: string }> = ({\n    name,\n    description,\n  }) => (\n    <Flex\n      border=\"box\"\n      borderRadius=\"normal\"\n      flexDirection=\"column\"\n      margin=\"xxSmall\"\n      padding=\"medium\"\n    >\n      <FlexItem marginBottom=\"xxSmall\">\n        <Text bold>{name}</Text>\n      </FlexItem>\n      <FlexItem flexGrow={1}>\n        <Text>{description}</Text>\n      </FlexItem>\n      <FlexItem>\n        <Link href=\"#\">Install</Link>\n      </FlexItem>\n    </Flex>\n  );\n  const items = [\n    { title: 'Shipping', id: 'shipping' },\n    { title: 'Orders', id: 'orders' },\n  ];\n  const onPillClick = (pillId: string) => {\n    const isPillActive = !activePills.includes(pillId);\n    const updatedPills = isPillActive\n      ? [...activePills, pillId]\n      : activePills.filter((activePillId) => activePillId !== pillId);\n\n    setActivePills(updatedPills);\n  };\n  const cards = [\n    {\n      name: 'Shipping App Pro',\n      description: 'All your shipping needs in a one stop shop.',\n      type: 'shipping',\n    },\n    {\n      name: 'Order Tracker Deluxe',\n      description: 'Track your orders across all your devices.',\n      type: 'orders',\n    },\n    {\n      name: 'Expedited Shipper',\n      description: 'The best rush rates in the country.',\n      type: 'shipping',\n    },\n    {\n      name: 'Inventory Wizard',\n      description: 'Inventory tracking app to cover all your needs.',\n      type: 'other',\n    },\n  ];\n  const isFiltered = Boolean(activePills.length);\n  const filteredCards = cards.filter((card) => activePills.includes(card.type));\n  const appCards = isFiltered ? filteredCards : cards;\n\n  return (\n    <>\n      <PillTabs activePills={activePills} items={items} onPillClick={onPillClick} />\n      <Flex>\n        {appCards.map(({ name, description }) => (\n          <Card description={description} key={name} name={name} />\n        ))}\n      </Flex>\n    </>\n  );\n}"})}),(0,h.jsx)(i.s,{header:"Props",headerId:"props",children:(0,h.jsx)(o.F,{id:"props",routes:[{id:"pill-tabs",title:"PillTabs",render:function(){return(0,h.jsx)(j,{})}},{id:"pill-tab-item",title:"PillTabItem",render:function(){return(0,h.jsx)(b,{id:"pill-tabs-items-prop-table"})}}]})}),(0,h.jsx)(i.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,h.jsx)(c.t,{discouraged:[(0,h.jsx)(h.Fragment,{children:"Don\u2019t use to navigate between unrelated items."}),(0,h.jsx)(h.Fragment,{children:"Don\u2019t link to content that\u2019s hidden in default view."}),(0,h.jsxs)(h.Fragment,{children:["Never use ",(0,h.jsx)(l.E,{primary:!0,children:"PillTabs"})," to navigate a user away from the current page."]})],recommended:[(0,h.jsx)(h.Fragment,{children:"Use on pages that have a large amount of content."}),(0,h.jsx)(h.Fragment,{children:"Be concise on the navigation labels, ideally one or two words rather than a phrase."}),(0,h.jsxs)(h.Fragment,{children:["Default page view should have no ",(0,h.jsx)(l.E,{primary:!0,children:"PillTabs"})," selected."]})]})})]})}},59728:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pill-tabs",function(){return r(85283)}])}},function(e){e.O(0,[9961,5713,2859,777,6139,494,2561,3614,1108,9774,2888,179],(function(){return n=59728,e(e.s=n);var n}));var n=e.O();_N_E=n}]);