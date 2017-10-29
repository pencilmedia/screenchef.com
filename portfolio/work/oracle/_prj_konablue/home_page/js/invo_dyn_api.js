/* -----------------------------------------------------------------------------
	Involution Studios Dynamic HTML Library
	Adapted from the O'Reilly book "Javascript and DHTML Cookbook"

	Version 1.1
	Author: Benjamin Listwon
	
	Version 1.0
	Author: Danny Goodman
	
	Notes:
	- Core functionality is compatible with NN4+, IE4+, FF and Safari
	- Untested in Opera, Konqueror, et al
	
----------------------------------------------------------------------------- */

/* -----------------------------------------------------------------------------
	Global Variables, Declarations and other Mappings
----------------------------------------------------------------------------- */
var gIsCSS;
var gIsW3C;
var gIsIE4;
var gIsNN4;
var gIsIE6CSS;


/* -----------------------------------------------------------------------------
	initDynAPI()
	
	Init function to set all global variables, and perform any other
	global work.
----------------------------------------------------------------------------- */
function initDynAPI() {
	if (document.images) {
		gIsCSS = (document.body && document.body.style) ? true : false;
		gIsW3C = (gIsCSS && document.getElementById) ? true : false;
		gIsIE4 = (gIsCSS && document.all) ? true : false;
		gIsNN4 = (document.layers) ? true : false;
		gIsIE6CSS = (document.compatMode && document.compatMode.indexOf("CSS1") >= 0) ? true : false;
	}
	// alert("InvoDynAPI is loaded.");
}


/* -----------------------------------------------------------------------------
	Set handler to exec init on load
----------------------------------------------------------------------------- */
// TODO: Build a loader that auto discovers all
// window.onload = initDynAPI;


/* -----------------------------------------------------------------------------
	dynSeekLayer(doc, name)
		doc = a document object
		name = target name to find
	
	Seek nested NN4 layer specified by name in the document object specified
	by doc.
----------------------------------------------------------------------------- */
function dynSeekLayer(doc, name) {
	var theObj;
	for (var i=0; i<doc.layers.length; i++) {
		if (doc.layers[i].name == name) {
			theObj = doc.layers[i];
			break;
		}
		if (doc.layers[i].document.layers.length > 0) {
			theObj = dynSeekLayer(document.layers[i].document, name);
		}
	}
	return theObj;
}


/* -----------------------------------------------------------------------------
	dynGetRawObject(obj)
		obj = a string or an obj reference
		
	If obj is a string, convert name string or object reference into a valid 
	object reference, otherwise pass through the object reference.
----------------------------------------------------------------------------- */
function dynGetRawObject(obj) {
	var theObj;
	
	
	if (typeof obj == "string") {
		if (gIsW3C) {
			theObj = document.getElementById(obj);
		} else if (gIsIE4) {
			theObj = document.all(obj);
		} else if (gIsNN4) {
			theObj = dynSeekLayer(document, obj);
		}
	} else {
		theObj = obj;
	}
	return theObj;
}

/* -----------------------------------------------------------------------------
	dynGetStyleObject(obj)
		obj = a string or an obj reference
		
	Runs obj through dynGetRawObject() to obtain the object reference, then
	converts the object reference into a valid style (or NN4 layer) reference
----------------------------------------------------------------------------- */
function dynGetStyleObject(obj) {
	var theObj = dynGetRawObject(obj);
	if (theObj && gIsCSS) {
		theObj = theObj.style;
	}
	return theObj;
}


/* -----------------------------------------------------------------------------
	dynShiftTo(obj, x, y)
		obj = a string or an obj reference
		x = the x coordinate to move to
		y = the y coordinate to move to
		
	Positions the object obj at a specific pixel coordinate given by x, y.
----------------------------------------------------------------------------- */
function dynShiftTo(obj, x, y) {
	if (x < 0) {x = 0;}
	if (y < 0) {y = 0;}
	var theObj = dynGetStyleObject(obj);
	if (theObj) {
		if (gIsCSS) {
			var xUnit = (typeof theObj.left == "string") ? "px" : 0;
			var yUnit = (typeof theObj.top == "string") ? "px" : 0;
			theObj.left = x + xUnit;
			theObj.top = y + yUnit;
		} else if (gIsNN4) {
			theObj.moveTo(x, y);
		}
	}
}

/* -----------------------------------------------------------------------------
	dynShiftBy(obj, x, y)
		obj = a string or an obj reference
		x = the x amount to move by
		y = the y amount to move by
		
	Moves the object obj by the values given by x, y.
----------------------------------------------------------------------------- */
function dynShiftBy(obj, deltaX, deltaY) {
	var theObj = dynGetStyleObject(obj);
	if (theObj) {
		if (gIsCSS) {
			var xUnit = (typeof theObj.left == "string") ? "px" : 0;
			var yUnit = (typeof theObj.top == "string") ? "px" : 0;
			theObj.left = dynGetObjectLeft(obj) + deltaX + xUnit;
			theObj.top = dynGetObjectTop(obj) + deltaY + yUnit;
		} else if (gIsNN4) {
			theObj.moveBy(deltaX, deltaY);
		}
	}
}

