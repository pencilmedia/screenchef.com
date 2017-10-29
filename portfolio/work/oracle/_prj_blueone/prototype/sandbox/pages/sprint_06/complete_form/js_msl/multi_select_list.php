<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="../../../../global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="../../../../global/css/action_dialogs.css" />	
	<script type="text/javascript" src="../../../../global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="../../../../global/js/common.js"></script>
	<script type="text/javascript" src="../../../../global/js/yui/autocomplete/autocomplete-min.js"></script>
	<script type="text/javascript" src="../../../../global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="../../../../global/js/action_dialogs.js"></script>
	<script type="text/javascript" src="../../../../global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="../../../../global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="../../../../global/js/yui/datasource/data.js"></script>
    <script type="text/javascript" src="../../../../global/js/yui/animation/animation-min.js"></script>
    <script type="text/javascript" src="../../../../global/js/agile_animations.js"></script>

<!-- Begin: New code for multi select list exploration -->   
	<link rel="stylesheet" type="text/css" href="../../../../global/css/multi_list.css" />
	<script type="text/javascript" src="../../../../global/js/dataset.js"></script>
    <script type="text/javascript" src="multi_select_list.js"></script>
<!-- End: New code for multi select list exploration -->    
    
	<title>Cycle 0</title>
	<style type="text/css">
	html { 
		overflow-y: hidden; 
	}
    </style>
</head>
<body class="action_dialog"> 
<!-- PALETTE -->
<div id="msl_palette" class="palette nodrag">
    <div id="floater_content" class="palette_content nodrag">
        <div id="floater_handlebar" class="handlebar"></div><a href="#" id="close_floater" class="close_palette"><span>close</span></a>
        <div id="floater_title" class="palette_title nodrag">Multi-select List
        	<div id="msl_palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
      </div>
        <div id="floater_filter" class="palette_filter nodrag">
        	<label for="msl_palette_query">Filter:</label><input type="text" id="msl_palette_query" class="search nodrag" name="search" autocomplete="off" value="Test" />
        </div>
        <div id="floater_results_div" class="nodrag" style="clear: both;">
            <div id="msl_palette_results" class="palette_results_list nodrag"></div>
        </div>  
        <div id="floater_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<div id="header" class="header">
	<!--************************************
		HEADER
	*************************************-->
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Cycle 0</h2>
			<p>April 2007</p>
		</div>			
  <div class="column_three">
			<a href="#" class="button" onclick="doSave();"><span>Save</span></a>
			<a href="#" onclick="javascript:window.close();" class="button"><span>Cancel</span></a>
		</div>
	</div>
	
	<!--************************************
		MESSAGES
	*************************************-->
	<div id="page_message" class="message info">
		<p>Click save to view errors.</p>
	</div>
</div>
<div id="content" class="content">
	<form id="form_dialogs" name="form_dialogs" action="">
		<div id="edit_mode">

	  <!-- MULTI SELECT LIST SECTION -->
			<fieldset class="dynamic">
				<!-- MULTI SELECT LIST -->
				<dl class="side_by_side">
					<dt class="required"><span>*</span><label for="msl_target_query" class="_error">Multi-select List:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="msl_agileautocomplete" class="agileautocomplete medium_width">
                            <input type="text" id="msl_target_query" class="search_query" />
							<div id="msl_results_container" class="results_container"></div>
							<div id="msl_added_notice" class="added_notice" style="display: none;">Added</div>
							<div id="msl_selected_container" class="selected_container" tabindex="-1">
								<ul id="msl_pill_results"></ul>
							  </div>
						</div>
						<a href="#" id="msl_cmdPalette" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
			</fieldset>
		</div>

  <!-- PALETTE PROXY : these styles exist in action_dialog.css for the className = div.drag_tooltip  -->
		<div id="dragDiv4" style="
			width: 15px;
			height: 15px;
			visibility: hidden;
			z-index: 90000;">
			<p id="msl_palette_tooltip" class="drag_tooltip" style="
			position:absolute;
			left:-9px;
			top:-5px;
			width: auto;
            min-width: 15px;
            padding: 2px;
			color: #000;
			background-color: #fff;
			border: 1px dotted #787878;
			font-weight: bold;
			font-size: 13px;
			text-align: center;
			line-height: 14px;
			opacity: .75;
			filter: alpha(opacity=75); width=15px; height=15px;">1</p>
		</div>

	</form>
	<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>