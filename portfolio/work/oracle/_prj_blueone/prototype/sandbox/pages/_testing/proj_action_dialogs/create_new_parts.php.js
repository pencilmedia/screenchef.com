function createNewInit()
{
	bindControls();
}

function bindControls()
{
	$('#first_field').bind('change', function()
	{
		$('#schedule').show();
		$('dt.hidden,dd.hidden').show();
	})
	$('#target_query').bind('focus', function()
	{
		$('#musContainer').addClass('focus_field');
	});
	$('#target_query').bind('blur', function()
	{
		$('#musContainer').removeClass('focus_field');
	});
	$('#cmdSUS').bind('click', function(){ $('#musPalette').toggle(); });
	$('#cmdMusPalleteClose').bind('click', function(){ $('#musPalette').toggle(); });
	$('#cmdSave').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

$(document).ready(createNewInit);
