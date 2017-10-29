/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI-LIST AND PALETTE
/////////////////////////////////////////////////////////////////////////

var uxDom = YAHOO.util.Dom;
agile.ux.multilist =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.multilist.setYUIControls();
		agile.ux.multilist.setEventHandlers();
	},
	/////////////////////////////////////////////////////////////////////
	//	SETYUICONTROLS
	/////////////////////////////////////////////////////////////////////
	setYUIControls : function()
	{
	    var oDragDrop, oPalette, oACDS, oAutoComp;
		var dragDropFloater = new YAHOO.util.DD("msl_palette");
	
		gIsFading = true;
		
		anim = new YAHOO.util.Anim('msl_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		anim.onComplete.subscribe(mslResetPalettePill);
		
		paletteAnim = new YAHOO.util.Anim('msl_palette_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		paletteAnim.onComplete.subscribe(mslResetPalettePill);	
		
		dragDropFloater.addInvalidHandleClass("nodrag");
		dragDropFloater.endDrag = agile.ux.multilist.checkEndDragPosition;
		oPalette = new YAHOO.DDResize("msl_palette", "floater_resize_handle");

		/////////////////////////////////////////////////////////////////////
		//	AUTOCOMPLETE
		/////////////////////////////////////////////////////////////////////
		oACDS = new YAHOO.widget.DS_JSArray( agile.ux.dataset.countries() );
		oAutoComp = new YAHOO.widget.AutoComplete('target_query','results_container', oACDS);
		oAutoComp.queryDelay = 0;
		oAutoComp.prehighlightClassName = "yui-ac-prehighlight";
		oAutoComp.typeAhead = true;
		oAutoComp.useShadow = false;
		oAutoComp.forceSelection = true; 
		oAutoComp.animVert  = false;
			
		var myColumnHeaders = [ {key:"name",text:"Country Name"} ];
		var myColumnSet = new YAHOO.widget.ColumnSet(myColumnHeaders);
		var myDataSource = new YAHOO.util.DataSource(YAHOO.example.Data.countries);
		myDataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
		myDataSource.responseSchema = { fields: ["name"] };
		myDataTable = new YAHOO.widget.DataTable("msl_palette_results",myColumnSet,myDataSource,{rowSingleSelect:true, scrollable:true});
		myDataTable.subscribe("cellClickEvent",myDataTable.onEventSelectRow);
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.multilist.itemDoubleClicked);
		myDataTable.subscribe("cellClickEvent", agile.ux.multilist.getSelectedCells);

		var tableId = uxDom.generateId(myDataTable._elTable);
		YAHOO.util.DDM.mode = YAHOO.util.DDM.POINT;
		var dragDrop = new DDTable(tableId);
		dragDrop.myDataTable = myDataTable;
		var ddTarget = new YAHOO.util.DDTarget("selected_container");		
	},
	/////////////////////////////////////////////////////////////////////
	//	SETEVENTHANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent("agileautocomplete",	'click',	qFocus);
		addEvent("msl_cmdPalette",			'click', 	agile.ux.multilist.openPalette);
		addEvent("close_floater", 		'click', 	agile.ux.multilist.closePalette);
		addEvent("msl_palette_query",		'keyup', 	filterResults);
		addEvent("target_query",		'keyup', 	agile.ux.multilist.multiSelectKeyHandler);
		addEvent("target_query",		'blur', 	removeHighlightBorder);
		addEvent("target_query",		'focus', 	highlightBorder);
		addEvent("selected_container",	'focus', 	highlightBorder);
	},
	/////////////////////////////////////////////////////////////////////
	//	REMOVETARGETITEMS
	/////////////////////////////////////////////////////////////////////
	//	Removes autocomplete pill via 'x' button.
	/////////////////////////////////////////////////////////////////////
	removeTargetItem: function(id)
	{
		var itemId = $(id);
		itemId.parentNode.removeChild(itemId);
		// Restores item into palette
		if ( $(id.substring(3)) )
		{
			$(id.substring(3)).parentNode.style.display = '';
			$(id.substring(3)).style.display = '';
		}
	},
	
	/////////////////////////////////////////////////////////////////////
	//	removeSelectedTargetItems
	/////////////////////////////////////////////////////////////////////
	//	Removes all selected pills when auto complete 
	//	delete key is pressed.
	/////////////////////////////////////////////////////////////////////
	removeSelectedTargetItems: function(e)
	{
		var currentItem;
		var itemsList = $('msl_pill_results');
		var items = itemsList.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].className == 'selected')
			{
				currentItem = $(items[i]).id.substring(3);
				if ( $(currentItem) ) $(currentItem).parentNode.style.display='';
				$(items[i]).parentNode.removeChild($(items[i]));
				i -= 1 // correct array count since item removal.
			}
		}
	},
	
	/////////////////////////////////////////////////////////////////////
	//	CHECKENDDRAGPOSITION
	/////////////////////////////////////////////////////////////////////
	//	If palette top is draged outside the boundries of the body
	//	move it down 10 pixels.
	/////////////////////////////////////////////////////////////////////
	checkEndDragPosition: function(e)
	{
		if (parseInt($(this.id).style.top) < 0 )
		{
			$(this.id).style.top = 10 + 'px';			
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	GETSELECTEDCELLS
	/////////////////////////////////////////////////////////////////////
	//	Displays the number of cells being dragged from palette.
	/////////////////////////////////////////////////////////////////////
	getSelectedCells: function(e)
	{
		var numberOfSelectedCells = 0;
		for (var i = 0; i < myDataTable.getSelectedRows().length; i++)
		{
			if ( myDataTable.getSelectedRows()[i].style.display != 'none' )
			{
				numberOfSelectedCells++;
			}
		}
		$('msl_palette_tooltip').innerHTML = numberOfSelectedCells;
	},
	/////////////////////////////////////////////////////////////////////
	//	OPENPALETTE
	/////////////////////////////////////////////////////////////////////
	openPalette: function() 
	{ 
		$("msl_palette_query").value = '';
		$("msl_palette_results").style.overflow = 'auto';
		$("msl_palette_query").style.visibility = 'visible';
		$("msl_palette").style.display = 'block'; 
		var positionTop = uxDom.getY($('msl_cmdPalette'));
		var positionLeft = uxDom.getX($('msl_cmdPalette'));
		var paletteWidth = uxDom.getStyle($('msl_palette'), 'width');
		uxDom.setY( $('msl_palette'), positionTop + 40 )
		uxDom.setX( $('msl_palette'), positionLeft - parseInt(paletteWidth) + 40 );
		myDataTable.select(myDataTable.getRow(0)); 
	},
	/////////////////////////////////////////////////////////////////////
	//	CLOSEPALETTE
	/////////////////////////////////////////////////////////////////////
	closePalette: function() 
	{
		$("msl_palette").style.display = '';
		//$("multi_select_query").focus();
		agile.ux.multilist.resetPalette();
	},
	resetPalette: function()
	{
		myDataTable._unselectAllRows();
		var resultsList = $("msl_palette_results");
		var items = resultsList.getElementsByTagName("td");
		for (var i = 0; i < items.length; i++) 
		{
			items[i].style.display = '';
			items[i].parentNode.style.display = '';
			uxDom.removeClass($(items[i]),'yui-dt-selected');
		}
	},
	/////////////////////////////////////////////////////////////////////
	// ITEMDOUBLECLICKED
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is doubled clicked.
	/////////////////////////////////////////////////////////////////////
	itemDoubleClicked: function(oArgs)
	{
		//alert(oArgs.id);
		var listItemName = $(oArgs.target.id).innerHTML;
		if (isNewItem(listItemName))
		{
			if (  $(oArgs.target.id).style.display != 'none'  )
			{	
				$('msl_palette_added_notice').style.display = 'block';
				gfadeTimer = null;
				gfadeTimer = setTimeout("paletteAnim.animate();",250);
				var oID = 'ux-' + oArgs.target.id;
				agile.ux.multilist.addPill(listItemName, oID);
				$(oArgs.target.id).parentNode.style.display = 'none';
				uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
			}
		}
	},	

	/////////////////////////////////////////////////////////////////////
	// ITEMDRAGGED
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is dragged.
	/////////////////////////////////////////////////////////////////////
	itemDragged: function(oArgs)
	{
		var listItemName = oArgs.innerHTML;
		if (isNewItem(listItemName))
		{
			if (  $(oArgs.id).style.display != 'none'  )
			{
				$('msl_added_notice').style.display = 'block';
				gfadeTimer = null;
				gfadeTimer = setTimeout("anim.animate();",250);
				var oID = 'ux-' + oArgs.id;
				agile.ux.multilist.addPill(listItemName, oID);
				$(oArgs.parentNode.id).style.display = 'none';
				uxDom.removeClass($(oArgs.parentNode.id), 'yui-dt-selected');
			}
		}
	},
	
	/////////////////////////////////////////////////////////////////////
	// ADDPILL
	/////////////////////////////////////////////////////////////////////
	//	Creates palette pill object
	/////////////////////////////////////////////////////////////////////
	addPill: function(item, id)
	{
		var results = $('msl_pill_results')
		var oID = id;
		var li = document.createElement("li");
		li.onmousedown = agile.ux.multilist.handlePillSelection;
		li.setSelected = setSelected;
		li.rowNumber = 0;
		li.id = oID;
		li.innerHTML = item + '<a href=# class="delete_button" onclick=agile.ux.multilist.removeTargetItem(\'' + oID + '\') tabindex="-1"><span>x</span></a>';
		results.insertBefore(li, results.firstChild);
	},
	/////////////////////////////////////////////////////////////////////
	// handlePillSelection
	/////////////////////////////////////////////////////////////////////
	handlePillSelection: function(e)
	{
		if (!e) var e = window.event; 
		if (!e.ctrlKey) agile.ux.multilist.selectAllBullets(false);
		(this.className == 'selected') ? this.className = '' : this.className = 'selected';
	},
	/////////////////////////////////////////////////////////////////////
	// selectAllBullets
	/////////////////////////////////////////////////////////////////////
	selectAllBullets: function(selectedStatus)
	{
		var itemsList = $('msl_pill_results');
		var items = itemsList.getElementsByTagName("li");	
		if (items[0])
		{
			if ( items[0].className == 'selected' ) selectedStatus = false;
		}
		for (var i = 0; i < items.length; i++)
		{
			items[i].setSelected(selectedStatus);
		}
	},
	/////////////////////////////////////////////////////////////////////
	// setSelected
	/////////////////////////////////////////////////////////////////////
	setSelected: function(selectedStatus)
	{
		this.className = selectedStatus ? 'selected' : '';
	},
	/////////////////////////////////////////////////////////////////////
	// PILL QUERY KEY HANDLER
	/////////////////////////////////////////////////////////////////////
	multiSelectKeyHandler: function(e)
	{
		if (!e) var e = window.event 
		if (e.altKey)
		{
			if (e.keyCode == 76)
			agile.ux.multilist.openPalette();
			return;
		}

		switch(e.keyCode)
		{
			/////////////////////////////////////////////////////////////////////
			// CONTROL + A
			/////////////////////////////////////////////////////////////////////
			case 65:	
				if ( e.ctrlKey ) { agile.ux.multilist.selectAllBullets(true); }
				break;
			/////////////////////////////////////////////////////////////////////
			// APPLE KEY + A
			/////////////////////////////////////////////////////////////////////
			case 224:
				if ( e.keyCode == 65) { agile.ux.multilist.selectAllBullets(true); }
				break;
			/////////////////////////////////////////////////////////////////////
			// ENTER KEY
			/////////////////////////////////////////////////////////////////////
			case 13:	
				if ($('target_query').value)
				{
					var listItemName = $('target_query').value
					if (isNewItem( listItemName ))
					{
						agile.ux.multilist.addPill(listItemName, removeSpaces( listItemName ));
					}
					//am
					$('target_query').value = '';
				}
				break;
			/////////////////////////////////////////////////////////////////////
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
				agile.ux.multilist.removeSelectedTargetItems();
				break;
			
			default:
				return false;
		}
	}
};


function doResultsEnter(e)
{
	if (e.keyCode == 13)
	{
		alert('enter key pressed');
		var x = $('msl_palette_results').firstChild;
		var items = x.getElementsByTagName("tr");

		for (var i=0;i<items.length;i++)
		{
			var str = items[i].innerHTML.toLowerCase();
			var className = items[i].className;
			if( className.indexOf('yui-dt-selected') > 0 )
			{
				var listItemName = items[i].firstChild.innerHTML;
				var oID = 'ux-' + items[i].id;
				agile.ux.multilist.addPill(listItemName, oID);
				uxDom.removeClass($(items[i].id),'yui-dt-selected');
			}
		}
		$('multi_select_query').focus();
	}
}

/////////////////////////////////////////////////////////////////////
// itemClicked
/////////////////////////////////////////////////////////////////////
function itemClicked()
{
	gSelectedItem = this;
	this.setSelected(true);
	this.className = this.selected? "selected" : "";
}

/////////////////////////////////////////////////////////////////////
// setSelected
/////////////////////////////////////////////////////////////////////
function setSelected(selected)
{
	this.selected = selected;
	this.className = this.selected? "selected" : "";
}



function isNewItem(o)
{
	// Checks to see if the item has already been
	// added to the results list.
	var isNewItem = true;
	var items = $("msl_pill_results").getElementsByTagName("li");
	for (var i = 0; i < items.length; i++) {
		var str = items[i].innerHTML.toLowerCase();
		if (str.indexOf( o.toLowerCase() ) != -1)
			isNewItem = false;
	}
	return isNewItem;
}

/////////////////////////////////////////////////////////////////////
// removeSpaces
/////////////////////////////////////////////////////////////////////
function qFocus() 
{ 
	$('target_query').focus();
	highlightBorder('agileautocomplete');
}


/////////////////////////////////////////////////////////////////////
// removeSpaces
/////////////////////////////////////////////////////////////////////
function removeSpaces(string)
{
	var tstring = "";
	string = '' + string;
	splitstring = string.split(" ");
	for(i = 0; i < splitstring.length; i++)
	tstring += splitstring[i];	
	return tstring;
}

/////////////////////////////////////////////////////////////////////
// filterResults
/////////////////////////////////////////////////////////////////////
function filterResults() 
{
	var query = $("msl_palette_query").value.toLowerCase();
	var resultsList = $("msl_palette_results");
	var items = resultsList.getElementsByTagName("td");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var str = item.innerHTML.toLowerCase();
		var match = (str.indexOf(query) != -1);
		if (isNewItem(str))
		{
			if ( match )
			{
				item.style.display = '';
				item.parentNode.style.display = '';
			} else {
				item.style.display = 'none';
				item.parentNode.style.display = 'none';
				item.style.className = '';
			}
		}
	}
} 

