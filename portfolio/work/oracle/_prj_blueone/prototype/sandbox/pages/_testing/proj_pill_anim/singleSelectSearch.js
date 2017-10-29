/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX SINGLE SELECT SEARCH
/////////////////////////////////////////////////////////////////////////
var uxDom 		= YAHOO.util.Dom;
var	textboxId 	= 'textbox1';
agile.ux.singleSelectSearch =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.singleSelectSearch.addPill('Test');
		agile.ux.singleSelectSearch.autoCompleteLoad();
		agile.ux.palette.init();
		agile.ux.singleSelectSearch.loadEvents();
		agile.ux.singleSelectSearch.dragInit();
		agile.ux.singleSelectSearch.adjustPills();
	},
	/////////////////////////////////////////////////////////////////////
	//	LOAD EVENTS
	/////////////////////////////////////////////////////////////////////
	loadEvents: function()
	{
		addEvent(textboxId,	'keyup', agile.ux.singleSelectSearch.textBoxKeyHandler);
		addEvent('cmdOpenPalette', 'click', agile.ux.singleSelectSearch.openPalette);
		addEvent('cmdOpenPalette', 'click', agile.ux.singleSelectSearch.openPalette);
		addEvent('cmdClosePalette', 'click', agile.ux.palette.closePalette);
		addEvent('palette_query', 'keyup', 	agile.ux.singleSelectSearch.paletteKeyHandler);
		addEvent('cmdSearch', 'click', 	agile.ux.palette.paletteSearch);
		addEvent(textboxId, 'focus', agile.ux.singleSelectSearch.doTextBoxFocus);
		addEvent(textboxId, 'blur', agile.ux.singleSelectSearch.doTextBoxBlur);
		addEvent(textboxId, 'keydown', agile.ux.singleSelectSearch.pillKeyHandler);
		addEvent('pillbox', 'click', agile.ux.singleSelectSearch.doTextBoxFocus);
		addEvent(window, 'resize', agile.ux.singleSelectSearch.adjustPills);
		addEvent('palette_query', 'focus', agile.ux.singleSelectSearch.doPaletteQueryFocus);
		addEvent('palette_query', 'blur', agile.ux.singleSelectSearch.doPaletteQueryBlur);
		
		gIsFading = true;
		
		paletteAnim = new YAHOO.util.Anim('palette_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		paletteAnim.onComplete.subscribe(sss_resetAddedPill);
		
		//targetAnim = new YAHOO.util.Anim('sss_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		//targetAnim.onComplete.subscribe(sss_resetAddedPill2);
		
		
	},
	/////////////////////////////////////////////////////////////////////
	// AUTO COMPLETE
	/////////////////////////////////////////////////////////////////////
	autoCompleteLoad: function()
	{
		oACDS = new YAHOO.widget.DS_JSArray( agile.ux.dataset.countries() );
		oAutoComp = new YAHOO.widget.AutoComplete(textboxId,'autoCompleteList', oACDS);
		oAutoComp.queryDelay = 0;
		oAutoComp.prehighlightClassName = "yui-ac-prehighlight";
		oAutoComp.typeAhead = true;
		oAutoComp.useShadow = false;
		oAutoComp.forceSelection = true; 
		oAutoComp.animVert = false;
	},
	/////////////////////////////////////////////////////////////////////
	//	DRAGINIT
	/////////////////////////////////////////////////////////////////////
	dragInit: function()
	{
	    var oPalette;
		var dragDropFloater = new YAHOO.util.DD("palette");
		dragDropFloater.addInvalidHandleClass("nodrag");
		dragDropFloater.endDrag = agile.ux.singleSelectSearch.checkEndDragPosition;
		oPalette = new YAHOO.DDResize("palette", "floater_resize_handle");		
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
			//$(this.id).style.top = 0 + 'px';			
		}
	},
	/////////////////////////////////////////////////////////////////////
	// ADDPILL
	/////////////////////////////////////////////////////////////////////
	//	Creates palette pill object
	/////////////////////////////////////////////////////////////////////
	addPill: function(item)
	{
		var pillbox = $('pillbox')
		pillbox.innerHTML = '';
		var li = document.createElement("li");
		li.id = 'pill';
		li.innerHTML = item + '<div id=\'pill_ellip\'>&hellip;</div>';
	
		var a = document.createElement("a");
		a.id = 'currentPillAnchor';
		a.innerHTML = '<span>x</span>';
		a.href='#';
		a.tabIndex = '-1';
		a.onclick = agile.ux.singleSelectSearch.deletePill;
		
		pillbox.insertBefore(li, pillbox.firstChild);
		li.appendChild(a);

		agile.ux.singleSelectSearch.adjustPills()
		$(textboxId).value = '';
		
		//animPill = new YAHOO.util.Anim('pill', { opacity: { to: .5 } }, .9, YAHOO.util.Easing.easeNone); 
		//animPill.onComplete.subscribe(sss_addPill);

	},
	/////////////////////////////////////////////////////////////////////
	//	DELETE PILL
	/////////////////////////////////////////////////////////////////////
	//	Removes autocomplete pill via 'x' button.
	/////////////////////////////////////////////////////////////////////
	deletePill: function(e)
	{
		$('pill').parentNode.removeChild($('pill'));
		$(textboxId).value = '';
		$(textboxId).focus();
	},
	textBoxKeyHandler: function(e)
	{
		if (!e) var e = window.event 

		if ( e.altKey )
		{
			if ( e.keyCode == 76)
				agile.ux.singleSelectSearch.openPalette();
			return;	
		}
		
		switch(e.keyCode)
		{
			case 13: 
				if ( $(textboxId).value.length > 1)
				{
					agile.ux.singleSelectSearch.addPill( $(textboxId).value );
					uxDom.addClass( $('pill'),"selected" );
				}
				break;
			case 46:
				agile.ux.singleSelectSearch.deletePill();
				break;
		}
		return false;
	},	
	/////////////////////////////////////////////////////////////////////
	//	OPEN PALETTE
	/////////////////////////////////////////////////////////////////////
	openPalette: function(e)
	{
		$("palette_query").value = '';
		$("palette_results").style.overflow = 'auto';
		$("palette_query").style.visibility = 'visible';
		$("palette").style.display = 'block'; 
		var positionTop = uxDom.getY($('cmdOpenPalette'));
		var positionLeft = uxDom.getX($('cmdOpenPalette'));
		var paletteWidth = uxDom.getStyle($('palette'), 'width');
		uxDom.setY( $('palette'), positionTop + 60 )
		uxDom.setX( $('palette'), positionLeft - parseInt(paletteWidth) + 40 );
		$("palette_query").focus();
		
	},
	/////////////////////////////////////////////////////////////////////
	// ITEMCLICKED
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is clicked.
	/////////////////////////////////////////////////////////////////////
	itemClicked: function(oArgs)
	{
		myDataTable.unselectAllRows();
		var rowId = oArgs.target.parentNode.id;
		uxDom.addClass($(rowId), 'yui-dt-selected');
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
			//animation on target area
			//$('sss_added_notice').style.display = 'block';
			gfadeTimer = null;
			//gfadeTimer = setTimeout("targetAnim.animate();",250);
			//gfadeTimer = setTimeout("animPill.animate();",250);
			
			//animation on palette
			$('palette_added_notice').style.display = 'block';
			gfadeTimer = null;
			gfadeTimer = setTimeout("paletteAnim.animate();",250);

			var rowId = oArgs.target.parentNode.id;
			agile.ux.singleSelectSearch.addPill(listItemName);
			uxDom.addClass($(rowId), 'yui-dt-selected');
			//uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
			
			agile.ux.singleSelectSearch.animatePill();
		}
	},
	animatePill: function() 
	{
		jQuery("#pill")
			//.animate({ width: "100%", marginBottom: 10 }, { queue: false, duration: 7000 })
			.animate({ backgroundColor: "lightblue" }, 1000)
	},

