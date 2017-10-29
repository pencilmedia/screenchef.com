var thumbnail = 
{
	x : 1,
	setCount : 3,
	
	init : function()
	{
		thumbnail.initPalette();
	},
	/////////////////////////////////////////////////////////////////////
	//	INIT PALETTE
	/////////////////////////////////////////////////////////////////////
	initPalette: function()
	{
		jQuery('#thumbPalette').css({width:600,height:455,top:100,left:150, display:'block'});
		thumbnail.palette();	 alert('ee');
	},
		/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	palette : function()
	{
		paletteDrag  						= new YAHOO.util.DD('thumbPalette');
		PaletteResize 						= new YAHOO.thumbDDresize("thumbPalette", 'ux_palette_handle');
		paletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];

		var dataset = agile.ux.dataset.multiSelectSearch();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;  
	},
	/////////////////////////////////////////////////////////////////////
	//	TOGGLE PALETTE
	/////////////////////////////////////////////////////////////////////
	toggle : function()
	{
		var thumbnailPalette = $('thumbPalette');
		
		if (thumbnailPalette.style && thumbnailPalette.style.display == 'block') {
			thumbnailPalette.style.display = 'none';
		} else {
			thumbnailPalette.style.display = 'block';
			thumbnail.position();
		}
		
		/*resize thumbnail tile column upon launch*/
		var tNail = $('thumb_shot').offsetHeight;
		$('thumb_tile').style.height = tNail + "px";
		$('thumb_tile').style.minHeight = tNail + "px";
		
		thumbnail.setEventHandlers();
		
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		var clickSource = jQuery('.launch_viewer');
		// Palette alignment from launch button.
		var buttonOffSetWidth = -10; // palette alignment
		var buttonOffSetHeight = -140; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY(clickSource);
		var positionLeft = uxDom.getX(clickSource);
		var paletteWidth = uxDom.getStyle($('thumbPalette'), 'width');

		uxDom.setY( $('thumbPalette'), parseInt(positionTop) + buttonOffSetHeight )
		uxDom.setX( $('thumbPalette'), parseInt(positionLeft) - parseInt(paletteWidth) + buttonOffSetWidth );
	}

};
jQuery(document).ready(thumbnail.init);




/////////////////////////////////////////////////////////////////////
// YAHOO RESIZE
/////////////////////////////////////////////////////////////////////

YAHOO.thumbDDresize = function(panelElId, handleElId, sGroup, config)
{
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};

YAHOO.extend(YAHOO.thumbDDresize, YAHOO.util.DragDrop);

YAHOO.thumbDDresize.prototype.onMouseDown = function(e)
{
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;
    this.startPos = [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
};
YAHOO.thumbDDresize.prototype.onDrag = function(e)
{
    var newPos 		= [YAHOO.util.Event.getPageX(e), YAHOO.util.Event.getPageY(e)];
    var offsetX 	= newPos[0] - this.startPos[0];
    var offsetY 	= newPos[1] - this.startPos[1];
    var newWidth 	= Math.max(this.startWidth + offsetX, 10);
    var newHeight 	= Math.max(this.startHeight + offsetY, 10);
    var panel 		= this.getEl();

	panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	
	var top = $('ux_palette_top').offsetHeight;
	var bot = $('ux_palette_bottom').offsetHeight;

	$('ux_palette_main').style.height = (newHeight - top - bot) + "px";
	
	$('thumb_shot').style.height 	= (newHeight - top - bot) + "px";
	$('thumb_shot').style.minHeight = (newHeight - top - bot) + "px";
	$('thumb_tile').style.height 	= (newHeight - top - bot) + "px";
	$('thumb_tile').style.minHeight = (newHeight - top - bot) + "px";
	
};


/*Thumbnail Table Toggle*/
var thumbTable = {};
thumbTable.init = function()
{

	jQuery('#toggle_list').mousedown( function() { jQuery('#thumb_list').show(); jQuery('#thumb_tablelist').hide();jQuery('#thumb_table').hide(); } );
	jQuery('#toggle_thumblist').mousedown( function() { jQuery('#thumb_tablelist').show(); jQuery('#thumb_list').hide(); jQuery('#thumb_table').hide(); } );
	jQuery('#toggle_thumbs').mousedown( function() { jQuery('#thumb_table').show(); jQuery('#thumb_list').hide(); jQuery('#thumb_tablelist').hide(); } );
	
	jQuery('.overlay').hide(); 
	
	var launcher = jQuery('.thumbnail .launch_viewer');
	launcher.bind('mouseover', thumbTable.showBtn );
	
},
thumbTable.showBtn = function () {
	var launcher = jQuery('.thumbnail .launch_viewer');
	var el		= '#'+ this.id;
	var button = el+'_btn';
	
	jQuery(button).show();
	jQuery(button).mouseover( function() { launcher.unbind(); });
	jQuery(button).mouseover( function() { jQuery(button).show(); });
	
	jQuery(button).mouseout( thumbTable.hideBtn );
	launcher.bind('mouseout', thumbTable.hideBtn);
},
thumbTable.hideBtn = function () {
	jQuery('.overlay').hide();
	
	var launcher = jQuery('.thumbnail .launch_viewer');
	launcher.bind('mouseover', thumbTable.showBtn );

}
