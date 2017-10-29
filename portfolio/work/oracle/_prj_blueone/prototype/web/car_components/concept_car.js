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
		agile.ux.sidebar.resizeContainers();
		agile.ux.tree.loadSearchTree();
		agile.ux.tree.loadBookmarkTree();
		agile.ux.tree.loadRecentlyVisitedTree();
	},
	loadEvents: function()
	{
		agile.ux.sidebar.build( {"sliderMenuId":"slideMenu"} );
		addEvent(['sidebarExpand','collapsedPane'], 'click', agile.ux.sidebar.expandPane);
		addEvent('sidebarCollapse', 'click', agile.ux.sidebar.collapsePane);
		addEvent(window,'resize',function(){ agile.ux.sidebar.build( {"sliderMenuId":"slideMenu"} ) } );		
		addEvent(window,'resize',agile.ux.sidebar.resizeContainers);
	}
};

addEvent(window,'load',agile.ux.conceptCar.init);

//	***********************************************************
//		CONCEPT CAR SIDEBAR
//	***********************************************************
agile.ux.sidebar = 
{
	resizeContainers: function()
	{
		var windowWidth = dom.getViewportWidth();
		var navWidth;
		if ( $('nav').style.display != 'none' )
		{
			navWidth = parseInt(dom.getStyle('nav','width')) + parseInt(dom.getStyle('splitbar','width'));
		} else {
			navWidth = parseInt(dom.getStyle('collapsedPane','width'));
		}
		var mainPaneWidth = (windowWidth - navWidth) + 'px';
		dom.setStyle('MainPane', 'width', mainPaneWidth);
		
		var windowHeight = dom.getViewportHeight();
		var topPaneHeight = parseInt(dom.getStyle('TopPane','height'));
		var headerHeight  = parseInt(dom.getStyle('Header', 'height'));
		var paneContentHeight = (windowHeight - topPaneHeight - headerHeight -25) + 'px';
		dom.setStyle('PaneContent', 'height', paneContentHeight );
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
		$('nav').style.display='none';
		$('collapsedPane').style.display='block';
		$('splitbar').style.display='none';
		dom.setStyle( $('MainPane'), 'margin-left', '8px' );
		agile.ux.sidebar.resizeContainers();
		
	},
	
	expandPane: function() 
	{
		$('nav').style.display='block';
		$('collapsedPane').style.display='none';
		$('splitbar').style.display='block';
		dom.setStyle( $('MainPane'), 'margin-left', '' );
		agile.ux.sidebar.resizeContainers();
	}	
};

