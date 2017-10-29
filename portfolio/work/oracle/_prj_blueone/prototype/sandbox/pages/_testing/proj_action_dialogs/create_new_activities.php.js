function createNewInit()
{
	bindControls();
	setDates();
}

function bindControls()
{
	$('#req_sel_00').bind('change', function()
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
	$('#musPalette').draggable();
	$('#resize_handle').resizable();
	$('#cmdSave').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

function setDates()
{
	var d = new Date();
	var today = d.getDate();
	var tomorrow = d.getDate() + 1;
	var todayDate = d.getMonth() + '/' + today + '/' + d.getYear();
	var tomorrowDate = d.getMonth() + '/' + tomorrow + '/' + d.getYear();
	$('#start_date').attr('value',todayDate);
	$('#end_date').attr('value',tomorrowDate);	
}

function ui_duration_type_onchange(obj) {
	if (obj.selectedIndex == 0) 
	{
		$('#effort_duration').html('<label for=\"effort_duration\">Duration:</label>');
	} else {
		$('#effort_duration').html(' <label for=\"effort_duration\">Days Effort:</label>');
	}
}

$(document).ready(createNewInit);
