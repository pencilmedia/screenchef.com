/*
	A function to register events, supports multiple events for browsers with a stack
*/
function addEvent(elem, event_name, callback, bool_capture) {
	if (elem.addEventListener) {
		elem.addEventListener(event_name, callback, bool_capture);
		return true;
	} else if (elem.attachEvent) {
		var result = elem.attachEvent('on' + event_name, callback);
		return (result);
	} else {
		elem['on' + event_name] = callback;
	}
}

/*
	A function to associate events with class member objects

function associateEvent (obj, methodName) {
	return(function(e) {
		e = e || window.event;
		return obj[methodName](e, this, obj);
	});
}

*/

function associateEvent (obj, methodName) {
	return(function(e) {
		e = e || window.event;
		return obj[methodName]();
	});
}

function associateEventWithData (obj, methodName, data_obj) {
	return(function(e) {
		e = e || window.event;
		return obj[methodName](data_obj);
	});
}