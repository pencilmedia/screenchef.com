/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI-LIST AND PALETTE
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
agile.ux.mus =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.mus.setYUIControls();
		agile.ux.mus.setEventHandlers();
		// Method is found in common.js
		treeInit('mus_treeContainer', agile.ux.dataset.multiUserGroups());
	},	
	/////////////////////////////////////////////////////////////////////
	//	SETYUICONTROLS
	/////////////////////////////////////////////////////////////////////
	setYUIControls : function()
	{
		agile.ux.mus.palette.init();
	},
	/////////////////////////////////////////////////////////////////////
	//	SETEVENTHANDLERS
	/////////////////////////////////////////////////////////////////////
	setMusEventHandlers : function()
	{
		addEvent("open_palette",	'click', 	agile.ux.mus.openPalette);
		addEvent("close_palette", 	'click', 	agile.ux.mus.closePalette);
		addEvent(['mus_targetContainer','mus_pillbox'], 'focus',	agile.ux.mus.setFocus);
		addEvent('mus_targetContainer',	'blur',		agile.ux.mus.removeFocus);
		addEvent('mus_targetContainer',	'keyup',	agile.ux.mus.multiSelectKeyHandler)
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
		runMUS();
		agile.ux.mus.positionPalette();
	},
	closePalette: function()
	{
		runMUS();
	},
	positionPalette: function()
	{
		//  Position Palette
		var positionTop = uxDom.getY($('open_palette'));
		var positionLeft = uxDom.getX($('open_palette'));
		var paletteWidth = uxDom.getStyle($('mus_palette'), 'width');
		uxDom.setY( $('mus_palette'), positionTop + 55 )
		uxDom.setX( $('mus_palette'), positionLeft - parseInt(paletteWidth) + 40 );
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
		var itemsList = $('mus_pillbox');
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
	// ITEMDOUBLECLICKED
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is doubled clicked.
	/////////////////////////////////////////////////////////////////////
	_itemDoubleClicked: function(oArgs)
	{
		//alert(oArgs.id);
		var listItemName = $(oArgs.target.id).innerHTML;
		if (  $(oArgs.target.id).style.display != 'none'  )
		{		
			var oID = 'ux-' + oArgs.target.id;
			agile.ux.mus.addPill(listItemName, oID);
			$(oArgs.target.id).parentNode.style.display = 'none';
			uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
			$('mus_palette_added_notice').style.display = '';
		}
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
			var pillbox = $('mus_pillbox')
			var oID = id;
			var li = document.createElement("li");
			li.setSelected = setSelected;
			li.id = id;
			li.title = item;
			li.innerHTML = item;
			li.onclick = agile.ux.mus.pillonclick;
			var a = document.createElement("a");
			a.innerHTML = '<span>x</span>';
			a.href='#';
			a.onclick = function() { agile.ux.mus.removeTargetItem(id); };
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
		if (!e.ctrlKey) agile.ux.mus.selectAllBullets(false);
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
			agile.ux.mus.removeSelectedTargetItems();
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
		var itemsList = $('mus_pillbox');
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
		var itemsList = $('mus_pillbox');
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
			if ( e.ctrlKey ) { agile.ux.mus.selectAllBullets(true); }
			break;
			/////////////////////////////////////////////////////////////////////
			// APPLE KEY + A
			/////////////////////////////////////////////////////////////////////
			case 224:
			if ( e.keyCode == 65) { agile.ux.mus.selectAllBullets(true); }
			break;
			/////////////////////////////////////////////////////////////////////
			// ENTER KEY
			/////////////////////////////////////////////////////////////////////
			case 13:	
			if ($('mus_query').value)
			{
				var listItemName = $('mus_query').value
				if (isNewItem(listItemName))
				{
					agile.ux.mus.addPill(listItemName, removeSpaces( listItemName ));
					$('mus_query').value='';
				} else {
					$('mus_query').value = '';
				}
			}
			break;
			/////////////////////////////////////////////////////////////////////
			// DELETE KEY
			/////////////////////////////////////////////////////////////////////
			case 46:
			agile.ux.mus.removeSelectedTargetItems();
			break;
		}
		agile.ux.mus.cancelTextSelection();
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
	var items = $("mus_pillbox").getElementsByTagName("li");
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


function handlePill(nodeList)
{
	for (var i=0; i<nodeList.length; i++) {
		var pillText = nodeList[i]['nodeObj'].getTitle();
		var pillId   = nodeList[i]['id'];
		if ( !nodeList[i]['nodeObj'].hasChildren(true) ) {
			var tmpStr = recursePill(nodeList[i]['nodeObj'].children);
			if (tmpStr != "") {
				agile.ux.mus.addPill(pillText, pillId);
			}

		} else if (nodeList[i]['nodeObj'].hasChildren(true)) {
			var tmpStr = recursePill(nodeList[i]['nodeObj'].children);
		}
	}
}


function recursePill(nodeList)
{
	for (var i=0; i<nodeList.length; i++) {
		var pillText = nodeList[i].getTitle();
		var pillId   = nodeList[i].index;
		
		if (!nodeList[i].hasChildren(true)) {
			agile.ux.mus.addPill(pillText, pillId);
		} else if (nodeList[i].hasChildren(true)) {
			var tmpStr = recursePill(nodeList[i].children);
		}
	}
}

function runMUS() {
	var mus = $('mus_palette');
	var musList = $('mus_treeContainer');
	if (mus.style && mus.style.display == 'block') {
		mus.style.display = 'none';
	} else {
		mus.style.display = 'block';
		prepTree();
		musList.focus();
	}
}