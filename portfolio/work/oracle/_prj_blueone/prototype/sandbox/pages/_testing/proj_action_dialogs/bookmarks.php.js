function bookmarkInit()
{
	bindControls();
}

function bindControls()
{
	$('#cmdSend').bind('click', function(){ dialogs.displayError('Sample Error Message...') });
}
$(document).ready(bookmarkInit);
