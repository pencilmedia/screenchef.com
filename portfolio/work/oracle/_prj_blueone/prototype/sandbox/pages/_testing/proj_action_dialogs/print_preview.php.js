var printPreview = 
{
	init : function()
	{
		$('#cmdCancel').bind('click',printPreview.cancelPrint);
		$('#cmdPrint').bind('click',printPreview.documentPrint);
	},
	
	cancelPrint : function()
	{
		window.close();
	},
	
	documentPrint : function()
	{

		var cssNode = document.createElement('link'); 
		cssNode.setAttribute('rel', 'stylesheet'); 
		cssNode.setAttribute('type', 'text/css'); 
		cssNode.setAttribute('href', '/global/css/auto_print.css'); 
		cssNode.setAttribute('media', 'print'); 
		document.getElementsByTagName('head')[0].appendChild(cssNode);
		window.print();
		window.close();
	}

};


$(document).ready(printPreview.init);