"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([["96912"],{42752:function(n,e,r){r.d(e,{bK:()=>n5});var t,o=r("82633"),i=r("19675"),u=r("29072"),a=r("96498"),d=r("71134"),f=r("97345"),c=r("40882"),s=r("50043");class v{constructor(){var n={};n._next=n._prev=n,this._sentinel=n}dequeue(){var n=this._sentinel,e=n._prev;if(e!==n)return g(e),e}enqueue(n){var e=this._sentinel;n._prev&&n._next&&g(n),n._next=e._next,e._next._prev=n,e._next=n,n._prev=e}toString(){for(var n=[],e=this._sentinel,r=e._prev;r!==e;)n.push(JSON.stringify(r,h)),r=r._prev;return"["+n.join(", ")+"]"}}function g(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function h(n,e){if("_next"!==n&&"_prev"!==n)return e}var l=a.Z(1);function Z(n,e,r,t,i){var u=i?[]:void 0;return o.Z(n.inEdges(t.v),function(t){var o=n.edge(t),a=n.node(t.v);i&&u.push({v:t.v,w:t.w}),a.out-=o,p(e,r,a)}),o.Z(n.outEdges(t.v),function(t){var o=n.edge(t),i=t.w,u=n.node(i);u.in-=o,p(e,r,u)}),n.removeNode(t.v),u}function p(n,e,r){r.out?r.in?n[r.out-r.in+e].enqueue(r):n[n.length-1].enqueue(r):n[0].enqueue(r)}var w=r("17747"),m=r("74722"),b=r("87317"),y=r("2147");let k=function(n,e,r){for(var t=-1,o=n.length;++t<o;){var i=n[t],u=e(i);if(null!=u&&(void 0===a?u==u&&!(0,y.Z)(u):r(u,a)))var a=u,d=i}return d},x=function(n,e){return n>e};var E=r("94675");let N=function(n){return n&&n.length?k(n,E.Z,x):void 0},_=function(n){var e=null==n?0:n.length;return e?n[e-1]:void 0};var I=r("49790"),R=r("50929"),M=r("36296");let T=function(n,e){var r={};return e=(0,M.Z)(e,3),(0,R.Z)(n,function(n,t,o){(0,I.Z)(r,t,e(n,t,o))}),r};var C=r("61925");let L=function(n,e){return n<e},S=function(n){return n&&n.length?k(n,E.Z,L):void 0};var O=r("52434");let P=function(){return O.Z.Date.now()};function j(n,e,r,t){var o;do o=i.Z(t);while(n.hasNode(o));return r.dummy=e,n.setNode(o,r),o}function F(n){var e=new s.k({multigraph:n.isMultigraph()}).setGraph(n.graph());return o.Z(n.nodes(),function(r){!n.children(r).length&&e.setNode(r,n.node(r))}),o.Z(n.edges(),function(r){e.setEdge(r,n.edge(r))}),e}function G(n,e){var r,t,o=n.x,i=n.y,u=e.x-o,a=e.y-i,d=n.width/2,f=n.height/2;if(!u&&!a)throw Error("Not possible to find intersection inside of the rectangle");return Math.abs(a)*d>Math.abs(u)*f?(a<0&&(f=-f),r=f*u/a,t=f):(u<0&&(d=-d),r=d,t=d*a/u),{x:o+r,y:i+t}}function V(n){var e=f.Z(c.Z(q(n)+1),function(){return[]});return o.Z(n.nodes(),function(r){var t=n.node(r),o=t.rank;!C.Z(o)&&(e[o][t.order]=r)}),e}function B(n,e,r,t){var o={width:0,height:0};return arguments.length>=4&&(o.rank=r,o.order=t),j(n,"border",o,e)}function q(n){return N(f.Z(n.nodes(),function(e){var r=n.node(e).rank;if(!C.Z(r))return r}))}function Y(n,e){var r=P();try{return e()}finally{console.log(n+" time: "+(P()-r)+"ms")}}function z(n,e){return e()}function A(n,e,r,t,o,i){var u=o[e][i-1],a=j(n,"border",{width:0,height:0,rank:i,borderType:e},r);o[e][i]=a,n.setParent(a,t),u&&n.setEdge(u,a,{weight:1})}function D(n){o.Z(n.nodes(),function(e){$(n.node(e))}),o.Z(n.edges(),function(e){$(n.edge(e))})}function $(n){var e=n.width;n.width=n.height,n.height=e}function J(n){n.y=-n.y}function K(n){var e=n.x;n.x=n.y,n.y=e}let H=function(n,e){return n&&n.length?k(n,(0,M.Z)(e,2),L):void 0};function Q(n){var e={};o.Z(n.sources(),function r(t){var o=n.node(t);if(u.Z(e,t))return o.rank;e[t]=!0;var i=S(f.Z(n.outEdges(t),function(e){return r(e.w)-n.edge(e).minlen}));return(i===Number.POSITIVE_INFINITY||null==i)&&(i=0),o.rank=i})}function U(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function W(n){var e,r,t=new s.k({directed:!1}),i=n.nodes()[0],u=n.nodeCount();for(t.setNode(i,{});function(n,e){return o.Z(n.nodes(),function r(t){o.Z(e.nodeEdges(t),function(o){var i=o.v,u=t===i?o.w:i;!n.hasNode(u)&&!U(e,o)&&(n.setNode(u,{}),n.setEdge(t,u,{}),r(u))})}),n.nodeCount()}(t,n)<u;)e=function(n,e){return H(e.edges(),function(r){if(n.hasNode(r.v)!==n.hasNode(r.w))return U(e,r)})}(t,n),r=t.hasNode(e.v)?U(n,e):-U(n,e),function(n,e,r){o.Z(n.nodes(),function(n){e.node(n).rank+=r})}(t,n,r);return t}var X=r("71581"),nn=r("87074"),ne=r("81208"),nr=r("29116");let nt=function(n){var e=(0,nr.Z)(n),r=e%1;return e==e?r?e-r:e:0};var no=Math.max;var ni=(t=function(n,e,r){var t=null==n?0:n.length;if(!t)return -1;var o=null==r?0:nt(r);return o<0&&(o=no(t+o,0)),(0,ne.Z)(n,(0,M.Z)(e,3),o)},function(n,e,r){var o=Object(n);if(!(0,X.Z)(n)){var i=(0,M.Z)(e,3);n=(0,nn.Z)(n),e=function(n){return i(o[n],n,o)}}var u=t(n,e,r);return u>-1?o[i?n[u]:u]:void 0}),nu=r("89023");a.Z(1),a.Z(1);var na=r("22769"),nd=r("23302"),nf=r("65182"),nc=r("31739"),ns=r("75887"),nv=(0,r("11961").Z)("length"),ng=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),nh="\ud800-\udfff",nl="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",nZ="\ud83c[\udffb-\udfff]",np="[^"+nh+"]",nw="(?:\ud83c[\udde6-\uddff]){2}",nm="[\ud800-\udbff][\udc00-\udfff]",nb="(?:"+nl+"|"+nZ+")?",ny="[\\ufe0e\\ufe0f]?",nk="(?:\\u200d(?:"+[np,nw,nm].join("|")+")"+ny+nb+")*",nx=RegExp(nZ+"(?="+nZ+")|"+("(?:"+[np+nl+"?",nl,nw,nm,"["+nh+"]"].join("|")+")")+(ny+nb+nk),"g");let nE=function(n){for(var e=nx.lastIndex=0;nx.test(n);)++e;return e},nN=function(n){var e;return(e=n,ng.test(e))?nE(n):nv(n)},n_=function(n){if(null==n)return 0;if((0,X.Z)(n)){var e;return"string"==typeof(e=n)||!(0,nc.Z)(e)&&(0,ns.Z)(e)&&"[object String]"==(0,nf.Z)(e)?nN(n):n.length}var r=(0,nd.Z)(n);return"[object Map]"==r||"[object Set]"==r?n.size:(0,na.Z)(n).length};(function(n){var e={},r={},t=[];if(o.Z(n.sinks(),function i(a){if(u.Z(r,a))throw new nI;!u.Z(e,a)&&(r[a]=!0,e[a]=!0,o.Z(n.predecessors(a),i),delete r[a],t.push(a))}),n_(e)!==n.nodeCount())throw new nI;return t}).CycleException=nI;function nI(){}function nR(n,e,r){!nc.Z(e)&&(e=[e]);var t=(n.isDirected()?n.successors:n.neighbors).bind(n),i=[],a={};return o.Z(e,function(e){if(!n.hasNode(e))throw Error("Graph does not have node: "+e);(function n(e,r,t,i,a,d){!u.Z(i,r)&&(i[r]=!0,!t&&d.push(r),o.Z(a(r),function(r){n(e,r,t,i,a,d)}),t&&d.push(r))})(n,e,"post"===r,a,t,i)}),i}nI.prototype=Error();function nM(n){e=n,r=new s.k().setGraph(e.graph()),o.Z(e.nodes(),function(n){r.setNode(n,e.node(n))}),o.Z(e.edges(),function(n){var t=r.edge(n.v,n.w)||{weight:0,minlen:1},o=e.edge(n);r.setEdge(n.v,n.w,{weight:t.weight+o.weight,minlen:Math.max(t.minlen,o.minlen)})}),Q(n=r);var e,r,t,i,u=W(n);for(nL(u),nT(u,n);t=nS(u);)i=nO(u,n,t),nP(u,n,t,i)}function nT(n,e){var r=nR(n,n.nodes(),"post");r=r.slice(0,r.length-1),o.Z(r,function(r){(function(n,e,r){var t=n.node(r).parent;n.edge(r,t).cutvalue=nC(n,e,r)})(n,e,r)})}r("70941"),nM.initLowLimValues=nL,nM.initCutValues=nT,nM.calcCutValue=nC,nM.leaveEdge=nS,nM.enterEdge=nO,nM.exchangeEdges=nP;function nC(n,e,r){var t=n.node(r).parent,i=!0,u=e.edge(r,t),a=0;return!u&&(i=!1,u=e.edge(t,r)),a=u.weight,o.Z(e.nodeEdges(r),function(o){var u=o.v===r,d=u?o.w:o.v;if(d!==t){var f=u===i,c=e.edge(o).weight;if(a+=f?c:-c,function(n,e,r){return n.hasEdge(e,r)}(n,r,d)){var s=n.edge(r,d).cutvalue;a+=f?-s:s}}}),a}function nL(n,e){arguments.length<2&&(e=n.nodes()[0]),function n(e,r,t,i,a){var d=t,f=e.node(i);return r[i]=!0,o.Z(e.neighbors(i),function(o){!u.Z(r,o)&&(t=n(e,r,t,o,i))}),f.low=d,f.lim=t++,a?f.parent=a:delete f.parent,t}(n,{},1,e)}function nS(n){return ni(n.edges(),function(e){return n.edge(e).cutvalue<0})}function nO(n,e,r){var t=r.v,o=r.w;!e.hasEdge(t,o)&&(t=r.w,o=r.v);var i=n.node(t),u=n.node(o),a=i,d=!1;return i.lim>u.lim&&(a=u,d=!0),H(nu.Z(e.edges(),function(e){return d===nj(n,n.node(e.v),a)&&d!==nj(n,n.node(e.w),a)}),function(n){return U(e,n)})}function nP(n,e,r,t){var i=r.v,u=r.w;n.removeEdge(i,u),n.setEdge(t.v,t.w,{}),nL(n),nT(n,e),function(n,e){var r=ni(n.nodes(),function(n){return!e.node(n).parent}),t=nR(n,r,"pre");t=t.slice(1),o.Z(t,function(r){var t=n.node(r).parent,o=e.edge(r,t),i=!1;!o&&(o=e.edge(t,r),i=!0),e.node(r).rank=e.node(t).rank+(i?o.minlen:-o.minlen)})}(n,e)}function nj(n,e,r){return r.low<=e.lim&&e.lim<=r.lim}var nF=Q;function nG(n){nM(n)}var nV=r("96433"),nB=r("81748"),nq=r("92411"),nY=r("89774");let nz=function(n,e,r){for(var t=-1,o=n.length,i=e.length,u={};++t<o;){var a=t<i?e[t]:void 0;r(u,n[t],a)}return u};var nA=r("39446"),nD=r("96248"),n$=r("73722"),nJ=r("10301");let nK=function(n,e){var r=n.length;for(n.sort(e);r--;)n[r]=n[r].value;return n};var nH=r("44026");let nQ=function(n,e){if(n!==e){var r=void 0!==n,t=null===n,o=n==n,i=(0,y.Z)(n),u=void 0!==e,a=null===e,d=e==e,f=(0,y.Z)(e);if(!a&&!f&&!i&&n>e||i&&u&&d&&!a&&!f||t&&u&&d||!r&&d||!o)return 1;if(!t&&!i&&!f&&n<e||f&&r&&o&&!t&&!i||a&&r&&o||!u&&o||!d)return -1}return 0},nU=function(n,e,r){for(var t=-1,o=n.criteria,i=e.criteria,u=o.length,a=r.length;++t<u;){var d=nQ(o[t],i[t]);if(d){if(t>=a)return d;return d*("desc"==r[t]?-1:1)}}return n.index-e.index},nW=function(n,e,r){e=e.length?(0,nD.Z)(e,function(n){return(0,nc.Z)(n)?function(e){return(0,n$.Z)(e,1===n.length?n[0]:n)}:n}):[E.Z];var t=-1;return e=(0,nD.Z)(e,(0,nH.Z)(M.Z)),nK((0,nJ.Z)(n,function(n,r,o){return{criteria:(0,nD.Z)(e,function(e){return e(n)}),index:++t,value:n}}),function(n,e){return nU(n,e,r)})};var nX=r("53148"),n0=r("8417"),n1=(0,nX.Z)(function(n,e){if(null==n)return[];var r=e.length;return r>1&&(0,n0.Z)(n,e[0],e[1])?e=[]:r>2&&(0,n0.Z)(e[0],e[1],e[2])&&(e=[e[0]]),nW(n,(0,nA.Z)(e,1),[])});function n2(n,e,r){for(var t;e.length&&(t=_(e)).i<=r;)e.pop(),n.push(t.vs),r++;return r}function n7(n,e,r){return f.Z(e,function(e){var t,a,d,f,c;return t=n,a=e,d=r,f=function(n){for(var e;n.hasNode(e=i.Z("_root")););return e}(t),c=new s.k({compound:!0}).setGraph({root:f}).setDefaultNodeLabel(function(n){return t.node(n)}),o.Z(t.nodes(),function(n){var e=t.node(n),r=t.parent(n);(e.rank===a||e.minRank<=a&&a<=e.maxRank)&&(c.setNode(n),c.setParent(n,r||f),o.Z(t[d](n),function(e){var r=e.v===n?e.w:e.v,o=c.edge(r,n),i=C.Z(o)?0:o.weight;c.setEdge(r,n,{weight:t.edge(e).weight+i})}),u.Z(e,"minRank")&&c.setNode(n,{borderLeft:e.borderLeft[a],borderRight:e.borderRight[a]}))}),c})}function n3(n,e){o.Z(e,function(e){o.Z(e,function(e,r){n.node(e).order=r})})}var n4=r("93898"),n8=r("45467"),n9=r("40038");function n6(n,e,r){if(e>r){var t=e;e=r,r=t}var o=n[e];!o&&(n[e]=o={}),o[r]=!0}function n5(n,e){var r=e&&e.debugTiming?Y:z;r("layout",function(){var e=r("  buildLayoutGraph",function(){return function(n){var e=new s.k({multigraph:!0,compound:!0}),r=ef(n.graph());return e.setGraph(w.Z({},ee,ed(r,en),m.Z(r,er))),o.Z(n.nodes(),function(r){var t=ef(n.node(r));e.setNode(r,b.Z(ed(t,et),eo)),e.setParent(r,n.parent(r))}),o.Z(n.edges(),function(r){var t=ef(n.edge(r));e.setEdge(r,w.Z({},eu,ed(t,ei),m.Z(t,ea)))}),e}(n)});r("  runLayout",function(){(function(n,e){e("    makeSpaceForEdgeLabels",function(){(function(n){var e=n.graph();e.ranksep/=2,o.Z(n.edges(),function(r){var t=n.edge(r);t.minlen*=2,"c"!==t.labelpos.toLowerCase()&&("TB"===e.rankdir||"BT"===e.rankdir?t.width+=t.labeloffset:t.height+=t.labeloffset)})})(n)}),e("    removeSelfEdges",function(){(function(n){o.Z(n.edges(),function(e){if(e.v===e.w){var r=n.node(e.v);!r.selfEdges&&(r.selfEdges=[]),r.selfEdges.push({e:e,label:n.edge(e)}),n.removeEdge(e)}})})(n)}),e("    acyclic",function(){var e,r;r="greedy"===(e=n).graph().acyclicer?function(n,e){if(1>=n.nodeCount())return[];var r=function(n,e){var r=new s.k,t=0,i=0;o.Z(n.nodes(),function(n){r.setNode(n,{v:n,in:0,out:0})}),o.Z(n.edges(),function(n){var o=r.edge(n.v,n.w)||0,u=e(n);r.setEdge(n.v,n.w,o+u),i=Math.max(i,r.node(n.v).out+=u),t=Math.max(t,r.node(n.w).in+=u)});var u=c.Z(i+t+3).map(function(){return new v}),a=t+1;return o.Z(r.nodes(),function(n){p(u,a,r.node(n))}),{graph:r,buckets:u,zeroIdx:a}}(n,e||l),t=function(n,e,r){for(var t,o=[],i=e[e.length-1],u=e[0];n.nodeCount();){for(;t=u.dequeue();)Z(n,e,r,t);for(;t=i.dequeue();)Z(n,e,r,t);if(n.nodeCount()){for(var a=e.length-2;a>0;--a)if(t=e[a].dequeue()){o=o.concat(Z(n,e,r,t,!0));break}}}return o}(r.graph,r.buckets,r.zeroIdx);return d.Z(f.Z(t,function(e){return n.outEdges(e.v,e.w)}))}(e,function(n){return function(e){return n.edge(e).weight}}(e)):function(n){var e=[],r={},t={};return o.Z(n.nodes(),function i(a){if(!u.Z(t,a))t[a]=!0,r[a]=!0,o.Z(n.outEdges(a),function(n){u.Z(r,n.w)?e.push(n):i(n.w)}),delete r[a]}),e}(e),o.Z(r,function(n){var r=e.edge(n);e.removeEdge(n),r.forwardName=n.name,r.reversed=!0,e.setEdge(n.w,n.v,r,i.Z("rev"))})}),e("    nestingGraph.run",function(){var e,r,t,i,u,a;r=j(e=n,"root",{},"_root"),t=function(n){var e={};return o.Z(n.children(),function(r){!function r(t,i){var u=n.children(t);u&&u.length&&o.Z(u,function(n){r(n,i+1)}),e[t]=i}(r,1)}),e}(e),u=2*(i=N(nV.Z(t))-1)+1,e.graph().nestingRoot=r,o.Z(e.edges(),function(n){e.edge(n).minlen*=u}),a=function(n){return nB.Z(n.edges(),function(e,r){return e+n.edge(r).weight},0)}(e)+1,o.Z(e.children(),function(n){(function n(e,r,t,i,u,a,d){var f=e.children(d);if(!f.length){d!==r&&e.setEdge(r,d,{weight:0,minlen:t});return}var c=B(e,"_bt"),s=B(e,"_bb"),v=e.node(d);e.setParent(c,d),v.borderTop=c,e.setParent(s,d),v.borderBottom=s,o.Z(f,function(o){n(e,r,t,i,u,a,o);var f=e.node(o),v=f.borderTop?f.borderTop:o,g=f.borderBottom?f.borderBottom:o,h=f.borderTop?i:2*i,l=v!==g?1:u-a[d]+1;e.setEdge(c,v,{weight:h,minlen:l,nestingEdge:!0}),e.setEdge(g,s,{weight:h,minlen:l,nestingEdge:!0})}),!e.parent(d)&&e.setEdge(r,c,{weight:0,minlen:u+a[d]})})(e,r,u,a,i,t,n)}),e.graph().nodeRankFactor=u}),e("    rank",function(){!function(n){switch(n.graph().ranker){case"network-simplex":default:(function(n){nM(n)})(n);break;case"tight-tree":(function(n){Q(n),W(n)})(n);break;case"longest-path":nF(n)}}(F(n))}),e("    injectEdgeLabelProxies",function(){(function(n){o.Z(n.edges(),function(e){var r=n.edge(e);if(r.width&&r.height){var t=n.node(e.v),o={rank:(n.node(e.w).rank-t.rank)/2+t.rank,e:e};j(n,"edge-proxy",o,"_ep")}})})(n)}),e("    removeEmptyRanks",function(){var e,r,t,i,u;e=n,r=S(f.Z(e.nodes(),function(n){return e.node(n).rank})),t=[],o.Z(e.nodes(),function(n){var o=e.node(n).rank-r;!t[o]&&(t[o]=[]),t[o].push(n)}),i=0,u=e.graph().nodeRankFactor,o.Z(t,function(n,r){C.Z(n)&&r%u!=0?--i:i&&o.Z(n,function(n){e.node(n).rank+=i})})}),e("    nestingGraph.cleanup",function(){var e,r;r=(e=n).graph(),e.removeNode(r.nestingRoot),delete r.nestingRoot,o.Z(e.edges(),function(n){e.edge(n).nestingEdge&&e.removeEdge(n)})}),e("    normalizeRanks",function(){var e,r;e=n,r=S(f.Z(e.nodes(),function(n){return e.node(n).rank})),o.Z(e.nodes(),function(n){var t=e.node(n);u.Z(t,"rank")&&(t.rank-=r)})}),e("    assignRankMinMax",function(){(function(n){var e=0;o.Z(n.nodes(),function(r){var t=n.node(r);t.borderTop&&(t.minRank=n.node(t.borderTop).rank,t.maxRank=n.node(t.borderBottom).rank,e=N(e,t.maxRank))}),n.graph().maxRank=e})(n)}),e("    removeEdgeLabelProxies",function(){(function(n){o.Z(n.nodes(),function(e){var r=n.node(e);"edge-proxy"===r.dummy&&(n.edge(r.e).labelRank=r.rank,n.removeNode(e))})})(n)}),e("    normalize.run",function(){var e;(e=n).graph().dummyChains=[],o.Z(e.edges(),function(n){(function(n,e){var r,t,o,i=e.v,u=n.node(i).rank,a=e.w,d=n.node(a).rank,f=e.name,c=n.edge(e),s=c.labelRank;if(d!==u+1){for(n.removeEdge(e),o=0,++u;u<d;++o,++u)c.points=[],r=j(n,"edge",t={width:0,height:0,edgeLabel:c,edgeObj:e,rank:u},"_d"),u===s&&(t.width=c.width,t.height=c.height,t.dummy="edge-label",t.labelpos=c.labelpos),n.setEdge(i,r,{weight:c.weight},f),0===o&&n.graph().dummyChains.push(r),i=r;n.setEdge(i,a,{weight:c.weight},f)}})(e,n)})}),e("    parentDummyChains",function(){var e,r;r=function(n){var e={},r=0;return o.Z(n.children(),function t(i){var u=r;o.Z(n.children(i),t),e[i]={low:u,lim:r++}}),e}(e=n),o.Z(e.graph().dummyChains,function(n){for(var t=e.node(n),o=t.edgeObj,i=function(n,e,r,t){var o,i,u=[],a=[],d=Math.min(e[r].low,e[t].low),f=Math.max(e[r].lim,e[t].lim);o=r;do o=n.parent(o),u.push(o);while(o&&(e[o].low>d||f>e[o].lim));for(i=o,o=t;(o=n.parent(o))!==i;)a.push(o);return{path:u.concat(a.reverse()),lca:i}}(e,r,o.v,o.w),u=i.path,a=i.lca,d=0,f=u[0],c=!0;n!==o.w;){if(t=e.node(n),c){for(;(f=u[d])!==a&&e.node(f).maxRank<t.rank;)d++;f===a&&(c=!1)}if(!c){for(;d<u.length-1&&e.node(f=u[d+1]).minRank<=t.rank;)d++;f=u[d]}e.setParent(n,f),n=e.successors(n)[0]}})}),e("    addBorderSegments",function(){var e;e=n,o.Z(e.children(),function n(r){var t=e.children(r),i=e.node(r);if(t.length&&o.Z(t,n),u.Z(i,"minRank")){i.borderLeft=[],i.borderRight=[];for(var a=i.minRank,d=i.maxRank+1;a<d;++a)A(e,"borderLeft","_bl",r,i,a),A(e,"borderRight","_br",r,i,a)}})}),e("    order",function(){!function(n){var e=q(n),r=n7(n,c.Z(1,e+1),"inEdges"),t=n7(n,c.Z(e-1,-1,-1),"outEdges");var i=(a=n,v={},g=nu.Z(a.nodes(),function(n){return!a.children(n).length}),h=N(f.Z(g,function(n){return a.node(n).rank})),l=f.Z(c.Z(h+1),function(){return[]}),Z=n1(g,function(n){return a.node(n).rank}),o.Z(Z,function n(e){!u.Z(v,e)&&(v[e]=!0,l[a.node(e).rank].push(e),o.Z(a.successors(e),n))}),l);n3(n,i);for(var a,v,g,h,l,Z,p,w=Number.POSITIVE_INFINITY,b=0,y=0;y<4;++b,++y){(function(n,e){var r=new s.k;o.Z(n,function(n){var t,i,a,c,s,v=n.graph().root,g=function n(e,r,t,i){var a,c,s,v,g,h,l,Z,p,w,b,y,k,x,E,N,_,I,R=e.children(r),M=e.node(r),T=M?M.borderLeft:void 0,L=M?M.borderRight:void 0,S={};T&&(R=nu.Z(R,function(n){return n!==T&&n!==L}));var O=(a=e,c=R,f.Z(c,function(n){var e=a.inEdges(n);if(!e.length)return{v:n};var r=nB.Z(e,function(n,e){var r=a.edge(e),t=a.node(e.v);return{sum:n.sum+r.weight*t.order,weight:n.weight+r.weight}},{sum:0,weight:0});return{v:n,barycenter:r.sum/r.weight,weight:r.weight}}));o.Z(O,function(r){if(e.children(r.v).length){var o=n(e,r.v,t,i);S[r.v]=o,u.Z(o,"barycenter")&&function(n,e){C.Z(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}(r,o)}});var P=(s=O,v=t,g={},o.Z(s,function(n,e){var r=g[n.v]={indegree:0,in:[],out:[],vs:[n.v],i:e};!C.Z(n.barycenter)&&(r.barycenter=n.barycenter,r.weight=n.weight)}),o.Z(v.edges(),function(n){var e=g[n.v],r=g[n.w];!C.Z(e)&&!C.Z(r)&&(r.indegree++,e.out.push(g[n.w]))}),function(n){for(var e=[];n.length;){var r=n.pop();e.push(r),o.Z(r.in.reverse(),function(n){return function(e){if(!e.merged)(C.Z(e.barycenter)||C.Z(n.barycenter)||e.barycenter>=n.barycenter)&&function(n,e){var r=0,t=0;n.weight&&(r+=n.barycenter*n.weight,t+=n.weight),e.weight&&(r+=e.barycenter*e.weight,t+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=r/t,n.weight=t,n.i=Math.min(e.i,n.i),e.merged=!0}(n,e)}}(r)),o.Z(r.out,function(e){return function(r){r.in.push(e),0==--r.indegree&&n.push(r)}}(r))}return f.Z(nu.Z(e,function(n){return!n.merged}),function(n){return m.Z(n,["vs","i","barycenter","weight"])})}(nu.Z(g,function(n){return!n.indegree})));(function(n,e){o.Z(n,function(n){n.vs=d.Z(n.vs.map(function(n){return e[n]?e[n].vs:n}))})})(P,S);var j=(h=P,l=i,y=(b=(Z=h,p=function(n){return u.Z(n,"barycenter")},w={lhs:[],rhs:[]},o.Z(Z,function(n){p(n)?w.lhs.push(n):w.rhs.push(n)}),w)).lhs,k=n1(b.rhs,function(n){return-n.i}),x=[],E=0,N=0,_=0,y.sort(function(n){return function(e,r){return e.barycenter<r.barycenter?-1:e.barycenter>r.barycenter?1:n?r.i-e.i:e.i-r.i}}(!!l)),_=n2(x,k,_),o.Z(y,function(n){_+=n.vs.length,x.push(n.vs),E+=n.barycenter*n.weight,N+=n.weight,_=n2(x,k,_)}),I={vs:d.Z(x)},N&&(I.barycenter=E/N,I.weight=N),I);if(T&&(j.vs=d.Z([T,j.vs,L]),e.predecessors(T).length)){var F=e.node(e.predecessors(T)[0]),G=e.node(e.predecessors(L)[0]);!u.Z(j,"barycenter")&&(j.barycenter=0,j.weight=0),j.barycenter=(j.barycenter*j.weight+F.order+G.order)/(j.weight+2),j.weight+=2}return j}(n,v,r,e);o.Z(g.vs,function(e,r){n.node(e).order=r}),t=n,i=r,a=g.vs,s={},o.Z(a,function(n){for(var e,r,o=t.parent(n);o;){if((e=t.parent(o))?(r=s[e],s[e]=o):(r=c,c=o),r&&r!==o){i.setEdge(r,o);return}o=e}})})})(b%2?r:t,b%4>=2),i=V(n);var k,x=function(n,e){for(var r=0,t=1;t<e.length;++t)r+=function(n,e,r){for(var t=nz(r||[],f.Z(r,function(n,e){return e})||[],nY.Z),i=d.Z(f.Z(e,function(e){return n1(f.Z(n.outEdges(e),function(e){return{pos:t[e.w],weight:n.edge(e).weight}}),"pos")})),u=1;u<r.length;)u<<=1;var a=2*u-1;u-=1;var c=f.Z(Array(a),function(){return 0}),s=0;return o.Z(i.forEach(function(n){var e=n.pos+u;c[e]+=n.weight;for(var r=0;e>0;)e%2&&(r+=c[e+1]),e=e-1>>1,c[e]+=n.weight;s+=n.weight*r})),s}(n,e[t-1],e[t]);return r}(n,i);if(x<w){;y=0,k=i,p=(0,nq.Z)(k,5),w=x}}n3(n,p)}(n)}),e("    insertSelfEdges",function(){(function(n){var e=V(n);o.Z(e,function(e){var r=0;o.Z(e,function(e,t){var i=n.node(e);i.order=t+r,o.Z(i.selfEdges,function(e){j(n,"selfedge",{width:e.label.width,height:e.label.height,rank:i.rank,order:t+ ++r,e:e.e,label:e.label},"_se")}),delete i.selfEdges})})})(n)}),e("    adjustCoordinateSystem",function(){var e,r;("lr"===(r=(e=n).graph().rankdir.toLowerCase())||"rl"===r)&&D(e)}),e("    position",function(){var e,r,t,i,a,d,v,g,h,l,Z,p,m,b,y,k,x,E,I,M,C;(function(n){var e=V(n),r=n.graph().ranksep,t=0;o.Z(e,function(e){var i=N(f.Z(e,function(e){return n.node(e).height}));o.Z(e,function(e){n.node(e).y=t+i/2}),t+=i+r})})(e=F(e=n)),M=(i=V(r=e),g=w.Z((a=r,d=i,v={},nB.Z(d,function(n,e){var r=0,t=0,i=n.length,u=_(e);return o.Z(e,function(n,d){var f=function(n,e){if(n.node(e).dummy)return ni(n.predecessors(e),function(e){return n.node(e).dummy})}(a,n),c=f?a.node(f).order:i;(f||n===u)&&(o.Z(e.slice(t,d+1),function(n){o.Z(a.predecessors(n),function(e){var t=a.node(e),o=t.order;(o<r||c<o)&&!(t.dummy&&a.node(n).dummy)&&n6(v,e,n)})}),t=d+1,r=c)}),e}),v),function(n,e){var r={};function t(e,t,i,u,a){var d;o.Z(c.Z(t,i),function(t){d=e[t],n.node(d).dummy&&o.Z(n.predecessors(d),function(e){var t=n.node(e);t.dummy&&(t.order<u||t.order>a)&&n6(r,e,d)})})}return nB.Z(e,function(e,r){var i,u=-1,a=0;return o.Z(r,function(o,d){if("border"===n.node(o).dummy){var f=n.predecessors(o);f.length&&(i=n.node(f[0]).order,t(r,a,d,u,i),a=d,u=i)}t(r,a,r.length,i,e.length)}),r}),r}(r,i)),h={},o.Z(["u","d"],function(n){t="u"===n?i:nV.Z(i).reverse(),o.Z(["l","r"],function(e){"r"===e&&(t=f.Z(t,function(n){return nV.Z(n).reverse()}));var i,a,d,c,v,l,Z,p=("u"===n?r.predecessors:r.successors).bind(r);var w=(i=0,a=t,d=g,c=p,v={},l={},Z={},o.Z(a,function(n){o.Z(n,function(n,e){v[n]=n,l[n]=n,Z[n]=e})}),o.Z(a,function(n){var e=-1;o.Z(n,function(n){var r=c(n);if(r.length){for(var t=((r=n1(r,function(n){return Z[n]})).length-1)/2,o=Math.floor(t),i=Math.ceil(t);o<=i;++o){var a=r[o];l[n]===n&&e<Z[a]&&!function(n,e,r){if(e>r){var t=e;e=r,r=t}return u.Z(n[e],r)}(d,n,a)&&(l[a]=n,l[n]=v[n]=v[a],e=Z[a])}}})}),{root:v,align:l}),m=function(n,e,r,t,i){var a={},d=function(n,e,r,t){var i=new s.k,a=n.graph(),d=function(n,e,r){return function(t,o,i){var a,d,f=t.node(o),c=t.node(i);if(a=0+f.width/2,u.Z(f,"labelpos"))switch(f.labelpos.toLowerCase()){case"l":d=-f.width/2;break;case"r":d=f.width/2}if(d&&(a+=r?d:-d),d=0,a+=(f.dummy?e:n)/2,a+=(c.dummy?e:n)/2,a+=c.width/2,u.Z(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":d=c.width/2;break;case"r":d=-c.width/2}return d&&(a+=r?d:-d),d=0,a}}(a.nodesep,a.edgesep,t);return o.Z(e,function(e){var t;o.Z(e,function(e){var o=r[e];if(i.setNode(o),t){var u=r[t],a=i.edge(u,o);i.setEdge(u,o,Math.max(d(n,e,t),a||0))}t=e})}),i}(n,e,r,i),f=i?"borderLeft":"borderRight";function c(n,e){for(var r=d.nodes(),t=r.pop(),o={};t;)o[t]?n(t):(o[t]=!0,r.push(t),r=r.concat(e(t))),t=r.pop()}return c(function(n){a[n]=d.inEdges(n).reduce(function(n,e){return Math.max(n,a[e.v]+d.edge(e))},0)},d.predecessors.bind(d)),c(function(e){var r=d.outEdges(e).reduce(function(n,e){return Math.min(n,a[e.w]-d.edge(e))},Number.POSITIVE_INFINITY),t=n.node(e);r!==Number.POSITIVE_INFINITY&&t.borderType!==f&&(a[e]=Math.max(a[e],r))},d.successors.bind(d)),o.Z(t,function(n){a[n]=a[r[n]]}),a}(r,t,w.root,w.align,"r"===e);"r"===e&&(m=T(m,function(n){return-n})),h[n+e]=m})}),p=(l=r,Z=h,H(nV.Z(Z),function(n){var e,r,t=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY;return e=n,r=function(n,e){var r=function(n,e){return n.node(e).width}(l,e)/2;t=Math.max(n+r,t),o=Math.min(n-r,o)},null==e||(0,n8.Z)(e,(0,n4.Z)(r),n9.Z),t-o})),m=h,b=p,k=S(y=nV.Z(b)),x=N(y),o.Z(["u","d"],function(n){o.Z(["l","r"],function(e){var r,t=n+e,o=m[t];if(o!==b){var i=nV.Z(o);(r="l"===e?k-S(i):x-N(i))&&(m[t]=T(o,function(n){return n+r}))}})}),E=h,I=r.graph().align,T(E.ul,function(n,e){if(I)return E[I.toLowerCase()][e];var r=n1(f.Z(E,e));return(r[1]+r[2])/2})),C=function(n,r){e.node(r).x=n},M&&(0,R.Z)(M,(0,n4.Z)(C))}),e("    positionSelfEdges",function(){(function(n){o.Z(n.nodes(),function(e){var r=n.node(e);if("selfedge"===r.dummy){var t=n.node(r.e.v),o=t.x+t.width/2,i=t.y,u=r.x-o,a=t.height/2;n.setEdge(r.e,r.label),n.removeNode(e),r.label.points=[{x:o+2*u/3,y:i-a},{x:o+5*u/6,y:i-a},{x:o+u,y:i},{x:o+5*u/6,y:i+a},{x:o+2*u/3,y:i+a}],r.label.x=r.x,r.label.y=r.y}})})(n)}),e("    removeBorderNodes",function(){(function(n){o.Z(n.nodes(),function(e){if(n.children(e).length){var r=n.node(e),t=n.node(r.borderTop),o=n.node(r.borderBottom),i=n.node(_(r.borderLeft)),u=n.node(_(r.borderRight));r.width=Math.abs(u.x-i.x),r.height=Math.abs(o.y-t.y),r.x=i.x+r.width/2,r.y=t.y+r.height/2}}),o.Z(n.nodes(),function(e){"border"===n.node(e).dummy&&n.removeNode(e)})})(n)}),e("    normalize.undo",function(){var e;e=n,o.Z(e.graph().dummyChains,function(n){var r,t=e.node(n),o=t.edgeLabel;for(e.setEdge(t.edgeObj,o);t.dummy;)r=e.successors(n)[0],e.removeNode(n),o.points.push({x:t.x,y:t.y}),"edge-label"===t.dummy&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),n=r,t=e.node(n)})}),e("    fixupEdgeLabelCoords",function(){(function(n){o.Z(n.edges(),function(e){var r=n.edge(e);if(u.Z(r,"x"))switch(("l"===r.labelpos||"r"===r.labelpos)&&(r.width-=r.labeloffset),r.labelpos){case"l":r.x-=r.width/2+r.labeloffset;break;case"r":r.x+=r.width/2+r.labeloffset}})})(n)}),e("    undoCoordinateSystem",function(){var e,r;("bt"===(r=(e=n).graph().rankdir.toLowerCase())||"rl"===r)&&function(n){o.Z(n.nodes(),function(e){J(n.node(e))}),o.Z(n.edges(),function(e){var r=n.edge(e);o.Z(r.points,J),u.Z(r,"y")&&J(r)})}(e),("lr"===r||"rl"===r)&&(function(n){o.Z(n.nodes(),function(e){K(n.node(e))}),o.Z(n.edges(),function(e){var r=n.edge(e);o.Z(r.points,K),u.Z(r,"x")&&K(r)})}(e),D(e))}),e("    translateGraph",function(){(function(n){var e=Number.POSITIVE_INFINITY,r=0,t=Number.POSITIVE_INFINITY,i=0,a=n.graph(),d=a.marginx||0,f=a.marginy||0;function c(n){var o=n.x,u=n.y,a=n.width,d=n.height;e=Math.min(e,o-a/2),r=Math.max(r,o+a/2),t=Math.min(t,u-d/2),i=Math.max(i,u+d/2)}o.Z(n.nodes(),function(e){c(n.node(e))}),o.Z(n.edges(),function(e){var r=n.edge(e);u.Z(r,"x")&&c(r)}),e-=d,t-=f,o.Z(n.nodes(),function(r){var o=n.node(r);o.x-=e,o.y-=t}),o.Z(n.edges(),function(r){var i=n.edge(r);o.Z(i.points,function(n){n.x-=e,n.y-=t}),u.Z(i,"x")&&(i.x-=e),u.Z(i,"y")&&(i.y-=t)}),a.width=r-e+d,a.height=i-t+f})(n)}),e("    assignNodeIntersects",function(){(function(n){o.Z(n.edges(),function(e){var r,t,o=n.edge(e),i=n.node(e.v),u=n.node(e.w);o.points?(r=o.points[0],t=o.points[o.points.length-1]):(o.points=[],r=u,t=i),o.points.unshift(G(i,r)),o.points.push(G(u,t))})})(n)}),e("    reversePoints",function(){(function(n){o.Z(n.edges(),function(e){var r=n.edge(e);r.reversed&&r.points.reverse()})})(n)}),e("    acyclic.undo",function(){var e;e=n,o.Z(e.edges(),function(n){var r=e.edge(n);if(r.reversed){e.removeEdge(n);var t=r.forwardName;delete r.reversed,delete r.forwardName,e.setEdge(n.w,n.v,r,t)}})})})(e,r)}),r("  updateInputGraph",function(){(function(n,e){o.Z(n.nodes(),function(r){var t=n.node(r),o=e.node(r);t&&(t.x=o.x,t.y=o.y,e.children(r).length&&(t.width=o.width,t.height=o.height))}),o.Z(n.edges(),function(r){var t=n.edge(r),o=e.edge(r);t.points=o.points,u.Z(o,"x")&&(t.x=o.x,t.y=o.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height})(n,e)})})}var en=["nodesep","edgesep","ranksep","marginx","marginy"],ee={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},er=["acyclicer","ranker","rankdir","align"],et=["width","height"],eo={width:0,height:0},ei=["minlen","weight","width","height","labeloffset"],eu={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},ea=["labelpos"];function ed(n,e){return T(m.Z(n,e),Number)}function ef(n){var e={};return o.Z(n,function(n,r){e[r.toLowerCase()]=n}),e}},10301:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(20869),o=r(71581);let i=function(n,e){var r=-1,i=(0,o.Z)(n)?Array(n.length):[];return(0,t.Z)(n,function(n,t,o){i[++r]=e(n,t,o)}),i}},87317:function(n,e,r){r.d(e,{Z:function(){return f}});var t=r(53148),o=r(38487),i=r(8417),u=r(40038),a=Object.prototype,d=a.hasOwnProperty;let f=(0,t.Z)(function(n,e){n=Object(n);var r=-1,t=e.length,f=t>2?e[2]:void 0;for(f&&(0,i.Z)(e[0],e[1],f)&&(t=1);++r<t;){for(var c=e[r],s=(0,u.Z)(c),v=-1,g=s.length;++v<g;){var h=s[v],l=n[h];(void 0===l||(0,o.Z)(l,a[h])&&!d.call(n,h))&&(n[h]=c[h])}}return n})},71134:function(n,e,r){r.d(e,{Z:function(){return o}});var t=r(39446);let o=function(n){return(null==n?0:n.length)?(0,t.Z)(n,1):[]}},97345:function(n,e,r){r.d(e,{Z:function(){return a}});var t=r(96248),o=r(36296),i=r(10301),u=r(31739);let a=function(n,e){return((0,u.Z)(n)?t.Z:i.Z)(n,(0,o.Z)(e,3))}},74722:function(n,e,r){r.d(e,{Z:()=>Z});var t,o=r("73722"),i=r("89774"),u=r("50949"),a=r("92383"),d=r("58641"),f=r("37706");let c=function(n,e,r,t){if(!(0,d.Z)(n))return n;e=(0,u.Z)(e,n);for(var o=-1,c=e.length,s=c-1,v=n;null!=v&&++o<c;){var g=(0,f.Z)(e[o]),h=r;if("__proto__"===g||"constructor"===g||"prototype"===g)break;if(o!=s){var l=v[g];void 0===(h=t?t(l,g,v):void 0)&&(h=(0,d.Z)(l)?l:(0,a.Z)(e[o+1])?[]:{})}(0,i.Z)(v,g,h),v=v[g]}return n},s=function(n,e,r){for(var t=-1,i=e.length,a={};++t<i;){var d=e[t],f=(0,o.Z)(n,d);r(f,d)&&c(a,(0,u.Z)(d,n),f)}return a};var v=r("26890"),g=r("71134"),h=r("89647"),l=r("89186");let Z=(t=function(n,e){var r;return null==n?{}:s(r=n,e,function(n,e){return(0,v.Z)(r,e)})},(0,l.Z)((0,h.Z)(t,void 0,g.Z),t+""))},40882:function(n,e,r){r.d(e,{Z:()=>f});var t,o=Math.ceil,i=Math.max;let u=function(n,e,r,t){for(var u=-1,a=i(o((e-n)/(r||1)),0),d=Array(a);a--;)d[t?a:++u]=n,n+=r;return d};var a=r("8417"),d=r("29116");let f=function(n,e,r){return r&&"number"!=typeof r&&(0,a.Z)(n,e,r)&&(e=r=void 0),n=(0,d.Z)(n),void 0===e?(e=n,n=0):e=(0,d.Z)(e),r=void 0===r?n<e?1:-1:(0,d.Z)(r),u(n,e,r,void 0)}},29116:function(n,e,r){r.d(e,{Z:()=>l});var t=/\s/;let o=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e};var i=/^\s+/,u=r("58641"),a=r("2147"),d=0/0,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,v=parseInt;let g=function(n){if("number"==typeof n)return n;if((0,a.Z)(n))return d;if((0,u.Z)(n)){var e,r="function"==typeof n.valueOf?n.valueOf():n;n=(0,u.Z)(r)?r+"":r}if("string"!=typeof n)return 0===n?n:+n;n=(e=n)?e.slice(0,o(e)+1).replace(i,""):e;var t=c.test(n);return t||s.test(n)?v(n.slice(2),t?2:8):f.test(n)?d:+n};var h=1/0;let l=function(n){return n?(n=g(n))===h||n===-h?(n<0?-1:1)*17976931348623157e292:n==n?n:0:0===n?n:0}},19675:function(n,e,r){r.d(e,{Z:function(){return i}});var t=r(22501),o=0;let i=function(n){var e=++o;return(0,t.Z)(n)+e}}}]);