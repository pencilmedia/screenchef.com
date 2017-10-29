function init()
{
	jQuery('.skins a').click(skinsOnClick);
}

function skinsOnClick()
{
	jQuery('#themed_table').css('border-color','#'+this.id);
	jQuery('#themed_table th').css('background-color','#'+this.id);
	jQuery('#themed_table td').css('border-color','#'+this.id);
	lightTitle();
	switch ( this.id )
	{
		case '003366':
			break;
		case '336699':
			break;
		case '6699cc':
			break;
		case '999966':
			break;
		case 'cccc99':
			darkTitle();
			break;
		case 'ffffcc':
			darkTitle();
			break;
		case '333':
			break;
		case '666':
			break;
		case 'ccc':
			darkTitle();
			break;
	}

	//jQuery('#dcss').attr("href", 'skins/ux_palette_' + this.id + '.css'); 
    jQuery('#ux_palette').show();
}

function lightTitle() { jQuery('#themed_table th').css('color','#fff'); }
function darkTitle() { jQuery('#themed_table th').css('color','#333'); }

jQuery(init);