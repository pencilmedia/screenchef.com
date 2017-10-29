if (!invo.widgets) { invo.widgets = {}; }
if (!invo.widgets.menus) { invo.widgets.menus = {}; }

/* -----------------------------------------------------------------------------
	function displays a minimenu
----------------------------------------------------------------------------- */ 


invo.widgets.menus.display_menu = function (trigger, targetNameStr, contentNameStr) {
	
	var objTop = 0;
	var objLeft = 0;
	var objHeight = 0;
	
	//getBoundingClientRect for ie
	if (trigger.getBoundingClientRect) {
		var ieObj = trigger.getBoundingClientRect();
		objLeft = ieObj.left + document.documentElement.scrollLeft;
		objTop = ieObj.top + document.documentElement.scrollTop;
		objHeight = ieObj.bottom - ieObj.top;
	} else {
		var parent = trigger;	
		while (parent.tagName.toLowerCase() != 'body') {
			objTop += parseInt(parent.offsetTop);
			if (parent.scrollTop) {
				objTop = objTop - parseInt(parent.scrollTop);
			}
			objLeft += parseInt(parent.offsetLeft);
			if (parent.scrollLeft) {
				objLeft = objLeft - parseInt(parent.scrollLeft);
			}
			parent = parent.offsetParent;
		}

		objHeight = parseInt(trigger.offsetHeight);
	}
	
	objHeight = objHeight + "px";
	
	document.getElementById(contentNameStr).style.paddingTop = objHeight;
	invo.metrics.setObjectLeft(targetNameStr, objLeft);
	invo.metrics.setObjectTop(targetNameStr, objTop);
	
	invo.widgets.menus.changeDisplay(targetNameStr);
	
	var tgtObj = document.getElementById(targetNameStr);
	var srcObj = document.getElementById(contentNameStr);
	var clonedObj = srcObj.cloneNode(true);
	
	tgtObj.innerHTML = "";
	tgtObj.appendChild(clonedObj);
	invo.widgets.menus.handleIEMenus();
}





/* -----------------------------------------------------------------------------
	function hides and shows objects
----------------------------------------------------------------------------- */

invo.widgets.menus.changeDisplay = function (obj) {
	if (typeof(obj) == "string") { obj = document.getElementById(obj); }
	if (obj.className == "obj_display_none") {
		obj.className = "obj_display_block";
	} else {
		obj.className = "obj_display_none";
	}
}



/* -----------------------------------------------------------------------------
	start_hide()
----------------------------------------------------------------------------- */ 
var current_obj_name = null;
var obj_hide_timer = null;

invo.widgets.menus.startHide = function (obj_name) {
	if (current_obj_name == null) {
		current_obj_name = obj_name;
	}
	obj_hide_timer = setTimeout(function() { invo.widgets.menus.hide(obj_name); }, 500);
}

/* -----------------------------------------------------------------------------
	cancel_hide()
----------------------------------------------------------------------------- */ 
invo.widgets.menus.cancelHide = function (obj_name) {
	if (obj_hide_timer != null) {
		clearTimeout(obj_hide_timer);
		obj_hide_timer = null;
	}
}


/* -----------------------------------------------------------------------------
	hide()
----------------------------------------------------------------------------- */ 
invo.widgets.menus.hide = function (obj_name) {
	invo.widgets.menus.changeDisplay(obj_name);
	current_obj_name = null;
}




/* -----------------------------------------------------------------------------
	handleIEMenus()
----------------------------------------------------------------------------- */ 

invo.widgets.menus.handleIEMenus = function () {
	if (document.all && document.getElementById) {
		var menu_array = invo.dom.getElementsByClass("menu", document, "ul");
		for (var i=0; i<menu_array.length; i++) {
			invo.widgets.menus.recurseIEMenus(menu_array[i]);
		}
	}

}

/* -----------------------------------------------------------------------------
	recurseIEMenus()
----------------------------------------------------------------------------- */ 

invo.widgets.menus.recurseIEMenus = function (obj) {
	for (var i=0; i<obj.childNodes.length; i++) {
		node = obj.childNodes[i];
		if (node.nodeName.toLowerCase() == "li") {
			node.onmouseover = function() { this.className += " over"; }
			node.onmouseout  = function() { this.className = this.className.replace(" over", ""); }
		}
		if (node.hasChildNodes()) {
			for (var j=0; j<node.childNodes.length; j++) {
				if (node.childNodes[j].nodeName.toLowerCase() == "ul") {
					node_new = node.childNodes[j];
					invo.widgets.menus.recurseIEMenus(node_new);
				}
			}
		}
	}
	return;
}