/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.DDResize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};

YAHOO.extend(YAHOO.DDResize, YAHOO.util.DragDrop);

YAHOO.DDResize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;

    this.startPos = [YAHOO.util.Event.getPageX(e),
                     YAHOO.util.Event.getPageY(e)];
};

YAHOO.DDResize.prototype.onDrag = function(e)
{
    var newPos = [YAHOO.util.Event.getPageX(e),
                  YAHOO.util.Event.getPageY(e)];

    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];

    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);

    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$("floater_content").style.height = newHeight - 12 + "px";
	$("msl_palette_results").style.height = newHeight - 90 + "px";
};


//////////////////////////////////////////////////////////////////////
// DDTableBasic - extends YAHOO.util.DDProxy
//////////////////////////////////////////////////////////////////////
DDTableBasic = function(id, tableId, sGroup, config)
{
	var myDataTable;
	if (id) {
		this.init(id, sGroup, config);
		this.initFrame();
		this.parentTableId = tableId;
	}
}

// extend proxy so we don't move the whole object around
YAHOO.extend(DDTableBasic, YAHOO.util.DDProxy);

DDTableBasic.prototype.onDragDrop = function(e, id)
{
	// this is called when the source object dropped
	// on a valid target
	
	// Get the object ids
	var draggedRowId = this.id;
	var droppedOnId = id;
	var selRows = this.myDataTable.getSelectedRows();
	for (var i = 0; i < selRows.length; i++)
	{
		agile.ux.multilist.itemDragged(selRows[i].firstChild);
	}
	this.onDragOut(e, id);
}

