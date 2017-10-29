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
	
	$("#preview").addClass("dwpe-toolbar");  // show like we are a toolbar button
	$("#preview").css("display","block");	//but keep the preview area a block element
	
	var itemsList=$("#items");
	
	
	for(var i=0;i<3;i++)
	{
		var myItem=DWPE_ButtonFactory.getDefaultArgsListForType("IconicButton");
		
		
		var option=	$('<option></option>').html( myItem.label );
			option.data("obj",myItem);
			itemsList.append(option);
	}
	
	
	
	commitProperties();
	
}



