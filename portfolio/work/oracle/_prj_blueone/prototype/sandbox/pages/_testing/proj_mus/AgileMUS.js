/////////////////////////////////////////////////////////////////////////
//  THIS SCRIPT IS FOR PROTOTYPING PURPOSES 
/////////////////////////////////////////////////////////////////////////
//	AGILE UX MULTI SELECT USER SEARCH
/////////////////////////////////////////////////////////////////////////
var uxDom = YAHOO.util.Dom;
registerNS('agile.ux.msus');
agile.ux.mus =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function()
	{
		agile.ux.mus.palette.init();
		agile.ux.mus.setEventHandlers();
	},	
	/////////////////////////////////////////////////////////////////////
	//	SET EVENT HANDLERS
	/////////////////////////////////////////////////////////////////////
	setEventHandlers : function()
	{
		addEvent(['cmdMusPallete','cmdMusPalleteClose'], 'click', agile.ux.mus.palette.toggle);
		addEvent('selGroup', 'change', agile.ux.mus.palette.handleTypeSelection);
		addEvent('cmdMusSearch', 'click', agile.ux.mus.palette.search);
		addEvent(['target_query','targetContainer'], 'focus', agile.ux.mus.pills.setFocus);
		addEvent('targetContainer', 'click', agile.ux.mus.pills.setFocus);
		addEvent('targetContainer',	'blur',	agile.ux.mus.pills.removeFocus);
		addEvent('cmdMusPallete',	'focus',agile.ux.mus.pills.removeFocus);
		addEvent('targetContainer',	'keyup', agile.ux.mus.pills.multiSelectKeyHandler);
		addEvent('palette_query', 'keydown', agile.ux.mus.palette.handleKeyPress);
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
addEvent(window,'load',agile.ux.mus.init);