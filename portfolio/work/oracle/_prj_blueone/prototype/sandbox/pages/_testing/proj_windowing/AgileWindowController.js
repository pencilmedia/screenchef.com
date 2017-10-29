AgileWindowController = function(windowing_type) {
	this.__init__(windowing_type);
};

AgileWindowController.prototype = {
	_windowing_type: null,
	_window_objs: [],
	_copy_paste_manager: null,
	_window_poll_timer: null,
	_mdi_engaged: null,
	_last_url: null,
	
	/* 
		This stuff is all for positioning new windows, so if you 
		don't want it, you can safely replace/remove it
	*/
	_new_window_default_attrs: {
							'width': 800,
							'height': 800,
							'left': 220,
							'top': 0,
							'scrollbars': 'yes',
							'status': 'yes',
							'toolbar': 'no',
							'menubar': 'no',
							'location': 'no',
							'resizable': 'yes'
							},
	_new_window_offset: 0,
	_new_window_offset_increment: 20,
	
	/*
		This is default stuff for the controller
	*/
	_controller_defaults: {
						'top': 0,
						'left': 0,
						'width': 215,
						'height': 800
						},
						
						
	
	/*
		__init__()
		Sets windowing defaults for this window and types for use in creation of
		child windows.
	*/	
	__init__: function(windowing_type) {
		this._windowing_type = windowing_type;
		this._copy_paste_manager = new AgileCopyPasteManager;
		this._mdi_engaged = false;
		window.controller_instance = this;
		this.setWindowPollTimer();
	},
	
	/*
		launchWindow()
		The workhorse of this class in terms of spawning new windows. It does some very
		basic checking against args to determine if it can open the window with the
		information provided and adapts to frame vs multi mode accordingly.
	*/
	launchWindow: function(window_name, window_url, window_attrs, frame_target) {
		// Stop polling while instantiating a new window
		this.clearWindowPollTimer();
		
		// Fail if no URL
		if (!window_url) { 
			alert("window_url is required"); 
			return; 
		}
		
		// Fail if window mode is frames and no target is given
		if ((this._windowing_type == AgileWindowingConstants['WINDOW_TYPE_FRAMES']) && (!frame_target)) { 
			alert("in frame mode, a load target is required"); 
			return; 
		}
		
		// If no name, generate one
		if (!window_name) {
			window_name = this.generateName();
		}
		
		// Check for existence ...
		var is_window_obj = this.checkForWindow(window_name);
		
		// ... if so, focus it, else create it
		if (is_window_obj) {
			is_window_obj.focus();
		} else {
			// Multi mode open vs frame open
			if (this._windowing_type == AgileWindowingConstants['WINDOW_TYPE_MULTI']) {
				var window_obj = window.open(window_url, window_name, this.generateNewWindowAttrs(window_attrs));
				this.registerWindow(window_name, window_obj);
			} else {
				var window_obj = window.top.frames[frame_target];
				window_obj.document.location = window_url;
				this.registerWindow(frame_target, window_obj);
			}
		}
		
		// Restore the timer
		//this.setWindowPollTimer(1000);
		
		// Return the window obj, in case we want to muck with it
		return(window_obj);
	},
	
	/*
		checkForWindow()
		Checks the window stack for existence of the window object passed in
	*/
	checkForWindow: function(window_name) {
		for (var i=0; i<this._window_objs.length; i++) {
			if (this._window_objs[i]['name'] == window_name) {
				return this._window_objs[i]['obj'];
			}
		}
		return null;
	},
	
	/*
		registerWindow()
		Pushes window to the window stack
	*/
	registerWindow: function(window_name, window_obj) {
		this._window_objs.push({'obj': window_obj, 'name': window_name});
	},

	/*
		unregisterWindow()
		Pops window from the window stack
		TODO: Make it scan the stack instead of index?
	*/
	unregisterWindow: function(idx) {
		this._window_objs.splice(idx, 1);
	},
	
	/*
		generateName()
		Creates a unique name for new windows if no name is given by other biz logic
	*/
	generateName: function() {
		return ("win" + String(Date.now()) + String(Math.round(Math.random() * 10000)) + String(Math.round(Math.random() * 10000)));
	},
	
	/*
		generateNewWindowAttrs()
		Creates the window attribute string used in a window open function. This will
		compare a dictonary of attributes passed in against the defaults to determine 
		any overrides.
	*/
	generateNewWindowAttrs: function(window_attrs) {
		var returnStr = "";
		
		for (k in this._new_window_default_attrs) {
			if (window_attrs && window_attrs[k]) {
				returnStr += (k + "=" + window_attrs[k]);
			} else {
				if (k == 'top' || k == 'left') {
					returnStr += (k + "=" + (this._new_window_default_attrs[k] + this._new_window_offset));
				} else {
					returnStr += (k + "=" + this._new_window_default_attrs[k]);
				}
			}
			
			returnStr += ",";
		}
		this._new_window_offset += this._new_window_offset_increment;
		
		return returnStr;
	},
	
	/*
		pollWindows()
		Runs through the window stack and updates the stack accordingly
		TODO: add a facility for registering poll loop callbacks
	*/
	pollWindows: function() {
		if (this._window_objs.length) {
			var loopLen = this._window_objs.length;
			for (var i=0; i<loopLen; i++) {
				if (typeof(this._window_objs[i]['obj'].window_instance) == "undefined") {
					this.unregisterWindow(i);
					loopLen -= 1;
				}
			}
		}
		this.setWindowPollTimer();
	},
	
	/*
		setWindowPollTimer()
		Starts the window poll loop
	*/
	setWindowPollTimer: function(ms) {
		if (ms) {
			this._window_poll_timer = setTimeout(agileUtilBindFunction(this, 'pollWindows'), ms);
		} else {
			this._window_poll_timer = setTimeout(agileUtilBindFunction(this, 'pollWindows'), 5000);
		}
	},
	
	/*
		clearWindowPollTimer()
		Stops the window poll loop
	*/
	clearWindowPollTimer: function() {
		clearTimeout(this._window_poll_timer);
		this._window_poll_timer = null;
	},
	
	/* 
		Accessor to put data in the copy buffer
	*/
	copyData: function(dataType, data) {
		this._copy_paste_manager.addToCopyQueue(dataType, data);
	},
	
	/* 
		Accessor to get data from the copy buffer
	*/
	getPasteData: function() {
		return this._copy_paste_manager.getFromCopyQueue();
	},	
	
	/* 
		Accessor to return window object collection
	*/
	getWindowList: function() {
		return this._window_objs;
	},
	
	/* 
		Accessor to position the controller in a default way
	*/
	assumeDefaults: function() {
		window.moveTo(this._controller_defaults['left'], this._controller_defaults['top']);
		window.resizeTo(this._controller_defaults['width'], this._controller_defaults['height']);
	},
	
	/*
		Accessor to engage MDI mode (opens links in new window)
	*/
	engageMDI: function() {
		this._mdi_engaged = true;
	},
	
	/* 
		Accessor to disengage MDI mode (opens links in same window)
	*/
	disengageMDI: function() {
		this._mdi_engaged = false;
	},

	/*
		Closes all open windows under MDI control and performs other internal cleanup calls
	*/
	cleanupMDI: function() {
		this.clearWindowPollTimer();

		this.closeAllWindows();
		this.resetNewWindowDefaults();
	},
	
	closeAllWindows: function() {
		if (this._window_objs.length) {
			for (var i=0; i<this._window_objs.length; i++) {
				try {
					this._window_objs[i]['obj'].close();
				} catch(e) {
					// pass
				}
			}
		}
		this._window_objs = [];
		
		this.setWindowPollTimer(5000);
	},
	
	resetNewWindowDefaults: function() {
		this._new_window_offset = 0;
	},


	/*
		Decides if the Concept car is in MDI mode. If so, it dispatches to launchWindow,
		otherwise it calls the XHR loader
	*/
	dispatchLink: function(url, target, callback) {
		this.storeLastUrl(target, url, callback);
		
		if (this._mdi_engaged) {
			url = "car.php?page=" + url;
			url += "&pop=1";
			if (callback) {
				url += "&callback=" + callback;
			}
			this.launchWindow(target, url);
		} else {
			url = "/" + url;
			agile.ux.xhr.get('car_content', url, callback);
		}
	},
	
	
	getLastUrl: function() {
		return this._last_url;
	},
	
	storeLastUrl: function(target, url, callback) {
		this._last_url = {'target': target, 'url': url, 'callback': callback};
	}



		
};
