var frameLayout, applicationLayout, $Tabs;
function resizeTabLayout () {
	if (!$Tabs) return;
	var selected = $Tabs.tabs('option', 'selected');
	switch(selected)
	{
		case 0:
			$('.ux-center .ui-widget-header').text('Main Body');
			$('.ux-south .ui-widget-header').text('Oracle DAPS Page Layout.');
			applicationLayout.hide('west');
			applicationLayout.hide('east');
			break;
		case 1:
			$('.ux-center .ui-widget-header').text('Two Column Layout');
			$('.ux-south .ui-widget-header').text('Oracle DAPS Dual Pane Layout.');
			applicationLayout.show('west');
			applicationLayout.hide('east');
			break;	
		case 2:
			$('.ux-center .ui-widget-header').text('Three Column Layout');
			$('.ux-south .ui-widget-header').text('Oracle DAPS Tri Pane Layout.');
			applicationLayout.show('west');
			applicationLayout.show('east');
			break
	}
	initAppLayout();
}

 	function initAppLayout () {
 		var $Container = $('#applicationLayout');
 		// make sure Container element is not hidden
 		$Container.show();
		// if Container is still not visible, then must be INSIDE a hidden element
		if ( !$Container.is(':visible') ) return; // ABORT
 		// init the Layout if not already done
		if (!applicationLayout)
			applicationLayout = $Container.layout({
				name:						"ApplicationLayout"
			,	fxName:						'none'
			,	center__paneSelector:		".ux-center"
			,	west__paneSelector:			".ux-west"
			,	east__paneSelector:			".ux-east"
			,	north__paneSelector:  		".ux-north"
			,	south__paneSelector:  		".ux-south"
			,	contentSelector:			".ui-widget-content"
			,	center__onresize:			"InnerLayout.resizeAll"
			,	spacing_open:				4
			,	spacing_closed:				4
			,	north__spacing_open:		0
			,	north__togglerLength_open:	0
			,	north__togglerLength_close:	-1
			,	north__resizable:			false
			,	north__slidable:			false
			,	north__showOverflowOnHover:	false
			,	west__size:					200
			,	south__minSize:				5
			,	south__size:				'auto'
			,	south__togglerLength_open:	0
			,	south__togglerLength_close:	-1
			,	south__resizable:			false
			,	south__slidable:			false
			,	south__spacing_open:		1
			,	west__initHidden:			true
			,	east__initHidden:			true
			});
 	}

	$(document).ready(function () { 
		$Tabs = $("#frame").tabs({show: resizeTabLayout });
		frameLayout = $('body').layout({ 
			name:					"frameLayout"
		,	north__paneSelector:	"#frameHeader"
		,	center__paneSelector:	"#frameBody"
		,	center__onresize:		"ApplicationLayout.resizeAll"
		,	spacing_open:			0
		});
		frameLayout.resizeAll();
		initAppLayout();
	});