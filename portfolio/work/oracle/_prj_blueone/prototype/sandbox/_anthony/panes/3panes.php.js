function init()
{
	$('#appContainer').splitter({type: 'v', minA: 10, maxA: 300})
	$('#rightContainer').splitter({type: 'h'});
	$(window).bind('resize', doResize);
	//$('#collapse').bind('click', doCollapse);
	$('#collapse').toggle(doCollapse, doExpand);
	doResize();
}

function doResize()
{
		var h = document.documentElement.clientHeight;
		$('#appContainer').height(h);
		$('#appContainer').trigger('resize');
}


function doCollapse()
{
	$('#collapse').html('>>');
	$('#leftContainer').css('width',20);
	$('#leftContainer p').css('color','#fff');
	$('#leftContainer').css('overflow-x', 'hidden');
	$('#leftContainer').css('overflow-y', 'hidden');
	$('#appContainer').trigger('resize');
}

function doExpand()
{
	$('#collapse').html('<<');
	$('#leftContainer').css('width',150);
	$('#leftContainer p').css('color','#000');
	$('#leftContainer').css('overflow-x', 'auto');
	$('#leftContainer').css('overflow-y', 'auto');
	$('#appContainer').trigger('resize');	
}
$(document).ready(init);