(this["webpackJsonpreact-turners-chatbot"]=this["webpackJsonpreact-turners-chatbot"]||[]).push([[0],{44:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(13),a=n.n(i),r=n(4),s=n.n(r),l=n(14),h=n(15),d=n(16),u=n(19),p=n(18),b=n(17),x=n.n(b),k="0mnFPMfAqig.GdxGmu4rPqN9lz9qAlY2Oerz5sD7CpSq8zNGc1EWhWA";console.log(k);var j=x.a.create({baseURL:"https://webchat.botframework.com",headers:{Authorization:"BotConnector "+k}}),m=n(0),f=function(t){var e=t.token;return Object(m.jsx)("div",{id:"chatbot",children:Object(m.jsx)("iframe",{title:"Turners Cars FAQ Chat Bot",id:"chat",src:""===e?"":"https://webchat.botframework.com/embed/TurnersCarsFAQBot?t="+e,style:{maxWidth:"300px",width:"100%",minHeight:"400px"}})})},C=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(h.a)(this,n);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={token:"",chatClicked:!1},t.onStart=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("/api/tokens",{});case 2:n=e.sent,t.setState({token:n.data});case 4:case"end":return e.stop()}}),e)}))),t.onClickOpen=function(){t.setState({chatClicked:!0})},t.onClickClose=function(){t.setState({chatClicked:!1})},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.onStart()}},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"chatbot-container",style:{display:"flex",flexDirection:"column",verticalAlign:"middle",position:"absolute",bottom:"0px",right:"0px"},children:[Object(m.jsx)("div",{id:"chatbot-close",style:{paddingBottom:"5px"},children:this.state.chatClicked?Object(m.jsx)("i",{className:"close icon",style:{background:"#da5050",width:"30px",height:"30px",borderRadius:"50%",paddingTop:"6px",color:"white",cursor:"pointer",fontSize:"20px"},onClick:this.onClickClose}):null}),Object(m.jsx)("div",{children:this.state.chatClicked?Object(m.jsx)(f,{token:this.state.token}):null}),Object(m.jsx)("div",{id:"chatbot-button",children:this.state.chatClicked?null:Object(m.jsx)("i",{className:"comments outline icon",style:{position:"absolute",bottom:"10px",right:"10px",background:"#2e90d1",width:"60px",height:"60px",borderRadius:"50%",paddingTop:"20px",color:"white",cursor:"pointer",fontSize:"40px"},onClick:this.onClickOpen})})]})}}]),n}(c.a.Component);a.a.render(Object(m.jsx)(C,{}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.eee4f55e.chunk.js.map