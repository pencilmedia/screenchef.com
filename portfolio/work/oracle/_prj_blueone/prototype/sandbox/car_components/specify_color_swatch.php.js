themes =
{
	init: function()
	{
		//$('#canned_row').hide();
		$('#cmdApply').click(themes.submitForm);
		$('#cmdOptions').click(themes.doOptions);
		$('.background_value').blur(themes.setBackgroundValue);
		$('.background_text').change(themes.setTextValue);
		$('#canned_themes').change(themes.setCannedTheme);
		$(document).keypress(function (e) 
		{
      		if (e.which == 96)		
			{
				$('#canned_row').toggle();
			}
		})
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
	},
	setCannedTheme: function()
	{
		switch(this.value)
		{
				case 'blue_one':
				$('#global_toolbar').attr('value','#DDDDDD');
				$('#global_toolbar_text').attr('value','#333');
				$('#global_toolbar_sample').css({ backgroundColor:"#DDDDDD", color:"#333" });
				$('#dialog_title_bar').attr('value','#F7F7F7');
				$('#dialog_title_bar_text').attr('value','#333');
				$('#dialog_title_bar_sample').css({ backgroundColor:"#F7F7F7", color:"#333" });
				$('#widget_title_bar').attr('value','#333333');
				$('#widget_title_bar_text').attr('value','#fff');
				$('#widget_title_bar_sample').css({ backgroundColor:"#333333", color:"#fff" });
				$('#selected_controls').attr('value','transparent');
				$('#selected_controls_text').attr('value','333');
				$('#selected_controls_sample').css({ backgroundColor:"transparent", color:"#333" });
				$('#non_selected_controls').attr('value','transparent');
				$('#non_selected_controls_text').attr('value','#333');
				$('#non_selected_controls_sample').css({ backgroundColor:"transparent", color:"#333" });
				$('#control_highlights').attr('value','transparent');
				$('#control_highlights_text').attr('value','#333');
				$('#control_highlights_sample').css({ backgroundColor:"transparent", color:"#333" });
				$('#message_area').attr('value','transparent');
				$('#message_area_text').attr('value','#333');
				$('#message_area_sample').css({ backgroundColor:"transparent", color:"#333" });
				$('#backgrounds').attr('value','#F9F9F9');
				$('#backgrounds_text').attr('value','#333');
				$('#backgrounds_sample').css({ backgroundColor:"#F9F9F9", color:"#333" });
				$('#borders').attr('value','#999999');
				break;    
				
				case 'olive':
				$('#global_toolbar').attr('value','#5C743D');
				$('#global_toolbar_text').attr('value','#fff');
				$('#global_toolbar_sample').css({ backgroundColor:"#5C743D", color:"#fff" });
				$('#dialog_title_bar').attr('value','#9FB086');
				$('#dialog_title_bar_text').attr('value','#fff');
				$('#dialog_title_bar_sample').css({ backgroundColor:"#9FB086", color:"#fff" });
				$('#widget_title_bar').attr('value','#999966');
				$('#widget_title_bar_text').attr('value','#fff');
				$('#widget_title_bar_sample').css({ backgroundColor:"#999966", color:"#fff" });
				$('#selected_controls').attr('value','#5C743D');
				$('#selected_controls_text').attr('value','#fff');
				$('#selected_controls_sample').css({ backgroundColor:"#5C743D", color:"#fff" });
				$('#non_selected_controls').attr('value','#9FB086');
				$('#non_selected_controls_text').attr('value','#fff');
				$('#non_selected_controls_sample').css({ backgroundColor:"#9FB086", color:"#fff" });
				$('#control_highlights').attr('value','#999966');
				$('#control_highlights_text').attr('value','#333');
				$('#control_highlights_sample').css({ backgroundColor:"#999966", color:"#333" });
				$('#message_area').attr('value','#FFFFCC');
				$('#message_area_text').attr('value','#333');
				$('#message_area_sample').css({ backgroundColor:"#FFFFCC", color:"#333" });
				$('#backgrounds').attr('value','#F9F5F8');
				$('#backgrounds_text').attr('value','#333');
				$('#backgrounds_sample').css({ backgroundColor:"#F9F5F8", color:"#333" });
				$('#borders').attr('value','#FFFFFF');
				break;    
				
				case 'blue_steel':
				$('#global_toolbar').attr('value','#566873');
				$('#global_toolbar_text').attr('value','#fff');
				$('#global_toolbar_sample').css({ backgroundColor:"#566873", color:"#fff" });
				$('#dialog_title_bar').attr('value','#566873');
				$('#dialog_title_bar_text').attr('value','#fff');
				$('#dialog_title_bar_sample').css({ backgroundColor:"#566873", color:"#fff" });
				$('#widget_title_bar').attr('value','#444444');
				$('#widget_title_bar_text').attr('value','#fff');
				$('#widget_title_bar_sample').css({ backgroundColor:"#444444", color:"#fff" });
				$('#selected_controls').attr('value','#8198A6');
				$('#selected_controls_text').attr('value','#fff');
				$('#selected_controls_sample').css({ backgroundColor:"#8198A6", color:"#fff" });
				$('#non_selected_controls').attr('value','#BAC8D9');
				$('#non_selected_controls_text').attr('value','#333');
				$('#non_selected_controls_sample').css({ backgroundColor:"#BAC8D9", color:"#333" });
				$('#control_highlights').attr('value','#E4EAF2');
				$('#control_highlights_text').attr('value','#333');
				$('#control_highlights_sample').css({ backgroundColor:"#E4EAF2", color:"#333" });
				$('#message_area').attr('value','#FFFFCC');
				$('#message_area_text').attr('value','#333');
				$('#message_area_sample').css({ backgroundColor:"#FFFFCC", color:"#333" });
				$('#backgrounds').attr('value','#FFFFFF');
				$('#backgrounds_text').attr('value','#333');
				$('#backgrounds_sample').css({ backgroundColor:"#FFFFFF", color:"#333" });
				$('#borders').attr('value','#CCCCCC');
				break;    
				
				case 'iron_man':
				$('#global_toolbar').attr('value','#B90000');
				$('#global_toolbar_text').attr('value','#fff');
				$('#global_toolbar_sample').css({ backgroundColor:"#B90000", color:"#fff" });
				$('#dialog_title_bar').attr('value','#B90000');
				$('#dialog_title_bar_text').attr('value','#fff');
				$('#dialog_title_bar_sample').css({ backgroundColor:"#B90000", color:"#fff" });
				$('#widget_title_bar').attr('value','#41454A');
				$('#widget_title_bar_text').attr('value','#fff');
				$('#widget_title_bar_sample').css({ backgroundColor:"#41454A", color:"#fff" });
				$('#selected_controls').attr('value','#990000');
				$('#selected_controls_text').attr('value','#fff');
				$('#selected_controls_sample').css({ backgroundColor:"#990000", color:"#fff" });
				$('#non_selected_controls').attr('value','#737373');
				$('#non_selected_controls_text').attr('value','#fff');
				$('#non_selected_controls_sample').css({ backgroundColor:"#737373", color:"#fff" });
				$('#control_highlights').attr('value','#E4EAF2');
				$('#control_highlights_text').attr('value','#333');
				$('#control_highlights_sample').css({ backgroundColor:"#E4EAF2", color:"#333" });
				$('#message_area').attr('value','#FFFFCC');
				$('#message_area_text').attr('value','#333');
				$('#message_area_sample').css({ backgroundColor:"#FFFFCC", color:"#333" });
				$('#backgrounds').attr('value','#FFFFFF');
				$('#backgrounds_text').attr('value','#333');
				$('#backgrounds_sample').css({ backgroundColor:"#FFFFFF", color:"#333" });
				$('#borders').attr('value','#CCCCCC');
				break;  

				case 'corporate':
				$('#global_toolbar').attr('value','#566873');
				$('#global_toolbar_text').attr('value','#fff');
				$('#global_toolbar_sample').css({ backgroundColor:"#566873", color:"#fff" });
				$('#dialog_title_bar').attr('value','#666050');
				$('#dialog_title_bar_text').attr('value','#fff');
				$('#dialog_title_bar_sample').css({ backgroundColor:"#666050", color:"#fff" });
				$('#widget_title_bar').attr('value','#4d4c3a');
				$('#widget_title_bar_text').attr('value','#fff');
				$('#widget_title_bar_sample').css({ backgroundColor:"#4d4c3a", color:"#fff" });
				$('#selected_controls').attr('value','#666050');
				$('#selected_controls_text').attr('value','#fff');
				$('#selected_controls_sample').css({ backgroundColor:"#666050", color:"#fff" });
				$('#non_selected_controls').attr('value','#a9bfb8');
				$('#non_selected_controls_text').attr('value','#333');
				$('#non_selected_controls_sample').css({ backgroundColor:"#a9bfb8", color:"#333" });
				$('#control_highlights').attr('value','#E4EAF2');
				$('#control_highlights_text').attr('value','#333');
				$('#control_highlights_sample').css({ backgroundColor:"#E4EAF2", color:"#333" });
				$('#message_area').attr('value','#E4EAF2');
				$('#message_area_text').attr('value','#333');
				$('#message_area_sample').css({ backgroundColor:"#E4EAF2", color:"#333" });
				$('#backgrounds').attr('value','#FFFFFF');
				$('#backgrounds_text').attr('value','#333');
				$('#backgrounds_sample').css({ backgroundColor:"#FFFFFF", color:"#333" });
				$('#borders').attr('value','#CCCCCC');
				break; 

				default:
				$('.background_value').attr('value','');
				$('.background_text').attr('value','#333');
				$('.sample').css({ backgroundColor:"#fff", color:"#333" });
				break;
		}
	}
}

$(document).ready(themes.init);