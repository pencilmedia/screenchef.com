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
        <p class="button_controls"><a href="#" id="saveForm" class="button"><span>Save</span></a> <a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_thumbnail/thumbnail_read.php');" class="button"><span>Cancel</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
    
    
        <div class="container obj_form">
          <form id="form_dialogs" name="frm1" action="">
            <fieldset class="lt_column">
                <dl class="side_by_side_mixed">
                    <dt><label for="first_field">Number:</label></dt>
                        <dd>
                            <input type="text" id="first_field" value="123456" class="auto_number_field short_width" />
                            <a href="#" id="an_menu_1" class="button" onclick="increment('ui_control_id1');return false;"><span>123</span></a>
                        </dd>
                    <dt class="required"><label for="type1">Type:</label></dt>
                        <dd class="required">
                            <select id="type1" class="medium_width">
                                <option value=""></option>
                                <option value="Sourcing project">Sourcing Project</option>
                                <option value="Assembly">Assembly</option>
                            </select>
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                    <dt class="required"><label for="text_field">Text:</label></dt>
                        <dd class="required">
                            <input type="text" value="Value" id="text_field" class="long_width" />
                            <span class="error_msg hidden">Error message...</span>
                        </dd>
                    <dt><label for="multi_text">Multi-text:</label></dt>
                        <dd>
                            <textarea id="multi_text" class="long_width">This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar.</textarea>
                        </dd>
                    <dt><label for="text_link">Text Link:</label></dt>
                        <dd><input type="text" value="User Link" id="text_link" class="medium_width" /></dd>
                    <dt><label for="dropdown_list">Menu Text:</label></dt>
                        <dd>				
                            <select id="dropdown_list" class="medium_width">
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </dd>
                    <dt><label for="text_field2">Text:</label></dt>
                        <dd>
                            <input type="text" value="Value" id="text_field2" class="long_width" />
                        </dd>
                    <dt><label for="text_field3">Text:</label></dt>
                        <dd>
                            <input type="text" value="Value" id="text_field3" class="long_width" />
                        </dd>
                </dl>
          </form>
            </fieldset>
        </div>
    
    
        <div class="container obj_form">
        	<h3>Page 2</h3>
            <form id="form_dialogs" name="form_dialogs" action="">
            <fieldset>
                <dl class="side_by_side_mixed">
                    <dt class="required"><label for="first_field">Type:</label></dt>
                        <dd class="required">
                            <select id="first_field" class="medium_width">
                                <option value=""></option>
                                <option value="sourcing project">Sourcing Project</option>
                                <option value="Assembly">Assembly</option>
                            </select>
                			<span class="error_msg hidden">Error message...</span>
                        </dd>
                    <dt><label for="ui_control_id1">Number:</label></dt>
                        <dd>
                            <input type="text" id="ui_control_id1" value="123456" class="auto_number_field short_width" />
                            <a href="#" id="an_menu_1" class="button" onclick="increment('ui_control_id1');return false;"><span>123</span></a>
                        </dd>
                    <dt><label for="ui_control_id2">Number:</label></dt>
                        <dd>
                            <input type="text" id="ui_control_id2" value="123456" class="auto_number_field short_width disabled" disabled="disabled" />
                            <a href="#" id="an_menu_2" class="button" onclick="increment('ui_control_id2');return false;"><span>123</span></a>
                        </dd>
                    <dt><label for="ui_control_id3">Number:</label></dt>
                        <dd>
                            <input type="text" id="ui_control_id3" value="123456" class="auto_number_field short_width" />
                            <a href="#" id="an_menu_3" class="button"><span>123<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                        </dd>
                    <dt><label for="ui_control_id4">Number:</label></dt>
                        <dd>
                            <input type="text" id="ui_control_id4" value="123456" class="auto_number_field short_width disabled" disabled="disabled" />
                            <a href="#" id="an_menu_4" class="button"><span>123<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                        </dd>
                    <dt class="mixed_text"><label for="text_field">Text:</label></dt>
                        <dd class="mixed_text">Testing text mixed with fields.</dd>
                    <dt class="required"><label for="text_field">Text:</label></dt>
                        <dd class="required">
                        	<input type="text" value="Value" id="text_field" class="long_width" />
                			<span class="error_msg hidden">Error message...</span>
                        </dd>
                    <dt><label for="multi_text">Multi-text:</label></dt>
                        <dd>
                            <textarea id="multi_text" class="long_width">This is example text in a multi-line text field. The content of this field may take up more space than the input. In that case, the input would have a vertical scrollbar.</textarea>
                        </dd>
                    <dt><label for="text_link">Text Link:</label></dt>
                        <dd><input type="text" value="User Link" id="text_link" class="medium_width" /></dd>
                    <dt><label for="dropdown_list">Drop Down List:</label></dt>
                        <dd>				
                            <select id="dropdown_list" class="medium_width">
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </dd>
            <!-- Date Control -->
                    <dt><label for="obj3">Long Date:</label></dt>
                        <dd>
                            <input type="text" id="obj3" name="obj3" class="medium_width" value="07/14/2007 7:30 AM PST" />
                            <a href="#" class="button"><span><em class="calendar">&nbsp;</em>&nbsp;</span></a>
                        </dd>
            <!-- Multi Select Cascade List -->
                    <dt><label for="mscl_container">Multi-select Cascade List:</label></dt>
                    <dd>
                        <div id="mscl_agileautocomplete" class="mscl medium_width" >
                            <div id="mscl_container" class="mscl_container" tabindex="-1">
                        		<div id="mscl_added_notice" class="added_notice" style="display: none;">Added</div>
                                <ul id="mscl_pillbox" class="pillbox"></ul>
                          	</div>
                        </div>
                        <a href="#" id="mscl_open_palette" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                    </dd>
            <!-- Single Select Search -->
                    <dt title="Single Select Search"><label for="textbox1" >Single Select Search:</label></dt>
                    <dd>
                        <div id="sss" class="list_control single_list medium_width">
                            <input type="text" id="textbox1" class="textbox1" autocomplete="off" />
                            <div id="sss_autoCompleteList" class="auto_complete_results"></div>
                                <div class="pill_container" tabindex="-1">
                                    <ul id="sss_pillbox" class="pillbox"></ul>
                                </div>
                        </div>
                      <a href="#" id="cmdOpenPalette" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                    </dd>
            <!-- UOM -->   
                    <dt><label for="uom">UOM:</label></dt>
                        <dd>
                        <input type="text" value="15" id="uom" class="short_width" />
                        <select>
                            <option value="pg" title="picogram">pg</option>
                            <option value="ng" title="nanogram">ng</option>
                            <option value="mcg" title="microgram">mcg</option>
                            <option value="mg" title="milligram">mg</option>
                            <option value="cg" title="centigram">cg</option>
                            <option value="dg" title="decigram">dg</option>
                            <option value="g" title="gram" selected="selected">g</option>
                            <option value="dag" title="dekagram">dag</option>
                            <option value="oz" title="ounce">oz</option>
                            <option value="lb" title="pound">lb</option>
                            <option value="kg" title="kilogram">kg</option>
                            <option value="t" title="ton">t</option>
                        </select>
                        </dd>
            <!-- Money -->   
                    <dt><label for="money">Money:</label></dt>
                        <dd>
                        <input type="text" value="200" id="money" class="short_width" />
                        <select>
                            <option value="EUR" title="Euro">EUR</option>
                            <option value="TWD" title="New Taiwanese Dollar">TWD</option>
                            <option value="USD" title="United States Dollar" selected="selected">USD</option>
                        </select>
                        </dd>
			<!-- Multi-select Search -->
					<dt><label for="target_query">Multi-Select Search:</label></dt>
                        <dd class="nodrag">
                            <div id="mssContainer" class="controlOuterContainer medium_width">
                                <input type="text" id="target_query" class="search_query" autocomplete="off" />
                                <div id="mss_added_notice" class="added_notice" style="display: none;">Added</div>
                                <div id="mss_targetContainer" class="selected_container" tabindex="-1">
                                    <ul id="mss_pillbox"></ul>
                                </div>
                            </div>
                            <a href="#" id="cmdMssPallete" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>
			<!-- MSL - NO VALUE EXAMPLE -->
					<dt><label for="target_query_nv">MSL - No Value:</label></dt>
                        <dd class="nodrag">
                            <div id="mssContainer_nv" class="controlOuterContainer medium_width">
                                <input type="text" id="target_query_nv" class="search_query" autocomplete="off" />
                                <div id="mss_added_notice_nv" class="added_notice" style="display: none;">Added</div>
                                <div id="mss_targetContainer_nv" class="selected_container" tabindex="-1">
                                    <ul id="mss_pillbox_nv"></ul>
                                </div>
                            </div>
                            <a href="#" id="cmdMssPallete_nv" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                        </dd>
			<!-- Multi User Search -->
					<dt><label for="mus_target_query">Multi User Search:</label></dt>
					<dd class="nodrag">
						<div id="musContainer" class="controlOuterContainer medium_width">
                            <input type="text" id="mus_target_query" class="search_query" autocomplete="off" />
							<div id="mus_added_notice" class="added_notice" style="display: none;">Added</div>
							<div id="mus_targetContainer" class="selected_container" tabindex="-1">
								<ul id="mus_pillbox"></ul>
							</div>
						</div>
						<a href="#" id="cmdMusPallete" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
					</dd>     
			<!-- Multi-select List -->
					<dt><label for="msl_target_query">Multi-select List:</label></dt>
					<dd class="nodrag">
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
                    
			<!-- Character Counter INPUT -->
                    <dt><label for="textfield_counter">Text Character Counter:</label></dt>
                    <dd>
                    	<input id="textfield_counter" class="medium_width counter50" maxlength="50" onkeydown="mce.counter('inputText',this,document.form_dialogs.textfield_char_counter,50)" onkeyup="mce.counter('inputText',this,document.form_dialogs.textfield_char_counter,50)" />
						<input readonly="readonly" type="text" id="textfield_char_counter" class="counter" size="3" maxlength="3" value="50">
                    </dd>                
            <!-- Character Counter w/ Autoexpand Multi-text -->
               		<dt><label for="multitext_counter">Autoexpand Multi-text with Counter:</label></dt>
                    <dd>
                        <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="medium_width counter150" onkeydown="mce.counter('multiText',this,document.form_dialogs.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form_dialogs.multitext_char_counter,150)"></textarea>
						<input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                    </dd>                
                </dl>
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
<!--************************************
   THUMBNAIL PALETTE
