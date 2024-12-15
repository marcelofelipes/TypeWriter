"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22691],{67496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>c});let s=JSON.parse('{"id":"develop/adapters/entries/static/sound_source","title":"SoundSourceEntry","description":"The SoundSourceEntry class is used to have a sound play at a specific entity in the world. This can be a moving target like an NPC. The sound source can be used in an entry with a Sound parameter.","source":"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/sound_source.mdx","sourceDirName":"develop/02-adapters/03-entries/static","slug":"/develop/adapters/entries/static/sound_source","permalink":"/0.4.2/develop/adapters/entries/static/sound_source","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/static/sound_source.mdx","tags":[],"version":"0.4.2","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734272886000,"frontMatter":{},"sidebar":"develop","previous":{"title":"SoundIdEntry","permalink":"/0.4.2/develop/adapters/entries/static/sound_id"},"next":{"title":"SpeakerEntry","permalink":"/0.4.2/develop/adapters/entries/static/speaker"}}');var r=n(74848),a=n(28453);let d={},o="SoundSourceEntry",i={},c=[{value:"Usage",id:"usage",level:2}];function u(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"soundsourceentry",children:"SoundSourceEntry"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"SoundSourceEntry"})," class is used to have a sound play at a specific entity in the world. This can be a moving target like an NPC. The sound source can be used in an entry with a ",(0,r.jsx)(t.code,{children:"Sound"})," parameter."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_sound_source", "An example sound source entry.", Colors.GREEN, Icons.VOLUME_HIGH)\nclass ExampleSoundSourceEntry(\n    override val id: String,\n    override val name: String,\n) : SoundSourceEntry {\n    fun getEmitter(): net.kyori.adventure.sound.Sound.Emitter {\n        // Return the emitter that should be used for the sound.\n        // A bukkit entity can be used here.\n    }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["This can be combined with other entry types like ",(0,r.jsx)(t.code,{children:"Speaker"}),". For example, an NPC that speaks can also be a sound emitter."]})]})}function l(e={}){let{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);