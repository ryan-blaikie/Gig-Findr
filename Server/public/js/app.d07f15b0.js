(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0c5b":function(t,e,n){t.exports=n.p+"img/gig-pic.64767989.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"FindaGig"}}),a("br"),a("img",{attrs:{src:n("0c5b")}}),a("br"),a("br"),a("h2",[t._v("Upcoming Gigs:")]),a("EventTable"),a("br"),t._v(" "),a("Inputs",{ref:"inputTest"})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))])])},s=[],c={name:"HelloWorld",props:{msg:String}},l=c,u=(n("6b6b"),n("2877")),d=Object(u["a"])(l,i,s,!1,null,"0e629148",null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inputs"},[t._m(0),n("div",{attrs:{id:"inputs"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"3"}}),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{"background-color":"black",label:"Your Name",filled:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-col",{attrs:{cols:"3"}},[n("v-text-field",{attrs:{label:"Your City",filled:""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),n("v-col",{attrs:{cols:"3"}})],1)],1)],1),n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"yellow"},on:{click:t.saveData}},[n("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("..."),n("br"),t._v("Let us know you've visited us!")])}],p=(n("4160"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),{name:"Inputs",props:[""],data:function(){return{name:"",city:""}},methods:{saveData:function(){fetch("saveData",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,address:this.city})}).then((function(t){return t.json()})).then((function(t){alert("Thanks for checking in!"),console.log(t.body)})).catch((function(t){return console.log(t)}));var t={method:"GET",headers:{"Content-Type":"application/json"}};fetch("getData",t).then((function(t){return t.json()})).then((function(t){t.body.forEach((function(t){t.datetime_start=t.datetime_start.split(" "),t.datetime_start=t.datetime_start[1].slice(0,5),t.timezone=""})),console.log(t.body)})).catch((function(t){return console.log(t)}))},notify:function(){alert(this.eName)}}}),b=p,h=n("6544"),g=n.n(h),y=n("8336"),_=n("62ad"),T=n("a523"),w=n("132d"),x=n("0fd9"),k=n("8654"),j=Object(u["a"])(b,v,m,!1,null,"5d8ec0d9",null),C=j.exports;g()(j,{VBtn:y["a"],VCol:_["a"],VContainer:T["a"],VIcon:w["a"],VRow:x["a"],VTextField:k["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("br"),n("v-container",{attrs:{fluid:""}},[n("v-data-iterator",{attrs:{items:t.items,"items-per-page":t.itemsPerPage,"hide-default-footer":"",search:t.search},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e}},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[n("v-text-field",{attrs:{clearable:"",flat:"","solo-inverted":"","hide-details":"",label:"Try searching for your city"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-toolbar-title")],1)]},proxy:!0},{key:"default",fn:function(e){return[n("v-row",t._l(e.items,(function(e){return n("v-col",{key:e.name,attrs:{cols:"12",sm:"6",md:"4",lg:"4"}},[n("v-card",[n("v-card-title",{staticClass:"subheading font-weight-bold"},[t._v(t._s(e.name))]),n("v-divider"),n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-list-item-content",[t._v("Genre:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.category.name))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Location:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.location_summary))])],1),n("v-list-item",[n("v-list-item-content",[t._v("Time:")]),n("v-list-item-content",{staticClass:"align-end"},[t._v(t._s(e.datetime_summary)+", "+t._s(e.datetime_start))])],1)],1)],1)],1)})),1)]}}])},[n("br")])],1),n("p",{ref:"noResultsMsg",staticStyle:{display:"none"}},[t._v("We're sorry, it looks like there are no matching gigs!")]),n("br"),n("div",[n("img",{ref:"evfinda",attrs:{src:"https://www.eventfinda.co.nz/images/global/attribution.gif?qgocdu"}})])],1)},P=[],O={name:"EventTable",data:function(){return{eventData:"",items:"",itemsPerPage:10,search:""}},methods:{accessServer:function(){var t=this,e={method:"GET",headers:{"Content-Type":"application/json"}};fetch("getData",e).then((function(t){return t.json()})).then((function(e){t.eventData=e.body,e.body.forEach((function(t){t.datetime_start=t.datetime_start.split(" "),t.datetime_start=t.datetime_start[1].slice(0,5),t.timezone=""})),t.items=e.body,console.log(t.eventData)})).catch((function(t){return console.log(t)}))}},mounted:function(){this.accessServer()}},E=O,S=n("b0af"),D=n("99d9"),I=n("c377"),$=n("ce7e"),G=n("8860"),L=n("da13"),M=n("5d23"),H=n("71d9"),W=n("2a7f"),z=Object(u["a"])(E,V,P,!1,null,"06da08c1",null),F=z.exports;g()(z,{VCard:S["a"],VCardTitle:D["a"],VCol:_["a"],VContainer:T["a"],VDataIterator:I["a"],VDivider:$["a"],VList:G["a"],VListItem:L["a"],VListItemContent:M["a"],VRow:x["a"],VTextField:k["a"],VToolbar:H["a"],VToolbarTitle:W["a"]});var J={name:"App",data:function(){return{popupText:"Hello there!",msgData:""}},components:{HelloWorld:f,Inputs:C,EventTable:F},methods:{}},N=J,R=(n("034f"),Object(u["a"])(N,r,o,!1,null,null,null)),Y=R.exports,q=n("f309");a["a"].use(q["a"]);var A=new q["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:A,render:function(t){return t(Y)}}).$mount("#app")},"6b6b":function(t,e,n){"use strict";var a=n("fc1b"),r=n.n(a);r.a},"85ec":function(t,e,n){},fc1b:function(t,e,n){}});
//# sourceMappingURL=app.d07f15b0.js.map