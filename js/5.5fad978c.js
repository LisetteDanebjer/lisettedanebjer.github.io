(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"42bf":function(e,t,a){},"6af6":function(e,t,a){e.exports=a.p+"img/satellite.f48e8204.jpg"},"6f94":function(e,t,a){"use strict";var r=a("42bf"),n=a.n(r);n.a},a0be:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-drawer",{attrs:{side:"left",overlay:"",bordered:"",breakpoint:1400},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("div",{staticClass:"text-h5 q-pt-xl q-pl-md"},[e._v("Layers")]),r("div",{ref:"drawer"},[e._l(e.layers,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.get("name"),attrs:{tag:"label"}},[r("q-item-section",{attrs:{avatar:""}},[r("q-checkbox",{attrs:{val:t.get("name"),color:"teal"},on:{input:function(e){t.setVisible(!t.getVisible())}},model:{value:t.getVisible(),callback:function(a){e.$set(t,"getVisible()",a)},expression:"layer.getVisible()"}})],1),r("q-item-section",[r("q-item-label",["Points of Interest"==t.get("name")?r("q-img",{staticStyle:{width:"35px"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-hiking&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),"Roads"==t.get("name")?r("q-img",{staticStyle:{width:"35px"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-car&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),"Area of Interest"==t.get("name")?r("q-img",{staticStyle:{width:"35px"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-hiking&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),"Image"==t.get("name")?r("q-img",{staticStyle:{width:"35px"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-hiking&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),"Topo"==t.get("name")?r("q-img",{staticStyle:{width:"35px"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-hiking&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),e._v("\n                        "+e._s(t.get("name"))+" \n                    ")],1)],1)],1)})),e._l(e.base_layers,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.get("name"),attrs:{tag:"label"}},[r("q-item-section",{attrs:{avatar:""}},[r("q-radio",{attrs:{val:t.get("name")},on:{input:function(a){return e.rotateBasemap(t)}},model:{value:e.basemap,callback:function(t){e.basemap=t},expression:"basemap"}})],1),r("q-item-section",[r("q-item-label",["Topo"==t.get("name")?r("q-img",{staticStyle:{width:"65px"},attrs:{src:a("c991")}}):e._e(),"Google"==t.get("name")?r("q-img",{staticStyle:{width:"65px"},attrs:{src:a("dac0")}}):e._e(),"Satellite"==t.get("name")?r("q-img",{staticStyle:{width:"65px"},attrs:{src:a("6af6")}}):e._e(),e._v("\n                        "+e._s(t.get("name"))+" \n                    ")],1)],1)],1)}))],2)]),r("div",{ref:"myRef",staticClass:"map"},[0!=e.error?r("div",{staticClass:"map-error"},[e._v(e._s(this.error))]):e._e(),r("div",{staticClass:"buttons"},[r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"remove"},on:{click:function(t){return e.zoom(.5)}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"add"},on:{click:function(t){return e.zoom(-.5)}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"sync"},on:{click:function(t){return e.rotateBasemap()}}})],1)])],1)},n=[],s=(a("c975"),a("e6cf"),a("ded3")),i=a.n(s),o=a("c973"),l=a.n(o),c=(a("5bc0"),a("5eee")),m=a("a2c7"),d=a("a2e1"),p=a("6c77"),f=a("8295"),h=a("83a6"),g=a("8682"),v=a("6cbf"),b=a("5831"),u=a("5043"),w=a("2ef1"),y=a("3e6b"),k=a("9c78"),_=a("480c"),x=a("21bc"),F=a("3a39"),S=a("cb76"),q=a("913f"),C=a("06f8"),j=a("0967"),T=new p["b"]({text:new f["a"]({font:"12px Calibri,sans-serif",text:"---",overflow:!0,offsetY:-35,fill:new h["a"]({color:"#000"}),stroke:new g["a"]({color:"#fff",width:3})})});const A=e=>{var t=e.getGeometry().getType(),a=e.values_.type;e.values_.text;if("Polygon"===t){var r=new p["b"]({fill:new h["a"]({color:"rgba(255,0,0,0.2)"})});return"party"===a&&(r=new p["b"]({stroke:new g["a"]({color:"rgba(75,115,129,0.9)",width:3}),fill:new h["a"]({color:"rgba(75,115,129,0.9)"})})),"park"===a&&(r=new p["b"]({stroke:new g["a"]({color:"rgba(32,96,197,0.8)",width:3}),fill:new h["a"]({color:"rgba(32,96,197,0.8)"})})),r}if("Point"===t){var n="333333",s="fa-star";return"party"===a&&(n="333333",s="fa-star"),"parking"==a&&(n="333333",s="fa-car"),"hike"==a&&(n="333333",s="fa-hiking"),"church"==a&&(n="333333",s="fa-church"),"windmolen"==a&&(n="333333",s="fa-landmark"),"sleeping"==a&&(n="333333",s="fa-bed"),"castle"==a&&(n="333333",s="fa-landmark"),"downtown"==a&&(n="333333",s="fa-123"),"station"==a&&(n="333333",s="fa-train"),"airport"==a&&(n="333333",s="fa-plane-arrival"),"swim"==a&&(n="333333",s="fa-swimmer"),new p["b"]({image:new v["a"]({src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23"+n+"&icon="+s+"&color=%23FFFFFF",anchor:[.5,1],scale:.5})})}if("LineString"===t){var i=e.values_.NAAM;r=new p["b"]({stroke:new g["a"]({color:"green",width:1})});return"hike"==i&&(r=new p["b"]({stroke:new g["a"]({color:"#666",width:2,lineDash:[10,10]})})),"road"==i&&(r=new p["b"]({stroke:new g["a"]({color:"rgba(80,80,80,1)",width:3})})),"path"==i&&(r=new p["b"]({stroke:new g["a"]({color:"rgba(80,80,80,1)",width:2,lineDash:[2,5]})})),"niceroad"==i&&(r=[new p["b"]({stroke:new g["a"]({color:"rgba(34,98,37,0.6)",width:8})}),new p["b"]({stroke:new g["a"]({color:"rgba(80,80,80,1)",width:3})})]),"trein"==i&&(r=[new p["b"]({stroke:new g["a"]({color:"rgba(80,80,80,1)",width:5,lineDash:[2,15],lineCap:"butt"})}),new p["b"]({stroke:new g["a"]({color:"rgba(80,80,80,1)",width:2})})]),r}};var z={props:["map-zoom","map-center"],data(){return{drawer:!1,map:!1,layers:[],base_layers:[],basemap:"Topo",error:!1,timeouterror:null,uh:j["b"].is.mobile,drag:null}},name:"map",created(){var e=this;return l()((function*(){fetch("http://localhost:8800/gis/lines.json").then(e=>e.json()).then(t=>{var a=i()({},t),r=i()({},t),n=i()({},t);a.features=a.features.filter(e=>"Point"==e.geometry.type),r.features=r.features.filter(e=>"LineString"==e.geometry.type),n.features=n.features.filter(e=>"Polygon"==e.geometry.type),e.addLayer("Roads",!0,!1,new y["a"]({source:new b["a"]({features:(new d["a"]).readFeatures(r)}),style:e=>A(e)})),e.addLayer("Area of Interest",!0,!1,new y["a"]({source:new b["a"]({features:(new d["a"]).readFeatures(n)}),style:e=>A(e)})),e.addLayer("Points of Interest",!0,!1,new k["a"]({layers:[new y["a"]({source:new b["a"]({features:(new d["a"]).readFeatures(a)}),style:e=>A(e)}),new y["a"]({source:new b["a"]({features:(new d["a"]).readFeatures(a)}),style:e=>(T.getText().setText(e.get("text")),T),declutter:!0})]}))})}))()},methods:{rotateBasemap(e){var t=null;if(this.base_layers.includes(e))t=this.base_layers.indexOf(e),console.log("you clicked on a layer",e,this.base_layers,t);else{var a=this.base_layers.filter(e=>1==e.getOpacity())[0],r=this.base_layers.indexOf(a);t=r<=this.base_layers.length-2?r+1:0}this.basemap=this.base_layers[t].values_.name,this.base_layers.map((e,a)=>this.animateOpacity(e,a==t))},animateOpacity(e,t){return l()((function*(){t=t?1:0;var a=e.getOpacity(),r=t-a,n=20;if(0!=r)var s=0,i=setInterval((function(){var t=a+s/n/r;t=Math.pow(t,1==r?6:1/6),e.setOpacity(t),s++,s===n+1&&clearInterval(i)}),25)}))()},zoom(e){var t=this.map.getView();t.setZoom(t.getZoom()-e)},addLayer(e,t,a,r){r.set("name",e),r.setVisible(t),this.map.addLayer(r),a?this.base_layers.push(r):this.layers.unshift(r)},showError(e){this.error=e,this.timeouterror=setTimeout(()=>this.error=!1,2e3)},checkDrag(e,t,a){}},mounted(){this.map=new c["a"]({interactions:Object(F["a"])({dragPan:!1,mouseWheelZoom:!1,altShiftDragRotate:!1,pinchRotate:!1}).extend([this.drag=new S["a"]({condition:e=>{if("mouse"==e.originalEvent.pointerType)return Object(C["h"])(e)?(this.error=!1,!0):(this.showError("Move with ctrl-key"),!1);if(j["b"].is.mobile){if(2!==!this.drag.getPointerCount())return this.error=!1,!0;this.showError("Use two fingures")}}}),new q["a"]({condition:e=>"wheel"==e.type&&(Object(C["h"])(e)?(this.error=!1,!0):void this.showError("Zoom with ctrl-key"))})]),view:new m["a"]({center:this.mapCenter,zoom:this.mapZoom}),controls:Object(x["a"])({zoom:!1}),target:this.$refs.myRef}),window.m=this.map,this.addLayer("Satellite",!0,!0,new _["a"]({opacity:0,basemap:!0,source:new u["a"]({url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"})})),this.addLayer("Topo",!0,!0,new _["a"]({basemap:!0,source:new u["a"]({url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"})})),this.addLayer("Google",!0,!0,new _["a"]({opacity:0,basemap:!0,source:new w["a"]({url:"http://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"})}))}},M=z,O=(a("6f94"),a("2877")),E=a("9404"),R=a("66e5"),I=a("4074"),L=a("8f8e"),P=a("0170"),$=a("068f"),D=a("3786"),B=a("9c40"),V=a("714f"),Q=a("eebe"),N=a.n(Q),Z=Object(O["a"])(M,r,n,!1,null,"04f1d1ce",null);t["a"]=Z.exports;N()(Z,"components",{QDrawer:E["a"],QItem:R["a"],QItemSection:I["a"],QCheckbox:L["a"],QItemLabel:P["a"],QImg:$["a"],QRadio:D["a"],QBtn:B["a"]}),N()(Z,"directives",{Ripple:V["a"]})},c991:function(e,t,a){e.exports=a.p+"img/topo.280eb203.jpg"},dac0:function(e,t,a){e.exports=a.p+"img/google.2b4b8a3d.jpg"},f9a0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-blue-grey-7",staticStyle:{padding:"120px 40px"}},[a("div",{staticClass:"text-h3"},[e._v("Resa")]),a("br"),a("div",{staticClass:"text-h6"},[e._v("Hur kommer man till Nederländerna? Brudparet tipsar om resealternativ, men man får göra lite som man vill förstås!  ")]),e._m(0),a("div",{staticClass:"text"},[e._v("\n      Tåg går mellan Köpenhamn och Amsterdam, säger google. Med stadiga 14 timmars resetid så har vi själva aldrig testat denna rutt. Meddela gärna hur det var! \n    ")]),e._m(1),a("div",{staticClass:"text"},[e._v("\n      Flexbus, allas vår plånboks vän! Turen går mellan Köpenhamn Ariport och Amsterdam och tar runt 12 timmar. Pris? Det varierar, men har man tur får man en biljett för 400 spänn! \n    ")]),e._m(2),a("div",{staticClass:"text"},[e._v("\n      Brum Brum Brum? Det går! Vill man köra från Sverige kan man antingen köra hela vägen eller gena med en färja. Resan tar mellan 8-12 timmar, beroende på resealternativ och trafiksituation."),a("br"),a("br"),e._v("1. Kör genom Danmark via Öresundsbron och Stora bältbron (observera att broavgifter tillkommer). \n      "),a("br"),e._v("2. Ta färjan mellan Rödby till Puttgarden "),a("a",{attrs:{href:"https://www.scandlines.se"}},[e._v("Scandlines")]),a("br"),e._v("3. Ta färjan från Malmö till Travemünde. Här kan man åka nattbåt och sova gott i sin hytt.  "),a("a",{attrs:{href:"https://www.finnlines.com/sv/batresor/erbjudanden/farja-till-tyskland"}},[e._v("Finnlines")]),a("i",{staticClass:"las la-star",staticStyle:{"font-size":"18px",color:"gold"}}),a("br"),e._v("4. Ta färjan från Trelleborg till Rostock.  "),a("a",{attrs:{href:"https://www.scandlines.se"}},[e._v("Också Scandlines")]),a("br"),e._v(" Slå gärna en googling, för fler färjealternativ. \n      "),a("br"),a("br"),e._v("Vill man samköra kan man kontakta oss, så sammankopplar vi i den mån det går. \n      "),a("br"),a("i",{staticClass:"las la-star",staticStyle:{"font-size":"10px",color:"gold"}}),e._v(" Rekommenderad av värdparet.\n      "),a("Map",{attrs:{"map-zoom":18,"map-center":[674246,6785653]}})],1),e._m(3),a("div",{staticClass:"text"},[e._v("\n      Med flyget kan man landa rakt mitt i prick på Sanders arbetsplats, "),a("b",[e._v("Amsterdam Schiphol Airport ")]),e._v(", men han jobbar nog inte den dagen. Vill man inte det så finns "),a("b",[e._v("Eindhoven Airport")]),e._v(" som backup.  \n      "),a("br"),a("br"),e._v("Eindhoven brukar ha mycket billigare flygbiljetter, men ta följande i beaktning:\n        "),e._m(4),a("br"),e._v("Till Amsterdam Schiphol Airport:\n      "),a("a",{attrs:{href:"https://www.momondo.se/flight-search/ARN-AMS,nearby/2021-05-26/2021-05-30"}},[e._v("Från Malmö  ")]),a("a",{attrs:{href:"https://www.momondo.se/flight-search/CPH-AMS,nearby/2021-05-26/2021-05-30"}},[e._v("Från Stockholm  ")]),a("a",{attrs:{href:"https://www.momondo.se/flight-search/OSL-AMS,nearby/2021-05-26/2021-05-30?"}},[e._v("Från Oslo")]),a("br"),a("br"),e._v("Tågresan planerar ni enklast på "),a("a",{attrs:{href:"https://www.ns.nl/en/journeyplanner/#/?vertrek=Schiphol%20Airport&vertrektype=treinstation&aankomst=Zevenaar&aankomsttype=treinstation"}},[e._v("\n      NS.nl")]),e._v(". \n      "),a("br"),a("br"),a("div",{staticClass:"text-caption\n"},[e._v("Pro tip: e-biljett är cirka 10 sek billigare än biljett i maskinen! Du måste byta tåg i Utrecht (kanske) och Arnhem. ")]),a("br"),a("br"),e._v("På Schiphol kan man även hyra bil. \n      "),a("Map",{attrs:{"map-zoom":8.5,"map-center":[594267,6832512]}})],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-h6 q-pt-xl"},[a("i",{staticClass:"las la-train"}),e._v(" Tåg")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-h6 q-pt-xl"},[a("i",{staticClass:"las la-bus"}),e._v(" Bus")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-h6 q-pt-xl"},[a("i",{staticClass:"las la-car"}),e._v(" Bil")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-h6 q-pt-xl"},[a("i",{staticClass:"las la-plane"}),e._v(" Flygplan")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Det kostar runt 200kr mer att ta sig från flygplatsen med tåg.")]),a("li",[e._v("Tåget tar 30 minuter längre (ink. byte).")]),a("li",[e._v("Tåg går bara mellan 10:00 och 23:00.")])])}],s=a("a0be"),i={components:{Map:s["a"]},computed:{isSwedish(){return this.$store.getters["wedding/isSwedish"]},msg(){return this.$store.getters["wedding/getMsg"]},names(){return this.$store.getters["wedding/getNames"]}}},o=i,l=a("2877"),c=Object(l["a"])(o,r,n,!1,null,null,null);t["default"]=c.exports}}]);