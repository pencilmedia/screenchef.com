var wizard = 
{
	x : 1,
	
	init : function()
	{
		var errorMessage = 'Sample Error Message...';
		$('#cmdSend').bind('click', function(){ dialogs.displayError(errorMessage) })
		$('#cmdBack').bind('click', wizard.doBack);
		$('#cmdNext').bind('click', wizard.doNext);
		$('#rq1,#rq2,#rq3').bind('click', wizard.rqHandler);
		$('.chk_requested').bind('click', wizard.chkRequirementHandler);
		$('.chk_required').bind('click', wizard.chkRequirementHandler);
		$('#1').addClass('selected');
		$('.sec').bind('click',wizard.stepHandler);
		$('ul.steps *').Tooltip({delay:100,track:false,showBody: " - ", top:20,left:0});
		$('.step').hide();
		$('#step_1').show();
		$('.rq').removeClass('selected');
		$('#chk_cpf,#chk_aml,#chk_oi').bind('click', wizard.step2ChkHandler);
		$('input[@name=cpf]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=aml]').bind('click', wizard.step2ChkHandler2);
		$('input[@name=oi]').bind('click', wizard.step2ChkHandler2);
		
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
		wizard.x = this.id;
		wizard.showStep(this.id);
		return false;
	},
	
	doNext : function()
	{
		$('.sec').removeClass('selected');
		wizard.x++;
		$('#'+wizard.x).addClass('selected');
		if (wizard.x < 1) wizard.x = 1;
		if (wizard.x > 7)
		{
			wizard.x = 7;
			$('#7').addClass('selected');
		}
		wizard.showStep(wizard.x);
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
		if (wizard.x > 7)
		{
			wizard.x = 7;
		}
		wizard.showStep(wizard.x);
		return false;
	},
	
	showStep: function(stepNumber)
	{
		$('.view_controls, .table_actions').hide();
		$('#wrapper_action_dialog_content').css('background-color', '#fff');
		var stepNumber = parseInt(stepNumber);
		var title = '';
		var message =  '';
		switch ( stepNumber )
		{
			case 1:
				var title = 'Enter RFQ Information';
				var message = 'Set the RFQ Number and then fill in the RFQ attribute information.';
				break;
			case 2:
				var title = 'Define Data to Share';
				var message = 'Check all the information that you want to be share with suppliers.';
				break;
			case 3:
				var title = 'Specify Response Data Requirements';
				var message = 'Check which attributes are requested and required.';
				break;
			case 4:
				var title = 'Select Part Addition Rule';
				var message = 'Specify whic parts to add.  The highlighted rows in the key show you what will be added.';
				$('.rq').removeClass('selected');
				$('#rq1').addClass('selected');
				$('#req_quote1').attr('checked',true);
				break;
			case 5:
				var title = 'Select Suppliers';
				var message = 'Select which partners and suppliers to disseminate the RFQ.';
				break;
			case 6:
				var title = 'Select Price Scenarios';
				var message = 'Select the prize scenario to include in the RFQ.';
				break;

			case 7:
				var title = 'Add Attachments';
				var message = 'Optionally, add attachments to RFQ using the Add action on the Attachments table below.';
				$('.view_controls, .table_actions').show();
				$('#wrapper_action_dialog_content').css('background-color', '#f4f4f4');
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