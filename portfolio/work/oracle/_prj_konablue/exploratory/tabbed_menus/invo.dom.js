if (!invo.dom) { invo.dom = {}; }

/*
	insertAfter is originally from Jeremy Keith. It complements the
	built in insertBefore function.
	
	http://www.amazon.com/gp/product/webstandardsw-20/1590595335
*/
invo.dom.insertAfter = function (new_elem, target_elem) {
	var parent = target_elem.parentNode;
	if (parent.lastChild == target_elem) {
		parent.appendChild(new_elem);
	} else {
		parent.insertBefore(new_elem, target_elem.nextSibling);
	}
}


/* 
	Borrowed from Dustin Diaz
	http://www.dustindiaz.com/getelementsbyclass/#nav
	
	Returns an array of objects that match "searchClass"
*/
invo.dom.getElementsByClass = function (needle, elem, tag) {
	var children = new Array();
	if (elem == null) { elem = document; }
	if (tag == null) { tag = '*'; }
	var elem_list = elem.getElementsByTagName(tag);
	var elem_list_len = elem_list.length;
	var pattern = new RegExp("(^|\\s)" + needle + "(\\s|$)");
	for (i = 0, j = 0; i < elem_list_len; i++) {
		if ( pattern.test(elem_list[i].className) ) {
			children[j] = elem_list[i];
			j++;
		}
	}
	return (children);
}


invo.dom.getChildByElem = function (parent, elem) {
	if (parent == null) { parent = document; }
	var elem_list = parent.getElementsByTagName(elem);
	return (elem_list);
}


invo.dom.removeEmptyTextChildren = function (elem) {
	var children = elem.childNodes;
	if (children.length) {
		for (var i=0; i<children.length; i++) {
			if ( (children[i].nodeType == 3) && (invo.string.isWhiteSpace(children[i].nodeValue) ) ) {
				elem.removeChild(children[i]);
			}
		}
	}
	if (children.length) {
		for (var i=0; i<children.length; i++) {
			if (children[i].hasChildNodes()) {
				invo.dom.removeEmptyTextChildren(children[i]);
			}
		}
	}
}



invo.dom.getParentByClass = function (needle, elem, tag) {
	var pattern = new RegExp("(^|\\s)" + needle + "(\\s|$)");
	while (elem.parentNode) {
		elem = elem.parentNode;
		if (elem.className && (pattern.test(elem.className) ) ) {
			if ( ( (tag != null) && (elem.tagName.toLowerCase() == tag) ) || tag == null ) {
				return (elem);
			}
		}
	}
	return false;
}


invo.dom.getParentById = function (needle, elem, tag) {
	while (elem.parentNode) {
		elem = elem.parentNode;
		if (elem.id && (elem.id == needle) ) {
			if ( ( (tag != null) && (elem.tagName.toLowerCase() == tag) ) || tag == null ) {
				return (elem);
			}
		}
	}
	return false;
}





/* -----------------------------------------------------------------------------
	getObject(obj)
		obj = a string or an obj reference
		
	If obj is a string, convert name string or object reference into a valid 
	object reference, otherwise pass through the object reference.
----------------------------------------------------------------------------- */
invo.dom.getObject = function (obj) {
	var return_obj = null;
	if (typeof obj == "string") {
		if (document.getElementById) {
			return_obj = document.getElementById(obj);
		} else if (document.all) {
			return_obj = document.all(obj);
		}
	} else {
		return_obj = obj;
	}
	return (return_obj);
}


/* -----------------------------------------------------------------------------
	getObjectStyle(obj)
		obj = a string or an obj reference
		
	Runs obj through getObject() to obtain the object reference, then
	converts the object reference into a valid style (or NN4 layer) reference
----------------------------------------------------------------------------- */
invo.dom.getObjectStyle = function (obj) {
	var return_obj = invo.dom.getObject(obj);
	if (return_obj && return_obj.style) {
		return_obj = return_obj.style;
	} else {
		return_obj = null;
	}
	return (return_obj);
}