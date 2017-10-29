var DOM = YAHOO.util.Dom;

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
	DOM.setStyle(this.getDragEl(), "zIndex", 7);//TODO: calculate
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
	var divHalf = (divPos['bottom'] - divPos['top']) / 2;
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
	
	//prohibit drag between columns:
	if(!MyApp.allowDragBetweenColumns()){
		var _wW = myPos['right'] - myPos['left'];	//width of the widget being dragged
		var _wT = divPos['right'] - divPos['left']; //width of the target position
		if(Math.abs(_wW - _wT) >= 10){				//if width difference is greater than 10 pixels
			DOM.setStyle(slot, "visibility", "hidden");
			return;
		}
	}
	

 	if (id.indexOf("column")==0){

		var vicinity = MyApp.vicinity(mousePos);
		if(vicinity==null){
			DOM.setStyle(slot, "visibility", "hidden");
			return;
		} else if(vicinity[0]==0 && vicinity[1]==0){
			//empty column situation
			DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px");
			DOM.setXY(slot, [divPos['left']+10, divPos['top']]);
			DOM.setStyle(slot, "visibility", "visible");
		} else {
			//make slot same width as this column
			DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px");
			DOM.setXY(slot, vicinity);
			DOM.setStyle(slot, "visibility", "visible");
		}

	} else if (id.indexOf("widget")==0 ){
		//make slot same width as the element it sits next to
		DOM.setStyle(slot, "width", (divPos['right']-divPos['left']) + "px");

		//see which half of the widget we're over:
		if( mouseY >= divPos['top'] && mouseY <= (divPos['top']+divHalf) )
			DOM.setXY(slot, [divPos['left'], divPos['top']-10]);
		else if( mouseY > (divPos['top']+divHalf) && mouseY <= divPos['bottom'] )
			DOM.setXY(slot, [divPos['left'], divPos['bottom']]);

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

	//if slot is visible we assume it is in valid position
	if( DOM.getStyle(slot, "visibility") == "visible" ){
		var slotPos = DOM.getXY(slot);
		slotPos[1] += 10;
		//var myHeight = parseInt( DOM.getStyle(me, "height"), 10 );
		var myPos = DOM.getRegion( this.getEl() );
		var myHeight = myPos['bottom'] - myPos['top'];		//this sounds like more precise
		
		MyApp.shiftwidgets([this.startPageX, this.startPageY], slotPos, myHeight);
		if(this.startPageX == slotPos[0] && slotPos[1]> 20 && this.startPageY < slotPos[1])
			DOM.setXY(me, [slotPos[0], slotPos[1]-myHeight-10]);
		else
			DOM.setXY(me, slotPos);
		DOM.setStyle(me, "zIndex", 5);//TODO: calculate
		if(!MyApp.isDashboard())
			DOM.setStyle(me, "width", DOM.getStyle(slot, "width")-2);//correction for border width
		DOM.setStyle(slot, "visibility", "hidden");
	}

	DOM.setStyle(this.getDragEl(), "visibility", "hidden");
	DOM.setStyle(me, "opacity", 1);
}//end func


