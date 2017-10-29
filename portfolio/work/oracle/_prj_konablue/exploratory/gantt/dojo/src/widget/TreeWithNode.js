/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/


dojo.provide("dojo.widget.TreeWithNode");


dojo.widget.TreeWithNode = {
	
	// I need this to parse children
	isContainer: true,
	
	lockLevel: 0, // lock ++ unlock --, so nested locking works fine
	
	lock: function() {
		//!this.lockLevel && this.markLoading();
		this.lockLevel++;
	},
	unlock: function() {
		if (!this.lockLevel) {
			dojo.raise("unlock: not locked");
		}
		this.lockLevel--;
		//!this.lockLevel && this.unMarkLoading();
	},

	isLocked: function() {
		var node = this;
		while (true) {
			if (node.lockLevel) {
				return true;
			}
			if (node.isTree) {
				break;
			}
			node = node.parent;
		}

		return false;
	},


	uppercaseActionDisabled: function() {		
		for(var i=0; i<this.actionsDisabled.length; i++) {
			this.actionsDisabled[i] = this.actionsDisabled[i].toUpperCase();
		}
	},
	
	
	flushLock: function() {
		this.lockLevel = 0;
		//this.unMarkLoading();
	},
	
	adjustEventNames: function() {
		
		for(name in this.eventNamesDefault) {
			if (dojo.lang.isUndefined(this.eventNames[name])) {
				this.eventNames[name] = this.widgetId+"/"+this.eventNamesDefault[name];
			}
		}
	},
	
	// create my domnode on postcreate
	viewCreateChildrenNodes: function(){
		var _this = this;

		//dojo.debug("createDOMNode");
				
		//
		// create the child rows
		//
		if (this.children.length) {
			if (!this.containerNode) {
				this.viewAddContainer();
			}			
			
			for(var i=0; i<this.children.length; i++) {
				var child = this.children[i];
				child.viewAddExpand();
				child.viewAddLayout();
				this.containerNode.appendChild(child.domNode);
				
				dojo.event.topic.publish(_this.tree.eventNames.createNode, { source: child } );
			}
		}

	},

	
	
	actionIsDisabled: function(action) {
		var _this = this;

		var disabled = false;

		if (dojo.lang.inArray(_this.actionsDisabled, action)) {
			disabled = true;
		}

		if (this.isLocked()) {
			disabled = true;
		}
		
		
		if (this.isTreeNode) {
			if (this.tree.strictFolders && action == this.actions.ADDCHILD && !this.isFolder) {
				disabled = true;
			}
		}

		return disabled;
	}
	
};
