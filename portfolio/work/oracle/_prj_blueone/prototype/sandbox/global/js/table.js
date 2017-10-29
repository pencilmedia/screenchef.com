var gSelectedRow = null;
var gGrid = null;
var frame_edit_multitext_max_characters = 100;
var frame_edit_multitext_current_characters = 0;
function deleteSelectedRow() {
	if (gGrid && gSelectedRow) {
		gGrid.DelRow(gSelectedRow);
		gSelectedRow = null;
	}
}

////////////////////////////////////////
////////////////////////////////////////
//
//        EDIT FRAME
//
////////////////////////////////////////
////////////////////////////////////////


var allEditFrames = new Array ();
allEditFrames[0] = "frame_edit_textbox";
allEditFrames[1] = "frame_edit_calendar";
allEditFrames[2] = "frame_edit_multitext";
allEditFrames[3] = "frame_edit_dropdown";
allEditFrames[4] = "frame_edit_uom";
allEditFrames[5] = "frame_edit_msl";

var allReadFrames = new Array ();
allReadFrames[0] = "frame_read";

var option_array = new Array();
option_array[0] = "Inactive";
option_array[1] = "Obsolete";
option_array[2] = "Pilot";
option_array[3] = "Production";
option_array[4] = "Prototype";
option_array[5] = "Repair";

var uom_option_array = new Array();
uom_option_array[0] = "mg";
uom_option_array[1] = "g";
uom_option_array[2] = "kg";
uom_option_array[3] = "t";

var error_array = new Array();

var current_text_val = null;
var current_sel_row = null;
var current_focus_row = null;
var current_focus_col = null;
var current_frame_type = null;
var frame_edit_displayed = false;
var frame_read_displayed = false;
var datepicker_displayed = false;
var frame_error_displayed = false;

var prev_focus_row = null;
var prev_focus_col = null;

//table info
var table_width = null;
var table_height = null;
var table_x = null;
var table_y = null;

//Global timers
var timer = null;
var set_frame_timer = null;

//msl instance
var msl_instance = null;

//uom focus flag
var uom_focused = false;

//error variable
var cur_error_num = 0;

//frozen column flag
var frozen_col = null;

var col_array = new Array("Item Number", "Old Item Description","New Item Decription","Old Rev","New Rev","Old Lifecycle Phase","New Lifecycle Phase","Effective Date","Mass","Product Lines");


////////////////////////////////////////
//
//        LOAD FUNCTIONS
//
////////////////////////////////////////

function onTreeGridLoad(){
	var obj = document.getElementById("Header");
	if (obj.fireEvent) {
		obj.fireEvent("onclick");
    } else {
        var clickEvent = window.document.createEvent("MouseEvent");
        clickEvent.initEvent("click", false, true);
        obj.dispatchEvent(clickEvent);
    }
}


function loadGrid(event) {    
	if (event) { StartTreeGrid(event); }
	createFrames();
	createGlobalPalette();
}

function getTableInfo() {
	var table_enclosure = document.getElementById("treegrid");
	
	if(table_enclosure){
		var table_pos = findPos(table_enclosure);
		
		table_width = table_enclosure.offsetWidth;
		table_height = table_enclosure.offsetHeight;
		table_x = table_pos[0];
		table_y = table_pos[1];
	}
}

//Sets frame to disappear when it goes part borders of table
function setFrameDisplay(objId){
	var obj = document.getElementById(objId);
	
	parent = document.getElementById("frame_" + objId);

	var obj_pos = findPos(obj);
	
	var obj_x = obj_pos[0] - 15;
	var obj_y = obj_pos[1] - 20;
	var obj_x_width = obj_x + obj.offsetWidth;
	var obj_y_height = obj_y + obj.offsetHeight;
	
	var table_x_width = table_x + table_width;
	var table_y_height = table_y + table_height;
	
	if (
			obj_y < table_y
		||	obj_y_height > (table_y_height)
		||	obj_x < table_x
		|| 	obj_x_width > table_x_width
	) { visibilityHidden(parent); } 
	else if (
			obj_y >= table_y
		||	obj_y_height <= (table_y_height)
		||	obj_x >= table_x
		|| 	obj_x_width <= table_x_width
	) { visibilityVisible(parent);}
}

function setErrorFrameDisplay(row, scroll_top){
	var obj = document.getElementById("frame_error");
	var error_row = row.r1;
	var row_pos = findPos(error_row);
	
	var row_y = row_pos[1] - 20 - scroll_top;
	var row_y_height = row_y + error_row.offsetHeight;
	
	var table_y_height = table_y + table_height;
	
	if (row_y < table_y ||	row_y_height > (table_y_height))
		{	visibilityHidden(obj); } 
	else if (	row_y >= table_y		||	row_y_height <= (table_y_height)) 
		{ visibilityVisible(obj); }
}


////////////////////////////////////////
//
//        TREEGRID API FUNCTIONS
//
////////////////////////////////////////

Grids.OnFocus = function (G, row, col, orow, ocol) {
	//hide any error blocks
	var frame_error = document.getElementById('frame_error');
	if (frame_error){
		displayNone(frame_error);
		frame_error_displayed = false;
	}
	
	prev_focus_col = current_focus_col;
	prev_focus_row = current_focus_row;
	
	current_focus_row = Grids[Grids.length - 1].FRow;
	current_focus_col = Grids[Grids.length - 1].FCol;
	current_frame_type = determinePopup(current_focus_col);
	
	
	//noneditable rows
	var cellInner = G.GetCell(row, col, 0);
	var cell_class = cellInner.className;
	if(cell_class.match("noeditcell") != null){
		YAHOO.util.Dom.addClass(cellInner, 'noedit_bgd');
	}
	
	if (orow && ocol){
		var cellInner = G.GetCell(orow, ocol, 0);
		var cell_class = cellInner.className;
		if(cell_class.match("noeditcell") != null){
			YAHOO.util.Dom.removeClass(cellInner, 'noedit_bgd');
		}
	}	
	
	
	// error/warning rows
	if (row.Kind == "error" || row.Kind == "warning" || row.Kind == "changed"){
		if (!frame_error_displayed){
			if (row.Kind == "error"){ row.PanelClassOuter = 'GPanel error_icon selected_error'; }
			if (row.Kind == "warning"){ row.PanelClassOuter = 'GPanel warning_icon selected_error'; }
			if (row.Kind == "changed"){ row.PanelClassOuter = 'GPanel changed_icon selected_error'; }
			YAHOO.util.Dom.addClass(row.r1, 'error_row');	
			G.RefreshRow(row);
			adjustFrameError(frame_error, row);
		}
		
		//set so read frame does not appear
		set_frame_timer = null;
		hideReadFrame();
	}

	if (orow && orow != G.FRow){
		YAHOO.util.Dom.removeClass(orow.r1, 'error_row');
		if(orow.Kind == "error") { orow.PanelClassOuter = 'GPanel error_icon'; }
		else if(orow.Kind == "warning") { orow.PanelClassOuter = 'GPanel warning_icon'; }
		else if(orow.Kind == "changed") { orow.PanelClassOuter = 'GPanel changed_icon'; }
		G.RefreshRow(orow);
	}	
	
	//noneditable rows
	var cellInner = G.GetCell(row, col, 0);
	var cell_class = cellInner.className;
	if(cell_class.match("noeditcell") != null){
		YAHOO.util.Dom.addClass(cellInner, 'noedit_bgd');
	}
	
	if (orow && ocol){
		var cellInner = G.GetCell(orow, ocol, 0);
		var cell_class = cellInner.className;
		if(cell_class.match("noeditcell") != null){
			YAHOO.util.Dom.removeClass(cellInner, 'noedit_bgd');
		}
	}
	
	//frame read rows
	if (
		frame_edit_displayed == false && current_frame_type == "multitext" && row.Kind != "error" && row.Kind != "warning" && row.Kind != "changed" ||
		frame_edit_displayed == false && current_frame_type == "msl" && row.Kind != "error" && row.Kind != "warning" && row.Kind != "changed" 
	){
		set_frame_timer = setTimeout("setFrame('read');", 1000);
	} else if (
		frame_read_displayed == false && row.Kind == "error" ||
		frame_read_displayed == false && row.Kind == "warning" ||
		current_frame_type != "multitext" ||
		current_frame_type != "msl" ||
		frame_read_displayed == true
	) {
		set_frame_timer = null;
		hideReadFrame();
	}
	
	if (changedCell()) {
		hideEditFrame();
	}
		
}

