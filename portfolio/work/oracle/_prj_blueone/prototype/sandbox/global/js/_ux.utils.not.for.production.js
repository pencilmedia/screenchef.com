/*********************************************************
PROTOTYPING PURPOSES ONLY!!!!
**********************************************************
NOT TO BE INCLUDED INTO ANY PRODUCTION ENVIRONMENT!!!!
*********************************************************/
function registerNS(ns) { var nsParts = ns.split("."); var root = window; for(var i=0; i<nsParts.length; i++) { if(typeof root[nsParts[i]] == "undefined") root[nsParts[i]] = new Object(); root = root[nsParts[i]]; } }
registerNS('ux');
ux.utils =
{
	/**********************************************************
	TOGGLER : Generic toggler
	Version .01
	March 31, 2008
	***********************************************************
	Usage: $('#xyz').click(ux.utils.toggler)
	
	Function will toggle visibility of any element with
	the same ID  with '_content' appended.
	
	The above example will toggle the visibility of 
	an element with the id of xyz_content.
	**********************************************************/
	toggler: function()
	{
		var el		= '#'+this.id;
		var content = el+'_content';
		jQuery(this).toggleClass('expand');
		jQuery(content).toggle();
	},
	/**********************************************************
	Activity Indicator : Activity Indicator
	Version .01
	May 12, 2008
	***********************************************************
	Usage: ux.utils.progressIndicatorOn(element);
		   or ux.utils.progressIndicatorOff();
	
	Function will toggle the activity indicator layer on the 
	element passed.
	
	ux.utils.progressIndicatorOn(document.body);
	The above example will layer the entire page with the
	activity indicator.
	
	ux.utils.progressIndicatorOff() removes the indicator
	layer.
	**********************************************************/
	progressIndicatorOn : function(element)
	{
		var el = element;
		jQuery(el).prepend('<div class="ux_palette_mask"></div>');
	},
	progressIndicatorOff : function()
	{
		jQuery('.ux_palette_mask').remove();
	},

	maskOn : function(element)
	{
		jQuery(el).prepend('<div class="mask"></div>');
	},
	maskOff : function(element)
	{
		jQuery('.mask').remove();
	},
	globalProgressIndicatorOn : function()
	{
		
		jQuery('#progress_indicator_global').css('visibility','visible');
	},
	globalProgressIndicatorOff : function()
	{
		jQuery('#progress_indicator_global').css('visibility','hidden');
	}
}

/*****************************************
	Activity Indicator Smoke & Mirrors
*****************************************/
function progressIndicatorHomePage()
{
	aiOff();
	jQuery('#activity_indicator1').show()
	setTimeout( function(){ jQuery('#activity_indicator1').hide() }, 2500 );
}
function ai2On()
{
	aiOff();
	jQuery('#activity_indicator2').show()
	setTimeout( function(){ jQuery('#activity_indicator2').hide() }, 2500 );
}
function ai3On()
{
	aiOff();
	jQuery('#activity_indicator3').show()
	setTimeout( function(){jQuery('#activity_indicator3').text('Loading.')}, 1500 );
	setTimeout( function(){jQuery('#activity_indicator3').text('Loading..')}, 2500 );
	setTimeout( function(){jQuery('#activity_indicator3').text('Loading...')}, 3500 );
	setTimeout( function(){jQuery('#activity_indicator3').text('Loading....')}, 4500 );
	setTimeout( function(){ jQuery('#activity_indicator3').hide() }, 5500 );
}
function aiOff()
{
	jQuery('#activity_indicator1,#activity_indicator2,#activity_indicator3').removeClass('activity_done')
	jQuery('#activity_indicator1,#activity_indicator2,#activity_indicator3').hide()
}

