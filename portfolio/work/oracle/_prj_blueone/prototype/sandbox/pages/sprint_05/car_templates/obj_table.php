<div id="Header" class="header" onclick="loadGrid(event);">
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
	</div>
	
    <!--************************************
        TABS
    *************************************-->
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray selected"><a href="#"><span>Another Tab<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>History</span></a></li>   
        </ul>
    </div>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("dms/dms.php"); ?>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
<!-- BEGIN: Object Content -->
        
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
            <h4>Table Title</h4>
            <p><label>Views:</label>
                <select name="" class="table_views">
                    <option value="Alpha View">Alpha View</option>
                    <option value="Beta View">Beta View</option>
                    <option value="Delta View">Delta View</option>
                    <option value="Gamma View 4">Gamma View</option>
                    <option class="line" disabled="disabled">-----------------------------</option>
                    <option value="Admin View Foo 1" selected>Admin View Foo 1 (default)</option>
                    <option value="Admin View Foo 2">Admin View Foo 2</option>
                    <option value="Admin View Foo 3">Admin View Foo 3</option>
                </select>
                <a href="#" class="button" id="toggle_view_actions_menu"><span>View Actions<em class="dropdown">&nbsp;</em></span></a>
            </p>
        </div>
        
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
			<div class="column_one no_width">
				<p>
					<a href="#" class="button"><span>Add</span></a>
					<a href="#" class="button disabled"><span>Remove</span></a>
					<a href="#" class="button" id="toggle_more_actions_menu"><span>More Actions<em class="dropdown">&nbsp;</em></span></a>
				</p>
			</div>
			<div class="column_three">
				<p>
					<a href="#" class="button"><span>Save</span></a>
					<a href="#" class="button"><span>Cancel</span></a>
				</p>
			</div>
		</div>
        
        <div style="height: 100%; clear:both; width: 100%;" id="treegrid" class="agile_table">
			<treegrid Data_Url="/pages/sprint_05/car_templates/table/table.xml"></treegrid>
		</div>
		<div class="table_status_bar">
			<? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
		</div>
        
<!-- END: Object Content -->
	</div>

<!--************************************
	RESIZE BAR
*************************************-->
<!-- 
<div class="prvMoveDiv" id="previewMoveDiv"></div>

<div class="Preview">
-->
<!-- BEGIN: Preview Content -->

<!-- END: Preview Content -->
</div>
<div id="frame_enclosure"></div>
<div id="palette_enclosure"></div>
<div id="personalization_enclosure">
	<div class="frozen_col_icon" style="display: block; top: 322px; left: 865px;">&nbsp;</div>
	<div class="frozen_col_line" style="display: block; top: 315px; left: 890px; height: 323px;">&nbsp;</div>
</div>