(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{394:function(t,e,n){var content=n(395);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("b1bed018",content,!0,{sourceMap:!1})},395:function(t,e,n){(e=n(12)(!1)).push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=e},397:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("dc0628f2",content,!0,{sourceMap:!1})},398:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:1;pointer-events:none}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=e},400:function(t,e,n){"use strict";n(11),n(8),n(9);var r=n(2),o=(n(47),n(7),n(5),n(168),n(29),n(30),n(6)),c=n(49),l=n(76);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},405:function(t,e,n){"use strict";n(11),n(8),n(7),n(5),n(9);var r=n(2),o=(n(394),n(50)),c=n(6);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return t("li",[t(n,d({},data,{attrs:d({},data.attrs,{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(0),f=Object(v.i)("v-breadcrumbs__divider","li"),m=n(15);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(h,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},411:function(t,e,n){"use strict";var r=n(2),o=(n(16),n(397),n(68)),c=n(17),l=n(106),d=n(78),h=n(107),v=n(140),f=n(27),m=n(0),y=n(10),_=n(6);e.a=Object(_.a)(c.a,l.a,d.a,h.a,v.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(r+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.g)(this.maxWidth),minWidth:Object(m.g)(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.r)(this,"activator",!0)&&Object(y.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===m.v.esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},725:function(t,e,n){"use strict";n.r(e);var r={name:"personalSettings",layout:"admin",middleware:"auth",data:function(){return{invoiceValid:!0,reiquiredRules:[function(t){return!!t||"Must be filled in"}],info:{dagar:"",Interest:"",delivery:""},breadcrumbItems:[{text:"Settings",disabled:!1,href:"/settings"},{text:"Invoice settings",disabled:!0}]}},methods:{validate:function(){this.$refs.form.validate()}}},o=n(56),c=n(75),l=n.n(c),d=n(405),h=n(170),v=n(158),f=n(65),m=n(420),y=n(382),_=n(400),O=n(98),w=n(421),x=n(454),j=n(411),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-breadcrumbs",{attrs:{items:t.breadcrumbItems},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("nuxt-link",{attrs:{to:"/settings"}},[n("v-icon",[t._v("mdi mdi-chevron-left")])],1),t._v(" "),n("h2",{staticClass:"d-inline-block"},[t._v("Invoice settings")])],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto py-4 d-block",attrs:{tile:"",outlined:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-card-title",[t._v("Invoice terms")]),t._v(" "),n("v-card-subtitle",[t._v("Set default invoice terms so that you don't have to change it individually for each new customer.")]),t._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.invoiceValid,callback:function(e){t.invoiceValid=e},expression:"invoiceValid"}},[n("v-container",[n("div",{staticClass:"d-flex align-start"},[n("v-text-field",{attrs:{rules:t.reiquiredRules,outlined:"",dense:"",label:"Days",required:""},model:{value:t.info.dagar,callback:function(e){t.$set(t.info,"dagar",e)},expression:"info.dagar"}}),t._v(" "),n("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-icon",t._g({staticClass:"ma-2"},r),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\t\tNumber of days before the payment is due.\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),n("div",{staticClass:"d-flex align-start"},[n("v-text-field",{attrs:{outlined:"",dense:"",rules:t.reiquiredRules,label:"Interest on overdue payment",required:""},model:{value:t.info.Interest,callback:function(e){t.$set(t.info,"Interest",e)},expression:"info.Interest"}}),t._v(" "),n("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-icon",t._g({staticClass:"ma-2"},r),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\t\tThis is where you define the interest rate added when a payment is overdue. Remember that you must create a new invoice with the added interest rate and send it to your customer. Invoices with interest rates also have to be recorded manually.\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),n("div",{staticClass:"d-flex align-start"},[n("v-text-field",{attrs:{rules:t.reiquiredRules,outlined:"",dense:"",label:"Delivery",required:""},model:{value:t.info.delivery,callback:function(e){t.$set(t.info,"delivery",e)},expression:"info.delivery"}}),t._v(" "),n("v-tooltip",{attrs:{"max-width":"300",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-icon",t._g({staticClass:"ma-2"},r),[t._v("mdi mdi-alert-circle")])]}}])},[t._v("\n\t\t\t\t\t\t\t\t\t\tDefine how the goods are delivered. Ex warehouse means that the risk is taken over by the customer as soon as the goods leave the warehouse.\n\t\t\t\t\t\t\t\t\t")])],1),t._v(" "),n("v-btn",{attrs:{color:"success",disabled:!t.invoiceValid},on:{click:t.editUser}},[t._v("save")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBreadcrumbs:d.a,VBtn:h.a,VCard:v.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:m.a,VContainer:y.a,VForm:_.a,VIcon:O.a,VRow:w.a,VTextField:x.a,VTooltip:j.a})}}]);