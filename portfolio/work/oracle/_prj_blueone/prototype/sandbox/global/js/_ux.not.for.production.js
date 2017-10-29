	/*********************************************************
PROTOTYPING PURPOSES ONLY!!!!
**********************************************************
NOT TO BE INCLUDED INTO ANY PRODUCTION ENVIRONMENT!!!!
*********************************************************/
// ***********************************************
//  HILIGHT FOR LEFT PANE FOCUS
// ***********************************************
jQuery(document).ready(function() {
	jQuery("div.LeftPaneBottom p a").focus( 
		function() {jQuery(this).addClass('focus_link');}
	);
jQuery("div.LeftPaneBottom p a").blur( 
		function() {jQuery(this).removeClass('focus_link');}
	);
	
});
// ***********************************************
//  JQUERY ERROR HANDLING 
// ***********************************************
function newInit() {
	bindSaveControl();
}
function bindSaveControl() {
	jQuery('#saveForm').bind('click', function(){ newForm.displayError('Sample Error Message...') })
}

var newForm = {};
newForm.init = function() {
	newForm.requiredFieldsHandler();
	jQuery('.hidden').hide();
}

newForm.displayError = function(msg)
{
	jQuery('#dms p').text(msg);
	jQuery('#dms').addClass('error');
	jQuery('dt.required label').each( function()	{jQuery(this).addClass('form_error_label'); });
	jQuery('.error_msg.hidden').show();
	dmsError();
}
newForm.requiredFieldsHandler = function()
{
	jQuery('dt.required').each( function() { jQuery(this).prepend('<span>*</span>'); });
	jQuery('dt.required label').each( function() { jQuery(this).attr('title',jQuery(this).text().replace(':','') + ' is a required field'); });
}
function dmsError() 
{
	jQuery("#dms")
	.animate({ backgroundColor: '#ffc8ca' }, 1500)
}
// ***********************************************
//  OLD ERROR HANDLING 
// ***********************************************
//  Save button action
// ***********************************************
function doSave()
	{
		if (!document.getElementById("dms")) return false;
		var msg = document.getElementById("dms");
		var err = document.getElementsByTagName("input");
		var errlabel = document.getElementsByTagName("label");
		//msg.innerHTML = 'The required fields below have been entered incorrectly.';
		//msg.className = 'message error';

		popMessage('error');
		msg.className="dms errorbar";

		for (var i=0; i<errlabel.length; i++) {
			if (errlabel[i].className.match("_error")) {
				errlabel[i].className = "form_error_label";
				errlabel[i].setAttribute("title","Error");
				}
			}
		doRequiredError();
		doNotRequiredError();
}
function doRequiredError() {
	
	var errmsg = document.getElementsByTagName("span");
	
	for (var i=0; i<errmsg.length; i++) {
		if (errmsg[i].className.match("_err_msg")) {
			errmsg[i].className = "error_msg";
		}
	}		
}
function doNotRequiredError() {
	
	var errField = document.getElementsByTagName("input");
	
	for (var i=0; i<errField.length; i++) {
		if (errField[i].className.match("_error_field")) {
			errField[i].className = "error_field";
			}
		}	
	
}

function toggle( targetId ) {
	if (document.getElementById){
	target = document.getElementById( targetId );
	if (target.style.display == "none"){
	target.style.display = "";
	} else {
	target.style.display = "none";
		}
	}
}

function toggleContent( targetId ) {
	var headerToggle = document.getElementById("toggle_content");
	if (document.getElementById){
	target = document.getElementById( targetId );
	if (target.style.display == "none"){
	target.style.display = "";
	headerToggle.className = "header_close";
	} else {
	target.style.display = "none";
	headerToggle.className = "header_open";
		}
	}
}


// ***********************************************
//  INFO MESSAGE POPUP
// ***********************************************
//  "More" link popup
// ***********************************************
function getMessage(url) {
	newwindow=window.open(url,'message','width=525,height=300,resizable=1,scrollbars=0');
	if (window.focus) { newwindow.focus(); }
}


