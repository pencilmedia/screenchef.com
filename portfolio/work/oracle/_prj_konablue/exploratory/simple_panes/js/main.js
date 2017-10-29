/*
	switcher()
	
	Switches the current section - does things like highlight, set the user task
	list, etc
*/
function switcher(which_type) {
	for (var i=0; i<type_names.length; i++) {
		document.getElementById("sw_" + type_names[i]).style.background = "none";
	}
	if (!which_type) { 
		if (current_switcher) {
			which_type = current_switcher; 
		} else {
			which_type = default_type; 
		}
	}
	document.getElementById("sw_" + which_type).style.background = "url('images/switcher/bgd_center_active.png') repeat-x top left";
	showUserTaskList(which_type);
	sw_curr = which_type;
}

/*
	showUserTaskList()
	
	Sets the active user task list, draws it and hides the others if needed
*/
function showUserTaskList(which_type) {
	for (var i=0; i<type_names.length; i++) {
		document.getElementById("ut_" + type_names[i]).style.display = "none";
	}
	if (!which_type) { 
		if (window.parent.current_user_tasks) {
			which_type = window.parent.current_user_tasks; 
		} else {
			which_type = default_type; 
		}
	}
	document.getElementById("ut_" + which_type).style.display = "block";
}

/*
	swapChild()
	
	Used by the grouped user task lists to show hide children. In other words a
	really quick and dirty tree implementation.
*/
function swapChild(parent) {
	var children = parent.childNodes;
	for (var i=0; i<children.length; i++) {
		if ((children[i].tagName && children[i].tagName.toLowerCase() == "ul") && (children[i].style && children[i].style.display == "none")) { 
			children[i].style.display = "block"; 
		} else if ((children[i].tagName && children[i].tagName.toLowerCase() == "ul") && (children[i].style && children[i].style.display == "block")) {
			children[i].style.display = "none"; 
		} else if ((children[i].tagName && children[i].tagName.toLowerCase() == "img") && (children[i].src.indexOf("plus") != -1)) {
			children[i].src = "images/minus.png";
		} else if ((children[i].tagName && children[i].tagName.toLowerCase() == "img") && (children[i].src.indexOf("minus") != -1)) {
			children[i].src = "images/plus.png";
		}
	}
}

/*
	showContent()
	
	For now, just does some simple text manipulation, but this will be the home
	base for setting the active content contents
*/
function showContent(obj) {
	current_user_task_obj = obj;
	/* document.getElementById("content_title").innerHTML = obj.innerHTML; */
}


/*
	toggleDisplay()
	
	Shows/Hides a target. 
	TODO: convert to classname
*/
function toggleDisplay(obj_name) {
	var obj = document.getElementById(obj_name);
	if (obj.style && obj.style.display == 'none') {
		obj.style.display = 'block';
	} else {
		obj.style.display = 'none';
	}
}
		
/*
	toggleCollab()
	
	Uses a storage var, then calls show/hide
*/
var current_collab = null;

function toggleCollab(obj_name, bool_timer) {
	if (current_collab && (current_collab == obj_name)) {
		current_collab = null;
		toggleDisplay(obj_name);
	} else {
		current_collab = obj_name;
		toggleDisplay(obj_name);
	}
}

/*
	utOver()
	
	Shows the "fast" action items
*/
function utOver(obj) {
	obj.childNodes[0].className = 'ut_actions_on';
	obj.style.background = '#ffc';
}

/*
	utOut()
	
	Hides the "fast" action items
*/
function utOut(obj) {
	obj.childNodes[0].className = 'ut_actions';
	obj.style.background = 'none';
}


/*
	loadData()
	
	fills out a table in the content area from an array of data
*/
function loadData() {
	if (table_headings) {
		var row = document.createElement("tr");
		for (var i=0; i<table_headings.length; i++) {
			var cell = document.createElement("th");
			var text = document.createTextNode(table_headings[i]);
			cell.appendChild(text);
			row.appendChild(cell);
		}
	}
	document.getElementById("table_head").appendChild(row);
	
	if (table_data) {
		for (var i=0; i<table_data.length; i++) {
			var row = document.createElement("tr");
			for (var j=0; j<table_data[i].length; j++) {
				var cell = document.createElement("td");
				var text = document.createTextNode(table_data[i][j]);
				cell.appendChild(text);
				row.appendChild(cell);
			}
			document.getElementById("table_body").appendChild(row);
		}
	}
	
}





/*
	goPage()
	
	Used to load the page with the appropriate variables for different page
	elements (e.g. different switchers, etc)
*/
function goPage() {
	if (!sw_file) { sw_file = default_switcher_page; }
	if (!ut_file) { ut_file = default_user_task_page; }
	if (!ct_file) { ct_file = default_content_page; }
	
	str = "index.php?sw=" + sw_file + "&ut=" + ut_file + "&ct=" + ct_file;
	if (sw_curr != null) {
		str += "&sw_curr=" + sw_curr;
	}
	if (ut_curr != null) {
		str += "&ut_curr=" + ut_curr;
	}
	
	document.location = str;
}







function handleOnload() {
	if (sw_curr) { switcher(sw_curr); }
}





function addContextItems(tgt_name, src_name) {
	tgt = document.getElementById(tgt_name);
	src = document.getElementById(src_name);
	tgt.innerHTML = src.innerHTML;
}