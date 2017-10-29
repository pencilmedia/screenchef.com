function publishItemInit()
{
	jQuery('#chk1, #chk2, #chk3, #chk4').bind('click', checkHandler)
	jQuery('#add_mod, #add_delete, #pub_mode_auth, #pub_mode_red').bind('click', optionHandler)
	jQuery('.sel1, .sel2, .sel3').hide();
	jQuery('#sel1_select').change(toggleSel1);
	jQuery('#sel2_select').change(toggleSel2);
	jQuery('#sel3_select').change(toggleSel3);
}

function toggleSel1()
{
	jQuery('.sel1').toggle();
}
function toggleSel2()
{
	jQuery('.sel2').toggle();
}
function toggleSel3()
{
	jQuery('.sel3').toggle();
}


function checkHandler()
{
	switch ( this.id )
	{
		case 'chk1':
			if ( this.checked )
			{
				//jQuery('#chk4').attr('checked', false);
			} else {
				jQuery('#chk2').attr('checked', false);
				jQuery('#chk3').attr('checked', false);				
			}
			break;

		case 'chk2':
			if ( this.checked )
			{
				jQuery('#chk1').attr('checked', true);
				//jQuery('#chk4').attr('checked', false);
			}
			break;

		case 'chk3':
			if ( this.checked )
			{
				jQuery('#chk1').attr('checked', true);
				//jQuery('#chk4').attr('checked', false);
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
				jQuery('#pub_mode_auth').attr('checked', false);
				jQuery('#pub_mode_red').attr('checked', true);
				jQuery('#msl_00').attr('disabled', false);
				jQuery('#cmd_msl_00').removeClass('disabled');
			}
			break;
		case 'add_delete':
			if ( this.checked )
			{
				jQuery('#pub_mode_auth').attr('checked', false);
				jQuery('#pub_mode_red').attr('checked', true);
				jQuery('#msl_00').attr('disabled', false);
				jQuery('#cmd_msl_00').removeClass('disabled');
			}
			break;
		

		case 'pub_mode_auth':
			if ( this.checked )
			{
				jQuery('#msl_00').attr('disabled', true);
				jQuery('#cmd_msl_00').addClass('disabled');
				jQuery('#add_mod, #add_delete').attr('checked', false);
				jQuery('#add_mod').attr('disabled', 'disabled');
				jQuery('#add_delete').attr('disabled', 'disabled');
				jQuery('#update_mode').removeClass('required');
				jQuery('#update_mode span').remove();
			}
			break;
		case 'pub_mode_red':
			if ( this.checked )
			{
				jQuery('#msl_00').attr('disabled', false);
				jQuery('#cmd_msl_00').removeClass('disabled');
				jQuery('#msl_00').focus();
				jQuery('#add_mod').attr('checked', true);
				jQuery('#add_mod').attr('disabled', '');
				jQuery('#add_delete').attr('disabled', '');
				jQuery('#update_mode').addClass('required');
				jQuery('#update_mode').prepend('<span>*</span>');
			}
			break;
	}
}
jQuery(document).ready(publishItemInit);