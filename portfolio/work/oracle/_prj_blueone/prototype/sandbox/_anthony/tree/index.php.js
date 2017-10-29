treeview =
{
	init : function()
	{
		jQuery("#search_tree,#bookmarks_tree,#history_tree").treeview(); 
		//jQuery(".left_pane_container").click(treeview.expand_manager);
		//treeview.collapse_all();
	},
	expand_manager : function()
	{
		treeview.collapse_all();
		if ( jQuery(this).height() < 50 )
		{
			jQuery(this).height('542px');
			jQuery( '#' + this.id + ' *').show();
			return;
		}
		jQuery(this).height('22px');
		jQuery(this + ' *').next().hide();
	},
	collapse_all : function()
	{
		jQuery('.left_pane_container *').next().children().hide();
		jQuery('.left_pane_container').height('22px');
	}
}

$(document).ready(treeview.init);