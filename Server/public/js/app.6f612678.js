(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0b44":function(t,e,n){"use strict";var a=n("e4bf"),r=n.n(a);r.a},"0c5b":function(t,e,n){t.exports=n.p+"img/gig-pic.64767989.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("Title",{attrs:{msg:"Gig Findr by Ryan"}}),a("br"),a("img",{attrs:{src:n("0c5b"),width:"60%"}}),a("br"),a("h2",[t._v("Upcoming Gigs:")]),a("EventTable"),a("img",{ref:"evfinda",attrs:{src:"https://www.eventfinda.co.nz/images/global/attribution.gif?qgocdu",width:"350"}}),a("br"),a("Inputs")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h2",[t._v(t._s(t.msg))])])},s=[],c={name:"Title",props:{msg:String}},l=c,u=(n("0b44"),n("2877")),d=Object(u["a"])(l,o,s,!1,null,"b8ed0cdc",null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputs"},[t._m(0),n("div",{attrs:{id:"inputs"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"3"}}),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{label:"Name",filled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{label:"City",filled:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),n("v-col",{attrs:{cols:"3"}})],1)],1)],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:""},on:{click:t.saveData}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("..."),n("br"),t._v("Let us know you've visited!")])}],p=(n("b0c0"),n("d3b7"),{name:"Inputs",props:[""],data:function(){return{name:"",city:""}},methods:{saveData:function(){var t="production";console.log("env:",t);var e="production"!==t?"http://localhost:5000/":"";fetch("".concat(e,"saveData"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,address:this.city})}).then((function(t){return t.json()})).then((function(t){alert("Thanks for checking in!"),console.log(t.body)})).catch((function(t){return console.log(t)}))}}}),h=p,b=n("6544"),g=n.n(b),y=n("8336"),_=n("62ad"),w=n("a523"),C=n("132d"),x=n("0fd9"),T=n("8654"),V=Object(u["a"])(h,v,m,!1,null,"da15bbc0",null),k=V.exports;g()(V,{VBtn:y["a"],VCol:_["a"],VContainer:w["a"],VIcon:C["a"],VRow:x["a"],VTextField:T["a"]});var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("v-container",{attrs:{fluid:""}},[n("v-data-iterator",{attrs:{items:t.filteredItems,"items-per-page":t.itemsPerPage,"hide-default-footer":"",search:t.search},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-toolbar",{staticClass:"mb-2",attrs:{dark:"",flat:""}},[n("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",label:"Try searching your city, a genre, or artist"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-spacer"),n("v-select",{attrs:{items:t.cities,filled:"",flat:"",outlined:"",clearable:"","solo-inverted":"","hide-details":"",multiple:"",chips:"","persistent-hint":"",label:"Filter by City"},on:{change:t.filterCity},model:{value:t.selectedCities,callback:function(e){t.selectedCities=e},expression:"selectedCities"}}),n("v-toolbar-title")],1)]},proxy:!0},{key:"default",fn:function(e){return[n("v-row",t._l(e.items,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var r=a.hover;return[n("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2},on:{click:function(n){return t.openUrl(e.url)}}},[n("v-row",[n("v-col",{attrs:{md:"10"}},[n("v-card-title",{staticClass:"subheading"},[t._v(t._s(e.name))])],1),n("v-col",{attrs:{md:"2"}},[n("v-icon",{directives:[{name:"show",rawName:"v-show",value:r||t.$isMobile(),expression:"hover|| $isMobile()"}],attrs:{right:""}},[t._v("mdi-open-in-new")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("Genre:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.category.name))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Location:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.location_summary))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Time:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.datetime_summary)+", "+t._s(e.starttime_formatted))])],1)],1)],1)]}}],null,!0)})],1)})),1)]}}])},[n("br")])],1),n("br")],1)},j=[],I=(n("4de4"),n("4160"),n("caad"),n("fb6a"),n("ac1f"),n("2532"),n("1276"),n("159b"),n("96cf"),n("1da1")),O={name:"EventTable",data:function(){return{eventData:"",items:[],filteredItems:[],itemsPerPage:10,search:"",sortBy:"name",sortDesc:!1,selectedCities:[],oneCityFilteredItems:[],cities:["Auckland","Christchurch","Dunedin","Gisborne","Hamilton","Hastings","Lower Hutt","Napier","Nelson","New Plymouth","Palmerston North","Porirua","Rotorua","Tauranga","Upper Hutt","Wellington","Whanganui","Whangārei"]}},methods:{filterCity:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:0!==t.selectedCities.length?(t.filteredItems=[],t.selectedCities.forEach((function(e){t.oneCityFilteredItems=t.items.filter((function(t){return t.location_summary.includes(e)})),t.oneCityFilteredItems.forEach((function(e){return t.filteredItems.push(e)}))})),n=t.filteredItems.sort((function(t,e){return new Date(e.datetime_start)<new Date(t.datetime_start)?1:-1})),console.log(n)):t.filteredItems=t.items;case 3:case"end":return e.stop()}}),e)})))()},accessServer:function(){var t=this,e={method:"GET",headers:{"Content-Type":"application/json"}},n="production";console.log("env:",n);var a="production"!==n?"http://localhost:5000/":"";fetch("".concat(a,"getData"),e).then((function(t){return t.json()})).then((function(e){t.eventData=e.body,e.body.forEach((function(t){t.starttime_formatted=t.datetime_start.split(" "),t.starttime_formatted=t.starttime_formatted[1].slice(0,5),t.timezone=""})),t.items=e.body,t.filteredItems=e.body,console.log(t.eventData)})).catch((function(t){return console.log(t)}))},openUrl:function(t){window.open(t,"_blank")}},mounted:function(){this.accessServer()}},S=O,D=(n("9a8e"),n("b0af")),E=n("99d9"),$=n("c377"),F=n("ce7e"),N=n("ce87"),L=n("8860"),M=n("da13"),R=n("5d23"),G=n("b974"),H=n("2fa4"),U=n("71d9"),A=n("2a7f"),J=Object(u["a"])(S,P,j,!1,null,"4ee79c7e",null),W=J.exports;g()(J,{VCard:D["a"],VCardTitle:E["a"],VCol:_["a"],VContainer:w["a"],VDataIterator:$["a"],VDivider:F["a"],VHover:N["a"],VIcon:C["a"],VList:L["a"],VListItem:M["a"],VListItemContent:R["a"],VRow:x["a"],VSelect:G["a"],VSpacer:H["a"],VTextField:T["a"],VToolbar:U["a"],VToolbarTitle:A["a"]});var z={name:"App",data:function(){return{}},components:{Title:f,Inputs:k,EventTable:W},methods:{}},B=z,q=(n("034f"),n("7496")),K=Object(u["a"])(B,r,i,!1,null,null,null),Q=K.exports;g()(K,{VApp:q["a"]});var X=n("f309");a["a"].use(X["a"]);var Y=new X["a"]({}),Z=n("c825"),tt=n.n(Z);a["a"].config.productionTip=!1,a["a"].use(tt.a),new a["a"]({vuetify:Y,render:function(t){return t(Q)}}).$mount("#app")},"6ccb":function(t,e,n){},"85ec":function(t,e,n){},"9a8e":function(t,e,n){"use strict";var a=n("6ccb"),r=n.n(a);r.a},e4bf:function(t,e,n){}});
//# sourceMappingURL=app.6f612678.js.map