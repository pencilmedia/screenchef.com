////////////////////////////////////////
//
//        PALETTE EXTENSION FUNCTIONS
//
////////////////////////////////////////


////////////////////////////////////////
//        PALETTE TITLE BAR EXTENSIONS
////////////////////////////////////////

// TABLE PALETTE TITLE EXTRA/////////////////////////////////////////////////
function createTablePaletteTitleExtra(){
	var title_extra = "<select name=''><option value='Admin View 1 (default)'>Admin View 1 (default)</option><option value='Admin View 2'>Admin View 2</option><option value='Admin View 3'>Admin View 3</option></select> <a href='#' class='button'><span><em class='iconic view_details'>&nbsp;</em></span></a> <a href='#' class='button'><span>Save</span></a> <a href='#' class='button'><span>Save As</span></a>";
	extendGlobalPaletteTitlebar(title_extra);
}

////////////////////////////////////////
//        PALETTE TAB BAR EXTENSIONS
////////////////////////////////////////

// TABLE PALETTE VIEWS TABS/////////////////////////////////////////////////
function createTablePaletteViewsTabs(tab_section){
	var tabs;
	switch(tab_section){
		case 'multi_col_sort':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callTableViewsPalette('','','multi_col_sort') class='selected'><span>Sort Columns</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','filter_table')><span>Filter Rows</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','format_cols')><span>Format Columns</span></a></li></ul>";
			break;
		case 'format_cols':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callTableViewsPalette('','','multi_col_sort')><span>Sort Columns</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','filter_table')><span>Filter Rows</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','format_cols') class='selected'><span>Format Columns</span></a></li></ul>";
			break;
		case 'filter_table':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callTableViewsPalette('','','multi_col_sort')><span>Sort Columns</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','filter_table') class='selected'><span>Filter Rows</span></a></li><li><a href='#' onclick=callTableViewsPalette('','','format_cols')><span>Format Columns</span></a></li></ul>";
			break;
		default:
			break;
	}
	
	extendGlobalPaletteTabs(tabs);
}

// TABLE PALETTE EDITOR TABS/////////////////////////////////////////////////
function createTablePaletteEditorTabs(tab_section){
	var tabs;
	switch(tab_section){
		case 'multi_col_sort':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callViewEditor('','','multi_col_sort') class='selected'><span>Sort Columns</span></a></li><li><a href='#' onclick=callViewEditor('','','filter_table')><span>Filter Rows</span></a></li><li><a href='#' onclick=callViewEditor('','','format_cols')><span>Format Columns</span></a></li></ul>";
			break;
		case 'format_cols':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callViewEditor('','','multi_col_sort')><span>Sort Columns</span></a></li><li><a href='#' onclick=callViewEditor('','','filter_table')><span>Filter Rows</span></a></li><li><a href='#' onclick=callViewEditor('','','format_cols') class='selected'><span>Format Columns</span></a></li></ul>";
			break;
		case 'filter_table':
			tabs = "<ul class='palette_tabs'><li><a href='#' onclick=callViewEditor('','','multi_col_sort')><span>Sort Columns</span></a></li><li><a href='#' onclick=callViewEditor('','','filter_table') class='selected'><span>Filter Rows</span></a></li><li><a href='#' onclick=callViewEditor('','','format_cols')><span>Format Columns</span></a></li></ul>";
			break;
		default:
			break;
	}
	extendGlobalPaletteTabs(tabs);
}

////////////////////////////////////////
//        PALETTE DMS EXTENSIONS
////////////////////////////////////////

// ERROR DMS/////////////////////////////////////////////////
function createPaletteDMSError(){
	var content = make("div");
	
	var dms_div = make("div","errorbar palette_error","errorbar");
	var dms_p = make("p","bgd","error");
	dms_p.innerHTML = "&nbsp;";
	var dms_text = make("p","text");
	var dms_span = make("span","dms_error_icon");
	var dms_em = make("em","","palette_dms_text");
	
	dms_span.innerHTML = "&nbsp;";
	
	dms_text.appendChild(dms_span);
	dms_text.appendChild(dms_em);
	
	dms_div.appendChild(dms_p);
	dms_div.appendChild(dms_text);
	
	content.appendChild(dms_div);
	
	extendGlobalPaletteDMS(content);
}

// FYI DMS/////////////////////////////////////////////////
function createPaletteDMSFYI(){
	var content = make("div");
	
	var dms_div = make("div","fyibar palette_fyi","fyibar");
	var dms_p = make("p","bgd","fyi");
	dms_p.innerHTML = "&nbsp;";
	var dms_text = make("p","text");
	var dms_span = make("span","","palette_dms_text");
	
	dms_text.appendChild(dms_span);
	
	dms_div.appendChild(dms_p);
	dms_div.appendChild(dms_text);
	
	content.appendChild(dms_div);
	
	extendGlobalPaletteDMS(content);
}

////////////////////////////////////////
//        PALETTE BCD EXTENSIONS
////////////////////////////////////////

function presetExtension(preset){
	var content;
	switch (preset) {
		case "multi_col_sort":
			content = createMultiColSortExt();
			break;
		case "format_cols":
			content = createFormatCols();
			break;
		case "filter_table":
			content = createFilterTable();
			break;
		case "table_palette_views_footer":
			content = createTablePaletteViewsFooter();
			break;
		case "table_palette_editor_footer":
			content = createTablePaletteEditorFooter();
			break;
		default:
			break;
	}
	
	extendGlobalPalette(content);
}

// MESSAGE AREA/////////////////////////////////////////////////
function createMessageArea(message){
	var content = make("div","palette_message_area nodrag");
	var content_p = make("p","nodrag");
	content_p.innerHTML = message;
	content.appendChild(content_p);
	
	return content;
}

