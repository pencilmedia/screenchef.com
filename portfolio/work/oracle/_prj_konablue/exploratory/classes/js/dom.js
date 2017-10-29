function parseDOM(elem) {
	var str = "";
	str += "<ul>";
	str += "<li>";
	str += elem.tagName + " id=&quot;" + elem.id + "&quot; class=&quot;" + elem.className + "&quot;";
	if (elem.childNodes) {
		str += "<ul>";
		str += recurseDOM(elem);
		str += "</ul>";
	}
	str += "</li>";
	str += "</ul>";
	return str;
}



function recurseDOM(elem) {
	var str = "";
	var children = elem.childNodes;
	for (var i=0; i<children.length; i++) {
		if (children[i].nodeType == 3) {
			if (!isWhiteSpace(children[i].nodeValue) ) {
				str += "<li>";
				str += children[i].nodeValue;
				str += "</li>";
			}
		} else {
			str += "<li>";
			str += children[i].tagName;
			if (children[i].className) {
				str += " class=&quot;" + children[i].className + "&quot;";
			}
			if (children[i].childNodes) {
				str += "<ul>";
				str += recurseDOM(children[i]);
				str += "</ul>";
			}
			str += "</li>";
		}
	}
	return str;
}


function isWhiteSpace (str) {
	var regex = new RegExp("\\s");
	while (str.search(regex) == 0) {
		str = str.substring(1, str.length);
	}
	if (str.length > 0) {
		return false;
	}
	return true;
}