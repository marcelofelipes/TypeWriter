"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27390],{16787:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=r(74848),n=r(28453);const s={},o="CustomTriggeringActionEntry",a={id:"develop/adapters/entries/trigger/custom_triggering_action",title:"CustomTriggeringActionEntry",description:"The CustomTriggeringActionEntry is a specialised verion of the ActionEntry that allows you to trigger the next entries when you want. Or just call a subset of entries.",source:"@site/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/custom_triggering_action.mdx",sourceDirName:"develop/02-adapters/03-entries/trigger",slug:"/develop/adapters/entries/trigger/custom_triggering_action",permalink:"/0.4.2/develop/adapters/entries/trigger/custom_triggering_action",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/versioned_docs/version-0.4.2/develop/02-adapters/03-entries/trigger/custom_triggering_action.mdx",tags:[],version:"0.4.2",lastUpdatedBy:"Marten Mrfc",lastUpdatedAt:1725553323e3,frontMatter:{},sidebar:"develop",previous:{title:"ActionEntry",permalink:"/0.4.2/develop/adapters/entries/trigger/action"},next:{title:"DialogueEntry",permalink:"/0.4.2/develop/adapters/entries/trigger/dialogue"}},g={},d=[{value:"Usage",id:"usage",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"customtriggeringactionentry",children:"CustomTriggeringActionEntry"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"CustomTriggeringActionEntry"})," is a specialised verion of the ",(0,i.jsx)(t.code,{children:"ActionEntry"})," that allows you to trigger the next entries when you want. Or just call a subset of entries."]}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-kotlin",children:'@Entry("example_custom_triggering_action", "An example custom triggering entry.", Colors.RED, Icons.SOLID_HOURGLASS_HALF)\nclass ExampleCustomTriggeringActionEntry(\n    override val id: String = "",\n    override val name: String = "",\n    override val criteria: List<Criteria> = emptyList(),\n    override val modifiers: List<Modifier> = emptyList(),\n    @SerializedName("triggers")\n    override val customTriggers: List<String> = emptyList(),\n) : CustomTriggeringActionEntry {\n    override fun execute(player: Player) {\n        super.execute(player) // This will apply the modifiers.\n        player.triggerCustomTriggers() // Can be called later to trigger the next entries.\n    }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);