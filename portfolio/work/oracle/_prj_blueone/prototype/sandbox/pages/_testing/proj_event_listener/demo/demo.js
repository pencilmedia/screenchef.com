function defaultCB(yahooEvent, srcObj, agileObj) {
	var str = "yEvent = " + agileObj['yEvent'];
	str += " realEvent = " + agileObj['realEvent'];
	str += " sourceObj = " + agileObj['sourceObj'];
	str += " attachObj = " + agileObj['attachObj'];
	str += " keycode = " + agileObj['keycode'];
	str += " modifiers = ";
	for (m in agileObj['modifiers']) {
		str += m + ":" + agileObj['modifiers'][m] + ",";
	}
	alert(str);
}



function getKC(e) {
	if (!e) { e = window.event; }
	
	var keycode = null;
	var modShift = false;
	var modCtrl = false;
	var modAlt = false;
	
	if (e.keyCode) {
		keycode   = e.keyCode;
	} else if (e.charCode) {
		keycode   = e.charCode;
	}
	

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.SHIFT_MASK)) {
		modShift = true;
	} else if (e.shiftKey && e.shiftKey == true) {
		modShift = true;
	}

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.CTRL_MASK)) {
		modCtrl = true;
	} else if (e.ctrlKey && e.ctrlKey == true) {
		modCtrl = true;
	}

	if (typeof(Event) != 'undefined' && (e.modifiers & Event.ALT_MASK)) {
		modAlt = true;
	} else if (e.altKey && e.altKey == true) {
		modAlt = true;
	}
	
	var str = "Key Code = " + keycode + "\n";
	str += "Shift = " + modShift + "\n";
	str += "Ctrl = " + modCtrl + "\n";
	str += "Alt = " + modAlt + "\n";
	alert(str);
}



function run() {			
	// Attach to test0
	var tKey = document.getElementById('testKey');
	tKey.onkeyup = function(event) { 
		getKC(event); 
	};
	
	var listeners = [];
	var listenerCounter = 0;
	var fieldCounter = 0;
	
	
	for (c in AgileEventConstants) {
		var fieldName = 'textarea' + fieldCounter;
		var fieldObj = document.getElementById(fieldName);
		var spanName = 'span' + fieldCounter;
		var spanObj = document.getElementById(spanName);
		var instObj = document.getElementById('instructions' + fieldCounter);
		
		var textListeners = AgileListenerProxy(AgileEventConstants[c], fieldName, defaultCB);
		
		listeners[listenerCounter] = textListeners[0];
		listeners[listenerCounter].enable();
		listenerCounter = listenerCounter + 1;
		
		if (textListeners.length > 1) {
			listeners[listenerCounter] = textListeners[1];
			listeners[listenerCounter].enable();
			listenerCounter = listenerCounter + 1;
		}
		
		var spanListeners = AgileListenerProxy(AgileEventConstants[c], spanName, defaultCB);
		
		listeners[listenerCounter] = spanListeners[0];
		listeners[listenerCounter].enable();
		listenerCounter = listenerCounter + 1;
		
		if (spanListeners.length > 1) {
			listeners[listenerCounter] = spanListeners[1];
			listeners[listenerCounter].enable();
			listenerCounter = listenerCounter + 1;
		}
		
		
		fieldObj.value = "TEXTAREA: " + c;
		spanObj.innerHTML = "SPAN: " + c;
		instObj.innerHTML = instructions[fieldCounter];
		
		fieldCounter = fieldCounter + 1;
	}

}





var instructions = [
	'Select All - Press: CTRL + A',
	'Tab Forward - Press: Tab',
	'Tab Backward - Press: SHIFT + Tab',
	'Launch Palette - Press: CTRL + L <strike>ALT + L</strike>',
	'Move Up - Press: Up Arrow',
	'Move Down - Press: Down Arrow',
	'Move Left - Press: Left Arrow',
	'Move Right - Press: Right Arrow',
	'Move Top - Press: <strike>Home</strike> -or- CTRL + Arrow Up <strike>ALT + Arrow Up</strike>',
	'Move Bottom - Press: <strike>End</strike> -or- CTRL + Arrow Down <strike>ALT + Arrow Down</strike>',
	'Range Select Up - Press: SHIFT + Up Arrow',
	'Range Select Down - Press: SHIFT + Down Arrow',
	'Range Select Left - Press: SHIFT + Left Arrow',
	'Range Select Right - Press: SHIFT + Right Arrow',
	'Range Select Top - Press: SHIFT + <strike>Home</strike> -or- SHIFT + CTRL + Arrow Up <strike>SHIFT + ALT + Arrow Up</strike>',
	'Range Select Bottom - Press: SHIFT + <strike>End</strike> -or- SHIFT + CTRL + Arrow Down <strike>SHIFT + ALT + Arrow Down</strike>',
	'Range Select Mouse - Hold SHIFT and Click Mouse',
	'Additive Select Mouse - Hold CTRL and Click Mouse (Should not show context menu in FF)',
	'<em>DEPRECATED: DO NOT TEST</em> - Expand All - Press: SHIFT + =',
	'<em>DEPRECATED: DO NOT TEST</em> - Collapse All - Press: SHIFT + -',
	'Copy - Press: CTRL + C',
	'Paste - Press: CTRL + V',
	'Print - Press: CTRL + P',
	'Global Quick Search - Press: CTRL + SHIFT + S',
	'Escape - Press: ESC',
	'Enter - Press: Enter -or- Return',
	'Delete - Press: Delete -or- Backspace',
	'Page Up - Press: Page Up',
	'Page Down - Press: Page Down',
	'Global Home - Press: CTRL + SHIFT + H',
	'<em>UPDATED</em> - Global Create New - Press: CTRL + SHIFT + C',
	'Global Parametric Search - Press: CTRL + SHIFT + Q',
	'<em>UPDATED</em> - Global Windowing - Press: CTRL + SHIFT + N',
	'<em>UPDATED</em> - Global Logout - Press: CTRL + SHIFT +  E',
	'Save (Table) - Press: CTRL + S',
	'Cancel Edit (Table) - Press: CTRL + K',
	'Insert (Table) - Press: CTRL + I',
	'Launch in New Window - Hold SHIFT + CTRL and Click Mouse',
	'Open in Excel (Table) - Press: CTRL + E',
	'<em>NEW</em> - Global Help - Press: CTRL + ?'
];



