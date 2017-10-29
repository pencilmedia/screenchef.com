<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.interface.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="comment.php.js"></script>
	
	<!-- NEW STUFF -->
	
	<!-- BEGIN: CSS Coqsoft table -->
	<!--<link type="text/css" rel="stylesheet" href="global/js/grid/Grid.css">-->
	<!-- End: CSS Coqsoft table -->
	
	<!-- BEGIN: CSS YUI defaults -->
	<link type="text/css" rel="stylesheet" href="global/js/yui/reset/reset.css">
	<link type="text/css" rel="stylesheet" href="global/js/yui/fonts/fonts.css">
	<link type="text/css" rel="stylesheet" href="global/js/yui/fonts-min.css"> 
	<link type="text/css" rel="stylesheet" href="global/js/yui/menu/assets/menu.css">
	<!-- END: CSS YUI defaults -->
	
	<!-- BEGIN: CSS Agile general -->
	<link type="text/css" rel="stylesheet" href="global/css/default.css">
	<link type="text/css" rel="stylesheet" href="global/css/framework.css">
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_select_cascade_list_tree.css" />
	<!-- END: CSS Agile general -->	
		
	<script type="text/javascript">
		jQuery.noConflict();
	</script>
	
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script> 
	<script type="text/javascript" src="global/js/yui/container/container_core-min.js"></script>  
	<script type="text/javascript" src="global/js/yui/menu/menu-min.js"></script>
	<script type="text/javascript" src="global/js/yui/treeview/treeview.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/yui/animation/animation.js"></script>
	<script type="text/javascript" src="global/js/_ux.not.for.production.js"></script>
	
	<script type="text/javascript" src="global/js/yui/dom/dom-min.js"></script>
	<script type="text/javascript" src="global/js/yui/autocomplete/autocomplete-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/data.js"></script>
	
	
	<!-- BEGIN: JS Palette -->
	<script type="text/javascript" src="global/js/palette_base.js"></script>
	<script type="text/javascript" src="global/js/palette_extensions.js"></script>
	<!-- End: JS Palette -->
	

	
	<!-- BEGIN: JS for Multi Search List -->
	<script type="text/javascript" src="global/js/multiSelectionList.js"></script>
	<script type="text/javascript" src="global/js/PaletteTable.js"></script>
	<!-- END: JS for Multi Search List -->
	
	<!-- BEGIN: KEYS JS -->
	<script type="text/javascript" src="global/js/yui/yahoo/yahoo.js"></script> 
	<script type="text/javascript" src="global/js/yui/event/event.js"></script> 
	<script type="text/javascript" src="global/js/yui/dom/dom.js"></script>

	<!-- END: KEYS JS -->
	
	
	<!-- END NEW STUFF-->
	

	<!-- STOP EVENT & KEY DETECTION FUNCTIONS -->

	<script type="text/javascript">
	
		/**
		 * Convenience method for stopPropagation + preventDefault
		 * @method stopEvent
		 * @param {Event} ev the event
		 * @static
		 */
		function stopEvent(ev) {
			this.stopPropagation(ev);
			this.preventDefault(ev);
		}
		
		/**
		 * Stops event propagation
		 * @method stopPropagation
		 * @param {Event} ev the event
		 * @static
		 */
		function stopPropagation(ev) {
			if (ev.stopPropagation) {
				ev.stopPropagation();
			} else {
				ev.cancelBubble = true;
			}
		}
		
		/**
		 * Prevents the default behavior of the event
		 * @method preventDefault
		 * @param {Event} ev the event
		 * @static
		 */
		function preventDefault(ev) {
			if (ev.preventDefault) {
				ev.preventDefault();
			} else {
				ev.returnValue = false;
			}
		}
		
		function detectSubmit (evt, val, val_type) {
			evt = getEvent(evt);
			var characterCode = (evt && evt.which) ? evt.which : evt.keyCode;
			var modifiers = getEventModifiers(evt);
			if (!characterCode) { return; }
	
			switch (characterCode) {
				case 13: // > Enter
					stopEvent(evt);
					if (val_type == "view"){
						makeUneditableView(val);
					} else if (val_type == "des") {
						makeUneditableDes(val);
					}
					return false;
				default:
					break;
			}
		}
	
	</script>
	
	<title>Manage Views</title>
	
	<script type="text/javascript">
		var col_array = new Array("Item Number", "Old Item Description","New Item Decription","Old Rev","New Rev","Old Lifecycle Phase","New Lifecycle Phase","Effective Date","Mass","Product Lines");

		function makeEditableView(row){
			var view_name = document.getElementById("view_name_" + row);
			var view_text = view_name.firstChild.innerHTML;
			view_name.innerHTML = "<input type='text' class='manage_text' value='" + view_text + "' onkeydown='detectSubmit(event,\"" + row + "\",\"view\");' />";
			view_editable = view_editable + 1;
		}
		
		function makeEditableDes(row){
			var description = document.getElementById("description_" + row);
			var description_text = description.firstChild.innerHTML;
			description.innerHTML = "<input type='text' class='manage_text' value='" + description_text + "' onkeydown='detectSubmit(event,\"" + row + "\",\"des\");' />";
			des_editable = des_editable + 1;
		}
		
		function makeUneditableView(row){
			var view_name = document.getElementById("view_name_" + row);
			var view_text = view_name.firstChild.value;
			view_name.innerHTML = "<span ondblclick='makeEditableView(\"" + row + "\");'>" + view_text + "</span>";
			view_editable = view_editable - 1;
		}
		
		function makeUneditableDes(row){
			var description = document.getElementById("description_" + row);
			var description_text = description.firstChild.value;
			description.innerHTML =  "<span ondblclick='makeEditableDes(\"" + row + "\");'>" + description_text + "</span>";
			des_editable = des_editable - 1;
		}
		
		
		function displayEditView(edit_section_name, non_global){
			
			var view_manager = document.getElementById("view_manager");
			displayNone(view_manager);
			
			var view_header = document.getElementById("view_header");
			displayNone(view_header);
			
			var page_message = document.getElementById("page_message");
			displayNone(page_message);
			
			var view_footer = document.getElementById("view_footer");
			displayNone(view_footer);
			
			var edit_header = document.getElementById("edit_header");
			displayBlock(edit_header);	
			
			if (non_global == true){
				var edit_section_tabs = document.getElementById(edit_section_name + "_tabs");
			} else {
				var edit_section_tabs = document.getElementById(edit_section_name + "_global_tabs");
			}
			displayBlock(edit_section_tabs);	
			
			var edit_section = document.getElementById(edit_section_name);
			displayBlock(edit_section);
			
			if(edit_section_name == 'edit_sort_columns'){
				
				var edit_dms_fyi = document.getElementById("edit_dms_fyi");
				displayNone(edit_dms_fyi);
				
				var edit_section_tabs_1 = document.getElementById("edit_filter_table_tabs");
				displayNone(edit_section_tabs_1);
				
				var edit_global_section_tabs_1 = document.getElementById("edit_filter_table_global_tabs");
				displayNone(edit_global_section_tabs_1);
				
				var edit_section_1 = document.getElementById('edit_filter_table');
				displayNone(edit_section_1);
				
				var edit_section_tabs_2 = document.getElementById("edit_format_columns_tabs");
				displayNone(edit_section_tabs_2);
				
				var edit_global_section_tabs_2 = document.getElementById("edit_format_columns_global_tabs");
				displayNone(edit_global_section_tabs_2);
				
				var edit_section_2 = document.getElementById('edit_format_columns');
				displayNone(edit_section_2);
			} 
			
			if(edit_section_name == 'edit_filter_table'){
				
				var edit_dms_fyi = document.getElementById("edit_dms_fyi");
				displayNone(edit_dms_fyi);
				
				var edit_section_tabs_0 = document.getElementById("edit_sort_columns_tabs");
				displayNone(edit_section_tabs_0);
				
				var edit_global_section_tabs_0 = document.getElementById("edit_sort_columns_global_tabs");
				displayNone(edit_global_section_tabs_0);
				
				var edit_section_0 = document.getElementById('edit_sort_columns');
				displayNone(edit_section_0);
				
				var edit_section_tabs_2 = document.getElementById("edit_format_columns_tabs");
				displayNone(edit_section_tabs_2);
				
				var edit_global_section_tabs_2 = document.getElementById("edit_format_columns_global_tabs");
				displayNone(edit_global_section_tabs_2);
				
				var edit_section_2 = document.getElementById('edit_format_columns');
				displayNone(edit_section_2);
			} 
			
			if(edit_section_name == 'edit_format_columns'){
				popMessage('fyi');
				
				var edit_dms_fyi = document.getElementById("edit_dms_fyi");
				displayBlock(edit_dms_fyi);
				
				var edit_section_tabs_0 = document.getElementById("edit_sort_columns_tabs");
				displayNone(edit_section_tabs_0);
				
				var edit_global_section_tabs_0 = document.getElementById("edit_sort_columns_global_tabs");
				displayNone(edit_global_section_tabs_0);
				
				var edit_section_0 = document.getElementById('edit_sort_columns');
				displayNone(edit_section_0);
				
				var edit_section_tabs_1 = document.getElementById("edit_filter_table_tabs");
				displayNone(edit_section_tabs_1);
				
				var edit_global_section_tabs_1 = document.getElementById("edit_filter_table_global_tabs");
				displayNone(edit_global_section_tabs_1);
				
				var edit_section_1 = document.getElementById('edit_filter_table');
				displayNone(edit_section_1);
			}
			
			if (non_global == true){
				var edit_footer = document.getElementById("edit_footer");
				displayBlock(edit_footer);
				
				var edit_global_footer = document.getElementById("edit_global_footer");
				displayNone(edit_global_footer);
			} else {
				var edit_global_footer = document.getElementById("edit_global_footer");
				displayBlock(edit_global_footer);
				
				var edit_footer = document.getElementById("edit_footer");
				displayNone(edit_footer);
			}
		}
		
		function displayManageView(){
			var view_manager = document.getElementById("view_manager");
			displayBlock(view_manager);
			
			var view_header = document.getElementById("view_header");
			displayBlock(view_header);
			
			var page_message = document.getElementById("page_message");
			displayBlock(page_message);
			
			var view_footer = document.getElementById("view_footer");
			displayBlock(view_footer);
			
			var edit_header = document.getElementById("edit_header");
			displayNone(edit_header);
			
			var edit_dms_fyi = document.getElementById("edit_dms_fyi");
			displayNone(edit_dms_fyi);	
			
			var edit_section_tabs_0 = document.getElementById("edit_sort_columns_tabs");
			displayNone(edit_section_tabs_0);
			
			var edit_global_section_tabs_0 = document.getElementById("edit_sort_columns_global_tabs");
			displayNone(edit_global_section_tabs_0);
			
			var edit_section_0 = document.getElementById('edit_sort_columns');
			displayNone(edit_section_0);
			
			var edit_section_tabs_1 = document.getElementById("edit_filter_table_tabs");
			displayNone(edit_section_tabs_1);
			
			var edit_global_section_tabs_1 = document.getElementById("edit_filter_table_global_tabs");
			displayNone(edit_global_section_tabs_1);
			
			var edit_section_1 = document.getElementById('edit_filter_table');
			displayNone(edit_section_1);
	
			var edit_section_tabs_2 = document.getElementById("edit_format_columns_tabs");
			displayNone(edit_section_tabs_2);
			
			var edit_global_section_tabs_2 = document.getElementById("edit_format_columns_global_tabs");
			displayNone(edit_global_section_tabs_2);
			
			var edit_section_2 = document.getElementById('edit_format_columns');
			displayNone(edit_section_2);
			
			var edit_footer = document.getElementById("edit_footer");
			displayNone(edit_footer);
			
			var edit_global_footer = document.getElementById("edit_global_footer");
			displayNone(edit_global_footer);
		}
		function formatCheckAll(check_all){
			var checkbox;
			var i;
	
			if(check_all.checked == true){
				for(i = 0; i < 10; i++){
					checkbox = document.getElementById("check" + i);
					checkbox.checked = true;
				}
			} else if(check_all.checked == false){
				for(i = 0; i < 10; i++){
					checkbox = document.getElementById("check" + i);
					checkbox.checked = false;
				}
			}
	
			return;
		}
	</script>
	<style type="text/css">
	#edit_header,
	#edit_dms_error,
	#edit_dms_fyi,
	#edit_sort_columns_tabs,
	#edit_filter_table_tabs,
	#edit_format_columns_tabs,
	#edit_sort_columns_global_tabs,
	#edit_filter_table_global_tabs,
	#edit_format_columns_global_tabs,
	#edit_sort_columns,
	#edit_filter_table,
	#edit_format_columns,
	#edit_footer,
	#edit_global_footer{
		display: none;
	}
	
	.edit_tabs ul.palette_tabs {
		margin-top: 0;
		padding-top: 0;
	}
	
	.edit_format_columns .drag_drop_icon {
		top: 168px;
	}
	
	.edit_format_columns .drag_drop_line {
		top: 171px;
		width: 590px;
	}
	</style>