// ***********************************************
//  ACTION DIALOG POPUP
// ***********************************************
//  Action Dialog 2 button popup
// ***********************************************
function getDialog(url, h, w) {
	popupDialog = window.open(url,'popupDialog','height=' + h + ',width=' + w);
	if (window.focus) { popupDialog.focus(); }
}

// ***********************************************
//  HIGHLIGHT FORM FIELDS (FOCUS RING)
// ***********************************************
//  Places focus ring around each form element onfocus
// ***********************************************
function initializeForm(formId, firstElemId) {
	if (!document.getElementById(formId)) return false;
	var form = $(formId);
	var elems = form.elements;
	for (var i = 0; i < form.length; i++) {
		var elem = elems[i];
		if (!elem.type) 
			continue;
		elem.onfocus = function() {
			YAHOO.util.Dom.addClass(this,"focus_field");
			if (this.select){this.select();}
		};
		elem.onblur = function() {
			YAHOO.util.Dom.removeClass(this, "focus_field");
		};
	}

	if ($(firstElemId)){$(firstElemId).focus();}
}


function myInit() {
	initializeForm("form_dialogs", "first_field");
}
// ***********************************************
//  LOAD TABLE PREVIEW PANE
// ***********************************************
function loadIframe() {
   document.getElementById("PreviewPageFrame").src = 'pages/layouts/iframes_content/obj_table_pane_content.php';
   rowHighlight();
}

function rowHighlight() {
	var rows = document.getElementsByTagName("tr");
	for (var i=0; i<rows.length; i++) {
	if (rows[i].className.match("hilite")) {
			rows[i].className="selected";
			rows[i].onclick = function() {
			return false;
			}
		}
	}
}

// ***********************************************
//  CREATE AUTONUMBER
// ***********************************************
function increment(target_id) {
	$(target_id).value = parseInt($(target_id).value) + 1;
}

// ***********************************************
//  ONLOAD FORM FIELD FOCUS
// ***********************************************
//  focuses first form element
// ***********************************************
function initFormFieldFocus() {
	if (!document.getElementById("first_field")) return false;
	document.getElementById("first_field").focus();
}

addLoadEvent(myInit);
addLoadEvent(initFormFieldFocus);


function subTabs()
{
		tabHover = jQuery('ul.tabs li');		
		tabHover.hover( function() { jQuery(this).addClass('spanHover'); }, function() { jQuery(this).removeClass('spanHover');  } );			

		subtabHover = jQuery('ul.sub_tabs li');		
		subtabHover.hover( function() { jQuery(this).addClass('spanHover'); }, function() { jQuery(this).removeClass('spanHover');  } );			
}


/*Quickview*/
var quickview = {};
quickview.init = function()
{
	/*for quickview2 below POC */
	quickview2.init();
	
	var sTime = function() { setTimeout("jQuery('.dual_launch').show();", 575); };
	var hTime = function() { setTimeout("jQuery('.dual_launch').hide();", 1975); };
	
	jQuery('.quickview').after("<span class='dual_launch' style='display:none;'><a href='#'>Quickview</a></span>");
	
	jQuery('.quickview').mouseover( sTime );
		
	jQuery('.dual_launch').hover(
		function() { jQuery(this).show(); },
		function() { jQuery(this).hide(); }
	);
	
	jQuery('.quickview').mouseout( hTime );

};

/* POC 2 */
var quickview2 = {};
quickview2.init = function()
{
		
	var sTime = function() { setTimeout("jQuery('.quickie').show();", 575); };
	var hTime = function() { setTimeout("jQuery('.quickie').hide();", 1975); };
	
	jQuery('.quickview2').before("<span class='quickie' style='display: none;'><a href='#'>&nbsp;</a></span>");
	
	jQuery('.quickview2').mouseover( sTime );
		
	jQuery('.quickie').hover(
		function() { jQuery(this).show(); },
		function() { jQuery(this).hide(); }
	);
	
	jQuery('.quickview2').mouseout( hTime );

};

