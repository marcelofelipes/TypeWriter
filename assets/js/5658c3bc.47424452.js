"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92958],{75614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>m});let a=JSON.parse('{"id":"adapters/BasicAdapter/entries/event/on_detect_command_ran","title":"Detect Command Ran Event","description":"The Detect Command Ran Event event is triggered when an already existing command is ran.","source":"@site/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/event/on_detect_command_ran.mdx","sourceDirName":"adapters/BasicAdapter/entries/event","slug":"/adapters/BasicAdapter/entries/event/on_detect_command_ran","permalink":"/0.5.1/adapters/BasicAdapter/entries/event/on_detect_command_ran","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/adapters/BasicAdapter/entries/event/on_detect_command_ran.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Gabber235","lastUpdatedAt":1734559031000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Block Break Event","permalink":"/0.5.1/adapters/BasicAdapter/entries/event/on_block_break"},"next":{"title":"Fish Event","permalink":"/0.5.1/adapters/BasicAdapter/entries/event/on_fish"}}');var d=t(74848),r=t(28453),s=t(29214),i=t(40497);t(96867);let o={},c="Detect Command Ran Event",l={},m=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,r.R)(),...e.components};return s||u("fields",!1),s.EntryField||u("fields.EntryField",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"detect-command-ran-event",children:"Detect Command Ran Event"})}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"Detect Command Ran Event"})," event is triggered when an ",(0,d.jsx)(n.strong,{children:"already existing"})," command is ran."]}),"\n",(0,d.jsx)(n.admonition,{type:"caution",children:(0,d.jsxs)(n.p,{children:["This event only works if the command already exists. If you are trying to make a new command that does not exist already, use the ",(0,d.jsx)(n.a,{href:"on_run_command",children:(0,d.jsx)(n.code,{children:"Run Command Event"})})," instead."]})}),"\n",(0,d.jsx)(n.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,d.jsx)(n.p,{children:"This event could be used to trigger a response when a specific command has been run.\nFor example, you could have a command that sends a message to a channel when a command has been run,\nwhich could be used as an audit log for your admins."}),"\n",(0,d.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsx)(s.EntryField,{name:"Triggers",required:!0,multiple:!0}),"\n",(0,d.jsxs)(s.EntryField,{name:"Command",required:!0,regex:!0,children:[(0,d.jsxs)(n.p,{children:["The command to listen for.\nThis can be partial, so if you wanted to listen for any warp command,\nyou could use ",(0,d.jsx)("code",{children:"warp"})," as the command.\nHowever, this can also include parameters, so if you\nwanted to listen if the player warps to spawn, you could use\n",(0,d.jsx)("code",{children:"warp spawn"})," as the command."]}),(0,d.jsx)("br",{}),(0,d.jsx)(i.A,{type:"caution",children:(0,d.jsxs)(n.p,{children:["Do not include the ",(0,d.jsx)("code",{children:"/"})," at the start of the command.\nThis will be added automatically."]})})]}),"\n",(0,d.jsx)(s.EntryField,{name:"Cancel",required:!0,children:(0,d.jsx)(n.p,{children:"Cancel the event when triggered"})})]})}function p(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);