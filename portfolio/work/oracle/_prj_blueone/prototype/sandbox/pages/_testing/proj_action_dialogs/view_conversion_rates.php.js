var rates = 
{
	x : 1,
	
	init : function()
	{
		$('#update_rates').bind('click', rates.update);
	},
	update : function(e)
	{
		$('#page_message').text('Project rates have been updated.');
		$('#rate1').text('1.00');
		$('#rate1').removeClass('rate_outdated');
		$('#rate2').text('0.4816');
		$('#rate2').removeClass('rate_outdated');
	}
};

$(document).ready(rates.init);