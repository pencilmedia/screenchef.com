ux.upload = 
{
	file_name : '',
	
	init : function()
	{
		/* Position size palette */
		jQuery('#ux_palette').css( {top: '150px', left: '150px', width: '568px', height: '294px'} );
		jQuery('#cmd1,#cmd2,#cmd3,#cmd4,#cmd5').click(ux.upload.upload_onclick);
		jQuery('#cmdReplace').click(function(){ ux.upload.replace_onclick('#ux_palette') });
		jQuery('#cmdCancel').click(function(){ ux.upload.cancel_onclick('#ux_palette') });
		agile.ux.palette.onResize();
	},

	upload_onclick : function()
	{
		jQuery('#upload_mask,#upload_file').show();
		document.getElementById('file_name').value = '';
	},
	
	cancel_onclick : function()
	{
		jQuery('#upload_mask,#upload_file').toggle();
	},
	
	replace_onclick : function(el)
	{
		jQuery('#upload_mask,#upload_file').toggle();
	}
	
}

jQuery(document).ready(ux.upload.init);