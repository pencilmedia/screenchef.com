function commentInit()
{
	bindControls();
}

function bindControls()
{
	jQuery('#cmdSend').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

jQuery(document).ready(commentInit);