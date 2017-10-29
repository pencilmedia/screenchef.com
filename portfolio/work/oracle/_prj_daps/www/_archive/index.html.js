function init()
{
	uxLayout = $('body').layout({
		applyDefaultStyles:	true
	,    fxName:     "slide"
		// AUTO-RESIZE Accordion widget when west pane resizes
	,	west__onresize:		function () { $("#accordion").accordion("resize"); }
	,	west__onopen:		function () { $("#accordion").accordion("resize"); }
	,	south__initClosed: true
	});
	$('#ux-center').load('/includes/pages/home.html','', initCenter);
	$('#ux-north').load('/includes/framework/north.html','', initNorth);
	$('#ux-south').load('/includes/framework/south.html');
	$('#ux-east').load('/includes/framework/east.html','',function(){$('#ux-east').tabs()} );
	$('#ux-west').load('/includes/framework/west.html','', initWest);
}

function initWest() 
{
    $("#accordion").accordion({fillSpace: true});
    $("#browser").treeview({
        persist: "location",
        collapsed: true
    });
	$('#mnu0').click(function(){$('#ux-center').load('/includes/pages/home.html','', initCenter); })
    $("#mnu0a").click(function(){ $('#ux-center').load('/includes/pages/split_layout.html','', initSplitLayout);  })
    $("#mnu1").click(function(){alert('You selected menu Trigger Action')})
    $("#mnu2").click(function(){$('#ux-center').load('/includes/pages/page_1.html','', initCenter); })
    $("#mnu3").click(function(){$('#ux-center').load('/includes/pages/page_2.html','', initCenter); })
    $("#mnu4").click(function(){$('#ux-center').load('/includes/pages/page_3.html','', initCenter); })
}

function initSplitLayout()
{
	centerLayout = $('div.ux-center').layout({
		center__paneSelector:	".ux-center-center"
	,	south__paneSelector:	".ux-center-south"
	,	south__size:			310
	});

    $("#split1").click(function(){ $('#split_results').load('/includes/pages/page_1.html');  })
    $("#split2").click(function(){ $('#split_results').load('/includes/pages/page_2.html');  })
    $("#split3").click(function(){ $('#split_results').load('/includes/pages/page_3.html');  })
}

function addTabContent()
{
	$(".tab_content").append("<p>New Tab Content.</p>");
}

function initNorth()
{
	$('#globalLogo').click(function(){ $('#ux-center').load('/includes/pages/home.html','', initCenter); })
}

function initCenter()
{
	$('#home_tabs').tabs();
	// Dialog			
	$('#dialog0').dialog({
		autoOpen: false,
		width: 600
	});
	$('#dialog1').dialog({
		autoOpen: false,
		width: 600,
		buttons: {
			"Ok": function() { 
				$(this).dialog("close"); 
			}, 
			"Cancel": function() { 
				$(this).dialog("close"); 
			} 
		}
	});
	$('#dialog2').dialog({
		autoOpen: false,
		modal: true,
		width: 600,
		buttons: {
			"Ok": function() { 
				$(this).dialog("close"); 
			}, 
			"Cancel": function() { 
				$(this).dialog("close"); 
			} 
		}
	});
	// Date Picker
	$('.date-pick').datePicker();

	// Dialog Link
	$('#dialog_link0').click(function(){
		$('#dialog0').dialog('open');
		return false;
	});

	$('#dialog_link1').click(function(){
		$('#dialog1').dialog('open');
		return false;
	});
	
	$('#dialog_link2').click(function(){
		$('#dialog2').dialog('open');
		return false;
	});
}
$(document).ready(init);