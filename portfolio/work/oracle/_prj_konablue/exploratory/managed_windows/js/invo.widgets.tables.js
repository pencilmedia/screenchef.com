if (!invo.widgets) { invo.widgets = {}; }
if (!invo.widgets.tables) { invo.widgets.tables = {}; }


invo.widgets.tables.class_highlight   = "d_selected";
invo.widgets.tables.class_rollover    = "d_rollover";
invo.widgets.tables.class_container   = "data_details";
invo.widgets.tables.table_features    = new Array("enable_row_highlighting", "enable_collapse");
invo.widgets.tables.curr_elem         = null;
invo.widgets.tables.table_storage     = new Array();


invo.widgets.tables.initTables = function() {
	var containers = invo.dom.getElementsByClass(invo.widgets.tables.class_container, document, null);
	if (containers.length) {
		for (var i=0; i<containers.length; i++) {
			invo.widgets.tables.curr_elem = containers[i];
			
			var class_str = invo.widgets.tables.curr_elem.className;
			
			if (class_str.length > 0) {
				var features = class_str.split(" ");
				if (features.length) {
					for (var j=0; j<features.length; j++) {
						if (invo.widgets.tables.table_features.inArray(features[j])) {
							invo.widgets.tables.enableFeature(features[j]);
						}
					}
				}
			}
		}
	}
	invo.widgets.tables.curr_elem = null;
}




invo.widgets.tables.enableFeature = function (feature_name) {
	eval("invo.widgets.tables._" + feature_name + "()");
}


/*
	Attach the highlight action
*/
invo.widgets.tables._enable_row_highlighting = function () {
	var children = current_table.childNodes;
	var table = null;
	if (children.length) {
		for (var i=0; i<children.length; i++) {
			if (children[i].tagName && (children[i].tagName.toLowerCase() == "table") ) {
				table = children[i];
				break;
			}
		}
	}
	var rows = table.getElementsByTagName("tr");
	if (rows.length) {
		for (var i=0; i<rows.length; i++) {
			invo.event.addEvent(rows[i], "click", function () { invo.widgets.tables.highlightRow(this); }, false);
		}
	}
}

invo.widgets.tables.highlightRow = function (elem) {
	if (elem) {
		if (elem.className) {
			elem.className = elem.className + " " + invo.widgets.tables.class_highlight;
		} else if (elem.setAttribute) {
			elem.setAttribute("class", " " + invo.widgets.tables.class_highlight);
		}
	}
}



/*
	Attach the collapse action
*/
invo.widgets.tables._enable_collapse = function () {
	if (invo.widgets.tables.curr_elem) {
		var container_width = invo.metrics.getObjectWidth(invo.widgets.tables.curr_elem);
		var container_height = invo.metrics.getObjectHeight(invo.widgets.tables.curr_elem);
		var parent = invo.widgets.tables.curr_elem.parentNode;
		var elem = invo.dom.getElementsByClass("btn", parent, "img");
		if (elem) {
			var metrics_array = new Array(container_width, container_height);
			invo.widgets.tables.table_storage[parent.id] = metrics_array;
			invo.event.addEvent(elem[0], "click", invo.widgets.tables.tableShade, false);
		}	
	}
}

invo.widgets.tables.tableShade = function (evt) {
	evt = invo.event.getEvent(evt);
	var tgt = invo.event.getEventTarget(evt);
	var parent = invo.dom.getParentByClass("data_parent", tgt, "div");
	var elem = invo.dom.getElementsByClass("data_details", parent, "div");
	var elem_height = invo.widgets.tables.table_storage[parent.id][1];

	invo.fx.windowShade(elem, elem_height);
}





/*
	Find and process tables
*/
invo.event.addEvent(window, "load", invo.widgets.tables.initTables, false);