/* -----------------------------------------------------------------------------
	dynSetZIndex(obj, zOrder)
		obj = a string or an obj reference
		zOrder = the z-index to set the object to
		
	Sets the zIndex of the object obj to the value given by zOrder.
----------------------------------------------------------------------------- */
function dynSetZIndex(obj, zOrder) {
	var theObj = dynGetStyleObject(obj);
	if (theObj) {
		theObj.zIndex = zOrder;
	}
}

// Set the background color of an object
// NOTE: Convert this to generic dynSetProperty
function dynSetBGColor(obj, color) {
	var theObj = dynGetStyleObject(obj);
	
	if (theObj) {
		if (gIsNN4) {
			theObj.bgColor = color;
		} else if (gIsCSS) {
			theObj.backgroundColor = color;
		}
	}
	else{
	alert("Dove sei? dynSetBGColor");
	}
}

// Set visibility
// TODO: Convert this to generic dynSetProperty
function dynSetVisibility(obj, value) {
	var propValues = new Array("visible", "hidden");
	var theObj = dynGetStyleObject(obj);
	if (theObj && propValues.inArray(value)) {
		theObj.visibility = value;
	}
}

// Set display
// TODO: Convert this to generic dynSetProperty
function dynSetDisplay(obj, value) {
	var propValues = new Array("none", "inline", "block", "table-row");
	var theObj = dynGetStyleObject(obj);
	if (theObj && propValues.inArray(value)) {
		theObj.display = value;
	}
}



/* NOT YET READY FOR PRIMETIME */
/*

// First part of a generic attribute utility
var gPropertiesArray                   = new Array;
gPropertiesArray["display"]            = "display";
gPropertiesArray["visibility"]         = "visibility";
gPropertiesArray["backgroundColor"]    = (gIsNN4) ? "bgColor" : "backgroundColor";

var gPropertyValuesArray               = new Array;
gPropertyValuesArray["display"]        = new Array("none", "inline", "block", "table-row");
gPropertyValuesArray["visibility"]     = new Array("hidden", "visible");

function dynSetProperty(obj, prop, value) {
	// TODO
	// create a property lookup table, then set all things that
	// map to individual values
	// see dynSetBGColor
}
*/


/* -----------------------------------------------------------------------------
	dynGetObjectLeft(obj)
		obj = a string or an obj reference
		
	Returns the x coordinate of a positionable element.
----------------------------------------------------------------------------- */
function dynGetObjectLeft(obj) {
	var elem = dynGetRawObject(obj);
	var result = 0;
	if (document.defaultView) {
		var style = document.defaultView;
		var cssDec1 = style.getComputedStyle(elem, "");
		result = cssDec1.getPropertyValue("left");
	} else if (elem.currentStyle) {
		result = elem.currentStyle.left;
	} else if (elem.style) {
		result = elem.style.left;
	} else if (gIsNN4) {
		result = elem.left;
	}
	return parseInt(result);
}


