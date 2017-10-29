function createNewInit()
{
	bindControls();
}

function bindControls()
{
	$('#first_field').bind('change', function()
	{
		$('#schedule').show();
		$('dd.hidden,dt.hidden').show();
	})
	$('#cmdAutoNumber').bind('click', function(){dialogs.autoNumberIncrement('autoNumber')});
	$('#cmdSave').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

$(document).ready(createNewInit);
