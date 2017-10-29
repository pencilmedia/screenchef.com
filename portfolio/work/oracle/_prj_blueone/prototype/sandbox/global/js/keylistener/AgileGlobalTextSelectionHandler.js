/*
	For reference

	agile_obj['event'] = The event that started everything.
	agile_obj['y_obj'] = Some Yahoo object (usually the trigger, sometimes empty)
	agile_obj['modifiers'] = Dictionary of modifiers at time of event
	agile_obj['source_obj'] = The triggering object (possibly different than the attachTo object)
	agile_obj['attach_obj'] = The object the event was attached to, if any
	agile_obj['keycode'] = A key code, if any
*/

AgileGlobalTextSelectionHandler = function() {
	this.lastKnownText = "";
	
	this.storeSelectedText = function(obj) {
		obj = this.determineObj(obj);
		
		if (obj.getSelection) {
			this.lastKnownText = obj.getSelection();
		} else if (obj.setSelectionRange) {
			this.lastKnownText = obj.value.substring(obj.selectionStart, obj.selectionEnd);
		} else if (document.selection) {
			this.lastKnownText = document.selection.createRange().text;
		} else {
			this.lastKnownText = "";
		}
	};
	
	this.deselectSelectedText = function(obj) {
		obj = this.determineObj(obj);
		
		if (obj.getSelection) {
			try {
				obj.getSelection().collapseToStart();
			}
			catch(e) {
				//
			}
		} else if (obj.setSelectionRange) {
			obj.setSelectionRange(obj.value.length, obj.value.length);
		} else if (document.selection) {
			document.selection.empty();
		}
	};
	
	this.determineObj = function(obj) {
		var tn = obj.tagName;
		if (tn) { 
			tn = tn.toLowerCase();
			switch (tn) {
				case 'textarea':
				case 'input':
					return obj;
					break;
				default:
					return window;
					break;
			}
		}
		return window;
	}
	
	this.getLastKnownText = function() {
		return this.lastKnownText;
	};
};