DDTableBasic.prototype.startDrag = function(x, y)
{
	// called when source object first selected for dragging
	// draw a red border around the drag object we create
}

DDTableBasic.prototype.onDragEnter = function(e, id)
{
	// this is called anytime we drag over
	// a potential valid target
	// highlight the target in red	

	var el;

	if ("string" == typeof id) {
		el = YAHOO.util.DDM.getElement(id);
	} else {
		el = YAHOO.util.DDM.getBestMatch(id).getEl();
	}

}

DDTableBasic.prototype.onDragOut = function(e, id)
{
	// this is called anytime we drag out of
	// a potential valid target
	// remove the highlight
	
	var el;

	if ("string" == typeof id) {
		el = YAHOO.util.DDM.getElement(id);
	} else {
		el = YAHOO.util.DDM.getBestMatch(id).getEl();
	}

	el.style.background = "";
}

DDTableBasic.prototype.endDrag = function(e)
{
	// override so source object doesn't move when we are done
	// hanlde the move in dragdrop
}

function removeLongPill()
{
	var x = $('longpill');
	x.parentNode.removeChild(x);
	$('multi_select_query2').focus();
}
function doLongPillSelect()
{
	o = $('longpill');
	(o.className == 'selected') ? o.className = '' : o.className = 'selected';
}	