Grids.OnSelect = function (G, row, type) {
	//hide any error blocks
	var frame_error = document.getElementById('frame_error');
	displayNone(frame_error);

	if (row.Kind == "error" || row.Kind == "warning" || row.Kind == "changed"){
		if(row.Selected){
			if (row.Kind == "error"){
				row.PanelClassOuter = 'GPanel error_icon';
			}	else if (row.Kind == "warning"){
				row.PanelClassOuter = 'GPanel warning_icon';
			} else if (row.Kind == "changed"){
				row.PanelClassOuter = 'GPanel changed_icon';
			}
			
			YAHOO.util.Dom.removeClass(row.r1, 'error_row');
			G.FRow = null;
			G.RefreshRow(row);
		} else {
			if (row.Kind == "error"){
				row.PanelClassOuter = 'GPanel error_icon selected_error';
			}	else if (row.Kind == "warning"){
				row.PanelClassOuter = 'GPanel warning_icon selected_error';
			} else if (row.Kind == "changed"){
				row.PanelClassOuter = 'GPanel warning_icon selected_error';
			}
		
			YAHOO.util.Dom.addClass(row.r1, 'error_row');	
			G.FRow = current_focus_row = row;
			G.RefreshRow(row);
			adjustFrameError(frame_error, row);
		}
	} else {
		if(row.Selected){
			row.PanelClassOuter = 'GPanel';
			G.RefreshRow(row);
		} else {
			row.PanelClassOuter = 'GPanel selected_row';
			G.RefreshRow(row);
		}
	}
	
	current_sel_row = row;
	
}

Grids.OnClick = function (G,row,col,x,y){
	
	//noneditable rows
	/*var cellInner = G.GetCell(row, col, 0);
	var cell_class = cellInner.className;
	if(cell_class.match("noeditcell") != null){
		YAHOO.util.Dom.addClass(cellInner, 'noedit_bgd');
		
		//focusing row
		G.Focus(row, G.GetPrevCol(col));
	}
	
	if (prev_focus_row && prev_focus_col){
		var cellInner = G.GetCell(prev_focus_row, prev_focus_col, 0);
		var cell_class = cellInner.className;
		if(cell_class.match("noeditcell") != null){
			YAHOO.util.Dom.removeClass(cellInner, 'noedit_bgd');
		}
	}*/
	
	if (row == G.XHeader ){
	
		var i = 0;
		col.HeaderClassOuter = 'GHeader selected_col';
		//G.RefreshRow(row);
		G.RefreshCell(row, col);
	}
	
	//timer = setTimeout("doOnClick();", 1500);
}

Grids.OnDblClick = function (G,row,col,x,y) {
	//noneditable rows
	var cellInner = G.GetCell(row, col, 0);
	var cell_class = cellInner.className;
	if(cell_class.match("noeditcell") != null){
		return;
	}
	
	clearTimeout(timer);
	timer = null;
	doOnDblClick();
}

Grids.OnKeyDown = function (grid, key, evt) {
	detectTableKeys(evt, 'agile_table');
}

Grids.OnScroll = function (G, scroll_left, scroll_top) {
	if (frame_edit_displayed == true) { setFrame("edit"); setFrameDisplay("edit_" + current_frame_type); }
	if (frame_read_displayed == true) { hideReadFrame(); }
	if (frame_error_displayed == true){
		var frame_error = document.getElementById('frame_error');
		adjustFrameError(frame_error, G.FRow);
		setErrorFrameDisplay(G.FRow, scroll_top);
	}
}

Grids.OnGetColor = function (G,row,col,r,g,b){		
	if (
		row.Kind == "error" && row !=G.FRow && !row.Selected && col!=G.FCol ||
		row.Kind == "warning" && row !=G.FRow && !row.Selected && col!=G.FCol ||
		row.Kind == "changed" && row !=G.FRow && !row.Selected && col!=G.FCol
	){ //pink
			return "rgb(255,224,225)";
	}
	else if (
		row.Kind == "error" && row == G.FRow ||
		row.Kind == "error" && row.Selected ||

		row.Kind == "warning" && row == G.FRow ||
		row.Kind == "warning" && row.Selected ||
		
		row.Kind == "changed" && row == G.FRow ||
		row.Kind == "changed" && row.Selected 
	){ //red/salmon
		return "rgb(222,129,129)";
	}
	
	if ((row == G.FRow || row.Selected) && col!=G.FCol) { return "rgb(228,238,255)"; }
}

Grids.OnRenderPageFinish = function (G){
	//showing ERROR/WARNING ROWS:
	
	//getting all rows
	var all_rows = G.GetRows(G.XB)[0].childNodes
	
	//separating out the error rows
	var error_rows = new Array;
	var j = 0;
	var arr_length = all_rows.length;
	
	for (var i = 0; i < arr_length; i++) {
		if (all_rows[i].Kind == "error" || all_rows[i].Kind == "warning" || all_rows[i].Kind == "changed"){
			error_rows[j] = all_rows[i];
			j++;
		}
	}
	
	//assigning new styles to error rows
	var arr_length = error_rows.length;
	for (i = 0; i < arr_length; i++) {
		if (i == 0 ){
			error_rows[i].Class = 'error_row';
			YAHOO.util.Dom.addClass(error_rows[i].r1, 'error_row');
			error_rows[i].r1['id'] = "first_error_row";
			
			//focusing row
			G.Focus(error_rows[i], G.GetFirstCol(1));
		} else {
			if (error_rows[i].Kind == "error") {
				error_rows[i].PanelClassOuter = 'GPanel error_icon';
			} else if (error_rows[i].Kind == "warning") {
				error_rows[i].PanelClassOuter = 'GPanel warning_icon';
			} else if (error_rows[i].Kind == "changed") {
				error_rows[i].PanelClassOuter = 'GPanel changed_icon';
			}
		}
  		G.RefreshRow(error_rows[i]);
	}
	
	getTableInfo();
	

	var body_tag = document.getElementsByTagName('body');
	body_tag[0].onunload = function(){ var frame_enclosure = document.getElementById("frame_enclosure"); displayNone("frame_enclosure"); };
}

////////////////////////////////////////
//
//        RESIZE FUNCTIONS
//
////////////////////////////////////////

function doOnResize(){
	setTimeout("doResize()", 500);	
}

function doResize() {
	getTableInfo();
	
	if (frame_edit_displayed == true) { setFrame("edit"); setFrameDisplay("edit_" + current_frame_type); }
	if (frame_read_displayed == true) { hideReadFrame(); }
	if (frame_error_displayed == true){
		var frame_error = document.getElementById('frame_error');
		adjustFrameError(frame_error, Grids[Grids.length - 1].FRow);
	}
}

YAHOO.util.Event.addListener(window, "resize", doOnResize);


////////////////////////////////////////
//
//        CLICK FUNCTIONS
//
////////////////////////////////////////


function doOnClick(){
	
	//Ben why do I have to take this extra step?!
	if(timer == null) { return };
	if (frame_read_displayed == true && changedCell() == true){
		hideReadFrame();
	} else {
		hideEditFrame();
	}
}

function doOnDblClick(){
	if (frame_read_displayed == true) {
		hideReadFrame();
	} else if (frame_edit_displayed == true) {
		hideEditFrame();
	}
	setFrame("edit");
}

function setPrevs() {
	prev_focus_col = current_focus_col;
	prev_focus_row = current_focus_row;
}

function changedCell(){
	if (prev_focus_col == current_focus_col && prev_focus_row == current_focus_row){
		return false;
	} else {
		return true;
	}
}

////////////////////////////////////////
//
//        PERSONALIZATION FUNCTIONS
//
////////////////////////////////////////
function setFrozen(){
	//Find column left and top position
	
	//Add column width to column left position for line_left
	
	//Get table_height
	
	//Place blue line at left: line_left and width: table_height
	
	//set frozen_col flag to true
	frozen_col = true;
}


////////////////////////////////////////
//
//        CREATE FUNCTIONS
//
////////////////////////////////////////

function createFrames() {
	var frame_enclosure = document.getElementById("frame_enclosure");
	
	if (frame_enclosure){
		var textbox = createTextbox();
		var multitext = createMultitext();
		var calendar = createCalendar();
		var dropdown = createDropdown();
		var uom = createUOM();
		
		var msl = createMSL();
		var msl_palette = createMSLPalette();
		
		var read_frame = createReadFrame();
		
		var frame_error = createErrorFrame();
		
		
		frame_enclosure.appendChild(textbox);
		frame_enclosure.appendChild(multitext);
		frame_enclosure.appendChild(calendar);
		frame_enclosure.appendChild(dropdown);
		frame_enclosure.appendChild(uom);
		
		frame_enclosure.appendChild(msl);
		frame_enclosure.appendChild(msl_palette);
		
		frame_enclosure.appendChild(read_frame);
		
		frame_enclosure.appendChild(frame_error);
		
		//TEMP FUNCTION
		createTempDatepicker();
		
		msl_instance = createInstance();
		//YAHOO.util.Event.onContentReady('frame_edit_msl', createInstance);
		
		createTempErrorArray();
		displayBlock(frame_enclosure);
	}
}


