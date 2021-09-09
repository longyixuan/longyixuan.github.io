var createjs, AdobeAn;
new Vue({
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
                    id: '8358C4ADD5F34E438AA04CDC0E6016A1',
                    width: 1100,
                    height: 620,
                    fps: 24,
                    color: "#FFFFFF",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/fen1_atlas_1.png?1631179521537", id:"fen1_atlas_1"}
                    ],
                    preloads: []
                },
                {
                    id: '35002E13EF97457E8F274CDAC95C0069',
                    width: 1100,
                    height: 620,
                    fps: 24,
                    color: "#FFFFFF",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/fen2_atlas_1.png?1631179607345", id:"fen2_atlas_1"}
                    ],
                    preloads: [] 
                },
                {
                    id: '90595C99D1D247178C2B81174984A4EE',
                    width: 1100,
                    height: 620,
                    fps: 24,
                    color: "#FFFFFF",
                    opacity: 1.00,
                    manifest: [
                        {src:"images/fen3_atlas_1.png?1631179709991", id:"fen3_atlas_1"}
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
            this.setLib();
        },
        changeC: function() {
            if (this.cur === 2) {
                this.cur = 0;
            } else {
                this.cur++;
            }
            this.setLib();
        },
        setLib: function() {
            var _this = this;
            if (this.cur===0) {
                getLib1(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else if(this.cur===1){
                getLib2(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            } else {
                getLib3(createjs = createjs||{}, AdobeAn = AdobeAn||{});
            }
            var comp= AdobeAn.getComposition(this.libList[this.cur].id);
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){ _this.handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){ _this.handleComplete(evt,comp)});
            loader.addEventListener("progress", function (evt) {_this.handleProgress(evt, comp)});
            loader.loadManifest(this.libList[this.cur].manifest);
        },
        handleProgress: function(evt) {
            this.load = parseInt(evt.progress*100);
        },
        handleFileLoad: function(evt, comp) {
            var images= comp.getImages();
            console.log(evt.item)
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
            this.stage.scaleX = scale*ih/iw;
            this.stage.scaleY = scale*ih/iw;
            this.stage.x = window.innerWidth; 
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