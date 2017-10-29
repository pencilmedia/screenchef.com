function publishItemInit()
{
	var errorMessage = 'Sample Error Message...';
	$('#chk1, #chk2, #chk3, #chk4').bind('click', checkHandler)
	$('#add_mod, #add_delete, #pub_mode_auth, #pub_mode_red').bind('click', optionHandler)
}

function checkHandler()
{
	switch ( this.id )
	{
		case 'chk1':
			if ( this.checked )
			{
				//$('#chk4').attr('checked', false);
			} else {
				$('#chk2').attr('checked', false);
				$('#chk3').attr('checked', false);				
			}
			break;

		case 'chk2':
			if ( this.checked )
			{
				$('#chk1').attr('checked', true);
				//$('#chk4').attr('checked', false);
			}
			break;

		case 'chk3':
			if ( this.checked )
			{
				$('#chk1').attr('checked', true);
				//$('#chk4').attr('checked', false);
			}
			break;
	}
}

function optionHandler()
{
	switch ( this.id )
	{

		case 'add_mod':
			if ( this.checked )
			{
				$('#pub_mode_auth').attr('checked', false);
				$('#pub_mode_red').attr('checked', true);
				$('#msl_00').attr('disabled', false);
				$('#cmd_msl_00').removeClass('disabled');
			}
			break;
		case 'add_delete':
			if ( this.checked )
			{
				$('#pub_mode_auth').attr('checked', false);
				$('#pub_mode_red').attr('checked', true);
				$('#msl_00').attr('disabled', false);
				$('#cmd_msl_00').removeClass('disabled');
			}
			break;
		

		case 'pub_mode_auth':
			if ( this.checked )
			{
				$('#msl_00').attr('disabled', true);
				$('#cmd_msl_00').addClass('disabled');
				$('#add_mod, #add_delete').attr('checked', false);
				$('#add_mod').attr('disabled', 'disabled');
				$('#add_delete').attr('disabled', 'disabled');
				$('#update_mode').removeClass('required');
				$('#update_mode span').remove();
			}
			break;
		case 'pub_mode_red':
			if ( this.checked )
			{
				$('#msl_00').attr('disabled', false);
				$('#cmd_msl_00').removeClass('disabled');
				$('#msl_00').focus();
				$('#add_mod').attr('checked', true);
				$('#add_mod').attr('disabled', '');
				$('#add_delete').attr('disabled', '');
				$('#update_mode').addClass('required');
				$('#update_mode').prepend('<span>*</span>');
			}
			break;
	}
}
$(document).ready(publishItemInit);