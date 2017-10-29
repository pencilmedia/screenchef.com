registerNS('agile.ux.thumb_palette.palette');
agile.ux.thumb_palette.palette =
{
	/////////////////////////////////////////////////////////////////////
	//	PALETTE DRAG AND RESIZE BEHAVIOR
	/////////////////////////////////////////////////////////////////////
	init : function()
	{
		paletteDrag  						= new YAHOO.util.DD('ux_palette');
		PaletteResize 						= new YAHOO.mssDDresize("ux_palette", 'ux_palette_handle');
		paletteDrag.invalidHandleClasses 	= ['nodrag','ygtvitem','agileTreeNode','toggleImageCollapse','toggleImageExpand'];

		var dataset = agile.ux.dataset.multiSelectSearch();
		var columnHeaders = dataset["_COLUMN_HEADERS"];
		var schema = dataset["_SCHEMA"];
		var columnValues = dataset.states;
	},
	toggle : function(thePalette)
	{

		var thumbnailPalette = $('ux_palette');


		if (thumbnailPalette.style && thumbnailPalette.style.display == 'block') {
			thumbnailPalette.style.display = 'none';
		} else {
			
			switch (thePalette)
			{
			case "action_palette":
				thumbnailPalette.style.display = 'block';
				thumbnailPalette.style.width = '525px';
				thumbnailPalette.style.minWidth = '525px';
				thumbnailPalette.style.height = '355px';
				thumbnailPalette.style.top = '190px';
				thumbnailPalette.style.left = '470px';
			  break;
			case "news_palette":
				thumbnailPalette.style.display = 'block';
				thumbnailPalette.style.width = '525px';
				thumbnailPalette.style.minWidth = '525px';
				thumbnailPalette.style.height = '190px';
				thumbnailPalette.style.top = '190px';
				thumbnailPalette.style.left = '470px';
			  break;
			default:
			
			}
	
		}		
				
	},	
	/////////////////////////////////////////////////////////////////////
	//	PALETTE POSITIONING
	/////////////////////////////////////////////////////////////////////
	position: function()
	{
		var clickSource = jQuery('.launch_viewer');
		// Palette alignment from launch button.
		var buttonOffSetWidth = 500; // palette alignment
		var buttonOffSetHeight = -100; // palette alignment
		//  Position Palette
		var positionTop = uxDom.getY(clickSource);
		var positionLeft = uxDom.getX(clickSource);
		var paletteWidth = uxDom.getStyle($('ux_palette'), 'width');

		uxDom.setY( $('#ux_palette'), parseInt(positionTop) + buttonOffSetHeight )
		uxDom.setX( $('#ux_palette'), parseInt(positionLeft) - parseInt(paletteWidth) + buttonOffSetWidth );
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
	
	
	var x = $('ux_palette_top').offsetHeight;
	var y = $('ux_palette_bottom').offsetHeight;
	
	$('ux_palette_main').style.height = (newHeight - x - 10) + "px";
};




