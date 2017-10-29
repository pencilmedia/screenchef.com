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
	$preview.css({'min-height':400,'padding':'5px'});
	
	$('#region-selector').hide();	


	 $("#type").change(
	 
	 	function()
	 	{
	 		var type=$(this).val();
	 		
	 		switch(type)
			{
				case 'error-dialog':
				case 'info-dialog':
				case 'warning-dialog':
				case 'confirm-dialog':
					$("#title").attr('disabled',1);
					$("#mode").attr('disabled',1);
					$("#resizable").attr('disabled',1).val(' ');
					
					
					break;
				case 'dialog':
				default:	
					$("#title").removeAttr('disabled');
					$("#mode").removeAttr('disabled');
					$("#resizable").removeAttr('disabled');
					break;		
			}
	 	
	 	
	 	}
	 
	 )
	
	insert();
	commitProperties();
}

function manageFormState(type)
{
	

}