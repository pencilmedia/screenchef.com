function sendInit()
{
	var errorMessage = 'Sample Error Message...Please select a User/Group to perform this action.Please select a User/Group to perform this action.Please select a User/Group to perform this action. Please select a User/Group to perform this action. Please select a User/Group to perform this action.';
	$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) })	
}
$(document).ready(sendInit);