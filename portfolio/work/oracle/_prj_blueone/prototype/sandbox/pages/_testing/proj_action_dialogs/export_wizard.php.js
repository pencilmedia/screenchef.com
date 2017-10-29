var wizard = 
{
	currentStep : 1,
	totalStep	: 6,
	route : 'opt_customize',
	isCustomFilterMode : false,

	init : function()
	{
		$('#cmdBack').bind('click', wizard.doBack);
		$('#cmdNext').bind('click', wizard.doNext);
		$('#chkTableFormat').bind('click', wizard.doTableCheck);
		$('#1').addClass('selected');
		$('.sec').bind('click',wizard.stepHandler);
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('table').css('background-color', '#fff');
		$('#wrapper_action_dialog_content').css('background-color', '#f4f4f4');
		$('#selTableFormat').hide();
		$('#chkAll').click(wizard.checkAll);
		$('#cmdViewFilter').click(wizard.viewFilter);
		$('#opt_saved_filters, #opt_customize').click(wizard.doFilterSelect);
		$('.r_handler').click(wizard.routeHandler);
		$('#4').hide();
		wizard.showStep(1);
		$('*').bind('dblclick', wizard.test);
	},
	test : function(e)
	{
		var id = this.id;
		var boxWidth =  $('#'+id).css('width');
		$('#txt1').show();
		$('#txt1').css('top', document.getElementById(id).offsetTop - 2 + 'px');
		$('#txt1').css('left', document.getElementById(id).offsetLeft - 3 + 'px');
		$('#txt1').css('width', boxWidth );
		$('#txt1').attr('value', document.getElementById(id).innerHTML );
		$('#txt1').focus();
		
		e.stopPropagation();
	},
	routeHandler : function()
	{
		wizard.route = this.id;
		if ( wizard.route == 'opt_customize' )
		{
			wizard.totalStep = 6
			$('#4').show();
		}
		if ( wizard.route == 'opt_saved_filters' ) {
			$('#4').hide();	
		}
	},

	doFilterSelect : function()
	{

		if ( this.id == 'opt_customize')
		{			
			wizard.isCustomFilterMode = true;
			$('#req_sel_00').attr('disabled','disabled');
			$('#req_sel_01').attr('disabled','disabled');
			$('#req_sel_02').attr('disabled','disabled');
			$('#cmdViewFilter').addClass('disabled');
			$('#cmdViewFilter1').addClass('disabled');
			$('#cmdViewFilter2').addClass('disabled');

			$('.form_selectors').attr('disabled','');
			$('#txtLevels').attr('disabled','');
		} else {
			wizard.isCustomFilterMode = false;
			$('#req_sel_00').attr('disabled','');
			$('#req_sel_01').attr('disabled','');
			$('#req_sel_02').attr('disabled','');
			$('#cmdViewFilter').removeClass('disabled');
			$('#cmdViewFilter1').removeClass('disabled');
			$('#cmdViewFilter2').removeClass('disabled');
			
			$('#chkAll').attr('checked',false);
			$('#txtLevels').attr('disabled','disabled');
			$('.form_selectors').attr('disabled','disabled');
			$('input[@name=customize]').each(function()
			{
				this.checked = false;
			});	
		}

	},
	
	viewFilter : function()
	{
		var page = '/pages/_testing/proj_action_dialogs/default_part_filter.php';
		var w = 525;
		var h = 300;
		window.open (page, "_blank", "status=0,toolbar=0,resizable=1, width=" + w + ", height=" + h + ", scrollbars=0");
		return false;
	},
	
	checkAll : function()
	{
		if (this.checked)
		{
			$('input[@name=customize]').each(function()
			{
				this.checked = true;
			});					
		} else {
			$('input[@name=customize]').each(function()
			{
				this.checked = false;
			});					

		}		
	},

	stepHandler : function(e)
	{
		$('.sec').removeClass('selected');
		$('#' + this.id).addClass('selected');
		wizard.currentStep = this.id;
		/*
		if ( wizard.isCustomFilterMode )
		{
			wizard.currentStep = 3;
		} else  {
			wizard.currentStep = 6;
		}
		*/

		
		
		wizard.showStep(wizard.currentStep);
		return false;
	},
	
	doTableCheck : function()
	{
		if ( this.checked )
		{
			$('#cmdBack,#cmdNext').hide();
			$('#selTableFormat').show();
			$('#selTableFormat').attr('display','inline');
			$('#1,#2,#3,#4').hide();
		} else {
			$('#cmdBack,#cmdNext').show();
			$('#selTableFormat').attr('display','none');
			$('#selTableFormat').hide();
			if ( wizard.isCustomFilterMode )
			{
				$('#1,#2,#3,#4').show();
			} else {
				$('#1,#2,#3').show();
			}
		}
	},
	doNext : function()
	{
		if ( wizard.currentStep == 6 ) return;
		
		$('.sec').removeClass('selected');
		wizard.currentStep++;
		$('#'+wizard.currentStep).addClass('selected');
		if (wizard.currentStep < 1) wizard.currentStep = 1;

		if ( wizard.currentStep == 3 && wizard.isCustomFilterMode == false )
		{
			wizard.currentStep = 6;
		}


		if (wizard.currentStep > wizard.totalStep)
		{
			wizard.currentStep = wizard.totalStep;
			$('#'+wizard.totalStep).addClass('selected');
		}
		wizard.showStep(wizard.currentStep);

		return false;
	},	
	doBack : function()
	{
		$('.sec').removeClass('selected');
		wizard.currentStep--;
		$('#'+wizard.currentStep).addClass('selected');
		if (wizard.currentStep < 1)
		{
			wizard.currentStep = 1;
			$('#1').addClass('selected');
		}

		if ( wizard.currentStep == 5 && wizard.isCustomFilterMode == false )
		{
			wizard.currentStep = 2;
			$('#2').addClass('selected');
		}

		
		if (wizard.currentStep > wizard.totalStep)
		{
			wizard.currentStep = wizard.totalStep;
		}
		wizard.showStep(wizard.currentStep);
	
		return false;
	},
	showStep: function(stepNumber)
	{
		var stepNumber = parseInt(stepNumber);
		var title = '';
		var message =  '';
		$('#wrapper_action_dialog_content').css('background-color', '#fff');
		$('#cmdBack,#cmdNext').removeClass('disabled');
		$('.step').hide();
		$('#divTableFormat').hide();


		switch ( stepNumber )
		{
			case 1:
				var title = 'Select Objects to Export';
				var message = 'Select one or more objects to export.  The "Simple Export" option will export Title Block attributes only in a format that can be modified and re-imported.';
				$('#wrapper_action_dialog_content').css('background-color', '#f4f4f4');
				$('#cmdBack').addClass('disabled');
				$('.view_controls').show();
				$('#view_control_title').hide();
				$('#format_option').show();
				$('.table_actions').show();
				$('#ac1').show();
				$('#divTableFormat').show();
				break;
			case 2:
				var title = 'Select Object Content to Export';
				var message = 'Specify the content to export by selecting a default export filter, or customize content by selecting specific object tabs.';
				$(".table_actions").hide();
				$('.view_controls').hide();
				$('#3').removeClass('substep');
				break;
			case 3:
				var title = 'Select Object Content to Export';
				var message = 'Specify the content to export by selecting a default export filter, or customize content by selecting specific object tabs.';
				$(".table_actions").hide();
				$('.view_controls').hide();
				$('.selected').addClass('substep');
				break;
			case 4:
				var title = 'Select Object Content to Export';
				var message = 'Specify the content to export by selecting a default export filter, or customize content by selecting specific object tabs.';
				$('.view_controls').hide();
				$('#3').addClass('substep');
				$('#4').removeClass('selected');
				break;
			case 5:
				var title = 'Select Object Content to Export';
				var message = 'Specify the content to export by selecting a default export filter, or customize content by selecting specific object tabs.';
				$('.view_controls').hide();
				$('#3').addClass('substep');
				$('#4').removeClass('selected');
				break;
			case 6:
				var title = 'Specify Export Properties';
				var message = 'Enter the export properties and specify the export format.';
				$('#cmdNext').addClass('disabled');
				$('#3').removeClass('substep');
				
				if ( wizard.isCustomFilterMode == false )
				{ 
					$('#3').addClass('selected');
				} else {
					$('#4').addClass('selected');
				}
				
				break;
		}

		$('#wStepTitle').text( title );
		$('#step_message').text( message );
		$('#step_'+stepNumber).show();
		dialogs.resize();
		//alert( wizard.currentStep);

	}
};

$(document).ready(wizard.init);