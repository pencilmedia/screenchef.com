function expandBomInit()
{
	bindControls();
	checkField();
}

function bindControls()
{
	$('#cmdSend').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

function checkField() 
{
		jQuery('#ui_print_levels').click( function() { 
			jQuery('#first_field').removeAttr("disabled");
			jQuery('#first_field').removeClass("disabled");
			jQuery('#first_field').focus();
		} );
		jQuery('#ui_all_levels').click( function() { 
			jQuery('#first_field').attr("disabled", "disabled");
			jQuery('#first_field').addClass("disabled");
		} );
}

$(document).ready(expandBomInit);