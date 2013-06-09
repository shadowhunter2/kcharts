KISSY.add("gallery/kcharts/1.1/datetime/index",function(k,t,x,r,l,B,y,C,D,h,E,F,u){var z=k.all,s=k.Event,p="ks-chart-default",A=["circle","triangle","rhomb","square"],q;t=function(a){this._cfg=a;this.init()};k.extend(t,l,{init:function(){var a;l.prototype.init.call(this,this._cfg);this.chartType="linechart";if(this._$ctnNode[0]){a={themeCls:p,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center",
"font-size":"12px"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:"{COLOR}","stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,
css:{}},areas:{isShow:!1,css:{}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};this._lines={};this._finished=[];p=this._cfg.themeCls||a.themeCls;this._cfg=k.mix(k.mix(a,D[p],h,h,!0),this._cfg,h,h,!0);this.color=q=new B({themeCls:p});0<this._cfg.colors.length&&q.removeAllColors();for(var b in this._cfg.colors)q.setColor(this._cfg.colors[b]);
this.__cfg=this.cloneSeriesConfig(["line","points"]);a=this._points[0];(w=Math.round(a&&a[0]&&a[1]&&a[1].x-a[0].x||this.getInnerContainer().width))&&this.set("area-width",w);this._cfg.autoRender&&this.render(!0)}},cloneSeriesConfig:function(a){var b={},c,d=k.clone(this._cfg);if(a){for(var f in a)for(var g in this._cfg.series)if(c=this._cfg.series[g][a[f]]?k.mix(d[a[f]],this._cfg.series[g][a[f]],h,h,!0):this._cfg[a[f]])b[a[f]]||(b[a[f]]=[]),b[a[f]][g]=c;return b}},drawTitle:function(){var a=this.htmlPaper,
b=p+"-title",c=this._cfg,d=0.6*this._innerContainer.y;c.title.isShow&&""!=c.title.content&&(this._title=a.rect(0,0,this._$ctnNode.width(),d).addClass(b).css(k.mix({"line-height":d+"px"},c.title.css)).html(c.title.content))},drawSubTitle:function(){var a=this.htmlPaper,b=p+"-subtitle",c=this._cfg,d=this._innerContainer,f=0.4*d.y;c.subTitle.isShow&&""!=c.subTitle.content&&(this._subTitle=a.rect(0,0.6*d.y,this._$ctnNode.width(),f).addClass(b).css(k.mix({"line-height":f+"px"},c.subTitle.css)).html(c.subTitle.content))},
getRealPointsNum:function(a){var b=0,c;for(c in a)a[c].x&&a[c].y&&b++;return b},getVisableLineNum:function(){for(var a=this._cfg,b=a.series.length,c=b,d=0;d<b;d++)!1==a.series[d].isShow&&c--;return c},drawLine:function(a,b){var c=this._points[a];if(c&&c.length){var c=this.getLinePath(c),d=this.paper,f=this.color.getColor(a).DEFAULT,g=this.__cfg.line[a].attr,c=d.path(c).attr(g).attr({stroke:f}),d=this.getVisableLineNum();this._finished.push(!0);this._finished.length==d&&b&&b();return c}},getFirstUnEmptyPointIndex:function(a){a=
this._points[a];for(var b in a)if(!this.isEmptyPoint(a[b]))return b},animateLine:function(a,b){var c=this,d,f,g,m=c._cfg,v=c.paper,h=c._points[a],n=c.getLinePath(h),p=r.getTotalLength(n);c.getRealPointsNum(h);h=m.anim?m.anim.duration||500:500;c.get("area-width");k.mix({stroke:q.getColor(a).DEFAULT},m.line.attr);var m=c.__cfg.line[a].attr,l=v.path(d).attr(m).attr({stroke:q.getColor(a).DEFAULT});c.getFirstUnEmptyPointIndex(a);g=c.getVisableLineNum();new F({},{},{duration:h,easing:"easeNone",step:function(a,
b){f=b*p;d=r.getSubpath(n,0,f);r.pathBBox(d);l&&l.attr({path:d})},end:function(){c._finished.push(!0);c._finished.length==g&&b&&b()}});return l},getLinePath:function(a){var b="",c=this.getRealPointsNum(a),d=0;if(!a)return"";a:{for(var f in a)if(!this.isEmptyPoint(a[f])){d=Math.round(f);break a}d=void 0}b+="M"+a[d].x+","+a[d].y;if("arc"==this._cfg.lineType&&2<c){b+=" R";d+=1;for(c=a.length;d<c;d++)a[d].x&&a[d].y&&(b+=a[d].x+","+a[d].y+" ")}else{d+=1;for(c=a.length;d<c;d++)a[d].x&&a[d].y&&(b+=" L"+
a[d].x+","+a[d].y)}return b},drawLines:function(a){var b=this._cfg,c=A.length;this._lines={};this._stocks={};for(var d in this._points){var f=this.getLinePath(this._points[d]),g=q.getColor(d),m=this.processAttr(this._cfg.points.attr,g.DEFAULT),v=this.processAttr(this._cfg.points.hoverAttr,g.HOVER);this._stocks[d]={points:this._points[d],color:g,attr:m,hoverAttr:v,type:"auto"==m.type?A[d%c]:m.type};m=!1==b.series[d].isShow?h:this.drawLine(d,a);this._lines[d]={line:m,path:f,points:this._points[d],color:g,
attr:k.mix({stroke:g.DEFAULT},this._cfg.line.attr),isShow:!1===b.series[d].isShow?!1:!0}}return this._lines},processAttr:function(a,b){var c=k.clone(a),d;for(d in c)c[d]&&"string"==typeof c[d]&&(c[d]=c[d].replace("{COLOR}",b));return c},drawStocks:function(){for(var a in this._stocks)this._stocks[a].stock=this.drawStock(0,0,this._stocks[a].attr).hide()},drawStock:function(a,b,c,d){var f=this.paper,g=this._cfg.points.attr;if(a!==h&&b!==h){switch(d){case "triangle":a=u.triangle(f,a,b,1.4*g.r);break;
case "rhomb":a=u.rhomb(f,a,b,2.4*g.r,2.4*g.r);break;case "square":a=u.rhomb(f,a,b,2.4*g.r,2.4*g.r,45);break;default:a=f.circle(a,b,g.r,c)}a.attr(g).attr(c);return a}return""},drawGridsX:function(){var a=this._points[0],b=[];if(1<a.length){var c=(a[1].x-a[0].x)/2;b.push({x:a[0].x-c});for(var d in a)b.push({x:a[d].x- -c})}a=0;for(c=b.length;a<c;a++)d=this.drawGridX(b[a]),this._gridsX.push(d);return this._gridsX},drawGridX:function(a,b){var c=this._cfg.themeCls+"-gridsx";return this.htmlPaper.lineY(a.x,
this._innerContainer.tl.y,this._innerContainer.height).addClass(c).css(this._cfg.xGrids.css)},drawGridY:function(a,b){var c=this._innerContainer.width;b=b||this._cfg.yGrids.css;var d=this._cfg.themeCls+"-gridsy";return this.htmlPaper.lineX(a.x,a.y,c).addClass(d).css(b)},drawGridsY:function(){for(var a=this._innerContainer.tl.x,b=this._pointsY,c=0,d=b.length;c<d;c++)this._gridsY[c]={0:this.drawGridY({x:a,y:b[c].y}),num:this.coordNum[c]}},drawAreas:function(){for(var a=this._innerContainer,b=a.tl.y,
c=this._points[0],a=Math.round(c&&c[0]&&c[1]&&c[1].x-c[0].x||a.width),d=Math.round(this._innerContainer.height),f=this.htmlPaper,g=this._cfg.themeCls+"-areas",k=this._cfg.areas.css,h=0,l=c.length;h<l;h++){var n=f.rect(c[h].x-a/2,b,a,d).addClass(g).css(k);this._areas.push(n)}},drawAxisX:function(){var a=this._innerContainer,b=a.bl,c=this._cfg.themeCls+"-axisx";return this._axisX=this.htmlPaper.lineX(b.x,b.y,a.width).addClass(c).css(this._cfg.xAxis.css||{})},drawAxisY:function(){var a=this._innerContainer,
b=a.tl,c=this._cfg.themeCls+"-axisy";return this._axisY=this.htmlPaper.lineY(b.x,b.y,a.height).addClass(c).css(this._cfg.yAxis.css||{})},drawLabelsX:function(){var a=this._cfg.xAxis.text,b;for(b in a)this._labelX[b]=this.drawLabelX(b,a[b])},drawLabelsY:function(){for(var a in this._pointsY)this._labelY[a]={0:this.drawLabelY(a,this._pointsY[a].number),num:this._pointsY[a].number};return this._labelY},drawLabelX:function(a,b){var c=this.htmlPaper,d=this._pointsX,f=this._cfg.themeCls+"-xlabels",g;g=
"";if(a<(d.length||0))return g=this._cfg.xLabels.template||"{{data}}",g=k.isFunction(g)?g(a,b):x(g).render({data:b}),d=d[a],d[0]=g&&c.text(d.x,d.y,"<span class="+f+">"+g+"</span>","center").children().css(this._cfg.xLabels.css),d[0]},drawLabelY:function(a,b){var c=this.htmlPaper,d=this._cfg.themeCls+"-ylabels",f;f="";f=this._cfg.yLabels.template||"{{data}}";return(f=k.isFunction(f)?f(a,b):x(f).render({data:b}))&&c.text(this._pointsY[a].x,this._pointsY[a].y,"<span class="+d+">"+f+"</span>","right",
"middle").children().css(this._cfg.yLabels.css)},drawPointLine:function(){var a=this._cfg.themeCls+"-pointline",b=this._innerContainer;return this._pointline=this.htmlPaper.lineY(0,b.tl.y,b.height).addClass(a).css(this._cfg.pointLine.css).css({display:"none"})},renderTip:function(){var a=this._cfg,b=this._innerContainer,a=k.mix(a.tip,{rootNode:this._$ctnNode,clsName:a.themeCls,boundry:a.tip.boundryDetect?{x:b.tl.x,y:b.tl.y,width:b.width,height:b.height}:{}},h,h,!0);return this.tip=new E(a)},renderEvtLayout:function(){var a=
this._innerContainer,b=this._points[0],c=b&&b[0]&&b[1]&&b[1].x-b[0].x||a.width,d=a.height,f=this._multiple,g=this._evtEls._areas=[],k=this._evtEls._rects=[];this._evtEls.paper||(this._evtEls.paper=new y(this._$ctnNode,{clsName:"ks-chart-evtlayout",prependTo:!1,width:a.width,height:d,left:a.tl.x,top:a.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":0.01,"-khtml-opacity":0.01,opacity:0.01}}));for(var h=0,k=b.length;h<k;h++)g[h]={x:b[h].x-c/2,y:a.tl.y,width:c,height:d};
if(f)for(h in this._stocks)if(a=this._stocks[h],k=[],b=a.points,a.stocks){for(var l in b)k[l]={x:b[l].x-c/2,y:b[l].y-5,width:c,height:10};this._evtEls._rects[h]=k}},clearEvtLayout:function(){this._evtEls._areas&&this._evtEls._areas.length&&(this._evtEls._areas=[]);this._evtEls._rects&&this._evtEls._rects.length&&(this._evtEls._rects=[])},renderLegend:function(){var a=this._cfg.legend,b=a.container&&z(a.container)[0]?z(a.container):this._$ctnNode;return this.legend=new C(k.mix(a,{container:b,evtBind:!0,
chart:this,iconType:"circle",css:a.css||{}}))},render:function(a){var b=this._cfg,c=b.themeCls;this.beforeRender();a&&this._$ctnNode.html("");this.paper=r(this._$ctnNode[0],b.width,b.height);this.htmlPaper=new y(this._$ctnNode,{clsName:c});this.drawTitle();this.drawSubTitle();b.tip.isShow&&this.renderTip();b.areas.isShow&&this.drawAreas();b.xGrids.isShow&&this.drawGridsX();b.yGrids.isShow&&this.drawGridsY();this._cfg.comparable&&this.drawPointLine();b.xAxis.isShow&&this.drawAxisX();b.yAxis.isShow&&
this.drawAxisY();b.xLabels.isShow&&this.drawLabelsX();b.yLabels.isShow&&this.drawLabelsY();this.drawLines();this.drawStocks();this.renderEvtLayout();this.bindEvt();b.legend.isShow&&this.renderLegend();this.afterRender();k.log(this)},bindEvt:function(){var a=this,b=a._evtEls;a.curStockIndex=function(){for(var b in a._stocks)if(a._stocks[b].stocks)return b}();a.curLineIndex=a.getFirstVisibleLineIndex();s.detach(b.paper.$paper,"mouseleave");s.on(b.paper.$paper,"mouseleave",function(b){a._lines[0].line.attr(a._lines[0].attr);
a.tip&&a.tip.hide();a._pointline&&a._pointline.hide();for(var d in a._stocks)a._stocks[d].stock.hide();a.curStockIndex=h;a.paperLeave()});s.detach(b.paper.$paper,"mousemove");s.on(b.paper.$paper,"mousemove",function(b){b=a.getOffset(b);a.delegateMouseMove(b)})},delegateMouseMove:function(a){var b=this.getInnerContainer(),c=this.curStockIndex,d;for(d in this._evtEls._areas){var f=this._evtEls._areas[d];if(this.isInSide(a.offsetX+b.x,a.offsetY+b.y,f.x,f.y,f.width,f.height)&&(c===h||c!=d)){this.curStockIndex=
d;this.stockHandler(this.curLineIndex,this.curStockIndex);this.tipHandler(this.curLineIndex,this.curStockIndex);return}}for(d in this._evtEls._rects)for(var g in this._evtEls._rects[d])if(c=this._evtEls._rects[d][g],this.isInSide(a.offsetX+b.x,a.offsetY+b.y,c.x,c.y,c.width,c.height)){if(this.curLineIndex===d)return;this.lineChangeTo(d);this.stockHandler(this.curLineIndex,this.curStockIndex);this.tipHandler(this.curLineIndex,this.curStockIndex);return}},stockHandler:function(a,b){for(var c in this._stocks)this._stocks[c].stock.show().attr({cx:this._points[c][b].x,
cy:this._points[c][b].y});this.stockChange(a,b)},tipHandler:function(a,b){if(!(a===h||b===h)){var c=this.tip,d=this._cfg,f=d.series,g=d.tip.template;c.getInstance();var m=this._points[a][b],p=this._lines[a].color.DEFAULT;if(this.curStockIndex!==h&&(currentPoints=this._points[a],g&&d.tip.isShow)){currentPoints&&!this.isEmptyPoint(currentPoints[b])&&this._lines[a].isShow?this._pointline&&this._pointline.css({"margin-left":this._pointsX[b].x}).show():(g=this.getFirstNotEmptyPointsLineIndex(b))&&this.lineChangeTo(g);
if(this._cfg.comparable){var g={datas:{}},q=[],n;for(n in this._points)if(this._points[n][b].dataInfo){this._points[n][b].dataInfo.color=this._stocks[n].color.DEFAULT;var r=k.merge(this._points[n][b].dataInfo,f[n]);delete r.data;g.datas[n]=r}for(n in g.datas)q.push(g.datas[n]);g.datas=l.prototype.arraySort(q,!0,"y");f=g}else f=k.merge(this._points[a][b].dataInfo,f[a]),delete f.data;this.areaChange(b);this.isEmptyPoint(currentPoints[b])||(k.mix(f,{lineindex:a,pointindex:b}),c.fire("setcontent",{data:f}),
c.fire("move",{x:m.x,y:m.y,style:this.processAttr(d.tip.css,p)}))}}},getFirstNotEmptyPointsLineIndex:function(a){for(var b in this._points)if(!this.isEmptyPoint(this._points[b][a])&&this._lines[b].isShow)return b+"";return""},getFirstVisibleLineIndex:function(){for(var a in this._lines)if(this._lines[a].isShow)return a},isEmptyPoint:function(a){return a&&a.dataInfo?!1:!0},hideLine:function(a){var b=this;if(b._lines[a].isShow){b._lines[a].isShow=!1;a==b.curLineIndex&&(b.curLineIndex=b.getFirstVisibleLineIndex());
l.prototype.removeData.call(b,a);b.animateGridsAndLabels();b._lines[a].line.remove();for(var c in b._stocks)a==c&&(b._stocks[a].stock&&b._stocks[a].stock.remove(),delete b._stocks[a].stock),b._stocks[c].points=b._points[c];for(c in b._lines)if(c!=a){var d=b.getLinePath(b._points[c]);b._lines[c].path!=d&&""!=d&&(b._isAnimating=!0,b._lines[c].line&&b._lines[c].line.stop()&&b._lines[c].line.animate({path:d},500,function(){b._isAnimating=!1}),b._lines[c].path=d)}b.clearEvtLayout();b.renderEvtLayout();
b.bindEvt();k.log(b)}},showLine:function(a){var b=this;if(!b._lines[a].isShow){b._lines[a].isShow=!0;b._cfg.series[a].isShow=!0;l.prototype.recoveryData.call(b,a);b.animateGridsAndLabels();b._lines[a].line=b.drawLine(a);for(var c in b._stocks)b._stocks[c].points=b._points[c];for(c in b._lines)a=b.getLinePath(b._points[c]),b._lines[c].path!=a&&b._lines[c].line&&(b._isAnimating=!0,b._lines[c].line&&b._lines[c].line.stop().animate({path:a},500,function(){b._isAnimating=!1}),b._lines[c].path=a);b.clearEvtLayout();
b.renderEvtLayout();b.bindEvt()}},animateGridsAndLabels:function(){Math.max(this._pointsY.length,this._gridsY.length);var a=this.coordNum;if(a){Math.max.apply(null,a);Math.min.apply(null,a);for(var b in this._labelY)this._labelY[b]&&this._labelY[b][0]&&this._labelY[b][0].remove(),this._gridsY[b]&&this._gridsY[b][0]&&this._gridsY[b][0].remove();this.drawGridsY();this.drawLabelsY()}},lineChangeTo:function(a){var b=this.__cfg.line[a].hoverAttr;if(!this._isAnimating&&this._lines[a].isShow){for(var c in this._stocks)this._stocks[c].points=
this._points[c];for(c in this._lines)c!=a&&this._lines[c].line&&this._lines[c].line.attr(this.__cfg.line[c].attr);this._lines[a].line.remove();this._lines[a].line=this.drawLine(a).attr(b);this.curLineIndex=a}},areaChange:function(a){this.fire("areaChange",{index:a})},paperLeave:function(){this.fire("paperLeave",this)},stockChange:function(a,b){var c=this._stocks[a],d=c.stock;e=k.mix({target:d,currentTarget:d,lineIndex:Math.round(a),stockIndex:Math.round(b)},c.points[b]);this.fire("stockChange",e)},
beforeRender:function(){this.fire("beforeRender",this)},afterRender:function(){this.fire("afterRender",this)},getPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}});return t},{requires:"base gallery/template/1.0/index gallery/kcharts/1.1/raphael/index gallery/kcharts/1.1/basechart/index gallery/kcharts/1.1/tools/color/index gallery/kcharts/1.1/tools/htmlpaper/index gallery/kcharts/1.1/legend/index gallery/kcharts/1.1/datetime/theme gallery/kcharts/1.1/tools/touch/index gallery/kcharts/1.1/tip/index gallery/kcharts/1.1/animate/index gallery/kcharts/1.1/tools/graphtool/index".split(" ")});
KISSY.add("gallery/kcharts/1.1/datetime/theme",function(k){return{"ks-chart-default":{lineType:"arc",anim:!1,title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:"{COLOR}"}},xGrids:{isShow:!1},yGrids:{css:{color:"#eee"}},yAxis:{isShow:!1,css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666",
"font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px",marginLeft:-10}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"},alignX:"right",css:{"border-color":"{COLOR}"},offset:{y:-10,x:-10}}}}});
