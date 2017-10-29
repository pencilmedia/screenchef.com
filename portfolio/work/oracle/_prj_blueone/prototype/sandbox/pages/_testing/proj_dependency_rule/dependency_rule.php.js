var i = 0;

function init()
{
	jQuery('#cmdCancel').click(cmdCancel_onclick);
	showAddRule()
}
function showAddRule()
{
	jQuery('.prompt_mask,.prompt_shadow').show();
	jQuery('#time_buffer').focus();
}

function cmdCancel_onclick()
{
	jQuery('.prompt_mask,.prompt_shadow').hide();
}

jQuery(init);