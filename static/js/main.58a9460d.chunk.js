(this["webpackJsonptot-chat"]=this["webpackJsonptot-chat"]||[]).push([[0],{13:function(e,t,a){e.exports={list:"UserList_list__2cFfZ",online:"UserList_online__c3tSj",user:"UserList_user__3pZ39"}},2:function(e,t,a){e.exports={chatWrapper:"Chat_chatWrapper__2l3OG",chatLogWrapper:"Chat_chatLogWrapper__1F6pp",chatLog:"Chat_chatLog__aoI48",greetings:"Chat_greetings__zZ3m4",messageWrapper:"Chat_messageWrapper__3GqJj",message:"Chat_message__3s4-l",messageNickname:"Chat_messageNickname__3qpAM",formWrapper:"Chat_formWrapper__19_qo",inputForm:"Chat_inputForm__9pctt"}},20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),o=(a(25),a(4)),u=(a(26),a(13)),i=a.n(u),l=function(e){var t=e.users,a=e.setTarget,n=t.map((function(e,t){return r.a.createElement("div",{onClick:function(){return a(e.login.username)},key:t,className:i.a.user},r.a.createElement("img",{src:e.picture.thumbnail,alt:"#"}),e.login.username)}));return r.a.createElement("div",{className:i.a.list},r.a.createElement("div",{className:i.a.online},"Online: "),n)},m=a(12),p=a(1),h=a.n(p),f=a(3),d=a(9),g=a(5),v=function(){return fetch("https://randomuser.me/api/?results=10").then((function(e){return e.json()}))},k={authorization:function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("TOT-chat-auth",JSON.stringify(t)),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAuthorization:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("TOT-chat-auth");case 2:if(null!==(t=e.sent)){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",{res:t,auth:!0});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),logout:function(){var e=Object(f.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("TOT-chat-auth");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},b="usersReducer/SET_USERS",E={users:[]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(g.a)({},e,{users:Object(d.a)(t.users)});default:return e}},y=a(2),A=a.n(y),N=function(e){var t=e.type,a=e.sendWorkMessage,s=e.sendFloodMessage,c=e.auth,u=e.target,i=Object(n.useState)(""),l=Object(o.a)(i,2),m=l[0],p=l[1];Object(n.useEffect)((function(){u&&p(u)}),[u]);var h=function(e){"work"===t?(a(e,c.myNick,c.myColor),p("")):"flood"===t&&(s(e,c.myNick,c.myColor),p(""))};return r.a.createElement("form",{className:A.a.inputForm},r.a.createElement("input",{type:"text",value:m,onChange:function(e){return t=e.target.value,p(t);var t},onKeyPress:function(e){return function(e,t){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),h(t),p(""))}(e,m)}}),r.a.createElement("button",{type:"button",className:A.a.submit,onClick:function(e){h(m)}},"submit"))},O=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),s=a[0],c=a[1],u=e.chat,i=e.type,l=e.auth;Object(n.useEffect)((function(){setTimeout((function(){return c(!1)}),6e3)}),[]);var m=u.workChat.map((function(e,t){return r.a.createElement("div",{className:A.a.messageWrapper,key:t},r.a.createElement("div",{style:{color:e.color},className:A.a.messageNickname},e.nickname,":"),r.a.createElement("div",{className:A.a.message},e.message))})),p=u.floodChat.map((function(e,t){return r.a.createElement("div",{className:A.a.messageWrapper,key:t},r.a.createElement("div",{style:{color:e.color},className:A.a.messageNickname},e.nickname,":"),r.a.createElement("div",{className:A.a.message},e.message))}));return r.a.createElement("div",{className:A.a.chatWrapper},r.a.createElement("div",{className:A.a.chatLogWrapper},r.a.createElement("div",{className:A.a.chatLog},"work"===i?m:p),s&&r.a.createElement("div",{className:A.a.greetings},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0430\u0442!")),r.a.createElement("div",{className:A.a.formWrapper},r.a.createElement(N,{target:u.target,auth:l,type:i,sendWorkMessage:e.sendWorkMessage,sendFloodMessage:e.sendFloodMessage})))},C="chatReducer/SEND_WORK",j="chatReducer/SEND_FLOOD",w="chatReducer/TARGET",x={workChat:[{nickname:"Artem",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est. Aliquet nec ullamcorper sit amet risus. Vel eros donec ac odio",color:"#A12312"},{nickname:"Nick",message:"empor orci dapibus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Massa id neque aliquam vestibulum morbi blandit cursus. In est ante in nibh",color:"#4CBB17"},{nickname:"Baron1212",message:"molestie. Dictumst quisque sagittis purus sit amet volutpat.",color:"#9EE788"},{nickname:"AWF",message:"met consectetu",color:"#F594B9"}],floodChat:[{nickname:"FISH",message:" risus. Vel eros donec ac odio tempor orci dapibus. Nec tincidunt praes",color:"#A12312"},{nickname:"_vagner",message:"piscing elit",color:"#337AB7"},{nickname:"Dima",message:"cursus mattis",color:"#B2A5F3"},{nickname:"Artem",message:"ahaha",color:"#A12312"},{nickname:"Artem",message:"sed do",color:"#A12312"},{nickname:"AWF",message:"lol :D",color:"#F594B9"},{nickname:"AWF",message:"molestie. Dictumst :)",color:"#F594B9"},{nickname:"AWF",message:"qwerty123",color:"#F594B9"}],target:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:if(""!==t.msg){var a={nickname:t.myNick,message:t.msg,color:t.myColor};return Object(g.a)({},e,{workChat:[].concat(Object(d.a)(e.workChat),[a])})}return e;case j:if(""!==t.msg){var n={nickname:t.myNick,message:t.msg,color:t.myColor};return Object(g.a)({},e,{floodChat:[].concat(Object(d.a)(e.floodChat),[n])})}return e;case w:return Object(g.a)({},e,{target:"@".concat(t.target)});default:return e}},W=a(6),T=a.n(W),S=function(e){var t=Object(n.useState)("unnamed"),a=Object(o.a)(t,2),s=a[0],c=a[1],u=Object(n.useState)("#ffffff"),i=Object(o.a)(u,2),l=i[0],m=i[1],p=e.auth,h=e.setAuthorization,f=p.colors.map((function(e,t){return l===e?r.a.createElement("div",{style:{backgroundColor:e,width:"40px",height:"40px"},className:T.a.box,key:t}):r.a.createElement("div",{onClick:function(){m(e)},style:{backgroundColor:e},className:T.a.box,key:t})}));return r.a.createElement("div",{className:T.a.authWrapper},r.a.createElement("div",{className:T.a.nicknameAuth},r.a.createElement("span",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0438\u043a\u043d\u0435\u0439\u043c"),r.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",value:s})),r.a.createElement("div",{className:T.a.colorsetter},r.a.createElement("span",null,"\u0412\u044b\u0431\u0435\u0440\u0438 \u0446\u0432\u0435\u0442"),r.a.createElement("div",{className:T.a.colorbox},f)),r.a.createElement("button",{onClick:function(){var e,t;t=l,""===(e=s)?c("unnamed"):h({name:e,clr:t})},className:T.a.btn,type:"button"},"log in"))},R="authReducer/AUTH",B="authReducer/GET_AUTH",M={isAuth:!1,myNick:null,myColor:"#grey",colors:["#4CBB17","#9EE788","#2D572C","#A12312","#E4766C","#73443F","#122FAA","#B2A5F3","#337AB7","#424242","#F594B9"]},z=function(e){return{type:R,data:e}},L=function(e){return{type:B,boolean:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(g.a)({},e,{myNick:t.data.name,myColor:t.data.clr,isAuth:!0});case B:return Object(g.a)({},e,{isAuth:t.boolean});default:return e}},D=Object(m.b)((function(e){return{users:e.usersReducer.users,chat:e.chatReducer,auth:e.authReducer}}),{getUsersThunk:function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:a=e.sent,t((n=a.results,{type:b,users:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},sendWorkMessage:function(e,t,a){return{type:C,msg:e,myNick:t,myColor:a}},sendFloodMessage:function(e,t,a){return{type:j,msg:e,myNick:t,myColor:a}},setAuthorization:function(e){return function(){var t=Object(f.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.authorization(e);case 2:n=t.sent,console.log(n),a(z(n));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getAuthorization:function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAuthorization();case 2:a=e.sent,t(a?z(JSON.parse(a.res)):L(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setTarget:function(e){return{type:w,target:e}},logoutThunk:function(){return function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.logout();case 2:t(L(!1));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)("work"),a=Object(o.a)(t,2),s=a[0],c=a[1],u=e.getUsersThunk,i=e.auth,m=e.getAuthorization,p=e.setTarget,h=e.logoutThunk;Object(n.useEffect)((function(){!i.isAuth&&m()}),[m,i.isAuth]),Object(n.useEffect)((function(){i.isAuth&&u()}),[u,i.isAuth,s]);var f={backgroundColor:"#e7af69"};return i.isAuth?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,"logo")),r.a.createElement("div",{className:"categories"},r.a.createElement("span",{style:"work"===s?f:void 0,onClick:function(){c("work")}},"\u0420\u0430\u0431\u043e\u0442\u0430"),r.a.createElement("span",{style:"flood"===s?f:void 0,onClick:function(){c("flood")}},"\u0424\u043b\u0443\u0434\u0438\u043b\u043a\u0430"),r.a.createElement("span",{onClick:function(){h()},className:"logout"},"log out"))),r.a.createElement("div",{className:"body"},r.a.createElement(l,{users:e.users,setTarget:p}),r.a.createElement(O,{chat:e.chat,auth:i,type:s,sendWorkMessage:e.sendWorkMessage,sendFloodMessage:e.sendFloodMessage}))):r.a.createElement(S,{auth:i,setAuthorization:e.setAuthorization})})),U=a(7),I=a(19),J=Object(U.c)({usersReducer:_,chatReducer:F,authReducer:q}),G=Object(U.d)(J,Object(U.a)(I.a));window.store=G;var H=G;c.a.render(r.a.createElement(m.a,{store:H},r.a.createElement(D,null)),document.getElementById("root"))},6:function(e,t,a){e.exports={authWrapper:"Auth_authWrapper__3FrLz",nicknameAuth:"Auth_nicknameAuth__2904P",btn:"Auth_btn__28Kr8",colorsetter:"Auth_colorsetter__sJgpa",colorbox:"Auth_colorbox__3fQVH",box:"Auth_box__U0nON"}}},[[20,1,2]]]);
//# sourceMappingURL=main.58a9460d.chunk.js.map