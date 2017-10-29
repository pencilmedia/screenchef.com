var sc = 
{
	init : function()
	{
		jQuery('.shuttle_control li').bind('click',sc.doItemSelect);
		jQuery('#scl,#scr,#scu,#scd').bind('click',sc.controlCommander);
	},
	
	doItemSelect : function()
	{
		jQuery(this).toggleClass('selected');
	},
	
	controlCommander : function()
	{
		switch ( this.id )
		{
			case 'scr':
				alert ( this.text );
				jQuery('.shuttle_control li.selected').remove();
				jQuery('.shuttle_control li.selected').appendTo('<li>Test</li>');
				break;
			case 'scl':
				alert('move selected to the left');
				break;
			case 'scu':
				alert('move selected up');
				break;
			case 'scd':
				alert('move selected down');
				break;
		}
	}

};

jQuery(document).ready(sc.init);