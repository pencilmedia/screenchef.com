var wizard = 
{
	currentStep : 1,
	totalStep	: 3,
	route : 'r1',
	
	init : function()
	{
		var errorMessage = 'Sample Error Message...';
		$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) });
		$('.r_handler').bind('click', wizard.routeHandler);
		$('#cmdBack').bind('click', wizard.doBack);
		$('#cmdNext').bind('click', wizard.doNext);
		$('#rq1,#rq2,#rq3').bind('click', wizard.rqHandler);
		$('.chk_requested').bind('click', wizard.chkRequirementHandler);
		$('.chk_required').bind('click', wizard.chkRequirementHandler);
		$('#1').addClass('selected');
		$('.sec').bind('click',wizard.stepHandler);
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('.step, #table_step_3_a, #table_step_3_b').hide();
		$('#step_1').show();
		$('.rq').removeClass('selected');
		$('#chk_cpf,#chk_aml,#chk_oi').bind('click', wizard.step2ChkHandler);
		$('input[@name=cpf]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=aml]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=oi]').bind('click', wizard.step2ChkHandler2);
		$('#4').hide();
		$('#cmdFinish').addClass('disabled');
	},

	routeHandler : function()
	{
		wizard.route = this.id;
		if ( wizard.route == 'r1' )
		{
			wizard.totalStep = 3
			//$('#4').hide();
		}
		/*if ( wizard.route == 'r2' || wizard.route == 'r3' )
		{
			wizard.totalStep = 4
			$('#4').show();
		}*/
	},
	
	step2ChkHandler : function()
	{
		var sec = '';
		switch ( this.id )
		{
			case 'chk_cpf':
				sec = 'cpf';
				break;
			case 'chk_aml':
				sec = 'aml';
				break;
			case 'chk_oi':
				sec = 'oi';
				break;
		}

		if (this.checked)
		{	
			$('input[@name=' + sec + ']').each(function()
			{
				this.checked = true;
			});					
		} else {
			$('input[@name=' + sec + ']').each(function()
			{
				this.checked = false;
			});					

		}

	},

	step2ChkHandler2 : function()
	{
		switch ( this.name )
		{
			case 'cpf':
				if ( this.checked == false)  $('#chk_cpf').attr('checked', false);
				break;
			case 'aml':
				if ( this.checked == false)  $('#chk_aml').attr('checked', false);
				break;
			case 'oi':
				if ( this.checked == false)  $('#chk_oi').attr('checked', false);
				break;
		}
	},


	chkRequirementHandler : function()
	{
		if ( this.className.indexOf('chk_requested') != -1 )
		{
			var o = '#' + this.id.replace('requested_', 'required_')
			$(o).attr('checked', '');
		} else {
			var o = '#' + this.id.replace('required_', 'requested_')
			$(o).attr('checked', 'checked');
		}
	},
	

	rqHandler : function()
	{
		$('.rq').removeClass('selected');
		$('#req_quote1,#req_quote2,#req_quote3').attr('checked', false);
		$('#'+this.id ).addClass('selected');
		$('#req_'+this.id ).attr('checked',true);
		
		if (this.id == 'rq1') $('#req_quote1').attr('checked', true);
		if (this.id == 'rq2') $('#req_quote2').attr('checked', true);
		if (this.id == 'rq3') $('#req_quote3').attr('checked', true);
	},
	
	stepHandler : function(e)
	{
		//$('.sec').removeClass('selected');
		//$('#' + this.id).addClass('selected');
		//wizard.currentStep = this.id;
		//wizard.showStep(this.id);
		return false;
	},
	
	doNext : function()
	{
		$('.sec').removeClass('selected');
		wizard.currentStep++;
		$('#'+wizard.currentStep).addClass('selected');
		if (wizard.currentStep < 1) wizard.currentStep = 1;
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
		if (wizard.currentStep > wizard.totalStep)
		{
			wizard.currentStep = wizard.totalStep;
		}
		wizard.showStep(wizard.currentStep);
		return false;
	},
	
	showStep: function(stepNumber)
	{
		$('.view_controls, .table_actions, #ac1, #ac2, #table_step_3_a, #table_step_3_b').hide();
		$('#wrapper_action_dialog_content').css('background-color', '#fff');
		var stepNumber = parseInt(stepNumber);
		var title = '';
		var message =  '';
		switch ( stepNumber )
		{
			case 1:
				var title = 'Select Bulk Change Option';
				var message = 'Select to replace or remove a Manufacturer Part from an item.';
				$('#cmdNext').removeClass('disabled');
				$('#cmdFinish').addClass('disabled');
				break;
			case 2:
				if ( wizard.route == 'r1' ) 
				{
					var title = 'Select Manufacturer Part to Replace';
					var message = 'Enter the Manufacturer Part to be replaced and then enter the replacement Manufacturer Part.';
					$('#step_2_a').show();
					$('#step_2_b').hide();
					$('#step_2_c').hide();
				}
				if ( wizard.route == 'r2' ) 
				{
					var title = 'Select Manufacturer Part to Remove';
					var message = 'Enter Manufacturer Part to be removed.';
					$('#step_2_a').hide();
					$('#step_2_b').show();
					$('#step_2_c').hide();
				}
				if ( wizard.route == 'r3' ) 
				{
					var title = 'Select Manufacturer Part';
					var message = 'Enter the Manufacturer Part to find the Items.';
					$('#step_2_c').show();
					$('#step_2_a').hide();
					$('#step_2_b').hide();
				}
				$('#cmdNext').removeClass('disabled');
				$('#cmdFinish').addClass('disabled');
				break;
			case 3:
				if ( wizard.route == 'r1' ) 
				{
					var title = 'Select Items on which to Replace Manufacturer Part';
					var message = 'The Manufacturer Part being replaced exists on the Items listed below. Select the Items on which to replace the Manufacturer Part.';
					$('#table_step_3_a').show();
					$('#view_control_title').hide();
					$('#ac1').hide();
				}
				if ( wizard.route == 'r2')
				{
					var title = 'Select Items from which to Remove Manufacturer Part';
					var message = 'The Manufacturer Part being removed exists on the Items listed below. Select the Items from which to remove the Manufacturer Part.';
					$('#table_step_3_b').show();
					$('#view_control_title').hide();
				}
				if ( wizard.route == 'r3' ) 
				{
					var title = 'Select Items to Add to Affected Items Table';
					var message = 'The Manufacturer Part exists on the Items listed below. Select the Items to add to the Affected Items table of this change.';
					$('#table_step_3_b').show();
					$('#view_control_title').hide();
				}
				$('.view_controls').show();
				$('.table_actions').show();
				$('#cmdAdd, #cmdRemove, #cmdFinish').removeClass('disabled');
				$('#cmdNext').addClass('disabled');
				break;
		}
		$('#wStepTitle').text( title );
		$('#step_message').text( message );
		$('.step').hide();
		$('#step_'+stepNumber).show();
		dialogs.resize();
	}
	
};

$(document).ready(wizard.init);