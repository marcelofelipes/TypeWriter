(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67570],{3276:(e,t,r)=>{let o,s,n;var a=Object.create,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))h.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(o=i(t,s))||o.enumerable});return e},y=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>P}),e.exports=c(l({},"__esModule",{value:!0}),m);var f=(n=null!=(o=r(96540))?a(u(o)):{},c(!s&&o&&o.__esModule?n:l(n,"default",{value:o,enumerable:!0}),o)),b=r(75635),g=r(50327);class P extends f.Component{constructor(){super(...arguments),y(this,"callPlayer",b.callPlayer),y(this,"duration",null),y(this,"currentTime",null),y(this,"secondsLoaded",null),y(this,"mute",()=>{}),y(this,"unmute",()=>{}),y(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,b.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((e,t)=>{this.currentTime=e,this.duration=t}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){let{url:e,config:t}=this.props,r=e.match(g.MATCH_URL_MIXCLOUD)[1],o=(0,b.queryString)({...t.options,feed:`/${r}/`});return f.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${o}`,frameBorder:"0",allow:"autoplay"})}}y(P,"displayName","Mixcloud"),y(P,"canPlay",g.canPlay.mixcloud),y(P,"loopOnEnded",!0)}}]);