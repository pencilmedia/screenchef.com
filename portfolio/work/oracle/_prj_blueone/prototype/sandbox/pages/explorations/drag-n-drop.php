<!--
Dashboard proof-of-concept
by Alex Koorkoff
-->
<html>
<head>
	<title>Agile - drag and drop test</title>

	<link rel="stylesheet" type="text/css" href="/_anthony/dashboard/dashboard.php.css" />

	<script type="text/javascript" src="global/js/yui/yahoo/yahoo.js" ></script>
	<script type="text/javascript" src="global/js/yui/event/event.js" ></script>
	<script type="text/javascript" src="global/js/yui/dom/dom.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop.js" ></script>

<style type="text/css">
	#container { 
		clear: both; text-align: left; padding: 0 0; margin: 0 0; width: 70%; height: 100%;
	}
	
	#output {
		border:2px solid #000000; width:29%; height:90%; top:45px; left:700px; position:absolute;
	}
	
	.columnLeft  { 
		height: 100%;
		width: 62%;
		float: left;
		margin-left: 1%;
		min-height: 400px;
		border:1px solid #000000;
	}
	.columnRight { 
		height: 100%;
		width: 35%;
		float: right;
		margin-left: 1%;
		border:1px solid #000000;
	}

	.dropSlot { 
		visibility:hidden;background-color:#FF0000; border:0px;
		width: 100px;
		height:10px; top:0px; left:0px; cursor:move;
	}

	.wideWidget {
		width: 100%;
		height: 160px;
		/*border:1px solid #FF0000;*/
	}

	.narrowWidget {
		width: 100%;
		height: 120px;
		/*border:1px solid #0000FF;*/
	}

	#proxyWidget { 
		visibility:hidden; border:5px dotted #BBBBBB; cursor:move; 
		position:absolute; top:0px; left:0px; width:35px; height:20px; clear:both;
	}

	#widgetL1 {
		background:url(/global/images/rq_01.gif) 0 0 no-repeat; background-color:#6D739A;
	}

	#widgetL2 {
		background:url(/global/images/3_left_pane.png) 0 0 no-repeat; background-color:#7E5B60;
	}

	#widgetL3 {
		background:url(/global/images/2_top_pane.png) 0 0 no-repeat; background-color:#6D739A;
	}

	#widgetR1 {
		background:url(/global/images/thumbnail_iMac_75px.png) 0 0 no-repeat; background-color:#566F4E;
	}

	#widgetR2 {
		background:url(/global/images/logo_blueone_sml.png) 0 0 no-repeat; background-color:#7E5B60;
	}

	#widgetR3 {
		background:url(/global/images/thumbnail_iMac1.png) 0 0 no-repeat; background-color:#566F4E;
	}

	#widgetR4 {
		background:url(/global/images/thumbnail_sml_sata_drive.png) 0 0 no-repeat; background-color:#7E5B60;
	}
</style>

<script type="text/javascript">
var DOM = YAHOO.util.Dom;

function output(cText, bOverwrite)
{
	var _out = DOM.get("output");
	if(bOverwrite)
		_out.innerHTML = "";
		
	_out.innerHTML += cText;
}

//simple extension of the original class
AgileWidget = function(id, sGroup, config) {
	if (id) {
		YAHOO.util.DDM.mode = YAHOO.util.DDM.POINT;
		this.init(id, sGroup, config);
	}
}

YAHOO.extend(AgileWidget, YAHOO.util.DDProxy);

AgileWidget.prototype.startDrag = function(x, y) { 
	this.setDelta(25,15);//should I calculate these numbers ?
	DOM.setStyle(this.getEl(), "opacity", 0.4);
}

AgileWidget.prototype.onDragOut = function(e, id) { 
	var slot = DOM.get("dropSlot");
	if (DOM.getStyle(slot, "visibility") != "hidden")
		DOM.setStyle(slot, "visibility", "hidden");
}

