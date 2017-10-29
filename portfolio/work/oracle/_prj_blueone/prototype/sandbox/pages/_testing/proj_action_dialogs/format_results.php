<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

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

	<title>Format Results</title>
	
	<script type="text/javascript">
	function displayFormatResultsScreen(num){
		
		var format_results_body_1 = document.getElementById("format_results_body_1");
		var format_results_footer_1 = document.getElementById("format_results_footer_1");
		var format_results_body_2 = document.getElementById("format_results_body_2");
		var format_results_footer_2 = document.getElementById("format_results_footer_2");
		
		if (num == 1){
			displayBlock(format_results_body_1);
			displayBlock(format_results_footer_1);
			
			displayNone(format_results_body_2);
			displayNone(format_results_footer_2);
			
		} else {
			displayBlock(format_results_body_2);
			displayBlock(format_results_footer_2);
			
			displayNone(format_results_body_1);
			displayNone(format_results_footer_1);
		}
		
	}
	</script>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Format Results</h2>
                <p>Lorem ipsum</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
        <!--************************************
           STEP 1
        *************************************-->
        <div id="format_results_body_1" class="shuttle_control">
            <h4>Table Result Fields</h4>
            <fieldset class="dynamic">
                    <!-- SHUTTLE CONTROL PROTOTYPE -->
                    <div class="colonnade">
                        <div class="lt_column">
                            <h4>Available Fields</h4>
                            <div class="shuttle_content" style="height: 300px">
                                <img src="../../../global/images/temp_shuttle_control_left.png"/>
                            </div>
                            <div class="shuttle_buttons">
                                <p><a id="scr" class="button" href="#"><span><em class="iconic arrow_back">&nbsp;</em>&nbsp;</span></a></p>
                                <p><a id="scl" class="button" href="#"><span><em class="iconic arrow_next">&nbsp;</em>&nbsp;</span></a></p>
                            </div>
                        </div>
                        <div class="rt_column">
                            <h4>Fields to Display</h4>
                            <div class="shuttle_content" style="height: 300px">
                                <img src="../../../global/images/temp_shuttle_control_right.png"/>
                            </div>
                            <div class="shuttle_buttons">
                                <p><a id="scu" class="button" href="#"><span><em class="iconic arrow_up">&nbsp;</em>&nbsp;</span></a></p>
                                <p><a id="scd" class="button" href="#"><span><em class="iconic arrow_down">&nbsp;</em>&nbsp;</span></a></p>
                                <p class="bottom_button"><a id="cmdLock" class="button" href="#"><span><em class="iconic lock">&nbsp;</em>&nbsp;</span></a></p>
                            </div>
                        </div>
                    </div>
          </fieldset>            
        </div>
        <!--************************************
           STEP 2
        *************************************-->
		<div id="format_results_body_2" class="format_results_sort_settings" style="display: none;">
			<h4>Sort Settings</h4>
			<!--************************************
	           EDIT SORT COLUMNS
	        *************************************-->
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
</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three" id="format_results_footer_1"> 
        <a href="#" class="button" onclick="window.close();"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
		<a href="#" class="button" onclick="displayFormatResultsScreen(2);"><span>Continue<em class="arrow_next iconic">&nbsp;</em>&nbsp;</span></a>
    </div>
	<div class="column_three" id="format_results_footer_2" style="display: none;">
		<a href="#" class="button" onclick="displayFormatResultsScreen(1);"><span><em class="arrow_back">&nbsp;</em>Back</span></a>
        <a href="#" class="button" onclick="window.close();"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
		<a href="#" class="button" onclick="window.close();"><span><em class="approve">&nbsp;</em>Finish</span></a>
    </div>
</div>
</body>
</html>
