var i = 0;

function init()
{
	toggleContent();
	jQuery('#ux_palette').css({width:530,height:260,top:45,left:20});
	//agile.ux.palette.paletteResizeEvent.subscribe(doResize);
	agile.ux.palette.onResize();
	/* Hide Bottom Action Bar */
}
function showAddRule()
{
	jQuery('.prompt_mask,.prompt_shadow').show();
}

function doResize()
{
	//console.log ('Anthony was here ' + i);
	//i++;
}

////////////////////////////////////////
//        COLLAPSE/EXPAND 
////////////////////////////////////////
function toggleContent() {
	
	var toggler1 = jQuery('.bsone');
	var content1 = jQuery('.toggle_bsone');
	var toggler2 = jQuery('.bstwo');
	var content2 = jQuery('.toggle_bstwo');

	toggler1.click(function() { content1.toggle(); toggler1.toggleClass("collapse"); toggler1.toggleClass("expand"); return false;});
	toggler2.click(function() { content2.toggle(); toggler2.toggleClass("collapse"); toggler2.toggleClass("expand"); return false;});
}

jQuery(init);