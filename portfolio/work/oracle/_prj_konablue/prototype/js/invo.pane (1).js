if (!invo.pane) { invo.pane = {}; }

function assocEvent (obj, methodName) {
	return(function(e) {
		e = e || window.event;
		return obj[methodName](e, this);
	});
}

invo.pane.pixel_path = "/prototype/html/beta/images/pixel.gif";


/* -----------------------------------------------------------------------------
	BASE PANE CONTAINER
	This just attaches to an object, then sets it up
----------------------------------------------------------------------------- */
invo.pane.base = function(obj_id) {
	// Bind to object
	this._base = document.getElementById(obj_id);

	// Handle sizing
	var win_x = invo.metrics.getInsideWindowWidth();
	var win_y = invo.metrics.getInsideWindowHeight();
	invo.metrics.setObjectWidth(this._base, win_x);
	invo.metrics.setObjectHeight(this._base, win_y);
	
	// Regsiter window resize
	invo.event.addEvent(window, "resize", assocEvent(this, "handleWindowResize"), false);
}

invo.pane.base.prototype.constructor = invo.pane.base;

invo.pane.base.prototype.getRoot = function() {
	return(this._base);
}

invo.pane.base.prototype.handleWindowResize = function() {
	var win_x = invo.metrics.getInsideWindowWidth();
	var win_y = invo.metrics.getInsideWindowHeight();
	invo.metrics.setObjectWidth(this._base, win_x);
	invo.metrics.setObjectHeight(this._base, win_y);
}


/* -----------------------------------------------------------------------------
	VERTICAL PANES
----------------------------------------------------------------------------- */
invo.pane.verticalSplitPanes = function(parent, left_size, right_size, bool_fixed) {
	// Private vars
	this._splitter_width = 2;
	this._splitter_border = 2;
	this._parent = parent;
	if (bool_fixed) {
		this._is_fixed = true;
	}
	
	// Init vars
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	
	var splitter_delta, cell1_x, cell2_x;
	
	if (left_size) {
		splitter_delta = this._splitter_width + this._splitter_border;
		cell1_x = left_size;
		cell2_x = max_x - cell1_x - splitter_delta;
	} else if (right_size) {
		splitter_delta = this._splitter_width + this._splitter_border;
		cell2_x = right_size;
		cell1_x = max_x - cell2_x - splitter_delta;
	} else {
		splitter_delta = Math.round((this._splitter_width + this._splitter_border) / 2);
		cell2_x = Math.round((max_x - splitter_delta) / 2);
		cell1_x = max_x - cell2_x - splitter_delta;
	}

	// Build the table
	this._table = document.createElement("table");
	invo.metrics.setObjectWidth(this._table, max_x);
	this._table.style.height = "100%";
	this._table.className = "pane vertical";
	this._table.cellPadding = 0;
	this._table.cellSpacing = 0;
	this._table.border = 0;
	
	this._tbody = document.createElement("tbody");
	this._table.appendChild(this._tbody);
	
	this._row = document.createElement("tr");
	this._row.valign = "top";
	this._row.style.verticalAlign = "top";
	
	this._tbody.appendChild(this._row);
	
	this._cell1 = document.createElement("td");
	this._cell1.className = "cell1";
	invo.metrics.setObjectWidth(this._cell1, cell1_x);
	invo.metrics.setObjectHeight(this._cell1, max_y);
	this._cell1.nowrap = "nowrap";
	
	this._cell1_content = document.createElement("div");
	this._cell1_content.style.width = "100%";
	this._cell1_content.style.height = "100%";
	this._cell1_content.className = "pane_container";

	this._cell1.appendChild(this._cell1_content);
	this._row.appendChild(this._cell1);
	
	

	this._splitter = document.createElement("td");
	this._splitter.style.width = this._splitter_width + "px";
	this._splitter.className = "splitter splitter_v";
	this._splitter.unselectable = "on";
	
	this._blank = document.createElement("br");
	//this._blank = document.createElement("img");
	//this._blank.src = invo.pane.pixel_path;
	//this._blank.width = this._splitter_width;
	this._splitter.appendChild(this._blank);

	this._row.appendChild(this._splitter);
	
	this._cell2 = document.createElement("td");
	this._cell2.className = "cell2";
	invo.metrics.setObjectWidth(this._cell2, cell2_x);
	invo.metrics.setObjectHeight(this._cell2, max_y);
	this._cell2.nowrap = "nowrap";
	
	this._cell2_content = document.createElement("div");
	this._cell2_content.style.width = "100%";
	this._cell2_content.style.height = "100%";
	this._cell2_content.className = "pane_container";

	this._cell2.appendChild(this._cell2_content);	
	this._row.appendChild(this._cell2);
	
	// Regsiter window ressize
	invo.event.addEvent(window, "resize", assocEvent(this, "handleWindowResize"), false);
}

