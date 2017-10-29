// DP = Dashboard Personalization
var dp_test = {
	init : function()
	{
		jQuery('#u1').Sortable(
			{
				handle : 		'.drag_handle',
				accept: 		'groupItem',
				helperclass: 	'sortHelper',
				activeclass : 	'sortableactive',
				hoverclass : 	'sortablehover',
				tolerance: 		'pointer',
				axis :			'vertically',
				onChange: 		function(ser) {},
				onStart: 		function()
				{
					jQuery.iAutoscroller.start(this, document.getElementsByTagName('body'));
					jQuery('#dragHelper').css('border','1px dashed silver');
					jQuery('#dragHelper *').hide();
				},
				onStop:			function()
				{
					jQuery.iAutoscroller.stop();
				}
			}
		);
		jQuery('li input').click(dp_test.doSelect);
		jQuery('#cmdSave').click(dp_test.doSave);
		jQuery('#cmdCancel').click(dp_test.doCancel);
		jQuery('#w01_box').hide();
		jQuery('#w01_config').click(dp_test.doWidgetConfig1);
		jQuery('#w04_config').click(dp_test.doWidgetConfig4);
	},
	doSelect : function()
	{
		if ( jQuery(this).attr('checked') )
		{
			jQuery(this).parent().addClass('selected') ;
		} else {
			jQuery(this).parent().removeClass('selected') ;
		}
	},
	doSave : function()
	{
		serial = jQuery.SortSerialize('ul.widget_personalization');
		alert(serial.hash);
	},
	doCancel : function()
	{
		javascript:window.controller_instance.dispatchLink('pages/layouts/summary_layout_yui.php', 'mainwin', function() { MyApp.init(); MyApp.layoutSummary2(); summary.init(); proj_tabs_schedule.init();});
		return false;
	},
	doWidgetConfig1 : function()
	{
		jQuery('#w01_config_content').toggle();
	},
	doWidgetConfig4 : function()
	{
		jQuery('#w04_config_content').toggle();
	}
}

jQuery(document).ready(dp_test.init);