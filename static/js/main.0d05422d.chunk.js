(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(338)},185:function(e,t,a){},319:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(185),a(32)),i=a(159),s={results:[]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type)switch(t.type){case"DISPLAY_POSTS":default:return e}},m={searched:[]},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if(t.type)switch(t.type){case"SEARCH_SUBREDDIT":default:return e}},E=Object(l.c)({src:d,dis:u}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,h=Object(l.e)(E,b(Object(l.a)(i.a))),f=a(70),p=a(38),w=a(39),v=a(41),O=a(40),j=a(42),g=a(345),y=a(346),S=void 0,N=function(e){return r.a.createElement("form",{onSubmit:function(e){return S.handleSubmit(e)}},r.a.createElement("div",{className:"search-area"},r.a.createElement(g.a,{onSearchChange:e.search}),r.a.createElement(y.a,{type:"submit"},"Add Subreddit")))},C=a(348),_=a(172),k=a(45),A=a.n(k),D=function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"subreddit-selection",centered:!0},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Column,{width:2},r.a.createElement(_.a,{label:{as:"a",color:"blue",content:"AskReddit",ribbon:!0},src:A.a})),r.a.createElement(C.a.Column,{width:2},r.a.createElement(_.a,{label:{as:"a",color:"red",content:"Braves",ribbon:!0},src:A.a})),r.a.createElement(C.a.Column,{width:2},r.a.createElement(_.a,{label:{as:"a",color:"yellow",content:"JavaScript",ribbon:!0},src:A.a})),r.a.createElement(C.a.Column,{width:2},r.a.createElement(_.a,{label:{as:"a",color:"green",content:"ExJw",ribbon:!0},src:A.a})),r.a.createElement(C.a.Column,{width:2},r.a.createElement(_.a,{label:{as:"a",color:"black",content:"Science",ribbon:!0},src:A.a}))))}}]),t}(n.Component),I=function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"France Is Bacon"),r.a.createElement(N,{search:this.props.onSearch})),r.a.createElement(D,null))}}]),t}(n.Component),R=Object(f.b)(function(e){return{src:e.src.searched}},function(e){return{onSearch:function(){return e({type:"SEARCH_SUBREDDIT"})}}})(I),B=a(44),T=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"sub-title"},r.a.createElement("h4",null,"r/funny")),r.a.createElement("div",{className:"posts"},r.a.createElement("div",{className:"post"},r.a.createElement("h4",{className:"post-title"},"WTF Wednesday")),r.a.createElement("div",{className:"post-info"},"4 ",r.a.createElement(B.a,{name:"arrow alternate circle up outline"})," 1 ",r.a.createElement(B.a,{name:"arrow alternate circle down outline"})," 5 ",r.a.createElement(B.a,{name:"comment outline"})," ",r.a.createElement("br",null),"by AutoModerator 12 hours ago")))},J=(a(319),function(e){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null),r.a.createElement(T,null),r.a.createElement("footer",null))}}]),t}(n.Component));a(320),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(171),x=a.n(W);a.d(t,"getImage",function(){return F});var F=function(e){x.a.get("https://www.reddit.com/"+e+"/about.json").then(function(e){console.log(e.data.data.icon_img)}).catch(function(e){console.log(e)})};o.a.render(r.a.createElement(f.a,{store:h},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){e.exports=a.p+"static/media/askreddit.7d937619.png"}},[[180,1,2]]]);
//# sourceMappingURL=main.0d05422d.chunk.js.map