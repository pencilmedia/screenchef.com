  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{


	var itemsList=$("#items");
	
	var $preview=$("#preview");
	
	$preview.css("padding","10px");
	
	
	$("#tab-metadata").hide();
	
	
	/*	make a series of buttons and place them in the preview area
		
		because they live outside of a toolbar, they take on the look
		and feel of command buttons, which is to say, they always show
		their chrome
	
	*/
	
	var markup="";
	var args=null;
	
	//# Text Button
	args=DWPE_ButtonFactory.getDefaultArgsListForType('TextButton');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	
	//# Iconic Button
	args=DWPE_ButtonFactory.getDefaultArgsListForType('IconicButton');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	
	//# Iconic Text Button
	args=DWPE_ButtonFactory.getDefaultArgsListForType('IconicTextButton');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	
	//# Toggle Button
	args=DWPE_ButtonFactory.getDefaultArgsListForType('ToggleButton');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	
	//# Radio Button Group
	args=DWPE_ButtonFactory.getDefaultArgsListForType('RadioButtonGroup');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	
	//# Inline Selector
	args=DWPE_ButtonFactory.getDefaultArgsListForType('InlineSelector');
	markup+=DWPE_ButtonFactory.make(args);
	
	
	$preview.html(markup);
	
	
}