function ppm_gen_info_init()
{
	initializeForm("form_dialogs", "input_00");
	jQuery('#duration_type').change(doTypeChange);
}

function doTypeChange()
{
	if ( jQuery('#duration_type').val() == 'effort' )
	{
		jQuery('#input_00a').removeClass('disabled').attr('disabled','');
} else {
		jQuery('#input_00a').addClass('disabled').attr('disabled','disabled');
	};
}

jQuery(document).ready( quickview.init )

/**********************************************************************
	Activity Objects Schedule Tab
	Code Specific Logic
	(/pages/_testing/proj_tabs/schedule.php)
	A. Moquette / 05/01/2008
**********************************************************************/
var proj_tabs_schedule = {};
proj_tabs_schedule.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );	
	jQuery(document).ready( proj_tabs_schedule.build_menu_00 );
	jQuery(document).ready( proj_tabs_schedule.build_menu_01 );
}
proj_tabs_schedule.build_menu_00 = function(p_oEvent)
{
	proj_tabs_schedule_menu_00_items = [
		[
			{ text: "Create Baseline", url: "" },
			{ text: "Remove Baseline", url: "" },
			{ text: "View Details", url: "" }
		]
	];
	var format_proj_tabs_menu_00 = new YAHOO.widget.Menu("format_proj_tabs_menu_00", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	function toggle_format_proj_tabs_menu_00(p_oEvent)
	{
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (format_proj_tabs_menu_00.getItems() == 0) 
		{
			format_proj_tabs_menu_00.addItems(proj_tabs_schedule_menu_00_items);
			format_proj_tabs_menu_00.render(document.body);
			format_proj_tabs_menu_00.cfg.setProperty("context", ["cmd_proj_tabs_schedule_menu_00", "tl","bl"]);		
		}
		format_proj_tabs_menu_00.align("tl", "bl");
		format_proj_tabs_menu_00.show();
	}
	YAHOO.util.Event.addListener("cmd_proj_tabs_schedule_menu_00", "mousedown", toggle_format_proj_tabs_menu_00);
}
proj_tabs_schedule.build_menu_01 = function(p_oEvent)
{
	proj_tabs_schedule_menu_01_items = [
		[
			{ text: "Display Order", url: "" },
			{ text: "Move Back", url: "" },
			{ text: "Move Forward", url: "" }
		]
	];
	var format_proj_tabs_menu_01 = new YAHOO.widget.Menu("format_proj_tabs_menu_01", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	function toggle_format_proj_tabs_menu_01(p_oEvent)
	{
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (format_proj_tabs_menu_01.getItems() == 0) 
		{
			format_proj_tabs_menu_01.addItems(proj_tabs_schedule_menu_01_items);
			format_proj_tabs_menu_01.render(document.body);
			format_proj_tabs_menu_01.cfg.setProperty("context", ["cmd_proj_tabs_schedule_menu_01", "tl","bl"]);		
		}
		format_proj_tabs_menu_01.align("tl", "bl");
		format_proj_tabs_menu_01.show();
	}
	YAHOO.util.Event.addListener("cmd_proj_tabs_schedule_menu_01", "mousedown", toggle_format_proj_tabs_menu_01);
}



var proj_tabs_action = {};
proj_tabs_action.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );
}
proj_tabs_action.build_menu_00 = function(p_oEvent)
{
	proj_tabs_action_menu_00_items = [
		[
			{ text: "Bookmark", url: "" },
			{ text: "Copy URL to Clipboard", url: "" }
		],
		[
			{ text: "Save As", url: "" },
			{ text: "Delete", url: "" },
			{ text: "Archive", url: "" }
		],
		[
			{ text: "Comment", url: "" },
			{ text: "Save", url: "" },
			{ text: "Subscripbe", url: "" },
			{ text: "Share With", url: "" }
		],
		[
			{ text: "Delegate", url: "" },
			{ text: "Substitute Resource", url: "" },
			{ text: "Resource Utilization Report", url: "" }
		],
		[
			{ text: "View Gantt", url: "" },
			{ text: "Lock this Activity", url: "" },
			{ text: "Change Parent", url: "" },
			{ text: "Make this a Root Activity", url: "" },
			{ text: "Compare Schedule Baselines", url: "" },
			{ text: "View Schedule Report", url: "" }
		],
		[
			{ text: "View Workflows", url: "" }
		],
		[
			{
				text: "Microsoft Project", url: "", submenu: 
				{ id: "msProject_00", itemdata: 
					[
						[
							{ text: "Launch as Read Only", url: "" },
							{ text: "Launch in Edit Mode", url: "" }
						],
						[
							{ text: "Publish from Microsoft Project", url: "" }
						],
						[
							{ text: "Save as XML Reader Only", url: "" },
							{ text: "Save as XML Edit", url: "" }
						]
					] 
				}
			},
			{ text: "Update Program to e5.1", url: "" },
			{ text: "Export", url: "" },
			{ text: "Print", url: "" }

		]
	];
	var format_proj_tabs_menu_00 = new YAHOO.widget.Menu("format_proj_tabs_menu_00", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	function toggle_format_proj_tabs_menu_00(p_oEvent)
	{
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (format_proj_tabs_menu_00.getItems() == 0) 
		{
			format_proj_tabs_menu_00.addItems(proj_tabs_action_menu_00_items);
			format_proj_tabs_menu_00.render(document.body);
			format_proj_tabs_menu_00.cfg.setProperty("context", ["cmd_proj_tabs_action_menu_00", "tl","bl"]);		
		}
		format_proj_tabs_menu_00.align("tl", "bl");
		format_proj_tabs_menu_00.show();
	}
	YAHOO.util.Event.addListener("cmd_proj_tabs_action_menu_00", "mousedown", toggle_format_proj_tabs_menu_00);
}

var proj_tabs_content = {};
proj_tabs_content.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );	
}