// MULTI-COLUMN SORT/////////////////////////////////////////////////
function createMultiColSortExt(){
	var content = make("div","multi_sort_col_content nodrag","multi_sort_col_content");
	
	var content_labels = make("div","multi_sort_col_labels nodrag");
	var content_labels_left = make("div","multi_sort_col_left nodrag");
	var content_labels_right = make("div","multi_sort_col_right nodrag");
	
	var content_label_left_p = make("p","nodrag");
	content_label_left_p.innerHTML = "Attribute";
	
	var content_label_right_p = make("p","nodrag");
	content_label_right_p.innerHTML = "Sort Order";
	
	content_labels_left.appendChild(content_label_left_p);
	content_labels_right.appendChild(content_label_right_p);
	
	content_labels.appendChild(content_labels_left);
	content_labels.appendChild(content_labels_right);
	
	var content0 = make("div","multi_sort_col_content0 nodrag");
	var content1 = make("div","multi_sort_col_content1 nodrag");
	var content2 = make("div","multi_sort_col_content2 nodrag");
	
	var content0_left = make("div","multi_sort_col_left nodrag");
	var content1_left = make("div","multi_sort_col_left nodrag");
	var content2_left = make("div","multi_sort_col_left nodrag");
	
	var content0_right = make("div","multi_sort_col_right nodrag");
	var content1_right = make("div","multi_sort_col_right nodrag");
	var content2_right = make("div","multi_sort_col_right nodrag");
	
	var content_left = make("div","multi_sort_col_left nodrag");
	var content_right = make("div","multi_sort_col_right nodrag");
	
	var select0_p = make("p","nodrag");
	var select0 = make("select","nodrag");
	for (var i=0; i < col_array.length; i++){
		select0.options[i] = new Option(col_array[i],col_array[i]);
		if (i == 0) {select0.options[i].selected = "selected";}
	}
	select0_p.appendChild(select0);
	
	var select1_p = make("p","nodrag");
	var select1 = make("select","nodrag");
	for (var i=0; i < col_array.length; i++){
		select1.options[i] = new Option(col_array[i],col_array[i]);
		if (i == 2) {select1.options[i].selected = "selected";}
	}
	select1_p.appendChild(select1);
	
	var select2_p = make("p","nodrag");
	var select2 = make("select","nodrag");
	for (var i=0; i < col_array.length; i++){
		select2.options[i] = new Option(col_array[i],col_array[i]);
		if (i == 4) {select2.options[i].selected = "selected";}
	}
	select2_p.appendChild(select2);
	
	content0_left.appendChild(select0_p);
	content1_left.appendChild(select1_p);
	content2_left.appendChild(select2_p);
	
	var direction0_p = make("p","nodrag");
	var direction0 = make("select","nodrag");
	direction0.options[0] = new Option("Ascending","Ascending");
	direction0.options[1] = new Option("Descending","Descending");
	direction0_p.appendChild(direction0);
	
	var direction1_p = make("p","nodrag");
	var direction1 = make("select","nodrag");
	direction1.options[0] = new Option("Ascending","Ascending");
	direction1.options[1] = new Option("Descending","Descending");
	direction1_p.appendChild(direction1);
	
	var direction2_p = make("p","nodrag");
	var direction2 = make("select","nodrag");
	direction2.options[0] = new Option("Ascending","Ascending");
	direction2.options[1] = new Option("Descending","Descending");
	direction2_p.appendChild(direction2);
	
	content0_right.appendChild(direction0_p);
	content1_right.appendChild(direction1_p);
	content2_right.appendChild(direction2_p);
	
	content0.appendChild(content0_left);
	content0.appendChild(content0_right);
	
	content1.appendChild(content1_left);
	content1.appendChild(content1_right);
	
	content2.appendChild(content2_left);
	content2.appendChild(content2_right);
		
	content.appendChild(content_labels);
	content.appendChild(content0);
	content.appendChild(content1);
	content.appendChild(content2);
	
	return content;
}

