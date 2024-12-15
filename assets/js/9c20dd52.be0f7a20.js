"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49836],{70024:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>u});let t=JSON.parse('{"id":"develop/adapters/api-changes/0.5.0","title":"All api changes to 0.5.0","description":"This document lists all the API changes introduced in version 0.5.0 of the TypeWriter plugin. If you are upgrading from an older version, please read this document before upgrading.","source":"@site/versioned_docs/version-0.5.1/develop/02-adapters/06-api-changes/0.5.0.mdx","sourceDirName":"develop/02-adapters/06-api-changes","slug":"/develop/adapters/api-changes/0.5.0","permalink":"/0.5.1/develop/adapters/api-changes/0.5.0","draft":false,"unlisted":false,"editUrl":"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.5.1/develop/02-adapters/06-api-changes/0.5.0.mdx","tags":[],"version":"0.5.1","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734272886000,"frontMatter":{},"sidebar":"develop","previous":{"title":"API Changes","permalink":"/0.5.1/develop/adapters/api-changes/"}}');var a=r(74848),l=r(28453),i=r(53720),s=r(5400);let o={},c="All api changes to 0.5.0",d={},u=[{value:"New type: Ref",id:"new-type-ref",level:2},{value:"Change to facts interface",id:"change-to-facts-interface",level:2},{value:"Entry Icon Changes",id:"entry-icon-changes",level:2}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"all-api-changes-to-050",children:"All api changes to 0.5.0"})}),"\n",(0,a.jsxs)(n.p,{children:["This document lists all the API changes introduced in version ",(0,a.jsx)(n.code,{children:"0.5.0"})," of the TypeWriter plugin. If you are upgrading from an older version, please read this document before upgrading."]}),"\n",(0,a.jsx)(n.h2,{id:"new-type-ref",children:"New type: Ref"}),"\n",(0,a.jsx)(n.p,{children:"To streamline the api more, I created a new type called Ref.\nIt provides a much nicer api for referencing entries."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(s.A,{value:"old",label:"Old",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'class ExampleEntry(\n    // ...\n    override val triggers: List<String> = emptyList(),\n    @EntryIdentifier(OtherEntry::class)\n    val identifier: String = "",\n    // ...\n) : TriggerableEntry\n'})}),(0,a.jsx)(n.p,{children:"Getting entry:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:"val otherEntry = Query.findById<OtherEntry>(entry.identifier)\n"})})]}),(0,a.jsxs)(s.A,{value:"new",label:"New",default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:"class ExampleEntry(\n    // ...\n    override val triggers: List<Ref<TriggerableEntry>> = emptyList(),\n    val identifier: Ref<OtherEntry> = emptyRef(),\n    // ...\n) : TriggerableEntry\n"})}),(0,a.jsx)(n.p,{children:"Getting entry:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:"val otherEntry = entry.identifier.get()\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"change-to-facts-interface",children:"Change to facts interface"}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.code,{children:"Facts"})," can now be applied to groups of players, the ",(0,a.jsx)(n.code,{children:"read"})," function no longer works.\nA simple migration is to use the ",(0,a.jsx)(n.code,{children:"readSinglePlayer"})," function instead."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"old",label:"Old",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'class InventoryItemCountFact(\n    override val id: String = "",\n    override val name: String = "",\n    override val comment: String = "",\n    @Help("The item to check for.")\n    val item: Item = Item.Empty,\n) : ReadableFactEntry {\n    override fun read(playerId: UUID): Fact {\n        val player = server.getPlayer(playerId) ?: return Fact(id, 0)\n        val amount = player.inventory.contents.filterNotNull().filter { item.isSameAs(player, it) }.sumOf { it.amount }\n        return Fact(id, amount)\n    }\n}\n'})})}),(0,a.jsx)(s.A,{value:"new",label:"New",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'class InventoryItemCountFact(\n    override val id: String = "",\n    override val name: String = "",\n    override val comment: String = "",\n    override val group: Ref<GroupEntry> = emptyRef(),\n    @Help("The item to check for.")\n    val item: Item = Item.Empty,\n) : ReadableFactEntry {\n    override fun readSinglePlayer(player: Player): FactData {\n        val amount = player.inventory.contents.filterNotNull().filter { item.isSameAs(player, it) }.sumOf { it.amount }\n        return FactData(amount)\n    }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"entry-icon-changes",children:"Entry Icon Changes"}),"\n",(0,a.jsxs)(n.p,{children:["The icon set has changed from only allowing Font Awesome icons, to allowing any icon from ",(0,a.jsx)(n.a,{href:"https://iconify.design/",children:"Iconify"}),".\nThis means that entries can use any icon from ",(0,a.jsx)(n.a,{href:"https://iconify.design/",children:"Iconify"}),".\nSince the icon set is so big, there no longer is a nice ",(0,a.jsx)(n.code,{children:"Icon"})," class. Instead, you just pass the icon name to the icon parameter."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(s.A,{value:"old",label:"Old",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'@Entry("add_potion_effect", "Add a potion effect to the player", Colors.RED, Icons.FLASK_VIAL)\n'})})}),(0,a.jsx)(s.A,{value:"new",label:"New",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:"showLineNumbers",children:'@Entry("add_potion_effect", "Add a potion effect to the player", Colors.RED, "fa6-solid:flask-vial")\n'})})})]})]})}function p(e={}){let{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5400:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(74848);r(96540);var a=r(34164);function l(e){let{children:n,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)("tabItem_Ymn6",l),hidden:r,children:n})}},53720:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(74848),a=r(96540),l=r(34164),i=r(65697),s=r(56347),o=r(56650),c=r(9226),d=r(34387),u=r(10426);function h(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var m=r(20162);function f(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:o}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),u=e=>{let n=e.currentTarget,r=o[c.indexOf(n)].value;r!==a&&(d(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{let r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},n),children:o.map(e=>{let{value:n,label:r,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...i,className:(0,l.A)("tabs__item","tabItem_LNqP",i?.className,{"tabs__item--active":a===n}),children:r??n},n)})})}function g(e){let{lazy:n,children:r,selectedValue:i}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,l=function(e){let{values:n,children:r}=e;return(0,a.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}});return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[i,m]=(0,a.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:l})),[f,g]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,a.useCallback)(e=>{if(!l)return;let n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})},[l,t])]}({queryString:r,groupId:t}),[v,y]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,l]=(0,u.Dv)(r);return[t,(0,a.useCallback)(e=>{r&&l.set(e)},[r,l])]}({groupId:t}),b=(()=>{let e=f??v;return p({value:e,tabValues:l})?e:null})();return(0,o.A)(()=>{b&&m(b)},[b]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:l}))throw Error(`Can't select invalid tab value=${e}`);m(e),g(e),y(e)},[g,y,l]),tabValues:l}}(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(g,{...n,...e})]})}function y(e){let n=(0,m.A)();return(0,t.jsx)(v,{...e,children:h(e.children)},String(n))}}}]);