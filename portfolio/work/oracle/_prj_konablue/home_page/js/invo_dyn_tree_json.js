/* -----------------------------------------------------------------------------
	Involution Studios JSON Tree Builder
	Adapted from the O'Reilly book "Javascript and DHTML Cookbook"

	Version 1.1
	Author: Benjamin Listwon
	
	Version 1.0
	Author: Danny Goodman
	
	Notes:

----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	To use this tree maker, you have to copy the file 
	invo_dyn_tree_json_local.js to your project, and override what you need 
	to.
	
	--Ben
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	THESE GET OVERRIDDEN LOCALLY
----------------------------------------------------------------------------- */
var gTreeImageWidth = 16;
var gTreeImageHeight = 16;

var gTreeImageCollapsed          = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageCollapsed.src      = "../images/icn_tree_plus.gif";
	
var gTreeImageCollapsedStart     = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageCollapsedStart.src = "../images/icn_tree_plus.gif";

var gTreeImageCollapsedEnd       = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageCollapsedEnd.src   = "../images/icn_tree_plus.gif";

var gTreeImageExpanded           = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageExpanded.src       = "../images/icn_tree_minus.gif";

var gTreeImageExpandedStart      = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageExpandedStart.src  = "../images/icn_tree_minus.gif";

var gTreeImageExpandedEnd        = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageExpandedEnd.src    = "../images/icn_tree_minus.gif";

var gTreeImageNode               = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageNode.src           = "../images/icn_tree_empty.gif";

var gTreeImageNodeEnd            = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageNodeEnd.src        = "../images/icn_tree_empty.gif";

var gTreeImageEmptySpace         = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageEmptySpace.src     = "../images/icn_tree_empty.gif";

var gTreeImageChainSpace         = new Image(gTreeImageWidth, gTreeImageHeight);
	gTreeImageChainSpace.src     = "../images/icn_tree_empty.gif";




/* -----------------------------------------------------------------------------
	MUST REDEFINE LOCALLY
----------------------------------------------------------------------------- */
/* function treeComposeHTML(nodeObj, nodePrefix, preserveState) */

function treeComposeHTML(nodeObj, nodePrefix, preserveState) {
	alert("IMPLEMENT LOCALLY");
}


/*
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
			outputStr += " onclick='treeToggleNode(this," + stateObj.blockId + ")'>";
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
*/




/* -----------------------------------------------------------------------------
	DO NOT EDIT BELOW HERE
----------------------------------------------------------------------------- */



/* -----------------------------------------------------------------------------
	Global Variables, Declarations and other Mappings
----------------------------------------------------------------------------- */
var gTreeDataStore = new Array;
var gTreeStateStore = new Array;
var gTreeActive;
var gTreeDrawTarget;


// Debug
var gTreeDebug = false;



/* -----------------------------------------------------------------------------
	Functions for handling tree node states, toggling and updating of images
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	treeSwapNodeState(gTreeCurrentState, currentValue, offset)
		gTreeCurrentState = stores the state of nodes in the tree
		currentValue = value of expanded/collapsed (0 || 1)
		offset = what bit stores the state
	
	Inverts the item state specified by offset from the value of currentValue
	to the inverse (0 || 1)
----------------------------------------------------------------------------- */
function treeSwapNodeState(currentValue, offset) {
	var stateObj = gTreeStateStore[gTreeActive];
	
	var newState = stateObj.currentState.substring(0, offset);
	// Bitwise XOR item at offset;
	newState += currentValue ^ 1;
	newState += stateObj.currentState.substring((offset + 1), stateObj.currentState.length);
	return newState;
}

/* -----------------------------------------------------------------------------
	treeGetExpandedImageState(imgURL)
		imgURL = the URL of the current image
	
	Fetches the mathing version of the expanded image based on the match of
	"start" or "end" in the URL. 
	
	NOTE: This is obviously contingent on the file naming !!!
----------------------------------------------------------------------------- */
function treeGetExpandedImageState(imgURL) {
	if (imgURL.indexOf("Start") != -1) {
		return gTreeImageExpandedStart.src;
	}
	if (imgURL.indexOf("End") != -1) {
		return gTreeImageExpandedEnd.src;
	}
	return gTreeImageExpanded.src;
}