////////////////////////////////////////
//
//        FRAME CREATION FUNCTIONS
//
////////////////////////////////////////

function createTextbox() {
	var frame_edit = make("div", "frame_edit", "frame_edit_textbox");
	var outer_block = make("div", "outer_block");
	
	var textbox_input = make("input","textbox", "edit_textbox");
	textbox_input.type = "text";
	textbox_input.onkeydown = function(event) {checkEvent(event, "edit_textbox");};
	
	outer_block.appendChild(textbox_input);
	frame_edit.appendChild(outer_block);
	
	return frame_edit;
}

function createMultitext() {
	//Edit
	var frame_edit = make("div", "frame_edit", "frame_edit_multitext");
	var outer_block_edit = make("div", "outer_block");
	
	var multitext_edit = make("textarea","", "edit_multitext");
	multitext_edit.onkeydown = function(event) { checkEvent(event, "edit_multitext"); };

	multitext_edit.onkeyup = function(event) { cCounter(event); };

	var char_counter = make("div","char_counter","char_counter");
	char_counter.innerHTML = '<p>' + frame_edit_multitext_max_characters + '</p>';

	outer_block_edit.appendChild(multitext_edit);
	outer_block_edit.appendChild(char_counter);
	frame_edit.appendChild(outer_block_edit);
	
	return frame_edit;
}

function cCounter(e)
{
	var chars = frame_edit_multitext_max_characters - document.getElementById('edit_multitext').value.length;
	frame_edit_multitext_current_characters = chars;
	document.getElementById('char_counter').innerHTML = '<p>' + chars + '</p>';

	if (chars < 0) 
	{
		document.getElementById('char_counter').innerHTML = '<p>0</p>';
	}

	if ( chars > 4 )
	{
		document.getElementById('char_counter').style.width = chars - 2 + '%';
	}
}
function createCalendar() {
	var frame_edit = make("div", "frame_edit", "frame_edit_calendar");
	var outer_block = make("div", "outer_block");
	
	var calendar_input = make("input","", "edit_calendar");
	calendar_input.type = "text";
	calendar_input.onkeydown = function(event) { checkEvent(event, "edit_calendar"); };
	
	var calendar_button = make("a", "button", "calendar_button");
	var calendar_span = make("span");
	var calendar_em = make("em", "calendar iconic");
	
	calendar_em.innerHTML = "&nbsp;";
	calendar_span.appendChild(calendar_em);
	calendar_button.appendChild(calendar_span);
	
	calendar_button.onclick = function() { callTempDatepicker(); };
	
	outer_block.appendChild(calendar_input);
	outer_block.appendChild(calendar_button);
	frame_edit.appendChild(outer_block);
	
	return frame_edit;
}

function createDropdown() {
	var frame_edit = make("div", "frame_edit", "frame_edit_dropdown");
	var outer_block = make("div", "outer_block");
	
	var dropdown_box = make("select","some_class", "edit_dropdown");
	for (var i = 0; i < option_array.length; i++){
		createOption (dropdown_box, option_array[i], "some_class", i);
	}
	dropdown_box.onkeydown = function(event) {checkEvent(event, "edit_dropdown");};
	
	outer_block.appendChild(dropdown_box);
	frame_edit.appendChild(outer_block);
	
	return frame_edit;
}

function createOption (dropdown_box, val, use_class, index) {
	var dropdown_option = make("option", use_class);
	dropdown_option.value = dropdown_option.text = val;
	dropdown_box.options.add(dropdown_option, index)
}

function createUOM() {
	var frame_edit = make("div", "frame_edit", "frame_edit_uom");
	var outer_block = make("div", "outer_block");
	
	var uom_input = make("input","uom", "edit_uom");
	uom_input.type = "text";
	uom_input.onkeydown = function(event) { checkEvent(event, "edit_uom"); };
	
	var uom_dropdown = make("select", "uom", "uom_dropdown");
	for (var i = 0; i < uom_option_array.length; i++){
		createOption (uom_dropdown, uom_option_array[i], "measurement", i);
	}
	
	uom_dropdown.onkeydown = function(event) {checkEvent(event, "edit_uom");};
	
	outer_block.appendChild(uom_input);
	outer_block.appendChild(uom_dropdown);
	frame_edit.appendChild(outer_block);
	
	return frame_edit;
}

function createMSL() {
	var frame_edit = make("div", "frame_edit", "frame_edit_msl");
	var outer_block = make("div", "outer_block pillbox_control");
	
	var msl_wrapper = make("div","","edit_msl");
	
	var msl_content = make("div","content action_dialog","content");
	var msl_form = make("form","","form_dialogs");
	msl_form.name = "form_dialogs";
	msl_form.onsubmit = function (){return false;};
	var msl_edit_mode = make("div","","edit_mode");
	var msl_fieldset = make("fieldset","dynamic");
	var msl_dl = make("dl","side_by_side");
	
	var msl_dt = make("dt");
	var msl_dd = make("dd","multiselect_textbox");
	var msl_agileautocomplete = make("div","agileautocomplete edit_frame_width","agileautocomplete");
	
	var msl_input = make("input","search_query","search_query");
	msl_input.onkeydown = function(event) { checkEvent(event, "edit_msl"); };
	var msl_results_container = make("div","results_container","results_container");
	var msl_selected_container = make("div","selected_container","selected_container");
	msl_selected_container.tabindex = "-1";
	
	var msl_ul = make("ul","","selected_items");
	var msl_added_notice = make("div","added_notice","added_notice");
	setStyle(msl_added_notice,"display: none;");
	msl_added_notice.innerHTML = "Added";
	
	msl_selected_container.appendChild(msl_ul);
	msl_selected_container.appendChild(msl_added_notice);
	
	msl_agileautocomplete.appendChild(msl_input);
	msl_agileautocomplete.appendChild(msl_results_container);
	msl_agileautocomplete.appendChild(msl_selected_container);
	
	var msl_show_floater = make("a","button","show_floater");
	var msl_show_floater_span = make("span");
	var msl_show_floater_em = make("em","view_details iconic");
	msl_show_floater_em.innerHTML = "&nbsp;";
	msl_show_floater_span.appendChild(msl_show_floater_em);
	msl_show_floater.appendChild(msl_show_floater_span);
	
	msl_dd.appendChild(msl_agileautocomplete);
	msl_dd.appendChild(msl_show_floater);
	
	msl_dl.appendChild(msl_dt);
	msl_dl.appendChild(msl_dd);

	msl_fieldset.appendChild(msl_dl);
	msl_edit_mode.appendChild(msl_fieldset);
	msl_form.appendChild(msl_edit_mode);
	
	msl_action_dialog_foot_spacer = make("p","action_dialog_foot_spacer");
	msl_action_dialog_foot_spacer.innerHTML = ".";
	
	msl_content.appendChild(msl_form);
	msl_content.appendChild(msl_action_dialog_foot_spacer);
	
	msl_wrapper.appendChild(msl_content);
	outer_block.appendChild(msl_wrapper);
	
	frame_edit.appendChild(outer_block);
	
	return frame_edit;
}

