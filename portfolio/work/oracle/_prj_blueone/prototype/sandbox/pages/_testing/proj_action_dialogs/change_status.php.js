function sendInit()
{
	var errorMessage = 'Sample Error Message...';
	$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) })	
}
$(document).ready(sendInit);