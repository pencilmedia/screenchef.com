/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI SELECT SEARCH
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
registerNS('agile.ux.mss_nv');
agile.ux.mss_nv =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.mss_nv.mssPalette.init();
		agile.ux.mss_nv.setEventHandlers();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SET EVENT HANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent(['cmdMssPallete_nv','cmdMssPalleteClose_nv'], 'click', agile.ux.mss_nv.mssPalette.toggle);
	}
};

function textControlFocus(o)
{
	el = o;
	$(o).className += ' textControlFocus';
}