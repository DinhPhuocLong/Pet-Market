(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{269:function(e,t,r){"use strict";r.r(t);var n=r(5),o=(r(39),r(65)),l=r.n(o),c={layout:"login",data:function(){return{email:""}},methods:{requestPassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("localhost:8000/api/reset-password/",e.email);case 3:r=t.sent,console.log(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},m=r(8),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Quên mật khẩu")]),e._v(" "),r("label",{attrs:{for:"email"}},[e._v(" Email ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"border border-solid border-black",attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("button",{staticClass:"bg-blue-500 text-white",on:{click:function(t){return e.requestPassword()}}},[e._v("\n        Lấy lại mật khẩu\n    ")])])}),[],!1,null,null,null);t.default=component.exports}}]);