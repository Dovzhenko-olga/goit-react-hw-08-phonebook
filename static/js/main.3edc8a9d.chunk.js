(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return v}));var r=n(7),c=n.n(r),a=n(18),o=n(21),u=n.n(o),i=n(8),s=n(22);n(62);u.a.defaults.baseURL="https://connections-api.herokuapp.com";var l,b=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){u.a.defaults.headers.common.Authorization=""},j={autoClose:3e3,hideProgressBar:!1,position:s.b.POSITION.TOP_RIGHT,pauseOnHover:!0,closeOnClick:!0},f=Object(i.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/signup",t);case 4:return a=e.sent,o=a.data,b(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),400===e.t0.response.status?s.b.error("Creation error, please try again",j):500===e.t0.response.status?s.b.error("Server error, please try later",j):s.b.error("".concat(e.t0.message),j),e.abrupt("return",r(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(i.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/login",t);case 4:return a=e.sent,o=a.data,b(o.token),e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(1),s.b.error("Please try again",j),e.abrupt("return",r(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),h={register:f,logOut:Object(i.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,u.a.post("/users/logout");case 4:d(),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),s.b.error("Hey! You can't log out!",j),e.abrupt("return",r(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),logIn:p,fetchCurrentUser:Object(i.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=5;break}return Object(s.b)("Please login or register!",j),e.abrupt("return",n.rejectWithValue());case 5:return b(a),e.prev=6,e.next=9,u.a.get("/users/current");case 9:return o=e.sent,i=o.data,e.abrupt("return",i);case 14:return e.prev=14,e.t0=e.catch(6),Object(s.b)("Authorization timed out!",j),e.abrupt("return",n.rejectWithValue());case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},O={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getIsRefreshing:function(e){return e.auth.isRefreshing},getUsername:function(e){return e.auth.user.name}},g=n(5),v=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isRefreshing:!1},extraReducers:(l={},Object(g.a)(l,h.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(g.a)(l,h.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(g.a)(l,h.logOut.fulfilled,(function(e){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(g.a)(l,h.fetchCurrentUser.pending,(function(e){e.isRefreshing=!0})),Object(g.a)(l,h.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isRefreshing=!1})),Object(g.a)(l,h.fetchCurrentUser.rejected,(function(e){e.isRefreshing=!1})),l)}).reducer},140:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(31),o=n.n(a),u=n(11),i=n(27),s=n(68),l=(n(88),n(89),n(3)),b=n(69),d=n.n(b),j=n(2),f=function(e){var t=e.children;return Object(j.jsx)("div",{className:d.a.container,children:t})},p=n(20),h=n.n(p),O=n(12),g=function(){var e=Object(u.c)(O.c.getIsLoggedIn);return Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{to:"/goit-react-hw-08-phonebook",exact:!0,className:h.a.link,activeClassName:h.a.activeLink,children:"Home"}),e&&Object(j.jsx)(i.b,{to:"/goit-react-hw-08-phonebook/contacts",exact:!0,className:h.a.link,activeClassName:h.a.activeLink,children:"Phonebook"})]})},v=n(35),x=n.n(v),m=n.p+"static/media/panda.1fbf15f5.jpg";function k(){var e=Object(u.b)(),t=Object(u.c)(O.c.getUsername),n=m;return Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsxs)("div",{className:x.a.user,children:[Object(j.jsx)("img",{src:n,alt:"avatar",width:"32",className:x.a.avatar}),Object(j.jsxs)("span",{className:x.a.name,children:["Welcome, ",t,"."]})]}),Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return e(O.a.logOut())},children:"Logout"})]})}function w(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.b,{to:"/goit-react-hw-08-phonebook/register",exact:!0,className:h.a.link,activeClassName:h.a.activeLink,children:"Register"}),Object(j.jsx)(i.b,{to:"/goit-react-hw-08-phonebook/login",exact:!0,className:h.a.link,activeClassName:h.a.activeLink,children:"Login"})]})}function _(){var e=Object(u.c)(O.c.getIsLoggedIn);return Object(j.jsxs)("header",{className:h.a.header,children:[Object(j.jsx)(g,{}),e?Object(j.jsx)(k,{}):Object(j.jsx)(w,{})]})}var y=n(34),L=n(45),C=["children","redirectTo"];function I(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/goit-react-hw-08-phonebook":n,c=Object(L.a)(e,C),a=Object(u.c)(O.c.getIsLoggedIn);return Object(j.jsx)(l.b,Object(y.a)(Object(y.a)({},c),{},{children:a?t:Object(j.jsx)(l.a,{to:r})}))}var N=["children","redirectTo","restricted"];function U(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/goit-react-hw-08-phonebook/contacts":n,c=e.restricted,a=void 0!==c&&c,o=Object(L.a)(e,N),i=Object(u.c)(O.c.getIsLoggedIn)&&a;return Object(j.jsx)(l.b,Object(y.a)(Object(y.a)({},o),{},{children:i?Object(j.jsx)(l.a,{to:r}):t}))}var T=n(154),R=n(157),B=n(67),P=n(22),z=(n(62),n(64)),A=n.n(z),S=Object(T.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),W=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,202))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,196))})),V=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,198))})),F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,200))}));function E(){var e=Object(u.b)(),t=Object(u.c)(O.c.getIsRefreshing),n=S();return Object(r.useEffect)((function(){e(O.a.fetchCurrentUser())}),[e]),Object(j.jsxs)(f,{children:[t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Preparing information..."}),Object(j.jsx)(B.a,{})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(_,{}),Object(j.jsx)(l.d,{children:Object(j.jsxs)(r.Suspense,{fallback:Object(j.jsx)("div",{className:n.root,children:Object(j.jsx)(R.a,{})}),children:[Object(j.jsx)(U,{exact:!0,path:"/goit-react-hw-08-phonebook",children:Object(j.jsx)(W,{})}),Object(j.jsx)(U,{path:"/goit-react-hw-08-phonebook/register",restricted:!0,redirectTo:"/goit-react-hw-08-phonebook",children:Object(j.jsx)(M,{})}),Object(j.jsx)(U,{path:"/goit-react-hw-08-phonebook/login",restricted:!0,children:Object(j.jsx)(V,{})}),Object(j.jsx)(I,{path:"/goit-react-hw-08-phonebook/contacts",redirectTo:"/goit-react-hw-08-phonebook/login",children:Object(j.jsx)(F,{})})]})})]}),Object(j.jsx)(P.a,{className:A.a.toast})]})}var H=n(44),G=n(8),J=n(28),q=n(78),D=n.n(q),K=n(52),Y={key:"auth",storage:D.a,whitelist:["token"]},Q=Object(H.a)(Object(G.f)({serializableCheck:{ignoredActions:[J.a,J.f,J.b,J.c,J.d,J.e]}})),X=Object(G.a)({reducer:{auth:Object(J.g)(Y,O.b),contact:K.c},middleware:Q,devTools:!1}),Z=Object(J.h)(X);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u.a,{store:X,children:Object(j.jsx)(s.a,{loading:null,persistor:Z,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(E,{})})})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={header:"AppBar_header__2nadd",link:"AppBar_link__2U6Ef",activeLink:"AppBar_activeLink__3WRGs"}},35:function(e,t,n){e.exports={container:"UserMenu_container__3_FyL",user:"UserMenu_user__3pLgB",avatar:"UserMenu_avatar__3KCfE",name:"UserMenu_name__1OsI3",button:"UserMenu_button__1__0T"}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return S}));var r={};n.r(r),n.d(r,"changeFilter",(function(){return u}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return k})),n.d(c,"addContact",(function(){return w})),n.d(c,"deleteContact",(function(){return _}));var a={};n.r(a),n.d(a,"getValue",(function(){return L})),n.d(a,"getContacts",(function(){return C})),n.d(a,"getIsLoading",(function(){return I})),n.d(a,"filteredContacts",(function(){return N}));var o=n(8),u=Object(o.b)("contact/changeFilter"),i=n(7),s=n.n(i),l=n(18),b=n(21),d=n.n(b);function j(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(s.a.mark((function e(t){var n,r,c,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.number,c={name:n,number:r},e.next=4,d.a.post("/contacts",c);case 4:return a=e.sent,o=a.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v,x,m,k=Object(o.c)("contact/fetchContacts",Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),w=Object(o.c)("contact/addContact",function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_=Object(o.c)("contact/deleteContact",function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=n(41),L=function(e){return e.contact.filter},C=function(e){return e.contact.contacts},I=function(e){return e.contact.isLoading},N=Object(y.a)([C,L],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),U=n(5),T=n(44),R=n(15),B=Object(o.d)([],(v={},Object(U.a)(v,k.fulfilled,(function(e,t){return t.payload})),Object(U.a)(v,w.fulfilled,(function(e,t){return[t.payload].concat(Object(T.a)(e))})),Object(U.a)(v,_.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),v)),P=Object(o.d)("",Object(U.a)({},u,(function(e,t){return t.payload}))),z=Object(o.d)(!1,(x={},Object(U.a)(x,k.pending,(function(){return!0})),Object(U.a)(x,k.fulfilled,(function(){return!1})),Object(U.a)(x,k.rejected,(function(){return!1})),Object(U.a)(x,w.pending,(function(){return!0})),Object(U.a)(x,w.fulfilled,(function(){return!1})),Object(U.a)(x,w.rejected,(function(){return!1})),Object(U.a)(x,_.pending,(function(){return!0})),Object(U.a)(x,_.fulfilled,(function(){return!1})),Object(U.a)(x,_.rejected,(function(){return!1})),x)),A=Object(o.d)(null,(m={},Object(U.a)(m,k.rejected,(function(e,t){return t.payload})),Object(U.a)(m,k.pending,(function(){return null})),m)),S=Object(R.b)({contacts:B,filter:P,isLoading:z,error:A})},64:function(e,t,n){e.exports={modalButton:"App_modalButton__1Sq_g",toast:"App_toast__1C2lu"}},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r,c=n(72),a=n(4),o=n(74),u=n(73),i=n.n(u),s=n(2),l=Object(a.css)(r||(r=Object(c.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"])));function b(){return Object(s.jsx)("div",{className:i.a.loading,children:Object(s.jsx)(o.PropagateLoader,{color:"#0C1BB8",css:l,size:20})})}},69:function(e,t,n){e.exports={container:"Container_container__3Dwjn"}},73:function(e,t,n){e.exports={loading:"Loader_loading__3fTzo"}},89:function(e,t,n){}},[[140,3,4]]]);
//# sourceMappingURL=main.3edc8a9d.chunk.js.map