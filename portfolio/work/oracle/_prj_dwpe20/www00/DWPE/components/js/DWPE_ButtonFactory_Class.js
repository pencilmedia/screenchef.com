/*DWPE_ButtonFactory_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_ButtonFactory_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_ButtonFactory_Class.constructor=DWPE_ButtonFactory_Class;
DWPE_ButtonFactory_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_ButtonFactory_Class()
{
	this._class="DWPE_ButtonFactory_Class";
	
	return this;	

}

/*Make an Instance of Button Factory that others can call on to create buttons*/
DWPE_ButtonFactory=new DWPE_ButtonFactory_Class();

/*returns a string with:
   1. spaces converted to &nbsp;
   2. underscore+[character] replaced with underlined tag markup around [character]
*/
DWPE_ButtonFactory_Class.prototype.formatString=function(str)
{
	
	if(str)
		str=str.replace(/ /g,"&nbsp;")
			  .replace(/_(.)/g,"<u>$1</u>");
	
	return str;
	
}


/*this is a helper function to make a clickable region; most buttons use it*/
DWPE_ButtonFactory_Class.prototype.makeClickableRegion=function(content,render_style)
{
	var newline="\r\n";
		tab="\t";
	
	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";


	var className=this.buttonClass;
		if(this.properties.state=="0")
			className+=" Button_Disabled";
		else if(this.properties.state=="2")	
			className+=" Button_Active";
	
	//var markup="<li id='"+this.getID()+"' class='"+className+"' ";
	var markup="\n<"+tag+" class='"+className+"' ";
	
	if(this.properties.tooltip)
		markup+=" title='"+this.properties.tooltip+"' ";
	
	//only create click markup when an action(url) has been defined
	/*
	if(this.properties.url.length>0) 
	{
		
		
		if(this.properties.target=="_javascript")
		{
			var url=DWPE_Utilities.makeJavascriptSafe(this.properties.url);
			markup+=" onmousedown='DWPE_Utilities.exec(this);' cmd='"+url+"'>";
			//console.log(markup);	
		}
		else
		{	
			
			markup+="onclick='DWPE_Utilities.loadURL(this);' url='"+this.properties.url+"' target='"+this.properties.target+"'>";
			
		}
	}
	*/
	
	
	if(this.properties.command)
		markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(this.properties.command)+"'";
	
	markup+=">";
	
	markup+=content;
	if(!render_style || render_style=="command-button")
		markup+=DWPE_Base_Class.getArgsAsString(this.properties);	
	
	markup+="</"+tag+">";
	return markup;

}


/*overrides DWPE_Base_Class.update()*/
DWPE_ButtonFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}



/*overrides DWPE_Base_Class.make()*/
DWPE_ButtonFactory_Class.prototype.make=function(args,render_style)
{
	
	
	//load the arguments into this object's properties list
	this.properties={};
	for(var argName in args)
	{
		this.properties[argName]=args[argName];
		
		
	}
	
	//call this button type's constructor method
	
	switch(args.type)
	{
	
		case 'TextButton':
			return this.generateTextButtonMarkup(args,render_style);
			break;
		case 'InlineSelector':
			return this.generateInlineSelectorButtonMarkup(args,render_style);
			break;
		case 'RadioButtonGroup':
			return this.generateRadioButtonGroupMarkup(args,render_style);
			break;	
		case 'IconicButton':
			return this.generateIconicButtonMarkup(args,render_style);
			break;
		case 'IconicTextButton':
			return this.generateIconicTextButtonMarkup(args,render_style);
			break;
		case 'ToggleButton':
			return this.generateToggleButtonMarkup(args,render_style);
			break;
		case 'ToolbarSeparator':
			return this.generateToolbarSeparatorMarkup(args,render_style);
			break;	
		default:
			args.label=this.formatString(args.label+" [could not resolve button type]");
			return this.generateTextButtonMarkup(args,render_style);
			break;
	
	}

}

