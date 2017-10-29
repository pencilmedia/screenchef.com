loadAmlMenu = function(p_oEvent)
{
    
        function determineChecked(p_sType, p_aArguments, p_oMenuItem) 
		{
            
            if (this.cfg.getProperty("checked") == true)
			{
            	this.cfg.setProperty("checked", false);
            } else {
            	this.cfg.setProperty("checked", true);
            }
        
        };

		var changeStatusMenuItems = 
		[

			[
				{ text: "Menu Item...", url: "" }
			]
		]; 
		
		var globalActionsMenuItems = 
		[

			[
				{ text: "Bookmark", url: "" },
				{ text: "Subscribe", url: "" }
			],
			[
			 	{ text: "Save As..." },
				{ text: "Delete", url: "" }
			],
			[
			 	{ text: "Copy URL to Clipboard", url: "" },
				{ text: "Export", url: "" },
				{ text: "Microsoft Excel", url: "" }
			],
			[
			 	{ text: "Print", url: "" },
				{ text: "Send", url: "" },
				{ text: "Sharing", url: "" }
			],
			[
			 	{ text: "Incorporate", url: "" },
				{ text: "Unincorporate", url: "" }
			],
			[
				{ 
					text: "Create", submenu: 
					{ 
						id: "showhidecolumns", itemdata:
						[
							{ text: "Create Change", url: "" },
							{ text: "Create Product Service Request", url: "" },
							{ text: "Create Quality Change Request", url: "" },
							{ text: "Create Declaration", url: "" },
							{ text: "Create Sourcing Project", url: "" }
						]
					}
				}
			],
			[
			 	{ text: "PX 1", url: "" },
				{ text: "PX 2", url: "" }
			]
		];
		
		var prepareMenuItems = 
		[

			[
				{ text: "Add / Modify Partners", onclick:{fn:launchAddModPartners}, url: "" },
				{ text: "Calculate Quantities", url: "" }
			],
			[
				{ text: "Import", url: "" },
				{ text: "Validate", url: "" },
				{ text: "Retrieve AML from Item Master", url: "" }
			],
			[
				{ text: "Set Target Prices", onclick:{fn:launchSetTargetPrices}, url: "" },
				{ text: "Update Target Prices to RFQ", url: "" }
			]
		];  


		var quoteMenuItems = 
		[

			[
				{ text: "Create RFQ", onclick:{fn:launchCreateRFQ}, url: "" },
				{ text: "Add Items to RFQ", url: "" }
			]
		];  

		var moreMenuItems = 
		[
			[
				{ text: "Undo", helptext:"Ctrl + Z", url: "" },
				{ text: "Redo", helptext:"Ctrl + Y", url: "" },
			],
			[
				{ text: "Copy", helptext:"Ctrl + C", url: "" },
				{ text: "Paste", helptext:"Ctrl + P", url: "" },
				{ text: "Fill-up", helptext:"Ctrl + Shift + F", url: "" },
				{ text: "Fill-down", helptext:"Ctrl + Shift + F", url: "" }
			],
			[
				{ text: "Sort Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"multi_col_sort"} },
				{ text: "Filter Rows", url: "#", onclick:{fn:callTableViewsPalette, obj:"filter_table"} },
				{ text: "Format Columns", url: "#", onclick:{fn:callTableViewsPalette, obj:"format_cols"} },
			],
			[
				{ text: "Display AML", url: "" },
				{ text: "Publish part data to Item Master", onclick:{fn:launchPPDIM}, url: "" }
			]
		];  

		var viewActionsAMLMenuItems = 
		[

			[
				{ text: "Edit", url: "" },
				{ text: "Save", url: "" },
				{ text: "Save As...", url: ""}
			],
			[
				{ text: "Manage", url: "#", onclick:{fn:callViewManager} },
				{ text: "Set as Default", url: "" }
			]
		];
		
	var changeStatusMenu = new YAHOO.widget.Menu("changeStatusMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	changeStatusMenu.clearContent(); //clears data from memory 
	changeStatusMenu.addItems(changeStatusMenuItems);
	changeStatusMenu.render(document.body);
	changeStatusMenu.cfg.setProperty("context", ["cmdChangeStatus", "tl","bl"]);
	
	var globalActionsMenu = new YAHOO.widget.Menu("globalActionsMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	globalActionsMenu.clearContent(); //clears data from memory 
	globalActionsMenu.addItems(globalActionsMenuItems);
	globalActionsMenu.render(document.body);
	globalActionsMenu.cfg.setProperty("context", ["cmdGlobalActions", "tl","bl"]);
	
	var prepareMenu = new YAHOO.widget.Menu("prepareMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	prepareMenu.clearContent(); //clears data from memory 
	prepareMenu.addItems(prepareMenuItems);
	prepareMenu.render(document.body);
	prepareMenu.cfg.setProperty("context", ["cmdPrepare", "tl","bl"]);

	var quoteMenu = new YAHOO.widget.Menu("quoteMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	quoteMenu.clearContent(); //clears data from memory 
	quoteMenu.addItems(quoteMenuItems);
	quoteMenu.render(document.body);
	quoteMenu.cfg.setProperty("context", ["cmdQuote", "tl","bl"]);

	var moreMenu = new YAHOO.widget.Menu("moreMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	moreMenu.clearContent(); //clears data from memory 
	moreMenu.addItems(moreMenuItems);
	moreMenu.render(document.body);
	moreMenu.cfg.setProperty("context", ["cmdMore", "tl","bl"]);
	
	var viewActionsAMLMenu = new YAHOO.widget.Menu("viewActionsAMLMenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	viewActionsAMLMenu.clearContent(); //clears data from memory 
	viewActionsAMLMenu.addItems(viewActionsAMLMenuItems);
	viewActionsAMLMenu.render(document.body);
	viewActionsAMLMenu.cfg.setProperty("context", ["cmdViewActions", "tl","bl"]);	


	function toggleMenu(e,o)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(e);
		changeStatusMenu.align("tl", "bl");
		changeStatusMenu.show();
	}

	function toggleChangeStatusMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		changeStatusMenu.align("tl", "bl");
		changeStatusMenu.show();
	}
	
	function toggleGlobalActionsMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		globalActionsMenu.align("tl", "bl");
		globalActionsMenu.show();
	}	

	function togglePrepareMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		prepareMenu.align("tl", "bl");
		prepareMenu.show();
	}
	
	function toggleQuoteMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		quoteMenu.align("tl", "bl");
		quoteMenu.show();
	}
	
	function toggleMoreMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		moreMenu.align("tl", "bl");
		moreMenu.show();
	}

	function toggleViewActionsAMLMenu(p_oEvent)
	{
		hideMenus();
		YAHOO.util.Event.stopPropagation(p_oEvent);
		viewActionsAMLMenu.align("tr", "br");
		viewActionsAMLMenu.show();
	}
	
	function hideMenus()
	{
		changeStatusMenu.hide();
		globalActionsMenu.hide();
		prepareMenu.hide();
		quoteMenu.hide();
		moreMenu.hide();
		viewActionsAMLMenu.hide();
	}
	
	function launchPPDIM()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/publish_to_item_master.php',560,680);
		return false;
	}
	
	function launchAddModPartners()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/add_modify_partners.php',660,400);
		return false;
	}

	function launchSetTargetPrices()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/set_target_price.php',560,500);
		return false;
	}
	function launchCreateRFQ()
	{
		launch_dialog('pages/_testing/proj_action_dialogs/create_request_for_quote.php',850,650);
		return false;
	}


	YAHOO.util.Event.addListener("cmdChangeStatus", "mousedown", toggleChangeStatusMenu);
	YAHOO.util.Event.addListener("cmdGlobalActions", "mousedown", toggleGlobalActionsMenu);
	YAHOO.util.Event.addListener("cmdPrepare", "mousedown", togglePrepareMenu);
	YAHOO.util.Event.addListener("cmdQuote", "mousedown", toggleQuoteMenu);
	YAHOO.util.Event.addListener("cmdMore", "mousedown", toggleMoreMenu);
	YAHOO.util.Event.addListener("cmdViewActions", "mousedown", toggleViewActionsAMLMenu);
	
	createGlobalPalette();
	
	
}