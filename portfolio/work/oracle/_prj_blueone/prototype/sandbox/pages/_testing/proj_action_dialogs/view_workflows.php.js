function viewWorkflowsInit()
{
	bindControls();
	formatStepContainer();
	$(window).resize(containerResize);
	containerResize();
}

function formatStepContainer()
{
	var steps_width = $('#step_container li').length * 150;
	$('#step_container').css('width', steps_width);	
}

function bindControls()
{
	$('#selector').bind('change', selectorHandler);
	$('#cmdSend').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

function selectorHandler()
{
	if ( this.value == 'manual' )
	{
		var tmpLI = 	'<li class="label" id="tmpLI">';
		tmpLI += 		'	<p class="label">Released</p>';
		tmpLI +=		'	<p class="completed">7</p>';
		tmpLI += 		'</li>';
		
		var newLI = $('#step_container').html() + tmpLI
		$('#step_container').html(newLI);
		formatStepContainer();
		
	} else {
		$('#tmpLI').remove();
		formatStepContainer();
	}
}


function containerResize()
{
	var myOffset = 60;
	$('.container.item_workflow').css('height', $(window).height()-$('#wrapper_action_dialog_header').height()-$('#wrapper_action_dialog_footer').height()- myOffset);
	
}

$(document).ready(viewWorkflowsInit);