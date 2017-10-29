/* -----------------------------------------------------------------------------
	TREE WORKERS
----------------------------------------------------------------------------- */
/* MAIN INIT */
function treeInit(treeDrawTarget, treeDataSource) {
	tree = new YAHOO.widget.AgileCascadeListTree(treeDrawTarget);
	//tree.setExpandAnim(YAHOO.widget.TVAnim.FADE_IN);
	//tree.setCollapseAnim(YAHOO.widget.TVAnim.FADE_OUT);
	
	var rootNode = tree.getRoot();
	traverseTreeData(treeDataSource, rootNode);

	tree.draw();


	tree.subscribe("labelClick", function(node) { 
		//handlePill(tree.getSelectedNodes());
	});

	tree.subscribe("labelDoubleClick", function(node) { 
		handlePill(tree.getSelectedNodes());
	});
	
	tree.subscribe("enterKeyPressed", function(node) { 
		handlePill(tree.getSelectedNodes());
	});

	tree.subscribe("expandComplete", function(node) {
		node.toggleIcon();
	});
	
	tree.subscribe("collapseComplete", function(node) {
		node.toggleIcon();
	});
	
	if (rootNode.hasChildren()) {
		//handleTreeSelect(rootNode.children[0]);
	}
	
	var treeDrawTargetObj = treeDrawTarget;
	if (typeof(treeDrawTargetObj) == 'string') {
		treeDrawTargetObj = document.getElementById(treeDrawTarget);
	}
	
	/* Move event regeister into the tree ??? */
	treeDrawTargetObj.onkeydown  = function (evt) { tree.handleKeyDownEvent(evt); };
	treeDrawTargetObj.onkeyup    = function (evt) { tree.handleKeyUpEvent(evt); };
}


/* 
	RECURSIVE ADDER 
	
	Adds items to the tree, will need to be altered by final data author.
*/
function traverseTreeData(data, attachNode) {
	for (var i=0; i<data.length; i++) {

		var tmp_obj = data[i];
		
		if (typeof (data[i]) != 'undefined' && typeof (data[i]['children']) != 'undefined') {
			var tmp_node = new YAHOO.widget.AgileCascadeListNode(tmp_obj, attachNode, false, true);
			traverseTreeData(data[i]['children'], tmp_node);
		} else {
			var tmp_node = new YAHOO.widget.AgileCascadeListNode(tmp_obj, attachNode, false, false);
		}
	}
}

