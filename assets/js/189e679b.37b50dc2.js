"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7214],{50840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(74848),r=t(28453);const s={},d="Query Entries",o={id:"develop/extensions/querying",title:"Query Entries",description:"Sometimes you need to find an entry by any of it's fields or by type. This can be done with the Query class.",source:"@site/docs/develop/02-extensions/05-querying.mdx",sourceDirName:"develop/02-extensions",slug:"/develop/extensions/querying",permalink:"/beta/develop/extensions/querying",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-extensions/05-querying.mdx",tags:[],version:"current",lastUpdatedBy:"Gabber235",lastUpdatedAt:1728457703e3,sidebarPosition:5,frontMatter:{},sidebar:"develop",previous:{title:"EventEntry",permalink:"/beta/develop/extensions/entries/trigger/event"},next:{title:"Triggering Entries",permalink:"/beta/develop/extensions/triggering"}},a={},l=[];function c(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"query-entries",children:"Query Entries"})}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you need to find an entry by any of it's fields or by type. This can be done with the ",(0,i.jsx)(n.code,{children:"Query"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to find all entries of a specific type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entries = Query.find<MyEntry>()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need it by a specific criteria:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also find a single entry:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entry = Query.findFirstWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need to find an entry by it's id:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entry = Query.findById<MyEntry>(id)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other times you need to find entries by their page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhereFromPage<MyEntry>(pageId) {\n    it.someField == "some value"\n}\n'})})]})}function y(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);