function highlightBorder() { //of border for hilight on multiselect lists
	uxDom.removeClass($("agileautocomplete"),"agile_border");
	uxDom.addClass($("agileautocomplete"),"focus_field");
	uxDom.addClass($("agileautocomplete"),"focus_border");
}
function removeHighlightBorder() { //of border for hilight on multiselect lists
	uxDom.removeClass($("agileautocomplete"),"focus_field");
	uxDom.addClass($("agileautocomplete"),"agile_border");
}

function highlightBorder2() { //of border for hilight on multiselect lists
	uxDom.removeClass($("agileautocomplete2"),"agile_border");
	uxDom.addClass($("agileautocomplete2"),"focus_field");
	uxDom.addClass($("agileautocomplete2"),"focus_border");
}
function removeHighlightBorder2() { //of border for hilight on multiselect lists
	uxDom.removeClass($("agileautocomplete2"),"focus_field");
	uxDom.addClass($("agileautocomplete2"),"agile_border");
}







/**
 * @class a YAHOO.util.DDProxy implementation that adds selected table columns
 * from the Palette with the target converting them into <code>Pills</code> 
 * when dropped.
 *
 * @author Sean Wells
 * @version 0.1
 * @requires YAHOO
 * @requires YAHOO.util.Dom
 * @requires YAHOO.util.Event
 * @requires YAHOO.util.DragDrop
 *
 * @extends YAHOO.util.DDProxy
 * @constructor
 * @param {String} id the id of the linked element
 * @param {String} sGroup the group of related DragDrop items
 */
