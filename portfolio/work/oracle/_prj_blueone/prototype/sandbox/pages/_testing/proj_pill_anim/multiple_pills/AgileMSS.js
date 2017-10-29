/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI SELECT SEARCH
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
registerNS('agile.ux.mss');
agile.ux.mss =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.mss.palette.init();
		agile.ux.mss.setEventHandlers();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SET EVENT HANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent(['cmdMssPallete','cmdMssPalleteClose'], 'click', agile.ux.mss.palette.toggle);
		addEvent('cmdMssSearch', 'click', agile.ux.mss.palette.search);
		addEvent(['target_query','mss_targetContainer'], 'focus', agile.ux.mss.pills.setFocus);
		addEvent('mss_targetContainer', 'click', agile.ux.mss.pills.setFocus);
		addEvent('mss_targetContainer',	'blur',	agile.ux.mss.pills.removeFocus);
		addEvent('cmdMssPallete',	'focus',agile.ux.mss.pills.removeFocus);
		addEvent('mss_targetContainer',	'keyup', agile.ux.mss.pills.multiSelectKeyHandler)
	}
};

function textControlFocus(o)
{
	el = o;
	$(o).className += ' textControlFocus';
}
/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.mss.init);