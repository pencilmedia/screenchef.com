  var test_class;
 
 $(document).ready(function() 
 	{
	  
		
		runTestScript();
		
		
		
		
	 });


function runTestScript()
{
	//setup properties
	
	$("#preview").addClass("dwpe-toolbar");  // show like we are a toolbar button
	$("#preview").css("display","block");	//but keep the preview area a block element
	
	
	$("#preview").removeClass("PrimaryRegion");
	$("#preview").addClass("SecondaryRegion");
	$("#region_style").val("Secondary");
	
	
	commitProperties();
	
}



