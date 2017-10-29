/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI-LIST AND PALETTE
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
agile.ux.shuttle =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.shuttle.setYUIControls();
		agile.ux.shuttle.setEventHandlers();
		agile.ux.shuttle.prepPalette();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SETYUICONTROLS
	/////////////////////////////////////////////////////////////////////
	setYUIControls : function()
	{
		paletteDrag  			= new YAHOO.util.DD('palette');
		paletteDrag.invalidHandleClasses = ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];
		PaletteResize 			= new YAHOO.DDResize("palette", 'resize_handle');
	},
	/////////////////////////////////////////////////////////////////////
	//	SETEVENTHANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent("toggle_shuttle",	'click', 	agile.ux.shuttle.openPalette);
		addEvent("close_palette",	'click', 	agile.ux.shuttle.closePalette);
		
	},
	prepPalette : function()
	{
		var mscl = $('palette');
		uxDom.setStyle(mscl, 'width', '500px');
		uxDom.setStyle($('floater_content'), 'height', '175px');

	},
	openPalette: function()
	{
		$('palette').style.display = 'block';
	},
	closePalette: function()
	{
		$('palette').style.display = 'none';
	}	
};

/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////
YAHOO.DDResize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) 
	{
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
	document.getElementById('sc_control_1').style.height = newHeight - 80 + "px";
	document.getElementById('sc_control_2').style.height = newHeight - 80 + "px";
};

function test(e)
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
	document.getElementById('sc_control_1').style.height = newHeight - 5 + "px";
	document.getElementById('sc_control_2').style.height = newHeight - 55 + "px";	
}



/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.shuttle.init);