/////////////////////////////////////////////////////////////////////
	// PALETTE KEYHANDLER
	/////////////////////////////////////////////////////////////////////
	paletteKeyHandler: function(e) 
	{
		if ( $("palette_query").value.length < 1 )  return;
		if ( e.keyCode == 13 ) { agile.ux.palette.paletteSearch(); }
	},
	/////////////////////////////////////////////////////////////////////
	// HELPERS
	/////////////////////////////////////////////////////////////////////
	doTextBoxFocus: function()
	{
		uxDom.addClass($('sss'),"focus_border");
		uxDom.removeClass($('sss'),"agile_border");
		uxDom.addClass($('sss'),"focus_field");
		uxDom.removeClass($('textbox1'),"focus_field");
		uxDom.addClass($('pill'),"selected");
	},
	doTextBoxBlur: function()
	{
		uxDom.addClass($('sss'),"agile_border");
		uxDom.removeClass($('sss'),"focus_field");
		uxDom.removeClass($('sss'),"focus_border");
		uxDom.removeClass($('pill'),"selected");
	},
	doPaletteQueryFocus: function()
	{
		uxDom.replaceClass($('palette_query'),"agile_border","focus_border");
		uxDom.addClass($('palette_query'), 'focus_field');		
	},

	doPaletteQueryBlur: function()
	{
		uxDom.replaceClass($('palette_query'),"focus_border","agile_border");
		uxDom.removeClass($('palette_query'), 'focus_field');		
	},
	/////////////////////////////////////////////////////////////////////
	//	ADJUST PILLS
	/////////////////////////////////////////////////////////////////////
	adjustPills: function() 
	{
		var container = $('pillbox');
      	var containerDiv = container.parentNode;
      	var containerDiv_rightEdge = containerDiv.clientWidth + 2;
		if (container.childNodes[0].tagName == "LI")
		{
			var pill_li = container.childNodes[0];
			var pill_text = pill_li.childNodes[0];
			if (pill_text.nodeType == 3)
				pill_text = pill_text.nodeValue;
			var pill_ellip = pill_li.childNodes[1];
			while (pill_ellip.tagName != "DIV")
				pill_ellip = pill_ellip.nextSibling;
			var pill_btn = pill_ellip.nextSibling;
			while (pill_btn.tagName != "A")
				pill_btn = pill_btn.nextSibling;
			var pill_rightEdge = pill_li.offsetLeft + pill_li.offsetWidth;

			/* These calculations must be adjusted accordingly 
			if (pill_rightEdge > containerDiv_rightEdge)
			{
				alert('pill right is bigger than container right');
				$('currentPillAnchor').style.left = (containerDiv_rightEdge - pill_btn.offsetWidth - 4) + "px";
				$('pill_ellip').style.display = "inline";
				$('pill_ellip').style.left = (containerDiv_rightEdge - pill_btn.offsetWidth - pill_ellip.offsetWidth - 2) + "px";
				pill_li.title = pill_text;
				
			} else {
				$('pill_ellip').style.display = "none";
				$('pill_ellip').style.left = "";
				$('currentPillAnchor').style.left = "";
				pill_li.title = "";
			}
			*/
		}
	}
};