// FORMAT COLUMNS/////////////////////////////////////////////////
function createFormatCols(){
	var content = make("div","format_cols_content","format_cols_content");
	
	var format_div = make("div","format_div nodrag","format_div");
	var format_table = make("table","format_table nodrag","format_table");
	var format_thead =make("thead","nodrag");
	var tr_thead = make("tr","nodrag");
	
	var th_handle = make("th","handle nodrag");
	th_handle.innerHTML = "&nbsp;";
	var th_0 = make("th","fixed nodrag");
	th_0.innerHTML = "Order";
	var th_1 = make("th","fixed nodrag");
	th_1.innerHTML = "Show";
	var th_2 = make("th","fixed nodrag");
	th_2.innerHTML = "Freeze";
	var th_3 = make("th","nodrag");
	th_3.innerHTML = "Column Name";
	
	tr_thead.appendChild(th_handle);
	tr_thead.appendChild(th_0);
	tr_thead.appendChild(th_1);
	tr_thead.appendChild(th_2);
	tr_thead.appendChild(th_3);
	
	format_thead.appendChild(tr_thead);
	
	var format_tbody = make("tbody","nodrag");
	var tr_00 = make("tr","nodrag");
	
	var td_00_handle = make("td","handle nodrag");
	td_00_handle.innerHTML = "&nbsp;";
	var td_00 = make("td","fixed nodrag");
	td_00.innerHTML = "&nbsp;";
	var td_01 = make("td","fixed nodrag");
	td_01.innerHTML = "&nbsp;";
	var td_02 = make("td","fixed nodrag");
	td_02.innerHTML = "<input type='radio' class='radio' checked />";
	var td_03 = make("td","nodrag");
	td_03.innerHTML = "No Columns";
	
	tr_00.appendChild(td_00_handle);
	tr_00.appendChild(td_00);
	tr_00.appendChild(td_01);
	tr_00.appendChild(td_02);
	tr_00.appendChild(td_03);
	
	var tr_01 = make("tr","nodrag");
	
	var td_01_handle = make("td","handle nodrag");
	td_01_handle.innerHTML = "&nbsp;";
	var td_010 = make("td","fixed nodrag");
	td_010.innerHTML = "&nbsp;";
	var td_011 = make("td","fixed nodrag");
	td_011.innerHTML = "<input type='checkbox' class='checkbox' onclick='formatCheckAll(this);' />";
	var td_012 = make("td","fixed nodrag");
	td_012.innerHTML = "&nbsp;";
	var td_013 = make("td","nodrag");
	td_013.innerHTML = "All Columns";
	
	tr_01.appendChild(td_01_handle);
	tr_01.appendChild(td_010);
	tr_01.appendChild(td_011);
	tr_01.appendChild(td_012);
	tr_01.appendChild(td_013);
	
	var tr_02 = make("tr","nodrag");
	
	var td_02_handle = make("td","handle nodrag");
	td_02_handle.innerHTML = "&nbsp;";
	var td_020 = make("td","fixed nodrag");
	td_020.innerHTML = "1";
	var td_021 = make("td","fixed nodrag");
	td_021.innerHTML = "<input type='checkbox' class='checkbox' id='check0' />";
	var td_022 = make("td","fixed nodrag");
	td_022.innerHTML = "<input type='radio' class='radio' />";
	var td_023 = make("td","nodrag");
	td_023.innerHTML = "Item Number";
	
	tr_02.appendChild(td_02_handle);
	tr_02.appendChild(td_020);
	tr_02.appendChild(td_021);
	tr_02.appendChild(td_022);
	tr_02.appendChild(td_023);
	
	var tr_03 = make("tr","nodrag");
	
	var td_03_handle = make("td","handle nodrag");
	td_03_handle.innerHTML = "&nbsp;";
	var td_030 = make("td","fixed nodrag");
	td_030.innerHTML = "2";
	var td_031 = make("td","fixed nodrag");
	td_031.innerHTML = "<input type='checkbox' class='checkbox' id='check1' />";
	var td_032 = make("td","fixed nodrag");
	td_032.innerHTML = "<input type='radio' class='radio' />";
	var td_033 = make("td","nodrag");
	td_033.innerHTML = "Old Item Description";
	
	tr_03.appendChild(td_03_handle);
	tr_03.appendChild(td_030);
	tr_03.appendChild(td_031);
	tr_03.appendChild(td_032);
	tr_03.appendChild(td_033);
	
	var tr_04 = make("tr","nodrag");
	
	var td_04_handle = make("td","handle nodrag");
	td_04_handle.innerHTML = "&nbsp;";
	var td_040 = make("td","fixed nodrag");
	td_040.innerHTML = "3";
	var td_041 = make("td","fixed nodrag");
	td_041.innerHTML = "<input type='checkbox' class='checkbox' id='check2' />";
	var td_042 = make("td","fixed nodrag");
	td_042.innerHTML = "<input type='radio' class='radio' />";
	var td_043 = make("td","nodrag");
	td_043.innerHTML = "New Item Description";
	
	tr_04.appendChild(td_04_handle);
	tr_04.appendChild(td_040);
	tr_04.appendChild(td_041);
	tr_04.appendChild(td_042);
	tr_04.appendChild(td_043);
	
	var tr_05 = make("tr","nodrag");
	
	var td_05_handle = make("td","handle nodrag");
	td_05_handle.innerHTML = "&nbsp;";
	var td_050 = make("td","fixed nodrag");
	td_050.innerHTML = "4";
	var td_051 = make("td","fixed nodrag");
	td_051.innerHTML = "<input type='checkbox' class='checkbox' id='check3' />";
	var td_052 = make("td","fixed nodrag");
	td_052.innerHTML = "<input type='radio' class='radio' />";
	var td_053 = make("td","nodrag");
	td_053.innerHTML = "New Item Description";
	
	tr_05.appendChild(td_05_handle);
	tr_05.appendChild(td_050);
	tr_05.appendChild(td_051);
	tr_05.appendChild(td_052);
	tr_05.appendChild(td_053);
	
	var tr_06 = make("tr","nodrag");
	
	var td_06_handle = make("td","handle nodrag");
	td_06_handle.innerHTML = "&nbsp;";
	var td_060 = make("td","fixed nodrag");
	td_060.innerHTML = "5";
	var td_061 = make("td","fixed nodrag");
	td_061.innerHTML = "<input type='checkbox' class='checkbox' id='check4' />";
	var td_062 = make("td","fixed nodrag");
	td_062.innerHTML = "<input type='radio' class='radio' />";
	var td_063 = make("td","nodrag");
	td_063.innerHTML = "Old Rev";
	
	tr_06.appendChild(td_06_handle);
	tr_06.appendChild(td_060);
	tr_06.appendChild(td_061);
	tr_06.appendChild(td_062);
	tr_06.appendChild(td_063);
	
	var tr_07 = make("tr","nodrag");
	
	var td_07_handle = make("td","handle nodrag");
	td_07_handle.innerHTML = "&nbsp;";
	var td_070 = make("td","fixed nodrag");
	td_070.innerHTML = "6";
	var td_071 = make("td","fixed nodrag");
	td_071.innerHTML = "<input type='checkbox' class='checkbox' id='check5' />";
	var td_072 = make("td","fixed nodrag");
	td_072.innerHTML = "<input type='radio' class='radio' />";
	var td_073 = make("td","nodrag");
	td_073.innerHTML = "New Rev";
	
	tr_07.appendChild(td_07_handle);
	tr_07.appendChild(td_070);
	tr_07.appendChild(td_071);
	tr_07.appendChild(td_072);
	tr_07.appendChild(td_073);
	
	var tr_08 = make("tr","nodrag");
	
	var td_08_handle = make("td","handle nodrag");
	td_08_handle.innerHTML = "&nbsp;";
	var td_080 = make("td","fixed nodrag");
	td_080.innerHTML = "7";
	var td_081 = make("td","fixed nodrag");
	td_081.innerHTML = "<input type='checkbox' class='checkbox' id='check6' />";
	var td_082 = make("td","fixed nodrag");
	td_082.innerHTML = "<input type='radio' class='radio' />";
	var td_083 = make("td","nodrag");
	td_083.innerHTML = "Old Lifecycle Phase";
	
	tr_08.appendChild(td_08_handle);
	tr_08.appendChild(td_080);
	tr_08.appendChild(td_081);
	tr_08.appendChild(td_082);
	tr_08.appendChild(td_083);
	
	var tr_09 = make("tr","nodrag");
	
	var td_09_handle = make("td","handle nodrag");
	td_09_handle.innerHTML = "&nbsp;";
	var td_090 = make("td","fixed nodrag");
	td_090.innerHTML = "8";
	var td_091 = make("td","fixed nodrag");
	td_091.innerHTML = "<input type='checkbox' class='checkbox' id='check7' />";
	var td_092 = make("td","fixed nodrag");
	td_092.innerHTML = "<input type='radio' class='radio' />";
	var td_093 = make("td","nodrag");
	td_093.innerHTML = "New Lifecycle Phase";
	
	tr_09.appendChild(td_09_handle);
	tr_09.appendChild(td_090);
	tr_09.appendChild(td_091);
	tr_09.appendChild(td_092);
	tr_09.appendChild(td_093);
	
	var tr_10 = make("tr","nodrag");
	
	var td_10_handle = make("td","handle nodrag");
	td_10_handle.innerHTML = "&nbsp;";
	var td_100 = make("td","fixed nodrag");
	td_100.innerHTML = "9";
	var td_101 = make("td","fixed nodrag");
	td_101.innerHTML = "<input type='checkbox' class='checkbox' id='check8' />";
	var td_102 = make("td","fixed nodrag");
	td_102.innerHTML = "<input type='radio' class='radio' />";
	var td_103 = make("td","nodrag");
	td_103.innerHTML = "Effective Date";
	
	tr_10.appendChild(td_10_handle);
	tr_10.appendChild(td_100);
	tr_10.appendChild(td_101);
	tr_10.appendChild(td_102);
	tr_10.appendChild(td_103);
	
	var tr_11 = make("tr","nodrag");
	
	var td_11_handle = make("td","handle nodrag");
	td_11_handle.innerHTML = "&nbsp;";
	var td_110 = make("td","fixed nodrag");
	td_110.innerHTML = "10";
	var td_111 = make("td","fixed nodrag");
	td_111.innerHTML = "<input type='checkbox' class='checkbox' id='check9' />";
	var td_112 = make("td","fixed nodrag");
	td_112.innerHTML = "<input type='radio' class='radio' />";
	var td_113 = make("td","nodrag");
	td_113.innerHTML = "Mass";
	
	tr_11.appendChild(td_11_handle);
	tr_11.appendChild(td_110);
	tr_11.appendChild(td_111);
	tr_11.appendChild(td_112);
	tr_11.appendChild(td_113);
	
	var tr_12 = make("tr","nodrag");
	
	var td_12_handle = make("td","handle nodrag");
	td_12_handle.innerHTML = "&nbsp;";
	var td_120 = make("td","fixed nodrag");
	td_120.innerHTML = "11";
	var td_121 = make("td","fixed nodrag");
	td_121.innerHTML = "<input type='checkbox' class='checkbox' id='check10' />";
	var td_122 = make("td","fixed");
	td_122.innerHTML = "<input type='radio' class='radio' />";
	var td_123 = make("td","nodrag");
	td_123.innerHTML = "Product Lines";
	
	tr_12.appendChild(td_12_handle);
	tr_12.appendChild(td_120);
	tr_12.appendChild(td_121);
	tr_12.appendChild(td_122);
	tr_12.appendChild(td_123);
	
	format_tbody.appendChild(tr_00);
	format_tbody.appendChild(tr_01);
	format_tbody.appendChild(tr_02);
	format_tbody.appendChild(tr_03);
	format_tbody.appendChild(tr_04);
	format_tbody.appendChild(tr_05);
	format_tbody.appendChild(tr_06);
	format_tbody.appendChild(tr_07);
	format_tbody.appendChild(tr_08);
	format_tbody.appendChild(tr_09);
	format_tbody.appendChild(tr_10);
	format_tbody.appendChild(tr_11);
	format_tbody.appendChild(tr_12);
	
	format_table.appendChild(format_thead);
	format_table.appendChild(format_tbody);
	
	format_div.appendChild(format_table);

	content.appendChild(format_div);
	
	var drag_drop_icon = make("div","drag_drop_icon");
	drag_drop_icon.innerHTML = "&nbsp;";
	
	var drag_drop_line = make("div","drag_drop_line");
	drag_drop_line.innerHTML ="&nbsp;";
	
	content.appendChild(drag_drop_icon);
	content.appendChild(drag_drop_line);
	
	return content;
}

