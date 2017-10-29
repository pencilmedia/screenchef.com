/* Author: Joaquin A. Moquette */


var uxd = {
	init : function()
	{
		$('#cmdSignIn').click( uxd.toggleForm )
	},

	toggleForm : function()
	{
		if ($('.contact_form').is(":hidden")) 
		{
			$(this).html('Close Panel');
			$('.contact_form').slideDown('slow');
		} else {
			$(this).html('Sign In | Register');
			$('.contact_form').slideUp();
		};
	}
}

$(uxd.init);