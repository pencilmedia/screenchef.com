<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="../../../global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="../../../global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="../../../global/css/action_dialogs.css" />
    	
<!-- Begin: New code for Tree Styles -->
   	<link rel="stylesheet" type="text/css" href="tree.css" />
<!-- End: New code for Tree Styles -->

	<script type="text/javascript" src="../../../global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="../../../global/js/common.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/autocomplete/autocomplete-min.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="../../../global/js/action_dialogs.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="../../../global/js/yui/datasource/data.js"></script>
    <script type="text/javascript" src="../../../global/js/yui/animation/animation-min.js"></script>
    <script type="text/ecmascript" src="../../../global/js/yui/treeview/treeview-min.js" ></script> 
    <script type="text/ecmascript" src="../../../global/js/agileLocationNodes.js" ></script> 
	
	
	<script type="text/javascript" src="../../_testing/multiSelectCascadeList.js"></script>
    
    
	<title>Multi Select Cascade List</title>
	<style type="text/css">
	html { overflow-y: hidden; }

	div.palette_results_list td 
	{ 
		padding:0;
		margin:0; 
		border: 0;
		height: 0px;
	}
	a.ygtvlabel.selected { color:#333; background-color:#c3d5f1; }
	</style>
</head>
<body class="action_dialog"> 
<!--************************************
    PALETTE
*************************************-->
<div id="palette" class="palette nodrag">
    <div id="floater_content" class="palette_content nodrag">
        <div id="floater_handlebar" class="handlebar"></div><a href="#" id="close_floater" class="close_palette"><span>close</span></a>
        <div id="palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
        <div id="treecontaner" class="nodrag">
            <div id="cascade_list" class="palette_results_list nodrag treemenu"></div>
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
			<h2>Multi-select Cascade List</h2>
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
					<dt><label for="multi_select_query">Multi-select cascade:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="agileautocomplete" class="mscl medium_width">
							<div id="mscl_container" class="mscl_container" tabindex="-1">
								<ul id="pillbox" class="pillbox"></ul>
                                <div id="added_notice" class="added_notice" style="display: none;">Added</div>
						  </div>
						</div>
						<a href="#" id="cmdPalette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
		</div>
	</form>
    
<!-- PALETTE PROXY -->
<div id="dragDiv4" style="
    width: 15px;
    height: 15px;
    visibility: hidden;
    z-index: 90000;">
    <p id="palette_tooltip" class="drag_tooltip" style="
    position:absolute;
    left:-9px;
    top:-5px;
    width:15px;
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
    
	<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>