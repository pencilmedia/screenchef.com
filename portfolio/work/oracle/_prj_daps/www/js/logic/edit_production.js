var ep = {};
ep =
{
	init: function()
	{
		$(window).bind('resize', ep.resize);
		$(window).trigger("resize");
		$("#ep_tree").treeview();
	},
	resize: function()
	{
		var windowHeight = $(window).height() - 78;
		$("#com_edit_production_left").height( windowHeight - 6  );
		$("#com_edit_production_right").height( windowHeight - 6  );
	}	
};