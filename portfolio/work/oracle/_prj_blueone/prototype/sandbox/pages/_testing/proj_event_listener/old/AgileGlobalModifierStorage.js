/*
	For reference

	agile_obj['event'] = The event that started everything.
	agile_obj['y_obj'] = Some Yahoo object (usually the trigger, sometimes empty)
	agile_obj['modifiers'] = Dictionary of modifiers at time of event
	agile_obj['source_obj'] = The triggering object (possibly different than the attachTo object)
	agile_obj['attach_obj'] = The object the event was attached to, if any
	agile_obj['keycode'] = A key code, if any
*/

AgileGlobalModifierStorage = function() {
	
	this.storedModifierKeys = {
		'alt': false,
		'shift': false,
		'ctrl': false,
		'cmd': false
	};
	
	this.registeredClasses = [];
	
	this.storeModifierKeys = function(e) {
		if (!e) { e = window.event; }
		
		if (AgileConstants.KEY_CODE_CMD == e.charCode || AgileConstants.KEY_CODE_CMD == e.keyCode) {
			this.storedModifierKeys['cmd'] = true;
		}
		if (AgileConstants.KEY_CODE_SHIFT == e.charCode || AgileConstants.KEY_CODE_SHIFT == e.keyCode) {
			this.storedModifierKeys['shift'] = true;
		}
		if (AgileConstants.KEY_CODE_CTRL == e.charCode || AgileConstants.KEY_CODE_CTRL == e.keyCode) {
			this.storedModifierKeys['ctrl'] = true;
		}
		if (AgileConstants.KEY_CODE_ALT == e.charCode || AgileConstants.KEY_CODE_ALT == e.keyCode) {
			this.storedModifierKeys['alt'] = true;
		}
		
		this.broadcastStoredModifierKeys();
	};

	this.releaseModifierKeys = function(e) {
		if (!e) { e = window.event; }
		
		if (AgileConstants.KEY_CODE_CMD == e.charCode || AgileConstants.KEY_CODE_CMD == e.keyCode) {
			this.storedModifierKeys['cmd'] = false;
		}
		if (AgileConstants.KEY_CODE_SHIFT == e.charCode || AgileConstants.KEY_CODE_SHIFT == e.keyCode) {
			this.storedModifierKeys['shift'] = false;
		}
		if (AgileConstants.KEY_CODE_CTRL == e.charCode || AgileConstants.KEY_CODE_CTRL == e.keyCode) {
			this.storedModifierKeys['ctrl'] = false;
		}
		if (AgileConstants.KEY_CODE_ALT == e.charCode || AgileConstants.KEY_CODE_ALT == e.keyCode) {
			this.storedModifierKeys['alt'] = false;
		}
		
		this.broadcastStoredModifierKeys();
	};
	
	this.broadcastStoredModifierKeys = function() {
		for (var i=0; i<this.registeredClasses.length; i++) {
			this.registeredClasses[i].storeModifierCallback(this.storedModifierKeys);
		}
	};
	
	this.registerClass = function(cls) {
		if (!this.registeredClasses.inArray(cls)) {
			this.registeredClasses.push(cls);
		}
	};
	
	YAHOO.util.Event.addListener(window, AgileConstants.KEY_DOWN, agileUtilBindFunction(this, 'storeModifierKeys', ['event']) );
	YAHOO.util.Event.addListener(window, AgileConstants.KEY_UP, agileUtilBindFunction(this, 'releaseModifierKeys', ['event']) );
	
};