invo.pane.verticalSplitPanes.prototype.constructor = invo.pane.verticalSplitPanes;

invo.pane.verticalSplitPanes.prototype.getRoot = function() {
	return(this._table);
}

invo.pane.verticalSplitPanes.prototype.enableDrag = function() {
	if (this._is_fixed) {
		return;
	} else {
		this._splitter.ondragstart = assocEvent(this, "handleDrag");
		this._splitter.onmousedown = assocEvent(this, "handleDrag");
	}
}

invo.pane.verticalSplitPanes.prototype.handleDrag = function(evt) {
	invo.dnd.startDnD(evt, assocEvent(this, "handleDragResize"));
}

invo.pane.verticalSplitPanes.prototype.handleDragResize = function(evt) {
	evt = invo.dnd.getDragEvent();
	var x = invo.event.getEventX(evt);
	var y = invo.event.getEventY(evt);
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	var splitter_delta = Math.round((this._splitter_width + this._splitter_border) / 2);
	
	if (x < 1) { x = 1; }
	if (x > max_x - 1) { x = max_x - 1; }
	
	var left_x = x;
	var right_x = max_x - left_x - splitter_delta;
	
	invo.metrics.setObjectWidth(this._table, max_x);
	invo.metrics.setObjectHeight(this._table, max_y);
	
	invo.metrics.setObjectWidth(this._cell1, left_x);
	//this._cell1.style.width = "100%";
	invo.metrics.setObjectHeight(this._cell1, max_y);
	invo.metrics.setObjectWidth(this._cell2, right_x);
	//this._cell2.style.width = "100%";
	invo.metrics.setObjectHeight(this._cell2, max_y);
	
	this._cell1_content.style.width = "100%";	
	this._cell2_content.style.width = "100%";
	
	if (this._leftChild) { this._leftChild.handleWindowResize(); }
	if (this._rightChild) { this._rightChild.handleWindowResize(); }
}

invo.pane.verticalSplitPanes.prototype.handleWindowResize = function() {
	var x = invo.metrics.getObjectWidth(this._cell1);
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	var splitter_delta = Math.round(this._splitter_width + this._splitter_border);
	
	var left_x = x;
	var right_x = max_x - left_x - splitter_delta;
	
	if (right_x < 1) { right_x = 1; }
	
	invo.metrics.setObjectWidth(this._table, max_x);
	invo.metrics.setObjectHeight(this._table, max_y);
	
	invo.metrics.setObjectWidth(this._cell1, left_x);
	//this._cell1.style.width = "100%";
	invo.metrics.setObjectHeight(this._cell1, max_y);
	invo.metrics.setObjectWidth(this._cell2, right_x);
	//this._cell2.style.width = "100%";
	invo.metrics.setObjectHeight(this._cell2, max_y);
	
	this._cell1_content.style.width = "100%";	
	this._cell2_content.style.width = "100%";
		
	if (this._leftChild) { this._leftChild.handleWindowResize(); }
	if (this._rightChild) { this._rightChild.handleWindowResize(); }
}

invo.pane.verticalSplitPanes.prototype.getCell1 = function() {
	return (this._cell1);
}

invo.pane.verticalSplitPanes.prototype.getCell2 = function() {
	return (this._cell2);
}

invo.pane.verticalSplitPanes.prototype.getCell1Content = function() {
	return (this._cell1_content);
}

invo.pane.verticalSplitPanes.prototype.getCell2Content = function() {
	return (this._cell2_content);
}

invo.pane.verticalSplitPanes.prototype.setCell1Id = function(str) {
	this._cell1.id = str;
}

invo.pane.verticalSplitPanes.prototype.setCell2Id = function(str) {
	this._cell2.id = str;
}

