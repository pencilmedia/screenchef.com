function init()
{
	$('.pop_up').css('width','250px');
	$('#msg2').hide();
	$('#cmdOk').click(doOkClick)
	setTimeout(doDone,5000);
}

function doDone()
{
	$('#msg1').hide();
	$('#msg2').show();
}

function doOkClick()
{
	 $('.pop_up,.prompt_mask').hide();
}

$(document).ready(init);