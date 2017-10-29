registerNS('objects.discussion.discussion');
objects.discussion.discussion =
{
	cmd_join_discussion_onClick : function()
	{
		jQuery('#notify_list').append(', <a href="#" id="tmp_am">Anthony Moquette</a>');
		objects.discussion.discussion.notify('You have been added to the notify list for this discusson.');
	},

	notify : function(message)
	{
		jQuery('#dms p').html(message);
		jQuery('#dms').css('background','#ffffb2');
		jQuery('#dms').animate({backgroundColor:'#ffffef'},3000); 
		jQuery('#dms').css('border-bottom','1px solid #ccc');
		
		jQuery('#tmp_am').css('background','#ffffb2');
		jQuery('#tmp_am').animate({backgroundColor:'#fff'},3000); 
		
	}

}
