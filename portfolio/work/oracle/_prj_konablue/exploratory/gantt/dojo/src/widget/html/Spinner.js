/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.provide("dojo.widget.html.Spinner");
dojo.require("dojo.widget.Spinner");
dojo.require("dojo.widget.Manager.*");
dojo.require("dojo.widget.*");
dojo.require("dojo.io.*");
dojo.require("dojo.lfx.*");
dojo.require("dojo.dom");
dojo.require("dojo.html");
dojo.require("dojo.string");
dojo.require("dojo.widget.html.stabile");

dojo.widget.defineWidget(
	"dojo.widget.html.Spinner",
	[dojo.widget.HtmlWidget, dojo.widget.Spinner],
	{
		inputNode: null,
		upArrowNode: null,
		downArrowNode: null,
		relNode: null,
		spacerNode: null,
		inputWidgetId: "",
		inputWidget: null,
		typamaticTimer: null,
		typamaticFunction: null,
		defaultTimeout: 500,
		currentTimeout: this.defaultTimeout,
		eventCount: 0,

		templatePath: dojo.uri.dojoUri("src/widget/templates/HtmlSpinner.html"),
		templateCssPath: dojo.uri.dojoUri("src/widget/templates/HtmlSpinner.css"),

		setValue: function(value){
			this.inputWidget.setValue(value);
			this.inputWidget.adjustValue(0);
			dojo.widget.html.stabile.setState(this.widgetId, this.getState(), true);
		},

		getValue: function(){
			return this.inputWidget.getValue();
		},

		getState: function(){
			return {value: this.getValue()};
		},

		setState: function(state){
			this.setValue(state.value);
		},

		// does the keyboard related stuff
		_handleKeyEvents: function(evt){
			var k = dojo.event.browser.keys;
			var keyCode = evt.keyCode;

			switch(keyCode){
 			case k.KEY_DOWN_ARROW:
					dojo.event.browser.stopEvent(evt);
					this.downArrowPressed(evt);
					return;
				case k.KEY_UP_ARROW:
					dojo.event.browser.stopEvent(evt);
					this.upArrowPressed(evt);
					return;
			}
			this.eventCount++;

		},

		onKeyDown: function(evt){
			// IE needs to stop keyDown others need to stop keyPress
			if(!document.createEvent){ // only IE
				this._handleKeyEvents(evt);
			}
		},

		onKeyPress: function(evt){
			if(document.createEvent){ // never IE
				this._handleKeyEvents(evt);
			}
		},

		fillInTemplate: function(args, frag){
			var source = this.getFragNodeRef(frag);
			dojo.html.copyStyle(this.domNode, source);
		},

		_resizeNode: function(node){
			var oldh = dojo.style.getContentBoxHeight(node);
			var oldw = dojo.style.getContentBoxWidth(node);
			if(oldh <=0 || oldw <= 0){
				// need more time to calculate size
				setTimeout(dojo.lang.hitch(this,function(){this._resizeNode(node);}), 100);
				return;
			}
			// note that the border is not resized
			var newh = (dojo.style.getBorderBoxHeight(this.inputNode) >> 1) - dojo.style.getBorderHeight(node);
			var ratio = newh  / oldh;
			var spinnerWidth = Math.floor(oldw * ratio);
			node.width = spinnerWidth;
			node.style.width = spinnerWidth;
			node.height = newh;
			node.style.height = newh;

			// figure out how big the spacer image should be
			var spinnerLeft = dojo.html.getAbsoluteX(this.relNode,true);
			var spacerLeft = dojo.html.getAbsoluteX(this.spacerNode,true);
			var spacerWidth = spinnerLeft + spinnerWidth + dojo.style.getBorderWidth(node) - spacerLeft;
			if (spacerWidth >= 0) {
				this.spacerNode.style.width = spacerWidth + "px";
			}
		},

		resize: function(){
			var inputHeight = dojo.style.getBorderBoxHeight(this.inputNode);
			if(inputHeight <= 0){
				// need more time to calculate size
				setTimeout(dojo.lang.hitch(this,function(){this.resize();}), 100);
				return;
			}
			this._resizeNode(this.upArrowNode);
			this._resizeNode(this.downArrowNode);

			// position arrows vertically
			if (dojo.html.getAbsoluteY(this.inputNode,true) <= dojo.html.getAbsoluteY(this.spacerNode,true)) {
				var inputTop = dojo.html.getAbsoluteY(this.inputNode,true);
				this.relNode.style.top = "0px";
				this.upArrowNode.style.top = "0px";
				this.downArrowNode.style.top = "0px";
				var spinnerTop = dojo.html.getAbsoluteY(this.upArrowNode,true);
				// FIXME: why is mozilla/firefox off by 2 ?
				if (dojo.render.html.mozilla || dojo.render.html.moz) {
					spinnerTop += 2;
				}
				this.upArrowNode.style.top = (inputTop - spinnerTop) + "px";
				this.downArrowNode.style.top = (inputTop - spinnerTop + (inputHeight>>1)) + "px";
			}
		},

		_pressButton: function(node){
			with(node.style){
				borderRight = "0px";
				borderBottom = "0px";
				borderLeft = "1px solid black";
				borderTop = "1px solid black";
			}
		},

		_releaseButton: function(node){
			with(node.style){
				borderLeft = "0px";
				borderTop = "0px";
				borderRight = "1px solid gray";
				borderBottom = "1px solid gray";
			}
		},

		_arrowPressed: function(evt, direction){
			var nodePressed = (direction == -1) ? this.downArrowNode : this.upArrowNode;
			var nodeReleased = (direction == +1) ? this.downArrowNode : this.upArrowNode;
			if(typeof evt != "number"){
				if(this.typamaticTimer != null){
					if(this.typamaticNode == nodePressed){
						return;
					}
					clearTimeout(this.typamaticTimer);
				}
				this._releaseButton(nodeReleased);
				this.eventCount++;
				this.typamaticTimer = null;
				this.currentTimeout = this.defaultTimeout;

			}else if (evt != this.eventCount){
				this._releaseButton(nodePressed);
				return;
			}
			this._pressButton(nodePressed);
			this.setCursorX(this.inputWidget.adjustValue(direction,this.getCursorX()));
			this.typamaticNode = nodePressed;
			this.typamaticTimer = setTimeout( dojo.lang.hitch(this,function(){this._arrowPressed(this.eventCount,direction);}), this.currentTimeout);
			this.currentTimeout = Math.round(this.currentTimeout * 90 / 100);
		},

		downArrowPressed: function(evt){
			return this._arrowPressed(evt,-1);
		},

		upArrowPressed: function(evt){
			return this._arrowPressed(evt,+1);
		},

		arrowReleased: function(evt){
			this.inputNode.focus();
			if(evt.keyCode && evt.keyCode != null){
				var keyCode = evt.keyCode;
				var k = dojo.event.browser.keys;

				switch(keyCode){
					case k.KEY_DOWN_ARROW:
					case k.KEY_UP_ARROW:
						dojo.event.browser.stopEvent(evt);
						break;
				}
			}
			this._releaseButton(this.upArrowNode);
			this._releaseButton(this.downArrowNode);
			this.eventCount++;
			if(this.typamaticTimer != null){
				clearTimeout(this.typamaticTimer);
			}
			this.typamaticTimer = null;
			this.currentTimeout = this.defaultTimeout;
		},

		mouseWheeled: function(evt) {
			var scrollAmount = 0;
			if(typeof evt.wheelDelta == 'number'){ // IE
				scrollAmount = evt.wheelDelta;
			}else if (typeof evt.detail == 'number'){ // Mozilla+Firefox
				scrollAmount = -evt.detail;
			}
			if(scrollAmount > 0){
				this.upArrowPressed(evt);
				this.arrowReleased(evt);
			}else if (scrollAmount < 0){
				this.downArrowPressed(evt);
				this.arrowReleased(evt);
			}
		},

		getCursorX: function(){
			var x = -1;
			try{
				this.inputNode.focus();
				if (typeof this.inputNode.selectionEnd == "number"){
					x = this.inputNode.selectionEnd;
				}else if (document.selection && document.selection.createRange) {
					var range = document.selection.createRange().duplicate();
					if(range.parentElement() == this.inputNode){
						range.moveStart('textedit', -1);
						x = range.text.length;
					}
				}
			}catch(e){ /* squelch! */ }
			return x;
		},

		setCursorX: function(x){
			try{
				this.inputNode.focus();
				if(!x){ x = 0 }
				if(typeof this.inputNode.selectionEnd == "number"){
				this.inputNode.selectionEnd = x;
				}else if(this.inputNode.createTextRange){
				var range = this.inputNode.createTextRange();
				range.collapse(true);
				range.moveEnd('character', x);
				range.moveStart('character', x);
				range.select();
				}
			}catch(e){ /* squelch! */ }
		},

		postCreate: function(){
			this.domNode.style.display="none";

			if((typeof this.inputWidgetId != 'string')||(this.inputWidgetId.length == 0)){
				var w=dojo.widget.manager.getAllWidgets();
				for(var i=w.length-1; i>=0; i--){
					if(w[i].adjustValue){
						this.inputWidget = w[i];
						break;
					}
				}
			}else{
				this.inputWidget = dojo.widget.getWidgetById(this.inputWidgetId);
			}

			if(typeof this.inputWidget != 'object'){
				dojo.lang.setTimeout(this, "postCreate", 100); 
				return;
			}
			var widgetNode = this.inputWidget.domNode;
			var inputNodes = widgetNode.getElementsByTagName('INPUT');
			this.inputNode = inputNodes[0];

			dojo.event.connect(this.inputNode, "onkeypress", this, "onKeyPress");
			dojo.event.connect(this.inputNode, "onkeydown", this, "onKeyDown");
			dojo.event.connect(this.inputNode, "onkeyup", this, "arrowReleased");

			dojo.event.connect(this.downArrowNode, "onmousedown", this, "downArrowPressed");
			dojo.event.connect(this.downArrowNode, "onmouseup", this, "arrowReleased");
			dojo.event.connect(this.upArrowNode, "onmousedown", this, "upArrowPressed");
			dojo.event.connect(this.upArrowNode, "onmouseup", this, "arrowReleased");
			if(this.inputNode.addEventListener){
				// dojo.event.connect() doesn't seem to work with DOMMouseScroll
				this.inputNode.addEventListener('DOMMouseScroll', dojo.lang.hitch(this, "mouseWheeled"), false); // Mozilla + Firefox + Netscape
			}else{
				dojo.event.connect(this.inputNode, "onmousewheel", this, "mouseWheeled"); // IE + Safari
			}

			// make sure the disconnected node will fit right next to the INPUT tag w/o any interference
			dojo.html.copyStyle(this.relNode, this.inputNode);
			with(this.relNode.style){
				display = "inline";
				position = "relative";
				backgroundColor = "";
				marginLeft = "0px";
				border = "0px";
				paddingLeft = "0px";
			}
			with(this.inputNode.style){
				marginRight = "0px";
				paddingRight = "0px";
				borderRight = "0px";
			}

			// add the disconnected node right after the INPUT tag
			dojo.dom.insertAfter(this.relNode, this.inputNode, false);
			// dummyNode is used to calculate the spinner size
			var dummyNode = this.domNode.ownerDocument.createElement('A');
			dojo.dom.insertAfter(dummyNode, this.relNode, false);
			this.domNode = dojo.dom.removeNode(this.domNode);

			this.resize();
			dojo.event.connect(this.inputNode, "onresize", this, "resize");
			dojo.event.connect(this.inputNode, "onchange", this, "resize");
			dojo.event.connect(window, "onchange", this, "resize");

			var s = dojo.widget.html.stabile.getState(this.widgetId);
			this.setValue(this.getValue());
			if(s){
				this.setState(s);
			}
		}
	}
);
