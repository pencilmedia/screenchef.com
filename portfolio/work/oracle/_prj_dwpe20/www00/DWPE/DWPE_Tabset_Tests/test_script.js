  var test_class;
 
 $(document).ready(function() 
 	{
	   	
		
		runTestScript();
		
		
	 });


function runTestScript()
{

	$("#tab-metadata").hide();
	$("#region-selector").hide();
	
	
	var $preview=$("#preview");
	
	$preview.css('mIN-height','100px');
	
	$preview.css('max-height','500px');
	addContentToPreview('#three-sibling-tabsets');

	
	
	commitToPreview();
}
