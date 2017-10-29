/*DWPE_BaseFactory_Class.js*/




/*Set the class that our class will inherit from*/
DWPE_BaseFactory_Class.prototype=new DWPE_Base_Class();

/*Set and Define our own class constructor*/
DWPE_BaseFactory_Class.constructor=DWPE_BaseFactory_Class;
DWPE_BaseFactory_Class.prototype._super=DWPE_Base_Class.prototype;
function DWPE_BaseFactory_Class()
{
	this._class="DWPE_BaseFactory_Class";
	
	return this;	

}

/*Make an Instance of Window Factory that others can call on to create buttons*/
DWPE_BaseFactory=new DWPE_BaseFactory_Class();




/*overrides DWPE_Base_Class.update()*/
DWPE_BaseFactory_Class.prototype.update=function()
{
	this.markup=this.make(this.properties);
}



/**/
DWPE_BaseFactory_Class.prototype.make=function($ux)
{

}


/*returns the first class in the class list*/
DWPE_BaseFactory_Class.prototype.getRootClass=function(class_string)
{
	var _class=class_string.toLowerCase();
				_class=_class.split(" ");
				_class=_class[0]; //pick off the first value in the css class and use it to make our class
	return _class;

}

/*this function stores default definitions for each object type
 and returns them in JSON format */
DWPE_BaseFactory_Class.prototype.getDefaultArgsListForType=function(type)
{

	
	
}



/*this function stores default property sheet definitions for each panel type
 and returns them in JSON format */
DWPE_BaseFactory_Class.prototype.getPropertySheetFields=function(_type)
{}


/*when we have a list that holds items containing DWPE object metadata we first
  initialize it so that we can edit the properties of those individual objects*/
DWPE_BaseFactory_Class.prototype.initEditableObjectList=function(listName)
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
				DWPE_BaseFactory.displaySelectedListItemEditablePropertiesSheet(listName,args.type);
				
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
		'<input title="Add New Item" class="ui-state-default ui-corner-all"  type="button" value="+" onclick="DWPE_BaseFactory_Class.addListItem(\''+listName+'\')">&nbsp;&nbsp;'+
		'<input title="Remove Selected Item" class="ui-state-default ui-corner-all"   type="button" value="-" onclick="DWPE_BaseFactory_Class.removeSelectedListItem(\''+listName+'\')">'+
		'</p>'
	).insertAfter($list);						
	
	
	$list.attr("initialized",1);

}

/*this function builds a properties form for editing a component from 
within compound components such as toolbar*/
DWPE_BaseFactory_Class.prototype.displaySelectedListItemEditablePropertiesSheet=function(listName,type)
{
	
	var args=DWPE_BaseFactory.getPropertySheetFields(type);


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
DWPE_BaseFactory_Class.removeSelectedListItem=function(listID)
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
DWPE_BaseFactory_Class.addListItem=function(listID)
{

	var $list=$("#"+listID);
	var $option=$("<option></option>");
	
	var args=DWPE_BaseFactory.getDefaultArgsListForType($list.attr('onAdd_AddType'));
	
	//set options label
	$option.text(args.label);
	
	//set the data 'obj' variable to our args 
	$option.data("obj",args);$list.append($option);

}





