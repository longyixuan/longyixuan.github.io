function getLib0(cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"part0_atlas_1", frames: [[465,752,470,68],[0,752,463,137],[0,0,1300,750]]}
	];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.CachedBmp_1 = function() {
		this.initialize(ss["part0_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.dm = function() {
		this.initialize(img.dm);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,2397,456);
	
	
	(lib.kaishianniu = function() {
		this.initialize(ss["part0_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.图层20 = function() {
		this.initialize(ss["part0_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("EhFxAMwIAA5fMCLjAAAIAAZfg");
		this.shape.setTransform(446.625,81.625);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,893.3,163.3);
	
	
	(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.instance = new lib.dm();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,2397,456);
	
	
	// stage content:
	(lib.fen = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.actionFrames = [0,143];
		// timeline functions:
		this.frame_0 = function() {
			//接第1段
			
			this.button_7.addEventListener("click", fl_ClickToGoToWebPage);
			
			function fl_ClickToGoToWebPage() {
				vm.playMusic();
				vm.changeC(1,'跳到1段');
			}
		}
		this.frame_143 = function() {
			this.gotoAndPlay(1)
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(143).call(this.frame_143).wait(1));
	
		// Layer_5
		this.button_7 = new lib.Symbol2();
		this.button_7.name = "button_7";
		this.button_7.setTransform(703,644.5,1,1,0,0,0,446.6,81.6);
		new cjs.ButtonHelper(this.button_7, 0, 1, 2, false, new lib.Symbol2(), 3);
	
		this.timeline.addTween(cjs.Tween.get(this.button_7).wait(144));
	
		// Layer_4
		this.instance = new lib.kaishianniu();
		this.instance.setTransform(578,602,0.5401,0.5401);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(144));
	
		// Layer_3
		this.instance_1 = new lib.CachedBmp_1();
		this.instance_1.setTransform(467.8,60.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(144));
	
		// Layer_2
		this.instance_2 = new lib.Symbol1("synched",0);
		this.instance_2.setTransform(2382.6,362.55,0.8106,0.8106,0,0,0,1198.5,228.1);
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26).to({_off:false},0).to({regX:1198.6,regY:228.2,x:1031.35,y:362.6},117).wait(1));
	
		// Layer_2
		this.instance_3 = new lib.Symbol1("synched",0);
		this.instance_3.setTransform(1019.75,362.55,0.8106,0.8106,0,0,0,1198.5,228.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:1198.6,regY:228.2,x:-1017.2,y:362.6},143).wait(1));
	
		// Layer_1
		this.instance_4 = new lib.图层20();
		this.instance_4.setTransform(-37,-76,1.1385,1.1385);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(-1285.7,284,4639.8,493.9);
	// library properties:
	lib.properties = {
		id: 'part0',
		width: 1406,
		height: 720,
		fps: 24,
		color: "#1B1E2B",
		opacity: 1.00,
		manifest: [
			{src:"images/part0/dm.png", id:"dm"},
			{src:"images/part0/kanbian_atlas_1.png", id:"part0_atlas_1"}
		],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { 
		this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['part0'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
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
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	}