var proj_tabs_discussion = {};
proj_tabs_discussion.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );	
}

var proj_tabs_news = {};
proj_tabs_news.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );	
}

var proj_tabs_dependencies = {};
proj_tabs_dependencies.init = function()
{
	jQuery(document).ready( proj_tabs_action.build_menu_00 );
	jQuery('#cmdAdd_00').click( proj_tabs_dependencies.add_onclick );
}
proj_tabs_dependencies.add_onclick = function()
{
	launch_dialog('pages/_testing/proj_tabs/dependencies_add.php',560,505);
	return false;
}
var proj_tabs_user_escalations = {};
proj_tabs_user_escalations.init = function(){};
proj_tabs_user_escalations.launch_create = function()
{
	launch_dialog('pages/_testing/proj_tabs/user_obj_escalating_tab_create_dialog.php',560,300);
	return false;
};

var pi_in_table_attachments = {};
pi_in_table_attachments.init = function()
{
}
pi_in_table_attachments.pi_global = function()
{
	ux.utils.globalProgressIndicatorOn();
	setTimeout( function(){ ux.utils.globalProgressIndicatorOff() }, 2500 );	
}
pi_in_table_attachments.pi_action = function()
{
	jQuery('#progress_indicator_mask').show();
	jQuery('#progress_indicator_action').css('visibility','visible');
	setTimeout( function()
	{
		jQuery('#progress_indicator_mask').hide();
		jQuery('#progress_indicator_action').css('visibility','hidden');
	}, 3000 );
}
pi_in_table_attachments.pi_table = function()
{
	jQuery('#progress_indicator_table').css('visibility','visible');
	jQuery('#progress_indicator_table').text('Loading');
	setTimeout( function() { jQuery('#progress_indicator_table').text('Loading.') }, 500 );
	setTimeout( function() { jQuery('#progress_indicator_table').text('Loading..') }, 1500 );
	setTimeout( function() { jQuery('#progress_indicator_table').text('Loading...') }, 2500 );
	setTimeout( function()
	{
		jQuery('#progress_indicator_table').css('visibility','hidden');
	}, 3000 );
}




