/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	Autocomplete Dataset
/////////////////////////////////////////////////////////////////////////
var dsUSStates = agile.ux.dataset.getUSStates()
var dsCAStates = agile.ux.dataset.getCAStates()
var dsMXStates = agile.ux.dataset.getMXStates()
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI-LIST AND PALETTE
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
agile.ux.multicascadelist =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.multicascadelist.setYUIControls();
		agile.ux.multicascadelist.setEventHandlers();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SETYUICONTROLS
	/////////////////////////////////////////////////////////////////////
	setYUIControls : function()
	{
	    var oDragDrop, oPalette, oACDS, oAutoComp;
		var dragDropFloater = new YAHOO.util.DD("palette");
		dragDropFloater.addInvalidHandleClass("nodrag");
		dragDropFloater.endDrag = agile.ux.multicascadelist.checkEndDragPosition;
		oPalette = new YAHOO.DDResize("palette", "floater_resize_handle");

		oACDS = new YAHOO.widget.DS_JSArray(dsUSStates);
		oAutoComp = new YAHOO.widget.AutoComplete('multi_select_query','results_container', oACDS);


		//	TREEVIEW CONTROL
		var tree = new YAHOO.widget.TreeView("cascade_list");
		var root = tree.getRoot();
		var continentNode 	= new YAHOO.widget.AgileLocationNode("North America", root, false);
		var caNode 			= new YAHOO.widget.AgileLocationNode('Canada', continentNode, false);
		var mxNode 			= new YAHOO.widget.AgileLocationNode('Mexico', continentNode, false);
		var usNode 			= new YAHOO.widget.AgileLocationNode('USA', continentNode, false);
		for (var i=0; i<dsCAStates.length; i++)
			var tempNode = new YAHOO.widget.AgileLocationNode(dsCAStates[i], caNode, false);
		for (var i=0; i<dsMXStates.length; i++)
			var tempNode = new YAHOO.widget.AgileLocationNode(dsMXStates[i], mxNode, false);
		for (var i=0; i<dsUSStates.length; i++)
			var tempNode = new YAHOO.widget.AgileLocationNode(dsUSStates[i], usNode, false);
		tree.draw();
		tree.subscribe("labelClick", agile.ux.multicascadelist.treeClick); 
		tree.subscribe("labelDoubleClick", agile.ux.multicascadelist.treeDoubleClick); 

	},
	/////////////////////////////////////////////////////////////////////
	//	SETEVENTHANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent("mscl",	'click',	qFocus);
		addEvent("mscl2",	'click',	qFocus2);
		addEvent("cmdPalette",			'click', 	agile.ux.multicascadelist.openPalette);
		addEvent("close_floater", 		'click', 	agile.ux.multicascadelist.closePalette);
		addEvent("palette_query",		'keyup', 	filterResults);
		addEvent("multi_select_query",	'keyup', 	agile.ux.multicascadelist.multiSelectKeyHandler);
		addEvent("multi_select_query",	'blur', 	removeHighlightBorder);
		addEvent("multi_select_query",	'focus', 	highlightBorder);
		addEvent("multi_select_query2",	'blur', 	removeHighlightBorder2);
		addEvent("multi_select_query2",	'focus', 	highlightBorder2);
		addEvent("multi_select_query2",	'keyup',	doSearchQuery2KeyUp);
		addEvent("cascade_list",		'keyup', 	doResultsEnter);
		addEvent("mscl_container",		'keyup',	agile.ux.multicascadelist.listContainerKeyUp);
	},
	/////////////////////////////////////////////////////////////////////
	//	TREE CLICK
	/////////////////////////////////////////////////////////////////////
	treeClick: function(node)
	{
		var nodeId = 'ygtvlabelel' + node.node.index;
		if (!node.expanded)
			agile.ux.multicascadelist.treeHighlight(node, nodeId, node.e);
		return false;
	},
	treeHighlight: function(node, nodeId, e)
	{
		if(!e){ var e =window.event };
		if (!e.ctrlKey)
		{
			agile.ux.multicascadelist.clearSelected();
		}
		
		if ( node.node.hasChildren() && e.ctrlKey )
		{
			uxDom.addClass( $('ygtvlabelel'+node.node.index),"selected");
			for (var i = 0; i < node.node.children.length; i++)
			{
				uxDom.addClass( $('ygtvlabelel'+node.node.children[i].index),"selected");
			}
		} else {
			if (!node.node.hasChildren())
				uxDom.addClass($(nodeId),"selected");
		}
	},
	clearSelected: function()
	{
		var itemsList = $('cascade_list');
		var items = itemsList.getElementsByTagName('a');
		for (var i = 0; i < items.length; i++)
		{
			uxDom.removeClass($(items[i].id),"selected");
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	TREE DOUBLE CLICK
	/////////////////////////////////////////////////////////////////////
	treeDoubleClick: function(node)
	{
		if ( node.hasChildren() ) 
		{
			node.toggle();
		} else {
			var pillText = node.data;
			var pillId = 'pill_' + node.getElId();
			agile.ux.multicascadelist.addPill( pillText, pillId );
		}
		return false;
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
		var itemsList = $('pillbox');
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
		$('palette_tooltip').innerHTML = numberOfSelectedCells;
	},
	/////////////////////////////////////////////////////////////////////
	//	OPENPALETTE
	/////////////////////////////////////////////////////////////////////
	openPalette: function() 
	{ 
		$("cascade_list").style.overflow = 'auto';
		$("palette").style.display = 'block'; 
		var positionTop = uxDom.getY($('cmdPalette'));
		var positionLeft = uxDom.getX($('cmdPalette'));
		var paletteWidth = uxDom.getStyle($('palette'), 'width');
		uxDom.setY( $('palette'), positionTop + 40 )
		uxDom.setX( $('palette'), positionLeft - parseInt(paletteWidth) + 40 );
	},
	/////////////////////////////////////////////////////////////////////
	//	CLOSEPALETTE
	/////////////////////////////////////////////////////////////////////
	closePalette: function() 
	{
		$("palette").style.display = '';
		agile.ux.multicascadelist.resetPalette();
	},
	resetPalette: function()
	{
		myDataTable._unselectAllRows();
		var resultsList = $("cascade_list");
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
		if (  $(oArgs.target.id).style.display != 'none'  )
		{		
			var oID = 'ux-' + oArgs.target.id;
			agile.ux.multicascadelist.addPill(listItemName, oID);
			$(oArgs.target.id).parentNode.style.display = 'none';
			uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
			$('palette_added_notice').style.display = '';
			agile.ux.multicascadelist.showAddedPill();
		}
	},
	showAddedPill: function()
	{
		paletteAnim.animate();
	},
	/////////////////////////////////////////////////////////////////////
	// ITEMDRAGGED
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is dragged.
	/////////////////////////////////////////////////////////////////////
	itemDragged: function(oArgs)
	{
		var listItemName = oArgs.innerHTML;
		if (  $(oArgs.id).style.display != 'none'  )
		{
			var oID = 'ux-' + oArgs.id;
			agile.ux.multicascadelist.addPill(listItemName, oID);
			$(oArgs.parentNode.id).style.display = 'none';
			uxDom.removeClass($(oArgs.parentNode.id), 'yui-dt-selected');
			$('added_notice').style.display = '';
			agile.ux.multicascadelist.showAddedPill2();
		}
	},	showAddedPill2: function()
	{
		anim.animate();
	},
	/////////////////////////////////////////////////////////////////////
	// ADDPILL
	/////////////////////////////////////////////////////////////////////
	//	Creates palette pill object
	/////////////////////////////////////////////////////////////////////
	addPill: function(item, id)
	{
		if ( isNewItem(id) )
		{
			var pillbox = $('pillbox')
			var oID = id;
			var li = document.createElement("li");
			li.setSelected = setSelected;
			li.id = id;
			li.innerHTML = item;
			li.onclick = agile.ux.multicascadelist.pillonclick;
			var a = document.createElement("a");
			a.innerHTML = '<span>x</span>';
			a.href='#';
			a.onclick = function() { agile.ux.multicascadelist.removeTargetItem(id); };
			li.appendChild(a);
			pillbox.insertBefore(li, pillbox.firstChild);
		}
	},
	/////////////////////////////////////////////////////////////////////
	// handlePillSelection
	/////////////////////////////////////////////////////////////////////
	pillonclick: function(e)
	{
		if (!e) var e = window.event;
		if (!e.ctrlKey) agile.ux.multicascadelist.selectAllBullets(false);
		(this.className == 'selected') ? this.className = '' : this.className = 'selected';

		// Let's stop propagation
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
	},
	listContainerKeyUp: function(e)
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
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
			agile.ux.multicascadelist.removeSelectedTargetItems();
			break;
		}

		// Let's stop propagation
		if (!e) var e = window.event;
		e.cancelBubble = true;
		if (e.stopPropagation) e.stopPropagation();
		return false;
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
		var itemsList = $('pillbox');
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
	// selectAllBullets
	/////////////////////////////////////////////////////////////////////
	selectAllBullets: function(selectedStatus)
	{
		var itemsList = $('pillbox');
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
		if (!e) var e = window.event;
		switch(e.keyCode)
		{
			/////////////////////////////////////////////////////////////////////
			// CONTROL + A
			/////////////////////////////////////////////////////////////////////
			case 65:	
			if ( e.ctrlKey ) { agile.ux.multicascadelist.selectAllBullets(true); }
			break;
			/////////////////////////////////////////////////////////////////////
			// APPLE KEY + A
			/////////////////////////////////////////////////////////////////////
			case 224:
			if ( e.keyCode == 65) { agile.ux.multicascadelist.selectAllBullets(true); }
			break;
			/////////////////////////////////////////////////////////////////////
			// ENTER KEY
			/////////////////////////////////////////////////////////////////////
			case 13:	
			if ($('multi_select_query').value)
			{
				var listItemName = $('multi_select_query').value
				if (isNewItem(listItemName))
				{
					agile.ux.multicascadelist.addPill(listItemName, removeSpaces( listItemName ));
					$('multi_select_query').value='';
				} else {
					$('multi_select_query').value = '';
				}
			}
			break;
			/////////////////////////////////////////////////////////////////////
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
			agile.ux.multicascadelist.removeSelectedTargetItems();
			break;
		}
		return false;
	}


};


