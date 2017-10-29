AgileEventProxy = function (attachTo, keyData, handler, event, keyDict) {
	
	this.enabledEvent          = new YAHOO.util.CustomEvent("enabled");
	this.disabledEvent         = new YAHOO.util.CustomEvent("disabled");

	this.storeSelectedText     = true;
	this.deselectSelectedText  = true;
	this.cancelEventBubbling   = true;
	
	this.listenerEvent         = event ? event : AgileBrowserEventConstants.KEY_DOWN;
	this.attachObj             = null;
	this.handler               = handler;
	
	
	
	if (typeof attachTo == 'string') {
		this.attachObj = document.getElementById(attachTo);
	} else {
		this.attachObj = attachTo;
	}
	
	
	if (typeof (window.AGILE_TEXT_STORAGE) == 'undefined') {
		window.AGILE_TEXT_STORAGE = new AgileGlobalTextSelectionHandler();
	}

	
	this.handleYahooEvent = function(eventObj, srcObj) {
		var realEvent = this.getRealEvent(srcObj);
		var agileObj = this.generateAgileObj(eventObj, srcObj, realEvent);
		this.handleCommonTasks(agileObj);
		
		if (typeof this.handler == 'function') {
			this.handler(eventObj, srcObj, agileObj);
		} else {
			this.handler.scope[this.handler.fn](eventObj, srcObj, agileObj);
		}
	};


	this.yahooEventObj = new YAHOO.util.AgileEventListener(attachTo, keyData, {fn: this.handleYahooEvent, scope: this, correctScope: true}, this.listenerEvent, keyDict);


	this.getRealEvent = function(srcObj) {
		return srcObj[1];
	};

	this.generateAgileObj = function(eventObj, srcObj, realEvent) {
		var agileObj = {};
		
		agileObj['yEvent']      = eventObj;
		agileObj['realEvent']   = realEvent;
		agileObj['attachObj']   = this.attachObj;
		agileObj['modifiers']   = this.getModifierKeys(realEvent);
		agileObj['sourceObj']   = YAHOO.util.Event.getTarget(realEvent);
		agileObj['keycode']     = YAHOO.util.Event.getCharCode(realEvent);

		return agileObj;
	};
	
	
	
	this.getModifierKeys = function(e) {
		var modifier_list = {
			'shift': false,
			'ctrl': false,
			'alt': false
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
	};

	
	this.handleCommonTasks = function(agileObj) {
		if (this.cancelEventBubbling) {
			YAHOO.util.Event.stopEvent(agileObj['realEvent']);
		}
		if (this.storeSelectedText) {
			window.AGILE_TEXT_STORAGE.storeSelectedText(agileObj['attachObj']);
		}
		if (this.deselectSelectedText) {
			window.AGILE_TEXT_STORAGE.deselectSelectedText(agileObj['attachObj']);
		}
	};
	
	
	

	this.enable = function() {
		if (!this.enabled) {
			this.yahooEventObj.enable();
			this.enabledEvent.fire();
		}
		this.enabled = true;
	};

	this.disable = function() {
		if (this.enabled) {
			this.yahooEventObj.disable();
			this.disabledEvent.fire();
		}
		this.enabled = false;
	};
	
	this.toString = function() {
		return "AgileEventListener -> " + this.yahooEventObj.toString();
	};




	/* Cancel event bubbling accessors */	
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
