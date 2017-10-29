ux_data={};

ux_data["sample-toolbar-short"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveleft",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"add",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"edit",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Button"
		}
	]
};




ux_data["table-toolbar"]=
{
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"add",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"edit",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_TableFactory.deleteRow()",
		"target":"_javascript",
		"iconId":"delete",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicButton",
		"label":"Toggle QBE",
		"url":"DWPE_TableFactory.toggleQBE()",
		"target":"_javascript",
		"selected":"1",
		"iconId":"qbe",
		"tooltip":""
		}
		
		
	]
};

ux_data["sample-toolbar-medium"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items":[
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
			}
	]
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"0",
		"label":"Inline Selector",
		"tooltip":"Inline Selector",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
		}
	]
};

ux_data["sample-toolbar-long"]={
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items":[
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
			},
				{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
			}
	]
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"1",
		"label":"In. Sel. Split",
		"tooltip":"Inline Selector Split",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
		},
		{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
		}
	]
};

ux_data["sample-tree-context-menu-short"] = {
	"_class":"DWPE_WindowFactory_Class",
	"type":"contextmenu",
	"items":[{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expand(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapse(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand All Below",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expandAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
    	"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse All Below",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Expand All",
		"key":"",
		"cmd":"javascript::DWPE_Tree.expandAll(DWPE_Tree.getTree($(this)))",
		"item_type":"normal",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Collapse All",
		"key":"",
		"cmd":"javascript::DWPE_Tree.collapseAllBelow(DWPE_Tree.getSelection(DWPE_Tree.getTree($(this))))",
		"item_type":"normal",
		"items":[]
	},{
	    "_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"----------",
		"key":"",
		"item_type":"separator",
		"items":[]
	},{
		"_class":"DWPE_WindowFactory_Class",
		"type":"menu-item",
		"label":"Show as Top",
		"cmd":"javascript::DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree($(this))))",
		"key":"",
		"item_type":"normal",
		"items":[]
	}]
};
    
ux_data["sample-tree-toolbar-short"] = {
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-up",
		"tooltip":"Go Up"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-to-top",
		"tooltip":"Go to Top"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));",
		"target":"_javascript",
		"iconId":"show-as-top",
		"tooltip":"Show as Top"
	}]
};

ux_data["sample-tree-toolbar-long"] = {
	"_class":"DWPE_Toolbar_Class",
	"width":"100%",
	"resizable":"0",
	"items":[{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goUp(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-up",
		"tooltip":"Go Up"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.goToTop(DWPE_Tree.getTree(this));",
		"target":"_javascript",
		"iconId":"go-to-top",
		"tooltip":"Go to Top"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"DWPE_Tree.showAsTop(DWPE_Tree.getFocus(DWPE_Tree.getTree(this)));",
		"target":"_javascript",
		"iconId":"show-as-top",
		"tooltip":"Show as Top"
	},{
    	"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"moveright",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"wrap",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicButton",
		"label":"Iconic Button ",
		"url":"#",
		"target":"_self",
		"iconId":"go-to-top",
		"tooltip":"Iconic Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"RadioButtonGroup",
		"button_style":"IconicButton",
		"label":"Radio Button Group",
		"items": [{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 0",
			"iconId":"add",
			"tooltip":"Radio Button Group"
		},{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 1",
			"url":"#",
			"target":"_self",
			"iconId":"edit",
			"tooltip":"Radio Button Group"
		},{
			"_class":"DWPE_ButtonFactory_Class",
			"type":"IconicButton",
			"label":"Iconic Button 2",
			"url":"#",
			"target":"_self",
			"iconId":"delete",
			"tooltip":"Radio Button Group"
		}]
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"TextButton",
		"label":"Text Button ",
		"url":"#",
		"iconId":"duplicate",
		"target":"_self",
		"tooltip":"Text Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"InlineSelector",
		"button_style":"1",
		"label":"In. Sel. Split",
		"tooltip":"Inline Selector Split",
		"url":"#",
		"target":"_self",
		"iconId":"freezecolumn"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToggleButton",
		"button_style":"IconicTextButton",
		"label":"Toggle Button",
		"url":"#",
		"target":"_self",
		"iconId":"warning",
		"tooltip":"Toggle Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"ToolbarSeparator",
		"label":"Toolbar Separator"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"delete",
		"tooltip":"Iconic Text Button"
	},{
		"_class":"DWPE_ButtonFactory_Class",
		"type":"IconicTextButton",
		"label":"Iconic TB",
		"url":"#",
		"target":"_self",
		"iconId":"movetop",
		"tooltip":"Iconic Text Button"
	}]
};