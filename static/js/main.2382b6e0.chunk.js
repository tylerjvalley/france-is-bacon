(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t){},181:function(e,t,n){e.exports=n(339)},186:function(e,t,n){},337:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),l=(n(186),n(37)),s=n(159),i=n(160),u=n.n(i),m=n(101),d={searched:"",subreddits:[]},h=Object(l.c)({src:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;if(t.type)switch(t.type){case"SEARCH_SUBREDDIT":return Object(m.a)({},e,{searched:t.val});case"SUBMIT_SUBREDDIT":return Object(m.a)({},e,{subreddits:e.subreddits.concat(t.val)});default:return e}},dis:u.a}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,p=Object(l.e)(h,b(Object(l.a)(s.a))),f=n(69),E=n(27),v=n(28),O=n(30),j=n(29),w=n(31),y=n(163),S=n.n(y),g=n(349),k=n(346),N=n(347),C=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={},n.handleSubmit=function(e){e.preventDefault()},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"search-area"},r.a.createElement(k.a,{onSearchChange:function(t){return e.props.search(t.target.value)}}),r.a.createElement(N.a,{onClick:this.props.clicked},"Add Subreddit")))}}]),t}(a.Component),D=n(173),I=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={subImage:""},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.sub,S.a.get("https://www.reddit.com/r/"+e+"/about.json").then(function(e){return e.data.data.icon_img}).catch(function(e){console.log(e)})).then(function(e){t.setState({subImage:e})})}},{key:"render",value:function(){return r.a.createElement(g.a.Column,{width:2},r.a.createElement(D.a,{label:{as:"a",color:"blue",content:"".concat(this.props.sub),ribbon:!0},src:this.state.subImage}))}}]),t}(a.Component),_=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){n.props.onSubmit(e)},n}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.props.subs.map(function(e){return r.a.createElement(I,{key:e,sub:e})}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"France Is Bacon"),r.a.createElement(C,{search:this.props.onSearch,clicked:function(){return t.handleClick(t.props.src)}})),r.a.createElement(g.a,{className:"subreddit-selection",centered:!0},r.a.createElement(g.a.Row,null,e)))}}]),t}(a.Component),B=Object(f.b)(function(e){return{src:e.src.searched,subs:e.src.subreddits}},function(e){return{onSearch:function(t){return e({type:"SEARCH_SUBREDDIT",val:t})},onSubmit:function(t){return e({type:"SUBMIT_SUBREDDIT",val:t})}}})(_),T=n(44),A=function(){return r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"sub-title"},r.a.createElement("h4",null,"r/funny")),r.a.createElement("div",{className:"posts"},r.a.createElement("div",{className:"post"},r.a.createElement("h4",{className:"post-title"},"WTF Wednesday")),r.a.createElement("div",{className:"post-info"},"4 ",r.a.createElement(T.a,{name:"arrow alternate circle up outline"})," 1 ",r.a.createElement(T.a,{name:"arrow alternate circle down outline"})," 5 ",r.a.createElement(T.a,{name:"comment outline"})," ",r.a.createElement("br",null),"by AutoModerator 12 hours ago")))},R=(n(337),function(e){function t(){return Object(E.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(A,null),r.a.createElement("footer",null))}}]),t}(a.Component));n(338),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f.a,{store:p},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[181,1,2]]]);
//# sourceMappingURL=main.2382b6e0.chunk.js.map