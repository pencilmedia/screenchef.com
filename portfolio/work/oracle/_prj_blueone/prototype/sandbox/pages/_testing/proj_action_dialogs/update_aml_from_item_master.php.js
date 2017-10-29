function updateAMLInit()
{
	var errorMessage = 'Sample Error Message...';
	$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) });
	
	$('#chk1').bind('click', updateAML);
	$('#chk2').bind('click', updateAMLAttributes);
}

function updateAML()
{
		if ( this.checked )
		{
			$('#opt1,#opt2').attr('disabled',false);
			$('#lbl1,#lbl2').removeClass('disabled');
			$('#opt1').attr('checked',true);
		} else {
			$('#opt1,#opt2').attr('disabled',true);
			$('#lbl1,#lbl2').addClass('disabled');
			$('#opt1,#opt2').attr('checked',false);
		}
}
function updateAMLAttributes()
{
		if ( this.checked )
		{
			$('#opt3,#opt4').attr('disabled',false);
			$('#lbl3,#lbl4').removeClass('disabled');
			$('#opt3').attr('checked',true);
		} else {
			$('#opt3,#opt4').attr('disabled',true);
			$('#lbl3,#lbl4').addClass('disabled');
			$('#opt3,#opt4').attr('checked',false);
		}
}

$(document).ready(updateAMLInit);