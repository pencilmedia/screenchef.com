if (!invo.dnd) { invo.dnd = {}; }



var drag_object = null;
var drag_callback = null;
var drag_object_x, drag_object_y, event_x, event_y;
var drag_event = null;


invo.dnd.startDnD = function (evt, callback) {
	evt = invo.event.getEvent(evt);
	var elem = invo.event.getEventTarget(evt);
	
	if (elem) {
		drag_object = elem;
		if (callback != null) {
			drag_callback = callback;
		}
		invo.event.addEvent(document, "mousemove", invo.dnd.trackDnD, true);
		invo.event.addEvent(document, "mouseup", invo.dnd.releaseDnD, true);
		drag_object_x = invo.metrics.getObjectLeft(drag_object);
		drag_object_y = invo.metrics.getObjectTop(drag_object);
		event_x       = invo.event.getEventX(evt);
		event_y       = invo.event.getEventY(evt);
	}
	return;
}


invo.dnd.trackDnD = function (evt, callback) {
	drag_event = invo.event.getEvent(evt);
	
	if (drag_object) {
		if (drag_callback) { drag_callback(); }
		
		drag_event.cancelBubble = true;
	}
	return;
}

invo.dnd.releaseDnD = function (evt, callback) {
	if (drag_object) {
		drag_object = null;
		drag_callback = null;
		drag_event = null;
		
		invo.event.removeEvent(document, "mousedown", invo.dnd.startDnD, true);
		invo.event.removeEvent(document, "mousemove", invo.dnd.trackDnD, true);
		invo.event.removeEvent(document, "mouseup", invo.dnd.releaseDnD, true);
	}
	return;
}

invo.dnd.getDragObject = function () {
	return (drag_object);
}

invo.dnd.getDragEvent = function () {
	return (drag_event);
}

invo.dnd.moveDragObject = function (restrict_to_x, restrict_to_y) {
	var x = drag_object_x + invo.event.getEventX(drag_event) - event_x;
	var y = drag_object_y + invo.event.getEventY(drag_event) - event_y;
	if (restrict_to_x) {
		invo.metrics.setObjectLeft(drag_object, x);
	} else if (restrict_to_y) {
		invo.metrics.setObjectTop(drag_object, y);
	} else {
		invo.metrics.shiftTo(drag_object, x, y);
	}	
}