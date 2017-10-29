/* 
 *   BEHAVIORS: WINDOW RESIZER (AUTOSCROLL)
 *
 *   See also the load events at bottom
 */

// ***********************************************
//  RESIZE ACTION DIALOG (AUTOSCROLL IF NEEDED)
// ***********************************************
function resizeActionDialog() {
	var windowHeight 			= getInsideWindowHeight();
	var headerHeight 			= $("header").offsetHeight;
	$("content").style.margin 	= $("header").offsetHeight + "px 0 0 0";
	$("content").style.height 	= windowHeight - headerHeight +"px";
}

// ***********************************************
// 	BEHAVIORS:
// ***********************************************
// 	show/hide fieldset using dialog select dropdown list
// *********************************************** 
function ui_duration_type_onchange(obj) {
	if (obj.selectedIndex == 0) {
		setClassName($("ui_days_effort"), "short_width disabled");
		setClassName($("ui_duration"), "short_width");
		setClassName($("ui_duration_dt"), "required");
		setClassName($("ui_days_effort_dt"), "");
		
		setDisabled($("ui_days_effort"), true);
		setDisabled($("ui_duration"), false);

		$("ui_duration_dt").innerHTML = "<span>*</span> <label for=\"ui_duration\">Duration:</label>";
		$("ui_days_effort_dt").innerHTML = "<label for=\"ui_duration_type\">Days Effort:</label>";
		
	} else if (obj.selectedIndex == 1) {
		setClassName($("ui_days_effort"), "short_width focus_field");
		setClassName($("ui_duration"), "short_width disabled");
		setClassName($("ui_days_effort_dt"), "required");
		setClassName($("ui_duration_dt"), "");
		
		setDisabled($("ui_days_effort"), false);
		setDisabled($("ui_duration"), true);

		$("ui_days_effort_dt").innerHTML = "<span>*</span> <label for=\"ui_duration_type\">Days Effort:</label>";
		$("ui_duration_dt").innerHTML = "<label for=\"ui_duration\">Duration:</label>";
		$('ui_days_effort').focus();		
	}
}

function ui_type_01_onchange(target_id) {
	toggleBlock(target_id);
	setClassName($("ui_type_01"), "");
}

function ui_select_type_onchange(obj) {
	if (typeof(obj) == 'string') {
		obj = $(obj);
	}
	
	if ((obj.selectedIndex) && (obj.selectedIndex != 0)) {	
		var toggleList = [$("ui_toggle_01"),
						  $("ui_toggle_02"),
						  $("ui_toggle_03"),
						  $("ui_toggle_04"),
						  $("ui_toggle_05"),
						  $("ui_toggle_06")
						 ];
						
		for (var i=0; i<toggleList.length; i++) {
			if (toggleList[i] != null) {
				setDisplayType(toggleList[i], DISPLAY_TYPE_BLOCK);
			}
		}
		
		// remove required from drop down list once selected.
		if (obj.options[0].value == "required") {
			obj.options[0] = null;
		}
	}
}
// ***********************************************
//  show/hide these IDs
// ***********************************************
function ui_quantity_breaks_selected() 
{
	setClassName([$("ui_number_date"), $("ui_period_type"), $("ui_start_date"), $("ui_quantity_break")], "disabled short_width");
	setClassName($("dynamic_require"), "");
	$("ui_number_01").disabled=false;
	$("ui_number_date").disabled=true;
	$("ui_period_type").disabled=true;
	$("ui_start_date").disabled=true;
	$("ui_quantity_break").disabled=true;
	$('ui_start_date_label').innerHTML = 'Start Date:';
}

function ui_effectivity_periods_selected() {
	setClassName([$("ui_number_date"), $("ui_period_type"), $("ui_start_date"), $("ui_quantity_break")], "short_width");
	setClassName($("ui_number_01"), "disabled short_width");
	setClassName($("dynamic_require"), "required");
	$('ui_start_date_label').innerHTML = '<span>*</span>Start Date:';

$("ui_number_01").disabled=true;
	$("ui_number_date").disabled=false;
	$("ui_period_type").disabled=false;
	$("ui_start_date").disabled=false;
	$("ui_quantity_break").disabled=false;
}

