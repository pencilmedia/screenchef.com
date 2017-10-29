<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="global/css/action_dialogs.css" />	
   	<link rel="stylesheet" type="text/css" href="agile_tree.css" />

	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/yui/dom/dom-min.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/autocomplete/autocomplete-min.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/data.js"></script>
    <script type="text/javascript" src="global/js/yui/animation/animation-min.js"></script>
    <script type="text/javascript" src="global/js/agile_animations.js"></script>
	<script type="text/javascript" src="global/js/yui/treeview/treeview.js"></script>
	<script type="text/javascript" src="multiselectCascadeList.js"></script>
	<!-- INCLUDE AGILE CUSTOM CLASSES -->
	<script type="text/javascript" src="AgileConstants.js"></script>
	<script type="text/javascript" src="AgileUtilFunctions.js"></script>
	<script type="text/javascript" src="AgileKeyReader.js"></script>
	<script type="text/javascript" src="AgileMultiSelectCascadeListTree.js"></script>
	<script type="text/javascript" src="AgileMultiSelectCascadeListNode.js"></script>
	<script type="text/javascript" src="AgileMultiSelectCascadeListBuilder.js"></script>	

	<!-- INCLUDE DEMO RELATED SCRIPTS AND STYLES -->
	<script type="text/javascript" src="tree_demo.js"></script>
	<script type="text/javascript" src="tree_demo_data.js"></script>
    
	<title>Multi-select Cascade List 0</title>
	<style>
		html { overflow-y: hidden; }
		.treeContainerDiv
		{
			width:95%;
			margin:5px auto;
			background-color:#fff;
			border:1px solid silver;
			overflow-x: hidden;
			height:200px;
		}
    </style>
</head>
<body class="action_dialog"> 
    <!--************************************
        PALETTE
    *************************************-->
    <div id="palette" class="palette nodrag">
        <div id="floater_content" class="palette_content nodrag">
            <div id="drag_handle" class="handlebar"></div><a href="#" id="close_palette" class="close_palette"><span>close</span></a>
            <div id="palette_added_notice" class="palette_added_notice nodrag" style="display: none;">Added</div>
       	        <div id="treeContainerDiv" class="treeContainerDiv nodrag">
	            	<div id="treeContainer" class="nodrag" tabindex="-1"></div>  
                </div>
            <div id="resize_handle" class="palette_resizer nodrag">&nbsp;</div>
        </div>
    </div>  

<div id="header" class="header">
	<!--************************************
		HEADER
	*************************************-->
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Multiselect Cascade List</h2>
			<p>June 2007</p>
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
    <div id="content" class="content">
        <form id="form_dialogs" name="form_dialogs" action="">
            <div id="edit_mode">
        
            <!-- MULTI SELECT LIST SECTION -->
                <fieldset class="dynamic">
                    <!-- MULTI SELECT LIST -->
                    <dl class="side_by_side">
                        <dt><label for="multi_select_query">Multi-select cascade:</label></dt>
                        <dd class="multiselect_textbox">
                            <div id="agileautocomplete" class="mscl medium_width">
                                <div id="mscl_container" class="mscl_container" tabindex="-1">
                                    <ul id="pillbox" class="pillbox"></ul>
                              </div>
                            </div>
                            <a href="#" id="open_palette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>
                    </dl>
               	</fieldset>
            </div>
        </form>
        <!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
	</div>
	</form>
	<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>