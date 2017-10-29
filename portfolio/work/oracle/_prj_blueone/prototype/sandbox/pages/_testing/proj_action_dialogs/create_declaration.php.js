var page = 
{
	init : function()
	{
		$('#sel1, #sel_approved').click(page.approved);
		$('#sel2, #sel_other').click(page.other);
		$('#other1,#other2').hide();
	},
	approved: function()
	{
		$('#txt_supplier').show();
		$('#other1,#other2').hide();
	},
	other: function()
	{
		$('#txt_supplier').hide();
		$('#other1,#other2').show();
	}
};

$(document).ready(page.init);