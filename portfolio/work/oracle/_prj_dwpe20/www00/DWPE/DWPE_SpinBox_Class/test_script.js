var test_class;
 $(document).ready(function() 
{
	runTestScript();
});

function runTestScript()
{
	var $preview=$("#preview");
	
	$preview.css('min-height','75px')

	$preview.removeClass();
	$preview.addClass('SecondaryRegion');
	$('#region-selector').hide();	

	insert();
	commitProperties();
}