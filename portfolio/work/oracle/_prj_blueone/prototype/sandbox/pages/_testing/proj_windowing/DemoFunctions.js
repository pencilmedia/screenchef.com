/* ------------------------------------------------------------------------
	DOM UTILITIES
------------------------------------------------------------------------ */
function byId(s) {
	if (typeof(s).toLowerCase() == 'string') {
		return document.getElementById(s);
	} else {
		return s;
	}
}

function byTag(s, elem) {
	if (elem) {
		return elem.getElementsByTagName(s);
	} else {
		return document.getElementsByTagName(s);
	}
}

function clearElem(elem) {
	while (elem.hasChildNodes()) {
		elem.removeChild(elem.childNodes[0]);
	}
}


/* ------------------------------------------------------------------------
	SELECTION UTILITIES
------------------------------------------------------------------------ */
function deselectRows(elem) {
	var tbody = elem.parentNode;
	var rows = byTag('tr', tbody);
	for (var i=0; i<rows.length; i++) {
		rows[i].className = rows[i].className.replace("selected", "");
	}
}

function selectRow(elem) {
	if (elem.tagName.toLowerCase() == "tr") {
		if (elem.className.match("selected")) {
			elem.className = elem.className.replace("selected", "");
		} else {
			elem.className = elem.className + " selected";
		}
	} else if (elem.tagName.toLowerCase() == "table") {
		traverseRows(elem, selectRow);
	}
}

function traverseRows(table_obj, callback) {
	var tbody = byTag('tbody', table_obj);
	var rows = byTag('tr', tbody[0]);
	if (rows.length) {
		for (var i=0; i<rows.length; i++) {
			callback(rows[i]);
		}
	}
}

/* ------------------------------------------------------------------------
	EVENT HANDLERS
------------------------------------------------------------------------ */
function handleAIClick(elem, data) {
	deselectRows(elem);
	selectRow(elem);
	
	// Get the Redline table
	var redline_table = byId('redlineDemoTable');
	var redline_tbody = byTag('tbody', redline_table)[0];
	clearElem(redline_tbody);
	
	if (data && data.length) {
		for (var i=0; i<data.length; i++) {
			var tr = createRedlineRow(data[i]);
			tr.id = i + global_redline_suffix;
			redline_tbody.appendChild(tr);
		}
	}
}

function handleSearchButtonClick() {
	// Get the search table
	var search_table = byId('searchDemoTable');
	var search_tbody = byTag('tbody', search_table)[0];	
	clearElem(search_tbody);
	
	var data = mdi_demo_data_search_results;
	var schema = mdi_demo_schema_search_results;
	
	if (data && data.length) {
		for (var i=0; i<data.length; i++) {
			var tr = createSearchRow(data[i]);
			tr.id = i + global_search_suffix;
			search_tbody.appendChild(tr);
		}
	}
	
	runSearchInit();
}


function handleRedlineClick(elem) {
	deselectRows(elem);
	selectRow(elem);
}

function handleSearchClick(elem) {
	deselectRows(elem);
	selectRow(elem);
}

function handleAISelectAll(yahooEvent, srcObj, agileObj) {
	var ai_table = byId('affectedItemDemoTable');
	deselectRows(ai_table);
	traverseRows(ai_table, selectRow);
}

function handleRedlineSelectAll(yahooEvent, srcObj, agileObj) {
	var redline_table = byId('redlineDemoTable');
	deselectRows(redline_table);
	traverseRows(redline_table, selectRow);
}

function handleSearchSelectAll(yahooEvent, srcObj, agileObj) {
	var search_table = byId('searchDemoTable');
	deselectRows(search_table);
	traverseRows(search_table, selectRow);
}

function handleAICopy(yahooEvent, srcObj, agileObj) {}

function handleRedlineCopy(yahooEvent, srcObj, agileObj) {
	var redline_table = byId('redlineDemoTable');
	clearCopyList();
	traverseRows(redline_table, addRedlineRowToCopyList);
	window.controller_instance.copyData(AgileWindowingConstants.COPY_PASTE_DATA_TYPE_TABLE_ROWS, {'dataset': global_row_copy_dataset, 'id_list': global_row_copy_list});
}

function handleSearchCopy(yahooEvent, srcObj, agileObj) {
	var search_table = byId('searchDemoTable');
	clearCopyList();
	traverseRows(search_table, addSearchRowToCopyList);
	window.controller_instance.copyData(AgileWindowingConstants.COPY_PASTE_DATA_TYPE_TABLE_ROWS, {'dataset': global_row_copy_dataset, 'id_list': global_row_copy_list});
}

