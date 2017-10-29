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
			top: 49px;
		}
		
		#window_dropdown {
			top: 49px;
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


		
	</script>
</head>
<body>

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
				<td class="icn" id="usecase_module" onclick="toggleDisplay('usecase_dropdown');"><p><img src="images/proto_folders.png"><img src="images/proto_down_arrow_big.png" align="top" style="position:relative;top:5px;" /><br />SHORTCUTS</p></td>
				<td class="icn" id="window_module" onclick="toggleDisplay('window_dropdown');"><p><img src="images/proto_projects.png"><img src="images/proto_down_arrow_big.png" align="top" style="position:relative;top:5px;" /><br />WINDOWS</p></td>
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