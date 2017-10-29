var infoPop = 
{
	i : 0,
	

	init: function ()
	{
		jQuery('span.error_msg').css({display:'none'});
		jQuery('#search_expand_wrapper').css({display:'none'});
		jQuery('.search_collapse').bind('click', infoPop.toggleSearch);
		jQuery('#search_expand_wrapper').bind('click', infoPop.toggleSearch);
	},
	msg: function ()
	{
		alert('test msg');
	},
	toggleSearch: function(e)
	{
		var targetContent = jQuery('#basic_search_table_content');
		if (targetContent.css('display') == 'none') {
			targetContent.show();
			jQuery('#search_expand_wrapper').hide();
			jQuery('#search_collapse_wrapper_basic').show();
		} else {
			targetContent.hide();
			jQuery('#search_expand_wrapper').show();
			jQuery('#search_collapse_wrapper_basic').hide();
		}
		return false;
	}
};

jQuery(document).ready(infoPop.init);