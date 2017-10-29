var thumbnail = 
{
	x : 1,
	setCount : 3,
	
	init : function()
	{
		thumbnail.initPalette();
		jQuery('#cmdBack').bind('click', thumbnail.doBack);
		jQuery('#cmdNext').bind('click', thumbnail.doNext);
	},
	makeSortable : function()
	{	
		thumbnail.makeSortHandle();
		jQuery('#thumb_tile ul.sortable').sortable(
			{
				helper: 		'sorthelper',
				containment:	'parent',
				opacity:		0.8,
				axis:			'y',
				handle: 		jQuery('.sorthandle'),
				scroll:			true,
				revert:			false
			}
		)
	},
	makeSortHandle : function()
	{
		var sortItem = jQuery('#thumb_tile ul.sortable li');
		sortItem.append("<span class='sorthandle'>&nbsp;</span>");

	},
	doNext : function()
	{	
		if (thumbnail.x < 3)
		{
			jQuery('#thumb_' + thumbnail.x).addClass('hide_thumb');
		}
		if (thumbnail.x == 3) 
		{
			jQuery('#thumb_' + thumbnail.x).addClass('hide_thumb');
			thumbnail.x = 1;
			jQuery('#thumb_' + thumbnail.x).removeClass('hide_thumb');
			jQuery('#thumb_set').text(thumbnail.x + ' of ' + thumbnail.setCount);
			return false;
		} else {
			thumbnail.x++;
			jQuery('#thumb_' + thumbnail.x).removeClass('hide_thumb');
	
			if (thumbnail.x < 1) thumbnail.x = 1;
			if (thumbnail.x > 3)
			{
				thumbnail.x = 3;
			}
			jQuery('#thumb_set').text(thumbnail.x + ' of ' + thumbnail.setCount);
			return false;
		}
	},
	
	doBack : function()
	{
		if (thumbnail.x > 1)
		{
			jQuery('#thumb_' + thumbnail.x).addClass('hide_thumb');
		}
		if (thumbnail.x == 1) 
		{
			jQuery('#thumb_' + thumbnail.x).addClass('hide_thumb');
			thumbnail.x = 3;
			jQuery('#thumb_' + thumbnail.x).removeClass('hide_thumb');
			jQuery('#thumb_set').text(thumbnail.x + ' of ' + thumbnail.setCount);
			return false;
		} else {
			thumbnail.x--;
			jQuery('#thumb_' + thumbnail.x).removeClass('hide_thumb');
	
			if (thumbnail.x < 1)
			{
				thumbnail.x = 1;
			}
			if (thumbnail.x > 3)
			{
				thumbnail.x = 3;
			}
			jQuery('#thumb_set').text(thumbnail.x + ' of ' + thumbnail.setCount);
			return false;
		}
	},
	imgSwap : function() 
	{ 
		var baseURL = '../../../global/images/';
		var thumbLI = jQuery('#thumb_tile li');
		var thumbSelect = jQuery(this).parent();
		
		thumbLI.removeClass('selected_tile');
		thumbSelect.addClass('selected_tile');
		
		var thumbImg = jQuery('#thumb_tile li.selected_tile img');
		var fileName = thumbSelect.children().attr('alt');
		var fullImg = jQuery('#thumb_shot img');
		
		fullImg.attr('src',baseURL + fileName);
	},
	/////////////////////////////////////////////////////////////////////
	//	INIT PALETTE
	/////////////////////////////////////////////////////////////////////
	initPalette: function()
	{
		jQuery('#thumbPalette').css({width:650,height:435,top:100,left:100});
		thumbnail.palette();
		thumbnail.setEventHandlers();
		thumbnail.makeSortable();
	},
	/////////////////////////////////////////////////////////////////////
	//	SET EVENT HANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{	
		var clickSource = jQuery('.launch_viewer'); 
		clickSource.bind('click', thumbnail.toggle);
		jQuery('#ux_palette_close').bind('click', thumbnail.toggle);
		var thumbTile = jQuery('#thumb_tile img');
		thumbTile.bind('click', thumbnail.imgSwap);
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