DWPE_ButtonFactory_Class.prototype.setDefaultValue=function(name,value)
{
	if(!this.properties[name]) this.properties[name]=value;
}


DWPE_ButtonFactory_Class.prototype.generateToggleButtonMarkup=function(args,render_style)
{
	
//	var markup="<ux class='DWPE_Button ToggleButton' style='padding:0px;margin:0px;' "+
//					"onclick='DWPE_Toolbar_Class.toggle(event,this)'><ul>";
	
	//var tag=(render_style && render_style=="toolbar-item")?"li":"ux";
	
	
	var item={}
		item.label=this.formatString(args.label);
		item.command=args.command;
		item.tooltip=args.tooltip;
		item.icon=args.icon;
		
		args.items=[];
		args.items.push(item);
		
	
	/*we pass an inline style here as it's the only way 
	  to control no padding on an UX containing a UL; 
	  CSS does not have a parent selector like UX < UL*/
	
	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";
	
	
	var _className="dwpe-button ToggleButton";
		_className+=(this.properties.state==0)?" Button_Disabled":"";
		
	
	var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+
					//" onclick='DWPE_Toolbar_Class.toggle(event,this)'>"+
					"<ul>";
	
	
	
	/*preserve a local copy of the radio button group properties 				
	  before we use DWPE_ButtonFactory to make the group's buttons*/
	var props=args; 
	var button_style=props.button_style;
	var _class="DWPE_ButtonFactory_Class";
	var state=(props.state!=null)?props.state:"1";
	var selected=parseInt(props.selected);
	
	for(var index in props.items)
	{
	
		var item=props.items[index];
		
		//the radio button group imposes _class and type
		item.type=button_style;
		item._class=_class;
		//args.state=state;
		item.state=state;
	
		
		//args.selected=(parseInt(index)+1==selected)?"1":"0";
		
		markup+=this.make(item,"toolbar-item");
	
		
	}	
	
	
	markup+="</ul>";
	if(!render_style || render_style=="command-button")
		markup+=DWPE_Base_Class.getArgsAsString(args);
	
	markup+="</"+tag+">";
		
	return markup;

}

DWPE_ButtonFactory_Class.prototype.generateRadioButtonGroupMarkup=function(args,render_style)
{
	/*
		procedure here is to build a list of buttons that belong to a group;
		the buttons function as they normally would, except that onclick,
		the parent of the buttons, which is an encompassing LI tag, also triggers a call 
		to a helper function (DWPE_Toolbar_Class.toggleOnOff) 
		that manages the state of all buttons in the group
		
		the result is that buttons in a button group are free to launch a url
		or call their own JavaScript just like regular buttons, but the state of 
		the buttons is managed in the helper function
		
	*/
	
	
	/*we pass an inline style here as it's the only way 
	  to control no padding on an UX containing a UL; 
	  CSS does not have a parent selector like UX < UL*/
	
	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";
	
	
	var _className="dwpe-button RadioButtonGroup";
		_className+=(this.properties.state==0)?" Button_Disabled":"";
		
	
	var markup="\n<"+tag+" class='"+_className+"' style='padding:0px;margin:0px;' >"+
					//" onclick='DWPE_Toolbar_Class.toggle(event,this)'>"+
					"<ul>";
	
	
	
	/*preserve a local copy of the radio button group properties 				
	  before we use DWPE_ButtonFactory to make the group's buttons*/
	var props=args; 
	var button_style=props.button_style;
	var _class="DWPE_ButtonFactory_Class";
	var state=(props.state!=null)?props.state:"1";
	var selected=parseInt(props.selected);
	
	for(var index in props.items)
	{
	
		var item=props.items[index];
		
		//the radio button group imposes _class and type
		item.type=button_style;
		item._class=_class;
		item.state=state;
		
	
		
		//args.selected=(parseInt(index)+1==selected)?"1":"0";
		
		markup+=this.make(item,"toolbar-item");
	
		
	}	
	
	
	markup+="</ul>";
	if(!render_style || render_style=="command-button")
		markup+=DWPE_Base_Class.getArgsAsString(args);
	
	markup+="</"+tag+">";
		
	return markup;
}