// FILTER TABLE/////////////////////////////////////////////////
function createFilterTable(){
	var content_wrapper = make("div","filter_table_content_wrapper nodrag","filter_table_content_wrapper");
	var content_align = make("div","filter_table_content_align nodrag","filter_table_content_align");
	var content = make("div","filter_table_content nodrag","filter_table_content");
		
	var message = make("p","directions nodrag");
	message.innerHTML = "Show data that matches <select name=''><option value='all'>all</option><option value='one'>any</option></select> of the following:";
	content.appendChild(message);
	
	
	//FILTER_OPTIONS_01
	var filter_options_01 = make("div","filter_options nodrag");
	
	var filter_options_01_icon = make("div","filter_icon nodrag");
	var filter_options_01_attributes = make("div","filter_attributes nodrag");
	var filter_options_01_operator = make("div","filter_operator nodrag");
	var filter_options_01_value = make("div","filter_value nodrag");
	
	var filter_options_01_attributes_inner = make("select","nodrag");
	var filter_options_01_operator_inner = make("select","nodrag");
	var filter_options_01_value_inner = make("select","nodrag");
	
	filter_options_01_attributes.appendChild(filter_options_01_attributes_inner);
	filter_options_01_operator.appendChild(filter_options_01_operator_inner);
	filter_options_01_value.appendChild(filter_options_01_value_inner);
	
	var filter_options_01_button_remove = make("div","button_remove nodrag");
	var filter_options_01_button_add = make("div","button_add nodrag");
	
	var filter_options_01_button_remove_a = make("a","button nodrag");
	var filter_options_01_button_remove_span = make("span","nodrag");
	var filter_options_01_button_remove_em = make("em","remove iconic nodrag");
	filter_options_01_button_remove_em.innerHTML = "&nbsp;";
	var filter_options_01_button_remove_em_space = document.createTextNode("\xa0");
	filter_options_01_button_remove_span.appendChild(filter_options_01_button_remove_em);
	filter_options_01_button_remove_span.appendChild(filter_options_01_button_remove_em_space);
	filter_options_01_button_remove_a.appendChild(filter_options_01_button_remove_span);
	filter_options_01_button_remove.appendChild(filter_options_01_button_remove_a);
	
	var filter_options_01_button_add_a = make("a","button nodrag");
	var filter_options_01_button_add_span = make("span","nodrag");
	var filter_options_01_button_add_em = make("em","add iconic nodrag");
	filter_options_01_button_add_em.innerHTML = "&nbsp;";
	var filter_options_01_button_add_em_space = document.createTextNode("\xa0");
	filter_options_01_button_add_span.appendChild(filter_options_01_button_add_em);
	filter_options_01_button_add_span.appendChild(filter_options_01_button_add_em_space);
	filter_options_01_button_add_a.appendChild(filter_options_01_button_add_span);
	filter_options_01_button_add.appendChild(filter_options_01_button_add_a);
	
	filter_options_01.appendChild(filter_options_01_icon);
	filter_options_01.appendChild(filter_options_01_attributes);
	filter_options_01.appendChild(filter_options_01_operator);
	filter_options_01.appendChild(filter_options_01_value);
	filter_options_01.appendChild(filter_options_01_button_remove);
	filter_options_01.appendChild(filter_options_01_button_add);
	
	content.appendChild(filter_options_01);
	
	//FILTER_OPTIONS_02
	var filter_options_02 = make("div","filter_options nodrag");
	
	var filter_options_02_icon = make("div","filter_icon nodrag");
	var filter_options_02_attributes = make("div","filter_attributes nodrag");
	var filter_options_02_operator = make("div","filter_operator nodrag");
	var filter_options_02_value = make("div","filter_value between_1 nodrag");
	
	var filter_options_02_icon_span = make("span","error_icon");
	filter_options_02_icon.appendChild(filter_options_02_icon_span);
	
	var filter_options_02_attributes_inner = make("select","nodrag");
	var filter_options_02_operator_inner = make("select","nodrag");
	filter_options_02_operator_inner.options[0] = new Option("between","That is between");
	var filter_options_02_value_inner = make("input","nodrag text addr");
	
	var filter_options_02_button_addr_a = make("a","button nodrag");
	var filter_options_02_button_addr_span = make("span","nodrag");
	var filter_options_02_button_addr_em = make("em","calendar iconic nodrag");
	filter_options_02_button_addr_em.innerHTML = "&nbsp;";
	var filter_options_02_button_addr_em_space = document.createTextNode("\xa0");
	filter_options_02_button_addr_span.appendChild(filter_options_02_button_addr_em);
	filter_options_02_button_addr_span.appendChild(filter_options_02_button_addr_em_space);
	filter_options_02_button_addr_a.appendChild(filter_options_02_button_addr_span);
		
	var filter_options_02_value_break = make("br","nodrag");
	var filter_options_02_value_error = make("span","nodrag");
	filter_options_02_value_error.innerHTML = "Error";
	
	filter_options_02_attributes.appendChild(filter_options_02_attributes_inner);
	filter_options_02_operator.appendChild(filter_options_02_operator_inner);
	filter_options_02_value.appendChild(filter_options_02_value_inner);
	filter_options_02_value.appendChild(filter_options_02_button_addr_a);
	filter_options_02_value.appendChild(filter_options_02_value_break);
	filter_options_02_value.appendChild(filter_options_02_value_error);
	
	var filter_options_02_button_remove = make("div","button_remove nodrag");
	var filter_options_02_button_add = make("div","button_add nodrag");
	
	var filter_options_02_button_remove_a = make("a","button nodrag");
	var filter_options_02_button_remove_span = make("span","nodrag");
	var filter_options_02_button_remove_em = make("em","remove iconic nodrag");
	filter_options_02_button_remove_em.innerHTML = "&nbsp;";
	var filter_options_02_button_remove_em_space = document.createTextNode("\xa0");
	filter_options_02_button_remove_span.appendChild(filter_options_02_button_remove_em);
	filter_options_02_button_remove_span.appendChild(filter_options_02_button_remove_em_space);
	filter_options_02_button_remove_a.appendChild(filter_options_02_button_remove_span);
	filter_options_02_button_remove.appendChild(filter_options_02_button_remove_a);
		
	var filter_options_02_button_add_a = make("a","button nodrag");
	var filter_options_02_button_add_span = make("span","nodrag");
	var filter_options_02_button_add_em = make("em","add iconic nodrag");
	filter_options_02_button_add_em.innerHTML = "&nbsp;";
	var filter_options_02_button_add_em_space = document.createTextNode("\xa0");
	filter_options_02_button_add_span.appendChild(filter_options_02_button_add_em);
	filter_options_02_button_add_span.appendChild(filter_options_02_button_add_em_space);
	filter_options_02_button_add_a.appendChild(filter_options_02_button_add_span);
	filter_options_02_button_add.appendChild(filter_options_02_button_add_a);
	
	filter_options_02.appendChild(filter_options_02_icon);
	filter_options_02.appendChild(filter_options_02_attributes);
	filter_options_02.appendChild(filter_options_02_operator);
	filter_options_02.appendChild(filter_options_02_value);
	filter_options_02.appendChild(filter_options_02_button_remove);
	filter_options_02.appendChild(filter_options_02_button_add);
	
	content.appendChild(filter_options_02);
	
	//FILTER_OPTIONS_02a
	var filter_options_02a = make("div","filter_options nodrag","filter_content_container");
	
	var filter_options_02a_icon = make("div","filter_icon nodrag");
	var filter_options_02a_attributes = make("div","filter_attributes nodrag");
	var filter_options_02a_operator = make("div","filter_operator nodrag");
	var filter_options_02a_value = make("div","filter_value between_2 nodrag");
	
	filter_options_02a_attributes.innerHTML = "&nbsp;";
	filter_options_02a_operator.innerHTML = "&nbsp;";
	var filter_options_02a_value_inner = make("input","nodrag text addr");
	
	var filter_options_02a_button_addr_a = make("a","button nodrag");
	var filter_options_02a_button_addr_span = make("span","nodrag");
	var filter_options_02a_button_addr_em = make("em","calendar iconic nodrag");
	filter_options_02a_button_addr_em.innerHTML = "&nbsp;";
	var filter_options_02a_button_addr_em_space = document.createTextNode("\xa0");
	filter_options_02a_button_addr_span.appendChild(filter_options_02a_button_addr_em);
	filter_options_02a_button_addr_span.appendChild(filter_options_02a_button_addr_em_space);
	filter_options_02a_button_addr_a.appendChild(filter_options_02a_button_addr_span);
	
	var filter_options_02a_value_break = make("br","nodrag");
	var filter_options_02a_value_error = make("span","nodrag");
	filter_options_02a_value_error.innerHTML = "Error";
	
	filter_options_02a_value.appendChild(filter_options_02a_value_inner);
	filter_options_02a_value.appendChild(filter_options_02a_button_addr_a);
	filter_options_02a_value.appendChild(filter_options_02a_value_break);
	filter_options_02a_value.appendChild(filter_options_02a_value_error);
	
	var filter_options_02a_button_remove = make("div","button_remove nodrag");
	var filter_options_02a_button_add = make("div","button_add nodrag");
		
	filter_options_02a_button_remove.innerHTML = "&nbsp;";
	filter_options_02a_button_add.innerHTML = "&nbsp;";
	
	filter_options_02a.appendChild(filter_options_02a_icon);
	filter_options_02a.appendChild(filter_options_02a_attributes);
	filter_options_02a.appendChild(filter_options_02a_operator);
	filter_options_02a.appendChild(filter_options_02a_value);
	filter_options_02a.appendChild(filter_options_02a_button_add);
	filter_options_02a.appendChild(filter_options_02a_button_remove);
	
	content.appendChild(filter_options_02a);
	
	//FILTER_OPTIONS_03
	var filter_options_03 = make("div","filter_options nodrag");
	
	var filter_options_03_icon = make("div","filter_icon nodrag");
	var filter_options_03_attributes = make("div","filter_attributes nodrag");
	var filter_options_03_operator = make("div","filter_operator nodrag");
	var filter_options_03_value = make("div","filter_value nodrag");
	
	var filter_options_03_attributes_inner = make("select","nodrag");
	var filter_options_03_operator_inner = make("select","nodrag");
	var filter_options_03_value_inner = make("div","nodrag");
	//ANTHONY IS THE BEST
	//filter_options_03_value_inner.innerHTML = "<input value='' id='amtest' class='text weight nodrag' onfocus='displayPaletteMSL(this);' /><select class='weight nodrag'></select>";
	filter_options_03_value_inner.innerHTML = "<input value='' id='amtest' class='text weight nodrag' onfocus='displayPaletteMSL(this);' style='width:198px;' />";
	
	filter_options_03_attributes.appendChild(filter_options_03_attributes_inner);
	filter_options_03_operator.appendChild(filter_options_03_operator_inner);
	filter_options_03_value.appendChild(filter_options_03_value_inner);
	
	var filter_options_03_button_remove = make("div","button_remove nodrag");
	var filter_options_03_button_add = make("div","button_add nodrag");
	
	var filter_options_03_button_remove_a = make("a","button nodrag");
	var filter_options_03_button_remove_span = make("span","nodrag");
	var filter_options_03_button_remove_em = make("em","remove iconic nodrag");
	filter_options_03_button_remove_em.innerHTML = "&nbsp;";
	var filter_options_03_button_remove_em_space = document.createTextNode("\xa0");
	filter_options_03_button_remove_span.appendChild(filter_options_03_button_remove_em);
	filter_options_03_button_remove_span.appendChild(filter_options_03_button_remove_em_space);
	filter_options_03_button_remove_a.appendChild(filter_options_03_button_remove_span);
	filter_options_03_button_remove.appendChild(filter_options_03_button_remove_a);
	
	var filter_options_03_button_add_a = make("a","button nodrag");
	var filter_options_03_button_add_span = make("span","nodrag");
	var filter_options_03_button_add_em = make("em","add iconic nodrag");
	filter_options_03_button_add_em.innerHTML = "&nbsp;";
	var filter_options_03_button_add_em_space = document.createTextNode("\xa0");
	filter_options_03_button_add_span.appendChild(filter_options_03_button_add_em);
	filter_options_03_button_add_span.appendChild(filter_options_03_button_add_em_space);
	filter_options_03_button_add_a.appendChild(filter_options_03_button_add_span);
	filter_options_03_button_add.appendChild(filter_options_03_button_add_a);
	
	filter_options_03.appendChild(filter_options_03_icon);
	filter_options_03.appendChild(filter_options_03_attributes);
	filter_options_03.appendChild(filter_options_03_operator);
	filter_options_03.appendChild(filter_options_03_value);
	filter_options_03.appendChild(filter_options_03_button_remove);
	filter_options_03.appendChild(filter_options_03_button_add);
	
	content.appendChild(filter_options_03);
	
	//FILTER_OPTIONS_04
	var filter_options_04 = make("div","filter_options nodrag");
	
	var filter_options_04_icon = make("div","filter_icon nodrag");
	var filter_options_04_attributes = make("div","filter_attributes nodrag");
	var filter_options_04_operator = make("div","filter_operator nodrag");
	var filter_options_04_value = make("div","filter_value nodrag");
	
	var filter_options_04_attributes_inner = make("select","nodrag");
	var filter_options_04_operator_inner = make("select","nodrag");
	var filter_options_04_value_inner = make("div","nodrag");
	filter_options_04_value_inner.innerHTML = "<input value='' class='text weight nodrag' /><select class='weight nodrag'></select>";
	
	filter_options_04_attributes.appendChild(filter_options_04_attributes_inner);
	filter_options_04_operator.appendChild(filter_options_04_operator_inner);
	filter_options_04_value.appendChild(filter_options_04_value_inner);
	
	var filter_options_04_button_remove = make("div","button_remove nodrag");
	var filter_options_04_button_add = make("div","button_add nodrag");
	
	var filter_options_04_button_remove_a = make("a","button nodrag");
	var filter_options_04_button_remove_span = make("span","nodrag");
	var filter_options_04_button_remove_em = make("em","remove iconic nodrag");
	filter_options_04_button_remove_em.innerHTML = "&nbsp;";
	var filter_options_04_button_remove_em_space = document.createTextNode("\xa0");
	filter_options_04_button_remove_span.appendChild(filter_options_04_button_remove_em);
	filter_options_04_button_remove_span.appendChild(filter_options_04_button_remove_em_space);
	filter_options_04_button_remove_a.appendChild(filter_options_04_button_remove_span);
	filter_options_04_button_remove.appendChild(filter_options_04_button_remove_a);
	
	var filter_options_04_button_add_a = make("a","button nodrag");
	var filter_options_04_button_add_span = make("span","nodrag");
	var filter_options_04_button_add_em = make("em","add iconic nodrag");
	filter_options_04_button_add_em.innerHTML = "&nbsp;";
	var filter_options_04_button_add_em_space = document.createTextNode("\xa0");
	filter_options_04_button_add_span.appendChild(filter_options_04_button_add_em);
	filter_options_04_button_add_span.appendChild(filter_options_04_button_add_em_space);
	filter_options_04_button_add_a.appendChild(filter_options_04_button_add_span);
	filter_options_04_button_add.appendChild(filter_options_04_button_add_a);
	
	filter_options_04.appendChild(filter_options_04_icon);
	filter_options_04.appendChild(filter_options_04_attributes);
	filter_options_04.appendChild(filter_options_04_operator);
	filter_options_04.appendChild(filter_options_04_value);
	filter_options_04.appendChild(filter_options_04_button_remove);
	filter_options_04.appendChild(filter_options_04_button_add);
	
	content.appendChild(filter_options_04);
	
	//FILTER_OPTIONS_05
	var filter_options_05 = make("div","filter_options nodrag");
	
	var filter_options_05_icon = make("div","filter_icon nodrag");
	var filter_options_05_attributes = make("div","filter_attributes nodrag");
	var filter_options_05_operator = make("div","filter_operator nodrag");
	var filter_options_05_value = make("div","filter_value nodrag");
	
	var filter_options_05_attributes_inner = make("select","nodrag");
	var filter_options_05_operator_inner = make("select","nodrag");
	var filter_options_05_value_inner = make("div","nodrag");
	filter_options_05_value_inner.innerHTML = "<input value='' class='text weight nodrag' /><select class='weight nodrag'></select>";
	
	filter_options_05_attributes.appendChild(filter_options_05_attributes_inner);
	filter_options_05_operator.appendChild(filter_options_05_operator_inner);
	filter_options_05_value.appendChild(filter_options_05_value_inner);
	
	var filter_options_05_button_remove = make("div","button_remove nodrag");
	var filter_options_05_button_add = make("div","button_add nodrag");
	
	var filter_options_05_button_remove_a = make("a","button nodrag");
	var filter_options_05_button_remove_span = make("span","nodrag");
	var filter_options_05_button_remove_em = make("em","remove iconic nodrag");
	filter_options_05_button_remove_em.innerHTML = "&nbsp;";
	var filter_options_05_button_remove_em_space = document.createTextNode("\xa0");
	filter_options_05_button_remove_span.appendChild(filter_options_05_button_remove_em);
	filter_options_05_button_remove_span.appendChild(filter_options_05_button_remove_em_space);
	filter_options_05_button_remove_a.appendChild(filter_options_05_button_remove_span);
	filter_options_05_button_remove.appendChild(filter_options_05_button_remove_a);
	
	var filter_options_05_button_add_a = make("a","button nodrag");
	var filter_options_05_button_add_span = make("span","nodrag");
	var filter_options_05_button_add_em = make("em","add iconic nodrag");
	filter_options_05_button_add_em.innerHTML = "&nbsp;";
	var filter_options_05_button_add_em_space = document.createTextNode("\xa0");
	filter_options_05_button_add_span.appendChild(filter_options_05_button_add_em);
	filter_options_05_button_add_span.appendChild(filter_options_05_button_add_em_space);
	filter_options_05_button_add_a.appendChild(filter_options_05_button_add_span);
	filter_options_05_button_add.appendChild(filter_options_05_button_add_a);
	
	filter_options_05.appendChild(filter_options_05_icon);
	filter_options_05.appendChild(filter_options_05_attributes);
	filter_options_05.appendChild(filter_options_05_operator);
	filter_options_05.appendChild(filter_options_05_value);
	filter_options_05.appendChild(filter_options_05_button_remove);
	filter_options_05.appendChild(filter_options_05_button_add);
	
	content.appendChild(filter_options_05);
	
	content_align.appendChild(content);
	content_wrapper.appendChild(content_align);
	
	return content_wrapper;
}

