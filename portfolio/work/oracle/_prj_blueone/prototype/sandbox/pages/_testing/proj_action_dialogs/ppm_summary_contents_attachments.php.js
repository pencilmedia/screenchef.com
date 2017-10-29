function Init()
{
    /* Position size palette */
    jQuery('#ux_palette').css( {top: '150px', left: '150px', width: '568px', height: '294px'} );
    agile.ux.palette.onResize();
    jQuery('#x1').click(function(){ animate('#ux_palette') });
    jQuery('#x2').click(function(){ animate2(document.body) });
}

function animate(element)
{
	ux.utils.progressIndicatorOn(element);
	setTimeout( function() { ux.utils.progressIndicatorOff(); }, 1000 );
}

function animate2(element)
{
	ux.utils.maskOn(element);
	jQuery('#activity_container').show();
	var activityContainerTop = jQuery(window).height() /2 - jQuery('#activity_container').height() /2 + 'px';
	var activityContainerLeft = jQuery(window).width() /2 - jQuery('#activity_container').width() /2 - 30 + 'px';
	jQuery('#activity_container').css('left',activityContainerLeft);
	jQuery('#activity_container').css('top',activityContainerTop);
	jQuery('#activity_container').css('top','0px');
	
	setTimeout( function() 
						{ 
						 	ux.utils.maskOff(); 
							jQuery('#activity_container').hide();
						}, 30000 );
}

jQuery(document).ready(Init);