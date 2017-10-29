if (!agile.window) { agile.window = {}; }
if (!agile.window.panes) { agile.window.panes = {}; }

agile.window.sizes = {};
//                                         w       h       minw
agile.window.sizes.controller  = new Array(213,    null,   213);
agile.window.sizes.content     = new Array(null,   null,   null);
agile.window.sizes.search      = new Array(null,   59,     null);
agile.window.sizes.collab      = new Array(null,   45,     null);
agile.window.sizes.tasks       = new Array(null,   null,   null);
agile.window.sizes.win_ctrls   = new Array(null,   59,     null);
agile.window.sizes.switcher    = new Array(null,   45,     null);
agile.window.sizes.main        = new Array(null,   null,   null);

var max_x = 0;
var max_y = 0;

var splitter_width = 1;
if (document.all) {
	var single_border = 0;
} else {
	var single_border = 1;
}

/* 
	Load wrapper
*/
agile.window.handleOnload = function () {
	agile.window.resizePanes();
}

/* 
	Resize wrapper
*/
agile.window.handleResize = function () {
	agile.window.resizePanes();
}




agile.window.getMaximums = function() {
	max_x = invo.metrics.getInsideWindowWidth();
	max_y = invo.metrics.getInsideWindowHeight();
}


agile.window.resizePanes = function() {
	agile.window.getMaximums();

	invo.metrics.setObjectLeft("splitter1", agile.window.sizes.controller[0]);
	
	invo.metrics.setObjectWidth("controller", agile.window.sizes.controller[0]);
	invo.metrics.setObjectHeight("controller", max_y);

	agile.window.sizes.content[0] = max_x - (agile.window.sizes.controller[0] + splitter_width + (single_border * 2));
	invo.metrics.setObjectWidth("content", agile.window.sizes.content[0]);
	invo.metrics.setObjectHeight("content", max_y);
	invo.metrics.setObjectLeft("content", agile.window.sizes.controller[0] + splitter_width + (single_border * 2));
	
	//invo.metrics.setObjectWidth("search", agile.window.sizes.controller[0]);
	invo.metrics.setObjectHeight("search", agile.window.sizes.search[1]);
	invo.metrics.setObjectTop("search", 0);
	invo.metrics.setObjectLeft("search", 0);
	
	//invo.metrics.setObjectWidth("collab", agile.window.sizes.controller[0]);
	invo.metrics.setObjectHeight("collab", agile.window.sizes.collab[1]);
	invo.metrics.setObjectTop("collab", agile.window.sizes.search[1] + (single_border * 1));
	invo.metrics.setObjectLeft("collab", 0);

	
	//invo.metrics.setObjectWidth("tasks", agile.window.sizes.controller[0]);
	invo.metrics.setObjectHeight("tasks", max_y - (agile.window.sizes.search[1] + agile.window.sizes.collab[1] + (single_border * 2)));
	invo.metrics.setObjectTop("tasks", agile.window.sizes.search[1] + agile.window.sizes.collab[1] + (single_border * 2));
	invo.metrics.setObjectLeft("tasks", 0);
	
	
	
	//invo.metrics.setObjectWidth("win_ctrls", agile.window.sizes.content[0]);
	invo.metrics.setObjectHeight("win_ctrls", agile.window.sizes.win_ctrls[1]);
	invo.metrics.setObjectTop("win_ctrls", 0);
	invo.metrics.setObjectLeft("win_ctrls", 0);

	
	//invo.metrics.setObjectWidth("switcher", agile.window.sizes.content[0]);
	invo.metrics.setObjectHeight("switcher", agile.window.sizes.switcher[1]);
	invo.metrics.setObjectTop("switcher", agile.window.sizes.win_ctrls[1] + (single_border * 1));
	invo.metrics.setObjectLeft("switcher", 0);

	
	//invo.metrics.setObjectWidth("main", agile.window.sizes.content[0]);
	invo.metrics.setObjectHeight("main", max_y - (agile.window.sizes.win_ctrls[1] + agile.window.sizes.switcher[1] + (single_border * 2)));
	invo.metrics.setObjectTop("main", agile.window.sizes.win_ctrls[1] + agile.window.sizes.collab[1] + (single_border * 2));
	invo.metrics.setObjectLeft("main", 0);

}



agile.window.resizeSplitter1 = function () {
	invo.dnd.moveDragObject(true, null);
	evt = invo.dnd.getDragEvent();
	x = invo.event.getEventX(evt);
	y = invo.event.getEventY(evt);
	
	
	if (x < agile.window.sizes.controller[2]) { x = agile.window.sizes.controller[2]; }
	agile.window.sizes.controller[0] = (agile.window.sizes.controller[0] + (x - (agile.window.sizes.controller[0]) ) );
	agile.window.resizePanes();
}





//invo.event.addEvent(window, "load", agile.window.handleOnload, false);
//invo.event.addEvent(window, "resize", agile.window.handleResize, false);