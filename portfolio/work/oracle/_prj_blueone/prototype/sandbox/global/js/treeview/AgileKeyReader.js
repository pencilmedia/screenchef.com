function AgileKeyReader() {
	
}

AgileKeyReader.prototype.getKeyDict = function(evt) {
	var keycode   = null;
	var modifiers = null;

	if (window.event) {
		keycode   = window.event.keyCode;
		modifiers = this.getKeyModifiers(window.event);
	} else if (evt) {
		keycode   = evt.which;
		modifiers = this.getKeyModifiers(evt);
	}
	
	return({'keycode': keycode, 'modifiers': modifiers});
}

AgileKeyReader.prototype.getKeyModifiers = function(evt) {
	var modifier_list = {
		'shift': false,
		'ctrl': false,
		'alt': false
	}

	if (typeof(Event) != 'undefined' && (evt.modifiers & Event.SHIFT_MASK)) {
		modifier_list['shift'] = true;
	} else if (evt.shiftKey && evt.shiftKey == true) {
		modifier_list['shift'] = true;
	}

	if (typeof(Event) != 'undefined' && (evt.modifiers & Event.CTRL_MASK)) {
		modifier_list['ctrl'] = true;
	} else if (evt.ctrlKey && evt.ctrlKey == true) {
		modifier_list['ctrl'] = true;
	}
	
	if (typeof(Event) != 'undefined' && (evt.modifiers & Event.ALT_MASK)) {
		modifier_list['alt'] = true;
	} else if (evt.altKey && evt.altKey == true) {
		modifier_list['alt'] = true;
	}
	
	return modifier_list;
}