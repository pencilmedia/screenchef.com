uxPalette.prototype.onResize = function(e, ui, classObj)
{
	//$('#p2').css({'height':$('#'+classObj.id()).height() - classObj._offSetHeight });
	$('#p2').css({'background-color':'#fff'});
}

function init()
{
	$('#cmdToggle').bind('click', function() { $('#'+pal.id()).toggle() });
	$('#cmdA').bind('click', function() { pal.init(palette1); pal.show() });
	$('#cmdB').bind('click', function() { pal.init(palette2); pal.show() });
	var myContent = $.create('p',{'id':'p2','class':'p2'},['test']),

	palette1 =
	{
		width: 300,
		height: 150,
		position: [200,100],
		dragOpacity: 0.8
	}

	palette2 =
	{
		width: 200,
		height: 75,
		position: [100,100]
	}

	pal = new uxPalette(palette1);
	pal.show();
}

$(document).ready(init);