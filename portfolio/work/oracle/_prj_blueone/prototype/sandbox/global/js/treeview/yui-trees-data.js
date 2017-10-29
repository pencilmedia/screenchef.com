//Each tree node object

function TreeNode(id, label, tooltip, href, target, 
					baseImg_col, baseImg_exp, baseImgTip, statusImg, statusImgTip, 
					expanded, expandable, treeRowKey, className){

	this.id = id;								//id for tree node
	this.label = label;							//label for the tree node
	this.href = href || null;					//href for tree node. SET for only leaf node
	this.tooltip = tooltip || null;				//tooltip for tree node
	this.target = target || null;				//target for tree node

	this.baseImg_col = baseImg_col || null;		//base image in collpased state
	this.baseImg_exp = baseImg_exp || null;		//base image in expanded state
	this.baseImgTip = baseImgTip || null;		//base image tip
	this.statusImg = statusImg || null;			//status Img based on workflow or lifecycle
	this.statusImgTip = statusImgTip || null;	//status text based on workflow or lifecycle
	
	this.expanded = expanded || false;			//initial state of tree node. indicated not to load in dynamic tree on page load
	//Important to know for leaf node in dynamic tree behaviour
	this.expandable = expandable;				//is this expandable of tree node? 

	this.treeRowKey = treeRowKey || '';			//To identify tree for saving tree expansions state

	this.className = className || null;			// Custom styling

	function getClassName() {
		if(this.className != null)
			return ' '+ this.className;
		else
			return '';
	}

	this.getClassName = getClassName;
	
	function isExpandable() {
		return this.expandable;
	}

	this.isExpandable = isExpandable;

	
	function getBaseImg(node){ 
		if(this.baseImg_col == null || this.baseImg_exp == null)
			return null;

		var strbuf = new Array();
		strbuf[strbuf.length] = '<img src="';

		if(node.expanded){
			strbuf[strbuf.length] = this.baseImg_exp;

			if(this.baseImgTip != null)
				 strbuf[strbuf.length] = '" title="' + this.baseImgTip
		} else {
			strbuf[strbuf.length] = this.baseImg_col;

			if(this.baseImgTip != null)
				 strbuf[strbuf.length] = '" title="' + this.baseImgTip;
		}

		strbuf[strbuf.length] = '" border="0" ';
		strbuf[strbuf.length] = 'onclick="'+ node.href +'" />';

		return strbuf.join("");
	}

	this.getBaseImg = getBaseImg;
	
	function getStatusImg(){
		if(this.overlayImg != null)
			return "<img src='"+ this.statusImg +"' title='"+ this.statusImgTip +"' border='0' />";
		else
			return null;
	}

	this.getStatusImg = getStatusImg;

	function toString(){
		return this.id +","+ this.label +","+ this.href +","+ this.tooltip;
	}

	this.toString = toString;

	return this;
}


//Utility Methods

/* @param treeContainerId - div id of the tree container */

function showAsFirstChildByProperty(treeContainerId, property, value){
	if(value == 'null' || value == '')
		return;

	YAHOO.widget.TreeView.getTree(treeContainerId).showAsFirstChildByProperty(property, value);
}

function deleteChildByProperty(treeContainerId, property, value){
	if(value == 'null' || value == '')
		return;

	YAHOO.widget.TreeView.getTree(treeContainerId).deleteChildByProperty(property, value);
}

function addChild(treeContainerId, thisNode){
	if(thisNode == 'null')
		return;

	YAHOO.widget.TreeView.getTree(treeContainerId).addChild(thisNode);
}

function addChildToLeftTree(treeContainerId, thisNode){
	top.frames.LeftPane.addChild(treeContainerId, thisNode)
}

function setTreeFocus(treeContainerId){
	YAHOO.widget.TreeView.getTree(treeContainerId).setTreeFocus();
}

//Expanding any tree
function expandAllTree(treeContainerId){
	YAHOO.widget.TreeView.getTree(treeContainerId).expandAll();
}

//Collapsing any tree
function collapseAllTree(treeContainerId){
	YAHOO.widget.TreeView.getTree(treeContainerId).collapseAll();
}

//getting all the expanded node for any tree
function getAllExpandedNodes(treeContainerId){
	var tree = YAHOO.widget.TreeView.getTree(treeContainerId);

	var expandedNodes = [];

	for(var i=0; i<tree._nodes.length; i++){
		if(tree._nodes[i] && tree._nodes[i].expanded)
			expandedNodes[expandedNodes.length] = tree._nodes[i];
	}

	return expandedNodes;
}

//getting all the expanded node's row key for any tree
function getAllExpandedNodeKeys(treeContainerId){
	var tree = YAHOO.widget.TreeView.getTree(treeContainerId);
	var expandedNodeKeys = [];

	for(var i=0; i<tree._nodes.length; i++){
		if(tree._nodes[i] && tree._nodes[i].expanded && tree._nodes[i].data)
			expandedNodeKeys[expandedNodeKeys.length] = tree._nodes[i].data.treeRowKey;
	}

	return expandedNodeKeys;
}

//Dynamic Load functions

function setTreeNodeExpansions(treeDivId) 
{
	var keys = "";

	var expandedNodes = getAllExpandedNodeKeys(treeDivId);

	if (expandedNodes.length > 0) {

		for (i = 0 ; i < expandedNodes.length ; i++) {
		var key = expandedNodes[i];
			if (key != 0) {
				keys = keys + key + "=" + "true" + "&";
			} 
		} 
	} 

	return keys;
}

function loadDataForNode(node, onCompleteCallback)
{
	//alert(node + ' node.data.isExpandable()	'+ node.data.isExpandable() + ' node.data.expanded	'+ node.data.expanded)
	//skip for expanded node on load
	if(node.data.isExpandable() && !node.data.expanded){

		var thisKey = node.data.treeRowKey + "=true&";
		var expKeys = setTreeNodeExpansions(node.tree._el.id);

		if(expKeys.indexOf(thisKey) == -1)
			expKeys = thisKey + expKeys;
	
		var args = node.tree.getDynamicLoadURL(node.data.treeRowKey); 
		//parentNode= node, this node is parameter passed for this function
		args = args + "&parentNode=node&TableTreeRows" + "_" + node.tree._tableId +"=" + escape(expKeys);

		var xmlhttp = xmlRequest();
		xmlhttp.open("POST", node.tree._servlet, false);
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
			}
		}
	}

	// Be sure to notify the TreeView component when the data load is complete
    onCompleteCallback();
}

function reloadTree(treeContainerId){
	YAHOO.widget.TreeView.getTree(treeContainerId).reloadTree();
}
