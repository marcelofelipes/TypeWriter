"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["36404"],{29433:function(e,t,i){i.r(t),i.d(t,{metadata:()=>a,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"adapters/EntityAdapter/entries/activity/player_close_by_activity","title":"Player Close By Activity","description":"The PlayerCloseByActivityEntry is an activity that activates child activities when a viewer is close by.","source":"@site/versioned_docs/version-0.5.1/adapters/EntityAdapter/entries/activity/player_close_by_activity.mdx","sourceDirName":"adapters/EntityAdapter/entries/activity","slug":"/adapters/EntityAdapter/entries/activity/player_close_by_activity","permalink":"/adapters/EntityAdapter/entries/activity/player_close_by_activity","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/adapters/EntityAdapter/entries/activity/player_close_by_activity.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"Marten Mrfc","lastUpdatedAt":1730745397000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Patrol Activity","permalink":"/adapters/EntityAdapter/entries/activity/patrol_activity"},"next":{"title":"Random Look Activity","permalink":"/adapters/EntityAdapter/entries/activity/random_look_activity"}}'),r=i("85893"),n=i("50065"),s=i("656");i("49270"),i("31183");let l={},d="Player Close By Activity",c={},o=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function y(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.a)(),...e.components};return!s&&p("fields",!1),!s.EntryField&&p("fields.EntryField",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"player-close-by-activity",children:"Player Close By Activity"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"PlayerCloseByActivityEntry"})," is an activity that activates child activities when a viewer is close by."]}),"\n",(0,r.jsx)(t.p,{children:"The activity will only activate when the viewer is within the defined range."}),"\n",(0,r.jsx)(t.p,{children:"When the maximum idle duration is reached, the activity will deactivate.\nIf the maximum idle duration is set to 0, then it won't use the timer."}),"\n",(0,r.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,r.jsx)(t.p,{children:"When the player has to follow the NPC and walks away, let the NPC wander around (or stand still) around the point the player walked away. When the player returns, resume its path."}),"\n",(0,r.jsx)(t.p,{children:"When the npc is walking, and a player comes in range Stand still."}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(s.EntryField,{name:"Range",required:!0,children:(0,r.jsx)(t.p,{children:"The range in which the player has to be close by to activate the activity."})}),"\n",(0,r.jsx)(s.EntryField,{name:"Max Idle Duration",required:!0,duration:!0,children:(0,r.jsx)(t.p,{children:"The maximum duration a player can be idle in the same range before the activity deactivates."})}),"\n",(0,r.jsx)(s.EntryField,{name:"Close By Activity",required:!0,children:(0,r.jsx)(t.p,{children:"The activity that will be used when there is a player close by."})}),"\n",(0,r.jsx)(s.EntryField,{name:"Idle Activity",required:!0,children:(0,r.jsx)(t.p,{children:"The activity that will be used when there is no player close by."})})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}function p(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);