DWPE_ButtonFactory_Class.prototype.generateInlineSelectorButtonMarkup=function(args,render_style)
{
	this.setDefaultValue("url","");
	this.setDefaultValue("target","");
	
	this.buttonClass="InlineSelectorInner";
	
	var split=(args.command && args.command.length>0)?"Split":"";
	
	var outer_class="";
	var label="<span class='label'>"+this.formatString(args.label)+"</span>";
	var icon=DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip);
	
	switch(args.button_style)
	{	
	
		case "IconicTextButton": //Iconic Text Button Selector with Split
			outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";
			break;
			
		case "IconicButton": //Iconic Button Selector with Split
			outer_class+="dwpe-button InlineSelector"+split+" IconicButton ";
			label="";
			break;
			
		case "TextButton": //Text Button Selector 
		default:
			outer_class+="dwpe-button InlineSelector"+split;
			icon="";
			break;
	}
	
	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";
	
	
	outer_class+=(args.state=="0")?" Button_Disabled":"";
		
	var markup="";
	markup+="\n<"+tag+" class='"+outer_class+"' ";
	//markup+=" onmousedown='DWPE_Toolbar_Class.showInlineSelectorMenu(event,this)' ";
	
	if(args.command)
		markup+=" cmd='"+DWPE_Utilities.makeJavascriptSafe(args.command)+"'";
	
	if(args.tooltip)
		markup+=" title='"+args.tooltip+"'";
	markup+=">";
	
	markup+=icon+label+"<span class='arw'>&nbsp;</span>";
	
	if(args.items)
	{
		markup+="<ul class='inline-selector-menu'>";
		for(var i=0;i<args.items.length;i++)
		{	var item=args.items[i];
				item.item_type="normal";
			markup+=DWPE_WindowFactory.generateMenuItemMarkup(item,0);
		}
		markup+="</ul>";
	}
	
	if(!render_style || render_style=="command-button")
		markup+=DWPE_Base_Class.getArgsAsString(args);
	
	
	markup+="</"+tag+">";
	
	return markup;
}


DWPE_ButtonFactory_Class.prototype.generateTextButtonMarkup=function(args,render_style)
{
	//this.setDefaultValue("url","");
	//this.setDefaultValue("target","");
	
	this.properties=args;
	this.buttonClass="dwpe-button textbutton";
	var markup=this.makeClickableRegion(this.formatString(args.label),render_style);
	
	return markup;
}


DWPE_ButtonFactory_Class.prototype.generateIconicButtonMarkup=function(args,render_style)
{
	//this.setDefaultValue("url","");
	//this.setDefaultValue("target","");
	
	this.properties=args;
	this.buttonClass="dwpe-button IconicButton";
	var markup=this.makeClickableRegion(DWPE_Utilities.getIconMarkup(args.icon,"",args.tooltip),render_style);
	
	return markup;
}


DWPE_ButtonFactory_Class.prototype.generateIconicTextButtonMarkup=function(args,render_style)
{
	//this.setDefaultValue("url","");
	//this.setDefaultValue("target","");
	
	this.properties=args;
	this.buttonClass="dwpe-button IconicTextButton";
	var content=DWPE_Utilities.getIconMarkup(this.properties.icon,"",args.tooltip) + ' <span>' + this.formatString(args.label) + '</span>';
	var markup=this.makeClickableRegion(content,render_style);

	return markup;
}

DWPE_ButtonFactory_Class.prototype.generateToolbarSeparatorMarkup=function(args,render_style)
{
	var tag=(render_style && render_style=="toolbar-item")?"li":"ux";
	
	return "\n<"+tag+" class='dwpe-button Separator'><span></span></"+tag+">";
}


/*this function stores default definitions for each button type
 and returns them in JSON format */
