function runMSCL() {
	var mscl = document.getElementById('palette');
	var msclList = document.getElementById('treeContainer');
	if (mscl.style && mscl.style.display == 'block') {
		mscl.style.display = 'none';
	} else {
		mscl.style.display = 'block';
		prepTree();
		msclList.focus();
	}
}

function prepTree() {
	tree.collapseAll();
	var root = tree.getRoot();
	var childNodes = root.children;

	if (childNodes && childNodes.length) {
		for (var i=0; i<childNodes.length; i++) {
			if (i == 0) {
				tree.handleNodeSelection(childNodes[i]);
			}
			if (childNodes[i].hasChildren(true)) {
				childNodes[i].toggle();
			}
		}
	}
}


function clearField() {
	document.getElementById('pillbox').value = "";
}


var pillList = null;

function handlePill(nodeList) {
	for (var i=0; i<nodeList.length; i++) {
		var pillText = nodeList[i]['nodeObj'].getTitle();
		var pillId   = nodeList[i]['id'];
		if ( !nodeList[i]['nodeObj'].hasChildren(true) ) {
			//alert('leaf');
			var tmpStr = recursePill(nodeList[i]['nodeObj'].children);
			if (tmpStr != "") {
				agile.ux.multicascadelist.addPill(pillText, pillId);
			}

		} else if (nodeList[i]['nodeObj'].hasChildren(true)) {
			//alert('has children');
			var tmpStr = recursePill(nodeList[i]['nodeObj'].children);
			if (tmpStr != "" /*&& outStr != ""*/) {
				//outStr = outStr + ", ";
				//agile.ux.multicascadelist.addPill(pillText, pillId);
			}
			//outStr = outStr + tmpStr;
		}
	}
	/*
	pillbox.value = outStr;
	pillList = null;
	*/
}


function recursePill(nodeList) {
	//var outStr = "";
	for (var i=0; i<nodeList.length; i++) {
		var pillText = nodeList[i].getTitle();
		var pillId   = nodeList[i].index;
		
		if (!nodeList[i].hasChildren(true) /*&& pillList.indexOf(pillId) < 0*/) {
			/*if (outStr != "") {
				outStr = outStr + ", ";
			}*/
			//outStr = outStr + pillText + "(" + pillId + ")";
			agile.ux.multicascadelist.addPill(pillText, pillId);
		} else if (nodeList[i].hasChildren(true)) {
			var tmpStr = recursePill(nodeList[i].children);
			/*if (tmpStr != "" && outStr != "") {
				outStr = outStr + ", ";
			}*/
			//outStr = outStr + tmpStr;
		}
	}
	//return outStr;
}



