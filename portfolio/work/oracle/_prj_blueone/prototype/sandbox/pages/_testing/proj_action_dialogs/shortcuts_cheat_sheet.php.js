function init()
{
	$('#cmdPrint').click(printPage)
}

function printPage()
{
	$('#wrapper_action_dialog_content').clone().insertAfter('#printable');
}
$(document).ready(init);