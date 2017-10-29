var outerLayout, centerLayout, innerLayout, applicationLayout, $Tabs, $SubTabs, comCurHeight;
var windowHeight = $(window).height() - 128;
var isMax2 = false;
var isMax3 = false;
var isMax4 = false;
var g_selected_tab;
var g_tab_type = '/includes/pages/details_page_worklist.html';
var g_tab_type;
var g_current_sub_tab;
function init()
{
	buildBot();
	$Tabs = $(".frame").tabs({
		show: mainTabHandler
	,	closable: 'all'
	});
	outerLayout = $('body').layout({ 
		center__paneSelector:	".ui-layout-center" 
	,	north__paneSelector:	".ui-layout-north" 
	,	fxName:					'none'
	,	north__resizable:		false
	,	north__size: 30
	,	spacing_open:			0  // ALL panes
	,	spacing_closed:			0 // ALL panes
	,	center__onresize:		"centerLayout.resizeAll" 
	}); 
	centerLayout = $('div.ui-layout-center').layout({ 
		center__paneSelector:	".frame" 
	,	spacing_open:			0  // ALL panes
	,	spacing_closed:			0 // ALL panes
	,	center__onresize:		"innerLayout.resizeAll" 
	}); 
	innerLayout = $('div.frame').layout({ 
		north__paneSelector:	"#tabs"
	,	center__paneSelector:	"#tabs_body" 
	,	spacing_open:			0  // ALL panes
	,	spacing_open:			0  // ALL panes
	,	north__resizable:		false
	,	north__resizable:		false
	,	center__onresize:		applicationLayoutResize
	});
	
		
	$('#ux_global_header').load('/includes/framework/north.html');
	initAppLayout();
	if ( $.url.param('ep') )
	{
		$('#ux_center').load('/includes/pages/edit_production.php',ep.init);
		$('#ep_tab').show();
		$Tabs.tabs('select', 2);
	} else if ( $.url.param('admin') ) {
		$('#ux_center').load('/includes/pages/admin.php',admin.init);
		$('#admin_tab').show();
		$Tabs.tabs('select', 3);
	} else {
		$('#ux_center').load('/includes/pages/dashboard.php',initDashboard);
	}
	applicationLayout.close('east');
	$(window).trigger("resize");

}

function buildBot()
{
	if ( $.url.param('theme') ){ getTheme( $.url.param('theme') ); }
	var mainBody = '';
    mainBody += '<div id="ux_global_header" class="ui-layout-north"></div>';
    mainBody += '    <div class="ui-layout-center">';
    mainBody += '        <div id="tabsFrame" class="frame">';
    mainBody += '            <ul id="tabs">';
	mainBody += '                <li><a href="#applicationLayout"><span>Dashboard</span></a></li>';
    mainBody += '                <li><a href="#applicationLayout"><span>Browse</span></a></li>';
	mainBody += '                <li id="ep_tab" style="display:none;"><a href="#applicationLayout"><span>Edit Production: Bad Bears Breakfast</span></a></li>';
	mainBody += '                <li id="admin_tab" style="display:none;"><a href="#applicationLayout"><span>Admin</span></a></li>';
    mainBody += '            </ul>';
    mainBody += '            <div id="tabs_body" class="tabs_body">';
    mainBody += '                <div id="applicationLayout">';
    mainBody += '                    <div id="ux_center" class="inner-center"></div>';
    mainBody += '                    <div id="ux_west" class="inner-west"></div>';
    mainBody += '                    <div id="ux_east" class="inner-east"></div>';
    mainBody += '                    <div id="ux_south" class="inner-south"></div>';
    mainBody += '                </div>';
    mainBody += '            </div>';
    mainBody += '        </div>';
    mainBody += '    </div>';
    mainBody += '</div>';
	$('body').append(mainBody);
}

function getTheme(theme)
{
	var theme_css = theme;
	$("#theme_css").attr({href:'/styles/themes/' + theme_css });
}
function applicationLayoutResize()
{
	applicationLayout.resizeAll;
	dashboard_worklist_resize();
	dashboard_dailies_resize();
	dashboard_department_resize();
	dashboard_project_resize();
	$SubTabs.tabs('select', g_current_sub_tab);	
}

