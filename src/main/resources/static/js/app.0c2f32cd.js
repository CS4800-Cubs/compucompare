(function(e){function r(r){for(var a,c,n=r[0],i=r[1],l=r[2],u=0,v=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&v.push(s[c][0]),s[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(r);while(v.length)v.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,r=0;r<o.length;r++){for(var t=o[r],a=!0,n=1;n<t.length;n++){var i=t[n];0!==s[i]&&(a=!1)}a&&(o.splice(r--,1),e=c(c.s=t[0]))}return e}var a={},s={app:0},o=[];function c(r){if(a[r])return a[r].exports;var t=a[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=a,c.d=function(e,r,t){c.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,r){if(1&r&&(e=c(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)c.d(t,a,function(r){return e[r]}.bind(null,a));return t},c.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(r,"a",r),r},c.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=r,n=n.slice();for(var l=0;l<n.length;l++)r(n[l]);var d=i;o.push([0,"chunk-vendors"]),t()})({0:function(e,r,t){e.exports=t("56d7")},2006:function(e,r,t){e.exports=t.p+"img/cc_logo.e5c42b37.png"},"2c16":function(e,r,t){"use strict";t("5f0a")},"56d7":function(e,r,t){"use strict";t.r(r);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-app",{attrs:{id:"inspire"}},[t("TopNavigation"),t("router-view")],1)},o=[],c=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[a("v-container",{staticClass:"py-0 fill-height"},[a("v-img",{staticStyle:{"padding-left":"50px"},attrs:{src:t("2006"),contain:"","max-width":"250"}}),a("v-spacer"),a("v-btn",{attrs:{text:"",small:""}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/"}},[e._v("Dashboard")])],1),a("v-btn",{attrs:{text:"",small:""}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/DeviceRecommendations"}},[e._v("Device Recommendations")])],1),a("v-spacer"),a("v-form",{attrs:{action:"/",method:"get"}},[a("v-responsive",{attrs:{"max-width":"350"}},[a("v-toolbar",{attrs:{height:"50px"}},[a("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","background-color":"#E3F2FD",placeholder:"Search",solo:""},on:{keypress:function(r){if(!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;r.preventDefault()}},model:{value:e.query,callback:function(r){e.query=r},expression:"query"}}),a("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(r){return e.processForm()}}},[a("v-icon",{attrs:{dense:""}},[e._v(" mdi-magnify ")])],1)],1)],1)],1)],1)],1)],1)},n=[],i={data:function(){return{links:["Dashboard","Device Recommendations"],query:""}},methods:{processForm:function(){this.$store.dispatch("generalSearch",this.query)}}},l=i,d=t("2877"),u=t("6544"),v=t.n(u),m=t("40dc"),h=t("8336"),p=t("a523"),b=t("4bd4"),f=t("132d"),g=t("adda"),F=t("6b53"),y=t("2fa4"),_=t("8654"),S=t("71d9"),k=Object(d["a"])(l,c,n,!1,null,"80333fe6",null),w=k.exports;v()(k,{VAppBar:m["a"],VBtn:h["a"],VContainer:p["a"],VForm:b["a"],VIcon:f["a"],VImg:g["a"],VResponsive:F["a"],VSpacer:y["a"],VTextField:_["a"],VToolbar:S["a"]});var x={components:{TopNavigation:w}},A=x,C=t("7496"),$=Object(d["a"])(A,s,o,!1,null,null,null),R=$.exports;v()($,{VApp:C["a"]});var V=t("8c4f"),T=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{attrs:{id:"surveyElement"}},[t("Survey")],1)])},O=[],P=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h3",[e._v(" Are you looking for a laptop or a desktop? ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.portable,expression:"searchFor.portable"}],attrs:{type:"radio",value:"true"},domProps:{checked:e._q(e.searchFor.portable,"true")},on:{change:function(r){return e.$set(e.searchFor,"portable","true")}}}),e._v(" Laptop "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.portable,expression:"searchFor.portable"}],attrs:{type:"radio",value:"false"},domProps:{checked:e._q(e.searchFor.portable,"false")},on:{change:function(r){return e.$set(e.searchFor,"portable","false")}}}),e._v(" Desktop "),t("br"),t("br"),t("h3",[e._v(" Purpose for laptop or desktop? Select all that apply ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.categories,expression:"searchFor.categories"}],attrs:{type:"checkbox",value:"gaming"},domProps:{checked:Array.isArray(e.searchFor.categories)?e._i(e.searchFor.categories,"gaming")>-1:e.searchFor.categories},on:{change:function(r){var t=e.searchFor.categories,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="gaming",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"categories",t.concat([o])):c>-1&&e.$set(e.searchFor,"categories",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"categories",s)}}}),e._v(" Gaming or Streaming "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.categories,expression:"searchFor.categories"}],attrs:{type:"checkbox",value:"editing"},domProps:{checked:Array.isArray(e.searchFor.categories)?e._i(e.searchFor.categories,"editing")>-1:e.searchFor.categories},on:{change:function(r){var t=e.searchFor.categories,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="editing",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"categories",t.concat([o])):c>-1&&e.$set(e.searchFor,"categories",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"categories",s)}}}),e._v(" Editing "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.categories,expression:"searchFor.categories"}],attrs:{type:"checkbox",value:"work"},domProps:{checked:Array.isArray(e.searchFor.categories)?e._i(e.searchFor.categories,"work")>-1:e.searchFor.categories},on:{change:function(r){var t=e.searchFor.categories,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="work",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"categories",t.concat([o])):c>-1&&e.$set(e.searchFor,"categories",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"categories",s)}}}),e._v(" Work "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.categories,expression:"searchFor.categories"}],attrs:{type:"checkbox",value:"education"},domProps:{checked:Array.isArray(e.searchFor.categories)?e._i(e.searchFor.categories,"education")>-1:e.searchFor.categories},on:{change:function(r){var t=e.searchFor.categories,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="education",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"categories",t.concat([o])):c>-1&&e.$set(e.searchFor,"categories",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"categories",s)}}}),e._v(" Education "),t("br"),t("br"),t("h3",[e._v(" Which brand(s) do you prefer? Select up to 3 options ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"acer",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"acer")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="acer",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Acer "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"apple",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"apple")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="apple",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Apple "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"asus",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"asus")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="asus",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Asus "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"dell",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"dell")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="dell",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Dell "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"hp",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"hp")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="hp",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Hp "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"kano",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"kano")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="kano",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Kano "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"lenovo",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"lenovo")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="lenovo",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Lenovo "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"lg",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"lg")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="lg",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" LG "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"microsoft",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"microsoft")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="microsoft",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Microsoft "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"msi",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"msi")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="msi",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" MSI "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"razer",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"razer")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="razer",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Razer "),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchFor.brands,expression:"searchFor.brands"}],attrs:{type:"checkbox",value:"samsung",disabled:e.limitReached(e.searchFor.brands)},domProps:{checked:Array.isArray(e.searchFor.brands)?e._i(e.searchFor.brands,"samsung")>-1:e.searchFor.brands},on:{change:function(r){var t=e.searchFor.brands,a=r.target,s=!!a.checked;if(Array.isArray(t)){var o="samsung",c=e._i(t,o);a.checked?c<0&&e.$set(e.searchFor,"brands",t.concat([o])):c>-1&&e.$set(e.searchFor,"brands",t.slice(0,c).concat(t.slice(c+1)))}else e.$set(e.searchFor,"brands",s)}}}),e._v(" Samsung "),t("br"),t("br"),t("v-row",{attrs:{align:"center",justify:"space-around"}},[t("v-btn",{on:{click:e.submitSurvey}},[e._v("Submit")])],1)],1)},D=[],I=(t("caad"),t("2532"),{name:"Survey",data:function(){return{searchFor:{portable:null,categories:[],brands:[]}}},methods:{limitReached:function(e,r){return 3==e.length&&!e.includes(r)},submitSurvey:function(){console.log("Pre Dispatch"),this.$store.dispatch("surveySearch",this.searchFor)}}}),N=I,E=t("0fd9"),B=Object(d["a"])(N,P,D,!1,null,null,null),z=B.exports;v()(B,{VBtn:h["a"],VRow:E["a"]});var L={name:"DeviceRecommendations",components:{Survey:z}},j=L,M=(t("b900"),Object(d["a"])(j,T,O,!1,null,"7bed6c79",null)),J=M.exports,q=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-main",{staticClass:"blue lighten-5"},[t("v-window",{model:{value:e.window,callback:function(r){e.window=r},expression:"window"}},[t("v-window-item",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("v-card",[t("Filters")],1)],1),t("v-col",[t("v-banner",[t("v-btn",{on:{click:e.goToSurveyResults}},[e._v(" View your survey results! "),t("v-icon",[e._v(" mdi-laptop ")])],1)],1),t("v-card",{attrs:{"min-height":"70vh"}},[t("ComputerList",{on:{expandDevice:e.expandDevice}})],1)],1),t("v-col",{attrs:{cols:"3"}},[t("v-card",{staticClass:"mx-auto"},[t("Cart",{on:{goToCompare:e.goToCompare}})],1)],1)],1)],1)],1),t("v-window-item",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"1"}},[t("v-sheet",{staticClass:"previous",attrs:{rounded:"lg"}},[t("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{text:""},on:{click:e.minimizeDevice}},[t("v-icon",[e._v("mdi-chevron-left")])],1)],1)],1),t("v-col",[t("v-card",{attrs:{"min-height":"70vh"}},[t("AdvanceDetails",{attrs:{computer:e.expandedDevice}})],1)],1),t("v-col",{attrs:{cols:"3"}},[t("v-card",{staticClass:"mx-auto"},[t("Cart",{on:{goToCompare:e.goToCompare}})],1)],1)],1)],1)],1),t("v-window-item",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"1"}},[t("v-sheet",{staticClass:"previous",attrs:{rounded:"lg"}},[t("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{text:""},on:{click:e.returnFromCompare}},[t("v-icon",[e._v("mdi-chevron-left")])],1)],1)],1),t("v-col",[t("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},e._l(e.comparisonResults,(function(r){return t("div",{key:r.id},[t("v-card",{staticClass:"card",attrs:{outlined:""}},[t("v-list-item",{attrs:{"three-line":""}},[t("v-list-item-content",[t("div",{staticClass:"overline mb-4"},[e._v(" "+e._s(r.brand)+" - "+e._s(r.model)+" ")]),t("v-list-item-subtitle",[e._v(e._s(r.displayName))])],1),t("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[t("v-img",{attrs:{contain:"",src:r.thumbnailUrl}})],1),t("v-btn",{attrs:{text:""},on:{click:function(t){return e.expandDeviceFromCompare(r)}}},[t("v-icon",[e._v("mdi-chevron-right")])],1)],1)],1)],1)})),0)],1)],1)],1)],1),t("v-window-item",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"1"}},[t("v-sheet",{staticClass:"previous",attrs:{rounded:"lg"}},[t("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{text:""},on:{click:function(r){return e.goToCompare()}}},[t("v-icon",[e._v("mdi-chevron-left")])],1)],1)],1),t("v-col",[t("v-card",{attrs:{"min-height":"70vh"}},[t("AdvanceDetails",{attrs:{computer:e.expandedDevice}})],1)],1),t("v-col",{attrs:{cols:"3"}})],1)],1)],1),t("v-window-item",[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"1"}},[t("v-sheet",{staticClass:"previous",attrs:{rounded:"lg"}},[t("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{text:""},on:{click:function(r){return e.returnFromSurveyResults()}}},[t("v-icon",[e._v("mdi-chevron-left")])],1)],1)],1),t("v-col",e._l(e.results,(function(r){return t("div",{key:r.id},[t("v-card",{staticClass:"card",attrs:{outlined:""}},[t("v-list-item",{attrs:{"three-line":""}},[t("v-list-item-content",[t("div",{staticClass:"overline mb-4"},[e._v(" "+e._s(r.brand)+" - "+e._s(r.model)+" ")]),t("v-list-item-subtitle",[e._v(e._s(r.displayName))])],1),t("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[t("v-img",{attrs:{contain:"",src:r.thumbnailUrl}})],1),t("v-btn",{attrs:{text:""},on:{click:function(t){return e.expandDevice(r)}}},[t("v-icon",[e._v("mdi-chevron-right")])],1)],1),t("v-card-actions",[t("v-btn",{attrs:{outlined:"",rounded:"",text:"",small:""},on:{click:function(t){return e.addToCompare(r)}}},[e._v(" Compare ")])],1)],1)],1)})),0),t("v-col",{attrs:{cols:"3"}},[t("v-card",{staticClass:"mx-auto"},[t("Cart",{on:{goToCompare:e.goToCompare}})],1)],1)],1)],1)],1)],1)],1)],1)},U=[],G=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"computer-list"},e._l(e.computers,(function(r){return t("div",{key:r.id},[t("v-card",{staticClass:"card",attrs:{outlined:""}},[t("v-list-item",{attrs:{"three-line":""}},[t("v-list-item-content",[t("div",{staticClass:"overline mb-4"},[e._v(" "+e._s(r.result.brand)+" - "+e._s(r.result.model)+" ")]),t("v-list-item-subtitle",[e._v(e._s(r.result.displayName))])],1),t("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[t("v-img",{attrs:{contain:"",src:r.result.thumbnailUrl}})],1),t("v-btn",{attrs:{text:""},on:{click:function(t){return e.emitEvent(r)}}},[t("v-icon",[e._v("mdi-chevron-right")])],1)],1),t("v-card-actions",[t("v-btn",{attrs:{outlined:"",rounded:"",text:"",small:""},on:{click:function(t){return e.addToCompare(r.result)}}},[e._v(" Compare ")])],1)],1)],1)})),0)},W=[],H=(t("4de4"),{props:["callback"],computed:{computers:function(){var e=this.$store.state.filters;return this.$store.state.computers.filter((function(r){var t=!0,a=!0,s=!0,o=!0,c=!0;return e["computerBrandSelected"].includes("All")||(t=e["computerBrandSelected"].includes(r.result.brand)),e["ramSizeSelected"].includes("All")||(a=e["ramSizeSelected"].includes(r.result.ram.memory)),e["storageSizeSelected"].includes("All")||(null!=r.storage[0]&&(s=e["storageSizeSelected"].includes(r.result.storage[0].capacity)),s=!1),e["processorBrandSelected"].includes("All")||(o=e["processorBrandSelected"].includes(r.result.processor.brand)),t&&a&&s&&o&&c}))}},methods:{addToCompare:function(e){this.$store.dispatch("addToCompare",e)},emitEvent:function(e){this.$emit("expandDevice",e)}}}),K=H,Q=(t("2c16"),t("b0af")),X=t("99d9"),Y=t("da13"),Z=t("8270"),ee=t("5d23"),re=Object(d["a"])(K,G,W,!1,null,"84fa12fe",null),te=re.exports;v()(re,{VBtn:h["a"],VCard:Q["a"],VCardActions:X["a"],VIcon:f["a"],VImg:g["a"],VListItem:Y["a"],VListItemAvatar:Z["a"],VListItemContent:ee["a"],VListItemSubtitle:ee["b"]});var ae=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-list",{attrs:{color:"transparent"}},[e._l(e.selected,(function(r){return t("transition",{key:r.id,attrs:{name:"fade"}},[t("v-list-item",[t("v-list-item-content",[t("v-list-item-title",{attrs:{small:""}},[e._v(" "+e._s(r.brand)+" - "+e._s(r.model)+" ")])],1),t("v-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{small:""},on:{click:function(t){return e.removeFromCart(r)}}},[t("v-icon",[e._v("mdi-delete")])],1)],1)],1)})),t("v-divider",{staticClass:"my-2"}),t("v-list-item",{attrs:{link:"",color:"blue lighten-4"}},[t("v-list-item-content",[t("v-list-item-title",[t("v-btn",{attrs:{text:"",small:""},on:{click:e.compareCart}},[e._v(" Compare Devices ")])],1)],1)],1)],2)],1)},se=[],oe={name:"Cart",computed:{selected:function(){return this.$store.state.selected}},created:function(){this.$store.dispatch("loadCart")},methods:{removeFromCart:function(e){this.$store.dispatch("removeFromCart",e)},compareCart:function(){this.$store.dispatch("compareComputers"),this.$emit("goToCompare")}}},ce=oe,ne=(t("66ed"),t("ce7e")),ie=t("8860"),le=t("269a"),de=t.n(le),ue=t("5607"),ve=Object(d["a"])(ce,ae,se,!1,null,"54062098",null),me=ve.exports;v()(ve,{VBtn:h["a"],VDivider:ne["a"],VIcon:f["a"],VList:ie["a"],VListItem:Y["a"],VListItemContent:ee["a"],VListItemTitle:ee["c"]}),de()(ve,{Ripple:ue["a"]});var he=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("v-card",{staticClass:"mx=auto",attrs:{"max-width":"450"}},[t("v-card-text",{staticStyle:{"padding-bottom":"0"}},[t("p",{staticClass:"font-weight-bold"},[e._v("Computer Type")]),t("v-chip-group",{attrs:{column:"",single:"",mandatory:""},model:{value:e.selections.computerTypeSelected,callback:function(r){e.$set(e.selections,"computerTypeSelected",r)},expression:"selections.computerTypeSelected"}},e._l(e.computerTypeOptions,(function(r){return t("v-chip",{key:r,attrs:{filter:"",outlined:"",small:"",flat:""}},[e._v(" "+e._s(r)+" ")])})),1)],1),t("v-card-text",[t("p",{staticClass:"font-weight-bold"},[e._v("Computer Brand")]),t("v-chip-group",{attrs:{column:"",multiple:"",mandatory:""},model:{value:e.selections.computerBrandSelected,callback:function(r){e.$set(e.selections,"computerBrandSelected",r)},expression:"selections.computerBrandSelected"}},e._l(e.computerBrandOptions,(function(r){return t("v-chip",{key:r,attrs:{filter:"",outlined:"",small:"",flat:"",value:r}},[e._v(" "+e._s(r)+" ")])})),1)],1),t("v-card-text",[t("p",{staticClass:"font-weight-bold"},[e._v("Processor Brand")]),t("v-chip-group",{attrs:{column:"",single:"",mandatory:""},model:{value:e.selections.processorBrandSelected,callback:function(r){e.$set(e.selections,"processorBrandSelected",r)},expression:"selections.processorBrandSelected"}},e._l(e.processorBrandOptions,(function(r){return t("v-chip",{key:r,attrs:{filter:"",outlined:"",small:"",flat:"",value:r}},[e._v(" "+e._s(r)+" ")])})),1)],1),t("v-card-text",[t("p",{staticClass:"font-weight-bold"},[e._v("Ram Size")]),t("v-chip-group",{attrs:{row:"",single:"",mandatory:""},model:{value:e.selections.ramSizeSelected,callback:function(r){e.$set(e.selections,"ramSizeSelected",r)},expression:"selections.ramSizeSelected"}},e._l(e.ramSizeOptions,(function(r){return t("v-chip",{key:r,attrs:{filter:"",outlined:"",small:"",flat:"",value:r}},[e._v(" "+e._s(r)+" ")])})),1)],1),t("v-card-text",[t("p",{staticClass:"font-weight-bold"},[e._v("Storage Size")]),t("v-chip-group",{attrs:{row:"",single:"",mandatory:""},model:{value:e.selections.storageSizeSelected,callback:function(r){e.$set(e.selections,"storageSizeSelected",r)},expression:"selections.storageSizeSelected"}},e._l(e.storageSizeOptions,(function(r){return t("v-chip",{key:r,attrs:{filter:"",outlined:"",small:"",flat:"",value:r}},[e._v(" "+e._s(r)+" ")])})),1)],1),t("v-list",{attrs:{color:"transparent"}},[t("v-divider",{staticClass:"my-2"}),t("v-list-item",{attrs:{link:"",color:"blue lighten-4"}},[t("v-list-item-content",[t("v-list-item-title",[t("v-btn",{attrs:{text:"",small:""},on:{click:e.applyFilters}},[e._v(" Apply Filter ")])],1)],1)],1)],1)],1)],1)},pe=[],be=t("2ef0"),fe=t.n(be),ge={data:function(){return{computerTypeOptions:["Both","Desktop","Laptop"],computerBrandOptions:["All","Acer","Apple","Dell","HP","Lenovo"],processorBrandOptions:["All","AMD","Intel"],ramSizeOptions:["All","4","8","16","32"],storageSizeOptions:["All","250GB","500GB","1TB"],selections:{computerTypeSelected:[],computerBrandSelected:[],processorBrandSelected:[],processorModelSelected:[],graphicsBrandSelected:[],ramSizeSelected:[],storageSizeSelected:[],screenSizeSelected:[]}}},methods:{applyFilters:function(){var e=fe.a.cloneDeep(this.selections);this.$store.commit("SET_FILTERS",e)}}},Fe=ge,ye=t("cc20"),_e=t("ef9a"),Se=Object(d["a"])(Fe,he,pe,!1,null,"6094212a",null),ke=Se.exports;v()(Se,{VBtn:h["a"],VCard:Q["a"],VCardText:X["b"],VChip:ye["a"],VChipGroup:_e["a"],VDivider:ne["a"],VList:ie["a"],VListItem:Y["a"],VListItemContent:ee["a"],VListItemTitle:ee["c"]});var we=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("h1",[e._v(e._s(e.computer.result.brand))]),t("h1",[e._v(e._s(e.computer.result.model))])])},xe=[],Ae={name:"AdvanceDeatil",props:["computer"]},Ce=Ae,$e=Object(d["a"])(Ce,we,xe,!1,null,null,null),Re=$e.exports,Ve={components:{ComputerList:te,Cart:me,Filters:ke,AdvanceDetails:Re},data:function(){return{window:0,length:2,expandedDevice:[]}},methods:{expandDevice:function(e){this.window=1,this.$store.state.windowPosition=1,this.expandedDevice=e},minimizeDevice:function(){this.window=0,this.$store.state.windowPosition=0},expandDeviceFromCompare:function(e){this.window=3,this.$store.state.windowPosition=3,this.expandedDevice=e},goToCompare:function(){this.window=2,this.$store.state.windowPosition=2},returnFromCompare:function(){this.window=0,this.$store.state.windowPosition=0},returnFromSurveyResults:function(){this.window=0,this.$store.state.windowPosition=0},goToSurveyResults:function(){this.window=4,this.$store.state.windowPosition=4},addToCompare:function(e){this.$store.dispatch("addToCompare",e)},emitEvent:function(e){this.$emit("expandDevice",e)}},computed:{computers:function(){return this.$store.state.selected},results:function(){return this.$store.state.results},comparisonResults:function(){return this.$store.state.compareResults}},created:function(){this.$store.dispatch("loadSurveyResults"),this.window=0}},Te=Ve,Oe=(t("8c72"),t("e4e5")),Pe=t("62ad"),De=t("f6c4"),Ie=t("8dd9"),Ne=t("f665"),Ee=t("1e6c"),Be=Object(d["a"])(Te,q,U,!1,null,"7e68bba2",null),ze=Be.exports;v()(Be,{VBanner:Oe["a"],VBtn:h["a"],VCard:Q["a"],VCardActions:X["a"],VCol:Pe["a"],VContainer:p["a"],VIcon:f["a"],VImg:g["a"],VListItem:Y["a"],VListItemAvatar:Z["a"],VListItemContent:ee["a"],VListItemSubtitle:ee["b"],VMain:De["a"],VRow:E["a"],VSheet:Ie["a"],VWindow:Ne["a"],VWindowItem:Ee["a"]}),de()(Be,{Ripple:ue["a"]}),a["a"].use(V["a"]);var Le=[{path:"/DeviceRecommendations",name:"DeviceRecommendations",component:J},{path:"/",name:"Dashboard",component:ze}],je=new V["a"]({routes:Le}),Me=je,Je=(t("c975"),t("a434"),t("96cf"),t("1da1")),qe=t("2f62"),Ue=t("bc3a"),Ge=t.n(Ue);a["a"].use(qe["a"]);var We=new qe["a"].Store({state:{computers:[],selected:[],filters:{computerTypeSelected:["Both"],computerBrandSelected:["All"],processorBrandSelected:["All"],ramSizeSelected:["All"],storageSizeSelected:["All"],screenSizeSelected:[]},results:[],windowPosition:0,query:[],compareResults:[]},mutations:{SET_COMPUTERS:function(e,r){e.computers=r},addToCart:function(e,r){for(var t=e.selected.length-1;t>=0;t--)if(e.selected[t].id==r.id)return;e.selected.push(r),sessionStorage.setItem("selected",JSON.stringify(e.selected))},loadCart:function(e){null!=JSON.parse(sessionStorage.getItem("selected"))&&(e.selected=JSON.parse(sessionStorage.getItem("selected")))},removeFromCart:function(e,r){e.selected.splice(e.selected.indexOf(r),1),sessionStorage.setItem("selected",JSON.stringify(e.selected))},SET_FILTERS:function(e,r){e.filters=r},SET_SurveyResults:function(e,r){console.log("Alec"),e.results=r,sessionStorage.setItem("results",JSON.stringify(e.results)),window.location.href="/"},loadSurveyResults:function(e){null!=JSON.parse(sessionStorage.getItem("results"))&&(e.results=JSON.parse(sessionStorage.getItem("results")))},SET_COMPARE_RESULTS:function(e,r){e.compareResults=r}},actions:{compareComputers:function(e){var r=this;return Object(Je["a"])(regeneratorRuntime.mark((function t(){var a,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=e.commit,s=[],console.log(r.state.selected.length),o=0;o<r.state.selected.length;o++)s.push(r.state.selected[o].id);Ge.a.post("https://compucompare.com/compare",{computerIds:s,surveyResponse:JSON.parse(sessionStorage.getItem("survey"))}).then((function(e){return a("SET_COMPARE_RESULTS",e.data)})).catch((function(e){return console.log(e)}));case 5:case"end":return t.stop()}}),t)})))()},generalSearch:function(e,r){return Object(Je["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,sessionStorage.setItem("query",r),Ge.a.get("https://compucompare.com/generalSearch",{params:{query:r}}).then((function(e){return a("SET_COMPUTERS",e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()},addToCompare:function(e,r){var t=e.commit;t("addToCart",r)},loadCart:function(e){var r=e.commit;r("loadCart")},removeFromCart:function(e,r){var t=e.commit;t("removeFromCart",r)},setFilters:function(e,r){var t=e.commit;t("SET_FILTERS",r)},loadSurveyResults:function(e){var r=e.commit;r("loadSurveyResults")},surveySearch:function(e,r){return Object(Je["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,sessionStorage.setItem("survey",JSON.stringify(r)),Ge.a.post("https://compucompare.com/surveySearch",r,{timeout:1e4}).then((function(e){return a("SET_SurveyResults",e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})))()}},getters:{},modules:{}}),He=t("f309");a["a"].use(He["a"]);var Ke=new He["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:Me,store:We,vuetify:Ke,render:function(e){return e(R)}}).$mount("#app")},"5f0a":function(e,r,t){},"66ed":function(e,r,t){"use strict";t("99dd")},"8c72":function(e,r,t){"use strict";t("f7c6")},"99dd":function(e,r,t){},a0cd:function(e,r,t){},b900:function(e,r,t){"use strict";t("a0cd")},f7c6:function(e,r,t){}});
//# sourceMappingURL=app.0c2f32cd.js.map