// ***********************************************
//  CREATE AUTONUMBER
// ***********************************************
function increment(target_id) {
	// !!!! ATTN !!!!
	// Since the field has 00xxx in it, it is interpreting that as an octal or some such,
	// so you'll probably want to add buffer or a mask or something
	$(target_id).value = parseInt($(target_id).value) + 1;
}


// ***********************************************
//  ENABLE/DISABLE PRINT NUMBER FIELD
// ***********************************************
function disable_print_number() {
	setDisabled($("ui_print_number"), true);
	setClassName($("ui_print_number"), "disabled field_input_small");
}

function enable_print_number() {
	setDisabled($("ui_print_number"), false);
	setClassName($("ui_print_number"), "field_input_small");
}


// ***********************************************
//  INFO MESSAGE POPUP
// ***********************************************
//  More link popup
// ***********************************************
function getMessage(url) {
	newwindow=window.open(url,'message','height=200,width=300,resizable=1,scrollbars=1');
	if (window.focus) { newwindow.focus(); }
}


// ***********************************************
//  ONLOAD FORM FIELD FOCUS
// ***********************************************
//  focuses first form element
// ***********************************************
function initFormFieldFocus() {
	alert("in field focus");
	if (!document.getElementById("focus")) return false;
	document.getElementById("focus").focus();
}


//  *****************************************************************
//  *   ACCESSIBLE SELECT MENU                                      *
//  *****************************************************************
//  *   prevents browsers from automatically activating             *
//  *   javascript call. Waits for user to press TAB or ENTER       *
//  *****************************************************************
function initSelect() {
	var selectList = document.getElementsByTagName("select");
	
	for (var i=0; i<selectList.length; i++) {
		if (selectList[i].className.match("accessible_menu")) { 
			selectList[i].changed = false;
			selectList[i].onfocus = selectFocussed;
			selectList[i].onchange = selectChanged;
			selectList[i].onkeydown = selectKeyed;
			selectList[i].onclick = selectClicked;
			
			// !!!! ATTN !!!!!
			// What if there is more than one?
			return true;
		}
	}
}

function selectChanged(theElement) {
	var theSelect;
	
	if (theElement && theElement.value) {
		theSelect = theElement;
	} else {
		theSelect = this;
	}
	
	if (!theSelect.changed) {
		return false;
	}
	
	var toggleList = [$("ui_toggle_01"),
					  $("ui_toggle_02"),
					  $("ui_toggle_03"),
					  $("ui_toggle_04"),
					  $("ui_toggle_05"),
					  $("ui_toggle_06")
					 ];
					
	for (var i=0; i<toggleList.length; i++) {
		if (toggleList[i] != null) {
			setDisplayType(toggleList[i], DISPLAY_TYPE_BLOCK);
		}
	}

	theSelect.focus();
	return true;
}

function selectClicked() {
	this.changed = true;
}

function selectFocussed() {
	this.initValue = this.value;
	return true;
}

function selectKeyed(e) {
	evt = getEvent(e);
	var keyCode = getEventKeyCode(evt);

	if ((keyCode == KEY_CODE_ENTER || keyCode == KEY_CODE_TAB) && this.value != this.initValue) {
		this.changed = true;
		selectChanged(this);
	} else if (keyCode == KEY_CODE_ESCAPE) {
		this.changed = false;
		this.value = this.initValue;
	} else {
		this.changed = false;
	}
	
	return true;
}



function initializeForm(formId, firstElemId)
{
	if (!document.getElementById(formId)) return false;
	var form = $(formId);
	var elems = form.elements;
	for (var i = 0; i < form.length; i++) {
		var elem = elems[i];
		if (!elem.type) 
			continue;
		elem.onfocus = function() {
			Element.addClassName(this, "focus_field");
			if (this.select){this.select();}
		};
		elem.onblur = function() {
			Element.removeClassName(this, "focus_field");
		};
	}

	if ($(firstElemId)){$(firstElemId).focus();}
}


function myInit() {
	initializeForm("form_dialogs", "first_field");
}

/* Add events */
addLoadEvent(resizeActionDialog);
addResizeEvent(resizeActionDialog);
addLoadEvent(initSelect);
addLoadEvent(myInit);