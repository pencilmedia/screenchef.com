 var dom = YAHOO.util.Dom;
//	***********************************************************
//		CONCEPT CAR
//	***********************************************************
agile.ux.conceptCar =
{
	init: function()
	{
		agile.ux.conceptCar.loadEvents();
		YAHOO.util.Event.onContentReady("agile_search_menu", agile.ux.searchMenu.onMenuReady);
		agile.ux.searchMenu.buildSearchMenu();
		agile.ux.toolsMenu.buildToolsMenu();
		agile.ux.sidebar.resizeContainers();
		agile.ux.tree.loadSearchTree();
		agile.ux.tree.loadBookmarkTree();
		agile.ux.tree.loadRecentlyVisitedTree();
		agile.ux.tree.loadReportsAnalytics();
		agile.ux.conceptCar.quickLinksonClick();
},
	loadEvents: function()
	{
		agile.ux.sidebar.build( {"sliderMenuId":"slideMenu"} );
		addEvent(['sidebarExpand','collapsedPane'], 'click', agile.ux.sidebar.expandPane);
		addEvent('sidebarCollapse', 'click', agile.ux.sidebar.collapsePane);
		addEvent(window,'resize',function(){ agile.ux.sidebar.build( {"sliderMenuId":"slideMenu"} ) } );
		addEvent(window,'resize',agile.ux.sidebar.resizeContainers);
		addEvent(window,'load',loadGrid());
		//addEvent(window,'load',createGlobalPalette());
		addLoadEvent(myInit);
		addLoadEvent(initFormFieldFocus);
	},
	quickLinksonClick: function()
	{
		jQuery('#cmdQL').click( agile.ux.conceptCar.quickLinks );
	},
	quickLinksClose : function()
	{
		jQuery('#quick_links').slideUp(300);
	},
	quickLinks : function()
	{
		jQuery('#quick_links').slideDown(300);
	},
	quickLinksToggle : function()
	{
		jQuery('#quick_links').toggle();
	}
	
	
};

function launch_dialog(page,w,h)
{
	window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=0");
	return false;
}
function launch_scrolling_dialog(page,w,h)
{
	window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=1");
	return false;
}

addEvent(window,'load',agile.ux.conceptCar.init);


agile.ux.sidebar =
{
	resizeContainers: function()
	{
		var windowWidth = dom.getViewportWidth();
		var navWidth;
		var mainPaneWidth;

		if ( $('nav').style.display != 'none' )
		{
			navWidth = parseInt(dom.getStyle('nav','width')) + parseInt(dom.getStyle('splitbar','width'));
		} else {
			navWidth = parseInt(dom.getStyle('collapsedPane','width'));
		}

		if ( location.href.indexOf('pop=1') >= 0 )
		{
			// We have a pop up window.
			mainPaneWidth = (windowWidth) + 'px';
		} else {
			// Regular window
			mainPaneWidth = (windowWidth - navWidth) + 'px';
		}



		dom.setStyle('MainPane', 'width', mainPaneWidth);

		var windowHeight = dom.getViewportHeight();

		var obj = document.getElementById('PaneContent');
        var rightContentHeight = getOffsetTop(obj);

		var topPaneHeight = parseInt(dom.getStyle('TopPane','height'));
		headerHeight  = rightContentHeight - topPaneHeight ;

		var paneContentHeight = (windowHeight - topPaneHeight - headerHeight) + 'px';

		//
		//BS, crashing IE8 because of a negative value being returned
		// by paneContentHeight variable
		//
		
		dom.setStyle('PaneContent', 'height', paneContentHeight );


		/* calculate 50/50 height of splitter panes
		var objPaneHeight = parseInt(uxDom.getStyle('PaneContent', 'height'));
		var objTopPane = (objPaneHeight)/2 + 'px';
		var objBtmPane = (objPaneHeight)/2 - 3 + 'px'; //subtract 3 for the preview bar splitter bar height
		dom.setStyle('Object', 'height', objTopPane );
		dom.setStyle('Preview', 'height', objBtmPane );
		*/


		// TEMPORARY: NEED TO FIGURE OUT WHY MS EXPLORER shoots out NaN for below....
		if (navigator.appName=="Microsoft Internet Explorer") {
			return false
		} else {

		//calculate height of splitter panes by subtracting from the Object Pane from Content Pane
		var objPaneHeight = parseInt(uxDom.getStyle('PaneContent', 'height'));
		var objTopPaneHeight = parseInt(uxDom.getStyle('ObjectPane', 'height'));
		var objBottomPane = (objPaneHeight - objTopPaneHeight) - 10 + "px"; //subtract 3 for the preview bar splitter bar height
		dom.setStyle('PreviewPane', 'height', objBottomPane );

		}

	},
	build: function(args)
	{
		this.container = $(args['sliderMenuId']);
		this.container.style.overflow = "hidden";
		this.animating = false;
		this.headerCount = 0;
		this.items = dom.getElementsByClassName("slideMenuItem", "div", this.container);
		var iCount = 0;

		for (var i = 0; i < this.items.length; i++)
		{
			this.items[i].header = dom.getElementsByClassName("slideMenuHeader", "div", this.items[i])[0];
			iCount += (this.headerCount + this.items[i].header.offsetHeight);
		}

		// This calculates the height for everything above the accordion
		// Include all here
		this.headerCount = iCount + $('LeftPaneTop').offsetHeight + $('LeftPaneButtons').offsetHeight;


		for (var i = 0; i < this.items.length; i++)
		{
			this.items[i].parent = this;
			this.items[i].header = dom.getElementsByClassName("slideMenuHeader", "div", this.items[i])[0];
			this.items[i].body = dom.getElementsByClassName("slideMenuBody", "div", this.items[i])[0];
			this.items[i].body.style.overflow = "auto";
			var headerCount;

			if ( this.items[i].body.offsetHeight > 0 )
			{

				this.activeItem = this.items[i];
				var h = dom.getClientHeight() - this.headerCount;
				this.activeItem.body.style.height = h + "px";
				this.shrinkAtts = {height:{from:h, to:0}};
				this.expandAtts = {height:{from:0, to:h}};
			}

			YAHOO.util.Event.addListener(this.items[i].header, "click", function()
			{
				// Clicked on the header of the active item
				// Disregard if disabled

				var slideMenuArr = this.getElementsByTagName("DIV");
				var selectedHeaderClass = slideMenuArr[0].className;
				if (selectedHeaderClass.match(" disabled") != null || selectedHeaderClass.match(" selected") != null){
					return;
				}

				// Don't respond if we're already in a transition
				if (!this.parent.animating)
				{
					this.parent.animating = true;
					var shrink = new YAHOO.util.Anim(this.parent.activeItem.body, this.parent.shrinkAtts, .1, YAHOO.util.Easing.easeNone);
					var expand = new YAHOO.util.Anim(this.body, this.parent.expandAtts, .1, YAHOO.util.Easing.easeNone);
					expand.onComplete.subscribe(function()
					{
						this.parent.activeItem = this;
						this.parent.animating = false;
					}, this, true);
					shrink.animate(), expand.animate();

					//Remove old selected
					var menuDiv = document.getElementById("slideMenu");
					var divArr = menuDiv.getElementsByTagName("DIV");

					var tempClass;
					var headerArr = new Array;
					var j = 0;
					for (var i = 0; i< divArr.length; i++){
						tempClass = divArr[i].className;
						if (tempClass.match("slideMenuHeader") != null){
							headerArr[j] = divArr[i];
							j++;
						}
					}

					var headerClass;
					for (var i = 0; i< headerArr.length; i++){
						headerClass = headerArr[i].className;
						if (headerClass.match(" selected") != null){
							headerArr[i].className = "slideMenuHeader";
						}
					}

					//Assign new selected
					var slideMenuArr = this.getElementsByTagName("DIV");
					var selectedHeaderClass = slideMenuArr[0].className;
					if (selectedHeaderClass.match(" selected") == null && selectedHeaderClass.match(" disabled") == null){
						slideMenuArr[0].className = "slideMenuHeader selected";
					}

				}
			}, this.items[i], true);
		}
	},

	collapsePane: function()
	{
		try
		{
			$('nav').style.display='none';
			$('collapsedPane').style.display='block';
			$('splitbar').style.display='none';
			dom.setStyle( $('MainPane'), 'margin-left', '8px' );
			agile.ux.sidebar.resizeContainers();
		} catch(e) {
		}
	},

	expandPane: function()
	{
		try
		{
			$('nav').style.display='block';
			$('collapsedPane').style.display='none';
			$('splitbar').style.display='block';
			dom.setStyle( $('MainPane'), 'margin-left', '' );
			agile.ux.sidebar.resizeContainers();
		} catch(e) {
		}
	},
	closePane: function()
	{
		try
		{
			$('nav').style.display='none';
			$('collapsedPane').style.display='none';
			$('splitbar').style.display='none';
			agile.ux.sidebar.resizeContainers();
		} catch(e) {
			alert('x');
		}
	},
	restorePane: function()
	{
		try
		{
			$('nav').style.display='block';
			$('collapsedPane').style.display='none';
			$('splitbar').style.display='block';
			agile.ux.sidebar.resizeContainers();
		} catch(e) {
			alert('x');
		}
	}
};

