/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

dojo.provide("dojo.namespaces.dojo");
//dojo.require("dojo.namespace");

(function(){
	//mapping of all widget short names to their full package names
	var map = {
		html: {
			"accordioncontainer": "dojo.widget.AccordionContainer",
			"treerpccontroller": "dojo.widget.TreeRPCController",
			"accordionpane": "dojo.widget.AccordionPane",
			"button2": "dojo.widget.Button2",
			"button": "dojo.widget.Button",
			"chart": "dojo.widget.Chart",
			"checkbox": "dojo.widget.Checkbox",
			"civicrmdatepicker": " dojo.widget.CiviCrmDatePicker",
			"colorpalette": "dojo.widget.ColorPalette",
			"combobox": "dojo.widget.ComboBox",
			"contentpane": "dojo.widget.ContentPane",
			"contextmenu": "dojo.widget.ContextMenu",
			"datepicker": "dojo.widget.DatePicker",
			"debugconsole": "dojo.widget.DebugConsole",
			"dialog": " dojo.widget.Dialog",
			"docpane": "dojo.widget.DocPane",
			"domwidget": "dojo.widget.DomWidget",
			"dropdownbutton": "dojo.widget.DropdownButton",
			"editor2": "dojo.widget.Editor2",
			"editor2toolbar": "dojo.widget.Editor2Toolbar",
			"editor": "dojo.widget.Editor",
			"editortree": " dojo.widget.EditorTree",
			"editortreecontextmenu": "dojo.widget.EditorTreeContextMenu",
			"editortreenode": "dojo.widget.EditorTreeNode",
			"fisheyelist": " dojo.widget.FisheyeList",
			"editortreecontroller": "dojo.widget.EditorTreeController",
			"googlemap": "dojo.widget.GoogleMap",
			"htmlwidget": "dojo.widget.HtmlWidget",
			"editortreeselector": "dojo.widget.EditorTreeSelector",
			"floatingpane": "dojo.widget.FloatingPane",
			"hslcolorpicker": "dojo.widget.HslColorPicker",
			"inlineeditbox": "dojo.widget.InlineEditBox",
			"layoutcontainer": "dojo.widget.LayoutContainer",
			"linkpane": "dojo.widget.LinkPane",
			"manager": "dojo.widget.Manager",
			"popupmenu2": "dojo.widget.Menu2",
			"menuitem2": "dojo.widget.Menu2",
			"menuseparator2": "dojo.widget.Menu2",
			"menubar2": "dojo.widget.Menu2",
			"menubaritem2": "dojo.widget.Menu2",
			"menu": "dojo.widget.Menu",//deprecated
			"menuitem": "dojo.widget.MenuItem",
			"monthlyCalendar": "dojo.widget.MonthlyCalendar",
			"parse": "dojo.widget.Parse",
			"popupbutton": "dojo.widget.PopUpButton",
			"richtext": "dojo.widget.RichText",
			"resizehandle": "dojo.widget.ResizeHandle",
			"resizabletextarea": "dojo.widget.ResizableTextarea",
			"slideshow": "dojo.widget.SlideShow",
			"sortabletable": "dojo.widget.SortableTable ",
			"simpledropdownbuttons": "dojo.widget.SimpleDropdownButtons",
			"splitcontainer": "dojo.widget.SplitContainer",
			"svgbutton": "dojo.widget.SvgButton ",	
			"svgwidget": "dojo.widget.SvgWidget",
			"tabcontainer": "dojo.widget.TabContainer",
			"taskbar": "dojo.widget.TaskBar",
			"timepicker": " dojo.widget.TimerPicker",
			"titlepane": "dojo.widget.TitlePane",
			"toggler": "dojo.widget.Toggler",
			"toolbar": "dojo.widget.Toolbar",
			"tooltip": "dojo.widget.Tooltip",
			"tree": "dojo.widget.Tree",
			"treebasiccontroller": "dojo.widget.TreeBasicController",
			"treecontextmenu": "dojo.widget.TreeContextMenu",
			"treeselector": "dojo.widget.TreeSelector",
			"treecontrollerextension": "dojo.widget.TreeControllerExtension",
			"treenode": "dojo.widget.TreeNode",
			"validate": "dojo.widget.validate",
			"treeloadingcontroller": "dojo.widget.TreeLoadingController",
			"widget": "dojo.widget.Widget",
			"wizard": "dojo.widget.Wizard",
			"yahoomap": "dojo.widget.YahooMap"
		},
		svg: {
			"chart": "dojo.widget.svg.Chart",
			"hslcolorpicker": "dojo.widget.svg.HslColorPicker"
		},
		vml: {
			"chart": "dojo.widget.vml.Chart"
		}
	};

	function dojoNamespaceResolver(name, domain){
		if(!domain){ domain="html"; }
		return map[domain][name];    
	}

	dojo.defineNamespace("dojo", "src", "dojo", dojoNamespaceResolver);

	dojo.addDojoNamespaceMapping = function(shortName, fullName){
		map[shortName]=fullName;    
	};
})();
