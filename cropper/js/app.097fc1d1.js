(function(t){function e(e){for(var n,a,c=e[0],u=e[1],p=e[2],f=0,s=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&s.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(s.length)s.shift()();return i.push.apply(i,p||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("64a9")},"2a2e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("h1",[t._v("图像裁剪")]),o("HelloWorld")],1)},i=[],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"chsi-cropper"},[o("div",{staticStyle:{"margin-bottom":"20px"}},[o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.changeScale(1)}}},[t._v("放大")]),o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.changeScale(-1)}}},[t._v("缩小")]),o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.rotateLeft}},[t._v("左旋转")]),o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:t.rotateRight}},[t._v("右旋转")]),o("van-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.down("blob")}}},[t._v("下载")])],1),o("van-uploader",{attrs:{"before-read":t.beforeRead}}),o("div",{staticClass:"cropper-content"},[o("div",{staticClass:"cropper",staticStyle:{"text-align":"center"}},[o("vue-cropper",{ref:"cropper",attrs:{img:t.option.img,outputSize:t.option.size,outputType:t.option.outputType,info:!0,full:t.option.full,canMove:t.option.canMove,canMoveBox:t.option.canMoveBox,original:t.option.original,autoCrop:t.option.autoCrop,autoCropWidth:t.option.autoCropWidth,autoCropHeight:t.option.autoCropHeight,fixedBox:t.option.fixedBox},on:{realTime:t.realTime,imgLoad:t.imgLoad,touchstart:function(e){return e.preventDefault(),t.touchStart(e)},touchmove:function(e){return e.preventDefault(),t.touchMove(e)}}})],1)])],1)},c=[],u={name:"HelloWorld",props:{msg:String},data:function(){return{option:{img:"",info:!0,outputSize:1,full:!1,outputType:"png",canMove:!0,original:!1,autoCrop:!0,fixedBox:!0,fixed:!0,fixedNumber:[4,3],canMoveBox:!1,centerBox:!0,infoTrue:!0}}},methods:{getDinstance:function(t,e){return Math.sqrt(Math.pow(t.pageY-e.pageY,2)+Math.pow(t.pageX-e.pageX,2))},getFocalPoint:function(t,e){return{x:(t.pageX+e.pageX)/2,y:(t.pageY+e.pageY)/2}},beforeRead:function(t){console.log(t);var e=window.URL.createObjectURL(t);return console.log(e),this.option.img=e,!1},changeScale:function(t){console.log("changeScale"),t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){console.log("rotateLeft"),this.$refs.cropper.rotateLeft()},rotateRight:function(){console.log("rotateRight"),this.$refs.cropper.rotateRight()},realTime:function(t){console.log("realTime"),this.previews=t},down:function(t){var e=this;console.log("down");var o=document.createElement("a");o.download="author-img","blob"===t?this.$refs.cropper.getCropBlob((function(t){e.downImg=window.URL.createObjectURL(t),o.href=window.URL.createObjectURL(t),o.click()})):this.$refs.cropper.getCropData((function(t){e.downImg=t,o.href=t,o.click()}))},imgLoad:function(t){console.log("imgLoad"),console.log(t)}}},p=u,l=(o("736b"),o("2877")),f=Object(l["a"])(p,a,c,!1,null,"3aa0074a",null),s=f.exports,d={name:"app",components:{HelloWorld:s}},g=d,h=(o("034f"),Object(l["a"])(g,r,i,!1,null,null,null)),v=h.exports,m=o("0b7f"),b=(o("e73d"),o("b678")),y=o.n(b);n["a"].use(y.a),n["a"].use(m["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"64a9":function(t,e,o){},"736b":function(t,e,o){"use strict";o("2a2e")}});
//# sourceMappingURL=app.097fc1d1.js.map