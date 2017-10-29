<?php
	define ("LOCAL_JS_DIR", "js");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<link rel="stylesheet" type="text/css" href="styles/switcher.css" />
	
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.main.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.lang.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.string.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.dom.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.metrics.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.event.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.dnd.js" type="text/javascript"></script>
	<script language="javascript" src="<?=LOCAL_JS_DIR;?>/invo.ie.js" type="text/javascript"></script>
	

	<style type="text/css">
		#container {
			width: 700px;
			height: 50px;
			position: absolute;
			top: 50px;
			left: 50px;
		}
		
		#usecase_dropdown {
			top: 15px;
		}
		
		#window_dropdown {
			top: 15px;
		}
	</style>
	
	<script type="text/javascript">
		var default_type = "parts";
		var type_names = new Array("parts", "documents", "projects", "products", "contacts");
		var usecase_names = new Array(
			"ZAP Redesign Project",
			"Create a Part",
			"Kona Blue Project",
			"Edit a Part",
			"Create A BOM",
			"Edit a BOM"
		);
		var window_names = new Array(
			"CAD Spec #12",
			"Part #A-2396",
			"Kona Blue Project",
			"Assy. for Zapper",
			"Workflow Process Doc",
			"ZAP BOM"
		);
		
		
		var border_width = 1;
		var ico_width = 24;
		var uc_width = null;
		var uc_ico_offset = null;
		var wn_width = null;
		var wn_ico_offset = null;

		function toggleDisplay(obj_name) {
			var obj = document.getElementById(obj_name);
			if (obj.style && (obj.style.display == 'none')) {
				obj.style.display = 'block';
			} else if (obj.style) {
				obj.style.display = 'none';
			}
		}
		
		function switcher(which_type) {
			for (var i=0; i<type_names.length; i++) {
				document.getElementById(type_names[i]).style.background = "none";
			}
			if (!which_type) { which_type = default_type; }
			document.getElementById(which_type).style.background = "url('images/proto_bgd_center_active.png') repeat-x top left";
		}

		function moveDot1() {
			evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);
			if ((x > 466) && (x < 586)) {
				invo.dnd.moveDragObject(true, null);
				invo.metrics.setObjectLeft(document.getElementById("usecase_images_list"), (529 - x));
				var offset = x - 466;
				var images_offset = Math.round(offset / ico_width);
				setName(usecase_names, images_offset, 'usecase_images_list');
			}
		}
		
		function moveDot2() {
			evt = invo.dnd.getDragEvent();
			var x = invo.event.getEventX(evt);
			var y = invo.event.getEventY(evt);
			if ((x > 617) && (x < 737)) {
				invo.dnd.moveDragObject(true, null);
				invo.metrics.setObjectLeft(document.getElementById("window_images_list"), (680 - x));
				var offset = x - 617;
				var images_offset = Math.round(offset / ico_width);
				setName(window_names, images_offset, 'window_images_list');
			}
		}
		
		
		function shiftLeft(list_name, dot_name, names_arr) {
			
			var obj = document.getElementById(list_name);
			var dot_obj = document.getElementById(dot_name);
			var x = parseInt(invo.metrics.getObjectLeft(obj));
			
			var images_offset = Math.round((63 - x) / ico_width);
			if (images_offset < 5) {
				invo.metrics.setObjectLeft(obj, (63 - ((images_offset + 1) * ico_width)));
				invo.metrics.setObjectLeft(dot_obj, ((images_offset + 1) * ico_width));
				setName(names_arr, images_offset + 1, list_name);
			}
	
		}
		
		function shiftRight(list_name, dot_name, names_arr) {
			
			var obj = document.getElementById(list_name);
			var dot_obj = document.getElementById(dot_name);
			var x = parseInt(invo.metrics.getObjectLeft(obj));
			
			var images_offset = Math.round((63 - x) / ico_width);
			if (images_offset > 0) {
				invo.metrics.setObjectLeft(obj, (63 - ((images_offset - 1) * ico_width)));
				invo.metrics.setObjectLeft(dot_obj, ((images_offset - 1) * ico_width));
				setName(names_arr, images_offset - 1, list_name);
			}

		}
		
		function setName(arr, idx, list_name) {
			document.getElementById(list_name + "_title").innerHTML = arr[idx];
		}
		
		
		
		function handleOnload() {
			uc_width = invo.metrics.getObjectWidth('usecase_module');
			uc_ico_offset = ( (uc_width - ico_width) / 2 ) - border_width;
			wn_width = invo.metrics.getObjectWidth('window_module');
			wn_ico_offset = ( (uc_width - ico_width) / 2 ) - border_width;
			
			invo.metrics.setObjectLeft('usecase_images_list', uc_ico_offset);
			invo.metrics.setObjectLeft('window_images_list', wn_ico_offset);
		}
		
	</script>
</head>
<body onload="handleOnload();">

