////////////////////////////////////////
//
//  MENUS WITHIN PROTOTYPE
//
////////////////////////////////////////

/*************************
Search : Format Save Basic Menu
**************************/
var formatSaveBasicMenuItems = [
	[
		{ text: "Save", url: "" },
		{ text: "Save as", url: "javascript:launch_menu_dialog('pages/_testing/proj_action_dialogs/save_search_as.php',560,450);" },
	]
];

buildFormatSaveBasic = function(p_oEvent) {
	
	var formatSaveBasicMenu = new YAHOO.widget.Menu("formatSaveBasicMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleFormatSaveBasicMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (formatSaveBasicMenu.getItems() == 0) {
			formatSaveBasicMenu.addItems(formatSaveBasicMenuItems);
			formatSaveBasicMenu.render(document.body);
			formatSaveBasicMenu.cfg.setProperty("context", ["toggle_format_save_basic_menu", "tl","bl"]);		
		}
		formatSaveBasicMenu.align("tl", "bl"); //this function MUST be used with the context property
		formatSaveBasicMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_format_save_basic_menu", "mousedown", toggleFormatSaveBasicMenu);
}

YAHOO.util.Event.addListener(window, "load", buildFormatSaveBasic);

/*************************
Advanced Search : Format Save Advanced Menu
**************************/
var formatSaveAdvancedMenuItems = [
	[
		{ text: "Save", url: "" },
		{ text: "Save as", url: "" },
	]
];

buildFormatSaveAdvanced = function(p_oEvent) {
	
	var formatSaveAdvancedMenu = new YAHOO.widget.Menu("formatSaveAdvancedMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleFormatSaveAdvancedMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (formatSaveAdvancedMenu.getItems() == 0) {
			formatSaveAdvancedMenu.addItems(formatSaveAdvancedMenuItems);
			formatSaveAdvancedMenu.render(document.body);
			formatSaveAdvancedMenu.cfg.setProperty("context", ["toggle_format_save_advanced_menu", "tl","bl"]);		
		}
		formatSaveAdvancedMenu.align("tl", "bl"); //this function MUST be used with the context property
		formatSaveAdvancedMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_format_save_advanced_menu", "mousedown", toggleFormatSaveAdvancedMenu);
}

YAHOO.util.Event.addListener(window, "load", buildFormatSaveAdvanced);

/*************************
Content Tab : More Menu
**************************/
var contentMoreTabMenuItems = [
	[
		{ text: "Bookmark", url: "" },
		{ text: "Add Keywords", url: "" },
		{ text: "Subscribe", url: "" },
		{ text: "Create Change", url: "" }
	],
	[
		{ text: "Copy", url: "" },
		{ text: "Paste", url: "" },
		{ text: "Fill-up", url: "" },
		{ text: "Fill-down", url: "" }
	],
	[
		{ text: "Export to Excel", url: "" }
	]
];

buildContentTabMenuItems = function(p_oEvent) {
	
	var formatContentTabMenu = new YAHOO.widget.Menu("formatContentTabMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	
	function toggleformatContentTabMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		if (formatContentTabMenu.getItems() == 0) {
			formatContentTabMenu.addItems(contentMoreTabMenuItems);
			formatContentTabMenu.render(document.body);
			formatContentTabMenu.cfg.setProperty("context", ["toggle_more_menu", "tl","bl"]);		
		}
		formatContentTabMenu.align("tl", "bl"); //this function MUST be used with the context property
		formatContentTabMenu.show();
	}
	YAHOO.util.Event.addListener("toggle_more_menu", "mousedown", toggleformatContentTabMenu);
}

YAHOO.util.Event.addListener(window, "load", buildContentTabMenuItems);