/* -----------------------------------------------------------------------------
	treeGetCollapsedImageState(imgURL)
		imgURL = the URL of the current image
	
	Fetches the mathing version of the collapsed image based on the match of
	"start" or "end" in the URL. 
	
	NOTE: This is obviously contingent on the file naming !!!
----------------------------------------------------------------------------- */
function treeGetCollapsedImageState(imgURL) {
	if (imgURL.indexOf("Start") != -1) {
		return gTreeImageCollapsedStart.src;
	}
	if (imgURL.indexOf("End") != -1) {
		return gTreeImageCollapsedEnd.src;
	}
	return gTreeImageCollapsed.src;
}

/* -----------------------------------------------------------------------------
	treeToggleNode(img, blockNum)
		img = reference to the currently showing image at blockNum
		blockNum = the id of the block to toggle
	
	Toggles the state of the node at blockNum and updates it's related image.
----------------------------------------------------------------------------- */
function treeToggleNode(img, blockNum, treeId) {
	gTreeActive = treeId;
	var stateObj = gTreeStateStore[gTreeActive];
	var expansionState = stateObj.currentState.charAt(blockNum);
	stateObj.currentState = treeSwapNodeState(expansionState, blockNum);
	if (expansionState == "0") {
		document.getElementById(gTreeActive + "Block" + blockNum).style.display = "block";
		img.src = treeGetExpandedImageState(img.src);
	} else {
		document.getElementById(gTreeActive + "Block" + blockNum).style.display = "none";
		img.src = treeGetCollapsedImageState(img.src);
	}
	gTreeActive = null;
	return;
}

function treeUpdateNodeState(img, blockNum) {
	var stateObj = gTreeStateStore[gTreeActive];
	var expansionState = stateObj.currentState.charAt(blockNum);

	return;
}

/* -----------------------------------------------------------------------------
	treeExpandAllNodes()
	
	Moves through the tree and sets the bits stored in gTreeCurrentState to
	the expanded state, then calls teh treeDoExpansion function which redraws all
	nodes.
----------------------------------------------------------------------------- */
function treeExpandAllNodes() {
	var stateObj = gTreeStateStore[gTreeActive];

	var newState = "";
	while (newState.length < stateObj.currentState.length) {
		newState += "1";
	}
	stateObj.currentState = newState;
	treeDoExpansion();
}

/* -----------------------------------------------------------------------------
	treeCollapseAllNodes()
	
	Moves through the tree and sets the bits stored in gTreeCurrentState to
	the collapsed state, then calls teh treeDoExpansion function which redraws all
	nodes.
----------------------------------------------------------------------------- */
function treeCollapseAllNodes() {
	var stateObj = gTreeStateStore[gTreeActive];
	
    var newState = "";
    while (newState.length < stateObj.currentState.length) {
        newState += "0";
    }
    stateObj.currentState = newState;
    treeDoExpansion();
    return;
}


/* -----------------------------------------------------------------------------
	treeDoExpansion()
	
	Moves through gTreeCurrentState and sets the expanded state of all nodes
	whose value is 1 (expanded) to block, otherwise to none (collapsed).
	
	Called by initTree as well as any function that redraws the entire tree 
	state.
----------------------------------------------------------------------------- */
function treeDoExpansion() {
	var stateObj = gTreeStateStore[gTreeActive];
	for (var i = 0; i < stateObj.currentState.length; i++) {
		if (stateObj.currentState.charAt(i) == 1) {
			document.getElementById(gTreeActive + "Block" + i).style.display = "block";
			if (document.getElementById(gTreeActive + "BlockWidget" + i)) {
				document.getElementById(gTreeActive + "BlockWidget" + i).src = treeGetExpandedImageState(document.getElementById(gTreeActive + "BlockWidget" + i).src);
			}
		} else {
			document.getElementById(gTreeActive + "Block" + i).style.display = "none";
			if (document.getElementById(gTreeActive + "BlockWidget" + i)) {
				document.getElementById(gTreeActive + "BlockWidget" + i).src = treeGetCollapsedImageState(document.getElementById(gTreeActive + "BlockWidget" + i).src);
			}
		}
	}
	return;
}