DWPE_ButtonFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	var icons=new Array();
		icons[0]=DWPE_Utilities.getRandomIcon();
		icons[1]=DWPE_Utilities.getRandomIcon();
		icons[2]=DWPE_Utilities.getRandomIcon();
	

	switch(type)
	{	
	
		
		
		/*range 100 to 200 is reserved for menu button*/
		case 'MenuButton':
		case 100: 
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"MenuButton",
						"label":"MenuButton",
						"items":[	{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"","icon":"add"},
									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"","icon":"edit"},
									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"","icon":"delete"}
								]};
			break;
	
	
		/*range 0 to 100 is reserved for toolbar buttons*/
		
		case 'ToggleButton':		
		case 6:	
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"ToggleButton",
						"button_style":"IconicTextButton",
						"label":"Toggle Button",
						"icon":"add",
						"command":"",
						"tooltip":""
					};	
						
						
		
		case 'ToolbarSeparator':
		case 5: 
			return {    "_class":"DWPE_ButtonFactory_Class",
						"type":"ToolbarSeparator",
						"label":"Toolbar Separator"	};
			break;
		
		
		case 'InlineSelector':		
		case 4:	
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"InlineSelector",
						"label":"Inline Selector",
						"tooltip":"Inline Selector",
						"command":"",
						"icon":"add"
					};	
			break;
			
		case 'InlineSelectorSplit':		
		case 4:	
			return {
					"_class":"DWPE_ButtonFactory_Class",
					"type":"InlineSelector",
					"button_style":"5",
					"label":"Inline Selector Split",
					"command":"",
					"icon":"add",
					"state":"1"
					};	
			break;	
		
			
		case 'RadioButtonGroup':		
		case 3:	
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"RadioButtonGroup",
						"button_style":"IconicButton",
						"label":"Radio Button Group",
						"items":[	{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 0","command":"js::alert('add')","icon":"add","tooltip":"Radio Button Group"},
									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 1","command":"js::alert('edit')","icon":"edit","tooltip":"Radio Button Group"},
									{"_class":"DWPE_ButtonFactory_Class","type":"IconicButton","label":"Iconic Button 2","command":"js::alert('delete')","icon":"delete","tooltip":"Radio Button Group"}
								]};	
			break;					
			
		case 'IconicTextButton':
		case 2:
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"IconicTextButton",
						"label":"Iconic Text Button",
						"icon":"add",
						"command":"",
						"tooltip":""
						};	
			break;
		case 'IconicButton':
		case 1:
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"IconicButton",
						"label":"Iconic Button",
						"icon":"add",
						"command":"",
						"tooltip":""
						};
			break;
			
		case 'toolbar-item':
			return '{	"label":"Item","state":"1","itemtype":"TextButton","command":"","icon":"","tooltip":"","button_style":"TextButton","items":[]}';	
			break;		
			
		case 'TextButton':
		case 0:
		default:
			return {	"_class":"DWPE_ButtonFactory_Class",
						"type":"TextButton",
						"label":"Text Button",
						"command":"",
						"tooltip":""};	
			break;				
		
			
	}
	


}



/*this function stores default property sheet definitions for each button type
 and returns them in JSON format */
DWPE_ButtonFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();

	switch(_type)
	
	{	
						
			
		case 'MenuButton':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},
						{type:"hidden",id:"type",  name:"type",  value:"MenuButton"},
						{type:"text",id:"label",name:"Label",value:""},
						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},
						{type:"text",id:"icon",name:"Icon",value:""}
						
					];
			break;
		case 'IconicTextButton':
		case 'IconicButton':
		case 'TextButton':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_ButtonFactory"},
						{type:"hidden",id:"type",  name:"type",  value:_type},
						{type:"text",id:"label",name:"Label",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},
						{type:"text",id:"icon",name:"Icon",value:""}
						
					];
			break;
			
		case 'IconicTextButton-form':
		case 'IconicButton-form':
		case 'TextButton-form':
			return	[	
						{type:"chooser",id:"type",name:"Type",value:"TextButton=Text Button&IconicButton=Iconic Button&IconicTextButton=Iconic Text Button"},
						{type:"text",id:"label",name:"Label",value:""},
						{type:"text",id:"tooltip",name:"Tooltip",value:""},
						{type:"text",id:"cmd",name:"Command",value:"",help:"(javascript::alert('hi') or url::http://oracle.com)"},
						{type:"text",id:"icon",name:"Icon",value:""}
						
					];
			break;		
		
		case 'InlineSelector':
		case 'ToggleButton':
		case 'ToolbarSeparator':
		case 'RadioButtonGroup':		
		default:
			return [];	
			break;		
	}
	


}


