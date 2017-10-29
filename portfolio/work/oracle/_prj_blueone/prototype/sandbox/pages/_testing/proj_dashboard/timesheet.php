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
		<div class="column_three wp14"  style="text-align: left;  display:none;">
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
        <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/assigment.php',function() { });"><span>Assignments<em>&nbsp;</em></span></a></li>
        <li class="indicator_gray selected"><a href="#"><span>Timesheet</span></a></li>
    </ul>
</div>
<div id="PaneContent" class="frame_pinned">
	<div class="Object">
<!-- BEGIN: Object Content -->
        <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
		
			<div>
			<div class="column_one no_width">
				<p><h4 style="display: block; float: none;"> Timesheet </h4></p>
				<span>Week of:</span>
				<span class="iconic menu_arrow_back">&nbsp;</span>
				<span class="iconic menu_active">&nbsp;</span>
				<span class="iconic menu_arrow_next">&nbsp;</span>
				<span>May 5 - 11, 2008</span>
				<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
			</div>
			<div class="column_three">
				<p style="line-height: 20px;">&nbsp;</p>
				<label>View:</label>
                <select name="">
                    <option value="">All Content</option>
                    <option value="">selection</option>
                    <option value="">selection</option>
                </select>
				<a href="#" class="button" id="toggle_menu_1"><span>Personalize<em class="dropdown">&nbsp;</em>&nbsp;</span></a>

			</div>
			</div>
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
                    <!--<a href="#" onclick="getDialog('pages/_testing/proj_action_dialogs/timesheet_report.php',670,980);return false;" class="button"><span>Timesheet Report</span></a>
               		<span class="btn_divide"></span>-->
                    <a href="#" class="button" id="cmd_proj_dashboard_menu_00"><span>More<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
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
            <table style="overflow: auto;" class="rbr" cellpadding="0" cellspacing="0">
				<tr>
                    <th class="handle">&nbsp;</th>
					<th class="w300">Name</th>
					<th class="w75">Number</th>
					<th class="w15">M</th>
					<th class="w15">T</th>
					<th class="w15">W</th>
					<th class="w15">T</th>
					<th class="w15">F</th>
					<th class="w15">S</th>
					<th class="w15">S</th>
					<th class="w25">Total</th>
					<th class="w40">Weekly</th>
                    <th class="w200">Description</th>
					<th class="w200">Parent Name</th>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">AaSetup SDR Generator</a></td>
                    <td class="w75"><a href="#">T00611</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>New Product Development</td>
                    <td><a href="#">Supplier Documentation/...</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">AaSetup SDR Generator A</a></td>
                    <td class="w75"><a href="#">T90293</a></td>
					<td class="w15">1</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>New Product Development w...</td>
                    <td><a href="#">Supplier Documentation</a></td>
                </tr>
                <tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ALPHA Hardware samples</a></td>
                    <td class="w75"><a href="#">PGM00711</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>Other samples</td>
                    <td><a href="#">OS</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Documentation Checkpoint/</a></td>
                    <td class="w75"><a href="#">G11191</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>Documentation from RE Adam</td>
                    <td><a href="#">Document</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ePHASE 123-4</a></td>
                    <td class="w75"><a href="#">PGM22715</a></td>
					<td class="w15">8</td>
					<td class="w15">9</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">9</td>
					<td class="w50">&nbsp;</td>
                    <td>Phase 1234</td>
                    <td><a href="#">New Product Development</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">FALPA Hardware samples received</a></td>
                    <td class="w75"><a href="#">PH55666</a></td>
					<td class="w15">8</td>
					<td class="w15">5</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">5</td>
					<td class="w50">&nbsp;</td>
                    <td>Samples for Concepts</td>
                    <td><a href="#">New Product Development</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">GPice Part A-REV ECO Released</a></td>
                    <td class="w75"><a href="#">G44322</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>ECO release initial 12/99</td>
                    <td>&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">hBETA Hardware Samples received</a></td>
                    <td class="w75"><a href="#">T76252</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>hBETA 01.22</td>
                    <td>&nbsp;</td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">IFD Release from Database</a></td>
                    <td class="w75"><a href="#">T00223</a></td>
					<td class="w15">8</td>
					<td class="w15">7</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">7</td>
					<td class="w50">&nbsp;</td>
                    <td>Database from TIII</td>
                    <td><a href="#">Supplier Documentation</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">JDesign Specification Checkpoint</a></td>
                    <td class="w75"><a href="#">G445544</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>Specifications to be Published</td>
                    <td><a href="#">Parent of JD</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Ka_Request part Numbers</a></td>
                    <td class="w75"><a href="#">T11233</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>&nbsp;</td>
                    <td><a href="#">KA Product Development</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">LPHASE 100110</a></td>
                    <td class="w75"><a href="#">PH775009</a></td>
					<td class="w15">8</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>New Product Development</td>
                    <td><a href="#">10010 Documentation</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_action_item.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 002-300</a></td>
                    <td class="w75"><a href="#">PGM88298</a></td>
					<td class="w15">10</td>
					<td class="w15">10</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">10</td>
					<td class="w50">&nbsp;</td>
					<td>&nbsp;</td>
                    <td><a href="#">New Product Development</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 007-ISTN</a></td>
                    <td class="w75"><a href="#">PGM22001</a></td>
					<td class="w15">0</td>
					<td class="w15">4</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">4</td>
					<td class="w50">&nbsp;</td>
                    <td>Program 007 ISTN</td>
                    <td><a href="#">007 James</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Quick Conduct BOM Review</a></td>
                    <td class="w75"><a href="#">T62541</a></td>
					<td class="w15">0</td>
					<td class="w15">0</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>Review Wallace Room</td>
                    <td><a href="#">BOM Documentation</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Repropose ECO II</a></td>
                    <td class="w75"><a href="#">T40897</a></td>
					<td class="w15">0</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>ECO III next</td>
                    <td><a href="#">ECO</a></td>
                </tr>
				<tr>
                    <td class="handle">&nbsp;</td>
                    <td class="w300"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Shall KIT be purchased or duplicated</a></td>
                    <td class="w75"><a href="#">T42098</a></td>
					<td class="w15">5</td>
					<td class="w15">8</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td class="w15">&nbsp;</td>
					<td style="padding-right: 5px;" class="w25 algn_rght">8</td>
					<td class="w50">&nbsp;</td>
                    <td>Purchase vs duplicate</td>
                    <td><a href="#">KIT Development</a></td>
                </tr>
            </table>
      </div>
	 <table class="table_footer">
		<tr>
			<td class="status">&nbsp;</td>
			<td class="filter_icon on"></td>
		</tr>
	<table>
	<!-- END: Object Content -->
	</div>
</div>