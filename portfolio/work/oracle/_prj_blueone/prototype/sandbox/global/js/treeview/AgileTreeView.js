/**
	Use same signature as Yahoo tree
*/
YAHOO.widget.AgileTreeView = function(id) {
    if (id) { 
		this.init(id);
		this.postInit(id);
	}
};


YAHOO.extend(YAHOO.widget.AgileTreeView, YAHOO.widget.TreeView, {

	//table id and table name for the this tree table model
	_tableName : null,
	_tableId : null,

	//AJAX request specific parameters
	//These are the default parameters
	_servlet : null,
	_module : null,				//Module for update expansions
	_updExpOpcode : null,		//Opcode for update expansions
	_dynLoadOpcode : null,		//Opcode for Dynamic loading Tree
	
	//for label highlighting
	_selectedId : null,
	_selectedNode : null,

	//Storage for the local key reader, only one instance that way
	_keyReader: null,

	//default shift key pressed value
	_shiftPressed: false,
	
	//post initlize tree with key support
	postInit: function(id) {
		if ("string" !== typeof id) {
            this._el = id;
        }else{;
			this._el = document.getElementById(id)
		}

		this._keyReader = new AgileKeyReader();
	},

	//set context info params for the whole tree
	setTreeContextInfo: function(tableId, tableName, servlet, module, updExpOpcode, dynLoadOpcode){
		this._servlet = servlet;
		this._module = module;
		this._updExpOpcode = updExpOpcode;
		this._dynLoadOpcode = dynLoadOpcode;
		this._tableName = tableName;
		this._tableId = tableId;
	},

	//Returns url for expansions
	getUpdateExpansionsURL: function (treeRowKey){
		return this._servlet + "?module=" + this._module + "&opcode=" + this._updExpOpcode + 
									"&tableName=" + this._tableName +"&ExpandedRow=" + treeRowKey;
	},

	//returns url for dynamic loading
	getDynamicLoadURL: function (treeRowKey){
		return "ajaxRequest=true&module=" + this._module + "&opcode=" + this._dynLoadOpcode + 
									"&tableId=" + this._tableId + "&tableName=" + this._tableName +"&ExpandedRow=" + treeRowKey;
	},

	//returns url for dynamic loading
	getTreeReloadURL: function (){
		return "ajaxRequest=true&module=" + this._module + "&opcode=" + this._dynLoadOpcode + 
									"&tableId=" + this._tableId + "&tableName=" + this._tableName;
	},

	//label highlighing
	highlightNode: function (id){ 
		var _obj = document.getElementById(id);
		if(_obj && _obj.className.indexOf("selectedNode") == -1){
			//unselect existing
			if(this._selectedId != null){
				var _oldobj = document.getElementById(this._selectedId);
				//this can happen for cross tree
				if(_oldobj != null)
					_oldobj.className = _oldobj.className.replace("selectedNode", "");
			}
			//select
			_obj.className = _obj.className + " selectedNode";
			//_obj.focus();
			this._selectedId = id
		}
	},

	//label unhighlighting
	unhighlightNode: function (id){
		var _obj = document.getElementById(id); 
		if(_obj && _obj.className.indexOf("selectedNode") != -1){			
			_obj.className = _obj.className.replace("selectedNode", "");			
		}
	},

	// Internal accessors for the modifier keys

	storeShiftKey: function() {
		this._shiftPressed = true;
	},
	
	clearShiftKey: function() {
		this._shiftPressed = false;
	},


	//Key handlers
	
	handleKeyDownEvent: function(evt) {
		if (!evt) { 
			evt = window.event; 
		}
		
		var keyInfo = this._keyReader.getKeyDict(evt);
		
		var code    = keyInfo['keycode'];
		var isShift = keyInfo['modifiers']['shift'];
		var isCtrl  = keyInfo['modifiers']['ctrl'];
		var isAlt   = keyInfo['modifiers']['alt'];
		
		switch(code) {
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

			case KEY_CODE_SHIFT:
				this.storeShiftKey();
				break;

			case KEY_CODE_PLUS:
				this.expandAll();
				break;

			case KEY_CODE_MINUS:
				this.collapseAll();
				break;

			default:
				//
		}
		
		//this._el.focus();
	},
	
	handleKeyUpEvent: function(evt) {
		if (!evt) { 
			evt = window.event; 
		}
		
		var keyInfo = this._keyReader.getKeyDict(evt);
		
		var code    = keyInfo['keycode'];
		var isShift = keyInfo['modifiers']['shift'];
		var isCtrl  = keyInfo['modifiers']['ctrl'];
		var isAlt   = keyInfo['modifiers']['alt'];

		switch(code) {
			case KEY_CODE_SHIFT:
				this.clearShiftKey();
				break;

			default:
				//
		}
		
		//this._el.focus();
	},

	handleLeftArrow: function() {	//alert('<- ');
		var thisNode = this.getNodeByIndex(this._selectedNode.index);
		if(thisNode.data.isExpandable() && this._selectedNode.expanded)
			thisNode.toggle();		
	},

	handleRightArrow: function() { //alert('-> ');
		var thisNode = this.getNodeByIndex(this._selectedNode.index);
		if(thisNode.data.isExpandable() && !this._selectedNode.expanded)
			thisNode.toggle();
	},

	handleUpArrow: function() {  //alert('handleUpArrow ')
		var thisNode = this.getNodeByIndex(this._selectedNode.index);

		var targetNode = this.getPreviousNode(thisNode)

		if(targetNode != null)
			this.setFocus(targetNode);
	},
	
	handleDownArrow: function() { //alert('handleDownArrow ')
		var thisNode = this.getNodeByIndex(this._selectedNode.index);

		var targetNode = this.getNextNode(thisNode);

		if(targetNode != null)
			this.setFocus(targetNode);
	},

	setFocus: function(node){
		document.getElementById(node.labelElId).focus();
	},

	//get the node for down arrow
	getNextNode: function(thisNode){

		var targetNode = null;

		if(thisNode.expanded && thisNode.hasChildren(true)){ 
			if(thisNode.expanded){
				targetNode = thisNode.children[0];
			}else{
				if(thisNode.nextSibling)
					targetNode = thisNode.nextSibling;
			}
		}else{
			if(thisNode.nextSibling){ 
				targetNode = thisNode.nextSibling;
			}else { 
				while(thisNode.parent != this.getRoot() && thisNode.parent.nextSibling == null){
					thisNode = thisNode.parent;
				}
				targetNode = thisNode.parent.nextSibling;
			}
		}

		return targetNode;
	},

	//get the previous node for up arrow
	getPreviousNode: function(thisNode){

		var targetNode = null;

		if(thisNode.previousSibling 
				&& thisNode.previousSibling.expanded 
				&& thisNode.previousSibling.hasChildren(true)){

			if(!thisNode.previousSibling.expanded){
				targetNode = thisNode.previousSibling;
			}else{
				targetNode = thisNode.previousSibling.children[(thisNode.previousSibling.children.length - 1)];

				while(targetNode.expanded && targetNode.hasChildren(true)){
					thisNode = targetNode.children[(targetNode.children.length - 1)];
					targetNode = thisNode;
				} 
			}
		}else{
			
			if(thisNode.previousSibling){
				targetNode = thisNode.previousSibling;
			}else if(thisNode.parent != this.getRoot()){
				targetNode = thisNode.parent;
			}
		}

		return targetNode;
	},

	//deletes this child node
	deleteChild: function(thisNode){

		if(thisNode == null)
			return;

		var parent = thisNode.parent;

		this.popNode(thisNode);
		parent.refresh(); 
	},

	//deletes this child node bt property
	deleteChildByProperty: function(property, value){

		if(typeof(property) == 'undefined' || typeof(value) == 'undefined')
			return;

		var thisNode = this.getNodesByProperty(property, value);

		//It should find exact only one item
		if(thisNode.length > 1)
			return;

		this.deleteChild(thisNode[0]);
	},

	// gets the first top level node
	getTopLevelNode: function(){
		return this.getRoot().children[0];
	},

	//RecentlyVisited Specific - adds a child
	addChild: function (thisNode){

		var x = this.getTopLevelNode().appendChild(thisNode);
		this.getTopLevelNode().refresh(); 
		this.showAsFirstChild(thisNode);
	},

	//RecentlyVisited Specific - Selected node will be moved to first
	showAsFirstChild: function(thisNode){

		if(typeof(thisNode) == 'undefined')
			thisNode = this._selectedNode;

		if(thisNode == null)
			return;

		this.popNode(thisNode);
		
		thisNode.insertBefore(this.getTopLevelNode().children[0]);   
		this.getTopLevelNode().refresh(); 
	},

	//RecentlyVisited Specific -- Selected node will be moved to first 
	showAsFirstChildByProperty: function(property, value){

		if(typeof(property) == 'undefined' || typeof(value) == 'undefined')
			return;

		var thisNode = this.getNodesByProperty(property, value);

		//It should find exact only one item
		if(thisNode.length > 1)
			return;

		this.showAsFirstChild(thisNode[0]);		
	},

	// sets fpocus on the first node
	setTreeFocus: function(){
		this.getTopLevelNode().isLoading = false
		document.getElementById(this.getTopLevelNode().labelElId).focus();
	},

	// reloads the complete tree
	reloadTree: function(){
		var startNode = this.getTopLevelNode();

		//remove all the node except from the first node
		this.removeChildren(startNode);

		//reload the tree from server

		var expKeys = setTreeNodeExpansions(this._el.id);
		
		var args = this.getTreeReloadURL(); 
		args = args + "&parentNode=startNode&TableTreeRows" + "_" + this._tableId +"=" + escape(expKeys);

		var xmlhttp = xmlRequest();
		xmlhttp.open("POST", this._servlet, false);
		xmlhttp.setRequestHeader("Cache-Control", "no-cache");
		xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		xmlhttp.send(args);

		if (xmlhttp.readyState == 4) 
		{
			var responeTxt = xmlhttp.responseText;

			if(responeTxt.indexOf("Error") == 0){
				alert(responeTxt.substring(7, responeTxt.length));
			}else{

				//alert("Success #" + responeTxt);
				eval(responeTxt);

				startNode.refresh();
				startNode.expand();
			}
		}
	}
	
});

