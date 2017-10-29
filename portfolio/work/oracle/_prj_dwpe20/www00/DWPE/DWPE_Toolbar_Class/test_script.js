  var test_class;
 
 $(document).ready(function() 
 	{
	  
		
		runTestScript();
		

	 });


function runTestScript()
{
	//setup properties
	
	/*
	$("#width").val("100%");
	$("#alignment").val("L");
	*/
	
	$("#preview").removeClass("PrimaryRegion");
	$("#preview").addClass("SecondaryRegion");
	$("#preview").css("overflow","hidden");
	$("#region_style").val("Secondary");
	
	
	
	var $tree=$("#test-tree")
	
	$tree.data(  "default-object", DWPE_ButtonFactory.getDefaultArgsListForType("TextButton") );
	$tree.data(  "properties-sheet-template",	 DWPE_ButtonFactory.getPropertySheetFields('TextButton') ); 	

	
	var myItem;
	
	var data=new Array();
	
	
	//icons
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicButton");
	data.push(myItem);
	
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicButton");
	data.push(myItem);
	
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicButton");
	data.push(myItem);
	
	
	//Sep
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToolbarSeparator");
	data.push(myItem);
	
	//Radio Button Group
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("RadioButtonGroup");
	data.push(myItem);
	
	
	
	//Sep
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToolbarSeparator");
	data.push(myItem);
	
	//TextButton
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("TextButton");
	data.push(myItem);
	
	//Inline Selector
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("InlineSelector");
	myItem.command="js::alert(1)"
	var items=[];
		items.push(DWPE_ButtonFactory.getDefaultArgsListForType("TextButton"));
		items.push(DWPE_ButtonFactory.getDefaultArgsListForType("TextButton"));
		items.push(DWPE_ButtonFactory.getDefaultArgsListForType("TextButton"));
		myItem.items=items;
	data.push(myItem);
	
	//Sep
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToolbarSeparator");
	data.push(myItem);
	
	//Toggle
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToggleButton");
	data.push(myItem);
	
	//Sep
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToolbarSeparator");
	data.push(myItem);
	
	//Iconic Text Button
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicTextButton");
	data.push(myItem);
	
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicTextButton");
	data.push(myItem);
	

	//Sep
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("ToolbarSeparator");
	data.push(myItem);
	
	//TextButton
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("TextButton");
	data.push(myItem);
	


	//Radio Button Group
	myItem=DWPE_ButtonFactory.getDefaultArgsListForType("RadioButtonGroup");
	data.push(myItem);
	
	$tree.data('tree-data',data);
	
	makeEditableTree( $("#test-tree") );
		
	insert();	
	commitProperties();	
	
}