function createMSLPalette() {
	var msl_floater_window = make("div","palette nodrag","floater_window");
	msl_floater_window.tabIndex = "-1";
	
	var msl_floater_content = make("div","palette_content nodrag","floater_content");
	msl_floater_content.tabIndex = "-1";
	
	var msl_floater_handlebar = make("div","handlebar","floater_window");
	msl_floater_handlebar.tabIndex = "-1";
	
	var msl_close_floater = make("a","close_palette","close_floater");
	msl_close_floater.tabIndex = "-1";
	msl_close_floater.onclick = function() { return false; };
	
	var msl_close_floater_span = make("span");
	msl_close_floater_span.innerHTML = "close";
	msl_close_floater.appendChild(msl_close_floater_span);
	
	var msl_floater_title = make("div","palette_title nodrag","floater_title");
	msl_floater_title.tabIndex = "-1";
	
	var msl_floater_title_p = make("p","nodrag","palette_title");
	msl_floater_title_p.tabIndex = "-1";
	
	var msl_floater_title_added = make("div","palette_added_notice","palette_added_notice");
	msl_floater_title_added.tabIndex = "-1";
	setStyle(msl_floater_title_added,"display: none;");
	msl_floater_title_added.innerHTML = "Added";
	
	msl_floater_title.appendChild(msl_floater_title_p);
	msl_floater_title.appendChild(msl_floater_title_added);
	
	var msl_floater_filter = make("div","palette_filter nodrag","floater_filter");
	msl_floater_filter.innerHTML = "Filter: ";
	
	var msl_floater_filter_input = make("input","search nodrag","floater_search_text");
	msl_floater_filter_input.type = "text";
	msl_floater_filter_input.tabIndex = "1";
	msl_floater_filter_input.name = "search";
	msl_floater_filter_input.value = "";
	msl_floater_filter_input.setAttribute("autocomplete","off");
	
	msl_floater_filter.appendChild(msl_floater_filter_input);
	
	var msl_floater_results_div = make("div","nodrag","floater_results_div");
	msl_floater_results_div.tabIndex = "-1";
	
	var msl_floater_results_list = make("div","palette_results_list nodrag","floater_results_list");
	msl_floater_results_list.tabIndex = "-1";
	
	msl_floater_results_div.appendChild(msl_floater_results_list);
	
	var msl_floater_resize_handle = make("div","palette_resizer nodrag","floater_resize_handle");
	msl_floater_resize_handle.tabIndex = "-1";
	msl_floater_resize_handle.innerHTML = "&nbsp;";
	
	msl_floater_content.appendChild(msl_floater_handlebar);
	msl_floater_content.appendChild(msl_close_floater);
	msl_floater_content.appendChild(msl_floater_title);
	msl_floater_content.appendChild(msl_floater_filter);
	msl_floater_content.appendChild(msl_floater_results_div);
	msl_floater_content.appendChild(msl_floater_resize_handle);
	
	var msl_drag_div = make("div","drag_div","dragDiv");
	setStyle(msl_drag_div,"position:absolute;height:15px;width:15px;visibility:hidden;z-index:99998;");
	
	var msl_drag_div_p = make("p","drag_tooltip","totalDragged");
	setStyle(msl_drag_div_p,"position:absolute;left:-9px;top:-8px;background-color: #fff;border: 1px dotted #787878;color: #000;font-weight: bold;font-size: 14px;height: 15px;line-height: 14px;min-width: 15px;padding: 2px;text-align: center;width: auto;z-index:99998;opacity: .75;filter: alpha(opacity=75);");
	msl_drag_div_p.tabIndex = "-1";
	
	msl_drag_div.appendChild(msl_drag_div_p);
	
	msl_floater_window.appendChild(msl_floater_content);
	msl_floater_window.appendChild(msl_drag_div);
	
	return msl_floater_window;
}

function createReadFrame(){
	//Read
	var frame_read = make("div", "frame_read", "frame_read");
	var outer_block_read = make("div", "outer_block");
	outer_block_read.ondblclick = function() { hideReadFrame(); setFrame("edit"); };
	
	var multitext_read = make("p","read", "read"); 
	
	//can't recieve focus unless there is a tabindex
	//multitext_read.tabIndex = "-1";
	multitext_read.onkeydown = function(event) { checkEvent(event, "read"); };
	multitext_read.ondblclick = function() { hideReadFrame(); setFrame("edit"); };
	
	outer_block_read.appendChild(multitext_read);
	frame_read.appendChild(outer_block_read);
	
	return frame_read;
}

function createErrorFrame(){
	var frame_error = make("div","frame_error","frame_error");
	
	//OUTER LAYER
	var frame_error_top = make("div","frame_error_top","frame_error_top");
	var frame_error_mid = make("div","frame_error_mid","frame_error_mid");
	var frame_error_bottom = make("div","frame_error_bottom","frame_error_bottom");
	
	var frame_error_top_left = make("div","left","frame_error_top_left");
	frame_error_top_left.innerHTML = "&nbsp;";
	var frame_error_top_mid = make("div","mid");
	frame_error_top_mid.innerHTML = "&nbsp;";
	var frame_error_top_right = make("div","right");
	frame_error_top_right.innerHTML = "&nbsp;";
	frame_error_top_mid.appendChild(frame_error_top_left);
	frame_error_top_mid.appendChild(frame_error_top_right);
	frame_error_top.appendChild(frame_error_top_mid);
	
	var frame_error_mid_left = make("div","left");
	frame_error_mid_left.innerHTML = "&nbsp;";
	var frame_error_mid_mid = make("div","mid");
	frame_error_mid_mid.innerHTML = "&nbsp;";
	var frame_error_mid_right = make("div","right");
	frame_error_mid_right.innerHTML = "&nbsp;";
	frame_error_mid_mid.appendChild(frame_error_mid_left);
	frame_error_mid_mid.appendChild(frame_error_mid_right);
	frame_error_mid.appendChild(frame_error_mid_mid);
	
	var frame_error_bottom_left = make("div","left","frame_error_bottom_left");
	frame_error_bottom_left.innerHTML = "&nbsp;";
	var frame_error_bottom_mid = make("div","mid");
	frame_error_bottom_mid.innerHTML = "&nbsp;";
	var frame_error_bottom_right = make("div","right");
	frame_error_bottom_right.innerHTML = "&nbsp;";
	frame_error_bottom_mid.appendChild(frame_error_bottom_left);
	frame_error_bottom_mid.appendChild(frame_error_bottom_right);
	frame_error_bottom.appendChild(frame_error_bottom_mid);
	
	
	//CONTENT
	var frame_error_content = make("div","frame_error_content","frame_error_content");
	var error_top = make("div","error_top");
	var error_bottom = make("div","error_bottom");
	var error_close = make("div","error_close");
	
	var error_top_content = make("div","error_top_content","error_top_content");
	var error_top_options = make("div","error_top_options","error_top_options");
	
	error_top.appendChild(error_top_content);
	error_top.appendChild(error_top_options);
	
	var error_bottom_nav = make("div","error_bottom_nav","error_bottom_nav");
	
	//PUT BUTTON IN BOTTOM NAV
	error_bottom_nav_similar = make("div","error_similar","error_similar");
	error_bottom_nav_similar_a = make("a","button");
	error_bottom_nav_similar_span = make("span");
	error_bottom_nav_similar_span.innerHTML ="Apply to Similar";
	error_bottom_nav_similar_a.appendChild(error_bottom_nav_similar_span);
	error_bottom_nav_similar.appendChild(error_bottom_nav_similar_a);
	error_bottom_nav.appendChild(error_bottom_nav_similar);
	
	var error_nav_buttons = make("div","error_nav_buttons","error_nav_buttons");
	error_bottom_nav.appendChild(error_nav_buttons);
	error_bottom.appendChild(error_bottom_nav);
	
	var error_close_frame= make("a","close_error_frame","close_error_frame");
	error_close_frame.tabIndex = "-1";
	error_close_frame.onclick = function() { prev_focus_row = current_focus_row; closeFrameError(); };
	
	var error_close_frame_span = make("span");
	error_close_frame_span.innerHTML = "close";
	error_close_frame.appendChild(error_close_frame_span);
	
	error_close.appendChild(error_close_frame);
	
	frame_error_content.appendChild(error_top);
	frame_error_content.appendChild(error_bottom);
	frame_error_content.appendChild(error_close);
	
	frame_error_mid_mid.appendChild(frame_error_content);
	
	
	//PASTE IT ALL TOGETHER
	frame_error.appendChild(frame_error_top);
	frame_error.appendChild(frame_error_mid);
	frame_error.appendChild(frame_error_bottom);
	
	return frame_error;
}



////////////////////////////////////////
//
//        TABLE PALETTE
//
////////////////////////////////////////

// VIEWS

function callTableViewsPalette(evt, args, tab_section){
	clearGlobalPaletteAll();
	titleGlobalPalette('TableName Foo');
	createTablePaletteViewsTabs(tab_section);
	if (tab_section == 'filter_table'){	
		createPaletteDMSError();
		setGlobalPaletteDMS('1 error was found.'); 
	}
	if (tab_section == 'format_cols'){	
		createPaletteDMSFYI();
		setGlobalPaletteDMS('You can re-order columns by dragging the columns up and down to a new location.'); 
	}
	presetExtension(tab_section);
	presetExtension('table_palette_views_footer');
	setGlobalPaletteMinWidth('600px');
	setGlobalPaletteMinHeight('350px');
	setGlobalPaletteHeight('350px');
	openGlobalPalette();
	if (tab_section == 'filter_table'){	
		popMessage('error');
	}
	if (tab_section == 'format_cols'){	
		popMessage('fyi');
	}
}