/*********************************
   OUTLINE HTML GENERATION
**********************************/
// apply default expansion state from outline's header
// info to the expanded state for one element to help 
// initialize gTreeCurrentState variable
function treeCalculateNodeState(offset) {
	var stateObj = gTreeStateStore[gTreeActive];
	
    // get default gTreeExpansionState data
    var expandedData = (stateObj.expansionState.length > 0) ? stateObj.expansionState.split(",") : null;
    if (expandedData) {
        for (var j = 0; j < expandedData.length; j++) {
            if (offset == expandedData[j] - 1) {
                return "1";
            }
        }
    }
    return "0";
}



/* -----------------------------------------------------------------------------
	Functions initializing or re-initializing the tree
----------------------------------------------------------------------------- */


/* -----------------------------------------------------------------------------
	initTree(dataURL, target)
		dataURL = the url of the xml data to retrieve in JSON format
		target = the id of of the target div for display
	
	Calls the HTML creation routine, writes it to the page and then runs the
	initial call to expansion.
----------------------------------------------------------------------------- */
function initTree(dataURL, target) {
    return;
}



function treeLoadData(dataURL, treeName) {
	// TODO: Call to AJAX
	// treeData = getUrlAsync(dataURL, callback);
	// temporarily, use below
	
	var treeData = dataURL;

	treeStateObject = function() {};
	treeStateObject.prototype.currentState = null;
	treeStateObject.prototype.expansionState = null;
	treeStateObject.prototype.currentNodeId = null;
	treeStateObject.prototype.blockId = null;
	treeStateObject.prototype.nodeMap = null;

	gTreeDataStore[treeName] = treeData;

	gTreeStateStore[treeName] = new treeStateObject;
	gTreeStateStore[treeName].currentState = "";
	gTreeStateStore[treeName].expansionState = "";
	gTreeStateStore[treeName].currentNodeId = 0;
	gTreeStateStore[treeName].blockId = 0;
	gTreeStateStore[treeName].nodeMap = new Array;

	treeData = null;
	return;
}


function treeLoadPendingNodes(idx) {
	// TODO: Call to AJAX
	// treeData = getUrlAsync(dataURL, callback);
	// temporarily, use below

	treeLoadData(tempExtraNodes, 'tempTree');

	var stateObj = gTreeStateStore[gTreeActive];
	var nodeObj = stateObj.nodeMap[idx];
	
	for (var i=0; i<gTreeDataStore['tempTree'].children.length; i++) {
		nodeObj.push(gTreeDataStore['tempTree'].children[i]);
	}

	//stateObj.currentState = "";
	var prevStateChunk1 = stateObj.currentState.substring(0, idx);
	var prevStateChunk2 = stateObj.currentState.substring((idx + 1), stateObj.currentState.length);
	var tmpStateStr = "";
	for (var i=0; i<gTreeStateStore['tempTree'].blockId; i++) {
		tmpStateStr += "0";
	}
	var newStateStr = prevStateChunk1 + tmpStateStr + prevStateChunk2;
	stateObj.currentState = newStateStr;
	stateObj.currentNodeId = 0;
	stateObj.blockId = 0;
	
	treeDraw(null, true);
	
	return;
}


function treeSetActive(treeName) {
	if (treeName) {
		gTreeActive = treeName;
	}
	
	var stateObj = gTreeStateStore[treeName];
	stateObj.currentNodeId = 0;
	stateObj.blockId = 0;
	
	return;
}


function treeSetDrawTarget(name) {
	if (name) {
		gTreeDrawTarget = document.getElementById(name);
	}
	return;
}


function treeDraw(nodePrefix, preserveState) {
	if (gTreeActive) {
		var treeHTML = "<span id='renderedOL'>" + treeComposeHTML(gTreeDataStore[gTreeActive], nodePrefix, preserveState) + "</span>";
		gTreeDrawTarget.innerHTML = treeHTML;
		treeDoExpansion();
	}
	gTreeActive = null;
	return;
}