//	***********************************************************
//		CONCEPT CAR SEARCHMENU
//	***********************************************************
agile.ux.searchMenu = 
{
	buildSearchMenu : function(p_oEvent) 
	{
			
		var createMenu = new YAHOO.widget.Menu("createmenu", { constraintoviewport:false, zindex: 1000, hidedelay:600 });
		createMenu.addItems(agile.ux.dataset.getSearchMenu);
		createMenu.cfg.setProperty("context", ["toggle_create_menu", "tl","bl"]);
		
		function toggleCreateMenu(p_oEvent) {
			YAHOO.util.Event.stopPropagation(p_oEvent);
			createMenu.align("tl", "bl"); //this function MUST be used with the context property
			createMenu.show();
		}
		addEvent("toggle_create_menu", "mousedown", toggleCreateMenu);
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
//		CONCEPT CAR TREE
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
		tree_gST.setDynamicLoad(loadDataForNode, 1);
		var treeNode_Searches 			= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_Searches", "My Projects", "Searches", null, null, "../../../global/images/folder_closed.png", "../../../global/images/folder_open.png", null, null, null, true, true, "Searches"), tree_gST.getRoot(), true);
		var treeNode_4_100_100 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_100_100", "Global Searches", "Global Searches",null, null, "../../../global/images/folder_closed.png", "../../../global/images/folder_open.png", null, null, null, true, true, "4_100_100"), treeNode_Searches, false);
		var treeNode_4_51_51 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_51_51", "Workflow Searches", "Workflow Searches",null, null, "../../../global/images/folder_closed.png", "../../../global/images/folder_open.png", null, null, null, true, true, "4_51_51"), treeNode_4_100_100, false);
		var treeNode_5_110_110_51 		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_5_110_110_51", "All Deviations", "All Deviations About To Expire","javascript:displayQuery('110','','false','','gST',14,51)", null, "../../../global/images/saved_search.png", "../../../global/images/saved_search.png", null, null, null, false, false, "5_110_110_51"), treeNode_4_51_51, false);
		var treeNode_5_228_228_51 		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_5_228_228_51", "All Changes", "Changes that have not been signed off for more than 14 days","javascript:displayQuery('228','','false','','gST',15,51)", null, "../../../global/images/saved_search.png", "../../../global/images/saved_search.png", null, null, null, false, false, "5_228_228_51"), treeNode_4_51_51, false);
		var treeNode_5_111_111_51 		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_5_111_111_51", "All Released Test Test Test", "All Released Stop Ships","javascript:displayQuery('111','','false','','gST',32,51)", null, "../../../global/images/saved_search.png", "../../../global/images/saved_search.png", null, null, null, false, false, "5_111_111_51"), treeNode_4_51_51, false);
		var treeNode_4_166_166 			= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_4_166_166", "Workflow Routings", "Workflow Routings",null, null, "../../../global/images/folder_closed.png", "../../../global/images/folder_open.png", null, null, null, true, true, "4_166_166"), treeNode_Searches, false);
		var treeNode_5_120_120_166 		= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_5_120_120_166", "Changes Submitted", "Changes Submitted To Me","javascript:displayQuery('120','','false','','gST',33,166)", null, "../../../global/images/saved_search.png", "../../../global/images/saved_search.png", null, null, null, false, false, "5_120_120_166"), treeNode_4_166_166, false);
		tree_gST._el.onkeydown  = function (evt) { tree_gST.handleKeyDownEvent(evt); }; 
		tree_gST.draw();
	},
	
	//	***********************************************************
	//		BOOKMARK TREE
	//	***********************************************************
	loadBookmarkTree: function() 
	{
		var tree_RV = null;
		tree_RV = new YAHOO.widget.AgileTreeView("bookmarkTree");
		tree_RV.setTreeContextInfo("RV", "RVisited", "PCMServlet", "LeftPaneHandler", "updateExpansions", "");
		var treeNode_RVisited 		= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_RVisited", "Bookmarks", "Recently Visited", null, null, "../../../global/images/icn_obj_bookmark.png", "../../../global/images/icn_obj_bookmark.png", null, null, null, true, true, "RVisited"), tree_RV.getRoot(), true);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Object Form","Link Title","javascript:agile.ux.xhr.get('content','_test_form.php'); return false",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Another Test Form","Link Title","javascript:agile.ux.xhr.get('content','_test_form2.php'); return false",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 02","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 03","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 04","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 05","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);


		tree_RV._el.onkeydown  = function (evt) { tree_RV.handleKeyDownEvent(evt); }; 
		tree_RV.draw();
	},
	
	//	***********************************************************
	//		RECENTLY VISITED TREE
	//	***********************************************************
	loadRecentlyVisitedTree: function() 
	{
		var tree_RV = null;
		tree_RV = new YAHOO.widget.AgileTreeView("recentlyVisitedTree");
		tree_RV.setTreeContextInfo("RV", "RVisited", "PCMServlet", "LeftPaneHandler", "updateExpansions", "");
		var treeNode_RVisited 		= new YAHOO.widget.AgileTextNode(new TreeNode("_nodeId_RVisited", "7600 Series Router", "Recently Visited", null, null, "../../../global/images/folder_closed.png", "../../../global/images/folder_open.png", null, null, null, true, true, "RVisited"), tree_RV.getRoot(), true);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 01","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 02","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 03","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 04","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		var treeNode_1483_501624 	= new YAHOO.widget.AgileTextNode(new TreeNode("treeNode_1483_501624","Link 05","Link Title","javascript:alert('link clicked');",null, "../../../global/images/icn_obj_manufacturer_part.png","../../../global/images/icn_obj_manufacturer_part.png","Manufacturer Part",null,null,false,false,"1483_501624"), treeNode_RVisited, false);
		tree_RV._el.onkeydown  = function (evt) { tree_RV.handleKeyDownEvent(evt); }; 
		tree_RV.draw();
	}
};