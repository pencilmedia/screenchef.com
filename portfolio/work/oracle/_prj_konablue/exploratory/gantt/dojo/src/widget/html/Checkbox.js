/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.provide("dojo.widget.html.Checkbox");

dojo.require("dojo.widget.*");
dojo.require("dojo.event");
dojo.require("dojo.html");

dojo.widget.defineWidget(
	"dojo.widget.html.Checkbox",
	dojo.widget.HtmlWidget,
	{
		templatePath: dojo.uri.dojoUri('src/widget/templates/HtmlCheckBox.html'),
		templateCssPath: dojo.uri.dojoUri('src/widget/templates/HtmlCheckBox.css'),

		// parameters
		disabled: "enabled",
		name: "",
		checked: false,
		tabIndex: "0",

		inputNode: null,

		postMixInProperties: function(){
			// set the variables referenced by the template
			this.disabledStr = this.disabled=="enabled" ? "" : "disabled";
					
		},
		postCreate: function(args, frag) {
			// find any associated label and create a labeleby relationship
			var label = document.getElementsByTagName("label");
			if (label && label[0].htmlFor != undefined) {
				label[0].id = (label[0].htmlFor + "label"); 
				dojo.widget.wai.setAttr(this.domNode, "waiState", "labelledby", label[0].id);
			}
		},

		fillInTemplate: function(){
			this._setInfo();
		},

		onClick: function(e){
			if(this.disabled == "enabled"){
				this.checked = !this.checked;
				this._setInfo();
			}
			e.preventDefault();
		},

		keyPress: function(e){
			var k = dojo.event.browser.keys;
			if(e.keyCode==k.KEY_SPACE || e.charCode==k.KEY_SPACE){
	 			this.onClick(e);
	 		}
		},

		// set CSS class string according to checked/unchecked and disabled/enabled state
		_setInfo: function(){
			var prefix = (this.disabled == "enabled" ? "dojoHtmlCheckbox" : "dojoHtmlCheckboxDisabled");
			var state = prefix + (this.checked ? "On" : "Off");
			dojo.html.setClass(this.domNode, "dojoHtmlCheckbox " + state);
			this.inputNode.checked = this.checked;
			dojo.widget.wai.setAttr(this.domNode, "waiState", "checked", this.checked);
		}
	}
);