// EDIT VIEWS


function callViewEditor(evt, args, tab_section){
	clearGlobalPaletteAll();
	titleGlobalPalette('TableName Foo');
	createTablePaletteEditorTabs(tab_section);
	if (tab_section == 'filter_table'){	
		createPaletteDMSError();
		setGlobalPaletteDMS('1 error was found.'); 
	}
	if (tab_section == 'format_cols'){	
		createPaletteDMSFYI();
		setGlobalPaletteDMS('You can re-order columns by dragging the columns up and down to a new location.'); 
	}
	presetExtension(tab_section);
	presetExtension('table_palette_editor_footer');
	setGlobalPaletteMinWidth('600px');
	setGlobalPaletteMinHeight('350px');
	setGlobalPaletteHeight('350px');
	openGlobalPalette();
	if (tab_section == 'filter_table'){	
		popMessage('error');
	}
	if (tab_section == 'format_cols'){	
		popMessage('fyi');
	}
}

////////////////////////////////////////
//
//        TABLE DIALOG
//
////////////////////////////////////////

// MANAGE VIEWS

function callViewManager(){
	launch_dialog('pages/_testing/proj_action_dialogs/view_manager.php',625,400);return false;
}


////////////////////////////////////////
//
//        FRAME FUNCTIONS
//
////////////////////////////////////////

function setFrame(frame_type){
	//if no frame should be showed, return
	if (current_frame_type == null){ return; }
	
	//Getting text value from td cell
	current_text_val = Grids[Grids.length - 1].GetString(current_focus_row, current_focus_col);
	
	//Using return object to find height and width of td cell
	var cell_obj = Grids[Grids.length - 1].GetCell(current_focus_row, current_focus_col, 0);
	
	//Using returned position to get top and left values of td cell
	var cell_pos = findPos(cell_obj);
	
	//Passing values to size and position function
	adjustFrame(current_text_val, cell_obj.offsetWidth, cell_obj.offsetHeight, cell_pos[1], cell_pos[0], frame_type);
}

function hideEditFrame() {
	if (frame_edit_displayed == true) {
		for (var i = 0; i < allEditFrames.length; i++){
			displayNone(allEditFrames[i]);	
		}
		frame_edit_displayed = false;
	}
	
	//TEMP FUNCTION
	hideTempDatepicker();
	
	//set uom focus flag back to false
	uom_focused = false;
}

function hideReadFrame() {
	if (frame_read_displayed == true) {
		for (var i = 0; i < allReadFrames.length; i++){
			displayNone(allReadFrames[i]);	
		}
		frame_read_displayed = false;
	}
}

//Put all frame types here
function determinePopup(column){
	if (column.match("noedit") != null){
		return null;
	} else if (column.match("textbox") != null){
		return "textbox";
	} else if (column.match("multitext") != null){
		return "multitext";
	} else if (column.match("calendar") != null){
		return "calendar";
	} else if (column.match("dropdown") != null){
		return "dropdown";
	} else if (column.match("uom") != null){
		return "uom";
	} else if (column.match("msl") != null){
		return "msl";
	}
}

function setValue() {
	switch (current_frame_type) {
		case "textbox":
			var obj = document.getElementById('edit_textbox');
			current_text_val =  obj.value;
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
		case "multitext":
			var obj = document.getElementById('edit_multitext');
			current_text_val =  obj.value;
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
		case "calendar":
			var obj = document.getElementById('edit_calendar');
			current_text_val =  obj.value;
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
		case "msl":
			var obj = document.getElementById('edit_msl');
			var msl_text = pillToText();
			current_text_val = msl_text;
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
		case "uom":
			var obj = document.getElementById('edit_uom');
			var dropdown = document.getElementById('uom_dropdown');
			if (obj.value){
				var selectedNum = dropdown.selectedIndex;
				var dropdown_val = dropdown.options[selectedNum].value;
				current_text_val =  obj.value + " " + dropdown_val;
			}
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
		case "dropdown":
			var obj = document.getElementById('edit_dropdown');
			var selectedNum = obj.selectedIndex;
			current_text_val = obj.options[selectedNum].value;
			Grids[Grids.length - 1].SetString(current_focus_row, current_focus_col, current_text_val, refresh = true);
			break;
	}
}

//Takes text in table cell and converts to pills
function textToPill(pill_string){
	var pill_text = new Array();
	pill_text = pill_string.split(", ");
	
	var pillbox_enclosure = document.getElementById("selected_items");
	
	//clear pillbox
	var pillIds =  msl_instance._pillBox.getPillIds();
	
	  if (pillIds.length) {
		for (var i = 0; i < pillIds.length; i++) {
		    var pillId = pillIds[i];
			removePill(pillId);
		}
	}
	
	for (i = 0; i < pill_text.length; i++){
	    var pill_string = new String(pill_text[i]);
		msl_instance._pillBox.createPill(pill_string, false);
	}
}

//Takes pills in pillbox enclosure and converts them into text for use in the table cell
function pillToText(){
	var pill_text = "";
	var pillbox_enclosure = document.getElementById("selected_items");
	var pill_items = pillbox_enclosure.getElementsByTagName("li");

	
	if (pill_items && pill_items.length){
		//make text statement
		for (var i = 0; i < pill_items.length; i++){	
			if (i == pill_items.length - 1){;
				pill_text = pill_text + pill_items[i].name;
			} else {
				pill_text = pill_text + pill_items[i].name + ", ";
			}
		}
	}

	return pill_text;
	
	
}


////////////////////////////////////////
//
//        ERROR FRAME FUNCTIONS
//
////////////////////////////////////////

function fillErrorFrame(){
	var row_id = Grids[Grids.length - 1].FRow.id;
	
	var frame_error = document.getElementById("frame_error");
	var error_top_content = document.getElementById("error_top_content");
	var error_nav_buttons = document.getElementById("error_nav_buttons");
	var error_top_options = document.getElementById("error_top_options");
		var status_selected_row_errors = document.getElementById("status_selected_row_errors");
	
	//TODO: make error num variable
	for (var i = 0; i < error_array.length; i++){
		if (row_id == error_array[i][0]){
			error_top_content.innerHTML = error_array[i][1][cur_error_num];
			error_nav_buttons.innerHTML = error_array[i][2];
			error_top_options.innerHTML = error_array[i][3][cur_error_num];
			status_selected_row_errors.innerHTML = error_array[i][4];
		}
	}
	if (cur_error_num != 0){ moveSelectedError(null, cur_error_num); }
}

function changeErrorFrameContent(direction, specific){
	var row = Grids[Grids.length - 1].FRow;
	var row_id = current_focus_row.id;
	var error_top_content = document.getElementById("error_top_content");
	var error_top_options = document.getElementById("error_top_options");
	var status_selected_row_errors = document.getElementById("status_selected_row_errors");
	
	for (var i = 0; i < error_array.length; i++){
		if (row_id == error_array[i][0]){
			
			if (direction != null && specific == false){
				if(direction == "next"){
					var error_length = error_array[i][1].length;
					if (cur_error_num == error_length - 1){
							prev_focus_row = current_focus_row;					
							closeFrameError();
							openError(i, direction);
							return;
					} else if (cur_error_num < error_length){
						error_top_content.innerHTML = error_array[i][1][cur_error_num + 1];
						error_top_options.innerHTML = error_array[i][3][cur_error_num + 1];
						cur_error_num = cur_error_num + 1;
						moveSelectedError(direction, null);
					}
				} else {
					if (cur_error_num == 0){
							prev_focus_row = current_focus_row;
							closeFrameError();
							openError(i, direction);
							return;
					} else {
						error_top_content.innerHTML = error_array[i][1][cur_error_num - 1];
						error_top_options.innerHTML = error_array[i][3][cur_error_num - 1];
						cur_error_num = cur_error_num - 1;
						moveSelectedError(direction, null);
					}
				}
			} else if (direction == null && specific == true) {
				var selected_option = document.error_nums.error_nums_select.selectedIndex;
				error_top_content.innerHTML = error_array[i][1][selected_option];
				error_top_options.innerHTML = error_array[i][3][selected_option];
				cur_error_num = selected_option;
			}
			
			status_selected_row_errors.innerHTML = error_array[i][4];
		}
	}
	
	Grids[Grids.length -1].FRow = current_focus_row;
	Grids[Grids.length -1].RefreshRow(current_focus_row);
	
}