//	***********************************************************
//		THE FOLLOWING IS TO APPLY THEMES
//		PROTOTYPING PURPOSES ONLY.
//	***********************************************************
agile.ux.theme =
{
	specifyColorSwatch : function()
	{
		window.open ("/car_components/specify_color_swatch.php", "color_swatch_window","location=1,status=1,scrollbars=1, width=525,height=370"); 
	},
	specifyThemeOptions : function()
	{
		window.open ("/car_components/specify_theme_options.php", "theme_option_window","location=1,status=1,scrollbars=1, width=525,height=370"); 
	}

}
//	***********************************************************
//		CONCEPT CAR SEARCHMENU
//	***********************************************************

agile.ux.searchMenu =
{
	buildSearchMenu : function(p_oEvent) {
	var createMenuItems = [

		[
			{ text: "Items", url: "", submenu: { id: "createSubmenu01", itemdata: [

				{ text: "Documents", url: "" },
				{ text: "Parts", url: "" }

				] } },
			{ text: "Changes", url: "", submenu: { id: "createSubmenu02", itemdata: [

					[
						{ text: "Change Orders", url: "" },
						{ text: "Change Requests", url: "" },
						{ text: "Manufacturer Orders", url: "" },
						{ text: "Site Change Orders", url: "" }
					],
					[
						{ text: "Deviations", url: "" },
						{ text: "Stop Ships", url: "" },
						{ text: "Price Change Orders", url: "" }
					]

				] } },
			{ text: "Manufacturers", url: "" },
			{ text: "Manufacturer Parts", url: "javascript:alert('x')" },
			{ text: "Part Groups", url: "" }
		],

		[
			{ text: "Product Service Requests", url: "", submenu: { id: "createSubmenu03", itemdata: [

				{ text: "Problem Reports", url: "" },
				{ text: "Non-conformance Reports", url: "" }

			] } },
			{ text: "Quality Change Requests", url: "", submenu: { id: "createSubmenu04", itemdata: [

				{ text: "Audits", url: "" },
				{ text: "Corrective and Preventative Actions", url: "" }

			] } },
			{ text: "Customers", url: "" }
		],

		[
			{ text: "Programs", url: "", submenu: { id: "createSubmenu05", itemdata: [

				{ text: "New", url: "" },
				{ text: "From Template", url: "" }

			] } }
		],

		[
			{ text: "Sourcing Projects", url: "" },
			{ text: "Prices", url: "", submenu: { id: "createSubmenu06", itemdata: [

				{ text: "Published Prices", url: "" },
				{ text: "Quote Histories", url: "" }

			] } },
			{ text: "Suppliers", url: "" }
		],

		[
			{ text: "File Folders", url: "" },
			{ text: "Sites", url: "" },
			{ text: "Discussions", url: "" },
			{ text: "Reports", url: "", submenu: { id: "createSubmenu07", itemdata: [

				{ text: "External Reports", url: "" },
				{ text: "Custom Reports", url: "" }

			] } }
		],

		[
			{ text: "Packages", url: "" },
			{ text: "Transfer Orders", url: "" }
		],

		[
			{ text: "Substances", url: "", submenu: { id: "createSubmenu08", itemdata: [

				{ text: "Substances", url: "" },
				{ text: "Subparts", url: "" },
				{ text: "Materials", url: "" },
				{ text: "Substance Groups", url: "" }

			] } },
			{ text: "Declarations", url: "", submenu: { id: "createSubmenu09", itemdata: [

				{ text: "Substance Declarations", url: "" },
				{ text: "Homogeneous Material Declarations", url: "" },
				{ text: "JGPSSI Declarations", url: "" },
				{ text: "Supplier Declarations of Conformance", url: "" },
				{ text: "IPC 1752-1 Declarations", url: "" },
				{ text: "IPC 1752-2 Declarations", url: "" }

			] } },
			{ text: "Specifications", url: "" }
		]

	];

	var createMenu = new YAHOO.widget.Menu("createmenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	createMenu.addItems(createMenuItems);
	createMenu.render(document.body);
	createMenu.cfg.setProperty("context", ["toggle_create_menu", "tl","bl"]);

	function toggleCreateMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		createMenu.align("tl", "bl"); //this function MUST be used with the context property
		createMenu.show();
	}

	YAHOO.util.Event.addListener("toggle_create_menu", "mousedown", toggleCreateMenu);

},


	onMenuReady : function()
	{
		var obj = document.getElementById('toggle_search_menu');
		var agileSearchMenu = new YAHOO.widget.Menu("agile_search_menu", { constraintoviewport:false, zindex: 1000, width: "280px" });
		agileSearchMenu.render();
		agileSearchMenu.cfg.setProperty("context", ["toggle_search_menu", "tl","bl"]);
		agileSearchMenu.showEvent.subscribe(function()
		{
			this.focus();
		});

		//All properties to be rendered in the final menu must go here
		function toggleSearchMenu(p_oEvent)
		{
			YAHOO.util.Event.stopPropagation(p_oEvent);
			agileSearchMenu.align("tl", "bl"); //this function MUST be used with the context property
			agileSearchMenu.cfg.setProperty("width", "205px");
			agileSearchMenu.show();
		}

		//Take check mark on and off
		function determineChecked(p_sType, p_aArguments, p_oMenuItem)
		{
			var objClass = this.className;
			if (objClass.match(" checked") != null)
			{
				this.className = "yuimenuitem";
			} else if (objClass.match(" checked") == null) {
				this.className = this.className + " checked";
			}
		}

		function changeSelector(evt, newID) { obj.firstChild.className = newID; }

		addEvent("toggle_search_menu", "mousedown", toggleSearchMenu);
		addEvent("search_selector", "click", changeSelector, "search_selector");
		addEvent("selector_00", "click", changeSelector, "selector_00");
		addEvent("selector_01", "click", changeSelector, "selector_01");
		addEvent("selector_02", "click", changeSelector, "selector_02");
		addEvent("selector_03", "click", changeSelector, "selector_03");
		addEvent("selector_04", "click", changeSelector, "selector_04");
		addEvent("selector_05", "click", changeSelector, "selector_05");
		addEvent("selector_06", "click", changeSelector, "selector_06");
		addEvent("selector_07", "click", changeSelector, "selector_07");
		addEvent("selector_08", "click", changeSelector, "selector_08");
		addEvent("selector_09", "click", changeSelector, "selector_09");
		addEvent("selector_10", "click", changeSelector, "selector_10");
		addEvent("selector_11", "click", changeSelector, "selector_11");
		addEvent("selector_12", "click", changeSelector, "selector_12");
		addEvent("selector_13", "click", changeSelector, "selector_13");
		addEvent("selector_14", "click", changeSelector, "selector_14");
		addEvent("selector_15", "click", changeSelector, "selector_15");
		addEvent("selector_16", "click", changeSelector, "selector_16");
		addEvent("selector_17", "click", changeSelector, "selector_17");
		addEvent("selector_18", "click", changeSelector, "selector_18");
		addEvent("selector_19", "click", changeSelector, "selector_19");
		addEvent("selector_20", "click", changeSelector, "selector_20");
		addEvent("selector_21", "click", determineChecked);
	}
};


