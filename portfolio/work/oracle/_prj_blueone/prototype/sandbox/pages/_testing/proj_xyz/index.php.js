function init()
{
	$('#cmdOptions').toggle(
							
		function ()
		{
        	$('.finder').show();
      	},
      	function ()
		{
        	$('.finder').hide();
		}
							
							
							);
	$('.finder').hide();
	
	$('#cmdDisplayLevels').click(function(){jQuery('.prompt_mask,.prompt_shadow').show();});
	
	$('#cmdCancel').click( function(){jQuery('.prompt_mask,.prompt_shadow').hide();});

	jQuery('.prompt_mask,.prompt_shadow').hide()
	
	jQuery('#cmdCloseFinder').click( function(){ $('.finder').hide();});
}


function optionsOnClick()
{
	$('.finder').toggle(
		function ()
		{
        	$(this).css({"list-style-type":"disc", "color":"blue"});
      	},
      	function ()
		{
        	alert('b');
		}
	);
}
$(document).ready(init);