function moveSelectedError(direction, num){
	if(document.error_nums){
		var selected_option = document.error_nums.error_nums_select.selectedIndex;
		
		if (num == null && direction != null && selected_option != null) {
			if (direction == 'next'){
				document.error_nums.error_nums_select.selectedIndex = selected_option + 1;
			} else if (direction == 'back'){
				document.error_nums.error_nums_select.selectedIndex = selected_option - 1;
			}
		} else if (num != null && direction == null){
			var num_options = document.error_nums.error_nums_select.length;
			document.error_nums.error_nums_select.selectedIndex = num_options - 1;
		}
	}	
}

function openError(num, direction){
	//Focusing rows depending on direction
	if (direction == "next" && error_array[num + 1]){
		cur_error_num = 0;
		Grids[Grids.length - 1].Focus(Grids[Grids.length - 1].GetRowById(error_array[num + 1][0]), Grids[Grids.length - 1].GetFirstCol(1));
	} else if (direction == "back" && error_array[num - 1]) {
		cur_error_num = error_array[num - 1][1].length - 1;
		Grids[Grids.length - 1].Focus(Grids[Grids.length - 1].GetRowById(error_array[num - 1][0]), Grids[Grids.length - 1].GetFirstCol(1));
	}
}

function closeFrameError(){
	var frame_error = document.getElementById("frame_error");
	displayNone(frame_error);
	frame_error_displayed = false;

	YAHOO.util.Dom.removeClass(current_focus_row.r1, 'error_row');
	
	if (current_focus_row.Kind == "error"){
		current_focus_row.PanelClassOuter = 'GPanel error_icon';
	} else if (current_focus_row.Kind == "warning") {
		current_focus_row.PanelClassOuter = 'GPanel warning_icon'; 
	} else if (current_focus_row.Kind == "changed") {
		current_focus_row.PanelClassOuter = 'GPanel changed_icon'; 
	}
	
	Grids[Grids.length - 1].FRow = null;
	Grids[Grids.length - 1].RefreshRow(current_focus_row);	
}




////////////////////////////////////////
//
//   POSITIONING/WIDTH/HEIGHT FUNCTIONS
//
////////////////////////////////////////


function adjustFrameError(frame_error, row) {
	var table_enclosure = document.getElementById("treegrid");
	var scroll_top = Grids[Grids.length - 1].GetScrollTop();
	
	//These hold the left images
	var frame_error_top_left = document.getElementById("frame_error_top_left");
	var frame_error_bottom_left = document.getElementById("frame_error_bottom_left");
	
	if ( row.r1 ) var error_row = row.r1;
	if(!error_row) { error_row = YAHOO.util.Dom.getElementById("first_error_row"); }
	
	var row_height = Grids[Grids.length - 1].GetRowHeight(row);
		
	var pos = findPos(error_row);
	
	visibilityHidden(frame_error);
	displayBlock(frame_error);
	
	var edge_detect = detectFit(frame_error, pos[1], pos[0]);
	
	if (edge_detect == "tl" || edge_detect == "tr"){
		frame_error.style.top = pos[1] - frame_error.offsetHeight - scroll_top  + "px";
		YAHOO.util.Dom.addClass(frame_error_top_left, 'flipped');
		YAHOO.util.Dom.addClass(frame_error_bottom_left, 'flipped');
	} else if (edge_detect == "bl" || edge_detect == "br"){
		frame_error.style.top = pos[1] + row_height - scroll_top + "px";
		frame_error.style.left = pos[0] + 1 + "px";
		YAHOO.util.Dom.removeClass(frame_error_top_left, 'flipped');
		YAHOO.util.Dom.removeClass(frame_error_bottom_left, 'flipped');
	}
	
	visibilityVisible(frame_error);	
	
	fillErrorFrame();	
	frame_error_displayed = true;
}

//This function is passed values for default frame placement
//Any alternate sizing is made within
function adjustFrame(text_value, cell_width, cell_height, cell_top, cell_left, frame_type) {
	var parent = null;
	var obj = null;
	
	var scroll_top = Grids[Grids.length - 1].GetScrollTop();
	var scroll_left = Grids[Grids.length - 1].GetScrollLeft();
	
	if (frame_type == "edit") {
		if (current_frame_type == "calendar"){
			obj = document.getElementById('edit_calendar');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_calendar');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);
			
			var pos = detectFit(parent, cell_top, cell_left);
		
			obj.style.width = cell_width - 4 + "px";
			obj.style.height = cell_height - 5 + "px";
			parent.style.width = cell_width + 45 + "px";
			
			//ignores top or bottom
			if (pos == "br" || pos == "tr"){
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - 1 - 45 + "px";
			} else { 
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			}
			
			obj.value = current_text_val = text_value;
		} else if (current_frame_type == "uom"){
			obj = document.getElementById('edit_uom');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_uom');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);
			
			var pos = detectFit(parent, cell_top, cell_left);

			obj.style.width = cell_width - 4  + "px";
			obj.style.height = cell_height - 5 + "px";
			
			//ignores top or bottom
			if (pos == "br" || pos == "tr"){
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - -5 + "px";
			} else { 
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			}
			
			var dropdown = document.getElementById('uom_dropdown');
			
			//in prepration for "for"
			var check_num = NaN;
			
			if (text_value != ""){
				for(var i =0; i < uom_option_array.length; i++){
					if (text_value.match(uom_option_array[i]) != null && isNaN(check_num)){
						//tell dropdown to start at a certain index
						dropdown.selectedIndex = i;
						
						//cut out measurement in string
						var temp = new Array();
						temp = text_value.split(uom_option_array[i]);
						
						// take space out of temp
						temp_num = temp[0].split(" ");
						
						check_num = temp_num[0] * 1;
						if (isNaN(check_num) == false) {
							obj.value = current_text_val = temp_num[0];
						}
					}
				}
			} else {
				obj.value = current_text_val = text_value;
			}
		} else if (current_frame_type == "multitext") {
			obj = document.getElementById('edit_multitext');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_multitext');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);

			var pos = detectFit(parent, cell_top, cell_left);
			
			if (pos == "br") {
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left + 4 + "px";
			} else if (pos == "tr") {
				parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top + 5 + "px";
				parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left + 4 + "px"; 
			} else if (pos == "bl") {
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			} else if (pos == "tl") {
				parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top + 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			}
			
			obj.value = current_text_val = text_value;
			
			var chars = frame_edit_multitext_max_characters - current_text_val.length;
			frame_edit_multitext_current_characters = chars;
			document.getElementById('char_counter').innerHTML = '<p>' + chars + '</p>';
			document.getElementById('char_counter').style.width = chars - 2 + '%';
			
		} else if (current_frame_type == "dropdown") {
			obj = document.getElementById('edit_dropdown');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_dropdown');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);
			
			obj.style.width = cell_width  + "px";
			obj.style.height = cell_height - 1 + "px";
			
			parent.style.top = cell_top - scroll_top - 5 + "px";
			parent.style.left = cell_left - scroll_left - 4 + "px";
			
			//Take text value and match to option so it can be displayed as selected
			for (var i = 0; i < option_array.length; i++){
				if (obj.options[i].value == text_value){
					obj.selectedIndex = i;
				}
			}
		} else if (current_frame_type == "msl") {
			obj = document.getElementById('edit_msl');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_msl');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);
			
			var pos = detectFit(parent, cell_top, cell_left);
			
			if (pos == "br") {
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left + 4 + "px";
			} else if (pos == "tr") {
				parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top + 5 + "px";
				parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left + 4 + "px"; 
			} else if (pos == "bl") {
				parent.style.top = cell_top - scroll_top - 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			} else if (pos == "tl") {
				parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top + 5 + "px";
				parent.style.left = cell_left - scroll_left - 4 + "px";
			}
			
			textToPill(text_value);
			current_text_val = text_value;
		} else { //default to text popup
			obj = document.getElementById('edit_textbox');
			parent = obj.parentNode;
			var frame_edit = document.getElementById('frame_edit_textbox');
			
			visibilityHidden(frame_edit);
			displayBlock(frame_edit);
			
			obj.style.width = cell_width - 4 + "px";
			obj.style.height = cell_height - 5 + "px";
			
			parent.style.top = cell_top - scroll_top - 5 + "px";
			parent.style.left = cell_left - scroll_left - 4 + "px";
			
			obj.value = current_text_val = text_value;
		}
		
		//Display edit frame as block and set flag for frame as displayed
		visibilityVisible(frame_edit);
		frame_edit_displayed = true;
		
		if (frame_read_displayed == true){
			hideReadFrame();
			frame_edit_displayed == false
		}
			
		if(obj.select){
			obj.select();
		}
		
			if (obj && obj.focus) {
				obj.focus();
			}
			
			if (datepicker_displayed) { 
				var date_obj = document.getElementById("calendar_button");
				callTempDatepicker(date_obj)
			}
		
		return;
		
	} if (frame_type == "read" && frame_edit_displayed == false && set_frame_timer != null) {
		obj = document.getElementById('read');
		parent = obj.parentNode;
		var frame_read = document.getElementById('frame_read');
		
		visibilityHidden(frame_read);
		displayBlock(frame_read);
		
		var pos = detectFit(parent, cell_top, cell_left);
		
		if (pos == "br") {
			parent.style.top = cell_top - scroll_top - 1 + "px";
			parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left - 1 + "px";
		} else if (pos == "tr") {
			parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top - 1 + "px";
			parent.style.left = cell_left + cell_width - parent.offsetWidth - scroll_left - 1 + "px"; 
		} else if (pos == "bl") {
			parent.style.top = cell_top - scroll_top - 1 + "px";
			parent.style.left = cell_left - scroll_left - 1 + "px";
		} else if (pos == "tl") {
			parent.style.top = cell_top + cell_height - parent.offsetHeight - scroll_top - 1 + "px";
			parent.style.left = cell_left - scroll_left - 1 + "px";
		}
		
		obj.innerHTML = text_value;
		current_text_val = text_value;
		
		//Display read frame and set flag for frame as displayed
		visibilityVisible(frame_read);
		frame_read_displayed = true;
	}
			
	if (obj && obj.focus) {
		obj.focus();
	}
	
	if (datepicker_displayed) { 
		var date_obj = document.getElementById("calendar_button");
		callTempDatepicker(date_obj)
	}
	
}

