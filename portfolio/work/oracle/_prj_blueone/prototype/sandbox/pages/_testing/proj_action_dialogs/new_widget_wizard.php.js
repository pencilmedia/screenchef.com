var wizard = 
{
	currentStep : 1,
	totalStep	: 3,
	route : 'Graph',
	
	init : function()
	{
		var errorMessage = 'Sample Error Message...';
		$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) });
		$('#r_handler').bind('change', wizard.routeHandler);
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
		wizard.toggleContent();
	},
	toggleContent : function() 
	{
		var toggler1 = jQuery('.toggle1');
		var content1 = jQuery('.toggle_me1');
		var toggler2 = jQuery('.toggle2');
		var content2 = jQuery('.toggle_me2');
	
		toggler1.click(function() { content1.toggle(); toggler1.toggleClass("collapse"); toggler1.toggleClass("expand"); return false;});
		toggler2.click(function() { content2.toggle(); toggler2.toggleClass("collapse"); toggler2.toggleClass("expand"); return false;});
	},
	routeHandler : function()
	{
		wizard.route = $("#r_handler option:selected").text();
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
		$('.sec').removeClass('selected');
		$('#' + this.id).addClass('selected');
		wizard.currentStep = this.id;
		wizard.showStep(this.id);
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
				var title = 'Widget Properties';
				var message = 'Name your widget, the type of visual you need (table or chart ) and choose wether you want to create a widget based on a previously saved search.  Once selected proceed to Step 2.';
				break;
			case 2:
				var title = 'Specify Report Content';
				var message = 'Specify the content of your report.  You can use a Saved Search or an Advanced Search query.';
				$('#view_control_title').text('Select File and Version');
				break;
			case 3:
				if ( wizard.route == 'Graph')
				{
					var title = 'Configure Graph';
					var message = 'Configure the Widget Graph by choosing type, data, function, and labels.  When done, "Finish" the wizard and you will be taken back to your dashboard.';
					$('#graph_content').show();
					$('#table_content').hide();
				} else {
					var title = 'Define Widget Format';
					var message = 'Choose the fields you want displayed as your column headers.';
					$('#graph_content').hide();
					$('#table_content').show();
				}

				break;
			case 4:
				var title = 'Step 4';
				var message = wizard.route;
				$('.rq').removeClass('selected');
				$('#rq1').addClass('selected');
				$('#req_quote1').attr('checked',true);
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


