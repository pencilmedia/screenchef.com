function init()
{
	$('#cmdClose').addClass('disabled');
	setTimeout ( step1, 1500 );
	
}

function step1()
{
	$('#message').html('Downloading XYZ...');
	setTimeout ( step2, 1500 );
}

function step2()
{
	$('#loading_image').attr('src','/global/images/loading_complete.gif');
	$('#message').html('Download Complete');
	$('#cmdClose').removeClass('disabled');
	$('#cmdClose').bind('click', function(){ window.close() })	
}


function closeMe()
{
	window.close();
}

$(document).ready(init);
