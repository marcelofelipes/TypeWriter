"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84813],{92026:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(74848);n(96540);var i=n(6490),a=n(92711);function s(e){let{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.A,{permalink:n,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,r.jsx)(a.A,{permalink:s,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},11516:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(74848);n(96540);var i=n(34164),a=n(24902);function s(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n(96867);function o(e){let{className:t}=e,{metadata:n,isBlogPostPage:s}=(0,a.e7)(),{permalink:o,title:d}=n;return(0,r.jsx)(s?"h1":"h2",{className:(0,i.A)("title_f1Hy",t),children:s?d:(0,r.jsx)(l.A,{to:o,children:d})})}var d=n(6490),c=n(74972),u=n(48067);function g(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,c.W)();return t=>{let n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function h(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function m(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e,{metadata:n}=(0,a.e7)(),{date:s,readingTime:l}=n,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,i.A)("container_mt6G","margin-vert--md",t),children:[(0,r.jsx)(h,{date:s,formattedDate:o.format(new Date(s))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(g,{readingTime:l})]})]})}var x=n(32185);let j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function f(e){let{className:t}=e,{metadata:{authors:n},assets:s}=(0,a.e7)();if(0===n.length)return null;let l=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,r.jsx)("div",{className:(0,i.A)("margin-top--md margin-bottom--sm",l?j.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,i.A)(!l&&(o?"col col--12":"col col--6"),l?j.imageOnlyAuthorCol:j.authorCol),children:(0,r.jsx)(x.A,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(o,{}),(0,r.jsx)(p,{}),(0,r.jsx)(f,{})]})}var b=n(83405),v=n(41252);function T(e){let{children:t,className:n}=e,{isBlogPostPage:s}=(0,a.e7)();return(0,r.jsx)("div",{id:s?b.LU:void 0,className:(0,i.A)("markdown",n),children:(0,r.jsx)(v.A,{children:t})})}var w=n(76514),y=n(6256),N=n(26146);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(k,{})})}function U(){let{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:s,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,g=n.length>0;if(!(g||u||l))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,i.A)("col",{"col--9":u}),children:(0,r.jsx)(N.A,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,i.A)("col text--right",{"col--3":g}),children:(0,r.jsx)(R,{blogPostTitle:s,to:e.permalink})})]});{let e=!!(l||c||d);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,i.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(N.A,{tags:n})})}),e&&(0,r.jsx)(y.A,{className:(0,i.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:c,lastUpdatedBy:d})]})}}function _(e){let{children:t,className:n}=e,l=function(){let{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(s,{className:(0,i.A)(l,n),children:[(0,r.jsx)(A,{}),(0,r.jsx)(T,{children:t}),(0,r.jsx)(U,{})]})}},44791:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(74848);n(96540);var i=n(24902),a=n(11516);function s(e){let{items:t,component:n=a.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,r.jsx)(i.in,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)})})}},10370:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(74848);n(96540);var i=n(34164),a=n(6490),s=n(30397),l=n(76514),o=n(25720),d=n(96867),c=n(25104),u=n(92026),g=n(31998),h=n(44791),m=n(19119),p=n(49034);function x(e){let{tag:t}=e,n=(0,o.ZD)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.be,{title:n,description:t.description}),(0,r.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:i,listMetadata:s}=e,l=(0,o.ZD)(t);return(0,r.jsxs)(c.A,{sidebar:i,children:[t.unlisted&&(0,r.jsx)(m.A,{}),(0,r.jsxs)("header",{className:"margin-bottom--xl",children:[(0,r.jsx)(p.A,{as:"h1",children:l}),t.description&&(0,r.jsx)("p",{children:t.description}),(0,r.jsx)(d.A,{href:t.allTagsPath,children:(0,r.jsx)(a.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,r.jsx)(h.A,{items:n}),(0,r.jsx)(u.A,{metadata:s})]})}function f(e){return(0,r.jsxs)(s.e3,{className:(0,i.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,r.jsx)(x,{...e}),(0,r.jsx)(j,{...e})]})}},19119:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(74848);n(96540);var i=n(34164),a=n(74175),s=n(76514),l=n(40497);function o(e){let{className:t}=e;return(0,r.jsx)(l.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function d(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(o,{...e})]})}},25720:(e,t,n)=>{n.d(t,{ZD:()=>a,uz:()=>s}),n(74848),n(96540);var r=n(6490),i=n(74972);function a(e){let t=function(){let{selectMessage:e}=(0,i.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}let s=()=>(0,r.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},74175:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>s,TT:()=>c,Uh:()=>l,Yh:()=>d});var r=n(74848);n(96540);var i=n(6490),a=n(35449);function s(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(a.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function c(){return(0,r.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},3961:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(74848);n(96540);var i=n(34164),a=n(40497);function s(e){var t;return(e.src??"").endsWith(".gif")?(0,r.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,i.A)(t,"img_CujE"))}):(0,r.jsxs)(a.A,{type:"danger",title:"Invalid image",children:["Image component not found, please report this in the ",(0,r.jsx)("a",{href:"https://discord.gg/gs5QYhfv9x",children:"TypeWriter Discord"}),"."]})}}}]);