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
	step1HelpText: 'Select to attach the latest version of this FileFolder, or a specific version.  Selecting the latest version will ensure that the objects you attach this File Folder to will always reflect the latest version.',
	step2Title : 'Step 2',
	step2HelpText: 'Select the objects that you would like to add this File Folder to.',
	cmdNextAlt01HTML : 'Continue<em class="arrow_next">&nbsp;</em>',
	cmdNextAlt02HTML : '<em class="save_dialog">&nbsp;</em>Attach',
	/*********************************************
		WIZARD INIT
	*********************************************/
	init : function()
	{
		//wizard.setupStepIndicators();
		wizard.showStep(1);
		$('#cmdNext').bind('click', wizard.nextStep);
		$('#cmdBack').bind('click', wizard.previousStep);
		$('#chk_00').bind('click', wizard.applySelectAll);
		$('#chk_01,#chk_02,#chk_03').bind('click', wizard.uncheckFirst);
		$('select').bind('click', wizard.processSelect);
		$('.step_indicator').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('#step_indicator_1').addClass('selected');
	},
	
	/*********************************************
		Check if latest choosen
	*********************************************/
	processSelect : function()
	{
		var list_selector = this.name;
		var checkboxes = $('#'+ list_selector +' input[@type=checkbox]');
		var labels = $('#'+ list_selector +' label');
		var isLatest = (this.value.indexOf("Latest") == -1) ? false: true;
		wizard.checkforLatest(isLatest,checkboxes,labels);
	},
	
	checkforLatest : function(isDefault,checkboxes, labels)
	{ 
		if (isDefault)
		{
			// checked all Checkboxes, and disable labels and  checkboxes
			wizard.setCheckboxes (checkboxes,true);
			wizard.disabledCheckboxes(checkboxes,true);		
			wizard.disabledLabels(labels,true);
		}
		else
		{
			//Enable first check box and then all other checkboxes
			wizard.disabledCheckboxes(checkboxes,false);		
			wizard.disabledLabels(labels,false);
		};
	},
	
	uncheckFirst : function() 
	{ 
		wizard.setCheckboxes ($('#'+ this.name+' input[@type=checkbox]:first'),false);
	},
	
	uncheckAllOther : function(checkboxes,val) 
	{ 
		checkboxes.each( function(i){ if(i!=0) {wizard.disabledCheckbox(this,val);}; });
	},
	
	applySelectAll : function() 
	{ 
		var list_selector_01 = this.name;
		var checkboxes = $('#'+ list_selector_01+' input[@type=checkbox]');
		
		// apply first checkbox to all other chekboxes.
		wizard.applyAllOtherCheckboxes (checkboxes, checkboxes[0].checked );
	},
	
	applyAllOtherCheckboxes : function(checkboxes,val) 
	{ 
		checkboxes.each( function(i){ if(i!=0) {wizard.setCheckbox(this,val);}; });
	},
	
	disabledCheckboxes : function(checkboxes,val) { checkboxes.each(function(){this.disabled = val});},	
	disabledCheckbox : function(checkbox,val) { checkbox.disabled = val ;},	
	setCheckboxes : function(checkboxes,val) { checkboxes.each(function(){this.checked = val});},
	setCheckbox : function(checkbox,val) { checkbox.checked = val;},
	disabledLabels : function(labels,val) 
	{	
		labels.each(function(){ if (val) this.className = 'disabled'; else this.className = '';}); 
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
				var checkboxes = $('input[@type=checkbox]');
				var labels = $('label');
				var isLatest = ($('#selector_01')[0].value.indexOf("Latest") == -1) ? false: true;
				wizard.checkforLatest(isLatest,checkboxes,labels);
				break;
			case 2:
				var title = wizard.step2Title;
				var message = wizard.step2HelpText;
				$('#cmdBack, #cmdNext').show();
				var checkboxes = $('input[@type=checkbox]');
				var labels = $('label');
				break;
		}
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			$('#cmdBack').show();
			$('#cmdNext > span').html(wizard.cmdNextAlt02HTML);
		}
		$('#step_'+stepNumber).show();
		$('#step_title').text( title );
		$('#step_message').text( message );
		dialogs.resize();
	}
};

$(document).ready(wizard.init);