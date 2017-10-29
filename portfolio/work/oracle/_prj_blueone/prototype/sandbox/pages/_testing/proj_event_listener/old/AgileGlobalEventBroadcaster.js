/*
	For reference

	agile_obj['event'] = The event that started everything.
	agile_obj['y_obj'] = Some Yahoo object (usually the trigger, sometimes empty)
	agile_obj['modifiers'] = Dictionary of modifiers at time of event
	agile_obj['source_obj'] = The triggering object (possibly different than the attachTo object)
	agile_obj['attach_obj'] = The object the event was attached to, if any
	agile_obj['keycode'] = A key code, if any
*/
AgileGlobalEventBroadcaster = function() {	
	
	this.registeredCallbacks = [];
	
	for (var i in AgileEventConstants) {
		this.registeredCallbacks[AgileEventConstants[i]] = [];
	}
	
	this.agileEventBroadcast = function(agile_obj) {
		var agileEventFired = false;
		
		// CTRL + A = select all
		if (
				(agile_obj['modifiers']['ctrl'] || agile_obj['modifiers']['cmd']) && 
				(agile_obj['keycode'] == AgileConstants.KEY_CODE_CHAR_A || agile_obj['keycode'] == AgileConstants.KEY_CODE_CHAR_A)
			) {
			this.broadcastEvent(AgileEventConstants.EVENT_SELECT_ALL, agile_obj);
			agileEventFired = true;
		}
		
		// TAB (SHIFT + TAB) = tab (reverse tab)
		if (agile_obj['keycode'] == AgileConstants.KEY_CODE_TAB) {
			if (agile_obj['modifiers']['shift']) {
				this.broadcastEvent(AgileEventConstants.EVENT_SHIFT_TAB, agile_obj);
			} else {
				this.broadcastEvent(AgileEventConstants.EVENT_TAB, agile_obj);
			}
			agileEventFired = true;
		}
		
		return (agileEventFired);
	};	
	
	this.broadcastEvent = function(event, agile_obj) {
		for (var i=0; i<this.registeredCallbacks[event].length; i++) {
			this.registeredCallbacks[event][i](agile_obj);
		}
	};
	
	this.registerCallback = function(event, callback, cls) {
		if (!cls) {
			if (!this.registeredCallbacks[event].inArray(callback)) {
				this.registeredCallbacks[event].push(callback);
			}			
		} else {
			if (!this.registeredCallbacks[event].inArray(cls[callback])) {
				this.registeredCallbacks[event].push(cls[callback]);
			}
		}
	};
	
	
	this.execAgileEvent = function(e) {
		if (!e) { e = window.event; }
		

		
		var agile_obj = {};
		agile_obj['event'] = e;
		agile_obj['y_obj'] = null;
		agile_obj['modifiers'] = getModifierKeys(e);
		agile_obj['source_obj'] = getSourceObject(e);
		agile_obj['attach_obj'] = null;
		agile_obj['keycode'] = getKeycode(e);
		
		this.agileEventBroadcast(agile_obj);

		this.cancelBubble(e);

	};
	
	
	this.cancelBubble = function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.cancelBubble = true;
		}

		if (e.stopPropogation) {
			e.stopPropagation();
		} else {
			e.returnValue = false;
		}

		if (window.BROWSER.isFirefox && (getKeycode(e) == AgileConstants.KEY_CODE_TAB)) {
			/*if (m['shift']) {
			}*/
				
		}

		e = null;
	};
	
	window.onkeydown = agileUtilBindFunction(this, 'execAgileEvent', ['event']);
	

};






function getModifierKeys(e) {
	var modifier_list = {
		'shift': false,
		'ctrl': false,
		'alt': false,
		'cmd': false
	}

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.SHIFT_MASK)) {
		modifier_list['shift'] = true;
	} else if (e.shiftKey && e.shiftKey == true) {
		modifier_list['shift'] = true;
	}

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.CTRL_MASK)) {
		modifier_list['ctrl'] = true;
	} else if (e.ctrlKey && e.ctrlKey == true) {
		modifier_list['ctrl'] = true;
	}

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.ALT_MASK)) {
		modifier_list['alt'] = true;
	} else if (e.altKey && e.altKey == true) {
		modifier_list['alt'] = true;
	}

	return modifier_list;
}

function getSourceObject(e) {
	var target = (e.target) ? e.target : e.srcElement;
	return (target);
}

function getKeycode(e) {
	if (e.charCode) {
		return e.charCode;
	} else if (e.keyCode) {
		return e.keyCode;
	}
	return null;
}
