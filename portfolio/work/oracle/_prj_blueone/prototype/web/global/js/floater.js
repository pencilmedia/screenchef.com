/////////////////////////////////////////////////////////////////////
//	YAHOO.floater;
//	Fires upon page loading.
/////////////////////////////////////////////////////////////////////

YAHOO.floater = function() {
    var dd, dd2;
    return {
        init: function() {
            dd = new YAHOO.DDResize("floater_window", "floater_resize_handle");
            dd2 = new YAHOO.util.DD("floater_window");
			dd2.addInvalidHandleId("floater_window");
			dd2.addInvalidHandleId("floater_search_text");
			dd2.addInvalidHandleId("floater_filter");
            dd2.addInvalidHandleId("floater_results");
            dd2.addInvalidHandleId("floater_results_list");
            dd2.addInvalidHandleId("floater_resize_handle");
			YAHOO.util.Dom.get("show_floater").onclick = function() { showFloater(); return false; };
			YAHOO.util.Dom.get("close_floater").onclick = function() { closeFloater(); return false; };
			YAHOO.util.Dom.get("floater_search_text").onkeyup = function() { filterResults(); }
		}
    };
} ();
/////////////////////////////////////////////////////////////////////
// Initialize page
/////////////////////////////////////////////////////////////////////
YAHOO.util.Event.addListener(window, "load", YAHOO.floater.init);

/////////////////////////////////////////////////////////////////////
// showFloater
/////////////////////////////////////////////////////////////////////
function showFloater() 
{ 
	loadResultSet();
	YAHOO.util.Dom.get("floater_search_text").value = '';
	YAHOO.util.Dom.get("floater_search_text").style.visibility = 'visible';
	YAHOO.util.Dom.get("floater_results_list").style.overflow = 'auto';
	YAHOO.util.Dom.get("floater_window").style.display = 'block'; 
}


function clearResultSet()
{
	var results = YAHOO.util.Dom.get('floater_results_list');
	results.innerHTML = '';
}

/////////////////////////////////////////////////////////////////////
// closeFloater
/////////////////////////////////////////////////////////////////////
function closeFloater() 
{
	YAHOO.util.Dom.get("floater_search_text").value = '';
	YAHOO.util.Dom.get("floater_search_text").style.visibility = 'hidden';
	YAHOO.util.Dom.get("floater_results_list").style.overflow = '';
	YAHOO.util.Dom.get("floater_window").style.display = '';
	clearResultSet();
}

/////////////////////////////////////////////////////////////////////
// loadResultSet
/////////////////////////////////////////////////////////////////////


function loadResultSet()
{
	resultsArray = new Array(
							 "Anthony Moquette",
							 "Joel Nave",
							 "John Doe",
							 "Ralph Garcia",
							 "Tiffany Alteari",
							 "Michele Yoshikawa"
							)

	function itemClicked() {
		gSelectedItem = this;
		this.setSelected(true);
		this.className = this.selected? "selected" : "";
	}
	
	function setSelected(selected)
	{
		this.selected = selected;
		this.className = this.selected? "selected" : "";
	}
	
	var results = YAHOO.util.Dom.get('floater_results_list');
	for (var i = 0;i<resultsArray.length;i++)
	{
		var li = document.createElement("li");
		li.innerHTML = resultsArray[i];
		li.selected = false;
		li.setSelected = setSelected;
		li.onclick = itemClicked;
		results.appendChild(li);
	}
}

/////////////////////////////////////////////////////////////////////
// filterResults
/////////////////////////////////////////////////////////////////////
function filterResults() 
{
	var query = YAHOO.util.Dom.get("floater_search_text").value.toLowerCase();
	var resultsList = YAHOO.util.Dom.get("floater_results_list");
	var items = resultsList.getElementsByTagName("li");
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
			
		var str = item.innerHTML.toLowerCase();
		var match = (str.indexOf(query) != -1);
		item.style.display = match? "" : "none";
	}
} 




/////////////////////////////////////////////////////////////////////
// YAHOO.example.DDOnTop
/////////////////////////////////////////////////////////////////////
/*
 * @class a DragDrop implementation that moves the object as it is being dragged,
 * and keeps the object being dragged on top.  This is a subclass of DD rather
 * than DragDrop, and inherits the implementation of most of the event listeners
 * from that class.
 *
 * @extends YAHOO.util.DD
 * @constructor
 * @param {String} id the id of the linked element
 * @param {String} sGroup the group of related DragDrop items
 */
YAHOO.example.DDOnTop = function(id, sGroup, config) {
    if (id) {
        this.init(id, sGroup, config);
        this.logger = this.logger || YAHOO;
    }
};

// YAHOO.example.DDOnTop.prototype = new YAHOO.util.DD();
YAHOO.extend(YAHOO.example.DDOnTop, YAHOO.util.DD);

/**
 * The inital z-index of the element, stored so we can restore it later
 *
 * @type int
 */
YAHOO.example.DDOnTop.prototype.origZ = 0;

YAHOO.example.DDOnTop.prototype.startDrag = function(x, y) {
    this.logger.log(this.id + " startDrag");

    var style = this.getEl().style;

    // store the original z-index
    this.origZ = style.zIndex;

    // The z-index needs to be set very high so the element will indeed be on top
    style.zIndex = 999;
};

YAHOO.example.DDOnTop.prototype.endDrag = function(e) {
    this.logger.log(this.id + " endDrag");

    // restore the original z-index
    this.getEl().style.zIndex = this.origZ;
};



/////////////////////////////////////////////////////////////////////
// YAHOO.DDResize
/////////////////////////////////////////////////////////////////////
/*
 * @extends YAHOO.util.DragDrop
 * @constructor
 * @param {String} handle the id of the element that will cause the resize
 * @param {String} panel id of the element to resize
 * @param {String} sGroup the group of related DragDrop items
 */
YAHOO.DDResize = function(panelElId, handleElId, sGroup, config) {
    if (panelElId) {
        this.init(panelElId, sGroup, config);
        this.handleElId = handleElId;
        this.setHandleElId(handleElId);
        this.logger = this.logger || YAHOO;
    }
};

// YAHOO.example.DDResize.prototype = new YAHOO.util.DragDrop();
YAHOO.extend(YAHOO.DDResize, YAHOO.util.DragDrop);

YAHOO.DDResize.prototype.onMouseDown = function(e) {
    var panel = this.getEl();
    this.startWidth = panel.offsetWidth;
    this.startHeight = panel.offsetHeight;

    this.startPos = [YAHOO.util.Event.getPageX(e),
                     YAHOO.util.Event.getPageY(e)];
};

YAHOO.DDResize.prototype.onDrag = function(e) {
    var newPos = [YAHOO.util.Event.getPageX(e),
                  YAHOO.util.Event.getPageY(e)];

    var offsetX = newPos[0] - this.startPos[0];
    var offsetY = newPos[1] - this.startPos[1];

    var newWidth = Math.max(this.startWidth + offsetX, 10);
    var newHeight = Math.max(this.startHeight + offsetY, 10);

    var panel = this.getEl();
    panel.style.width = newWidth + "px";
    panel.style.height = newHeight + "px";
	YAHOO.util.Dom.get("floater_results_list").style.height = newHeight - 70 + "px";
};