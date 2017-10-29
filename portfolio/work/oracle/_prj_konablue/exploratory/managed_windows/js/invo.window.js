/* -----------------------------------------------------------------------------
	window.js is for the CHILD WINDOWS ONLY, so do not include it in the
	controller, or any other unmanaged window.
----------------------------------------------------------------------------- */
if (!invo.win) { invo.win = {}; }
if (!invo.win.childwin) { invo.win.childwin = function() {}; }


/* -----------------------------------------------------------------------------
	Global functions for the child windows.
----------------------------------------------------------------------------- */
/*
	Restores the controller from the calling child window if it has been closed, 
	or if it is still open, then it changes focus to it.
*/
invo.win.childwin.prototype.MW_RestoreController = function() {
	if (this.mw_controller_obj) {
		if (this.mw_controller_obj.mw_initialized) {
			this.mw_controller_obj.MW_ResizeController;
			this.mw_controller_obj.focus();
			return;
		} else {
			var tmpwin = window.open(this.mw_controller_url, this.mw_controller_name, this.mw_win_deafult_attributes);
			this.mw_restored_mw_controller_obj = tmpwin;
			this.mw_restore_timer = setTimeout(invo.event.associateEvent(this, "MW_RestoreControllerCache"), this.mw_restore_timeout);
		}
	}
}

/*
	This does the restore of the cache stored in variables located in the
	calling child window.
*/
invo.win.childwin.prototype.MW_RestoreControllerCache = function() {
	if (this.mw_restored_mw_controller_obj && this.mw_restored_mw_controller_obj.mw_initialized) {
		this.mw_restored_mw_controller_obj.window.g_win_obj.MW_RemoteRegister(this.mw_current_window_list, this.mw_current_window_objs);
		clearTimeout(this.mw_restore_timer);
	} else {
		this.mw_restore_timer = setTimeout(invo.event.associateEvent(this, "MW_RestoreControllerCache"), this.mw_restore_timeout);
	}
}

/*
	Called from the controller, will store window data in local variables for
	later retrieval (for example, by MW_RestoreControllerCache)
*/
invo.win.childwin.prototype.MW_StoreControllerData = function(controller_obj, win_list, win_objects) {
	this.mw_controller_obj = controller_obj;
	this.mw_current_window_list = win_list;
	this.mw_current_window_objs = win_objects;
}

/*
	Simple routine to initialize the window. Init is important, since the 
	controller will only talk to the child when init is true
*/
invo.win.childwin.prototype.MW_InitWindow = function(win_obj) {
	this.mw_restored_mw_controller_obj = null;
	this.mw_restore_timer = null;
	this.mw_restore_timeout = 10;
	this.mw_current_window_list = new Array();
	this.mw_current_window_objs = new Array();
	this.mw_controller_obj = null;
	this.mw_controller_url = "./window_controller.html";
	this.mw_controller_name = "controller";
	this.mw_win_deafult_attributes = "scrollbars=yes,status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes";
	this.mw_initialized = true;

	window.mw_self = win_obj;
	
	// Register variables and functions with the window that need to be called 
	// from other windows
	window.MW_StoreControllerData = this.MW_StoreControllerData;
	window.mw_initialized = this.mw_initialized;
	window.mw_current_window_list = this.mw_current_window_list;
	window.mw_current_window_objs = this.mw_current_window_objs;
	
	// NOTE For demo only
	this.printInfo();
}

/* -----------------------------------------------------------------------------
	Debug Stuff
	These functions should not be a part of the MW objects, since they are just 
	used for demonstration purposes.
----------------------------------------------------------------------------- */
invo.win.childwin.prototype.printInfo = function() {
	var tgt = document.getElementById("win_info");
	var str = "This window's name is: <strong>" + window.name + "</strong><br/>";
	tgt.innerHTML = str;
}

invo.win.childwin.prototype.alertWindowList = function() {
	if (this.mw_current_window_list) {
		var str = "";
		for (var i=0; i<this.mw_current_window_list.length; i++) {
			str += this.mw_current_window_list[i] + ", ";
		}
		alert(str);
	}
}


/* -----------------------------------------------------------------------------
	Event Handlers
	These are used to register events that will broadcast data when window 
	attributes change.
	
	NOTE: Style stuff here should be classnames from CSS, not inline.
----------------------------------------------------------------------------- */
var g_win_obj = null;

handleFocus = function() {
	window.document.body.style.backgroundColor = "#ccf";
}

handleBlur = function() {
	window.document.body.style.backgroundColor = "#fff";
}

handleLoad = function() {
	g_win_obj = new invo.win.childwin;
	g_win_obj.MW_InitWindow(g_win_obj);
}

invo.event.addEvent(window, "focus", handleFocus, false);
invo.event.addEvent(window, "blur", handleBlur, false);
invo.event.addEvent(window, "load", handleLoad, false);