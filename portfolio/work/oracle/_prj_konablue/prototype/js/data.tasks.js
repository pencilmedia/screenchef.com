/*
	This file simulates config data from the server
*/

var part_tasks = {
	task_class: "tasks_inner_parts",
	task_heading: "Actions",
	tasks:[
		{
			task_id: "parts_find",
			task_text: "Find parts",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/find_parts/screen_part_find_parts_00.php');"
		},
		{
			task_id: "parts_browse",
			task_text: "Browse for parts",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_id: "parts_create",
			task_text: "Create a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/create_bom/screen_part_create_bom_00.php');"
		},
		{
			task_id: "parts_remove",
			task_text: "Remove a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/remove_part/screen_part_remove_part_00.php');"
		},
		{
			task_id: "parts_replace",
			task_text: "Replace a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/replace_part/screen_part_replace_part_00.php');"
		},
		{
			task_divider: true
		},
		{
			task_id: "parts_view_change",
			task_text: "View change orders",
			task_onclick: ""
		},
		{
			task_id: "parts_view_cost",
			task_text: "View part cost",
			task_onclick: ""
		},
		{
			task_id: "parts_view_compliance",
			task_text: "View part compliance",
			task_onclick: ""
		}
	]
}

var doc_tasks = {
	task_class: "tasks_inner_docs",
	task_heading: "Actions",
	tasks:[
		{
			task_text: "Find documents",
			task_onclick: ""
		},
		{
			task_text: "Create a document",
			task_onclick: ""
		},
		{
			task_text: "Browse for documents",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "View checked out files",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/check_in/screen_doc_check_in_00.php');"
		},
		{
			task_text: "View documents for approval",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/appr_doc/screen_doc_appr_doc_00.php');"
		},
		{
			task_text: "View changes for approval",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/appr_chng/screen_doc_appr_chng_00.php');"
		},
		{
			task_divider: true
		},
		{
			task_text: "Rejected documents",
			task_onclick: ""
		},
		{
			task_text: "Recently viewed documents",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "My documents",
			task_onclick: ""
		}
	]
}

var project_tasks = {
	task_class: "tasks_inner_projects",
	task_heading: "Actions",
	tasks:[
		{
			task_text: "Find projects",
			task_onclick: ""
		},
		{
			task_text: "Create a project",
			task_onclick: ""
		},
		{
			task_text: "Browse for projects",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "View projects for approval",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "Rejected projects",
			task_onclick: ""
		},
		{
			task_text: "Recently viewed projects",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "My projects",
			task_onclick: ""
		}
	]
}

var product_tasks = {
	task_class: "tasks_inner_products",
	task_heading: "Actions",
	tasks:[
		{
			task_text: "Find products",
			task_onclick: ""
		},
		{
			task_text: "Create a product",
			task_onclick: ""
		},
		{
			task_text: "Browse for products",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "View products for approval",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "Rejected products",
			task_onclick: ""
		},
		{
			task_text: "Recently viewed products",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "My products",
			task_onclick: ""
		}
	]
}

var doc_context_1 = {
	task_class: "tasks_inner_docs",
	tasks:[
		{
			task_text: "Check in documents"
		}
	]
}

var doc_context_2 = {
	task_class: "tasks_inner_docs",
	tasks:[
		{
			task_text: "Mass update"
		},
		{
			task_text: "View checked in documents"
		}
	]
}