function dynSetObjectLeft(obj, value) {
	var elem = dynGetRawObject(obj);
	if (elem.style) {
		elem.style.left = value;
	} else if (gIsNN4) {
		elem.left = value;
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectTop(obj)
		obj = a string or an obj reference
		
	Returns the y coordinate of a positionable element.
----------------------------------------------------------------------------- */
function dynGetObjectTop(obj) {
	var elem = dynGetRawObject(obj);
	var result = 0;
	if (document.defaultView) {
		var style = document.defaultView;
		var cssDec1 = style.getComputedStyle(elem, "");
		result = cssDec1.getPropertyValue("top");
	} else if (elem.currentStyle) {
		result = elem.currentStyle.top;
	} else if (elem.style) {
		result = elem.style.top;
	} else if (gIsNN4) {
		result = elem.top;
	}
	return parseInt(result);
}


function dynSetObjectTop(obj, value) {
	var elem = dynGetRawObject(obj);
	if (elem.style) {
		elem.style.top = value;
	} else if (gIsNN4) {
		elem.top = value;
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectWidth(obj)
		obj = a string or an obj reference
		
	Returns the rendered width of an element.
----------------------------------------------------------------------------- */
function dynGetObjectWidth(obj) {
	var elem = dynGetRawObject(obj);
	var result = 0;
	if (elem.offsetWidth) {
		result = elem.offsetWidth;
	} else if (elem.clip && elem.clip.width) {
		result = elem.clip.width;
	} else if (elem.style && elem.style.pixelWidth) {
		result = elem.style.pixelWidth;
	}
	return parseInt(result);
}

/* -----------------------------------------------------------------------------
	dynSetObjectWidth(obj, value)
		obj = a string or an obj reference
		value = new width
		
	Sets the width of the given object
----------------------------------------------------------------------------- */
function dynSetObjectWidth(obj, value) {
	// IE doesn't like negative values
    if (parseInt(value) < 0) {
		value = "0px";
	}
	
	var elem = dynGetRawObject(obj);
	if (elem.style && elem.style.pixelWidth) {
		value = parseInt(value);
		elem.style.pixelWidth = value;
	} else if (elem.style) {
		elem.style.width = value;
	} else if (gIsNN4) {
		elem.width = value;
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectHeight(obj)
		obj = a string or an obj reference
		
	Returns the rendered height of an element.
----------------------------------------------------------------------------- */
function dynGetObjectHeight(obj) {
	var elem = dynGetRawObject(obj);
	var result = 0;
	if (elem.offsetHeight) {
		result = elem.offsetHeight;
	} else if (elem.clip && elem.clip.height) {
		result = elem.clip.height;
	} else if (elem.style && elem.style.pixelHeight) {
		result = elem.style.pixelHeight;
	}
	return parseInt(result);
}

/* -----------------------------------------------------------------------------
	dynSetObjectHeight(obj, value)
		obj = a string or an obj reference
		value = new height
		
	Sets the height of the given object
----------------------------------------------------------------------------- */
function dynSetObjectHeight(obj, value) {
	// IE doesn't like negative values
    if (parseInt(value) < 0) {
		value = "0px";
	}
	
	var elem = dynGetRawObject(obj);
	if (elem.style && elem.style.pixelHeight) {
		value = parseInt(value);
		elem.style.pixelHeight = value;
	} else if (elem.style) {
		elem.style.height = value;
	} else if (gIsNN4) {
		elem.height = value;
	}
}

/* -----------------------------------------------------------------------------
	dynGetInsideWindowWidth()
		
	Returns the available content width.
----------------------------------------------------------------------------- */
function dynGetInsideWindowWidth() {
	if (window.innerWidth) {
		return window.innerWidth;
	} else if (gIsIE6CSS) {
		return document.body.parentElement.clientWidth;
	} else if (document.body && document.body.clientWidth) {
		return document.body.clientWidth;
	}
	return 0;
}


/* -----------------------------------------------------------------------------
	dynGetInsideWindowHeight()
		
	Returns the available content height.
----------------------------------------------------------------------------- */
function dynGetInsideWindowHeight() {
	if (window.innerHeight) {
		return window.innerHeight;
	} else if (gIsIE6CSS) {
		return document.body.parentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		return document.body.clientHeight;
	}
	return 0;
}








/* -----------------------------------------------------------------------------
	Below here is some provisional code for doing modal dialogs and other
	similar tasks. It works, but needs to be more generic, e.g. take div ids
	instead of hardcoded assumptions, etc.
		
    --Ben
----------------------------------------------------------------------------- */


// Center a positionable element whose name is passed as 
// a parameter in the current window/frame, and show it
function dynCenterOnWindow(obj, restrict) {
	var elem = dynGetRawObject(obj);
	var scrollX = 0;
	var scrollY = 0;
	var currentX = dynGetObjectLeft(obj);
	var currentY = dynGetObjectTop(obj);
	if (document.body && typeof document.body.scrollTop != "undefined") {
		scrollX += document.body.scrollLeft;
		scrollY += document.body.scrollTop;
		if (document.body.parentNode && typeof document.body.parentNode.scrollTop != "undefined") {
			scrollX += document.body.parentNode.scrollLeft;
			scrollY += document.body.parentNode.scrollTop;
		}
	} else if (typeof window.pageXOffset != "undefined") {
		scrollX += window.pageXOffset;
		scrollY += window.pageYOffset;
	}
	var x = Math.round((dynGetInsideWindowWidth() / 2) - (dynGetObjectWidth(elem) / 2)) + scrollX;
	var y = Math.round((dynGetInsideWindowHeight() / 2) - (dynGetObjectHeight(elem) / 2)) + scrollY;
	
	if (restrict) {
		if (restrict == "x") {
			dynShiftTo(obj, x, currentY);
		} else if (restrict == "y") {
			dynShiftTo(obj, currentX, y);
		}
	} else {
		dynShiftTo(obj, x, y);
	}
	//dynSetZIndex(obj, "10000");
}


/* Handlers that need to be registered with an event registration system */
function dynHandleResize() {
	if (isNN4) {
		location.reload();
	} else {
		dynCenterOnWindow("banner");
	}
}

function dynHandleScroll() {
	dynCenterOnWindow("banner");
}


function dynBlockerVisibility(obj, isVisible) {
	var elem = dynGetRawObject(obj);
	if (isVisible) {
		var winX = dynGetInsideWindowWidth();
		var winY = dynGetInsideWindowHeight();
		dynSetObjectWidth(obj, ((winX + 20) + "px"));
		dynSetObjectHeight(obj, ((winY + 20) + "px"));
	} else {
		dynSetObjectWidth(obj, "10px");
		dynSetObjectHeight(obj, "10px");
	}
	dynSetZIndex(elem, "9999");
	return;
}

function dynShowModalDialog(dialogName, blockerName) {
	if (blockerName) {
		dynBlockerVisibility(blockerName, true);
	}
	dynCenterOnWindow(dialogName);
	return;
}

function dynHideModalDialog(dialogName, blockerName) {
	if (blockerName) {
		dynBlockerVisibility(blockerName, false);
	}
	dynShiftTo(dialogName, -10000, 0);
	return;
}













	
			

