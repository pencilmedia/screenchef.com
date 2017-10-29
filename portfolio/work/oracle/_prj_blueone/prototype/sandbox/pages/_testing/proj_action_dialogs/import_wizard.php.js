var wizard = 
{
	currentStep : 1,
	totalNumberOfSteps	: 5,
	showDataMapping : true,
	validateStatus : false,
	init : function()
	{
		wizard.setupStepIndicators();
		$('.prompt_mask').hide();
		$('#cmdBack').bind('click', wizard.doBack);
		$('#cmdNext').bind('click', wizard.doNext);
		$('#trans_template').click(wizard.doTransTemplate);
		$('#cmdImport').bind('click', wizard.doImport);
		$('#cmdValidate').click(wizard.doValidate);
		$('#cmdPreferences').bind('click', wizard.preferences_onclick);
		$('#cmdImportAgain').bind('click',function(){  window.location.href = 'import_wizard.php';});
		$('.sec').bind('click',wizard.stepHandler);
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('#toggle_F3, #toggle_F3_content, #cmdSaveLog, #cmdImportAgain, #cmdClose, #config_options, #content_type_mfrparts, #r5_dt, #r5_dd, #progress_indicator_message').hide();
		$('#optDataMapping_default, #optDataMapping_yes, #optDataMapping_no').bind('click',wizard.dataMappingHandler);
		$('#file_selector').bind('change',function(){ $('#config_options').show();$('#cmdNext').removeClass('disabled');});
		$('#sel_00').bind('change',wizard.contentTypeOnChange);
		$('#optTransformationFile_yes, #optTransformationFile_no').bind('click',wizard.dataTransformationHandler);
		$('#optRedline_yes, #optRedline_no').bind('click',wizard.redlineHandler);
		$('#cmdShowMapping').click(function(){ $('.import_mapping').toggle()});
		$('.toggle_header, #toggle_F1,#toggle_F2,#toggle_F3,#toggle_F4').click( ux.utils.toggler );
		$('#1').addClass('selected');
		$('#txtMappingFile, #txtTransformationFile').attr('disabled','disabled');
		$('.toggler').click( ux.utils.toggler );
		$('h4.toggler + dl').hide();
		wizard.showStep(1);
		$('.fieldSetToggler').click(wizard.toggleFieldSets);

		$('.input_lists ul').toggle();
		$('#label01_content ul').toggle();
		
		$('.accept').hide();
		$('.accept+span').hide();

		$('#step_2.step fieldset').css('border-top','1px solid #ddd');
		$('#label01_content').css('border','1px solid #ddd');

		$('h4.toggler+div').hide();
		$('h4.toggler').toggleClass('expand');
		
		$('#FC00').toggleClass('expand');
		$('#FC00_content').toggle();
	},

	setupStepIndicators : function()
	{
		var indicatorContent = '';
		for (var x = 1; x <= wizard.totalNumberOfSteps; x++)
		{
			indicatorContent += '<li id="' + x + '" title="Title - Tip goes here..." class="sec"><a href="#">' + x + '</a></li>';
		}
		$('#step_indicator').append( indicatorContent );
	},
	contentTypeOnChange : function()
	{
		if (this.value == 'mfrparts')
		{
			$('#content_type_items').hide();
			$('#content_type_mfrparts').show();
		} else {
			$('#content_type_items').show();
			$('#content_type_mfrparts').hide();
		}
	},
	redlineHandler : function()
	{
		if ( this.value == 'yes')
		{
			$('#ssl_00').attr('disabled','disabled');
			$('#cmdRedline').addClass('disabled');
		} else {
			$('#ssl_00').attr('disabled','');
			$('#cmdRedline').removeClass('disabled');
		}
	},
	dataMappingHandler : function()
	{
		if ( this.value == 'yes')
		{
			wizard.showDataMapping = true;
			$('#txtMappingFile').attr('disabled','disabled');
		} else {
			wizard.showDataMapping = false;
			$('#txtMappingFile').attr('disabled','');
		}
	},
	dataTransformationHandler : function()
	{
		if ( this.value == 'yes')
		{
			$('#txtTransformationFile').attr('disabled','');
		} else {
			$('#txtTransformationFile').attr('disabled','disabled');
		}
	},

	togglerxxx : function()
	{
		var el		= '#'+this.id;
		var content = el+'_content';
		$(this).toggleClass('expand');
		$(content).toggle();
	},
	
	stepHandler : function(e)
	{
		$('.sec').removeClass('selected');
		$('#' + this.id).addClass('selected');
		wizard.currentStep = this.id;
		wizard.showStep(wizard.currentStep);
		return false;
	},
	
	doNext : function()
	{
		wizard.currentStep++;
		$('.sec').removeClass('selected');
		if (wizard.currentStep >= wizard.totalNumberOfSteps)
		{
			wizard.currentStep = wizard.totalNumberOfSteps;
			$('#'+wizard.totalNumberOfSteps).addClass('selected');
		}
		$('#'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},	
	doBack : function()
	{
		wizard.currentStep--;
		$('.sec').removeClass('selected');
		if (wizard.currentStep <= 1)
		{
			wizard.currentStep = 1;
			$('#1').addClass('selected');
		}
		$('#'+wizard.currentStep).addClass('selected');
		wizard.showStep(wizard.currentStep);
	},
	doTransTemplate : function()
	{
		alert('To do: Transformation Template');
	},
	doImport : function()
	{
		$('#wizard_steps, #step_indicator').hide();
		$('#cmdPreferences, #cmdBack, #cmdNext, #cmdValidate').hide();
		$('#results_01,#results_02,#results_03,#results_04').html('&nbsp;');
		$('#toggle_F4_content div').hide();
		$('#toggle_F4_content dt').hide();		
		$('#cmdSaveLog, #cmdImportAgain').show();
		wizard.showStep(5);
		$('#toggle_F2,#toggle_F2_content').hide();
		$('#toggle_F3,#toggle_F3_content').show();

		$('#toggle_F1').removeClass('expand');
		$('#toggle_F1_content').show();
		$('#toggle_F3').removeClass('expand');
		
		$('#toggle_F4').removeClass('expand');
		$('#toggle_F4_content').show();
		
		
		//$(document).ProgressIndicatorShow('','Import Started...');
		$('#cmdSaveLog, #cmdImportAgain').addClass('disabled');
		wizard.importAnimation();
		if ( wizard.validateStatus )
		{
			$('#header_title').html('Validate Log');
		} else {
			$('#header_title').html('Import Log');
			$('#cmdImport').hide();
		}
		var message = 'Results are described below.  This page will refresh every 30 seconds.';
		$('#step_message').text( message );

		$('#step_message').hide();
		$('#progress_indicator_message').show();
		$('#progress_indicator_message').css('max-width','100%');

		dialogs.resize();
	},
	
	doValidate : function()
	{	
		wizard.validateStatus = true;
		$('span.accept').show();
		$('.accept+span').show();
		$('#cmdImport').addClass('disabled').show();
		var message = 'Review the summary of your import definition.  You can validate your definition to understand what import issues may exist.';
		$('#step_message').text( message );
		$('#r1_label').html('Validation Started:');
		$('#r2_label').html('Validation Completed:');
		$('#r3_label').html('Warnings:');
		$('#r4_label').html('Errors:');
		$('#r5_dt').show();
		wizard.doImport(1);
		$('#cmdValidate').hide();
		$('#toggle_F4_content dd div').css('padding-right','45px');
		$('#toggle_F4_content dd span.accept').css('padding-left','45px');

	},
	
	
	preferences_onclick : function()
	{
		var page = '/pages/_testing/proj_action_dialogs/import_preferences.php';
		var w = 625;
		var h = 375;
		window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=0");
	},
	
	importAnimation : function()
	{
		$('#results_01,#results_02,#results_03,#results_04').html('&nbsp;');
		$('#toggle_F4').show();
		$('.accept+span').show();


		if ( wizard.validateStatus )
		{
			r3_msg = '0';
			r4_msg = '4';
		} else {
			r3_msg = '201 (10 rejected, 2 ignored)';
			r4_msg = '201';
		}

		
		setTimeout( function() { $('#results_01').html('02/10/2008 06:10:22 AM GMT') }, 1000 );
		setTimeout( function() { $('#results_02').html('02/10/2008 06:15:03 AM GMT') }, 7000 );
		setTimeout( function() { $('#results_03').html(r3_msg) }, 2000 );
		setTimeout( function() { $('#results_04').html(r4_msg) }, 3000 );
		setTimeout( function() { $('#results_04').html(r4_msg) }, 3000 );

		if ( wizard.validateStatus )
		{
			$('div.accept').show();
			$('.accept+span').show();
			setTimeout( function() { $('#r5_dd').show() }, 4000 );
			setTimeout( function() { $('#cmdImport').removeClass('disabled') }, 8000 );
		}
		
		setTimeout( function() { $('#results_05l').show() }, 4000 );
		setTimeout( function() { $('#results_05').show() }, 4000 );
		setTimeout( function() { $('#results_06l').show() }, 5000 );
		setTimeout( function() { $('#results_06').show() }, 5000 );
		setTimeout( function() { $('#results_07l').show() }, 6000 );
		setTimeout( function() { $('#results_07').show() }, 6000 );
		setTimeout( function() { $('#cmdSaveLog, #cmdImportAgain').removeClass('disabled') }, 8000 );
		setTimeout( function() { $('#cmdClose').removeClass('disabled') }, 8000 );
		//setTimeout( function() { $('#cmdCancel span').text('Close') }, 8000 );
		setTimeout( function() { $('#cmdCancel').hide() }, 8000 );
		setTimeout( function() { $('#cmdClose').show() }, 8000 );

	},
	showStep: function(stepNumber)
	{
		var stepNumber = parseInt(stepNumber);
		var title = '';
		var message =  '';
		$('#cmdBack,#cmdNext').removeClass('disabled');
		$('.step').hide();
		switch ( stepNumber )
		{
			case 1:
				var title = 'Select File';
				var message = 'Select a file to import.  The following file types are supported; Excel (xls), Text (txt / csv), Product Data Exchange (pdx) and Agile XML (axml).';
				$('#cmdBack,#cmdValidate, #cmdImport').addClass('disabled');
				
				break;
			case 2:
				var title = 'Specify File Content';
				var message = 'Specify the content to import from the options below.';
				break;
			case 3:
				var title = 'Select Content Options';
				var message = 'Select a mapping and data transformation method."  If you are importing Item or Price content specify whether or not a Change Order is required for modifications.';
				$('#tag01,#tag02,#tag03').toggleClass('expand');
				$('#tag01_content,#tag02_content,#tag03_content').toggle();
				break;
			case 4:
				var title = 'Specify Attribute Mapping';
				var message = 'Specify and review attribute mapping definition.';
				$('#cmdBack,#cmdValidate, #cmdImport').removeClass('disabled');
				break;
			case 5:
				$('#toggle_F4_content p, #toggle_F4').hide();
				$('#toggle_F4_content dt').hide();
				$('#toggle_F1, #toggle_F2').toggleClass('expand');
				$('#toggle_F1_content,#toggle_F2_content').toggle();
				var title = 'Review Import Definition';
				var message = 'Review the summary of your import definition.  You can validate your definition to understand what import issues may exist.';
				break;
		}
		if (wizard.currentStep >= wizard.totalNumberOfSteps)	
		$('#cmdNext').addClass('disabled');
		$('#wStepTitle').text( title );
		$('#step_message').text( message );
		$('#step_'+stepNumber).show();
		dialogs.resize();
	}
};
/*
*/
$(document).ready(wizard.init);