var wf = 
{
	init : function()
	{
		$('.form_selectors').bind('click', wf.optionHandler)
	},
	
	optionHandler : function()
	{
		switch ( this.id )
		{
			case 'a1':
				$('#msl_a').addClass('disabled');
				$('#msl_a').attr('disabled','disabled');
				$('#cmd_msl_a').addClass('disabled');
				break;
			case 'a2':
				$('#msl_a').removeClass('disabled');
				$('#msl_a').removeAttr('disabled','disabled');
				$('#cmd_msl_a').removeClass('disabled');
				$('#msl_a').focus();
				break;

			case 'b1':
				$('#msl_b').addClass('disabled');
				$('#msl_b').attr('disabled','disabled');
				$('#cmd_msl_b').addClass('disabled');
				break;
			case 'b2':
				$('#msl_b').removeClass('disabled');
				$('#msl_b').removeAttr('disabled','disabled');
				$('#cmd_msl_b').removeClass('disabled');
				$('#msl_b').focus();
				break;

			case 'c1':
				$('#msl_c').addClass('disabled');
				$('#msl_c').attr('disabled','disabled');
				$('#cmd_msl_c').addClass('disabled');
				break;
			case 'c2':
				$('#msl_c').removeClass('disabled');
				$('#msl_c').removeAttr('disabled','disabled');
				$('#cmd_msl_c').removeClass('disabled');
				$('#msl_c').focus();
				break;

			case 'd1':
				$('#msl_d').addClass('disabled');
				$('#msl_d').attr('disabled','disabled');
				$('#cmd_msl_d').addClass('disabled');
				break;
			case 'd2':
				$('#msl_d').removeClass('disabled');
				$('#msl_d').removeAttr('disabled','disabled');
				$('#cmd_msl_d').removeClass('disabled');
				$('#msl_d').focus();
				break;

			case 'e1':
				$('#msl_e').addClass('disabled');
				$('#msl_e').attr('disabled','disabled');
				$('#cmd_msl_e').addClass('disabled');
				break;
			case 'e2':
				$('#msl_e').removeClass('disabled');
				$('#msl_e').removeAttr('disabled','disabled');
				$('#cmd_msl_e').removeClass('disabled');
				$('#msl_e').focus();
				break;
				
			case 'f1':
				$('#msl_f').addClass('disabled');
				$('#msl_f').attr('disabled','disabled');
				$('#cmd_msl_f').addClass('disabled');
				break;
			case 'f2':
				$('#msl_f').removeClass('disabled');
				$('#msl_f').removeAttr('disabled','disabled');
				$('#cmd_msl_f').removeClass('disabled');
				$('#msl_f').focus();
				break;				

		}

	}

};


$(document).ready(wf.init);