registerNS('agile.ux.ms_nv.mssPalette');
agile.ux.mss_nv.mssPalette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		paletteDrag  						= new YAHOO.util.DD('mssPalette_nv');
		PaletteResize 						= new YAHOO.mssDDresize("mssPalette_nv", 'mss_resize_handle_nv');
		paletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];

		var dataset = agile.ux.dataset.multiSelectSearch();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;            
  
	},
		doMSSBoxFocus: function()
	{
		uxDom.addClass($('mss_palette_query_nv'),"focus_field");
	},
		doMSSBoxBlur: function()
	{
		uxDom.removeClass($('mss_palette_query_nv'), 'focus_field');		
	},
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	toggle : function()
	{
		var mssPalette = $('mssPalette_nv');
		if (mssPalette.style && mssPalette.style.display == 'block') {
			mssPalette.style.display = 'none';
		} else {
			mssPalette.style.display = 'block';
			agile.ux.mss_nv.mssPalette.position();
			$('mss_palette_query_nv').style.display='block';
			$('mss_floater_filter_nv').style.visibility='hidden';
			$('mss_treeContainerDiv_nv').style.visibility='hidden';
		}
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		// Palette alignment from launch button.
		var buttonOffSetWidth = 40; // palette alignment
		var buttonOffSetHeight = -260; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY($('cmdMssPallete_nv'));
		var positionLeft = uxDom.getX($('cmdMssPallete_nv'));
		var paletteWidth = uxDom.getStyle($('mssPalette_nv'), 'width');
		uxDom.setY( $('mssPalette_nv'), positionTop + buttonOffSetHeight )
		uxDom.setX( $('mssPalette_nv'), positionLeft - parseInt(paletteWidth) + buttonOffSetWidth );

		//Close other palettes
		$("mscl_palette").style.display = 'none';
		$("mssPalette").style.display = 'none';
		$("sss_palette").style.display = 'none';
		//$("musPalette").style.display = 'none';
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE RESET
	/////////////////////////////////////////////////////////////////////
	reset: function()
	{
		var resultsList = $("mss_resultsData_nv");
		var paletteItem = resultsList.getElementsByTagName("tr");
		for (var i = 0; i < paletteItem.length; i++)
		{
			paletteItem[i].style.display = 'none';
			uxDom.removeClass($(paletteItem[i]),"yui-dt-selected");
		}
		
	},
	handleKeyPress: function(e)
	{
		if (!e) var e = window.event;
		switch(e.keyCode)
		{
			/////////////////////////////////////////////////////////////////////
			// ENTER KEY
			/////////////////////////////////////////////////////////////////////
			case 13:	
			if ($('mss_palette_query_nv'))
			{
				agile.ux.mss_nv.mssPalette.search();
			} else {
				$('mss_palette_query_nv').select();
			}
			return false;
			YAHOO.util.Event.stopPropagation(e);
			break;
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE ITEM DOUBLE CLICKED
	/////////////////////////////////////////////////////////////////////
	mssItemDoubleClicked: function(oArgs)
	{
     	// Traverse up the DOM to find the row
     	while(elTag != "tr") 
		{
       		if(elTag == "body") 
			{
				return;
       		}
     	}
	},
	search: function() {
				
		for (var i=2; i<rowCount; i++)
		{
			for (var j=0; j<colCount; j++)
			{
				if (mytable.rows[i].cells[j].innerHTML.toLowerCase().indexOf(query) != -1)
				{
				}
			}
		}
	}
}
/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.mssDDresize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};
YAHOO.extend(YAHOO.mssDDresize, YAHOO.util.DragDrop);
YAHOO.mssDDresize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};
YAHOO.mssDDresize.prototype.onDrag = function(e)
{
    var newPos 		= [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX 	= newPos[0] - this.startPos[0];
    var offsetY 	= newPos[1] - this.startPos[1];
    var newWidth 	= Math.max(this.startWidth + offsetX, 10);
    var newHeight 	= Math.max(this.startHeight + offsetY, 10);
    var panel 		= this.getEl();

	panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$('mss_floater_content_nv').style.height = newHeight - 12 + "px";

	var curHeight;
	$('mss_resultsData_nv').style.height = newHeight - curHeight + "px";
};




