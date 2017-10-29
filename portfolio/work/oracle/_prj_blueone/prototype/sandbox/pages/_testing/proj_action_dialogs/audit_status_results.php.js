function commentInit()
{
	bindControls();
	var errorMessage = 'Errors must be resolved before [Identifier\'s] status can be changed to [target status].';
	dialogs.displayError( errorMessage );
}

function bindControls()
{
	$('#cmdSend').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

$(document).ready(commentInit);