// TABLE PALETTE VIEWS FOOTER/////////////////////////////////////////////////
function createTablePaletteViewsFooter(){
	var content_buttons = make("div","table_control_palette_buttons nodrag");
	
	var content_button_reset = make("div","table_control_palette_reset nodrag");
	var content_button_commit = make("div","table_control_palette_commit nodrag");
	
	var reset_button = make("a","button nodrag");
	var reset_button_span = make("span","nodrag");
	reset_button_span.innerHTML = "Reset";
	reset_button.appendChild(reset_button_span);
	
	content_button_reset.appendChild(reset_button);
	
	var ok_button = make("a","button nodrag");
	var ok_button_span = make("span","nodrag");
	var ok_button_text = document.createTextNode("Apply"); 
	var ok_button_em = make("em","approve nodrag");
	ok_button_em.innerHTML = "&nbsp;";
	var ok_button_em_space = document.createTextNode(" "); 
	ok_button_span.appendChild(ok_button_em);
	ok_button_span.appendChild(ok_button_em_space);
	ok_button_span.appendChild(ok_button_text);
	ok_button.appendChild(ok_button_span);
	
	var cancel_button = make("a","button nodrag");
	var cancel_button_span = make("span","nodrag");
	var cancel_button_text = document.createTextNode("Close"); 
	var cancel_button_em = make("em","cancel nodrag");
	cancel_button_em.innerHTML = "&nbsp;";
	var cancel_button_em_space = document.createTextNode(" "); 
	cancel_button.onclick = function() { closeGlobalPalette(); };
	cancel_button_span.appendChild(cancel_button_em);
	cancel_button_span.appendChild(cancel_button_em_space);
	cancel_button_span.appendChild(cancel_button_text);
	cancel_button.appendChild(cancel_button_span);
	
	var button_space = document.createTextNode(" "); 
	
	content_button_commit.appendChild(ok_button);
	content_button_commit.appendChild(button_space);
	content_button_commit.appendChild(cancel_button);
	
	content_buttons.appendChild(content_button_commit);
	content_buttons.appendChild(content_button_reset);
	
	return content_buttons;
}

