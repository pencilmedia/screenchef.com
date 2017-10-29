/*
	This file simulates config data from the server
*/

var tab_data = {
	tabs:[
		{
			tab_id: "switcher_tab_home",
			tab_text: "Home",
			tab_onclick: "initTasks(); setTasks(); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/home/startpage/screen_home_startpage_00.php');"
		},
		{
			tab_id: "switcher_tab_parts",
			tab_text: "Parts",
			tab_onclick: "initTasks(); setTasks(part_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/find_parts/screen_part_find_parts_00.php');"
		},
		{
			tab_id: "switcher_tab_docs",
			tab_text: "Docs",
			tab_onclick: "initTasks(); setTasks(doc_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/find_docs/screen_doc_find_docs_00.php');"
		},
		{
			tab_id: "switcher_tab_projects",
			tab_text: "Projects",
			tab_onclick: "initTasks(); setTasks(project_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/projects/find_projs/screen_project_find_projs_00.php');"
		},
		{
			tab_id: "switcher_tab_products",
			tab_text: "Products",
			tab_onclick: "initTasks(); setTasks(product_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/products/find_prods/screen_product_find_prods_00.php');"
		}
	]
}

var shortcut_data = {
	items:[
		{
			item_text: "My Projects Folder",
			item_icon_url: "images/icn_folder.png"
		},
		{
			item_text: "Part #12572",
			item_icon_url: "images/icn_block.png"
		},
		{
			item_text: "MP3 Player (Assy)",
			item_icon_url: "images/icn_folder.png"
		},
		{
			item_text: "Joystick Parts",
			item_icon_url: "images/icn_folder.png"
		},
		{
			item_text: "Assy. #PO-9487",
			item_icon_url: "images/icn_block.png"
		}
	]
}


var window_data = {
	items:[
		{
			item_text: "Checked Out Docs",
			item_icon_url: "images/icn_folder.png"
		},
		{
			item_text: "MP3 Player",
			item_icon_url: "images/icn_computer.png"
		},
		{
			item_text: "Engineering Managers",
			item_icon_url: "images/icn_globe.png"
		},
		{
			item_text: "Joystick BOM",
			item_icon_url: "images/icn_drive.png"
		},
		{
			item_text: "Part #3489-A",
			item_icon_url: "images/icn_drive.png"
		}
	]
}
