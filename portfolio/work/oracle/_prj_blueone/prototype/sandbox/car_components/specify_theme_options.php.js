themes =
{
	init: function()
	{
		$('#cmdOptions').click(themes.doOptions);
		$('.background_value').blur(themes.setBackgroundValue);
		$('.background_text').change(themes.setTextValue);
	},
	submitForm: function()
	{
		document.frm1.submit();
		opener.location.reload()
		return false;
	},
	doOptions: function()
	{
		alert('Options To Do');
	},
	setBackgroundValue: function()
	{
		var id = this.id;
		$('#'+id+'_sample').css('background-color', this.value);
	},
	setTextValue: function()
	{
		var id = this.id.replace('_text','_sample');
		$('#'+id).css('color', this.value);
	}
}

$(document).ready(themes.init);