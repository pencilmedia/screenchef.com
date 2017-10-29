var wizard = 
{
	/*********************************************
		WIZARD STEP CONFIGURATION
	*********************************************/
	currentStep : 1,			// Should default to 1.
	totalNumberOfSteps : 5, 	// Total number of steps.

	/*********************************************
		TITLE AND HELP TEXT CONFIGURATION
	*********************************************/
	//
	//	The number of step titles and help text should
	//	match the total number of steps for the wizard.
	//
	step1Title : 'Step 1',
	step1HelpText: 'Lorem ipsum dolor sit amet.',
	step2Title : 'Step 2',
	step2HelpText: 'Consectetuer adipiscing elit.',
	step3Title : 'Step 3',
	step3HelpText: 'Etiam vel nibh. Quisque massa nunc, molestie quis.',
	step4Title : 'Step 4',
	step4HelpText : 'Ultricies nec, tempor aliquet, diam.',
	step5Title : 'Step 5',
	step5HelpText : 'Phasellus pharetra malesuada magna.',

	/*********************************************
		WIZARD INIT
	*********************************************/
	init : function()
	{
		wizard.setupStepIndicators();
		wizard.showStep(1);
		$('#cmdNext').bind('click', wizard.nextStep);
		$('#cmdBack').bind('click', wizard.previousStep);
		$('.step_indicator').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('#step_indicator_1').addClass('selected');
	},
	/*********************************************
		STEP INDICATOR SETUP
	*********************************************/
	setupStepIndicators : function()
	{
		var indicatorContent = '';
		for (var x = 1; x <= wizard.totalNumberOfSteps; x++)
		{
			indicatorContent += '<li id="step_indicator_' + x + '" title="Title - Tip goes here..." class="step_indicator"><a href="#">' + x + '</a></li>';
		}
		$('#step_indicator').append( indicatorContent );
	},
	/*********************************************
		NEXT STEP
	*********************************************/
	nextStep : function()
	{
		wizard.currentStep++;
		$('.step_indicator').removeClass('selected');
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			wizard.currentStep = wizard.totalNumberOfSteps;
			$('#'+wizard.totalNumberOfSteps).addClass('selected');
		}
		$('#step_indicator_'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},	
	/*********************************************
		PREVIOUS STEP
	*********************************************/
	previousStep : function()
	{
		wizard.currentStep--;
		$('.step_indicator').removeClass('selected');
		if (wizard.currentStep <= 1)
		{
			wizard.currentStep = 1;
			$('#step_indicator_1').addClass('selected');
		}
		$('#step_indicator_'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},
	/*********************************************
		SHOW STEP
	*********************************************/
	showStep: function(stepNumber)
	{
		var title = '';
		var message =  '';
		var stepNumber = parseInt(stepNumber);
		$('#cmdBack,#cmdNext').removeClass('disabled');
		$('.step').hide();
		//
		//	The number of steps should match the
		//	total number of steps for the wizard.
		//
		switch ( stepNumber )
		{
			case 1:
				var title = wizard.step1Title;
				var message = wizard.step1HelpText;
				$('#cmdBack').addClass('disabled');
				break;
			case 2:
				var title = wizard.step2Title;
				var message = wizard.step2HelpText;
				break;
			case 3:
				var title = wizard.step3Title;
				var message = wizard.step3HelpText;
				break;
			case 4:
				var title = wizard.step4Title;
				var message = wizard.step4HelpText;
				break;
			case 5:
				var title = wizard.step5Title;
				var message = wizard.step5HelpText;
				break;
		}
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			$('#cmdNext').addClass('disabled');
		}
		$('#step_'+stepNumber).show();
		$('#step_title').text( title );
		$('#step_message').text( message );
		dialogs.resize();
	}
};

$(document).ready(wizard.init);