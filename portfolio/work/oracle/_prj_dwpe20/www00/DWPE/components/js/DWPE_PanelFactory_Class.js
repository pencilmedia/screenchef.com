/*DWPE_PanelFactory_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_PanelFactory_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_PanelFactory_Class.constructor=DWPE_PanelFactory_Class;
DWPE_PanelFactory_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_PanelFactory_Class()
{
	this._class="DWPE_PanelFactory_Class";
	
	return this;	

}

/*Make an Instance of Panel Factory that others can call on to create buttons*/
DWPE_PanelFactory=new DWPE_PanelFactory_Class();




/*overrides DWPE_Base_Class.update()*/
DWPE_PanelFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}


DWPE_PanelFactory_Class.prototype.setDefaultValue=function(name,value)
{
	if(!this.properties[name]) this.properties[name]=value;
}



DWPE_PanelFactory_Class.prototype.make=function($ux)
{
	

	
	var _class=$ux.attr("class").toLowerCase();
				_class=_class.split(" ");
				_class=_class[0]; //pick off the first value in the css class and use it to make our class
	
	switch(_class)
		{
			case "dwpe-tabset":
			case "dwpe-tabset top":
			case "dwpe-tabset both":
			case "dwpe-tabset bottom":
				this.initializeTabset($ux);
				break;
			
			case "dwpe-trainset":
				this.initializeTrainset($ux);
				break;
			case "dwpe-horizontal-splitter":
			case "dwpe-vertical-splitter":
				this.initializeSplitter($ux);
				break;
						
			case "dwpe-accordion":
				this.initializeAccordion($ux);
				break;	
		
			case "dwpe-header":
				
				this.initializePageheader($ux);
				break;	
			
			case "dwpe-subheader":
				
				this.initializeSubheader($ux);
				break;	
				
			case "dwpe-subsubheader":
				
				this.initializeSubsubheader($ux);
				break;	
		}
	
}

/*For Accordion code see DWPE_Accordion.js*/

/*For Splitter code see DWPE_Splitter.js*/

/*For Tabs code see DWPE_Tabset.js*/

/*For Page headers code see DWPE_PageHeader.js*/

/*For Subheaders code see DWPE_SubHeader.js*/

/*For Sub-subheaders code see DWPE_SubSubHeader.js*/

/*this function stores default definitions for each panel type
 and returns them in JSON format */
DWPE_PanelFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();
	
	switch(type)
	{	
	
				
		case 'TabPanel':	
		
			return {	"_class":"DWPE_PanelFactory_Class",
						"type":"TabPanel",
						"label":"Tab "+i,
						"icon":'none',
						"closureButton":null,
						"content":"inline"
					};
						
			break;

		case 'tabpanel-item':	
		
			return '{	"label":"Tab","icon":"","state":"1","filename":""	}';
						
			break;

		case 'TrainPanel':	
		
			return {	"_class":"DWPE_PanelFactory_Class",
						"type":"TrainPanel",
						"label":"Step "+i,
						"icon":'none',
						"closureButton":null,
						"content":"inline"
					};
						
			break;


		case 'SplitterPanel':
			return {	"_class":"DWPE_PanelFactory_Class",
						"type":"SplitterPanel",
						"label":"New Pane "+i,
						"size":"100px",
						"state":"1",
						"toggle":"one",
						"content":"inline"
					};	
			break;		
			
		case 'PageHeader':		
					return {	"_class":"DWPE_PanelFactory_Class",
						"type":"pageheader",
						"label":"Page Header",					
						"helptext":"Static help text",
						"content":"inline",
						"toolbar":"none",
						"header":"yes",
						"choicelist":"choicelist-no"
					};	
			break;	
			
		case 'SubHeader':	
				return {	"_class":"DWPE_PanelFactory_Class",
					"type":"subheader",
					"label":"Page Sub-Header",					
					"helptext":"Static help text",
					"content":"inline",
					"toolbar":"sample-toolbar-short",
					"header":"yes",
					"disclosure":"show",
					"choicelist":"choicelist-no"
				};	
		break;	
		
		case 'SubsubHeader':		
				return {	"_class":"DWPE_PanelFactory_Class",
					"type":"subsubheader",
					"label":"Page Sub-subheader",					
					"helptext":"Static help text",
					"content":"inline",
					"toolbar":"sample-toolbar-short",
					"choicelist":"choicelist-no",
					"disclosure":"show"
				};	
		break;
			
		case 'AccordionPanel':
			return {	"_class":"DWPE_PanelFactory_Class",
						"type":"AccordionPanel",
						"label":"Accordion Pane "+i,
						"size":"1",
						"icon":"",
						"state":"1",
						"content":"inline",
						"toolbar":"none"
					};	
			break;	
			
		case 'AccordionPanel2':
			return {	"_class":"DWPE_PanelFactory_Class",
						"type":"AccordionPanel",
						"label":"Accordion Pane "+i,
						"size":"1",
						"icon":"",
						"state":"1",
						"content":"inline",
						"toolbar":"sample-toolbar-long"
					};	
			break;			
		default:
			return {};
				
				
	}
	


}



/*this function stores default property sheet definitions for each panel type
 and returns them in JSON format */
