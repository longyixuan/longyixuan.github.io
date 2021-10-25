function getLib4 (cjs, an) {
    console.log('加载动画4')
    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [
            {name:"part4_atlas_1", frames: [[1170,806,59,82],[0,827,509,58],[0,887,520,52],[0,722,843,58],[0,782,837,43],[1258,722,18,45],[1170,722,86,82],[1170,890,59,82],[522,827,162,60],[845,722,202,202],[686,827,59,82],[1049,722,119,119],[747,827,59,82],[1049,843,119,119],[522,889,93,24],[0,0,1280,720],[1282,448,394,446],[1282,0,395,446]]},
            {name:"part4_atlas_2", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_3", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_4", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_5", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_6", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_7", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_8", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_9", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_10", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_11", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_12", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_13", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_14", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_15", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_16", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_17", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_18", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_19", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_20", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_21", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_22", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_23", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_24", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_25", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_26", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_27", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_28", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_29", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_30", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_31", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_32", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_33", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_34", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_35", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_36", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_37", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_38", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_39", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_40", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_41", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_42", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_43", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_44", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_45", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_46", frames: [[0,0,1280,720],[0,722,1280,720]]},
            {name:"part4_atlas_47", frames: [[0,0,1280,720],[0,722,1280,720]]}
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
    
    
    
    (lib.CachedBmp_18 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_16 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_15 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(2);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_14 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(3);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_13 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(4);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_12 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(5);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_11 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(6);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_9 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(7);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_7 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(8);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_6 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(9);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_5 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(10);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_4 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(11);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_3 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(12);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_17 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(13);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.CachedBmp_1 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(14);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0000 = function() {
        this.initialize(ss["part4_atlas_47"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0001 = function() {
        this.initialize(ss["part4_atlas_47"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0002 = function() {
        this.initialize(ss["part4_atlas_46"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0003 = function() {
        this.initialize(ss["part4_atlas_46"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0004 = function() {
        this.initialize(ss["part4_atlas_45"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0005 = function() {
        this.initialize(ss["part4_atlas_45"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0006 = function() {
        this.initialize(ss["part4_atlas_44"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0007 = function() {
        this.initialize(ss["part4_atlas_44"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0008 = function() {
        this.initialize(ss["part4_atlas_43"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0009 = function() {
        this.initialize(ss["part4_atlas_43"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0010 = function() {
        this.initialize(ss["part4_atlas_42"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0011 = function() {
        this.initialize(ss["part4_atlas_42"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0012 = function() {
        this.initialize(ss["part4_atlas_41"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0013 = function() {
        this.initialize(ss["part4_atlas_41"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0014 = function() {
        this.initialize(ss["part4_atlas_40"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0015 = function() {
        this.initialize(ss["part4_atlas_40"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0016 = function() {
        this.initialize(ss["part4_atlas_39"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0017 = function() {
        this.initialize(ss["part4_atlas_39"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0018 = function() {
        this.initialize(ss["part4_atlas_38"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0019 = function() {
        this.initialize(ss["part4_atlas_38"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0020 = function() {
        this.initialize(ss["part4_atlas_37"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0021 = function() {
        this.initialize(ss["part4_atlas_37"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0022 = function() {
        this.initialize(ss["part4_atlas_36"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0023 = function() {
        this.initialize(ss["part4_atlas_36"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0024 = function() {
        this.initialize(ss["part4_atlas_35"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0025 = function() {
        this.initialize(ss["part4_atlas_35"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0026 = function() {
        this.initialize(ss["part4_atlas_34"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0027 = function() {
        this.initialize(ss["part4_atlas_34"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0028 = function() {
        this.initialize(ss["part4_atlas_33"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0029 = function() {
        this.initialize(ss["part4_atlas_33"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0030 = function() {
        this.initialize(ss["part4_atlas_32"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0031 = function() {
        this.initialize(ss["part4_atlas_32"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0032 = function() {
        this.initialize(ss["part4_atlas_31"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0033 = function() {
        this.initialize(ss["part4_atlas_31"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0034 = function() {
        this.initialize(ss["part4_atlas_30"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0035 = function() {
        this.initialize(ss["part4_atlas_30"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0036 = function() {
        this.initialize(ss["part4_atlas_29"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0037 = function() {
        this.initialize(ss["part4_atlas_29"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0038 = function() {
        this.initialize(ss["part4_atlas_28"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0039 = function() {
        this.initialize(ss["part4_atlas_28"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0040 = function() {
        this.initialize(ss["part4_atlas_27"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0041 = function() {
        this.initialize(ss["part4_atlas_27"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0042 = function() {
        this.initialize(ss["part4_atlas_26"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0043 = function() {
        this.initialize(ss["part4_atlas_26"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0044 = function() {
        this.initialize(ss["part4_atlas_25"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0045 = function() {
        this.initialize(ss["part4_atlas_25"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0046 = function() {
        this.initialize(ss["part4_atlas_24"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0047 = function() {
        this.initialize(ss["part4_atlas_24"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0048 = function() {
        this.initialize(ss["part4_atlas_23"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0049 = function() {
        this.initialize(ss["part4_atlas_23"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0050 = function() {
        this.initialize(ss["part4_atlas_22"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0051 = function() {
        this.initialize(ss["part4_atlas_22"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0052 = function() {
        this.initialize(ss["part4_atlas_21"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0053 = function() {
        this.initialize(ss["part4_atlas_21"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0054 = function() {
        this.initialize(ss["part4_atlas_20"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0055 = function() {
        this.initialize(ss["part4_atlas_20"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0056 = function() {
        this.initialize(ss["part4_atlas_19"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0057 = function() {
        this.initialize(ss["part4_atlas_19"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0058 = function() {
        this.initialize(ss["part4_atlas_18"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0059 = function() {
        this.initialize(ss["part4_atlas_18"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0060 = function() {
        this.initialize(ss["part4_atlas_17"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0061 = function() {
        this.initialize(ss["part4_atlas_17"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0062 = function() {
        this.initialize(ss["part4_atlas_16"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0063 = function() {
        this.initialize(ss["part4_atlas_16"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0064 = function() {
        this.initialize(ss["part4_atlas_15"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0065 = function() {
        this.initialize(ss["part4_atlas_15"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0066 = function() {
        this.initialize(ss["part4_atlas_14"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0067 = function() {
        this.initialize(ss["part4_atlas_14"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0068 = function() {
        this.initialize(ss["part4_atlas_13"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0069 = function() {
        this.initialize(ss["part4_atlas_13"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0070 = function() {
        this.initialize(ss["part4_atlas_12"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0071 = function() {
        this.initialize(ss["part4_atlas_12"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0072 = function() {
        this.initialize(ss["part4_atlas_11"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0073 = function() {
        this.initialize(ss["part4_atlas_11"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0074 = function() {
        this.initialize(ss["part4_atlas_10"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0075 = function() {
        this.initialize(ss["part4_atlas_10"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0076 = function() {
        this.initialize(ss["part4_atlas_9"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0077 = function() {
        this.initialize(ss["part4_atlas_9"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0078 = function() {
        this.initialize(ss["part4_atlas_8"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0079 = function() {
        this.initialize(ss["part4_atlas_8"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0080 = function() {
        this.initialize(ss["part4_atlas_7"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0081 = function() {
        this.initialize(ss["part4_atlas_7"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0082 = function() {
        this.initialize(ss["part4_atlas_6"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0083 = function() {
        this.initialize(ss["part4_atlas_6"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0084 = function() {
        this.initialize(ss["part4_atlas_5"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0085 = function() {
        this.initialize(ss["part4_atlas_5"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0086 = function() {
        this.initialize(ss["part4_atlas_4"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0087 = function() {
        this.initialize(ss["part4_atlas_4"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0088 = function() {
        this.initialize(ss["part4_atlas_3"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0089 = function() {
        this.initialize(ss["part4_atlas_3"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0090 = function() {
        this.initialize(ss["part4_atlas_2"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0091 = function() {
        this.initialize(ss["part4_atlas_2"]);
        this.gotoAndStop(1);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib._0092 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(15);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.bgm = function() {
        this.initialize(img.bgm);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0,0,4001,1459);
    
    
    (lib.taishou11 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(16);
    }).prototype = p = new cjs.Sprite();
    
    
    
    (lib.taishou12 = function() {
        this.initialize(ss["part4_atlas_1"]);
        this.gotoAndStop(17);
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
    
    
    (lib.元件67 = function(mode,startPosition,loop,reversed) {
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
        this.shape.graphics.f("#C7CBDB").s().p("A4zV1MAAAgrpMAxnAAAMAAAArpg");
        this.shape._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-158.7,-139.7,317.5,279.4);
    
    
    (lib.元件63复制 = function(mode,startPosition,loop,reversed) {
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
        this.instance.setTransform(-29.5,-40.85);
    
        this.instance_1 = new lib.CachedBmp_17();
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
    
    
    (lib.元件53 = function(mode,startPosition,loop,reversed) {
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
        this.instance.setTransform(-254.5,-28.45);
    
        this.instance_1 = new lib.CachedBmp_15();
        this.instance_1.setTransform(-260.05,-25.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-260,-28.4,520,58);
    
    
    (lib.元件27 = function(mode,startPosition,loop,reversed) {
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
        this.instance.setTransform(-421.65,-56.7);
    
        this.instance_1 = new lib.CachedBmp_13();
        this.instance_1.setTransform(-424.45,-44.85);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(-424.4,-56.7,845.8,58), null);
    
    
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
    
    
    (lib.元件8复制6 = function(mode,startPosition,loop,reversed) {
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
        this.instance = new lib.CachedBmp_11();
        this.instance.setTransform(-43.2,-37.95);
    
        this.instance_1 = new lib.CachedBmp_17();
        this.instance_1.setTransform(-59.55,-59.55);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
    
    
    (lib.元件7复制5 = function(mode,startPosition,loop,reversed) {
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
        this.instance = new lib.CachedBmp_9();
        this.instance.setTransform(-29.5,-40.85);
    
        this.instance_1 = new lib.CachedBmp_17();
        this.instance_1.setTransform(-59.55,-59.55);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
    
    
    (lib.元件5复制7 = function(mode,startPosition,loop,reversed) {
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
        this.instance = new lib.CachedBmp_7();
        this.instance.setTransform(-80.85,-29.75);
    
        this.instance_1 = new lib.CachedBmp_6();
        this.instance_1.setTransform(-100.85,-100.85);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-100.8,-100.8,202,202);
    
    
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
        this.instance = new lib.CachedBmp_5();
        this.instance.setTransform(-29.5,-37.55);
    
        this.instance_1 = new lib.CachedBmp_4();
        this.instance_1.setTransform(-59.55,-56.25);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-59.5,-56.2,119,119);
    
    
    (lib.元件3复制6 = function(mode,startPosition,loop,reversed) {
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
        this.instance = new lib.CachedBmp_3();
        this.instance.setTransform(-29.55,-40.85);
    
        this.instance_1 = new lib.CachedBmp_17();
        this.instance_1.setTransform(-59.55,-59.55);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-59.5,-59.5,119,119);
    
    
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
    
        this.instance_1 = new lib.CachedBmp_12();
        this.instance_1.setTransform(-32.7,-18.8);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(39));
    
        this._renderFirstFrame();
    
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-32.7,-18.8,45.6,45);
    
    
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
    
        this.actionFrames = [0,1247,1287,1343,1459];
        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(1244)
        }
        this.frame_1247 = function() {
            this.button_aaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
            
            function fl_ClickToGoToAndPlayFromFrame_23()
            {
                this.gotoAndPlay(1294);
            }
        }
        this.frame_1287 = function() {
            this.stop();
        }
        this.frame_1343 = function() {
            //接第5段
            
            this.button_qqqq.addEventListener("click", fl_ClickToGoToWebPage);
            
            function fl_ClickToGoToWebPage() {
                vm.changeC(5,'跳到5段');
            }
        }
        this.frame_1459 = function() {
            this.stop();
        }
    
        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1247).call(this.frame_1247).wait(40).call(this.frame_1287).wait(56).call(this.frame_1343).wait(116).call(this.frame_1459).wait(1));
    
        // 图层_54
        this.button_aaa = new lib.元件67();
        this.button_aaa.name = "button_aaa";
        this.button_aaa.setTransform(499.75,443.6);
        this.button_aaa._off = true;
        new cjs.ButtonHelper(this.button_aaa, 0, 1, 2, false, new lib.元件67(), 3);
    
        this.timeline.addTween(cjs.Tween.get(this.button_aaa).wait(1247).to({_off:false},0).to({_off:true},57).wait(156));
    
        // 图层_24
        this.button_qqqq = new lib.元件21();
        this.button_qqqq.name = "button_qqqq";
        this.button_qqqq.setTransform(1286,360,1.4269,0.9699);
        this.button_qqqq._off = true;
        new cjs.ButtonHelper(this.button_qqqq, 0, 1, 2, false, new lib.元件21(), 3);
    
        this.timeline.addTween(cjs.Tween.get(this.button_qqqq).wait(1343).to({_off:false},0).wait(117));
    
        // 图层_22
        this.instance = new lib.元件22("synched",0);
        this.instance.setTransform(1245.9,360,1,1,-90);
        this.instance._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1334).to({_off:false},0).wait(126));
    
        // 图层_17
        this.instance_1 = new lib.元件13("synched",0);
        this.instance_1.setTransform(662.4,300.55,20.8307,20.8307,0,0,0,1.1,1.1);
        this.instance_1._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1334).to({_off:false},0).to({alpha:0},9).to({_off:true},1).wait(116));
    
        // 图层_15
        this.instance_2 = new lib.元件27("synched",0);
        this.instance_2.setTransform(506.6,78.35);
        this.instance_2.alpha = 0;
        this.instance_2._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1345).to({_off:false},0).to({alpha:1},11).wait(104));
    
        // 图层_27
        this.instance_3 = new lib.元件53("synched",0);
        this.instance_3.setTransform(342,109.85);
        this.instance_3.alpha = 0;
        this.instance_3._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1380).to({_off:false},0).to({alpha:1},8).wait(72));
    
        // 图层_1
        this.instance_4 = new lib._0000();
        this.instance_4.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_5 = new lib._0001();
        this.instance_5.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_6 = new lib._0002();
        this.instance_6.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_7 = new lib._0003();
        this.instance_7.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_8 = new lib._0004();
        this.instance_8.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_9 = new lib._0005();
        this.instance_9.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_10 = new lib._0006();
        this.instance_10.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_11 = new lib._0007();
        this.instance_11.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_12 = new lib._0008();
        this.instance_12.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_13 = new lib._0009();
        this.instance_13.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_14 = new lib._0010();
        this.instance_14.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_15 = new lib._0011();
        this.instance_15.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_16 = new lib._0012();
        this.instance_16.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_17 = new lib._0013();
        this.instance_17.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_18 = new lib._0014();
        this.instance_18.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_19 = new lib._0015();
        this.instance_19.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_20 = new lib._0016();
        this.instance_20.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_21 = new lib._0017();
        this.instance_21.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_22 = new lib._0018();
        this.instance_22.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_23 = new lib._0019();
        this.instance_23.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_24 = new lib._0020();
        this.instance_24.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_25 = new lib._0021();
        this.instance_25.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_26 = new lib._0022();
        this.instance_26.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_27 = new lib._0023();
        this.instance_27.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_28 = new lib._0024();
        this.instance_28.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_29 = new lib._0025();
        this.instance_29.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_30 = new lib._0026();
        this.instance_30.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_31 = new lib._0027();
        this.instance_31.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_32 = new lib._0028();
        this.instance_32.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_33 = new lib._0029();
        this.instance_33.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_34 = new lib._0030();
        this.instance_34.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_35 = new lib._0031();
        this.instance_35.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_36 = new lib._0032();
        this.instance_36.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_37 = new lib._0033();
        this.instance_37.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_38 = new lib._0034();
        this.instance_38.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_39 = new lib._0035();
        this.instance_39.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_40 = new lib._0036();
        this.instance_40.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_41 = new lib._0037();
        this.instance_41.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_42 = new lib._0038();
        this.instance_42.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_43 = new lib._0039();
        this.instance_43.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_44 = new lib._0040();
        this.instance_44.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_45 = new lib._0041();
        this.instance_45.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_46 = new lib._0042();
        this.instance_46.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_47 = new lib._0043();
        this.instance_47.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_48 = new lib._0044();
        this.instance_48.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_49 = new lib._0045();
        this.instance_49.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_50 = new lib._0046();
        this.instance_50.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_51 = new lib._0047();
        this.instance_51.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_52 = new lib._0048();
        this.instance_52.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_53 = new lib._0049();
        this.instance_53.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_54 = new lib._0050();
        this.instance_54.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_55 = new lib._0051();
        this.instance_55.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_56 = new lib._0052();
        this.instance_56.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_57 = new lib._0053();
        this.instance_57.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_58 = new lib._0054();
        this.instance_58.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_59 = new lib._0055();
        this.instance_59.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_60 = new lib._0056();
        this.instance_60.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_61 = new lib._0057();
        this.instance_61.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_62 = new lib._0058();
        this.instance_62.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_63 = new lib._0059();
        this.instance_63.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_64 = new lib._0060();
        this.instance_64.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_65 = new lib._0061();
        this.instance_65.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_66 = new lib._0062();
        this.instance_66.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_67 = new lib._0063();
        this.instance_67.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_68 = new lib._0064();
        this.instance_68.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_69 = new lib._0065();
        this.instance_69.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_70 = new lib._0066();
        this.instance_70.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_71 = new lib._0067();
        this.instance_71.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_72 = new lib._0068();
        this.instance_72.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_73 = new lib._0069();
        this.instance_73.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_74 = new lib._0070();
        this.instance_74.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_75 = new lib._0071();
        this.instance_75.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_76 = new lib._0072();
        this.instance_76.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_77 = new lib._0073();
        this.instance_77.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_78 = new lib._0074();
        this.instance_78.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_79 = new lib._0075();
        this.instance_79.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_80 = new lib._0076();
        this.instance_80.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_81 = new lib._0077();
        this.instance_81.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_82 = new lib._0078();
        this.instance_82.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_83 = new lib._0079();
        this.instance_83.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_84 = new lib._0080();
        this.instance_84.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_85 = new lib._0081();
        this.instance_85.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_86 = new lib._0082();
        this.instance_86.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_87 = new lib._0083();
        this.instance_87.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_88 = new lib._0084();
        this.instance_88.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_89 = new lib._0085();
        this.instance_89.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_90 = new lib._0086();
        this.instance_90.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_91 = new lib._0087();
        this.instance_91.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_92 = new lib._0088();
        this.instance_92.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_93 = new lib._0089();
        this.instance_93.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_94 = new lib._0090();
        this.instance_94.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_95 = new lib._0091();
        this.instance_95.setTransform(0,-35,1.0984,1.0985);
    
        this.instance_96 = new lib._0092();
        this.instance_96.setTransform(0,-35,1.0984,1.0985);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},1334).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},2).to({state:[{t:this.instance_74}]},2).to({state:[{t:this.instance_75}]},2).to({state:[{t:this.instance_76}]},2).to({state:[{t:this.instance_77}]},2).to({state:[{t:this.instance_78}]},2).to({state:[{t:this.instance_79}]},2).to({state:[{t:this.instance_80}]},2).to({state:[{t:this.instance_81}]},2).to({state:[{t:this.instance_82}]},2).to({state:[{t:this.instance_83}]},2).to({state:[{t:this.instance_84}]},2).to({state:[{t:this.instance_85}]},2).to({state:[{t:this.instance_86}]},2).to({state:[{t:this.instance_87}]},2).to({state:[{t:this.instance_88}]},2).to({state:[{t:this.instance_89}]},2).to({state:[{t:this.instance_90}]},2).to({state:[{t:this.instance_91}]},2).to({state:[{t:this.instance_92}]},2).to({state:[{t:this.instance_93}]},2).to({state:[{t:this.instance_94}]},2).to({state:[{t:this.instance_95}]},2).to({state:[{t:this.instance_96}]},2).wait(1));
    
        // 图层_3_复制_复制
        this.instance_97 = new lib.元件13("synched",0);
        this.instance_97.setTransform(504.6,454.05);
        this.instance_97.alpha = 0;
        this.instance_97._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_97).wait(1327).to({_off:false},0).to({scaleX:21.8811,scaleY:21.8811,alpha:1},7).to({alpha:0},8).to({_off:true},1).wait(117));
    
        // 图层_4_复制_复制
        this.instance_98 = new lib.元件5复制7("synched",0);
        this.instance_98.setTransform(502.75,443.6,0.7932,0.7932,0,0,0,0.1,0.1);
        this.instance_98._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_98).wait(1243).to({_off:false},0).wait(50).to({startPosition:0},0).to({regX:6.3,scaleX:0.0159,x:502.6,y:443.55},4).to({regX:0.1,scaleX:0.7932,x:502.75,y:443.6},5).to({regX:6.3,scaleX:0.0159,x:502.6,y:443.55},4).to({regX:0.1,scaleX:0.7932,x:502.75,y:443.6},5).to({regX:6.3,scaleX:0.0159,x:502.6,y:443.55},6).to({regX:0.1,scaleX:0.7932,x:502.75,y:443.6},5).to({regX:6.3,scaleX:0.0159,x:502.6,y:443.55},4).to({regX:0.1,scaleX:0.7932,x:502.75,y:443.6},5).to({_off:true},3).wait(126));
    
        // 图层_5_复制_复制
        this.instance_99 = new lib.元件63复制("synched",0);
        this.instance_99.setTransform(1028,207.7,0.89,0.89);
        this.instance_99._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_99).wait(1243).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:502.65,y:443.6,alpha:0},13).to({_off:true},14).wait(126));
    
        // 图层_7_复制_复制
        this.instance_100 = new lib.元件8复制6("synched",0);
        this.instance_100.setTransform(394,198.9,0.89,0.89);
        this.instance_100._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(1243).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:502.65,y:443.6,alpha:0},13).to({_off:true},14).wait(126));
    
        // 图层_6_复制_复制
        this.instance_101 = new lib.元件7复制5("synched",0);
        this.instance_101.setTransform(625.6,270.3,0.89,0.89);
        this.instance_101._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(1243).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:502.65,y:443.6,alpha:0},13).to({_off:true},14).wait(126));
    
        // 图层_5_复制_复制
        this.instance_102 = new lib.元件3复制6("synched",0);
        this.instance_102.setTransform(934.85,368.65,0.89,0.89);
        this.instance_102._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_102).wait(1243).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:502.65,y:443.6,alpha:0},13).to({_off:true},14).wait(126));
    
        // 手_复制_复制
        this.instance_103 = new lib.元件4复制6("synched",0);
        this.instance_103.setTransform(800.75,161.35,0.89,0.89);
        this.instance_103._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_103).wait(1243).to({_off:false},0).wait(64).to({startPosition:0},0).to({x:502.65,y:440.65,alpha:0},13).to({_off:true},14).wait(126));
    
        // 图层_35_复制_复制
        this.instance_104 = new lib.元件59("synched",0);
        this.instance_104.setTransform(711.6,526.45,0.7177,0.7177,0,0,180);
    
        this.instance_105 = new lib.元件60("synched",0);
        this.instance_105.setTransform(711.25,526.45,0.7177,0.7177,0,0,180);
    
        this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_104}]},1243).to({state:[{t:this.instance_105}]},7).to({state:[{t:this.instance_104}]},7).to({state:[{t:this.instance_105}]},7).to({state:[{t:this.instance_104}]},7).to({state:[]},63).wait(126));
    
        // 图层_46_复制_复制
        this.instance_106 = new lib.CachedBmp_1();
        this.instance_106.setTransform(456.15,534.6);
        this.instance_106._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_106).wait(1243).to({_off:false},0).to({_off:true},91).wait(126));
    
        // 图层_45_复制_复制
        this.instance_107 = new lib.元件61("synched",0);
        this.instance_107.setTransform(502.65,443.5,0.8662,0.8662);
        this.instance_107.alpha = 0.6211;
        this.instance_107._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_107).wait(1252).to({_off:false},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).wait(8).to({regY:0,scaleX:0.8662,scaleY:0.8662,y:443.5,alpha:0.6211},0).to({regY:0.1,scaleX:1.423,scaleY:1.423,y:443.65,alpha:0},10).to({_off:true},1).wait(179));
    
        // 图层_43_复制_复制
        this.instance_108 = new lib.元件62("synched",0);
        this.instance_108.setTransform(502.75,443.6,0.8339,0.8339,0,0,0,0.2,0.1);
        this.instance_108.alpha = 0.4297;
        this.instance_108._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_108).wait(1249).to({_off:false},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:502.8,y:443.7,alpha:0},9).wait(9).to({regY:0.1,scaleX:0.8339,scaleY:0.8339,x:502.75,y:443.6,alpha:0.4297},0).to({regY:0.2,scaleX:1.1383,scaleY:1.1383,x:502.8,y:443.7,alpha:0},9).to({_off:true},5).wait(179));
    
        // 图层_8_复制_复制
        this.instance_109 = new lib.元件15("synched",0);
        this.instance_109.setTransform(-86.95,349);
        this.instance_109.alpha = 0.4883;
        this.instance_109._off = true;
    
        this.timeline.addTween(cjs.Tween.get(this.instance_109).wait(1243).to({_off:false},0).to({_off:true},91).wait(126));
    
        this._renderFirstFrame();
    
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(-84.5,-592.4,1954.1,2338.6);
    // library properties:
    lib.properties = {
        id: 'part4',
        width: 1406,
        height: 720,
        fps: 24,
        color: "#1B1E2B",
        opacity: 1.00,
        manifest: [
            {src:"images/bgm.png", id:"bgm"},
            {src:"images/part4_atlas_1.png", id:"part4_atlas_1"},
            {src:"images/part4_atlas_2.png", id:"part4_atlas_2"},
            {src:"images/part4_atlas_3.png", id:"part4_atlas_3"},
            {src:"images/part4_atlas_4.png", id:"part4_atlas_4"},
            {src:"images/part4_atlas_5.png", id:"part4_atlas_5"},
            {src:"images/part4_atlas_6.png", id:"part4_atlas_6"},
            {src:"images/part4_atlas_7.png", id:"part4_atlas_7"},
            {src:"images/part4_atlas_8.png", id:"part4_atlas_8"},
            {src:"images/part4_atlas_9.png", id:"part4_atlas_9"},
            {src:"images/part4_atlas_10.png", id:"part4_atlas_10"},
            {src:"images/part4_atlas_11.png", id:"part4_atlas_11"},
            {src:"images/part4_atlas_12.png", id:"part4_atlas_12"},
            {src:"images/part4_atlas_13.png", id:"part4_atlas_13"},
            {src:"images/part4_atlas_14.png", id:"part4_atlas_14"},
            {src:"images/part4_atlas_15.png", id:"part4_atlas_15"},
            {src:"images/part4_atlas_16.png", id:"part4_atlas_16"},
            {src:"images/part4_atlas_17.png", id:"part4_atlas_17"},
            {src:"images/part4_atlas_18.png", id:"part4_atlas_18"},
            {src:"images/part4_atlas_19.png", id:"part4_atlas_19"},
            {src:"images/part4_atlas_20.png", id:"part4_atlas_20"},
            {src:"images/part4_atlas_21.png", id:"part4_atlas_21"},
            {src:"images/part4_atlas_22.png", id:"part4_atlas_22"},
            {src:"images/part4_atlas_23.png", id:"part4_atlas_23"},
            {src:"images/part4_atlas_24.png", id:"part4_atlas_24"},
            {src:"images/part4_atlas_25.png", id:"part4_atlas_25"},
            {src:"images/part4_atlas_26.png", id:"part4_atlas_26"},
            {src:"images/part4_atlas_27.png", id:"part4_atlas_27"},
            {src:"images/part4_atlas_28.png", id:"part4_atlas_28"},
            {src:"images/part4_atlas_29.png", id:"part4_atlas_29"},
            {src:"images/part4_atlas_30.png", id:"part4_atlas_30"},
            {src:"images/part4_atlas_31.png", id:"part4_atlas_31"},
            {src:"images/part4_atlas_32.png", id:"part4_atlas_32"},
            {src:"images/part4_atlas_33.png", id:"part4_atlas_33"},
            {src:"images/part4_atlas_34.png", id:"part4_atlas_34"},
            {src:"images/part4_atlas_35.png", id:"part4_atlas_35"},
            {src:"images/part4_atlas_36.png", id:"part4_atlas_36"},
            {src:"images/part4_atlas_37.png", id:"part4_atlas_37"},
            {src:"images/part4_atlas_38.png", id:"part4_atlas_38"},
            {src:"images/part4_atlas_39.png", id:"part4_atlas_39"},
            {src:"images/part4_atlas_40.png", id:"part4_atlas_40"},
            {src:"images/part4_atlas_41.png", id:"part4_atlas_41"},
            {src:"images/part4_atlas_42.png", id:"part4_atlas_42"},
            {src:"images/part4_atlas_43.png", id:"part4_atlas_43"},
            {src:"images/part4_atlas_44.png", id:"part4_atlas_44"},
            {src:"images/part4_atlas_45.png", id:"part4_atlas_45"},
            {src:"images/part4_atlas_46.png", id:"part4_atlas_46"},
            {src:"images/part4_atlas_47.png", id:"part4_atlas_47"}
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
    an.compositions['part4'] = {
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