function doSearchQuery2KeyUp(e)
{
	if (e.keyCode == 46) // REMOVE ITEMS 
	{
		var itemsList = $('pillbox2');
		var items = itemsList.getElementsByTagName("li");
		for (var i = 0; i < items.length; i++)
		{
			if (items[i].className == 'selected')
			{
				items[i].style.display = 'none';
			}
		}
	}
	return false;
}

function doResultsEnter(e)
{
	if (e.keyCode == 13)
	{
		alert('enter key pressed');
		var x = $('cascade_list').firstChild;
		var items = x.getElementsByTagName("tr");

		for (var i=0;i<items.length;i++)
		{
			var str = items[i].innerHTML.toLowerCase();
			var className = items[i].className;
			if( className.indexOf('yui-dt-selected') > 0 )
			{
				var listItemName = items[i].firstChild.innerHTML;
				var oID = 'ux-' + items[i].id;
				agile.ux.multicascadelist.addPill(listItemName, oID);
				uxDom.removeClass($(items[i].id),'yui-dt-selected');
			}
		}
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



function isNewItem(id)
{
	var isNewItem = true;
	var items = $("pillbox").getElementsByTagName("li");
	for (var i = 0; i < items.length; i++)
	{
		if ( items[i].id == id ) isNewItem = false;
	}
	return isNewItem;
}

/////////////////////////////////////////////////////////////////////
// removeSpaces
/////////////////////////////////////////////////////////////////////
function qFocus() 
{ 
	$('multi_select_query').focus();
	highlightBorder('mscl');
}
function qFocus2() 
{ 
	$('multi_select_query2').focus();
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
	var query = $("palette_query").value.toLowerCase();
	var resultsList = $("cascade_list");
	var items = resultsList.getElementsByTagName("td");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		var str = item.innerHTML.toLowerCase();
		var match = (str.indexOf(query) != -1);
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
	$("cascade_list").style.height = newHeight - 40 + "px";
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
		agile.ux.multicascadelist.itemDragged(selRows[i].firstChild);
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
	uxDom.removeClass($("mscl"),"agile_border");
	uxDom.addClass($("mscl"),"focus_field");
	uxDom.addClass($("mscl"),"focus_border");
}
function removeHighlightBorder() { //of border for hilight on multiselect lists
	uxDom.removeClass($("mscl"),"focus_field");
	uxDom.addClass($("mscl"),"agile_border");
}

function highlightBorder2() { //of border for hilight on multiselect lists
	uxDom.removeClass($("mscl2"),"agile_border");
	uxDom.addClass($("mscl2"),"focus_field");
	uxDom.addClass($("mscl2"),"focus_border");
}
function removeHighlightBorder2() { //of border for hilight on multiselect lists
	uxDom.removeClass($("mscl2"),"focus_field");
	uxDom.addClass($("mscl2"),"agile_border");
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
    this.offClass = "drag_tooltip over_target"; //"mscl_container"; //"testSquare";

    /**
     * css style to use when hovered over
     */
    this.onClass = "drag_tooltip"; //"mscl_container"; //"testSquareOn";

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
            agile.ux.multicascadelist.itemDragged(selRows[index].firstChild);
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

    if (id == "mscl_container") { // dont do this if id is the inital target
         //workingYAHOO.util.Dom.get("dragDiv4").style.backgroundColor="#FFCC80"; 
         //$("dragDiv4").style.backgroundColor="#D3FF00";
		 $('palette_tooltip').style.backgroundColor="#D3FF00";
		 
         //YAHOO.util.DDM.getElement("dragDiv4").className = this.onClass;
      }
};

DDTable.prototype.onDragOut = function(e, id) {
    //this.logger.log(this.id + " dragOut " + id);
   //alert("ID: " + id);
    // restore the style
    //SW YAHOO.util.DDM.getElement(id).className = this.offClass;
    //$("dragDiv4").style.backgroundColor = "#fff";
	$('palette_tooltip').style.backgroundColor="#fff";
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
	$('palette_tooltip').style.backgroundColor="#fff";
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
addEvent(window,'load',agile.ux.multicascadelist.init);