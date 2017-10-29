if (!invo.widgets) { invo.widgets = {}; }
if (!invo.widgets.tree) { invo.widgets.tree = {}; }
if (!invo.widgets.tree.images) { invo.widgets.tree.images = {}; }

/*
	Accomplished with a lot of help from:
	http://www.mozilla.org/docs/dom/domref/dom_el_ref.html#1021544
	http://www.amazon.com/gp/product/webstandardsw-20/1590595335
	http://www.dustindiaz.com/getelementsbyclass/#nav
	
*/

var tree_widget_path = "images/tree/"

invo.widgets.tree.images.minus            = document.createElement("img");
invo.widgets.tree.images.minus.src        = tree_widget_path + "minus.png";
invo.widgets.tree.images.plus             = document.createElement("img");
invo.widgets.tree.images.plus.src         = tree_widget_path + "plus.png";

invo.widgets.tree.init = function () {
	var trees = invo.dom.getElementsByClass("treeContainer", null, null);
	if (trees.length) {
		for (var i=0; i<trees.length; i++) {
			invo.dom.removeEmptyTextChildren(trees[i]);
		}
	}
}

invo.widgets.tree.handleExpand = function (evt, elem) {
	if (!elem) {
		evt = invo.event.getEvent(evt);
		var elem = invo.event.getEventTarget(evt);
	}

	var parent = invo.dom.getParentByClass("treeNode", elem);
	var children = parent.childNodes;
	
	if (children.length) {
		for (var i=0; i<children.length; i++) {
			if (children[i].className && (children[i].className.indexOf("treeWidget") != -1) ) {
				invo.widgets.tree.swapWidget(children[i]);
			}
			if (children[i].className && (children[i].className.indexOf("swap") != -1) ) {
				invo.widgets.tree.swapImage(children[i]);
			}
			if (children[i].className && (children[i].className.indexOf("treeNode") != -1) ) {
				invo.widgets.tree.swapClass(children[i]);
			}
		}
	}
}

invo.widgets.tree.swapImage = function (elem, cancel_recursion) {
	var current_image = elem.src;
	var current_image_src = null;
	var current_image_path = null;
	
	var idx = current_image.lastIndexOf("/");
	if (idx >= 0) {
		current_image_src = current_image.substring(idx + 1);
		current_image_path = current_image.substring(0, idx + 1);
	}
	
	var current_image_src_array = current_image_src.split(".");
	var suffix_idx = current_image_src_array[0].search("_on");
	
	if (suffix_idx >= 0) {
		var new_image_src = current_image_path + current_image_src_array[0].substring(0, suffix_idx) + "." + current_image_src_array[1];
	} else {
		var new_image_src = current_image_path + current_image_src_array[0] + "_on." + current_image_src_array[1];
	}
	// Bails if it cant find an image
	if (cancel_recursion) {
		elem.onerror = null;
	} else {
		elem.onerror = function() { invo.widgets.tree.swapImage(this, true); };
	}
	elem.src = new_image_src;
}

invo.widgets.tree.swapClass = function (elem) {
	var class_none   = "obj_display_none";
	var class_block  = "obj_display_block";

	if (elem.className && (elem.className.indexOf(class_none) != -1) ) {
		elem.className = elem.className.replace(class_none, class_block);
	} else if (elem.className && (elem.className.indexOf(class_block) != -1) ) {
		elem.className = elem.className.replace(class_block, class_none);
	}
}

invo.widgets.tree.swapWidget = function (elem) {
	if (elem.src.indexOf("plus") != -1) {
		elem.src = invo.widgets.tree.images.minus.src;
		elem.alt = "Collapse";
	} else if (elem.src.indexOf("minus") != -1) {
		elem.src = invo.widgets.tree.images.plus.src;
		elem.alt = "Expand";
	} 
}


/*
	I know, i know, these don't belong here in the long run, but for ease of
	use they are here now
*/
invo.widgets.tree.parserAddNodes = function (node_root, target, tree_id) {
	if (node_root.children) {
		for (var i=0; i<node_root.children.length; i++) {
			var block = document.createElement("div");
			block.className = "treeNode";
			
			if (node_root.children[i].type) {
			    block.className += (" " + node_root.children[i].type);
			    }
			if (node_root.children[i].iconfile) {
				var blockImg = document.createElement("img");
				blockImg.src = node_root.children[i].iconfile;
				blockImg.className = "swap";
				blockImg.alt = "Icon";
				block.appendChild(blockImg);
			}
			
			var blockCaption = document.createElement("span");
			blockCaption.className = "label";
			if (node_root.children[i].linkurl) {
				var blockCaptionLink = document.createElement("a");
				blockCaptionLink.href = node_root.children[i].linkurl
				blockCaptionLink.title = node_root.children[i].caption;
				var blockCaptionText = document.createTextNode(node_root.children[i].caption);
				blockCaptionLink.appendChild(blockCaptionText);
				blockCaption.appendChild(blockCaptionLink);
			} else {
				var blockCaptionText = document.createTextNode(node_root.children[i].caption);
				blockCaption.appendChild(blockCaptionText);
			}
			block.appendChild(blockCaption);

			if (node_root.children[i].children) {			
				// Add the expander
				var widget = invo.widgets.tree.images.plus.cloneNode(false);
				invo.event.addEvent(widget, "click", invo.widgets.tree.handleExpand, false);
				widget.className = "treeWidget";
				widget.alt = "Expand";
				block.insertBefore(widget, block.firstChild);
			
				// Recurse
				invo.widgets.tree.parserAddNodes(node_root.children[i], block, tree_id);
			}
			
			target.appendChild(block);
			
			// Check to see if we should hide this node
			if (block.parentNode.id != tree_id) {
				block.className += " obj_display_none";
			} else {
				block.className += " obj_display_block";
			}
		}
	}
}

invo.widgets.tree.parserCreateTree = function (tree_data, target, tree_id) {
	var container = document.createElement("div");
	container.className = "treeContainer";
	container.id = tree_id;
	
	invo.widgets.tree.parserAddNodes(tree_data, container, tree_id);
	
	target.appendChild(container);
}



/* 
	Register the trees 
*/
invo.event.addEvent(window, "load", invo.widgets.tree.init, false);