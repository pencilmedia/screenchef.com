var autoprint = 
{
	init : function()
	{
		window.resizeTo(5,5);
		$('#printCommands').hide();
		window.print();
		window.close();
	}
};

$(document).ready(autoprint.init);