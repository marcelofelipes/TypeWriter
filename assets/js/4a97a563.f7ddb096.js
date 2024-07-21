"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73201],{63217:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=e(74848),n=e(28453),d=e(50494),r=e(6178);e(14783);const s={},l="In Dialogue Activity",c={id:"adapters/EntityAdapter/entries/activity/in_dialogue_activity",title:"In Dialogue Activity",description:"The InDialogueActivityEntry is an activity that activates child activities when a player is in a dialogue with the NPC.",source:"@site/docs/adapters/EntityAdapter/entries/activity/in_dialogue_activity.mdx",sourceDirName:"adapters/EntityAdapter/entries/activity",slug:"/adapters/EntityAdapter/entries/activity/in_dialogue_activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/in_dialogue_activity",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/adapters/EntityAdapter/entries/activity/in_dialogue_activity.mdx",tags:[],version:"current",frontMatter:{},sidebar:"adapters",previous:{title:"Game Time Activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/game_time_activity"},next:{title:"Look Close Activity",permalink:"/beta/adapters/EntityAdapter/entries/activity/look_close_activity"}},o={},h=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function u(i){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.R)(),...i.components};return d||p("fields",!1),d.EntryField||p("fields.EntryField",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"in-dialogue-activity",children:"In Dialogue Activity"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"InDialogueActivityEntry"})," is an activity that activates child activities when a player is in a dialogue with the NPC."]}),"\n",(0,a.jsx)(t.p,{children:"The activity will only activate when the player is in a dialogue with the NPC."}),"\n",(0,a.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,a.jsx)(t.p,{children:"This can be used to stop a npc from moving when a player is in a dialogue with it."}),"\n",(0,a.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(d.EntryField,{name:"Dialogue Idle Duration",required:!0,duration:!0,children:[(0,a.jsx)(t.p,{children:"The duration a player can be idle in the same dialogue before the activity deactivates."}),(0,a.jsx)(t.p,{children:"When set to 0, it won't use the timer."}),(0,a.jsx)(r.A,{type:"info",children:(0,a.jsx)(t.p,{children:"When the dialogue priority is higher than this activity's priority, this timer will be ignored.\nAnd will only exit when the dialogue is finished."})})]}),"\n",(0,a.jsx)(d.EntryField,{name:"Talking Activity",required:!0,children:(0,a.jsx)(t.p,{children:"The activity that will be used when the npc is in a dialogue"})}),"\n",(0,a.jsx)(d.EntryField,{name:"Idle Activity",required:!0,children:(0,a.jsx)(t.p,{children:"The activity that will be used when the npc is not in a dialogue"})})]})}function y(i={}){const{wrapper:t}={...(0,n.R)(),...i.components};return t?(0,a.jsx)(t,{...i,children:(0,a.jsx)(u,{...i})}):u(i)}function p(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);