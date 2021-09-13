function getLib2(cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [
			{name:"kanbian_atlas_1", frames: [[0,611,951,49],[940,272,951,68],[953,611,951,49],[0,577,71,27],[1893,360,86,42],[1245,204,675,58],[1405,412,590,58],[1405,472,509,58],[940,551,954,58],[1245,146,504,42],[2002,0,18,45],[1965,628,59,82],[593,662,86,82],[1029,662,59,82],[681,662,86,82],[468,662,123,60],[1798,0,202,202],[333,373,84,116],[0,373,202,202],[601,562,86,42],[769,662,86,82],[0,662,119,119],[689,562,86,42],[857,662,86,82],[121,662,119,119],[940,342,951,68],[204,562,395,42],[204,527,93,24],[777,562,93,24],[940,412,463,137],[450,0,243,560],[695,0,243,560],[1245,0,551,144],[945,662,82,82],[940,0,303,270],[204,373,127,152],[242,662,224,56],[0,0,448,371],[333,491,80,62],[1090,662,64,64],[1922,204,116,154],[1916,472,116,154],[2028,0,18,4],[2022,0,4,22],[1906,628,57,298]]},
			{name:"kanbian_atlas_2", frames: [[0,0,1280,720],[1507,858,394,446],[1110,1240,395,446],[1507,1306,459,372],[626,1276,482,480],[678,722,526,516],[0,722,676,552],[0,1276,624,536],[1282,0,756,856]]},
			{name:"kanbian_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_4", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_5", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_6", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_7", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_8", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_9", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_10", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_11", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_12", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_13", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_14", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_15", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_16", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_17", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_18", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_19", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_20", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_21", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_22", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_23", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_24", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_25", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_26", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_27", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_28", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_29", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_30", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_31", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_32", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_33", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_34", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_35", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_36", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_37", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_38", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_39", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_40", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_41", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_42", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_43", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_44", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_45", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_46", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_47", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_48", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_49", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_50", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_51", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_52", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_53", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_54", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_55", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_56", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_57", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_58", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_59", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_60", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_61", frames: [[0,0,1280,720],[0,722,1280,720]]},
			{name:"kanbian_atlas_62", frames: [[0,968,1280,720],[0,0,1011,966]]}
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
	
	
	
	(lib.CachedBmp_36 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_35 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_34 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_33 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_32 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_30 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_29 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_28 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_27 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_26 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(9);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_25 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(10);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_24 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(11);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_22 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(12);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_20 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(13);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_18 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(14);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_16 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(15);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_15 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(16);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_14 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(17);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_13 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(18);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_12 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(19);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_10 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(20);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_11 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(21);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_8 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(22);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_6 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(23);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_31 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(24);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_4 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(25);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_3 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(26);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_2 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(27);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.CachedBmp_1 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(28);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0000 = function() {
		this.initialize(ss["kanbian_atlas_62"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0001png复制 = function() {
		this.initialize(ss["kanbian_atlas_61"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0002 = function() {
		this.initialize(ss["kanbian_atlas_61"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0002png复制 = function() {
		this.initialize(ss["kanbian_atlas_60"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0003 = function() {
		this.initialize(ss["kanbian_atlas_60"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0004 = function() {
		this.initialize(ss["kanbian_atlas_59"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0004png复制 = function() {
		this.initialize(ss["kanbian_atlas_59"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0005 = function() {
		this.initialize(ss["kanbian_atlas_58"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0006png复制 = function() {
		this.initialize(ss["kanbian_atlas_58"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0006png复制2 = function() {
		this.initialize(ss["kanbian_atlas_57"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0007png复制 = function() {
		this.initialize(ss["kanbian_atlas_57"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0008 = function() {
		this.initialize(ss["kanbian_atlas_56"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0008png复制 = function() {
		this.initialize(ss["kanbian_atlas_56"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0009 = function() {
		this.initialize(ss["kanbian_atlas_55"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0010png复制 = function() {
		this.initialize(ss["kanbian_atlas_55"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0010png复制2 = function() {
		this.initialize(ss["kanbian_atlas_54"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0011 = function() {
		this.initialize(ss["kanbian_atlas_54"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0012 = function() {
		this.initialize(ss["kanbian_atlas_53"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0012png复制 = function() {
		this.initialize(ss["kanbian_atlas_53"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0013 = function() {
		this.initialize(ss["kanbian_atlas_52"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0014 = function() {
		this.initialize(ss["kanbian_atlas_52"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0014png复制 = function() {
		this.initialize(ss["kanbian_atlas_51"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0015 = function() {
		this.initialize(ss["kanbian_atlas_51"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0016 = function() {
		this.initialize(ss["kanbian_atlas_50"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0016png复制 = function() {
		this.initialize(ss["kanbian_atlas_50"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0017 = function() {
		this.initialize(ss["kanbian_atlas_49"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0018 = function() {
		this.initialize(ss["kanbian_atlas_49"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0018png复制 = function() {
		this.initialize(ss["kanbian_atlas_48"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0019 = function() {
		this.initialize(ss["kanbian_atlas_48"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0020png复制 = function() {
		this.initialize(ss["kanbian_atlas_47"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0020png复制2 = function() {
		this.initialize(ss["kanbian_atlas_47"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0021 = function() {
		this.initialize(ss["kanbian_atlas_46"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0022 = function() {
		this.initialize(ss["kanbian_atlas_46"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0022png复制 = function() {
		this.initialize(ss["kanbian_atlas_45"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0023png复制 = function() {
		this.initialize(ss["kanbian_atlas_45"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0024png复制 = function() {
		this.initialize(ss["kanbian_atlas_44"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0024png复制2 = function() {
		this.initialize(ss["kanbian_atlas_44"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0025 = function() {
		this.initialize(ss["kanbian_atlas_43"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0026 = function() {
		this.initialize(ss["kanbian_atlas_43"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0026png复制 = function() {
		this.initialize(ss["kanbian_atlas_42"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0027 = function() {
		this.initialize(ss["kanbian_atlas_42"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0028 = function() {
		this.initialize(ss["kanbian_atlas_41"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0028png复制 = function() {
		this.initialize(ss["kanbian_atlas_41"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0029 = function() {
		this.initialize(ss["kanbian_atlas_40"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0030 = function() {
		this.initialize(ss["kanbian_atlas_40"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0030png复制 = function() {
		this.initialize(ss["kanbian_atlas_39"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0031 = function() {
		this.initialize(ss["kanbian_atlas_39"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0032 = function() {
		this.initialize(ss["kanbian_atlas_38"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0032_1 = function() {
		this.initialize(ss["kanbian_atlas_38"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0033 = function() {
		this.initialize(ss["kanbian_atlas_37"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0034 = function() {
		this.initialize(ss["kanbian_atlas_37"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0034_1 = function() {
		this.initialize(ss["kanbian_atlas_36"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0035 = function() {
		this.initialize(ss["kanbian_atlas_36"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0036 = function() {
		this.initialize(ss["kanbian_atlas_35"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0036_1 = function() {
		this.initialize(ss["kanbian_atlas_35"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0037 = function() {
		this.initialize(ss["kanbian_atlas_34"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0038 = function() {
		this.initialize(ss["kanbian_atlas_34"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0038_1 = function() {
		this.initialize(ss["kanbian_atlas_33"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0039 = function() {
		this.initialize(ss["kanbian_atlas_33"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0040 = function() {
		this.initialize(ss["kanbian_atlas_32"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0040_1 = function() {
		this.initialize(ss["kanbian_atlas_32"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0041 = function() {
		this.initialize(ss["kanbian_atlas_31"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0042 = function() {
		this.initialize(ss["kanbian_atlas_31"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0042_1 = function() {
		this.initialize(ss["kanbian_atlas_30"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0043 = function() {
		this.initialize(ss["kanbian_atlas_30"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0044 = function() {
		this.initialize(ss["kanbian_atlas_29"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0044_1 = function() {
		this.initialize(ss["kanbian_atlas_29"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0045 = function() {
		this.initialize(ss["kanbian_atlas_28"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0046 = function() {
		this.initialize(ss["kanbian_atlas_28"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0046_1 = function() {
		this.initialize(ss["kanbian_atlas_27"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0047 = function() {
		this.initialize(ss["kanbian_atlas_27"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0048 = function() {
		this.initialize(ss["kanbian_atlas_26"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0048_1 = function() {
		this.initialize(ss["kanbian_atlas_26"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0050 = function() {
		this.initialize(ss["kanbian_atlas_25"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0052 = function() {
		this.initialize(ss["kanbian_atlas_25"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0054 = function() {
		this.initialize(ss["kanbian_atlas_24"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0056 = function() {
		this.initialize(ss["kanbian_atlas_24"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0058 = function() {
		this.initialize(ss["kanbian_atlas_23"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0060 = function() {
		this.initialize(ss["kanbian_atlas_23"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0062 = function() {
		this.initialize(ss["kanbian_atlas_22"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0064 = function() {
		this.initialize(ss["kanbian_atlas_22"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0066 = function() {
		this.initialize(ss["kanbian_atlas_21"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0068 = function() {
		this.initialize(ss["kanbian_atlas_21"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0070 = function() {
		this.initialize(ss["kanbian_atlas_20"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0072 = function() {
		this.initialize(ss["kanbian_atlas_20"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0074 = function() {
		this.initialize(ss["kanbian_atlas_19"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0076 = function() {
		this.initialize(ss["kanbian_atlas_19"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0078 = function() {
		this.initialize(ss["kanbian_atlas_18"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0080 = function() {
		this.initialize(ss["kanbian_atlas_18"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0082 = function() {
		this.initialize(ss["kanbian_atlas_17"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0084 = function() {
		this.initialize(ss["kanbian_atlas_17"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0086 = function() {
		this.initialize(ss["kanbian_atlas_16"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0088 = function() {
		this.initialize(ss["kanbian_atlas_16"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0090 = function() {
		this.initialize(ss["kanbian_atlas_15"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0092 = function() {
		this.initialize(ss["kanbian_atlas_15"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0094 = function() {
		this.initialize(ss["kanbian_atlas_14"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0096 = function() {
		this.initialize(ss["kanbian_atlas_14"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0098 = function() {
		this.initialize(ss["kanbian_atlas_13"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0100 = function() {
		this.initialize(ss["kanbian_atlas_13"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0102 = function() {
		this.initialize(ss["kanbian_atlas_12"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0104 = function() {
		this.initialize(ss["kanbian_atlas_12"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0106 = function() {
		this.initialize(ss["kanbian_atlas_11"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0108 = function() {
		this.initialize(ss["kanbian_atlas_11"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0110 = function() {
		this.initialize(ss["kanbian_atlas_10"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0112 = function() {
		this.initialize(ss["kanbian_atlas_10"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0114 = function() {
		this.initialize(ss["kanbian_atlas_9"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0116 = function() {
		this.initialize(ss["kanbian_atlas_9"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0118 = function() {
		this.initialize(ss["kanbian_atlas_8"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0120 = function() {
		this.initialize(ss["kanbian_atlas_8"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0122 = function() {
		this.initialize(ss["kanbian_atlas_7"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0124 = function() {
		this.initialize(ss["kanbian_atlas_7"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0126 = function() {
		this.initialize(ss["kanbian_atlas_6"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0128 = function() {
		this.initialize(ss["kanbian_atlas_6"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0130 = function() {
		this.initialize(ss["kanbian_atlas_5"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0132 = function() {
		this.initialize(ss["kanbian_atlas_5"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0134 = function() {
		this.initialize(ss["kanbian_atlas_4"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0136 = function() {
		this.initialize(ss["kanbian_atlas_4"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0138 = function() {
		this.initialize(ss["kanbian_atlas_3"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0140 = function() {
		this.initialize(ss["kanbian_atlas_3"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib._0142 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.anniu = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(29);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bc1 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(30);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bc2 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(31);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bgpng复制 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(32);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bgm = function() {
		this.initialize(img.bgm);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,4001,1459);
	
	
	(lib.biao = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(33);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.bihuang = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(34);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.datou = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(35);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.guangxian = function() {
		this.initialize(ss["kanbian_atlas_62"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jiantu = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(36);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.jusang = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(37);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.luan = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(38);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.taishou11 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.taishou12 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.tongkong = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(39);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yanbai = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(40);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yanbaiz = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(41);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.yanjing = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.z1 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(42);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.z2 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(43);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.位图524 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(4);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.位图525 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(5);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.位图526 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(6);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.位图527 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(7);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.位图528 = function() {
		this.initialize(ss["kanbian_atlas_2"]);
		this.gotoAndStop(8);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.最优化倾向 = function() {
		this.initialize(ss["kanbian_atlas_1"]);
		this.gotoAndStop(44);
	}).prototype = p = new cjs.Sprite();
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.补间3 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AEthOQKei+KdBmIATEYQqqixqSEJgA56ByIATkYQKdhmKeC+IgSEYQqSkJqqCxg");
		this.shape.setTransform(0.025,0.0079);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-165.9,-20.2,331.9,40.5);
	
	
	(lib.元件8复制2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("EgNIA6AMAAAhz/IaRAAMAAABz/g");
		this.shape.setTransform(0,0.025);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-84.1,-371.1,168.2,742.3);
	
	
	(lib.元件6复制3 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.anniu();
		this.instance.setTransform(-231.5,-68.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-231.5,-68.5,463,137);
	
	
	(lib.元件4复制13 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_36();
		this.instance.setTransform(-475.25,-52.25);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件4复制13, new cjs.Rectangle(-475.2,-52.2,951,49), null);
	
	
	(lib.元件4复制8 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_35();
		this.instance.setTransform(-475.25,-52.25);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件4复制8, new cjs.Rectangle(-475.2,-52.2,951,68), null);
	
	
	(lib.元件4复制7 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_34();
		this.instance.setTransform(-475.25,-52.25);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件4复制7, new cjs.Rectangle(-475.2,-52.2,951,49), null);
	
	
	(lib.元件4复制6 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.datou();
		this.instance.setTransform(-63.5,-76);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63.5,-76,127,152);
	
	
	(lib.元件3复制 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.tongkong();
		this.instance.setTransform(-109,-32);
	
		this.instance_1 = new lib.tongkong();
		this.instance_1.setTransform(45,-32);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-109,-32,218,64);
	
	
	(lib.元件2复制10 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.bihuang();
		this.instance.setTransform(-121.45,-108.2,0.8016,0.8016);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-121.4,-108.2,242.9,216.5);
	
	
	(lib.元件2复制8 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.z1();
		this.instance.setTransform(-9,-2);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-9,-2,18,4);
	
	
	(lib.元件2复制2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.yanbai();
		this.instance.setTransform(-58,-77);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-58,-77,116,154);
	
	
	(lib.元件1复制11 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.yanjing();
		this.instance.setTransform(-184.4,-149.45,0.8035,0.8035);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-184.4,-149.4,368.8,298.9);
	
	
	(lib.元件1复制9 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.z2();
		this.instance.setTransform(-2,-11);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-2,-11,4,22);
	
	
	(lib.元件1复制2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.yanbaiz();
		this.instance.setTransform(-58,-77);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-58,-77,116,154);
	
	
	(lib.补间16 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.jusang();
		this.instance.setTransform(-179.15,-148.35,0.7997,0.7997);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-179.1,-148.3,358.29999999999995,296.70000000000005);
	
	
	(lib.补间15 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.jusang();
		this.instance.setTransform(-179.15,-148.35,0.7997,0.7997);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-179.1,-148.3,358.29999999999995,296.70000000000005);
	
	
	(lib.元件63 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_32();
		this.instance.setTransform(-43.15,-20.9);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件62 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ARCAAQAAHEk/E/Qk/E/nEAAQnDAAk/k/Qk/k/AAnEQAAnDE/k/QE/k/HDAAQHEAAE/E/QE/E/AAHDg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-110,-110,220,220);
	
	
	(lib.元件61 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ANnAAQAAFpj/D/Qj/D/lpAAQloAAj/j/Qj/j/AAlpQAAloD/j/QD/j/FoAAQFpAAD/D/QD/D/AAFog");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-88.1,-88.1,176.2,176.2);
	
	
	(lib.元件60 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.taishou12();
		this.instance.setTransform(-197.5,-223);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-197.5,-223,395,446);
	
	
	(lib.元件59 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.taishou11();
		this.instance.setTransform(-197,-223);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-197,-223,394,446);
	
	
	(lib.元件52 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_30();
		this.instance.setTransform(-337.3,-28.85);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件52, new cjs.Rectangle(-337.3,-28.8,675,58), null);
	
	
	(lib.元件51 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_29();
		this.instance.setTransform(-295.05,-28.85);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件51, new cjs.Rectangle(-295,-28.8,590,58), null);
	
	
	(lib.元件49 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_28();
		this.instance.setTransform(-254.6,-28.85);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件49, new cjs.Rectangle(-254.6,-28.8,509,58), null);
	
	
	(lib.元件47 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_27();
		this.instance.setTransform(-477.15,-28.85);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件47, new cjs.Rectangle(-477.1,-28.8,954,58), null);
	
	
	(lib.元件46 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_26();
		this.instance.setTransform(-251.85,-21.15);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-251.8,-21.1,504,42);
	
	
	(lib.元件24 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("rgba(255,255,255,0.42)").ss(4,1,1).p("AhsA3IBshtIBtBt");
		this.shape.setTransform(0,-5.35);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhYAtIBYhYIBZBY");
		this.shape_1.setTransform(0,6.3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-12.9,-12.8,25.8,25.6);
	
	
	(lib.元件21 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("EgNIA6AMAAAhz/IaRAAMAAABz/g");
		this.shape.setTransform(0,0.025);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-84.1,-371.1,168.2,742.3);
	
	
	(lib.元件20 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D68441").s().p("EiH9BBuMAAAiDbMEP7AAAMAAACDbg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-870.2,-420.6,1740.4,841.2);
	
	
	(lib.元件15 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.bgm();
		this.instance.setTransform(-335,-408,0.5491,0.5491);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-335,-408,2197,801.2);
	
	
	(lib.元件13 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AmhGiQitiuABj0QgBjzCtiuQCuitDzABQD0gBCuCtQCtCugBDzQABD0itCuQiuCtj0gBQjzABiuitg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59,-59,118.1,118.1);
	
	
	(lib.元件8复制5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_24();
		this.instance.setTransform(-29.55,-37.95);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件8 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_22();
		this.instance.setTransform(-43.2,-37.95);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件7复制4 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_20();
		this.instance.setTransform(-29.5,-40.85);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件7 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_18();
		this.instance.setTransform(-43.15,-40.85);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件5复制6 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_16();
		this.instance.setTransform(-61.35,-29.75);
	
		this.instance_1 = new lib.CachedBmp_15();
		this.instance_1.setTransform(-100.85,-100.85);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-100.8,-100.8,202,202);
	
	
	(lib.元件5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_14();
		this.instance.setTransform(-41.9,-58.1);
	
		this.instance_1 = new lib.CachedBmp_13();
		this.instance_1.setTransform(-100.85,-100.85);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-100.8,-100.8,202,202);
	
	
	(lib.元件4复制5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_12();
		this.instance.setTransform(-43.15,-17.65);
	
		this.instance_1 = new lib.CachedBmp_11();
		this.instance_1.setTransform(-59.55,-56.25);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-56.2,119,119);
	
	
	(lib.元件4 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_10();
		this.instance.setTransform(-43.15,-37.55);
	
		this.instance_1 = new lib.CachedBmp_11();
		this.instance_1.setTransform(-59.55,-56.25);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-56.2,119,119);
	
	
	(lib.元件3复制5 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_8();
		this.instance.setTransform(-43.2,-15.5);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
	(lib.元件3 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_6();
		this.instance.setTransform(-43.2,-40.85);
	
		this.instance_1 = new lib.CachedBmp_31();
		this.instance_1.setTransform(-59.55,-59.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
	
	
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
		this.shape.graphics.f("#FFFFFF").s().p("A2dWeMAAAgs7MAs7AAAMAAAAs7g");
		this.shape.setTransform(143.825,143.825);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,287.7,287.7);
	
	
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
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("A7obpMAAAg3RMA3RAAAMAAAA3Rg");
		this.shape.setTransform(176.925,176.925);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,353.9,353.9);
	
	
	(lib.元件7_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance_2 = new lib.补间3("synched",0);
		this.instance_2.setTransform(0.1,-20.5,0.2225,0.2225,0,0,0,0.5,0.5);
	
		this.instance_3 = new lib.元件3复制("synched",0);
		this.instance_3.setTransform(-5.05,6.55,0.2424,0.2424,0,0,0,0.4,0.4);
	
		this.instance_4 = new lib.元件2复制2("synched",0);
		this.instance_4.setTransform(-18.6,6.45,0.2424,0.2424,0,0,0,0.4,0);
	
		this.instance_5 = new lib.元件1复制2("synched",0);
		this.instance_5.setTransform(18.8,6.45,0.2424,0.2424,0,0,0,0.8,0);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-36.9,-25.1,73.8,50.3);
	
	
	(lib.元件6复制2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件4复制6("synched",0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-63.5,-76,127,152);
	
	
	(lib.元件5复制4 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件6复制2("synched",0);
		this.instance.setTransform(5.2,54.9,0.5426,0.5426,0,0,0,5.2,54.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:5.3,regY:55,scaleX:0.9297,scaleY:0.9297,x:5.3,y:55},7).to({regX:5.2,regY:54.9,scaleX:0.5426,scaleY:0.5426,x:5.2,y:54.9},8).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-58.6,-66.8,118,141.3);
	
	
	(lib.元件3复制9 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.位图528();
		this.instance.setTransform(443,9,0.2254,0.2254);
	
		this.instance_1 = new lib.位图527();
		this.instance_1.setTransform(149,1,0.3651,0.3651);
	
		this.instance_2 = new lib.位图526();
		this.instance_2.setTransform(-125,7,0.3518,0.3518);
	
		this.instance_3 = new lib.位图525();
		this.instance_3.setTransform(-363,7,0.3765,0.3765);
	
		this.instance_4 = new lib.位图524();
		this.instance_4.setTransform(-587,12,0.4101,0.4101);
	
		this.instance_5 = new lib.元件4复制8();
		this.instance_5.setTransform(0,-198.55);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-587,-250.8,1200.4,459.70000000000005);
	
	
	(lib.元件72 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.CachedBmp_33();
		this.instance.setTransform(192.45,-102.15);
	
		this.instance_1 = new lib.jiantu();
		this.instance_1.setTransform(190.45,-64.05,0.3576,0.3576);
	
		this.instance_2 = new lib.元件7_1("synched",0);
		this.instance_2.setTransform(231.3,-8.6);
	
		this.instance_3 = new lib.guangxian();
		this.instance_3.setTransform(-270.55,-226.05,0.468,0.468);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-270.5,-226,541.1,452.1);
	
	
	(lib.元件50 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件51();
		this.instance.setTransform(-31.2,24.6);
		this.instance.shadow = new cjs.Shadow("#000000",1,1,2);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(43,61,112,0.776)").s().p("EguyAECIAAoDMBdlAAAIAAIDg");
		this.shape.setTransform(-30.95,23.7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-330.5,-6.2,601.3,67);
	
	
	(lib.元件48 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件49();
		this.instance.setTransform(-0.8,0.95);
		this.instance.shadow = new cjs.Shadow("#000000",1,1,2);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(207,11,11,0.498)").s().p("EgojAECIAAoDMBRHAAAIAAIDg");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-259.6,-29.9,520.2,67);
	
	
	(lib.元件26 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件52();
		this.instance.setTransform(99.05,-17.1);
		this.instance.shadow = new cjs.Shadow("#000000",1,1,2);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(43,61,112,0.776)").s().p("EgzoADZIAAmxMBnRAAAIAAGxg");
		this.shape.setTransform(90.75,-13.65);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件26, new cjs.Rectangle(-240.2,-47.9,684,67), null);
	
	
	(lib.元件25 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件47();
		this.instance.setTransform(0,-31.85);
		this.instance.shadow = new cjs.Shadow("#333333",1,1,2);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(207,11,11,0.498)").s().p("EhJzADZIAAmxMCTnAAAIAAGxg");
		this.shape.setTransform(-7.2,-29.05);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(-479.6,-62.7,963.5,68), null);
	
	
	(lib.元件23 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件24("synched",0);
		this.instance.setTransform(0,3.45);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-4.65},19).to({y:3.05},19).to({_off:true},1).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-12.9,-17.4,25.8,33.599999999999994);
	
	
	(lib.元件22 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件23("synched",0);
	
		this.instance_1 = new lib.CachedBmp_25();
		this.instance_1.setTransform(-32.7,-18.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(39));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-32.7,-18.8,45.6,45);
	
	
	(lib.元件19 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层_1
		this.instance = new lib.元件6复制3("synched",0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.元件19, new cjs.Rectangle(-231.5,-68.5,463,137), null);
	
	
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
	
		this.actionFrames = [0,676,792,798,842,896,992,996,1043,1099,1242];
		// timeline functions:
		this.frame_0 = function() {
			this.gotoAndPlay(572)
		}
		this.frame_676 = function() {
			this.stop();
			
			this.button_y.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_11()
			{
				this.gotoAndPlay(679);
			}
		}
		this.frame_792 = function() {
			this.stop();
			
			/* Click to Go to Frame and Play
			Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
			Can be used on the main timeline or on movie clip timelines.
			
			Instructions:
			1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
			2.Frame numbers in EaselJS start at 0 instead of 1
			*/
			
			this.movieClip_u.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_12()
			{
				this.gotoAndPlay(795);
			}
		}
		this.frame_798 = function() {
			this.button_q.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_16()
			{
				this.gotoAndPlay(845);
			}
		}
		this.frame_842 = function() {
			this.stop();
		}
		this.frame_896 = function() {
			this.button_qq.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_17()
			{
				this.gotoAndPlay(996);
			}
		}
		this.frame_992 = function() {
			this.stop();
		}
		this.frame_996 = function() {
			this.button_aa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_23()
			{
				this.gotoAndPlay(1046);
			}
		}
		this.frame_1043 = function() {
			this.stop();
		}
		this.frame_1099 = function() {
			this.button_qqq.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
			
			function fl_ClickToGoToAndPlayFromFrame_19()
			{
				this.gotoAndPlay(1244);
			}
		}
		this.frame_1242 = function() {
			//2段结束，开始3段
			
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(676).call(this.frame_676).wait(116).call(this.frame_792).wait(6).call(this.frame_798).wait(44).call(this.frame_842).wait(54).call(this.frame_896).wait(96).call(this.frame_992).wait(4).call(this.frame_996).wait(47).call(this.frame_1043).wait(56).call(this.frame_1099).wait(143).call(this.frame_1242).wait(1));
	
		// Layer_54
		this.button_q = new lib.Symbol1();
		this.button_q.name = "button_q";
		this.button_q.setTransform(506.15,469.25,1,1,0,0,0,176.9,176.9);
		new cjs.ButtonHelper(this.button_q, 0, 1, 2, false, new lib.Symbol1(), 3);
	
		this.button_aa = new lib.Symbol2();
		this.button_aa.name = "button_aa";
		this.button_aa.setTransform(506.9,454.55,1,1,0,0,0,143.8,143.8);
		new cjs.ButtonHelper(this.button_aa, 0, 1, 2, false, new lib.Symbol2(), 3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.button_q}]},798).to({state:[]},84).to({state:[{t:this.button_aa}]},114).to({state:[]},73).wait(174));
	
		// 图层_23
		this.button_qqq = new lib.元件21();
		this.button_qqq.name = "button_qqq";
		this.button_qqq.setTransform(1286,359.9,1.4268,0.9699);
		this.button_qqq._off = true;
		new cjs.ButtonHelper(this.button_qqq, 0, 1, 2, false, new lib.元件21(), 3);
	
		this.timeline.addTween(cjs.Tween.get(this.button_qqq).wait(1099).to({_off:false},0).wait(144));
	
		// 图层_21
		this.instance = new lib.元件22("synched",0);
		this.instance.setTransform(1245.9,360,1,1,-90);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1086).to({_off:false},0).wait(157));
	
		// 图层_19
		this.instance_1 = new lib.元件13("synched",0);
		this.instance_1.setTransform(662.4,300.55,20.8307,20.8307,0,0,0,1.1,1.1);
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1086).to({_off:false},0).to({alpha:0.3281},8).to({alpha:0},4).to({_off:true},1).wait(144));
	
		// 图层_20
		this.instance_2 = new lib.元件26("synched",0);
		this.instance_2.setTransform(305.6,107.05);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1099).to({_off:false},0).to({alpha:1},11).wait(133));
	
		// 图层_26
		this.instance_3 = new lib.元件50("synched",0);
		this.instance_3.setTransform(396.15,120.25);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1123).to({_off:false},0).to({alpha:1},11).wait(109));
	
		// 图层_1
		this.instance_4 = new lib._0000();
		this.instance_4.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_5 = new lib._0002png复制();
		this.instance_5.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_6 = new lib._0004png复制();
		this.instance_6.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_7 = new lib._0006png复制2();
		this.instance_7.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_8 = new lib._0008png复制();
		this.instance_8.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_9 = new lib._0010png复制2();
		this.instance_9.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_10 = new lib._0012png复制();
		this.instance_10.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_11 = new lib._0014png复制();
		this.instance_11.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_12 = new lib._0016png复制();
		this.instance_12.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_13 = new lib._0018png复制();
		this.instance_13.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_14 = new lib._0020png复制2();
		this.instance_14.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_15 = new lib._0022png复制();
		this.instance_15.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_16 = new lib._0024png复制2();
		this.instance_16.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_17 = new lib._0026png复制();
		this.instance_17.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_18 = new lib._0028png复制();
		this.instance_18.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_19 = new lib._0030png复制();
		this.instance_19.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_20 = new lib._0032();
		this.instance_20.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_21 = new lib._0034();
		this.instance_21.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_22 = new lib._0036();
		this.instance_22.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_23 = new lib._0038();
		this.instance_23.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_24 = new lib._0040();
		this.instance_24.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_25 = new lib._0042();
		this.instance_25.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_26 = new lib._0044();
		this.instance_26.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_27 = new lib._0046();
		this.instance_27.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_28 = new lib._0048();
		this.instance_28.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_29 = new lib._0050();
		this.instance_29.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_30 = new lib._0052();
		this.instance_30.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_31 = new lib._0054();
		this.instance_31.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_32 = new lib._0056();
		this.instance_32.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_33 = new lib._0058();
		this.instance_33.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_34 = new lib._0060();
		this.instance_34.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_35 = new lib._0062();
		this.instance_35.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_36 = new lib._0064();
		this.instance_36.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_37 = new lib._0066();
		this.instance_37.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_38 = new lib._0068();
		this.instance_38.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_39 = new lib._0070();
		this.instance_39.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_40 = new lib._0072();
		this.instance_40.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_41 = new lib._0074();
		this.instance_41.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_42 = new lib._0076();
		this.instance_42.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_43 = new lib._0078();
		this.instance_43.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_44 = new lib._0080();
		this.instance_44.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_45 = new lib._0082();
		this.instance_45.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_46 = new lib._0084();
		this.instance_46.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_47 = new lib._0086();
		this.instance_47.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_48 = new lib._0088();
		this.instance_48.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_49 = new lib._0090();
		this.instance_49.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_50 = new lib._0092();
		this.instance_50.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_51 = new lib._0094();
		this.instance_51.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_52 = new lib._0096();
		this.instance_52.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_53 = new lib._0098();
		this.instance_53.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_54 = new lib._0100();
		this.instance_54.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_55 = new lib._0102();
		this.instance_55.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_56 = new lib._0104();
		this.instance_56.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_57 = new lib._0106();
		this.instance_57.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_58 = new lib._0108();
		this.instance_58.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_59 = new lib._0110();
		this.instance_59.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_60 = new lib._0112();
		this.instance_60.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_61 = new lib._0114();
		this.instance_61.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_62 = new lib._0116();
		this.instance_62.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_63 = new lib._0118();
		this.instance_63.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_64 = new lib._0120();
		this.instance_64.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_65 = new lib._0122();
		this.instance_65.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_66 = new lib._0124();
		this.instance_66.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_67 = new lib._0126();
		this.instance_67.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_68 = new lib._0128();
		this.instance_68.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_69 = new lib._0130();
		this.instance_69.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_70 = new lib._0132();
		this.instance_70.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_71 = new lib._0134();
		this.instance_71.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_72 = new lib._0136();
		this.instance_72.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_73 = new lib._0138();
		this.instance_73.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_74 = new lib._0140();
		this.instance_74.setTransform(0,-35,1.0984,1.0985);
	
		this.instance_75 = new lib._0142();
		this.instance_75.setTransform(0,-35,1.0984,1.0985);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1086).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},2).to({state:[{t:this.instance_18}]},2).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},2).to({state:[{t:this.instance_36}]},2).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_38}]},2).to({state:[{t:this.instance_39}]},2).to({state:[{t:this.instance_40}]},2).to({state:[{t:this.instance_41}]},2).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_43}]},2).to({state:[{t:this.instance_44}]},2).to({state:[{t:this.instance_45}]},2).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_47}]},2).to({state:[{t:this.instance_48}]},2).to({state:[{t:this.instance_49}]},2).to({state:[{t:this.instance_50}]},2).to({state:[{t:this.instance_51}]},2).to({state:[{t:this.instance_52}]},2).to({state:[{t:this.instance_53}]},2).to({state:[{t:this.instance_54}]},2).to({state:[{t:this.instance_55}]},2).to({state:[{t:this.instance_56}]},2).to({state:[{t:this.instance_57}]},2).to({state:[{t:this.instance_58}]},2).to({state:[{t:this.instance_59}]},2).to({state:[{t:this.instance_60}]},2).to({state:[{t:this.instance_61}]},2).to({state:[{t:this.instance_62}]},2).to({state:[{t:this.instance_63}]},2).to({state:[{t:this.instance_64}]},2).to({state:[{t:this.instance_65}]},2).to({state:[{t:this.instance_66}]},2).to({state:[{t:this.instance_67}]},2).to({state:[{t:this.instance_68}]},2).to({state:[{t:this.instance_69}]},2).to({state:[{t:this.instance_70}]},2).to({state:[{t:this.instance_71}]},2).to({state:[{t:this.instance_72}]},2).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).wait(2));
	
		// 图层_3_复制
		this.instance_76 = new lib.元件13("synched",0);
		this.instance_76.setTransform(505.1,454.05);
		this.instance_76.alpha = 0;
		this.instance_76._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(1079).to({_off:false},0).to({scaleX:21.8811,scaleY:21.8811,alpha:1},7).to({alpha:0},8).to({_off:true},1).wait(148));
	
		// 图层_4_复制
		this.instance_77 = new lib.元件5复制6("synched",0);
		this.instance_77.setTransform(503.25,443.6,0.7932,0.7932,0,0,0,0.1,0.1);
		this.instance_77._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(995).to({_off:false},0).wait(50).to({startPosition:0},0).to({regX:3.1,scaleX:0.0159,x:503.15},4).to({regX:0.1,scaleX:0.7932,x:503.25},5).to({regX:3.1,scaleX:0.0159,x:503.15},4).to({regX:0.1,scaleX:0.7932,x:503.25},5).to({regX:3.1,scaleX:0.0159,x:503.15},6).to({regX:0.1,scaleX:0.7932,x:503.25},5).to({regX:3.1,scaleX:0.0159,x:503.15},4).to({regX:0.1,scaleX:0.7932,x:503.25},5).to({_off:true},4).wait(156));
	
		// 图层_5_复制
		this.instance_78 = new lib.元件63("synched",0);
		this.instance_78.setTransform(1028.5,207.7,0.89,0.89);
		this.instance_78._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(995).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:503.15,y:443.6,alpha:0},13).to({_off:true},15).wait(156));
	
		// 图层_7_复制
		this.instance_79 = new lib.元件8复制5("synched",0);
		this.instance_79.setTransform(394.5,198.9,0.89,0.89);
		this.instance_79._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(995).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:503.15,y:443.6,alpha:0},13).to({_off:true},15).wait(156));
	
		// 图层_6_复制
		this.instance_80 = new lib.元件7复制4("synched",0);
		this.instance_80.setTransform(626.1,270.3,0.89,0.89);
		this.instance_80._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(995).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:503.15,y:443.6,alpha:0},13).to({_off:true},15).wait(156));
	
		// 图层_5_复制
		this.instance_81 = new lib.元件3复制5("synched",0);
		this.instance_81.setTransform(935.35,368.65,0.89,0.89);
		this.instance_81._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_81).wait(995).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:503.15,y:443.6,alpha:0},13).to({_off:true},15).wait(156));
	
		// 手_复制
		this.instance_82 = new lib.元件4复制5("synched",0);
		this.instance_82.setTransform(801.25,161.35,0.89,0.89);
		this.instance_82._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_82).wait(995).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:503.15,y:440.65,alpha:0},13).to({_off:true},15).wait(156));
	
		// 图层_35_复制
		this.instance_83 = new lib.元件59("synched",0);
		this.instance_83.setTransform(712.1,526.45,0.7177,0.7177,0,0,180);
	
		this.instance_84 = new lib.元件60("synched",0);
		this.instance_84.setTransform(711.75,526.45,0.7177,0.7177,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_83}]},995).to({state:[{t:this.instance_84}]},7).to({state:[{t:this.instance_83}]},7).to({state:[{t:this.instance_84}]},7).to({state:[{t:this.instance_83}]},7).to({state:[]},64).wait(156));
	
		// 图层_46_复制
		this.instance_85 = new lib.CachedBmp_1();
		this.instance_85.setTransform(456.65,534.6);
		this.instance_85._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_85).wait(995).to({_off:false},0).to({_off:true},92).wait(156));
	
		// 图层_45_复制
		this.instance_86 = new lib.元件61("synched",0);
		this.instance_86.setTransform(503.15,443.5,0.8662,0.8662);
		this.instance_86.alpha = 0.6211;
		this.instance_86._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_86).wait(1004).to({_off:false},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).wait(8).to({regY:0,scaleX:0.8662,scaleY:0.8662,y:443.5,alpha:0.6211},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).to({_off:true},1).wait(210));
	
		// 图层_43_复制
		this.instance_87 = new lib.元件62("synched",0);
		this.instance_87.setTransform(503.25,443.6,0.8339,0.8339,0,0,0,0.2,0.1);
		this.instance_87.alpha = 0.4297;
		this.instance_87._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_87).wait(1001).to({_off:false},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:503.3,y:443.7,alpha:0},9).wait(9).to({regY:0.1,scaleX:0.8339,scaleY:0.8339,x:503.25,y:443.6,alpha:0.4297},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:503.3,y:443.7,alpha:0},9).to({_off:true},5).wait(210));
	
		// 图层_8_复制
		this.instance_88 = new lib.元件15("synched",0);
		this.instance_88.setTransform(-86.45,349);
		this.instance_88.alpha = 0.4883;
		this.instance_88._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_88).wait(995).to({_off:false},0).to({_off:true},92).wait(156));
	
		// 图层_14
		this.button_qq = new lib.元件21();
		this.button_qq.name = "button_qq";
		this.button_qq.setTransform(1286,359.95,1.4269,0.9699);
		this.button_qq._off = true;
		new cjs.ButtonHelper(this.button_qq, 0, 1, 2, false, new lib.元件21(), 3);
	
		this.timeline.addTween(cjs.Tween.get(this.button_qq).wait(896).to({_off:false},0).to({_off:true},97).wait(250));
	
		// 图层_16
		this.instance_89 = new lib.元件22("synched",0);
		this.instance_89.setTransform(1245.9,360,1,1,-90);
		this.instance_89._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_89).wait(896).to({_off:false},0).to({_off:true},97).wait(250));
	
		// 图层_11
		this.instance_90 = new lib.元件25("synched",0);
		this.instance_90.setTransform(704.25,639.15);
		this.instance_90.alpha = 0;
		this.instance_90._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_90).wait(896).to({_off:false},0).to({alpha:1},8).to({_off:true},89).wait(250));
	
		// 图层_25
		this.instance_91 = new lib.元件48("synched",0);
		this.instance_91.setTransform(703,662.6);
		this.instance_91.alpha = 0;
		this.instance_91._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_91).wait(915).to({_off:false},0).to({alpha:1},8).to({_off:true},70).wait(250));
	
		// 图层_1
		this.instance_92 = new lib._0001png复制();
		this.instance_92.setTransform(30,-41);
	
		this.instance_93 = new lib._0002();
		this.instance_93.setTransform(30,-41);
	
		this.instance_94 = new lib._0003();
		this.instance_94.setTransform(30,-41);
	
		this.instance_95 = new lib._0004();
		this.instance_95.setTransform(30,-41);
	
		this.instance_96 = new lib._0005();
		this.instance_96.setTransform(30,-41);
	
		this.instance_97 = new lib._0006png复制();
		this.instance_97.setTransform(30,-41);
	
		this.instance_98 = new lib._0007png复制();
		this.instance_98.setTransform(30,-41);
	
		this.instance_99 = new lib._0008();
		this.instance_99.setTransform(30,-41);
	
		this.instance_100 = new lib._0009();
		this.instance_100.setTransform(30,-41);
	
		this.instance_101 = new lib._0010png复制();
		this.instance_101.setTransform(30,-41);
	
		this.instance_102 = new lib._0011();
		this.instance_102.setTransform(30,-41);
	
		this.instance_103 = new lib._0012();
		this.instance_103.setTransform(30,-41);
	
		this.instance_104 = new lib._0013();
		this.instance_104.setTransform(30,-41);
	
		this.instance_105 = new lib._0014();
		this.instance_105.setTransform(30,-41);
	
		this.instance_106 = new lib._0015();
		this.instance_106.setTransform(30,-41);
	
		this.instance_107 = new lib._0016();
		this.instance_107.setTransform(30,-41);
	
		this.instance_108 = new lib._0017();
		this.instance_108.setTransform(30,-41);
	
		this.instance_109 = new lib._0018();
		this.instance_109.setTransform(30,-41);
	
		this.instance_110 = new lib._0019();
		this.instance_110.setTransform(30,-41);
	
		this.instance_111 = new lib._0020png复制();
		this.instance_111.setTransform(30,-41);
	
		this.instance_112 = new lib._0021();
		this.instance_112.setTransform(30,-41);
	
		this.instance_113 = new lib._0022();
		this.instance_113.setTransform(30,-41);
	
		this.instance_114 = new lib._0023png复制();
		this.instance_114.setTransform(30,-41);
	
		this.instance_115 = new lib._0024png复制();
		this.instance_115.setTransform(30,-41);
	
		this.instance_116 = new lib._0025();
		this.instance_116.setTransform(30,-41);
	
		this.instance_117 = new lib._0026();
		this.instance_117.setTransform(30,-41);
	
		this.instance_118 = new lib._0027();
		this.instance_118.setTransform(30,-41);
	
		this.instance_119 = new lib._0028();
		this.instance_119.setTransform(30,-41);
	
		this.instance_120 = new lib._0029();
		this.instance_120.setTransform(30,-41);
	
		this.instance_121 = new lib._0030();
		this.instance_121.setTransform(30,-41);
	
		this.instance_122 = new lib._0031();
		this.instance_122.setTransform(30,-41);
	
		this.instance_123 = new lib._0032_1();
		this.instance_123.setTransform(30,-41);
	
		this.instance_124 = new lib._0033();
		this.instance_124.setTransform(30,-41);
	
		this.instance_125 = new lib._0034_1();
		this.instance_125.setTransform(30,-41);
	
		this.instance_126 = new lib._0035();
		this.instance_126.setTransform(30,-41);
	
		this.instance_127 = new lib._0036_1();
		this.instance_127.setTransform(30,-41);
	
		this.instance_128 = new lib._0037();
		this.instance_128.setTransform(30,-41);
	
		this.instance_129 = new lib._0038_1();
		this.instance_129.setTransform(30,-41);
	
		this.instance_130 = new lib._0039();
		this.instance_130.setTransform(30,-41);
	
		this.instance_131 = new lib._0040_1();
		this.instance_131.setTransform(30,-41);
	
		this.instance_132 = new lib._0041();
		this.instance_132.setTransform(30,-41);
	
		this.instance_133 = new lib._0042_1();
		this.instance_133.setTransform(30,-41);
	
		this.instance_134 = new lib._0043();
		this.instance_134.setTransform(30,-41);
	
		this.instance_135 = new lib._0044_1();
		this.instance_135.setTransform(30,-41);
	
		this.instance_136 = new lib._0045();
		this.instance_136.setTransform(30,-41);
	
		this.instance_137 = new lib._0046_1();
		this.instance_137.setTransform(30,-41);
	
		this.instance_138 = new lib._0047();
		this.instance_138.setTransform(30,-41);
	
		this.instance_139 = new lib._0048_1();
		this.instance_139.setTransform(30,-41);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_92}]},896).to({state:[{t:this.instance_93}]},2).to({state:[{t:this.instance_94}]},2).to({state:[{t:this.instance_95}]},3).to({state:[{t:this.instance_96}]},3).to({state:[{t:this.instance_97}]},2).to({state:[{t:this.instance_98}]},2).to({state:[{t:this.instance_99}]},2).to({state:[{t:this.instance_100}]},2).to({state:[{t:this.instance_101}]},2).to({state:[{t:this.instance_102}]},2).to({state:[{t:this.instance_103}]},2).to({state:[{t:this.instance_104}]},2).to({state:[{t:this.instance_105}]},2).to({state:[{t:this.instance_106}]},2).to({state:[{t:this.instance_107}]},2).to({state:[{t:this.instance_108}]},2).to({state:[{t:this.instance_109}]},2).to({state:[{t:this.instance_110}]},2).to({state:[{t:this.instance_111}]},2).to({state:[{t:this.instance_112}]},2).to({state:[{t:this.instance_113}]},2).to({state:[{t:this.instance_114}]},2).to({state:[{t:this.instance_115}]},2).to({state:[{t:this.instance_116}]},2).to({state:[{t:this.instance_117}]},2).to({state:[{t:this.instance_118}]},2).to({state:[{t:this.instance_119}]},2).to({state:[{t:this.instance_120}]},2).to({state:[{t:this.instance_121}]},2).to({state:[{t:this.instance_122}]},2).to({state:[{t:this.instance_123}]},2).to({state:[{t:this.instance_124}]},2).to({state:[{t:this.instance_125}]},2).to({state:[{t:this.instance_126}]},2).to({state:[{t:this.instance_127}]},2).to({state:[{t:this.instance_128}]},2).to({state:[{t:this.instance_129}]},2).to({state:[{t:this.instance_130}]},2).to({state:[{t:this.instance_131}]},2).to({state:[{t:this.instance_132}]},2).to({state:[{t:this.instance_133}]},2).to({state:[{t:this.instance_134}]},2).to({state:[{t:this.instance_135}]},2).to({state:[{t:this.instance_136}]},2).to({state:[{t:this.instance_137}]},2).to({state:[{t:this.instance_138}]},2).to({state:[{t:this.instance_139}]},2).to({state:[]},1).wait(250));
	
		// 图层_10
		this.instance_140 = new lib.元件20("synched",0);
		this.instance_140.setTransform(703,360,0.8079,0.8559);
		this.instance_140.alpha = 0;
		this.instance_140._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_140).wait(888).to({_off:false},0).to({alpha:1},8).to({_off:true},97).wait(250));
	
		// 图层_3
		this.instance_141 = new lib.元件13("synched",0);
		this.instance_141.setTransform(527,454.05);
		this.instance_141.alpha = 0;
		this.instance_141._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_141).wait(878).to({_off:false},0).to({scaleX:21.8811,scaleY:21.8811,alpha:1},7).to({alpha:0},8).to({_off:true},1).wait(349));
	
		// 图层_4
		this.instance_142 = new lib.元件5("synched",0);
		this.instance_142.setTransform(525.15,443.6,0.7932,0.7932,0,0,0,0.1,0.1);
		this.instance_142._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_142).wait(794).to({_off:false},0).wait(50).to({startPosition:0},0).to({regX:3.1,scaleX:0.0159,x:525.05},4).to({regX:0.1,scaleX:0.7932,x:525.15},5).to({regX:3.1,scaleX:0.0159,x:525.05},4).to({regX:0.1,scaleX:0.7932,x:525.15},5).to({regX:3.1,scaleX:0.0159,x:525.05},6).to({regX:0.1,scaleX:0.7932,x:525.15},5).to({regX:3.1,scaleX:0.0159,x:525.05},4).to({regX:0.1,scaleX:0.7932,x:525.15},5).to({_off:true},3).wait(358));
	
		// 图层_7
		this.instance_143 = new lib.元件8("synched",0);
		this.instance_143.setTransform(416.4,198.9,0.89,0.89);
		this.instance_143._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_143).wait(794).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:525.05,y:443.6,alpha:0},13).to({_off:true},14).wait(358));
	
		// 图层_6
		this.instance_144 = new lib.元件7("synched",0);
		this.instance_144.setTransform(648,270.3,0.89,0.89);
		this.instance_144._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_144).wait(794).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:525.05,y:443.6,alpha:0},13).to({_off:true},14).wait(358));
	
		// 图层_5
		this.instance_145 = new lib.元件3("synched",0);
		this.instance_145.setTransform(1026.3,376.3,0.89,0.89);
		this.instance_145._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_145).wait(794).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:525.05,y:443.6,alpha:0},13).to({_off:true},14).wait(358));
	
		// 手
		this.instance_146 = new lib.元件4("synched",0);
		this.instance_146.setTransform(920.3,169.3,0.89,0.89);
		this.instance_146._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_146).wait(794).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:525.05,y:440.65,alpha:0},13).to({_off:true},14).wait(358));
	
		// 图层_35
		this.instance_147 = new lib.元件59("synched",0);
		this.instance_147.setTransform(734,526.45,0.7177,0.7177,0,0,180);
	
		this.instance_148 = new lib.元件60("synched",0);
		this.instance_148.setTransform(733.65,526.45,0.7177,0.7177,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_147}]},794).to({state:[{t:this.instance_148}]},7).to({state:[{t:this.instance_147}]},7).to({state:[{t:this.instance_148}]},7).to({state:[{t:this.instance_147}]},7).to({state:[]},63).wait(358));
	
		// 图层_46
		this.instance_149 = new lib.CachedBmp_2();
		this.instance_149.setTransform(478.55,534.6);
		this.instance_149._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_149).wait(794).to({_off:false},0).to({_off:true},91).wait(358));
	
		// 图层_45
		this.instance_150 = new lib.元件61("synched",0);
		this.instance_150.setTransform(525.05,443.5,0.8662,0.8662);
		this.instance_150.alpha = 0.6211;
		this.instance_150._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_150).wait(803).to({_off:false},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).wait(8).to({regY:0,scaleX:0.8662,scaleY:0.8662,y:443.5,alpha:0.6211},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).to({_off:true},1).wait(411));
	
		// 图层_43
		this.instance_151 = new lib.元件62("synched",0);
		this.instance_151.setTransform(525.15,443.6,0.8339,0.8339,0,0,0,0.2,0.1);
		this.instance_151.alpha = 0.4297;
		this.instance_151._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_151).wait(800).to({_off:false},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:525.2,y:443.7,alpha:0},9).wait(9).to({regY:0.1,scaleX:0.8339,scaleY:0.8339,x:525.15,y:443.6,alpha:0.4297},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:525.2,y:443.7,alpha:0},9).to({_off:true},5).wait(411));
	
		// 图层_8
		this.instance_152 = new lib.元件15("synched",0);
		this.instance_152.setTransform(-64.55,349);
		this.instance_152.alpha = 0.4883;
		this.instance_152._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_152).wait(794).to({_off:false},0).to({_off:true},91).wait(358));
	
		// 按钮
		this.movieClip_u = new lib.元件19();
		this.movieClip_u.name = "movieClip_u";
		this.movieClip_u.setTransform(703,489.5);
		this.movieClip_u._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.movieClip_u).wait(792).to({_off:false},0).to({_off:true},1).wait(450));
	
		// 图层_13
		this.instance_153 = new lib.CachedBmp_3();
		this.instance_153.setTransform(505.55,272.35);
		this.instance_153._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_153).wait(792).to({_off:false},0).to({_off:true},1).wait(450));
	
		// 图层_12
		this.instance_154 = new lib.CachedBmp_4();
		this.instance_154.setTransform(227.75,176.75);
		this.instance_154._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_154).wait(792).to({_off:false},0).to({_off:true},1).wait(450));
	
		// 图层_41
		this.instance_155 = new lib.元件46("synched",0);
		this.instance_155.setTransform(701.55,231.25);
		this.instance_155.alpha = 0;
		this.instance_155._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_155).wait(748).to({_off:false},0).to({alpha:1},7).wait(28).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(451));
	
		// 图层_3
		this.instance_156 = new lib.元件3复制9("synched",0);
		this.instance_156.setTransform(693.9,378.9);
		this.instance_156.alpha = 0;
		this.instance_156._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_156).wait(735).to({_off:false},0).to({alpha:1},7).wait(41).to({alpha:0.8594},0).to({alpha:0},8).to({_off:true},1).wait(451));
	
		// 图层_3
		this.instance_157 = new lib.元件2复制10("synched",0);
		this.instance_157.setTransform(741.45,211.2,0.1556,0.1556);
		this.instance_157.alpha = 0.5;
		this.instance_157._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_157).wait(702).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},3).wait(20).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(511));
	
		// 图层_2
		this.instance_158 = new lib.元件1复制11("synched",0);
		this.instance_158.setTransform(-227.25,387.45);
		this.instance_158._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_158).wait(678).to({_off:false},0).wait(11).to({startPosition:0},0).to({x:447.45},10).to({x:432.4},3).wait(23).to({startPosition:0},0).to({alpha:0},6).to({_off:true},1).wait(511));
	
		// 图层_1
		this.instance_159 = new lib.jusang();
		this.instance_159.setTransform(792,271,0.7997,0.7997);
	
		this.instance_160 = new lib.补间15("synched",0);
		this.instance_160.setTransform(971.15,419.35);
		this.instance_160._off = true;
	
		this.instance_161 = new lib.补间16("synched",0);
		this.instance_161.setTransform(971.15,419.35);
		this.instance_161.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_159}]},678).to({state:[{t:this.instance_159}]},11).to({state:[{t:this.instance_160}]},36).to({state:[{t:this.instance_161}]},6).to({state:[]},1).wait(511));
		this.timeline.addTween(cjs.Tween.get(this.instance_160).wait(725).to({_off:false},0).to({_off:true,alpha:0},6).wait(512));
	
		// 图层_8
		this.button_y = new lib.元件8复制2();
		this.button_y.name = "button_y";
		this.button_y.setTransform(1276,359.95,1.5458,0.9699);
		this.button_y._off = true;
		new cjs.ButtonHelper(this.button_y, 0, 1, 2, false, new lib.元件8复制2(), 3);
	
		this.timeline.addTween(cjs.Tween.get(this.button_y).wait(572).to({_off:false},0).to({_off:true},105).wait(566));
	
		// 图层_9
		this.instance_162 = new lib.元件5复制4("synched",0);
		this.instance_162.setTransform(676.75,160.4,0.7103,0.7103);
		this.instance_162._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_162).wait(632).to({_off:false},0).wait(31).to({mode:"single"},0).to({_off:true},14).wait(566));
	
		// 图层_7
		this.instance_163 = new lib.luan();
		this.instance_163.setTransform(584,141,0.7103,0.7103);
		this.instance_163._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_163).wait(623).to({_off:false},0).to({_off:true},54).wait(566));
	
		// 图层_6
		this.instance_164 = new lib.bc2();
		this.instance_164.setTransform(572,141,0.7103,0.7103);
		this.instance_164._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_164).wait(581).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).to({_off:true},10).wait(632));
	
		// 图层_5
		this.instance_165 = new lib.bc1();
		this.instance_165.setTransform(572,141,0.7103,0.7103);
		this.instance_165._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_165).wait(572).to({_off:false},0).to({_off:true},9).wait(10).to({_off:false},0).to({_off:true},10).wait(10).to({_off:false},0).wait(10).to({_off:true},56).wait(566));
	
		// 图层_4
		this.instance_166 = new lib.元件1复制9("synched",0);
		this.instance_166.setTransform(817.9,300.15,0.7103,0.7103,0,0,0,0,9.6);
		this.instance_166._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_166).wait(572).to({_off:false},0).to({rotation:2160},104).to({_off:true},1).wait(566));
	
		// 图层_3
		this.instance_167 = new lib.元件2复制8("synched",0);
		this.instance_167.setTransform(817.9,299.75,0.7103,0.7103,0,0,0,-7,0);
		this.instance_167._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_167).wait(572).to({_off:false},0).to({regX:-7.2,regY:-0.1,scaleX:0.7102,scaleY:0.7102,rotation:201.4937,y:299.8},104).to({_off:true},1).wait(566));
	
		// 图层_2
		this.instance_168 = new lib.biao();
		this.instance_168.setTransform(788,270,0.7103,0.7103);
		this.instance_168._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_168).wait(572).to({_off:false},0).to({_off:true},105).wait(566));
	
		// 图层_1
		this.instance_169 = new lib.bgpng复制();
		this.instance_169.setTransform(470,85,0.7103,0.7103);
		this.instance_169._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_169).wait(572).to({_off:false},0).to({_off:true},105).wait(566));
	
		// webzi_复制
		this.instance_170 = new lib.元件4复制13("synched",0);
		this.instance_170.setTransform(686,627.05);
		this.instance_170.alpha = 0;
		this.instance_170._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_170).wait(572).to({_off:false},0).to({alpha:1,mode:"independent"},9).to({_off:true},96).wait(566));
	
		// webzi
		this.instance_171 = new lib.元件4复制7("synched",0);
		this.instance_171.setTransform(686,680.7);
		this.instance_171.alpha = 0;
		this.instance_171._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_171).wait(600).to({_off:false},0).to({alpha:1,mode:"independent"},11).to({_off:true},66).wait(566));
	
		// wenzi
		this.instance_172 = new lib.最优化倾向();
		this.instance_172.setTransform(1095,262,0.3789,0.3789);
		this.instance_172._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_172).wait(572).to({_off:false},0).to({_off:true},105).wait(566));
	
		// 右侧
		this.instance_173 = new lib.元件72("synched",0);
		this.instance_173.setTransform(1001.55,320.05);
		this.instance_173._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_173).wait(572).to({_off:false},0).to({_off:true},105).wait(566));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(-84,-592.4,1953.6,2338.6);
	// library properties:
	// lib.properties = {
	// 	id: 'A8A058922FCC493990D91243D07CB0A8',
	// 	width: 1406,
	// 	height: 720,
	// 	fps: 24,
	// 	color: "#1B1E2B",
	// 	opacity: 1.00,
	// 	manifest: [
	// 		{src:"images/bgm.png", id:"bgm"},
	// 		{src:"images/kanbian_atlas_1.png", id:"kanbian_atlas_1"},
	// 		{src:"images/kanbian_atlas_2.png", id:"kanbian_atlas_2"},
	// 		{src:"images/kanbian_atlas_3.png", id:"kanbian_atlas_3"},
	// 		{src:"images/kanbian_atlas_4.png", id:"kanbian_atlas_4"},
	// 		{src:"images/kanbian_atlas_5.png", id:"kanbian_atlas_5"},
	// 		{src:"images/kanbian_atlas_6.png", id:"kanbian_atlas_6"},
	// 		{src:"images/kanbian_atlas_7.png", id:"kanbian_atlas_7"},
	// 		{src:"images/kanbian_atlas_8.png", id:"kanbian_atlas_8"},
	// 		{src:"images/kanbian_atlas_9.png", id:"kanbian_atlas_9"},
	// 		{src:"images/kanbian_atlas_10.png", id:"kanbian_atlas_10"},
	// 		{src:"images/kanbian_atlas_11.png", id:"kanbian_atlas_11"},
	// 		{src:"images/kanbian_atlas_12.png", id:"kanbian_atlas_12"},
	// 		{src:"images/kanbian_atlas_13.png", id:"kanbian_atlas_13"},
	// 		{src:"images/kanbian_atlas_14.png", id:"kanbian_atlas_14"},
	// 		{src:"images/kanbian_atlas_15.png", id:"kanbian_atlas_15"},
	// 		{src:"images/kanbian_atlas_16.png", id:"kanbian_atlas_16"},
	// 		{src:"images/kanbian_atlas_17.png", id:"kanbian_atlas_17"},
	// 		{src:"images/kanbian_atlas_18.png", id:"kanbian_atlas_18"},
	// 		{src:"images/kanbian_atlas_19.png", id:"kanbian_atlas_19"},
	// 		{src:"images/kanbian_atlas_20.png", id:"kanbian_atlas_20"},
	// 		{src:"images/kanbian_atlas_21.png", id:"kanbian_atlas_21"},
	// 		{src:"images/kanbian_atlas_22.png", id:"kanbian_atlas_22"},
	// 		{src:"images/kanbian_atlas_23.png", id:"kanbian_atlas_23"},
	// 		{src:"images/kanbian_atlas_24.png", id:"kanbian_atlas_24"},
	// 		{src:"images/kanbian_atlas_25.png", id:"kanbian_atlas_25"},
	// 		{src:"images/kanbian_atlas_26.png", id:"kanbian_atlas_26"},
	// 		{src:"images/kanbian_atlas_27.png", id:"kanbian_atlas_27"},
	// 		{src:"images/kanbian_atlas_28.png", id:"kanbian_atlas_28"},
	// 		{src:"images/kanbian_atlas_29.png", id:"kanbian_atlas_29"},
	// 		{src:"images/kanbian_atlas_30.png", id:"kanbian_atlas_30"},
	// 		{src:"images/kanbian_atlas_31.png", id:"kanbian_atlas_31"},
	// 		{src:"images/kanbian_atlas_32.png", id:"kanbian_atlas_32"},
	// 		{src:"images/kanbian_atlas_33.png", id:"kanbian_atlas_33"},
	// 		{src:"images/kanbian_atlas_34.png", id:"kanbian_atlas_34"},
	// 		{src:"images/kanbian_atlas_35.png", id:"kanbian_atlas_35"},
	// 		{src:"images/kanbian_atlas_36.png", id:"kanbian_atlas_36"},
	// 		{src:"images/kanbian_atlas_37.png", id:"kanbian_atlas_37"},
	// 		{src:"images/kanbian_atlas_38.png", id:"kanbian_atlas_38"},
	// 		{src:"images/kanbian_atlas_39.png", id:"kanbian_atlas_39"},
	// 		{src:"images/kanbian_atlas_40.png", id:"kanbian_atlas_40"},
	// 		{src:"images/kanbian_atlas_41.png", id:"kanbian_atlas_41"},
	// 		{src:"images/kanbian_atlas_42.png", id:"kanbian_atlas_42"},
	// 		{src:"images/kanbian_atlas_43.png", id:"kanbian_atlas_43"},
	// 		{src:"images/kanbian_atlas_44.png", id:"kanbian_atlas_44"},
	// 		{src:"images/kanbian_atlas_45.png", id:"kanbian_atlas_45"},
	// 		{src:"images/kanbian_atlas_46.png", id:"kanbian_atlas_46"},
	// 		{src:"images/kanbian_atlas_47.png", id:"kanbian_atlas_47"},
	// 		{src:"images/kanbian_atlas_48.png", id:"kanbian_atlas_48"},
	// 		{src:"images/kanbian_atlas_49.png", id:"kanbian_atlas_49"},
	// 		{src:"images/kanbian_atlas_50.png", id:"kanbian_atlas_50"},
	// 		{src:"images/kanbian_atlas_51.png", id:"kanbian_atlas_51"},
	// 		{src:"images/kanbian_atlas_52.png", id:"kanbian_atlas_52"},
	// 		{src:"images/kanbian_atlas_53.png", id:"kanbian_atlas_53"},
	// 		{src:"images/kanbian_atlas_54.png", id:"kanbian_atlas_54"},
	// 		{src:"images/kanbian_atlas_55.png", id:"kanbian_atlas_55"},
	// 		{src:"images/kanbian_atlas_56.png", id:"kanbian_atlas_56"},
	// 		{src:"images/kanbian_atlas_57.png", id:"kanbian_atlas_57"},
	// 		{src:"images/kanbian_atlas_58.png", id:"kanbian_atlas_58"},
	// 		{src:"images/kanbian_atlas_59.png", id:"kanbian_atlas_59"},
	// 		{src:"images/kanbian_atlas_60.png", id:"kanbian_atlas_60"},
	// 		{src:"images/kanbian_atlas_61.png", id:"kanbian_atlas_61"},
	// 		{src:"images/kanbian_atlas_62.png", id:"kanbian_atlas_62"}
	// 	],
	// 	preloads: []
	// };
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
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
	an.compositions['A8A058922FCC493990D91243D07CB0A8'] = {
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