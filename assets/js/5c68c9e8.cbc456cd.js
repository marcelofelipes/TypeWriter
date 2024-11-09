"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["6253"],{91215:function(e,t,i){i.r(t),i.d(t,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>m,toc:()=>h,frontMatter:()=>c});var r=JSON.parse('{"id":"adapters/BasicAdapter/entries/action/remove_item","title":"Remove Item Action","description":"The Remove Item Action is an action that removes an item from the player\'s inventory.","source":"@site/versioned_docs/version-0.6.0/adapters/BasicAdapter/entries/action/remove_item.mdx","sourceDirName":"adapters/BasicAdapter/entries/action","slug":"/adapters/BasicAdapter/entries/action/remove_item","permalink":"/adapters/BasicAdapter/entries/action/remove_item","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.6.0/adapters/BasicAdapter/entries/action/remove_item.mdx","tags":[],"version":"0.6.0","lastUpdatedBy":"Gabber235","lastUpdatedAt":1731172471000,"frontMatter":{},"sidebar":"adapters","previous":{"title":"Random Trigger Gate","permalink":"/adapters/BasicAdapter/entries/action/random_trigger"},"next":{"title":"Message Action","permalink":"/adapters/BasicAdapter/entries/action/send_message"}}'),n=i("85893"),o=i("50065"),s=i("656"),a=i("49270"),d=i("31183");let c={},l="Remove Item Action",m={},h=[{value:"How could this be used?",id:"how-could-this-be-used",level:2},{value:"Fields",id:"fields",level:2}];function p(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.a)(),...e.components};return!s&&v("fields",!1),!s.CriteriaField&&v("fields.CriteriaField",!0),!s.EntryField&&v("fields.EntryField",!0),!s.ModifiersField&&v("fields.ModifiersField",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"remove-item-action",children:"Remove Item Action"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Remove Item Action"})," is an action that removes an item from the player's inventory.\nThis action provides you with the ability to remove items from the player's inventory in response to specific events."]}),"\n",(0,n.jsx)(a.Z,{type:"caution",children:(0,n.jsxs)(t.p,{children:['This action will try to remove "as much as possible" but does not verify if the player has enough items in their inventory.\nIf you want to guarantee that the player has enough items in their inventory, add an\n',(0,n.jsx)(d.Z,{to:"../fact/inventory_item_count_fact",children:"Inventory Item Count Fact"})," to the criteria."]})}),"\n",(0,n.jsx)(t.h2,{id:"how-could-this-be-used",children:"How could this be used?"}),"\n",(0,n.jsxs)(t.p,{children:["This can be used when ",(0,n.jsx)(t.code,{children:"giving"})," an NPC an item, and you want to remove the item from the player's inventory.\nOr when you want to remove a key from the player's inventory after they use it to unlock a door."]}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsx)(s.CriteriaField,{}),"\n",(0,n.jsx)(s.ModifiersField,{}),"\n",(0,n.jsx)(s.EntryField,{name:"Triggers",required:!0,multiple:!0}),"\n",(0,n.jsx)(s.EntryField,{name:"Item",required:!0,children:(0,n.jsx)(t.p,{children:"The item to remove."})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function v(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);