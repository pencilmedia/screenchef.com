if (!invo.metrics) { invo.metrics = {}; }


/* -----------------------------------------------------------------------------
	dynGetObjectLeft(obj)
		obj = a string or an obj reference
		
	Returns the x coordinate of a positionable element.
----------------------------------------------------------------------------- */
invo.metrics.getObjectLeft = function (obj) {
	var elem = invo.dom.getObject(obj);
	var result = 0;
	if (document.defaultView) {
		var style = document.defaultView;
		var cssDec1 = style.getComputedStyle(elem, "");
		result = cssDec1.getPropertyValue("left");
	} else if (elem.currentStyle) {
		result = elem.currentStyle.left;
	} else if (elem.style) {
		result = elem.style.left;
	}
	return parseInt(result);
}


invo.metrics.setObjectLeft = function (obj, value) {
	var elem = invo.dom.getObjectStyle(obj);
	if (document.body && document.body.style) {
		var xUnit = (typeof elem.left == "string") ? "px" : 0;
		elem.left = value + xUnit;
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectTop(obj)
		obj = a string or an obj reference
		
	Returns the y coordinate of a positionable element.
----------------------------------------------------------------------------- */
invo.metrics.getObjectTop = function (obj) {
	var elem = invo.dom.getObject(obj);
	var result = 0;
	if (document.defaultView) {
		var style = document.defaultView;
		var cssDec1 = style.getComputedStyle(elem, "");
		result = cssDec1.getPropertyValue("top");
	} else if (elem.currentStyle) {
		result = elem.currentStyle.top;
	} else if (elem.style) {
		result = elem.style.top;
	}
	return parseInt(result);
}


invo.metrics.setObjectTop = function (obj, value) {
	var elem = invo.dom.getObjectStyle(obj);
	if (document.body && document.body.style) {
		var yUnit = (typeof elem.top == "string") ? "px" : 0;
		elem.top = value + yUnit;
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectWidth(obj)
		obj = a string or an obj reference
		
	Returns the rendered width of an element.
----------------------------------------------------------------------------- */
invo.metrics.getObjectWidth = function (obj) {
	var elem = invo.dom.getObject(obj);
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

invo.metrics.setObjectWidth = function (obj, value) {
	var elem = invo.dom.getObject(obj);
	if (parseInt(value) <= 0) {value = 0;}
	if (elem.style && elem.style.pixelWidth) {
		elem.style.pixelWidth = parseInt(value);
	} else if (elem.style) {
		elem.style.width = parseInt(value) + "px";
	}
}


/* -----------------------------------------------------------------------------
	dynGetObjectHeight(obj)
		obj = a string or an obj reference
		
	Returns the rendered height of an element.
----------------------------------------------------------------------------- */
invo.metrics.getObjectHeight = function (obj) {
	var elem = invo.dom.getObject(obj);
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


invo.metrics.setObjectHeight = function (obj, value) {
	var elem = invo.dom.getObject(obj);
	if (parseInt(value) <= 0) {value = 0;}
	if (elem.style && elem.style.pixelHeight) {
		elem.style.pixelHeight = parseInt(value);
	} else if (elem.style) {
		elem.style.height = parseInt(value) + "px";
	}
}

/* -----------------------------------------------------------------------------
	dynGetInsideWindowWidth()
		
	Returns the available content width.
----------------------------------------------------------------------------- */
invo.metrics.getInsideWindowWidth = function () {
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
	dynGetInsideWindowHeight()
		
	Returns the available content height.
----------------------------------------------------------------------------- */
invo.metrics.getInsideWindowHeight = function () {
	if (window.innerHeight) {
		return window.innerHeight;
	} else if (document.compatMode && (document.compatMode.indexOf("CSS1") >= 0) ) {
		return document.body.parentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		return document.body.clientheight;
	}
	return 0;
}



/* -----------------------------------------------------------------------------
	dynShiftTo(obj, x, y)
		obj = a string or an obj reference
		x = the x coordinate to move to
		y = the y coordinate to move to
		
	Positions the object obj at a specific pixel coordinate given by x, y.
----------------------------------------------------------------------------- */
invo.metrics.shiftTo = function (obj, x, y) {
	var elem = invo.dom.getObjectStyle(obj);
	if (elem) {
		if (document.body && document.body.style) {
			var xUnit = (typeof elem.left == "string") ? "px" : 0;
			var yUnit = (typeof elem.top == "string") ? "px" : 0;
			elem.left = x + xUnit;
			elem.top = y + yUnit;
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
invo.metrics.shiftBy = function (obj, deltaX, deltaY) {
	var elem = invo.dom.getObjectStyle(obj);
	if (elem) {
		if (document.body && document.body.style) {
			var xUnit = (typeof elem.left == "string") ? "px" : 0;
			var yUnit = (typeof elem.top == "string") ? "px" : 0;
			elem.left = dynGetObjectLeft(obj) + deltaX + xUnit;
			elem.top = dynGetObjectTop(obj) + deltaY + yUnit;
		}
	}
}