// TABLE PALETTE EDITOR FOOTER/////////////////////////////////////////////////
function createTablePaletteEditorFooter(){
	var content_buttons = make("div","table_control_palette_buttons nodrag");
	
	var content_button_reset = make("div","table_control_palette_reset nodrag");
	var content_button_commit = make("div","table_control_palette_commit nodrag");
	
	var reset_button = make("a","button nodrag");
	var reset_button_span = make("span","nodrag");
	reset_button_span.innerHTML = "Reset";
	reset_button.appendChild(reset_button_span);
	
	content_button_reset.appendChild(reset_button);
	
	var ok_button = make("a","button nodrag");
	var ok_button_span = make("span","nodrag");
	var ok_button_text = document.createTextNode("Save"); 
	var ok_button_em = make("em","approve nodrag");
	ok_button_em.innerHTML = "&nbsp;";
	var ok_button_em_space = document.createTextNode(" "); 
	ok_button_span.appendChild(ok_button_em);
	ok_button_span.appendChild(ok_button_em_space);
	ok_button_span.appendChild(ok_button_text);
	ok_button.appendChild(ok_button_span);
	
	var cancel_button = make("a","button nodrag");
	var cancel_button_span = make("span","nodrag");
	var cancel_button_text = document.createTextNode("Cancel"); 
	var cancel_button_em = make("em","cancel nodrag");
	cancel_button_em.innerHTML = "&nbsp;";
	var cancel_button_em_space = document.createTextNode(" "); 
	cancel_button_span.appendChild(cancel_button_em);
	cancel_button_span.appendChild(cancel_button_em_space);
	cancel_button_span.appendChild(cancel_button_text);
	cancel_button.appendChild(cancel_button_span);
	
	var button_space = document.createTextNode(" "); 
	
	content_button_commit.appendChild(ok_button);
	content_button_commit.appendChild(button_space);
	content_button_commit.appendChild(cancel_button);
	
	content_buttons.appendChild(content_button_commit);
	content_buttons.appendChild(content_button_reset);
	
	return content_buttons;
}

