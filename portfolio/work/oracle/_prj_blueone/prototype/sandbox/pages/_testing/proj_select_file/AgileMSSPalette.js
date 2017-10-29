registerNS('agile.ux.mss.palette');
agile.ux.mss.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		paletteDrag  						= new YAHOO.util.DD('mssPalette');
		PaletteResize 						= new YAHOO.DDResize("mssPalette", 'mss_resize_handle');
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
		myDataTable.subscribe("cellDoubleclickEvent",agile.ux.mss.palette.itemDoubleClicked);
		agile.ux.mss.palette.reset();
	},
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	toggle : function()
	{
		var palette = $('mssPalette');
		if (palette.style && palette.style.display == 'block') {
			palette.style.display = 'none';
		} else {
			palette.style.display = 'block';
			agile.ux.mss.palette.position();
			$('mss_palette_query').focus();
		}
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		// Palette alignment from launch button.
		var buttonOffSetWidth = 60; // palette alignment
		var buttonOffSetHeight = 40; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY($('cmdMssPallete'));
		var positionLeft = uxDom.getX($('cmdMssPallete'));
		var paletteWidth = uxDom.getStyle($('mssPalette'), 'width');
		uxDom.setY( $('mssPalette'), positionTop + buttonOffSetHeight )
		uxDom.setX( $('mssPalette'), positionLeft - parseInt(paletteWidth) + buttonOffSetWidth );
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
     	var id = YAHOO.util.Dom.get(cells[0].id).innerHTML;
		var oID = 'ux-' + oArgs.target.id;
		agile.ux.mss.pills.add(id, oID);
		uxDom.removeClass($(oArgs.target.id).parentNode, 'yui-dt-selected');
		
	},
	search: function()
	{
		agile.ux.mss.palette.reset();
		var mytable = document.getElementById('mss_resultsData').getElementsByTagName('table')[0];
		var rowCount = mytable.rows.length;
		var colCount = mytable.rows[0].cells.length;
		var query = $("mss_palette_query").value.toLowerCase();
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
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};
YAHOO.DDResize.prototype.onDrag = function(e)
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
	$('mss_resultsData').style.height = newHeight - 92 + "px";
};