//	***********************************************************
//		CONCEPT CAR SEARCHMENU
//	***********************************************************
agile.ux.toolsMenu =
{
	buildToolsMenu : function(p_oEvent) {
	var createToolMenuItems = [

		[
			{ text: "Import", url: "" },
			{ text: "Export", url: "javascript:alert('x')" },
			{ text: "Fileload", url: "" },
			{ text: "MS Project", url: "", submenu: { id: "createSubmenu003", itemdata: 
				[
					{ text: "Publish to MS Project", url: "" },
					{ text: "Setup Project Synchronization", url: "" }
				] 
			} }
		],

		[
			{ text: "Addressbook", url: "" },
			{ text: "Administration", url: "", submenu: { id: "createSubmenu02a", itemdata: [

					[
						{ text: "Configure Dashboard", url: "" },
						{ text: "Modify Reports", url: "" },
					],
					[

						{ text: "Themes", url: "", submenu: 
							{ id: "createSubmenu003a", itemdata: 
								[
									{ text: "Specify Color Swatch", url: "javascript:agile.ux.theme.specifyColorSwatch()" },
									{ text: "Specify Theme Options", url: "javascript:agile.ux.theme.specifyThemeOptions()" }
								]
							} 
						}
					],
					[
						{ text: "Configure Logging", url: "" },
						{ text: "Monitor Cache Health", url: "" },
						{ text: "Manage Clusters", url: "" }
					]

			] } }
		],

		[
			{ text: "Process Ext 1", url: "" },
			{ text: "Process Ext 2", url: "" }
		]
	];

	var createMenu2 = new YAHOO.widget.Menu("createmenu2", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
	createMenu2.addItems(createToolMenuItems);
	createMenu2.render(document.body);
	createMenu2.cfg.setProperty("context", ["cmdTools", "tl","bl"]);

	function toggleCreateToolMenu(p_oEvent) {
		YAHOO.util.Event.stopPropagation(p_oEvent);
		createMenu2.align("tl", "bl"); //this function MUST be used with the context property
		createMenu2.show();
	}

	YAHOO.util.Event.addListener("cmdTools", "mousedown", toggleCreateToolMenu);
	}
}


//	***********************************************************
//		CONCEPT CAR FOLDERS TREE
//	***********************************************************
registerNS('agile.ux.tree');
agile.ux.tree =
{
	//	***********************************************************
	//		SEARCH TREE
	//	***********************************************************
	loadSearchTree: function ()
	{
		var tree_gST = new YAHOO.widget.AgileTreeView("searchTree");
		tree_gST.setTreeContextInfo("1", "gST", "PCMServlet", "LeftPaneHandler", "updateExpansions", "loadTreeNodes");
		var treeNode_Searches 			= new YAHOO.widget.AgileRootNode(new TreeNode("_nodeId_Searches", "Searches", "Searches", null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "Searches","emphasis"), tree_gST.getRoot(), true);

		var treeNode_4_100_100 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_100_100", "Personal Searches", "Personal Searches",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "4_100_100"), treeNode_Searches, false);
		var treeNode_4_51_51 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_51_51", "My Documents", "My Documents",null, null, "global/images/saved_search.png", "global/images/saved_search.png", null, null, null, true, true, "4_51_51"), treeNode_4_100_100, false);
		var treeNode_4_51_51 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_51_51", "Changes Pending My Approval", "Changes Pending My Approval",null, null, "global/images/saved_search.png", "global/images/saved_search.png", null, null, null, true, true, "4_51_51"), treeNode_4_100_100, false);
		var treeNode_4_51_51 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_51_51", "2006 Travel Laptop Items", "2006 Travel Laptop Items",null, null, "global/images/saved_search.png", "global/images/saved_search.png", null, null, null, true, true, "4_51_51"), treeNode_4_100_100, false);

		var treeNode_4_166_166 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_166_166", "Global Searches", "Global Searches",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "4_166_166"), treeNode_Searches, false);
		var treeNode_5_120_120_166 		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_5_120_120_166", "Changes Submitted", "Changes Submitted To Me",
			"javascript:displayQuery('120','','false','','gST',33,166)",
			null, "global/images/saved_search.png", "global/images/saved_search.png", null, null, null, false, false, "5_120_120_166"), treeNode_4_166_166, false);
		tree_gST._el.onkeydown  = function (evt) { tree_gST.handleKeyDownEvent(evt); };
		tree_gST.draw();
	},
	//	***********************************************************
	//		BOOKMARKS TREE
	//	***********************************************************
	loadBookmarkTree: function()
	{
		var tree_Bookmarks = null;
		tree_Bookmarks = new YAHOO.widget.AgileTreeView("bookmarkTree");
		tree_Bookmarks.setTreeContextInfo("RV", "RVisited", "PCMServlet", "LeftPaneHandler", "updateExpansions", "");

		var treeNode_RVisited 		= new YAHOO.widget.AgileRootNode(new TreeNode("_nodeId_RVisited", "Bookmarks", "Recently Visited", null, null, "global/images/icn_obj_bookmark.png", "global/images/icn_obj_bookmark.png", null, null, null, true, true, "RVisited","emphasis"), tree_Bookmarks.getRoot(), true);
		//	***********************************************************
		//		BOOKMARKS | HOME
		//	***********************************************************
		var treeNode_bookmarks_home	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Home", "Home",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			

			var treeNode_bookmarks_home_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Add New Widget","Add New Widget",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/new_widget_wizard.php',700,550);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_home, false);

			var treeNode_1483_501628 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501628","Dashboard","Dashboard",
				"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_dashboard/dashboard_mystuff.php', 'mainwin', function() { dashboard.init();}); return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501628"), 
				treeNode_bookmarks_home, false);


			var treeNode_bookmarks_home_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dashboard Configuration", "Dashboard Configuration",
					"javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui_configure.php', 'mainwin', function() { dp_test.init();}); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_home, false);

			var treeNode_bookmarks_home_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dashboard Filters", "Dashoard Filters",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/widget_filters.php',660,385);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_home, false);



			var treeNode_bookmarks_home_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dashboard Personalization", "Dashboard Personalization",
					"javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui_personalize.php', 'mainwin', function() { dp_test.init();}); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_home, false);
			
			
			var treeNode_bookmarks_home_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
				"Notifications","Notifications",
				"javascript:launch('pages/dialogs/notifications/index.php',560,400);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
				treeNode_bookmarks_home, false);
		//	***********************************************************
		//		BOOKMARKS | PC / PQM
		//	***********************************************************	
		var treeNode_bookmarks_pqm	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "PC/PQM", "PC/PQM",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
		
	

		
		var treeNode_bookmarks_pqm_subfolder	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Items", "Items",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_bookmarks_pqm, false);
			
			var treeNode_bookmarks_pqm_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
				"BOM Multilevel Expand", "BOM Multilevel Expand",
				"javascript:launch_dialog('pages/_testing/proj_action_dialogs/bom_multilevel_expand.php',525,300);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
				treeNode_bookmarks_pqm_subfolder, false);
			var treeNode_bookmarks_pqm_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
				"Create New Parts", "Create New Parts",
				"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_new_parts.php',550,450);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
				treeNode_bookmarks_pqm_subfolder, false);
			var treeNode_bookmarks_pqm_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
				"Find", "Find",
				"javascript:launch_dialog('pages/_testing/proj_action_dialogs/find.php',525,300);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
			treeNode_bookmarks_pqm_subfolder, false);
			
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Redline","Redline",
			"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_redline/redline_read.php', 'mainwin'); return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_bookmarks_pqm, false);
		
			
			
		//	***********************************************************
		//		BOOKMARKS | DOC MGMT
		//	***********************************************************
		var treeNode_bookmarks_docs	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Document Management", "Document Management",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			var treeNode_bookmarks_docs_attachments			= new YAHOO.widget.AgileTextNode(new TreeNode("", "Attachments", "Attachments",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_docs, false);
			/*var treeNode_bookmarks_objects_attachments_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
				"This folder is empty", "",
				"javascript:launch_dialog(XX);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
				treeNode_bookmarks_objects_attachments, false);*/
			//	***********************************************************
			//		BOOKMARKS | OBJECTS | FILE FOLDER
			//	***********************************************************
			var treeNode_bookmarks_objects_ff			= new YAHOO.widget.AgileTextNode(new TreeNode("", "File Folder", "File Folder",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_docs, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Files", "Add Files",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_files.php',700,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add URLs", "Add URLs",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_urls.php',700,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Attach Files", "Attach Files",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/attach_files.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Design Structure Where Used", "Design Structure Where Used",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/design_structure_where_used.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Remove as Attachment", "Remove as Attachment",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/remove_as_attachment.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Replace Attached Files", "Replace Attached Files",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/replace_attached_files.php',660,520);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Replace Attached Version", "Replace Attached Version",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/replace_attached_version.php',660,520);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
				var treeNode_bookmarks_objects_ff_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Replace File", "Replace File",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/prompt_replace_file.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_ff, false);
		//	***********************************************************
		//		BOOKMARKS | PGC
		//	***********************************************************
		var treeNode_bookmarks_pgc	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "PGC", "PGC",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | PGC | DECLARATIONS
			//	***********************************************************
			var treeNode_bookmarks_objects_declarations			= new YAHOO.widget.AgileTextNode(new TreeNode("", "Declarations", "Declarations",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_pgc, false);
				var treeNode_bookmarks_objects_declarations_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create Declaration (from item)", "Create Declaration (from item)",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_declaration.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_declarations, false);
				var treeNode_bookmarks_objects_declarations_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Import IPC XML", "Import IPC XML",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/import_ipc_axml.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_declarations, false);
				var treeNode_bookmarks_objects_declarations_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Import aXML", "Import aXML",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/import_axml.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_declarations, false);
				var treeNode_bookmarks_objects_declarations_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Signoff Statement", "Signoff Statement",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/signoff_statement.php',560,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_declarations, false);

			//	***********************************************************
			//		BOOKMARKS | PGC | EXCEL INTEGRATION
			//	***********************************************************
			var treeNode_bookmarks_pgc_excel = new YAHOO.widget.AgileTextNode(new TreeNode("", "Excel Integration", "Excel Integration",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_pgc, false);
			var treeNode_bookmarks_pgc_excel_00	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"IE Prompt","IE Prompt",
					"javascript:launch_dialog('/pgc/projects/excel_integration/ie_55_prompt.php',700,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_pgc_excel, false);
			var treeNode_bookmarks_pgc_excel_03 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Open Declaration Request","Open Declaration Request",
					"javascript:launch_dialog('/pgc/projects/excel_integration/open_declaration_request.php',700,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_pgc_excel, false);
			var treeNode_bookmarks_pgc_excel_04 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Progress Indicator","Progress Indicator",
					"javascript:launch_dialog('/pgc/projects/excel_integration/submit_in_progress.php',700,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_pgc_excel, false);
			var treeNode_bookmarks_pgc_excel_01 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Roll-up Specification Selection","Roll-up Specification Selection",
					"javascript:launch_dialog('/pgc/projects/excel_integration/rollup_specification_selection.php',500,250);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_pgc_excel, false);
			var treeNode_bookmarks_pgc_excel_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Substance Weight Roll-up","Substance Weight Roll-up",
					"javascript:launch_dialog('/pgc/projects/excel_integration/substance_weight_rollup.php',500,250);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_pgc_excel, false);


		//	***********************************************************
		//		BOOKMARKS | PPM
		//	***********************************************************
		var treeNode_bookmarks_ppm	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "PPM", "PPM",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | PPM | ACTIVITIES
			//	***********************************************************
			var treeNode_bookmarks_objects_activity			= new YAHOO.widget.AgileTextNode(new TreeNode("", "Activities", "Activities",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_ppm, false);
				var treeNode_bookmarks_objects_activity_00     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Action Items Tab", "Action Items Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/action_items.php', 'mainwin', function() { loadThumbnailForm(); agile.ux.thumb_palette.init() }); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_01     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Content Tab","Content Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/content.php', 'mainwin', function() { popMessage(\'fyi\') }); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_06     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dependencies Tab", "Dependencies Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/dependencies.php', 'mainwin', function() { popMessage(\'fyi\');proj_tabs_schedule.init(); }); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);


				var treeNode_bookmarks_objects_activity_06     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dependencies Palette", "Dependencies Palette",
					"javascript:launch_dialog('pages/_testing/proj_dependencies_palette/default.php',625,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);


				var treeNode_bookmarks_objects_activity_06     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dependencies Error Palette", "Dependencies Error Palette",
					"javascript:launch_dialog('pages/_error_palette/default.php',625,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);

				var treeNode_bookmarks_objects_activity_02     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Discussions Tab","Discussions Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/collab.php', 'mainwin', function() { popMessage(\'fyi\'); },proj_tabs_discussion.init()); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_03     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"News Tab", "News Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/news.php', 'mainwin', function() { loadThumbnailForm(); },proj_tabs_news.init()); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_04     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Schedule Tab", "Schedule Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/schedule.php', 'mainwin', function(){ proj_tabs_schedule.init();}); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05     = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Summary Tab", "Summary Tab",
					"javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui.php', 'mainwin', function() { MyApp.init(); MyApp.layoutSummary2(); summary.init(); proj_tabs_schedule.init();}); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Dependency Rule", "Add Dependency Rule",
					"javascript:launch_dialog('pages/_testing/proj_dependency_rule/dependency_rule.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Discussion", "Add Discussion",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_add_discussion.php',560,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Images", "Add Images",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_images.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Change Parent", "Change Parent",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/change_parent.php',560,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Collaboration", "Collaboration",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/collab.php','mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Compare Baselines", "Compare Baselines",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/compare_baselines.php',700,520);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create Action Item", "Create Action Item",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_action_item.php',560,470);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create Baseline", "Create Baseline",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_baseline.php',550,370);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_archives_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Create Discussion","Create Discussion",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_discussion.php',560,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create New Activities", "Create New Activities",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_new_activities.php',570,595);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create News", "Create News",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_news.php',550,370);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Delegate", "Delegate",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/delegate.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);				
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Move Schedule Dates", "Move Schedule Dates",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/move_schedule_dates.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);

				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Publish from Microsoft Project", "Publish from Microsoft Project",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/publish_from_project_wizard.php',640,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);

				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"PPM Summary Contents Attachments", "PPM Summary Contents Attachments",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_contents_attachments.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);



				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Remove Activities from Schedule","Place Holder...",
					"javascript:launch_dialog('/pop_activity_removal.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);


				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Reschedule Error","Reschedule Error",
					"javascript:launch_dialog('/pop_reschedule_error.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);



				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Reply to Discussion","Place Holder...",
					"javascript:launch_dialog('/pop_reply_to_discussion.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);



				/* ONE FOR THE ARCHIVES
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"PPM Summary Discussion Reply", "PPM Summary Discussion Reply",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_discussion_reply.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false); */
				
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Resource Utilization Report", "Resource Utilization Report",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/resource_utilization.php',680,670);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);

				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Send Email","Place Holder...",
					"javascript:launch_dialog('/pop_send_email.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_activity, false);


				/* ONE FOR THE ARCHIVES
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Send Message (Summary Page)", "Send Message (Summary Page)",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_send_message.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false); */
				var treeNode_bookmarks_objects_activity_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Substitute Resource", "Substitute Resource",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/substitute_resource.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_activity, false);
			//	***********************************************************
			//		BOOKMARKS | PPM | DISCUSSION
			//	***********************************************************
			var treeNode_bookmarks_objects_discussion		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_form", "Discussion", "Discussion",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_ppm, false);
				var treeNode_bookmarks_objects_discussion_00           = new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Discussion Tab", "Discussion Tab",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_discussion.php', 'mainwin', function() { objects.discussion.discussion.init }); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_discussion, false);
				var treeNode_bookmarks_objects_discussion_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create Discussion", "Create Discussion",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_discussion.php',560,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_discussion, false);


				var treeNode_bookmarks_objects_discussion_01 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"QuickView","QuickView",
					"javascript:launch_dialog('/ppm/discussion/quickview.php',700,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_discussion, false);


				var treeNode_bookmarks_objects_discussion_01 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Reply to Discussion","Reply to Discussion",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/reply_to_discussion.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_discussion, false);
		//	***********************************************************
		//		BOOKMARKS | PCM
		//	***********************************************************
		var treeNode_bookmarks_pcm	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "PCM", "PCM",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);

			var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624", 
				"xxx", "xxx",
				"javascript:launch_dialog('pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_bookmarks_pcm"), 
				treeNode_bookmarks_objects_rfq, false);


		//	***********************************************************
			//		BOOKMARKS | PCM | PRICE
			//	***********************************************************
			var treeNode_bookmarks_objects_price			= new YAHOO.widget.AgileTextNode(new TreeNode("", "Price", "Price",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_pcm, false);
				var treeNode_bookmarks_objects_price_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create New Published Price", "Create New Published Price",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_new_published_prices.php',550,590);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_price, false);
				var treeNode_bookmarks_objects_price_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Set Effective Date", "Set Effective Date",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/set_effective_date.php',460,250);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_price, false);
			//	***********************************************************
			//		BOOKMARKS | PCM | RFQ / RESPONSE
			//	***********************************************************


		var treeNode_bookmarks_objects_rfq		= new YAHOO.widget.AgileTextNode(new TreeNode("", "RFQ / Response", "RFQ Response",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_pcm, false);

				var treeNode_bookmarks_objects_rfq_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Add Alternate Part","Add Alternate Part",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_alternate_part.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"treeNode_obj_page"),
					treeNode_bookmarks_objects_rfq, false);	

				var treeNode_bookmarks_objects_rfq_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Export Responses", "Export Responses",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_rfq, false);

				var treeNode_bookmarks_objects_rfq_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Expedite RFQ Response","Expedite RFQ Response","javascript:launch_dialog('pages/_testing/proj_action_dialogs/expedite_rfq_response.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"treeNode_obj_page"),
					treeNode_bookmarks_objects_rfq, false);		

				var treeNode_bookmarks_objects_rfq_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Forward Request","Forward Request",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/forward_request.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"treeNode_obj_page"),
					treeNode_bookmarks_objects_rfq, false);		


				var treeNode_bookmarks_objects_rfq_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Set Expiration Date","Set Expiration Date",
					"javascript:launch_dialog('pcm/rfq_response/set_exparation_date.php',550,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_rfq, false);		


	


			//	***********************************************************
			//		BOOKMARKS | PCM | SOURCING PROJECT
			//	***********************************************************

			var treeNode_bookmarks_objects_sourcing		= new YAHOO.widget.AgileTextNode(new TreeNode("", "Sourcing Project", "Sourcing Project",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_pcm, false);
				

				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add/Modify Partners", "Add/Modify Partners",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_modify_partners.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);

				
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
					"AML Tab","AML Tab",
					"javascript:window.controller_instance.dispatchLink('pcm/projects/sourcing_projects/aml_tab.php', 'mainwin', 'loadAmlMenu()' );",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_sourcing, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
					"Analysis Tab","Analysis Tab",
					"javascript:window.controller_instance.dispatchLink('pcm/projects/sourcing_projects/analysis_tab.php', 'mainwin', null );",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_sourcing, false);
				
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
						"Apply Price Adders","Apply Price Adders",
						"javascript:launch_dialog('pcm/projects/sourcing_projects/apply_price_adders.php',650,350);return false;",
						null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
						treeNode_bookmarks_objects_sourcing, false);
	
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
						"Apply Price Adders by Supplier","Apply Price Adders by Supplier",
						"javascript:launch_dialog('pcm/projects/sourcing_projects/apply_price_adders_by_supplier.php',650,350);return false;",
						null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
						treeNode_bookmarks_objects_sourcing, false);
	
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
						"Apply Price Adders by Commodity","Apply Price Adders by Commodity",
						"javascript:launch_dialog('pcm/projects/sourcing_projects/apply_price_adders_by_commodity.php',650,350);return false;",
						null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
						treeNode_bookmarks_objects_sourcing, false);

				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Bulk Edit", "Bulk Edit",
					"javascript:launch_dialog('pcm/projects/sourcing_projects/bulk_edit.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
					"Changes Tab","Changes Tab",
					"javascript:window.controller_instance.dispatchLink('pcm/projects/sourcing_projects/changes_tab.php', 'mainwin', null );",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_sourcing, false);

				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Calculate Quantities", "Calculate Quantities",
					"javascript:launch_dialog('pages/_testing/calculate_quantities/calculate.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);
				
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Costed BOM Comparison","Costed BOM Comparison",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/costed_bom_comparison.php',850,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);
				
				
				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create New Sourcing Project A", "Create New Sourcing Project A",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_new_sourcing_project_a.php',560,490);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);
				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create New Sourcing Project B", "Create New Sourcing Project B",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_new_sourcing_project_b.php',560,570);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);
				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Create Request for Quote", "Create Request for Quote",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_request_for_quote.php',850,650);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);
				
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
					"Item Master Subtab","Item Master Subtab",
					"javascript:window.controller_instance.dispatchLink('pcm/projects/sourcing_projects/changes_itemmaster_subtab.php', 'mainwin', null );",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_sourcing, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
					"Items Tab","Items Tab",
					"javascript:window.controller_instance.dispatchLink('pcm/projects/sourcing_projects/items_tab.php', 'mainwin', null );",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_sourcing, false);
				
				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Modify Price Periods", "Modify Price Periods",
					"javascript:launch_dialog('pcm/projects/sourcing_projects/modify_price_periods.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Non-Material Comparison","Non-Material Comparison",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/non_material_comparison.php',850,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Price Details","Price Details",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/price_details.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);
		



				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Price Lookup from Item Master","Price Lookup from Item Master",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/price_lookup_from_item_master.php',700,550);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);


				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Publish Item to Master", "Publish Item to Master",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/publish_to_item_master.php',560,680);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);


				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"QuickView Palette w/Tabs", "QuickView Palette w/Tabs",
					"javascript:launch_dialog('/pages/_testing/proj_quickview_palette/default.php#',800,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);


				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Rollup Cost", "Rollup Cost",
					"javascript:launch_dialog('pcm/projects/sourcing_projects/rollup_cost.php',850,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);
				

			
				
				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Set Target Price", "Set Target Price",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/set_target_price.php',560,500);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);


				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Set as Best Auto Select", "Set as Best Auto Select",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/set_as_best_auto_select.php',700,550);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);


				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Update AML from Item Master", "Update AML from Item Master",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/update_aml_from_item_master.php',550,330);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_sourcing, false);

				var treeNode_bookmarks_objects_sourcing_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"View Conversion Rates","View Conversion Rates",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/view_conversion_rates.php',660,350);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_sourcing, false);


		//	***********************************************************
		//		BOOKMARKS | COMMON OBJECTS
		//	***********************************************************
		var treeNode_bookmarks_cmn_obj	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Common Objects", "Common Objects",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | OBJECTS | REPORTS
			//	***********************************************************
			var treeNode_bookmarks_objects_reports		= new YAHOO.widget.AgileTextNode(new TreeNode("", "Reports", "Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_obj, false);
				var treeNode_bookmarks_objects_reports_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Change Cyle Time Report","Change Cycle Time Report",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/change_cycle_time_report.php',700,610);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_objects_reports, false);
				
				var treeNode_bookmarks_objects_reports_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Parts Compliance", "Parts Compliance",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/part_compliance_report.php',660,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_reports, false);
				
				var treeNode_bookmarks_objects_reports_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Schedule Report","Schedule Report",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/change_activity_report.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), 
					treeNode_bookmarks_objects_reports, false);


				
				var treeNode_bookmarks_objects_reports_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"View Report Properties", "View Report Properties",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/view_schedule_details.php',525,425);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_reports, false);
			//	***********************************************************
			//		BOOKMARKS | COMMON OBJECTS | SUPPLIER
			//	***********************************************************
			var treeNode_bookmarks_objects_supplier		= new YAHOO.widget.AgileTextNode(new TreeNode("", "Supplier", "Supplier",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_obj, false);
				var treeNode_bookmarks_objects_supplier_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Manufacturer Offering", "Add Manufacturer Offering",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_manufacturer_offering.php',550,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_supplier, false);
				var treeNode_bookmarks_objects_supplier_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Routing Rule", "Add Routing Rule",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_routing_rule.php',560,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_supplier, false);
				var treeNode_bookmarks_objects_supplier_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Define Routing Specifications", "Design Routing Specifications",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/define_routing_specs.php',550,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_supplier, false);
			//	***********************************************************
			//		BOOKMARKS | COMMON OBJECTS | USER 
			//	***********************************************************
			var treeNode_bookmarks_objects_user		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_form", "User", "User",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_obj, false);
				var treeNode_bookmarks_objects_user_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Escalation Tab", "Escalation Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/user_obj_escalating_tab.php', 'mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user, false);
				var treeNode_bookmarks_objects_user_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Escalation Dialog", "Add Escalation Dialog",
					"javascript:launch_dialog('pages/_testing/proj_tabs/user_obj_escalating_tab_create_dialog.php',560,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user, false);
				var treeNode_bookmarks_objects_user_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Change Password", "Change Password",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/reset_password.php',560,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user, false);
				var treeNode_bookmarks_objects_user_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Reset User Password", "Reset User Password",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/reset_user_account.php',620,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user, false);
			//	***********************************************************
			//		BOOKMARKS | COMMON OBJECTS | USER GROUP
			//	***********************************************************
			var treeNode_bookmarks_objects_user_group		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_form", "User Group", "User Group",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_obj, false);
				var treeNode_bookmarks_objects_user_group_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Assignments Tab", "Assignments Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/user_group_obj_assignments_tab.php', 'mainwin' ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user_group, false);
				
				var treeNode_bookmarks_objects_user_group_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"User Share Tab", "User Share Tab",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_tabs/user_obj_share.php', 'mainwin' ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"),
					treeNode_bookmarks_objects_user_group, false);
		//	***********************************************************
		//		BOOKMARKS | COMMON ACTIONS
		//	***********************************************************
		var treeNode_bookmarks_cmn_actions	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Common Actions", "Common Actions",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | COMMON ACTIONS | COMMON
			//	***********************************************************
			var treeNode_bookmarks_objects_common			= new YAHOO.widget.AgileTextNode(new TreeNode("", "Common", "Common",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_actions, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Bookmarks", "Bookmarks",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/bookmarks.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Common Download Dialog", "Common Download Dialog",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/common_download.php',300,225);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Copy URL to Clipboard", "Copy URL to Clipboard",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/copy_url_to_clipboard.php',560,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Export", "Export",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/export_wizard.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Import", "Import",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/import_wizard.php',850,575);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Print", "Print",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/print.php',560,445);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Print (small)", "Print (small)",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/print_small.php',460,245);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Print Preview", "Print Preview",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/print_preview.php',850,560);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Prompt File Upload", "Prompt File Upload",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/prompt_adv_file_upload.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Replace File Folder Files", "Replace File Folder Files",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/table_edit_frame.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Save As", "Save As",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/save_as.php',560,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Save As (w/Attachments)", "Save As (w/Attachments)",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/save_as_w_attachments.php',560,550);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Save Search As", "Save Search As",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/save_search_as.php',560,550);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Send", "Send",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/send.php',560,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Share", "Share",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/share.php',660,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Subscriptions", "Subscriptions",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/subscriptions.php',560,450);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
				var treeNode_bookmarks_objects_common_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"VM Wizard", "VM Wizard",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/vm_wizard.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common, false);
			//	***********************************************************
			//		BOOKMARKS | OBJECTS | COMMON WORKFLOW
			//	***********************************************************
			var treeNode_bookmarks_objects_common_workflow		= new YAHOO.widget.AgileTextNode(new TreeNode("", "Common Workflow", "Common Workflow",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_bookmarks_cmn_actions, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Add Approvers and Observers", "Add Approvers and Observers",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/add_approvers_and_observers.php',560,500);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Approve", "Approve",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/approve.php',675,660);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Audit Release Results", "Audit Release Results",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/audit_released_results.php',525,375);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"AML Bulk Change", "AML Bulk Change",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/aml_bulk_change_wizard.php',850,650);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Audit Status Results", "Audit Status Results",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/audit_status_results.php',525,375);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"BOM Bulk Change", "BOM Bulk Change",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/bulk_change_wizard.php',850,650);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Change Status", "Change Status",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/change_status.php',560,700);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Comment", "Comment",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/comment.php',560,470);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Reject", "Reject",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/reject.php',675,660);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"Remove Approvers and Observers", "Remove Approvers and Observers",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/remove_approvers_and_observers.php',560,500);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);
				var treeNode_bookmarks_objects_common_workflow_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("", 
					"View Workflows", "View Workflows",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/view_workflows.php',660,420);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document", null, null, true, true, "treeNode_obj_page"), 
					treeNode_bookmarks_objects_common_workflow, false);

				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Add Transfer Specifications","Add Transfer Specifications",
					"javascript:launch_dialog('common_objects/transfer_order/add_transfer_specifications.php',650,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_cmn_actions, false);

				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("","Create Criteria","Create Criteria","javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_criteria.php',720,400);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"treeNode_obj_page"), treeNode_bookmarks_cmn_actions, false);		

					var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("","Create Transfer Authority","Crfeate Transfer Authority","javascript:launch_dialog('pages/_testing/proj_action_dialogs/create_transfer_authority.php',560,540);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"treeNode_obj_page"), treeNode_bookmarks_cmn_actions, false);		
			
				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"File Load Options","File Load Options",
					"javascript:launch_dialog('common_objects/action/file_load_options.php',650,420);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_cmn_actions, false);						
			
				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Organize Bookmarks","Organize Bookmarks",
					"javascript:launch_dialog('common_actions/common/organize_bookmarks.php',650,420);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_cmn_actions, false);						
						
				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Searches: Activities","Searches: Activities",
					"javascript:launch_dialog('pages/_testing/proj_saved_searches/activities.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_cmn_actions, false);

				var treeNode_bookmarks_objects_common_actions 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Searches: Issues","Searches: Issues",
					"javascript:launch_dialog('pages/_testing/proj_saved_searches/issues.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_cmn_actions, false);
		
		
		//	***********************************************************
		//		BOOKMARKS | OBJECTS | PAGE LAYOUTS
		//	***********************************************************
		var treeNode_obj_page 		= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_objPage", "Page Layouts", "Page Layouts",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | PAGE LAYOUTS | FORM
			//	***********************************************************
			var treeNode_form 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_form", "Form", "Form",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_form"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","ECO-003477","ECO-003477",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_windowing/eco_003477.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_eng_change_order.png","global/images/icn_obj_eng_change_order.png","Document",null,null,false,false,"1483_501624"), treeNode_form, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Form No Priv and Errors","Form No Priv and Errors",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/design_forms/form_01.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_form, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Form UI Controls","Form UI Controls",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_06/complete_form/complete_form_read.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_form, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Layout","Layout",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_form.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_form, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","PPM General Info","PPM General Info",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_ppm_general_info.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_form, false);
		//	***********************************************************
		//		BOOKMARKS | THUMBNAIL
		//	***********************************************************
		var treeNode_obj_thumbnails 		= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_objPage", "Thumbnails", "Thumbnails",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Thumbnail Layout","Thumbnail Layout",
				"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_thumbnail/thumbnail_read.php', 'mainwin', function() { loadThumbnailForm(); } ); return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_thumbnails, false);
	
			var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Thumbnail Table Layout","Thumbnail Table Layout",
				"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_thumbnail/thumbnail_table.php', 'mainwin', function() { loadThumbnailForm(); } ); return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_thumbnails, false);
		//	***********************************************************
		//		BOOKMARKS | DIALOG TYPES
		//	***********************************************************
		var treeNode_bookmars_dialogs	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Dialog Types", "Dialog Types",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			var treeNode_bookmarks_dialogs_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Action Dialog","Action Dialog",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/save_as.php',525,475);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmars_dialogs, false);
			var treeNode_bookmarks_dialogs_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Wizard","Wizard",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/wizard.php',850,650);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmars_dialogs, false);
		//	***********************************************************
		//		BOOKMARKS | UI ELEMENTS
		//	***********************************************************
		var treeNode_bookmarks_uie	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "UI Elements", "UI Elements",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			var treeNode_bookmarks_uie_03 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Aliasing","Aliasing",
					"javascript:launch_dialog('pages/_testing/proj_aliasing/index.php', 525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_04 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Any/All Dialog","Any/All Dialog",
					"javascript:launch_dialog('pages/_testing/anyall/anyall.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_07 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Cascade List","Cascade List",
					"javascript:launch_dialog('pages/_testing/proj_cascade_list/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_01 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Empty Palette","Empty Palette",
					"javascript:launch('pages/_empty_base_palette/default.php');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Filter Select Edit Frame POC","Filter Select Edit Frame POC",
					"javascript:launch_dialog('car.php?page=pages/sprint_05/car_templates/obj_form.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Info Pop","Info Pop",
					"javascript:launch_dialog('pages/_testing/proj_infopop/infopop.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_09 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Multi-Select Cascade List","Multi-Select Cascade List",
					"javascript:launch_dialog('pages/_testing/proj_mscl_tree/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_12 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Multi-Select List","Multi-Select List",
					"javascript:launch_dialog('pages/sprint_06/complete_form/js_msl/multi_select_list.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_15 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Multi-Select Pill Animation","Multi-Select Pill Animation",
					"javascript:launch_dialog('pages/_testing/proj_pill_anim/multiple_pills/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_16 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Multi-Select Search","Multi-Select Search",
					"javascript:launch_dialog('/pages/_testing/proj_mss/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_17 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Multi-Select User Search","Multi-Select User Search",
					"javascript:launch_dialog('/pages/_testing/proj_mus/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_13 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"New Pill Animation","New Pill Animation",
					"javascript:launch_dialog('pages/_testing/proj_pill_anim/singleSelectSearch.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_04 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Search Prompt","Search Prompt",
					"javascript:launch_dialog('pages/_testing/search_prompt/search_prompt.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_14 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Single-Select Pill Animation","Single-Select Pill Animation",
					"javascript:launch_dialog('pages/_testing/proj_pill_anim/single_pill/singleSelectSearch.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_08 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Single-Select Search","Single-Select Search",
					"javascript:launch_dialog('pages/_testing/proj_sss/singleSelectSearch.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_11 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Shuttle Control","Shuttle Control",
					"javascript:launch_dialog('/pages/_testing/proj_shuttle/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_10 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Select File Dialog","Select File Dialog",
					"javascript:launch_dialog('/pages/_testing/proj_select_file/selectfile.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);

			var treeNode_bookmarks_uie_10 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Shuttle Control Lock Design","Shuttle Control Lock Design",
					"javascript:launch_dialog('/pages/_testing/proj_shuttle_control/shuttle_lock.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_05 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Tooltips 1","Tooltips 1",
					"javascript:launch_dialog('pages/_testing/proj_mscl_tree/index.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_bookmarks_uie_06 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Toottips 2","Tool Tips 2",
					"javascript:launch_dialog('pages/_testing/proj_mus/index.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_uie, false);
			var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Multi Button Controls 1","LJ-400-E",
			"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_multi_button_controls/controls_1.php', 'mainwin'); return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_bookmarks_uie, false);


		//	***********************************************************
		//		BOOKMARKS | ARCHIVES
		//	***********************************************************
		var treeNode_bookmarks_archives	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Archive", "Archive",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);
			//	***********************************************************
			//		BOOKMARKS | ARCHIVES | MESSAGING STRIP (DMS) EXAMPLES
			//	***********************************************************
			var treeNode_messageStrip 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_messageStrip", "Messaging Strip (DMS) Examples", "Messaging Strip (DMS) Examples",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_messageStrip"), treeNode_bookmarks_archives, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Error & warning alert","Error & warning alert",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/car_templates/combined_warning_error.php', 'mainwin', function() { popMessage(\'error\'); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_messageStrip, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Error alert","Error alert",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/car_templates/error.php', 'mainwin',  function() { popMessage(\'error\'); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_messageStrip, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","For your information","For your information",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/car_templates/fyi.php', 'mainwin',  function() { popMessage(\'fyi\'); } );  return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_messageStrip, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Warning alert","Warning alert",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/car_templates/warning.php', 'mainwin', function() { popMessage(\'error\'); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_messageStrip, false);
			//	***********************************************************
			//		BOOKMARKS | ARCHIVES | MULTIPLE WINDOW DEMO
			//	***********************************************************
			var treeNode_MDI        	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_MDI", "Multiple Window Demo", "Multiple Window Demo",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_MDI"), treeNode_bookmarks_archives, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","ECO-003477","ECO-003477",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_windowing/eco_003477.php', 'ecowin'); return false;",
					null, "global/images/icn_obj_eng_change_order.png","global/images/icn_obj_eng_change_order.png","Document",null,null,false,false,"1483_501624"), treeNode_MDI, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_objPage", "LJ3 BOM", "LJ3 BOM",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_windowing/lego_jeep_lj3.php', 'bomwin', function() { agile.ux.demo.lj3bom.init(); } ); return false;",
					null, "global/images/icn_obj_bom.png", "global/images/icn_obj_bom.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_MDI, false);
			//	***********************************************************
			//		BOOKMARKS FILES
			//	***********************************************************
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Bi-Pane Layout","Bi-Pane Layout",
					"javascript:launch_dialog('_anthony/panes/2panes.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_01 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Buttons & Tabs","Buttons & Tabs",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_01/buttons.php', 'mainwin' ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dashboard POC","Dashboard POC",
					"javascript:launch_dialog('_anthony/dashboard/dashboard.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Dashboard w/Themes","Dashboard w/Themes",
					"javascript:launch_dialog('_anthony/dashboard/dashboard_themes.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"DMS - Combined  Pop-up","DMS - Combined  Pop-up",
					"javascript:launch_dialog('pages/sprint_04/dms/popCombined.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"DMS - Error Pop-up","DMS - Error Pop-up",
					"javascript:launch_dialog('pages/sprint_04/dms/popError.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"DMS - FYI Pop-up","DMS - FYI Pop-up",
					"javascript:launch_dialog('pages/sprint_04/dms/popFyi.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"DMS - Help Pop-up","DMS - Help Pop-up",
					"javascript:launch_dialog('pages/sprint_04/dms/popHelp.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"DMS - Warning Pop-up","DMS - Warning Pop-up",
					"javascript:launch_dialog('pages/sprint_04/dms/popWarning.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Help Only","Help Only",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/dms/dms_help.php', 'mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Help & Error","Help & Error",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/dms/dms_help_error.php', 'mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Help & FYI","Help & FYI",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/dms/dms_help_fyi.php','mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Help & Warning","Help & Warning",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/dms/dms_help_warning.php','mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Help & Warning/Error","Help & Warning/Error",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_04/dms/dms_help_warning_error.php','mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Mass Update Wizard","Mass Update Wizard",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/mass_update_wizard.php',850,650);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Object Header","Object Header",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_01/object_header.php','mainwin');return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_03 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Page & Palette Activity Indicator","Page & Palette Activity Indicator",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/ppm_summary_contents_attachments.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"RFQ: Export Responses","RFQ: Export Responses",
					"javascript:launch_dialog('pages/_testing/proj_action_dialogs/export_responses.php',525,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Table - Subtabs","Table - Subtabs",
					"javascript:launch_dialog('car.php?page=pages/sprint_05/car_templates/obj_table_tab.php',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Table - Add Issue","Table - Add Issue",
					"javascript:launch_dialog('pages/_testing/proj_table_issue/table_add_issue.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_04 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Table Prototype", "Table Prototype",
					"javascript:launch_dialog('pages/_testing/proj_coqsoft_table/agile_table.html',1024,768);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_bookmarks_archives_02 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Tri-Pane Layout","Tri-Pane Layout",
					"javascript:launch_dialog('_anthony/panes/3panes.php',800,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_archives, false);
			var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Multi Button Controls 2","LJ-400-E",
				"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_multi_button_controls/controls_2.php', 'mainwin'); return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_bookmarks_archives, false);




		//	***********************************************************
		//		BOOKMARKS | TEMP
		//	***********************************************************
		var treeNode_bookmarks_temp	= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_uiElements", "Temp", "Temp",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_obj_page"), treeNode_RVisited, false);

			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Shortcuts Cheat Sheet","Shortcuts Cheat Sheet",
					"javascript:launch_scrolling_dialog('/pages/_testing/proj_action_dialogs/shortcuts_cheat_sheet.php',700,500);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false);


			/* ONE FOR THE ARCHIVES */
			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Tree Compare","Tree Compare",
					"javascript:launch_dialog('/tree_compare.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false);

			/* ONE FOR THE ARCHIVES */

			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Terms &amp; Conditions","Terms &amp; Conditions",
					"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_terms_condition/terms.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false);

			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
				"Intro Video","Intro Video",
				"javascript:launch_dialog('pages/_testing/proj_video/video.php',800,600);return false;",
				null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_bookmarks_temp, false);
	

