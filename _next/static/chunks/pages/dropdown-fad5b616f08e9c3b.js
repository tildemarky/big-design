(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3896],{39971:function(e,t,n){"use strict";n.d(t,{F:function(){return u}});var i=n(95235),o=n(91056),r=n(37483),c=(n(2784),n(82269)),s=n(5632),m=["render"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=n(52322);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var h=function(e){var t=function(e,t){var n=(0,s.useRouter)(),o=n.query,r=n.push,l=e.map((function(e){return e.render,(0,c.Z)(e,m)})),a=o[t],p=a&&!Array.isArray(a)?a:e[0].id;return{activeContent:e.find((function(e){return e.id===p})),activePills:p?[p]:[],pills:l,handlePillClick:function(e){r({query:d(d({},o),{},(0,i.Z)({},t,e))},void 0,{scroll:!1,shallow:!0})}}}(e.routes,e.id),n=t.activeContent,l=t.activePills,p=t.pills,h=t.handlePillClick;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.N,{activePills:l,items:p,onPillClick:h}),(0,a.jsx)(r.x,{marginTop:"xSmall",children:null===n||void 0===n?void 0:n.render()})]})},u=function(e){return 0===e.routes.length?null:(0,a.jsx)(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}},77949:function(e,t,n){"use strict";n.d(t,{t:function(){return d}});var i=n(32698),o=n(88367),r=n(96207),c=n(37483),s=n(35805),m=n(44732),l=(n(2784),n(52322)),d=function(e){var t=e.recommended,n=e.discouraged;return(0,l.jsxs)(l.Fragment,{children:[t.length>0&&(0,l.jsx)(i.W,{columns:[{header:"Do",hash:"do",render:function(e){return e.recommend}}],items:t.map((function(e){return{recommend:(0,l.jsxs)(o.k,{alignItems:"center",children:[(0,l.jsx)(r.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(s.r,{color:"success"})}),(0,l.jsx)(r.B,{children:e})]})}}))}),n.length>0&&(0,l.jsx)(c.x,{marginTop:"xLarge",children:(0,l.jsx)(i.W,{columns:[{header:"Don't",hash:"dont",render:function(e){return e.discourage}}],items:n.map((function(e){return{discourage:(0,l.jsxs)(o.k,{alignItems:"center",children:[(0,l.jsx)(r.B,{flexGrow:0,marginRight:"large",children:(0,l.jsx)(m.P,{color:"danger"})}),(0,l.jsx)(r.B,{children:e})]})}}))})})]})}},36858:function(e,t,n){"use strict";n.d(t,{n:function(){return x}});var i=n(8529),o=n(57055),r=n(394),c=n(88367),s=n(20177),m=n(2784),l=n(6353),d=n(63575),a=n(19447),p=(0,n(75545).ZP)(c.k).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),h=n(52322),u=function(e){var t=e.children,n=e.title,i=(0,m.useState)(!0),o=i[0],c=i[1],s=function(){return c(!o)};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(p,{alignItems:"center",marginBottom:"xSmall",onClick:s,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||s()},tabIndex:0,children:[o?(0,h.jsx)(d.X,{title:"Expand"}):(0,h.jsx)(a.h,{title:"Collapse"}),(0,h.jsx)(r.xv,{children:n})]}),!o&&t]})},x=function(e){var t=e.collapsible,n=e.id,s=e.propList,m=e.title,d=e.inheritedProps,a=e.nativeElement,p=function(){return s.length>0?(0,h.jsxs)(o.r,{marginBottom:t||d?"xLarge":"none",children:[(0,h.jsx)(o.i,{columns:[{header:"Prop name",hash:"propName",render:function(e){var t=e.name,n=e.required;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.E,{primary:!0,children:t}),n?(0,h.jsx)("b",{children:" *"}):null]})}},{header:"Type",hash:"type",render:function(e){var t=e.types;return(0,h.jsx)(I,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return(0,h.jsx)(l.E,{highlight:!1,children:t})}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return(0,h.jsx)(r.xv,{children:t})}}],id:n,items:s}),(0,h.jsx)(r.x4,{marginTop:"xSmall",children:"Props ending with * are required"})]}):null},x=function(){if(a){var e=(0,i.Z)(a,2),t=e[0],n=e[1];return(0,h.jsxs)(r.xv,{children:["Supports ",n," native ",(0,h.jsxs)(l.E,{children:["<",t," />"]})," element attributes."]})}return null};return t?(0,h.jsx)(u,{title:"".concat(m," Props"),children:p()}):(0,h.jsxs)(h.Fragment,{children:[x(),p(),d?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.H3,{children:"Inherited"}),(0,h.jsx)(c.k,{flexDirection:"column",children:d})]}):null]})},I=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){var i;return(0,h.jsxs)(m.Fragment,{children:[e.type===s.r?(0,h.jsx)(l.E,{highlight:!1,children:e}):(0,h.jsx)(l.E,{children:e}),n<t.length-1?" | ":null]},null!==(i=e.key)&&void 0!==i?i:n)})):t.type===s.r?(0,h.jsx)(l.E,{highlight:!1,children:t}):(0,h.jsx)(l.E,{children:t})}},94629:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i=n(394),o=n(26109),r=n(2784),c=n(6353),s=n(962),m=n(39971),l=n(81108),d=n(4757),a=n(77949),p=n(95235),h=n(36858),u=n(52322);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=[{name:"disabled",types:"boolean",defaultValue:"false",description:"Disables the toggle."},{name:"maxHeight",types:"number",defaultValue:"250",description:"Sets the max-height of the dropdown."},{name:"placement",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],defaultValue:"bottom-start",description:(0,u.jsxs)(u.Fragment,{children:["Sets the placement of the ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"})," relative to the anchor."]})},{name:"positionFixed",defaultValue:"false",types:"boolean",description:(0,u.jsxs)(u.Fragment,{children:["If set, uses ",(0,u.jsx)(c.E,{children:"position: fixed"})," instead of ",(0,u.jsx)(c.E,{children:"position: absolute"})," to position the list."]})},{name:"items",types:"Array<DropdownItem | DropdownLinkItem> | Array<DropdownItemGroup>",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Accepts an array of ",(0,u.jsx)(c.E,{children:"DropdownItems and DropdownLinkItems"}),". It also accept a"," ",(0,u.jsx)(c.E,{children:"DropdownItemGroup"})," when you want to group items. See example for usage."]})},{name:"toggle",types:"ReactElement",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Element used as anchor. Toggles the ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"}),"."]})}],j=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your item's action is of normal or destructive nature."},{name:"content",types:"string",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Sets the text content of the ",(0,u.jsx)(c.E,{children:"DropdownItem"}),"."]})},{name:"description",types:"string",description:(0,u.jsxs)(u.Fragment,{children:["Sets the content description of the ",(0,u.jsx)(c.E,{children:"DropdownItem"}),"."]})},{name:"disabled",types:"boolean",description:"Sets the item to disabled."},{name:"hash",types:"string",description:"Stored hash of the item."},{name:"icon",types:(0,u.jsx)(d.p,{href:"/icons",children:"Icon"}),description:(0,u.jsxs)(u.Fragment,{children:["Pass in an ",(0,u.jsx)(d.p,{href:"/icons",children:"Icon"})," component to display to the left of the text."]})},{name:"onItemClick",types:"(item: DropdownItem): void",required:!0,description:"Returns the item object."},{name:"tooltip",types:"string",description:(0,u.jsx)(u.Fragment,{children:"Adds tooltip for disabled item."})},{name:"type",types:"'text'",description:"Type of the item."}],f=[{name:"actionType",types:["normal","destructive"],defaultValue:"normal",description:"Indicates whether your item's action is of normal or destructive nature."},{name:"content",types:"string",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Sets the text content of the ",(0,u.jsx)(c.E,{children:"DropdownLinkItem"}),"."]})},{name:"description",types:"string",description:(0,u.jsxs)(u.Fragment,{children:["Sets the content description of the ",(0,u.jsx)(c.E,{children:"DropdownLinkItem"}),"."]})},{name:"disabled",types:"boolean",description:"Sets the item to disabled."},{name:"icon",types:(0,u.jsx)(d.p,{href:"/icons",children:"Icon"}),description:(0,u.jsxs)(u.Fragment,{children:["Pass in an ",(0,u.jsx)(d.p,{href:"/icons",children:"Icon"})," component to display to the left of the text."]})},{name:"tooltip",types:"string",description:(0,u.jsx)(u.Fragment,{children:"Adds tooltip for disabled item."})},{name:"type",types:"'link'",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Wraps the ",(0,u.jsx)(c.E,{children:"content"})," in a ",(0,u.jsx)(d.p,{href:"/link",children:"Link"})," component."]})},{name:"url",types:"string",required:!0,description:"Valid URL of a linked resource."},{name:"target",types:"'_blank'",description:"Indicates where to display the linked resource."}],y=[{name:"label",types:"string",description:"Sets the label for the group."},{name:"separated",types:"boolean",description:"If true, adds a line separator above the group."},{name:"items",types:"Array<DropdownItem | DropdownLinkItem>",required:!0,description:(0,u.jsxs)(u.Fragment,{children:["Accepts an array of ",(0,u.jsx)(c.E,{children:"DropdownItems"})," and ",(0,u.jsx)(c.E,{children:"DropdownLinkItems"}),". See"," ",(0,u.jsx)(d.p,{href:{query:"implementation=item-groups"},children:"example"})," for usage."]})}],k=function(e){return(0,u.jsx)(h.n,I({propList:g,title:"Dropdown"},e))},w=function(e){return(0,u.jsx)(h.n,I({propList:j,title:"Dropdown[DropdownItem]"},e))},b=function(e){return(0,u.jsx)(h.n,I({propList:f,title:"Dropdown[DropdownLinkItem]"},e))},v=function(e){return(0,u.jsx)(h.n,I({propList:y,title:"Dropdown[DropdownItemGroup]"},e))},C=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.H1,{children:"Dropdown"}),(0,u.jsxs)(o.s,{header:"Overview",headerId:"overview",children:[(0,u.jsxs)(i.xv,{children:[(0,u.jsx)(c.E,{primary:!0,children:"Dropdowns"})," are toggleable, contextual overlays for displaying list of items from which a user can select one item. A selected item can be a link or an action."]}),(0,u.jsx)(i.xv,{bold:!0,children:"When to use:"}),(0,u.jsxs)(s.a,{children:[(0,u.jsx)(s.a.Item,{children:"Use to hide secondary actions or links in order to reduce distraction."}),(0,u.jsx)(s.a.Item,{children:"Use for a set of actions that don\u2019t fit in the available screen space (including overflow)."}),(0,u.jsx)(s.a.Item,{children:"Use when actions\u2019 names are very long or actions require additional description."})]})]}),(0,u.jsx)(o.s,{header:"Implementation",headerId:"implementation",children:(0,u.jsx)(m.F,{id:"implementation",routes:[{id:"basic",title:"Basic",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:[(0,u.jsx)(c.E,{primary:!0,children:"Dropdowns"})," are toggleable, contextual overlays for displaying lists."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    {\n      content: 'Edit',\n      onItemClick: (item) => item,\n      hash: 'edit',\n      icon: <EditIcon />,\n    },\n    {\n      content: 'Duplicate',\n      onItemClick: (item) => item,\n      hash: 'duplicate',\n      icon: <FileCopyIcon />,\n    },\n    {\n      content: 'Copy',\n      onItemClick: (item) => item,\n      hash: 'copy',\n      icon: <AssignmentIcon />,\n      disabled: true,\n      tooltip: 'You cannot copy this item...',\n    },\n    {\n      content: 'Delete',\n      onItemClick: (item) => item,\n      hash: 'delete',\n      icon: <DeleteIcon />,\n      actionType: 'destructive',\n    },\n    {\n      content: 'Link',\n      icon: <OpenInNewIcon />,\n      type: 'link',\n      url: '#',\n    },\n  ]}\n  maxHeight={250}\n  placement=\"bottom-start\"\n  toggle={<Button>Open menu</Button>}\n/>"})]},"basic")}},{id:"links",title:"Links",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["A ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"})," can render a list of"," ",(0,u.jsx)(d.p,{href:"/link",children:"Links"})," if it receives an object of type"," ",(0,u.jsx)(c.E,{children:"LinkItem"}),"."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    { content: 'Item', type: 'link', url: '#' },\n    { content: 'Item', type: 'link', url: '#' },\n    { content: 'Item', type: 'link', url: '#', target: '_blank' },\n  ]}\n  toggle={<Button>Button</Button>}\n/>\n"})]},"links")}},{id:"icons",title:"Icons",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["An ",(0,u.jsx)(c.E,{primary:!0,children:"item"})," accepts an ",(0,u.jsx)(d.p,{href:"/icons",children:"Icon"})," ","component to render."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    { content: 'Item', icon: <EditIcon />, onItemClick: (item) => item },\n    { content: 'Link', icon: <OpenInNewIcon />, type: 'link', url: '#' },\n  ]}\n  toggle={<Button>Button</Button>}\n/>"})]},"icons")}},{id:"action-types",title:"Action types",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["There are two action types: ",(0,u.jsx)(c.E,{children:"normal"})," & ",(0,u.jsx)(c.E,{children:"destructive"}),". They are used to indicate the nature of the action when hovering on the item."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    { content: 'Save', onItemClick: (item) => item, actionType: 'normal' },\n    {\n      content: 'Delete',\n      onItemClick: (item) => item,\n      actionType: 'destructive',\n    },\n  ]}\n  toggle={<Button>Button</Button>}\n/>"})]},"action-types")}},{id:"toggle",title:"Toggle",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:[(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"})," can be anchored to any ",(0,u.jsx)(c.E,{children:"ReactElement"}),", including all types of ",(0,u.jsx)(d.p,{href:"/button",children:"Buttons"}),"."]}),(0,u.jsx)(l.G,{children:"<Grid gridColumns=\"repeat(4, min-content)\">\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    toggle={<Button>Button</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    toggle={<Button actionType=\"destructive\">Button</Button>}\n  />\n\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    toggle={<Button variant=\"secondary\">Button</Button>}\n  />\n\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    toggle={<Button variant=\"subtle\">Button</Button>}\n  />\n</Grid>"})]},"toggle")}},{id:"placement",title:"Placement",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:[(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"})," can be anchored in different directions with the"," ",(0,u.jsx)(c.E,{primary:!0,children:"placement"})," property. It will automatically find a placement if there's not enough space in the chosen direction."]}),(0,u.jsx)(l.G,{children:"<Grid gridColumns=\"repeat(4, min-content)\">\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    placement=\"right\"\n    toggle={<Button>Right</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    placement=\"top\"\n    toggle={<Button>Top</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    placement=\"bottom-start\"\n    toggle={<Button>Bottom-Start</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    placement=\"bottom-end\"\n    toggle={<Button>Bottom-End</Button>}\n  />\n</Grid>"})]},"placement")}},{id:"max-height",title:"Max height",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["Once the content is longer than the max-height, the"," ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdown"})," will be scrollable. It is possible to modify the dimension by passing a ",(0,u.jsx)(c.E,{primary:!0,children:"maxHeight"})," property."]}),(0,u.jsx)(l.G,{children:"<Grid gridColumns=\"repeat(3, min-content)\">\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    toggle={<Button>Default</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    maxHeight={150}\n    toggle={<Button>Smaller</Button>}\n  />\n  <Dropdown\n    items={[\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n      { content: 'Item', onItemClick: (item) => item },\n    ]}\n    maxHeight={350}\n    toggle={<Button>Longer</Button>}\n  />\n</Grid>"})]},"max-height")}},{id:"item-groups",title:"Item groups",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["Create ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdowns"})," with labeled groupings by passing"," ",(0,u.jsx)(c.E,{primary:!0,children:"DropdownItemGroup"}),"'s to the Dropdown's"," ",(0,u.jsx)(c.E,{primary:!0,children:"options"})," property."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    {\n      label: 'Label 1',\n      items: [\n        { content: 'Option 1', onItemClick: (item) => item },\n        { content: 'Option 2', onItemClick: (item) => item },\n        { content: 'Option 3', onItemClick: (item) => item },\n      ],\n    },\n    {\n      label: 'Label 2',\n      items: [\n        { content: 'Option 4', onItemClick: (item) => item },\n        { content: 'Option 5', onItemClick: (item) => item },\n        { content: 'Option 6', onItemClick: (item) => item },\n      ],\n    },\n  ]}\n  toggle={<Button>Button</Button>}\n/>"})]},"item-groups")}},{id:"item-description",title:"Item description",render:function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsxs)(i.xv,{children:["It is possible to add a ",(0,u.jsx)(c.E,{children:"description"})," for items."]}),(0,u.jsx)(l.G,{children:"<Dropdown\n  items={[\n    {\n      hash: '1',\n      content: 'Item #1',\n      description: 'Description for option #1',\n      onItemClick: (item) => item,\n    },\n    {\n      content: 'Item #2',\n      description: 'Description for item #2',\n      disabled: true,\n      type: 'link',\n      url: '#',\n    },\n    { hash: '3', content: 'Item #3', onItemClick: (item) => item },\n    { hash: '4', content: 'Item #4', onItemClick: (item) => item },\n    { hash: '5', content: 'Item #5', onItemClick: (item) => item },\n  ]}\n  toggle={<Button>Button</Button>}\n/>"})]},"Item description")}}]})}),(0,u.jsx)(o.s,{header:"Props",headerId:"props",children:(0,u.jsx)(m.F,{id:"props",routes:[{id:"dropdown",title:"Dropdown",render:function(){return(0,u.jsx)(k,{})}},{id:"dropdown-item",title:"DropdownItem",render:function(){return(0,u.jsx)(w,{})}},{id:"dropdown-link-item",title:"DropdownLinkItem",render:function(){return(0,u.jsx)(b,{})}},{id:"dropdown-item-group",title:"DropdownItemGroup",render:function(){return(0,u.jsx)(v,{})}}]})}),(0,u.jsx)(o.s,{header:"Do's and Don'ts",headerId:"guidelines",children:(0,u.jsx)(a.t,{discouraged:["Avoid including complex information in a dropdown menu.",(0,u.jsxs)(u.Fragment,{children:["Don\u2019t nest ",(0,u.jsx)(c.E,{primary:!0,children:"Dropdowns"})," or use them to display complex information."]}),"Don\u2019t use icons in dropdown items unless they provide additional and necessary context."],recommended:["Anchor the dropdown menu in the least obstructive position on the page.","Organize dropdown items in alphabetical order or by the most relevant content.","Use placeholder text by default if no selection has been made."]})})]})}},99415:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dropdown",function(){return n(94629)}])}},function(e){e.O(0,[9961,5713,2859,777,6139,494,2561,3614,1108,9774,2888,179],(function(){return t=99415,e(e.s=t);var t}));var t=e.O();_N_E=t}]);