function handleAIPaste(yahooEvent, srcObj, agileObj) {	
	// Get the AI table
	var global_data = window.controller_instance.getPasteData();
	var data = global_data['data']['dataset'];
	var id_list = global_data['data']['id_list'];
	var ai_table = byId('affectedItemDemoTable');
	var ai_tbody = byTag('tbody', ai_table)[0];
	
	deselectRows(ai_table);
	clearTargetList();
	traverseRows(ai_table, extractTargetRowIds);

	if (id_list && id_list.length) {
		for (var i=0; i<id_list.length; i++) {
			var idx = parseInt(id_list[i]);
			if (!global_target_row_ids.inArray(id_list[i] + global_ai_suffix)) {
				var tr = createAIRow(data[idx]);
				tr.id = id_list[i] + global_ai_suffix;
				tr.onclick = function() { handleAIClick(this, data[idx]['meta_data']['dataset']); };
				ai_tbody.insertBefore(tr, ai_tbody.childNodes[0]);
			}
		}
	}
}

function handleRedlinePaste(yahooEvent, srcObj, agileObj) {}

function handleSearchPaste(yahooEvent, srcObj, agileObj) {}

function handleGlobalSearch(yahooEvent, srcObj, agileObj) {
	window.controller_instance.dispatchLink('pages/_testing/proj_windowing/search_results.php', 'searchwin');
}

/* ------------------------------------------------------------------------
	LOCAL COPY PASTE ACCESSORS
------------------------------------------------------------------------ */
var global_row_copy_list = [];
var global_row_copy_dataset = null;
var global_target_row_ids = [];
var global_redline_suffix = "_redline_row";
var global_ai_suffix = "_ai_row";
var global_search_suffix = "_search_row";

function addRedlineRowToCopyList(elem) {
	global_row_copy_dataset = mdi_demo_data_redlines;
	addRowToCopyList(elem);
}

function addSearchRowToCopyList(elem) {
	global_row_copy_dataset = mdi_demo_data_search_results;
	addRowToCopyList(elem);
}

function addRowToCopyList(elem) {
	if (elem.className.match("selected")) {
		global_row_copy_list.push(elem.id);
	}
}

function clearCopyList() {
	global_row_copy_list = [];
}

function clearTargetList() {
	global_target_row_ids = [];
}

function extractTargetRowIds(elem) {
	global_target_row_ids.push(elem.id);
}

/* ------------------------------------------------------------------------
	DEMO INIT FUNCTIONS
------------------------------------------------------------------------ */
function runBomTable() {
	var bom_listener_1 = AgileListenerProxy(AgileEventConstants['EVENT_TAB_FORWARD'], 'bomDemoTable', function() { alert('select all'); })[0];
}

function runECOInit2() {
	var ai_table = byId('affectedItemDemoTable');
	var redline_table = byId('redlineDemoTable');
	
	var ai_select_all_listener = AgileListenerProxy(AgileEventConstants['EVENT_SELECT_ALL'], ai_table, handleAISelectAll)[0];
	ai_select_all_listener.enable();
	
	var redline_select_all_listener = AgileListenerProxy(AgileEventConstants['EVENT_SELECT_ALL'], redline_table, handleRedlineSelectAll)[0];
	redline_select_all_listener.enable();

	var ai_copy_listener = AgileListenerProxy(AgileEventConstants['EVENT_COPY'], ai_table, handleAICopy)[0];
	ai_copy_listener.enable();
		
	var redline_copy_listener = AgileListenerProxy(AgileEventConstants['EVENT_COPY'], redline_table, handleRedlineCopy)[0];
	redline_copy_listener.enable();
	
	var ai_paste_listener = AgileListenerProxy(AgileEventConstants['EVENT_PASTE'], ai_table, handleAIPaste)[0];
	ai_paste_listener.enable();
	
	var redline_paste_listener = AgileListenerProxy(AgileEventConstants['EVENT_PASTE'], redline_table, handleRedlinePaste)[0];
	redline_paste_listener.enable();
}

function runSearchInit() {
	var search_table = byId('searchDemoTable');
	
	var search_select_all_listener = AgileListenerProxy(AgileEventConstants['EVENT_SELECT_ALL'], search_table, handleSearchSelectAll)[0];
	search_select_all_listener.enable();

	var search_copy_listener = AgileListenerProxy(AgileEventConstants['EVENT_COPY'], search_table, handleSearchCopy)[0];
	search_copy_listener.enable();
	
	var search_paste_listener = AgileListenerProxy(AgileEventConstants['EVENT_PASTE'], search_table, handleSearchPaste)[0];
	search_paste_listener.enable();
}