DDTable = function(id, tableId, sGroup, config) {
    var myDataTable;
    this.dragDropInit(id, tableId, sGroup, config);
};

YAHOO.extend(DDTable, YAHOO.util.DDProxy);

/**
 * 
 * @param id
 * @param sGroup
 * @param config
 */
DDTable.prototype.dragDropInit = function(id, tableId, sGroup, config) {
    if (!id) { return; }

    //this.init(id, sGroup, config);
    this.init(id, sGroup, { dragElId: "dragDiv4", 
              centerFrame: true, resizeFrame: false });
    this.initFrame();
    //this.logger = this.logger || YAHOO;
    this.parentTableId = tableId;

    /**
     * css style to use when items are not being hovered over.
     */
    this.offClass = "drag_tooltip over_target"; //"selected_container"; //"testSquare";

    /**
     * css style to use when hovered over
     */
    this.onClass = "drag_tooltip"; //"selected_container"; //"testSquareOn";

    /**
     * cache of the elements we have changed the style so we can restore it
     * later
     */
    this.els = [];

};

DDTable.prototype.onDragDrop = function(e, id) {
    var dd = YAHOO.util.DDM.getDDById(id);
    //this.swap(this.getEl(), dd.getEl());
    //this.resetConstraints();
    //dd.resetConstraints();
    
    ////////////////////
    // Get the object ids
      var selRows = this.myDataTable.getSelectedRows();
      for (var index = 0; index < selRows.length; index++) {
            agile.ux.multilist.itemDragged(selRows[index].firstChild);
    }
    
      //this.onDragOut(e, id);
      ////////////////////
      
      //this.resetConstraints();
    //dd.resetConstraints();
}

