function launch_menu_dialog(page,w,h){
	window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=0");
	}


function onSearchPageLoad(){
	var obj = document.getElementById("Header");
	if (obj.fireEvent) {
		obj.fireEvent("onclick");
    } else {
        var clickEvent = window.document.createEvent("MouseEvent");
        clickEvent.initEvent("click", false, true);
        obj.dispatchEvent(clickEvent);
    }
	//load up the thumbnail table
	loadThumbnailForm()
	
}


function loadSearchPage(event) {    
	if (event) { StartTreeGrid(event); }
	popMessage('error');
}

function collapseSearchOptions(){
	var search_header = document.getElementById("search_header");
	displayNone(search_header);
	
	var search_collapse_wrapper = document.getElementById("search_collapse_wrapper");
	displayNone(search_collapse_wrapper);
	
	var main_search_content = document.getElementById("main_search_content");
	displayNone(main_search_content);
	
	var search_expand_wrapper = document.getElementById("search_expand_wrapper");
	displayBlock(search_expand_wrapper);
}

function expandSearchOptions(){
	var search_header = document.getElementById("search_header");
	var search_collapse_wrapper = document.getElementById("search_collapse_wrapper");
	var main_search_content = document.getElementById("main_search_content");
	var search_expand_wrapper = document.getElementById("search_expand_wrapper");
	
	displayBlock(search_header);
	displayBlock(main_search_content);
	displayBlock(search_collapse_wrapper);
	displayNone(search_expand_wrapper);
}

function displaySearch(search_type){
	var basic_search = document.getElementById("basic_search");
	var basic_bar = document.getElementById("search_collapse_wrapper_basic");
	var advanced_search = document.getElementById("advanced_search");
	var advanced_bar = document.getElementById("search_collapse_wrapper_advanced");

	if (search_type == "advanced") {
		displayNone(basic_search);
		displayNone(basic_bar);
		displayBlock(advanced_search);
		displayBlock(advanced_bar);
		
	} else if (search_type== "basic"){
		displayNone(advanced_search);
		displayNone(advanced_bar);
		displayBlock(basic_search);
		displayBlock(basic_bar);
	}
}

function callFormatResults(){
	launch_dialog('pages/_testing/proj_action_dialogs/format_results.php',825,600);return false;
}




////////////////////////////////////////
//
//        GROUP SEARCH MENU
//
////////////////////////////////////////
var groupSearchMenuItems = [
	[
		{ text: "Add ()", url: "" },
		{ text: "Remove", url: "" },
		{ text: "Add [Group]", url: "" },
	]
];

buildGroupSearch = function(p_oEvent) {
	
	var groupSearchMenu = new YAHOO.widget.Menu("groupSearchMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleGroupSearchMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (groupSearchMenu.getItems() == 0) {
			groupSearchMenu.addItems(groupSearchMenuItems);
			groupSearchMenu.render(document.body);
			groupSearchMenu.cfg.setProperty("context", ["toggle_group_search_menu", "tl","bl"]);		
		}
		groupSearchMenu.align("tl", "bl"); //this function MUST be used with the context property
		groupSearchMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_group_search_menu", "mousedown", toggleGroupSearchMenu);
}

YAHOO.util.Event.addListener(window, "load", buildGroupSearch);