AgileWidget.prototype.onDragOver = function(e, id) 
{ 
	var el = DOM.get(id);
	var slot = DOM.get("dropSlot");

	//calculate mouse position over this element
	var mouseX = YAHOO.util.Event.getPageX(e);
	var mouseY = YAHOO.util.Event.getPageY(e);
	var mousePos = new YAHOO.util.Point(mouseX, mouseY);
	//element we're hovering over
	var divPos = DOM.getRegion( el );
	var divHalf = (divPos['bottom'] - divPos['top']) / 2;//move into corresponding if branch
	//my original position
	var myPos = DOM.getRegion( this.getEl() );
	//stretch coordinates up and down to include slot space
	myPos['top'] -= 10;
	myPos['bottom'] += 10;
	myPos[1] = myPos['top'];//for consistency

	//see if we're still over the original location:
	if(myPos.contains(mousePos)){
		DOM.setStyle(slot, "visibility", "hidden");
		return;
	}
	
	//if DD between differenlty sized columns is not allowed, we need to check for that
	if(!MyApp.allowDragBetweenColumns()){
		var _wW = myPos['right'] - myPos['left'];//width of the widget being dragged
		var _wT = divPos['right'] - divPos['left'];//width of the target position
		output("<br>widget=" + _wW +" wide; target is " + _wT);
		output("<br>Width difference is " + Math.abs(_wW - _wT));
		if(Math.abs(_wW - _wT) >= 10){
			DOM.setStyle(slot, "visibility", "hidden");
			return;
		}
	}

 	if (id.indexOf("column")==0){
			
		var vicinity = MyApp.vicinity(mousePos);
		if(vicinity==null){
			output("<br><font color='red'>limbo...</font>");
			DOM.setStyle(slot, "visibility", "hidden");
			return;
		} else if(vicinity[0]==0 && vicinity[1]==0){
			//empty column situation
			output("<br>feels like we're in an empty column ???");
			DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px"); 
			DOM.setXY(slot, [divPos['left']+10, divPos['top']]);
			DOM.setStyle(slot, "visibility", "visible"); 
		} else {
			//make slot same width as this column minus margin
			DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px"); 
			DOM.setXY(slot, vicinity);
			DOM.setStyle(slot, "visibility", "visible"); 
		}
		output("<BR>cursor in " + el.className);
		
	} else if (id.indexOf("widget")==0){
		//make slot same width as the element it sits next to
		DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px"); 
		//see which half of the widget we're over:
		output("<BR>mouse=" + mouseY + "; over " + divPos.toString() + "; divMid=" + divHalf, true);
		if( mouseY >= divPos['top'] && mouseY <= (divPos['top']+divHalf) ){
			output("<BR>cursor in top half");
			DOM.setXY(slot, [divPos['left'], divPos['top']-10]);
		} else if( mouseY > (divPos['top']+divHalf) && mouseY <= divPos['bottom'] ){
			output("<BR>cursor in bottom half");
			DOM.setXY(slot, [divPos['left'], divPos['bottom']]);
		} 
		
		//see if my stretched area would swallow new slot position:
		if(myPos.intersect(DOM.getRegion(slot)) == null)
			DOM.setStyle(slot, "visibility", "visible");
		else
			DOM.setStyle(slot, "visibility", "hidden");

	}
}//end func


AgileWidget.prototype.endDrag = function(e) { 
	var me = this.getEl();
	var slot = DOM.get("dropSlot");
	
	//if slot is visible we assume it's in valid position
	if( DOM.getStyle(slot, "visibility") == "visible" ){
		var slotPos = DOM.getXY(slot);
		slotPos[1] += 10;
		var myPos = DOM.getRegion( this.getEl() );
		var myHeight = myPos['bottom'] - myPos['top'];		//this sounds like more precise

		MyApp.shiftwidgets([this.startPageX, this.startPageY], slotPos, myHeight);
		if(this.startPageX == slotPos[0] && slotPos[1]> 20 && this.startPageY < slotPos[1]){
			output("<br>endDrag()::correcting position upwards; slotPos[1]="+slotPos[1]);
			DOM.setXY(me, [slotPos[0], slotPos[1]-myHeight-10]);
		} else
			DOM.setXY(me, slotPos);
		DOM.setStyle(me, "zIndex", 5);//TODO: calculate
		if(!MyApp.isDashboard())
			DOM.setStyle(me, "width", DOM.getStyle(slot, "width"));
		DOM.setStyle(slot, "visibility", "hidden"); 
	}

	DOM.setStyle(this.getDragEl(), "visibility", "hidden"); 
	DOM.setStyle(me, "opacity", 1);
}//end func


</script>


<script type="text/javascript">

