AgileEventListener = function (attachTo, keyData, handler, event, mouse) {

	if (!attachTo) {}
	else if (!keyData) {}
	else if (!handler) {}

	if (typeof (window.AGILE_EVENT_BROADCASTER) == 'undefined') {
		window.AGILE_EVENT_BROADCASTER = new AgileGlobalEventBroadcaster();
	}
	
	if (typeof (window.AGILE_MODIFIER_STORAGE) == 'undefined') {
		window.AGILE_MODIFIER_STORAGE = new AgileGlobalModifierStorage();
	}
	
	window.AGILE_MODIFIER_STORAGE.registerClass(this);
	
	if (typeof (window.AGILE_TEXT_STORAGE) == 'undefined') {
		window.AGILE_TEXT_STORAGE = new AgileGlobalTextSelectionHandler();
	}
	
	
	// Set default event
	if (!event && !mouse) { event = AgileBrowserEventConstants.KEY_DOWN; }
	
	// Set default modifier listeners
	if (!keyData.shift) { keyData.shift = false; }
	if (!keyData.alt) { keyData.alt = false; }
	if (!keyData.ctrl) { keyData.ctrl = false; }


	var keyEvent         = new YAHOO.util.CustomEvent("keyPressed");
	var mouseEvent       = new YAHOO.util.CustomEvent("mouseClicked");
	this.enabledEvent    = new YAHOO.util.CustomEvent("enabled");
	this.disabledEvent   = new YAHOO.util.CustomEvent("disabled");
	this.storedModifierKeys = {
		'alt': false,
		'shift': false,
		'ctrl': false,
		'cmd': false
	};
	this.stopAtAgileEvents = true;
	this.storeSelectedText = true;
	this.deselectSelectedText = true;
	this.cancelEventBubbling = true;
	
	
	if (typeof attachTo == 'string') {
		attachTo = document.getElementById(attachTo);
	}
	this.attachTo = attachTo;

	if (typeof handler == 'function') {
		if (mouse) {
			mouseEvent.subscribe(handler);
		} else {
			keyEvent.subscribe(handler);
		}
	} else {
		if (mouse) {
			mouseEvent.subscribe(handler.fn, handler.scope, handler.correctScope);
		} else {
			keyEvent.subscribe(handler.fn, handler.scope, handler.correctScope);
		}
	}
	
	this.handleCommonTasks = function(agile_obj) {
		if (this.storeSelectedText) {
			window.AGILE_TEXT_STORAGE.storeSelectedText(attachTo);
		}
		if (this.deselectSelectedText) {
			window.AGILE_TEXT_STORAGE.deselectSelectedText(attachTo);
		}
	}

	this.handleKeyPress = function(e, obj) {
		
		var agile_obj = {};
		agile_obj['event'] = e;
		agile_obj['y_obj'] = obj;
		agile_obj['modifiers'] = this.getModifierKeys(e);
		agile_obj['source_obj'] = this.getSourceObject(e);
		agile_obj['attach_obj'] = this.attachTo;
		agile_obj['keycode'] = this.getKeycode(e);
		
		this.handleCommonTasks(agile_obj);

		if (agile_obj['modifiers']['shift'] == keyData.shift && 
			agile_obj['modifiers']['alt'] == keyData.alt && 
			( (agile_obj['modifiers']['ctrl'] == keyData.ctrl) || (agile_obj['modifiers']['cmd'] == keyData.ctrl) ) ) {
			
			var cancelOnAgileEvent = false;
			cancelOnAgileEvent = window.AGILE_EVENT_BROADCASTER.agileEventBroadcast(agile_obj);

			
			if (cancelOnAgileEvent) {
				if (this.cancelEventBubbling) {
					this.cancelBubble(e);
					return false;
				}
				return;
			}
			
			var dataItem;
			var keyPressed;
			if (keyData.keys instanceof Array) {
				for (var i=0; i<keyData.keys.length; i++) {
					dataItem = keyData.keys[i];
					if (dataItem == agile_obj['keycode']) {
						keyEvent.fire(e, agile_obj);
						break;
					}
				}
			} else {
				dataItem = keyData.keys;
				if (dataItem == agile_obj['keycode']) {
					keyEvent.fire(e, agile_obj);
				}
			}
		}
		
		if (this.cancelEventBubbling) {
			this.cancelBubble(e);
			return false;
		}
	}
	
	this.handleMouseClick = function(e, obj) {
		var agile_obj = {};
		agile_obj['event'] = e;
		agile_obj['y_obj'] = obj;
		agile_obj['modifiers'] = this.getModifierKeys(e);
		agile_obj['source_obj'] = this.getSourceObject(e);
		agile_obj['attach_obj'] = this.attachTo;
		agile_obj['keycode'] = this.getKeycode(e);
		
		this.handleCommonTasks(agile_obj);
		
		if (agile_obj['modifiers']['shift'] == keyData.shift && 
			agile_obj['modifiers']['alt'] == keyData.alt && 
			( (agile_obj['modifiers']['ctrl'] == keyData.ctrl) || (agile_obj['modifiers']['cmd'] == keyData.ctrl) ) ) {
		
			mouseEvent.fire(e, agile_obj);
		}
	}

	this.enable = function() {
		if (!this.enabled) {
			if (mouse) {
				YAHOO.util.Event.addListener(attachTo, mouse, agileUtilBindFunction(this, 'handleMouseClick', ['event']) );
			} else {
				YAHOO.util.Event.addListener(attachTo, event, agileUtilBindFunction(this, 'handleKeyPress', ['event']) );
			}
			this.enabledEvent.fire(keyData);
		}
		this.enabled = true;
	};

	this.disable = function() {
		if (this.enabled) {
			if (mouse) {
				YAHOO.util.Event.removeListener(attachTo, mouse, agileUtilBindFunction(this, 'handleMouseClick', ['event']) );
			} else {
				YAHOO.util.Event.removeListener(attachTo, event, agileUtilBindFunction(this, 'handleKeyPress', ['event']) );
			}
			this.disabledEvent.fire(keyData);
		}
		this.enabled = false;
	};
	
	this.toString = function() {
		return "AgileKeyListener [" + keyData.keys + "] " + attachTo.tagName + (attachTo.id ? "[" + attachTo.id + "]" : "");
	};


	this.getModifierKeys = function(e) {
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

		modifier_list['cmd'] = this.storedModifierKeys['cmd'];

		return modifier_list;
	};

	/* Get the thing the user interacted with */
	this.getSourceObject = function(e) {
		var target = (e.target) ? e.target : e.srcElement;
		return (target);
	};

	this.getKeycode = function(e) {
		if (e.charCode) {
			return e.charCode;
		} else if (e.keyCode) {
			return e.keyCode;
		}
		return null;
	};


	/* Callback for window registered modifier keys */
	this.storeModifierCallback = function(modifiers) {
		this.storedModifierKeys = modifiers;
	};
	
	
	/* Accessors to stop at agile events */
	this.disableAgileEventPrecedence = function() {
		this.stopAtAgileEvents = false;
	};

	this.enableAgileEventPrecedence = function() {
		this.stopAtAgileEvents = true;
	};



	/* Cancel event bubbling and accessors */
	this.cancelBubble = function(e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.cancelBubble = true;
			e.returnValue = false;
		}
	};
	
	this.enableEventCanceling = function() {
		this.cancelEventBubbling = true;
	};

	this.disableEventCanceling = function() {
		this.cancelEventBubbling = false;
	};



	/* Text storage accessors */
	this.enableSelectionStorage = function() {
		this.storeSelectedText = true;
	};

	this.disableSelectionStorage = function() {
		this.storeSelectedText = false;
	};
	


	/* Text selection cancel accessors */
	this.enableSelectionCanceling = function() {
		this.deselectSelectedText = true;
	};

	this.disableSelectionCanceling = function() {
		this.deselectSelectedText = false;
	};
	
};
