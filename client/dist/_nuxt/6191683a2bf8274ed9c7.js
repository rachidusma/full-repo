(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{394:function(e,t,r){var content=r(395);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("b1bed018",content,!0,{sourceMap:!1})},395:function(e,t,r){(t=r(12)(!1)).push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=t},400:function(e,t,r){"use strict";r(11),r(8),r(9);var n=r(2),o=(r(47),r(7),r(5),r(168),r(29),r(30),r(6)),c=r(49),d=r(76);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(d.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},405:function(e,t,r){"use strict";r(11),r(8),r(7),r(5),r(9);var n=r(2),o=(r(394),r(50)),c=r(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,l({},data,{attrs:l({},data.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=r(0),v=Object(f.i)("v-breadcrumbs__divider","li"),w=r(15);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(w.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(h,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},436:function(e,t,r){var content=r(664);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("0c216ab5",content,!0,{sourceMap:!1})},663:function(e,t,r){"use strict";var n=r(436);r.n(n).a},664:function(e,t,r){(t=r(12)(!1)).push([e.i,".v-avatar.v-list-item__avatar.v-avatar--tile[data-v-6382fd8b]{margin:0 5px 0 0!important;border-radius:10px}",""]),e.exports=t},723:function(e,t,r){"use strict";r.r(t);r(38);var n=r(14),o={name:"changePassword",layout:"admin",middleware:"auth",data:function(){var e=this;return{breadcrumbItems:[{text:"Settings",disabled:!1,href:"/settings"},{text:"Change password",disabled:!0}],valid:!1,rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},passwordMatch:function(t){return t==e.newPassword}},color:"grey",currentPassword:"",newPassword:"",confirmPassword:"",newPasswordHint:"At least 8 characters",ConfirmPasswordHint:"write your new password again",showConfirmPassword:!1,showCurrentPassword:!1,showNewPassword:!1}},methods:{validate:function(){this.$refs.form.validate()},checkValid:function(){var e=this.newPassword.length;e>=1&&e<4?(this.color="#e63948",this.valid=!1,this.newPasswordHint="Too short"):e>=4&&e<8?(this.color="#f7c223",this.valid=!1,this.newPasswordHint="Too short"):e>=8&&e<12?(this.color="#28cdaa",this.valid=!1,this.newPasswordHint="Accepted"):e>=12&&(this.color="#28cdaa",this.valid=!1,this.newPasswordHint="Perfect")},saveEnable:function(){""!=this.newPassword&&""!=this.confirmPassword||(this.valid=!1)},changePassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$post("/users/pass",{email:e.$auth.user.email,password:e.currentPassword,newpassword:e.newPassword}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()}}},c=(r(663),r(56)),d=r(75),l=r.n(d),h=r(405),f=r(170),v=r(158),w=r(420),m=r(382),P=r(400),y=r(98),O=r(163),_=r(421),j=r(454),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-breadcrumbs",{attrs:{items:e.breadcrumbItems},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("nuxt-link",{attrs:{to:"/settings"}},[r("v-icon",[e._v("mdi mdi-chevron-left")])],1),e._v(" "),r("h2",{staticClass:"d-inline-block"},[e._v("Change password")])],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"mx-auto py-4",attrs:{tile:"",outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-text-field",{attrs:{"append-outer-icon":e.showCurrentPassword?"mdi-eye":"mdi-eye-off",rules:[e.rules.required],type:e.showCurrentPassword?"text":"password",label:"Current password",outlined:"",dense:"",required:"",hint:"At least 8 characters"},on:{input:e.saveEnable,"click:append-outer":function(t){e.showCurrentPassword=!e.showCurrentPassword}},model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}}),e._v(" "),r("div",{staticClass:"new-password"},[r("v-text-field",{attrs:{"append-outer-icon":e.showNewPassword?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.showNewPassword?"text":"password",label:"Choose new password",outlined:"",dense:"",hint:e.newPasswordHint,counter:"",required:""},on:{input:e.checkValid,"click:append-outer":function(t){e.showNewPassword=!e.showNewPassword}},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),e._v(" "),e._l(4,(function(t,n){return r("v-list-item-avatar",{key:n,attrs:{tile:"",width:"22%",height:"10",color:e.color}})}))],2),e._v(" "),r("v-text-field",{staticClass:"mt-3",attrs:{"append-outer-icon":e.showConfirmPassword?"mdi-eye":"mdi-eye-off",rules:[e.rules.passwordMatch,e.rules.min],type:e.showConfirmPassword?"text":"password",label:"Confirm password",outlined:"",dense:"",hint:e.ConfirmPasswordHint,counter:"",required:""},on:{"click:append-outer":function(t){e.showConfirmPassword=!e.showConfirmPassword}},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),e._v(" "),r("v-btn",{attrs:{color:"success",disabled:!e.valid},on:{click:e.changePassword}},[e._v("save")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"6382fd8b",null);t.default=component.exports;l()(component,{VBreadcrumbs:h.a,VBtn:f.a,VCard:v.a,VCol:w.a,VContainer:m.a,VForm:P.a,VIcon:y.a,VListItemAvatar:O.a,VRow:_.a,VTextField:j.a})}}]);