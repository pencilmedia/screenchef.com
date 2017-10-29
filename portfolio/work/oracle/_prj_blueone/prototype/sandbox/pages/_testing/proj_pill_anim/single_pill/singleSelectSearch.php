<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Cycle One</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
	<link rel="stylesheet" type="text/css" href="global/css/action_dialogs.css" />	
    
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
	<script type="text/javascript" src="global/js/dataset.js"></script>
	<script type="text/javascript" src="singleSelectSearch.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.interface.js"></script>
    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    
    <script type="text/javascript">
    	jQuery.noConflict();
    </script>
    
</head>
<body class="action_dialog"> 
<!-- PALETTE -->
<div id="palette" class="palette nodrag" style="position:absolute">
    <div id="floater_content" class="palette_content nodrag">
        <div id="floater_handlebar" class="handlebar"></div><a href="#" id="cmdClosePalette" class="close_palette"><span>close</span></a>
        <div id="floater_title" class="palette_title nodrag">Single Select Search</div>
        <div id="palette_added_notice" class="palette_added_notice" style="display: none;">Replaced</div>
<div id="floater_filter" class="palette_filter nodrag">
            <input type="text" style="width:70%" id="palette_query" class="search nodrag" name="search" autocomplete="off" value="Test"/>
            <a href="#" id="cmdSearch" class="button nodrag"><span class="nodrag"><em class="view_details nodrag">&nbsp;</em> Search</span></a>
        </div>
        <div id="floater_results_div" class="nodrag">
            <div id="palette_results" class="palette_results_list nodrag"></div>
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
			<h2>Cycle 1</h2>
			<p>May 2007</p>
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
<form id="form_dialogs" name="form_dialogs" action="javascript: void(0);">
    <div id="edit_mode">
        <fieldset class="dynamic">

            <!-- NON-EDITABLE -->
            <dl class="side_by_side_text" tabindex="-1">
                <dt>Non-editable Single Select:</dt>
                <dd>United States</dd>
            </dl>
            
            <br /><br />

            <!-- EDITABLE -->
            <dl class="side_by_side_mixed">
                <dt title="Single Select Search"><label for="textbox1" >Single Select Search:</label></dt>
                <dd>
                    <div id="sss" class="list_control single_list medium_width">
                        <input type="text" id="textbox1" class="textbox1" autocomplete="off" />
                        <div id="autoCompleteList" class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
                
            <br /><br />

            <!-- Disabled -->
            <dl class="side_by_side_mixed">
                <dt title="Single Select Search"><label for="textbox1" >Single Select Search:</label></dt>
                <dd>
                    <div id="sss" class="list_control single_list medium_width disabled">
                        <input type="text" id="textbox1" class="textbox1 disabled" disabled="disabled"/>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox" class="pillbox"></ul>
                            </div>
                    </div>
                  <a href="#" id="cmdOpenPalette" class="button"><span><em class="view_details">&nbsp;</em>&nbsp;</span></a>
                </dd>
            </dl>
                
        </fieldset>
    </div>
</form>
    
    
	<!-- needed! do not delete --><p class="action_dialog_foot_spacer">.</p><!-- needed! do not delete -->
</div>
</body>
</html>