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
	$preview.css({'min-height':300,'padding':'5px'});
	
	$('#region-selector').hide();	

	$('#tab-metadata').hide();	

	
	
	
	//add markup
	
	
	//insert();
	commitToPreview();
}

function manageFormState(type)
{
	

}