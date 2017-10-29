/* -----------------------------------------------------------------------------
------------------------------ KEY CODE CONSTANTS ------------------------------
----------------------------------------------------------------------------- */
/*
	Note: These are for utility to avoid referring to them all over. Please use
	in any function to test equivalency with an event key.
*/
var KEY_CODE_TAB     = "9";
var KEY_CODE_ENTER   = "13";
var KEY_CODE_ESCAPE  = "27";

var DISPLAY_TYPE_NONE          = "none";
var DISPLAY_TYPE_INLINE        = "inline";
var DISPLAY_TYPE_BLOCK         = "block";
var DISPLAY_TYPE_INLINE_BLOCK  = "inline-block";
var DISPLAY_TYPE_TABLE_ROW     = "table-row";

/* -----------------------------------------------------------------------------
------------------------- CROSS BROWSER EVENT FUNCTIONS ------------------------
----------------------------------------------------------------------------- */


/* -----------------------------------------------------------------------------
	addEvent

	Version 2

	Root event adder, called directly or by utility functions 
	below for backwards compatibility.

	To add more than one function at a time, you can either call the correct
	assignment function multiple times, or if more than one callback should fire
	in response to a single event, wrap the callbacks in a closure and pass
	that closure to the assignment function, like this :
	
		function func() {
			callback1();
			callback2();
		}
		addResizeEvent(func);
----------------------------------------------------------------------------- */
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

//***Adds a new class to an object, preserving existing classes
function addClass(obj,cName){ KillClass(obj,cName); return obj && (obj.className+=(obj.className.length>0?' ':'')+cName); }

//***Removes a particular class from an object, preserving other existing classes.
function killClass(obj,cName){ return obj && (obj.className=obj.className.replace(new RegExp("^"+cName+"\\b\\s*|\\s*\\b"+cName+"\\b",'g'),'')); }

//***Returns true if the object has the class assigned, false otherwise.
function hasClass(obj,cName){ return (!obj || !obj.className)?false:(new RegExp("\\b"+cName+"\\b")).test(obj.className) }

/* -----------------------------------------------------------------------------
	$ function
	The dollar function is a simple way to grab an element or object quickly.
----------------------------------------------------------------------------- */
function $() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);
    if (arguments.length == 1)
      return element;
    elements.push(element);
  }
  return elements;
}

/* -----------------------------------------------------------------------------
	addLoadEvent
	
	Shortcut accessor for adding a window load event. (see also addEvent)
----------------------------------------------------------------------------- */
function addLoadEvent(callback, bool_capture) {
	addEvent(window, 'load', callback, bool_capture);	
}

/* -----------------------------------------------------------------------------
	addResizeEvent
	
	Shortcut accessor for adding a window resize event. (see also addEvent)
----------------------------------------------------------------------------- */
function addResizeEvent(callback, bool_capture) {
	addEvent(window, 'resize', callback, bool_capture);
}


/* -----------------------------------------------------------------------------
	getEvent

	Extracts a cross-browser compatible event object from an event passed in,
	or, failing that, the last window.event and returns it for use with other
	event functions.
	
	@arg evt              A captured event
	@returns              object(evt)
----------------------------------------------------------------------------- */
function getEvent(e) {
	evt = (e) ? e : ((window.event) ? window.event : "");
	return (evt);
}

/* -----------------------------------------------------------------------------
	getEventTarget

	Retrieves the object on which the event was triggered. Be very careful, as
	many times the actual target may differ from what you'd expect. For example,
	if you had the following code:
	
	<a href="#" onclick="foo(event);"><span>hi</span></a>
	
	Getting the target might, in some browsers, return the span.
	
	@arg evt              A valid event object (see getEvent)
	@returns              object(obj)
----------------------------------------------------------------------------- */
function getEventTarget(evt) {
	evt = getEvent(evt);
	tgt = (evt.target) ? evt.target : evt.srcElement;
	return (tgt);
}

/* -----------------------------------------------------------------------------
	getEventX

	Returns the x location of the event.
	
	@arg evt              A captured event
	@returns              int(x)
----------------------------------------------------------------------------- */
function getEventX(evt) {
	evt = getEvent(evt);
	if (evt.pageX) {
		return (evt.pageX);
	} else if (typeof evt.clientX != "undefined") {
		return (evt.clientX);
	}
	return 0;
}

/* -----------------------------------------------------------------------------
	getEventY

	Returns the y location of the event.
	
	@arg evt              A captured event
	@returns              int(y)
----------------------------------------------------------------------------- */
function getEventY(evt) {
	evt = getEvent(evt);
	if (evt.pageY) {
		return (evt.pageY);
	} else if (typeof evt.clientY != "undefined") {
		return (evt.clientY);
	}
	return 0;
}