xel = '';

function displayPaletteMSL(tgtElem){
	//get target element top and left (not MSL but input field)
	xel = tgtElem;
	var frame_edit = document.getElementById('frame_edit_msl');
	positionFrame('edit_msl', 'global_palette', 'filter_table_content_wrapper');	
	displayBlock(frame_edit);
	document.getElementById('agileautocomplete').style.width = '84%';
	YAHOO.util.Dom.removeClass(document.getElementById('agileautocomplete'), 'focus_border');
	visibilityVisible(frame_edit);
	document.getElementById('search_query').focus();
	YAHOO.util.Event.addListener(document, "keydown", hidePaletteMSL);
	YAHOO.util.Event.addListener(document, "mousedown", hidePaletteMSL);
}

function hidePaletteMSL(evt)
{
	var keycode = YAHOO.util.Event.getCharCode(YAHOO.util.Event.getEvent(evt));
	var tgtElem = YAHOO.util.Event.getTarget(evt);
	if(keycode == 9 && tgtElem.id != 'search_query') {
		document.getElementById('frame_edit_msl').style.display = 'none';
		document.getElementById('amtest').value = 'Change Analyst List;';
	} else if(eventOnPalette(tgtElem) && tgtElem.id != 'amtest') {
		document.getElementById('frame_edit_msl').style.display = 'none';
		document.getElementById('amtest').value = 'Change Analyst List';
	}
}

function eventOnPalette(elem) {
	if(elem.parentNode && elem.parentNode.id == 'palette_content')
		return true;
	if(!elem.parentNode.parentNode)
		return false;
	return eventOnPalette(elem.parentNode);
}

function positionFrame(frameID, paletteID, paletteContentID) {
	var evtTgtElem = xel;
	var inputHeightOffset = 22;
	var divScrollPos = document.getElementById(paletteContentID).scrollTop;	
	var obj = document.getElementById(frameID);
	parent = obj.parentNode;	
	parent.style.left = evtTgtElem.offsetLeft + document.getElementById(paletteID).offsetLeft - 5 +'px';
	parent.style.top  = evtTgtElem.offsetTop - divScrollPos + document.getElementById(paletteID).offsetTop - 5 +'px';
}

