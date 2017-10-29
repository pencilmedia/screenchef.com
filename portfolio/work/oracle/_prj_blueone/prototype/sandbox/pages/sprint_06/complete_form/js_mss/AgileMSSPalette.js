registerNS('agile.ux.mss.mssPalette');
agile.ux.mss.mssPalette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		paletteDrag  						= new YAHOO.util.DD('mssPalette');
		PaletteResize 						= new YAHOO.mssDDresize("mssPalette", 'mss_resize_handle');
		paletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];

		var dataset = agile.ux.dataset.multiSelectSearch();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;            
  
		/////////////////////
		// Prepair ColumnSet
		/////////////////////
		var columnSet = new YAHOO.widget.ColumnSet(columnHeaders);
		var dataSource = new YAHOO.util.DataSource(columnValues, {responseType: YAHOO.util.DataSource.TYPE_JSARRAY, responseSchema: schema});
		var configs = { scrollable:true, rowSingleSelect:false, resizeable:false }; 
		myDataTable = new YAHOO.widget.DataTable("mss_resultsData",columnSet,dataSource,{rowSingleSelect:true, scrollable:false});
		myDataTable.subscribe("cellClickEvent",myDataTable.onEventSelectRow);
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.mss.mssPalette.mssItemDoubleClicked);
		agile.ux.mss.mssPalette.reset();
		
		gIsFading = true;
		mssPaletteAnim = new YAHOO.util.Anim('mss_palette_added_notice', { opacity: { to: 0 } }, .4, YAHOO.util.Easing.easeNone); 
		mssPaletteAnim.onComplete.subscribe(mssResetPalettePill);

	},
		doMSSBoxFocus: function()
	{
		uxDom.addClass($('mss_palette_query'),"focus_field");
	},
		doMSSBoxBlur: function()
	{
		uxDom.removeClass($('mss_palette_query'), 'focus_field');		
	},
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	toggle : function()
	{
		var mssPalette = $('mssPalette');
		if (mssPalette.style && mssPalette.style.display == 'block') {
			mssPalette.style.display = 'none';
		} else {
			mssPalette.style.display = 'block';
			agile.ux.mss.mssPalette.position();
			$('mss_palette_query').focus();
		}
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		// Palette alignment from launch button.
		var buttonOffSetWidth = 40; // palette alignment
		var buttonOffSetHeight = -240; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY($('cmdMssPallete'));
		var positionLeft = uxDom.getX($('cmdMssPallete'));
		var paletteWidth = uxDom.getStyle($('mssPalette'), 'width');
		uxDom.setY( $('mssPalette'), positionTop + buttonOffSetHeight )
		uxDom.setX( $('mssPalette'), positionLeft - parseInt(paletteWidth) + buttonOffSetWidth );
		agile.ux.mss.mssPalette.paletteResultMessaging('Enter search criteria and click Search for results.');

		//Close other palettes
		$("mscl_palette").style.display = 'none';
		$("mssPalette_nv").style.display = 'none';
		$("sss_palette").style.display = 'none';
		//$("musPalette").style.display = 'none';
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE RESET
	/////////////////////////////////////////////////////////////////////
	reset: function()
	{
		var resultsList = $("mss_resultsData");
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
			if ($('mss_palette_query'))
			{
				agile.ux.mss.mssPalette.search();
			} else {
				$('mss_palette_query').select();
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
		var elTarget = oArgs.target;
     	var elTag = elTarget.tagName.toLowerCase();
     	// Traverse up the DOM to find the row
     	while(elTag != "tr") 
		{
       		if(elTag == "body") 
			{
				return;
       		}
       		elTarget = elTarget.parentNode;
       		elTag = elTarget.tagName.toLowerCase();
     	}
     
	 	// create pill only for first <td> cell in row
     	var cells = elTarget.getElementsByTagName("td");      
     	var id = YAHOO.util.Dom.get(cells[0].id).innerHTML;
		var oID = 'ux-' + oArgs.target.id;
		
		$('mss_palette_added_notice').style.display = 'block';
		gfadeTimer = null;
		gfadeTimer = setTimeout("mssPaletteAnim.animate();",250);
		
		agile.ux.mss.pills.add(id, oID);
		uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
	},
	paletteResultMessaging: function(msg)
	{
		agile.ux.mss.mssPalette.paletteResultMessagingClear();
		if ( !$('paletteMessaging') )
		{
			var msg = msg;
			var mssQueryDiv = $('mss_resultsData');
			var mssQueryEl = document.createElement('p');
			mssQueryEl.id = 'paletteMessaging';
			mssQueryDiv.appendChild(mssQueryEl);
			mssQueryEl.innerHTML = msg;
			$('mss_palette_query').select();
		}
	},
	paletteResultMessagingClear: function()
	{
		var mssPaletteMsg = $("mss_palette_message");
		if ( $('paletteMessaging') )
		{
			var el = $('paletteMessaging');
			el.parentNode.removeChild(el);
		}
		if (mssPaletteMsg) 
		{
			if (mssPaletteMsg.style.display == 'block') {
				var mssResultsHeight = $("mss_resultsData").offsetHeight;
				var mssAddHeight = (mssResultsHeight + 34) + 'px';
				$("mss_resultsData").style.height = mssAddHeight;	
			}
			mssPaletteMsg.style.display='none';
		}
	},
	search: function() {
		var mytable = document.getElementById('mss_resultsData').getElementsByTagName('table')[0];
		var rowCount = mytable.rows.length;
		var colCount = mytable.rows[0].cells.length;
		var query = $("mss_palette_query").value.toLowerCase();
		var firstSelectedItem;
		var bFirstSelectedItem = false;
		var rowsFound = 0;
		
		var mssQueryCheck = $('mss_palette_query');
		var mssPaletteMsg = $("mss_palette_message");
		var mssResultsList = $("mss_resultsData");
		
		if ( mssQueryCheck.value == '') {
			agile.ux.mss.mssPalette.reset();
			mssQueryCheck.value='Enter Criteria';
			mssQueryCheck.select();
			mytable.rows[0].style.display = ''; //make header visible.
			agile.ux.mss.mssPalette.paletteResultMessaging('Enter search criteria and click Search for results.');
			return false;
		} else {
			if (mssQueryCheck.value == 'Enter Criteria') 
			{
				return false;
			}	
		}
		agile.ux.mss.mssPalette.paletteResultMessagingClear();
		agile.ux.mss.mssPalette.reset();
		mytable.rows[0].style.display = ''; //make header visible.

		if ( query == "*" )
		{
			for (var i=2; i<rowCount; i++)
			{
				mytable.rows[i].style.display = '';
				rowsFound++;
				if (rowsFound>8) 
				{
					var mssResultsHeight = mssResultsList.offsetHeight;
					var mssReduceHeight = (mssResultsHeight - 34) + 'px';
					mssResultsList.style.height = mssReduceHeight;
					mssPaletteMsg.style.display = 'block';
					return false;
				}
			}
			myDataTable.select('yui-dt0-bdrow0');
			return;
		}
		
		for (var i=2; i<rowCount; i++)
		{
			for (var j=0; j<colCount; j++)
			{
				if (mytable.rows[i].cells[j].innerHTML.toLowerCase().indexOf(query) != -1)
				{
					mytable.rows[i].style.display = '';
					rowsFound++;

					if ( bFirstSelectedItem == false )
					{
						firstSelectedItem = mytable.rows[i].id;
						myDataTable.select(firstSelectedItem);
						bFirstSelectedItem = true;
					}
				}
			}
		}
		myDataTable.select('yui-dt0-bdrow0');
		if (rowsFound < 1)
		{
			agile.ux.mss.mssPalette.paletteResultMessaging('No results found that match the criteria.');
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
	$('mss_floater_content').style.height = newHeight - 12 + "px";

	var curHeight;
	
	if ( $('mss_palette_message').style.display=='block' )
	{
		curHeight = 130;
	} else {
		curHeight = 92
	}

	$('mss_resultsData').style.height = newHeight - curHeight + "px";
};




