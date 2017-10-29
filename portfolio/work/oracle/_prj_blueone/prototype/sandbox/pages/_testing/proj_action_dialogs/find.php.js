function commentInit()
{
	bindControls();
}

function bindControls()
{
	$('#cmdClose').bind('click', function(){ dialogs.displayError('Sample Error Message...') })


		jQuery('#ui_levels_01').click( function() { 
			jQuery('#txt_levels').removeAttr("disabled");
			jQuery('#txt_levels').removeClass("disabled");
		} );

		jQuery('#ui_levels_02').click( function() { 
			jQuery('#txt_levels').attr("disabled", "disabled");
			jQuery('#txt_levels').addClass("disabled");
		} );
}

$(document).ready(commentInit);