<div id="container">

	<div id="switcher"><div id="switcher_left"><div id="switcher_right">
		<table cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td class="hack">&nbsp;</td>
				<td class="icn" id="parts"><p><a href="#" onclick="switcher('parts');">PARTS<br/><img src="images/proto_parts.png" /></a></p></td>
				<td class="icn" id="documents"><p><a href="#" onclick="switcher('documents');">DOCUMENTS<br/><img src="images/proto_documents.png" /></a></p></td>
				<td class="icn" id="projects"><p><a href="#" onclick="switcher('projects');">PROJECTS<br/><img src="images/proto_projects.png" /></a></p></td>
				<td class="icn" id="products"><p><a href="#" onclick="switcher('products');">PRODUCTS<br/><img src="images/proto_products.png" /></a></p></td>
				<td class="icn" id="contacts"><p><a href="#" onclick="switcher('contacts');">CONTACTS<br/><img src="images/proto_contacts.png" /></a></p></td>
				<td id="usecase_module">
					<div id="usecase_name" onclick="toggleDisplay('usecase_dropdown');">
						<p><span id="usecase_images_list_title">ZAP Redesign Project</span>&nbsp;<img src="images/proto_down_arrow.png" align="top" /></p>
					</div>
					<div id="usecase_icons">
						<div id="usecase_images">
							<ul id="usecase_images_list">
								<li><img src="images/proto_folders.png" /></li>
								<li><img src="images/proto_items.png" /></li>
								<li><img src="images/proto_folders.png" /></li>
								<li><img src="images/proto_items.png" /></li>
								<li><img src="images/proto_items.png" /></li>
								<li><img src="images/proto_items.png" /></li>
							</ul>
						</div>
						<div id="usecase_mask"></div>
					</div>
					<div id="usecase_scrollbar">
						<div id="usecase_scrollbar_right"><img src="images/proto_right_arrow.png" onclick="shiftLeft('usecase_images_list', 'dot1', usecase_names);" /></div>
						<div id="usecase_scrollbar_left"><img src="images/proto_left_arrow.png" onclick="shiftRight('usecase_images_list', 'dot1', usecase_names);" /></div>
						<div id="usecase_scrollbar_center"><div 
							id="dot1" name="dot1" 
							class="draggable" unselectable="on"
							ondragstart="invo.dnd.startDnD(event, moveDot1);"
							onmousedown="invo.dnd.startDnD(event, moveDot1);"></div>
					</div>
				</td>
				<td id="window_module">
					<div id="window_name" onclick="toggleDisplay('window_dropdown');">
						<p><span id="window_images_list_title">CAD Spec #12</span>&nbsp;<img src="images/proto_down_arrow.png" align="top" /></p>
					</div>
					<div id="window_icons">
						<div id="window_images">
							<ul id="window_images_list">
								<li><img src="images/proto_documents.png" /></li>
								<li><img src="images/proto_parts.png" /></li>
								<li><img src="images/proto_projects.png" /></li>
								<li><img src="images/proto_parts.png" /></li>
								<li><img src="images/proto_documents.png" /></li>
								<li><img src="images/proto_parts.png" /></li>
							</ul>
						</div>
						<div id="window_mask"></div>
					</div>
					<div id="window_scrollbar">
						<div id="window_scrollbar_right"><img src="images/proto_right_arrow.png" onclick="shiftLeft('window_images_list', 'dot2', window_names);" /></div>
						<div id="window_scrollbar_left"><img src="images/proto_left_arrow.png" onclick="shiftRight('window_images_list', 'dot2', window_names);" /></div>
						<div id="window_scrollbar_center"><div 
							id="dot2" name="dot2" 
							class="draggable" unselectable="on"
							ondragstart="invo.dnd.startDnD(event, moveDot2);"
							onmousedown="invo.dnd.startDnD(event, moveDot2);"></div>
					</div>
				</td>
			</tr>
		</table>
	</div></div></div>
	
	<div id="usecase_dropdown" style="display: none;" onclick="toggleDisplay(this.id);">
		<ul>
			<li><img src="images/proto_down_arrow.png" align="top" />Bookmark Folder
				<ul>
					<li>Item</li>
				</ul>
			</li>
			<li><img src="images/proto_down_arrow.png" align="top" />Bookmark Folder
				<ul>
					<li>Item</li>
					<li><img src="images/proto_down_arrow.png" align="top" />Bookmark Folder
						<ul>
							<li>Item</li>
							<li>Item</li>
							<li>Item</li>
						</ul>
					</li>
					<li>Item</li>
				</ul>
			</li>
			<li><img src="images/proto_down_arrow.png" align="top" />Bookmark Folder
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
			</li>
		</ul>
	</div>
	
	<div id="window_dropdown" style="display: none;" onclick="toggleDisplay(this.id);">
		<ul>
			<li>CAD Spec #12</li>
			<li>Part #A-2396</li>
			<li>Kona Blue Project</li>
			<li>Assy. for Zapper</li>
			<li>Workflow Process Doc</li>
			<li>ZAP BOM</li>
		</ul>
	</div>

</div>


</body>
</html>