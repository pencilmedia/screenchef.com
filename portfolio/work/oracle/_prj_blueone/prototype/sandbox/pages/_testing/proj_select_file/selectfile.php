<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Select File Dialog</title>
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
	<script type="text/javascript" src="AgileMSS.js"></script>
	<script type="text/javascript" src="AgileMSSPills.js"></script>
	<script type="text/javascript" src="AgileMSSPalette.js"></script>
    <!-- JQUERY -->
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="selectfile.php.js"></script>
    
    <script type="text/javascript">
    	jQuery.noConflict();
    </script>
  
</head>
<body class="action_dialog"> 
<!--
	Notes: Set div class "prompt_shadow" to your opening width.
    In our demo case it's set at 400px in infopop.css.
-->
<div class="prompt_mask"></div>
<div class="prompt_shadow">
    <div class="prompt">
        <form action="">
            <fieldset>
                <h4>Select File</h4>
                <p>Select the Version 3 file to attach.  You can attache one file, or all files from this file folder.</p>
                <dl class="side_by_side_mixed chk_group prompt_options">
                    <dt>&nbsp;</dt>
                    <dd>
                    	File: 
                        <select>
                        	<option>All files</option>
                            <option>This is some very long text sfsdfs sdfsdf sdlfjsd lsd flskdj sdlf sdlkjf sdlf sdlkfj sdf sdljkf sdlfj sdlfjk</option>
                        </select>
                    </dd>
                </dl>
            </fieldset>
        </form>
        <div class="prompt_footer">
                <a href="#" id="promptApply" class="button"><span><em class="save_dialog">&nbsp;</em>OK</span></a> 
                <a href="#" id="promptCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
        </div>
    </div>
</div>
<!--************************************
    PALETTE
*************************************-->
        <div id="mssPalette" class="palette nodrag">
            <div id="mss_floater_content" class="palette_content nodrag">
                <div id="mss_floater_handlebar" class="handlebar"></div><a href="#" id="cmdMssPalleteClose" class="close_palette"><span>close</span></a>
                <div id="mss_floater_title" class="palette_title nodrag">Multi-select Search
                <div id="mss_palette_added_notice" class="palette_added_notice" style="display: none;">Added</div>
            </div>
            <div id="mss_floater_filter" class="palette_filter nodrag">
                <input type="text" id="mss_palette_query" class="search nodrag" name="search" autocomplete="off" value=""/>
                <a href="#" id="cmdMssSearch" class="button"><span><em class="view_details">&nbsp;</em> Search</span></a>            </div>
            <div id="mss_treeContainerDiv" class="mss nodrag">
                <div id="mss_resultsData" class="palette_results_list nodrag"></div>
            </div>  
                <div id="mss_resize_handle" class="palette_resizer nodrag">&nbsp;</div>
            </div>
</div> 

<!--************************************
    HEADER
*************************************-->
<div id="header" class="header">
	<div class="header_wrapper">
		<div class="column_one">
			<h2>Select File Dialog</h2>
			<p>Lorem ipsum</p>
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
				<!-- MULTI SELECT SEARCH -->
				<dl class="side_by_side">
					<dt class="required"><span>*</span><label for="target_query" class="_error">Multi-Select Search:</label></dt>
					<dd class="multiselect_textbox nodrag">
						<div id="mssContainer" class="controlOuterContainer medium_width">
                            <input type="text" id="target_query" class="search_query" autocomplete="off" />
							<div id="mss_added_notice" class="added_notice" style="display: none;">Added</div>
							<div id="mss_targetContainer" class="selected_container" tabindex="-1">
								<ul id="mss_pillbox"></ul>
							  </div>
						</div>
						<a href="#" id="cmdMssPallete" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
					</dd>
				</dl>
			</fieldset>
		</div>
    </form>
    <!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>