/////////////////////////////////////////////////////////////////////////
//	AGILE UX PALETTE
/////////////////////////////////////////////////////////////////////////
agile.ux.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	FIELDS
	/////////////////////////////////////////////////////////////////////
	_palette_width 				: 525,
	_palette_height 			: 290,
	_palette_current_height 	: 200,
	_palette_toggled_height 	: 16,
	_actionBarOffset			: 10,
	_palette_collapsed 			: false,
	_palette					: null,
	_header                 	: null,
	_palette_main				: null,
	_palette_offSetTop      	: null,
	_palette_offSetBottom   	: null,
	_palette_paletteHeight  	: null,
	_palette_resizeHandleHeight	: null,
	paletteResizeEvent			: new YAHOO.util.CustomEvent("onResize"),
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.palette.prepPalette();
		agile.ux.palette.openPalette();
	},	
	/////////////////////////////////////////////////////////////////////
	//	PREPPALETTE
	/////////////////////////////////////////////////////////////////////
	prepPalette : function()
	{
		// YUI DRAG AND RESIZE
		paletteDrag  						= new YAHOO.util.DD('ux_palette');
		PaletteResize 						= new YAHOO.DDResize('ux_palette','ux_palette_handle');
		paletteDrag.invalidHandleClasses 	= ['ux_palette_no_drag'];
		//////////////////////
		agile.ux.palette._palette	      	= document.getElementById('ux_palette');
		agile.ux.palette._header            = document.getElementById('ux_palette_header')
		agile.ux.palette._main		      	= document.getElementById('ux_palette_main');
		agile.ux.palette._offSetTop      	= document.getElementById('ux_palette_top');
		agile.ux.palette._offSetBottom  	= document.getElementById('ux_palette_bottom');
		agile.ux.palette._height  			= document.getElementById('ux_palette');
		agile.ux.palette._resizeHandleHeight= document.getElementById('ux_palette_handle');
		
		//////////////////////
		jQuery('#ux_palette_toggle').click(agile.ux.palette.togglePalette);
		jQuery('#ux_palette_close').click(agile.ux.palette.closePalette);
		jQuery('#ux_palette_title').bind('dblclick', agile.ux.palette.togglePalette);
		jQuery('#ux_palette').css({width:agile.ux.palette._palette_width,height:agile.ux.palette._palette_height});
		//////////////////////

		if ( jQuery('.ux_palette_bottom_action_bar') )
		{
			agile.ux.palette._actionBarOffset = agile.ux.palette._actionBarOffset;
		} else {
			agile.ux.palette._actionBarOffset = 0;
		}
		jQuery('#ux_palette, #ux_palette *').addClass('ux_palette_no_drag');
		jQuery('#ux_palette_header *').removeClass('ux_palette_no_drag');
	},
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	togglePalette: function()
	{
		if (agile.ux.palette._palette_collapsed)
		{
			jQuery('#ux_palette').height(agile.ux.palette._palette_current_height);
			jQuery('#ux_palette_toggle').css('background-image','url(/global/images/ux_palette/palette_collapse.png)');
			jQuery('#ux_palette_handle').show();
			jQuery('#ux_palette').css('minHeight',70); 
			agile.ux.palette.onResize();
			agile.ux.palette._palette_collapsed = false;
		} else {
			jQuery('#ux_palette').height(agile.ux.palette._header.offsetHeight - 1);
			jQuery('#ux_palette_toggle').css('background-image','url(/global/images/ux_palette/palette_expand.png)');
			jQuery('#ux_palette_handle').hide();
			jQuery('#ux_palette').css('minHeight',16); 
			agile.ux.palette._palette_collapsed = true;
		}
	},
	/////////////////////////////////////////////////////////////////////
	//	OPEN/CLOSE PALETTE
	/////////////////////////////////////////////////////////////////////
	openPalette: function() 
	{
		jQuery('#ux_palette').show();
		for (var x = 1; x <= 5; x++) { agile.ux.palette.onResize()}
	},
	closePalette: function() { jQuery('#ux_palette').hide();},
	/////////////////////////////////////////////////////////////////////
	//	ONRESIZE
	/////////////////////////////////////////////////////////////////////
	onResize : function()
	{
		// Palette inner content resizing logic 
		agile.ux.palette._palette_current_height 	= agile.ux.palette._palette.offsetHeight;
		var paletteHeight 							= agile.ux.palette._height.offsetHeight;
		var paletteTop 								= agile.ux.palette._offSetTop.offsetHeight;
		var paletteBottom 							= agile.ux.palette._offSetBottom.offsetHeight;
		var ux_palette_main_height  				= paletteHeight - paletteTop - paletteBottom;
		agile.ux.palette._main.style.height 		= ux_palette_main_height - agile.ux.palette._resizeHandleHeight.offsetHeight  + agile.ux.palette._actionBarOffset + 'px';
		this.paletteResizeEvent.fire();
	}
};

/////////////////////////////////////////////////////////////////////
// YAHOO DRAG AND RESIZE
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
    var panel 					= this.getEl();
    this.startWidth 			= panel.offsetWidth;
    this.startHeight 			= panel.offsetHeight;
    this.startPos 				= [YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)];
};
YAHOO.DDResize.prototype.onDrag = function(e)
{
    var panel 					= this.getEl();
    var newPos 					= [YAHOO.util.Event.getPageX(e),YAHOO.util.Event.getPageY(e)];
    var offsetX 				= newPos[0] - this.startPos[0];
    var offsetY 				= newPos[1] - this.startPos[1];
    var newWidth 				= Math.max(this.startWidth + offsetX, 10);
    var newHeight 				= Math.max(this.startHeight + offsetY, 10);
    panel.style.width 			= newWidth + 'px';
    panel.style.height 			= newHeight + 'px';
	
	if (parseInt(panel.style.height) < 30)
	{
	    panel.style.height = '30px';
	    return;
	}
	
	agile.ux.palette.onResize();
}
/****************************************************
	PAGE LOAD
****************************************************/
jQuery(agile.ux.palette.init);