/**
 * Occurs when the dragged object first interacts with another targettable 
 * drag and drop object.
 */
DDTable.prototype.onDragEnter = function(e, id) {
    //this.logger.log(this.id + " dragEnter " + id);

    // store a ref so we can restore the style later
    this.els[id] = true;

    // set the mouseover style
    //sw var el = YAHOO.util.DDM.getElement(id);
    // sw if (el.className != this.onClass) {
    //sw     el.className = this.onClass;
    //}

    if (id == "selected_container") { // dont do this if id is the inital target
         //workingYAHOO.util.Dom.get("dragDiv4").style.backgroundColor="#FFCC80"; 
         //$("dragDiv4").style.backgroundColor="#D3FF00";
		 $('msl_palette_tooltip').style.backgroundColor="#8cd921";
		 
         //YAHOO.util.DDM.getElement("dragDiv4").className = this.onClass;
      }
};

DDTable.prototype.onDragOut = function(e, id) {
    //this.logger.log(this.id + " dragOut " + id);
   //alert("ID: " + id);
    // restore the style
    //SW YAHOO.util.DDM.getElement(id).className = this.offClass;
    //$("dragDiv4").style.backgroundColor = "#fff";
	$('msl_palette_tooltip').style.backgroundColor="#fff";
    //YAHOO.util.DDM.getElement("dragDiv4").className = this.offClass;
};

DDTable.prototype.endDrag = function(e) {
    //this.logger.log(this.id + " endDrag");
    this.resetStyles();
};

DDTable.prototype.resetStyles = function() {
    // restore all element styles
    // SW for (var i in this.els) {
    //SW     var el = YAHOO.util.DDM.getElement(i);
    //SW    if (el) { el.className = this.offClass; }
    //SW }
    //$("dragDiv4").style.backgroundColor = "#fff";
	$('msl_palette_tooltip').style.backgroundColor="#fff";
    //YAHOO.util.DDM.getElement("dragDiv4").className = this.offClass;
};

/**
 * Hide the dragged Div if no table rows where selected, otherwise
 * show/display the dragged div.
 */
DDTable.prototype.onDrag = function(e) { 
   // hide/show the dragging div   
   var display = (this.myDataTable.getSelectedRows().length <= 0 ? "none" : "block");  
   $("dragDiv4").style.display = display;
};

DDTable.prototype.onDragOver = function(e) { };

/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.multilist.init);