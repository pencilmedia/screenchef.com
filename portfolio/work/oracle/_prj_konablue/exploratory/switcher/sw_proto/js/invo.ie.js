if (!invo.ie) { invo.ie = {}; }

/* 
	This script is for IE
	
	Since IE does not yet support elem:hover, you need to attach a 
	function to the elements in the list that will change its classname
	appropriately.
	
	ALA sets the function to window onload, but here we add it to a 
	generic onload function, so we can do more than one thing at load.
		
	I have also modified it, so you can add more than one "menu" to the
	array by ID. It will go through the array and take care of business
	for each entry you add. Thus, the multiple menus in the demo HTML. 
	I have also thrown in some better matching on the nodeName.

	Next, it needed to be modified to support second order children
	and greater, so that it recurses properly.

	Finally, you can have entries in the array that are not on the page,
	as I check for the object first. That way, you can have this one
	script shared across all pages, and it will seek out the menus you
	have on that page only. Note the menu name "Idontexist".
*/

invo.ie.handleIEMenus = function () {
	if (document.all) {
		var menu_array = new Array(
			"mainMenu"
		);
		for (var i=0; i<menu_array.length; i++) {
			if (document.getElementById(menu_array[i])) {
				invo.ie.recurseIEMenus(document.getElementById(menu_array[i]));	
			}
		}
	}
}

invo.ie.recurseIEMenus = function (obj) {
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
					invo.ie.recurseIEMenus(node_new);
				}
			}
		}
	}
	return;
}


invo.ie.handleIEButtons = function () {
	if (document.all) {
		var buttons = invo.dom.getElementsByClass("button", null, "div");
	
		for (var i=0; i<buttons.length; i++) {
			var parent = buttons[i].parentNode;
			parent.onmouseover = function() { this.className += " button_over"; }
			parent.onmouseout  = function() { this.className = this.className.replace(" button_over", ""); }
		}
	}
}

/* 
	Run the menu script at load 
*/
invo.event.addEvent(window, "load", invo.ie.handleIEMenus, false);
invo.event.addEvent(window, "load", invo.ie.handleIEButtons, false);