MyApp = function() {
	var ayWidgets = new Array();
	var ayColumns = new Array();
	var layoutIsDashboard = false;
	var dragBetweenColumns = false;
	var nWCount = 0;

	return {
		init: function()
		{
			//get a list of all DIVs that contain widgets:
			var oMainDiv = DOM.get("PaneContent");
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
					ayWidgets[nWCount].setHandleElId("ddHandle");
					nWCount++;
				} else if ( cId.indexOf("column")==0 ){
					ayColumns[nCCount] = new YAHOO.util.DDTarget(cId, "alex");
					nCCount++;
				}

			}//end for
			el2 = DOM.get('p2');
			DOM.setStyle(el2, "display", "none");
			setTimeout(MyApp.doDone,3000);
		}//end func
		, doDone : function()
		{
			el1 = DOM.get('p1');
			el2 = DOM.get('p2');
			DOM.setStyle(el1, "display", "none");
			DOM.setStyle(el2, "display", "");
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
					if( xy[1] >= (_region["top"]-10) && xy[1] <= _region["top"])
						return [_region["left"], _region["top"]-10];
					else if ( xy[1] >= _region["bottom"] && xy[1] <= (_region["bottom"]+10) )
						return [_region["left"], _region["bottom"]];
				}
			}
			//if we're here, then we haven't found any close widget, so we try something else
			if(xy[1] <= maxBottom)
				return null;
			else
				return [myLeft, maxBottom];
		}//end func

		, shiftwidgets: function(ddFromPos, ddToPos, shiftBy)
		{
			for( var i=0; i< ayWidgets.length; i++)
			{
				var _div = DOM.get(ayWidgets[i].id);
				var _xy = DOM.getXY(_div);

				if(ddFromPos[0]==ddToPos[0] && _xy[1] >= ddFromPos[1] && _xy[1] >= ddToPos[1])
					;//do nothing
				else if(_xy[0] == ddFromPos[0] && _xy[1] >= (ddFromPos[1]+shiftBy) )
					DOM.setY(_div, _xy[1] - shiftBy - 10);
				else if(_xy[0] == ddToPos[0] && _xy[1] >= ddToPos[1])
					DOM.setY(_div, _xy[1] + shiftBy + 10);

			}//end for
		}//end func

		, layoutSummary: function()
		{
			layoutIsDashboard = false;
			for( var j=0; j < ayColumns.length; j++)
			{
				var maxBottom = 0;
				var oColumn = DOM.get(ayColumns[j].id);
				var columnPos = DOM.getXY(oColumn);
				var colWidth = parseInt( DOM.getStyle(oColumn, "width"), 10 );
				for(var i=0; i < ayWidgets.length; i++)
				{
					var oWidget = DOM.get(ayWidgets[i].id);
					var _w = parseInt( DOM.getStyle(oWidget, "width"), 10 );
					var _h = parseInt( DOM.getStyle(oWidget, "height"), 10 );

					if(_w+20==colWidth){//this is the correct column
						oColumn.appendChild(oWidget);
						//DOM.setStyle(oWidget, "left", 10);
						//DOM.setStyle(oWidget, "top", maxBottom + 10);
						DOM.setXY(oWidget, [columnPos[0]+10, maxBottom + 10]);
						maxBottom = maxBottom + _h + 10;
					}
				}//end for
			}//end for
		}//end func

		, layoutSummary2: function()
		{
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

					if(cId.indexOf("widget")==-1 )
						continue;

					var oWidget = ayDivs[i];

					var _h = parseInt( DOM.getStyle(oWidget, "height"), 10 );

					DOM.setStyle(oWidget, "left", "0px");
					DOM.setStyle(oWidget, "top", maxBottom + 10 + "px");
					//DOM.setXY(oWidget, [columnPos[0]+10, maxBottom + 10]);
					maxBottom = maxBottom + _h + 10;
				}//end for
			}//end for
		}//end func

		, isDashboard: function()
		{
			return layoutIsDashboard;
		}//end func
		
		, allowDragBetweenColumns: function()
		{
			return dragBetweenColumns;
		}
	};
} ();


var summary = {};
summary.widgetId = 1;
summary.widget1_isOn = true;
summary.widget2_isOn = true;
summary.widget3_isOn = true;
summary.widget4_isOn = true;
summary.widget5_isOn = true;
summary.widget6_isOn = true;
summary.widget7_isOn = true;

summary.init = function()
{	
	jWidget.init();
	jQuery('#row0').click( summary.toggleRow);
	jQuery('.row0_content').hide();
	jQuery('.showThread').bind('click', summary.showThread);
	
	jQuery('#cmdEditMode').click(summary.edit_on_click);
	jQuery('#cmdConfigureMode').click(summary.configure_on_click);
	jQuery('#cmdCancel').click(summary.cancel_on_click);
	jQuery('#cmdSave').click(summary.save_on_click);	
	jQuery('#cmdHide1,#cmdHide2,#cmdHide3,#cmdHide4,#cmdHide5,#cmdHide6,#cmdHide7').click(summary.widget_hide_on_click)
	jQuery('#cmdMoveUp2').click(summary.widget_move_up_on_click)
	
	jQuery('.widget_editor,#cmdSave, #cmdCancel').hide();
}

summary.edit_on_click = function()
{
	javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui_personalize.php', 'mainwin', function() { dp_test.init();});
	return false;
}

summary.configure_on_click = function()
{
	javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui_configure.php', 'mainwin', function() { dp_test.init();});
	return false;
}
summary.cancel_on_click = function()
{
	jQuery('.widget_editor').toggle();
	jQuery('#cmdEditMode').show();
	jQuery('#cmdSave').hide();
	jQuery('#cmdCancel').hide();
}

