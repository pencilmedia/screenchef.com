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
            <a href="#" class="button"><span><em class="comment">&nbsp;</em> Action 2</span></a>
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
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
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
        <p class="button_controls"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_redline/redline_edit.php', 'loadDesignForm()');" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form">
            <dl class="side_by_side_text updated">
                <dt>Type:</dt>
                    <dd>
                    	<span class="new">Sourcing Project</span>
                        <span class="redlined"><em>Old Project</em></span>
                    </dd>
                <dt>Number:</dt>
                    <dd>
                    	<span class="new">123456</span>
                        <span class="redlined"><em>654321</em></span>
                    </dd>
                <dt>Text:</dt>
                    <dd>Value</dd>
                <dt>Multi-text:</dt>
                    <dd class="multivalue">
                        <span>
                            This is example text in a multi-line text field. The content of this field may take up more 
                            space than the input. In that case, the input would have a vertical scrollbar.
                        </span>
                        <span class="redlined">
                        	<em>
                            This is example text in a multi-line text field. The content of stuff.
                            </em>
                        </span>
                    </dd>
                <dt>Drop Down List:</dt>
                    <dd class="multilist">
                    	Option 1, <span class="new">Option 2</span>, Option 3, Option 4, <span class="redlined"><em>Option 5</em></span>, Option 8, Option 6, Option 7
                    </dd>
				<dt>Long Date:</dt>
					<dd>
                    	<span>07/14/2009 7:30 AM PST</span>
                        <span class="redlined"><em>06/14/2007 7:30 AM PST</em></span>
                    </dd>
                <dt>Multi-select Cascade List:</dt>
                	<dd class="multilist">
                    	List Item 1, List Item 2, List Item 3
                    </dd>
                <dt>Single Select Search:</dt>
                	<dd>
                    	<span class="new">Value</span>
                    </dd>
                <dt><label>UOM:</label></dt>
                    <dd>
                    	<span>15 g</span>
                    </dd>
                <dt><label>Money:</label></dt>
                    <dd>
                    	<span class="redlined"><em>200 USD</em></span>
                    </dd>
                <dt><label>Multi-select Search:</label></dt>
                    <dd class="multilist">
                    	Alabama, Arkansas, <span class="redlined"><em>Hawaii</em></span>, California
                    </dd>
                <dt><label>Multi User Search:</label></dt>
                    <dd>
                    	<span class="new">Carlos Marquez</span>
                        <span class="redlined"><em>Anthony Moquette</em></span>
                    </dd>
                <dt><label>Multi-select List:</label></dt>
                    <dd class="multilist">
                    	Item 1, Item 2, Item 3, <span class="redlined"><em>Item 4</em></span>, Item 5
                    </dd>
            </dl>
        </div>
    </div>
</div>

