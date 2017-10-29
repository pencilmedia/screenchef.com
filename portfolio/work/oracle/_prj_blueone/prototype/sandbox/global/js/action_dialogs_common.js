var dialogs = {};
dialogs.init = function()
{	
	dialogs.resize();
	dialogs.focusFieldHandler();
	dialogs.commandButtonsHandler();
	dialogs.requiredFieldsHandler();
	dialogs.initializeForm();
	jQuery(window).resize(dialogs.resize);
	jQuery('.hidden').hide();
}

dialogs.resize = function()
{
	var scrollBarOffset	= 18;
	jQuery('#wrapper_action_dialog_content').css('margin-top',jQuery('#wrapper_action_dialog_header').height());
	jQuery('#wrapper_action_dialog_content').css('height', jQuery(window).height()-jQuery('#wrapper_action_dialog_header').height()-jQuery('#wrapper_action_dialog_footer').height()-scrollBarOffset);
}

dialogs.focusFieldHandler = function()
{
	jQuery('input,select,textarea').bind('focus', function() { jQuery(this).addClass('focus_field'); });
	jQuery('input,select,textarea').bind('blur', function() { jQuery(this).removeClass('focus_field'); });
}

dialogs.commandButtonsHandler = function()
{
	jQuery('#cmdCancel').bind('click', dialogs.closeWindow)
}

dialogs.displayError = function(msg)
{
	jQuery('#page_message p').html(msg);
	jQuery('#page_message').addClass('error');
	jQuery('dt.required label').each( function()	{jQuery(this).addClass('form_error_label'); });
	jQuery('.error_msg.hidden').show();
	dialogs.resize();
	dialogError();
}

function dialogError() 
{
	jQuery("#page_message") 
	.animate({ backgroundColor: '#ffc8ca' }, 1500)
}

dialogs.requiredFieldsHandler = function()
{
	jQuery('dt.required').each( function() { jQuery(this).prepend('<span>*</span>'); });
	jQuery('dt.required label').each( function() { jQuery(this).attr('title',jQuery(this).text().replace(':','') + ' is a required field'); });
}

dialogs.closeWindow = function()
{
	window.close();
}

dialogs.autoNumberIncrement = function(autoNumberId)
{
	jQuery('#'+autoNumberId).attr('value', Number(jQuery('#'+autoNumberId).attr('value')) + 1 );
}

dialogs.initializeForm = function ()
{
	jQuery('#first_field').focus()
}

jQuery(document).ready(dialogs.init);

// ***********************************************
//  ACTION DIALOG POPUP
// ***********************************************
function getDialog(url, w, h) {
	popupDialog = window.open(url,'popupDialog','height=' + h + ',width=' + w);
	if (window.focus) { popupDialog.focus(); }
}