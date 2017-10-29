function doHeader(src_div, tgt_table) {
	var sDiv = src_div;
	var tTable = document.getElementById(tgt_table);
	
	tTable.style.left = (-1 * (sDiv.scrollLeft)) + "px";
	
}

/*** GENERAL TABLES highlights selected rows ***/


var row_event_class_1 = "prog_add_row_events";
var row_event_class_2 = "prog_add_tree_events";
var row_selected_class = "d_selected";
var cell_selected_class = "d_selected";
var row_normal_class = "d_normal";
var text_switch_class = "prog_editable";
var text_edit_class = "editable_text";
var text_tree_class = "edit_tree_text";
var display_name_class = "prog_display_name";
var display_name_target = "prog_display_name_target";
var display_image_class = "prog_display_image";
var display_image_target = "prog_display_image_target";
var highlight_modifier_pressed = false;

//for save bom as flow, IC
var text_tree_ic_class = "edit_tree_textIC";


/* Attach highlight to the rows */
function attachRowEvents() {
	var tables_0 = invo.dom.getElementsByClass(row_event_class_1, document, "table");	
	var tables_1 = invo.dom.getElementsByClass(row_event_class_2, document, "table");
	
	doAttach(tables_0, false);
	doAttach(tables_1, true);
}



function doAttach (tables, bool_split) {
	if (tables && tables.length) {
		for (var i=0; i<tables.length; i++) {
			var rows = tables[i].getElementsByTagName("tr");
			if (rows && rows.length) {
				for (var j=0; j<rows.length; j++) {
					if (bool_split) {
						invo.event.addEvent(rows[j], "click", function(event) { changeDisplay(event, this, true); }, false);
					} else {
						invo.event.addEvent(rows[j], "click", function(event) { changeDisplay(event, this, null); }, false);
					}
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
			invo.event.addEvent(elems[i], "click", function(event) { makeEditable(event, this); }, true);
		}
	}
}

/* Attach editable to elements; no highlight */
function attachTextEditEvents() {
	var elems = invo.dom.getElementsByClass(text_edit_class, document, null);

	if (elems && elems.length) {
		for (var i=0; i<elems.length; i++) {
			invo.event.addEvent(elems[i], "click", function() { makeTextInput(this); }, true);
		}
	}
}

/* Attach editable to tree elements */
function attachTextTreeEvents() {
	var elems = invo.dom.getElementsByClass(text_tree_class, document, null);

	if (elems && elems.length) {
		for (var i=0; i<elems.length; i++) {
			invo.event.addEvent(elems[i], "click", function(event) { makeTreeInput(event, this); }, true);
		}
	}
}


function detectHighlight(evt) {
	evt = invo.event.getEvent(evt);
	highlight_modifier_pressed = false;

	killEvent(evt);
	
	// See if shift key was pressed
	if (evt.modifiers & Event.SHIFT_MASK) {
		highlight_modifier_pressed = true;
	} else if (evt.shiftKey && evt.shiftKey == true) {
		highlight_modifier_pressed = true;
	}
}


/* Do the display name change */
function changeDisplay(evt, row, bool_split) {
	evt = invo.event.getEvent(evt);

	killEvent(evt);

	detectHighlight(evt); 

	/* call highlight row */
	highlightRow(evt, row, bool_split);
	
	
	if (document.getElementById(display_name_target)) {
		var display_source = invo.dom.getElementsByClass(display_name_class, row, null);
		var display_target = invo.dom.getElementsByClass(display_name_target, document, null);
		
		if (display_source && display_source.length) {
			clearObj(display_target[0]);
			var text = createText(display_source[0].innerHTML);
			display_target[0].appendChild(text);
		}
	}
	
	if (document.getElementById(display_image_target)) {
		var display_source = invo.dom.getElementsByClass(display_image_class, row, null);
		var display_target = invo.dom.getElementsByClass(display_image_target, document, null);
	
		
		if (display_source && display_source.length) {
			clearObj(display_target[0]);
			var image = createElem('img');
			image.src = display_source[0].src;
			display_target[0].appendChild(image);
		}
	}

}



/* Do row highlight */
function highlightRow(evt, row, bool_split) {
	evt = invo.event.getEvent(evt);
	var tgt = invo.event.getEventTarget(evt);

	killEvent(evt);

	var parent = row.parentNode;
	var rows = parent.childNodes;
	var data_cells = null;
	var offset = 0;	


	
	// If we don't keep others highlighted, then unhighlight them
	if (!highlight_modifier_pressed) {
		var kill_list = invo.dom.getElementsByClass(row_selected_class, null, 'tr');
		for (var i=0; i<kill_list.length; i++) {
			if (kill_list[i] != tgt) {
				kill_list[i].className = kill_list[i].className.replace(row_selected_class, '');
				data_cells = kill_list[i].childNodes;
				overrideCellStyle(data_cells);
			}
		}
	}

	data_cells = row.childNodes;
	
	if (row.className.indexOf(row_selected_class) > -1) {
		row.className = row.className.replace(row_selected_class, '');
	} else {
		row.className = row.className + " " + row_selected_class;
	}
		
	overrideCellStyle(data_cells);


	
	if (bool_split) {
		var table_obj = invo.dom.getParentByClass(row_event_class_2, tgt, 'table');
		var curr_rows = invo.dom.getChildByElem(table_obj, 'tr');
		for (var i=0; i< curr_rows.length; i++) {
			if (row == curr_rows[i]) {
				offset = i;
			}
		}
		
		if (table_obj.id == 'tree_side_a') {
			var op_tree = document.getElementById('tree_side_b');
		} else {
			var op_tree = document.getElementById('tree_side_a');
		}
		
		var op_rows = invo.dom.getChildByElem(op_tree, 'tr');
		var op_row = op_rows[offset];
		var op_row_cells = invo.dom.getChildByElem(op_row, 'td');
		
		if (op_row.className.indexOf(row_selected_class) > -1) {
			op_row.className = op_row.className.replace(row_selected_class, '');
		} else {
			op_row.className = op_row.className + " " + row_selected_class;

		}			
		overrideCellStyle(op_row_cells);
	}

	


	
}



function overrideCellStyle(cell_list) {
	for (var i=0; i<cell_list.length; i++) {
		if (cell_list[i].className && cell_list[i].className.indexOf(cell_selected_class) > -1) {
			cell_list[i].className = cell_list[i].className.replace(cell_selected_class, '');
		} else {
			cell_list[i].className = cell_list[i].className + " " + cell_selected_class;
		}
	}
}


function killEvent(evt) {
	evt = invo.event.getEvent(evt);

	if (navigator.appName == 'Netscape') {
	    evt.preventDefault();
	} else {
	    evt.cancelBubble = true;
	    evt.returnValue = false;
	}

	// Kill the text selection
	if (document.selection) {
		document.selection.empty();
	} else {
		window.getSelection().collapseToStart();
	}
}





/* Do editable elem.  No highlighting */
function makeTextInput(obj) {
	var str = obj.innerHTML;
	var parent = obj.parentNode;
	var orig_elem_type = obj.tagName.toLowerCase();
	var orig_elem_class = obj.className;
	var textbox = createInput("text");	
	
	
				
	/* attach the new obj */
	clearObj(parent);
	textbox.className = orig_elem_class;
	parent.appendChild(textbox);
	textbox.value = str;
	invo.event.addEvent(textbox, "blur", eval("function() { makeTextStatic(this, '" + orig_elem_type + "'); }"), true);
	textbox.focus();
}

/* Do reverse editable elem. No highlighting */
function makeTextStatic(obj, elem_type) {
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
	invo.event.addEvent(elem, "click", function() { makeTextInput(this); }, true);
}


/* Do editable elem */
function makeEditable(evt, obj) {
	var str = obj.innerHTML;
	var parent = obj.parentNode;
	var orig_elem_type = obj.tagName.toLowerCase();
	var orig_elem_class = obj.className;
	var textbox = createInput("text");
	

	var parent_row = obj;
	while (parent_row.tagName.toLowerCase() != "tr") {
		parent_row = parent_row.parentNode;
	}
		
	/* call highlight row, since we stopped the bubble */
	changeDisplay(evt, parent_row);
				
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
	invo.event.addEvent(elem, "click", function(event) { makeEditable(event, this); }, true);
}


/* Do editable tree elem */
function makeTreeInput (evt, obj) {

	var str = obj.innerHTML;
	var parent = obj.parentNode;
	var orig_elem_type = obj.tagName.toLowerCase();
	var orig_elem_class = obj.className;
	var textbox = createInput("text");
	

	var parent_row = obj;
	while (parent_row.tagName.toLowerCase() != "tr") {
		parent_row = parent_row.parentNode;
	}
		
	/* call highlight row, since we stopped the bubble */
	changeDisplay(evt, parent_row, true);
	
				
	/* attach the new obj */
	clearObj(parent);
	textbox.className = orig_elem_class;
	parent.appendChild(textbox);
	textbox.value = str;
	invo.event.addEvent(textbox, "blur", eval("function() { makeTreeText(this, '" + orig_elem_type + "'); }"), true);
	textbox.focus();
}



/* Do reverse editable tree elem */
function makeTreeText(obj, elem_type) {
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
	invo.event.addEvent(elem, "click", function(event) { makeTreeInput(event, this); }, true);
}


/* Do editable tree elem for save bom as */
function makeTreeInputIC (evt, obj) {

	var str = obj.innerHTML;
	var parent = obj.parentNode;
	var orig_elem_type = obj.tagName.toLowerCase();
	//var orig_elem_class = obj.className;
	var textbox = createInput("text");
	

	var parent_row = obj;
	while (parent_row.tagName.toLowerCase() != "tr") {
		parent_row = parent_row.parentNode;
	}
		
	/* call highlight row, since we stopped the bubble */
	changeDisplay(evt, parent_row, true);
	
				
	/* attach the new obj */
	clearObj(parent);
	textbox.className = text_tree_class;
	parent.appendChild(textbox);
	textbox.value = str;
	invo.event.addEvent(textbox, "blur", eval("function() { goToNextScreenIC(); }"), true);
	textbox.focus();
}



/* Do reverse editable tree elem for save bom as */
function goToNextScreenIC() {
	var docPane = dojo.widget.getWidgetById('main');
	docPane.setUrl('./content/main/parts/save_bom_as/screen_part_save_bom_as_04_tree.php');
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