invo.pane.verticalSplitPanes.prototype.registerCell1Child = function(obj) {
	this._leftChild = obj;
}

invo.pane.verticalSplitPanes.prototype.registerCell2Child = function(obj) {
	this._rightChild = obj;
}

invo.pane.verticalSplitPanes.prototype.enableCell1Scroll = function() {
	this._cell1_content.className = "pane_container_scroll";
}

invo.pane.verticalSplitPanes.prototype.enableCell2Scroll = function() {
	this._cell2_content.className = "pane_container_scroll";
}


/* -----------------------------------------------------------------------------
	HORIZONTAL PANES
----------------------------------------------------------------------------- */
invo.pane.horizontalSplitPanes = function(parent, top_size, bottom_size, bool_fixed) {
	// Private vars
	this._splitter_height = 2;
	this._splitter_border = 2;
	this._parent = parent;
	if (bool_fixed) {
		this._is_fixed = true;
	}
	
	// Initi vars
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	
	var splitter_delta, cell1_y, cell2_y;
	
	if (top_size) {
		splitter_delta = this._splitter_height + this._splitter_border;
		cell1_y = top_size;
		cell2_y = max_y - cell1_y - splitter_delta;
	} else if (bottom_size) {
		splitter_delta = this._splitter_height + this._splitter_border;
		cell2_y = bottom_size;
		cell1_y = max_y - cell2_y - splitter_delta;
	} else {
		splitter_delta = Math.round((this._splitter_height + this._splitter_border) / 2);
		cell2_y = Math.round((max_y - splitter_delta) / 2);
		cell1_y = max_y - cell2_y - splitter_delta;
	}
	
	this._table = document.createElement("table");
	this._table.style.width = "100%";
	invo.metrics.setObjectHeight(this._table, max_y);
	this._table.className = "pane horizontal";
	this._table.cellPadding = 0;
	this._table.cellSpacing = 0;
	this._table.border = 0;
	
	this._tbody = document.createElement("tbody");
	this._table.appendChild(this._tbody);
	
	this._row1 = document.createElement("tr");
	this._row1.valign = "top";
	this._row1.style.verticalAlign = "top";
	
	this._cell1 = document.createElement("td");
	this._cell1.className = "cell1";
	//invo.metrics.setObjectWidth(this._cell1, max_x);
	invo.metrics.setObjectHeight(this._cell1, cell1_y);
	this._cell1.nowrap = "nowrap";
	
	this._cell1_content = document.createElement("div");
	this._cell1_content.style.width = "100%";
	this._cell1_content.style.height = "100%";
	this._cell1_content.className = "pane_container";

	this._cell1.appendChild(this._cell1_content);
	this._row1.appendChild(this._cell1);
	this._tbody.appendChild(this._row1);



	this._row2 = document.createElement("tr");
	this._row2.valign = "top";
	this._row2.style.verticalAlign = "top";
	
	this._splitter = document.createElement("td");
	this._splitter.style.height = this._splitter_height + "px";
	this._splitter.className = "splitter splitter_h";
	
	this._blank = document.createElement("br");
	//this._blank = document.createElement("img");
	//this._blank.src = invo.pane.pixel_path;
	//this._blank.height = this._splitter_height;
	this._splitter.appendChild(this._blank);

	this._row2.appendChild(this._splitter);
	this._tbody.appendChild(this._row2);



	this._row3 = document.createElement("tr");
	this._row3.valign = "top";
	this._row3.style.verticalAlign = "top";
	
	this._cell2 = document.createElement("td");
	this._cell2.className = "cell1";
	invo.metrics.setObjectWidth(this._cell2, max_x);
	invo.metrics.setObjectHeight(this._cell2, cell2_y);
	this._cell2.nowrap = "nowrap";
	
	this._cell2_content = document.createElement("div");
	this._cell2_content.style.width = "100%";
	this._cell2_content.style.height = "100%";
	this._cell2_content.className = "pane_container";

	this._cell2.appendChild(this._cell2_content);
	this._row3.appendChild(this._cell2);
	this._tbody.appendChild(this._row3);
	
	// Regsiter window ressize
	invo.event.addEvent(window, "resize", assocEvent(this, "handleWindowResize"), false);
}

