var g_task_style_width = 2;
var g_ruler_style_width = 1;
var g_unit_width = 30;
var g_gantt_target_id = "gantt_container";
var g_gantt_id = "dragList1";
var g_selected_task = null;
var g_active_task_style = "task_active";
var g_edit_id = "edit_box";
var g_edit_title_id = "edit_title";
var g_edit_form_id = "edit_form";
var g_edit_duration_id = "edit_duration";
var g_task_id_prefix = "task_";



function byId(id){
	return document.getElementById(id);
}

function dragInit(){
	// list one
	
	// get the list
	var dl = byId(g_gantt_id);
	
	// make the list a target
	var drop_obj = new dojo.dnd.HtmlDropTarget(dl, ["li1"]);
	dojo.event.connect(drop_obj, "onDrop", "handleDropToList");
	
	// get the contents
	var lis = dl.getElementsByTagName("li");
	for(var x=0; x<lis.length; x++) {
		var tmp = new dojo.dnd.HtmlDragSource(lis[x], "li1");
		dojo.event.connect(tmp, "onDragEnd", positionInit);
	}
	
	// go through and make them draggable
	/*
	for(var x=0; x<lis.length; x++){
		new dojo.dnd.HtmlDragSource(lis[x], "li1");
	}
	*/

	// list two
//	var dl = byId("dragList2");
	//new dojo.dnd.HtmlDropTarget(dl, ["li1"]);
//	var lis = dl.getElementsByTagName("li");
//	for(var x=0; x<lis.length; x++){
//		var tmp = new dojo.dnd.HtmlDragSource(lis[x], "li1");
//		dojo.event.connect(tmp, "onDragEnd", eval( "function() { handleDrop('" + lis[x].title + "'); }" ));				
//	}
	
}





/* My stuff */



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



function positionInit() {
	var list = byId(g_gantt_id);
	var tasks = list.getElementsByTagName("li");
	var offset = 0;
	for (var i=0; i<tasks.length; i++) {
		var task_id = parseIdFromTag(tasks[i]);
		var div = tasks[i].getElementsByTagName("div");
		div = div[0];
		div.style.width = ((g_unit_width * data.tasks[task_id].duration) - g_task_style_width) + "px";
		div.style.position = "relative";
		div.style.left = offset + "px";
		offset += parseInt(div.style.width) + g_task_style_width;
	}
}


function drawGantt() {
	var max_duration = 0;
	var tasks = data.tasks;

	var list = document.createElement("ul");
	list.id = g_gantt_id;
	list.className = "gantt";
	for (var i=0; i<tasks.length; i++) {
		max_duration += tasks[i].duration;
		var task = document.createElement("li");
		task.className = "";
		task.onclick = function() { selectTask(this); };
		task.id = g_task_id_prefix + i;
		var task_div = document.createElement("div");
		var text = document.createTextNode("Task " + (i+1));
		task_div.appendChild(text);
		task.appendChild(task_div);
		list.appendChild(task);
	}
	
	var table = document.createElement("table");
	table.className = "ruler";
	table.cellpadding = 0;
	table.cellspacing = 0;
	table.width = max_duration * g_unit_width;
	table.style.width = max_duration * g_unit_width + "px";
	var heading = document.createElement("thead");
	var heading_row = document.createElement("tr");
	for (var i=0; i<max_duration; i++) {
		var th = document.createElement("th");
		th.style.width = (g_unit_width - g_ruler_style_width) + "px";
		var text = document.createTextNode("D" + (i+1));
		th.appendChild(text);
		heading_row.appendChild(th);
	}
	heading.appendChild(heading_row);
	table.appendChild(heading);
	
	var tgt = byId(g_gantt_target_id);
	tgt.appendChild(table);
	tgt.appendChild(list);
}

function selectTask(task_obj) {
	var list = byId(g_gantt_id);
	var tasks = list.getElementsByTagName("li");
	for (var i=0; i<tasks.length; i++) {
		tasks[i].className = tasks[i].className.replace(g_active_task_style, "");
		if (tasks[i] == task_obj) {
			tasks[i].className = tasks[i].className + " " + g_active_task_style;
		}
	}
	g_selected_task = task_obj;
	showEdit();
}

function showEdit() {
	var edit = byId(g_edit_id);
	edit.style.display = "block";
	var title = byId(g_edit_title_id);

	var div = g_selected_task.getElementsByTagName("div");
	div = div[0];
	var text = document.createTextNode(div.innerHTML);
	title.innerHTML = "";
	title.appendChild(text);
	
	var task_id = parseIdFromTag(g_selected_task);
	var duration = data.tasks[task_id].duration;
	var duration_field = byId(g_edit_duration_id);
	duration_field.value = duration;
}


function handleTaskEdit() {
	var duration = byId(g_edit_duration_id).value;
	duration = parseInt(Math.round(duration));
	if (duration == 0 || duration < 0) {
		alert ("Partial days, negative days and 0 days are not yet implemented.\nPlease enter a whole number.");
		return false;
	}
	var task_id = parseIdFromTag(g_selected_task);
	data.tasks[task_id].duration = duration;
	positionInit();
}


function parseIdFromTag(obj) {
	return (parseInt(obj.id.replace(g_task_id_prefix, "")));
}

function init() {
	drawGantt();
	positionInit();
	dragInit();
}

dojo.event.connect(dojo, "loaded", "init");