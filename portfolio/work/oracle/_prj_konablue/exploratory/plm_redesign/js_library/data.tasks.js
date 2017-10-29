/*
	This file simulates config data from the server
*/

var part_tasks = {
	task_class: "tasks_inner_parts",
	task_heading: "Actions",
	tasks:[
		{
			task_text: "Find parts",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/find_parts/screen_part_find_parts_0.php');"
		},
		{
			task_text: "Browse for parts",
			task_onclick: ""
		},
		{
			task_divider: true
		},
		{
			task_text: "Create a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/create_bom/screen_part_create_bom_a_form.php');"
		},
		{
			task_text: "Remove a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/remove_part/screen_part_remove_part_0.php');"
		},
		{
			task_text: "Replace a part",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/replace_part/screen_part_replace_part_0.php');"
		},
		{
			task_divider: true
		},
		{
			task_text: "View change orders",
			task_onclick: ""
		},
		{
			task_text: "View part cost",
			task_onclick: ""
		},
		{
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
			task_text: "View checked out documents",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/check_in/screen_doc_check_in_0.php');"
		},
		{
			task_text: "View documents for approval",
			task_onclick: "var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/appr_chng/screen_doc_appr_chng_0.php');"
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