<style>
	/**************************************
		These bad boys need a home.
	**************************************/
	.view_controls select { width: 25%; }
	div.scrollTreeDiv
	{
		height:140px;
		overflow: auto;
	}
	div.scrollTreeDiv.no_wrap
	{
		overflow:auto;
	}
	div.scrollTreeDiv.no_wrap table.table_handle th,
	div.scrollTreeDiv.no_wrap table.table_handle td
	{
		white-space: nowraxp;
		padding-right: 5px;
	}
	div.scrollTreeDiv.no_wrap table.table_handle th
	{
		white-space: nowrap;
	}

	table td.gray_dot { background-repeat: no-repeat; background-position: center center; }
	table.table_handle th,
	table.table_handle td
	{
		border-right: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		padding-left: 5px;
	}
	.button.iconic { padding-left:2px; }
	.icn_information.phase { margin-right: 3px;}
</style>
<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">P00325</a> &raquo; LJ-400-E New Product Development</li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>AML Logic Test Page</h2>
			<p><strong>Program</strong> &bull; This is a new product providing a sporting model for the LJ-400. The description will not be allowed to go on forever.</p>
		</div>
	
		<div class="column_two">
			<h2>In Progress</h2>
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
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Summary</span></a>
            <span class="btn_divide"></span> 
            <a href="#" class="button"><span><em class="view_gannt">&nbsp;</em> Gantt</span></a>
			<span class="btn_divide"></span> 
            <a href="#" class="button"><span>Change Status<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
            <a href="#" class="button" id="cmd_proj_tabs_action_menu_00"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
    </div>
</div>
<!--************************************
    TABS
*************************************-->
<div class="tabs_container skin_default">
    <ul class="tabs">
        <li class="first_tab"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Schedule<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Dependencies<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Team<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Content<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Collaboration<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Workflow<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History<em>&nbsp;</em></span></a></li>
    </ul>
</div>
<!--************************************
    MESSAGES
*************************************-->
<div id="dms" class="message info">
    <p class="text"><span class="asterisk">*</span> Reminder: Correct object-based dependencies.</p>
</div>

<div id="PaneContent" class="frame_pinned">
	<div class="Object">
 <!-- BEGIN: Object Content -->

<!--************************************
	VIEW CONTROLS
*************************************-->
<div class="view_controls">
	<h4>Dependent Upon</h4>
	<p style="white-space:nowrap">
    	<label>View:</label>
		<select name="">
			<option value="">All Content</option>
		</select>
		<a href="#" class="button"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
	</p>
</div>
<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="table_actions">
	<div class="column_one no_width">
		<p>
			<a href="#" onclick="proj_tabs_dependencies.add_onclick()" class="button"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
		</p>
	</div>
	<div class="column_three">
		<p>
			<a class="button" href="#"><span>Save</span></a>
			<a class="button" href="#"><span>Cancel</span></a>
		</p>
	</div>
</div>
<!--************************************
	TABLE HANDLE PINNED
*************************************-->
<div class="scrollTreeDiv no_wrap">
	<table cellpadding="0" cellspacing="0" class="table_handle">
		<thead>
            <tr>
                <th class="handle">&nbsp;</th>
                <th class="icon icn_status_dependency">&nbsp;</th>
                <th class="icon icn_obj_discussion">&nbsp;</th>
                <th class="icon icn_obj_action_item">&nbsp;</th>
                <th class="icon icn_obj_status_content">&nbsp;</th>
                <th class="icon icn_obj_status_attachment">&nbsp;</th>
                <th>Name</th>
                <th>Description</th>
                <th class="icon">&nbsp;</th>
                <th>Owner</th>
                <th>Schedule Start</th>
                <th>Schedule End</th>
                <th>Time Buffer</th>
            </tr>        
        </thead>
		<tbody>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">5GB Hard Drive</a></td>
                <td>5GB Hard Drive</td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>05/16/2008</td>
                <td>05/22/2008</td>
                <td>5</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">New Product Development - iGadget</a></td>
                <td><a href="#">New Product Development - New Comment</a></td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>03/17/2008</td>
                <td>08/07/2008</td>
                <td>2</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">New Program</a></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>02/21/2008</td>
                <td>02/21/2008</td>
                <td>0</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Deliverable from Supplier</a></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Ken Lancaster</a></td>
                <td>04/01/2008</td>
                <td>04/10/2008</td>
                <td>-2</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Design Review</a></td>
                <td>Design Review</td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>02/07/2008</td>
                <td>03/03/2008</td>
                <td>-1</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Design Review</a></td>
                <td>Design Review</td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>02/07/2008</td>
                <td>03/03/2008</td>
                <td>-1</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="#">Design Review</a></td>
                <td>Design Review</td>
                <td>&nbsp;</td>
                <td><a href="#">Test Administrator</a></td>
                <td>02/07/2008</td>
                <td>03/03/2008</td>
                <td>-1</td>
            </tr>
      	</tbody>
	</table>
</div>
<div class="prvMoveDiv" id="previewMoveDiv"></div>
<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="view_controls">
	<h4>Required For</h4>
	<p style="white-space:nowrap">
    	<label>View:</label>
		<select name="">
			<option value="">All Content</option>
		</select>
        
		<a class="button" href="#"><span>Personalize<em class="dropdown combo">&nbsp;</em>&nbsp;</span></a> 
	</p>
</div>
<div class="table_actions">
	<div class="column_one no_width">
		<p></p>
	</div>
</div>
<div class="scrollTreeDiv">
	<table cellpadding="0" cellspacing="0" class="table_handle">
		<thead>
            <tr>
                <th class="handle">&nbsp;</th>
                <th class="icon icn_status_dependency">&nbsp;</th>
                <th class="icon icn_obj_discussion">&nbsp;</th>
                <th class="icon icn_obj_action_item">&nbsp;</th>
                <th class="icon icn_obj_status_content">&nbsp;</th>
                <th class="icon icn_obj_status_attachment">&nbsp;</th>
                <th>Name</th>
                <th>Description</th>
                <th class="icon">&nbsp;</th>
                <th>Owner</th>
                <th>Schedule Start</th>
                <th>Schedule End</th>
                <th>Time Buffer</th>
            </tr>        
        </thead>
		<tbody>
            <tr>
                <td class="handle">&nbsp;</td>
                <td colspan="13">There is no data to display</td>
            </tr>
      	</tbody>
	</table>
</div>
<table class="table_footer">
    <tbody>
        <tr>
            <td class="status"><strong>1</strong> of <strong>7</strong> rows selected.</td>
            <td class="filter_text">Filter is on</td>
            <td class="filter_icon on"/>
            <td class="filter_pop"/>
        </tr>
    </tbody>
</table>  
<div class="bom_demo_table_filler" id="bomTableFiller"></div>
<!-- END: Object Content -->
	</div>
</div>