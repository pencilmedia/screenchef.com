//	***********************************************************
//		UX JS ONLY - THESE SCRIPTS NOT MEANT FOR PRODUCTION
//	***********************************************************

var response = {};

response = 
{
	init : function()
	{
		response.toggleContent();
	},
	toggleContent : function() 
	{
		var toggler1 = jQuery('.bsone');
		var content1 = jQuery('.toggle_bsone');
		var toggler2 = jQuery('.bstwo');
		var content2 = jQuery('.toggle_bstwo');
	
		toggler1.click(function() { content1.toggle(); toggler1.toggleClass("collapse"); toggler1.toggleClass("expand"); return false;});
		toggler2.click(function() { content2.toggle(); toggler2.toggleClass("collapse"); toggler2.toggleClass("expand"); return false;});
	}
}

jQuery(document).ready(response.init);
