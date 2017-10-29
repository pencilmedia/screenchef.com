/**
* Slight port of KeyListener to supprt mouse, and some other Agile specific stuff
*
*
* KeyListener is a utility that provides an easy interface for listening for
* keydown/keyup events fired against DOM elements.
* @namespace YAHOO.util
* @class KeyListener
* @constructor
* @param {HTMLElement} attachTo The element or element ID to which the key 
*								event should be attached
* @param {String}	   attachTo The element or element ID to which the key
*								event should be attached
* @param {Object}	   keyData	The object literal representing the key(s) 
*								to detect. Possible attributes are 
*								shift(boolean), alt(boolean), ctrl(boolean) 
*								and keys(either an int or an array of ints 
*								representing keycodes).
* @param {Function}	   handler	The CustomEvent handler to fire when the 
*								key event is detected
* @param {Object}	   handler	An object literal representing the handler. 
* @param {String}	   event	Optional. The event (keydown or keyup) to 
*								listen for. Defaults automatically to keydown.
*/
YAHOO.util.AgileEventListener = function(attachTo, keyData, handler, event, keyDict) {
	if (!attachTo) {
	} else if (!keyData) {
	} else if (!handler) {
	} 
	
	if (!event) {
		event = AgileBrowserEventConstants['KEY_DOWN'];
	}

	/**
	* The CustomEvent fired internally when a key is pressed
	* @event agileEvent
	* @private
	* @param {Object} keyData The object literal representing the key(s) to 
	*						  detect. Possible attributes are shift(boolean), 
	*						  alt(boolean), ctrl(boolean) and keys(either an 
	*						  int or an array of ints representing keycodes).
	*/
	var uniqEventId = Math.round((Math.random() * 1000)) + Math.round(new Date());
	var agileEvent = new YAHOO.util.CustomEvent("agileEvent_" + event + "_" + uniqEventId);
	
	/**
	* The CustomEvent fired when the KeyListener is enabled via the enable() 
	* function
	* @event enabledEvent
	* @param {Object} keyData The object literal representing the key(s) to 
	*						  detect. Possible attributes are shift(boolean), 
	*						  alt(boolean), ctrl(boolean) and keys(either an 
	*						  int or an array of ints representing keycodes).
	*/
	this.enabledEvent = new YAHOO.util.CustomEvent("enabled");

	/**
	* The CustomEvent fired when the KeyListener is disabled via the 
	* disable() function
	* @event disabledEvent
	* @param {Object} keyData The object literal representing the key(s) to 
	*						  detect. Possible attributes are shift(boolean), 
	*						  alt(boolean), ctrl(boolean) and keys(either an 
	*						  int or an array of ints representing keycodes).
	*/
	this.disabledEvent = new YAHOO.util.CustomEvent("disabled");

	if (typeof attachTo == 'string') {
		attachTo = document.getElementById(attachTo);
	}

	if (typeof handler == 'function') {
		agileEvent.subscribe(handler);
	} else {
		agileEvent.subscribe(handler.fn, handler.scope, handler.correctScope);
	}

	/**
	* Handles the key event when a key is pressed.
	* @method handleKeyPress
	* @param {DOMEvent} e	The keypress DOM event
	* @param {Object}	obj The DOM event scope object
	* @private
	*/
	function handleKeyPress(e, obj) {
		if (keyData) {	
			if (! keyData.shift) { keyData.shift = false; }
			if (! keyData.alt)	 { keyData.alt = false; }
			if (! keyData.ctrl)	 { keyData.ctrl = false; }
			
			// check held down modifying keys first
			if (e.shiftKey == keyData.shift && e.altKey == keyData.alt && e.ctrlKey  == keyData.ctrl) { 
				
				// BEN: Modified
				// Looks to see if we are listening to akey event, otherwise it is a mouse event
				if (event.indexOf('key') > -1) {
			
					var dataItem;
					var keyPressed;
					// BEN: Modified
					var keyCode = YAHOO.util.Event.getCharCode(e);

					if (keyData.keys instanceof Array) {
						for (var i=0;i<keyData.keys.length;i++) {
							dataItem = keyData.keys[i];
							// BEN: Modified
							if (dataItem == keyCode) {
								agileEvent.fire(keyCode, e);
								return;
								break;
							}
						}
					} else {
						dataItem = keyData.keys;
						// BEN: Modified
						if (dataItem == keyCode) {
							agileEvent.fire(keyCode, e);
							return;
						}
					}
	 
				} else {
					agileEvent.fire(null, e);
					return;
				}
			}
			
		} else if (keyDict) {
			for (var i=0; i<keyDict.length; i++) {
				if (! keyDict[i].shift)  { keyDict[i].shift = false; }
				if (! keyDict[i].alt)	 { keyDict[i].alt = false; }
				if (! keyDict[i].ctrl)	 { keyDict[i].ctrl = false; }
				
				// check held down modifying keys first
				if (e.shiftKey == keyDict[i].shift && e.altKey == keyDict[i].alt && e.ctrlKey == keyDict[i].ctrl) { 
			
					// BEN: Modified
					// Looks to see if we are listening to akey event, otherwise it is a mouse event
					if (event.indexOf('key') > -1) {
			
						var dataItem;
						var keyPressed;
						// BEN: Modified
						var keyCode = YAHOO.util.Event.getCharCode(e);

						if (keyDict[i].keys instanceof Array) {
							for (var i=0;i<keyDict[i].keys.length;i++) {
								dataItem = keyDict[i].keys[i];
								// BEN: Modified
								if (dataItem == keyCode) {
									agileEvent.fire(keyCode, e);
									return;
									break;
								}
							}
						} else {
							dataItem = keyDict[i].keys;
							// BEN: Modified
							if (dataItem == keyCode) {
								agileEvent.fire(keyCode, e);
								return;
							}
						}
	 
					} else {
						agileEvent.fire(null, e);
						return;
					}
				}
			}
		}
	}


	


	/**
	* Enables the KeyListener by attaching the DOM event listeners to the 
	* target DOM element
	* @method enable
	*/
	this.enable = function() {
		if (! this.enabled) {
			YAHOO.util.Event.addListener(attachTo, event, handleKeyPress);
			if (keyDict) {
				this.enabledEvent.fire(keyDict);
			} else {
				this.enabledEvent.fire(keyData);
			}
		}
		/**
		* Boolean indicating the enabled/disabled state of the Tooltip
		* @property enabled
		* @type Boolean
		*/
		this.enabled = true;
	};

	/**
	* Disables the KeyListener by removing the DOM event listeners from the 
	* target DOM element
	* @method disable
	*/
	this.disable = function() {
		if (this.enabled) {
			YAHOO.util.Event.removeListener(attachTo, event, handleKeyPress);
			if (keyDict) {
				this.disabledEvent.fire(keyDict);
			} else {
				this.disabledEvent.fire(keyData);
			}
		}
		this.enabled = false;
	};

	/**
	* Returns a String representation of the object.
	* @method toString
	* @return {String}	The string representation of the KeyListener
	*/ 
	this.toString = function() {
		return "AgileKeyListener [" + keyData.keys + "] " + attachTo.tagName + (attachTo.id ? "[" + attachTo.id + "]" : "");
	};

};

