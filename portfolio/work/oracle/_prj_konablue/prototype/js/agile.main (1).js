/*** GENERAL closes alert ***/
function close_alert(tgtId) {
	document.getElementById(tgtId).className = "obj_display_none";
}


/*** DOCS changes display ***/
/*function view_list_icon (display) {


	if (display == "icon") {
		var temp = document.getElementById("check_in_icons_list").className;
		var inspector = temp.charAt(12);
		
		if (inspector == "n"){
			document.getElementById("check_in_icons_icon").className = "icons items_no_inspector";
			document.getElementById("check_in_icons_list").className = "icons items_no_inspector obj_display_none";
		} else if (inspector == "i") {
			document.getElementById("check_in_icons_icon").className = "icons items_inspector";
			document.getElementById("check_in_icons_list").className = "icons items_inspector obj_display_none";
		}
	} else if (display == 'list') {
		var temp = document.getElementById("check_in_icons_icon").className;
		var inspector = temp.charAt(12);
		
		if (inspector == "n"){
			document.getElementById("check_in_icons_list").className = "icons items_no_inspector";
			document.getElementById("check_in_icons_icon").className = "icons items_no_inspector obj_display_none";
		} else if (inspector == "i") {
			document.getElementById("check_in_icons_list").className = "icons items_inspector";
			document.getElementById("check_in_icons_icon").className = "icons items_inspector obj_display_none";
		}
	}
}*/
