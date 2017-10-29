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
		agile.ux.singleSelectSearch.addPill('Single Pill');
		agile.ux.singleSelectSearch.sssAutoCompleteLoad();
		agile.ux.sssPalette.init();
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
		addEvent('cmdClosePalette', 'click', agile.ux.sssPalette.closePalette);
		addEvent('sss_palette_query', 'keyup', 	agile.ux.singleSelectSearch.paletteKeyHandler);
		addEvent('cmdSearch', 'click', 	agile.ux.sssPalette.paletteSearch);
		addEvent(textboxId, 'focus', agile.ux.singleSelectSearch.doTextBoxFocus);
		addEvent(textboxId, 'blur', agile.ux.singleSelectSearch.doTextBoxBlur);
		addEvent(textboxId, 'keydown', agile.ux.singleSelectSearch.pillKeyHandler);
		addEvent('sss_pillbox', 'click', agile.ux.singleSelectSearch.doTextBoxFocus);
		addEvent(window, 'resize', agile.ux.singleSelectSearch.adjustPills);
		addEvent('sss_palette_query', 'focus', agile.ux.singleSelectSearch.doPaletteQueryFocus);
		addEvent('sss_palette_query', 'blur', agile.ux.singleSelectSearch.doPaletteQueryBlur);
		
		gIsFading = true;
		paletteAnim = new YAHOO.util.Anim('sss_palette_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		paletteAnim.onComplete.subscribe(sssResetPalettePill);
	},
	/////////////////////////////////////////////////////////////////////
	// AUTO COMPLETE
	/////////////////////////////////////////////////////////////////////
	sssAutoCompleteLoad: function()
	{
		oACDS = new YAHOO.widget.DS_JSArray( agile.ux.dataset.countries() );
		oAutoComp = new YAHOO.widget.AutoComplete(textboxId,'sss_autoCompleteList', oACDS);
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
		var dragDropFloater = new YAHOO.util.DD("sss_palette");
		dragDropFloater.addInvalidHandleClass("nodrag");
		dragDropFloater.endDrag = agile.ux.singleSelectSearch.sssCheckEndDragPosition;
		oPalette = new YAHOO.sssDDresize("sss_palette", "sss_resize_handle");		
	},
	/////////////////////////////////////////////////////////////////////
	//	sssCheckEndDragPosition
	/////////////////////////////////////////////////////////////////////
	//	If palette top is draged outside the boundries of the body
	//	move it down 10 pixels.
	/////////////////////////////////////////////////////////////////////
	sssCheckEndDragPosition: function(e)
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
		var pillbox = $('sss_pillbox')
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
		
		agile.ux.singleSelectSearch.animatePill();
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
		$("sss_palette_query").value = '';
		$("sss_palette_results").style.overflow = 'auto';
		$("sss_palette_query").style.visibility = 'visible';
		$("sss_palette").style.display = 'block'; 
		var positionTop = uxDom.getY($('cmdOpenPalette'));
		var positionLeft = uxDom.getX($('cmdOpenPalette'));
		var paletteWidth = uxDom.getStyle($('sss_palette'), 'width');
		uxDom.setY( $('sss_palette'), positionTop + -240 )
		uxDom.setX( $('sss_palette'), positionLeft - parseInt(paletteWidth) + 40 );
		$("sss_palette_query").focus();
		
		//Close other palettes
		$("mscl_palette").style.display = 'none';
		$("mssPalette").style.display = 'none';
		//$("musPalette").style.display = 'none';
	},
	/////////////////////////////////////////////////////////////////////
	// sssItemClicked
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is clicked.
	/////////////////////////////////////////////////////////////////////
	sssItemClicked: function(oArgs)
	{
		myDataTable.unselectAllRows();
		var rowId = oArgs.target.parentNode.id;
		uxDom.addClass($(rowId), 'yui-dt-selected');
	},
	/////////////////////////////////////////////////////////////////////
	// sssItemDoubleClicked
	/////////////////////////////////////////////////////////////////////
	//	Occurs when a palette item is doubled clicked.
	/////////////////////////////////////////////////////////////////////
	sssItemDoubleClicked: function(oArgs)
	{
		var listItemName = $(oArgs.target.id).innerHTML;
		if (  $(oArgs.target.id).style.display != 'none'  )
		{
			$('sss_palette_added_notice').style.display = 'block';
			gfadeTimer = null;
			gfadeTimer = setTimeout("paletteAnim.animate();",250);

			var rowId = oArgs.target.parentNode.id;
			agile.ux.singleSelectSearch.addPill(listItemName);
			uxDom.addClass($(rowId), 'yui-dt-selected');
			uxDom.removeClass($(rowId), 'yui-dt-selected');
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	PILL ANIMATION
	/////////////////////////////////////////////////////////////////////
	animatePill: function() 
	{
		jQuery("#pill")
			//.animate({ width: "100%", marginBottom: 10 }, { queue: false, duration: 7000 })
			.animate({ backgroundColor: '#dee7f8' }, 1000)
	},
	/////////////////////////////////////////////////////////////////////
	// PALETTE KEYHANDLER
	/////////////////////////////////////////////////////////////////////
	paletteKeyHandler: function(e) 
	{
		if ( $("sss_palette_query").value.length < 1 )  return;
		if ( e.keyCode == 13 ) { agile.ux.sssPalette.paletteSearch(); }
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
		uxDom.replaceClass($('sss_palette_query'),"agile_border","focus_border");
		uxDom.addClass($('sss_palette_query'), 'focus_field');		
	},

	doPaletteQueryBlur: function()
	{
		uxDom.replaceClass($('sss_palette_query'),"focus_border","agile_border");
		uxDom.removeClass($('sss_palette_query'), 'focus_field');		
	},
	/////////////////////////////////////////////////////////////////////
	//	ADJUST PILLS
	/////////////////////////////////////////////////////////////////////
	adjustPills: function() 
	{
		var container = $('sss_pillbox');
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
		}
	}
};

