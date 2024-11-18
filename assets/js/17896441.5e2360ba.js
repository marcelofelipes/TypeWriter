"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18401],{19119:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(74848);n(96540);var i=n(34164),l=n(74175),a=n(76514),r=n(40497);function o(e){let{className:t}=e;return(0,s.jsx)(r.A,{type:"caution",title:(0,s.jsx)(l.Rc,{}),className:(0,i.A)(t,a.G.common.unlistedBanner),children:(0,s.jsx)(l.Uh,{})})}function c(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.AE,{}),(0,s.jsx)(o,{...e})]})}},66163:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(74848);n(96540);var i=n(34164),l=n(74175),a=n(76514),r=n(40497);function o(e){let{className:t}=e;return(0,s.jsx)(r.A,{type:"caution",title:(0,s.jsx)(l.Yh,{}),className:(0,i.A)(t,a.G.common.draftBanner),children:(0,s.jsx)(l.TT,{})})}var c=n(19119);function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||i.unlisted)&&(0,s.jsx)(c.A,{}),i.draft&&(0,s.jsx)(o,{})]})}},73942:(e,t,n)=>{n.r(t),n.d(t,{default:()=>en});var s=n(74848),i=n(96540),l=n(30397),a=n(22651);let r=i.createContext(null);function o(e){let{children:t,content:n}=e,l=(0,i.useMemo)(()=>({metadata:n.metadata,frontMatter:n.frontMatter,assets:n.assets,contentTitle:n.contentTitle,toc:n.toc}),[n]);return(0,s.jsx)(r.Provider,{value:l,children:t})}function c(){let e=(0,i.useContext)(r);if(null===e)throw new a.dV("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(34164),m=n(9868),h=n(6490),b=n(92711);function x(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(b.A,{...t,subLabel:(0,s.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(b.A,{...n,subLabel:(0,s.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){let{metadata:e}=c();return(0,s.jsx)(x,{previous:e.previous,next:e.next})}var f=n(31243),p=n(96867),j=n(16336),g=n(76514),A=n(40497),N=n(72685),C=n(58300);let _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that they're browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label}),betatext:(0,s.jsx)("b",{children:"beta"})},children:"You are currently looking at the {betatext} documentation of Typewriter. This means that the documentation may be incomplete or outdated."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that they're browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is a version of Typewriter {versionLabel} is no longer actively maintained."})}};function y(e){let t=_[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,s.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(p.A,{to:n,onClick:i,children:(0,s.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For the latest released version, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e,{siteConfig:{title:i}}=(0,f.A)(),{pluginId:l}=(0,j.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,N.g1)(l),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,j.HW)(l),c=r??o.docs.find(e=>e.id===o.mainDocId),d="unreleased"===n.banner?"Warning: Beta Version":"Warning: Unmaintained Version";return(0,s.jsx)(A.A,{type:"danger",title:d,children:(0,s.jsxs)("div",{className:(0,u.A)(t,g.G.docs.docVersionBanner),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(y,{siteTitle:i,versionMetadata:n})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(L,{versionLabel:o.label,to:c.path,onClick:()=>a(o.name)})})]})})}function k(e){let{className:t}=e,n=(0,C.r)();return n.banner?(0,s.jsx)(T,{className:t,versionMetadata:n}):null}function w(){let e=(0,C.r)(),t=function(){let{frontMatter:e}=c();return e.difficulty}();return e.badge?(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"inline-block mb-2 mr-2",children:(0,s.jsx)("span",{className:` ${g.G.docs.docVersionBadge} badge badge--primary`,children:(0,s.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:e.label},children:"Version: {versionLabel}"})})}),t&&(0,s.jsx)("div",{className:"inline-block mb-2",children:(0,s.jsx)("span",{className:`badge ${(e=>{switch(e.toLowerCase()){case"easy":return"badge--success";case"normal":return"badge--warning";case"hard":return"badge--danger";default:return"badge--secondary"}})(t)}`,children:(0,s.jsx)(h.A,{id:"theme.docs.difficultyBadge.label",values:{difficultyLevel:t},children:"Difficulty: {difficultyLevel}"})})})]}):null}var B=n(26146),E=n(6256);function I(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:l}=e,a=l.length>0,r=!!(t||n||i);return a||r?(0,s.jsxs)("footer",{className:(0,u.A)(g.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,s.jsx)("div",{className:(0,u.A)("row margin-top--sm",g.G.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(B.A,{tags:l})})}),r&&(0,s.jsx)(E.A,{className:(0,u.A)("margin-top--sm",g.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}var M=n(50705),V=n(26427);let H={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",H.tocCollapsibleButton,!t&&H.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let O={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:l}=e,{collapsed:a,toggleCollapsed:r}=(0,M.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.A)(O.tocCollapsible,!a&&O.tocCollapsibleExpanded,n),children:[(0,s.jsx)(G,{collapsed:a,onClick:r}),(0,s.jsx)(M.N,{lazy:!0,className:O.tocCollapsibleContent,collapsed:a,children:(0,s.jsx)(V.A,{toc:t,minHeadingLevel:i,maxHeadingLevel:l})})]})}function D(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(g.G.docs.docTocMobile,"tocMobile_ITEo")})}var P=n(54522);function S(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(P.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.G.docs.docTocDesktop})}var U=n(49034),F=n(41252);function z(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,s.jsxs)("div",{className:(0,u.A)(g.G.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(U.A,{as:"h1",children:n})}),(0,s.jsx)(F.A,{children:t})]})}var W=n(9289),Y=n(38232),$=n(53040);function q(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}function Q(){let e=(0,$.Ay)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(q,{className:"breadcrumbHomeIcon_YNFT"})})})}function Z(e){let{children:t,href:n,isLast:i}=e,l="breadcrumbs__link";return i?(0,s.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,s.jsx)(p.A,{className:l,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:l,children:t})}function J(e){let{children:t,active:n,index:i,addMicrodata:l}=e;return(0,s.jsxs)("li",{...l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function K(){let e=(0,W.OF)(),t=(0,Y.Dt)();return e?(0,s.jsx)("nav",{className:(0,u.A)(g.G.docs.docBreadcrumbs,"breadcrumbsContainer_Z_bl"),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(Q,{}),e.map((t,n)=>{let i=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(J,{active:i,index:n,addMicrodata:!!l,children:(0,s.jsx)(Z,{href:l,isLast:i,children:t.label})},n)})]})}):null}var X=n(66163);let ee={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function et(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.l)(),i=e.hide_table_of_contents,l=!i&&t.length>0;return{hidden:i,mobile:l?(0,s.jsx)(D,{}):void 0,desktop:l&&("desktop"===n||"ssr"===n)?(0,s.jsx)(S,{}):void 0}}(),{metadata:i}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ee.docItemCol),children:[(0,s.jsx)(X.A,{metadata:i}),(0,s.jsx)(k,{}),(0,s.jsxs)("div",{className:ee.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(K,{}),(0,s.jsx)(w,{}),n.mobile,(0,s.jsx)(z,{children:t}),(0,s.jsx)(I,{})]}),(0,s.jsx)(v,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function en(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(o,{content:e.content,children:(0,s.jsxs)(l.e3,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(et,{children:(0,s.jsx)(n,{})})]})})}},54522:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(74848);n(96540);var i=n(34164),l=n(26427);function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.A)("tableOfContents_bqdL","thin-scrollbar",t),children:(0,s.jsx)(l.A,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},26427:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(74848),i=n(96540),l=n(22945);function a(e){let t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}var r=n(96867);let o=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:a}=t;return n.length?(0,s.jsx)("ul",{className:a?void 0:i,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(r.A,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.p)(),b=d??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=t;return n.flatMap(t=>{let n=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:i});return t.level>=s&&t.level<=i?[{...t,children:n}]:n})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:x});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.p)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:r}=e;function o(){let e=Array.from(document.getElementsByClassName(s)),o=function(e,t){let{anchorTopOffset:n}=t,s=e.find(e=>a(e).top>=n);if(s){var i;return(i=a(s)).top>0&&i.bottom<window.innerHeight/2?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),{anchorTopOffset:n.current}),c=e.find(e=>o&&o.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===c?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,i.useMemo)(()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:x}},[r,c,b,x])),(0,s.jsx)(o,{toc:v,className:n,linkClassName:r,...m})}},74175:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>a,TT:()=>d,Uh:()=>r,Yh:()=>c});var s=n(74848);n(96540);var i=n(6490),l=n(35449);function a(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(l.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3961:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(74848);n(96540);var i=n(34164),l=n(40497);function a(e){var t;return(e.src??"").endsWith(".gif")?(0,s.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,"img_CujE"))}):(0,s.jsxs)(l.A,{type:"danger",title:"Invalid image",children:["Image component not found, please report this in the ",(0,s.jsx)("a",{href:"https://discord.gg/gs5QYhfv9x",children:"TypeWriter Discord"}),"."]})}}}]);