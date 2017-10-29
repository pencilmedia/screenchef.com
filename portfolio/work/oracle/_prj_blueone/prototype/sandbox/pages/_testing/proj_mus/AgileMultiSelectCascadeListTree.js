/**
	Use same signature as Yahoo tree
*/
YAHOO.widget.AgileMultiSelectCascadeListTree = function(id) {
    if (id) { 
		this.init(id);
		this.initCustom(id);
	}
};



YAHOO.extend(YAHOO.widget.AgileMultiSelectCascadeListTree, YAHOO.widget.TreeView, {
	/* ------------------------------------------------------------------------------------
		MEMBER VARIABLES
	------------------------------------------------------------------------------------ */
	
	/*
		Nodes set in the node list will have
		{
			'id': 123,
			'nodeObj': obj
		}
	*/
	_selectedNodeList: null,
	
	/*
		Used to record the first node selected, so we can do proper shift + click 
		range selection. We cannot rely on the list order, in case we sort it on 
		a different key.
	*/
	_firstSelectedNode: null,
	
	/*
		Stores the last selected node, so we can do up, down, etc.
	*/
	_lastSelectedNode: null,
	
	/*
		Store the event for easy access.
	*/
	_nodeSelectEvent: null,
	
	/*
		Storage for the local key reader, only one instance that way
	*/
	_keyReader: null,
	
	/*
		Stores a reference to the tree div
	*/
	_treeDrawTargetObj: null,
	
	/*
		Used to store the state of modifier keys during mouse movement.
	*/
	_altPressed: false,
	_ctrlPressed: false,
	_shiftPressed: false,
	
	
	/* ------------------------------------------------------------------------------------
		Init any vars that have inportance prior to construction
	------------------------------------------------------------------------------------ */
	initCustom: function(treeDrawTarget) {
		this._selectedNodeList = [];
		this._keyReader = new AgileKeyReader();
		
		if (typeof(treeDrawTarget) == 'string') {
			this._treeDrawTargetObj = document.getElementById(treeDrawTarget);
		} else {
			this._treeDrawTargetObj = treeDrawTarget;
		}
	},
	

	/* ------------------------------------------------------------------------------------
		Internal accessors for the modifier keys
	------------------------------------------------------------------------------------ */
	storeCtrlKey: function() {
		this._ctrlPressed = true;
	},
	
	storeShiftKey: function() {
		this._shiftPressed = true;
	},
	
	clearCtrlKey: function() {
		this._ctrlPressed = false;
	},
	
	clearShiftKey: function() {
		this._shiftPressed = false;
	},


	/* ------------------------------------------------------------------------------------
		Key handlers
	------------------------------------------------------------------------------------ */
	handleKeyDownEvent: function(evt) {
		if (!evt) { evt = window.event; }
		
		var keyInfo = this._keyReader.getKeyDict(evt);
		
		var code    = keyInfo['keycode'];
		var isShift = keyInfo['modifiers']['shift'];
		var isCtrl  = keyInfo['modifiers']['ctrl'];
		var isAlt   = keyInfo['modifiers']['alt'];
		
		switch(code) {
			case KEY_CODE_ENTER:
				this.fireEvent("enterKeyPressed");
				break;
			case KEY_CODE_SHIFT:
				this.storeShiftKey();
				break;
			case KEY_CODE_CTRL:
				this.storeCtrlKey();
				break;
			case KEY_CODE_CMD:
				var agent = navigator.userAgent.toLowerCase();
				if (agent.indexOf("mac") > -1) {
					this.storeCtrlKey();
				}
				break;
			case KEY_CODE_ARROW_LEFT:
				this.handleLeftArrow();
				break;
			case KEY_CODE_ARROW_UP:
				this.handleUpArrow();
				break;
			case KEY_CODE_ARROW_RIGHT:
				this.handleRightArrow();
				break;
			case KEY_CODE_ARROW_DOWN:
				this.handleDownArrow();
				break;
			case KEY_CODE_CHAR_A:
				if (this._ctrlPressed) {
					this.selectAllVisible();
				}
				break;		
		}
		
		this._treeDrawTargetObj.focus();
	},
	
	handleKeyUpEvent: function(evt) {
		if (!evt) { evt = window.event; }
		
		var keyInfo = this._keyReader.getKeyDict(evt);
		
		var code    = keyInfo['keycode'];
		var isShift = keyInfo['modifiers']['shift'];
		var isCtrl  = keyInfo['modifiers']['ctrl'];
		var isAlt   = keyInfo['modifiers']['alt'];
		
		switch(code) {
			case KEY_CODE_SHIFT:
				this.clearShiftKey();
				break;
			case KEY_CODE_CTRL:
				this.clearCtrlKey();
				break;
			case KEY_CODE_CMD:
				var agent = navigator.userAgent.toLowerCase();
				if (agent.indexOf("mac") > -1) {
					this.clearCtrlKey();
				}
				break;
		}
		
		this._treeDrawTargetObj.focus();
	},

	handleLeftArrow: function() {
		if (this._lastSelectedNode && this._lastSelectedNode['nodeObj'].expanded) {
			this._lastSelectedNode['nodeObj'].collapse();
		}
	},

	handleRightArrow: function() {
		if (this._lastSelectedNode && !this._lastSelectedNode['nodeObj'].expanded) {
			this._lastSelectedNode['nodeObj'].expand();
		}
	},

	handleUpArrow: function() {
		if (this._lastSelectedNode) {
			if (this._shiftPressed) {
				this.cancelTextSelection();
			}
						
			var iterSib = this._lastSelectedNode['nodeObj'];
			var prevSib = null;
			
			prevSib = iterSib.previousSibling;

			if (prevSib) {
				var found = false;
				while (!found) {
					if (prevSib.hasChildren(true) && prevSib.expanded) {
						var childMax = prevSib.children.length - 1;
						prevSib = prevSib.children[childMax];
					} else {
						this.handleNodeSelection(prevSib);
						found = true;
					}
				}
			} else {
				prevSib = iterSib.parent;
				if (prevSib && prevSib != this.getRoot()) {
					this.handleNodeSelection(prevSib);
				}
			}
		}
	},
	
	handleDownArrow: function() {
		if (this._lastSelectedNode) {
			if (this._shiftPressed) {
				this.cancelTextSelection();
			}

			var iterSib = this._lastSelectedNode['nodeObj'];
			var nextSib = null;

			if (iterSib.hasChildren(true) && iterSib.expanded) {
				this.handleNodeSelection(iterSib.children[0]);
			} else {
				nextSib = iterSib.nextSibling;
				if (nextSib) {
					this.handleNodeSelection(nextSib);
				} else {
					nextSib = iterSib.parent;
					var found = false;
					while (nextSib != this.getRoot() && !found) {
						if (nextSib && nextSib.nextSibling) {
							this.handleNodeSelection(nextSib.nextSibling);
							found = true;
						}
						nextSib = nextSib.parent;
					}
				}
			}
		}
	},


	/* ------------------------------------------------------------------------------------
		Functions that handle select all.
		Note the use of class binding tool.
	------------------------------------------------------------------------------------ */
	selectAllVisible: function() {
		this._selectedNodeList = [];
		this._firstSelectedNode = null;
		this._lastSelectedNode = null;
		
		var root = this.getRoot();
		var children = root.children;
		this.recurseNodes(children, 'recursiveSelectIfVisible');
	},


	recurseNodes: function(nodeList, callbackName) {
		for (var i=0; i<nodeList.length; i++) {
			var callback = agileUtilBindFunction(this, callbackName, nodeList[i]);
			callback();
		}
	},
	
	recursiveSelectIfVisible: function(node) {
		node.selectSelf();
		var nodeListObj = {'id': node.index, 'nodeObj': node};
		this._selectedNodeList[this._selectedNodeList.length] = nodeListObj;
		
		if (node.hasChildren(true) && node.expanded) {
			this.recurseNodes(node.children, 'recursiveSelectIfVisible');
		}
	},
	
	
	/* ------------------------------------------------------------------------------------
		Helper function to recurse for a node
		!!! If anyone knows how to do foo.has_key() in JS, replace this
	------------------------------------------------------------------------------------ */
	locateNodeInList: function(nodeId) {
		for (var i=0; i<this._selectedNodeList.length; i++) {
			if (this._selectedNodeList[i]['id'] == nodeId) {
				return i;
			}
		}
		return -1;
	},
	
	
	/* ------------------------------------------------------------------------------------
		Accessor to fetch the selection list
	------------------------------------------------------------------------------------ */
	getSelectedNodes: function() {
		return this._selectedNodeList;
	},
	
	
	/* ------------------------------------------------------------------------------------
		Helper to cancel the default text select
	------------------------------------------------------------------------------------ */
	cancelTextSelection: function() {
		if (document.selection) {
			document.selection.empty();
		} else {
			window.getSelection().collapseToStart();
		}
	},
	

	/* ------------------------------------------------------------------------------------
		Main worker for handling selections.
		? Break this up ?
	------------------------------------------------------------------------------------ */
	handleNodeSelection: function(node) {
		/*
			If the ctrl key was not held, we want to deselect all previous
			nodes, and clear the selection list. Not that, for shift being held
			we only care about the first selected node, so we leave that set for 
			now.
		*/
		if (!this._ctrlPressed) {
			for (var i=0; i<this._selectedNodeList.length; i++) {
				this._selectedNodeList[i]['nodeObj'].deselectSelf();
			}
			this._selectedNodeList = [];
		}
		
		/*
			Here, we store a variable to tell if we have finished processing. At
			the end of this function we check to see if we still need to do any
			procesing based on this variable's value.
		*/
		var selectProcessed = false;
		
		/*
			If the ctrl key was held, we do some special processing. If the node
			was already selected, we deselct it, otherwise, we fall through to the 
			default processing at the end.
			
			Note that I have logic to remove the first and last selected nodes as
			appropriate, but I do not have an algorithm for figuring out what should
			be the new one.
		*/
		if (this._ctrlPressed) {
			// See if it is selected ...
			var nodeListIndex = this.locateNodeInList(node.index);
			if (nodeListIndex > -1) {
				// ... if so, remove it ...
				var removed = this._selectedNodeList.splice(nodeListIndex, 1);
				removed[0]['nodeObj'].deselectSelf();
				
				// ... and if it was the "first node" make first null, same for last ...
				if (this._firstSelectedNode && removed[0]['id'] == this._firstSelectedNode['id']) {
					this._firstSelectedNode = null;
				} else if (this._lastSelectedNode && removed[0]['id'] == this._lastSelectedNode['id']) {
					this._lastSelectedNode = null;
				}
				
				// ... fincally, cancel the default select.
				selectProcessed = true;
			}
		}
		
		/*
			If shift was held, we first cancel the text range. Then we locate the 
			first selected node, and range select every node inbetween, being careful
			not to trigger errors on collapsed nodes.
		*/
		if (this._shiftPressed) {
			// Cancel the text selection ...
			this.cancelTextSelection();
			
			// ... make sure we have a place to start ...
			if (this._firstSelectedNode) {
				// ... figure out which way we have to go ...
				var startIndex  = -1;
				var finishIndex = -1;
				if (this._firstSelectedNode['id'] < node.index) {
					startIndex = this._firstSelectedNode['id'];
					finishIndex = node.index + 1;
				} else if (this._firstSelectedNode['id'] > node.index) {
					startIndex = node.index;
					finishIndex = this._firstSelectedNode['id'] + 1;
				}
				
				// ... if we have indices, process them ...
				if (startIndex > -1 && finishIndex > -1) {
					for (var i=startIndex; i<finishIndex; i++) {
						// Get the node ...
						var selectNode = this.getNodeByIndex(i);
						
						// ... if it is a child of a collapsed node, continue ...
						if (selectNode.parent && selectNode.parent != this.getRoot() && !selectNode.parent.expanded) {
							continue;
						}

						// ... otherwise select it.
						selectNode.selectSelf();
						var nodeListObj = {'id': selectNode.index, 'nodeObj': selectNode};
						this._selectedNodeList[this._selectedNodeList.length] = nodeListObj;
					}
				}
				
				// ... store as last selected ...
				var nodeListObj = {'id': node.index, 'nodeObj': node};
				this._lastSelectedNode = nodeListObj;
				
				// ... finally, cancel default select.
				selectProcessed = true;
			}
		}
			
		/*
			Now, we see if we still need to process any nodes. If so, we
			simply select it, and make it the last selected node. Also, if it 
			is the first selected, that is set here as well.
		*/
		if (!selectProcessed) {
			node.selectSelf();
			var nodeListObj = {'id': node.index, 'nodeObj': node};
			this._selectedNodeList[this._selectedNodeList.length] = nodeListObj;
			
			// If we don't yet have a fisrt selected node, store it.
			if (!(this._ctrlPressed && this._firstSelectedNode)) {
				this._firstSelectedNode = nodeListObj;
			}
			
			// Store as last selected node.
			this._lastSelectedNode = nodeListObj;
		}
	}
	
});

