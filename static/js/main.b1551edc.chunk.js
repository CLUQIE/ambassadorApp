(this.webpackJsonpambassador=this.webpackJsonpambassador||[]).push([[0],{173:function(e,t,a){e.exports=a(274)},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);a(174),a(200),a(202),a(203),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242);var n=a(0),l=a.n(n),r=a(112),c=a.n(r),o=a(34),i=a.n(o),m=a(78),s=a.n(m),u=a(113),d=a(6),E=a(57),p=a.n(E),f=a(132),h=a.n(f);a(251);function b(e,t,a){return fetch(t,{method:e,headers:{"Content-Type":"application/json"},body:a}).then((function(e){return e.json()}))}var g=a(1),y=function(e){var t=e.fetchedUser,a=e.id,n=e.go,r=l.a.useState(),c=Object(d.a)(r,2),o=c[0],i=c[1],m=l.a.useState(),s=Object(d.a)(m,2),u=s[0],E=s[1],p=l.a.useState(),f=Object(d.a)(p,2),h=f[0],y=f[1],v=l.a.useState(),k=Object(d.a)(v,2),x=k[0],S=k[1],j=l.a.useState(),O=Object(d.a)(j,2),C=O[0],w=O[1],z=l.a.useState(),D=Object(d.a)(z,2),P=D[0],F=D[1],I=l.a.useState(),T=Object(d.a)(I,2),_=T[0],N=T[1],R=l.a.useState(),U=Object(d.a)(R,2),q=U[0],A=U[1],L=l.a.useState(),X=Object(d.a)(L,2),J=X[0],M=X[1],B=l.a.useState(),G=Object(d.a)(B,2),W=G[0],K=G[1],Q=l.a.useState(),V=Object(d.a)(Q,2),Y=V[0],H=V[1],Z=l.a.useState(),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=l.a.useState(),ne=Object(d.a)(ae,2),le=ne[0],re=ne[1];null!=t&&b("POST","https://ambassador-todo.herokuapp.com/access/find",JSON.stringify({vkID:t.id})).then((function(e){i(e[0])})).catch((function(e){return console.log(e)}));return l.a.createElement(g.u,{id:a},l.a.createElement(g.v,{left:l.a.createElement(g.w,{style:{color:"#fc2c38"},onClick:n,"data-to":"events"})},"\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u0447\u0435\u0442\u0430"),l.a.createElement(g.l,null,l.a.createElement(g.k,null,l.a.createElement(g.p,{onChange:function(e){E(e.target.value)},type:"text",name:"name",top:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",required:!0}),l.a.createElement(g.p,{onChange:function(e){y(e.target.value)},type:"text",name:"university",top:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}),l.a.createElement(g.A,{onChange:function(e){A(e.target.value)},top:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u044f",placeholder:" "},l.a.createElement("option",{value:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"),l.a.createElement("option",{value:"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"},"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f"),l.a.createElement("option",{value:"\u0427\u0430\u0441\u0442\u044c \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},"\u0427\u0430\u0441\u0442\u044c \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f")),l.a.createElement(g.A,{onChange:function(e){M(e.target.value)},top:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",placeholder:" "},l.a.createElement("option",{value:"\u041e\u043d\u043b\u0430\u0439\u043d"},"\u041e\u043d\u043b\u0430\u0439\u043d"),l.a.createElement("option",{value:"\u042f\u0440\u043c\u0430\u0440\u043a\u0430 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439"},"\u042f\u0440\u043c\u0430\u0440\u043a\u0430 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439"),l.a.createElement("option",{value:"\u0424\u043e\u0440\u0443\u043c"},"\u0424\u043e\u0440\u0443\u043c"),l.a.createElement("option",{value:"\u0414\u0440\u0443\u0433\u0438\u0435 \u043e\u0444\u0444\u043b\u0430\u0439\u043d"},"\u0414\u0440\u0443\u0433\u0438\u0435 \u043e\u0444\u0444\u043b\u0430\u0439\u043d")),l.a.createElement(g.p,{onChange:function(e){S(e.target.value)},type:"date",name:"data",top:"\u0414\u0430\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}),l.a.createElement(g.A,{onChange:function(e){K(e.target.value)},top:"\u0422\u0438\u043f \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f",placeholder:" "},l.a.createElement("option",{value:"\u0418\u0433\u0440\u0430"},"\u0418\u0433\u0440\u0430"),l.a.createElement("option",{value:"\u041b\u0435\u043a\u0446\u0438\u044f"},"\u041b\u0435\u043a\u0446\u0438\u044f"),l.a.createElement("option",{value:"\u041c\u0430\u0441\u0442\u0435\u0440 \u043a\u043b\u0430\u0441\u0441"},"\u041c\u0430\u0441\u0442\u0435\u0440 \u043a\u043b\u0430\u0441\u0441"),l.a.createElement("option",{value:"\u0421\u0442\u0435\u043d\u0434"},"\u0421\u0442\u0435\u043d\u0434"),l.a.createElement("option",{value:"\u0414\u0440\u0443\u0433\u043e\u0435"},"\u0414\u0440\u0443\u0433\u043e\u0435")),l.a.createElement(g.F,{onChange:function(e){H(e.target.value)},name:"description",top:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),l.a.createElement(g.p,{onChange:function(e){w(e.target.value)},type:"text",name:"participants",top:"\u0420\u043e\u043b\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),l.a.createElement(g.p,{onChange:function(e){re(e.target.value)},type:"text",name:"participants",top:"\u041e\u0442\u0437\u044b\u0432\u044b \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"}),l.a.createElement(g.p,{onChange:function(e){N(e.target.value)},type:"number",name:"participants",top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"}),l.a.createElement(g.F,{onChange:function(e){F(e.target.value)},name:"links",top:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043f\u043e\u0441\u0442\u044b"}),l.a.createElement(g.F,{onChange:function(e){te(e.target.value)},name:"notes",top:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"}),l.a.createElement(g.c,{style:{backgroundColor:"#fc2c38"},type:"submit",size:"xl",onClick:function(){b("POST","https://ambassador-todo.herokuapp.com/event",JSON.stringify({participationForm:q,eventForm:J,nameEvent:u,eventPlace:h,date:x,eventType:W,description:Y,companyRole:C,participants:_,participantsCallback:le,uploadsLinks:"",publicationLinks:P,notes:ee,ambassador:o.fullName,university:o.university})).catch((function(e){return console.log(e)}))},onMouseUp:n,"data-to":"events"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))},v=a(122),k=a.n(v),x=a(30),S=a.n(x),j=a(31),O=a.n(j),C=a(32),w=a.n(C),z=a(33),D=a.n(z),P=a(56),F=a.n(P),I=a(123),T=a.n(I),_="eventsInfo",N=function(e){var t=e.fetchedUser,a=e.id,n=e.go,r=l.a.useState(!0),c=Object(d.a)(r,2),o=c[0],i=c[1],m=l.a.useState(!0),s=Object(d.a)(m,2),u=(s[0],s[1]),E=l.a.useState(),p=Object(d.a)(E,2),f=p[0],h=p[1],y=l.a.useState(null),v=Object(d.a)(y,2),x=v[0],j=v[1],C=l.a.useState(1),z=Object(d.a)(C,2),P=z[0],I=z[1],N=function(){j(null)},R=[];null!=t&&b("POST","https://ambassador-todo.herokuapp.com/access/find",JSON.stringify({vkID:t.id})).then((function(e){b("POST","https://ambassador-todo.herokuapp.com/event/ambassador",JSON.stringify({ambassador:e[0].fullName})).then((function(e){h(e),i(!1),u(!1)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));if(!0===o)return l.a.createElement(g.u,{id:a},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(g.z,{style:{marginTop:"50%"}})));null===x?R=[]:-1!==R.indexOf(x)?R=R.splice(0,R.indexOf(x)+1):R.push(x);var U=l.a.createElement(g.t,{activeModal:x,onClose:N},l.a.createElement(g.r,{id:_,onClose:N,header:l.a.createElement(g.s,{left:l.a.createElement(g.x,{onClick:N},l.a.createElement(F.a,null))},f?f[P].nameEvent:"empty")},l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0424\u043e\u0440\u043c\u0430\u0442 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},f?f[P].eventForm:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"},f?f[P].eventPlace:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0443\u0447\u0430\u0441\u0442\u0438\u044f"},f?f[P].participationForm:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0414\u0430\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"},f?f[P].date:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0422\u0438\u043f \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u0442\u0438\u044f"},f?f[P].eventType:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0420\u043e\u043b\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"},f?f[P].companyRole:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},f?f[P].description:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u041a\u043e\u043b\u0438\u0447\u0435\u0442\u0441\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432"},f?f[P].participants:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},f?f[P].university:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0420\u043e\u043b\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"},f?f[P].companyRole:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0421\u0441\u044b\u043b\u043a\u0438"},f?f[P].publicationLinks:"empty")),l.a.createElement(g.f,null,l.a.createElement(g.o,{header:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"},f?f[P].notes:"empty"))));return l.a.createElement(g.G,{activePanel:a,modal:U},l.a.createElement(g.u,{id:a},l.a.createElement(g.v,{left:l.a.createElement(g.x,null,l.a.createElement(k.a,{style:{color:"#fc2c38"},onClick:n,"data-to":"home"}))},"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(g.l,null,l.a.createElement(g.i,null,f.map((function(e,t){return l.a.createElement(g.b,{header:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{fontWeight:"300",color:"#fc2c38",marginBottom:"10px"}},e.eventForm,", ",e.eventType)," ",l.a.createElement("br",null),l.a.createElement("span",null,e.nameEvent)),subheader:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement(T.a,null)),l.a.createElement("div",{style:{display:"inline-block"}},l.a.createElement("span",{style:{}},e.date))),asideMode:"expand",onClick:function(){I(t),j(_)}})})))),l.a.createElement(g.j,{style:{marginTop:"100px"}},l.a.createElement(g.C,null,l.a.createElement(g.D,{style:{color:"#fc2c38"},onClick:n,"data-to":"events",text:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},l.a.createElement(O.a,{style:{color:"#fc2c38"}})),l.a.createElement(g.D,{onClick:n,"data-to":"achivements",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},l.a.createElement(D.a,null)),l.a.createElement(g.D,{onClick:n,"data-to":"info",text:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"},l.a.createElement(w.a,null)),l.a.createElement(g.D,{onClick:n,"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(S.a,{width:32,height:32}))))))},R=a(27),U=a.n(R),q=function(e){var t=e.id,a=e.go;return l.a.createElement(g.u,{id:t},l.a.createElement(g.v,null,"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u0420\u0435\u0441\u0443\u0440\u0441\u044b")},l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://cloud.mail.ru/public/25Qx/czjsThY2z"},"\u041f\u0430\u043f\u043a\u0430 \u043d\u0430 \u041e\u0431\u043b\u0430\u043a\u0435")),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e")},l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://www.youtube.com/user/TPMGTU/videos"},"YouTube-\u043a\u0430\u043d\u0430\u043b \u0422\u0435\u0445\u043d\u043e\u0441\u0442\u0440\u0438\u043c"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://www.corp.mail.ru"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 Mail.ru Group")),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u041c\u0435\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f")},l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://vk.com/video-153502007_456239172?list=5df1abb45183e47f5e"},"\u0418\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0441 \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u043c \u0413\u0440\u0438\u0448\u0438\u043d\u044b\u043c"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://vk.com/video-153502007_456239241"},"\u0412\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435 \u0411\u043e\u0440\u0438\u0441\u0430 \u0414\u043e\u0431\u0440\u043e\u0434\u0435\u0435\u0432\u0430"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://thebell.io/boris-dobrodeev-mail-ru-group-legkie-modeli-v-internete-zakonchilis"},"\u0418\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0411\u043e\u0440\u0438\u0441\u0430 \u0414\u043e\u0431\u0440\u043e\u0434\u0435\u0435\u0432\u0430"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://www.rbc.ru/interview/technology_and_media/16/12/2019/5dee6c7d9a794758a559c774"},"\u0418\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0411\u043e\u0440\u0438\u0441\u0430 \u0414\u043e\u0431\u0440\u043e\u0434\u0435\u0435\u0432\u0430"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://corp.mail.ru/ru/company/strategy_ceo/"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0440\u0430\u0441\u0441\u043a\u0430\u0437 \u0411\u043e\u0440\u0438\u0441\u0430 \u0414\u043e\u0431\u0440\u043e\u0434\u0435\u0435\u0432\u0430 \u043e \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://corp.imgsmail.ru/media/files/esg2019.pdf"},"\u041f\u0435\u0440\u0432\u044b\u0439 \u043e\u0442\u0447\u0435\u0442 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u043e\u0433\u043e \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f (ESG-\u043e\u0442\u0447\u0435\u0442)"),l.a.createElement(g.f,{expandable:!0,before:l.a.createElement(U.a,{style:{color:"#fc2c38"}}),target:"_blank",href:"https://corp.imgsmail.ru/media/files/mail.rugrouparfy2019.pdf"},"\u0413\u043e\u0434\u043e\u0432\u043e\u0439 \u043e\u0442\u0447\u0435\u0442 2019 \u0433\u043e\u0434\u0430")),l.a.createElement(g.j,{style:{marginTop:"100px"}},l.a.createElement(g.C,null,l.a.createElement(g.D,{onClick:a,"data-to":"events",text:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},l.a.createElement(O.a,null)),l.a.createElement(g.D,{onClick:a,"data-to":"achivements",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},l.a.createElement(D.a,null)),l.a.createElement(g.D,{style:{color:"#fc2c38"},onClick:a,"data-to":"info",text:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"},l.a.createElement(w.a,{style:{color:"#fc2c38"}})),l.a.createElement(g.D,{onClick:a,"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(S.a,{width:32,height:32})))))},A=function(e){e.fetchedUser;var t=e.id,a=e.go,n=l.a.useState(),r=Object(d.a)(n,2),c=r[0],o=r[1],i=l.a.useState(!0),m=Object(d.a)(i,2),s=m[0],u=m[1],E=l.a.useState(!0),p=Object(d.a)(E,2),f=p[0],h=p[1];return f&&b("POST","https://ambassador-todo.herokuapp.com/access/role",JSON.stringify({role:"ambassador"})).then((function(e){o(e),u(!1),h(!1)})).catch((function(e){return console.log(e)})),!0===s?l.a.createElement(g.u,{id:t},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(g.z,{style:{marginTop:"50%"}}))):l.a.createElement(g.u,{id:t},l.a.createElement(g.v,null,"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),l.a.createElement(g.l,null,c.map((function(e,t){return l.a.createElement(g.B,{href:"https://vk.com/id"+e.vkID,target:"_blank",key:e._id,after:4*(t+1)+" score",description:e.university},e.fullName)}))),l.a.createElement(g.j,null,l.a.createElement(g.C,null,l.a.createElement(g.D,{onClick:a,"data-to":"events",text:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},l.a.createElement(O.a,null)),l.a.createElement(g.D,{style:{color:"#fc2c38"},onClick:a,"data-to":"achivements",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},l.a.createElement(D.a,{style:{color:"#fc2c38"}})),l.a.createElement(g.D,{onClick:a,"data-to":"info",text:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"},l.a.createElement(w.a,null)),l.a.createElement(g.D,{onClick:a,"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(S.a,{width:32,height:32})))))},L=a(124),X=a.n(L),J=a(125),M=a.n(J),B=a(126),G=a.n(B),W=a(127),K=a.n(W),Q=a(128),V=a.n(Q),Y=a(129),H=a.n(Y),Z=function(e){var t=e.fetchedUser,a=e.id,n=e.go,r=l.a.useState(!0),c=Object(d.a)(r,2),o=c[0],i=c[1],m=l.a.useState(),s=Object(d.a)(m,2),u=s[0],E=s[1],p=l.a.useState(),f=Object(d.a)(p,2),h=f[0],y=f[1];null!=t&&b("POST","https://ambassador-todo.herokuapp.com/access/find",JSON.stringify({vkID:t.id})).then((function(e){E(e[0]),b("POST","https://ambassador-todo.herokuapp.com/event/ambassador",JSON.stringify({ambassador:e[0].fullName})).then((function(e){y(e),i(!1)}))})).catch((function(e){return console.log(e)}));return!0===o?l.a.createElement(g.u,{id:a},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(g.z,{style:{marginTop:"50%"}}))):l.a.createElement(g.u,{id:a},l.a.createElement(g.v,{left:l.a.createElement(g.x,null,l.a.createElement(X.a,{style:{color:"#fc2c38"},onClick:n,"data-to":"editprofile"}))},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),t&&l.a.createElement("div",{style:{marginBottom:100}},l.a.createElement(g.l,null,l.a.createElement(g.y,{href:"https://vk.com/id"+u.vkID,target:"_blank",before:l.a.createElement(g.a,{size:72,src:t.photo_100})},l.a.createElement("span",{style:{fontSize:"18px"}},u.fullName),l.a.createElement("br",null))),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")},l.a.createElement(g.f,{before:l.a.createElement(g.a,{style:{background:"#fc2c38"},size:28,shadow:!1},l.a.createElement(M.a,{fill:"var(--white)"})),indicator:l.a.createElement(g.h,{key:u._id},h.length)},"\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0439"),l.a.createElement(g.f,{before:l.a.createElement(g.a,{style:{background:"#fc2c38"},size:28,shadow:!1},l.a.createElement(G.a,{fill:"var(--white)"})),indicator:l.a.createElement(g.h,{key:u._id},h.length)},"\u0412\u043d\u0435\u0448\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(g.f,{before:l.a.createElement(g.a,{style:{background:"#fc2c38"},size:28,shadow:!1},l.a.createElement(K.a,{fill:"var(--white)"})),indicator:l.a.createElement(g.h,{key:u._id},h.length)},"\u041e\u043d\u043b\u0430\u0439\u043d \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(g.f,{before:l.a.createElement(g.a,{style:{background:"#fc2c38"},size:28,shadow:!1},l.a.createElement(V.a,{fill:"var(--white)"})),indicator:l.a.createElement(g.h,{key:u._id},h.length)},"\u041e\u0444\u043b\u0430\u0439\u043d \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(g.f,{before:l.a.createElement(g.a,{style:{background:"#fc2c38"},size:28,shadow:!1},l.a.createElement(H.a,{fill:"var(--white)"})),indicator:l.a.createElement(g.h,{key:u._id},h.length)},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u043e\u0432")),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435")},l.a.createElement(g.f,{indicator:u.town},"\u0413\u043e\u0440\u043e\u0434"),l.a.createElement(g.f,{indicator:u.birthday},"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),l.a.createElement(g.f,{indicator:u.phoneNumber},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),l.a.createElement(g.f,{indicator:u.personalEmail},"Email"),l.a.createElement(g.f,{indicator:u.clothingSize},"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u0435\u0436\u0434\u044b"),l.a.createElement(g.f,{indicator:u.personalPostalAddress},"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0435\u0440\u0435\u0441"),l.a.createElement(g.f,{indicator:u.latinFullName},"\u0424\u0418\u041e \u043f\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438"),l.a.createElement(g.f,{indicator:u.university},"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435"),l.a.createElement(g.f,{indicator:u.statusInUniversity},"\u0421\u0442\u0430\u0442\u0443\u0441"),l.a.createElement(g.f,{indicator:u.facultyFull},"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442"),l.a.createElement(g.f,{indicator:u.specialty},"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),l.a.createElement(g.f,{indicator:u.universityPostalAddress},"\u0410\u0434\u0440\u0435\u0441 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u044f"),l.a.createElement(g.f,{indicator:u.rectorFullName},"\u0424\u0418\u041e \u0440\u0435\u043a\u0442\u043e\u0440\u0430"),l.a.createElement(g.f,{indicator:u.rectorPostalAddress},"Email \u0440\u0435\u043a\u0442\u043e\u0440\u0430"))),l.a.createElement(g.j,null,l.a.createElement(g.C,{style:{marginTop:"100px"}},l.a.createElement(g.D,{onClick:n,"data-to":"events",text:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},l.a.createElement(O.a,null)),l.a.createElement(g.D,{onClick:n,"data-to":"achivements",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},l.a.createElement(D.a,null)),l.a.createElement(g.D,{onClick:n,"data-to":"info",text:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"},l.a.createElement(w.a,null)),l.a.createElement(g.D,{style:{color:"#fc2c38"},onClick:n,"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(S.a,{style:{color:"#fc2c38"},width:32,height:32})))))},$=function(e){var t=e.fetchedUser,a=e.id,n=e.go;null!=t&&b("POST","https://ambassador-todo.herokuapp.com/access/find",JSON.stringify({vkID:t.id})).then((function(e){E(e[0]),i(!1)})).catch((function(e){return console.log(e)}));var r=l.a.useState(!0),c=Object(d.a)(r,2),o=c[0],i=c[1],m=l.a.useState(),s=Object(d.a)(m,2),u=s[0],E=s[1],p=l.a.useState(),f=Object(d.a)(p,2),h=f[0],y=f[1],v=l.a.useState(),k=Object(d.a)(v,2),x=k[0],S=k[1],j=l.a.useState(),O=Object(d.a)(j,2),C=O[0],w=O[1],z=l.a.useState(),D=Object(d.a)(z,2),P=D[0],F=D[1],I=l.a.useState(),T=Object(d.a)(I,2),_=T[0],N=T[1],R=l.a.useState(),U=Object(d.a)(R,2),q=U[0],A=U[1],L=l.a.useState(),X=Object(d.a)(L,2),J=X[0],M=X[1],B=l.a.useState(),G=Object(d.a)(B,2),W=G[0],K=G[1],Q=l.a.useState(),V=Object(d.a)(Q,2),Y=V[0],H=V[1],Z=l.a.useState(),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=l.a.useState(),ne=Object(d.a)(ae,2),le=ne[0],re=ne[1],ce=l.a.useState(),oe=Object(d.a)(ce,2),ie=oe[0],me=oe[1],se=l.a.useState(),ue=Object(d.a)(se,2),de=ue[0],Ee=ue[1],pe=l.a.useState(),fe=Object(d.a)(pe,2),he=fe[0],be=fe[1],ge=l.a.useState(),ye=Object(d.a)(ge,2),ve=ye[0],ke=ye[1],xe=l.a.useState(),Se=Object(d.a)(xe,2),je=Se[0],Oe=Se[1];return!0===o?l.a.createElement(g.u,{id:a},l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(g.z,{style:{marginTop:"50%"}}))):l.a.createElement(g.u,{id:a},l.a.createElement(g.v,{left:l.a.createElement(g.w,{style:{color:"#fc2c38"},onClick:n,"data-to":"profile",onMouseUp:n})},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),l.a.createElement(g.l,null,l.a.createElement(g.k,null,l.a.createElement(g.p,{onChange:function(e){be(e.target.value)},placeholder:u.fullName,type:"text",name:"fullname",top:"\u0424\u0418\u041e",required:!0}),l.a.createElement(g.p,{onChange:function(e){ke(e.target.value)},placeholder:u.latinFullName,type:"text",name:"fullname",top:"\u0424\u0418\u041e",required:!0}),l.a.createElement(g.p,{onChange:function(e){w(e.target.value)},placeholder:u.personalEmail,type:"text",name:"email",top:"\u041b\u0438\u0447\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",required:!0}),l.a.createElement(g.p,{onChange:function(e){F(e.target.value)},placeholder:u.birthday,type:"date",name:"dateofbirth",top:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",required:!0}),l.a.createElement(g.p,{onChange:function(e){Oe(e.target.value)},placeholder:u.town,type:"text",name:"city",top:"\u0413\u043e\u0440\u043e\u0434",required:!0}),l.a.createElement(g.p,{onChange:function(e){y(e.target.value)},placeholder:u.university,type:"text",name:"university",top:"\u0423\u0447\u0435\u0431\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0435",required:!0}),l.a.createElement(g.p,{onChange:function(e){N(e.target.value)},placeholder:u.universityPostalAddress,type:"text",name:"pochtavuz",top:"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0435\u0440\u0435\u0441 \u0412\u0423\u0417\u0430",required:!0}),l.a.createElement(g.p,{onChange:function(e){A(e.target.value)},placeholder:u.rectorFullName,type:"text",name:"fiorector",top:"\u0424\u0418\u041e \u0440\u0435\u043a\u0442\u043e\u0440\u0430",required:!0}),l.a.createElement(g.p,{onChange:function(e){M(e.target.value)},placeholder:u.rectorPostalAddress,ype:"text",name:"emailrector",top:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u043a\u0442\u043e\u0440\u0430",required:!0}),l.a.createElement(g.A,{onChange:function(e){K(e.target.value)},placeholder:u.statusInUniversity,top:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0432 \u0412\u0423\u0417\u0435"},l.a.createElement("option",{value:"1 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"},"1 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"),l.a.createElement("option",{value:"2 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"},"2 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"),l.a.createElement("option",{value:"3 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"},"3 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"),l.a.createElement("option",{value:"4 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"},"4 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"),l.a.createElement("option",{value:"1 \u043a\u0443\u0440\u0441 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"},"1 \u043a\u0443\u0440\u0441 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"),l.a.createElement("option",{value:"2 \u043a\u0443\u0440\u0441 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"},"2 \u043a\u0443\u0440\u0441 \u043c\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u0442\u0443\u0440\u0430"),l.a.createElement("option",{value:"1 \u043a\u0443\u0440\u0441 \u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440\u0438\u0430\u0442"},"\u0410\u0441\u043f\u0438\u0440\u0430\u043d\u0442"),l.a.createElement("option",{value:"\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0412\u0423\u0417\u0430"},"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0412\u0423\u0417\u0430")),l.a.createElement(g.p,{onChange:function(e){H(e.target.value)},placeholder:u.facultyFull,type:"text",name:"facultatifull",top:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442 \u043f\u043e\u043b\u043d\u044b\u0439",required:!0}),l.a.createElement(g.p,{onChange:function(e){te(e.target.value)},placeholder:u.facultyShortly,type:"text",name:"facultatiless",top:"\u0424\u0430\u043a\u0443\u043b\u044c\u0442\u0435\u0442 \u043a\u0440\u0430\u0442\u043a\u043e",required:!0}),l.a.createElement(g.p,{onChange:function(e){re(e.target.value)},placeholder:u.specialty,type:"text",name:"speciality",top:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",required:!0}),l.a.createElement(g.p,{onChange:function(e){me(e.target.value)},placeholder:u.personalPostalAddress,type:"text",name:"pochtaadress",top:"\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0435\u0440\u0441 (\u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u043c)",required:!0}),l.a.createElement(g.A,{onChange:function(e){Ee(e.target.value)},placeholder:u.clothingSize,top:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043e\u0434\u0435\u0436\u0434\u044b"},l.a.createElement("option",{value:"XS \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"XS \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"S \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"S \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"M \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"M \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"L \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"L \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"XL \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"XL \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"XXL \u043c\u0443\u0436\u0441\u043a\u043e\u0439"},"XXL \u043c\u0443\u0436\u0441\u043a\u043e\u0439"),l.a.createElement("option",{value:"XXS \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"XXS \u0436\u0435\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("option",{value:"XS \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"XS \u0436\u0435\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("option",{value:"S \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"S \u0436\u0435\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("option",{value:"M \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"M \u0436\u0435\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("option",{value:"L \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"L \u0436\u0435\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("option",{value:"XL \u0436\u0435\u043d\u0441\u043a\u0438\u0439"},"XL \u0436\u0435\u043d\u0441\u043a\u0438\u0439")),l.a.createElement(g.p,{onChange:function(e){S(e.target.value)},placeholder:u.phoneNumber,pattern:"[0-9]{2}\\.[0-9]{2}\\.[0-9]{4}",type:"number",name:"phonenumber",top:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",required:!0}),l.a.createElement(g.g,null,"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441\u043e \u0432\u0441\u0435\u043c, \u0447\u0442\u043e \u0432\u044b ",l.a.createElement(g.q,null,"\u0442\u0430\u043c")," \u043f\u043e\u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438"),l.a.createElement(g.c,{style:{backgroundColor:"#fc2c38"},type:"submit",size:"xl",onClick:function(){b("POST","https://ambassador-todo.herokuapp.com/access/update",JSON.stringify({_id:u._id,vkID:u.vkID,avatar:" ",achievements:" ",phoneNumber:x,birthday:P,fullName:he,latinFullName:ve,personalEmail:C,town:je,university:h,universityPostalAddress:_,rectorFullName:q,rectorPostalAddress:J,statusInUniversity:W,facultyFull:Y,facultyShortly:ee,specialty:le,personalPostalAddress:ie,clothingSize:de}))},onMouseUp:n,"data-to":"profile"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))},ee="http://pngimg.com/uploads/bitcoin/bitcoin_PNG31.png",te=function(e){var t=e.id,a=e.go;return l.a.createElement(g.u,{id:t},l.a.createElement(g.v,{left:l.a.createElement(g.w,{style:{color:"#fc2c38"},onClick:a,"data-to":"profile"})},"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"),l.a.createElement(g.l,{separator:"hide"},l.a.createElement(g.e,null,l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee})))),l.a.createElement(g.e,null,l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee})))),l.a.createElement(g.e,null,l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))),l.a.createElement(g.d,{size:"s"},l.a.createElement("div",{style:{height:96,borderRadius:10}},l.a.createElement("img",{alt:"badge",style:{width:"100%",height:96,borderRadius:10,objectFit:"cover",objectPosition:"center",zIndex:0},src:ee}))))))},ae=a(130),ne=a.n(ae),le=a(131),re=a.n(le),ce=function(e){var t=e.id,a=e.go;return l.a.createElement(ne.a,{id:t},l.a.createElement(re.a,{left:l.a.createElement(g.w,{style:{color:"#F05C44"},onClick:a,"data-to":"events"})},"K-studio"),l.a.createElement(g.l,{separator:"hide"},l.a.createElement(g.e,null,l.a.createElement(g.d,{size:"l",mode:"shadow"},l.a.createElement("div",null,l.a.createElement("img",{alt:"img",style:{height:234,width:"100%",objectFit:"cover",borderTopLeftRadius:10,borderTopRightRadius:10},src:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"}),l.a.createElement(g.i,null,l.a.createElement(g.m,{mode:"secondary"},"\u041e \u041c\u0415\u0420\u041e\u041f\u0420\u0418\u042f\u0422\u0418\u0418"),l.a.createElement(g.n,{style:{fontSize:17,fontWeight:600,marginLeft:12,marginBottom:6}},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement(g.E,{style:{fontSize:15,fontWeight:"normal",marginLeft:12}},"\u041c\u043d\u043e\u0433\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0438")))))),l.a.createElement(g.l,{separator:"hide"},l.a.createElement(g.e,null,l.a.createElement(g.d,{size:"l",mode:"shadow"},l.a.createElement(g.i,null,l.a.createElement(g.m,{mode:"secondary"}),l.a.createElement(g.l,{header:l.a.createElement(g.m,{mode:"secondary"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),style:{marginBottom:100}},l.a.createElement(g.f,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a"),l.a.createElement(g.f,null,"\u0421\u0441\u044b\u043b\u043a\u0438"),l.a.createElement(g.f,null,"\u0418 \u0442\u0434")))))),l.a.createElement(g.j,{style:{marginTop:"100px"}},l.a.createElement(g.C,null,l.a.createElement(g.D,{style:{color:"#fc2c38"},onClick:a,"data-to":"events",text:"\u041c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"},l.a.createElement(O.a,{style:{color:"#fc2c38"}})),l.a.createElement(g.D,{onClick:a,"data-to":"achivements",text:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},l.a.createElement(D.a,null)),l.a.createElement(g.D,{onClick:a,"data-to":"info",text:"\u0411\u0430\u0437\u0430 \u0437\u043d\u0430\u043d\u0438\u0439"},l.a.createElement(w.a,null)),l.a.createElement(g.D,{onClick:a,"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(S.a,{width:32,height:32})))))},oe="profile",ie=function(){var e=Object(n.useState)(oe),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(d.a)(c,2),m=o[0],E=o[1],f=Object(n.useState)(l.a.createElement(h.a,{size:"large"})),b=Object(d.a)(f,2),g=b[0],v=b[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,E(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail;t.type,t.data})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return l.a.createElement(p.a,{activePanel:a,popout:g},l.a.createElement(y,{id:"home",fetchedUser:m,go:k}),l.a.createElement(N,{id:"events",fetchedUser:m,go:k}),l.a.createElement(q,{id:"info",go:k}),l.a.createElement(A,{id:"achivements",fetchedUser:m,go:k}),l.a.createElement(Z,{id:"profile",fetchedUser:m,go:k}),l.a.createElement($,{id:"editprofile",fetchedUser:m,go:k}),l.a.createElement(te,{id:"badge",go:k}),l.a.createElement(ce,{id:"infoevents",go:k}))};a(273);i.a.send("VKWebAppInit"),c.a.render(l.a.createElement(ie,null),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.b1551edc.chunk.js.map