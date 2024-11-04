"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["11413"],{31007:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>o,frontMatter:()=>d});var t=JSON.parse('{"id":"develop/adapters/querying","title":"Query Entries","description":"Sometimes you need to find an entry by any of it\'s fields or by type. This can be done with the Query class.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/04-querying.mdx","sourceDirName":"develop/02-adapters","slug":"/develop/adapters/querying","permalink":"/0.4.2/develop/adapters/querying","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/04-querying.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1730745397000,"sidebarPosition":4,"frontMatter":{},"sidebar":"develop","previous":{"title":"EventEntry","permalink":"/0.4.2/develop/adapters/entries/trigger/event"},"next":{"title":"Triggering Entries","permalink":"/0.4.2/develop/adapters/triggering"}}'),i=r("85893"),s=r("50065");let d={},a="Query Entries",l={},o=[];function c(e){let n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"query-entries",children:"Query Entries"})}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you need to find an entry by any of it's fields or by type. This can be done with the ",(0,i.jsx)(n.code,{children:"Query"})," class."]}),"\n",(0,i.jsx)(n.p,{children:"If you need to find all entries of a specific type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entries = Query.find<MyEntry>()\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need it by a specific criteria:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also find a single entry:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entry = Query.findFirstWhere<MyEntry> {\n    it.someField == "some value"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you need to find an entry by it's id:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val entry = Query.findById<MyEntry>(id)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Other times you need to find entries by their page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val entries = Query.findWhereFromPage<MyEntry>(pageId) {\n    it.someField == "some value"\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);