var page = 
{
	init : function()
	{
		$('#progress_indicator_message,#step_2,#cmdSaveLog,#cmdClose').hide();
		$('#cmdImport').click(page.doImport);
		$('.toggle_header, #toggle_F1,#toggle_F2,#toggle_F3,#toggle_F4').click( ux.utils.toggler );


	},

	doImport : function()
	{
		page.animate(document.body);
	},

	showResults : function()
	{
		$('#step_message,#step_1,#cmdImport, #cmdCancel').hide();
		$('#progress_indicator_message,#step_2,#cmdSaveLog,#cmdClose').show();
		$('#progress_indicator_message').css('max-width','100%');
		page.importAnimation();
		$('#page_message').hide();
		dialogs.resize();
		
	},
	importAnimation : function()
	{
		$('#results_01,#results_02,#results_03,#results_04').html('&nbsp;');
		$('#toggle_F4').show();
		$('.accept+span').show();


		$('#results_01').html('02/10/2008 06:10:22 AM GMT');
		$('#results_02').html('02/10/2008 06:15:03 AM GMT');
		$('#results_03').html('201');
		$('#results_04').html('201');
		$('#results_04').html('3');

		
		$('#results_05l').show();
		$('#results_05').show();
		$('#results_06l').show();
		$('#results_06').show();
		$('#results_07l').show();
		$('#results_07').show();
		$('#cmdSaveLog, #cmdImportAgain').removeClass('disabled');
		$('#cmdClose').removeClass('disabled');
		$('#cmdCancel').hide();
		$('#cmdClose').show();

	},
	
	animate : function(element)
	{
		var el = element;
		jQuery(el).prepend('<div class="ux_palette_mask"></div>');
		setTimeout( function() { jQuery('.ux_palette_mask').remove() }, 4000 );
		setTimeout( function() { page.showResults() }, 4000 );
	}
	
};
$(document).ready(page.init);