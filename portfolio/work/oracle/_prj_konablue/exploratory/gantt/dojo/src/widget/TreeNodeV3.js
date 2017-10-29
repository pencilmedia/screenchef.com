/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/


dojo.provide("dojo.widget.TreeNodeV3");

dojo.require("dojo.event.*");
dojo.require("dojo.io.*");

// make it a tag
dojo.widget.tags.addParseTreeHandler("dojo:TreeNodeV3");


// # //////////

dojo.widget.TreeNodeV3 = function() {
	dojo.widget.HtmlWidget.call(this);

	this.actionsDisabled = [];
}

dojo.inherits(dojo.widget.TreeNodeV3, dojo.widget.HtmlWidget);

dojo.lang.extend(dojo.widget.TreeNodeV3, dojo.widget.TreeWithNode);


dojo.lang.extend(dojo.widget.TreeNodeV3, {
	widgetType: "TreeNodeV3",

	/*
	 * dynamic loading-related stuff. 
	 * When an empty folder node appears, it is "UNCHECKED" first,
	 * then after RPC call it becomes LOADING and, finally LOADED
	 */
	loadStates: {
		UNCHECKED: "UNCHECKED",
    	LOADING: "LOADING",
    	LOADED: "LOADED"
	},

	/*
	 * Basic actions one can perform on nodes.
	 */
	actions: {
		MOVE: "MOVE",
    	REMOVE: "REMOVE",
    	EDIT: "EDIT",
    	ADDCHILD: "ADDCHILD"
	},

	expandNode: null,

	// expandNode has +- CSS background. Not img.src for performance, background src string resides in single place.
	templateString: '<div class="TreeNode">'
	    + '<div class="TreeExpand" dojoAttachEvent="onClick:onExpandClick" dojoAttachPoint="expandNode"></div>\n'
		+ '<div class="TreeContent" dojoAttachEvent="onClick:onContentClick" dojoAttachPoint="contentNode">${this.title}</div>\n' // can add more labels with hooks
		+ '</div>\n', 


	isTreeNode: true,

	objectId: "", // the widget represents an object

	title: "",
	
	isFolder: false,

	contentNode: null, // the item label
	
	expandLevel: "", // expand to level
	expandClass: "",

	tree: null,

	isExpanded: false,

	state: "UNCHECKED",  // after creation will change to loadStates: "loaded/loading/unchecked"

	containerNode: null,

	containerNodeTemplate: function() {
			var div = document.createElement('div');
			div.style.display = 'none';
			dojo.html.addClass(div, "TreeContainer");
			return div;
		}(),

	getInfo: function() {
		// No title here (title may be widget)
		var info = {
			widgetId: this.widgetId,
			objectId: this.objectId,
			index: this.getParentIndex()			
		}

		return info;
	},

	initialize: function(args, frag){

		//dojo.debug("Init title "+this.title+ "ch len"+this.children.length);
		
		this.uppercaseActionDisabled();

		this.adjustEventNames();
		
		this.expandLevel = parseInt(this.expandLevel);
		
		
		
	},


	onExpandClick: function(e){
		dojo.event.topic.publish(this.tree.eventNames.expandClick, { source: this, event: e });
	},


	onContentClick: function(e){
		dojo.event.topic.publish(this.tree.eventNames.contentClick, { source: this, event: e });
	},
	
	postCreate: function() {
		
		if (this.children.length) {
			this.isFolder = true;
		}
		
		this.viewCreateChildrenNodes();
	},
	
	addedTo: function(parent) {
		this.tree = parent.tree;
	},
		
	
	// can override e.g for case of div with +- text inside
	viewUpdateExpandNode: function() {
		this.viewRemoveExpand();
		this.viewAddExpand();		
	},
	
	
	viewAddContainer: function() {
		// make controller only if children exist
		this.containerNode = this.containerNodeTemplate.cloneNode(true);
		this.domNode.appendChild(this.containerNode);
	},
	
	viewAddLayout: function() {
		var _this = this;
		if (this.parent["isTree"]) {
			dojo.html.addClass(_this.domNode, "isTreeRoot");
		}
		//dojo.debug(_this.parent.children.length);
		if (this.isLastNode()) {
			dojo.html.addClass(_this.domNode, "isTreeLast");
		}
	},
	
	viewRemoveLayout: function() {
		var _this = this;
		dojo.html.removeClass(_this.domNode, "TreeRoot");
		dojo.html.removeClass(_this.domNode, "isTreeLast");
	},
	
	viewRemoveExpand: function() {
		//dojo.debug("viewRemoveExpand "+this.expandClass);
		dojo.html.removeClass(this.expandNode, this.expandClass);
	},
	
		
	viewGetExpandClass: function() {
		
		if (this.isFolder) {			
			return this.isExpanded ? "TreeExpandOpen" : "TreeExpandClosed";
		} else {
			return "TreeExpandLeaf";
		}
	},
	
	viewAddExpand: function() {
		// add class for expandNode		
		this.expandClass = this.viewGetExpandClass();
		//dojo.debug("viewAddExpand "+this.expandClass);
		dojo.html.addClass(this.expandNode, this.expandClass);
	},	
	
	
	expand: function(){
		if (this.isExpanded) return;

		if (this.children.length) {
			this.showChildren();
		}

		this.isExpanded = true;

		this.viewUpdateExpandNode();

		dojo.event.topic.publish(this.tree.eventNames.expand, {source: this} );
	},

	collapse: function(){
		if (!this.isExpanded) return;

		this.hideChildren();
		this.isExpanded = false;

		this.viewUpdateExpandNode();

		dojo.event.topic.publish(this.tree.eventNames.collapse, {source: this} );
	},

	hideChildren: function(){
		this.tree.toggleObj.hide(
			this.containerNode, this.toggleDuration, this.explodeSrc, dojo.lang.hitch(this, "onHide")
		);

		// if dnd is in action, recalculate changed coordinates 
		if(dojo.exists(dojo, 'dnd.dragManager.dragObjects') && dojo.dnd.dragManager.dragObjects.length) {
			dojo.dnd.dragManager.cacheTargetLocations();
		}
	},

	showChildren: function(){
		this.tree.toggleObj.show(
			this.containerNode, this.toggleDuration, this.explodeSrc, dojo.lang.hitch(this, "onShow")
		);

		
		if(dojo.exists(dojo, 'dnd.dragManager.dragObjects') && dojo.dnd.dragManager.dragObjects.length) {
			dojo.dnd.dragManager.cacheTargetLocations();
		}
	}


});


