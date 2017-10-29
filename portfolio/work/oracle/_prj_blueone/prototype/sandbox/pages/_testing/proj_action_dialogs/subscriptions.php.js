function subscriptionsInit()
{
	var errorMessage = 'Sample Error Message...';
	$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) })	
}
$(document).ready(subscriptionsInit);