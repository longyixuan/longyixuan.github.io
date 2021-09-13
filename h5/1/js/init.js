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
                        {src:"images/part1/kanbian_atlas_1.png?1631499538575", id:"kanbian_atlas_1"},
                        {src:"images/part1/kanbian_atlas_2.png?1631499538576", id:"kanbian_atlas_2"},
                        {src:"images/part1/kanbian_atlas_3.png?1631499538576", id:"kanbian_atlas_3"}
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
                        {src:"images/part2/kanbian_atlas_1.png", id:"kanbian_atlas_1"},
                        {src:"images/part2/kanbian_atlas_2.png", id:"kanbian_atlas_2"},
                        {src:"images/part2/kanbian_atlas_3.png", id:"kanbian_atlas_3"},
                        {src:"images/part2/kanbian_atlas_4.png", id:"kanbian_atlas_4"},
                        {src:"images/part2/kanbian_atlas_5.png", id:"kanbian_atlas_5"},
                        {src:"images/part2/kanbian_atlas_6.png", id:"kanbian_atlas_6"},
                        {src:"images/part2/kanbian_atlas_7.png", id:"kanbian_atlas_7"},
                        {src:"images/part2/kanbian_atlas_8.png", id:"kanbian_atlas_8"},
                        {src:"images/part2/kanbian_atlas_9.png", id:"kanbian_atlas_9"},
                        {src:"images/part2/kanbian_atlas_10.png", id:"kanbian_atlas_10"},
                        {src:"images/part2/kanbian_atlas_11.png", id:"kanbian_atlas_11"},
                        {src:"images/part2/kanbian_atlas_12.png", id:"kanbian_atlas_12"},
                        {src:"images/part2/kanbian_atlas_13.png", id:"kanbian_atlas_13"},
                        {src:"images/part2/kanbian_atlas_14.png", id:"kanbian_atlas_14"},
                        {src:"images/part2/kanbian_atlas_15.png", id:"kanbian_atlas_15"},
                        {src:"images/part2/kanbian_atlas_16.png", id:"kanbian_atlas_16"},
                        {src:"images/part2/kanbian_atlas_17.png", id:"kanbian_atlas_17"},
                        {src:"images/part2/kanbian_atlas_18.png", id:"kanbian_atlas_18"},
                        {src:"images/part2/kanbian_atlas_19.png", id:"kanbian_atlas_19"},
                        {src:"images/part2/kanbian_atlas_20.png", id:"kanbian_atlas_20"},
                        {src:"images/part2/kanbian_atlas_21.png", id:"kanbian_atlas_21"},
                        {src:"images/part2/kanbian_atlas_22.png", id:"kanbian_atlas_22"},
                        {src:"images/part2/kanbian_atlas_23.png", id:"kanbian_atlas_23"},
                        {src:"images/part2/kanbian_atlas_24.png", id:"kanbian_atlas_24"},
                        {src:"images/part2/kanbian_atlas_25.png", id:"kanbian_atlas_25"},
                        {src:"images/part2/kanbian_atlas_26.png", id:"kanbian_atlas_26"},
                        {src:"images/part2/kanbian_atlas_27.png", id:"kanbian_atlas_27"},
                        {src:"images/part2/kanbian_atlas_28.png", id:"kanbian_atlas_28"},
                        {src:"images/part2/kanbian_atlas_29.png", id:"kanbian_atlas_29"},
                        {src:"images/part2/kanbian_atlas_30.png", id:"kanbian_atlas_30"},
                        {src:"images/part2/kanbian_atlas_31.png", id:"kanbian_atlas_31"},
                        {src:"images/part2/kanbian_atlas_32.png", id:"kanbian_atlas_32"},
                        {src:"images/part2/kanbian_atlas_33.png", id:"kanbian_atlas_33"},
                        {src:"images/part2/kanbian_atlas_34.png", id:"kanbian_atlas_34"},
                        {src:"images/part2/kanbian_atlas_35.png", id:"kanbian_atlas_35"},
                        {src:"images/part2/kanbian_atlas_36.png", id:"kanbian_atlas_36"},
                        {src:"images/part2/kanbian_atlas_37.png", id:"kanbian_atlas_37"},
                        {src:"images/part2/kanbian_atlas_38.png", id:"kanbian_atlas_38"},
                        {src:"images/part2/kanbian_atlas_39.png", id:"kanbian_atlas_39"},
                        {src:"images/part2/kanbian_atlas_40.png", id:"kanbian_atlas_40"},
                        {src:"images/part2/kanbian_atlas_41.png", id:"kanbian_atlas_41"},
                        {src:"images/part2/kanbian_atlas_42.png", id:"kanbian_atlas_42"},
                        {src:"images/part2/kanbian_atlas_43.png", id:"kanbian_atlas_43"},
                        {src:"images/part2/kanbian_atlas_44.png", id:"kanbian_atlas_44"},
                        {src:"images/part2/kanbian_atlas_45.png", id:"kanbian_atlas_45"},
                        {src:"images/part2/kanbian_atlas_46.png", id:"kanbian_atlas_46"},
                        {src:"images/part2/kanbian_atlas_47.png", id:"kanbian_atlas_47"},
                        {src:"images/part2/kanbian_atlas_48.png", id:"kanbian_atlas_48"},
                        {src:"images/part2/kanbian_atlas_49.png", id:"kanbian_atlas_49"},
                        {src:"images/part2/kanbian_atlas_50.png", id:"kanbian_atlas_50"},
                        {src:"images/part2/kanbian_atlas_51.png", id:"kanbian_atlas_51"},
                        {src:"images/part2/kanbian_atlas_52.png", id:"kanbian_atlas_52"},
                        {src:"images/part2/kanbian_atlas_53.png", id:"kanbian_atlas_53"},
                        {src:"images/part2/kanbian_atlas_54.png", id:"kanbian_atlas_54"},
                        {src:"images/part2/kanbian_atlas_55.png", id:"kanbian_atlas_55"},
                        {src:"images/part2/kanbian_atlas_56.png", id:"kanbian_atlas_56"},
                        {src:"images/part2/kanbian_atlas_57.png", id:"kanbian_atlas_57"},
                        {src:"images/part2/kanbian_atlas_58.png", id:"kanbian_atlas_58"},
                        {src:"images/part2/kanbian_atlas_59.png", id:"kanbian_atlas_59"},
                        {src:"images/part2/kanbian_atlas_60.png", id:"kanbian_atlas_60"},
                        {src:"images/part2/kanbian_atlas_61.png", id:"kanbian_atlas_61"},
                        {src:"images/part2/kanbian_atlas_62.png", id:"kanbian_atlas_62"}
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
            var _this = this;
            model.addEventListener('complete',function (){
                _this.changeC();
            })
            this.setLib();
        },
        changeC: function() {
            if (this.cur === 1) {
                this.cur = 0;
            } else {
                this.cur++;
            }
            this.setLib();
        },
        preload: function(index) {
            if (2>index) {
                var loader = new createjs.LoadQueue(false);
                var _this = this;
                loader.loadManifest(this.libList[index].manifest);
                loader.addEventListener("complete", function(evt){
                    _this.preload(index+1);
                });
            }   
            
        },
        setLib: function() {
            var _this = this;
            if (this.cur===0) {
                getLib1(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else {
                getLib2(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            }
            var comp= AdobeAn.getComposition(this.libList[this.cur].id);
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){ _this.handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){ _this.handleComplete(evt,comp)});
            loader.addEventListener("progress", function (evt) {_this.handleProgress(evt, comp)});
            loader.addEventListener("palyEnd",function() {
                alert('播放完了')
            });
            loader.loadManifest(this.libList[this.cur].manifest);
        },
        handleProgress: function(evt) {
            this.load = parseInt(evt.progress*100);
        },
        handleFileLoad: function(evt, comp) {
            var images= comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        },
        handleComplete: function(evt, comp) {
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
            this.makeResponsive(this.libList[this.cur],false,'both',true,1);
            createjs.Ticker.setFPS(this.libList[this.cur].fps);
            createjs.Ticker.addEventListener("tick", this.stage);
            AdobeAn.compositionLoaded(this.libList[this.cur].id);
            this.preload(this.cur+1);
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
            this.canvas.width = iw*sRatio;			
            this.canvas.height = ih*sRatio;
            this.stage.rotation = 90;
            var scale = xRatio>yRatio?yRatio:xRatio;
            this.stage.scaleX = this.stage.scaleY = scale*ih/iw;
            this.stage.x = window.innerWidth - 20;
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
        var model = new createjs.EventDispatcher();
        model.addEventListener('complete',function (){
                alert('complete');
        
        })
    }
})