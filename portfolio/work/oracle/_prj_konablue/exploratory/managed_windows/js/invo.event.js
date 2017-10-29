if (!invo.event) { invo.event = {}; }

/*
	addEvent attaches an event to an object, keeping the old events 
	attached as well. This allows you to add multiple events to one
	object, for example: onload="func1();func2();funcN();"
	
	Note that, if you want to add to onload, you pass in "load", since
	Mozilla uses addEventListener('load', ...) instead of 'onload'
	
	Note as well that IE can also use setCapture to gain control.
*/		
invo.event.addEvent = function (elem, event_name, callback, bool_capture) {
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
	removeEvent kills an even set by attachEvent
	
	Note that, if you want to add to onload, you pass in "load", since
	Mozilla uses addEventListener('load', ...) instead of 'onload'
	
	Note as well that IE needs releaseCapture fired to return control.
*/
invo.event.removeEvent = function (elem, event_name, callback, bool_capture) {
	if (document.body && document.body.releaseCapture) {
		document.body.releaseCapture();
	}
	if (elem.removeEventListener) {
		elem.removeEventListener(event_name, callback, bool_capture);
		return true;
	} else if (elem.detatchEvent) {
		var result = elem.detatchEvent('on' + event_name, callback);
		return (result);
	} else {
		elem['on' + event_name] = null;
	}
}

/*
	allows events to call object methods
*/
invo.event.associateEvent = function(obj, methodName, params) {
	return(function(e) {
		e = e || window.event;
		if (params) {
			return obj[methodName](params);
		} else {
			return obj[methodName]();
		}
	});
}


/*
	allows call to object variables
*/
invo.event.associateVariable = function(obj, tgt_var) {
	return obj[tgt_var];
}


/*
	allows call to object function
*/
invo.event.associateFunction = function(obj, tgt_func) {
	return obj[tgt_func];
}



/*
	Cross browser event getter
*/
invo.event.getEvent = function (evt) {
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	return (evt);
}


/*
	Cross browser event target getter
*/
invo.event.getEventTarget = function (evt) {
	tgt = (evt.target) ? evt.target : evt.srcElement;
	return (tgt);
}


/*
	Cross browser event x getter
*/
invo.event.getEventX = function (evt) {
	if (evt.pageX) {
		return (evt.pageX);
	} else if (typeof evt.clientX != "undefined") {
		return (evt.clientX);
	}
	return 0;
}

/*
	Cross browser event y getter
*/
invo.event.getEventY = function (evt) {
	if (evt.pageY) {
		return (evt.pageY);
	} else if (typeof evt.clientY != "undefined") {
		return (evt.clientY);
	}
	return 0;
}
