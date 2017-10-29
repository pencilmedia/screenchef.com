var i = 0;

function init()
{
	prepSkins();
	prepOptions();
	toggleContent();
	jQuery('#ux_palette').css({width:600,height:250,top:100,left:100});
	jQuery('#sr').click(doSR);
	jQuery('#cmdClose').click(closePalette);
	agile.ux.palette.onResize();
	agile.ux.palette.paletteResizeEvent.subscribe(doResize);
}

function doResize()
{
	// **** For any special palette specific resizing logic. **** //
}

function closePalette()
{
	jQuery('#ux_palette').hide();
}
function prepSkins()
{
	jQuery('.skins').click(skinsOnClick);
}

function skinsOnClick()
{
	jQuery('#dcss').attr("href", 'skins/ux_palette_' + this.id + '.css'); 
    jQuery('#ux_palette').show();
}

function prepOptions()
{
	jQuery('.palette_options').click(optionsOnClick);
}

function optionsOnClick()
{
	switch ( this.id )
	{
		case 'tab':
			jQuery('#ux_palette_top_action_bar').toggle();
			break;
		case 'ma':
			jQuery('#ux_palette_message_area').toggle();
			break
		case 'bab':
			jQuery('#ux_palette_bottom_action_bar').toggle();
			break
	}
	agile.ux.palette.onResize();
}


function doSR()
{
	jQuery('#status_bar').removeClass('done');
	jQuery('#c1').hide();
	jQuery('#status_bar').addClass('active');
	jQuery('#status_text').text('Triggering request...');
	setTimeout( function(){jQuery('#status_text').text('Connecting to server...')}, 1500 );
	setTimeout( function(){jQuery('#status_text').text('Server Connected...')}, 2500 );
	setTimeout( function(){jQuery('#status_text').text('Processing...')}, 3500 );
	setTimeout( function(){jQuery('#status_text').text('Done')}, 5000 );
	setTimeout( function(){jQuery('#status_bar').addClass('done')}, 5000 );
	setTimeout( function(){jQuery('#c1').show()}, 5000 );
	
}

////////////////////////////////////////
//        COLLAPSE/EXPAND 
////////////////////////////////////////
function toggleContent() {
	
	var toggler1 = jQuery('.toggle1');
	var content1 = jQuery('.toggle_content1');
	var toggler2 = jQuery('.toggle2');
	var content2 = jQuery('.toggle_content2');

	toggler1.click(function() { content1.toggle(); toggler1.toggleClass("collapse"); toggler1.toggleClass("expand"); return false;});
	toggler2.click(function() { content2.toggle(); toggler2.toggleClass("collapse"); toggler2.toggleClass("expand"); return false;});
}

jQuery(init);