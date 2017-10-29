/*
	storage for multiple requests
*/
var request_list = new Array;

/* 
	loadXMLDoc(url, callback)
	
	Retrieve document via AJAX
*/
function runAJAXRequest(url, callback, method, params) {
	var idx = request_list.length;
	var req = null;
	
	if (window.XMLHttpRequest) {
		request_list[idx] = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		request_list[idx] = new ActiveXObject("Microsoft.XMLHTTP");
	}		

	req = request_list[idx];
	
	if (req) {
		if (method && (method == 'GET')) {
			req.onreadystatechange = function() { processReqChange(callback, req); };
			req.open("GET", url, true);
			req.send(null);
		} else if (method && (method == 'POST')) {
			req.onreadystatechange = function() { processReqChange(callback, req); };
			req.open("POST", url, true);
			req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			req.setRequestHeader("Content-length", params.length);
			req.setRequestHeader("Connection", "close");
			req.send(params);
		}
	}
}

/*
	processReqChange(callback)
	
	assumes JSON result, so not XML response
*/
function processReqChange(callback, req) {
	if (req.readyState == 4) {
		if (req.status == 200) {
			callback(req.responseText);
		 } else {
			alert("There was a problem retrieving the data:\n" + req.statusText);
		 }
	}
}