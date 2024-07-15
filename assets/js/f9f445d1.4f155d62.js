"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90850],{88889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453);const a={},o="SoundSourceEntry",d={id:"develop/adapters/entries/static/sound_source",title:"SoundSourceEntry",description:"The SoundSourceEntry class is used to have a sound play at a specific entity in the world. This can be a moving target like an NPC. The sound source can be used in an entry with a Sound parameter.",source:"@site/docs/develop/02-adapters/03-entries/static/sound_source.mdx",sourceDirName:"develop/02-adapters/03-entries/static",slug:"/develop/adapters/entries/static/sound_source",permalink:"/beta/develop/adapters/entries/static/sound_source",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/develop/02-adapters/03-entries/static/sound_source.mdx",tags:[],version:"current",frontMatter:{},sidebar:"develop",previous:{title:"SoundIdEntry",permalink:"/beta/develop/adapters/entries/static/sound_id"},next:{title:"SpeakerEntry",permalink:"/beta/develop/adapters/entries/static/speaker"}},i={},c=[{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"soundsourceentry",children:"SoundSourceEntry"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SoundSourceEntry"})," class is used to have a sound play at a specific entity in the world. This can be a moving target like an NPC. The sound source can be used in an entry with a ",(0,s.jsx)(t.code,{children:"Sound"})," parameter."]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_sound_source", "An example sound source entry.", Colors.GREEN, Icons.VOLUME_HIGH)\nclass ExampleSoundSourceEntry(\n    override val id: String,\n    override val name: String,\n) : SoundSourceEntry {\n    fun getEmitter(): net.kyori.adventure.sound.Sound.Emitter {\n        // Return the emitter that should be used for the sound.\n        // A bukkit entity can be used here.\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This can be combined with other entry types like ",(0,s.jsx)(t.code,{children:"Speaker"}),". For example, an NPC that speaks can also be a sound emitter."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);