(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){e.exports=a(351)},197:function(e,t,a){},349:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),s=(a(197),a(42)),i=a(170),l=a(62),u={comments:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;if(t.type)switch(t.type){case"DISPLAY_POST_COMMENTS":var a=t.comments.map(function(e){return e});return Object(l.a)({},e,{comments:a});default:return e}},d=a(184),p={searched:"",subreddits:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if(t.type)switch(t.type){case"SEARCH_SUBREDDIT":var a;return a=t.val.includes("r/")?t.val.replace("r/",""):t.val,Object(l.a)({},e,{searched:a});case"SUBMIT_SUBREDDIT":return e.subreddits.some(function(e){return e.toUpperCase()===t.val.toUpperCase()})?(alert("Subreddit already chosen"),e):Object(l.a)({},e,{subreddits:[].concat(Object(d.a)(e.subreddits),[t.val])});default:return e}},f=Object(s.c)({src:h,dis:m}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,E=Object(s.e)(f,b(Object(s.a)(i.a))),v=a(49),g=a(25),O=a(26),j=a(29),y=a(27),k=a(30),S=a(63),w=a.n(S),_="https://www.reddit.com/",C=function(e){return w.a.get(_+"r/"+e+"/about.json").then(function(e){return!0}).catch(function(e){return console.log("Invalid Subreddit"),!1})},N=function(e){return w.a.get(_+"r/"+e+"/top.json").then(function(e){return e.data.data.children}).catch(function(e){console.log(e)})},I=function(e,t){return w.a.get(_+"r/"+e+"/comments/"+t+".json").then(function(e){return e.data[1].data.children}).catch(function(e){console.log(e)})},T=a(360),D=a(358),x=a(359),A=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSubmit=function(e){e.preventDefault()},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"search-area"},r.a.createElement(D.a,{onSearchChange:function(t){return e.props.search(t.target.value)}}),r.a.createElement(x.a,{onClick:this.props.clicked},"Add Subreddit")))}}]),t}(n.Component),B=a(183),M=a(52),P=a(48),U=function(e){var t,a;return t="self"!==e.post_preview?r.a.createElement(B.a,{src:e.post_preview}):r.a.createElement(B.a,{style:{display:"none"}}),a=e.post_link?r.a.createElement("h4",{className:"post-title"},r.a.createElement("a",{href:e.post_link,target:"blank"},e.post_title)):r.a.createElement("h4",{className:"post-title"},r.a.createElement(P.b,{onClick:e.postClicked,to:{pathname:"/post/",state:{postTitle:e.post_title,image:e.post_preview,text:e.post_text,author:e.author,comments:e.comments}}},e.post_title)),r.a.createElement("div",{className:"post"},r.a.createElement("h4",null,e.subreddit_title),a,t,r.a.createElement("div",{className:"post-info"},r.a.createElement(M.a,{name:"arrow alternate circle up outline"}),r.a.createElement("p",{className:"score-num"},e.score),r.a.createElement(M.a,{name:"arrow alternate circle down outline"})," ",r.a.createElement("p",{className:"comment-num"},e.num_comments)," ",r.a.createElement(M.a,{name:"comment outline"})," ",r.a.createElement("br",null),"by ",e.author," | 12 hours ago"))},R=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={subImage:""},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.sub,w.a.get(_+"r/"+e+"/about.json").then(function(e){return e.data.data.icon_img}).catch(function(e){console.log(e)})).then(function(e){if(e)t.setState({subImage:e});else{t.setState({subImage:"https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-reddit-4.png"})}})}},{key:"render",value:function(){return r.a.createElement(T.a.Column,{onClick:this.props.clicked,width:2},r.a.createElement(B.a,{label:{as:"a",color:"blue",content:"".concat(this.props.sub),ribbon:!0},src:this.state.subImage}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isValid:!0},a.handleClick=function(e){C(e).then(function(t){!0===t?a.setState({isValid:!0},function(){a.props.onSubmit(e)}):a.setState({isValid:!1},function(){alert("Invalid Subreddit")})})},a.handleSubClick=function(e){N(e).then(function(e){a.setState({posts:e})})},a.handlePostClick=function(e,t){var n=[];I(e,t).then(function(e){e.map(function(e){return n.push(e.data),n}),a.props.onClickPost(n)})},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e,t=this;e=this.props.subs.map(function(e){return r.a.createElement(R,{clicked:function(){return t.handleSubClick(e)},key:e,sub:e})});var a=this.state.posts.map(function(e){var a,n;return e.data.url.includes(".jpg")||e.data.url.includes(".png")?(a=e.data.url,n=null):e.data.is_self?(a=null,n=null):(n="http://www.reddit.com".concat(e.data.permalink),a=null),r.a.createElement(U,{postClicked:function(){return t.handlePostClick(e.data.subreddit,e.data.id)},key:e.data.id,subreddit_title:e.data.subreddit_name_prefixed,post_title:e.data.title,post_link:n,post_preview:a,post_text:e.data.selftext,num_comments:e.data.num_comments.toString(),score:e.data.score.toString(),author:e.data.author})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"title"},"France Is Bacon"),r.a.createElement(A,{search:this.props.onSearch,clicked:function(){return t.handleClick(t.props.src)}})),r.a.createElement(T.a,{className:"subreddit-selection",centered:!0},r.a.createElement(T.a.Row,null,e)),r.a.createElement("div",{className:"main-content"},a))}}]),t}(n.Component),V=Object(v.b)(function(e){return{src:e.src.searched,subs:e.src.subreddits,coms:e.dis.comments}},function(e){return{onSearch:function(t){return e({type:"SEARCH_SUBREDDIT",val:t})},onSubmit:function(t){return e({type:"SUBMIT_SUBREDDIT",val:t})},onClickPost:function(t){return e(function(e){return{type:"DISPLAY_POST_COMMENTS",comments:e}}(t))}}})(L),F=a(36),H=function(e){function t(){var e,a;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={postTitle:"",image:"",text:"",comments:[],author:""},a}return Object(k.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.state,t=e.postTitle,a=e.image,n=e.text,r=e.comments,c=e.author;this.setState({postTitle:t,image:a,text:n,comments:r,author:c})}},{key:"render",value:function(){var e=this.props.coms.map(function(e){var t;return e.replies&&(t=e.replies.data.children.map(function(e){return r.a.createElement("div",{style:{background:"grey",marginLeft:"15px"},key:e.data.id,className:"reply"},r.a.createElement("p",null,e.data.author),r.a.createElement("h4",null,e.data.body))})),r.a.createElement("div",{className:"comment",key:e.id},r.a.createElement("p",null,"By: ",e.author),r.a.createElement("h4",null,e.body),t)});return r.a.createElement("div",{className:"single-post"},r.a.createElement(P.b,{to:"/"},r.a.createElement(x.a,null,"Go Back")),r.a.createElement("div",{className:"single-post-header"},r.a.createElement("h1",null,this.state.postTitle),r.a.createElement(B.a,{src:this.state.image}),r.a.createElement("p",null,this.state.text),r.a.createElement("p",null,"by: ",this.state.author)),r.a.createElement("div",{className:"comments"},e))}}]),t}(n.Component),J=Object(v.b)(function(e){return{coms:e.dis.comments,reps:e.dis.reps}})(H),W=(a(349),function(e){function t(){return Object(g.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P.a,null,r.a.createElement(F.a,{path:"/",exact:!0,component:V}),r.a.createElement(F.a,{path:"/france-is-bacon/",exact:!0,component:V}),r.a.createElement(F.a,{path:"/post/",render:function(e){return r.a.createElement(J,Object.assign({},e,{isAuthed:!0}))}}),r.a.createElement("footer",null)))}}]),t}(n.Component));a(350),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v.a,{store:E},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[192,1,2]]]);
//# sourceMappingURL=main.365b17b9.chunk.js.map