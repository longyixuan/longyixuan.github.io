var createjs, AdobeAn;
var vm = new Vue({
    el: "#app",
    data: function() {
        return {
            canvas: null,
            stage: null,
            exportRoot: null,
            anim_container: null,
            dom_overlay_container: null,
            fnStartAnimation: null,
            cur: 0,
            libList: [
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part1/kanbian_atlas_1.png?1631499538575", id:"part1_atlas_1"},
                        {src:"images/part1/kanbian_atlas_2.png?1631499538576", id:"part1_atlas_2"},
                        {src:"images/part1/kanbian_atlas_3.png?1631499538576", id:"part1_atlas_3"}
                    ],
                    preloads: []
                },
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part2/bgm.png", id:"bgm"},
                        {src:"images/part2/kanbian_atlas_1.png", id:"part2_atlas_1"},
                        {src:"images/part2/kanbian_atlas_2.png", id:"part2_atlas_2"},
                        {src:"images/part2/kanbian_atlas_3.png", id:"part2_atlas_3"},
                        {src:"images/part2/kanbian_atlas_4.png", id:"part2_atlas_4"},
                        {src:"images/part2/kanbian_atlas_5.png", id:"part2_atlas_5"},
                        {src:"images/part2/kanbian_atlas_6.png", id:"part2_atlas_6"},
                        {src:"images/part2/kanbian_atlas_7.png", id:"part2_atlas_7"},
                        {src:"images/part2/kanbian_atlas_8.png", id:"part2_atlas_8"},
                        {src:"images/part2/kanbian_atlas_9.png", id:"part2_atlas_9"},
                        {src:"images/part2/kanbian_atlas_10.png", id:"part2_atlas_10"},
                        {src:"images/part2/kanbian_atlas_11.png", id:"part2_atlas_11"},
                        {src:"images/part2/kanbian_atlas_12.png", id:"part2_atlas_12"},
                        {src:"images/part2/kanbian_atlas_13.png", id:"part2_atlas_13"},
                        {src:"images/part2/kanbian_atlas_14.png", id:"part2_atlas_14"},
                        {src:"images/part2/kanbian_atlas_15.png", id:"part2_atlas_15"},
                        {src:"images/part2/kanbian_atlas_16.png", id:"part2_atlas_16"},
                        {src:"images/part2/kanbian_atlas_17.png", id:"part2_atlas_17"},
                        {src:"images/part2/kanbian_atlas_18.png", id:"part2_atlas_18"},
                        {src:"images/part2/kanbian_atlas_19.png", id:"part2_atlas_19"},
                        {src:"images/part2/kanbian_atlas_20.png", id:"part2_atlas_20"},
                        {src:"images/part2/kanbian_atlas_21.png", id:"part2_atlas_21"},
                        {src:"images/part2/kanbian_atlas_22.png", id:"part2_atlas_22"},
                        {src:"images/part2/kanbian_atlas_23.png", id:"part2_atlas_23"},
                        {src:"images/part2/kanbian_atlas_24.png", id:"part2_atlas_24"},
                        {src:"images/part2/kanbian_atlas_25.png", id:"part2_atlas_25"},
                        {src:"images/part2/kanbian_atlas_26.png", id:"part2_atlas_26"}
                    ],
                    preloads: []
                },
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part3/bgm.png", id:"bgm"},
                        {src:"images/part3/kanbian_atlas_1.png", id:"part3_atlas_1"},
                        {src:"images/part3/kanbian_atlas_2.png", id:"part3_atlas_2"},
                        {src:"images/part3/kanbian_atlas_3.png", id:"part3_atlas_3"},
                        {src:"images/part3/kanbian_atlas_4.png", id:"part3_atlas_4"},
                        {src:"images/part3/kanbian_atlas_5.png", id:"part3_atlas_5"},
                        {src:"images/part3/kanbian_atlas_6.png", id:"part3_atlas_6"},
                        {src:"images/part3/kanbian_atlas_7.png", id:"part3_atlas_7"},
                        {src:"images/part3/kanbian_atlas_8.png", id:"part3_atlas_8"},
                        {src:"images/part3/kanbian_atlas_9.png", id:"part3_atlas_9"},
                        {src:"images/part3/kanbian_atlas_10.png", id:"part3_atlas_10"},
                        {src:"images/part3/kanbian_atlas_11.png", id:"part3_atlas_11"},
                        {src:"images/part3/kanbian_atlas_12.png", id:"part3_atlas_12"},
                        {src:"images/part3/kanbian_atlas_13.png", id:"part3_atlas_13"},
                        {src:"images/part3/kanbian_atlas_14.png", id:"part3_atlas_14"},
                        {src:"images/part3/kanbian_atlas_15.png", id:"part3_atlas_15"},
                        {src:"images/part3/kanbian_atlas_16.png", id:"part3_atlas_16"},
                        {src:"images/part3/kanbian_atlas_17.png", id:"part3_atlas_17"},
                        {src:"images/part3/kanbian_atlas_18.png", id:"part3_atlas_18"},
                        {src:"images/part3/kanbian_atlas_19.png", id:"part3_atlas_19"},
                        {src:"images/part3/kanbian_atlas_20.png", id:"part3_atlas_20"},
                        {src:"images/part3/kanbian_atlas_21.png", id:"part3_atlas_21"},
                        {src:"images/part3/kanbian_atlas_22.png", id:"part3_atlas_22"},
                        {src:"images/part3/kanbian_atlas_23.png", id:"part3_atlas_23"},
                        {src:"images/part3/kanbian_atlas_24.png", id:"part3_atlas_24"},
                        {src:"images/part3/kanbian_atlas_25.png", id:"part3_atlas_25"},
                        {src:"images/part3/kanbian_atlas_26.png", id:"part3_atlas_26"},
                        {src:"images/part3/kanbian_atlas_27.png", id:"part3_atlas_27"},
                        {src:"images/part3/kanbian_atlas_28.png", id:"part3_atlas_28"},
                        {src:"images/part3/kanbian_atlas_29.png", id:"part3_atlas_29"},
                        {src:"images/part3/kanbian_atlas_30.png", id:"part3_atlas_30"},
                        {src:"images/part3/kanbian_atlas_31.png", id:"part3_atlas_31"},
                        {src:"images/part3/kanbian_atlas_32.png", id:"part3_atlas_32"},
                        {src:"images/part3/kanbian_atlas_33.png", id:"part3_atlas_33"},
                        {src:"images/part3/kanbian_atlas_34.png", id:"part3_atlas_34"},
                        {src:"images/part3/kanbian_atlas_35.png", id:"part3_atlas_35"},
                        {src:"images/part3/kanbian_atlas_36.png", id:"part3_atlas_36"}
                    ],
                    preloads: []
                },
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part4/bgm.png", id:"bgm"},
                        {src:"images/part4/kanbian_atlas_1.png", id:"part4_atlas_1"},
                        {src:"images/part4/kanbian_atlas_2.png", id:"part4_atlas_2"},
                        {src:"images/part4/kanbian_atlas_3.png", id:"part4_atlas_3"},
                        {src:"images/part4/kanbian_atlas_4.png", id:"part4_atlas_4"},
                        {src:"images/part4/kanbian_atlas_5.png", id:"part4_atlas_5"},
                        {src:"images/part4/kanbian_atlas_6.png", id:"part4_atlas_6"},
                        {src:"images/part4/kanbian_atlas_7.png", id:"part4_atlas_7"},
                        {src:"images/part4/kanbian_atlas_8.png", id:"part4_atlas_8"},
                        {src:"images/part4/kanbian_atlas_9.png", id:"part4_atlas_9"},
                        {src:"images/part4/kanbian_atlas_10.png", id:"part4_atlas_10"},
                        {src:"images/part4/kanbian_atlas_11.png", id:"part4_atlas_11"},
                        {src:"images/part4/kanbian_atlas_12.png", id:"part4_atlas_12"},
                        {src:"images/part4/kanbian_atlas_13.png", id:"part4_atlas_13"},
                        {src:"images/part4/kanbian_atlas_14.png", id:"part4_atlas_14"},
                        {src:"images/part4/kanbian_atlas_15.png", id:"part4_atlas_15"},
                        {src:"images/part4/kanbian_atlas_16.png", id:"part4_atlas_16"},
                        {src:"images/part4/kanbian_atlas_17.png", id:"part4_atlas_17"},
                        {src:"images/part4/kanbian_atlas_18.png", id:"part4_atlas_18"},
                        {src:"images/part4/kanbian_atlas_19.png", id:"part4_atlas_19"},
                        {src:"images/part4/kanbian_atlas_20.png", id:"part4_atlas_20"},
                        {src:"images/part4/kanbian_atlas_21.png", id:"part4_atlas_21"},
                        {src:"images/part4/kanbian_atlas_22.png", id:"part4_atlas_22"},
                        {src:"images/part4/kanbian_atlas_23.png", id:"part4_atlas_23"},
                        {src:"images/part4/kanbian_atlas_24.png", id:"part4_atlas_24"},
                        {src:"images/part4/kanbian_atlas_25.png", id:"part4_atlas_25"},
                        {src:"images/part4/kanbian_atlas_26.png", id:"part4_atlas_26"},
                        {src:"images/part4/kanbian_atlas_27.png", id:"part4_atlas_27"},
                        {src:"images/part4/kanbian_atlas_28.png", id:"part4_atlas_28"},
                        {src:"images/part4/kanbian_atlas_29.png", id:"part4_atlas_29"},
                        {src:"images/part4/kanbian_atlas_30.png", id:"part4_atlas_30"},
                        {src:"images/part4/kanbian_atlas_31.png", id:"part4_atlas_31"},
                        {src:"images/part4/kanbian_atlas_32.png", id:"part4_atlas_32"},
                        {src:"images/part4/kanbian_atlas_33.png", id:"part4_atlas_33"},
                        {src:"images/part4/kanbian_atlas_34.png", id:"part4_atlas_34"},
                        {src:"images/part4/kanbian_atlas_35.png", id:"part4_atlas_35"},
                        {src:"images/part4/kanbian_atlas_36.png", id:"part4_atlas_36"},
                        {src:"images/part4/kanbian_atlas_37.png", id:"part4_atlas_37"},
                        {src:"images/part4/kanbian_atlas_38.png", id:"part4_atlas_38"},
                        {src:"images/part4/kanbian_atlas_39.png", id:"part4_atlas_39"},
                        {src:"images/part4/kanbian_atlas_40.png", id:"part4_atlas_40"},
                        {src:"images/part4/kanbian_atlas_41.png", id:"part4_atlas_41"},
                        {src:"images/part4/kanbian_atlas_42.png", id:"part4_atlas_42"},
                        {src:"images/part4/kanbian_atlas_43.png", id:"part4_atlas_43"},
                        {src:"images/part4/kanbian_atlas_44.png", id:"part4_atlas_44"},
                        {src:"images/part4/kanbian_atlas_45.png", id:"part4_atlas_45"},
                        {src:"images/part4/kanbian_atlas_46.png", id:"part4_atlas_46"},
                        {src:"images/part4/kanbian_atlas_47.png", id:"part4_atlas_47"}
                    ],
                    preloads: []
                },
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part5/bgm.png", id:"bgm"},
                        {src:"images/part5/kanbian_atlas_1.png", id:"part5_atlas_1"},
                        {src:"images/part5/kanbian_atlas_2.png", id:"part5_atlas_2"},
                        {src:"images/part5/kanbian_atlas_3.png", id:"part5_atlas_3"},
                        {src:"images/part5/kanbian_atlas_4.png", id:"part5_atlas_4"},
                        {src:"images/part5/kanbian_atlas_5.png", id:"part5_atlas_5"},
                        {src:"images/part5/kanbian_atlas_6.png", id:"part5_atlas_6"},
                        {src:"images/part5/kanbian_atlas_7.png", id:"part5_atlas_7"},
                        {src:"images/part5/kanbian_atlas_8.png", id:"part5_atlas_8"},
                        {src:"images/part5/kanbian_atlas_9.png", id:"part5_atlas_9"},
                        {src:"images/part5/kanbian_atlas_10.png", id:"part5_atlas_10"},
                        {src:"images/part5/kanbian_atlas_11.png", id:"part5_atlas_11"},
                        {src:"images/part5/kanbian_atlas_12.png", id:"part5_atlas_12"},
                        {src:"images/part5/kanbian_atlas_13.png", id:"part5_atlas_13"}
                    ],
                    preloads: []
                },
                {
                    id: 'A8A058922FCC493990D91243D07CB0A8',
                    width: 1406,
                    height: 720,
                    fps: 24,
                    color: "#1B1E2B",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/part6/bgm.png", id:"bgm"},
                        {src:"images/part6/kanbian_atlas_1.png", id:"part6_atlas_1"},
                        {src:"images/part6/kanbian_atlas_2.png", id:"part6_atlas_2"},
                        {src:"images/part6/kanbian_atlas_3.png", id:"part6_atlas_3"},
                        {src:"images/part6/kanbian_atlas_4.png", id:"part6_atlas_4"},
                        {src:"images/part6/kanbian_atlas_5.png", id:"part6_atlas_5"},
                        {src:"images/part6/kanbian_atlas_6.png", id:"part6_atlas_6"},
                        {src:"images/part6/kanbian_atlas_7.png", id:"part6_atlas_7"},
                        {src:"images/part6/kanbian_atlas_8.png", id:"part6_atlas_8"},
                        {src:"images/part6/kanbian_atlas_9.png", id:"part6_atlas_9"},
                        {src:"images/part6/kanbian_atlas_10.png", id:"part6_atlas_10"},
                        {src:"images/part6/kanbian_atlas_11.png", id:"part6_atlas_11"},
                        {src:"images/part6/kanbian_atlas_12.png", id:"part6_atlas_12"},
                        {src:"images/part6/kanbian_atlas_13.png", id:"part6_atlas_13"},
                        {src:"images/part6/kanbian_atlas_14.png", id:"part6_atlas_14"},
                        {src:"images/part6/kanbian_atlas_15.png", id:"part6_atlas_15"},
                        {src:"images/part6/kanbian_atlas_16.png", id:"part6_atlas_16"},
                        {src:"images/part6/kanbian_atlas_17.png", id:"part6_atlas_17"},
                        {src:"images/part6/kanbian_atlas_18.png", id:"part6_atlas_18"},
                        {src:"images/part6/kanbian_atlas_19.png", id:"part6_atlas_19"},
                        {src:"images/part6/kanbian_atlas_20.png", id:"part6_atlas_20"},
                        {src:"images/part6/kanbian_atlas_21.png", id:"part6_atlas_21"},
                        {src:"images/part6/kanbian_atlas_22.png", id:"part6_atlas_22"},
                        {src:"images/part6/kanbian_atlas_23.png", id:"part6_atlas_23"},
                        {src:"images/part6/kanbian_atlas_24.png", id:"part6_atlas_24"},
                        {src:"images/part6/kanbian_atlas_25.png", id:"part6_atlas_25"},
                        {src:"images/part6/kanbian_atlas_26.png", id:"part6_atlas_26"},
                        {src:"images/part6/kanbian_atlas_27.png", id:"part6_atlas_27"},
                        {src:"images/part6/kanbian_atlas_28.png", id:"part6_atlas_28"},
                        {src:"images/part6/kanbian_atlas_29.png", id:"part6_atlas_29"},
                        {src:"images/part6/kanbian_atlas_30.png", id:"part6_atlas_30"},
                        {src:"images/part6/kanbian_atlas_31.png", id:"part6_atlas_31"},
                        {src:"images/part6/kanbian_atlas_32.png", id:"part6_atlas_32"},
                        {src:"images/part6/kanbian_atlas_33.png", id:"part6_atlas_33"},
                        {src:"images/part6/kanbian_atlas_34.png", id:"part6_atlas_34"}
                    ],
                    preloads: []
                }
            ],
            load: 0
        }
    },
    methods: {
        init: function() {
            this.canvas = document.getElementById("canvas");
            this.setLib(0);
        },
        changeC: function(num,msg) {
            console.log(msg);
            this.setLib(num);
        },
        preload: function(index) {
            if (5>index) {
                var loader = new createjs.LoadQueue(false);
                var _this = this;
                loader.loadManifest(this.libList[index].manifest);
                loader.addEventListener("complete", function(evt){
                    _this.preload(index+1);
                });
            }   
        },
        setLib: function(num) {
            var _this = this;
            if (num===0) {
                getLib1(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if (num===1){
                getLib2(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if(num===2){
                getLib3(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if(num===3){
                getLib4(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if(num===4){
                getLib5(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if(num===5){
                getLib6(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            }
            var comp= AdobeAn.getComposition(this.libList[num].id);
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){ _this.handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){ _this.handleComplete(evt,comp,num)});
            loader.addEventListener("progress", function (evt) {_this.handleProgress(evt, comp)});
            loader.addEventListener("palyEnd",function() {
                alert('播放完了')
            });
            loader.loadManifest(this.libList[num].manifest);
        },
        handleProgress: function(evt) {
            this.load = parseInt(evt.progress*100);
        },
        handleFileLoad: function(evt, comp) {
            var images= comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        },
        handleComplete: function(evt, comp,num) {
            var lib = comp.getLibrary();
            var ss = comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            this.exportRoot = new lib.fen();
            this.stage = new createjs.Stage(this.canvas);
            this.stage.addChild(this.exportRoot);
            this.stage.addChild(this.exportRoot);
	        this.stage.enableMouseOver();
            this.makeResponsive(this.libList[num],true,'both',true,1);
            createjs.Ticker.setFPS(this.libList[num].fps);
            createjs.Ticker.addEventListener("tick", this.stage);
            AdobeAn.compositionLoaded(this.libList[num].id);
            this.preload(num+1);
        },
        makeResponsive: function (lib,isResp, respDim, isScale, scaleType) {
            this.stage.tickOnUpdate = false;
            var lastW, lastH, lastS=1;	
            var w = lib.width, h = lib.height;		
            var iw = window.innerWidth, ih=window.innerHeight;			
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw/w,
                yRatio = ih/h,
                sRatio = 1;			
            if(isResp) {                
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                    sRatio = lastS;                
                } else if(!isScale) {					
                    if(iw<w || ih<h)						
                        sRatio = Math.min(xRatio, yRatio);
                }				
                else if(scaleType==1) {					
                    sRatio = Math.min(xRatio, yRatio);				
                }				
                else if(scaleType==2) {					
                    sRatio = Math.max(xRatio, yRatio);				
                }			
            }
            this.canvas.width = h * pRatio * sRatio;			
            this.canvas.height = w * pRatio * sRatio;
            this.stage.rotation = 90;
            this.stage.scaleX = this.stage.scaleY = pRatio*sRatio;
            this.stage.x = h * pRatio * sRatio;
            this.stage.update();
            this.stage.tickOnUpdate = true;
            lastW = iw; lastH = ih; lastS = sRatio;		
        }
    },
    mounted: function() {
        var _this = this;
        _this.$nextTick(function(){
            _this.init();
        })
    }
})