var wizard = 
{
	x : 1,
	
	init : function()
	{
		var errorMessage = 'Sample Error Message...';
		$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) })
		$('#cmdBack').bind('click', wizard.doBack);
		$('#cmdNext').bind('click', wizard.doNext);
		$('#1').addClass('selected');
		$('.sec').bind('click',wizard.stepHandler);
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
	},
	
	stepHandler : function(e)
	{
		$('#wStepTitle').text('Title for Step ' + this.id + ' of 8');
		$('.sec').removeClass('selected');
		$('#' + this.id).addClass('selected');
		wizard.x = this.id;
		return false;
	},
	
	doNext : function()
	{
		$('.sec').removeClass('selected');
		wizard.x++;
		$('#'+wizard.x).addClass('selected');
		if (wizard.x < 1) wizard.x = 1;
		if (wizard.x > 8)
		{
			wizard.x = 8;
			$('#8').addClass('selected');
		}
		$('#wStepTitle').text('Title for Step ' + wizard.x + ' of 8');
		return false;
	},
	
	doBack : function()
	{
		$('.sec').removeClass('selected');
		wizard.x--;
		$('#'+wizard.x).addClass('selected');
		if (wizard.x < 1)
		{
			wizard.x = 1;
			$('#1').addClass('selected');
		}
		if (wizard.x > 8)
		{
			wizard.x = 8;
		}
		$('#wStepTitle').text('Title for Step ' + wizard.x + ' of 8');
		return false;
	}
};

$(document).ready(wizard.init);