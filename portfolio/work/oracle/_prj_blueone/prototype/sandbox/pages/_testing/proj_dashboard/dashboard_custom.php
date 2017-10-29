	<style>
	.widget_filter
	{
		background-color: #f5f5f5;
		display: none;
		height: 190px;
	}
	dl.side_by_side_text { min-width: 350px !important; }
	dl.side_by_side_text dt { width: 40% !important; }
	dl.side_by_side_text dd { width: 57% !important; }
	dl.side_by_side_text dd .long_width{ width: 90% !important; }
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
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_resources.php',function() { dashboard.init(); });"><span>Resources<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_financials.php',function() { dashboard.init(); });"><span>Financials<em>&nbsp;</em></span></a></li>
				<li class="selected"><a href="#"><span>Custom<em>&nbsp;</em></span></a></li>
			</ul>
		</li>
		<li class="indicator_gray"><a href="#"><span>Notifications<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#"><span>Workflow Routings<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/assigment.php',function() { });"><span>Assignments<em>&nbsp;</em></span></a></li>
		<li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/timesheet.php',function() { });"><span>Timesheet</span></a></li>
	</ul>

</div>
</p>
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
							<span class="dashboardTitle">Custom Widget</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#" onclick="jQuery('#widget_filter').toggle();jQuery('#item001').toggle()">&nbsp;</a>
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_01" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
						<div id="widget_filter" class="widget_filter">
							<div style="padding: 2px 5px;">
								<div style="height:160px; overflow-y:auto; overflow-x:hidden; border:1px solid #ccc; background-color:#fff; padding:10px 5px">

									<dl class="side_by_side_text">
										<dt>Schedule Status In:</dt>
											<dd>
												<select id="req_sel_00" class="long_width">
													<option value=""></option>
												</select>
											</dd>
										<dt>Program Type Equal To:</dt>
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
				<div style="text-align: left">
				<!--
				<dl class="side_by_side_text">
					<dt>Add a widget:</dt>
					<dd>
						<a href="#">As a New Widget</a> |
						<a href="#">Change I Own</a> |
						<a href="#">Documents I Own</a>
					</dd>
				</dl>
				-->
				<p>
					Add a Widget: 
					<select>
						<option>&nbsp;</option>
						<option>New Widget</option>
						<option>Changes I Own</option>
						<option>Documents I Own</option>
					</select>
					<a href="#" class="button"><span>Add</span></a>
				</p>
				</div>
				
			</div>
			<div id="side" class="groupWrapper side_by_side">


				<div class="groupItem" id="container_01">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Custom Widget 2</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#">&nbsp;</a>
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

			</div>
        </div>
    </div>
</div>