function dashboard_worklist_resize()
{
	var windowHeight = $(window).height() - 128;
	$("#com_worklist_2").height( windowHeight /2 - 6  );
	$("#com_worklist_2 .widget_layout").height( $("#com_worklist_2").height() - $("#com_worklist_2 .widget_header").height() - $("#com_worklist_2 .widget_action_bar").height() - 12 );
	$("#com_worklist_3").height( windowHeight /2 - 6 );
	$("#com_worklist_3 .widget_layout").height( $("#com_worklist_3").height() - $("#com_worklist_3 .widget_header").height() - $("#com_worklist_3 .widget_action_bar").height() - 12 );	
	$("#com_worklist_4").height( windowHeight );
	$("#com_worklist_4 .widget_layout").height( $("#com_worklist_4").height() - $("#com_worklist_4 .widget_header").height() - $("#com_worklist_4 .widget_action_bar").height() - 12 );
}
function dashboard_dailies_resize()
{
	var windowHeight = $(window).height() - 128;
	$("#com_dailies_2").height( windowHeight /2 - 6  );
	$("#com_dailies_2 .widget_layout").height( $("#com_dailies_2").height() - $("#com_dailies_2 .widget_header").height() - $("#com_dailies_2 .widget_action_bar").height() - 12 );
	$("#com_dailies_3").height( windowHeight /2 - 6 );
	$("#com_dailies_3 .widget_layout").height( $("#com_dailies_3").height() - $("#com_dailies_3 .widget_header").height() - $("#com_dailies_3 .widget_action_bar").height() - 12 );	
	$("#com_dailies_4").height( windowHeight );
	$("#com_dailies_4 .widget_layout").height( $("#com_dailies_4").height() - $("#com_dailies_4 .widget_header").height() - $("#com_dailies_4 .widget_action_bar").height() - 12 );
}
function dashboard_department_resize()
{
	var windowHeight = $(window).height() - 128;
	$("#com_department_1").height( windowHeight );
	$("#com_department_1 .widget_layout").height( $("#com_department_1").height() - $("#com_department_1 .widget_header").height() - $("#com_department_1 .widget_action_bar").height() - 12 );
	$("#com_department_5").height( windowHeight /2 - 6  );
	$("#com_department_5 .widget_layout").height( $("#com_department_5").height() - $("#com_department_5 .widget_header").height() - $("#com_department_5 .widget_action_bar").height() - 12 );
	$("#com_department_6").height( windowHeight /2 - 6 );
	$("#com_department_6 .widget_layout").height( $("#com_department_6").height() - $("#com_department_6 .widget_header").height() - $("#com_department_6 .widget_action_bar").height() - 12 );	
}
function dashboard_project_resize()
{
	var windowHeight = $(window).height() - 128;
	$("#com_project_1").height( windowHeight );
	$("#com_project_1 .widget_layout").height( $("#com_project_1").height() - $("#com_project_1 .widget_header").height() - $("#com_project_1 .widget_action_bar").height() - 12 );
	$("#com_project_5").height( windowHeight /2 - 6  );
	$("#com_project_5 .widget_layout").height( $("#com_project_5").height() - $("#com_project_5 .widget_header").height() - $("#com_project_5 .widget_action_bar").height() - 12 );
	$("#com_project_6").height( windowHeight /2 - 6 );
	$("#com_project_6 .widget_layout").height( $("#com_project_6").height() - $("#com_project_6 .widget_header").height() - $("#com_project_6 .widget_action_bar").height() - 12 );	
	
}
function initDashboard()
{
	$SubTabs = $(".subtabs").tabs({show: resizeDashboardSubTabs});
	dashboard_worklist_resize();
	$(".widget_header").click(widgetHeaderClickHandler);
	$(".widget_header span").click(widgetToggle);
	$("#selProject").change(project_select);
	$("#com_worklist_2 tr").click(worklist_rowClickHandler);
	$("#com_dailies_2 tr").click(dailies_rowClickHandler);
	$("#com_worklist_2 td").click(worklist_cellClickHandler);
	$("#com_dailies_2 td").click(dailies_cellClickHandler);
	$("#com_worklist_2 th").css("border-top", "none");
	$("#com_worklist_2 th:last-child").css("border", "none");
	$("#com_worklist_2 td:last-child").css("border-right", "none");
	$("#com_worklist_2 tbody tr").dblclick(worklist_rowDoubleClickHandler);
	$("#com_dailies_2 tbody tr").dblclick(dailies_rowDoubleClickHandler);
	$('#com_worklist_3_view_details').click( function(){ $("#com_worklist_2 tbody tr.selected").trigger('dblclick') });
}

