var Print = 
{
	init : function()
	{
		var errorMessage = 'Sample Error Message...';
		$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) });
		$('#cmdPrint').bind('click', Print.documentPrint);
		$('#cmdPrintPreview').bind('click', Print.documentPrintPreview);
	},
	
	documentPrintPreview : function()
	{
		window.open('print_preview.php','PrintPreview', 'menubar=no,location=no,status=no,width=850,height=560,toolbar=no,resizable=yes,scrollbars=yes');
	},
	documentPrint : function()
	{
		pu = window.open('print_preview.php?autoprint=1','PrintPreview', 'menubar=no,location=no,status=no,width=5,height=5,toolbar=no,resizable=yes,scrollbars=yes');
		pu.blur();
		window.focus();
	},
};

$(document).ready(Print.init);