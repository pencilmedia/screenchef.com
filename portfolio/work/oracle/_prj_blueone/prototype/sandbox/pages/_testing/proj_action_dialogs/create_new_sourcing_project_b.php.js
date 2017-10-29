function createNewInit()
{
	bindControls();
}

function bindControls()
{
	$('#first_field').bind('change', function()
	{
		$('#schedule').show();
		$('.main').show();
	})
	$('#cmdAutoNumber').bind('click', function(){dialogs.autoNumberIncrement('autoNumber')});
	$('.form_selectors').bind('focus', handleFormSelection);
	$('#cmdSave').bind('click', function(){ dialogs.displayError('Sample Error Message...') })	
}

function handleFormSelection(e)
{
	var e = e || window.event;
	switch(e.target.id)
	{
		case 'ui_quantity_breaks':
			$('#ui_number_01').attr('disabled','');
			$('#ui_number_date').attr('disabled','disabled');
			$('#ui_period_type').attr('disabled','disabled');

			$('#ui_start_date').attr('disabled','disabled');
			$('#ui_start_date2').attr('disabled','disabled');
			$('#ui_start_date3').attr('disabled','disabled');
			$('#ui_end_date').attr('disabled','disabled');
			$('#ui_end_date2').attr('disabled','disabled');
			$('#ui_end_date3').attr('disabled','disabled');
			$('#ui_quantity_break').attr('disabled','disabled');
			break    
		case 'ui_effectivity_period':
			$('#ui_number_01').attr('disabled','disabled');
			$('#ui_number_date').attr('disabled','');
			$('#ui_period_type').attr('disabled','');

			$('#ui_start_date').attr('disabled','');
			$('#ui_start_date2').attr('disabled','');
			$('#ui_start_date3').attr('disabled','');
			$('#ui_end_date').attr('disabled','');
			$('#ui_end_date2').attr('disabled','');
			$('#ui_end_date3').attr('disabled','');
			$('#ui_quantity_break').attr('disabled','');
			break    
		default:
			break;
	}	
}

$(document).ready(createNewInit);