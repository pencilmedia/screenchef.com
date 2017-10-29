<style>
dl.side_by_side_text dt
{
	width: 20% !important;
	margin-top: 5px;
}
dl.side_by_side_text dd
{
	margin-top: 5px;
}
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
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_executive.php',function() { dashboard.init(); });"><span>Executive<em>&nbsp;</em></span></a></li>
				<li class="selected indicator_gray"><a href="#"><span>Programs<em>&nbsp;</em></span></a></li>
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
    </div>
</div>
<div style ="border-top: none;" id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form widgets">       
			<div id="main" class="groupWrapper side_by_side">
				<div class="groupItem" id="container_01">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Program Status</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a id="cmdD_container_01" class="cmdD" href="#" onclick="jQuery('#aa1').toggle();jQuery('#aa2').toggle();">&nbsp;</a>
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_01" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
						<div id="aa1">
							<div class="widget_actions">
								<div class="column_two no_column_one">
									216 Total Records: 100 On Track, 116 Off Track.
								 </div>
							</div>
							<div class="widget_content">
								<table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
									<thead>
										<tr class="header">
											<td>Root Program</td>
											<td class="w20">&nbsp;</td>
											<td>Start Date</td>
											<td>End Date<span><em class="dasboard_control_up">&nbsp;</em>&nbsp;</span></td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><a href="#">ADJ-One</a></td>
											<td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
											<td>03/12/2008</td>
											<td>04/12/2008</td>
										</tr>
										<tr>
											<td><a href="#">Alien Excursion</a></td>
											<td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
											<td>03/18/2008</td>
											<td>04/18/2008</td>
										</tr>
										<tr>
											<td><a href="#">Coccoon IIOI</a></td>
											<td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
											<td>04/08/2008</td>
											<td>05/08/2008</td>
										</tr>
										<tr>
											<td><a href="#">ElfSDK_Prog</a></td>
											<td class="w20 "><span class="iconic off_track_task">&nbsp;</span></td>
											<td>05/01/2008</td>
											<td>06/22/2008</td>
										</tr>
										<tr>
											<td><a href="#">ABC Program</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>02/28/2008</td>
											<td>05/28/2008</td>
										</tr>
										<tr>
											<td><a href="#">Akabas Q</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>03/24/2008</td>
											<td>06/24/2008</td>
										</tr>
										<tr>
											<td><a href="#">BalthazarBPM</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>04/01/2008</td>
											<td>06/01/2008</td>
										</tr>
										<tr>
											<td><a href="#">Belstaff_Program 1A</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>04/01/2008</td>
											<td>07/01/2008</td>
										</tr>
										<tr>
											<td><a href="#">CR Program UIA</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>04/22/2008</td>
											<td>07/22/2008</td>
										</tr>
										<tr  class="last">
											<td><a href="#">D-Pool 12345</a></td>
											<td class="w20 "><span class="iconic on_track_task">&nbsp;</span></td>
											<td>04/23/2008</td>
											<td>04/31/2008</td>
										</tr>
									</tbody>
								 </table>
							</div>
						</div>
						<div id="aa2" style="display:none;">
							<div>
								<p style="text-align:right; padding:8px 10px 0 0;">
									<a href="#" onclick="launch_dialog('pages/_testing/proj_action_dialogs/widget_filters.php',660,385);" >Edit</a> | 
									<a href="#" onclick="jQuery('#aa1').toggle();jQuery('#aa2').toggle();">Close</a>
								</p>
								<div style="visible; height:212px; border:1px solid #ccc; margin:0px 5px 5px 5px; overflow-x:hidden; overflow-y:auto;">
								
									<dl class="side_by_side_text">
										<dt>Program Type:</dt>
											<dd>All</dd>
										<dt>Vertical:</dt>
											<dd>
												Hi-Tech;
												Aerospace;
												CPG;
												Medical Devices;
											</dd>
										<dt>Launch Year:</dt>
											<dd>
												2002;
												2003;
												2006;
												2007;
												2008;
											</dd>
										<dt>Region:</dt>
											<dd>North America;<br/>South America;<br />Asia;<br/>EMAC;</dd>
										<dt>Division:</dt>
											<dd>
												Sales;
												Purchasing;
												Manufacturing;
												Marketing;
											</dd>
										<dt>Program Priority:</dt>
											<dd>All</dd>
									</dl>								
								
								</div>
							</div>
						</div>						
                    </div>
                </div><!--END widget-->
				<div class="groupItem" id="container_02">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Program Discussions</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_02" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one wp60" style="padding-top: 3px;">
                            	Type
                                <select class="small_width">
                                	<option>Issue</option>
                                	<option>Risk</option>
                                	<option>Discussion</option>
                               	</select>
                            </div>
							<div class="column_two wp40">
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
										<td>Program/Subject</td>
										<td>Last Reply</td>
									</tr>
								</thead>
								<tbody>
									<tr id="row0_first" class="first">
										<td><a href="#" id="row0" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">New Product Development</a></td>
										<td>&nbsp;</td>    
									</tr>
									<tr class="row0_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Great New Supplier</a></td>   
										<td>05/28/2008</td>								
									</tr>
									<tr class="row0_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Alien Testing</a></td>   
										<td>04/12/2008</td> 									
									</tr>
									<tr class="row0_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Discuss One A</a></td>   
										<td>04/18/2008</td>								
									</tr>
									<tr class="row0_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Risk Analysis on B4</a></td>   
										<td>06/24/2008</td> 									
									</tr>
									<tr class="row0_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Conceptual Group for P.I.</a></td>   
										<td>06/01/2008</td> 									
									</tr>
									<tr class="row0_content last">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Part Recalled</a></td>   
										<td>07/01/2008</td>								
									</tr>
									<tr id="row1_first" class="first">
										<td><a href="#" id="row1" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">Akabas Q</a></td>
										<td>&nbsp;</td>    
									</tr>
									<tr class="row1_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">New Technology for 2010 that would take...</a></td>   
										<td>07/22/2008</td>
									</tr>
									<tr id="#temp01" class="row1_content">
										<td style="padding-left: 3.2em;"><a href="#" style="margin-left: 8px;">Concept 0110</a></td>   
										<td>04/31/2008</td>									
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
							<span class="dashboardTitle">Gate Status</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_04" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one">
								&nbsp;
							</div>
                            <div class="column_two">
								43 Total Records
                            </div>
                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="resource" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="header">
										<td>Root Program/Gate</td>
										<td>Gate Status</td>
										<td>Schedule Date</td>
									</tr>
								</thead>
								<tbody>
									<tr id="row2_first" class="first">
										<td><a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">ABC Program</a></td>    
										<td>&nbsp;</td> 
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><span class="iconic on_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Gate-001</a></td>   
										<td>Closed</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><span class="iconic off_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Product Launch</a></td>    
										<td>Open</td> 
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><span class="iconic off_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Gate-002</a></td>    
										<td>Open</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content">
										<td style="padding-left: 3.2em;"><span class="iconic status_warning">&nbsp;</span><a href="#" style="margin-left: 8px;">Deliverable Checkpoint</a></td>   
										<td>Closed</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row2_content last">
										<td style="padding-left: 3.2em;"><span class="iconic on_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Design Review</a></td>    
										<td class="last">Closed</td>
										<td>&nbsp;</td> 
									</tr>
									<tr id="row3_first" class="first">
										<td><a href="#" id="row3" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">Akabas Q</a></td>
										<td>&nbsp;</td>    
										<td>&nbsp;</td> 
									</tr>
									<tr class="row3_content">
										<td style="padding-left: 3.2em;"><span class="iconic off_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Concept 0110</a></td>    
										<td>Open</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row3_content last">
										<td style="padding-left: 3.2em;"><span class="iconic on_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">E-X-PP</a></td>    
										<td>Open</td>
										<td>&nbsp;</td> 
									</tr>
									<tr id="row4_first" class="first">
										<td><a href="#" id="row4" style="margin-left: -5px;" class="closeEl" >&nbsp;</a><a href="#">Coccoon IIOI</a></td>
										<td>&nbsp;</td>    
										<td>&nbsp;</td> 
									</tr>
									<tr class="row4_content">
										<td style="padding-left: 3.2em;"><span class="iconic on_track_task">&nbsp;</span><a href="#" style="margin-left: 8px;">Design Review</a></td>    
										<td>Closed</td>
										<td>&nbsp;</td> 
									</tr>
									<tr class="row4_content last">
										<td style="padding-left: 3.2em;"><span class="iconic status_warning">&nbsp;</span><a href="#" style="margin-left: 8px;">Product Launch</a></td>    
										<td>Open</td>
										<td>&nbsp;</td> 
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