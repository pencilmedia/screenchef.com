function Switcher() {
	/* 
		Member variables
	*/
	this._switcher = null;
	this._primary_tab_data = null;
	this._primary_tab_selected = null;
	this._shortcut_data = null;
	this._shortcut_selected = null;
	this._shortcut_old_text = "";
	this._window_data = null;
	this._window_selected = null;
	this._window_old_text = "";
	
	
	/* 
		Function to create the switcher div
	*/
	this.create = function(switcher_id) {
		this._switcher = document.createElement("div");
		if (switcher_id) {
			this._switcher.id = switcher_id;
		}
	}


	/* 
		Functions to return the switcher div
	*/
	this.getRootObject = function() {
		return (this._switcher);
	}


	/* 
		Functions to create the Primary Tabs
	*/
	this.createPrimaryTabs = function(data) {
		if (data) {
			this._primary_tab_data = data;
			this._primary_tabs = document.createElement("div");
			this._primary_tabs.className = "switcher_tabs";
			for (var i=0; i<this._primary_tab_data.tabs.length; i++) {
				var tab = this._createPrimaryTab(this._primary_tab_data.tabs[i]);
				this._primary_tabs.appendChild(tab);
			}
			this._switcher.appendChild(this._primary_tabs);
		}
	}
	
	this._createPrimaryTab = function(data) {
		// Make a tab
		var tab = document.createElement("div");
		tab.className = "switcher_tab";
		tab.id = data.tab_id;
		var params = { src_obj:tab, src_data:data };
		invo.event.addEvent(tab, "click", invo.event.associateEvent(this, "_primaryTabSelect", params), false);
		if (data.tab_onclick) {
			invo.event.addEvent(tab, "click", function() { eval(data.tab_onclick); }, false);
		}
		invo.event.addEvent(tab, "mouseover", invo.event.associateEvent(this, "_primaryTabHighlight", params), false);
		invo.event.addEvent(tab, "mouseout", invo.event.associateEvent(this, "_primaryTabUnhighlight", params), false);

		
		// Make the main chunk
		var tab_middle = document.createElement("div");
		var tab_middle_icon = document.createElement("em");
		tab_middle.appendChild(tab_middle_icon);
		
		
		// Make the text
		var tab_bottom = document.createElement("p");
		var tab_bottom_text = document.createTextNode(data.tab_text);
		tab_bottom.appendChild(tab_bottom_text);
		tab_middle.appendChild(tab_bottom);
		//tab.appendChild(tab_bottom);
		tab.appendChild(tab_middle);
		
		// Make the bottom color
		var tab_top = document.createElement("span");
		tab.appendChild(tab_top);
		
		return (tab);
	}
	
	
	this.setPrimaryTab = function(tab_id) {
		this._primaryTabSelect();
	}
	
	
	/* 
		Functions to create the Shortcut Items
	*/
	this.createShortcutPane = function(data) {
		if (data) {
			this._shortcut_data = data;
			this._shortcuts = document.createElement("div");
			this._shortcuts.className = "shortcuts";
			
			this._shortcut_items = document.createElement("div");
			this._shortcut_items.className = "shortcut_items";

			this._shortcut_display_text = document.createElement("p");
			this._shortcut_display_text.className = "shortcut_display_text";
			
			this._shortcuts.appendChild(this._shortcut_items);
			this._shortcuts.appendChild(this._shortcut_display_text);
			
			for (var i=0; i<this._shortcut_data.items.length; i++) {
				var item = this._createShortcut(this._shortcut_data.items[i]);
				this._shortcut_items.appendChild(item);
			}
			this._switcher.appendChild(this._shortcuts);
		}
	}
	
	this._createShortcut = function(data) {
		// Make a shortcut
		var item = document.createElement("div");
		item.className = "shortcut_item";
		var params = { src_obj:item, src_data:data };
		invo.event.addEvent(item, "click", invo.event.associateEvent(this, "_shortcutSelect", params), false);
		invo.event.addEvent(item, "mouseover", invo.event.associateEvent(this, "_shortcutHighlight", params), false);
		invo.event.addEvent(item, "mouseout", invo.event.associateEvent(this, "_shortcutUnhighlight", params), false);
		
		// Make the top color
		var item_top = document.createElement("span");
		item.appendChild(item_top);
		
		// Make the main chunk
		var item_middle = document.createElement("div");
		var item_middle_icon = document.createElement("em");
		item_middle_icon.style.backgroundImage = "url('" + data.item_icon_url + "')";
		item_middle.appendChild(item_middle_icon);
		item.appendChild(item_middle);
		
		return (item);
	}
	
	
	
	
	/* 
		Functions to create the Window Items
	*/
	this.createWindowPane = function(data) {
		if (data) {
			this._window_data = data;
			this._windows = document.createElement("div");
			this._windows.className = "windows";
			
			this._window_items = document.createElement("div");
			this._window_items.className = "window_items";

			this._window_display_text = document.createElement("p");
			this._window_display_text.className = "window_display_text";
			
			this._windows.appendChild(this._window_items);
			this._windows.appendChild(this._window_display_text);
			
			for (var i=0; i<this._window_data.items.length; i++) {
				var item = this._createWindow(this._window_data.items[i]);
				this._window_items.appendChild(item);
			}
			this._switcher.appendChild(this._windows);
		}
	}
	
	this._createWindow = function(data) {
		// Make a shortcut
		var item = document.createElement("div");
		item.className = "window_item";
		var params = { src_obj:item, src_data:data };
		invo.event.addEvent(item, "click", invo.event.associateEvent(this, "_windowSelect", params), false);
		invo.event.addEvent(item, "mouseover", invo.event.associateEvent(this, "_windowHighlight", params), false);
		invo.event.addEvent(item, "mouseout", invo.event.associateEvent(this, "_windowUnhighlight", params), false);
		
		// Make the top color
		var item_top = document.createElement("span");
		item.appendChild(item_top);
		
		// Make the main chunk
		var item_middle = document.createElement("div");
		var item_middle_icon = document.createElement("em");
		item_middle_icon.style.backgroundImage = "url('" + data.item_icon_url + "')";
		item_middle.appendChild(item_middle_icon);
		item.appendChild(item_middle);
		
		return (item);
	}
	
	
	
	
	/* 
		Functions to handle the Primary Tab visual behaviors 
	*/
	this._primaryTabHighlight = function(params) {
		if ((this._primary_tab_selected != null) && (this._primary_tab_selected == params.src_obj)) { return; }
		var list = invo.dom.getChildByElem(params.src_obj, "div");
		if (list) {
			list[0].className = "active";
		}
	}

	this._primaryTabUnhighlight = function(params) {
		if ((this._primary_tab_selected != null) && (this._primary_tab_selected == params.src_obj)) { return; }
		var list = invo.dom.getChildByElem(params.src_obj, "div");
		if (list) {
			list[0].className = "";
		}
	}

	this._primaryTabSelect = function(params) {
		if ((this._primary_tab_selected != null) && (this._primary_tab_selected == params.src_obj)) { return; }
		if ((this._primary_tab_selected != null) && (this._primary_tab_selected != params.src_obj)) {
			var list = invo.dom.getChildByElem(this._primary_tab_selected, "div");
			if (list) {
				list[0].className = "";
			}
		}
		this._primary_tab_selected = params.src_obj;
		list = invo.dom.getChildByElem(this._primary_tab_selected, "div");
		if (list) {
			list[0].className = "active";
		}
	}
	
	

	
	/* 
		Functions to handle the Shortcut Item visual behaviors 
	*/	
	this._shortcutHighlight = function(params) {
		if ((this._shortcut_selected != null) && (this._shortcut_selected == params.src_obj)) { return; }
				
		params.src_obj.className = "shortcut_item shortcut_item_active";
		
		this._textSwap(params.src_data.item_text, this._shortcut_display_text);
	}

	this._shortcutUnhighlight = function(params) {
		if ((this._shortcut_selected != null) && (this._shortcut_selected == params.src_obj)) { return; }

		params.src_obj.className = "shortcut_item";
		
		this._textSwap(this._shortcut_old_text, this._shortcut_display_text);
	}

	this._shortcutSelect = function(params) {
		if ((this._shortcut_selected != null) && (this._shortcut_selected == params.src_obj)) { return; }
		if ((this._shortcut_selected != null) && (this._shortcut_selected != params.src_obj)) {
			this._shortcut_selected.className = "shortcut_item";
		}
		
		this._shortcut_selected = params.src_obj;
		this._shortcut_selected.className = "shortcut_item shortcut_item_active";
		
		this._textSwap(params.src_data.item_text, this._shortcut_display_text, true, "this._storeShortcutText");
	}
	
	this._storeShortcutText = function(str) {
		this._shortcut_old_text = str;
	}
	
	
	
	
	/* 
		Functions to handle the Window Item visual behaviors 
	*/
	this._windowHighlight = function(params) {
		if ((this._window_selected != null) && (this._window_selected == params.src_obj)) { return; }
				
		params.src_obj.className = "window_item window_item_active";
		
		this._textSwap(params.src_data.item_text, this._window_display_text);
	}

	this._windowUnhighlight = function(params) {
		if ((this._window_selected != null) && (this._window_selected == params.src_obj)) { return; }

		params.src_obj.className = "window_item";
		
		this._textSwap(this._window_old_text, this._window_display_text);
	}

	this._windowSelect = function(params) {
		if ((this._window_selected != null) && (this._window_selected == params.src_obj)) { return; }
		if ((this._window_selected != null) && (this._window_selected != params.src_obj)) {
			this._window_selected.className = "window_item";
		}
		
		this._window_selected = params.src_obj;
		this._window_selected.className = "window_item window_item_active";
		
		this._textSwap(params.src_data.item_text, this._window_display_text, true, "this._storeWindowText");
	}
	
	this._storeWindowText = function(str) {
		this._window_old_text = str;
	}
	
	
	
	
	/* 
		Function to set text in a field for the rollovers 
	*/
	this._textSwap = function(str, tgt, bool_store, callback) {
		if (bool_store == true) {
			eval(callback + "(str)");
		}

		if (tgt.firstChild) {
			// throw out old values
			while (tgt.firstChild) {
				tgt.removeChild(tgt.firstChild);
			}
		}
		
		// create the new text
		var new_text = document.createTextNode(str);
		tgt.appendChild(new_text);
	}
	

}