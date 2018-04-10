var statsInfo = [{"name":"专业认同度","maxScore":5,"leftSection":"2.5","rightSection":"3.5","detail":"<p>您似乎觉得自己所学的专业还可以，建议您可以继续下去，对本专业进行进一步学习，加深对专业的了解，在此过程中您可能就会收获自己对所学专业的认同和喜爱，总之，认清楚再做决定，别轻易放弃。<\/p>","stats":[{"score":"1.0","count":"2","self":false},{"score":"1.8","count":"1","self":false},{"score":"2.6","count":"1","self":false},{"score":"2.8","count":"4","self":true},{"score":"3.0","count":"3","self":false},{"score":"3.2","count":"5","self":false},{"score":"3.4","count":"1","self":false},{"score":"3.6","count":"1","self":false},{"score":"5.0","count":"2","self":false}],"left":"3","middle":"14","right":"3"}];
function renderTypeBar(data){ //维度图，折线
    var myChart = echarts.init(document.getElementById("chars-line")),
        barData = function() {
            var seriesData = [],
                coord = [];
            for(var i = 0;i<data.stats.length;i++) {
                seriesData.push([data.stats[i].score,data.stats[i].count]);
                if(data.stats[i].self){
                    coord = [data.stats[i].score,parseInt(data.stats[i].count)];
                }
            }
            return {
                seriesData: seriesData,
                coord: coord
            };
        },
        option = {
            tooltip: {
                show: true,
                trigger: 'item',
                formatter: function(params){
                    var con = '分数：' + params.data[0];
                    return con
                }
            },
            color: ['#5790d3','#F1524F'],
            grid: {
                right: '10%',
                left: '5%',
                top: '15%',
                bottom: '4%'
            },
            xAxis: {
                type: 'value',
                min: 1,
                max: data.maxScore,
                name: '单位：分',
                splitNumber: data.maxScore*2,
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                }
            },
            yAxis: {
                min: 0,
                interval: 1,
                name: '单位：人',
                axisLine: {
                    lineStyle: {
                        color: '#999'
                    }
                }
            },
            series: [{
                name: '群体分布',
                symbolSize: 6,
                data: barData().seriesData,
                type: 'line',
                smooth: true,
                areaStyle: {
                    normal: {
                        opacity: 0.3,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#C1DBF7'
                            }, {
                                offset: 1, color: '#5790d3'
                            }],
                            globalCoord: false
                        }
                    }
                },
                markPoint: {
                    tooltip:{
                        show:true,
                        trigger: 'item',
                        formatter: function(params){
                            var con = '分数：' + params.data.coord[0];
                            return con
                        }
                    },
                    data: [
                        {
                            name: '我',
                            coord: barData().coord
                        }
                    ],
                    label: {
                        normal: {
                            formatter: '{b}'  
                        }        
                    },
                    symbolSize: 40
                }
            }]
        };
    myChart.setOption(option);
}
renderTypeBar(statsInfo[0]);
function takeScreenshot() {
	var baseFontSize = parseInt(document.querySelector('html').style.fontSize);
    var canvas2 = document.createElement("canvas");
    let _canvas = document.querySelector('#reportSave');
    var w = parseInt(window.getComputedStyle(_canvas).width)*baseFontSize;
    var h = parseInt(window.getComputedStyle(_canvas).height)*baseFontSize;
    //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
    canvas2.width = w * 2;
    canvas2.height = h * 2;
    canvas2.style.width = w + "px";
    canvas2.style.height = h + "px";
    //可以按照自己的需求，对context的参数修改,translate指的是偏移量
    //  var context = canvas.getContext("2d");
    //  context.translate(0,0);
    var context = canvas2.getContext("2d");
    context.scale(2,2);
    html2canvas(document.querySelector('#reportSave'),{canvas:canvas2}).then(function(canvas) {
        document.body.appendChild(canvas);
        //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
        var imgUrl = canvas.toDataURL('image/jpeg');
        document.querySelector(".down").setAttribute('href',imgUrl);
        canvas2.style.display="none";
    });
}
window.onload = function () {
	takeScreenshot();
}