DWPE_PanelFactory_Class.prototype.getPropertySheetFields=function(_type)
{

	var i="";
	var icon=DWPE_Utilities.getRandomIcon();


	switch(_type)
	
	{	
						
			
		case 'TabPanel':
			return	[	
			
						
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},
						{type:"hidden",id:"type",  name:"type",  value:_type},
						
						{type:"text",id:"label",name:"Tab&nbsp;Title",value:""},
						{type:"text",id:"icon",name:"Icon",value:""},
						
						{type:"chooser",id:"state",name:"State",value:"1=Enabled&0=Disabled"},
						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}
						
					];
		
		case 'TrainPanel':
			return	[	
			
						
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},
						{type:"hidden",id:"type",  name:"type",  value:_type},
						
						{type:"text",id:"label",name:"Stop&nbsp;Name",value:""},
						//{type:"chooser",id:"state",name:"State",value:"1=Enabled&0=Disabled"},
						{type:"text",id:"icon",name:"Icon",value:""},
						
						//{type: "chooser", id: "required_step", name: "Required Step", value: "0=No&1=Yes" },
						{type: "text", id: "content", name: "Content&nbsp;Source", value: "Inline" },
						{type: "chooser", id: "sequential_override", name: "Sequential Override", value: "0=No&1=Yes" },
						//{type: "chooser", id: "allow_skip", name: "Allow Skipping", value: "0=No&1=Yes" }
						{type:"text",id:"tooltip",name:"Tooltip",value:""}
						
					];
		
		
		case 'SplitterPanel':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},
						{type:"hidden",id:"type",  name:"type",  value:_type},
						
						{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},
						{type:"text",id:"size",name:"Size",value:"100px"},
						{type:"text",id:"state",name:"State",value:"1"},
						{type:"chooser",id:"toggle",name:"Toggle",value:"one=Applies to First Pane&two=Applies to Second Pane"},
						
						
						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"}
						
						
					];
			break;
	
		case 'AccordionPanel':
			return	[	
			
						{type:"hidden",id:"_class",name:"_class",value:"DWPE_PanelFactory"},
						{type:"hidden",id:"type",  name:"type",  value:_type},
						
						{type:"text",id:"label",name:"Pane&nbsp;Title",value:""},
						{type:"text",id:"icon",name:"Icon",value:""},
						{type:"text",id:"size",name:"Size",value:""},
						
						{type:"chooser",id:"state",name:"State",value:"1=Expanded&0=Collapsed"},
						{type:"text",id:"content",name:"Content&nbsp;Source",value:"Inline"},
						{type:"chooser",id:"toolbar",name:"Toolbar",value:"none=None&sample-toolbar-short=Short Toolbar&sample-toolbar-long=Long Toolbar"}
						
						
					];
			break;	
				
		default:
			return [];	
			break;		
	}
	


}


/*when we have a list that holds items containing DWPE object metadata we first
  initialize it so that we can edit the properties of those individual objects*/
DWPE_PanelFactory_Class.prototype.initEditableObjectList=function(listName)
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
				DWPE_PanelFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);
				
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
		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_PanelFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+
		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_PanelFactory_Class.removeSelectedListItem(\''+listName+'\')">'+
		'</p>'
	).insertAfter($list);						
	
	
	$list.attr("initialized",1);

}

/*this function builds a properties form for editing a component from 
within compound components such as toolbar*/
DWPE_PanelFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{
	
	var args=DWPE_PanelFactory.getPropertySheetFields(type);


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
				case 'chooser':
				
					var options=arg.value.split("&");
					
					markup+="<td class='label'>"+arg.name+"</td>";
					markup+="<td><select id='item__"+arg.id+"' ignore_property='1'>";
					
					for(var i in options)
					{
						var option=options[i].split("=");
						markup+="<option value='"+option[0]+"'>"+option[1]+"</option>";
					}
							
					markup+='</select></td>';
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
	
	).change(
	
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




/*---------------------------------------*/
/* Property List Management Class Methods*/
/*---------------------------------------*/

/* On A Select List Box, removes the item the user
   has highlighted and highlights the preceding available item  */
DWPE_PanelFactory_Class.removeSelectedListItem=function(listID)
{
	
	//get list
	var $list=$("#"+listID);
	var i=$list.attr("selectedIndex");
	var len=$list.attr("options").length;
	
	
	//do nothing if list is empty
	if(len==0)
		return;
	
	//remove selected item
	$($list.attr("options")[i]).remove();
	
	//do nothing if list is now empty
	if(len-1<=0) 
		return;
	
	//move selectedIndex
	i=(i-1<0)?0:i-1;
	$list.attr("selectedIndex",i);
	
	//force list to update property sheet
	$list.change();
}

/* On a Select List Box adds an item to the list
	
	Note, code is ButtonFactory specific now, should be made generic later

*/
DWPE_PanelFactory_Class.addListItem=function(listID)
{

	var $list=$("#"+listID);
	var $option=$("<option></option>");
	
	var args=DWPE_PanelFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));
	
	//set options label
	$option.text(args.label);
	
	//set the data 'obj' variable to our args 
	$option.data("obj",args);$list.append($option);

}





