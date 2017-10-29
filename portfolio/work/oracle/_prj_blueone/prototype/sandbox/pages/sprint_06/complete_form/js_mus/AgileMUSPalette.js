registerNS('agile.ux.mus.palette');
agile.ux.mus.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		musPaletteDrag  						= new YAHOO.util.DD('mus_palette');
		musPaletteResize 						= new YAHOO.musDDresize("mus_palette", 'mus_resize_handle');
		musPaletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];

		var dataset = agile.ux.dataset.mus();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;            
  
		/////////////////////
		// Prepair ColumnSet
		/////////////////////
		var columnSet = new YAHOO.widget.ColumnSet(columnHeaders);
		var dataSource = new YAHOO.util.DataSource(columnValues, {responseType: YAHOO.util.DataSource.TYPE_JSARRAY, responseSchema: schema});
		var configs = { scrollable:true, rowSingleSelect:false, resizeable:false }; 
		myDataTable = new YAHOO.widget.DataTable("mus_resultsData",columnSet,dataSource,{rowSingleSelect:true, scrollable:false});
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
			if ($('mus_query').value)
			{
				agile.ux.mus.palette.search();
				$('mus_query').value = '';
			} else {
				alert('Please enter search criteria');
				$('mus_query').focus();
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
		var palette = $('mus_palette');
		if (palette.style && palette.style.display == 'block') 
		{
			palette.style.display = 'none';
			
			// Default to User Mode
			uxDom.setStyle('usersContainerDiv', 'display', '');
			uxDom.setStyle('groupsContainerDiv', 'display', 'none');
			uxDom.setStyle('group_approval', 'display', 'none');
			uxDom.setStyle('mus_resultsData', 'display', '');
			$('selGroup').selectedIndex = 0;
			agile.ux.mus.palette.init();

		} else {
			palette.style.display = 'block';
			agile.ux.mus.palette.position();
			$('mus_query').focus();
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
		var positionTop = uxDom.getY($('cmdMusPallete'));
		var positionLeft = uxDom.getX($('cmdMusPallete'));
		var paletteWidth = uxDom.getStyle($('mus_palette'), 'width');
		uxDom.setY( $('mus_palette'), positionTop + buttonOffSetHeight )
		uxDom.setX( $('mus_palette'), positionLeft - parseInt(paletteWidth) + buttonOffSetWidth );
	},
	/////////////////////////////////////////////////////////////////////
	//	PALETTE RESET
	/////////////////////////////////////////////////////////////////////
	reset: function()
	{
		var resultsList = $("mus_resultsData");
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
			uxDom.setStyle('mus_resultsData', 'display', '');
			uxDom.setStyle('mus_resultsData', 'height', (parseInt ( $('mus_palette').style.height ) - 95));
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
			uxDom.setStyle('mus_resultsData', 'display', 'none');
			$('groupsContainerDiv').style.height = parseInt ( $('mus_palette').style.height ) - 130 + "px";
		}
		$('mus_query').value = '';
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
		if ( $('mus_query').value == '')
		{
			alert('Please enter search criteria');
			$('mus_query').focus();
			return false;
		}
		agile.ux.mus.palette.reset();
		var mytable = document.getElementById('mus_resultsData').getElementsByTagName('table')[0];
		var rowCount = mytable.rows.length;
		var colCount = mytable.rows[0].cells.length;
		var query = $("mus_query").value.toLowerCase().replace('/*/g', '');
		
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

YAHOO.musDDresize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
    }
};
YAHOO.extend(YAHOO.musDDresize, YAHOO.util.DragDrop);
YAHOO.musDDresize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};

/////////////////////////////////////////////////////////////////////
// PALETTE RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.musDDresize.prototype.onDrag = function(e)
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
	$('mus_floater_content').style.height = newHeight - 12 + "px";
	$('mus_resultsData').style.height = newHeight - 95 - groupApprovalDiv + "px";
	if ($('mus_treeContainer').style.display == '')
	{
		$('groupsContainerDiv').style.height = newHeight - 95 - groupApprovalDiv + "px";
	}
	
};