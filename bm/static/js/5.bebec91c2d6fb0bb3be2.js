webpackJsonp([5],{1235:function(t,a){},visO:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"guide",data:function(){return{canvas:null,context:null,particles:[],microparticles:[]}},methods:{clear:function(){var t=this.canvas.createRadialGradient(this.canvas.width/2,this.canvas.height/2,0,this.canvas.width/2,this.canvas.height/2,this.canvas.width);t.addColorStop(0,"rgba(82,42,114,1)"),t.addColorStop(1,"rgba(26,14,4,0)"),this.canvas.globalAlpha=.16,this.canvas.fillStyle=t,this.canvas.fillRect(0,0,this.canvas.width,this.canvas.height)},particle:function(t){Math.random,Math.random1}},mounted:function(){this.canvas=this.$refs.guide,this.context=this.canvas.getContext("2d"),this.canvas.width=document.body.clientWidth,this.canvas.height=window.screen.height}},e={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"yxl-guide"},[a("canvas",{ref:"guide"})])},staticRenderFns:[]};var s=i("vSla")(n,e,!1,function(t){i("1235")},"data-v-bf99c3b8",null);a.default=s.exports}});
//# sourceMappingURL=5.bebec91c2d6fb0bb3be2.js.map