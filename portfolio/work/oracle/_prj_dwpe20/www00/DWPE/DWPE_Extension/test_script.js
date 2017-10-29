  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{
	$("#preview").hide();
	
	$("#tab-metadata").hide();
	$("#tab-specifications").hide();
	$("#tab-configurable-elements").hide();
	$("#tab-alpha-feedback").hide();
	$("#tab-metadata").hide();
	$("#tab-developer-notes").hide();
	
	
	
	commitToPreview();
}
