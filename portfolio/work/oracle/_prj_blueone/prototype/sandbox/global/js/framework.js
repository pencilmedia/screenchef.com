/****************************************************
	ENGINES OF CREATION
****************************************************/
uxDom = YAHOO.util.Dom;
agile.ux.framework = 
{
	/****************************************************
		PAGE INITIALIZATION
	****************************************************/
	pageLoad			: function()
	{
		agile.ux.framework.setEventHandlers();
		agile.ux.framework.resizeContainers();
	},
	/****************************************************
		EVENT HANDLERS
	****************************************************/
	setEventHandlers	: function()
	{
		addEvent(window,'resize',agile.ux.framework.resizeContainers);
	},
	/****************************************************
		FUNCTIONS
	****************************************************/
	resizeContainers	: function()
	{

		var windowHeight 					= uxDom.getClientHeight();
		var objectHeaderHeight				= parseInt(uxDom.getStyle('Header', 'height'));
		var mainPaneHeaderHeight			= parseInt(uxDom.getStyle('TopPane', 'height'));
		var objectContentHeight				= windowHeight - objectHeaderHeight + "px";
		var obj1NewHeight = obj2NewHeight	= (windowHeight - mainPaneHeaderHeight - objectHeaderHeight )/2 + 'px';
		var objFullNewHeight				= (windowHeight - objectHeaderHeight - mainPaneHeaderHeight - 10) + 'px';

		YAHOO.util.Dom.setStyle('Object', 				'height', obj1NewHeight);
		YAHOO.util.Dom.setStyle('Preview', 				'height', obj2NewHeight);
		YAHOO.util.Dom.setStyle('PaneContent', 			'height', objFullNewHeight);
	}
	/****************************************************
		HELPERS
	****************************************************/

};
/****************************************************
	PAGE LOAD
****************************************************/
addEvent(window,'load',agile.ux.framework.pageLoad);