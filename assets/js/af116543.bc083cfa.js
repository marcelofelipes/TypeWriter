"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77012],{87332:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>o});let t=JSON.parse('{"id":"develop/extensions/triggering","title":"Triggering Entries","description":"There are easy ways to trigger all the next entries in a TriggerEntry.","source":"@site/versioned_docs/version-0.6.1/develop/02-extensions/06-triggering.mdx","sourceDirName":"develop/02-extensions","slug":"/develop/extensions/triggering","permalink":"/0.6.1/develop/extensions/triggering","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.6.1/develop/02-extensions/06-triggering.mdx","tags":[],"version":"0.6.1","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1734948882000,"sidebarPosition":6,"frontMatter":{},"sidebar":"develop","previous":{"title":"Query Entries","permalink":"/0.6.1/develop/extensions/querying"},"next":{"title":"API Changes","permalink":"/0.6.1/develop/extensions/api-changes/"}}');var n=r(74848),s=r(28453);let a={},l="Triggering Entries",d={},o=[{value:"Custom triggers",id:"custom-triggers",level:2},{value:"SystemTrigger",id:"systemtrigger",level:3},{value:"CinematicStartTrigger",id:"cinematicstarttrigger",level:3}];function g(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"triggering-entries",children:"Triggering Entries"})}),"\n",(0,n.jsxs)(i.p,{children:["There are easy ways to trigger all the next entries in a ",(0,n.jsx)(i.code,{children:"TriggerEntry"}),".\nThe most important is that you have a ",(0,n.jsx)(i.code,{children:"player"})," to trigger the entries on."]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Typewriter takes care of only triggering the entries that should be triggered.\nIf criteria are not met, the entries are not triggered."})}),"\n",(0,n.jsxs)(i.p,{children:["If you have a single ",(0,n.jsx)(i.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val triggerEntry: TriggerEntry = ...\nval player: Player = ...\ntriggerEntry triggerAllFor player\n"})}),"\n",(0,n.jsxs)(i.p,{children:["If you have list of ",(0,n.jsx)(i.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\ntriggerEntries triggerAllFor player\n"})}),"\n",(0,n.jsxs)(i.p,{children:["If you have a list of id's of ",(0,n.jsx)(i.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val triggerEntryIds: List<String> = ...\nval player: Player = ...\ntriggerEntryIds triggerEntriesFor player\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Sometimes you don't want to trigger the entries when the player is in a dialogue.\nFor example, when the player is in a dialogue with a NPC, you don't want to trigger the first entry of the NPC again.\nYou expect when the player clicks on the NPC again, the next dialogue is triggered.\nTo facilitate this, you can use the ",(0,n.jsx)(i.code,{children:"startDialogueWithOrNextDialogue"})," function."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\ntriggerEntries startDialogueWithOrNextDialogue player\n"})}),"\n",(0,n.jsx)(i.p,{children:"Or if you want to trigger something completely different when the player is in a dialogue:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\nval customTrigger: EventTrigger = ...\ntriggerEntries.startDialogueWithOrTrigger(player, customTrigger)\n"})}),"\n",(0,n.jsx)(i.h2,{id:"custom-triggers",children:"Custom triggers"}),"\n",(0,n.jsxs)(i.p,{children:["Typewriter triggers based on the ",(0,n.jsx)(i.code,{children:"EventTrigger"})," interface.\nSo all the entries that are triggered are wrapped in a ",(0,n.jsx)(i.code,{children:"EntryTrigger"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["There are some triggers that are defined in Typewriter.\nThe two are ",(0,n.jsx)(i.code,{children:"SystemTrigger"})," and ",(0,n.jsx)(i.code,{children:"CinematicStartTrigger"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"systemtrigger",children:"SystemTrigger"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"SystemTrigger"}),"'s can be used to indicate to either the ",(0,n.jsx)(i.code,{children:"DialogueSequence"})," or the ",(0,n.jsx)(i.code,{children:"CinematicSequence"})," that something needs to happen."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SystemTrigger.DIALOGUE_NEXT"})," indicates that the next dialogue should be triggered."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SystemTrigger.DIALOGUE_END"})," indicates that the dialogue should end."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"SystemTrigger.CINEMATIC_END"})," indicates that the cinematic should end."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"cinematicstarttrigger",children:"CinematicStartTrigger"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"CinematicStartTrigger"}),"'s can be used to indicate to the ",(0,n.jsx)(i.code,{children:"CinematicSequence"})," that a cinematic should start."]}),"\n",(0,n.jsx)(i.p,{children:"It has several properties that can be set:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"pageId: String"})," is the id of the cinematic page that should be shown. This is required."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"triggers: List<String>"})," is a list of trigger id's that should be triggered when the cinematic is finished. This is optional."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"override: Boolean"})," indicates if the cinematic should override the current cinematic. This is optional and defaults to ",(0,n.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"simulate: Boolean"})," is used to run a cinematic for recording purposes. When this is enable it disables some entries from running. This is optional and defaults to ",(0,n.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"ignoreEntries: List<String>"})," is a list of entry id's that should not be triggered. This is optional."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"minEndTime: Optional<Int>"})," is the minimum amount of frames the cinematic should run. If the cinematic is shorter than this, it will be extended. This is optional."]}),"\n"]})]})}function c(e={}){let{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);