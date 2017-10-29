var wizard = 
{
	/*********************************************
		WIZARD STEP CONFIGURATION
	*********************************************/
	currentStep : 1,			// Should default to 1.
	totalNumberOfSteps : 2, 	// Total number of steps.

	/*********************************************
		TITLE AND HELP TEXT CONFIGURATION
	*********************************************/
	//
	//	The number of step titles and help text should
	//	match the total number of steps for the wizard.
	//
	step1Title : 'Step 1',
	step1HelpText: 'Enter the new part information. You can click enter responses to complete the response information for this alternate part.',
	step2Title : 'Step 2',
	step2HelpText: 'Select the objects that you would like to add this File Folder to.',
	cmdNextAlt01HTML : 'Enter Responses<em class="arrow_next">&nbsp;</em>',
	cmdNextAlt02HTML : '<em class="save_dialog">&nbsp;</em>Finish',
	/*********************************************
		WIZARD INIT
	*********************************************/
	init : function()
	{
		//wizard.setupStepIndicators();
		wizard.showStep(1);
		$('#cmdNext').bind('click', wizard.nextStep);
		$('#cmdBack').bind('click', wizard.previousStep);
		$('.step_indicator').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('#step_indicator_1').addClass('selected');
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
		$('#cmdBack,#cmdNext').hide();
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
				$('#cmdBack').hide();
				$('#cmdNext').show();
				$('#cmdNext > span').html(wizard.cmdNextAlt01HTML);
				$('#cmdAdd').show();
				$('#cmdFinish').hide();
				break;
			case 2:
				var title = wizard.step2Title;
				var message = wizard.step2HelpText;
				$('#cmdBack, #cmdNext').show();
				$('#cmdAdd').hide();
				$('#cmdFinish').show();
				break;
		}
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			$('#cmdBack').show();
			$('#cmdNext').hide();
		}
		$('#step_'+stepNumber).show();
		$('#step_title').text( title );
		$('#step_message').text( message );
		dialogs.resize();
	}
};

$(document).ready(wizard.init);