var proj_tabs_usergroup_assignment = {};
proj_tabs_usergroup_assignment.init = function(){};
proj_tabs_usergroup_assignment.launch_assignment_list = function()
{
	launch_dialog('pages/_testing/proj_action_dialogs/assignment_list_report.php',660,400);
	return false;
};
proj_tabs_usergroup_assignment.launch_assign = function()
{
	launch_dialog('pages/_testing/proj_action_dialogs/assign.php',660,400);
	return false;
};


/* TEST FUNCTION : BELOW IS ONLY FOR TESTING PURPOSES */

function aProp(e)
{
	alert('a clicked');
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
}
function emProp(e)
{
	alert('em clicked');
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
}

loadAmlMenu = function(p_oEvent)
{
    
        function determineChecked(p_sType, p_aArguments, p_oMenuItem) 
		{
            
            if (this.cfg.getProperty("checked") == true)
			{
            	this.cfg.setProperty("checked", false);
            } else {
            	this.cfg.setProperty("checked", true);
            }
        
        };

		var changeStatusMenuItems = 
		[

			[
				{ text: "Menu Item...", url: "" }
			]
		]; 
		
		var globalActionsMenuItems = 
		[

			[
				{ text: "Bookmark", url: "" },
				{ text: "Subscribe", url: "" }
			],
			[
			 	{ text: "Save As..." },
				{ text: "Delete", url: "" }
			],
			[
			 	{ text: "Copy URL to Clipboard", url: "" },
				{ text: "Export", url: "" },
				{ text: "Microsoft Excel", url: "" }
			],
			[
			 	{ text: "Print", url: "" },
				{ text: "Send", url: "" },
				{ text: "Sharing", url: "" }
			],
			[
			 	{ text: "Incorporate", url: "" },
				{ text: "Unincorporate", url: "" }
			],
			[
				{ 
					text: "Create", submenu: 
					{ 
						id: "showhidecolumns", itemdata:
						[
							{ text: "Create Change", url: "" },
							{ text: "Create Product Service Request", url: "" },
							{ text: "Create Quality Change Request", url: "" },
							{ text: "Create Declaration", url: "" },
							{ text: "Create Sourcing Project", url: "" }
						]
					}
				}
			],
			[
			 	{ text: "PX 1", url: "" },
				{ text: "PX 2", url: "" }
			]
		];
		
		var prepareMenuItems = 
		[

			[
				{ text: "Add / Modify Partners", onclick:{fn:launchAddModPartners}, url: "" },
				{ text: "Calculate Quantities", url: "" }
			],
			[
				{ text: "Import", url: "" },
				{ text: "Validate", url: "" },
				{ text: "Retrieve AML from Item Master", url: "" }
			],
			[
				{ text: "Set Target Prices", onclick:{fn:launchSetTargetPrices}, url: "" },
				{ text: "Update Target Prices to RFQ", url: "" }
			]
		];  


		var quoteMenuItems = 
		[

			[
				{ text: "Create RFQ", onclick:{fn:launchCreateRFQ}, url: "" },
				{ text: "Add Items to RFQ", url: "" }
			]
		];  

		var moreMenuItems = 
		[
			[
				{ text: "Undo", helptext:"Ctrl + Z", url: "" },
				{ text: "Redo", helptext:"Ctrl + Y", url: "" },
			],
			[
				{ text: "Copy", helptext:"Ctrl + C", url: "" },
				{ text: "Paste", helptext:"Ctrl + P", url: "" },
				{ text: "Fill-up", helptext:"Ctrl + Shift + F", url: "" },
				{ text: "Fill-down", helptext:"Ctrl + Shift + F", url: "" }
			],
			[
				{ text: "Sort Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"multi_col_sort"} },
				{ text: "Filter Rows", url: "#", onclick:{fn:callTableViewsPalette, obj:"filter_table"} },
				{ text: "Format Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"format_cols"} },
			],
			[
				{ text: "Display AML", url: "" },
				{ text: "Publish part data to Item Master", onclick:{fn:launchPPDIM}, url: "" }
			]
		];  

		var viewActionsAMLMenuItems = 
		[

			[
				{ text: "Edit", url: "" },
				{ text: "Save", url: "" },
				{ text: "Save As...", url: ""}
			],
			[
				{ text: "Manage", url: "#", onclick:{fn:callViewManager} },
				{ text: "Set as Default", url: "" }
			]
		];
		
	var changeStatusMenu = new YAHOO.widget.Menu("changeStatusMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	changeStatusMenu.clearContent(); //clears data from memory 
	changeStatusMenu.addItems(changeStatusMenuItems);
	changeStatusMenu.render(document.body);
	changeStatusMenu.cfg.setProperty("context", ["cmdChangeStatus", "tl","bl"]);
	
	var globalActionsMenu = new YAHOO.widget.Menu("globalActionsMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	globalActionsMenu.clearContent(); //clears data from memory 
	globalActionsMenu.addItems(globalActionsMenuItems);
	globalActionsMenu.render(document.body);
	globalActionsMenu.cfg.setProperty("context", ["cmdGlobalActions", "tl","bl"]);
	
	var prepareMenu = new YAHOO.widget.Menu("prepareMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	prepareMenu.clearContent(); //clears data from memory 
	prepareMenu.addItems(prepareMenuItems);
	prepareMenu.render(document.body);
	prepareMenu.cfg.setProperty("context", ["cmdPrepare", "tl","bl"]);

	var quoteMenu = new YAHOO.widget.Menu("quoteMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	quoteMenu.clearContent(); //clears data from memory 
	quoteMenu.addItems(quoteMenuItems);
	quoteMenu.render(document.body);
	quoteMenu.cfg.setProperty("context", ["cmdQuote", "tl","bl"]);

	var moreMenu = new YAHOO.widget.Menu("moreMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	moreMenu.clearContent(); //clears data from memory 
	moreMenu.addItems(moreMenuItems);
	moreMenu.render(document.body);
	moreMenu.cfg.setProperty("context", ["cmdMore", "tl","bl"]);
	
	var viewActionsAMLMenu = new YAHOO.widget.Menu("viewActionsAMLMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	viewActionsAMLMenu.clearContent(); //clears data from memory 
	viewActionsAMLMenu.addItems(viewActionsAMLMenuItems);
	viewActionsAMLMenu.render(document.body);
	viewActionsAMLMenu.cfg.setProperty("context", ["cmdViewActions", "tl","bl"]);	


	function toggleMenu(e,o)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(e);
		changeStatusMenu.align("tl", "bl");
		changeStatusMenu.show();
	}

	function toggleChangeStatusMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		changeStatusMenu.align("tl", "bl");
		changeStatusMenu.show();
	}
	
	function toggleGlobalActionsMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		globalActionsMenu.align("tl", "bl");
		globalActionsMenu.show();
	}	

	function togglePrepareMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		prepareMenu.align("tl", "bl");
		prepareMenu.show();
	}
	
	function toggleQuoteMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		quoteMenu.align("tl", "bl");
		quoteMenu.show();
	}
	
	function toggleMoreMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		moreMenu.align("tl", "bl");
		moreMenu.show();
	}

	function toggleViewActionsAMLMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		viewActionsAMLMenu.align("tr", "br");
		viewActionsAMLMenu.show();
	}
	
	function hideMenus()
	{
		changeStatusMenu.hide();
		globalActionsMenu.hide();
		prepareMenu.hide();
		quoteMenu.hide();
		moreMenu.hide();
		viewActionsAMLMenu.hide();
	}
	
	function launchPPDIM()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/publish_to_item_master.php',560,680);
		return false;
	}
	
	function launchAddModPartners()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/add_modify_partners.php',660,400);
		return false;
	}

	function launchSetTargetPrices()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/set_target_price.php',560,500);
		return false;
	}
	function launchCreateRFQ()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/create_request_for_quote.php',850,650);
		return false;
	}


	YAHOO.util.Event.addListener("cmdChangeStatus", "mousedown", toggleChangeStatusMenu);
	YAHOO.util.Event.addListener("cmdGlobalActions", "mousedown", toggleGlobalActionsMenu);
	YAHOO.util.Event.addListener("cmdPrepare", "mousedown", togglePrepareMenu);
	YAHOO.util.Event.addListener("cmdQuote", "mousedown", toggleQuoteMenu);
	YAHOO.util.Event.addListener("cmdMore", "mousedown", toggleMoreMenu);
	YAHOO.util.Event.addListener("cmdViewActions", "mousedown", toggleViewActionsAMLMenu);
	
	createGlobalPalette();
	
	
}