//Four way edge detection
function detectFit(posObj, tgtObj_top, tgtObj_left) {
	var scroll_top = Grids[Grids.length - 1].GetScrollTop();
	var scroll_left = Grids[Grids.length - 1].GetScrollLeft();

	//get element size
	var table_enclosure = document.getElementById("treegrid");
	
	table_pos = findPos(table_enclosure);
	
	//get table width less target obj position
	var space_left = (table_enclosure.offsetWidth + table_pos[0] + scroll_left) - tgtObj_left;
	var space_bottom = (table_enclosure.offsetHeight + table_pos[1] + scroll_top) - tgtObj_top;
	
	if		(posObj.offsetWidth < space_left && posObj.offsetHeight > space_bottom) { return "tl"}
	else if	(posObj.offsetWidth > space_left && posObj.offsetHeight > space_bottom) { return "tr"}
	else if	(posObj.offsetWidth < space_left && posObj.offsetHeight < space_bottom) { return "bl"}
	else if	(posObj.offsetWidth > space_left && posObj.offsetHeight < space_bottom) { return "br"}
}

function findPos(obj) {
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}


////////////////////////////////////////
//
//        KEY EVENT FUNCTIONS
//
////////////////////////////////////////

function detectedEnter(val){
	//do nothing if val = agile_table and edit_frame_displayed
	if (val.match("edit") != null && frame_edit_displayed == true) {
		if (current_frame_type == "msl"){
			var obj = document.getElementById('search_query');
			if (obj.value != ""){
				return;
			} else {
				setValue();
				hideEditFrame();
				return;
			}		
		} else { //default
			setValue();
			hideEditFrame();
			return;
		}
	} else if (val == "agile_table" && frame_edit_displayed == false) {
		setFrame("edit");
		return;
	}
}

function detectedEsc(){
	hideEditFrame();
	hideReadFrame();
}

function detectedTab(val, shift_bool, evt){
	if (val.match("edit_uom") != null && frame_edit_displayed == true && shift_bool == false) {
		if (uom_focused == false) {
			CancelEvent(evt, 1);
			var obj = document.getElementById('uom_dropdown');
			if (obj.focus) obj.focus();
			uom_focused = true;
		}
	} else if (val.match("edit_uom") != null && frame_edit_displayed == true && shift_bool == true){
		CancelEvent(evt, 1);
		var obj = document.getElementById('edit_uom');
		if (obj.focus) obj.focus();
		if (obj.select) obj.select();
		uom_focused = false;
	} else {
		setValue();
	}
}


////////////////////////////////////////
//
//        EVENT DETECTION FUNCTIONS
//
////////////////////////////////////////

/* Need cross browser grabbing of event */
function getEvent(evt) {
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	return (evt);
}

function detectTableKeys (evt, val) {
	evt = getEvent(evt);
	var characterCode = (evt && evt.which) ? evt.which : evt.keyCode;
	var modifiers = getEventModifiers(evt);
	if (!characterCode) { return; }
	
	switch (characterCode) {
		case 9:	// > Tab 
			if (modifiers && modifiers['shift']) { detectedTab(val, true, evt); } else { detectedTab(val, false, evt); }
			break;
		case 13: // > Enter
			detectedEnter(val);
			break;
		case 27: // > Esc
			detectedEsc();
			break;
		case 37: // > Left Arrow
			break;
		case 38: // > Up Arrow
			break;
		case 39: // > Right Arrow
			break;
		case 40: // > Down Arrow
			break;
		default:
			break;
	}
}

function checkEvent(evt, val) {
	evt = getEvent(evt);
	var characterCode = (evt && evt.which) ? evt.which : evt.keyCode;
	var modifiers = getEventModifiers(evt);
	if (!characterCode) { return; }

	switch (characterCode) {
		case 9:	// > Tab
			//CancelEvent(evt, 1);
			break;
		case 13: // > Enter
			stopEvent(evt);
			CancelEvent(evt, 1);
			break;
		case 27: // > Esc
			//detectedEsc();
			break;
		case 37: // > Left Arrow
			CancelEvent(evt, 1);
			break;
		case 38: // > Up Arrow
			CancelEvent(evt, 1);
			break;
		case 39: // > Right Arrow
			CancelEvent(evt, 1);
			break;
		case 40: // > Down Arrow
			CancelEvent(evt, 1);
			break;
		default:
			CancelEvent(evt, 1);
			break;
	}
	detectTableKeys (evt, val);
}

function getEventModifiers(evt) {
	var modifier_list = {
		'shift': false,
		'ctrl': false,
		'alt': false
	}
	
	if (evt.modifiers && Event && Event.SHIFT_MASK) {
		modifier_list['shift'] = true;
	} else if (evt.shiftKey && evt.shiftKey == true) {
		modifier_list['shift'] = true;
	}

	if (evt.modifiers && Event && Event.CTRL_MASK) {
		modifier_list['ctrl'] = true;
	} else if (evt.ctrlKey && evt.ctrlKey == true) {
		modifier_list['ctrl'] = true;
	}
	
	if (evt.modifiers && Event && Event.ALT_MASK) {
		modifier_list['alt'] = true;
	} else if (evt.altKey && evt.altKey == true) {
		modifier_list['alt'] = true;
	}
	
	
	return modifier_list;
}

function detectedScroll (){
	if (frame_edit_displayed && current_frame_type != null) {
		var popupObj = "frame" + current_frame_type;
		
		if (popupObj.style.display == "block"){
			//Using return object to find height and width of td cell
			var cell_obj = Grids[Grids.length - 1].GetCell(current_focus_row, current_focus_col, 0);
			
			//Using returned position to get top and left values of td cell
			var cell_pos = findPos(cell_obj);
			
			//Passing values to size and position function
			adjustFrame(current_text_val, cell_obj.offsetWidth, cell_obj.offsetHeight, cell_pos[1], cell_pos[0]);
		}
	}			
}


////////////////////////////////////////
//
//        STOP EVENT FUNCTIONS
//
////////////////////////////////////////

/**
 * Convenience method for stopPropagation + preventDefault
 * @method stopEvent
 * @param {Event} ev the event
 * @static
 */
function stopEvent(ev) {
	this.stopPropagation(ev);
	this.preventDefault(ev);
}

/**
 * Stops event propagation
 * @method stopPropagation
 * @param {Event} ev the event
 * @static
 */
function stopPropagation(ev) {
	if (ev.stopPropagation) {
		ev.stopPropagation();
	} else {
		ev.cancelBubble = true;
	}
}

/**
 * Prevents the default behavior of the event
 * @method preventDefault
 * @param {Event} ev the event
 * @static
 */
function preventDefault(ev) {
	if (ev.preventDefault) {
		ev.preventDefault();
	} else {
		ev.returnValue = false;
	}
}


////////////////////////////////////////
//
//        TEMP FUNCTIONS
//
////////////////////////////////////////

