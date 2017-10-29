var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var $preview=$("#preview");

	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	

	
	insert();
	commitProperties();
}