(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{124:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},78:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(103),c=a(16),s=a(27),r=a(89),i=a(3),d=a(81),u=a(80),p=a(93),m=a(97),b=a(98),h=a(96),y=a(84),g=a(88),f=a(99);var v=e=>o.a.createElement("svg",Object(i.a)({width:"20",height:"20",role:"img"},e),o.a.createElement("g",{fill:"#7a7a7a"},o.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),k=a(101),j=a(82),O=a(69),E=a.n(O);const C=(e,t)=>"link"===e.type?Object(u.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>C(e,t)));function N({item:e,onItemClick:t,collapsible:a,activePath:l,...c}){const{items:s,label:r}=e,u=C(e,l),p=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(u),[m,b]=Object(n.useState)((()=>!!a&&(!u&&e.collapsed))),h=Object(n.useRef)(null),[y,g]=Object(n.useState)(void 0),f=(e=!0)=>{var t;g(e?`${null===(t=h.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(n.useEffect)((()=>{u&&!p&&m&&b(!1)}),[u,p,m]);const v=Object(n.useCallback)((e=>{e.preventDefault(),y||f(),setTimeout((()=>b((e=>!e))),100)}),[y]);return 0===s.length?null:o.a.createElement("li",{className:Object(d.a)("menu__list-item",{"menu__list-item--collapsed":m}),key:r},o.a.createElement("a",Object(i.a)({className:Object(d.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[E.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},c),r),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:y},onTransitionEnd:()=>{m||f(!1)}},s.map((e=>o.a.createElement(x,{tabIndex:m?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:l})))))}function T({item:e,onItemClick:t,activePath:a,collapsible:n,...l}){const{href:c,label:s}=e,r=C(e,a);return o.a.createElement("li",{className:"menu__list-item",key:s},o.a.createElement(y.a,Object(i.a)({className:Object(d.a)("menu__link",{"menu__link--active":r,[E.a.menuLinkExternal]:!Object(g.a)(c)}),to:c},Object(g.a)(c)&&{isNavLink:!0,exact:!0,onClick:t},l),s))}function x(e){switch(e.item.type){case"category":return o.a.createElement(N,e);case"link":default:return o.a.createElement(T,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:l,isHidden:c}){const[s,r]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:y}=Object(u.useThemeConfig)(),{isAnnouncementBarClosed:g}=Object(p.a)(),{scrollY:O}=Object(h.a)();Object(m.a)(s);const C=Object(b.a)();return Object(n.useEffect)((()=>{C===b.b.desktop&&r(!1)}),[C]),o.a.createElement("div",{className:Object(d.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:i,[E.a.sidebarHidden]:c})},i&&o.a.createElement(f.a,{tabIndex:-1,className:E.a.sidebarLogo}),o.a.createElement("div",{className:Object(d.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":s,[E.a.menuWithAnnouncementBar]:!g&&0===O})},o.a.createElement("button",{"aria-label":s?Object(j.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(j.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{r(!s)}},s?o.a.createElement("span",{className:Object(d.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement(k.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),o.a.createElement("ul",{className:"menu__list"},t.map((t=>o.a.createElement(x,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),r(!1)},collapsible:a,activePath:e}))))),y&&o.a.createElement("button",{type:"button",title:Object(j.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(j.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(d.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:l},o.a.createElement(v,{className:E.a.collapseSidebarButtonIcon})))},B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:a(24).a,theme:B};function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var A=/\r\n|\r|\n/,w=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},P=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},D=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=L({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=L({},a,{backgroundColor:null}),o};function $(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var R=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),I(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?D(e.theme,e.language):void 0;return t.themeDict=a})),I(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,l=L({},$(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(l.style=c.plain),void 0!==o&&(l.style=void 0!==l.style?L({},l.style,o):o),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),I(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return l[a[0]];var c=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[c].concat(s))}})),I(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,l=e.token,c=L({},$(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?L({},c.style,o):o),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),I(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,l=this.getThemeDict(this.props),c=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],l=0,c=0,s=[],r=[s];c>-1;){for(;(l=n[c]++)<o[c];){var i=void 0,d=t[c],u=a[c][l];if("string"==typeof u?(d=c>0?d:["plain"],i=u):(d=P(d,u.type),u.alias&&(d=P(d,u.alias)),i=u.content),"string"==typeof i){var p=i.split(A),m=p.length;s.push({types:d,content:p[0]});for(var b=1;b<m;b++)w(s),r.push(s=[]),s.push({types:d,content:p[b]})}else c++,t.push(d),a.push(i),n.push(0),o.push(i.length)}c--,t.pop(),a.pop(),n.pop(),o.pop()}return w(s),r}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var M=a(124),z=a.n(M),H={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},W=a(87);var F=()=>{const{prism:e}=Object(u.useThemeConfig)(),{isDarkTheme:t}=Object(W.a)(),a=e.theme||H,n=e.darkTheme||a;return t?n:a},J=a(70),K=a.n(J);const V=/{([\d,-]+)}/,Y=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},q=/(?:title=")(.*)(?:")/;function G({children:e,className:t,metastring:a}){const{prism:l}=Object(u.useThemeConfig)(),[c,s]=Object(n.useState)(!1),[r,p]=Object(n.useState)(!1);Object(n.useEffect)((()=>{p(!0)}),[]);const m=Object(n.useRef)(null);let b=[],h="";const y=F(),g=Array.isArray(e)?e.join(""):e;if(a&&V.test(a)){const e=a.match(V)[1];b=z()(e).filter((e=>e>0))}a&&q.test(a)&&(h=a.match(q)[1]);let f=t&&t.replace(/language-/,"");!f&&l.defaultLanguage&&(f=l.defaultLanguage);let v=g.replace(/\n$/,"");if(0===b.length&&void 0!==f){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return Y(["js","jsBlock"]);case"jsx":case"tsx":return Y(["js","jsBlock","jsx"]);case"html":return Y(["js","jsBlock","html"]);case"python":case"py":return Y(["python"]);default:return Y()}})(f),a=g.replace(/\n$/,"").split("\n");let n;for(let o=0;o<a.length;){const l=o+1,c=a[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":n=l;break;case"highlight-end":e+=`${n}-${l-1},`}a.splice(o,1)}else o+=1}b=z()(e),v=a.join("\n")}const k=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),n&&n.focus()}(v),s(!0),setTimeout((()=>s(!1)),2e3)};return o.a.createElement(R,Object(i.a)({},_,{key:String(r),theme:y,code:v,language:f}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:l})=>o.a.createElement("div",{className:K.a.codeBlockContainer},h&&o.a.createElement("div",{style:t,className:K.a.codeBlockTitle},h),o.a.createElement("div",{className:Object(d.a)(K.a.codeBlockContent,f)},o.a.createElement("div",{tabIndex:0,className:Object(d.a)(e,K.a.codeBlock,"thin-scrollbar",{[K.a.codeBlockWithTitle]:h})},o.a.createElement("div",{className:K.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return b.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(i.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t}))))))})))),o.a.createElement("button",{ref:m,type:"button","aria-label":Object(j.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(d.a)(K.a.copyButton),onClick:k},c?o.a.createElement(j.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(j.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(71);var Q=a(72),U=a.n(Q);var X=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(u.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",{[U.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(j.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,a)};var Z={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(G,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(y.a,e),pre:e=>{const{children:t}=e;return o.a.createElement(G,null==t?void 0:t.props)},h1:X("h1"),h2:X("h2"),h3:X("h3"),h4:X("h4"),h5:X("h5"),h6:X("h6")},ee=a(104),te=a(23),ae=a(73),ne=a.n(ae);function oe({currentDocRoute:e,versionMetadata:t,children:a}){var s,i;const{siteConfig:p,isClient:m}=Object(c.default)(),{pluginId:b,permalinkToSidebar:h,docsSidebars:y,version:g}=t,f=h[e.path],k=y[f],[O,E]=Object(n.useState)(!1),[C,N]=Object(n.useState)(!1),T=Object(n.useCallback)((()=>{C&&N(!1),E(!O)}),[C]);return o.a.createElement(r.a,{key:m,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:g,tag:Object(u.docVersionSearchTag)(b,g)}},o.a.createElement("div",{className:ne.a.docPage},k&&o.a.createElement("div",{className:Object(d.a)(ne.a.docSidebarContainer,{[ne.a.docSidebarContainerHidden]:O}),onTransitionEnd:e=>{e.currentTarget.classList.contains(ne.a.docSidebarContainer)&&O&&N(!0)},role:"complementary"},o.a.createElement(S,{key:f,sidebar:k,path:e.path,sidebarCollapsible:null===(s=null===(i=p.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===s||s,onCollapse:T,isHidden:C}),C&&o.a.createElement("div",{className:ne.a.collapsedDocSidebar,title:Object(j.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(j.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},o.a.createElement(v,{className:ne.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(d.a)(ne.a.docMainContainer,{[ne.a.docMainContainerEnhanced]:O})},o.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",ne.a.docItemWrapper,{[ne.a.docItemWrapperEnhanced]:O})},o.a.createElement(l.a,{components:Z},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,l=t.find((e=>Object(te.matchPath)(n.pathname,e)));return l?o.a.createElement(oe,{currentDocRoute:l,versionMetadata:a},Object(s.a)(t)):o.a.createElement(ee.default,e)}}}]);