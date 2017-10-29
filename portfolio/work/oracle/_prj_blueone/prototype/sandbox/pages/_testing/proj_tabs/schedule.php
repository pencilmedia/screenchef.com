<style>
	/**************************************
		These bad boys need a home.
	**************************************/
	.view_controls select { width: 25%; }
	div.scrollTreeDiv
	{
		height:260px;
		overflow: auto;
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
			<h2>LJ-400-E New Product Development</h2>
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
        <li class="indicator_gray selected"><a href="#"><span>Schedule<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Dependencies<em>&nbsp;</em></span></a></li>
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
	<h4>Schedule</h4>
	<p style="white-space:nowrap">
    	<label>Baseline:</label>
		<select name="">
			<option value="">Phase 1 Baseline Adjustement (POR)</option>
			<option value="" selected="selected">Phase 2 Baseline Adjustement (POR)</option>
		</select>
        <a href="#" id="cmd_proj_tabs_schedule_menu_00" class="button iconic"><span><em class="iconic dropdown">&nbsp;</em>&nbsp;</span></a>

    	<label>View:</label>
		<select name="">
			<option value="">All Content</option>
		</select>
        
		<a class="button" href="#"><span>Personalize<em class="dropdown combo">&nbsp;</em>&nbsp;</span></a>        
	</p>
</div>
<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="table_actions">
	<div class="column_one no_width">
		<p>
			<a href="#" class="button"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
            <span class="btn_divide"></span>
			<a href="#" class="button"><span>Add to Team</span></a>
			<a href="#" class="button"><span>Add Dependency</span></a>
			<a href="#" class="button"><span>Multi-level</span></a>
            <span class="btn_divide"></span>
			<a class="button" href="#" id="cmd_proj_tabs_schedule_menu_01"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
		</p>
	</div>
</div>
<!--************************************
	TABLE HANDLE PINNED
*************************************-->
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
                <th>Owner</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Duration</th>
                <th>Duration Type</th>
            </tr>        
        </thead>
		<tbody>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="gray_dot">&nbsp;</td>
                <td><span class="level_00"><em class="collapse">&nbsp;</em><em class="icn_information phase">&nbsp;</em>Concept</span></td>
                <td>Jane Smith</td>
                <td>04/02/2008</td>
                <td>05/20/2008</td>
                <td>49 Day</td>
                <td>Calculated</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_01"><em class="icn_information task">&nbsp;</em>Alpha hardware samples received</span></td>
                <td>Jane Smith</td>
                <td>04/02/2008</td>
                <td>04/10/2008</td>
                <td>8 Days</td>
                <td>Fixed</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_01"><em class="icn_information task">&nbsp;</em>Alpha Diags / tools / firmware received</span></td>
                <td>Jane Smith</td>
                <td>04/10/2008</td>
                <td>04/20/2008</td>
                <td>1 Day</td>
                <td>Fixed</td>
            </tr>
            <tr>
                <td class="handle">&nbsp;</td>
                <td></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_01"><em class="icn_information task">&nbsp;</em>Alpha samples distributed</span></td>
                <td>Joe Cannon</td>
                <td>04/12/2008</td>
                <td>05/20/2008</td>
                <td>38 Days</td>
                <td>Fixed</td>
            </tr>

            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em>&nbsp;</em><em class="icn_obj_gate">&nbsp;</em> Concept Complete</span></td>
                <td>Bill Callahan</td>
                <td>05/20/2008</td>
                <td>06/12/2008</td>
                <td>32 Days</td>
                <td>Calculated</td>
            </tr>


            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="gray_dot">&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em class="expand">&nbsp;</em><em class="icn_information phase">&nbsp;</em>Definition</span></td>
                <td>Bill Callahan</td>
                <td>05/20/2008</td>
                <td>06/12/2008</td>
                <td>32 Days</td>
                <td>Calculated</td>
            </tr>
            
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em>&nbsp;</em><em class="icn_obj_gate">&nbsp;</em> Definition Complete</span></td>
                <td>Bill Callahan</td>
                <td>05/20/2008</td>
                <td>06/12/2008</td>
                <td>32 Days</td>
                <td>Calculated</td>
            </tr>            
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td class="gray_dot">&nbsp;</td>
                <td class="gray_dot">&nbsp;</td>
                <td><span class="level_00"><em class="expand">&nbsp;</em><em class="icn_information phase">&nbsp;</em>Development</span></td>
                <td>Change Analyst</td>
                <td>06/12/2008</td>
                <td>08/29/2008</td>
                <td>78 Days</td>
                <td>Calculated</td>
            </tr>
            
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em>&nbsp;</em><em class="icn_obj_gate">&nbsp;</em> Development Complete</span></td>
                <td>Bill Callahan</td>
                <td>05/20/2008</td>
                <td>06/12/2008</td>
                <td>32 Days</td>
                <td>Calculated</td>
            </tr>
                        
            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em class="expand">&nbsp;</em><em class="icn_information phase">&nbsp;</em>Validation</span></td>
                <td>Marketing</td>
                <td>08/30/2008</td>
                <td>11/30/2008</td>
                <td>60 Days</td>
                <td>Calculated</td>
            </tr>

            <tr>
                <td class="handle">&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><span class="level_00"><em>&nbsp;</em><em class="icn_obj_gate">&nbsp;</em> Validation Complete</span></td>
                <td>Bill Callahan</td>
                <td>05/20/2008</td>
                <td>06/12/2008</td>
                <td>32 Days</td>
                <td>Calculated</td>
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