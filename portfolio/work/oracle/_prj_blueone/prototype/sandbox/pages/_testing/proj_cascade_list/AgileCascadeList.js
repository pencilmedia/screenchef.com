/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI-LIST AND PALETTE
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
agile.ux.cascadelist =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.cascadelist.setYUIControls();
		agile.ux.cascadelist.setEventHandlers();
		// Method is found in common.js
		treeInit('mscl_treeContainer', agile.ux.dataset.multiSelectCascadeList());
	},	
	/////////////////////////////////////////////////////////////////////
	//	SETYUICONTROLS
	/////////////////////////////////////////////////////////////////////
	setYUIControls : function()
	{
		paletteDrag  			= new YAHOO.util.DD('palette');
		paletteDrag.invalidHandleClasses = ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];
		PaletteResize 			= new YAHOO.DDResize("palette", 'resize_handle');
		PaletteResize.endDrag 	= agile.ux.cascadelist.checkEndDragPosition;
	},
	/////////////////////////////////////////////////////////////////////
	//	SETEVENTHANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent("open_palette",	'click', 	agile.ux.cascadelist.openPalette);
		addEvent("close_palette", 	'click', 	agile.ux.cascadelist.closePalette);
		addEvent(['mscl_container','mscl_pillbox'], 'focus',	agile.ux.cascadelist.setFocus);
		addEvent('mscl_container',	'blur',		agile.ux.cascadelist.removeFocus);
		addEvent('mscl_container',	'keyup',	agile.ux.cascadelist.multiSelectKeyHandler)
	},
	setFocus: function()
	{
		uxDom.addClass($('agileautocomplete'),'focus_field');
	},
	removeFocus: function()
	{
		uxDom.removeClass($('agileautocomplete'),'focus_field');
	},
	openPalette: function()
	{
		runMSCL();
		agile.ux.cascadelist.positionPalette();
	},
	closePalette: function()
	{
		runMSCL();
	},
	positionPalette: function()
	{
		//  Position Palette
		var positionTop = uxDom.getY($('open_palette'));
		var positionLeft = uxDom.getX($('open_palette'));
		var paletteWidth = uxDom.getStyle($('palette'), 'width');
		uxDom.setY( $('palette'), positionTop + 55 )
		uxDom.setX( $('palette'), positionLeft - parseInt(paletteWidth) + 40 );
	},
	/////////////////////////////////////////////////////////////////////
	//	REMOVETARGETITEMS
	/////////////////////////////////////////////////////////////////////
	//	Removes autocomplete pill via 'x' button.
	/////////////////////////////////////////////////////////////////////
	removeTargetItem: function(id)
	{
		var container = document.getElementById(id).parentNode;
		var pill = document.getElementById(id);
		container.removeChild(pill);
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
		var itemsList = $('mscl_pillbox');
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
	// ADDPILL
	/////////////////////////////////////////////////////////////////////
	//	Creates palette pill object
	/////////////////////////////////////////////////////////////////////
	addPill: function(item, id, toolTip)
	{
		if ( isNewItem(id) )
		{
			var pillbox = $('mscl_pillbox')
			pillbox.innerHTML = '';
			var oID = id;
			var li = document.createElement("li");
			li.setSelected = setSelected;
			li.id = id;
			li.title = toolTip;
			li.innerHTML = item;
			li.onclick = agile.ux.cascadelist.pillonclick;
			var a = document.createElement("a");
			a.innerHTML = '<span>x</span>';
			a.href='#';
			a.onclick = function() { agile.ux.cascadelist.removeTargetItem(id); };

			pillbox.insertBefore(li, pillbox.firstChild);
			li.appendChild(a);
		}
	},
	/////////////////////////////////////////////////////////////////////
	// handlePillSelection
	/////////////////////////////////////////////////////////////////////
	pillonclick: function(e)
	{
		if (!e) var e = window.event;
		if (!e.ctrlKey) agile.ux.cascadelist.selectAllBullets(false);
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
			agile.ux.cascadelist.removeSelectedTargetItems();
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
		var itemsList = $('mscl_pillbox');
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
		var itemsList = $('mscl_pillbox');
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
			if ( e.ctrlKey ) { agile.ux.cascadelist.selectAllBullets(true); }
			break;
			/////////////////////////////////////////////////////////////////////
			// APPLE KEY + A
			/////////////////////////////////////////////////////////////////////
			case 224:
			if ( e.keyCode == 65) { agile.ux.cascadelist.selectAllBullets(true); }
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
					agile.ux.cascadelist.addPill(listItemName, removeSpaces( listItemName ));
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
			agile.ux.cascadelist.removeSelectedTargetItems();
			break;
		}
		agile.ux.cascadelist.cancelTextSelection();
		return false;
	},

	cancelTextSelection: function() {
		if (document.selection) {
			document.selection.empty();
		} else {
			window.getSelection().collapseToStart();
		}
	}
};


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
	var items = $("mscl_pillbox").getElementsByTagName("li");
	for (var i = 0; i < items.length; i++)
	{
		if ( items[i].id == id ) isNewItem = false;
	}
	return isNewItem;
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
	$('floater_content').style.height = newHeight - 12 + "px";
	document.getElementById('mscl_treeContainerDiv').style.height = newHeight - 65 + "px";
};


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


function runMSCL()
{
	var mscl = $('palette');
	var msclList = $('mscl_treeContainer');
	if (mscl.style && mscl.style.display == 'block') {
		mscl.style.display = 'none';
	} else {
		mscl.style.display = 'block';
		prepTree();
		msclList.focus();
	}
}

function prepTree()
{
	tree.collapseAll();
	var root = tree.getRoot();
	var childNodes = root.children;

	if (childNodes && childNodes.length) {
		for (var i=0; i<childNodes.length; i++) {
			if (i == 0) {
				tree.handleNodeSelection(childNodes[i]);
			}
			if (childNodes[i].hasChildren(true)) {
				childNodes[i].toggle();
			}
		}
	}
}


function clearField()
{
	$('mscl_pillbox').value = "";
}


var pillList = null;


function handlePill(node)
{
	for (var i=0; i<node.length; i++) {
		var pillText = node[i]['nodeObj'].getTitle();
		var pillId   = node[i]['id'];
		var toolTip = node[i]['nodeObj'].getToolTip();
		if ( !node[i]['nodeObj'].hasChildren(true) ) {
			var tmpStr = recursePill(node[i]['nodeObj'].children);
			if (tmpStr != "") {
				agile.ux.cascadelist.addPill(pillText, pillId, toolTip);
			}

		} else if (node[i]['nodeObj'].hasChildren(true)) {
			if(node[i]['nodeObj'] instanceof YAHOO.widget.AgileSingleSelectCascadeListNode)
				return;

			var tmpStr = recursePill(node[i]['nodeObj'].children);
		}
	}
}


function recursePill(nodeList)
{
	for (var i=0; i<nodeList.length; i++) {
		var pillText = nodeList[i].getTitle();
		var pillId   = nodeList[i].index;
		
		if (!nodeList[i].hasChildren(true)) {
			agile.ux.cascadelist.addPill(pillText, pillId);
		} else if (nodeList[i].hasChildren(true)) {
			var tmpStr = recursePill(nodeList[i].children);
		}
	}
}
/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.cascadelist.init);
