	<style>
	.widget_filter
	{
		background-color: #f5f5f5;
		display: none;
		height: 190px;
	}
	dl.side_by_side_text dt { width: 30% !important; }
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
		<div class="column_two">
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
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_executive.php',function() { dashboard.init(); });"><span>Executive<em>&nbsp;</em></span></a></li>
				<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_programs.php',function() { dashboard.init(); });"><span>Programs<em>&nbsp;</em></span></a></li>
				<li class="selected"><a href="#"><span>Resources<em>&nbsp;</em></span></a></li>
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
	<!--
    <div class="page_controls">
        <p style="text-align:left; padding-top: 5px; margin-bottom: 5px; padding-left: 12px;">Note: Resources (Pools) are filtered</p>
	</div>
   	-->
</div>
<div style ="border-top: none;" id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form widgets">       
			<div id="main" class="groupWrapper side_by_side">
				<div class="groupItem" id="container_01">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Resource Allocation</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_01" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
						<div id="widget_filter" class="widget_filter">
							<div style="padding: 2px 5px;">
								<div style="height:160px; overflow-y:auto; overflow-x:hidden; border:1px solid #ccc; background-color:#fff; padding:10px 5px">

									<dl class="side_by_side_text">
										<dt>General Info.Schedule Status In:</dt>
											<dd>
												<select id="req_sel_00" class="long_width">
													<option value=""></option>
												</select>
											</dd>
										<dt>General Info.Program Type Equal To:</dt>
											<dd>
												<select id="req_sel_00" class="long_width">
													<option value=""></option>
												</select>
											</dd>
										<dt class="place_holder">&nbsp;</dt>
											<dd>
												<a href="#" class="button" onclick="jQuery('#widget_filter').toggle();jQuery('#item001').toggle()"><span>Run</span></a>
												<a href="#" class="button" onclick="jQuery('#widget_filter').toggle();jQuery('#item001').toggle()"><span>Cancel</span></a>
											</dd>
									</dl>
								</div>
							</div>
						</div>						
                    <div id="item001" class="itemContent">
                        <div class="widget_actions">
							<div class="column_one wp50" style="padding-top: 3px;">
                            	Time Period
                                <select class="small_width">
                                	<option>0 - 3 Months</option>
                                	<option>3 - 6 Months</option>
                                	<option>6 - 9 Months</option>
                                	<option>9 - 12 Months</option>
                               	</select>
							</div>
                            <div class="column_two wp50">
								Program:
                                <select style="width:65%">
                                    <option>All</option>
                                    <option>New Product Development</option>
                                </select>
                            </div>

                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr class="header">
                                        <td>Resource</td>
                                    	<td class="w60 center_text">Allocation</td>
                                    	<td class="w60 center_text">%</td>
                                    	<td class="w60">Overdue</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Bill Gates</a></td>
                                        <td class="w60 center_text" style="border-right:0px"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">104%</td>
                                        <td class="w20 center_text">14</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Melinda Gates</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">105%</td>
                                        <td class="w60 center_text">13</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">John Doe</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">90%</td>
                                        <td class="w60 center_text">12</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Mike Jones</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">82%</td>
                                        <td class="w60 center_text">11</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Tony Jack</a></td>
                                        <td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">101%</td>
                                        <td class="w60 center_text">9</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr>
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Steven Mills</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">97%</td>
                                        <td class="w60 center_text">7</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
									<tr class="last">
                                        <td><img src="global/images/user.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Lawrence Fishbourne</a></td>
                                        <td class="w60 center_text"><span class="iconic on_track_task">&nbsp;</span></td>
                                        <td class="w40 center_text">10%</td>
                                        <td class="w60 center_text">6</td>
										<td class="w20"><span class="iconic report">&nbsp;</span></td>
                                    </tr>
                                </tbody>
                       		 </table>
                        </div>
                    </div>
                </div><!--END widget-->
				<div class="groupItem" id="container_02">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Pools Activities Status</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#">&nbsp;</a>
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_02" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one">
								&nbsp;
							</div>
                            <div class="column_two">
								185 Total: 69 On Track, 116 Off Track.
                            </div>
                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="resource" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="header">
										<td>Pool Name/Root Program</td>
										<td class="w60">&nbsp;</td>
										<td>Activity</td>
										<td>Due Date</td>
									</tr>
								</thead>
								<tbody>
									<tr id="row0_first" class="first">
										<td><a href="#" id="row0" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">DJ-One</a></td>
										<td>&nbsp;</td>    
										<td>&nbsp;</td> 
										<td>&nbsp;</td> 
									</tr>
									<tr id="row00a" class="row0_content last">
										<td><a href="#" style="margin-left:3.1em;">DJ Alien Excursion</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">0-100 Part Q</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr id="row1_first" class="first">
										<td><a href="#" id="row1" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">Expert Pool</a></td>
										<td>&nbsp;</td>    
										<td>&nbsp;</td> 
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">Alien Excursion</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">abc Program 123</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">Akabasas Q</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">abc Program 123</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">BalthazarBPM</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">abc Program 123</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">Beltstaff_Program 1A</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">abc Program 123</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">Coccoon IIOI</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">0-100 Part Q</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">CR Program UIA</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">0-100 Part Q</a></td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content">
										<td><a href="#" style="margin-left:3.1em;">D-Pool 12345</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">0-100 Part Q</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row1_content last">
										<td><a href="#" style="margin-left:3.1em;">ElfSDK_Prog</a></td>
										<td class="w60 center_text"><span class="iconic off_track_task">&nbsp;</span></td>    
										<td><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">0-100 Part Q</a></td>
										<td>&nbsp;</td> 
									</tr>
								</tbody>
							</table>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
			<div id="side" class="groupWrapper side_by_side">
				<div class="groupItem" id="container_03">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Resource Pool Utilization</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#">&nbsp;</a>
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_03" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one">
                             <a href="#" title="Full Display" onclick="getDialog('pages/_testing/proj_action_dialogs/resource_utilization.php',680,670);return false;" class="button"><span>Full Display</span></a>
                            </div>
                        </div>
                        <div class="widget_content">
							<span style="margin-left: 8px; font-weight: bold;">Resource Pool Utilization by Program for Pool 'Test PPM Resource Pool'</span>
                            <div style="overflow: hidden; margin-left: 9%;">
								<img id="report00" src="../../../global/images/graphic_dashboard_resources.jpg" usemap="#Map"/>
							</div>
                        </div>
                    </div>
                </div><!--END widget-->
				<div class="groupItem" id="container_04">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Resource Discussions</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#">&nbsp;</a>
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_04" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one">
								Type:
								<select class="small_width">
									<option>Issue</option>
									<option>Risk</option>
									<option>Discussion</option>
								</select>
							</div>
                            <div class="column_two" style="padding-top:0;">
                            	Priority
								<select class="small_width">
									<option>Escalated</option>
								</select>
                            </div>
                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="resource" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="header">
										<td>User Name/Subject</td>
										<td>Last Reply</td>
									</tr>
								</thead>
								<tbody>
									<tr id="row2_first" class="first">
										<td><a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">DJ-One</a></td>    
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Alien Testing</a></td>   
										<td>04/12/2008</td>
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Discuss One A</a></td>    
										<td>04/18/2008</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Risk Analysis on B4</a></td>    
										<td>06/24/2008</td>
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Conceptual Group for P.I.</a></td>   
										<td>06/01/2008</td>
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Part Recalled</a></td>    
										<td>07/01/2008</td> 
									</tr>
									<tr class="row2_content last">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">New Technology for 2010 that would take care...</a></td>    
										<td class="last">06/24/2008</td>
									</tr>
									<tr id="row3_first" class="first">
										<td><a href="#" id="row3" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">PPM R Pool</a></td>
										<td>&nbsp;</td>    
									</tr>
									<tr class="row3_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Concept 0110</a></td>    
										<td>04/31/2008</td>
									</tr>
									<tr class="row3_content last">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">E-X-PP</a></td>    
										<td>06/22/2008</td>
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
