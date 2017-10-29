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
            Label:
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
        <p class="button_controls"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/complete_form/complete_form_edit.php', 'loadDesignForm()');" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form">
            <dl class="side_by_side_text">
                <dt>Type:</dt>
                    <dd>Sourcing Project</dd>
                <dt>Number:</dt>
                    <dd>123456</dd>
                <dt>Text:</dt>
                    <dd>Value</dd>
                <dt>Multi-text:</dt>
                    <dd>
                        This is example text in a multi-line text field. The content of this field may take up more 
                        space than the input. In that case, the input would have a vertical scrollbar.
                    </dd> 
                <dt>Text Link:</dt>
                    <dd><a href="#">User Link</a></dd> 
                <dt>Drop Down List:</dt>
                    <dd>Option 1</dd>
				<dt>Long Date:</dt>
					<dd>07/14/2007 7:30 AM PST</dd>
                <dt>Multi-select Cascade List:</dt>
                	<dd>List Item 1, List Item 2, List Item 3</dd>
                <dt>Single Select Search:</dt>
                	<dd>Value</dd>
                <dt><label>UOM:</label></dt>
                    <dd>15 g</dd>
                <dt><label>Money:</label></dt>
                    <dd>200 USD</dd>
                <dt><label>Multi-select Search:</label></dt>
                    <dd>Alabama</dd>
                <dt><label>Multi User Search:</label></dt>
                    <dd>Carlos Marquez</dd>
                <dt><label>Multi-select List:</label></dt>
                    <dd>Item 1, Item 2, Item 3</dd>
                <dt>Multi-text Character Counter:</dt>
                    <dd></dd> 
                <dt>Text Character Counter:</dt>
                    <dd></dd> 
                <dt>Dynamic Multi-text with Counter:</dt>
                    <dd></dd> 
                <dt>Dynamic Multi-text:</dt>
                    <dd></dd> 
            </dl>
            
			<h3>Complete Form - Disabled Mode</h3>
            <dl class="side_by_side_text">
                <dt>Type:</dt>
                    <dd>Sourcing Project</dd>
                <dt>Number:</dt>
                    <dd>123456</dd>
                <dt>Text:</dt>
                    <dd>Value</dd>
                <dt>Multi-text:</dt>
                    <dd>This is example text in a multi-line text field. The content of this field may take up more 
                    space than the input. In that case, the input would have a vertical scrollbar.</dd>
                <dt>Text Link:</dt>
                    <dd>User Link</dd>
                <dt>Drop Down List:</dt>
                    <dd>Option 1</dd>
                <dt>Long Date:</dt>
                    <dd>07/14/2007 7:30 AM PST</dd>
                <dt>Multi-select Cascade List:</dt>
                    <dd>List Item 1, List Item 2, List Item 3</dd>
                <dt>Single Select Search:</dt>
                	<dd>Value</dd>
                <dt><label>UOM:</label></dt>
                    <dd>15 g</dd>
                <dt><label>Money:</label></dt>
                    <dd>200 USD</dd>
                <dt><label>Multi-select Search:</label></dt>
                    <dd>Alabama</dd>
                <dt><label>Multi User Search:</label></dt>
                    <dd>Carlos Marquez</dd>
                <dt><label>Multi-select List:</label></dt>
                    <dd>Item 1, Item 2, Item 3</dd>
            </dl>
        </div>
    </div>
</div>