function formatCheckAll(check_all){
	var checkbox;
	var i;
	
	if(check_all.checked == true){
		for(i = 0; i < 10; i++){
			checkbox = document.getElementById("check" + i);
			checkbox.checked = true;
		}
	} else if(check_all.checked == false){
		for(i = 0; i < 10; i++){
			checkbox = document.getElementById("check" + i);
			checkbox.checked = false;
		}
	}
	
	return;
}


function createTempErrorArray(){
	error_array[0] = new Array;
	error_array[0][0] = "row02";
	error_array[0][1] = new Array;
	error_array[0][2] = "<a class='button' onclick=changeErrorFrameContent('back',false);><span><em class='arrow_back iconic'>&nbsp;</em>&nbsp;</span></a> <a class='button' onclick=changeErrorFrameContent('next',false);><span><em class='arrow_next iconic'>&nbsp;</em>&nbsp;</span></a>";
	error_array[0][3] =	new Array;
	error_array[0][4] =	"1 error";
	
	//errors/warnings
	error_array[0][1][0] = "<p><em>Error:</em> Items with no lifecyle cannot be added to a BOM.  This row will be removed.</p>";
	
	
	//error/warning options
	error_array[0][3][0] =	"<p>&nbsp;</p>";
	
	
	error_array[1] = new Array;
	error_array[1][0] = "row03";
	error_array[1][1] = new Array;
	error_array[1][2] = "<a class='button' onclick=changeErrorFrameContent('back',false);><span><em class='arrow_back iconic'>&nbsp;</em>&nbsp;</span></a> <form name='error_nums' class='error_nums display_inline'><select name='error_nums_select' onchange='changeErrorFrameContent(null,true)'><option value='1' name='1' selected>1</option><option value='2' name='2'>2</option></select></form> <a class='button' onclick=changeErrorFrameContent('next',false);><span><em class='arrow_next iconic'>&nbsp;</em>&nbsp;</span></a>";
	error_array[1][3] = new Array;	
	error_array[1][4] =	"2 warnings";

	//errors/warnings
	error_array[1][1][0] = "<p><em>Warning:</em> Find Number 20 is already used for Item 1232-01.</p>";
	error_array[1][1][1] = "<p><em>Warning:</em> The number of reference designators, 3, does not match the quantity, 2.</p>";
	
	//error/warning options
	error_array[1][3][0] = "<p><input type='radio' class='error_radio' name='item' value='' /> Mark as resolved</p><p><input type='radio' class='error_radio' name='item' value='' /> Don't save row modifications</p><p><input type='radio' class='error_radio' name='item' value='' /> Allow this</p>";
	error_array[1][3][1] = "<p><input type='radio' class='error_radio' name='item' value='' /> Fixed by modifying</p><p><input type='radio' class='error_radio' name='item' value='' /> Don't save row modifications</p><p><input type='radio' class='error_radio' name='item' value='' /> Allow this</p>";
	
	
	
	error_array[2] = new Array;
	error_array[2][0] = "row07";
	error_array[2][1] = new Array;
	error_array[2][2] = "<a class='button' onclick=changeErrorFrameContent('back',false);><span><em class='arrow_back iconic'>&nbsp;</em>&nbsp;</span></a> <form name='error_nums' class='error_nums display_inline'><select name='error_nums_select' onchange='changeErrorFrameContent(null,true)'><option value='1' name='1' selected>1</option><option value='2' name='2'>2</option><option value='3' name='3'>3</option></select></form> <a class='button' onclick=changeErrorFrameContent('next',false);><span><em class='arrow_next iconic'>&nbsp;</em>&nbsp;</span></a>";
	error_array[2][3] =	new Array;
	error_array[2][4] =	"1 error and 2 warnings";
	
	//errors/warnings
	error_array[2][1][0] = "<p><em>Error:</em> Item 32-43-234-41 is not associated with Site Dubai</p>";
	error_array[2][1][1] = "<p><em>Warning:</em> Find Number 20 is already used for Item 32-43-234-41.</p>";
	error_array[2][1][2] = "<p><em>Warning:</em> The number of reference designators, 3, does not match the quantity, 2.</p>";

	//error/warning options
	error_array[2][3][0] =	"<p><input type='radio' class='error_radio' name='item' /> Add the Site Dubai association</p><p><input type='radio' class='error_radio' name='item' /> Remove this row</p>";
	error_array[2][3][1] =	"<p><input type='radio' class='error_radio' name='item' value='' /> Mark as resolved</p><p><input type='radio' class='error_radio' name='item' value='' /> Don't save row modifications</p><p><input type='radio' class='error_radio' name='item' value='' /> Allow this</p>";
	error_array[2][3][2] =	"<p><input type='radio' class='error_radio' name='item' value='' /> Fixed by modifying</p><p><input type='radio' class='error_radio' name='item' value='' /> Don't save row modifications</p><p><input type='radio' class='error_radio' name='item' value='' /> Allow this</p>";
	
}

function createTempDatepicker() {
	var temp_datepicker = make("img","temp_datepicker", "temp_datepicker");
	
	var frame_enclosure = document.getElementById("frame_enclosure");
	frame_enclosure.appendChild(temp_datepicker);
}

function callTempDatepicker(obj){
	var temp_datepicker = document.getElementById("temp_datepicker");
	
	var obj_pos = findPos(obj);
	
	var pos = detectFit(temp_datepicker, obj_pos[1], obj_pos[0]);
	
	//shift above of below calendar edit frame
	if (pos == "tr" || pos == "tl") {
		temp_datepicker.style.top = obj_pos[1] - temp_datepicker.offsetHeight + "px";
	} else {
		temp_datepicker.style.top = obj_pos[1] + 2 + obj.offsetHeight + "px";
	}
	
	temp_datepicker.style.left = obj_pos[0] - 182 + "px";
	
	datepicker_displayed = true;
}

function hideTempDatepicker(){
	var temp_datepicker = document.getElementById("temp_datepicker");
	if (temp_datepicker){
		temp_datepicker.style.left = -1000 + "px";
		temp_datepicker.style.top = -1000 + "px";
	}
}

////////////////////////////////////////
//
//        TABLE ACTIONS MENU
//
////////////////////////////////////////
var moreActionsMenuItems = [
	[
		{ text: "Undo", helptext:"Ctrl + Z", url: "" },
		{ text: "Redo", helptext:"Ctrl + Y", url: "" },
		{ text: "Fill Up", helptext:"Ctrl + Shift + F", url: "" },
		{ text: "Fill Down", helptext:"Ctrl + Shift + F", url: "" },
	],
	
	[
		{ text: "Sort Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"multi_col_sort"} },
		{ text: "Filter Rows", url: "#", onclick:{fn:callTableViewsPalette, obj:"filter_table"} },
		{ text: "Format Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"format_cols"} },
	]
];

buildMoreActions = function(p_oEvent) {
	
	var moreActionsMenu = new YAHOO.widget.Menu("moreActionsMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleMoreActionsMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (moreActionsMenu.getItems() == 0) {
			moreActionsMenu.addItems(moreActionsMenuItems);
			moreActionsMenu.render(document.body);
			moreActionsMenu.cfg.setProperty("context", ["toggle_more_actions_menu", "tl","bl"]);		
		}
		moreActionsMenu.align("tl", "bl"); //this function MUST be used with the context property
		moreActionsMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_more_actions_menu", "mousedown", toggleMoreActionsMenu);
}

YAHOO.util.Event.addListener(window, "load", buildMoreActions);

////////////////////////////////////////
//
//        VIEW ACTIONS MENU
//
////////////////////////////////////////
var viewActionsMenuItems = [
	[
		{ text: "Edit", url: "#", onclick:{fn:callViewEditor, obj:"multi_col_sort"} },
		{ text: "Save", url: "" },
		{ text: "Save As...", url: "" },
	],
	[
		{ text: "Manage", url: "#", onclick:{fn:callViewManager} },
		{ text: "Set as Default", url: "" },
	]
];

buildViewActions = function(p_oEvent) {
	
	var viewActionsMenu = new YAHOO.widget.Menu("viewActionsMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleViewActionsMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (viewActionsMenu.getItems() == 0) {
			viewActionsMenu.addItems(viewActionsMenuItems);
			viewActionsMenu.render(document.body);
			viewActionsMenu.cfg.setProperty("context", ["toggle_view_actions_menu", "tl","bl"]);		
		}
		viewActionsMenu.align("tr", "br"); //this function MUST be used with the context property
		viewActionsMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_view_actions_menu", "mousedown", toggleViewActionsMenu);
}

YAHOO.util.Event.addListener(window, "load", buildViewActions);