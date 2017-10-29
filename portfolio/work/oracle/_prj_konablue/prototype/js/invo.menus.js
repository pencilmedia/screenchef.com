if (!invo.menus) { invo.menus = {}; }

var objTop;
var objLeft;
var objHeight;

var mainObjWidth;
var mainObjHeight;

var menuWidth;
var menuHeight;

var contentName;

/* -----------------------------------------------------------------------------
	function hides and shows objects
----------------------------------------------------------------------------- */

invo.menus.changeDisplay = function (obj) {
	if (typeof(obj) == "string") { obj = document.getElementById(obj); }
	if (obj.className == "obj_display_none") {
		obj.className = "obj_display_block";
	} else {
		obj.className = "obj_display_none";
	}
}

/* -----------------------------------------------------------------------------
	function determines the coordinates of an object ( esp clicked obj)
----------------------------------------------------------------------------- */
invo.menus.determineCoordinates = function (trigger) {

	objTop = 0;
	objLeft = 0;
	objHeight = 0;
	
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
}

/* -----------------------------------------------------------------------------
	function places a popup menu
----------------------------------------------------------------------------- */
invo.menus.placeFlyout = function (clicked_obj) {

	
	var tgtObj = document.getElementById("menu_shell");
	var srcObj = document.getElementById(contentName);
	var clonedObj = srcObj.cloneNode(true);
	
	tgtObj.innerHTML = "";
	tgtObj.appendChild(clonedObj);

	invo.menus.changeDisplay("menu_shell");

	/*getting popup height and width*/
	menuObjWidth = invo.metrics.getObjectWidth(tgtObj);
	menuObjHeight = invo.metrics.getObjectHeight(tgtObj);
	
	// Figure out where to put the shell, then put it there
	invo.menus.determineCoordinates(clicked_obj);
	
	var pos_on_top = (mainObjHeight < objTop + menuObjHeight) ? true : false;
	var pos_on_left = (mainObjWidth < objLeft + menuObjWidth) ? true : false;
	
	var main_left = invo.metrics.getObjectLeft("main");
	var main_top = invo.metrics.getObjectTop("main");
	
	if (pos_on_top) {
		invo.metrics.setObjectTop(tgtObj, ((objTop - menuObjHeight) - main_top));
	} else {
		invo.metrics.setObjectTop(tgtObj, (objTop - main_top));
	}
	
	if (pos_on_left) {
		invo.metrics.setObjectLeft(tgtObj, ((objLeft - menuObjWidth) - main_left));
	} else {
		invo.metrics.setObjectLeft(tgtObj, (objLeft - main_left));
	}

	
}


/* -----------------------------------------------------------------------------
	function calls  a popup menu to display
----------------------------------------------------------------------------- */
invo.menus.callFlyout = function (obj,contentStr){

	contentName = contentStr;

	/*getting main height and width*/
	var mainObj = document.getElementById("main");
	mainObjWidth = invo.metrics.getObjectWidth(mainObj);
	mainObjHeight = invo.metrics.getObjectHeight(mainObj);
	
	invo.menus.placeFlyout(obj);
	invo.menus.handleIEMenus();
}


/* -----------------------------------------------------------------------------
	start_hide()
----------------------------------------------------------------------------- */ 
var current_obj_name = null;
var obj_hide_timer = null;

invo.menus.startHide = function (obj_name, delay) {
	if (!delay) {delay = 500;}
	obj_hide_timer = setTimeout(function() { invo.menus.hide(obj_name); }, delay);
}

/* -----------------------------------------------------------------------------
	cancel_hide()
----------------------------------------------------------------------------- */ 
invo.menus.cancelHide = function (obj_name) {
	if (obj_hide_timer != null) {
		clearTimeout(obj_hide_timer);
		obj_hide_timer = null;
	}
}


/* -----------------------------------------------------------------------------
	hide()
----------------------------------------------------------------------------- */ 
invo.menus.hide = function (obj_name) {
	invo.menus.changeDisplay(obj_name);
	if (typeof(obj_name) == "string") { obj = document.getElementById(obj_name); }
	obj.style.top = "10px";
	obj.style.left = "10px";
	current_obj_name = null;
}




/* -----------------------------------------------------------------------------
	handleIEMenus()
----------------------------------------------------------------------------- */ 

invo.menus.handleIEMenus = function () {
	if (document.all && document.getElementById) {
		var menu_array = invo.dom.getElementsByClass("menu", document, "ul");
		for (var i=0; i<menu_array.length; i++) {
			invo.menus.recurseIEMenus(menu_array[i]);
		}
	}

}

/* -----------------------------------------------------------------------------
	recurseIEMenus()
----------------------------------------------------------------------------- */ 

invo.menus.recurseIEMenus = function (obj) {
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
					invo.menus.recurseIEMenus(node_new);
				}
			}
		}
	}
	return;
}
