(function(t){function a(a){for(var s,o,l=a[0],c=a[1],i=a[2],f=0,v=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,i||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(s=!1)}s&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},r={app:0},n=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ec8e432f"}[t]+".js"}function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.e=function(t){var a=[],e=r[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=r[t]=[a,s]}));a.push(e[2]=s);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var i=new Error;n=function(a){c.onerror=c.onload=null,clearTimeout(f);var e=r[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",i.name="ChunkLoadError",i.type=s,i.request=n,e[1](i)}r[t]=void 0}};var f=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(a)},l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=a,c=c.slice();for(var f=0;f<c.length;f++)a(c[f]);var u=i;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("cd49")},"228a":function(t,a,e){"use strict";e("f2c3")},"5c0b":function(t,a,e){"use strict";e("7df9")},"7df9":function(t,a,e){},cd49:function(t,a,e){"use strict";e.r(a);e("5162"),e("334f"),e("5e5d"),e("8cce");var s=e("430a"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("meta",{attrs:{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}}),e("view"),e("router-view")],1)},n=[],o=(e("5c0b"),e("cba8")),l={},c=Object(o["a"])(l,r,n,!1,null,null,null),i=c.exports,f=(e("d8ae"),e("bb00"),e("422f"),e("ac56")),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"index main-view",attrs:{"data-v-4cf483f6":"","data-v-66e2be28":""}},[e("section",{staticClass:"result big-size",attrs:{"data-v-4cf483f6":""}},[e("p",{attrs:{"data-v-4cf483f6":""}},[t._v(" 出校备案编号："+t._s(t.userData.markCode)+" ")]),t.leaveSchoolFlag&&!t.inSchool?e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("状态：")]),e("span",{staticClass:"bgc-blue",attrs:{"data-v-4cf483f6":""}},[t._v("当天返回--已离校")])]):t._e(),t.leaveSchoolFlag||t.inSchool?t._e():e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("状态：")]),e("span",{staticClass:"bgc-yellow",attrs:{"data-v-4cf483f6":""}},[t._v("当天返回--已返校")])]),!t.leaveSchoolFlag&&t.inSchool?e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("状态：")]),e("span",{staticClass:"bgc-blue",attrs:{"data-v-4cf483f6":""}},[t._v("当天返回--已离校")])]):t._e(),t.leaveSchoolFlag&&t.inSchool?e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("状态：")]),e("span",{staticClass:"bgc-green",attrs:{"data-v-4cf483f6":""}},[t._v("当日返校已备案")])]):t._e(),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("出校日期：")]),e("span",{attrs:{"data-v-4cf483f6":""}},[t._v(t._s(t._f("formatDateByDays")(t.date,this)))])]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("当前时间：")]),e("span",{staticStyle:{color:"rgb(255, 0, 0)","font-size":"0.64rem","font-weight":"bold"},attrs:{"data-v-4cf483f6":""},on:{click:t.tagNumChange}},[t._v(" "+t._s(t._f("formatDate")(t.date,this))+" ")])]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("出校起始时间："+t._s(t._f("formatDateByDays")(t.date,this)))]),e("span",{attrs:{"data-v-4cf483f6":""}},[e("br"),t._v(t._s(t.userData.leaveSchool))])]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("出校结束时间："+t._s(t._f("formatDateByDays")(t.date,this)))]),e("span",{attrs:{"data-v-4cf483f6":""}},[e("br"),t._v(t._s(t.userData.returnSchool))])]),e("p",{staticStyle:{"font-size":".46rem"},attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("提交时间："+t._s(t._f("formatDateByDays")(t.date,this)))]),e("span",{attrs:{"data-v-4cf483f6":""}},[t._v(" "+t._s(t.userData.sendTime))])]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("姓名："+t._s(t.userData.name))]),e("span",{attrs:{"data-v-4cf483f6":""}})]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("学号："+t._s(t.userData.code))]),e("span",{attrs:{"data-v-4cf483f6":""}})]),t._m(0),t._m(1),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("专业："+t._s(t.userData.discipline))]),e("span",{attrs:{"data-v-4cf483f6":""}})]),t._m(2),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("出校事由："+t._s(t.userData.reason))]),e("span",{attrs:{"data-v-4cf483f6":""}})])]),e("section",{staticClass:"result",attrs:{"data-v-4cf483f6":""}},[e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("审核意见："+t._s(t.userData.suggest))]),e("span",{attrs:{"data-v-4cf483f6":""}})]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("审核时间："+t._s(t._f("formatDateByDays")(t.date,this)))]),e("span",{attrs:{"data-v-4cf483f6":""}},[t._v(" "+t._s(t.userData.sendTime))])]),e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("审核人姓名："+t._s(t.userData.suggestName))]),e("span",{attrs:{"data-v-4cf483f6":""}})])]),e("div",{staticClass:"btn-wrap",attrs:{"data-v-4cf483f6":""}},[t.leaveSchoolFlag&&t.inSchool?e("div",{staticClass:"btn bgc-blue",attrs:{"data-v-4cf483f6":""},on:{click:t.leaveSchool}},[t._v("确定离校")]):t._e(),t.leaveSchoolFlag&&!t.inSchool?e("div",{staticClass:"btn bgc-blue",attrs:{"data-v-4cf483f6":""},on:{click:t.leaveSchool}},[t._v("确定回校")]):t._e()])]),e("div",{staticStyle:{"margin-top":"1px"}},[e("el-dialog",{directives:[{name:"alterELDialogMarginTop",rawName:"v-alterELDialogMarginTop",value:{marginTop:"5vh"},expression:"{marginTop:'5vh'}"}],attrs:{title:"输入信息",visible:t.changeInfoFlag,width:"90%","close-on-click-modal":!1},on:{"update:visible":function(a){t.changeInfoFlag=a}}},[e("div",{staticStyle:{"max-height":"500px",overflow:"auto","margin-top":"-30px"}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[e("el-switch",{staticStyle:{"margin-bottom":"30px"},attrs:{"active-text":"离校扫码","inactive-text":"入校扫码"},model:{value:t.inSchool,callback:function(a){t.inSchool=a},expression:"inSchool"}}),e("el-form-item",{attrs:{label:"出校备案编号"}},[e("el-input",{model:{value:t.userData.markCode,callback:function(a){t.$set(t.userData,"markCode",a)},expression:"userData.markCode"}})],1),e("el-form-item",{attrs:{label:"出校起始日期"}},[e("el-input",{model:{value:t.userData.leaveSchool,callback:function(a){t.$set(t.userData,"leaveSchool",a)},expression:"userData.leaveSchool"}})],1),e("el-form-item",{attrs:{label:"出校结束日期"}},[e("el-input",{model:{value:t.userData.returnSchool,callback:function(a){t.$set(t.userData,"returnSchool",a)},expression:"userData.returnSchool"}})],1),e("el-form-item",{attrs:{label:"提交日期"}},[e("el-input",{model:{value:t.userData.sendTime,callback:function(a){t.$set(t.userData,"sendTime",a)},expression:"userData.sendTime"}})],1),e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{model:{value:t.userData.name,callback:function(a){t.$set(t.userData,"name",a)},expression:"userData.name"}})],1),e("el-form-item",{attrs:{label:"学号"}},[e("el-input",{model:{value:t.userData.code,callback:function(a){t.$set(t.userData,"code",a)},expression:"userData.code"}})],1),e("el-form-item",{attrs:{label:"性别"}},[e("el-input",{model:{value:t.userData.sex,callback:function(a){t.$set(t.userData,"sex",a)},expression:"userData.sex"}})],1),e("el-form-item",{attrs:{label:"专业"}},[e("el-input",{model:{value:t.userData.discipline,callback:function(a){t.$set(t.userData,"discipline",a)},expression:"userData.discipline"}})],1),e("el-form-item",{attrs:{label:"出校事由"}},[e("el-input",{model:{value:t.userData.reason,callback:function(a){t.$set(t.userData,"reason",a)},expression:"userData.reason"}})],1),e("el-form-item",{attrs:{label:"返校日期"}},[e("el-input",{model:{value:t.userData.name,callback:function(a){t.$set(t.userData,"name",a)},expression:"userData.name"}})],1),e("el-form-item",{attrs:{label:"审核意见"}},[e("el-input",{model:{value:t.userData.suggest,callback:function(a){t.$set(t.userData,"suggest",a)},expression:"userData.suggest"}})],1),e("el-form-item",{attrs:{label:"审核人姓名"}},[e("el-input",{model:{value:t.userData.suggestName,callback:function(a){t.$set(t.userData,"suggestName",a)},expression:"userData.suggestName"}})],1)],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{size:"mini"},on:{click:function(a){t.changeInfoFlag=!1}}},[t._v("取 消")]),e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){t.changeInfoFlag=!1}}},[t._v("确 定")])],1)])],1)])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("性别：")]),e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("女")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("学院：天津师范大学")]),e("span",{attrs:{"data-v-4cf483f6":""}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{attrs:{"data-v-4cf483f6":""}},[e("span",{attrs:{"data-v-4cf483f6":""}},[t._v("年级：")]),e("span",{attrs:{"data-v-4cf483f6":""}})])}],d=e("724c"),p=e("ddb5"),m=e("bedc"),h=e("ce1e"),g=e("ce9d"),b=(e("90df"),e("a7a0")),_=e("3c3a"),D=(e("5cc3"),e("190e")),y=e.n(D),S=e("4096"),k=e.n(S),x=e("a490"),w=function(t){Object(h["a"])(e,t);var a=Object(g["a"])(e);function e(){var t;return Object(p["a"])(this,e),t=a.apply(this,arguments),t.router_name="",t.userData={markCode:t.getRandomCode(),leaveSchool:"08:00:00",returnSchool:"20:00:00",sendTime:"07:30:21",name:"陈磊",code:"1830050039",sex:"男",discipline:"数学与应用科学（师范）",reason:"买东西",suggest:"系统自动审批",suggestName:"自动审批"},t.tagNum=0,t.leaveSchoolFlag=!0,t.date=new Date,t.changeInfoFlag=!1,t.inSchool=!1,t}return Object(m["a"])(e,[{key:"getLeaveSchoolDay",value:function(){}},{key:"getRandomCode",value:function(){for(var t="",a=0;a<4;a++)t+=Math.floor(10*Math.random());return"00075"+t}},{key:"setZero",value:function(t){return t<10?"0"+t:t}},{key:"tagNumChange",value:function(){this.tagNum++,this.tagNum>6&&(this.tagNum=1,this.changeInfoFlag=!0)}},{key:"mounted",value:function(){var t=this;this.timer=setInterval((function(){t.date=new Date}),1e3)}},{key:"leaveSchool",value:function(){var t=this;y.a.loading({message:"",forbidClick:!0,onClose:function(){y.a.success("提交成功"),t.leaveSchoolFlag=!1}})}},{key:"enterSchool",value:function(){console.log("进入学习"),this.leaveSchoolFlag=!1}}]),e}(_["b"]);w=Object(b["a"])([Object(_["a"])({components:Object(d["a"])({Toast:y.a,vanField:k.a},x["a"].Component.name,x["a"].Component),filters:{formatDate:function(t,a){var e="";return e+=a.setZero(t.getHours())+":",e+=a.setZero(t.getMinutes())+":",e+=a.setZero(t.getSeconds()),e},formatDateByDays:function(t,a){var e="";return e+=a.setZero(t.getFullYear())+"-",e+=a.setZero(t.getMonth()+1)+"-",e+=a.setZero(t.getDate())+"",e}}})],w);var C=w,j=C,O=(e("228a"),Object(o["a"])(j,u,v,!1,null,null,null)),T=O.exports;s["default"].use(f["a"]);var $=[{path:"/",name:"View",component:T,meta:{title:"备案详情"}},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],F=new f["a"]({mode:"hash",base:"",routes:$});F.beforeEach((function(t,a,e){t.meta.title&&(document.title=t.meta.title),e()}));var E=F,N=e("7736");s["default"].use(N["a"]);var M=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=e("5422"),I=e.n(P);e("e9b7");s["default"].use(I.a),s["default"].config.productionTip=!1,s["default"].use(x["a"]),s["default"].directive("alterELDialogMarginTop",{inserted:function(t,a,e){t.firstElementChild.style.marginTop=a.value.marginTop}}),new s["default"]({router:E,store:M,render:function(t){return t(i)}}).$mount("#app")},f2c3:function(t,a,e){}});
//# sourceMappingURL=app.bfbf2f89.js.map