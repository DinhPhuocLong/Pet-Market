(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{270:function(t,e,n){"use strict";n.r(e);var l=n(5),r=(n(39),{layout:"login",data:function(){return{credentials:{email:"l0978011552l@gmail.com",password:"127.0.0.1"}}},methods:{login:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("laravelJWT",{data:t.credentials});case 3:e.sent,t.$auth.strategy.token.set(re),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Địt mẹ cuộc đời");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticClass:"font-mono bg-gray-400 h-screen"},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"flex justify-center px-6"},[n("div",{staticClass:"w-full xl:w-3/4 lg:w-11/12 flex mt-32"},[n("div",{staticClass:"w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg",staticStyle:{"background-image":"url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"}}),t._v(" "),n("div",{staticClass:"w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"},[n("h3",{staticClass:"pt-4 text-2xl text-center"},[t._v("Welcome Back!")]),t._v(" "),n("form",{staticClass:"px-8 pt-6 pb-8 mb-4 bg-white rounded",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login()}}},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"username"}},[t._v("\n\t\t\t\t\t\t\t\t\tUsername\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",attrs:{id:"username",type:"text",placeholder:"Username"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"password"}},[t._v("\n\t\t\t\t\t\t\t\t\tPassword\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"password",placeholder:"******************"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),t._v(" "),n("p",{staticClass:"text-xs italic text-red-500"},[t._v("Please choose a password.")])]),t._v(" "),n("div",{staticClass:"mb-4"},[n("input",{staticClass:"mr-2 leading-tight",attrs:{type:"checkbox",id:"checkbox_id"}}),t._v(" "),n("label",{staticClass:"text-sm",attrs:{for:"checkbox_id"}},[t._v("\n\t\t\t\t\t\t\t\t\tRemember Me\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"mb-6 text-center"},[n("button",{staticClass:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(e){return t.login()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login()}}},[t._v("\n\t\t\t\t\t\t\t\t\tSign In\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("hr",{staticClass:"mb-6 border-t"}),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",attrs:{href:"./register.html"}},[t._v("\n\t\t\t\t\t\t\t\t\tCreate an Account!\n\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{staticClass:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",attrs:{href:"./forgot-password.html"}},[t._v("\n\t\t\t\t\t\t\t\t\tForgot Password?\n\t\t\t\t\t\t\t\t")])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);