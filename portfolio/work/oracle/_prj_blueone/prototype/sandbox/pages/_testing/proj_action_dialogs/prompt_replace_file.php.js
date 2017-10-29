function init()
{
	jQuery('#cmdCancel').click(cmdCancel_onclick);
}

function cmdCancel_onclick()
{
	jQuery('.prompt_mask,.prompt_shadow').hide();
}

jQuery(init);