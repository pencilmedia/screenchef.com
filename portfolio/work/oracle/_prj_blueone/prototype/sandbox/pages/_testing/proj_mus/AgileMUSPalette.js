registerNS('agile.ux.mus.palette');
agile.ux.mus.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		paletteDrag  						= new YAHOO.util.DD('musPalette');
		PaletteResize 						= new YAHOO.DDResize("musPalette", 'resize_handle');
		paletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];
		agile.ux.multicascadelist.init();

		var dataset = agile.ux.dataset.multiUserSearch();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;            
  
		/////////////////////
		// Prepair ColumnSet
		/////////////////////
		var columnSet = new YAHOO.widget.ColumnSet(columnHeaders);
		var dataSource = new YAHOO.util.DataSource(columnValues, {responseType: YAHOO.util.DataSource.TYPE_JSARRAY, responseSchema: schema});
		var configs = { scrollable:true, rowSingleSelect:false, resizeable:false }; 
		myDataTable = new YAHOO.widget.DataTable("resultsData",columnSet,dataSource,{rowSingleSelect:true, scrollable:false});
		myDataTable.subscribe("cellClickEvent",myDataTable.onEventSelectRow);
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.mus.palette.itemDoubleClicked);
		agile.ux.mus.palette.reset();
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
			if ($('palette_query').value)
			{
				agile.ux.mus.palette.search();
				$('palette_query').value = '';
			} else {
				alert('Please enter search criteria');
				$('palette_query').focus();
			}
			return false;
			YAHOO.util.Event.stopPropagation(e);
			break;
		}
	},	
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	toggle : function()
	{
		var palette = $('musPalette');
		if (palette.style && palette.style.display == 'block') 
		{
			palette.style.display = 'none';
			
			// Default to User Mode
			uxDom.setStyle('usersContainerDiv', 'display', '');
			uxDom.setStyle('groupsContainerDiv', 'display', 'none');
			uxDom.setStyle('group_approval', 'display', 'none');
			uxDom.setStyle('resultsData', 'display', '');
			$('selGroup').selectedIndex = 0;
			agile.ux.mus.palette.init();

		} else {
			palette.style.display = 'block';
			agile.ux.mus.palette.position();
			$('palette_query').focus();
		}
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		// Palette alignment from launch button.
		var buttonOffSetWidth = 40; // palette alignment
		var buttonOffSetHeight = 35; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY($('cmdMusPallete'));
		var positionLeft = uxDom.getX($('cmdMusPallete'));
		var paletteWidth = uxDom.getStyle($('musPalette'), 'width');
		uxDom.setY( $('musPalette'), positionTop + buttonOffSetHeight )
		uxDom.setX( $('musPalette'), positionLeft - parseInt(paletteWidth) + buttonOffSetWidth );
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE RESET
	/////////////////////////////////////////////////////////////////////
	reset: function()
	{
		var resultsList = $("resultsData");
		var paletteItem = resultsList.getElementsByTagName("tr");
		for (var i = 0; i < paletteItem.length; i++)
		{
			paletteItem[i].style.display = 'none';
			uxDom.removeClass($(paletteItem[i]),"yui-dt-selected");
		}
		
	},	
	handleTypeSelection: function()
	{
		var type;
		type = $('selGroup').value;
		if (type == 'users')
		{
			////////////////////////////////////////////////////////////
			//	USERS MODE
			////////////////////////////////////////////////////////////
			uxDom.setStyle('usersContainerDiv', 'display', '');
			uxDom.setStyle('groupsContainerDiv', 'display', 'none');
			uxDom.setStyle('group_approval', 'display', 'none');
			uxDom.setStyle('resultsData', 'display', '');
			uxDom.setStyle('resultsData', 'height', (parseInt ( $('musPalette').style.height ) - 95));
			agile.ux.mus.palette.init();
		}
		else 
		{
			////////////////////////////////////////////////////////////
			//	GROUPS MODE
			////////////////////////////////////////////////////////////
			uxDom.setStyle('usersContainerDiv', 'display', 'none');
			uxDom.setStyle('groupsContainerDiv', 'display', '');
			uxDom.setStyle('group_approval', 'display', '');
			uxDom.setStyle('resultsData', 'display', 'none');
			$('groupsContainerDiv').style.height = parseInt ( $('musPalette').style.height ) - 130 + "px";
		}
		$('palette_query').value = '';
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE ITEM DOUBLE CLICKED
	/////////////////////////////////////////////////////////////////////
	itemDoubleClicked: function(oArgs)
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
     	var id = YAHOO.util.Dom.get(cells[0].id).innerHTML + ' ' + YAHOO.util.Dom.get(cells[1].id).innerHTML;
		var oID = 'ux-' + $(oArgs.target.id).parentNode.id;
		agile.ux.mus.pills.add(id, oID);
		uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
	},
	/////////////////////////////////////////////////////////////////////
	//	SEARCH
	/////////////////////////////////////////////////////////////////////
	search: function()
	{
		if ( $('palette_query').value == '')
		{
			alert('Please enter search criteria');
			$('palette_query').focus();
			return false;
		}
		agile.ux.mus.palette.reset();
		var mytable = document.getElementById('resultsData').getElementsByTagName('table')[0];
		var rowCount = mytable.rows.length;
		var colCount = mytable.rows[0].cells.length;
		var query = $("palette_query").value.toLowerCase().replace('/*/g', '');
		
		while (query.indexOf('*')>-1)
		{
			pos= query.indexOf('*');
			query = "" + (query.substring(0, pos) + '' + 
			query.substring((pos + '*'.length), query.length));
		}
		var firstSelectedItem
		var bFirstSelectedItem = false;

		mytable.rows[0].style.display = ''; //make header visible.

		if ( query == "*" )
		{
			for (var i=2; i<rowCount; i++)
			{
				mytable.rows[i].style.display = '';
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
		return false;
	}
}

YAHOO.DDResize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
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

/////////////////////////////////////////////////////////////////////
// PALETTE RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.DDResize.prototype.onDrag = function(e)
{
    var newPos 		= [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX 	= newPos[0] - this.startPos[0];
    var offsetY 	= newPos[1] - this.startPos[1];
    var newWidth 	= Math.max(this.startWidth + offsetX, 10);
    var newHeight 	= Math.max(this.startHeight + offsetY, 10);
    var panel 		= this.getEl();
	var groupApprovalDiv = 0;
	if ( $('group_approval').style.display != 'none'  )
	{
		groupApprovalDiv = parseInt( uxDom.getStyle('group_approval','height') );
	}
	panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	$('floater_content').style.height = newHeight - 12 + "px";
	$('resultsData').style.height = newHeight - 95 - groupApprovalDiv + "px";
	if ($('treeContainer').style.display == '')
	{
		$('groupsContainerDiv').style.height = newHeight - 95 - groupApprovalDiv + "px";
	}
	
};