<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
        <div class="breadcrumb_wrapper">
            <ul class="breadcrumbs">
                <li><a href="#">Breadcrumb</a> &raquo; ECO-003477</li>
            </ul>
        </div>
		<div class="column_one layout">
			<h2>ECO-003477</h2>
			<p><strong>ECO</strong> &bull; Initial release of the LJ3 Bill of Materials Items.</p>
		</div>
		<div class="column_two">
			<h2>Submitted</h2>
		</div>
	</div>
    <!--************************************
        OBJECT LEVEL CONTROLS
    *************************************-->
	<div class="object_level_controls">
        <form action="#">
            <a href="#" class="button"><span><em class="comment">&nbsp;</em> Comment</span></a>
            <a href="#" class="button" onclick="getDialog('pages/_testing/new_pc_save_as.php',525,475);return false;"><span><em class="change_status">&nbsp;</em> Next Status</span></a>
            <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
        </form>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <ul class="agile_tabs">
        <li class="first_tab selected"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477.php'); return false;"><span>Cover Page<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/_testing/proj_windowing/eco_003477_affected_items.php', 'runECOInit2()' ); agile.ux.demo.eco00347.init(); return false;"><span>Affected Items<em>&nbsp;</em></span></a></li>
        <li><a href="#" onclick="javascript:agile.ux.xhr.get('car_content','/pages/sprint_05/car_templates/obj_item_workflow.php'); return false;"><span>Workflow<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Relationships<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>Attachements<em>&nbsp;</em></span></a></li>
        <li><a href="#"><span>History</span></a></li>
    </ul>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("../../sprint_05/car_templates/dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" onclick="return false;agile.ux.xhr.get('car_content','pages/_testing/windowing/eco_003477_edit.php');" class="button"><span>Edit</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container">
            <form id="form_dialogs" name="frm1_edit" action="">
                    <fieldset>
                        <dl class="side_by_side_text">
                            <dt><label>Number:</label></dt>
                                <dd>ECO-003477</dd>
                            <dt><label>Status:</label></dt>
                                <dd>Unassigned</dd>
                            <dt><label>Change Type:</label></dt>
                                <dd>Initial Release</dd>
                            <dt><label>Change Category:</label></dt>
                                <dd>Major</dd>           
                            <dt><label>Description of Change:</label></dt>
                                <dd>Initial release of the LJ3 Bill of Materials Items.</dd>
                            <dt><label>Reason for Change:</label></dt>
                                <dd>Initial release of items related to LJ3 BOM.</dd>
                            <dt><label>Reason Code:</label></dt>
                                <dd>New Release.</a></dd>
                            <dt><label>Workflow:</label></dt>
                                <dd>NPI Workflow</dd>
                            <dt><label>Change Analyst:</label></dt>
                                <dd>Anthony Moquette</dd>
                            <dt><label>Originator:</label></dt>
                                <dd>Administrator, Mr. Ben Listwon</dd>
                            <dt><label>Date Originated:</label></dt>
                                <dd>Today 01.33.45 PM PDT</dd>
                            <dt><label>Date Released</label></dt>
                                <dd>&nbsp;</dd>
                            <dt><label>Final Complete</label></dt>
                                <dd>&nbsp;</dd>
                            <dt><label>Product Line(s)</label></dt>
                                <dd>LJX</dd>
                        </dl>
                    </fieldset>    
                <h3>Supporting Data</h3>
                    <fieldset>
                        <dl class="side_by_side_text">
                            <dt><label>Cost of Change:</label></dt>
                                <dd>&nbsp;</dd>
                            <dt><label>Project:</label></dt>
                                <dd>LJ3 Alpha 2</dd>
                        </dl>
                    </fieldset>
            </form>
        </div>
	</div>
</div>