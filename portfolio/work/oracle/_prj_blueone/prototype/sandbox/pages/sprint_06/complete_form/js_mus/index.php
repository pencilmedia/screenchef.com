<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
   	<link rel="stylesheet" type="text/css" href="global/css/multi_select_cascade_list_tree.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/yui/dragdrop/dragdrop-min.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
    <script type="text/javascript" src="global/js/agile_animations.js"></script>
	<!-- INCLUDE YUI DATASOURCE AND TABLE -->
	<script type="text/javascript" src="global/js/yui/datasource/datasource-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datatable/datatable-beta-min.js"></script>
	<script type="text/javascript" src="global/js/yui/datasource/data.js"></script>
	<!-- INCLUDE AGILE CUSTOM CLASSES -->
	<script type="text/javascript" src="global/js/dataset.js"></script>
	<script type="text/javascript" src="AgileMUS.js"></script>
	<script type="text/javascript" src="AgileMUSPills.js"></script>
	<script type="text/javascript" src="AgileMUSPalette.js"></script>

	<script type="text/javascript" src="global/js/yui/treeview/treeview.js"></script>
	<script type="text/javascript" src="../js_mscl/AgileMultiSelectCascadeList.js"></script>
	<script type="text/javascript" src="AgileConstants.js"></script>
	<script type="text/javascript" src="AgileKeyReader.js"></script>
	<script type="text/javascript" src="AgileMUSTree.js"></script>
	<script type="text/javascript" src="AgileMUSNode.js"></script>
	<script type="text/javascript" src="AgileMUSBuilder.js"></script>

	<title>Multi User Search</title>
	<style type="text/css">
		div.palette_filter input { width: 20%; }
		div.group_approval 
		{
			padding: 2px 0px 0 10px;
			margin-top: 5px;
			height:35px;
		}
		div.group_approval input { border:0px solid green;; padding-top:5px; }
		div.group_approval label { position: relative; top: -4px; *top:-2px; }
		div.msclTreeContainerDiv { height: 140px; }
		
		/* Multi User Search Custom Icons */
		#treeContainer.mus .itemIconFolderOpen,
		#treeContainer.mus .itemIconFolderClosed
		{ background: transparent url(/global/images/icn_obj_user_group.png) no-repeat scroll 0px 2px; }
		#treeContainer.mus .itemIconDocument
		{ background: transparent url(/global/images/icn_obj_user.png) no-repeat scroll 0px 1px; }
	</style>
</head>
<body class="action_dialog"> 
<!--************************************
    PALETTE
*************************************-->
<div id="musPalette" class="palette nodrag">
    <div id="mus_floater_content" class="palette_content nodrag">
	    <div id="floater_handlebar" class="handlebar"></div>
       	<a href="#" id="cmdMusPalleteClose" class="close_palette"><span>close</span></a>
       	<div id="floater_title" class="palette_title nodrag">Multi-User Search</div>

        <div id="floater_filter" class="palette_filter nodrag">
            <form id="frmType" name="frmType">
            <select id="selGroup" class="mus nodrag">
                <option value="users">Users</option>
                <option value="groups">User Groups</option>
            </select>
            <input type="text" id="mus_palette_query" class="search nodrag" name="search" autocomplete="off" value=""/>
            <a href="#" id="cmdMusSearch" class="button"><span><em class="view_details">&nbsp;</em> Search</span></a>
            </form>
        </div>
	    <div id="usersContainerDiv" class="mss nodrag">
		    <div id="mus_resultsData" class="palette_results_list nodrag"></div>
	   	</div>
    	<div id="groupsContainerDiv" class="msclTreeContainerDiv nodrag" style="display:none;">
        	<div id="treeContainer" class="mus nodrag" tabindex="-1" style="-moz-outline-style: none;"></div>  
	    </div>
    	<div id="group_approval" class="group_approval nodrag" style="display:none;">
    		<p class="nodrag">
        		<input type="radio" name="group_approval" id="group_approval_all" value="all" checked="checked" /> <label for="group_approval_all" class="nodrag">All group members must approve</label><br />
		        <input type="radio" name="group_approval" id="group_approval_any" value="any" /> <label for="group_approval_any" class="nodrag">single group member can approve</label>
    	    </p>
		</div>
   		 <div id="resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div> 

<!--************************************
    HEADER
*************************************-->
<div id="header" class="header">
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Multi User Search</h2>
			<p>July 2007</p>
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

<!--************************************
    CONTENT
*************************************-->
<div id="content" class="content">
    <form id="form_dialogs" name="form_dialogs" action="">
		<div id="edit_mode">
			<fieldset class="dynamic">
            
                <!-- NON-EDITABLE -->
                <dl class="side_by_side_text"  tabindex="-1">
                    <dt>Non-editable Multi User Search:</dt>
                    <dd>Jane Doe, Joel Nave, Paul Maguire, Peter Parker, Ralph Garcia</dd>
                </dl>
				<br /><br />            
            
				<!-- MULTI SELECT LIST -->
				<dl class="side_by_side">
					<dt class="required"><span>*</span><label for="mus_target_query" class="_error">Multi User Search:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="musContainer" class="controlOuterContainer medium_width">
                            <input type="text" id="mus_target_query" class="search_query" autocomplete="off" />
							<div id="added_notice" class="added_notice" style="display: none;">Added</div>
							<div id="mus_targetContainer" class="selected_container" tabindex="-1">
								<ul id="mus_pillbox"></ul>
							  </div>
						</div>
						<a href="#" id="cmdMusPallete" class="button"><span><em class="addressbook">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
                

	            <!-- Disabled -->
				<dl class="side_by_side">
					<dt><label for="mus_target_query" class="_error">Multi-User Search:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="musContainer_disabled" class="controlOuterContainer medium_width disabled">
                            <input type="text" id="mus_target_query_disabled" class="search_query" autocomplete="off"  disabled="disabled" />
							<div id="added_notice_disabled" class="added_notice" style="display: none;">Added</div>
							<div id="mus_targetContainer_disabled" class="selected_container" tabindex="-1">
								<ul id="mus_pillbox_disabled"></ul>
							  </div>
						</div>
						<a href="#" id="cmdMusPallete_disabled" class="button disabled"><span><em class="addressbook">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
			</fieldset>
		</div>
    </form>
    <!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>