function worklist_rowDoubleClickHandler()
{
	g_tab_type = '/includes/pages/details_page_worklist.html';
	var selectedRow = $("tr").index(this);
	var tagTitle = $(this).find("td").eq(0).html();
	$("#d_"+this.id).show();
	g_selected_tab = "#d_"+this.id;
	showTab(tagTitle);
}
function dailies_rowDoubleClickHandler()
{
	g_tab_type = '/includes/pages/details_page_dailies.html';
	var selectedRow = $("tr").index(this);
	var tagTitle = $(this).find("td").eq(0).html();
	$("#d_"+this.id).show();
	g_selected_tab = "#d_"+this.id;
	showTab(tagTitle);
}
function showTab(tabName)
{
	$Tabs.tabs('add','#s',tabName);
	$('#tabs li a').attr('href','#applicationLayout');
	$Tabs.tabs('select', $Tabs.tabs('length') - 1);
	var tabIndex = $Tabs.tabs('length') - 1 ;
	removeTab = "<a href='#' onclick='closeTab(" + tabIndex + ")' class='tab_close'><span>x</span></a>";
	$('#tabs li').slice($Tabs.tabs('length') - 1).append(removeTab);
}

function closeTab(tabIndex)
{
	$Tabs.tabs('remove', tabIndex );
	$Tabs.tabs('select', 0);
}
function removeDetailsTab(tab)
{
	$Tabs.tabs( 'select' , 0 )
	$("#d_tab_" + tab).hide();
}
function worklist_rowClickHandler()
{
	var assetName =  $(this).find("td").eq(0).html();
	var assetProject = $(this).find("td").eq(1).html();
	var assetStatus = $(this).find("td").eq(3).html();
	$("#com_worklist_2 tr").removeClass("selected");
	$(this).addClass("selected");
	$("#com_worklist_3_widget_header_asset_name").text( assetName );
	$("#com_worklist_4_widget_header_text").text( assetName );
	$("#acitivity_stream_asset_name").text( assetName );
	$("#dd_asset_name").text( assetName );
	$("#dd_asset_project").text( assetProject );
	$("#acitivity_stream_project_name").text( assetProject );
	$("#dd_asset_status").text( assetStatus );
	$("#acitivity_stream_status").text( assetStatus );
}
function dailies_rowClickHandler()
{
	var assetUserImage = "/images/user_nford.jpg"; 
	var user = $(this).find("td").eq(4).html();
	$("#com_dailies_3_user_table tbody").hide(); 
	switch( user )
	{
		case 'NFord':
			assetUserImage = "/images/user_nford.jpg"; 
			$("#com_dailies_3_table_content_nford").show();
			break;
		case 'Garcia':
			assetUserImage = "/images/user_blank.jpg"; 
			$("#com_dailies_3_table_content_garcia").show();
			break;
		case 'Moquette':
			assetUserImage = "/images/user_moquette.jpg"; 
			$("#com_dailies_3_table_content_moquette").show();
			break;
		case 'Nave':
			assetUserImage = "/images/user_blank.jpg"; 
			$("#com_dailies_3_table_content_nave").show();
			break;
		default:
			assetUserImage = "/images/user_nford.jpg"; 
			$("#com_dailies_3_table_content_nford").show();
			break;
	}
	$("#com_dailies_3_widget_user_image").attr("src",assetUserImage);

	var assetName =  $(this).find("td").eq(0).html();
	var assetProject = $(this).find("td").eq(1).html();
	var assetTime = $(this).find("td").eq(2).html();
	var assetStatus = $(this).find("td").eq(3).html();
	
	$("#dailies_dd_location").text( assetStatus = $(this).find("td").eq(3).html() );
	$("#dailies_dd_asset_host").text( assetStatus = $(this).find("td").eq(4).html() );
	
	$("#com_dailies_2 tr").removeClass("selected");
	$(this).addClass("selected");
	$("#com_dailies_3_widget_header_asset_name").text( assetName );
	$("#com_dailies_4_widget_header_text").text( assetProject );
	$("#com_dailies_4_widget_header_time").text( assetTime );
	$("#dailies_dd_asset_name").text( assetName );
	$("#dailies_dd_asset_project").text( assetProject );
	$("#dailies_dd_asset_status").text( assetStatus );
	$("#dailies_acitivity_stream_asset_name").text( assetName );
	$("#dailies_acitivity_stream_project_name").text( assetProject );
	$("#dailies_acitivity_stream_status").text( assetStatus );
}

function worklist_cellClickHandler()
{
	var image = $(this).parent().parent().children().index($(this).parent()) + 1;
	if ( image > 7 )
	{ 
		assetImage = "/images/asset_1.jpg"; 
	} else {
		assetImage = "/images/asset_" + image + ".jpg"; 
	}
	$("#com_worklist_3_widget_header_asset_image").attr("src",assetImage);
}

