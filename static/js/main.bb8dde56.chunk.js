(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{22:function(e,t,i){},23:function(e,t,i){},24:function(e,t,i){},26:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),s=i(16),a=i.n(s),r=(i(22),i(23),i(8)),o=i(9),l=i(11),j=i(10),d=i(36),u=i(37),b=i(38),h=(i(24),i.p+"static/media/profile-pic.475e846b.png"),p=i(0),m=function(){return Object(p.jsx)(d.a,{children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b.a,{xs:12,md:6,children:Object(p.jsx)("img",{className:"ProfilePic",src:h,alt:"Me Smiling"})}),Object(p.jsx)(b.a,{xs:12,md:6,children:Object(p.jsxs)("div",{className:"Intro",children:["Hello! I am Scully from USC.",Object(p.jsx)("br",{}),"I love to build stuffs that interact with people and help make their life better.",Object(p.jsx)("br",{}),"My pre-pandemic favorite outdoor activity is beach cleaning. And now I enjoy hiking with my family during weekends or staying at home practicing yoga.",Object(p.jsx)("br",{}),"I am now a graduate student majoring in Applied Data Science and will graduate in December 2021."]})})]})})},x=i(17),O=i.n(x),g=i(39),f=(i(26),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={isFlipped:!1},e.flipHandler=function(t){t.preventDefault(),e.setState((function(e){return{isFlipped:!e.isFlipped}}))},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=null;this.props.sourceCode&&(t=Object(p.jsx)(g.a,{variant:"outline-info",href:this.props.sourceCode,target:"_blank",children:"Source Code"}));var i=[];for(var n in this.props.details)i.push({idx:n,content:this.props.details[n]});var c=i.map((function(e){return Object(p.jsx)("li",{children:e.content},e.id)}));return Object(p.jsxs)(O.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(p.jsxs)("div",{className:"Card",children:[Object(p.jsx)("img",{src:this.props.image,width:"600",height:"330"}),Object(p.jsxs)("div",{className:"Description",children:[Object(p.jsx)("h2",{children:Object(p.jsx)("strong",{children:this.props.title})}),Object(p.jsx)("p",{children:this.props.description})," ",Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"SeeMoreBtn",children:Object(p.jsx)(g.a,{variant:"outline-info",onClick:function(t){return e.flipHandler(t)},children:"See More"})})]})]}),Object(p.jsx)("div",{className:"Card",onMouseLeave:function(t){return e.flipHandler(t)},children:Object(p.jsxs)("div",{className:"Description",children:[Object(p.jsx)("ul",{children:c})," ",Object(p.jsx)("br",{}),Object(p.jsx)(g.a,{variant:"outline-info",href:this.props.demo,target:"_blank",children:"Demo"})," ",t]})})]})}}]),i}(n.Component)),v=i.p+"static/media/bee-your-bookkeeper.b0742fad.png",y=i.p+"static/media/sql-search-engine.aa262e0e.png",k=function(){return Object(p.jsx)(d.a,{fluid:!0,children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(f,{image:v,title:"Bee Your Bookkeeper",description:"A web-based family budget app which allows user to record spendings, see previous spending logs and summary.",details:["Language: Javascript","Frontend: React, Redux","Backend: AWS serverless backend (Lambda, API Gateway, DynamoDB)."],demo:"https://master.da8crtrtwkv7x.amplifyapp.com/yourbee/"})}),Object(p.jsx)(b.a,{children:Object(p.jsx)(f,{image:y,title:"Data Exploration Interface",description:"A keyword-driven interface which allows user to explore the data via their foreign-key relationships.",details:["Languages: Python, Javascript, SQL","Frontend: jQuery","Database: utilize invert indexing in Firebase"],demo:"https://yoshuanl.github.io/searchEngine.github.io/",sourceCode:"https://github.com/yoshuanl/searchEngine.github.io"})})]})})},w=i(6),S=function(){return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(w.SocialIcon,{url:"https://github.com/yoshuanl",target:"_blank"})," ",Object(p.jsx)(w.SocialIcon,{url:"https://www.linkedin.com/in/yo-shuan-liu/",target:"_blank"})," ",Object(p.jsx)(w.SocialIcon,{url:"https://www.facebook.com/scullyliu0722/",target:"_blank"})," ",Object(p.jsx)(w.SocialIcon,{url:"https://yoshuanliu.medium.com",target:"_blank"})]})},F=(i(34),function(e){Object(l.a)(i,e);var t=Object(j.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsxs)("div",{className:"Block",children:[Object(p.jsx)("h1",{children:"- About Me -"}),Object(p.jsx)("br",{}),Object(p.jsx)(m,{})]}),Object(p.jsxs)("div",{className:"Block",children:[Object(p.jsx)("h1",{children:"- My Projects -"}),Object(p.jsx)("br",{}),Object(p.jsx)(k,{})]}),Object(p.jsx)("div",{className:"Block",children:Object(p.jsx)(S,{})}),Object(p.jsx)("p",{children:"\xa92021 YoShuanLiu"})]})}}]),i}(n.Component)),I=i.p+"static/media/scullyicon.7e543881.png";var N=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"Name",children:[Object(p.jsx)("img",{className:"MyIcon",src:I,width:"60",display:"inline"})," Scully Liu"]}),Object(p.jsx)(F,{})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;i(e),n(e),c(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.bb8dde56.chunk.js.map