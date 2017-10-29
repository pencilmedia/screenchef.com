function toggleDetailDisplay(obj) {
	if (obj.className && (obj.className.indexOf("obj_display_none") != -1) ) {
		obj.className = obj.className.replace("obj_display_none", "obj_display_block");
	} else if (obj.className && (obj.className.indexOf("obj_display_block") != -1) ) {
		obj.className = obj.className.replace("obj_display_block", "obj_display_none");
	}
}

function positionDetails(evt, popup_name) {

	evt = invo.event.getEvent(evt);
	var tgt = invo.event.getEventTarget(evt);
	var event_x = parseInt(invo.event.getEventX(evt));
	var event_y = parseInt(invo.event.getEventY(evt));
	var popup_obj = document.getElementById(popup_name);
	var arrow = invo.dom.getElementsByClass("pop_arrow_up", popup_obj, "div");
	
	toggleDetailDisplay(popup_obj);
	
	var popup_width = parseInt(invo.metrics.getObjectWidth(popup_obj));
	var delta_x = Math.round(popup_width / 2);
	var delta_y = -10;
	
	var shift_loc_x = event_x - delta_x;
	var shift_loc_y = event_y - delta_y;
	var screen_x = invo.metrics.getInsideWindowWidth();
	var screen_y = invo.metrics.getInsideWindowHeight();
	var padding_for_edges = 30;
	
	if (shift_loc_x < 0) { 
		shift_loc_x = padding_for_edges;
		if (arrow.length) {
			arrow[0].className = "pop_arrow_up pop_arrow_left";
		}
	} else if (shift_loc_x > (screen_x - popup_width) ) { 
		// magic number to account for potential scroll bar 
		shift_loc_x = screen_x - popup_width - padding_for_edges; 
		if (arrow.length) {
			arrow[0].className = "pop_arrow_up pop_arrow_right";
		}
	} else {
		if (arrow.length) {
			arrow[0].className = "pop_arrow_up";
		}
	}
	
	invo.metrics.shiftTo(popup_obj, shift_loc_x, shift_loc_y);
	
	return false;
}



//add Events
invo.event.addEvent(window, "load", invo.widgets.menus.handleIEMenus, false);
invo.event.addEvent(window, "load", invo.widgets.buttons.handleWinButtons, false);

