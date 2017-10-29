/* -----------------------------------------------------------------------------
	REQUIRED: <share_js_dir>/invo_dyn_tree_json.js

	1) Copy to local project
	2) Override the variables and the draw function from that file to do what 
	is needed.
----------------------------------------------------------------------------- */

gTreeImageWidth = 16;
gTreeImageHeight = 16;


gTreeImageCollapsed.src      = "../images/icn_tree_plus.gif";
gTreeImageCollapsedStart.src = "../images/icn_tree_plus.gif";
gTreeImageCollapsedEnd.src   = "../images/icn_tree_plus.gif";
gTreeImageExpanded.src       = "../images/icn_tree_minus.gif";
gTreeImageExpandedStart.src  = "../images/icn_tree_minus.gif";
gTreeImageExpandedEnd.src    = "../images/icn_tree_minus.gif";
gTreeImageNode.src           = "../images/icn_tree_empty.gif";
gTreeImageNodeEnd.src        = "../images/icn_tree_empty.gif";
gTreeImageEmptySpace.src     = "../images/icn_tree_empty.gif";
gTreeImageChainSpace.src     = "../images/icn_tree_empty.gif";


function treeComposeHTML(nodeObj, nodePrefix, preserveState) {
	var outputStr = "";
	var childCount;
	var nestedNodePrefix;
	var stateObj = gTreeStateStore[gTreeActive];
	
	if (stateObj.currentState == "") {
		preserveState = false;
	}
	
	nodePrefix = (nodePrefix) ? nodePrefix : 0;
	for (var i = 0; i < nodeObj.children.length ; i++) {
	
		childCount = (nodeObj.children[i].children) ? nodeObj.children[i].children.length : 0;
		
		outputStr += "<div class='treeRow' id='" + gTreeActive + "Line" + stateObj.currentNodeId++ + "'>\n";
		stateObj.nodeMap[stateObj.currentNodeId] = nodeObj.children[i].children;
		
		if (childCount > 0) {
			
			if (!preserveState) {
				stateObj.currentState += treeCalculateNodeState(stateObj.currentNodeId - 1);
			}
			nestedNodePrefix = nodePrefix;
			nestedNodePrefix += 20;
		
			outputStr += "<span style='padding-left:" + nodePrefix + "px;'>";
			outputStr += "<img id='" + gTreeActive + "BlockWidget" + (stateObj.blockId) + "' align='middle'";
			if (stateObj.currentState.charAt(stateObj.currentNodeId - 1) == 0) {
				outputStr += " src='" + (((i == (nodeObj.children.length - 1)) && (stateObj.blockId != 0)) ? gTreeImageCollapsedEnd.src : (stateObj.blockId == 0) ? gTreeImageCollapsedStart.src : gTreeImageCollapsed.src) + "'";
			} else {
				outputStr += " src='" + (((i == (nodeObj.children.length - 1)) && (stateObj.blockId != 0)) ? gTreeImageExpandedEnd.src : (stateObj.blockId == 0) ? gTreeImageExpandedStart.src : gTreeImageExpanded.src) + "'";
			}
			outputStr += " height='" + gTreeImageHeight + "'"; 
			outputStr += " width='" + gTreeImageWidth + "'";
			outputStr += " title='Click to expand/collapse nested items.'";
			outputStr += " onclick='treeToggleNode(this," + stateObj.blockId + ", \"" + gTreeActive + "\")'>";
			outputStr += "&nbsp;<a href='#' onclick='alert(\"Handle the onclick with a function\");'";
			outputStr += " class='treeDisplayName'"; 
			outputStr += " title='" + nodeObj.children[i].caption + "'>";
			outputStr += "<span style=''>" + nodeObj.children[i].caption + "</span>";
			outputStr += "</a>";
			outputStr += "<span class='treeBlock' blocknum='" + stateObj.blockId + "' id='" + gTreeActive + "Block" + stateObj.blockId++ + "'>";
			if (!preserveState) {
				outputStr += treeComposeHTML(nodeObj.children[i], nestedNodePrefix, false);
			} else {
				outputStr += treeComposeHTML(nodeObj.children[i], nestedNodePrefix, true);
			}
			outputStr += "</span>";
			outputStr += "</span>";
			
		} else {
			
			outputStr += "<span style='padding-left:" + nodePrefix + "px;'>";
			outputStr += "<img id='" + gTreeActive + "Widget" + (stateObj.currentNodeId - 1) + "' align='middle'";
			outputStr += " src='" + ((i == (nodeObj.children.length - 1)) ? gTreeImageNodeEnd.src : gTreeImageNode.src) + "'";
			outputStr += " height='" + gTreeImageHeight + "'";
			outputStr += " width='" + gTreeImageWidth + "'>";
			outputStr += "&nbsp;<a href='#' onclick='alert(\"Handle the onclick with a function\");'";
			outputStr += "class='treeDisplayName' title='" + nodeObj.children[i].caption + "'>";
			outputStr += "<span style=''>" + nodeObj.children[i].caption + "</span>";
			outputStr += "</a>";
			outputStr += "</span>";
		}
		
		outputStr += "</div>\n";
	}
	
	return outputStr;
}
