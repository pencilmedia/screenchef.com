<style>
dl.side_by_side_mixed dt { width:27%; }
/******************************************************************************
CONTROLS WITH DUAL AND EXTRA BUTTONS
******************************************************************************/
/* Extra bottom button */
dd.single_button.with_bottom_button,
dd.dual_button.with_bottom_button { padding-bottom:25px; }
dd.single_button p,
dd.dual_button p {  text-align:right; padding-top:4px; white-space:nowrap; }
dd.single_button .single_list.long_width { width: 87.65%; }
</style>
<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
        <div class="breadcrumb_wrapper">
            <ul class="breadcrumbs">
                <li><a href="#">Breadcrumb</a> &raquo;</li>
                <li>Breadcrumb</li>
            </ul>
        </div>
        <div class="column_one layout">
            <h2>Identifier</h2>
            <p><strong>Object Type</strong> &bull; Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse rutrum. Donec elit. Proin lorem elit, commodo sed.</p>
        </div>
        <div class="column_two">
            <h2>Status / Lifecycle</h2>
            <p>[varies by object]</p>
        </div>
    	<div class="column_three">
			<ul class="rating">
                <li class="traffic_red">Overall Status</li>
                <li class="traffic_green">Schedule Status</li>
                <li class="traffic_yellow">Cost Status</li>
                <li class="traffic_red">Resources Status</li>
                <li class="traffic_grey">Quality Status</li>
			</ul>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <label>Label:</label> 
            <select name="">
                <option value="">Values</option>
                <option value="">selection</option>
            </select>
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Object Action</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="comment">&nbsp;</em> Action 2</span></a>
            <a href="#" class="button"><span>Menu<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" id="saveForm" class="button"><span>Save</span></a> <a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/complete_form/complete_form_read.php');" class="button"><span>Cancel</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form">
            <form id="form_dialogs" name="form_dialogs" action="">
            <fieldset>
                <dl class="side_by_side_mixed">

                    <dt class="required"><label for="text_field">Text:</label></dt>
                        <dd class="required">
                        	<input type="text" value="Value" id="text_field" class="long_width" />
                			<span class="error_msg hidden">Error message...</span>
                        </dd>
                    <dt><label for="multi_text">Multi-text:</label></dt>
                        <dd>
                            <textarea id="multi_text" class="long_width">This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar.</textarea>
                        </dd>
            <!-- Multi Select Cascade List -->
                    <dt><label for="mscl_container">Multi-select Cascade List:</label></dt>
                    <dd class="dual_button with_bottom_button">
                        <div id="mscl_agileautocomplete" class="mscl long_width">
                            <div id="mscl_container" class="mscl_container" tabindex="-1">
                        		<div id="mscl_added_notice" class="added_notice" style="display: none;">Added</div>
                                <ul id="mscl_pillbox" class="pillbox"></ul>
                          	</div>
                          	<p id="x1"><a href="#" id="open_palette3" class="button"><span>Extra Button</span></a></p>
                        </div>
                        <a href="#" id="mscl_open_palette" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                        <a href="#" id="mscl_open_palette_0" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                    </dd>
            <!-- Single Select Search -->
                    <dt title="Single Select Search"><label for="textbox1" >Single Select Search:</label></dt>
                    <dd class="single_button">
                        <div id="sss" class="list_control single_list long_width">
                            <input type="text" id="textbox1" class="textbox1" autocomplete="off" />
                            <div id="sss_autoCompleteList" class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul id="sss_pillbox" class="pillbox"></ul>
                                </div>
                        </div>
                      <a href="#" id="cmdOpenPalette" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                    </dd>
			<!-- Multi-select Search -->
					<dt><label for="target_query">Multi-Select Search:</label></dt>
                        <dd class="nodrag">
                            <div id="mssContainer" class="controlOuterContainer long_width">
                                <input type="text" id="target_query" class="search_query" autocomplete="off" />
                                <div id="mss_added_notice" class="added_notice" style="display: none;">Added</div>
                                <div id="mss_targetContainer" class="selected_container" tabindex="-1">
                                    <ul id="mss_pillbox"></ul>
                                </div>
                            </div>
                            <a href="#" id="cmdMssPallete" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                        </dd>
				</dl>            
                <!-- END: Disabled Mode -->
            </fieldset>
            </form>
        </div>
    </div>
</div>
<!--************************************
    MULTI-SELECT CASCADE LIST PALETTE
************************************* -->
<div id="mscl_palette" class="palette nodrag">
    <div id="mscl_floater_content" class="palette_content nodrag">
        <div class="handlebar"></div><a href="#" id="close_palette" class="close_palette"><span>close</span></a>
        <div class="palette_title nodrag">Multi-select Cascade</div>
        <div id="mscl_palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
        <div id="mscl_treeContainerDiv" class="msclTreeContainerDiv nodrag">
            <div id="mscl_treeContainer" class="nodrag treeContainer" tabindex="-1" style="-moz-outline-style: none;"></div>  
        </div>
        <div id="mscl_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<!--************************************
    SINGLE SELECT SEARCH PALETTE
