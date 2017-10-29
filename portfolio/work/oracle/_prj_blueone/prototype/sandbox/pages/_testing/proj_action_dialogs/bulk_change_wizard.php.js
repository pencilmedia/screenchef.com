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
		$('.step, #table_step_3_a, #table_step_3_b').hide();
		$('#step_1').show();
		$('.rq').removeClass('selected');
		$('#chk_cpf,#chk_aml,#chk_oi').bind('click', wizard.step2ChkHandler);
		$('input[@name=cpf]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=aml]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=oi]').bind('click', wizard.step2ChkHandler2);
		$('#4').hide();
		$('#cmdFinish').addClass('disabled');
		$('1').attr('title','1');
		$('2').attr('title','2');
		$('3').attr('title','3');
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
	},

	routeHandler : function()
	{
		wizard.route = this.id;
		if ( wizard.route == 'r1' )
		{
			wizard.totalStep = 3
			//$('#4').hide();
		}
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
				var message = 'Select to add, replace, or remove an Item on multiple assemblies.';
				$('#cmdNext').removeClass('disabled');
				$('#cmdFinish').addClass('disabled');
				break;
			case 2:
				if ( wizard.route == 'r1' ) 
				{
					var title = 'Select Item to Add';
					var message = 'Enter an Item to add to multiple assemblies.';
					$('2').attr('title',title + '-' + message);
					$('#step_2_a').show();
					$('#step_2_b').hide();
					$('#step_2_c').hide();
					$('#step_2_d').hide();
				}
				if ( wizard.route == 'r2' ) 
				{
					var title = 'Select Item to Replace';
					var message = 'Enter the Item to be replaced and then enter the replacement Item.';
					$('2').attr('title',title + '-' + message);

					$('#step_2_a').hide();
					$('#step_2_b').show();
					$('#step_2_c').hide();
					$('#step_2_d').hide();
				}
				if ( wizard.route == 'r3' ) 
				{
					var title = 'Select Item to Remove';
					var message = 'Enter an Item to remove from multiple assemblies.';
					$('2').attr('title',title + '-' + message);
					$('#step_2_c').show();
					$('#step_2_a').hide();
					$('#step_2_b').hide();
					$('#step_2_d').hide();
				}
				if ( wizard.route == 'r4' ) 
				{
					var title = 'Select Item';
					var message = 'Enter the Item to find the assemblies.';
					$('2').attr('title',title + '-' + message);
					$('#step_2_c').hide();
					$('#step_2_a').hide();
					$('#step_2_b').hide();
					$('#step_2_d').show();
				}


				$('#cmdNext').removeClass('disabled');
				$('#cmdFinish').addClass('disabled');
				break;
			case 3:
				if ( wizard.route == 'r1' ) 
				{
					var title = 'Identify Assemblies to Add to';
					var message = 'Select the assemblies to add the Item to.';
					$('3').attr('title',title + '-' + message);
					$('#table_step_3_a').show();
					$('#view_control_title').hide();
					$('#ac1').show();
				}
				if ( wizard.route == 'r2')
				{
					var title = 'Select Assemblies on which to Replace Item';
					var message = 'The item being replaced exists on the assemblies listed below. Select the assemblies on which to replace the item.';
					$('3').attr('title',title + '-' + message);
					$('#table_step_3_b').show();
					$('#view_control_title').hide();
				}
				if ( wizard.route == 'r3' ) 
				{
					var title = 'Select Assemblies from which to Remove Item';
					var message = 'The Item being removed exists on the assemblies listed below. Select the ones to remove this Item from.';
					$('#table_step_3_b').show();
					$('#view_control_title').hide();
				}

				if ( wizard.route == 'r4' ) 
				{
					var title = 'Select Assemblies to Add to Affected Items Table';
					var message = 'The Item exists on the assemblies listed below.  Select the assemblies to add to the Affected Items table of this change.';
					$('3').attr('title',title + '-' + message);
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