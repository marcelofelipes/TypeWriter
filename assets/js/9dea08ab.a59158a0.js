"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["49501"],{31890:function(e,t,s){s.r(t),s.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"docs/helpfull-features/snippets","title":"Snippets","description":"Snippets are small pieces of information that the extensions can use. Mostly related with how things are displayed to the users.","source":"@site/versioned_docs/version-0.6.0/docs/05-helpfull-features/05-snippets.mdx","sourceDirName":"docs/05-helpfull-features","slug":"/docs/helpfull-features/snippets","permalink":"/docs/helpfull-features/snippets","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.6.0/docs/05-helpfull-features/05-snippets.mdx","tags":[],"version":"0.6.0","lastUpdatedBy":"Gabber235","lastUpdatedAt":1731173433000,"sidebarPosition":5,"frontMatter":{"title":"Snippets","difficulty":"Normal"},"sidebar":"tutorialSidebar","previous":{"title":"Shortcuts","permalink":"/docs/helpfull-features/shortcuts"},"next":{"title":"Troubleshooting Guide","permalink":"/docs/troubleshooting/"}}'),n=s("85893"),o=s("50065");let r={title:"Snippets",difficulty:"Normal"},a="What are Snippets?",l={},d=[];function p(e){let t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"what-are-snippets",children:"What are Snippets?"})}),"\n",(0,n.jsxs)(t.p,{children:["Snippets are small pieces of information that the extensions can use. Mostly related with how things are displayed to the users.\nSnippets allow you to customize all sorts of parts of different adpaters. For example, you can customize the way messages are displayed in the ",(0,n.jsx)(t.code,{children:"Basic Extension"}),"."]}),"\n",(0,n.jsx)(t.h1,{id:"how-do-i-customize-snippets",children:"How do I customize Snippets?"}),"\n",(0,n.jsxs)(t.p,{children:["Snippets can be customized by editing the ",(0,n.jsx)(t.code,{children:"plugin/Typewriter/snippets.yml"})," file."]}),"\n",(0,n.jsx)(t.admonition,{title:"important",type:"info",children:(0,n.jsx)(t.p,{children:"Note that Snippets are only written the first time they are used. So if you want to customize a snippet, you will need to trigger the entry that uses the snippet first."})}),"\n",(0,n.jsxs)(t.p,{children:["So for the ",(0,n.jsx)(t.code,{children:"Basic Extension"}),", after the first person reiceves a ",(0,n.jsx)(t.code,{children:"MessageDialogueEntry"}),", the ",(0,n.jsx)(t.code,{children:"snippets.yml"})," file will look like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="plugin/Typewriter/snippets.yml"',children:"dialogue:\n  message:\n    format: |2\n\n      <gray> | <bold><speaker></bold><reset><gray> |\n      <reset><white> <message>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can then edit this file to customize the snippet. For example, if you wanted to change the default color of the speaker's name, you could change the ",(0,n.jsx)(t.code,{children:"<bold><speaker></bold>"})," to ",(0,n.jsx)(t.code,{children:"<bold><red><speaker></red></bold>"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Yaml uses the ",(0,n.jsx)(t.code,{children:"|"})," to indicate that the text is a multi-line string."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="plugin/Typewriter/snippets.yml"',children:"dialogue:\n  message:\n    // highlight-next-line\n    format: |2\n\n      <gray> | <bold><speaker></bold><reset><gray> |\n      <reset><white> <message>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"|2"})," indicates that the text is a multi-line string, and has ",(0,n.jsx)(t.code,{children:"2"})," new-lines at the end of the string. If you don't want the new-lines, you can remove the ",(0,n.jsx)(t.code,{children:"2"})," to make it ",(0,n.jsx)(t.code,{children:"|"}),"."]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);