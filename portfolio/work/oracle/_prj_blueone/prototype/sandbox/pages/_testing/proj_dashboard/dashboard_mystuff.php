<style>

	.new_tabs
	{
		overflow:visible;
		position:relative;
	}
	.new_tabs ul
	{
		overflow: hidden;
	}
	.widget_config
	{
		position: absolute;
		border-bottom: 5px solid #ccc;
		border-right: 5px solid #ccc;
		z-index:1000;
		width: 100%;
		background-color: #fff;
		display: none;
		padding: 5px 10px;
		margin-top: -15px;
	}
	
	.widget_config dl.side_by_side_mixed dt { width: 15%; }
	.widget_config table 
	{
		padding-bottom: 10px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		border-left: 1px solid #ccc;
		border-right: 1px solid #ccc;
		width:98%;
	}
	.widget_config table th { text-align: center }
	.widget_config table td
	{
		text-align: center ;
		padding: 5px;
	}
	.widget_config table tfoot td 
	{
		padding-top: 10px;
		text-align: left;
	}
	#widget_table4,
	#table4_content_2
	{
		display: none;
	}
	#table4_content_1 table td { padding: 5px; }
	
	.new_tabs ul li span:hover
	{
		cursor: pointer;
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
		<div class="column_one layout">
			<h2>Home</h2>
				<p>Welcome back, Test administrator.</p>
		</div>
		<div class="column_two extended quickLinks">            
            <p>
            	<h5 class="ql"><span>Quick Links</span></h5>
            	<img src="../../../global/images/icn_action_edit.png" alt="Quick Links" onclick="javascript:editQuickLinks();" />
            </p>
            <p class="quicklink_links">
                <span><a href="">Link One</a></span>
                <span><a href="">Link Two</a></span>
                <span><a href="">Link Three</a></span>
                <span><a href="">Link Four</a></span>
                <span><a href="">Link Five</a></span>
                <span><a href="">Link Six</a></span>
                <span><a href="">Link Seven</a></span>
                <span><a href="">Link Eight</a></span>
                <span><a href="">Link Nine</a></span>
                <span><a href="">Link Ten</a></span>
                [ <a href="#" class="showall" onclick="agile.ux.conceptCar.quickLinksToggle()">View All</a> ]
            </p>
        
            <div id="quick_links" class="quick_links">
                <ul>
                    <li><a href ="#" onclick="window.controller_instance.dispatchLink('pages/sprint_06/complete_form/complete_form_read.php', 'mainwin')">Notifications</a></li>
                    <li><a href="#" onclick="window.controller_instance.dispatchLink('pages/_testing/proj_tabs/dependencies.php', 'mainwin')">Timesheet</a></li>
                    <li><a href="#">Dashboard Resources dsafds dsaf sd sdf a</a></li>
                    <li><a href ="#">Test Link One</a></li>
                    <li><a href ="#">Link Test Two</a></li>

                </ul>
                <ul>
                    <li><a href="#" onclick="window.controller_instance.dispatchLink('pages/sprint_03/concept_forms/poc_02.php', 'mainwin')">New Product Launch</a></li>
                    <li><a href="#">Quality Improvement</a></li>
                    <li><a href="#">Gate 501011</a></li>
                    <li><a href ="#">Link Test Two</a></li>
                    <li><a href ="#">Link Test Two</a></li>
                </ul>
                <ul>
                    <li><a href="#" onclick="window.controller_instance.dispatchLink('pages/sprint_03/concept_forms/poc_02.php', 'mainwin')">New Product Launch</a></li>
                    <li><a href="#">Quality Improvement</a></li>
                    <li><a href="#">Gate 501011</a></li>
                    <li><a href ="#">Link Test Two</a></li>
                </ul>
            </div>
		</div>
	</div>
</div>
<!--************************************
        TABS (Ralph's)
    *************************************-->
<div class="tabs_container skin_default special_case">
	<ul class="tabs">
		<li class="first_tab selected"><a href="#" ><span>Dashboard<em>&nbsp;</em></span></a>
			<ul>
				<li class="selected"><a href="#"><span>My Stuff<em>&nbsp;</em></span></a></li>
				<li><a href="#" onclick="agile.ux.xhr.get('car_content','pages/_testing/proj_dashboard/dashboard_executive.php',function() { dashboard.init(); });"><span>Executive<em>&nbsp;</em></span></a></li>
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
</div>
<div style ="border-top: none;" id="PaneContent">
    <div class="ObjectFull">
		<div id="widget_config" class="widget_config">
		
			<div style="margin-bottom:15px">
				<input type="radio" id="a1" name="a1" checked="checked"  /> <label for="a1" style="margin-right:10px;">Create New</label>
				<input type="radio" id="a2" name="a1" /> <label for="a2">Used Saved Search</label>
			</div>

			<dl class="side_by_side_mixed">
				<dt><label for="ui_start_date">Search for:</label></dt>
				<dd>
				<select id="req_sel_00" class="medium_width">
					<option value="">Programs</option>
				</select>
				</dd>
				<dt><label for="ui_start_date">Search Type:</label></dt>
				<dd>
				<select id="req_sel_00" class="medium_width">
					<option value="">Object Search</option>
				</select>
				</dd>
				<dt><label for="ui_start_date">Criteria Condition:</label></dt>
				<dd style="padding-top:5px;">
					General Status in ? AND General Info Program Type Equal To ?
				</dd>
			</dl>
			
			<table>
				<thead>
					<tr>
						<th>(</th>
						<th>Field</th>
						<th>Match If</th>
						<th>Prompt</th>
						<th>Value</th>
						<th>)</th>
						<th>And/Or</th>
						<th>&nbsp;</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="radio" /></td>				
						<td><input type="text" value="General Info Schedule Status" class="long_width" /></td>				
						<td>
							<select class="long_width">
								<option>In</option>
							</select>
						</td>
						<td><input type="checkbox" /></td>				
						<td><input type="text" class="long_width disabled" /></td>				
						<td><input type="radio" /></td>
						<td>
							<select class="long_width">
								<option>And</option>
							</select>						
						</td>
					</tr>
					<tr>
						<td><input type="radio" /></td>				
						<td><input type="text" value="General Info Schedule Type" class="long_width" /></td>				
						<td>
							<select class="long_width">
								<option>Equal To</option>
							</select>
						</td>
						<td><input type="checkbox" checked="checked" /></td>				
						<td><input type="text" class="long_width disabled" /></td>				
						<td><input type="radio" /></td>
						<td>
							<select class="long_width">
								<option>And</option>
							</select>						
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="7">
							<a href="#" class="button" onclick="addWidget()"><span>Add()</span></a>
							<a href="#" class="button"><span>Add Group</span></a>
							<a href="#" class="button"><span>Remove</span></a>
							<a href="#" class="button"><span>Validate</span></a>
							<input type="checkbox" style="margin-left: 20px;"/> Match Case
						<td>
					</tr>
				</tfoot>
			</table>

		</div>
        <div class="container obj_form widgets">       
			<div id="main" class="groupWrapper side_by_side with_bottom">
				<div class="groupItem" id="container_03a">
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
                            <div class="column_one wp75">
                            	View
                                <select class="medium_width">
                                	<option>All</option>
									<option>My Activities and Actions</option>
                               	</select>
                                due in
                                <input id="" name="" value="20" size="2" class="short_width inline_box" /> &nbsp;days.
                             </div>
                        </div>
                        <div class="widget_content">
                            <table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
								<thead>
									<tr class="header">
										<td>Name</td>
										<td>Due Date</td>
									</tr>
								</thead>
								<tbody>
									<tr id="row2a_first">
										<td style="white-space:nowrap;">
                                        	<a href="#" id="row2a" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic task">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Determine if KIT will be Purchased or Replicated</a>
                                        </td>    
										<td><span class="overdueLabel">05/02/2008</span></td> 
									</tr>
									<tr class="row2a_content">
										<td class="with_icon">
                                            <a href="#"><img src="global/images/icn_action_attachment.png" /></a>
                                            <a href="#" class="doc">Design Document</a>
                                        </td> 
										<td class="with_icon">&nbsp;</td>
									</tr>
									<tr class="row2a_content" >
										<td class="with_icon">
                                            <a href="#"><img src="global/images/icn_action_attachment.png" /></a>
                                            <a href="#" class="doc">Prototype</a>
                                        </td> 
										<td class="with_icon">&nbsp;</td>
									</tr>
									<tr id="temp01" class="row2a_content">
										<td class="with_icon">
                                            <a href="#"><img src="global/images/icn_action_attachment.png" /></a>
                                            <a href="#" class="doc">Usability Assessment</a>
                                        </td> 
										<td class="with_icon">&nbsp;</td>
									</tr>

									<tr>
										<td>
                                        	<a href="#" id="row3" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic gate">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Documentation Checkpoint</a>
                                        </td>    
										<td><span class="overdueLabel">Yesterday</span></td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row4" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic gate">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Design Checkpoint</a>
                                        </td>    
										<td><span class="overdueLabel">Today</span></td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic task">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Finalized MOD Structure</a>
                                        </td>    
										<td>05/21/2008</td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic task">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">BOM Review</a>
                                        </td>    
										<td>05/21/2008</td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic gate">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Checkpoint Charlie #2</a>
                                        </td>    
										<td>06/01/2008</td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic gate">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Design Review V</a>
                                        </td>    
										<td>06/02/2008</td> 
									</tr>
									<tr>
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic gate">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Design Review IV</a>
                                        </td>    
										<td>06/04/2008</td> 
									</tr>
									<tr class="last">
										<td>
                                        	<a href="#" id="row2" style="margin-left: -5px;" class="closeEl" >&nbsp;</a>
   	                                        <span class="iconic task">&nbsp;</span>
                                            <a href="#" style="padding-left: 5px;">Request Part Number(Piece parts and MODs)</a>
                                        </td>    
										<td>06/04/2008</td> 
									</tr>
								</tbody>
							</table>
                        </div>
                    </div>
                </div>
			</div>


			<div id="widget_table4" class="groupWrapper side_by_side with_bottom">
				<div class="groupItem" id="container_03a">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">Table 4</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_04" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
						<div id="table4_content_1" style="margin-top:10px;">
							<table>
								<tr>
									<td style="width:40%">General Info.Schedule Status In:</td>
									<td>
										<select id="req_sel_00" class="long_width">
											<option value=""></option>
										</select>
									</td>
								</tr>
								<tr>
									<td>General Info.Program Type Equal To:</td>
									<td>
										<select id="req_sel_00" class="long_width">
											<option value=""></option>
										</select>
									</td>
								</tr>
								<tr>
									<td>&nbsp;</td>
									<td><a href="#" class="button" onclick="runWidget()"><span>Run</span></a>
							</table>

						</div>
						<div id="table4_content_2">
							<div class="widget_actions">
								<div class="column_one wp75">
									General Info.Schedule Status In:
									<select class="medium_width">
										<option>Off Track</option>
									</select>
								 </div>
							</div>
							<div class="widget_content">
								<table style="width: 99.8% ;" class="rbr with_widgets" cellpadding="0" cellspacing="0">
									<thead>
										<tr class="header">
											<td>&nbsp;</td>
											<td>Type<td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
										<tr>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
										<tr>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
										<tr class="last">
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
											<td>&nbsp;</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
                    </div>
                </div>
			</div>

		</div>



			<div id="bottom" class="groupWrapper bottom">
				<div class="groupItem" id="container_03">
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
							<a class="closeEl expanded" href="#">&nbsp;</a>
							<span class="dashboardTitle">My Discussions</span>
						</div>
						<div class="column_one wide_widget_rght">
							<a class="cmdC" href="#">&nbsp;</a>
							<a id="cmdB_container_03" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one wide_widget_lft">
                            	Program
                                <select class="small_width">
                                	<option>New Product Development</option>
                               	</select>
								<span>&nbsp;</span>
                                View Type
                                <select class="small_width">
                                	<option>Issues</option>
                               	</select>
								from last
                                <input id="" name="" value="20" size="2" class="inline_box" /> &nbsp;days.
                            </div>
                        </div>
                        <div class="widget_content">
                            <table class="rbr with_widgets" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr class="header">
                                        <td>Subject</td>
                                    	<td>Most Recent Message</td>
                                    	<td>Date</td>
                                    </tr>
                                </thead>
                                <tbody style="overflow: auto; max-height: 140px ">
                                    <tr class="showThread">
                                        <td class="wp20" >
                                            <ul>
                                                 <li><a href="#">Great New Supplier</a></li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                        <td class="wp63">
                                       		<ul>
                                                 <li>Has anybody used the new supplier by the name of T.J for New Product Development issues and ...</li>
                                                 <li><a href="#">CJJames</a></li>
                                            </ul>
                                        </td>
                                        <td class="w75">
                                        	<ul>
                                                 <li>06/01/2008</li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                    </tr>
                                     <tr class="showThread">
                                     	<td class="wp20">
                                            <ul>
                                                 <li><a href="#">Alien Testing</a></li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                        <td class="wp63">
                                       		<ul>
                                                 <li>For real live alien testing. Part 001 is a more stable, longer used item proven by the team at Sun Ci...</li>
                                                 <li><a href="#">SStruthers</a></li>
                                            </ul>
                                        </td>
                                        <td class="w75">
                                        	<ul>
                                                 <li>05/28/2008</li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr class="showThread">
                                    	<td class="wp20">
                                            <ul>
                                                 <li><a href="#">Discuss OneA</a></li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                        <td class="wp63">
                                       		<ul>
                                                 <li>According to the DB Time report of 2007/2008 the OneA, the OneB has been risky for all Northern ...</li>
                                                 <li><a href="#">NSingh</a></li>
                                            </ul>
                                        </td>
                                        <td class="w75">
                                        	<ul>
                                                 <li>05/27/2008</li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                    </tr>
                                     <tr class="showThread">
                                     	<td class="wp20">
                                            <ul>
                                                 <li><a href="#">Risk Analysis on AB4</a></li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                        <td class="wp63">
                                       		<ul>
                                                 <li>AB4 risk analysis is considerd to be minimal at best, this is based on the research done by AJ Uni...</li>
                                                 <li><a href="#">CMckinnley</a></li>
                                            </ul>
                                        </td>
                                        <td class="w75">
                                        	<ul>
                                                 <li>05/27/2008</li>
                                                 <li>&nbsp;</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                       		 </table>
							<div class="groupDiscussion">
								<div class="discussionMessage">
									<p>Select a discussion above to view the discussion thread.</p>
								</div>
								<div class="discussionContent">
								<table class="rbr with_widgets" cellpadding="0" cellspacing="0">
									<thead>
										<tr class="header">
											<td>Discusssion Thread: Alien Testing</td>
											<td>&nbsp;</td>
											<td>Date</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<ul>
													 <li>Part 001 is a more stable, longer used item in the database, however most people 
													 now are changing to the 002-4 (not the 002-3) Or add deliverable from supplier,
													 product launch, research gate.  Cna be found in Detroit, Baltimore, Palo Alto, New
													 Orleans on Saturdays and Thursdays.
												   </li>
													<li><a href="#">SStruthers</a></li>
												</ul>
											</td>
											<td class="w50"><a href="#" onclick="getDialog('pages/_testing/proj_action_dialogs/ppm_summary_discussion_reply.php',400,560);return false;" class="button"><span>Reply</span></a>
											<td class="w75"><span>04/10/2008 10:22 AM PST</span></td>
										</tr>
										 <tr>
											<td>
												<ul class="discussion">
													 <li>I always heard that 002-4 was the superior product.</li>
													 <li><a href="#">SMaugham</a></li>
												</ul
											></td>
											<td class="w50">&nbsp;</td>
											<td class="w75"><span>04/09/2008 09:32 AM PST</span></td>
										</tr>
										<tr>
											<td>
												<ul class="discussion">
													 <li>So, what's the story on Part 001 vs 002-4 ? </li>
													 <li><a href="#">CHeston</a></li>
												</ul>
											</td>
											<td class="w50">&nbsp;</td>
											<td class="w75"><span>04/08/2008 11:03 PM PST</span></td>
										</tr>
									</tbody>
								</table>
                            </div>
							</div>
                        </div>
                    </div>
                </div><!--END widget-->
			</div>
        </div>
    </div>
</div>