MyApp = function() {
	var ayWidgets = new Array();
	var ayColumns = new Array();
	var layoutIsDashboard = false;
	var dragBetweenColumns = true;
	var nWCount = 0;

	return {
		init: function() 
		{
			//get a list of all DIVs that contain widgets:
			var oMainDiv = DOM.get("container");
			if( !oMainDiv) return;
			var ayDivs = oMainDiv.getElementsByTagName("div");
			if( !ayDivs || ayDivs.length == 0) return;
			
			var nCCount = 0;
			//for each div create object based on its type
			for(var i=0; i < ayDivs.length; i++)
			{
				var cId = ayDivs[i].id;

				if ( cId.indexOf("widget")==0 ){
					ayWidgets[nWCount] = new AgileWidget(cId, "alex", { dragElId: "proxyWidget", resizeFrame:false });
					//ayWidgets[nWCount].setXConstraint(500, 500, 25);
					nWCount++;
				} else if ( cId.indexOf("column")==0 ){
					ayColumns[nCCount] = new YAHOO.util.DDTarget(cId, "alex");
					nCCount++;
				}

			}//end for
			
		}//end func

		, vicinity: function(xy) 
		{
			//returns nearest widget to current mouse position
			var maxBottom = 0;
			var myLeft = 0;
			for( var i=0; i < ayWidgets.length; i++)
			{
				var _region = DOM.getRegion(ayWidgets[i].id);
				//TODO: fix glitches 
				if( xy[0] <= _region["right"] && xy[0] >= _region["left"] ){
					maxBottom = Math.max(maxBottom, _region["bottom"]);
					myLeft = _region["left"];
					output("<br>"+ayWidgets[i].id + "; " + _region.toString());
					if( xy[1] >= (_region["top"]-10) && xy[1] <= _region["top"])
						return [_region["left"], _region["top"]-10];
					else if ( xy[1] >= _region["bottom"] && xy[1] <= (_region["bottom"]+10) )
						return [_region["left"], _region["bottom"]];
				}
			}
			//if we're here, then we haven't found any close widget, let's try something else
			if(xy[1] <= maxBottom)
				return null;
			else
				return [myLeft, maxBottom];
		}//end func

		, shiftwidgets: function(ddFromPos, ddToPos, shiftBy)
		{
			output("<br>SHIFT:::ddFromPos=" + ddFromPos[0] +"/"+ddFromPos[1]);
			output("; ddToPos=" + ddToPos[0] +"/"+ddToPos[1] + "; shift by "+shiftBy+"<br>");
			for( var i=0; i< ayWidgets.length; i++)
			{
				var _div = DOM.get(ayWidgets[i].id);
				var _xy = DOM.getXY(_div);
				output("<br>" + ayWidgets[i].id + " is at Y=" + _xy[1]);


				if(ddFromPos[0]==ddToPos[0] && _xy[1] >= ddFromPos[1] && _xy[1] >= ddToPos[1]){
					//do nothing
					output(", stays put");
				} else if(_xy[0] == ddFromPos[0] && _xy[1] >= (ddFromPos[1]+shiftBy) ){
					DOM.setY(_div, _xy[1] - shiftBy - 10);
					output(", moving UP, new Y=" + DOM.getY(_div));
				} else if(_xy[0] == ddToPos[0] && _xy[1] >= ddToPos[1]){
					DOM.setY(_div, _xy[1] + shiftBy + 10);
					output(", moving down, new Y=" + DOM.getY(_div));
				}

			}//end for
		}//end func

		, layoutSummary: function()
		{
			output("Applying Summary page layout<br>");
			layoutIsDashboard = false;
			for( var j=0; j < ayColumns.length; j++)
			{
				var maxBottom = 0;
				var oColumn = DOM.get(ayColumns[j].id);
				var columnPos = DOM.getXY(oColumn);
				var colWidth = parseInt( DOM.getStyle(oColumn, "width"), 10 );
				var ayDivs = oColumn.getElementsByTagName("div");

				for(var i=0; i < ayDivs.length; i++)
				{
					var cId = ayDivs[i].id;

					if(cId.indexOf("widget")!=0 )
						continue;

					var oWidget = ayDivs[i];

					var _h = parseInt( DOM.getStyle(oWidget, "height"), 10 );
					output(cId + " is " + _h + " high<br>");

					//DOM.setStyle(oWidget, "left", "0px");
					//DOM.setStyle(oWidget, "top", maxBottom + 10 + "px");
					DOM.setXY(oWidget, [columnPos[0], maxBottom + 10]);
					maxBottom = maxBottom + _h + 10;
				}//end for
			}//end for
		}//end func
		
		, layoutDashboard: function()
		{
			layoutIsDashboard = true;
			output("Applying Dashboard layout...<br>", true);
			var maxBottom = 0;
			var lastLonelyNarrow = null;
			var oColumn = DOM.get("columnLeft");
			var colWidth = parseInt( DOM.getStyle(oColumn, "width"), 10 );

			for(var i=0; i < ayWidgets.length; i++)
			{
				var oWidget = DOM.get(ayWidgets[i].id);
				var _w = parseInt( DOM.getStyle(oWidget, "width"), 10 );
				var _h = parseInt( DOM.getStyle(oWidget, "height"), 10 );

				oColumn.appendChild(oWidget);
				output(oWidget.id + "; width=" + _w + "<br>");
			
				if(_w <= colWidth/2){//narrow widget
					if(lastLonelyNarrow==null){
						DOM.setXY(oWidget, [10, maxBottom + 10]);
						maxBottom = maxBottom + _h + 10;
						lastLonelyNarrow = DOM.getXY(oWidget);
					} else {
						DOM.setXY(oWidget, [10+_w, lastLonelyNarrow[1]]);
						lastLonelyNarrow = null;
					}
				} else {
					DOM.setXY(oWidget, [10, maxBottom + 10])
					maxBottom = maxBottom + _h + 10;
				}
				
			}//end for
		}//end func

		, addWidget: function()
		{
			var oMainDiv = DOM.get("container");
			if( !oMainDiv) return;
			var el = DOM.get("protoWidget").cloneNode(false);
			nWCount++;
			el.id = el.id + "-" + nWCount;
			el.innerHTML += "I am a new widget ";
			el.innerHTML += el.id;
			DOM.setStyle(el, "width", "200px");
			DOM.setStyle(el, "height", "100px");
			DOM.setStyle(el, "visibility", "visible");
			DOM.setStyle(el, "background-color", "#"+nWCount*2+nWCount*2+nWCount*2);
			oMainDiv.appendChild(el);
			ayWidgets[ayWidgets.length] = new AgileWidget(el.id, "alex", { dragElId: "proxyWidget", resizeFrame:false });
			output("Adding new widget: " + el.id + "<br>");
			
			if(layoutIsDashboard)
				this.layoutDashboard();
			else
				this.layoutSummary();
		}//end func

		, removeWidget: function(cId)
		{
			var el = DOM.get(cId);
			if(!el) return;

			for(var i=0; i < ayWidgets.length; i++)
			{
				if(ayWidgets[i].id == cId) break;
			}
			
			ayWidgets.splice(i, 1);
			
			var oColumn = null;
			for( var j=0; j < ayColumns.length; j++)
			{
				oColumn = DOM.get(ayColumns[j].id);
				try{
					oColumn.removeChild(el);
				}catch(e){}
			}

			if(layoutIsDashboard)
				this.layoutDashboard();
			else
				this.layoutSummary();
		}//end func
		
		, isDashboard: function(){
			return layoutIsDashboard;
		}//end func

		, allowDragBetweenColumns: function(){
			return dragBetweenColumns;
		}//end func
	};
} ();