// DP = Dashboard Personalization
var dp_test = {
	init : function()
	{
		
		jQuery('.widget_personalization').sortable(
			{
				handle : 		'.drag_handle',
				accept: 		'groupItem',
				helperclass: 	'sortHelper',
				activeclass : 	'sortableactive',
				hoverclass : 	'sortablehover',
				axis :			'vertically',
				start: 			function()
				{
					jQuery('.ui-sortable-helper').css('border','1px dashed silver');
					jQuery('.ui-sortable-helper').css('width','100%');
					jQuery('.ui-sortable-helper').css('height','15px');
					jQuery('.ui-sortable-helper *').hide();
				}
			}
		);
		

		jQuery('li input').click(dp_test.doSelect);
		jQuery('#cmdSave').click(dp_test.doSave);
		jQuery('#cmdEdit_01').click(dp_test.doWidgetConfig1);
		jQuery('#cmdEdit_02').click(dp_test.doWidgetConfig2);
		jQuery('#cmdEdit_03').click(dp_test.doWidgetConfig3);
		jQuery('#cmdEdit_04').click(dp_test.doWidgetConfig4);
		jQuery('#cmdEdit_05').click(dp_test.doWidgetConfig5);
		jQuery('#cmdEdit_06').click(dp_test.doWidgetConfig6);
		jQuery('#cmdEdit_07').click(dp_test.doWidgetConfig7);
		jQuery('#cmdCancel').click(dp_test.doCancel);
		jQuery('.text_box').hide();
	},
	doSelect : function()
	{
		if ( jQuery(this).attr('checked') )
		{
			jQuery(this).parent().addClass('selected') ;
		} else {
			jQuery(this).parent().removeClass('selected') ;
		}
	},
	doSave : function()
	{
		javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui2.php', 'mainwin', function() { MyApp.init(); MyApp.layoutSummary2(); summary.init(); proj_tabs_schedule.init();});
		return false;
	},
	
	doCancel : function()
	{
		javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui.php', 'mainwin', function() { MyApp.init(); MyApp.layoutSummary2(); summary.init(); proj_tabs_schedule.init();});
		return false;
	},	
	doWidgetConfig1 : function()
	{
		if ( jQuery('#text_01').css('display') == 'none' )
		{
			jQuery('#i01 .text_box').show();
			jQuery('#w01_box .drag_handle_text').show();
			jQuery('#cmdEdit_01').text( 'Apply' );			
			jQuery('#w01_config_content').show();
		} else {
			jQuery('#i01 .text_box').hide();
			jQuery('#w01_text').text( jQuery('#text_01').get(0).value );
			jQuery('#cmdEdit_01').text( 'Edit' );
			jQuery('#w01_config_content').hide();
		}
	},
	doWidgetConfig2 : function()
	{
		if ( jQuery('#text_02').css('display') == 'none' )
		{
			jQuery('#i02 .text_box').show();
			jQuery('#w02_text').hide();
			jQuery('#w02_box .drag_handle_text').show();
			jQuery('#cmdEdit_02').text( 'Apply' );			
			jQuery('#w02_config_content').show();
		} else {
			jQuery('#i02 .text_box').hide();
			jQuery('#w02_text').show();
			jQuery('#w02_text').text( jQuery('#text_02').get(0).value );
			jQuery('#cmdEdit_02').text( 'Edit' );
			jQuery('#w02_config_content').hide();
		}
	},
	doWidgetConfig3 : function()
	{
		if ( jQuery('#text_03').css('display') == 'none' )
		{
			jQuery('#i03 .text_box').show();
			jQuery('#w03_text').hide();
			jQuery('#w03_box .drag_handle_text').show();
			jQuery('#cmdEdit_03').text( 'Apply' );			
			jQuery('#w03_config_content').show();
		} else {
			jQuery('#i03 .text_box').hide();
			jQuery('#w03_text').show();
			jQuery('#w03_text').text( jQuery('#text_03').get(0).value );
			jQuery('#cmdEdit_03').text( 'Edit' );
			jQuery('#w03_config_content').hide();
		}
	},
	doWidgetConfig4 : function()
	{
		if ( jQuery('#text_04').css('display') == 'none' )
		{
			jQuery('#i04 .text_box').show();
			jQuery('#w04_text').hide();
			jQuery('#w04_box .drag_handle_text').show();
			jQuery('#cmdEdit_04').text( 'Apply' );			
			jQuery('#w04_config_content').show();
		} else {
			jQuery('#i04 .text_box').hide();
			jQuery('#w04_text').show();
			jQuery('#w04_text').text( jQuery('#text_04').get(0).value );
			jQuery('#cmdEdit_04').text( 'Edit' );
			jQuery('#w04_config_content').hide();
		}
	},
	doWidgetConfig5 : function()
	{
		if ( jQuery('#text_05').css('display') == 'none' )
		{
			jQuery('#i05 .text_box').show();
			jQuery('#w05_text').hide();
			jQuery('#w05_box .drag_handle_text').show();
			jQuery('#cmdEdit_05').text( 'Apply' );			
			jQuery('#w05_config_content').show();
		} else {
			jQuery('#i05 .text_box').hide();
			jQuery('#w05_text').show();
			jQuery('#w05_text').text( jQuery('#text_05').get(0).value );
			jQuery('#cmdEdit_05').text( 'Edit' );
			jQuery('#w05_config_content').hide();
		}
	},
	doWidgetConfig6 : function()
	{
		if ( jQuery('#text_06').css('display') == 'none' )
		{
			jQuery('#i06 .text_box').show();
			jQuery('#w06_text').hide();
			jQuery('#w06_box .drag_handle_text').show();
			jQuery('#cmdEdit_06').text( 'Apply' );			
			jQuery('#w06_config_content').show();
		} else {
			jQuery('#i06 .text_box').hide();
			jQuery('#w06_text').show();
			jQuery('#w06_text').text( jQuery('#text_06').get(0).value );
			jQuery('#cmdEdit_06').text( 'Edit' );
			jQuery('#w06_config_content').hide();
		}
	},
	doWidgetConfig7 : function()
	{
		if ( jQuery('#text_07').css('display') == 'none' )
		{
			jQuery('#i07 .text_box').show();
			jQuery('#w07_text').hide();
			jQuery('#w07_box .drag_handle_text').show();
			jQuery('#cmdEdit_07').text( 'Apply' );			
			jQuery('#w07_config_content').show();
		} else {
			jQuery('#i07 .text_box').hide();
			jQuery('#w07_text').show();
			jQuery('#w07_text').text( jQuery('#text_07').get(0).value );
			jQuery('#cmdEdit_07').text( 'Edit' );
			jQuery('#w07_config_content').hide();
		}
	}	

}