/*
			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Reply to Discussion","Place Holder...",
					"javascript:launch_dialog('/pop_reply_to_discussion.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false); */


			/******* Need to be sorted *******/



			
			

			
			
			
			/************************************/








			/*
			var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Send Email","Place Holder...",
					"javascript:launch_dialog('/pop_send_email.php',700,600);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false);*/








			/*var treeNode_bookmarks_temp_00 	= new YAHOO.widget.AgileTextNode(new TreeNode("",
					"Place Holder...","Place Holder...",
					"javascript:launch_dialog('/pages/_testing/temp/ie_55_promptx.php',700,300);return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"),
					treeNode_bookmarks_temp, false);
			*/


		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Simplified Supplier UI","Simplified Supplier UI",
			"javascript:launch_dialog('pages/simplified_supplier/supplier_ui.php',1024,768);return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		
		
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","QuickView","QuickView",
			"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_form.php', 'mainwin', 'quickview.init()' ); return false",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);


		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","POC - 2 Col Layout, Top","POC: 2 Column Layout",
			"javascript:window.controller_instance.dispatchLink('pages/sprint_03/concept_forms/poc_02.php', 'mainwin'); return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);


		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Edit Table","Edit Table","",null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);

		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
			"Shortcuts Cheat Sheet","Shortcuts Cheat Sheet",
			"javascript:launch_scrolling_dialog('pages/_testing/proj_action_dialogs/shortcuts_cheat_sheet.php',700,410);return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);

		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
			"About","About",
			"javascript:launch_dialog('pages/_testing/proj_action_dialogs/about_dialog.php',700,490);return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);

		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624",
			"Test Find","Test Find",
			"javascript:launch_dialog('pages/_testing/proj_xyz/index.php',700,490);return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);




			//	***********************************************************
			//		BOOKMARKS | OBJECTS | OBJECT PAGE LAYOUTS | TABLE
			//	***********************************************************
			var treeNode_table 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_form", "Table", "Table",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_table"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Attachments","Attachments",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_06/form_attachments/attachments.php', 'mainwin', function() { onTreeGridLoad(); pi_in_table_attachments.init(); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_table, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Layout","Layout",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_table.php', 'mainwin', function() { onTreeGridLoad(); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_table, false);
			//	***********************************************************
			//		BOOKMARKS | OBJECTS | OBJECT PAGE LAYOUTS FILES
			//	***********************************************************
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Full Display Tables","Full Display Tables",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/full_display_tables.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);


				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Full Display Table 01","Full Display Tables",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/full_display_tables_01.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Full Display Table 02","Full Display Tables",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/full_display_tables_02.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Summary and Table","Summary and Table",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_summary_and_table.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Table w/Preview","Table w/Preview",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_table_preview.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Table w/Sub-tabs","Table w/Sub-tabs",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_table_tab.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Tree Table","Tree Table",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_tree_table.php', 'mainwin'); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Two Related Tables","Two Related Tables",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_2_related_tables.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				

				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Two Related Tables w/Sub-tabs","Two Related Tables w/Sub-tabs",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_2_related_tables_subtabs.php', 'mainwin', 'subTabs()' ); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Two Tables","Two Tables",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_2_tables.php', 'mainwin'); return false",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);
				var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Workflow","Workflow",
					"javascript:window.controller_instance.dispatchLink('pages/sprint_05/car_templates/obj_item_workflow.php','mainwin', function() { toggleContent(); } ); return false;",
					null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_obj_page, false);


		//	***********************************************************
		//		DRAW THE BOOKMARKS TREE
		//	***********************************************************
		tree_Bookmarks._el.onkeydown  = function (evt) { tree_Bookmarks.handleKeyDownEvent(evt); };
		tree_Bookmarks.draw();
	},

	//	***********************************************************
	//		RECENTLY VISITED TREE
	//	***********************************************************
	loadRecentlyVisitedTree: function()
	{
		var tree_RV = null;
		tree_RV = new YAHOO.widget.AgileTreeView("recentlyVisitedTree");
		tree_RV.setTreeContextInfo("RV", "RVisited", "PCMServlet", "LeftPaneHandler", "updateExpansions", "");
		var treeNode_RVisited 		= new YAHOO.widget.AgileRootNode(new TreeNode("_nodeId_RVisited", "Recently Visited", "Recently Visited", null, null, "global/images/icn_obj_history.png", "global/images/icn_obj_history.png", null, null, null, true, true, "RVisited","emphasis"), tree_RV.getRoot(), true);

/*
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Multi Button Controls 1","LJ-400-E",
			"javascript:window.controller_instance.dispatchLink('pages/_testing/proj_multi_button_controls/controls_1.php', 'mainwin'); return false;",
			null, "global/images/icn_obj_document.png","global/images/icn_obj_document.png","Document",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
*/

		tree_RV._el.onkeydown  = function (evt) { tree_RV.handleKeyDownEvent(evt); };
		tree_RV.draw();
	},



	//	***********************************************************
	//		REPORTS AND ANALYTICS TREE
	//	***********************************************************
	loadReportsAnalytics: function()
	{
		var tree_RA = null;
		tree_RA = new YAHOO.widget.AgileTreeView("reportsAnalytics");
		tree_RA.setTreeContextInfo("RA", "RAnalytics", "PCMServlet", "LeftPaneHandler", "updateExpansions", "");
		var treeNode_RAnalytics 		= new YAHOO.widget.AgileRootNode(new TreeNode("_nodeId_RAnalytics", "Reports and Analytics", "Reports and Analytics", null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "RAnalytics","emphasis"), tree_RA.getRoot(), true);
		var treeNode_personal_reports 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_personal_reports", "Personal Reports", "Personal Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_messageStrip"), treeNode_RAnalytics, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_personal_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_personal_reports, false);
		var treeNode_global_reports 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_global_reports", "Global Reports", "Global Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_global_reports"), treeNode_RAnalytics, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_global_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_global_reports, false);
		var treeNode_standard_reports 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_standard_reports", "Standard Reports", "Standard Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_standard_reports"), treeNode_RAnalytics, false);
		var treeNode_compliance_reports = new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_compliance_reports", "Compliance Reports", "Compliance Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_compliance_reports"), treeNode_standard_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_compliance_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link","Link","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_compliance_reports, false);
		var treeNode_products_reports = new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_products_reports", "Products Reports", "Products Reports",null, null, "global/images/folder_closed.png", "global/images/folder_open.png", null, null, null, true, true, "treeNode_products_reports"), treeNode_standard_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Assembly Cost (Item Master)","Assembly Cost (Item Master)","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_products_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","BOM Comparison Report","BOM Comparison Report","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_products_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","BOM Explosion Report","BOM Explosion Report","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_products_reports, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Consolidated BOM Report","Consolidated BOM Report","",null, "global/images/icn_obj_report.png","global/images/icn_obj_report.png","Document",null,null,false,false,"1483_501624"), treeNode_products_reports, false);

		tree_RA._el.onkeydown  = function (evt) { tree_RA.handleKeyDownEvent(evt); };
		tree_RA.draw();
	}
};



