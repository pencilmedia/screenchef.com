function replyToDiscussionInit()
{
	bindControls();
	jQuery('#multitext_counter').focus();
}

function bindControls()
{
	jQuery('#cmdAutoNumber').bind('click', function(){dialogs.autoNumberIncrement('autoNumber')});
	jQuery('#cmdSave').bind('click', function(){ dialogs.displayError('Sample Error Message...') })
}

jQuery(document).ready(replyToDiscussionInit);
