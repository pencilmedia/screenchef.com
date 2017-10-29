/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	THUMBNAIL PALETTE
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
registerNS('agile.ux.thumb_palette');
agile.ux.thumb_palette =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.thumb_palette.palette.init();
		agile.ux.thumb_palette.setEventHandlers();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SET EVENT HANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		var launchAction = jQuery('.launch_viewer_action');
		var launchNews 	 = jQuery('.launch_viewer_news');
		
		launchAction.bind('click', agile.ux.thumb_palette.launchActionPalette);
		launchNews.bind('click', agile.ux.thumb_palette.launchNewsPalette);
		addEvent(['cmdThumbPalette','ux_palette_close'], 'click', agile.ux.thumb_palette.palette.toggle);
	},
	launchActionPalette : function()
	{
			agile.ux.thumb_palette.palette.toggle("action_palette");
	},
	launchNewsPalette : function()
	{
			agile.ux.thumb_palette.palette.toggle("news_palette");
	}
	
};