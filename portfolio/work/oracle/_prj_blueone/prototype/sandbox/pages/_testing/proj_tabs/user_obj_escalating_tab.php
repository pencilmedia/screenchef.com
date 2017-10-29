<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">Search Results</a> &raquo; badriv</li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>badriv</h2>
			<p><strong>User</strong> &bull; Bob Adriv</p>
		</div>
	
		<div class="column_two">
			<h2>Active</h2>
			<p>[varies by object]</p>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
    <div class="object_level_controls">
        <form action="#">
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
        <li class="indicator_gray"><a href="#"><span>Preferences<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Escalations<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>User Group<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Share<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Subscription<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Attachments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>History<em>&nbsp;</em></span></a></li>
    </ul>
</div>   
<!--************************************
    MESSAGES
*************************************-->
<div id="dms" class="message info">
    <p class="text"><span class="asterisk">*</span> Specify the escalation criteria and those to be notified at the time  of escalation.</p>
</div>

<div id="PaneContent" class="frame_pinned">
	<div class="Object">
 <!-- BEGIN: Object Content -->

<!--************************************
	VIEW CONTROLS
*************************************-->
<div class="view_controls">
	<h4>Escalations</h4>
	<p><label>View:</label>
        <select style="vertical-align: middle;" name="">
            <option value="">Personal View 1</option>
        </select>
		<a id="cmdViewActions" class="button" href="#"><span>View Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
  	</p>    
</div>
<!--************************************
	TABLE ACTIONS
*************************************-->
<div class="table_actions">
	<div class="column_one no_width">
		<p>
			<a href="#" class="button" onclick="proj_tabs_user_escalations.launch_create();"><span>Add</span></a>
			<a href="#" class="button"><span>Remove</span></a>
            <span class="btn_divide"></span>
			<a href="#" class="button"><span>More<em class="dropdown">&nbsp;</em></span></a>
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
            <th>Criteria</th>
            <th class="resize">&nbsp;</th>
            <th>Notify Users</th>
            <th class="resize">&nbsp;</th>
        </tr>
        <tr>
        	<td colspan="9">There is no data to display.</td>
        </tr>

    </table>
</div>
<div class="table_status_bar">
    <? include($_SERVER['DOCUMENT_ROOT'] . "/includes/layouts/tables/table_footer.php"); ?>
</div>
<div class="bom_demo_table_filler" id="bomTableFiller"></div>

<!-- END: Object Content -->
	</div>
</div>