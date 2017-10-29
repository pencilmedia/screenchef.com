function init()
{
	$("#appContainer").splitter({type: 'v'});
	$(window).bind('resize', doResize);
	doResize();
}

function doResize()
{
	var h = document.documentElement.clientHeight;
	$('#appContainer').height(h);
	$('#appContainer').trigger('resize');
}

$(document).ready(init);
