---
快速上手——以linechart为例
---

```
//包配置  
KISSY.config({
  packages:[
      {
        name:"gallery",
        path:"http://a.tbcdn.cn/s/kissy/",
        charset:"utf-8"
      }
    ]
});
/*若为KISSY 1.3 则忽略以上包配置*/

//调用linechart
KISSY.use("gallery/kcharts/1.2/linechart/index",function(S,LineChart){
  var linechart = new LineChart({
      renderTo:"#demo1",
      title:{
         content:"1周消费记录"
      },
      anim:{},
      subTitle:{
         content:"week fee record"
      },
      xAxis: {
          text:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
      },
      yAxis:{
        min:0
      },
      series:[
      {
          data:[100,4000,200,400,144,234,700]
      }],
      tip:{
        template:"总支出：<span>{{y}}</span> 元<br/>"
      }
  });
});
```
##组件文档

###core

- [linechart 折线图](linechart.html)
- [barchart 柱状图](barchart.html)
- [piechart 饼图](piechart.html)
- [scatterchart 散点图](scatterchart.html)
- [ratiochart](ratiochart.html)
- [sumdetailchart](sumdetailchart.html)
- [tip](tip.html)

###gallery

- [funnel 梯形图](funnel.html)
- [trianglechart 三角形图](trianglechart.html)