************************************* -->
<div id="thumbPalette" class="ux_palette thumbnail_viewer nodrag">
<div id="ux_palette_top" class="ux_palette_top">
    <div id="ux_palette_header" class="ux_palette_header">
        <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
      <h4 id="ux_palette_title" class="ux_palette_title">Thumbnail Viewer</h4>
        <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
    </div>
  <!-- Optional Top Action Bar
    <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
        <div class="right_column">
            <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
            <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
        </div>
        <div class="left_column">&nbsp;</div>
    </div>
    -->
</div>
<div id="ux_palette_main" class="ux_palette_main thumb_content nodrag">
    <div id="thumb_shot" class="lt_column nodrag">
        <img src="../../../global/images/thumbnail_iMac_fullsize1.png" alt="Full Size Photo" />
        <p>Filename.jpg</p>
    	<p class="set"><input type="checkbox" id="default" /><label for="default">Set as default</label></p>
    </div>
    <div class="rt_column nodrag">
        <div id="thumb_tile" class="thumb_tile nodrag">
            <ul class="sortable nodrag">
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
            </ul>
        </div>  
    </div>
</div>
<div id="ux_palette_bottom" class="ux_palette_bottom nodrag">
    <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar nodrag">
        <div class="right_column nodrag">
            <a class="button" href="#" title="Add"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Remove"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Replace"><span><em class="iconic replace">&nbsp;</em>&nbsp;</span></a>
            <span class="btn_divide">&nbsp;</span>
            <a class="button" href="#" title="Reload"><span><em class="iconic reload">&nbsp;</em>&nbsp;</span></a>
        </div>
        <div class="left_column nodrag">&nbsp;</div>
    </div>
    <div id="ux_palette_handle" class="ux_palette_handle nodrag">&nbsp;</div>
</div>
</div>
