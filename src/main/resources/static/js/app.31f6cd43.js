(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a58":function(e,t,r){"use strict";r("8957")},"1d4c":function(e,t,r){},"2d9c":function(e,t,r){"use strict";r("1d4c")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("TopNavigation"),r("router-view")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{app:"",color:"white",flat:""}},[r("v-container",{staticClass:"py-0 fill-height"},[r("h3",[e._v(" CompuCompare ")]),r("v-spacer"),r("v-btn",{attrs:{text:"",small:""}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/"}},[e._v("Dashboard")])],1),r("v-btn",{attrs:{text:"",small:""}},[r("router-link",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{to:"/DeviceRecommendations"}},[e._v("Device Recommendations")])],1),r("v-spacer"),r("v-form",[r("v-responsive",{attrs:{"max-width":"350"}},[r("v-toolbar",{attrs:{height:"50px"}},[r("v-text-field",{attrs:{dense:"",flat:"","hide-details":"",rounded:"","background-color":"#E3F2FD",placeholder:"Search",solo:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.processForm()}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),r("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},on:{click:function(t){return e.processForm()}}},[r("v-icon",{attrs:{dense:""}},[e._v(" mdi-magnify ")])],1)],1)],1)],1)],1)],1)],1)},i=[],c={data:function(){return{links:["Dashboard","Device Recommendations"],query:""}},methods:{processForm:function(){this.$store.dispatch("generalSearch",this.query)}}},l=c,d=r("2877"),u=r("6544"),p=r.n(u),m=r("40dc"),v=r("8336"),f=r("a523"),h=r("4bd4"),b=r("132d"),S=r("6b53"),g=r("2fa4"),C=r("8654"),y=r("71d9"),_=Object(d["a"])(l,s,i,!1,null,"658d752b",null),V=_.exports;p()(_,{VAppBar:m["a"],VBtn:v["a"],VContainer:f["a"],VForm:h["a"],VIcon:b["a"],VResponsive:S["a"],VSpacer:g["a"],VTextField:C["a"],VToolbar:y["a"]});var O={components:{TopNavigation:V}},T=O,x=r("7496"),k=Object(d["a"])(T,o,a,!1,null,null,null),w=k.exports;p()(k,{VApp:x["a"]});var B=r("8c4f"),F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-main",{staticClass:"blue lighten-5"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-sheet",{attrs:{rounded:"lg"}})],1),r("v-col",[r("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}})],1),r("v-col",{attrs:{cols:"3"}},[r("Cart")],1)],1)],1)],1)],1)},R=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-sheet",{attrs:{rounded:"lg"}},[r("v-list",{attrs:{color:"transparent"}},[e._l(e.selected,(function(t){return r("v-list-item",{key:t.id},[r("v-list-item-content",[r("v-list-item-title",{attrs:{small:""}},[e._v(" "+e._s(t.brand)+" - "+e._s(t.model)+" ")])],1),r("v-btn",{on:{click:function(r){return e.removeFromCart(t)}}},[e._v(" - ")])],1)})),r("v-divider",{staticClass:"my-2"}),r("v-list-item",{attrs:{link:"",color:"blue lighten-4"}},[r("v-list-item-content",[r("v-list-item-title",[e._v(" Compare Devices ")])],1)],1)],2)],1)],1)},I=[],D={name:"Cart",computed:{selected:function(){return this.$store.state.selected}},created:function(){this.$store.dispatch("loadCart")},methods:{removeFromCart:function(e){this.$store.dispatch("removeFromCart",e)}}},L=D,j=r("ce7e"),$=r("8860"),M=r("da13"),z=r("5d23"),P=r("8dd9"),A=Object(d["a"])(L,E,I,!1,null,"5b02c1f0",null),N=A.exports;p()(A,{VBtn:v["a"],VDivider:j["a"],VList:$["a"],VListItem:M["a"],VListItemContent:z["a"],VListItemTitle:z["c"],VSheet:P["a"]});var J={name:"DeviceRecommendations",components:{Cart:N}},q=J,G=r("62ad"),U=r("f6c4"),H=r("0fd9"),K=Object(d["a"])(q,F,R,!1,null,"7c070b65",null),Q=K.exports;p()(K,{VCol:G["a"],VContainer:f["a"],VMain:U["a"],VRow:H["a"],VSheet:P["a"]});var W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-main",{staticClass:"blue lighten-5"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-sheet",{attrs:{rounded:"lg"}},[r("Filters")],1)],1),r("v-col",[r("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[r("ComputerList")],1)],1),r("v-col",{attrs:{cols:"3"}},[r("Cart")],1)],1)],1)],1)],1)},X=[],Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"computer-list"},e._l(e.computers,(function(t){return r("div",{key:t.id},[r("v-card",{staticClass:"card",attrs:{outlined:""}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},[e._v(" "+e._s(t.brand)+" - "+e._s(t.id)+" ")]),r("v-list-item-subtitle",[e._v(e._s(t.model))])],1),r("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}})],1),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",rounded:"",text:""},on:{click:function(r){return e.addToCompare(t)}}},[e._v(" Add To Bin ")])],1)],1)],1)})),0)},Z=[],ee=(r("4de4"),r("caad"),r("2532"),{computed:{computers:function(){var e=this.$store.state.filters;return this.$store.state.computers.filter((function(t){var r=!0;return 0!=e["computerBrandSelected"].length&&(r=e["computerBrandSelected"].includes(t.brand)),r}))}},methods:{addToCompare:function(e){this.$store.dispatch("addToCompare",e)}}}),te=ee,re=(r("0a58"),r("b0af")),ne=r("99d9"),oe=r("8270"),ae=Object(d["a"])(te,Y,Z,!1,null,"3a6da91e",null),se=ae.exports;p()(ae,{VBtn:v["a"],VCard:re["a"],VCardActions:ne["a"],VListItem:M["a"],VListItemAvatar:oe["a"],VListItemContent:z["a"],VListItemSubtitle:z["b"]});var ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{color:"transparent"}},[r("h4",[e._v("Filters")]),r("v-list-item",{staticClass:"small"},[r("v-list-item-content",[r("v-list-item-title",[e._v("Computer Type")]),r("v-radio-group",{staticClass:"group",model:{value:e.selections.computerTypeSelected,callback:function(t){e.$set(e.selections,"computerTypeSelected",t)},expression:"selections.computerTypeSelected"}},e._l(e.computerTypeOptions,(function(e){return r("v-radio",{key:e,staticClass:"selection",attrs:{label:e,value:e}})})),1)],1)],1),r("v-list-item",{staticClass:"small"},[r("v-list-item-content",[r("v-list-item-title",[e._v("Computer Brand")]),e._l(e.computerBrandOptions,(function(t){return r("v-checkbox",{key:t,staticClass:"selection",attrs:{label:t,value:t},model:{value:e.selections.computerBrandSelected,callback:function(t){e.$set(e.selections,"computerBrandSelected",t)},expression:"selections.computerBrandSelected"}})}))],2)],1),r("v-divider",{staticClass:"my-2"}),r("v-list-item",{attrs:{link:"",color:"blue lighten-4"}},[r("v-list-item-content",[r("v-list-item-title",[r("v-btn",{attrs:{text:"",small:""},on:{click:e.applyFilters}},[e._v(" Apply Filter ")])],1)],1)],1)],1)],1)},ce=[],le=r("2ef0"),de=r.n(le),ue={data:function(){return{computerTypeOptions:["Desktop","Laptop","Both"],computerBrandOptions:["Acer","Apple","Dell","HP","Lenovo"],processorBrandOptions:["AMD","Intel"],processorModelOptions:["i5","i7","i9","Ryzen 5","Ryzen 7"],graphicsBrandOptions:["NVIDIA"],ramSizeOptions:["4","8","16","32"],storageSizeOptions:["250GB","500GB","1TB"],screenSizeOptions:["13inch","15inch"],selections:{computerTypeSelected:[],computerBrandSelected:[],processorBrandSelected:[],processorModelSelected:[],graphicsBrandSelected:[],ramSizeSelected:[],storageSizeSelected:[],screenSizeSelected:[]}}},methods:{applyFilters:function(){var e=de.a.cloneDeep(this.selections);this.$store.commit("SET_FILTERS",e)}}},pe=ue,me=(r("2d9c"),r("ac7c")),ve=r("67b6"),fe=r("43a6"),he=Object(d["a"])(pe,ie,ce,!1,null,"6bcf6fea",null),be=he.exports;p()(he,{VBtn:v["a"],VCheckbox:me["a"],VDivider:j["a"],VList:$["a"],VListItem:M["a"],VListItemContent:z["a"],VListItemTitle:z["c"],VRadio:ve["a"],VRadioGroup:fe["a"]});var Se={components:{ComputerList:se,Cart:N,Filters:be}},ge=Se,Ce=(r("bdc0"),Object(d["a"])(ge,W,X,!1,null,"6c5cbffc",null)),ye=Ce.exports;p()(Ce,{VCol:G["a"],VContainer:f["a"],VMain:U["a"],VRow:H["a"],VSheet:P["a"]}),n["a"].use(B["a"]);var _e=[{path:"/DeviceRecommendations",name:"DeviceRecommendations",component:Q},{path:"/",name:"Dashboard",component:ye}],Ve=new B["a"]({routes:_e}),Oe=Ve,Te=(r("c975"),r("a434"),r("96cf"),r("1da1")),xe=r("2f62"),ke=r("bc3a"),we=r.n(ke);n["a"].use(xe["a"]);var Be=new xe["a"].Store({state:{computers:[],selected:[],filters:{computerTypeSelected:[],computerBrandSelected:[],processorBrandSelected:[],processorModelSelected:[],graphicsBrandSelected:[],ramSizeSelected:[],storageSizeSelected:[],screenSizeSelected:[]}},mutations:{SET_COMPUTERS:function(e,t){e.computers=t},addToCart:function(e,t){for(var r=e.selected.length-1;r>=0;r--)if(e.selected[r].id==t.id)return;e.selected.push(t),sessionStorage.setItem("selected",JSON.stringify(e.selected))},loadCart:function(e){null!=JSON.parse(sessionStorage.getItem("selected"))&&(e.selected=JSON.parse(sessionStorage.getItem("selected")))},removeFromCart:function(e,t){e.selected.splice(e.selected.indexOf(t),1),sessionStorage.setItem("selected",JSON.stringify(e.selected))},SET_FILTERS:function(e,t){e.filters=t,console.log(JSON.stringify(e.filters))}},actions:{generalSearch:function(e,t){return Object(Te["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,o=[{id:0,brand:"HP",model:"model1"},{id:1,brand:"Dell",model:"model2"},{id:2,brand:"Apple",model:"model3"}],n("SET_COMPUTERS",o),console.log(t);case 4:case"end":return r.stop()}}),r)})))()},filteredSearch:function(e,t){return Object(Te["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,console.log(t),we.a.get("https://compucompare/generalSearch").then((function(e){return n("SET_COMPUTERS",e.data)})).catch((function(e){return console.log(e)}));case 3:case"end":return r.stop()}}),r)})))()},addToCompare:function(e,t){var r=e.commit;r("addToCart",t)},loadCart:function(e){var t=e.commit;t("loadCart")},removeFromCart:function(e,t){var r=e.commit;r("removeFromCart",t)},setFilters:function(e,t){var r=e.commit;r("SET_FILTERS",t)}},getters:{},modules:{}}),Fe=r("f309");n["a"].use(Fe["a"]);var Re=new Fe["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:Oe,store:Be,vuetify:Re,render:function(e){return e(w)}}).$mount("#app")},8957:function(e,t,r){},bdc0:function(e,t,r){"use strict";r("f81a")},f81a:function(e,t,r){}});
//# sourceMappingURL=app.31f6cd43.js.map