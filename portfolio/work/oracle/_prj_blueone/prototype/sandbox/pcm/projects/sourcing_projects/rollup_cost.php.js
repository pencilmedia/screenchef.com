function init()
{
	bindControls();
	checkField();
	$('#d2').hide();
}

function bindControls()
{
	$('#cmdCriteria').bind('click', criteriaOnClick )
}

function criteriaOnClick()
{
	$('#d1').hide();
	$('#d2').show();
	$('#cmdCriteria').hide();
}
function checkField() 
{
}

$(document).ready(init);