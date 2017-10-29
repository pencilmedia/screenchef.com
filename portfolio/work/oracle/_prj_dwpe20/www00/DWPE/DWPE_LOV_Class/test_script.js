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
	$preview.css('background-color','#fff');
	$('#preview input').focus();
	$('#region-selector,.time_stamp_row').hide();	
	insert();
	commitProperties();
	$('ux').addClass('dwpe-lov');

	insert();
	commitProperties();
}