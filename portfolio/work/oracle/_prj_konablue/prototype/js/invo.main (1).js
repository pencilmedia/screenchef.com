var invo_global = typeof window == 'undefined' ? this : window;

function invoUndefined(name, obj) {
	if (!obj) { obj = invo_global; }
	alert(name + " is " + typeof obj[name]);
	return (typeof obj[name] == "undefined");
}

var invo;
if (!invo) { invo = {}; }

var agile;
if (!agile) { agile = {}; }