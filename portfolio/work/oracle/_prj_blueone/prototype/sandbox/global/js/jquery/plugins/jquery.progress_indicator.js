/*
 * jQuery Progress Indicator
 * Copyright 2008 Anthony Moquette
 *
 * Usage:
 *	DEFAULT
 *	$(document).ProgressIndicatorShow(); 
 *
 *	CUSTOM IMAGE
 * 	$(document).ProgressIndicatorShow('/images/animated_image_00.gif');
 *
 *	CUSTOM IMAGE AND CAPTION
 * 	$(document).ProgressIndicatorShow('/images/animated_image_00.gif','Processing...');
 *
 *	CAPTION ONLY
 *  $(document).ProgressIndicatorShow('','Processing...');
 *
 *	CAPTION ONLY AND PAD CAPTION TO BY 10px
 *  $(document).ProgressIndicatorShow('','Processing...',10);
 */

jQuery.fn.extend({
	ProgressIndicatorShow: function(image, caption)
	{
		var img = '/global/images/pi/loading4.gif'
		var caption_offset = 10;
		
		if (arguments.length == 0)
		{
			img = img;
		} else {
			if ( arguments[0].length )
			{
				img = image;
			} else {
				img = img;
			}
		}

		jQuery(document.body).append('<div id="progress_indicator"></div>');
		jQuery('#progress_indicator').css ({
			 background:		'#000 url('+ img + ') no-repeat center center',
			 filter: 			'alpha(opacity=25)',
			 position:			'absolute',
			 width: 			'100%',
			 height: 			'100%',
			 zindex: 			'100',
			 opacity:			'.25',
			 top:				'0px'
		});

		if (arguments.length > 1)
		{
			var caption = arguments[1];
			jQuery('#progress_indicator').append('<p>' + caption + '</p>');
			jQuery('#progress_indicator p').css ({
				 position:			'relative',
				 textAlign:			'center',
				 fontSize:			'14px',
				 color:				'#fff'
			});
			
			if (arguments.length > 2) caption_offset = parseInt(arguments[2]);
			jQuery('#progress_indicator p').css('top', $(window).height() / 2 + this.height() + caption_offset );
		}
	},
	ProgressIndicatorHide: function()
	{
		jQuery('#progress_indicator').remove();
	},
	ProgressIndicatorStatusMessage: function(msg)
	{
		if (arguments.length == 0) return;
		jQuery('#progress_indicator p').html(msg);
	},
	ProgressIndicatorImage: function(img)
	{
		if (arguments.length == 0) return;
		jQuery('#progress_indicator').css('background-image','url('+ img +')'); 
	}
});