/* -----------------------------------------------------------------------------
	getEventModifiers
	
	Takes an event object and returns an array of the modifiers that are 
	pressed as T|F values. (see also getEventKeyCode)
	
	@arg evt              A valid event object (see getEvent)
	@returns              array('shift': T|F, 'ctrl': T|F, 'alt': T|F)
	
	Event Modifier Tables
	
	Netcsape
	Alt only              modifiers=1 (001)
	Ctrl only             modifiers=2 (010)
	Ctrl+Alt              modifiers=3 (011)
	Shift only            modifiers=4 (100)
	Shift+Alt             modifiers=5 (101)
	Shift+Ctrl            modifiers=6 (110)
	Shift+Alt+Ctrl        modifiers=7 (111)
	None of these keys    modifiers=0 (000)
	
	IE
	event.ctrlKey
	event.altKey
	event.shiftKey
----------------------------------------------------------------------------- */
function getEventModifiers(evt) {
	evt = getEvent(evt);
	var modifier_list = {
		'shift': false,
		'ctrl': false,
		'alt': false
	}

	if (evt.modifiers & Event.SHIFT_MASK) {
		modifier_list['shift'] = true;
	} else if (evt.shiftKey && evt.shiftKey == true) {
		modifier_list['shift'] = true;
	}

	if (evt.modifiers & Event.CTRL_MASK) {
		modifier_list['ctrl'] = true;
	} else if (evt.ctrlKey && evt.ctrlKey == true) {
		modifier_list['ctrl'] = true;
	}
	
	if (evt.modifiers & Event.ALT_MASK) {
		modifier_list['alt'] = true;
	} else if (evt.altKey && evt.altKey == true) {
		modifier_list['alt'] = true;
	}
	
	return modifier_list;
}

/* -----------------------------------------------------------------------------
	getEventKeyCode

	Retruns the code of the key pressed. Other code will need to decide 
	what to do with the key. (see also getEventModifiers)
	
	@arg evt              A captured event
	@returns              int(x)
----------------------------------------------------------------------------- */
function getEventKeyCode(evt) {
	evt = getEvent(evt);
	var key_code = null;
	
	if (evt.keyCode) {
		key_code = evt.keyCode;
	} else if (evt.which) {
		key_code = evt.which;
	}
	
	return key_code;
}






/* -----------------------------------------------------------------------------
---------------------------- DOM UTILITY FUNCTIONS -----------------------------
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	getElementsByClassName

	Version 2

	Returns a collection of elements that match the className "class"
	@arg cls               the class to match
	@arg elemStart         (optional) element to begin match at
	@arg tagType           (optional) type of tag to match on
----------------------------------------------------------------------------- */
function getElementsByClassName(cls, elemStart, tagType) {
	var children = new Array();
	if (elemStart == null) { elemStart = document; }
	if (tagType == null) { tagType = '*'; }
	var elemList = elemStart.getElementsByTagName(tagType);
	var elemListLen = elemList.length;
	var pattern = new RegExp("(^|\\s)" + cls + "(\\s|$)");
	for (i = 0, j = 0; i < elemListLen; i++) {
		if ( pattern.test(elemList[i].className) ) {
			children[j] = elemList[i];
			j++;
		}
	}
	return (children);
}


/* -----------------------------------------------------------------------------
	getInsideWindowWidth
		
	Returns the available content width.
----------------------------------------------------------------------------- */
function getInsideWindowWidth() {
	if (window.innerWidth) {
		return window.innerWidth;
	} else if (document.compatMode && (document.compatMode.indexOf("CSS1") >= 0) ) {
		return document.body.parentElement.clientWidth;
	} else if (document.body && document.body.clientWidth) {
		return document.body.clientWidth;
	}
	return 0;
}


/* -----------------------------------------------------------------------------
	getInsideWindowHeight
		
	Returns the available content height.
----------------------------------------------------------------------------- */
function getInsideWindowHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	} else if (document.compatMode && (document.compatMode.indexOf("CSS1") >= 0) ) {
		return document.body.parentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		return document.body.clientHeight;
	}
	return 0;
}



/* -----------------------------------------------------------------------------
------------------------ ELEMENT MODIFICATION FUNCTIONS ------------------------
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	setClassName

	@arg obj            object to set className on
	@arg cls            name of the class to set
	@arg bool_preserve  (optional) boolean add to existing values
----------------------------------------------------------------------------- */
function setClassName(obj, cls, bool_preserve) {
	if ( obj )
	{
		if (typeof(obj) == 'object' && obj.length && obj.length > 1) {
				for (var i=0; i<obj.length; i++) {
					setClassName(obj[i], cls, bool_preserve);
				}
			} else {
				if (bool_preserve && obj.className) {
					obj.className = obj.className + " " + cls;
				} else {
					obj.className = cls;
				}
			}
	}
}


function setDisabled(obj, bool_disable) {
	if (typeof(obj) == 'object' && obj.length && obj.length > 1) {
		for (var i=0; i<obj.length; i++) {
			setDisabledName(obj[i], bool_disable);
		}
	} else {
		obj.disabled = bool_disabled;
	}
}


function setDisplayType(obj, display_type) {
	if (!obj || !display_type) { return; }
	
	obj.style.display = display_type;
}

function toggleBlock(obj){ 
	if (typeof(obj) == 'string') {
		obj = $(obj);
	}

	if (obj.style.display == DISPLAY_TYPE_NONE){ 
		setDisplayType(obj, DISPLAY_TYPE_BLOCK);
	} else { 
		setDisplayType(obj, DISPLAY_TYPE_NONE);
	} 
}

