function init()
{
	$('#cmdOk').click(doOkClick)
	$('.pop_up').css('width','200px');
}

function doOkClick()
{
	 $('.pop_up,.prompt_mask').hide();
}

$(document).ready(init);