if (!invo.string) { invo.string = {}; }


/* Left trim whitespace */
invo.string.lTrim = function (str) {
	var regex = new RegExp("\\s");
	while (str.search(regex) == 0) {
		str = str.substring(1, str.length);
	}
	return str;
}

/* Right trim whitespace */
invo.string.rTrim = function (str) {
	str = invo.string.reverse(invo.string.lTrim(invo.string.reverse(str)));
	return str;
}

/* Trim whitespace */
invo.string.trim = function (str) {
	str = invo.string.lTrim(str);
	if (str.length) {
		str = invo.string.rTrim(str);
	}
	return str;
}

/* Escape single quotes */
invo.string.escapeSingleQuotes = function (str) {
	var regex = new RegExp("'", "g");
	str = str.replace(regex, "\\'");
	return str;
}

/* Escape double quotes */
invo.string.escapeDoubleQuotes = function (str) {
	var regex = new RegExp('"', "g");
	str = str.replace(regex, '&quot;');	
	return str;
}

/* Escape all quotes */
invo.string.escapeQuotes = function (str) {
	str = invo.string.escapeSingleQuotes(str);
	str = invo.string.escapeDoubleQuotes(str);
	return str;
}

/* Escape newlines */
invo.string.escapeNewlines = function (str) {
	var regex = new RegExp("\\n", "g");
	str = str.replace(regex, "\\n");
	return str;
}

/* Reverses a string */
invo.string.reverse = function (str) {
	var new_str = "";
	while (str.length) {
		new_str += str.charAt(str.length - 1);
		str = str.substring(0, str.length - 1);
	}
	return (new_str);
}

/* Returns true if the string is just made up of whitespace chars */
invo.string.isWhiteSpace = function (str) {
	if (invo.string.trim(str).length <= 0 ) { return true; }
	return false;
}