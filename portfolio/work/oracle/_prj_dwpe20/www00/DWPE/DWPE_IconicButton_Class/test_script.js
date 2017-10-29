var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });
	 
	 function runTestScript()
	{
	
		$("#preview").addClass("dwpe-toolbar");  // show like we are a toolbar button
		$("#preview").css("display","block");	//but keep the preview area a block element
		
		insert();
		commitProperties();
	}
