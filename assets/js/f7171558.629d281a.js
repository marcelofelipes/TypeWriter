"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["42287"],{24174:function(e,t,r){r.r(t),r.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"develop/adapters/entries/trigger/action","title":"ActionEntry","description":"The ActionEntry defines an action to take. When it is triggered, it will run it\'s execute method.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/action.mdx","sourceDirName":"develop/02-adapters/03-entries/trigger","slug":"/develop/adapters/entries/trigger/action","permalink":"/0.4.2/develop/adapters/entries/trigger/action","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/action.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1730745397000,"frontMatter":{},"sidebar":"develop","previous":{"title":"SpeakerEntry","permalink":"/0.4.2/develop/adapters/entries/static/speaker"},"next":{"title":"CustomTriggeringActionEntry","permalink":"/0.4.2/develop/adapters/entries/trigger/custom_triggering_action"}}'),n=r("85893"),a=r("50065");let s={},o="ActionEntry",l={},d=[{value:"Usage",id:"usage",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"actionentry",children:"ActionEntry"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ActionEntry"})," defines an action to take. When it is triggered, it will run it's ",(0,n.jsx)(t.code,{children:"execute"})," method.\nAfter which it will trigger all the next entries in the chain."]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_action", "An example action entry.", Colors.RED, Icons.PERSON_RUNNING)\nclass ExampleActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria>,\n    override val modifiers: List<Modifier>,\n    override val triggers: List<String> = emptyList(),\n): ActionEntry {\n    override fun execute(player: Player) {\n        // Do something\n        super.execute(player) // This will apply all the modifiers.\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Typewriter will automatically trigger the next entries in the chain after the ",(0,n.jsx)(t.code,{children:"execute"})," method is called.\nIf you want to call the next entries in the chain manually, you can should the ",(0,n.jsx)(t.code,{children:"CustomTriggeringActionEntry"}),"."]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);