summary.widget_move_up_on_click = function()
{
	jQuery('#widgetL2').clone().insertBefore('#widgetL1');
	jQuery('#cmdMoveDown2').click(summary.widget_move_down_on_click)
	jQuery(this).parent().parent().remove();
}

summary.widget_move_down_on_click = function()
{
	jQuery('#widgetL2').clone().insertBefore('#widgetL3');
	jQuery('#cmdMoveUp2').click(summary.widget_move_up_on_click)
	jQuery(this).parent().parent().remove();
}
summary.save_on_click = function()
{
	jQuery('.widget_editor').toggle();
	jQuery('#cmdEditMode').show();
	jQuery('#cmdSave').hide();
	jQuery('#cmdCancel').hide();
	
	if ( summary.widget1_isOn )
	{
		jQuery('#widgetL1').show();
	} else {
		jQuery('#widgetL1').hide();
	}

	if ( summary.widget2_isOn )
	{
		jQuery('#widgetL2').show();
	} else {
		jQuery('#widgetL2').hide();
	}
	if ( summary.widget3_isOn )
	{
		jQuery('#widgetL3').show();
	} else {
		jQuery('#widgetL3').hide();
	}

	if ( summary.widget4_isOn )
	{
		jQuery('#widgetR1').show();
	} else {
		jQuery('#widgetR1').hide();
	}
	if ( summary.widget5_isOn )
	{
		jQuery('#widgetR2').show();
	} else {
		jQuery('#widgetR2').hide();
	}
	if ( summary.widget6_isOn )
	{
		jQuery('#widgetR3').show();
	} else {
		jQuery('#widgetR3').hide();
	}
	if ( summary.widget7_isOn )
	{
		jQuery('#widgetR4').show();
	} else {
		jQuery('#widgetR4').hide();
	}

}

