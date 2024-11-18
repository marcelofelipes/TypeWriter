"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37643],{55875:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(74848);r(96540);var a=r(34164),l=r(31243),i=r(30397),s=r(76514),o=r(25104),d=r(92026),c=r(31998),u=r(44791),m=r(35449),g=r(24902);function h(e){let t=(0,g.kJ)(e);return(0,n.jsx)(m.A,{children:(0,n.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){let{metadata:t}=e,{siteConfig:{title:r}}=(0,l.A)(),{blogDescription:a,blogTitle:s,permalink:o}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.be,{title:"/"===o?r:s,description:a}),(0,n.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){let{metadata:t,items:r,sidebar:a}=e;return(0,n.jsxs)(o.A,{sidebar:a,children:[(0,n.jsx)(u.A,{items:r}),(0,n.jsx)(d.A,{metadata:t})]})}function j(e){return(0,n.jsxs)(i.e3,{className:(0,a.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,n.jsx)(x,{...e}),(0,n.jsx)(h,{...e}),(0,n.jsx)(p,{...e})]})}},92026:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(74848);r(96540);var a=r(6490),l=r(92711);function i(e){let{metadata:t}=e,{previousPage:r,nextPage:i}=t;return(0,n.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[r&&(0,n.jsx)(l.A,{permalink:r,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,n.jsx)(l.A,{permalink:i,title:(0,n.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},11516:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(74848);r(96540);var a=r(34164),l=r(24902);function i(e){let{children:t,className:r}=e;return(0,n.jsx)("article",{className:r,children:t})}var s=r(96867);function o(e){let{className:t}=e,{metadata:r,isBlogPostPage:i}=(0,l.e7)(),{permalink:o,title:d}=r;return(0,n.jsx)(i?"h1":"h2",{className:(0,a.A)("title_f1Hy",t),children:i?d:(0,n.jsx)(s.A,{to:o,children:d})})}var d=r(6490),c=r(74972),u=r(48067);function m(e){let{readingTime:t}=e,r=function(){let{selectMessage:e}=(0,c.W)();return t=>{let r=Math.ceil(t);return e(r,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:r}))}}();return(0,n.jsx)(n.Fragment,{children:r(t)})}function g(e){let{date:t,formattedDate:r}=e;return(0,n.jsx)("time",{dateTime:t,children:r})}function h(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e,{metadata:r}=(0,l.e7)(),{date:i,readingTime:s}=r,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,a.A)("container_mt6G","margin-vert--md",t),children:[(0,n.jsx)(g,{date:i,formattedDate:o.format(new Date(i))}),void 0!==s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{}),(0,n.jsx)(m,{readingTime:s})]})]})}var p=r(32185);let j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e,{metadata:{authors:r},assets:i}=(0,l.e7)();if(0===r.length)return null;let s=r.every(e=>{let{name:t}=e;return!t}),o=1===r.length;return(0,n.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",s?j.imageOnlyAuthorRow:"row",t),children:r.map((e,t)=>(0,n.jsx)("div",{className:(0,a.A)(!s&&(o?"col col--12":"col col--6"),s?j.imageOnlyAuthorCol:j.authorCol),children:(0,n.jsx)(p.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t))})}function f(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(o,{}),(0,n.jsx)(x,{}),(0,n.jsx)(A,{})]})}var b=r(83405),v=r(41252);function N(e){let{children:t,className:r}=e,{isBlogPostPage:i}=(0,l.e7)();return(0,n.jsx)("div",{id:i?b.LU:void 0,className:(0,a.A)("markdown",r),children:(0,n.jsx)(v.A,{children:t})})}var w=r(76514),y=r(6256),T=r(26146);function k(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function C(e){let{blogPostTitle:t,...r}=e;return(0,n.jsx)(s.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...r,children:(0,n.jsx)(k,{})})}function R(){let{metadata:e,isBlogPostPage:t}=(0,l.e7)(),{tags:r,title:i,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:d,lastUpdatedAt:c}=e,u=!t&&o,m=r.length>0;if(!(m||u||s))return null;if(!t)return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,n.jsx)(T.A,{tags:r})}),u&&(0,n.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,n.jsx)(C,{blogPostTitle:i,to:e.permalink})})]});{let e=!!(s||c||d);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,n.jsx)("div",{className:(0,a.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(T.A,{tags:r})})}),e&&(0,n.jsx)(y.A,{className:(0,a.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:c,lastUpdatedBy:d})]})}}function _(e){let{children:t,className:r}=e,s=function(){let{isBlogPostPage:e}=(0,l.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,a.A)(s,r),children:[(0,n.jsx)(f,{}),(0,n.jsx)(N,{children:t}),(0,n.jsx)(R,{})]})}},44791:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(74848);r(96540);var a=r(24902),l=r(11516);function i(e){let{items:t,component:r=l.A}=e;return(0,n.jsx)(n.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,n.jsx)(a.in,{content:t,children:(0,n.jsx)(r,{children:(0,n.jsx)(t,{})})},t.metadata.permalink)})})}},3961:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(74848);r(96540);var a=r(34164),l=r(40497);function i(e){var t;return(e.src??"").endsWith(".gif")?(0,n.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,a.A)(t,"img_CujE"))}):(0,n.jsxs)(l.A,{type:"danger",title:"Invalid image",children:["Image component not found, please report this in the ",(0,n.jsx)("a",{href:"https://discord.gg/gs5QYhfv9x",children:"TypeWriter Discord"}),"."]})}}}]);