invo.pane.horizontalSplitPanes.prototype.constructor = invo.pane.horizontalSplitPanes;

invo.pane.horizontalSplitPanes.prototype.getRoot = function() {
	return(this._table);
}

invo.pane.horizontalSplitPanes.prototype.enableDrag = function() {
	if (this._is_fixed) {
		return;
	} else {
		this._splitter.ondragstart = assocEvent(this, "handleDrag");
		this._splitter.onmousedown = assocEvent(this, "handleDrag");
	}
}

invo.pane.horizontalSplitPanes.prototype.handleDrag = function(evt) {
	invo.dnd.startDnD(evt, assocEvent(this, "handleDragResize"));
}

invo.pane.horizontalSplitPanes.prototype.handleDragResize = function(evt) {
	evt = invo.dnd.getDragEvent();
	var x = invo.event.getEventX(evt);
	var y = invo.event.getEventY(evt);
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	var splitter_delta = Math.round((this._splitter_height + this._splitter_border) / 2);
	
	if (y < 1) { y = 1; }
	if (y > max_y - 1) { y = max_y - 1; }
	
	var top_y = y;
	var bottom_y = max_y - top_y - splitter_delta;
	
	invo.metrics.setObjectWidth(this._table, max_x);
	invo.metrics.setObjectHeight(this._table, max_y);
	
	invo.metrics.setObjectWidth(this._cell1, max_x);
	invo.metrics.setObjectHeight(this._cell1, top_y);
	invo.metrics.setObjectWidth(this._cell2, max_x);
	invo.metrics.setObjectHeight(this._cell2, bottom_y);
	
	this._cell1_content.style.height = "100%";	
	this._cell2_content.style.height = "100%";
	
	if (this._topChild) { this._topChild.handleWindowResize(); }
	if (this._bottomChild) { this._bottomChild.handleWindowResize(); }
}

invo.pane.horizontalSplitPanes.prototype.handleWindowResize = function() {
	var y = invo.metrics.getObjectHeight(this._cell1);
	var max_x = invo.metrics.getObjectWidth(this._parent);
	var max_y = invo.metrics.getObjectHeight(this._parent);
	var splitter_delta = Math.round(this._splitter_height + this._splitter_border);
	
	var top_y = y;
	var bottom_y = max_y - top_y - splitter_delta;
	
	if (bottom_y < 1) { bottom_y = 1; }
	
	invo.metrics.setObjectWidth(this._table, max_x);
	invo.metrics.setObjectHeight(this._table, max_y);

	invo.metrics.setObjectWidth(this._cell1, max_x);
	invo.metrics.setObjectHeight(this._cell1, top_y);
	invo.metrics.setObjectWidth(this._cell2, max_x);
	invo.metrics.setObjectHeight(this._cell2, bottom_y);
	
	this._cell1_content.style.height = "100%";	
	this._cell2_content.style.height = "100%";
	
	if (this._topChild) { this._topChild.handleWindowResize(); }
	if (this._bottomChild) { this._bottomChild.handleWindowResize(); }
}

invo.pane.horizontalSplitPanes.prototype.getCell1 = function() {
	return (this._cell1);
}

invo.pane.horizontalSplitPanes.prototype.getCell2 = function() {
	return (this._cell2);
}

invo.pane.horizontalSplitPanes.prototype.getCell1Content = function() {
	return (this._cell1_content);
}

invo.pane.horizontalSplitPanes.prototype.getCell2Content = function() {
	return (this._cell2_content);
}

invo.pane.horizontalSplitPanes.prototype.setCell1Id = function(str) {
	this._cell1_content.id = str;
}

invo.pane.horizontalSplitPanes.prototype.setCell2Id = function(str) {
	this._cell2_content.id = str;
}

invo.pane.horizontalSplitPanes.prototype.registerCell1Child = function(obj) {
	this._topChild = obj;
}

invo.pane.horizontalSplitPanes.prototype.registerCell2Child = function(obj) {
	this._bottomChild = obj;
}

invo.pane.horizontalSplitPanes.prototype.enableCell1Scroll = function() {
	this._cell1_content.className = "pane_container_scroll";
}

invo.pane.horizontalSplitPanes.prototype.enableCell2Scroll = function() {
	this._cell2_content.className = "pane_container_scroll";
}
