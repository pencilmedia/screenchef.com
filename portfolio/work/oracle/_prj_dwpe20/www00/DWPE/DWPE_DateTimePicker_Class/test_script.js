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
	$('#default_date').change(dateChange);
}

function dateChange()
{
	if (!this.value)
		$('#display_time').val('');
}