/*when we have a list that holds items containing DWPE object metadata we first
  initialize it so that we can edit the properties of those individual objects*/
DWPE_ButtonFactory_Class.prototype.initEditableObjectList=function(listName)
{
	/*
		when an item in the items list is chosen, populate
		the fields in the items-table 
	*/

	var $list=$("#"+listName);
	if($list.attr("initialized")==1) return;
	
	$list.change(
		function(event)
			{
				var $select=$(this);
				var $option=$($select.attr("options")[$select.attr("selectedIndex")]);
				
				
				
				var args=$option.data("obj");
				
				//create the prop sheet
				DWPE_ButtonFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);
				
				//populate the prop sheet
				for(var argName in args)
				{
					/*we prepend 'item__' to the id so as not to interfere 
					 with those same properties that the parent may define*/
					 
					$("#item__"+argName).val(args[argName]);
				}
			
			}
		);

	
	//insert the add and delete controls immediately after the list
	$(	'<p align="right" id="addRemoveListItems">'+
		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="addListItem(\''+listName+'\')">&nbsp;&nbsp;'+
		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="removeSelectedListItem(\''+listName+'\')">'+
		'</p>'
	).insertAfter($list);						
	
	
	$list.attr("initialized",1);

}

/*this function builds a properties form for editing a component from 
within compound components such as toolbar*/
DWPE_ButtonFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{
	
	var args=DWPE_ButtonFactory.getPropertySheetFields(type);


	var markup="";
	
	
	markup+='<table id="'+listName+'-selected-item-properties"  cellpadding="0" cellspacing="0">';
	
	if(args.length==0)
		markup+="<tr><td>No property sheet exists for this item type.</td></tr>";
	else
	{
		for(var argName in args)
		{
			var arg=args[argName];
			
		
			
			markup+="<tr>";
				
			
			switch(arg.type)
			{
				case 'select':
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+='<td><select id="item__'+arg.id+'" ignore_property="1">'+
								arg.value+
							'</select></td>';
					break;
				
				case 'hidden':
					markup+='<input type="hidden" id="item__'+arg.id+'" ignore_property="1">';
					break;
				case 'text':
				default:
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+='<td><input type="text" id="item__'+arg.id+'" ignore_property="1"></td>';
					break;
			}
			
			markup+="</tr>";
		}
	}	
	markup+="</table>";						
				
	//insert markup inside our properties sheet container			
	$("#"+listName+"-property-sheet").html(markup).show("slide");
	
	
	
	/*wire up our properties sheet & list*/
	
	
	
				
	/*
		when a value in a field on our list changes,
		collect all field values and post them on the
		selected item's .data("obj") variable
		
		
	*/		
			
	$("#"+listName+"-selected-item-properties :input").keyup(
	
		function()
		{
				
			var args={};
			$("#"+listName+"-selected-item-properties :input").each(
			
				function()
				{
					var $fld=$(this);
					
					/*strip off the 'item__' prefix 
					   from the fld id to form the property name*/
					var propName=$fld.attr("id").replace(/item__/,"");
					
					args[propName]=$fld.val();
				}
			
			);
			
			var $select=$("#items");
			var i=$select.attr("selectedIndex");
			if(i>-1)
			{
				$option=$( $select.attr("options")[i]);
				$option.data("obj",args);
				$option.text(args.label);
			
			}
		}	
	
	)



}