function dailies_cellClickHandler()
{
}
function widgetHeaderClickHandler()
{
	if ( $(this).parent().height() == 25 )
	{
		$(this).removeClass("collapsed");
		$(this).parent().height(comCurHeight);
		//applicationLayoutResize();
	}
	else
	{
		comCurHeight = $(this).parent().height();
		$(this).addClass("collapsed");
		$(this).parent().height(25)
	}
}

function widgetToggle(e)
{
	e.stopPropagation();
    e.cancelBubble = true; 	
	return;
	alert('Maximize / Minimize: Not yet implemented!');
}

function clear()
{
	$('#ux_west, #ux_center, #ux_east').text('');
}

function mainTabHandler () {
	if (!$Tabs) return;
	var selected = $Tabs.tabs('option', 'selected');
	clear();
	//alert( g_tab_type );
	$(window).unbind('resize', admin.resize);
	switch(selected)
	{
		case 0:
			$('#ux_center,#ux_west').css('overflow','');
			$('#ux_center').load('/includes/pages/dashboard.php',initDashboard);
			$('#ux_east').css('background-color','#fff');
			$('#dashboard_subtabs,.filter_menu_container').show();
			$('#ux_center,#ux_west').css('padding',0);
			$('#tab_worklist').css('padding-right',0);
			applicationLayout.hide('west');
			applicationLayout.close('east');
			break;
		case 1: // THIS IS THE BROWSE TAB
			$('#ux_center,#ux_west').css('overflow','auto');
			$('#ux_center,#ux_west').css('padding',0);
			$('#ux_west').load('/includes/com/com_sidebar_browse.html');
			$('#ux_center').load('/includes/com/com_browse.html');
			$('#dashboard_subtabs,.filter_menu_container').hide();
			applicationLayout.open('west');
			applicationLayout.close('east');
			break;
		case 2:  // THIS IS THE EDIT PRODUCTION TAB
			$('#ux_center').load('/includes/pages/edit_production.php',ep.init);
			applicationLayout.hide('west');
			break;
		case 3:  // THIS IS THE ADMIN TAB
			$('#ux_center').load('/includes/pages/admin.php',admin.init);
			applicationLayout.hide('west');
			break;
		default:
			$('#ux_center,#ux_west').css('overflow','');
			$('#ux_center,#ux_west').css('padding',10);
			$('#ux_center').load(g_tab_type);
			applicationLayout.hide('west');
			applicationLayout.close('east');
			break;			
	}
	applicationLayout.resizeAll();
}

function resizeDashboardSubTabs()
{
	if (!$SubTabs) return;
	var selected = $SubTabs.tabs('option', 'selected');
	g_current_sub_tab = selected;
	switch(selected)
	{
		case 0:
			$('.filter_menu_container').hide();
			dashboard_worklist_resize();
			break;
		case 1:
			$('.filter_menu_container').hide();
			dashboard_dailies_resize();
			break;	
		case 2:
			$('.filter_menu_container').show();
			$('.filter_menu_container .right').show();
			dashboard_department_resize();
			break
		case 3:
			$('.filter_menu_container').show();
			$('.filter_menu_container .right').hide();
			dashboard_project_resize();
			break
	}
	$SubTabs.tabs('select', g_current_sub_tab);

}


function initAppLayout () {
	var $Container = $('#applicationLayout');
	$Container.show();
	if ( !$Container.is(':visible') ) return; // ABORT
	if (!applicationLayout)
		applicationLayout = $Container.layout({
			name:						"ApplicationLayout"
		,	fxName:						'none'
		,	center__paneSelector:		".inner-center"
		,	west__paneSelector:			".inner-west"
		,	east__paneSelector:			".inner-east"
		,	south__paneSelector:  		".inner-south"
		,	contentSelector:			".ui-widget-content"
		,	center__onresize:			"InnerLayout.resizeAll"
		,	south__resizable:			false
		,	south__slidable:			false
		,	south__spacing_open:		0
		,	east__size:					200
		,	west__size:					200
		,	south__spacing_closed:		0
		,	south__size: 10
		,	west__initHidden:			true
		,	east__initHidden:			false
		});
		$('#ux_south').load('/includes/framework/south.html');
}
function min_max_2()
{
	if ( isMax2 )
	{
		$('div.subtabs .column.last').show();
		$('div.subtabs .column.first').width('49%');
		$('#com_worklist_3').show();
		var windowHeight = $(window).height() - 128;
		$("#com_worklist_2").height( windowHeight /2 - 6 );
		$("#com_worklist_2 .widget_layout").height( $("#com_worklist_2").height() - $("#com_worklist_2 .widget_header").height() - $("#com_worklist_2 .widget_action_bar").height() - 12 );
		$("#com_worklist_2 .widget_header .widget_action").addClass('maximize');
		$("#com_worklist_2 .widget_header .widget_action").removeClass('minimize');
		isMax2 = false;
	} else {
		$('div.subtabs .column.last').hide();
		$('div.ui-tabs-panel .column.first').width('98%');
		$('#com_worklist_3').hide();
		var windowHeight = $(window).height() - 128;
		$("#com_worklist_2").height( windowHeight - 12  );
		$("#com_worklist_2 .widget_layout").height( $("#com_worklist_2").height() - $("#com_worklist_2 .widget_header").height() - $("#com_worklist_2 .widget_action_bar").height() - 12 );
		$("#com_worklist_2 .widget_header .widget_action").addClass('minimize');
		$("#com_worklist_2 .widget_header .widget_action").removeClass('maximize');
		isMax2 = true;
	}
}