************************************* -->
<div id="sss_palette" class="palette nodrag" style="position:absolute">
    <div id="sss_floater_content" class="palette_content nodrag">
        <div id="sss_floater_handlebar" class="handlebar"></div><a href="#" id="cmdClosePalette" class="close_palette"><span>close</span></a>
        <div id="sss_floater_title" class="palette_title nodrag">Single Select Search</div>
        <div id="sss_palette_added_notice" class="palette_added_notice" style="display: none;">Replaced</div>
        <div id="sss_floater_filter" class="palette_filter nodrag">
            <input type="text" style="width:70%" id="sss_palette_query" class="search nodrag" name="search" autocomplete="off" value="Test"/>
            <a href="#" id="cmdSearch" class="button nodrag"><span class="nodrag"><em class="view_details nodrag">&nbsp;</em> Search</span></a>
        </div>
        <div id="floater_results_div" class="nodrag">
            <div id="sss_palette_results" class="palette_results_list nodrag"></div>
        </div>  
        <div id="sss_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<!--************************************
    MULTI-SELECT SEARCH PALETTE
************************************* -->
<div id="mssPalette" class="palette nodrag">
    <div id="mss_floater_content" class="palette_content nodrag">
        <div id="mss_floater_handlebar" class="handlebar"></div><a href="#" id="cmdMssPalleteClose" class="close_palette"><span>close</span></a>
        <div id="mss_floater_title" class="palette_title nodrag">Multi-select Search
        <div id="mss_palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
    </div>
    <div id="mss_floater_filter" class="palette_filter nodrag">
        <input type="text" id="mss_palette_query" class="search nodrag" name="search" autocomplete="off" value="" onclick="select()" />
        <a href="#" id="cmdMssSearch" class="button"><span><em class="view_details">&nbsp;</em> Search</span></a>
    </div>
    <div id="mss_treeContainerDiv" class="mss nodrag">
        <div id="mss_resultsData" class="palette_results_list nodrag"></div>
    </div>
    	<div id="mss_palette_message" class="palette_message">Partial Results: More than 500 results found; 500 rows are displayed.</div>  
        <div id="mss_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<!--************************************
    MULTI-SELECT SEARCH NO VALUE PALETTE
************************************* -->
<div id="mssPalette_nv" class="palette nodrag">
    <div id="mss_floater_content_nv" class="palette_content nodrag">
        <div id="mss_floater_handlebar_nv" class="handlebar"></div><a href="#" id="cmdMssPalleteClose_nv" class="close_palette"><span>close</span></a>
        <div id="mss_floater_title_nv" class="palette_title nodrag">MSL - No Value
    </div>
    <div id="mss_floater_filter_nv" class="palette_filter nodrag">
        <input type="text" id="mss_palette_query_nv" class="search nodrag" name="search" autocomplete="off" value="" onclick="select()" />
        <a href="#" id="cmdMssSearch_nv" class="button"><span><em class="view_details">&nbsp;</em> Search</span></a>
    </div>
    <div id="mss_treeContainerDiv_nv" class="mss nodrag">
        <div id="mss_resultsData_nv" class="palette_results_list nodrag"></div>
    </div>
    	<div id="mss_palette_message_nv" class="palette_message">Partial Results: More than 500 results found; 500 rows are displayed.</div>  
    	<div id="mss_palette_message_nv" class="palette_message_novalue">
        	There are no available values for this field. Please contact your Agile administrator.
        </div>  
        <div id="mss_resize_handle_nv" class="palette_resizer nodrag">&nbsp;</div>
    </div>
</div>
<!--************************************
    MULTI USER SEARCH PALETTE
************************************* -->
<div id="mus_palette" class="palette nodrag">
    <div id="mus_floater_content" class="palette_content nodrag">
	    <div id="mus_floater_handlebar" class="handlebar"></div>
       	<a href="#" id="cmdMusPalleteClose" class="close_palette"><span>close</span></a>
       	<div id="mus_floater_title" class="palette_title nodrag">Multi-User Search</div>
        <div id="mus_palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
        <div id="mus_floater_filter" class="palette_filter nodrag">
            <form id="frmType" name="frmType">
            <select id="selGroup" class="mus nodrag">
                <option value="users">Users</option>
                <option value="groups">User Groups</option>
            </select>
            <input type="text" id="mus_query" class="search nodrag" name="search" autocomplete="off" value=""/>
            <a href="#" id="cmdMusSearch" class="button"><span><em class="view_details">&nbsp;</em> Search</span></a>
            </form>
        </div>
	    <div id="usersContainerDiv" class="mss nodrag">
		    <div id="mus_resultsData" class="palette_results_list nodrag"></div>
	   	</div>
    	<div id="groupsContainerDiv" class="msclTreeContainerDiv nodrag" style="display: none;">
        	<div id="mus_treeContainer" class="treeContainer mus nodrag" tabindex="-1" style="-moz-outline-style: none;"></div>  
	    </div>
    	<div id="group_approval" class="group_approval nodrag" style="display:none;">
    		<p class="nodrag">
        		<input type="radio" name="group_approval" id="group_approval_all" value="all" checked="checked" /> <label for="group_approval_all" class="nodrag">All group members must approve</label><br />
		        <input type="radio" name="group_approval" id="group_approval_any" value="any" /> <label for="group_approval_any" class="nodrag">Any one group member can approve</label>
    	    </p>
		</div>
   		 <div id="mus_resize_handle" class="mus_resizer nodrag">&nbsp;</div>
    </div>
</div>