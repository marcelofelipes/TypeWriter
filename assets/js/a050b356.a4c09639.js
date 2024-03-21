"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8775],{27538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var i=t(74848),s=t(28453),r=(t(96540),t(32252)),o=t(55597),l=t(28774);function a(){const e=(0,r.r)().label;return"Beta\u26a0\ufe0f"===e?(0,i.jsxs)("span",{children:["the ",(0,i.jsx)("b",{children:"Beta"})," version via",(0,i.jsxs)(l.A,{to:"https://modrinth.com/plugin/typewriter/versions?c=beta",children:[" ","this Modrinth link"]})]}):(0,o.g1)().preferredVersion.label===e?(0,i.jsxs)("span",{children:["The ",(0,i.jsx)("b",{children:"Latest"})," version via",(0,i.jsxs)(l.A,{to:`https://modrinth.com/plugin/typewriter/version/${encodeURIComponent(e)}`,children:[" ","this Modrinth link"]})]}):(0,i.jsxs)("span",{children:["The ",(0,i.jsx)("b",{children:"Outdated"})," version ",e," via",(0,i.jsxs)(l.A,{to:`https://modrinth.com/plugin/typewriter/version/${encodeURIComponent(e)}`,children:[" ","this Modrinth link"]})]})}const d={},c="Installation Guide",h={id:"docs/getting-started/installation",title:"Installation Guide",description:"TypeWriter only works on Paper servers. It will not work on Spigot or Bukkit servers.",source:"@site/docs/docs/02-getting-started/01-installation.mdx",sourceDirName:"docs/02-getting-started",slug:"/docs/getting-started/installation",permalink:"/TypeWriter/beta/docs/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/gabber235/TypeWriter/tree/develop/documentation/docs/docs/02-getting-started/01-installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/TypeWriter/beta/docs/getting-started/"},next:{title:"First Interaction",permalink:"/TypeWriter/beta/docs/creating-stories/first-story/interactions"}},p={},u=[{value:"Installing the TypeWriter Plugin",id:"installing-the-typewriter-plugin",level:2},{value:"Plugin Installation",id:"plugin-installation",level:3},{value:"Handling Dependencies",id:"handling-dependencies",level:3},{value:"Basic Adapter",id:"basic-adapter",level:3},{value:"Configuring the Web Panel",id:"configuring-the-web-panel",level:2},{value:"Enabling the Web Panel",id:"enabling-the-web-panel",level:3},{value:"Connecting to the Web Panel",id:"connecting-to-the-web-panel",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["TypeWriter only works on ",(0,i.jsx)(n.strong,{children:"Paper"})," servers. It will not work on Spigot or Bukkit servers."]})}),"\n",(0,i.jsx)(n.h2,{id:"installing-the-typewriter-plugin",children:"Installing the TypeWriter Plugin"}),"\n",(0,i.jsx)(n.p,{children:"Ensure a smooth installation process for the TypeWriter plugin on your Paper Minecraft server by following these steps:"}),"\n",(0,i.jsx)(n.h3,{id:"plugin-installation",children:"Plugin Installation"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Start by downloading ",(0,i.jsx)(a,{}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Place the downloaded plugin into your server's ",(0,i.jsx)(n.code,{children:"plugins"})," folder."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"handling-dependencies",children:"Handling Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"TypeWriter relies on additional plugins that need to be installed for proper functioning."}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Download and add TypeWriter's dependency, ",(0,i.jsx)(n.a,{href:"https://modrinth.com/plugin/packetevents/versions?l=paper",children:"PacketEvents"}),", to your ",(0,i.jsx)(n.code,{children:"plugins"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Verify that you ",(0,i.jsx)(n.strong,{children:"don't"})," have the ",(0,i.jsx)(n.a,{href:"https://www.spigotmc.org/resources/interactivechat-show-items-inventory-in-chat-custom-chat-keywords-bungee-velocity-support.75870/",children:"InteractiveChat"})," or ",(0,i.jsx)(n.a,{href:"https://polymart.org/resource/eco.773",children:"Eco"})," plugin installed, as it may cause conflicts with TypeWriter."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"basic-adapter",children:"Basic Adapter"}),"\n",(0,i.jsx)(n.p,{children:"The TypeWriter offers various adapters for customization, but it's crucial to have the basic adapter installed."}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsxs)(n.li,{children:["Download the latest basic adapter from ",(0,i.jsx)(a,{})," and add it to the ",(0,i.jsx)(n.code,{children:"plugins/TypeWriter/adapters"})," folder."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive list of available adapters, refer to the ",(0,i.jsx)(n.a,{href:"../../adapters",children:"adapters section"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"With all components in place, restart your Minecraft server to complete the TypeWriter installation."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Out of Sync",type:"danger",children:(0,i.jsxs)(n.p,{children:["When updating the plugin, it's crucial to ",(0,i.jsx)(n.strong,{children:"always"})," install the corresponding adapters for that update. Failure to match the versions of the adapter and plugin can result in the plugin not functioning correctly!"]})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-web-panel",children:"Configuring the Web Panel"}),"\n",(0,i.jsx)(n.admonition,{title:"External server providers",type:"caution",children:(0,i.jsxs)(n.p,{children:["Typewriter's web panel does ",(0,i.jsx)(n.strong,{children:"not"})," support external server providers such as Minehut, Aternos, or Apex. You can still use everything else in Typewriter. It is possible to use the panel still by setting up a local server with Typewriter installed. For more information, please create a question in our ",(0,i.jsx)(n.a,{href:"https://discord.gg/p7WH9VvdMQ",children:"Discord"}),"."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Resource consumption",type:"info",children:(0,i.jsx)(n.p,{children:"Please note that the web panel and websocket use precious resources of your server, and it is best to host the panel on your development server instead of on a production server."})}),"\n",(0,i.jsx)(n.p,{children:"Now that we have installed the plugin, we need to configure the web panel."}),"\n",(0,i.jsxs)(n.p,{children:["The web panel needs two ports to be open. These can be changed, but it does need at least two new ports to be open. The\ndefault ports are ",(0,i.jsx)(n.code,{children:"8080"})," and ",(0,i.jsx)(n.code,{children:"9092"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To enable the web panel, please follow these steps:"}),"\n",(0,i.jsx)(n.h3,{id:"enabling-the-web-panel",children:"Enabling the Web Panel"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:"plugins/Typewriter/config.yml"})," file."]}),"\n",(0,i.jsx)(n.li,{children:"Change the settings to the following:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="plugins/Typewriter/config.yml"',children:'# Whether the web panel and web sockets are enabled.\nenabled: true\n# The hostname of the server. CHANGE THIS to your server\'s IP.\nhostname: "127.0.0.1"\n# The panel uses web sockets to sync changes to the server and allows you to work with multiple people at the same time.\nwebsocket:\n  # The port of the websocket server. Make sure this port is open.\n  port: 9092\n  # The authentication that is used. Leave unchanged if you don\'t know what you are doing.\n  auth: "session"\npanel:\n  # The panel can be disabled while the sockets are still open. Only disable this if you know what you are doing.\n  # If the web sockets are disabled, then the panel will always be disabled.\n  enabled: true\n  # The port of the web panel. Make sure this port is open.\n  port: 8080\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Please use ",(0,i.jsx)(n.a,{href:"https://portchecker.co/",children:"portchecker"})," to check if your ports are open. If not please open the ports yourself or contact your hosting."]}),"\n",(0,i.jsx)(n.li,{children:"Restart your server to complete the installation."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-to-the-web-panel",children:"Connecting to the Web Panel"}),"\n",(0,i.jsx)(n.p,{children:"To connect to the web panel, follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the command ",(0,i.jsx)(n.code,{children:"/typewriter connect"})," in-game. This will provide you with a link to access the web panel."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"connect-command",src:t(11510).A+"",width:"352",height:"42"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Open the link in your preferred web browser."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"connect-book",src:t(55143).A+"",width:"445",height:"545"})}),"\n",(0,i.jsx)(n.p,{children:"Once you've successfully connected, you can use the web panel to create and configure quests, NPC dialogues, and more. The panel also allows you to view and edit your server's existing player interactions."}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.p,{children:["Encountering problems? Check out the ",(0,i.jsx)(n.a,{href:"../troubleshooting",children:"Troubleshooting"})," page for solutions to common issues.\nIf you still have problems, feel free to ask for help in the ",(0,i.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,i.jsxs)(n.p,{children:["Try creating your first interaction by following the ",(0,i.jsx)(n.a,{href:"/TypeWriter/beta/docs/creating-stories/first-story/interactions",children:"Interactions"})," guide. If you have any questions, feel free to ask them in the ",(0,i.jsx)(n.a,{href:"https://discord.gg/HtbKyuDDBw",children:"Discord"}),"."]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},55143:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connect-book-1c4fb811f5ead6dfbb164e5c7dc22889.png"},11510:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/connect-command-00f3ad6eb18bd0022adde6278b4cfab7.gif"}}]);