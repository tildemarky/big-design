(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{18863:function(e,n,t){"use strict";t.d(n,{O:function(){return d}});var i=t(37483),r=t(34273),o=t.n(r),s=t(2784),c=t(79527),l=t(57662),a=t(20482),h=t(52322);var d=function(e){var n=e.children,t=e.language,r=e.showControls,d=(0,s.useContext)(a.c).theme,m=function(e){if("string"!==typeof e)throw new Error("<CodeSnippet> children must be of type string");return function(e){var n=e.split("\n");""===n[0].trim()&&n.splice(0,1),""===n[n.length-1].trim()&&n.pop();var t=n[0].search(/\S|$/);return n.map((function(e){return e.substr(t)})).join("\n")}(e)}(n);return(0,h.jsxs)(i.x,{border:"box",marginBottom:"xxLarge",children:[r&&(0,h.jsx)(l.W,{copyToClipboard:function(){return o()(m)},helperText:"Code example"}),(0,h.jsx)(c.ML,{code:m,disabled:!0,language:t,theme:d})]})};d.defaultProps={language:"jsx",showControls:!0}},59324:function(e,n,t){"use strict";t.r(n);var i=t(88367),r=t(26109),o=t(394),s=t(96207),c=t(20177),l=t(2784),a=t(75545),h=t(962),d=t(18863),m=t(6353),p=t(52322);n.default=function(){var e=(0,l.useContext)(a.Ni).spacing;return(0,p.jsxs)(i.k,{flexDirection:"column",children:[(0,p.jsxs)(r.s,{header:"BigDesign developer playground",children:[(0,p.jsx)(o.xv,{children:"BigCommerce\u2019s library of React components lets developers build stylish apps that have a native BigCommerce feel at their core. Our components implement BigDesign principles to allow you to create an empathetic and frictionless user experience. The documentation will demonstrate the visual style and behavior of each component. Each component has props that can be passed for further configuration."}),(0,p.jsx)(s.B,{alignSelf:"center",children:(0,p.jsx)(o.H3,{marginBottom:"none",children:"Helpful resources"})}),(0,p.jsx)(s.B,{alignSelf:"center",children:(0,p.jsxs)(h.a,{columnCount:2,columnGap:e.xxxLarge,children:[(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://github.com/bigcommerce/big-design",target:"_blank",children:"GitHub Repo"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://medium.com/bigcommerce-developer-blog/bigdesign-build-native-looking-uis-with-the-bigcommerce-design-system-fb06a01a24f2",target:"_blank",children:"Dev Blog Demo"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://support.bigcommerce.com/s/group/0F91B000000bnqoSAA/bigdesign-beta",target:"_blank",children:"Beta Community Group"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://www.figma.com/file/jTVuUkiZ1j3rux8WHG4IKK/BigDesign-UI-Kit",target:"_blank",children:"Figma UI Kit"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://github.com/bigcommerce/channels-app",target:"_blank",children:"Sample App"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://codesandbox.io/s/github/bigcommerce/big-design/tree/%40bigcommerce/examples%400.18.1/packages/examples",target:"_blank",children:"CodeSandbox Example"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://developer.bigcommerce.com",target:"_blank",children:"Dev Center"})}),(0,p.jsx)(h.a.Item,{children:(0,p.jsx)(c.r,{href:"https://developer.bigcommerce.com/api-docs/getting-started/building-apps-bigcommerce/building-apps",target:"_blank",children:"Building an App"})})]})})]}),(0,p.jsxs)(r.s,{header:"Getting started",children:[(0,p.jsx)(o.xv,{children:"Add BigDesign and styled-components to your project:"}),(0,p.jsx)(d.O,{language:"bash",showControls:!1,children:"npm install @bigcommerce/big-design styled-components@5"}),(0,p.jsxs)(o.xv,{children:["Add the font as a",(0,p.jsx)(m.E,{children:"<link>"})," in your ",(0,p.jsx)(m.E,{children:"index.html"}),"/",(0,p.jsx)(m.E,{children:"<head>"})," element."]}),(0,p.jsx)(d.O,{children:'\n          <head>\n            <link rel="preconnect" href="https://fonts.googleapis.com" />\n            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />\n            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap" rel="stylesheet" />\n          </head>\n          '}),(0,p.jsxs)(o.xv,{children:["Import the ",(0,p.jsx)(m.E,{children:"GlobalStyles"})," component and use it once in your app. This will set a few styles globally and add"," ",(0,p.jsx)(c.r,{href:"https://github.com/necolas/normalize.css/",target:"_blank",children:"normalize.css"}),". We recommend placing it close to your root component. Then import any component, such as"," ",(0,p.jsx)(m.E,{children:"Button"}),", to use it anywhere in your app."]}),(0,p.jsx)(d.O,{children:"\n        import { Button, GlobalStyles } from '@bigcommerce/big-design';\n\n        // ...\n\n        <App>\n          <GlobalStyles />\n          <Button>Click me</Button>\n        </App>\n      "})]}),(0,p.jsxs)(r.s,{header:"Using this documentation",children:[(0,p.jsx)(o.xv,{marginBottom:"none",children:"This documentation uses the React components in the BigDesign library so you can edit them and preview them in real time."}),(0,p.jsxs)(h.a,{children:[(0,p.jsx)(h.a.Item,{children:"Select an element or utility in the left menu to view their props, types and descriptions below, including examples."}),(0,p.jsx)(h.a.Item,{children:"Type directly in the code editor to make changes. Click the time icon to restore the component to default."}),(0,p.jsx)(h.a.Item,{children:"Click the clipboard icon to copy the code snippet to your clipboard. Click the dual color icon to change the background color of the code editor."})]})]})]})}},87314:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(59324)}])}},function(e){e.O(0,[9961,494,3614,9774,2888,179],(function(){return n=87314,e(e.s=n);var n}));var n=e.O();_N_E=n}]);