/////////////////////////////////////////////////////////////////////
//	PALETTE
/////////////////////////////////////////////////////////////////////
agile.ux.sssPalette =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.sssPalette.loadPalette();
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
		myDataTable = new YAHOO.widget.DataTable("sss_palette_results",myColumnSet,myDataSource,{rowSingleSelect:true});
		myDataTable.subscribe("cellClickEvent",agile.ux.singleSelectSearch.sssItemClicked);
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.singleSelectSearch.sssItemDoubleClicked);
		agile.ux.sssPalette.resetPalette();
	},
	/////////////////////////////////////////////////////////////////////
	//	CLOSE PALETTE
	/////////////////////////////////////////////////////////////////////
	closePalette: function()
	{
		agile.ux.sssPalette.resetPalette();
		$('sss_palette').style.display = '';
		$('cmdOpenPalette').focus();
	},
	/////////////////////////////////////////////////////////////////////
	//	RESET PALETTE
	/////////////////////////////////////////////////////////////////////
	resetPalette: function()
	{
		var resultsList = $("sss_palette_results");
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
		if ($('sss_palette_query').value == "")
		{
			alert('Please enter search criteria.');
			$('sss_palette_query').focus();
			return false;
		}

		var firstSelectedItem
		var bFirstSelectedItem = false;
		var query = $("sss_palette_query").value.toLowerCase();
		var resultsList = $("sss_palette_results");
		var items = resultsList.getElementsByTagName("td");

		// Dislplay all records
		if ($('sss_palette_query').value == "*")
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
YAHOO.sssDDresize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId)
	{
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};

YAHOO.extend(YAHOO.sssDDresize, YAHOO.util.DragDrop);

YAHOO.sssDDresize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};

YAHOO.sssDDresize.prototype.onDrag = function(e)
{
    var newPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];
    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);
    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$("sss_floater_content").style.height = newHeight - 12 + "px";
	$("sss_palette_results").style.height = newHeight - 90 + "px";
};