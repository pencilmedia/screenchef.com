/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

/**
 * Tree model does all the drawing, visual node management etc.
 * Throws events about clicks on it, so someone may catch them and process
 * Tree knows nothing about DnD stuff, covered in TreeDragAndDrop and (if enabled) attached by controller
*/

/**
 * TODO: use domNode.cloneNode instead of createElement for grid
 * Should be faster (lyxsus)
 */
dojo.provide("dojo.widget.TreeV3");


dojo.require("dojo.widget.TreeWithNode");
dojo.require("dojo.event.*");
dojo.require("dojo.io.*");
dojo.require("dojo.widget.HtmlWidget");
dojo.require("dojo.widget.TreeNodeV3");



// make it a tag
dojo.widget.tags.addParseTreeHandler("dojo:TreeV3");


dojo.widget.TreeV3 = function() {
	dojo.widget.HtmlWidget.call(this);

	this.eventNames = {};

	// self-ref to make this.tree work same for nodes and tree
	this.tree = this;
	
	this.DNDAcceptTypes = [];
	this.actionsDisabled = [];

}
dojo.inherits(dojo.widget.TreeV3, dojo.widget.HtmlWidget);

dojo.lang.extend(dojo.widget.TreeV3, dojo.widget.TreeWithNode);

dojo.lang.extend(dojo.widget.TreeV3, {
	widgetType: "TreeV3",


	eventNamesDefault: {
		// new child does not get domNode filled in (only template draft)
		// until addChild->createDOMNode is called(program way) OR createDOMNode (html-way)
		// hook events to operate on new DOMNode, create dropTargets etc
		createNode: "createNode",
		// tree created.. Perform tree-wide actions if needed
		treeCreate: "treeCreate",
		treeDestroy: "treeDestroy",
		// expand icon clicked
		expandClick: "expandClick",
		// node title clicked
		contentClick: "contentClick",

		moveFrom: "moveFrom",
		moveTo: "moveTo",
		addChild: "addChild",
		removeNode: "removeNode",
		expand: "expand",
		collapse: "collapse"
	},

	
	strictFolders: true,

	DNDModes: {
		BETWEEN: 1,
		ONTO: 2
	},

	DNDAcceptTypes: "",

    // will have cssRoot before it 
	templateCssPath: dojo.uri.dojoUri("src/widget/templates/TreeV3.css"),

	templateString: '<div class="TreeContainer">\n</div>',

	isExpanded: true, // consider this "root node" to be always expanded

	isTree: true,
	
	objectId: "",

/* don't need to remember it. Just read at creation time and run bind() 
	controller: "",
	selector: "",
	menu: "", // autobind menu if menu's widgetId is set here
*/
	expandLevel: "", // expand to level automatically

	//
	// these icons control the grid and expando buttons for the whole tree
	//

	icons: {
		expandLoading: dojo.uri.dojoUri("src/widget/templates/images/TreeV3/loading.gif")		
	},
		


	//
	// tree options
	//

	showGrid: true,
	showRootGrid: true,


	actions: {
    	ADDCHILD: "ADDCHILD"
	},


	getInfo: function() {
		var info = {
			widgetId: this.widgetId,
			objectId: this.objectId
		}

		return info;
	},


	initializeController: function(controllerId) {		
		var controller = dojo.widget.byId(controllerId);
	
		controller.listenTree(this); // controller listens to my events
	},
/*
	initializeSelector: function() {
		if (this.selector) {
			this.selector = dojo.widget.byId(this.selector);
			this.selector.listenTree(this);
		}
			
	},

	initializeMenu: function() {		
		if (this.menu) {
			this.menu = dojo.widget.byId(this.menu);
			this.menu.listenTree(this);
		}
	},
*/

	
	
	adjustDNDMode: function() {

		if (this.DNDMode == "off") {
			this.DNDMode = 0;
		} else if (this.DNDMode == "between") {
			this.DNDMode = this.DNDModes.ONTO | this.DNDModes.BETWEEN;
		} else if (this.DNDMode == "onto") {
			this.DNDMode = this.DNDModes.ONTO;
		}

	},
	
	

	initialize: function(args, frag){
		

		var _this = this;
		
		this.tree = _this;

		this.adjustEventNames();
		this.uppercaseActionDisabled();
		this.adjustDNDMode();

		this.expandLevel = parseInt(this.expandLevel);

		//this.initializeSelector();
		//this.initializeController();
		//this.initializeMenu();


		this.containerNode = this.domNode;
		
		
		if (args['controller']) {
			this.initializeController(args['controller']);
		}

	},

	postCreate: function() {
		this.viewCreateChildrenNodes();
	},
	
	toString: function() {
		return "["+this.widgetType+" ID:"+this.widgetId+"]"
	}



});



