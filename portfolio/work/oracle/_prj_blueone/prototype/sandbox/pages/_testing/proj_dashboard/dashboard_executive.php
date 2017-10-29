<style>
	.groupWrapper 
	{
		height: auto !important;
		min-height: 0 !important;
	}
	th, td { white-space: nowrap; padding: 0 5px;}
</style>

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
	</div>
</div>
<!--************************************
        TABS
    *************************************-->

<div class="tabs_container skin_default special_case">
	<ul class="tabs">
		<li class="first_tab selected"><a href="#" ><span>Dashboard<em>&nbsp;</em></span></a>
			<ul>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_mystuff.php',function() { dashboard.init(); });"><span>My Stuff<em>&nbsp;</em></span></a></li>
				<li class="selected"><a href="#"><span>Executive<em>&nbsp;</em></span></a></li>
				<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_programs.php',function() { dashboard.init(); });"><span>Programs<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_resources.php',function() { dashboard.init(); });"><span>Resources<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_financials.php',function() { dashboard.init(); });"><span>Financials<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_custom.php',function() { dashboard.init(); });"><span>Custom<em>&nbsp;</em></span></a></li>
			</ul>
		</li>
		<li class="indicator_gray"><a href="#"><span>Notifications<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#"><span>Workflow Routings<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/assigment.php',function() { });"><span>Assignments<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/timesheet.php',function() { });"><span>Timesheet</span></a></li>
	</ul>
</div>

    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls">&nbsp;</p>
    </div>
