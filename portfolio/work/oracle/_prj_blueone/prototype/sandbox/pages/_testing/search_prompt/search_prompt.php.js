var anyall = {
	init : function()
	{
		jQuery('#promptApply').bind('click', anyall.doApplyPrompt);
		jQuery('#promptCancel').bind('click', anyall.doCancelPrompt);
	},
	doCancelPrompt : function()
	{
		jQuery('.prompt_mask, .prompt_shadow, .prompt').hide();
	},
	doApplyPrompt : function() 
	{
		anyall.doCancelPrompt();
		
        
		agile.ux.mss.pills.add('Test [All]', 'Test');
		
	}
}

jQuery(document).ready(anyall.init);