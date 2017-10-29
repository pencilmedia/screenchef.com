function init()
{
	$('.prompt_mask, .prompt_shadow').hide();
	$('#cmdOk').click(doIndicator)
}

function doIndicator()
{
	 animate(document.body);
}


function animate(element)
{
	ux.utils.progressIndicatorOn(element);
	setTimeout( function() { ux.utils.progressIndicatorOff(); }, 1000 );
}


$(document).ready(init);