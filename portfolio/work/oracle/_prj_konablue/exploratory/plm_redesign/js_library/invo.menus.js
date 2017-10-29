if (!invo.menus) { invo.menus = {}; }


/* -----------------------------------------------------------------------------
	function displays a minimenu
----------------------------------------------------------------------------- */ 


invo.menus.display_menu = function (trigger, targetNameStr, contentNameStr) {
	
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
	
	
	
	
	
	
	
	
	//alert(objTop);
	//alert(objLeft);
	
	//document.getElementById(contentNameStr).style.paddingTop = objHeight;
	//document.getElementById(contentNameStr).style.paddingLeft = objHeight;
	
	
	
	//var tmp = "menu_shell";
	invo.menus.changeDisplay(targetNameStr);
	
	//alert(contentNameStr);
	
	var tgtObj = document.getElementById(targetNameStr);
	var srcObj = document.getElementById(contentNameStr);
	var clonedObj = srcObj.cloneNode(true);
	
	tgtObj.innerHTML = "";
	tgtObj.appendChild(clonedObj);
	
	objLeft = objLeft - 175;
	
	
	invo.metrics.setObjectLeft(tgtObj, objLeft);
	invo.metrics.setObjectTop(tgtObj, objTop);
	
	
	
	invo.menus.handleIEMenus();
}





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