function runMainWinInit() {	
	var global_search_listener = AgileListenerProxy(AgileEventConstants['EVENT_GLOBAL_SEARCH'], window, handleGlobalSearch)[0];
	global_search_listener.enable();
}

/* ------------------------------------------------------------------------
	"SERVER" FUNCTIONS
------------------------------------------------------------------------ */
function createRedlineRow(data) {
	var click_func = function() { handleRedlineClick(this); };
	var schema = mdi_demo_schema_redline;
	var tr = createRow(data, schema, click_func);
	return tr;
}

function createAIRow(data) {
	var click_func = function() { handleAIClick(this, null); };
	var schema = mdi_demo_schema_ai;
	var tr = createRow(data, schema, click_func);
	return tr;
}

function createSearchRow(data) {
	var click_func = function() { handleSearchClick(this, null); };
	var schema = mdi_demo_schema_search_results;
	var tr = createRow(data, schema, click_func);
	return tr;
}


function createRow(data, schema, click_func) {
	var tr = document.createElement('tr');
	tr.onclick = click_func;
	
	var td_handle = document.createElement('td');
	tr.appendChild(td_handle);
	td_handle.innerHTML = "&nbsp;";
	td_handle.className = "handle";

	var item_data = data['item_data'];
	for (var i=0; i<schema.length; i++) {
		if (item_data[schema[i]] && item_data[schema[i]] != null) {
			var td = createDataValue(schema[i], item_data);
		} else {
			var td = document.createElement('td');
			td.innerHTML = "&nbsp;";
		}
		tr.appendChild(td);
		
		tr.appendChild(createResizeCell());
	}
	
	return tr;
}






function createResizeCell() {
	var td_resize = document.createElement('td');
	td_resize.innerHTML = "&nbsp;";
	td_resize.className = "resize";
	return td_resize;
}

function createDataValue(key, data) {
	var elem = document.createElement('td');
	switch (key) {
		case 'redline':
		case 'attachment':
		case 'manufacturer':
		case 'pending':
		case 'problem':
			elem.innerHTML = "&nbsp;";
			elem.className = "col_checked";
			break;		
		case 'type':
			elem.innerHTML = "&nbsp;";
			elem.className = "col_" + data[key];
			break;
		default:
			elem.innerHTML = data[key];
			if (data['redline'] && data['redline'] == true) {
				elem.className = "demoStrike";
			}
			break;
	}
	return elem;
}
	












// **************************************************
//	FOR WINDOWING DEMONSTATION ONLY
//	SMOKE AND MIRRORS!!!
//	A.
// **************************************************
function fauxMDIOpen() {
	/*
		This chunk of code is what hides the content panes, and such
	*/
	$('cmdMDIOpen').style.display = 'none';
	$('cmdMDIClose').style.display = '';
	$('MainPane').style.display='none';
	$('splitbar').style.display='none';
	$('nav').style.border = '';
	$('nav').style.width = '100%';
	$('LeftPaneTop').style.width = '100%';
	
	// Position the controller in the right spot
	window.controller_instance.assumeDefaults();
	window.controller_instance.engageMDI();
	
	var last_url    = window.controller_instance.getLastUrl();
	var default_url = 'pages/sprint_05/car_templates/obj_form.php';
	
	if (last_url) {
		window.controller_instance.dispatchLink(last_url['url'], last_url['target'], last_url['callback']);
	} else {
		window.controller_instance.dispatchLink(default_url, 'mainwin', null);
	}

}

function fauxMDIClose() {	
	window.controller_instance.disengageMDI();
	window.controller_instance.cleanupMDI();
	window.resizeTo(1000,800);
	window.moveTo(0,0);
	// Dunno how to get this back, Anthony?
	//agile.ux.sidebar.restorePane();


	/*
		This chunk of code is what shows the content panes, and such
	*/
	$('cmdMDIOpen').style.display = '';
	$('cmdMDIClose').style.display = 'none';
	$('MainPane').style.display='';
	$('splitbar').style.display='';
	$('nav').style.width = '196px';
	$('LeftPaneTop').style.width = '196px';
}

function fauxMDILogOff() {
	fauxMDIClose();
	window.close();
}
