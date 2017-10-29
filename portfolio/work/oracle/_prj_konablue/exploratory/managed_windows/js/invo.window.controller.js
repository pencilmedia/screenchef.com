/* -----------------------------------------------------------------------------
	window.controller.js is for the CONTROLLER WINDOW ONLY, so do not include 
	it in the child windows, or any other window.
----------------------------------------------------------------------------- */
if (!invo.win) { invo.win = {}; }
if (!invo.win.controller) { invo.win.controller = function() {}; }


/* -----------------------------------------------------------------------------
	Global functions for the controller window.
----------------------------------------------------------------------------- */
/*
	Used to open new child windows. Calls a number of other functions to
	register it, etc.
	
	NOTE: Never call window.open since that will not manage a window.
*/
invo.win.controller.prototype.MW_Open = function(win_url, win_name, win_features) {
	if (!win_url) {
		alert("This function requires a URL");
		return;
	}
	if (!win_name) {
		win_name = this.MW_GenerateName();
	}
	if (!win_features) {
		win_features = this.mw_win_deafult_attributes;
	}
	if (!this.MW_Check(win_name)) {
		var win_obj = window.open(win_url, win_name, win_features);
		this.MW_Register(win_name, win_obj);
		this.MW_SetPosition(win_name);
		this.MW_Resize(win_name);
	} else {
		this.MW_Focus(win_name);
	}
}

/*
	Used to register a new window after it is opened and initialized.
*/
invo.win.controller.prototype.MW_Register = function(obj_name, obj) {
	this.mw_window_register.push(obj_name);
	this.mw_window_objects[obj_name] = obj;
	this.mw_poll_timer = setTimeout(invo.event.associateEvent(this, "MW_Poll"), 1000);
}

/*
	Used to unregister a window when it can no longer be located via messaging.
*/
invo.win.controller.prototype.MW_Unregister = function(obj_name) {
	this.mw_window_objects[obj_name] = null;
	this.mw_window_register.splice(this.mw_window_register.indexOf(obj_name), 1);
}

/*
	Checks to see if a window is in the managed array. If it is, then it will
	cancel the open call in favor of a focus call.
*/
invo.win.controller.prototype.MW_Check = function(obj_name) {
	if (this.mw_window_register.inArray(obj_name)) {
		return true;
	} else {
		return false;
	}
}

/*
	A better close than window.close, since it immediately unregisters it.
*/
invo.win.controller.prototype.MW_Close = function(obj_name) {
	this.mw_window_objects[obj_name].close();
	this.MW_Unregister(obj_name);
}

/*
	Sets a window's focus.
*/
invo.win.controller.prototype.MW_Focus = function(obj_name) {
	this.mw_window_objects[obj_name].focus();
}

/*
	Sets a window's position.
*/
invo.win.controller.prototype.MW_SetPosition = function(obj_name, x, y) {
	if (x == null) { x = this.mw_new_win_x; this.mw_new_win_x += this.mw_win_tile_offset_x; }
	if (y == null) { y = this.mw_new_win_y; this.mw_new_win_y += this.mw_win_tile_offset_y; }
	this.mw_window_objects[obj_name].moveTo(x, y);
}

/*
	Sets a window's size.
*/
invo.win.controller.prototype.MW_Resize = function(obj_name, x, y) {
	if (x == null) { x = this.mw_win_default_width; }
	if (y == null) { y = this.mw_win_default_height; }
	this.mw_window_objects[obj_name].resizeTo(x, y);
}

/*
	Arranges windows in a simple pattern.
*/
invo.win.controller.prototype.MW_Arrange = function() {
	this.MW_ResizeController();
	var win_x = window.outerWidth;
	var win_y = window.outerHeight;

	this.mw_new_win_x = this.mw_win_default_x;
	this.mw_new_win_y = this.mw_win_default_y;

	if (this.mw_window_register.length) {
		for (var i=0; i<this.mw_window_register.length; i++) {
			this.MW_SetPosition(this.mw_window_register[i], this.mw_new_win_x, this.mw_new_win_y);
			this.MW_Resize(this.mw_window_register[i]);
			this.MW_Focus(this.mw_window_register[i]);
			this.mw_new_win_x += this.mw_win_tile_offset_x;
			this.mw_new_win_y += this.mw_win_tile_offset_y;
		}
	}
}

/*
	The main workhorse for communication between the windows. It scans the list 
	of child windows and passes information around.
	
	This is what you will want to make more sophisticated. For example, you may 
	want to compress ccommunications or whatever, so this is likely to become
	it's own class. If you make a class of it, you can inherit into the window
	object with something like.

		Window.foo = new Bar()
*/
invo.win.controller.prototype.MW_Poll = function() {
	if (this.mw_window_register && this.mw_window_register.length) {
		for (var i=0; i<this.mw_window_register.length; i++) {
			if (!this.mw_window_objects[this.mw_window_register[i]].name) {
				this.MW_Unregister(this.mw_window_register[i]);
			} else if (this.mw_window_objects[this.mw_window_register[i]].mw_initialized) {
				this.mw_window_objects[this.mw_window_register[i]].window.mw_self.MW_StoreControllerData(window, this.mw_window_register, this.mw_window_objects);
			}
		}
		this.mw_poll_timer = setTimeout(invo.event.associateEvent(this, "MW_Poll"), this.mw_poll_timeout);
	} else {
		if (this.mw_poll_timer) { 
			clearTimeout(this.mw_poll_timer);
			this.mw_poll_timer = null;
		}
	}
	// NOTE: For demo only
	this.windowList();
}

