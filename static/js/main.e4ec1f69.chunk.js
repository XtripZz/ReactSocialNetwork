(this["webpackJsonpmy-app-01"]=this["webpackJsonpmy-app-01"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__N54sB",item:"Navbar_item__68z4E",activeLink:"Navbar_activeLink__1v9yZ"}},138:function(e,t,n){e.exports=n(229)},139:function(e,t,n){},144:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m}));var a=n(5),r=n.n(a),i=n(14),c=n(2),u=n(9),o=n(46),s={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.me();case 2:0==(n=e.sent).data.resultCode&&(a=n.data.data,i=a.id,c=a.email,o=a.login,t(l(i,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var c,s;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.login(e,t,n);case 2:0===(c=a.sent).data.resultCode?i(f()):(s=c.data.messages.length>0?c.data.messages:"Some error",i(Object(o.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.logout();case 2:0===e.sent.data.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},229:function(e,t,n){"use strict";n.r(t);n(139),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(44),c=n.n(i),u=(n(144),n(32)),o=n(33),s=n(35),l=n(34),f=n(10),d=n.n(f),m=n(7),p=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/friends",activeClassName:d.a.activeLink},"Friends")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/news",activeClassName:d.a.activeLink},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/settings",activeClassName:d.a.activeLink},"Settings")))},h=(n(149),function(e){return r.a.createElement("div",null,"News")}),g=(n(150),function(e){return r.a.createElement("div",null,"Music")}),E=function(e){return r.a.createElement("div",null,"Settings")},b=n(55),v=n.n(b),O=n(6),_=n(18),S=n(24),w=n(2),j=n(22),C={initialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},k=n(37),N=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(k.a,null)},r.a.createElement(e,t))}},T=r.a.lazy((function(){return n.e(6).then(n.bind(null,320))})),L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,319))})),P=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,321))})),I=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,318))})),A=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:v.a.mainContainer},r.a.createElement(p,null),r.a.createElement("div",{className:v.a.mainContainerContent},r.a.createElement(O.b,{path:"/profile/:userId?",render:N(L)}),r.a.createElement(O.b,{path:"/friends",render:N(T)}),r.a.createElement(O.b,{path:"/dialogs",render:N(P)}),r.a.createElement(O.b,{path:"/news",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(O.b,{path:"/music",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(O.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(O.b,{path:"/login",render:N(I)}))):r.a.createElement(k.a,null)}}]),n}(r.a.Component),x=Object(_.d)(O.f,Object(S.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(j.b)()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(A),U=n(45),R=n.n(U),F=n(57),G=n.n(F),M=function(e){return r.a.createElement("div",{className:G.a.authProfileLinkMainContainer},r.a.createElement("div",{className:G.a.authProfileLinkContainer},r.a.createElement(m.b,{to:"/profile"},e.login),r.a.createElement("button",{onClick:e.logout},"Log Out")))},D=function(e){return r.a.createElement("header",{className:R.a.header},r.a.createElement("div",{className:R.a.content},r.a.createElement(m.b,{to:"./",className:R.a.logo},r.a.createElement("h1",null,"MSN")),e.isAuth?r.a.createElement(M,{login:e.login,logout:e.logout}):r.a.createElement(m.b,{to:"/login"},"Login")))},z=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(D,this.props)}}]),n}(r.a.Component),W=Object(S.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:j.b,logout:j.d})(z),B=n(60),H=n(76),X=n(83),J=n(88),V=n(82),Z=Object(_.c)({profilePage:B.c,dialogsPage:H.a,usersPage:X.a,auth:j.a,form:V.a,app:y}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,Y=Object(_.e)(Z,K(Object(_.a)(J.a)));window.store=Y;var Q=Y,$=function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(W,null),r.a.createElement(x,null))},q=function(e){return r.a.createElement(m.a,null,r.a.createElement(S.a,{store:Q},r.a.createElement($,null)))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(86),c=n.n(i),u=n(87),o=n.n(u);t.a=function(e){return r.a.createElement("div",{className:c.a.preloader},r.a.createElement("img",{src:o.a}))}},45:function(e,t,n){e.exports={header:"Header_header__30dki",content:"Header_content__3j9O9",logo:"Header_logo__1GXZc"}},55:function(e,t,n){e.exports={mainContainer:"MainContainer_mainContainer__-BIiA",mainContainerContent:"MainContainer_mainContainerContent__J0VOn"}},57:function(e,t,n){e.exports={authProfileLinkMainContainer:"AuthProfileLink_authProfileLinkMainContainer__fcpJQ",authProfileLinkContainer:"AuthProfileLink_authProfileLinkContainer__2V-z2"}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return p})),n.d(t,"f",(function(){return h}));var a=n(5),r=n.n(a),i=n(14),c=n(23),u=n(2),o=n(9),s={profileFriends:{allFriends:[{id:1,name:"Dimych"},{id:2,name:"Alexey"},{id:3,name:"Artem"},{id:4,name:"Susana"},{id:5,name:"Katya"},{id:6,name:"Misha"}],onlineFriends:[{id:1,name:"Alexey"},{id:2,name:"Susana"},{id:3,name:"Misha"}]},whoLeftThePost:[{id:1,name:"Xtrip"},{id:2,name:"Xtrip"},{id:3,name:"Xtrip"},{id:4,name:"Nikita"},{id:5,name:"Dimych"},{id:6,name:"Alexey"},{id:7,name:"Susana"},{id:8,name:"Nastya"},{id:9,name:"Xtrip"}],posts:[{id:1,message:"blabla    !",likesCount:10},{id:2,message:"I learn props",likesCount:14},{id:3,message:"I learn map",likesCount:15},{id:3,message:"I learn map",likesCount:15},{id:4,message:"privet",likesCount:-10},{id:5,message:"hi",likesCount:16},{id:6,message:"!!!",likesCount:11},{id:7,message:"React",likesCount:11},{id:8,message:"Javascript",likesCount:11},{id:9,message:"kek",likesCount:11}],profile:null,isShowed:!1,status:""},l=function(e){return{type:"ADD-POST",newPostBody:e}},f=function(e){return{type:"CONTACTS_ARE_SHOWN",areShown:e}},d=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data}),console.log(a.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=9,a={id:++n,name:"Xtrip"},r={id:n,message:t.newPostBody,likesCount:16};return Object(u.a)(Object(u.a)({},e),{},{whoLeftThePost:[].concat(Object(c.a)(e.whoLeftThePost),[a]),posts:[].concat(Object(c.a)(e.posts),[r])});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{whoLeftThePost:e.whoLeftThePost.filter((function(e){return e.id!==t.postId})),posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"CONTACTS_ARE_SHOWN":return Object(u.a)(Object(u.a)({},e),{},{isShowed:t.areShown});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}}},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(23),r=n(2),i={dialogs:[{id:1,name:"Artem"},{id:2,name:"Alexey"},{id:3,name:"Dimych"},{id:4,name:"Katya"},{id:5,name:"Misha"},{id:6,name:"Anna"}],messages:[{id:1,message:"Hi"},{id:2,message:"kek"},{id:3,message:"You learned react?"},{id:4,message:"wtf?"},{id:5,message:"Go go go!"},{id:6,message:"privet"}]},c=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:7,message:t.newMessageBody}])});default:return e}}},83:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"g",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"h",(function(){return E})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"j",(function(){return _}));var a=n(5),r=n.n(a),i=n(14),c=n(23),u=n(2),o=n(9),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(u.a)(Object(u.a)({},e),a):e}))},l={users:[],currentPage:1,pageSize:5,totalUsersCount:0,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},m=function(e){return{type:"SET_USERS",users:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},g=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},b=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(p(e)),a(g(!0)),n.next=4,o.c.getUsers(e,t);case 4:i=n.sent,a(g(!1)),a(m(i.items)),a(h(i.totalCount-5800));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(i(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,o.c.followUser.bind(o.c),f);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:v(n,e,o.c.unfollowUser.bind(o.c),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},86:function(e,t,n){e.exports={preloader:"Preloader_preloader__1OVxD"}},87:function(e,t,n){e.exports=n.p+"static/media/810.326f0a79.svg"},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(85),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a3106ad8-3159-40c0-8fdc-86c99053381a"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e))},unfollowUser:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI"),c.getProfile(e)}},c={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},u={me:function(){return r.get("auth/me")},login:function(e,t,n){return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}}},[[138,2,3]]]);
//# sourceMappingURL=main.e4ec1f69.chunk.js.map