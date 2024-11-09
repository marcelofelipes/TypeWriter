"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["68368"],{73886:function(e,t,n){n.d(t,{Z:()=>A});var r=n("85893");n("67294");var i=n("67026"),l=n("65001");function o(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var a=n("31183");let s="title_f1Hy";function c(e){let{className:t}=e,{metadata:n,isBlogPostPage:o}=(0,l.nO)(),{permalink:c,title:d}=n;return(0,r.jsx)(o?"h1":"h2",{className:(0,i.Z)(s,t),children:o?d:(0,r.jsx)(a.Z,{to:c,children:d})})}var d=n("34751"),u=n("33876"),m=n("99793");let h="container_mt6G";function f(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,u.c)();return t=>{let n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function g(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let t,{className:n}=e,{metadata:o}=(0,l.nO)(),{date:a,readingTime:s}=o,c=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,i.Z)(h,"margin-vert--md",n),children:[(0,r.jsx)(g,{date:a,formattedDate:(t=a,c.format(new Date(t)))}),void 0!==s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(f,{readingTime:s})]})]})}var j=n("48576");let v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e,{metadata:{authors:n},assets:o}=(0,l.nO)();if(0===n.length)return null;let a=n.every(e=>{let{name:t}=e;return!t}),s=1===n.length;return(0,r.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",a?v.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,i.Z)(!a&&(s?"col col--12":"col col--6"),a?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j.Z,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t))})}function Z(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(p,{}),(0,r.jsx)(b,{})]})}var y=n("23742"),N=n("28578");function _(e){let{children:t,className:n}=e,{isBlogPostPage:o}=(0,l.nO)();return(0,r.jsx)("div",{id:o?y.blogPostContainerID:void 0,className:(0,i.Z)("markdown",n),children:(0,r.jsx)(N.Z,{children:t})})}var w=n("83212"),O=n("5036"),k=n("98501");function L(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function T(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(a.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(L,{})})}function C(){let{metadata:e,isBlogPostPage:t}=(0,l.nO)(),{tags:n,title:o,editUrl:a,hasTruncateMarker:s,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&s,m=n.length>0;if(!(m||u||a))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,i.Z)("col",{"col--9":u}),children:(0,r.jsx)(k.Z,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":m}),children:(0,r.jsx)(T,{blogPostTitle:o,to:e.permalink})})]});{let e=!!(a||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,i.Z)("row","margin-top--sm",w.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(k.Z,{tags:n})})}),e&&(0,r.jsx)(O.Z,{className:(0,i.Z)("margin-top--sm",w.k.blog.blogFooterEditMetaRow),editUrl:a,lastUpdatedAt:d,lastUpdatedBy:c})]})}}function A(e){let{children:t,className:n}=e,a=function(){let{isBlogPostPage:e}=(0,l.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(o,{className:(0,i.Z)(a,n),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(C,{})]})}},33474:function(e,t,n){n.r(t),n.d(t,{default:()=>v});var r=n("85893");n("67294");var i=n("67026"),l=n("1216"),o=n("83212"),a=n("65001"),s=n("50387"),c=n("73886"),d=n("34751"),u=n("39034");function m(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(u.Z,{...n,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(u.Z,{...t,subLabel:(0,r.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){let{assets:e,metadata:t}=(0,a.nO)(),{title:n,description:i,date:o,tags:s,authors:c,frontMatter:d}=t,{keywords:u}=d,m=e.image??d.image;return(0,r.jsxs)(l.d,{title:d.title_meta??n,description:i,keywords:u,image:m,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:o}),c.some(e=>e.url)&&(0,r.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),s.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:s.map(e=>e.label).join(",")})]})}var f=n("48766");function g(){let e=(0,a.iZ)();return(0,r.jsx)(f.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n("31955"),p=n("24391");function j(e){let{sidebar:t,children:n}=e,{metadata:i,toc:l}=(0,a.nO)(),{nextItem:o,prevItem:d,frontMatter:u}=i,{hide_table_of_contents:h,toc_min_heading_level:f,toc_max_heading_level:g}=u;return(0,r.jsxs)(s.Z,{sidebar:t,toc:!h&&l.length>0?(0,r.jsx)(x.Z,{toc:l,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,r.jsx)(p.Z,{metadata:i}),(0,r.jsx)(c.Z,{children:n}),(o||d)&&(0,r.jsx)(m,{nextItem:o,prevItem:d})]})}function v(e){let t=e.content;return(0,r.jsx)(a.n4,{content:e.content,isBlogPostPage:!0,children:(0,r.jsxs)(l.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,r.jsx)(h,{}),(0,r.jsx)(g,{}),(0,r.jsx)(j,{sidebar:e.sidebar,children:(0,r.jsx)(t,{})})]})})}},60893:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(85893);n(67294);var i=n(67026),l=n(36671),o=n(83212),a=n(49270);function s(e){let{className:t}=e;return(0,r.jsx)(a.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(t,o.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(s,{...e})]})}},24391:function(e,t,n){n.d(t,{Z:()=>d});var r=n("85893");n("67294");var i=n("67026"),l=n("36671"),o=n("83212"),a=n("49270");function s(e){let{className:t}=e;return(0,r.jsx)(a.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(t,o.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var c=n("60893");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.Z,{}),i.draft&&(0,r.jsx)(s,{})]})}},31955:function(e,t,n){n.d(t,{Z:()=>a});var r=n("85893");n("67294");var i=n("67026"),l=n("29450");let o="tableOfContents_bqdL";function a(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.Z)(o,"thin-scrollbar",t),children:(0,r.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},29450:function(e,t,n){n.d(t,{Z:()=>c});var r=n("85893"),i=n("67294"),l=n("42007");function o(e){let t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}var a=n("31183");let s=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),f=d??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return(n=t).level>=r&&n.level<=i?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:f,maxHeadingLevel:g});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:a}=e;function s(){var e;let s=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>o(e).top>=n);if(r){var i;return(i=o(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:n.current}),d=s.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});s.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}},[e,n])}((0,i.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:g}},[a,c,f,g])),(0,r.jsx)(s,{toc:x,className:n,linkClassName:a,...m})}},36671:function(e,t,n){n.d(t,{T$:function(){return s},cI:function(){return o},eU:function(){return a},ht:function(){return c},xo:function(){return d}});var r=n(85893);n(67294);var i=n(34751),l=n(48766);function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function s(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);