/*
	A sort of bogus function to generate names for windows not opened by a
	known link. See the "unnamed" link in the demo.
*/
invo.win.controller.prototype.MW_GenerateName = function() {
	var str = "win";
	str += Date.now();
	str += Math.round(Math.random() * 10000);
	return (str);
}

/*
	Called from a child to register itself witht he parent after a loss and
	restoration of the controller.
*/
invo.win.controller.prototype.MW_RemoteRegister = function(win_list, win_objs) {
	if (win_list && win_objs) {
		this.mw_new_win_x = this.mw_win_default_x;
		this.mw_new_win_y = this.mw_win_default_y;
		
		var win_names = (win_list.toString()).split(",");
		
		for (var i=0; i<win_names.length; i++) {
			this.MW_Register(win_names[i], win_objs[win_names[i]]);
			this.mw_new_win_x += this.mw_win_tile_offset_x;
			this.mw_new_win_y += this.mw_win_tile_offset_y;
		}
	}
}

/*
	Stores what window is in the front.
*/
invo.win.controller.prototype.MW_SetForegroundWindow = function(win_obj) {
	this.mw_foreground_window = win_obj;
}

/*
	Releases the storage of the front window.
*/
invo.win.controller.prototype.MW_ReleaseForegroundWindow = function() {
	this.mw_foreground_window = null;
}

/*
	Restores controller size defaults.
	
	NOTE: Defaults should probably be in variables. Just lazy here :)
*/
invo.win.controller.prototype.MW_ResizeController = function() {
	var screen_x = screen.width;
	var screen_y = screen.height;
	window.moveTo(10, 10);
	window.resizeTo(200, 800);
}

/*
	Simple routine to initialize the window. Init is important, since the 
	controller will only talk to the child when init is true
*/
invo.win.controller.prototype.MW_InitController = function(win_obj) {
	this.mw_window_register = new Array;
	this.mw_window_objects = {};
	this.mw_poll_timer = null;
	this.mw_poll_timeout = 300;
	this.mw_win_default_x = 220;
	this.mw_win_default_y = 10;
	this.mw_win_default_width = 800;
	this.mw_win_default_height = 600;
	this.mw_win_deafult_attributes = "scrollbars=yes,status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes";
	this.mw_win_tile_offset_x = 20;
	this.mw_win_tile_offset_y = 20;
	this.mw_new_win_x = 220;
	this.mw_new_win_y = 10;
	this.mw_controller_name = "controller";
	this.mw_foreground_window = null;
	this.mw_initialized = true;
	
	window.mw_self = win_obj;
	window.name = this.mw_controller_name;
	
	
	window.mw_initialized = this.mw_initialized;
	window.MW_Open = this.MW_Open;
	window.MW_Arrange = this.MW_Arrange;

	this.MW_ResizeController();
}




/* -----------------------------------------------------------------------------
	Debug Stuff
	These functions should not be a part of the MW objects, since they are just 
	used for demonstration purposes.
----------------------------------------------------------------------------- */
invo.win.controller.prototype.windowList = function() {
	var tgt = document.getElementById("win_list");
	var str = "";
	if (this.mw_window_register.length) {
		for (var i=0; i<this.mw_window_register.length; i++) {
			str += "<strong><a href=\"#\" onclick=\"g_win_obj.MW_Focus('" + this.mw_window_register[i] + "');\">" + this.mw_window_register[i] + "</a></strong>";
			str += "<br/>";
			str += "&nbsp;<a href=\"#\" onclick=\"g_win_obj.MW_Close('" + this.mw_window_register[i] + "');\">Close</a>";
			str += "&nbsp;&nbsp;&nbsp;X=" + this.mw_window_objects[this.mw_window_register[i]].screenX + ", Y=" + this.mw_window_objects[this.mw_window_register[i]].screenY;
			str += "<br/>";
			str += "<br/>";
		}
	} else {
		str += "No windows in the register.";
	}
	tgt.innerHTML = str;
}



/* -----------------------------------------------------------------------------
	Event Handlers
	These are used to register events that will broadcast data when window 
	attributes change.
	
	NOTE: Style stuff here should be classnames from CSS, not inline.
----------------------------------------------------------------------------- */
var g_win_obj = null;

handleFocus = function() {
	this.document.body.style.backgroundColor = "#ccf";
}

handleBlur = function() {
	this.document.body.style.backgroundColor = "#fff";
}

handleLoad = function() {
	g_win_obj = new invo.win.controller;
	g_win_obj.MW_InitController(g_win_obj);
}

invo.event.addEvent(window, "focus", handleFocus, false);
invo.event.addEvent(window, "blur", handleBlur, false);
invo.event.addEvent(window, "load", handleLoad, false);