function min_max_3()
{
	if ( isMax3 )
	{
		$('div.subtabs .column.last').show();
		$('div.subtabs .column.first').width('49%');
		$('#com_worklist_2').show();
		var windowHeight = $(window).height() - 128;
		$("#com_worklist_3").height( windowHeight /2 - 6 );
		$("#com_worklist_3 .widget_layout").height( $("#com_worklist_3").height() - $("#com_worklist_3 .widget_header").height() - $("#com_worklist_3 .widget_action_bar").height() - 12 );
		$("#com_worklist_3 .widget_header .widget_action").addClass('maximize');
		$("#com_worklist_3 .widget_header .widget_action").removeClass('minimize');
		isMax3 = false;
	} else {
		$('div.subtabs .column.last').hide();
		$('div.ui-tabs-panel .column.first').width('98%');
		$('#com_worklist_2').hide();
		var windowHeight = $(window).height() - 128;
		$("#com_worklist_3").height( windowHeight - 12  );
		$("#com_worklist_3 .widget_layout").height( $("#com_worklist_3").height() - $("#com_worklist_3 .widget_header").height() - $("#com_worklist_3 .widget_action_bar").height() - 12 );
		$("#com_worklist_3 .widget_header .widget_action").addClass('minimize');
		$("#com_worklist_3 .widget_header .widget_action").removeClass('maximize');
		isMax3 = true;
	}
}
function min_max_4()
{
	if ( isMax4 )
	{
		$('div.subtabs .column.first').show();
		$('div.subtabs .column.last').width('49%');
		$("#com_worklist_4 .widget_header .widget_action").addClass('maximize');
		$("#com_worklist_4 .widget_header .widget_action").removeClass('minimize');
		isMax4 = false;
	} else {
		$('div.subtabs .column.first').hide();
		$('div.subtabs .column.last').width('98%');
		$("#com_worklist_4 .widget_header .widget_action").addClass('minimize');
		$("#com_worklist_4 .widget_header .widget_action").removeClass('maximize');
		isMax4 = true;
	}
}

function project_select()
{ 
	var project 
	project = $("#selProject").val(); 
	//alert(project);
	switch(project)
	{
		case 'Project 1':
			$("#com_project_1_img_1").attr("src","http://chart.apis.google.com/chart?&chs=425x230&chd=t:10,20,40,80,90,95,99|20,30,40,50,60,70,80|-1|5,25,45,65,85&cht=lxy&chl=0+Days");
			$("#com_project_1_img_2").attr("src","http://chart.apis.google.com/chart?&chs=425x220&chd=t:60,40&cht=p3&chl=Production|Flow");
			$("#com_project_6_img_1").attr("src","http://chart.apis.google.com/chart?&chs=425x230&chd=t:50,30,23,44,29,23&cht=bvg&chl=0+Days");
			$("#com_project_5_table_1").show();
			$("#com_project_5_table_2").hide();
			break;
		case 'Project 2':
			$("#com_project_1_img_1").attr("src","http://chart.apis.google.com/chart?&chs=425x230&chd=t:5,40,60,120,110,115,119|40,50,47,70,80,90,10|-1|5,25,45,65,85&cht=lxy&chl=5+Days");
			$("#com_project_1_img_2").attr("src","http://chart.apis.google.com/chart?&chs=425x220&chd=t:60,20,30,55,40&cht=p3&chl=Production|Flow|ABC|XWZ|Cogs");
			$("#com_project_6_img_1").attr("src","http://chart.apis.google.com/chart?&chs=425x230&chd=t:50,70,13,114,69,23&cht=bvg&chl=5+Days");
			$("#com_project_5_table_1").hide();
			$("#com_project_5_table_2").show();
			break;	
	}
}

$(document).ready(init); 