/////////////////////////////////////////////////////////////////////
//	PALETTE
/////////////////////////////////////////////////////////////////////
agile.ux.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.palette.loadPalette();
	},
	/////////////////////////////////////////////////////////////////////
	//	LOAD PALETTE
	/////////////////////////////////////////////////////////////////////
	loadPalette: function()
	{
		var myColumnHeaders = [ {key:"name",text:"Country Name"} ];
		var myColumnSet = new YAHOO.widget.ColumnSet(myColumnHeaders);
		var myDataSource = new YAHOO.util.DataSource(YAHOO.example.Data.countries);
		myDataSource.responseType = YAHOO.util.DataSource.TYPE_JSARRAY;
		myDataSource.responseSchema = { fields: ["name"] };
		myDataTable = new YAHOO.widget.DataTable("palette_results",myColumnSet,myDataSource,{rowSingleSelect:true});
		myDataTable.subscribe("cellClickEvent",agile.ux.singleSelectSearch.itemClicked);
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.singleSelectSearch.itemDoubleClicked);
		agile.ux.palette.resetPalette();
	},
	/////////////////////////////////////////////////////////////////////
	//	CLOSE PALETTE
	/////////////////////////////////////////////////////////////////////
	closePalette: function()
	{
		agile.ux.palette.resetPalette();
		$('palette').style.display = '';
		$('cmdOpenPalette').focus();
	},
	/////////////////////////////////////////////////////////////////////
	//	RESET PALETTE
	/////////////////////////////////////////////////////////////////////
	resetPalette: function()
	{
		var resultsList = $("palette_results");
		var paletteItem = resultsList.getElementsByTagName("td");
		for (var i = 0; i < paletteItem.length; i++)
		{
			paletteItem[i].style.display = 'none';
			paletteItem[i].parentNode.style.display = 'none';
			uxDom.removeClass($(paletteItem[i].parentNode),"yui-dt-selected");
		}
		
	},
	/////////////////////////////////////////////////////////////////////
	// PALETTE SEARCH
	/////////////////////////////////////////////////////////////////////
	paletteSearch: function()
	{
		if ($('palette_query').value == "")
		{
			alert('Please enter search criteria.');
			$('palette_query').focus();
			return false;
		}

		var firstSelectedItem
		var bFirstSelectedItem = false;
		var query = $("palette_query").value.toLowerCase();
		var resultsList = $("palette_results");
		var items = resultsList.getElementsByTagName("td");

		// Dislplay all records
		if ($('palette_query').value == "*")
		{
			for (var i = 0; i < items.length; i++)
			{
				var item = items[i];
				item.style.display = '';
				item.parentNode.style.display = '';
				if ( bFirstSelectedItem == false )
				{
					firstSelectedItem = item.parentNode.id;
					bFirstSelectedItem = true;
				}
			}
			return;
		}
			
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			var str = item.innerHTML.toLowerCase();
			var match = (str.indexOf(query) != -1);
			if ( match)
			{
				item.style.display = '';
				item.parentNode.style.display = '';
				if ( bFirstSelectedItem == false )
				{
					firstSelectedItem = item.parentNode.id;
					bFirstSelectedItem = true;
				}
			} else {
				item.style.display = 'none';
				item.parentNode.style.display = 'none';
				item.style.className = '';
			}
		}
		if ( firstSelectedItem )
		{
			myDataTable.select(firstSelectedItem);
		}
	}	
}

/////////////////////////////////////////////////////////////////////
// DRAG AND RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.DDResize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId)
	{
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
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};

YAHOO.DDResize.prototype.onDrag = function(e)
{
    var newPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];
    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);
    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$("floater_content").style.height = newHeight - 12 + "px";
	$("palette_results").style.height = newHeight - 90 + "px";
};




/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.singleSelectSearch.init);