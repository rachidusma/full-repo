(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{393:function(t,e,r){var content=r(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("d6ed53d2",content,!0,{sourceMap:!1})},394:function(t,e,r){var content=r(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("b1bed018",content,!0,{sourceMap:!1})},395:function(t,e,r){(e=r(12)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},397:function(t,e,r){var content=r(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("dc0628f2",content,!0,{sourceMap:!1})},398:function(t,e,r){(e=r(12)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},400:function(t,e,r){"use strict";r(11),r(8),r(9);var o=r(2),n=(r(47),r(7),r(5),r(168),r(29),r(30),r(6)),c=r(49),l=r(76);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(n.a)(c.a,Object(l.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},401:function(t,e,r){"use strict";var o=r(393);r.n(o).a},402:function(t,e,r){(e=r(12)(!1)).push([t.i,".overline[data-v-90c2cc42]{color:#336882;font-size:25px}div.v-card div[class^=col][data-v-90c2cc42]{padding-top:0;padding-bottom:0}",""]),t.exports=e},403:function(t,e,r){"use strict";r(16),r(38);var o=r(14),n={data:function(){var t=this;return{the_customer:{},rules:{required:function(t){return!!t||"Required."},min:function(t){return t.length>=8||"Min 8 characters"},passwordMatch:function(e){return e==t.newPassword}},valid:!1,dialog:!1,IndividualsOrCorporations:"1"}},props:["customerId","customer","state","edit"],watch:{customerId:function(t){Object.assign(this.the_customer,this.customer)},state:function(t){this.dialog=t}},methods:{validate:function(){this.$refs.form.validate()},saveUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.the_customer.dagar&&(t.the_customer.dagar=Number(t.the_customer.dagar)),e.next=3,t.$axios.$post("/customers",t.the_customer).then((function(e){console.log(e),t.$emit("updated",t.the_customer),t.dialog=!1,t.the_customer={}})).catch((function(t){return console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()},editUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.setToken(t.$auth.getToken("local"));case 2:return r=t.customer,e.next=5,t.$axios.$patch("/customers/".concat(r._id),t.the_customer).then(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.commit("setCustomer",t.the_customer),t.$emit("UserEdited",t.the_customer),t.dialog=!1,t.$emit("close");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}));case 5:case"end":return e.stop()}}),e)})))()},close:function(){this.edit||(this.the_customer={}),this.$emit("close"),this.dialog=!1}}},c=(r(401),r(56)),l=r(75),d=r.n(l),v=r(170),m=r(158),h=r(65),f=r(420),_=r(382),x=r(384),y=r(372),w=r(400),C=r(98),O=r(386),k=r(387),$=r(421),j=r(388),D=r(454),I=r(411),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[t.edit?r("h4",[t._v("Edit customer")]):r("h4",[t._v("Add Customer")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-icon",{staticClass:"black--text",on:{click:t.close}},[t._v("mdi mdi-close")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-container",[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",[r("v-radio-group",{attrs:{row:""},model:{value:t.IndividualsOrCorporations,callback:function(e){t.IndividualsOrCorporations=e},expression:"IndividualsOrCorporations"}},[r("v-radio",{attrs:{label:"Individuals",value:"1"}}),t._v(" "),r("v-radio",{attrs:{label:"Corporations",value:"2"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:1==t.IndividualsOrCorporations?"Name*":"Company",rules:[t.rules.required],placeholder:"Customer full name",outlined:"",color:"#336882"},model:{value:t.the_customer.customername,callback:function(e){t.$set(t.the_customer,"customername",e)},expression:"the_customer.customername"}})],1),t._v(" "),1==t.IndividualsOrCorporations?r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"personal number",placeholder:"YYYYMMDD-NNNN",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.orgnummer,callback:function(e){t.$set(t.the_customer,"orgnummer",e)},expression:"the_customer.orgnummer"}})],1):t._e(),t._v(" "),2==t.IndividualsOrCorporations?r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",rules:[t.rules.required],label:"Org-nummer",placeholder:"YYYYMMDD-NNNN",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.orgnummer,callback:function(e){t.$set(t.the_customer,"orgnummer",e)},expression:"the_customer.orgnummer"}})],1):t._e(),t._v(" "),2==t.IndividualsOrCorporations?r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"VAT-nummer",placeholder:"VAT-nummer",outlined:"",color:"#336882"},model:{value:t.the_customer.vatnummer,callback:function(e){t.$set(t.the_customer,"vatnummer",e)},expression:"the_customer.vatnummer"}})],1):t._e(),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Kundnummer",placeholder:"Kundnummer",outlined:"",type:"number",color:"#336882"},model:{value:t.the_customer.kundnummer,callback:function(e){t.$set(t.the_customer,"kundnummer",e)},expression:"the_customer.kundnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Postadress",rules:[t.rules.required],placeholder:"Postadress",outlined:"",color:"#336882"},model:{value:t.the_customer.postadress,callback:function(e){t.$set(t.the_customer,"postadress",e)},expression:"the_customer.postadress"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Postadress 2",placeholder:"Postadress 2",outlined:"",color:"#336882"},model:{value:t.the_customer.postadress2,callback:function(e){t.$set(t.the_customer,"postadress2",e)},expression:"the_customer.postadress2"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{dense:"",label:"Postnummer",placeholder:"Postnummer",outlined:"",rules:[t.rules.required],type:"number",color:"#336882"},model:{value:t.the_customer.postnummer,callback:function(e){t.$set(t.the_customer,"postnummer",e)},expression:"the_customer.postnummer"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"6"}},[r("v-text-field",{attrs:{dense:"",label:"stad",rules:[t.rules.required],placeholder:"stad",outlined:"",color:"#336882"},model:{value:t.the_customer.stad,callback:function(e){t.$set(t.the_customer,"stad",e)},expression:"the_customer.stad"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-divider"),t._v(" "),r("h1",{staticClass:"overline pt-4 pb-4"},[t._v("Contact informations")])],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Country",placeholder:"Country",outlined:"",color:"#336882"},model:{value:t.the_customer.country,callback:function(e){t.$set(t.the_customer,"country",e)},expression:"the_customer.country"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"Kontaktperson",placeholder:"Kontaktperson",outlined:"",color:"#336882"},model:{value:t.the_customer.kontaktperson,callback:function(e){t.$set(t.the_customer,"kontaktperson",e)},expression:"the_customer.kontaktperson"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dense:"",label:"E-post",placeholder:"E-post",type:"email",outlined:"",color:"#336882"},model:{value:t.the_customer.epost,callback:function(e){t.$set(t.the_customer,"epost",e)},expression:"the_customer.epost"}}),t._v(" "),r("v-divider")],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("h1",{staticClass:"overline pt-4 pb-4"},[t._v("Terms")])]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"d-flex align-start"},[r("v-text-field",{attrs:{outlined:"",dense:"",label:"Days",required:""},model:{value:t.the_customer.dagar,callback:function(e){t.$set(t.the_customer,"dagar",e)},expression:"the_customer.dagar"}}),t._v(" "),r("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-icon",t._g({staticClass:"ma-2"},o),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\tNumber of days before the payment is due.\n\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"d-flex align-start"},[r("v-text-field",{attrs:{outlined:"",dense:"",label:"Interest on overdue payment",required:""},model:{value:t.the_customer.overdueinterest,callback:function(e){t.$set(t.the_customer,"overdueinterest",e)},expression:"the_customer.overdueinterest"}}),t._v(" "),r("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-icon",t._g({staticClass:"ma-2"},o),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\tThis is where you define the interest rate added when a payment is overdue. Remember that you must create a new invoice with the added interest rate and send it to your customer. Invoices with interest rates also have to be recorded manually.\n\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"d-flex align-start"},[r("v-text-field",{attrs:{outlined:"",dense:"",label:"Delivery",required:""},model:{value:t.the_customer.delivery,callback:function(e){t.$set(t.the_customer,"delivery",e)},expression:"the_customer.delivery"}}),t._v(" "),r("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-icon",t._g({staticClass:"ma-2"},o),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\tDefine how the goods are delivered. Ex warehouse means that the risk is taken over by the customer as soon as the goods leave the warehouse.\n\t\t\t\t\t\t\t\t")])],1)])],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",{staticClass:"grey lighten-3 pa-5"},[r("v-btn",{attrs:{text:""},on:{click:t.close}},[t._v("Close")]),t._v(" "),r("v-spacer"),t._v(" "),t.customerId?r("v-btn",{attrs:{color:"success",disabled:!t.valid},on:{click:t.editUser}},[t._v("update")]):r("v-btn",{attrs:{color:"success",disabled:!t.valid},on:{click:t.saveUser}},[t._v("Save")])],1)],1)],1)}),[],!1,null,"90c2cc42",null);e.a=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VContainer:_.a,VDialog:x.a,VDivider:y.a,VForm:w.a,VIcon:C.a,VRadio:O.a,VRadioGroup:k.a,VRow:$.a,VSpacer:j.a,VTextField:D.a,VTooltip:I.a})},405:function(t,e,r){"use strict";r(11),r(8),r(7),r(5),r(9);var o=r(2),n=(r(394),r(50)),c=r(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(c.a)(n.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(o.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d({},data,{attrs:d({},data.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),h=Object(m.i)("v-breadcrumbs__divider","li"),f=r(15);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var o=this.items[i];r.push(o.text),e?t.push(this.$scopedSlots.item({item:o})):t.push(this.$createElement(v,{key:r.join("."),props:o},[o.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},408:function(t,e,r){var content=r(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("f38dcad4",content,!0,{sourceMap:!1})},411:function(t,e,r){"use strict";var o=r(2),n=(r(16),r(397),r(68)),c=r(17),l=r(106),d=r(78),v=r(107),m=r(140),h=r(27),f=r(0),_=r(10),x=r(6);e.a=Object(x.a)(c.a,l.a,d.a,v.a,m.a,h.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,n=0;return this.top||this.bottom||r?n=o+e.width/2-content.width/2:(this.left||this.right)&&(n=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(n,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,r=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=r+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=r+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(o+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(f.g)(this.maxWidth),minWidth:Object(f.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(f.r)(this,"activator",!0)&&Object(_.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===f.v.esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},422:function(t,e,r){"use strict";var o=r(408);r.n(o).a},423:function(t,e,r){(e=r(12)(!1)).push([t.i,".blueSection{display:block;width:100%;background-color:#dceaf5}",""]),t.exports=e},447:function(t,e,r){var content=r(693);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("11ad014a",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";var o={props:["allItems"],data:function(){return{search:"",state:[{text:"All states",value:"All"}],States:[{text:"All states",value:"All"},{text:"Paid",value:"Paid"},{text:"Published",value:"Published"},{text:"Overdue",value:"Overdue"},{text:"Drafts",value:"Draft"}],types:[{text:"All types",value:"All"},{text:"Invoice",value:"Invoice"},{text:"Cash invoice",value:"cash"},{text:"Credit invoice",value:"credit"}],activeclass:"primary",allclass:"normal",headers:[{text:this.$t("invoice.table.header.no"),align:"start",sortable:!1,value:"ocrid"},{text:this.$t("invoice.table.header.customer"),value:"customername"},{text:this.$t("invoice.table.header.amount"),value:"summa"},{text:this.$t("invoice.table.header.status"),value:"status"},{text:this.$t("invoice.table.header.doi"),value:"fromDate"},{text:this.$t("invoice.table.header.due"),value:"duedate"},{text:this.$t("invoice.table.header.delivery"),value:"deliveryDate"}],displaiedInvoices:[]}},watch:{allItems:function(t){this.displaiedInvoices=t}},methods:{getColor:function(t){return"Paid"==t?"green":"Overdue"==t?"red":"Draft"==t?"black":"Published"==t?"blue":void 0},filterstate:function(a){this.displaiedInvoices="All"==a?this.allItems:this.allItems.filter((function(t){return t.status==a}))},activeinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Paid"!=t.status})),this.activeclass="primary",this.allclass="normal"},allinvoices:function(){this.displaiedInvoices=this.allItems.filter((function(t){return"Draft"!=t.status})),this.allclass="primary",this.activeclass="normal"},handleClick:function(a){"Draft"==a.status?this.$router.push("/invoices/draft/"+a._id):"Overdue"==a.status?this.$router.push("/invoices/overdue/"+a._id):"Published"==a.status?this.$router.push("/invoices/published/"+a._id):this.$router.push("/invoices/paid/"+a._id)}},mounted:function(){this.displaiedInvoices=this.allItems,this.allinvoices()}},n=r(56),c=r(75),l=r.n(c),d=r(170),v=r(158),m=r(417),h=r(420),f=r(710),_=r(421),x=r(453),y=r(454),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-btn",{attrs:{text:"",small:"",color:t.activeclass},on:{click:t.activeinvoices}},[t._v(t._s(t.$t("invoice.table.activeInvoices")))]),t._v(" "),r("v-btn",{attrs:{text:"",small:"",color:t.allclass},on:{click:t.allinvoices}},[t._v(t._s(t.$t("invoice.table.allInvoices")))])],1),t._v(" "),r("v-card",{staticClass:"pa-8"},[r("v-row",{staticClass:"pa-4"},[r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-text-field",{attrs:{label:"Search","append-icon":"mdi-magnify","single-line":"","hide-details":"",solo:"",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"3"}},[r("v-select",{attrs:{items:t.States,"item-text":"text","item-value":"value",label:"All states",solo:"",dense:""},on:{change:t.filterstate},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1),t._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.displaiedInvoices,search:t.search},on:{"click:row":t.handleClick},scopedSlots:t._u([{key:"item.ocrid",fn:function(e){var o=e.item;return[r("P",{staticClass:"blue--text"},[t._v("#"+t._s(o.ocrid))])]}},{key:"item.summa",fn:function(e){var r=e.item;return[t._v("\n\t\t\t\t"+t._s(r.summa)+" Kr\n\t\t\t")]}},{key:"item.status",fn:function(e){var o=e.item;return[r("v-chip",{attrs:{color:t.getColor(o.status),dark:""}},[t._v(t._s(o.status))])]}}])})],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VChip:m.a,VCol:h.a,VDataTable:f.a,VRow:_.a,VSelect:x.a,VTextField:y.a})},452:function(t,e,r){"use strict";var o={props:["overpaid","overdue","outstanding"]},n=(r(422),r(56)),c=r(75),l=r.n(c),d=r(420),v=r(421),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12"}},[r("div",{staticClass:"blueSection pa-5"},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v(t._s(t.$t("invoice.overdueSection.Overpaid")))]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.overpaid||0)+"kr")])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v(t._s(t.$t("invoice.overdueSection.Overdue")))]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.overdue||0)+" kr")])]),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"4"}},[r("h6",{staticClass:"grey--text text-center subtitle-1 my-4 my-md-0"},[t._v(t._s(t.$t("invoice.overdueSection.Outstanding")))]),t._v(" "),r("h6",{staticClass:"display-1 text-center"},[t._v(t._s(t.outstanding||0)+"  kr")])])],1)],1)])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:d.a,VRow:v.a})},692:function(t,e,r){"use strict";var o=r(447);r.n(o).a},693:function(t,e,r){(e=r(12)(!1)).push([t.i,".v-list-item[data-v-6c6cbd62]{cursor:pointer!important}",""]),t.exports=e},732:function(t,e,r){"use strict";r.r(e);r(38);var o=r(14),n=r(451),c=r(403),l=r(452),d={middleware:"auth",layout:"admin",components:{dateTable:n.a,UserModal:c.a,calculations:l.a},data:function(){return{customer:{},deleteDialog:!1,editUserDialog:!1,customerInvoices:[],overdueSum:0}},computed:{IndividualsOrCorporations:function(){return this.customer.orgnummer?"2":"1"},items:function(){return[{text:"customers",href:"/customer"},{text:this.customer.customername,disabled:!0,href:"breadcrumbs_link_1"}]}},methods:{getCustomer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/customers/".concat(t.$route.params.id)).then((function(e){return t.customer=e[0]}));case 2:case"end":return e.stop()}}),e)})))()},deleteCustomer:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$delete("/customers/".concat(t.$route.params.id)).then((function(e){return t.$router.push("/customer")})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},addInvoiceWithCustomer:function(){this.$store.commit("setCustomer",this.customer),this.$router.push("/newinvoice")},downloadData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var element;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(element=document.createElement("a")).setAttribute("href","data:json/application;charset=utf-8,"+encodeURIComponent(JSON.stringify(t.customer))),element.setAttribute("download","".concat(t.customer.customername,".json")),element.style.display="none",document.body.appendChild(element),element.click(),document.body.removeChild(element);case 7:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCustomer();case 2:return e.next=4,t.$axios.$get("/invoices").then((function(e){var r=e.filter((function(e){return e.customername==t.customer.customername}));r.forEach((function(e){e.published&&!e.invoicepaid&&new Date(e.duedate)>Date.now()?e.status="Published":e.published&&!e.invoicepaid&&new Date(e.duedate)<Date.now()?(e.status="Overdue",t.overdueSum+=e.summa):e.published&&e.invoicepaid?e.status="Paid":e.published||(e.status="Draft"),e.duedate&&(e.duedate=new Date(e.duedate).toISOString().substring(0,10)),e.fromDate="-",e.deliveryDate="-"})),t.customerInvoices=r})).catch((function(t){return console.log(t)}));case 4:case"end":return e.stop()}}),e)})))()}},v=(r(692),r(56)),m=r(75),h=r.n(m),f=r(405),_=r(170),x=r(158),y=r(65),w=r(420),C=r(384),O=r(372),k=r(98),$=r(700),j=r(160),D=r(99),I=r(44),V=r(373),P=r(421),S=r(388),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-breadcrumbs",{staticClass:"pa-0 ma-0",attrs:{items:t.items}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"justify-space-between"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("h3",[t._v(t._s(t.customer.customername))])]),t._v(" "),r("UserModal",{attrs:{state:t.editUserDialog,customerId:t.customer._id,customer:t.customer,edit:!0},on:{UserEdited:t.getCustomer,close:function(e){t.editUserDialog=!1}}}),t._v(" "),r("v-dialog",{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("v-card",[r("v-card-title",[r("h4",[t._v("Deleting customer "+t._s(t.customer.customername))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-icon",{staticClass:"black--text",on:{click:function(e){t.deleteDialog=!1}}},[t._v("mdi mdi-close")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"py-3"},[t._v("Are you sure you want to remove customer Marika Bengtsson? This cannot be undone!")]),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",{staticClass:"grey lighten-3 pa-5"},[r("v-btn",{attrs:{text:""},on:{click:function(e){t.deleteDialog=!1}}},[t._v("close")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"error",depressed:""},on:{click:t.deleteCustomer}},[t._v("Yes, delete")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"justify-end d-flex",attrs:{cols:"12",md:"8"}},[r("v-btn",{attrs:{color:"success"},on:{click:t.addInvoiceWithCustomer}},[t._v("New Invoice")]),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"ml-2",attrs:{outlined:""}},o),[r("v-icon",{staticClass:"font1"},[t._v("mdi mdi-dots-horizontal")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",[r("v-list-item-title",{on:{click:function(e){t.editUserDialog=!0}}},[t._v("Edit User")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",{on:{click:function(e){t.deleteDialog=!0}}},[t._v("Delete Customer")])],1),t._v(" "),r("v-list-item",[r("v-list-item-title",{on:{click:t.downloadData}},[t._v("Download Data")])],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-card",{staticClass:"pa-3",attrs:{outlined:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Customer type")]),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.orgnummer?"Company":"Individuals"))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[t.customer.orgnummer?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Org-number")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.orgnummer||"-"))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"2"}},[t.customer.epost?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Email")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.epost||"-"))])]),t._v(" "),r("v-col",{attrs:{cols:"12",md:"3"}},[t.customer.postadress?r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("Address")]):t._e(),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.postadress||"-"))])]),t._v(" "),t.customer.vatnummer?r("v-col",{attrs:{cols:"12",md:"2"}},[r("p",{staticClass:"text--secondary pa-0 ma-0"},[t._v("VAT number")]),t._v(" "),r("p",{staticClass:"text--primary pa-0 ma-0"},[t._v(t._s(t.customer.vatnummer||"-"))])]):t._e()],1)],1),t._v(" "),r("calculations",{attrs:{overdue:t.overdueSum}}),t._v(" "),r("dateTable",{attrs:{allItems:t.customerInvoices}})],1)}),[],!1,null,"6c6cbd62",null);e.default=component.exports;h()(component,{VBreadcrumbs:f.a,VBtn:_.a,VCard:x.a,VCardActions:y.a,VCardText:y.c,VCardTitle:y.d,VCol:w.a,VDialog:C.a,VDivider:O.a,VIcon:k.a,VLayout:$.a,VList:j.a,VListItem:D.a,VListItemTitle:I.c,VMenu:V.a,VRow:P.a,VSpacer:S.a})}}]);