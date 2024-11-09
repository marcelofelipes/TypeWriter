"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["43419"],{25339:function(e,r,i){i.r(r),i.d(r,{metadata:()=>t,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>g,frontMatter:()=>a});var t=JSON.parse('{"id":"develop/adapters/triggering","title":"Triggering Entries","description":"There are easy ways to trigger all the next entries in a TriggerEntry.","source":"@site/versioned_docs/version-0.5.1/develop/02-adapters/05-triggering.mdx","sourceDirName":"develop/02-adapters","slug":"/develop/adapters/triggering","permalink":"/0.5.1/develop/adapters/triggering","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/develop/02-adapters/05-triggering.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Gabber235","lastUpdatedAt":1731173433000,"sidebarPosition":5,"frontMatter":{},"sidebar":"develop","previous":{"title":"Query Entries","permalink":"/0.5.1/develop/adapters/querying"},"next":{"title":"API Changes","permalink":"/0.5.1/develop/adapters/api-changes/"}}'),n=i("85893"),s=i("50065");let a={},l="Triggering Entries",d={},g=[{value:"Custom triggers",id:"custom-triggers",level:2},{value:"SystemTrigger",id:"systemtrigger",level:3},{value:"CinematicStartTrigger",id:"cinematicstarttrigger",level:3}];function o(e){let r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"triggering-entries",children:"Triggering Entries"})}),"\n",(0,n.jsxs)(r.p,{children:["There are easy ways to trigger all the next entries in a ",(0,n.jsx)(r.code,{children:"TriggerEntry"}),".\nThe most important is that you have a ",(0,n.jsx)(r.code,{children:"player"})," to trigger the entries on."]}),"\n",(0,n.jsx)(r.admonition,{type:"info",children:(0,n.jsx)(r.p,{children:"Typewriter takes care of only triggering the entries that should be triggered.\nIf criteria are not met, the entries are not triggered."})}),"\n",(0,n.jsxs)(r.p,{children:["If you have a single ",(0,n.jsx)(r.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"val triggerEntry: TriggerEntry = ...\nval player: Player = ...\ntriggerEntry triggerAllFor player\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If you have list of ",(0,n.jsx)(r.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\ntriggerEntries triggerAllFor player\n"})}),"\n",(0,n.jsxs)(r.p,{children:["If you have a list of id's of ",(0,n.jsx)(r.code,{children:"TriggerEntry"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"val triggerEntryIds: List<String> = ...\nval player: Player = ...\ntriggerEntryIds triggerEntriesFor player\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Sometimes you don't want to trigger the entries when the player is in a dialogue.\nFor example, when the player is in a dialogue with a NPC, you don't want to trigger the first entry of the NPC again.\nYou expect when the player clicks on the NPC again, the next dialogue is triggered.\nTo facilitate this, you can use the ",(0,n.jsx)(r.code,{children:"startDialogueWithOrNextDialogue"})," function."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\ntriggerEntries startDialogueWithOrNextDialogue player\n"})}),"\n",(0,n.jsx)(r.p,{children:"Or if you want to trigger something completely different when the player is in a dialogue:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-kotlin",children:"val triggerEntries: List<TriggerEntry> = ...\nval player: Player = ...\nval customTrigger: EventTrigger = ...\ntriggerEntries.startDialogueWithOrTrigger(player, customTrigger)\n"})}),"\n",(0,n.jsx)(r.h2,{id:"custom-triggers",children:"Custom triggers"}),"\n",(0,n.jsxs)(r.p,{children:["Typewriter triggers based on the ",(0,n.jsx)(r.code,{children:"EventTrigger"})," interface.\nSo all the entries that are triggered are wrapped in a ",(0,n.jsx)(r.code,{children:"EntryTrigger"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["There are some triggers that are defined in Typewriter.\nThe two are ",(0,n.jsx)(r.code,{children:"SystemTrigger"})," and ",(0,n.jsx)(r.code,{children:"CinematicStartTrigger"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"systemtrigger",children:"SystemTrigger"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"SystemTrigger"}),"'s can be used to indicate to either the ",(0,n.jsx)(r.code,{children:"DialogueSequence"})," or the ",(0,n.jsx)(r.code,{children:"CinematicSequence"})," that something needs to happen."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SystemTrigger.DIALOGUE_NEXT"})," indicates that the next dialogue should be triggered."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SystemTrigger.DIALOGUE_END"})," indicates that the dialogue should end."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"SystemTrigger.CINEMATIC_END"})," indicates that the cinematic should end."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"cinematicstarttrigger",children:"CinematicStartTrigger"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"CinematicStartTrigger"}),"'s can be used to indicate to the ",(0,n.jsx)(r.code,{children:"CinematicSequence"})," that a cinematic should start."]}),"\n",(0,n.jsx)(r.p,{children:"It has several properties that can be set:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"pageId: String"})," is the id of the cinematic page that should be shown. This is required."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"triggers: List<String>"})," is a list of trigger id's that should be triggered when the cinematic is finished. This is optional."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"override: Boolean"})," indicates if the cinematic should override the current cinematic. This is optional and defaults to ",(0,n.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"simulate: Boolean"})," is used to run a cinematic for recording purposes. When this is enable it disables some entries from running. This is optional and defaults to ",(0,n.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"ignoreEntries: List<String>"})," is a list of entry id's that should not be triggered. This is optional."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"minEndTime: Optional<Int>"})," is the minimum amount of frames the cinematic should run. If the cinematic is shorter than this, it will be extended. This is optional."]}),"\n"]})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);