summary.widget_hide_on_click = function()
{
	switch ( this.id )
	{
		case 'cmdHide1':
			if ( summary.widget1_isOn )
			{
				jQuery('#widgetL1 .itemHeader,#widgetL1 .itemContent').addClass('semitrans');
				summary.widget1_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetL1 .itemHeader,#widgetL1 .itemContent').removeClass('semitrans');
				summary.widget1_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		case 'cmdHide2':
			if ( summary.widget2_isOn )
			{
				jQuery('#widgetL2 .itemHeader,#widgetL2 .itemContent').addClass('semitrans');
				summary.widget2_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetL2 .itemHeader,#widgetL2 .itemContent').removeClass('semitrans');
				summary.widget2_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		case 'cmdHide3':
			if ( summary.widget3_isOn )
			{
				jQuery('#widgetL3 .itemHeader,#widgetL3 .itemContent').addClass('semitrans');
				summary.widget3_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetL3 .itemHeader,#widgetL3 .itemContent').removeClass('semitrans');
				summary.widget3_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;

		case 'cmdHide4':
			if ( summary.widget4_isOn )
			{
				jQuery('#widgetR1 .itemHeader,#widgetR1 .itemContent').addClass('semitrans');
				summary.widget4_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetR1 .itemHeader,#widgetR1 .itemContent').removeClass('semitrans');
				summary.widget4_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		case 'cmdHide5':
			if ( summary.widget5_isOn )
			{
				jQuery('#widgetR2 .itemHeader,#widgetR2 .itemContent').addClass('semitrans');
				summary.widget5_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetR2 .itemHeader,#widgetR2 .itemContent').removeClass('semitrans');
				summary.widget5_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		case 'cmdHide6':
			if ( summary.widget6_isOn )
			{
				jQuery('#widgetR3 .itemHeader,#widgetR3 .itemContent').addClass('semitrans');
				summary.widget6_isOn = false;	
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetR3 .itemHeader,#widgetR3 .itemContent').removeClass('semitrans');
				summary.widget6_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		case 'cmdHide7':
			if ( summary.widget7_isOn )
			{
				jQuery('#widgetR4 .itemHeader,#widgetR4 .itemContent').addClass('semitrans');
				summary.widget7_isOn = false;			
				jQuery(this).html('<img src="global/images/icn_action_delete.png"  /');
			} else {
				jQuery('#widgetR4 .itemHeader,#widgetR4 .itemContent').removeClass('semitrans');
				summary.widget7_isOn = true;			
				jQuery(this).html('<img src="global/images/icn_action_approve.png"  />');
			}
			break;
		default:
			break;
	}
}

summary.sortable = function()
{
	jQuery('.groupWrapper').Sortable(
		{
			accept: 		'groupItem',
			helperclass: 	'sortHelper',
			activeclass : 	'sortableactive',
			hoverclass : 	'sortablehover',
			handle: 		'div.itemHeader',
			tolerance: 		'pointer',
			onChange: 		function(ser) {},
			onStart: 		function()
			{
				jQuery.iAutoscroller.start(this, document.getElementsByTagName('body'));
			},
			onStop:			function()
			{
				jQuery.iAutoscroller.stop();
			}
		}
	);
	jQuery('#add').bind('click', summary.add);
}

summary.showThread = function(e)
{
	jQuery('.discussionMessage').hide();
	jQuery('.discussionContent').show();
	jQuery('.showThread').removeClass('selected_row');
	jQuery(this).addClass('selected_row');
};

summary.doClick = function(e)
{
	alert('Do something...');
};

summary.add = function()
{
	var id = summary.widgetId++;
	if (id > 10)
	{
		alert('Please buy more credits :-)');
		return;
	} else {
		var newContainer = '';
		newContainer += '<div id="' + id + '" class="groupItem">';
		newContainer += '	<div class="itemHeader">'
		newContainer += '		<a href="#" class="closeEl expanded">&nbsp;</a>';
		newContainer += '			Right Widget ' + id;
		newContainer += '		<a href="#" id="cmd_' + id + '" class="cmdA" onclick="summary.doClick()">&nbsp;</a>';
		newContainer += '		<a href="#" id="cmd_' + id + '" class="cmdB" onclick="summary.doClick()">&nbsp;</a>';
		newContainer += '	</div>';
		newContainer += '	<div class="itemContent">';
		newContainer += '		<ul>';
		newContainer += '			<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>';
		newContainer += '		</ul>';
		newContainer += '	</div>';
		newContainer += '</div>';

		jQuery('#side')
    	.append(newContainer)
	    .SortableAddItem(document.getElementById(id));
		jQuery('a.closeEl').bind('click', summary.toggleContent);
	}
};

summary.toggleRow = function(e)
{
	var targetContent = jQuery('.row0_content');
	if (targetContent.css('display') == 'none') {
		jQuery(this.parentNode).css('border-bottom','1px solid silver');
		targetContent.show();
		jQuery(this).addClass('expanded');
	} else {
		targetContent.hide();
		jQuery(this).removeClass('expanded');
	}
	return false;
}


var dashboard = {};
dashboard.dashboardId = 1;
dashboard.init = function()
{	
	jWidget.init();
	jQuery('#row0').click( dashboard.toggleRow);
	jQuery('#row1').click( dashboard.toggleRow);
	jQuery('#row2').click( dashboard.toggleRow);
	jQuery('#row2a').click( dashboard.toggleRow);
	jQuery('#row3').click( dashboard.toggleRow);
	jQuery('#row4').click( dashboard.toggleRow);
	//jQuery('.row0_content').hide();
	jQuery('.row1_content').hide();
	jQuery('.row2_content').hide();
	jQuery('.row2a_content').hide();
	jQuery('.row3_content').hide();
	jQuery('.row4_content').hide();
	jQuery('.showThread').bind('click', dashboard.showThread);
	
	jQuery('#report00,#cmdBack').click( dashboard.doImageSwap )
	jQuery('#sm_02,#sm_03').hide();

	// Default Expanded first row in Resource Tab Pools Activities Status
	jQuery('#row0').addClass('expanded');
	jQuery('#row0_first').removeClass('first');
	//jQuery('#row00a').show();
	dashboard.build_menu_00();
}

dashboard.build_menu_00 = function(e)
{
	proj_dashboard_menu_00_items = 
	[
		[
			{ text: "Timesheet Search", url: "javascript:getDialog('pages/_testing/proj_action_dialogs/timesheet_report.php',670,980)" }
		]
	];
	var format_proj_tabs_menu_00 = new YAHOO.widget.Menu("format_proj_tabs_menu_00", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	function toggle_format_dashboard_menu_00(p_oEvent)
	{
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (format_proj_tabs_menu_00.getItems() == 0) 
		{
			format_proj_tabs_menu_00.addItems(proj_dashboard_menu_00_items);
			format_proj_tabs_menu_00.render(document.body);
			format_proj_tabs_menu_00.cfg.setProperty("context", ["cmd_proj_dashboard_menu_00", "tl","bl"]);		
		}
		format_proj_tabs_menu_00.align("tl", "bl");
		format_proj_tabs_menu_00.show();
	}
	YAHOO.util.Event.addListener("cmd_proj_dashboard_menu_00", "mousedown", toggle_format_dashboard_menu_00);
}

dashboard.doImageSwap = function(e)
{
	if ( jQuery('#sm_01').css('display') == 'block' )
	{
		jQuery('#sm_01').hide();
		jQuery('#sm_02,#sm_03').show();
	} else {
		jQuery('#sm_01').show();
		jQuery('#sm_02,#sm_03').hide();
	}
}

dashboard.showThread = function(e)
{
	jQuery('.discussionMessage').hide();
	jQuery('.discussionContent').show();
	jQuery('.showThread').removeClass('selected_row');
	jQuery(this).addClass('selected_row');
};

dashboard.toggleRow = function(e)
{
	var targetContent = jQuery('.'+this.id+'_content');
	if (targetContent.css('display') == 'none') {
		targetContent.show();
		jQuery(this).addClass('expanded');
		jQuery('#'+this.id+'_first').removeClass('first');
		jQuery('#row2a_first').addClass('last');
		jQuery('#temp01').css('border-bottom','1px solid silver !important');
	} else {
		targetContent.hide();
		jQuery(this).removeClass('expanded');
		jQuery('#'+this.id+'_first').addClass('first');
		jQuery('#row2a_first').removeClass('last');
	}
	// Smoke & Mirrors
	return false;
}

var jWidget = {};
jWidget.widgetId = 1;
jWidget.init = function()
{	
	jQuery('a.closeEl').bind('click', jWidget.toggleContent);
	jQuery('a.cmdA').bind('click', jWidget.doClick);
	jQuery('.skins').click(jWidget.skinsOnClick);
	jQuery('a.cmdB').bind('click.agile', jWidget.doMaximize);
}

jWidget.toggleContent = function(e)
{
	var targetContent = jQuery('div.itemContent', this.parentNode.parentNode.parentNode);
	var targetItemHeader = jQuery(this.parentNode.parentNode) ;
	if (targetContent.css('display') == 'none') {
		targetItemHeader.css('border-bottom','1px solid silver');
		targetContent.show();
		jQuery(this).addClass('expanded');
	} else {
		targetContent.hide();
		jQuery(this).removeClass('expanded');
		targetItemHeader.css('border-bottom',0);
	}
	return false;
};

jWidget.doClick = function(e)
{
	alert('Do something...');
};

jWidget.doMaximize = function(e)
{
	// hide all widget containers
	jQuery('.groupItem').hide();
	
	//change action in maximize icon to minimize
	jQuery(this).removeClass('cmdB');
	jQuery(this).addClass('cmdM');
	jQuery(this).unbind('click.agile');
	jQuery(this).bind('click.agile', jWidget.doMinimize);

	//get the widget
	var currentId = this.id;
	currentId = currentId.substring(currentId.indexOf('_')+1);
	var currentWidget = jQuery('#'+currentId);
	
	// Maximize the widget
	currentWidget.css('position','absolute');
	currentWidget.css('top',10);
	currentWidget.css('left',10);
	currentWidget.width(800);
	currentWidget.height(420);
	currentWidget.show();
};

jWidget.doMinimize = function(e)
{
	//change action in minimize icon to maximize
	jQuery(this).removeClass('cmdM');
	jQuery(this).addClass('cmdB');
	jQuery(this).unbind('click.agile');
	jQuery(this).bind('click.agile', jWidget.doMaximize);
	
	//get the widget
	var currentId = this.id;
	currentId = currentId.substring(currentId.indexOf('_')+1);
	var currentWidget = jQuery('#'+currentId);
	
	currentWidget.width("100%");
	currentWidget.height('auto');
	
	//Clean up previous values
	currentWidget.css('position','');
	currentWidget.css('top','');
	currentWidget.css('left','');
	
	//Show all widget containers
	jQuery('.groupItem').show();
};

jWidget.skinsOnClick = function()
{
	jQuery('#dcss').attr("href", '/pages/layouts/summary_layout_' + this.id + '.css'); 
}

// Used in My Stuff Widget Tab.
// Depricated.
function configureWidget()
{
	jQuery('#widget_config').toggle(100);
}
function addWidget()
{
	jQuery('#widget_config').toggle();
	jQuery('#widget_table4').show();
	jQuery('#table4_content_1').show();
}
function runWidget()
{
	jQuery('#table4_content_1').hide();
	jQuery('#table4_content_2').show();	
}