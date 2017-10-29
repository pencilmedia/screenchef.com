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
		$preview.css('padding','5px');
		
	$preview.css('overflow','hidden');
	
	$preview.css('min-height','100px');
	
	$preview.css('max-height','2500px');
	
	addContentURLToPreview('shell2.htm');
	
	commitToPreview();
}