</head>
<body class="action_dialog" onload="createGlobalPalette()">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div id="view_header" class="column_one">
                <h2>Manage Views</h2>
                <p>Object Type &bull; Identifier</p>
            </div>
            <div id="edit_header" class="column_one">
                <h2>Edit View</h2>
                <p>ViewNameHere</p>
            </div>	
        </div>
        
        <!--************************************
            OPTIONAL EDIT TABS
        *************************************-->
        <div id="edit_sort_columns_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a class="selected" onclick="displayEditView('edit_sort_columns',true);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_filter_table',true);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_format_columns',true);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div id="edit_filter_table_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a onclick="displayEditView('edit_sort_columns',true);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a class="selected" onclick="displayEditView('edit_filter_table',true);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_format_columns',true);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div id="edit_format_columns_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a onclick="displayEditView('edit_sort_columns',true);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_filter_table',true);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a class="selected" onclick="displayEditView('edit_format_columns',true);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
		
		 <div id="edit_sort_columns_global_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a class="selected" onclick="displayEditView('edit_sort_columns',false);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_filter_table',false);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_format_columns',false);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div id="edit_filter_table_global_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a onclick="displayEditView('edit_sort_columns',false);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a class="selected" onclick="displayEditView('edit_filter_table',false);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_format_columns',false);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
		<div id="edit_format_columns_global_tabs" class="palette_tab_bar edit_tabs">
			<div>
				<ul class="palette_tabs">
					<li>
						<a onclick="displayEditView('edit_sort_columns',false);" href="#"><span>Sort Columns</span></a>
					</li>
					<li>
						<a onclick="displayEditView('edit_filter_table',false);" href="#"><span>Filter Rows</span></a>
					</li>
					<li>
						<a class="selected" onclick="displayEditView('edit_format_columns',false);" href="#"><span>Format Columns</span></a>
					</li>
				</ul>
			</div>
		</div>
        
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="edit_dms_error" class="palette_dms" tabindex="-1">
			<div>
				<div id="errorbar" class="errorbar palette_error">
					<p id="error" class="bgd">&nbsp;</p>
					<p class="text">
						<span class="dms_error_icon">&nbsp;</span>
						<em id="palette_dms_text">1 error was found.</em>
					</p>
				</div>
			</div>
		</div>-->
		<div id="edit_dms_fyi" class="palette_dms" tabindex="-1">
			<div>
				<div id="fyibar" class="fyibar palette_fyi">
					<p id="fyi" class="bgd">&nbsp;</p>
					<p class="text">
						<span id="palette_dms_text">You can re-order columns by dragging the columns up and down to a new location.</span>
					</p>
				</div>
			</div>
		</div>
		<div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
	
		<!--************************************
           VIEW MANAGER
        *************************************-->
		<div id="view_manager" class="view_manager">
			<form onsubmit="return false">
				<table class="grid">
					<thead>
						<tr>
							<th>Default</th>
							<th>View Name</th>
							<th>Description</th>
							<th>View Type</th>
							<th>Edit View</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="center_text"><input type="radio" class="radio" name="default" checked /></td>
							<td id="view_name_00"><span ondblclick="makeEditableView('00');">Alpha View 1</span></td>
							<td id="description_00"><span ondblclick="makeEditableDes('00');">Lorem ipsum dolor sit amet, consectetur</td>
							<td><select><option value="Personal">Personal</option></select></td>
							<td id="edit_button_00" class="center_text"><a href="#" class="button" onclick="displayEditView('edit_sort_columns');"><span><em class="iconic edit">&nbsp;</em>&nbsp;</span></a></td>
							<td class="center_text"><a href="#" class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a></td>
						</tr>
						<tr>
							<td class="center_text"><input type="radio" class="radio" name="default" /></td>
							<td id="view_name_01"><span ondblclick="makeEditableView('01');">Beta View 2</span></td>
							<td id="description_01"><span ondblclick="makeEditableDes('01');">Lorem ipsum dolor sit amet, consectetur</span></td>
							<td><select><option value="Personal">Personal</option></select></td>
							<td id="edit_button_01" class="center_text"><a href="#" class="button" onclick="displayEditView('edit_sort_columns');"><span><em class="iconic edit">&nbsp;</em>&nbsp;</span></a></td>
							<td class="center_text"><a href="#" class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a></td>
						</tr>
						<tr>
							<td class="center_text"><input type="radio" class="radio" name="default" /></td>
							<td id="view_name_02"><span>Admin View Foo 1</span></td>
							<td id="description_02"><span>Lorem ipsum dolor sit amet, consectetur</span></td>
							<td>Global</td>
							<td id="edit_button_02" class="center_text"><a href="#" class="button" onclick="displayEditView('edit_sort_columns');"><span><em class="iconic edit">&nbsp;</em>&nbsp;</span></a></td>
							<td class="center_text">&nbsp;</td>
						</tr>
						<tr>
							<td class="center_text"><input type="radio" class="radio" name="default" /></td>
							<td id="view_name_03"><span>Admin View Foo 2</span></td>
							<td id="description_03"><span>Lorem ipsum dolor sit amet, consectetur</span></td>
							<td>Global</td>
							<td id="edit_button_03" class="center_text"><a href="#" class="button" onclick="displayEditView('edit_sort_columns');"><span><em class="iconic edit">&nbsp;</em>&nbsp;</span></a></td>
							<td class="center_text">&nbsp;</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
		
		<!--************************************
           EDIT SORT COLUMNS
        *************************************-->
		<div id="edit_sort_columns">
			<div id="multi_sort_col_content" class="multi_sort_col_content">
				<div class="multi_sort_col_labels">
					<div class="multi_sort_col_left">
						<p>Attribute</p>
					</div>
					<div class="multi_sort_col_right">
						<p>Sort Order</p>
					</div>
				</div>
				<div class="multi_sort_col_content0">
					<div class="multi_sort_col_left">
						<p>
							<select>
								<option value="Item Number">Item Number</option>
								<option value="Old Item Description">Old Item Description</option>
								<option value="New Item Decription">New Item Decription</option>
								<option value="Old Rev">Old Rev</option>
								<option value="New Rev">New Rev</option>
								<option value="Old Lifecycle Phase">Old Lifecycle Phase</option>
								<option value="New Lifecycle Phase">New Lifecycle Phase</option>
								<option value="Effective Date">Effective Date</option>
								<option value="Mass">Mass</option>
								<option value="Product Lines">Product Lines</option>
							</select>
						</p>
					</div>
					<div class="multi_sort_col_right">
						<p>
							<select>
								<option value="Ascending">Ascending</option>
								<option value="Descending">Descending</option>
							</select>
						</p>
					</div>
				</div>
				<div class="multi_sort_col_content1">
					<div class="multi_sort_col_left">
						<p>
							<select>
								<option value="Item Number">Item Number</option>
								<option value="Old Item Description">Old Item Description</option>
								<option value="New Item Decription">New Item Decription</option>
								<option value="Old Rev">Old Rev</option>
								<option value="New Rev">New Rev</option>
								<option value="Old Lifecycle Phase">Old Lifecycle Phase</option>
								<option value="New Lifecycle Phase">New Lifecycle Phase</option>
								<option value="Effective Date">Effective Date</option>
								<option value="Mass">Mass</option>
								<option value="Product Lines">Product Lines</option>
							</select>
						</p>
					</div>
					<div class="multi_sort_col_right">
						<p>
							<select>
								<option value="Ascending">Ascending</option>
								<option value="Descending">Descending</option>
							</select>
						</p>
					</div>
				</div>
				<div class="multi_sort_col_content2">
					<div class="multi_sort_col_left">
						<p>
							<select>
								<option value="Item Number">Item Number</option>
								<option value="Old Item Description">Old Item Description</option>
								<option value="New Item Decription">New Item Decription</option>
								<option value="Old Rev">Old Rev</option>
								<option value="New Rev">New Rev</option>
								<option value="Old Lifecycle Phase">Old Lifecycle Phase</option>
								<option value="New Lifecycle Phase">New Lifecycle Phase</option>
								<option value="Effective Date">Effective Date</option>
								<option value="Mass">Mass</option>
								<option value="Product Lines">Product Lines</option>
							</select>
						</p>
					</div>
					<div class="multi_sort_col_right">
						<p>
							<select>
								<option value="Ascending">Ascending</option>
								<option value="Descending">Descending</option>
							</select>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!--************************************
           EDIT FILTER TABLE
        *************************************-->
		<div id="edit_filter_table">
			<div id="filter_table_content_align" class="filter_table_content_align">
				<div id="filter_table_content" class="filter_table_content">
					<p class="directions">
						Show data that matches
						<select name="">
							<option value="all">all</option>
							<option value="one">any</option>
						</select>
						of the following:
					</p>
					<div class="filter_options">
						<div class="filter_icon">&nbsp;</div>
						<div class="filter_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="filter_operator">
							<select>&nbsp;</select>
						</div>
						<div class="filter_value">
							<select>&nbsp;</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="filter_options">
						<div class="filter_icon">
							<span class="error_icon">&nbsp;</span>
						</div>
						<div class="filter_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="filter_operator">
							<select>
								<option value="That is between">between</option>
							</select>
						</div>
						<div class="filter_value between_1">
							<input class="nodrag text addr"/><a class="button"><span><em class="calendar iconic">&nbsp;</em>&nbsp;</span></a>
							<br/>
							<span>Error</span>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="filter_options">
						<div class="filter_icon">&nbsp;</div>
						<div class="filter_attributes">&nbsp;</div>
						<div class="filter_operator">&nbsp;</div>
						<div class="filter_value between_2">
							<input class="nodrag text addr"/><a class="button"><span><em class="calendar iconic">&nbsp;</em>&nbsp;</span></a>
							<br/>
							<span>Error</span>
						</div>
						<div class="button_add">&nbsp;</div>
						<div class="button_remove">&nbsp;</div>
					</div>
					<div class="filter_options">
						<div class="filter_icon">&nbsp;</div>
						<div class="filter_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="filter_operator">
							<select>&nbsp;</select>
						</div>
						<div class="filter_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="filter_options">
						<div class="filter_icon">&nbsp;</div>
						<div class="filter_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="filter_operator">
							<select>&nbsp;</select>
						</div>
						<div class="filter_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="filter_options">
						<div class="filter_icon">&nbsp;</div>
						<div class="filter_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="filter_operator">
							<select>&nbsp;</select>
						</div>
						<div class="filter_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--************************************
           EDIT FORMAT COLUMNS
        *************************************-->
		<div id="edit_format_columns" class="edit_format_columns">
			<div id="format_cols_content" class="format_cols_content">
				<div id="format_div" class="format_div" style="min-height: 190px;">
					<table id="format_table" class="format_table">
						<thead>
							<tr>
								<th class="handle">&nbsp;</td>
								<th class="fixed">Order</th>
								<th class="fixed">Show</th>
								<th class="fixed">Freeze</th>
								<th>Column Name</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">&nbsp;</td>
								<td class="fixed">&nbsp;</td>
								<td class="fixed">
									<input class="radio" type="radio" checked=""/>
								</td>
								<td>No Columns</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">&nbsp;</td>
								<td class="fixed">
									<input class="checkbox" type="checkbox" onclick="formatCheckAll(this);"/>
								</td>
								<td class="fixed">&nbsp;</td>
								<td>All Columns</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">1</td>
								<td class="fixed">
									<input id="check0" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Item Number</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">2</td>
								<td class="fixed">
									<input id="check1" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Old Item Description</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">3</td>
								<td class="fixed">
									<input id="check2" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>New Item Description</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">4</td>
								<td class="fixed">
									<input id="check3" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>New Item Description</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">5</td>
								<td class="fixed">
									<input id="check4" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Old Rev</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">6</td>
								<td class="fixed">
									<input id="check5" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>New Rev</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">7</td>
								<td class="fixed">
									<input id="check6" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Old Lifecycle Phase</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">8</td>
								<td class="fixed">
									<input id="check7" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>New Lifecycle Phase</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">9</td>
								<td class="fixed">
									<input id="check8" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Effective Date</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">10</td>
								<td class="fixed">
									<input id="check9" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Mass</td>
							</tr>
							<tr>
								<td class="handle">&nbsp;</td>
								<td class="fixed">11</td>
								<td class="fixed">
									<input id="check10" class="checkbox" type="checkbox"/>
								</td>
								<td class="fixed">
									<input class="radio" type="radio"/>
								</td>
								<td>Product Lines</td>
							</tr>
						</tbody>
					</table>
					<div class="drag_drop_icon">&nbsp;</div>
					<div class="drag_drop_line">&nbsp;</div>
				</div>
			</div>
		</div>
		
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div id="view_footer" class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button" ><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
	<div id="edit_footer" class="column_three">
        <a href="#" class="button" onclick="displayManageView();"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" class="button" onclick="displayManageView();"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
    <div id="edit_global_footer" class="column_three">
        <a href="#" class="button" onclick="displayManageView();"><span><em class="save_dialog">&nbsp;</em>Save As</span></a>
        <a href="#" class="button" onclick="displayManageView();"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
<div id="palette_enclosure"></div>
</body>
</html>