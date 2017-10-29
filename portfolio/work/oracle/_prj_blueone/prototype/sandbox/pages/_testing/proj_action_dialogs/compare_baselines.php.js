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
	step1HelpText: 'Select the baselines to compare and click on Continue.',
	step2Title : 'Step 2',
	step2HelpText: 'Review the differences between selected baselines.  You may expand the parent levels to review differences at the levels below and click on the view icon to see the details.',
	//step3Title : 'Step 3',
	//step3HelpText: 'Etiam vel nibh. Quisque massa nunc, molestie quis.',
	//step4Title : 'Step 4',
	//step4HelpText : 'Ultricies nec, tempor aliquet, diam.',
	//step5Title : 'Step 5',
	//step5HelpText : 'Phasellus pharetra malesuada magna.',
	cmdNextAlt01HTML : 'Continue<em class="arrow_next">&nbsp;</em>',
	cmdCancelAlt01HTML : '<em class="cancel">&nbsp;</em>Cancel</span>',
	cmdCancelAlt02HTML : '<em class="cancel">&nbsp;</em>Close</span>',

	/*********************************************
		WIZARD INIT
	*********************************************/
	init : function()
	{
		wizard.setupStepIndicators();
		wizard.showStep(1);
		jQuery('#cmdNext').bind('click', wizard.nextStep);
		jQuery('#cmdBack').bind('click', wizard.previousStep);
		jQuery('#Map').bind('click', wizard.showinfoPop);
		jQuery('#cmdCancel').hover(function(){ jQuery('#cmdNext').blur(); },
				function(){ jQuery('#cmdNext').focus(); } );
		jQuery('#cmdBack').hover(function(){ jQuery('#cmdCancel').blur(); },
				function(){ jQuery('#cmdCancel').focus(); } );
		jQuery('.step_indicator').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		jQuery('#step_indicator_1').addClass('selected');
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
		jQuery('#step_indicator').append( indicatorContent );
	},
	/*********************************************
		NEXT STEP
	*********************************************/
	nextStep : function()
	{
		wizard.currentStep++;
		jQuery('.step_indicator').removeClass('selected');
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			wizard.currentStep = wizard.totalNumberOfSteps;
			jQuery('#'+wizard.totalNumberOfSteps).addClass('selected');
		}
		jQuery('#step_indicator_'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},	
	/*********************************************
		PREVIOUS STEP
	*********************************************/
	previousStep : function()
	{
		wizard.currentStep--;
		jQuery('.step_indicator').removeClass('selected');
		if (wizard.currentStep <= 1)
		{
			wizard.currentStep = 1;
			jQuery('#step_indicator_1').addClass('selected');
		}
		jQuery('#step_indicator_'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},
	/*********************************************
		SHOW PALETTE
	*********************************************/
	showinfoPop: function()
	{
		infoPop.init();
		jQuery('#ux_palette').show();
	},
	/*********************************************
		SHOW STEP
	*********************************************/
	showStep: function(stepNumber)
	{
		var title = '';
		var message =  '';
		var stepNumber = parseInt(stepNumber);
		jQuery('#cmdBack,#cmdNext').hide();
		jQuery('.step').hide();
		jQuery('#ux_palette').hide();
		//
		//	The number of steps should match the
		//	total number of steps for the wizard.
		//
		switch ( stepNumber )
		{
			case 1:
				var title = wizard.step1Title;
				var message = wizard.step1HelpText;
				jQuery('#cmdCancel > span').html(wizard.cmdCancelAlt01HTML);
				jQuery('#cmdBack').hide();
				jQuery('#cmdNext > span').html(wizard.cmdNextAlt01HTML);
				jQuery('#cmdNext').show().focus();
				break;
			case 2:
				var title = wizard.step2Title;
				var message = wizard.step2HelpText;
				jQuery('#cmdCancel > span').html(wizard.cmdCancelAlt02HTML);
				jQuery('#cmdBack').show();
				jQuery('#cmdNext').hide();
				jQuery('#cmdCancel').focus();
				break;
		}
		if (wizard.currentStep > wizard.totalNumberOfSteps)
		{
			jQuery('#cmdBack').show();
		}
		jQuery('#step_'+stepNumber).show();
		jQuery('#step_title').text( title );
		jQuery('#step_message').text( message );
		dialogs.resize();
	}
};

var infoPop = 
{
	i : 0,
	cmdCancelAlt01HTML : '<em class="cancel">&nbsp;</em>Close</span>',

	init: function ()
	{
		infoPop.prepSkins();
		infoPop.prepOptions();
		infoPop.toggleContent();
		jQuery('#ux_palette').css({width:300,height:325,top:40,right:40});
		jQuery('#ux_palette_main').css({height:260});
		//agile.ux.palette.onResize();
		agile.ux.palette.paletteResizeEvent.subscribe(infoPop.doResize);
		jQuery('#ux_palette_cmdBack,#ux_palette_cmdNext').hide();	
		jQuery('#ux_palette_cmdCancel > span').html(infoPop.cmdCancelAlt01HTML);
		jQuery('#ux_palette_cmdCancel').focus();
	},

	doResize: function ()
	{
		// **** For any special palette specific resizing logic. **** //
		agile.ux.palette._main.style.height = '180px';
	},

	prepSkins: function ()
	{
		jQuery('.skins').click(infoPop.skinsOnClick);
	},

	skinsOnClick: function ()
	{
		jQuery('#dcss').attr("href", 'skins/ux_palette_' + this.id + '.css'); 
		jQuery('#ux_palette').show();
	},

	prepOptions: function ()
	{
		jQuery('.palette_options').click(infoPop.optionsOnClick);
	},

	optionsOnClick: function ()
	{
		switch ( this.id )
		{
			case 'tab':
				jQuery('#ux_palette_top_action_bar').toggle();
				break;
			case 'ma':
				jQuery('#ux_palette_message_area').toggle();
				break
			case 'bab':
				jQuery('#ux_palette_bottom_action_bar').toggle();
				break
		}
		agile.ux.palette.onResize();
	},


	/*********************************************
		COLLAPSE/EXPAND
	*********************************************/

	toggleContent: function () {
		
		var toggler1 = jQuery('.toggle1');
		var content1 = jQuery('.toggle_content1');
		var toggler2 = jQuery('.toggle2');
		var content2 = jQuery('.toggle_content2');
	
		toggler1.click(function() { content1.toggle(); toggler1.toggleClass("collapse"); toggler1.toggleClass("expand"); return false;});
		toggler2.click(function() { content2.toggle(); toggler2.toggleClass("collapse"); toggler2.toggleClass("expand"); return false;});
	}

};

jQuery(document).ready(wizard.init);