"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92913],{94227:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});let t=JSON.parse('{"id":"develop/adapters/entries/static/speaker","title":"SpeakerEntry","description":"The SpeakerEntry is a specialized interface extending the EntityEntry.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/speaker.mdx","sourceDirName":"develop/02-adapters/03-entries/static","slug":"/develop/adapters/entries/static/speaker","permalink":"/0.4.2/develop/adapters/entries/static/speaker","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/speaker.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1734948882000,"frontMatter":{},"sidebar":"develop","previous":{"title":"SoundSourceEntry","permalink":"/0.4.2/develop/adapters/entries/static/sound_source"},"next":{"title":"ActionEntry","permalink":"/0.4.2/develop/adapters/entries/trigger/action"}}');var a=r(74848),s=r(28453);let i={},d="SpeakerEntry",o={},l=[{value:"Usage",id:"usage",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"speakerentry",children:"SpeakerEntry"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"SpeakerEntry"})," is a specialized interface extending the ",(0,a.jsx)(n.code,{children:"EntityEntry"}),".\nIt is designed to enhance dialogues in the game by associating non-player characters (NPCs) with specific names and sounds.\nThis feature is pivotal for creating more immersive and interactive storytelling experiences in Minecraft."]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@Entry("example_speaker", "An example speaker entry.", Colors.BLUE, Icons.PERSON_TALKING)\nclass ExampleSpeakerEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val displayName: String = "",\n    override val sound: Sound = Sound.EMPTY,\n) : SpeakerEntry\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This speaker can be used by users in various dialogues and interactions within the game.\nNormally, you never need to access the ",(0,a.jsx)(n.code,{children:"SpeakerEntry"})," directly, as it is automatically handled by the ",(0,a.jsx)(n.code,{children:"DialogueSequence"}),".\nIf you ever do need to access the ",(0,a.jsx)(n.code,{children:"SpeakerEntry"}),", you can do so:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val id = // ID of the speaker\nval entry = Query.findById<ExampleSpeakerEntry>(id)\nval name = entry.displayName\nval sound = entry.sound\n"})})]})}function p(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);