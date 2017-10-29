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
        <li class="indicator_gray"><a href="#"><span>Schedule<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Dependencies<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Team<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Content<em>&nbsp;</em></span></a></li>
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
	<h4>Content</h4>
	<p>
		<input type="checkbox" id="levels" class="form_selectors"/><label class="checkbox" for="levels">Display all levels</label>
    	&nbsp;
        <label>View:</label>
		<select name="" class="short_width">
			<option value="">All Content</option>
			<option value="">Important Content</option>
			<option value="">All Deliverables</option>
			<option value="">Pending Deliverables</option>
			<option value="">Completed Deliverables</option>
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
			<a href="#" class="button"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
            <span class="btn_divide"></span>
			<a href="#" class="button"><span>Create Change</span></a>
			<a href="#" id="toggle_more_menu" class="button"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
		</p>
	</div>
	<div class="column_three">
		<p>
			<a href="#" class="button"><span>Save</span></a>
			<a href="#" class="button"><span>Cancel</span></a>
		</p>
	</div>
</div>
<!--************************************
	TABLE HANDLE PINNED
*************************************-->
<div class="noScrollTableDiv">
    <table cellpadding="0" cellspacing="0">
        <tr>
            <th class="handle">&nbsp;</th>
            <th class="w15">&nbsp;</th>
            <th class="resize">&nbsp;</th>
            <th class="icon_cell"></th>
            <th class="resize">&nbsp;</th>
            <th>Name</th>
            <th class="resize">&nbsp;</th>
            <th>Description</th>
            <th class="resize">&nbsp;</th>
            <th>Required</th>
            <th class="resize">&nbsp;</th>
            <th>Current Status</th>
            <th class="resize">&nbsp;</th>
            <th>Related Activity</th>
            <th class="resize">&nbsp;</th>
            <th>Due</th>
            <th class="resize">&nbsp;</th>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell pending"></td>
            <td class="resize"></td>
            <td class="icon_cell document">&nbsp;</td>
            <td class="resize">&nbsp;</td>
            <td>D00022323</td>
            <td class="resize"></td>
            <td><a href="#">Function Requirement Doc</a></td>
            <td class="resize">&nbsp;</td>
            <td>Yes</td>
            <td class="resize">&nbsp;</td>
            <td>Final</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">New Product Development</a></td>
            <td class="resize">&nbsp;</td>
            <td>02/19/09</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell status_complete"></td>
            <td class="resize">&nbsp;</td>
            <td class="icon_cell document"></td>
            <td class="resize">&nbsp;</td>
            <td>D00022553</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Function Requirement Doc</a></td>
            <td class="resize">&nbsp;</td>
            <td>Yes</td>
            <td class="resize">&nbsp;</td>
            <td>Final</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">New Product Development</a></td>
            <td class="resize">&nbsp;</td>
            <td>04/16/09</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell status_complete"></td>
            <td class="resize">&nbsp;</td>
            <td class="icon_cell manufacturer_part">&nbsp;</td>
            <td class="resize">&nbsp;</td>
            <td>P00023640</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Marketing Plan Document</a></td>
            <td class="resize">&nbsp;</td>
            <td>Yes</td>
            <td class="resize">&nbsp;</td>
            <td>Draft</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Complete Marketing Plan Document</a></td>
            <td class="resize">&nbsp;</td>
            <td>12/10/09</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell pending"></td>
            <td class="resize">&nbsp;</td>
            <td class="icon_cell eng_change_order"></td>
            <td class="resize">&nbsp;</td>
            <td>E00025623</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Initial Part Release</a></td>
            <td class="resize">&nbsp;</td>
            <td>No</td>
            <td class="resize">&nbsp;</td>
            <td>Alpha</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Complete Functional Requirement</a></td>
            <td class="resize">&nbsp;</td>
            <td>03/13/09</td>
            <td class="resize">&nbsp;</td>
        </tr>
        <tr>
            <td class="handle">&nbsp;</td>
            <td class="icon_cell status_complete"></td>
            <td class="resize">&nbsp;</td>
            <td class="icon_cell manufacturer_part"></td>
            <td class="resize">&nbsp;</td>
            <td>P00022334</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">Black Exterior Casing</a></td>
            <td class="resize">&nbsp;</td>
            <td>No</td>
            <td class="resize">&nbsp;</td>
            <td>Unassigned</td>
            <td class="resize">&nbsp;</td>
            <td><a href="#">New Product Development</a></td>
            <td class="resize">&nbsp;</td>
            <td>07/18/09</td>
            <td class="resize">&nbsp;</td>
        </tr>                        
    </table>
</div>
<div class="table_status_bar">
    <? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
</div>
<div class="bom_demo_table_filler" id="bomTableFiller"></div>

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