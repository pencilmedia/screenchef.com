var $Tabs, $SubTabs;
function init()
{
	$Tabs = $(".frame").tabs({show: tabSelect });
	$SubTabs = $(".sub_frame").tabs({show: subTabSelect });
	$('#ux_global_header').load('/includes/framework/north.html');

	myLayout = $('#applicationLayout').layout({
			center__paneSelector:	".ui-layout-center"
		,	west__paneSelector:		".ui-layout-west" 
		,	east__paneSelector:		".ui-layout-east" 
		,	west__size:				125 
		,	east__size:				125 
	});

}

function tabSelect () {
	if (!$Tabs) return;
	var selected = $Tabs.tabs('option', 'selected');
	switch(selected)
	{
		case 0:
			break;	
		case 1:
			break
	}
}
function subTabSelect()
{
	if (!$SubTabs) return;
	var selected = $SubTabs.tabs('option', 'selected');
	switch(selected)
	{
		case 0:
			msg = 'Paneless';
			break;	
		case 1:
			msg = 'Single Pane';
			break
		case 2:
			msg = 'Dual Pane';
			break
	}
	alert( msg );
}


$(document).ready(init); 
