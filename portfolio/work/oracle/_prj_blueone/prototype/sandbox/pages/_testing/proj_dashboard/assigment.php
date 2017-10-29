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
		<div class="column_one wp70">
			<h2>Home</h2>
				<p>Welcome back, Test administrator.</p>
		</div>
		<div style="text-align: left; display:none;" class="column_three wp14">
			<p><a style="text-decoration: underline;" href="#">Quick Links</a></p>
			<p><a href="#">Notifications</a></p>
			<p><a href="#">Timesheet</a></p>
			<p><a href="#">Dashboard Resources</a></p>
		</div>
	</div>
 <!--************************************
        TABS
    *************************************-->
<div class="tabs_container skin_default">
	<ul class="tabs">
		<li class="first_tab"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_mystuff.php',function() {dashboard.init();});"><span>Dashboard<em>&nbsp;</em></span></a>
        <li class="indicator_gray"><a href="#"><span>Notifications<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#"><span>Workflow Routings<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Assignments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/timesheet.php',function() { });"><span>Timesheet</span></a></li>
    </ul>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
<!-- BEGIN: Object Content -->
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
			<h4> Assignment </h4>
            <p><label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
				<a href="#" class="button" id="toggle_menu_1"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
            </p>
        </div>



        <!--************************************
            TABLE ACTIONS
       	<a class="button" href="#"><span>Advanced</span></a>
		<a class="button" href="#"><span>Clear</span></a>

		<a onclick="callFormatResults();" class="button" href="#"><span>Format</span></a>
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Accept</span></a>
					<a href="#" class="button"><span>Decline</span></a>
					<a href="#" class="button"><span>Mark Complete</span></a>
					<span class="btn_divide"></span>
                    <a href="#" class="button" id="toggle_menu_1"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
			<div class="column_three">
				<a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
				<a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
			</div>
        </div>
        <!--************************************
            TABLE HANDLE PINNED
        *************************************-->
        <!--************************************
            TABLE HANDLE
        *************************************-->
        <div class="scrollDiv">
            <table class="rbr" cellpadding="0" cellspacing="0">
                <tr>
                    <th class="handle">&nbsp;</th>
                    <th class="w15"><span class="iconic flagged">&nbsp;</span></th>
                    <th class="w15"><span class="iconic pending">&nbsp;</span></th>
                    <th>Name</th>  
                    <th>Status</th>
                    <th>%Completed</th>
                    <th>New Estimated...</th>
					<th>Due Date</th>
                    <th>Days Early/L...</th>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Setup SDR Generator</a></td>
                    <td class="w100">Not Started</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75"><span class="overdueLabel">04/12/2008</span></td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Setup SDR Generator A</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">20</td>
                    <td class="w100">04/22/2008</td>
					<td class="w75"><span class="overdueLabel">04/30/2008</span></td>
                    <td class="w75">-8</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><span class="iconic flagged">&nbsp;</span></td>               
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ALPHA Hardware samples</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">12</td>
                    <td class="w100">05/02/2008</td>
					<td class="w75"><span class="overdueLabel">05/07/2008</span></td>
                    <td class="w75">-5</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Documentation Checkpoint</a></td>
                    <td class="w100">Closed</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">99</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75">05/10/2008</td>
                    <td class="w75">&nbsp;</td>  
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><span class="iconic flagged">&nbsp;</span></td>               
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PHASE 123-4</a></td>
                    <td class="w100">Cancelled</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75">05/22/2008</td>
                    <td class="w75">&nbsp;</td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ALPHA Hardware samples received</a></td>
                    <td class="w100">Not Accepted</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75">06/18/2008</td>
                    <td class="w75">&nbsp;</td> 
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Pice Part A-REV ECO Released</a></td>
                    <td class="w100">Closed</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">76</td>
                    <td class="w100">06/20/2008</td>
					<td class="w75">06/20/2008</td>
                    <td class="w75">&nbsp;</td>  
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">BETA Hardware Samples received</a></td>
                    <td class="w100">Not Started</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">06/22/2008</td>
					<td class="w75">06/28/2008</td>
                    <td class="w75">-6</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">RFD Release from Database</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">47</td>
                    <td class="w100">07/18/2008</td>
					<td class="w75">07/22/2008</td>
                    <td class="w75">-5</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Design Specification Checkpoint</a></td>
                    <td class="w100">Closed</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75">&nbsp;</td>
                    <td class="w75">&nbsp;</td>  
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><span class="iconic flagged">&nbsp;</span></td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Request part Numbers</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">62</td>
                    <td class="w100">07/23/2008</td>
					<td class="w75">07/23/2008</td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><span class="iconic flagged">&nbsp;</span></td>               
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PHASE 100110</a></td>
                    <td class="w100">Not Started</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">08/02/2008</td>
					<td class="w75">08/01/2008</td>
                    <td class="w75">+1</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>               
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_action_item.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 2300</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">21</td>
                    <td class="w100">08/30/2008</td>
					<td class="w75">08/30/2008</td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>               
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 007-ISTN</a></td>
                    <td class="w100">Closed</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">&nbsp;</td>
					<td class="w75">&nbsp;</td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15"><span class="iconic pending">&nbsp;</span></td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Conduct BOM Review</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">75</td>
                    <td class="w100">09/12/2008</td>
					<td class="w75">09/12/2008</td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15"><span class="iconic flagged">&nbsp;</span></td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Propose ECO II</a></td>
                    <td class="w100">In Progress</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">55</td>
                    <td class="w100">09/30/2008</td>
					<td class="w75">09/30/2008</td>
                    <td class="w75">&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td class="w15">&nbsp;</td>
                    <td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Determine if KIT will be purchased or duplicated</a></td>
                    <td class="w100">Not Started</td>
                    <td style="padding-right: 5px;" class="w75 algn_rght">0</td>
                    <td class="w100">10/11/2008</td>
					<td class="w75">11/11/2008</td>
                    <td class="w75">-30</td>
                </tr>
            </table>
      </div>
	 <table class="table_footer">
		<tr>
			<td class="status"><strong>250 Total Assigments</strong></td>
			<td class="status">&nbsp;</td>
			<td class="filter_icon on"></td>
		</tr>
	<table>

<!-- END: Object Content -->
	</div>
</div>