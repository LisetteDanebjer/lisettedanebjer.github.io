(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"1d52":function(e,t,a){},"6af6":function(e,t,a){e.exports=a.p+"img/satellite.f48e8204.jpg"},"6ec0":function(e,t,a){},8130:function(e,t,a){"use strict";var r=a("6ec0"),s=a.n(r);s.a},"92ec":function(e,t,a){},a0be:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-drawer",{staticClass:"z-top",attrs:{side:"left",overlay:"",bordered:"",breakpoint:1400},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("div",{staticClass:"text-h5 q-pt-xl q-pl-md"},[e._v("Layers")]),r("div",{ref:"drawer"},[e._l(e.layers,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.get("name"),attrs:{tag:"label"}},[r("q-item-section",{attrs:{avatar:""}},[r("q-checkbox",{attrs:{val:t.get("name"),color:"blue"},on:{input:function(e){t.setVisible(!t.getVisible())}},model:{value:t.getVisible(),callback:function(a){e.$set(t,"getVisible()",a)},expression:"layer.getVisible()"}})],1),r("q-item-section",[r("q-item-label",["Points of Interest"==t.get("name")?r("q-img",{staticStyle:{width:"35px",margin:"0 30px 0 0"},attrs:{src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23373737&icon=fa-hiking&color=%23FFFFFF&voffset=0&hoffset=1&"}}):e._e(),"Roads"==t.get("name")?r("span",[r("svg",{attrs:{height:"70",width:"200"}},[r("line",{staticStyle:{stroke:"rgba(80,80,80,1)","stroke-width":"3"},attrs:{x1:"0",y1:"10",x2:"60",y2:"10"}}),r("text",{attrs:{x:"70",y:"15",fill:"rgba(84, 110, 112)"}},[e._v("Road")]),r("line",{staticStyle:{stroke:"rgba(34,98,37,0.6)","stroke-width":"8"},attrs:{x1:"0",y1:"35",x2:"60",y2:"35"}}),r("text",{attrs:{x:"70",y:"40",fill:"rgba(84, 110, 112)"}},[e._v("Nice Road")]),r("line",{staticStyle:{stroke:"rgba(80,80,80,1)","stroke-width":"3"},attrs:{x1:"0",y1:"35",x2:"60",y2:"35"}}),r("line",{staticStyle:{stroke:"#666","stroke-width":"2"},attrs:{x1:"0",y1:"60",x2:"60",y2:"60","stroke-dasharray":"10,10"}}),r("text",{attrs:{x:"70",y:"65",fill:"rgba(84, 110, 112)"}},[e._v("Path")])])]):e._e(),"Area of Interest"==t.get("name")?r("span",[r("svg",{attrs:{height:"70",width:"200"}},[r("polygon",{staticStyle:{fill:"rgba(75,115,129,0.7)",stroke:"rgba(75,115,129,0.9)","stroke-width":"2"},attrs:{points:"10,10 14,28 40,30, 50,8 30,12"}}),r("text",{attrs:{x:"70",y:"20",fill:"rgba(84, 110, 112)"}},[e._v("Fest/Feest")]),r("polygon",{staticStyle:{fill:"rgba(32,96,197,0.6)",stroke:"rgba(32,96,197,0.8)","stroke-width":"2"},attrs:{points:"10,50 14,68 40,70, 50,48 30,52"}}),r("text",{attrs:{x:"70",y:"60",fill:"rgba(84, 110, 112)"}},[e._v("Parking")])])]):e._e(),e._v("\n                        "+e._s("Roads"!=t.get("name")&&"Area of Interest"!=t.get("name")?t.get("name"):"")+" \n                    ")],1)],1)],1)})),r("q-separator",{staticClass:"q-ma-md",attrs:{color:"grey",inset:""}}),e._l(e.base_layers,(function(t){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.get("name"),attrs:{tag:"label"}},[r("q-item-section",{attrs:{avatar:""}},[r("q-radio",{attrs:{val:t.get("name")},on:{input:function(a){return e.rotateBasemap(t)}},model:{value:e.basemap,callback:function(t){e.basemap=t},expression:"basemap"}})],1),r("q-item-section",[r("q-item-label",["Topo"==t.get("name")?r("q-img",{staticStyle:{width:"65px",margin:"0"},attrs:{src:a("c991")}}):e._e(),"Google"==t.get("name")?r("q-img",{staticStyle:{width:"65px",margin:"0"},attrs:{src:a("dac0")}}):e._e(),"Satellite"==t.get("name")?r("q-img",{staticStyle:{width:"65px",margin:"0"},attrs:{src:a("6af6")}}):e._e(),e._v("\n                        "+e._s(t.get("name"))+" \n                    ")],1)],1)],1)}))],2)]),r("div",{ref:"myRef",staticClass:"map"},[r("div",{staticClass:"partylocator"},[r("i",{ref:"partyicon",staticClass:"party-icon las la-cocktail  shadow-2",style:{"--rotationicon":e.rotationicon,"--showpoint":e.showpoint}})]),0!=e.error?r("div",{staticClass:"map-error"},[e._v(e._s(this.error))]):e._e(),r("div",{staticClass:"buttons"},[r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"remove"},on:{click:function(t){return e.zoom(.5)}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"add"},on:{click:function(t){return e.zoom(-.5)}}}),r("q-btn",{attrs:{color:"primary",round:"",dense:"",icon:"sync"},on:{click:function(t){return e.rotateBasemap()}}})],1)])],1)},s=[],i=(a("c975"),a("e6cf"),a("ded3")),n=a.n(i),o=a("c973"),l=a.n(o),c=(a("5bc0"),a("5eee")),m=a("a2c7"),d=a("a2e1"),u=a("6c77"),p=a("8295"),h=a("83a6"),f=a("8682"),g=a("ce2c"),w=a("6cbf"),y=a("5831"),b=a("2ef1"),v=a("5043"),_=a("3e6b"),x=a("9c78"),k=a("480c"),F=a("21bc"),q=a("3a39"),C=a("cb76"),S=a("913f"),I=a("06f8"),L=a("0967"),j=a("0af5"),O=new u["b"]({text:new p["a"]({font:"12px Calibri,sans-serif",text:"---",overflow:!0,offsetY:-35,fill:new h["a"]({color:"#000"}),stroke:new f["a"]({color:"#fff",width:3})})});const z=new u["b"]({image:new g["a"]({radius:10,fill:new h["a"]({color:"rgba(255,205,255,0.8)"})})}),P=[new u["b"]({stroke:new f["a"]({color:"rgba(255,205,0,0.8)",width:8})}),new u["b"]({image:new g["a"]({radius:10,fill:new h["a"]({color:"rgba(255,205,0,0.8)"})})})],T=e=>{var t=e.getGeometry().getType(),a=e.values_.type;e.values_.text;if("Polygon"===t){var r=new u["b"]({fill:new h["a"]({color:"rgba(255,0,0,0.2)"})});return"party"===a&&(r=new u["b"]({stroke:new f["a"]({color:"rgba(75,115,129,0.9)",width:3}),fill:new h["a"]({color:"rgba(75,115,129,0.9)"})})),"park"===a&&(r=new u["b"]({stroke:new f["a"]({color:"rgba(32,96,197,0.8)",width:3}),fill:new h["a"]({color:"rgba(32,96,197,0.8)"})})),r}if("Point"===t){var s="333333",i="fa-star";return"party"===a&&(s="333333",i="fa-star"),"parking"==a&&(s="333333",i="fa-car"),"hike"==a&&(s="333333",i="fa-hiking"),"church"==a&&(s="333333",i="fa-church"),"windmolen"==a&&(s="333333",i="fa-landmark"),"dike"==a&&(s="333333",i="fa-landmark"),"sleeping"==a&&(s="333333",i="fa-bed"),"castle"==a&&(s="333333",i="fa-landmark"),"downtown"==a&&(s="333333",i="fa-123"),"station"==a&&(s="333333",i="fa-train"),"airport"==a&&(s="333333",i="fa-plane-arrival"),"swim"==a&&(s="333333",i="fa-swimmer"),new u["b"]({image:new w["a"]({src:"https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=60&background=%23"+s+"&icon="+i+"&color=%23FFFFFF",anchor:[.5,1],scale:.5})})}if("LineString"===t){var n=e.values_.NAAM;r=new u["b"]({stroke:new f["a"]({color:"green",width:1})});return"hike"==n&&(r=new u["b"]({stroke:new f["a"]({color:"#666",width:2,lineDash:[10,10]})})),"road"==n&&(r=new u["b"]({stroke:new f["a"]({color:"rgba(80,80,80,1)",width:3})})),"path"==n&&(r=new u["b"]({stroke:new f["a"]({color:"rgba(80,80,80,1)",width:2,lineDash:[2,5]})})),"niceroad"==n&&(r=[new u["b"]({stroke:new f["a"]({color:"rgba(34,98,37,0.6)",width:8})}),new u["b"]({stroke:new f["a"]({color:"rgba(80,80,80,1)",width:3})})]),"trein"==n&&(r=[new u["b"]({stroke:new f["a"]({color:"rgba(80,80,80,1)",width:5,lineDash:[2,15],lineCap:"butt"})}),new u["b"]({stroke:new f["a"]({color:"rgba(80,80,80,1)",width:2})})]),r}};var R={props:["map-zoom","map-center"],data(){return{bgColor:"red",drawer:!1,map:!1,layers:[],base_layers:[],basemap:"Topo",error:!1,timeouterror:null,uh:L["b"].is.mobile,drag:null,selected:null,rotationicon:"-45deg",showpoint:"0px"}},name:"map",created(){var e=this;return l()((function*(){fetch("/gis/lines.json").then(e=>e.json()).then(t=>{var a=n()({},t),r=n()({},t),s=n()({},t);a.features=a.features.filter(e=>"Point"==e.geometry.type),r.features=r.features.filter(e=>"LineString"==e.geometry.type),s.features=s.features.filter(e=>"Polygon"==e.geometry.type),e.addLayer("Roads",!0,!1,new _["a"]({source:new y["a"]({features:(new d["a"]).readFeatures(r)}),style:e=>T(e)})),e.addLayer("Area of Interest",!0,!1,new _["a"]({source:new y["a"]({features:(new d["a"]).readFeatures(s)}),style:e=>T(e)})),e.addLayer("Points of Interest",!0,!1,new x["a"]({layers:[new _["a"]({source:new y["a"]({features:(new d["a"]).readFeatures(a)}),style:e=>T(e)}),new _["a"]({source:new y["a"]({features:(new d["a"]).readFeatures(a)}),style:e=>(O.getText().setText(e.get("text")),O),declutter:!0})]}))})}))()},methods:{rotateBasemap(e){var t=null;if(this.base_layers.includes(e))t=this.base_layers.indexOf(e);else{var a=this.base_layers.filter(e=>1==e.getOpacity())[0],r=this.base_layers.indexOf(a);t=r<=this.base_layers.length-2?r+1:0}this.basemap=this.base_layers[t].values_.name,this.base_layers.map((e,a)=>this.animateOpacity(e,a==t))},animateOpacity(e,t){return l()((function*(){t=t?1:0;var a=e.getOpacity(),r=t-a,s=20;if(0!=r)var i=0,n=setInterval((function(){var t=a+i/s/r;t=Math.pow(t,1==r?6:1/6),e.setOpacity(t),i++,i===s+1&&clearInterval(n)}),25)}))()},zoom(e){var t=this.map.getView();t.setZoom(t.getZoom()-e)},addLayer(e,t,a,r){r.set("name",e),r.setVisible(t),this.map.addLayer(r),a?this.base_layers.push(r):this.layers.unshift(r)},showError(e){this.error=e,this.timeouterror=setTimeout(()=>this.error=!1,2e3)},highlight(e,t){var a=null,r=null;"klomp"==e&&t&&(r=this.layers.filter(e=>"Roads"==e.values_.name)[0],a=r.getSource().getFeatures().filter(e=>1==e.values_.OBJECTID)),"zevenaar"==e&&t&&(r=this.layers.filter(e=>"Points of Interest"==e.values_.name)[0].getLayers().array_[0],a=r.getSource().getFeatures().filter(e=>["FarmCastle","Old Church","Downtown Zevenaar"].includes(e.values_.text))),"markt"==e&&t&&(r=this.layers.filter(e=>"Points of Interest"==e.values_.name)[0].getLayers().array_[0],a=r.getSource().getFeatures().filter(e=>["Downtown Zevenaar"].includes(e.values_.text))),"molen"==e&&t&&(r=this.layers.filter(e=>"Points of Interest"==e.values_.name)[0].getLayers().array_[0],a=r.getSource().getFeatures().filter(e=>["windmolen"].includes(e.values_.type))),t?(this.selected.getFeatures().map(e=>this.selected.removeFeature(e)),this.selected.addFeatures(a),clearTimeout(this.timeouterror),this.map.getView().cancelAnimations(),this.timeouterror=setTimeout(()=>this.flyTo(Object(j["x"])(this.selected.getExtent()),this.map.getView(),800),400)):this.selected.getFeatures().map(e=>this.selected.removeFeature(e))},flyTo(e,t,a){if(!isNaN(e[0])){t.getZoom();t.animate({center:e,duration:a}),t.animate({duration:a/2},{duration:a/2})}}},mounted(){this.map=new c["a"]({interactions:Object(q["a"])({dragPan:!1,mouseWheelZoom:!1,altShiftDragRotate:!1,pinchRotate:!1}).extend([this.drag=new C["a"]({condition:e=>{if("mouse"==e.originalEvent.pointerType)return Object(I["h"])(e)?(this.error=!1,!0):(this.showError("Move with ctrl-key"),!1);if(L["b"].is.mobile){if(2!==!this.drag.getPointerCount())return this.error=!1,!0;this.showError("Use two fingures")}}}),new S["a"]({condition:e=>"wheel"==e.type&&(Object(I["h"])(e)?(this.error=!1,!0):void this.showError("Zoom with ctrl-key"))})]),view:new m["a"]({center:this.mapCenter,zoom:this.mapZoom}),controls:Object(F["a"])({zoom:!1}),target:this.$refs.myRef}),window.m=this.map,this.addLayer("Satellite",!0,!0,new k["a"]({opacity:0,basemap:!0,source:new b["a"]({url:"http://mt{0-3}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"})})),this.addLayer("Topo",!0,!0,new k["a"]({opacity:0,basemap:!0,source:new v["a"]({url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"})})),this.addLayer("Google",!0,!0,new k["a"]({opacity:1,basemap:!0,source:new b["a"]({url:"http://mt{0-3}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"})})),this.selected=new y["a"],this.map.addLayer(new _["a"]({source:this.selected,style:P})),this.arrow=new y["a"],this.map.addLayer(new _["a"]({source:this.arrow,style:z})),this.map.on("moveend",e=>{var t=this.map.getPixelFromCoordinate([674206,6785665]),a=this.map.getSize(),r=this.$refs.partyicon.clientHeight/2,s=t[0],i=t[1];s=s<r?r:s>a[0]-3*r?a[0]-3*r:s-r,i=i<r?r:i>a[1]-3*r?a[1]-3*r:i-r,this.showpoint=t[0]==s+r&&t[1]==i+r?"0px":"17px";var n=Math.atan2(s+r-t[0],i+r-t[1]),o=360-180*n/Math.PI-90;this.rotationicon=o+"deg",this.$refs.partyicon.style.left=s+"px",this.$refs.partyicon.style.top=i+"px"})}},E=R,D=(a("8130"),a("a216"),a("2877")),Q=a("9404"),V=a("66e5"),$=a("4074"),M=a("8f8e"),Z=a("0170"),A=a("068f"),N=a("eb85"),B=a("3786"),G=a("9c40"),J=a("714f"),W=a("eebe"),H=a.n(W),U=Object(D["a"])(E,r,s,!1,null,"7f5521d8",null);t["a"]=U.exports;H()(U,"components",{QDrawer:Q["a"],QItem:V["a"],QItemSection:$["a"],QCheckbox:M["a"],QItemLabel:Z["a"],QImg:A["a"],QSeparator:N["a"],QRadio:B["a"],QBtn:G["a"]}),H()(U,"directives",{Ripple:J["a"]})},a216:function(e,t,a){"use strict";var r=a("1d52"),s=a.n(r);s.a},c857:function(e,t,a){"use strict";var r=a("92ec"),s=a.n(r);s.a},c991:function(e,t,a){e.exports=a.p+"img/topo.280eb203.jpg"},dac0:function(e,t,a){e.exports=a.p+"img/google.2b4b8a3d.jpg"},df3a:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"names",class:{fly:e.fly},on:{click:function(t){e.fly=!e.fly}}},[e._m(0),e._m(1)])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"name-meijer"},[e._v("Mei"),a("span",{staticClass:"ispacing"},[e._v("x")]),e._v("jer")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"name-danebjer"},[e._v("Dan"),a("span",{staticClass:"nspacing"},[e._v("x")]),e._v("ebjer")])}],i={name:"logo",data(){return{fly:!1}},props:["dance"],mounted:function(){this.dance&&(this.interfall=setInterval(()=>setTimeout(()=>this.fly=!this.fly,1e3),4e3))}},n=i,o=(a("c857"),a("2877")),l=Object(o["a"])(n,r,s,!1,null,null,null);t["a"]=l.exports}}]);