YAHOO.util.Event.addListener(window, "load", MyApp.init);

</script>

</head>
<body>

<div id="container">
	<div id="columnLeft" class="columnLeft">
		<div id="widgetL1" class="wideWidget">left-top</div>
		<div id="widgetL2" class="wideWidget">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L2</div>
		<div id="widgetL3" class="wideWidget">YAHOO.util.DD</div>
	</div>
	<div id="columnRight" class="columnRight">
		<div id="widgetR1" class="narrowWidget">right-first</div>
		<div id="widgetR2" class="narrowWidget">&nbsp;</div>
		<div id="widgetR3" class="narrowWidget">&nbsp;</div>
		<div id="widgetR4" class="narrowWidget">right-last</div>
	</div>
	<div id="proxyWidget">&nbsp;</div>
	<!--div id="protoWidget" class="testWidget">&nbsp;</div-->
	<div id="dropSlot" class="dropSlot">&nbsp;</div>
</div>
	<div style="top:5px;left:700px;position:absolute">Run layout:&nbsp;&nbsp;&nbsp;
		<a href="javascript:MyApp.layoutSummary();">Summary</a>&nbsp;
		<a href="javascript:MyApp.layoutDashboard();">Dashboard</a>
		<br>Actions:&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="javascript:MyApp.addWidget();">Add widget</a>&nbsp;
		<a href="javascript:MyApp.removeWidget(txtWidgetId.value);">Remove widget:</a>
		<input id="txtWidgetId" type="text" size="12">
	</div>
<div id="output"></div>
</body>
</html>





<!-- ************ CODE DUMPSTER BELOW THIS LINE ************* -->
	<!--div id="columnLeft" class="columnLeft">
		<div id="widgetL1" class="testWidget">left-top</div>
		<div id="widgetL2" class="testWidget">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L2</div>
		<div id="widgetL3" class="testWidget">YAHOO.util.DD</div>
	</div>
	<div id="columnRight" class="columnRight">
		<div id="widgetR1" class="testWidget">right-first</div>
		<div id="widgetR2" class="testWidget">&nbsp;</div>
		<div id="widgetR3" class="testWidget">&nbsp;</div>
		<div id="widgetR4" class="testWidget">right-last</div>
	</div-->
