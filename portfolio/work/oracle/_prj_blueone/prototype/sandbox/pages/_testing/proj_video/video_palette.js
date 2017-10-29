/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////

YAHOO.mssDDresize = function(panelElId, handleElId, sGroup, config)
{alert('yyyy');
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};
YAHOO.extend(YAHOO.mssDDresize, YAHOO.util.DragDrop);
YAHOO.mssDDresize.prototype.onMouseDown = function(e)
{alert('cc');
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};
YAHOO.mssDDresize.prototype.onDrag = function(e)
{ alert('drag');
    var newPos 		= [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX 	= newPos[0] - this.startPos[0];
    var offsetY 	= newPos[1] - this.startPos[1];
    var newWidth 	= Math.max(this.startWidth + offsetX, 10);
    var newHeight 	= Math.max(this.startHeight + offsetY, 10);
    var panel 		= this.getEl();

	panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	
	
	var x = $('thumb_floater_handlebar').offsetHeight;
	var y = $('thumb_floater_title').offsetHeight;
	var z = $('thumb_resize_handle').offsetHeight;	
	var f = $('thumbnail_actions').offsetHeight;
	console.log("sdddd")
	$('thumb_palette_content').style.height = (newHeight - x - y - z) + "px";
	$('thumb_shot').style.height 	= (newHeight - x - y - z - f) + "px";
	$('thumb_shot').style.minHeight = (newHeight - x - y - z - f) + "px";
	$('thumb_tile').style.height 	= (newHeight - x - y - z - f) + "px";
	$('thumb_tile').style.minHeight = (newHeight - x - y - z - f) + "px";
	
};

