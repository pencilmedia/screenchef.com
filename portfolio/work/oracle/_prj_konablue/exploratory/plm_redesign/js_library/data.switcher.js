/*
	This file simulates config data from the server
*/

var tab_data = {
	tabs:[
		{
			tab_id: "switcher_tab_contacts",
			tab_text: "Home",
			tab_onclick: "setTasks();"
		},
		{
			tab_id: "switcher_tab_parts",
			tab_text: "Parts",
			tab_onclick: "setTasks(part_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/parts/startpage/screen_part_startpage_0.php');"
		},
		{
			tab_id: "switcher_tab_docs",
			tab_text: "Docs",
			tab_onclick: "setTasks(doc_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/docs/startpage/screen_doc_startpage_0.php');"
		},
		{
			tab_id: "switcher_tab_projects",
			tab_text: "Projects",
			tab_onclick: "setTasks();"
		},
		{
			tab_id: "switcher_tab_products",
			tab_text: "Products",
			tab_onclick: "setTasks(product_tasks); var docPane = dojo.widget.getWidgetById('main'); docPane.setUrl('./content/main/products/startpage/screen_product_startpage_0.php');;"
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
