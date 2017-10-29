/******************************************************************************

SWITCHER MAIN

******************************************************************************/


/* -----------------------------------------------------------------------------
	function changes selected objects in switcher main
----------------------------------------------------------------------------- */

function switch_main_selected (tgt) {

	var tgtid = new Array();
	
	tgtid[0] = "main_0";
	tgtid[1] = "main_1";
	tgtid[2] = "main_2";
	tgtid[3] = "main_3";
	tgtid[4] = "main_4";

	for (var i = 0; i<5; i++) {
		if(tgt == tgtid[i]){
			document.getElementById(tgt).className = "selected";
		}
		else {
			document.getElementById(tgtid[i]).className = "";
		}
	}

}









/******************************************************************************

SWITCHER OTHER (windows and shortcuts)

******************************************************************************/


var current_shortcut_text = "Create a New Project";
var current_window_text = "CAD Spec #12";
var current_shortcut_selected = "shortcuts_2";
var current_window_selected = "windows_2";


/* -----------------------------------------------------------------------------
	function changes selected icon in switcher window and shortcuts
----------------------------------------------------------------------------- */

function change_selected(num, obj){
	change_text(num, obj, 1);
	var tgt;
	var class_text;
	
	if (obj == "shortcut_text") {
		tgt = "shortcuts_" + num;
		find_icon(current_shortcut_selected);
		current_shortcut_selected = tgt;
	}
	else if (obj == "window_text") {
		tgt = "windows_" + num;
		find_icon(current_window_selected);
		current_window_selected = tgt;
	}
	class_text = document.getElementById(tgt).className;
	class_text = class_text + " selected";
	document.getElementById(tgt).className = class_text;
	
	
}

/* -----------------------------------------------------------------------------
	function gets icon of switcher object
----------------------------------------------------------------------------- */
function find_icon (tgt) {
	var whitespace = " ";
	var current_class_text = document.getElementById(tgt).className;
	var finished = 0;
	var icon_text = "";
	
	for (i = 0; i < current_class_text.length; i++) {
		var c = current_class_text.charAt(i);

		if (c != whitespace && finished == 0) {
			icon_text = icon_text + c;
		}
		else if (c == whitespace) {
			finished = 1;
		}
	}
	
	document.getElementById(tgt).className = icon_text;	
	
}

/* -----------------------------------------------------------------------------
	function records the current phrase
----------------------------------------------------------------------------- */

function record_current_text(text, obj) {

	if (obj == "shortcut_text") {
		current_shortcut_text = text;
		document.getElementById(obj).innerHTML = text;
	}
	else if (obj == "window_text") {
		current_window_text = text;
		document.getElementById(obj).innerHTML = text;
	}
}


/* -----------------------------------------------------------------------------
	function changes text in switcher
----------------------------------------------------------------------------- */
function change_text(num, obj, bool) {

	var position = new Array ();
	
	if (obj == "shortcut_text") {
		position[0] = "Position 0/ shortcuts";
		position[1] = "Position 1/ shortcuts";
		position[2] = "Create a New Project";
		position[3] = "Position 3/ shortcuts";
		position[4] = "Position 4/ shortcuts";
	}
	else if (obj == "window_text") {
		position[0] = "Position 0/ controls";
		position[1] = "Position 1/ controls";
		position[2] = "CAD Spec #12";
		position[3] = "Position 3/ controls";
		position[4] = "Position 4/ controls";
	}
	
	document.getElementById(obj).innerHTML = position[num];
	
	if(bool){
		record_current_text(position[num], obj);
	}
}


/* -----------------------------------------------------------------------------
	function revert text to current selected
----------------------------------------------------------------------------- */
function revert_text(obj) {
	if (obj == "shortcut_text") {
		document.getElementById(obj).innerHTML = current_shortcut_text;
	}
	else if (obj == "window_text") {
		document.getElementById(obj).innerHTML = current_window_text;
	}
}