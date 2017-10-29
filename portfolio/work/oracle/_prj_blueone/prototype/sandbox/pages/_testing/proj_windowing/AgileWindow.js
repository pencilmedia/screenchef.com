/* ---------------------------------------------------------------------------
	Basic Window Class 
--------------------------------------------------------------------------- */
AgileWindow = function(windowing_type) {
	this.__init__(windowing_type);
};

AgileWindow.prototype = {
	_windowing_type: null,
	_name: null,
	_message_queue: [],
	_message_timer: null,
	_poll_timer: null,
	_controller_obj: null,
	_window_objs: null,

	_window_defaults: {
					'top': 0,
					'left': 220,
					'width': 800,
					'height': 800
					},

	__init__: function(windowing_type) {
		this._windowing_type = windowing_type;
		window.window_instance = this;
		window.initialized = true;
		if (this._windowing_type == AgileWindowingConstants['WINDOW_TYPE_FRAMES']) {
			this._controller_obj = window.top.controller_instance;
			window.controller_instance = window.top.controller_instance;
		} else {
			this._controller_obj = window.opener.controller_instance;
			window.controller_instance = window.opener.controller_instance;
		}
		this._window_objs = this._controller_obj.getWindowList();
		this.setName();
		try {
			this.assumeDefaults();
		} catch(e) {
			// pass
		}
		window.controller_instance.setWindowPollTimer(5000);
	},

	addMessageToQueue: function(message_dict) {
		this._message_queue.push(message_dict);
	},
	
	pollMessageQueue: function() {
		if (this._message_queue && this._message_queue.length) {
			var message = this._message_queue.shift();
			var func = INVO.event.associateFunc(this, message['callback'], message['data']);
			func();
			this.pollMessageQueue();
		} else {
			this.setMessageTimer();
		}
	},
	
	setMessageTimer: function() {
		this._message_timer = setTimeout(INVO.event.associateFunc(this, 'pollMessageQueue'), 5000);
	},
	
	setName: function(window_name) {
		if (!window_name) {
			for (var i=0; i<this._window_objs.length; i++) {
				if (this._window_objs[i]['obj'] == window.self) {
					this._name = this._window_objs[i]['name'];
				}
			}
		} else {
			this._name = window_name;
		}
	},
	
	copyData: function(dataType, data) {
		this._controller_obj.copyData(dataType, data);
	},
	
	pasteData: function() {
		return this._controller_obj.getPasteData();
	},

	getName: function() {
		return this._name;
	},
	
	assumeDefaults: function() {
		var offset = this._controller_obj._new_window_offset - this._controller_obj._new_window_offset_increment;
		window.moveTo((this._window_defaults['left'] + offset), (this._window_defaults['top'] + offset));
		window.resizeTo(this._window_defaults['width'], this._window_defaults['height']);
	}
};