</div>
<div style ="border-top: none;" id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form widgets">       
			<div id="main" class="groupWrapper side_by_side">
				<div class="groupItem" id="container_01">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Program Status</span>
						</div>
						<div class="column_one">
							<a class="cmdC" href="#">&nbsp;</a>
							<a class="cmdA" href="#">&nbsp;</a>
							<a id="cmdB_container_01" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div id="sm_01" class="widget_content" style="background-color:#f6f7e7">
                            <div style="overflow: hidden;">
								<img id="report00" src="../../../global/images/dashboard_pie_chart2.gif"  style="cursor:pointer"/>
							</div>
                        </div>



                        <div id="sm_02" class="widget_actions">
                            <div class="column_one">
								<a class="button" id="cmdBack" href="#"><span><em class="arrow_back">&nbsp;</em>Back</span></a>
							</div>
                            <div class="column_two">
                            	216 Total Records: 100 On Track, 116 Off Track.
                             </div>
                        </div>
                        <div id="sm_03" class="widget_content">
                            <table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr class="header">
                                        <td>Root Program</td>
										<td class="w20">&nbsp;</td>
                                    	<td>Start Date</td>
                                    	<td>End Date<span><em class="dasboard_control_up">&nbsp;</em>&nbsp;</span></td>
										<td>Owner</td>
                                    </tr>
                                </thead>
                                <tbody>
									<tr>
                                        <td><a href="#">ADJ-One</a></td>
                                        <td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td>03/12/2008</td>
										<td>04/12/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">Alien Excursion</a></td>
                                        <td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td>03/18/2008</td>
										<td>04/18/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">Coccoon IIOI</a></td>
                                        <td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td>04/08/2008</td>
										<td>05/08/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">ElfSDK_Prog</a></td>
                                        <td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td>05/01/2008</td>
										<td>06/22/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">ABC Program</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>02/28/2008</td>
										<td>05/28/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">Akabas Q</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>03/24/2008</td>
										<td>06/24/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">BalthazarBPM</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>04/01/2008</td>
										<td>06/01/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">Belstaff_Program 1A</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>04/01/2008</td>
										<td>07/01/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr>
                                        <td><a href="#">CR Program UIA</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>04/22/2008</td>
										<td>07/22/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
									<tr  class="last">
                                        <td><a href="#">D-Pool 12345</a></td>
                                        <td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td>04/23/2008</td>
										<td>04/31/2008</td>
                                        <td><a href="#">Jane Doe</a></td>
                                    </tr>
                                </tbody>
                       		 </table>
                        </div>

                    </div>
                    



                    
                </div><!--END widget-->
			</div>
			<div id="side" class="groupWrapper side_by_side">
				<div class="groupItem" id="container_02">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Resource Pool Allocation</span>
						</div>
						<div class="column_one">
							<a class="cmdC" href="#">&nbsp;</a>
							<a class="cmdA" href="#">&nbsp;</a>
							<a id="cmdB_container_02" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
							<div class="column_one wp60">
                            	Time Period
                                <select class="small_width">
                                	<option>0 - 3 Months</option>
                                	<option>3 - 6 Months</option>
                                	<option>6 - 9 Months</option>
                                	<option>9 - 12 Months</option>
                               	</select>
							</div>
                            <div class="column_two wp40">
								47 Resource Pools
                            </div>
                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr class="header">
                                        <td>Pool Name</td>
                                    	<td class="w60">Allocation</td>
                                    	<td class="w60">Overdue</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="global/images/user_group.png" alt="file" /><a href="#"> UG212006157493-0012</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">14</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">DJ-One</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">13</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">UG88819833-0</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">12</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PPM Resource Pool1</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">11</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">UG97950005444-0016</a></td>
                                        <td class="w60 center_text">&nbsp;</td>
                                        <td class="w60 center_text">9</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Agency ABC Pool</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">7</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">UG212006157493-0012</a></td>
                                        <td class="w60 center_text">&nbsp;</td>
                                        <td class="w60 center_text">6</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Pool 12345</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">5</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Extra Pool for HFD</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w60 center_text">4</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr class="last">
                                        <td><img src="global/images/user_group.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Group 123</a></td>
                                        <td class="w60 center_text">&nbsp;</td>
                                        <td class="w60 center_text">2</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
                                </tbody>
                       		 </table>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>



			<div id="bottom" class="groupWrapper bottom">
				<div class="groupItem" id="container_03">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Financial</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_03" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_content">
                            <table class="rbr with_widgets" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th colspan="4">&nbsp;</th>
                                    	<th colspan="3">Fixed Cost</th>
                                    	<th colspan="3">Capital Expense</th>
                                    	<th colspan="3">Labor Cost</th>
                                    	<th colspan="3">Flex Cost</th>
                                    	<th colspan="3">Total Cost</th>
                                    </tr>

                                    <tr>
										<th class="icon_cell">&nbsp;</th>
										<th>Root Program</th>
										<th>Schedule End</th>
										<th>Owner</th>
                                        <th>Budget</th>
                                    	<th>Actual</th>
                                    	<th>Cost to Competitor</th>
                                        <th>Budget</th>
                                    	<th>Actual</th>
                                    	<th>Expenses to Completion</th>
                                        <th>Budget</th>
                                    	<th>Actual</th>
                                    	<th>Cost to Completion</th>
                                        <th>Actual</th>
                                    	<th>Budgeted</th>
                                    	<th>Cost to Competitor</th>
                                        <th>Budget</th>
                                    	<th>Actual</th>
                                    	<th>Cost to Completion</th>
                                    </tr>
                                </thead>
                                <tbody>
									<tr>
										<td><span class="iconic off_track_task">&nbsp;</span></td>
										<td><a href="#">Youthful Essense</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
									<tr>
										<td><span class="iconic off_track_task">&nbsp;</span></td>
										<td><a href="#">Xenon Server 2008</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
									<tr>
										<td><span class="iconic on_track_task">&nbsp;</span></td>
										<td><a href="#">Supreme Pilates</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
									<tr>
										<td><span class="iconic off_track_task">&nbsp;</span></td>
										<td><a href="#">Youthful Essense</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
									<tr>
										<td><span class="iconic on_track_task">&nbsp;</span></td>
										<td><a href="#">Xenon Server 2008</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
									<tr>
										<td><span class="iconic on_track_task">&nbsp;</span></td>
										<td><a href="#">Supreme Pilates</a></td>
										<td>09/19/2008</td>
										<td><a href="#">Paul Maguire - Project Mgr (pm_old)</a></td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
										<td>0.00 USD</td>
									</tr>
                                </tbody>
                       		 </table>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
        </div>
    </div>
</div>