(this["webpackJsonpfrontend-candidate-task"]=this["webpackJsonpfrontend-candidate-task"]||[]).push([[0],{43:function(e,t,r){},44:function(e,t,r){},70:function(e,t,r){"use strict";r.r(t),r.d(t,"store",(function(){return A}));var n=r(0),a=r.n(n),c=r(17),s=r.n(c),o=(r(43),r(44),r(19)),u=r(4),i=r(5),j=r(22),d=r(11),l=r(1),b=["component","path","render"],p=function(e){var t=e.component,r=e.path,n=(e.render,Object(j.a)(e,b)),a=Object(d.c)((function(e){return e.loggedReducer.isLogged}));return Object(l.jsx)(u.b,Object(i.a)(Object(i.a)({exact:!0,path:r},n),{},{render:function(e){return a?Object(l.jsx)(t,Object(i.a)({},e)):Object(l.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},m=["component","path","props","render"];var O=function(e){var t=e.component,r=e.path,n=(e.props,e.render,Object(j.a)(e,m));return Object(l.jsx)(u.b,Object(i.a)(Object(i.a)({exact:!0,path:r},n),{},{render:function(e){return JSON.parse(localStorage.getItem("logged"))?Object(l.jsx)(u.a,{to:{pathname:"/welcome",state:{from:e.location}}}):Object(l.jsx)(t,Object(i.a)({},e))}}))};var f=function(e){var t=Object(d.b)(),r=Object(d.c)((function(e){return e.loggedReducer.user.username}));return Object(l.jsxs)("div",{className:"form-window",children:[Object(l.jsx)("h2",{className:"form-header",children:"You are logged in!"}),Object(l.jsxs)("div",{className:"welcome-board",children:[Object(l.jsxs)("h4",{className:"welcome-message",children:["Welcome ",Object(l.jsxs)("span",{style:{color:"hsl(296, 21%, 41%)"},children:[r,"!"]})]}),Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t({type:"LOGOUT"}),localStorage.clear()},className:"btn log-out",children:"Log out"})]})]})},h=r(12),g=r.n(h),x=r(20),w=r(15),v=function(e){return new RegExp(".{3,}").test(e)},N=r(38),S=r.n(N),y=function(){return new Promise((function(e,t){S.a.get("data.json").then((function(t){e({users:t.data.users})})).catch((function(e){return t(e)}))}))},L=function(){var e=Object(x.a)(g.a.mark((function e(t){var r,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return r=e.sent,n=r.users.filter((function(e){return e.username===t.username&&e.password===t.password})),e.abrupt("return",n.length>0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=r(27),k=r(28);var C=function(e){var t=Object(n.useState)({username:"",password:""}),r=Object(w.a)(t,2),a=r[0],c=r[1],s=Object(n.useState)({emailError:!1,passwordError:!1}),o=Object(w.a)(s,2),u=o[0],j=o[1],b=Object(n.useState)(!1),p=Object(w.a)(b,2),m=p[0],O=p[1],f=Object(n.useState)(!1),h=Object(w.a)(f,2),N=h[0],S=h[1],y=Object(d.b)(),C=function(){var e=Object(x.a)(g.a.mark((function e(t){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S(!1),j({passwordError:!1,emailError:!1}),O(!1),""!==a.username&&""!==a.password){e.next=7;break}return S(!0),e.abrupt("return");case 7:if(n=a.username,new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$").test(n)){e.next=10;break}return j(Object(i.a)(Object(i.a)({},u),{},{emailError:!0})),e.abrupt("return");case 10:if(v(a.password)){e.next=13;break}return j(Object(i.a)(Object(i.a)({},u),{},{passwordError:!0})),e.abrupt("return");case 13:return e.next=15,L(a);case 15:if(e.sent){e.next=19;break}return O(!0),e.abrupt("return");case 19:return r={user:a,isLogged:!0},localStorage.setItem("logged",JSON.stringify(r)),y({type:"LOGIN",payload:a}),window.location.href="./welcome",e.abrupt("return");case 24:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"form-window",children:[Object(l.jsx)("h2",{className:"form-header",children:"Login form"}),Object(l.jsxs)("form",{onSubmit:C,autoComplete:"nope",children:[N&&Object(l.jsx)("h4",{className:"form-error",children:"Fields are required"}),u.emailError&&Object(l.jsx)("h4",{className:"form-error",children:"Email is invalid"}),u.passwordError&&Object(l.jsx)("h4",{className:"form-error",children:"Password is invalid"}),m&&Object(l.jsx)("h4",{className:"form-error",children:"Your details does not match"}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",{type:"text",placeholder:"Username",autoComplete:"nope",id:"name",name:"name",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{username:e.target.value}))},value:a.username}),Object(l.jsx)(E.a,{icon:k.b,className:"icon"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",{type:"password",placeholder:"Password",id:"password",name:"password",onChange:function(e){return c(Object(i.a)(Object(i.a)({},a),{},{password:e.target.value}))},value:a.password}),Object(l.jsx)(E.a,{icon:k.a,className:"icon"})]}),Object(l.jsx)("input",{type:"submit",value:"Sign in",className:"enter btn"})]})]})};var I=function(){return Object(l.jsx)("h1",{className:"not-found",children:"404 not found"})};var F=function(){return Object(l.jsx)(o.a,{basename:"/redux-login-form",children:Object(l.jsxs)(u.d,{children:[Object(l.jsx)(O,{component:C,exact:!0,path:"/"}),Object(l.jsx)(p,{component:f,exact:!0,path:"/welcome"}),Object(l.jsx)(u.b,{path:"*",component:I})]})})};var J=function(){return Object(l.jsx)(F,{})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,71)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},R=r(21),G=JSON.parse(localStorage.getItem("logged"))||{user:{},isLogged:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{user:t.payload.user,isLogged:!0};case"LOGOUT":return{user:"",isLogged:!1};default:return e}},z=Object(R.a)({loggedReducer:T}),A=Object(R.b)(z);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d.a,{store:A,children:Object(l.jsx)(J,{})})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.4e9980c3.chunk.js.map