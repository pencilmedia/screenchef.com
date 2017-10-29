var page = 
{
	init : function()
	{
		jQuery('#plan_record').click( page.toggle );
		jQuery('#as_of').addClass("disabled");
		jQuery('#as_of').attr("disabled","disabled");
	},
	toggle : function()
	{
		var asOf = jQuery("#as_of");
		var checked_status = this.checked; 

		if (checked_status) {
			asOf.removeAttr("disabled", "disabled");
			asOf.removeClass("disabled");
		} else {
			asOf.attr("disabled", "disabled");
			asOf.addClass("disabled");
		}
	}
};

$(document).ready(page.init);