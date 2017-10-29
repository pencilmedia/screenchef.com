if (!invo.widgets) { invo.widgets = {}; }
if (!invo.widgets.buttons) { invo.widgets.buttons = {}; }

invo.widgets.buttons.handleWinButtons = function () {
	if (document.all && document.getElementById) {
		var buttons = invo.dom.getElementsByClass("buttons", null, "div");
	
		if (buttons && buttons.length) {
			for (var i=0; i<buttons.length; i++) {
				var children = buttons[i].childNodes;
				for (var j=0; j<children.length; j++){
					if (children[j].tagName && ((children[j].tagName).toLowerCase() == "a")){
						children[j].onmouseover = function() { this.className += " button_over"; }
						children[j].onmouseout  = function() { this.className = this.className.replace(" button_over", ""); }
					}
				}
			}
		}
	}
}