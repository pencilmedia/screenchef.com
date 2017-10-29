/*** GENERAL closes alert ***/
function close_alert(tgtId) {
	document.getElementById(tgtId).className = "obj_display_none";
}


/*** GENERAL TABLES highlights selected rows ***/


var row_event_class = "prog_add_row_events";
var row_selected_class = "d_selected";
var text_switch_class = "prog_editable";
var display_name_class = "prog_display_name";
var display_name_target = "prog_display_name_target";


/* Attach highlight to the rows */
function attachRowEvents() {
	var tables = invo.dom.getElementsByClass(row_event_class, document, "table");

	if (tables && tables.length) {
		for (var i=0; i<tables.length; i++) {
			var rows = tables[i].getElementsByTagName("tr");
			if (rows && rows.length) {
				for (var j=0; j<rows.length; j++) {
					invo.event.addEvent(rows[j], "click", function() { changeDisplay(this); }, false);
				}
			}
		}
	}
}


/* Attach editable to elements */
function attachTextSwitchEvents() {
	var elems = invo.dom.getElementsByClass(text_switch_class, document, null);

	if (elems && elems.length) {
		for (var i=0; i<elems.length; i++) {
			invo.event.addEvent(elems[i], "click", function() { makeEditable(this); }, true);
		}
	}
}



/* Do the display name change */
function changeDisplay(row) {

	if (document.getElementById(display_name_target)) {
		var display_source = invo.dom.getElementsByClass(display_name_class, row, null);
		var display_target = invo.dom.getElementsByClass(display_name_target, document, null);
		
		if (display_source && display_source.length) {
			clearObj(display_target[0]);
			var text = createText(display_source[0].innerHTML);
			display_target[0].appendChild(text);
		}
	}
	
	/* call highlight row */
	highlightRow(row);
}



/* Do row highlight */
function highlightRow(row) {
	var parent = row.parentNode;
	var rows = parent.childNodes;
	for (var i=0; i<rows.length; i++) {
		if (rows[i].className && rows[i].className.indexOf(row_selected_class) > -1) {
			rows[i].className = rows[i].className.replace(row_selected_class, "");
		}
	}
	if (row.className) {
		row.className += " " + row_selected_class;
	} else {
		row.className = row_selected_class;
	}
}


/* Do editable elem */
function makeEditable(obj) {
	var str = obj.innerHTML;
	var parent = obj.parentNode;
	var orig_elem_type = obj.tagName.toLowerCase();
	var orig_elem_class = obj.className;
	var textbox = createInput("text");
	
	/* get the parent, so we can highlight, etc */
	var parent_row = obj;
	while (parent_row.tagName.toLowerCase() != "tr") {
		parent_row = parent_row.parentNode;
	}
	
	/* call highlight row, since we stopped the bubble */
	changeDisplay(parent_row);
				
	/* attach the new obj */
	clearObj(parent);
	textbox.className = orig_elem_class;
	parent.appendChild(textbox);
	textbox.value = str;
	invo.event.addEvent(textbox, "blur", eval("function() { makeText(this, '" + orig_elem_type + "'); }"), true);
	textbox.focus();
}



/* Do reverse editable elem */
function makeText(obj, elem_type) {
	var str = obj.value;
	var parent = obj.parentNode;
	var orig_elem_class = obj.className;
	var elem = createElem(elem_type);
	var text = createText(str);
	
	/* attach the new obj */
	clearObj(parent);
	parent.appendChild(elem);
	elem.className = orig_elem_class;
	elem.appendChild(text);
	invo.event.addEvent(elem, "click", function() { makeEditable(this); }, true);
}


/* Factories for creating DOM elements */
function createElem(elem_type) {
	var elem = document.createElement(elem_type);
	return elem;
}

function createInput(input_type) {
	var elem = createElem("input");
	elem.type = input_type;
	return elem;
}

function createText(str) {
	var text = document.createTextNode(str);
	return text;
}

function clearObj(obj) {
	while (obj.firstChild) {
		obj.removeChild(obj.firstChild);
	}
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