// ***********************************************
//  ONLOAD FUNCTIONS FOR CONCEPT CAR (Simulates window onload)
// ***********************************************
//  called by xhr links to simulate onload function
// ***********************************************
function loadDesignForm() {
	// Load up FOCUS RING
	myInit();
	initFormFieldFocus();
	loadCompleteForm();
	// ***********************************************
	// Load Auto Number Menu
	loadAutoNumberMenu();
// ***********************************************
	// Load up Multi Select Cascade List
	agile.ux.multicascadelist.init();
// ***********************************************
	// Load up Single Select Search
	agile.ux.singleSelectSearch.init();
// ***********************************************
	// Load up Multi-select Search
	agile.ux.mss.init();
	// Load up Multi-select Search NO VALUE example
	agile.ux.mss_nv.init();
}
function loadCompleteForm() {
	// Load up FOCUS RING
	newInit();
	newForm.init();
//jQuery(document).ready( function () { alert('c'); });
//jQuery(document).ready(newForm.init);
// ***********************************************
}
function loadThumbnailForm() {
	// Load up form scripts i.e. focus field, hide errors, etc..
	loadCompleteForm();
	// Load up Thumbnail Scripts and Palette
	thumbnail.init(); /* located in pages/_testing/proj_thumnail/thumbnail.js */
	thumbTable.init();
	
	//Load up the TABS pages palettes
	agile.ux.thumb_palette.init()
}

////////////////////////////////////////
//        COLLAPSE/EXPAND
////////////////////////////////////////
function toggleContent() {

	var toggler = jQuery('.toggle');
	var content = jQuery('.toggle_content');

	toggler.click(function() { content.toggle(200); toggler.toggleClass("collapse"); toggler.toggleClass("expand"); return false;});
}
