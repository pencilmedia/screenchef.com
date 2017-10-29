var admin = {};
admin =
{
	init: function()
	{
		$("#dashboard_subtabs").tabs({show:admin.tabsSelect});
		$("#dashboard_subtabs").tabs('select', 0);
		$(window).bind('resize', admin.resize);
		$(window).trigger("resize");
		$("#com_admin_system_left ul li a").click(admin.sideBarClickHandler);
	},
	tabsSelect: function()
	{
		var title = 'System';
		var admin_side_nav_type = 'system';
		if (!$("#dashboard_subtabs")) return;
		var selected = $("#dashboard_subtabs").tabs('option', 'selected');
		var table_to_show, detail_to_show;
		$('.admin_side_nav').hide();
		$("#com_admin_system_left ul li a").removeClass('selected');
		$("#com_admin_system_right_top div.widget_action_bar, #com_admin_system_right_bottom div.widget_action_bar").hide();
		$("#com_admin_system_right_top div.widget_layout, #com_admin_system_right_bottom div.widget_layout").hide();
		$('#com_admin_system_right_top div.widget_layout table').hide();
		$('#com_admin_system_right_bottom div.widget_layout div').hide();
		switch(selected)
		{
			case 0:
				admin_side_nav_type = 'system';
				title = 'Production Parth Library';
				$('#sys_path').addClass('selected');
				break;
			case 1:
				admin_side_nav_type = 'production';
				title = 'Deliverable Types';
				$('#prod_deliverable').addClass('selected');
				table_to_show = 'table_admin_prod_deliverable_types';
				detail_to_show = 'details_admin_prod_deliverable_types';
				$("#com_admin_system_right_top div.widget_action_bar, #com_admin_system_right_bottom div.widget_action_bar").show();
				$("#com_admin_system_right_top div.widget_layout, #com_admin_system_right_bottom div.widget_layout").show();
				break;	
			case 2:
				admin_side_nav_type = 'users';
				title = 'Workflow Library';
				$('#users_workflow').addClass('selected');
				break
		}
		$("#" + table_to_show ).show();
		$("#" + detail_to_show ).show();
		$('#admin_side_nav_' + admin_side_nav_type).show();
		$('#com_admin_system_right_top h3').html( title );
	},
	sideBarClickHandler: function()
	{
		var selected = this.id;
		var title;
		$('#com_admin_system_right_top div.widget_layout table').hide();
		$('#com_admin_system_right_bottom div.widget_layout div').hide();
		switch(selected)
		{
			case 'prod_deliverable':
				title = 'Deliverable Types';
				title_bottom = "Deliverable Type Details";
				table_to_show = 'table_admin_prod_deliverable_types';
				detail_to_show = 'details_admin_prod_deliverable_types'
				break;
			case 'prod_asset':
				title = 'Assset Types';
				title_bottom = "Asset Type Details";
				table_to_show = 'table_admin_prod_asset_types';
				detail_to_show = 'details_admin_prod_asset_types';
				break;	
			case 'prod_attributes':
				title = 'Attributes Types';
				title_bottom = "Attribute Details";
				table_to_show = 'table_admin_prod_attributes';
				detail_to_show = 'details_admin_prod_attributes';
				break
			case 'prod_path':
				title = 'Production Path Library';
				title_bottom = "Production Path Details";
				table_to_show = 'table_admin_prod_production_path';
				detail_to_show = 'details_admin_prod_production_path';
				break
			case 'prod_workflow':
				title_bottom = "Workflow Details";
				title = 'Workflow Library';
				table_to_show = 'table_admin_prod_workflow_library';
				detail_to_show = 'details_admin_prod_workflow_library';
				break
		}
		$('#com_admin_system_right_top h3').html( title );
		$('#com_admin_system_right_bottom h3').html( title_bottom );
		$("#com_admin_system_left ul li a").removeClass('selected');
		$("#" + table_to_show ).show();
		$("#" + detail_to_show ).show();
		$(this).addClass('selected');
	},
	resize: function()
	{
		var windowHeight = $(window).height() - 122;
		$("#com_admin_system_left").height( windowHeight - 6  );
		$("#com_worklist_2 .widget_layout").height( $("#com_worklist_2").height() - $("#com_worklist_2 .widget_header").height() - $("#com_worklist_2 .widget_action_bar").height() - 12 );
		$("#com_admin_system_right_top").height( windowHeight / 2  - 7  );
		$("#com_worklist_2 .widget_layout").height( $("#com_worklist_2").height() - $("#com_worklist_2 .widget_header").height() - $("#com_worklist_2 .widget_action_bar").height() - 12 );
		$("#com_admin_system_right_bottom").height( windowHeight / 2  - 10  );
	}
};