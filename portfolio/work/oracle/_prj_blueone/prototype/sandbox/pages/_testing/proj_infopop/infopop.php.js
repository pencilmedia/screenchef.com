var i = 0;

function init()
{
	prepSkins();
	prepOptions();
	toggleContent();
	jQuery('#ux_palette').css({width:570,height:520,top:50,left:50});
	agile.ux.palette.onResize();
	
	agile.ux.palette.paletteResizeEvent.subscribe(doResize);

	jQuery('.prompt_mask,.prompt_shadow, #cr_2').hide();
	jQuery('#add_rule').click(showAddRule);
	jQuery('#cmdCancel').click( function(){
											jQuery('.prompt_mask,.prompt_shadow').hide();
										 });
	jQuery('#cmdSave').click( function(){
											jQuery('.prompt_mask,.prompt_shadow').hide();
											jQuery('#cr_1').hide();
											jQuery('#cr_2').show();
										 });

	popMessage('error')
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