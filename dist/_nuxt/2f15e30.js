(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{557:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(50),r(60),r(89)),o=r(177),c={layout:"login",middleware:"unauthenticated",components:{ValidationProvider:l.b,ValidationObserver:l.a},data:function(){return{credentials:{email:"l0978011552l@gmail.com",password:"127.0.0.1"},customErrorMessages:{email:{required:"Hãy nhập email của bạn!"},password:{required:"Hãy nhập mật khẩu của bạn!"}}}},methods:{login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("laravelJWT",{data:t.credentials});case 3:Object(o.Message)({message:"Đăng nhập thành công",type:"success"}),setTimeout((function(e){t.$router.push({name:"dashboard"})}),2e3),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(o.Message)({message:e.t0.response.data.error,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onSubmit:function(){var t=this;this.$refs.form.validate().then((function(e){e&&t.login()}))}},beforeDestroy:function(){o.Message.closeAll()}},d=r(8),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"font-mono bg-gray-400 h-screen"},[r("div",{staticClass:"container mx-auto"},[r("div",{staticClass:"flex justify-center px-6"},[r("div",{staticClass:"w-full xl:w-3/4 lg:w-11/12 flex mt-32"},[r("div",{staticClass:"w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg",staticStyle:{"background-image":"url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"}}),t._v(" "),r("div",{staticClass:"w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none"},[r("h3",{staticClass:"pt-4 text-2xl text-center"},[t._v("Đăng nhập")]),t._v(" "),r("ValidationObserver",{ref:"form"},[r("form",{staticClass:"px-8 pt-6 pb-8 mb-4 bg-white rounded",on:{submit:function(e){return e.preventDefault(),t.onSubmit()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit()}}},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"username"}},[t._v("\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required|isValidateEmail","custom-messages":t.customErrorMessages.email},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"w-full px-3 py-2  mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",class:{"border-red-600":n[0]},attrs:{id:"field",name:"field",type:"text",placeholder:"Email"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}}),t._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block mb-2 text-sm font-bold text-gray-700",attrs:{for:"password"}},[t._v("\n\t\t\t\t\t\t\t\t\tMật khẩu\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("ValidationProvider",{attrs:{rules:"required","custom-messages":t.customErrorMessages.password},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline",class:{"border-red-600":n[0]},attrs:{name:"email",id:"password",type:"password",placeholder:"******************"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}}),t._v(" "),r("p",{staticClass:"text-xs italic text-red-500"},[t._v(t._s(n[0]))])]}}])})],1),t._v(" "),r("div",{staticClass:"mb-4"},[r("input",{staticClass:"mr-2 leading-tight",attrs:{type:"checkbox",id:"checkbox_id"}}),t._v(" "),r("label",{staticClass:"text-sm",attrs:{for:"checkbox_id"}},[t._v("\n\t\t\t\t\t\t\t\t\tLưu đăng nhập\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"mb-6 text-center"},[r("button",{staticClass:"w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\t\tĐăng nhập\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("hr",{staticClass:"mb-6 border-t"}),t._v(" "),r("div",{staticClass:"text-center"},[r("a",{staticClass:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",attrs:{href:"./register.html"}},[t._v("\n\t\t\t\t\t\t\t\t\tTạo tài khoản!\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"text-center"},[r("a",{staticClass:"inline-block text-sm text-blue-500 align-baseline hover:text-blue-800",attrs:{href:"./forgot-password.html"}},[t._v("\n\t\t\t\t\t\t\t\t\tQuên mật khẩu?\n\t\t\t\t\t\t\t\t")])])])])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);