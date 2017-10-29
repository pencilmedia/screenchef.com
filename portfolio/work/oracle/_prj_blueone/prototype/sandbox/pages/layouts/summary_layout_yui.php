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
			<h2>YUI drag and drop library</h2>
			<p><strong>Program</strong> &bull; New Product Development http://www.yahoo.com/</p>
            <p>
                <a href="#" id="default" class="skins">Default</a> |
                <a href="#" id="skin_1" class="skins">Blue</a> |
                <a href="#" id="skin_2" class="skins">Red</a>
            </p>
		</div>
		<div class="column_two">
			<h2>In Process</h2>
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
		<a href="#" class="button"><span>Details View</span></a>
		<a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
		<span class="btn_divide"></span>
		<a href="#" class="button" id="cmdEditMode"><span>Personalize</span></a>
		<a href="#" class="button" id="cmdConfigureMode"><span>Configure</span></a>
		<a href="#" class="button" id="cmdSave"><span>Save Personalization</span></a>
		<a href="#" class="button" id="cmdCancel"><span>Cancel</span></a>
	</div>
	</div>
</div>
<style>
.widget_editor
{
	text-align: right;
	padding: 3px 5px 0 0;
}
.semitrans
{
	filter:alpha(opacity=30);
	-moz-opacity:.30;
	opacity:.30;
}
</style>
<div id="PaneContent">
	<div class="ObjectFull with_widgets">
    	<div class="container obj_form widgets">
			<div id="columnLeft" class="columnLeft">
                <div class="groupItem" id="widgetL1">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide1"><img src="global/images/icn_action_approve.png"  /></a>
					</div>            
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">Summary</a>
						</div>
						<div class="column_one wide_widget_rght">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetL1" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                        <div class="widget_actions">
                            <div class="column_one">
                             <a href="#" title="Edit" class="button"><span>Edit</span></a>
                            </div>
                        </div>
                        <div class="widget_content widget_summary">
                        	<dl class="side_by_side_text with_top_margin">
                                <dt><label>Schedule Status Reason:</label></dt>
                                    <dd>Children Need Attention</dd>
                                <dt><label>Weight:</label></dt>
                                    <dd>0</dd>
                                <dt><label>Actual Time (in Days):</label></dt>
                                    <dd>0</dd>
                                <dt><label>Launch Year:</label></dt>
                                    <dd>2009</dd>
                                <dt><label>Schedule Sart Date:</label></dt>
                                    <dd>03/20/2008</dd>
                            </dl>
                           	<img src="global/images/thumbnail_sml_sata_drive.png" title="Click to enlarge" onclick="alert('Pop up thumbnail')"/>
                       		
                        </div>
                    </div>
                </div>
                <!--END widget -->
                <div class="groupItem" id="widgetL2">
					<div id="edit1" class="widget_editor">
						<a href="#" id="cmdMoveUp2"><img src="global/images/arrow_up.png"  /></a>
						<a href="#" id="cmdMoveDown2"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide2"><img src="global/images/icn_action_approve.png"  /></a>
					</div>                
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">Upcoming Activities</a><span class="dashboardTitle"> and </span><a href="#">Action Items</a>
						</div>
						<div class="column_one wide_widget_rght">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetL2" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                            <div class="column_one">
                             <a href="#" title="Edit" class="button"><span>Add</span></a>
                            </div>
                            <div class="column_two">
                            	Show
                                <select class="short_width">
                                	<option>All</option>
									<option>My Activities and Actions</option>
                               	</select>
                                updated in
                                <input id="" name="" value="20" size="2" class="short_width inline_box" /> &nbsp;days.
                            </div>
                    	</div>
                        <p id="p1" class="table_loading_indicator"><img src="global/images/pi/table_loading.gif"/><br/>Loading...</p>
                        <table id="p2" class="widget">
                            <thead>
                                <tr>
                                    <th colspan="2">Name</th>
                                    <th>Owner</th>
                                    <th>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                            	<tr>
                                    <td class="icon_cell"><img src="global/images/action_item.png" /></td>
                                    <td class="no_left_border">
                       					 <a href="#">Action Items Tes</a><br />
                                         In Progress - <a href="#">New Product Development.</a>
                                    </td>
                                    <td><a href="#">CJJames</a></td>
                                    <td><span class="overdueLabel">03/30/2008</span></td>
                                </tr>
                                <tr>
                                    <td class="icon_cell"><img src="global/images/icn_obj_program.png" /></td>
                                    <td class="no_left_border">
                           				<a href="#">zoozha Program</a><br />
                                        In Process - 0.
                                    </td>
                                    <td><a href="#">MVaughan - DeLoreum</a></td>
                                    <td><span class="overdueLabel">Today</span></td>
                                </tr>
                                <tr class="last">
                                    <td class="icon_cell"><img src="global/images/action_item.png" /></td>
                                    <td class="no_left_border">
                           				<a href="#">Inventory Parts: DB23567890B78</a><br />
                                        In Progress - <a href="#">New Product Development.</a>
                                    </td>
                                    <td><a href="#">CAdams</a></td>
                                    <td>04/28/2008</td>
                                </tr>                            
                            </tbody>
                        </table>
                    </div>
                </div>
                <!--END widget-->
                <div class="groupItem" id="widgetL3">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide3"><img src="global/images/icn_action_approve.png"  /></a>
					</div>                
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero wide_widget_lft">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">Recent Discussions</a>
						</div>
						<div class="column_one wide_widget_rght">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetL3" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                            <div class="column_one">
                             <a href="#" title="Edit" class="button"><span>Add</span></a>
                             <a href="#" title="Edit" class="button"><span>Join</span></a>
                            </div>
                            <div class="column_two">
                            	Show
                                <select class="short_width">
                                	<option>All</option>
                               	</select>
                                updated in
                                <input id="" name="" value="30" size="2" class="short_width inline_box" /> &nbsp;days.
                            </div>
                        </div>
                            <table id="p2" class="widget">
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Most Recent Message</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="#">Great New Supplier</a></td>
                                        <td>
                                        	Has anybody used the new supplier by the name of T.J...<br />
										    <a href="#">CJJames</a>
										</td>
                                        <td>09:24 AM PST</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Discuss OneA</a></td>
                                        <td>
											Part 001 is a more stable, longer used item in the data...<br />
                                            <a href="#">SStruthers</a>
										</td>
                                        <td>04/10/2008</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Risk Analysis on AB4</a></td>
                                        <td>
                                        	AB4 risk analysis is considered to be minimal at best, this...<br />
										    <a href="#">NSign</a>
										</td>
                                        <td>04/04/2008</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">Advice on 4001a</a></td>
                                        <td>
                                        	The 4001a is currrently on the list of parts to phase out ...<br />
										    <a href="#">CMckinnley</a>
										</td>
                                        <td>04/01/2008</td>
                                    </tr>
                                </tbody>
                            </table>                        
                         <div class="groupDiscussion">
                        	<div class="discussionMessage">
                                <p>Select a discussion above to view the discussion thread.</p>
                            </div>
                            <div class="discussionContent">
                            <table class="widget" cellpadding="0" cellspacing="0">
                            	<thead>
                                    <tr class="header">
                                        <td>Discusssion Thread: Part 001 vs 002-4</td>
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
                                                <li><a href="#" style="float: left; padding-top: 1.2em;">SStruthers</a> <a style="float: right; padding-right: 5px;" href="#" class="button"><span>Reply</span></a></li>
                                            </ul>
                                        </td>
                                        <td style=" width:15%;"><span style="position: relative; top: -30px;">04/10/2008 10:22 AM PST</span></td>
                                    </tr>
                                     <tr>
                                        <td>
                                            <ul class="discussion">
                                                 <li>I always heard that 002-4 was the superior product.</li>
                                                 <li><a href="#">SMaugham</a></li>
                                            </ul>
                                        </td>
                                        <td style=" width:15%;"><span style="position: relative; top: -3px;">04/09/2008 09:32 AM PST</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul class="discussion">
                                                 <li>So, what's the story on Part 001 vs 002-4 ? </li>
                                                 <li><a href="#">CHeston</a></li>
                                            </ul>
                                        </td>
                                        <td style=" width:15%;"><span style="position: relative; top: -3px;">04/08/2008 11:03 PM PST</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                       	</div>
                    </div>
                </div>
		 		<!--END widget-->
        </div>
<!--END left column; BEGIN right column-->
		<div id="columnRight" class="columnRight">
        <!-- Begin widget -->
                <div class="groupItem" id="widgetR1">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide4"><img src="global/images/icn_action_approve.png"  /></a>
					</div>
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <span class="dashboardTitle">Gates</span>
						</div>
						<div class="column_one">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetR1" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                        	<div class="column_two no_column_one">
                            	2 of 6 Gates have been completed
                             </div>
                        </div>
                        <div class="widget_content">
                        <table class="widget">
                       		<thead>
                            	<th>Program / Gate</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr class="collapsed no_bottom_border">
                                    <td><a class="closeEl" id="row0" href="#">&nbsp;</a><span class="completedLabel">Concept</span></td>
                                    <td>Completed</td>    
                                </tr>
                                <tr class="row0_content with_subcontent">
                               		<td>
                                    	<a href="#" class="status_completed">Deliverable 1</a>
                                    </td>
                                    <td><p>Completed</p></td>    
                                </tr>
                                <tr class="row0_content with_subcontent">
                               		<td>
                                    	<a href="#" class="status_completed">Deliverable 2</a>
									</td>                         
                                    <td>Completed</td>    
                                </tr>
                                <tr class="row0_content with_subcontent">
                               		<td>
                                    	<a href="#" class="status_attention">A really long deliverable for engineering to truncate...</a>
                                    </td>
                                    <td><p>Completed</p></td>    
                                </tr>
                                <tr class="row0_content with_subcontent">
                               		<td>
                                    	<a href="#" class="status_task_offtrack">Deliverable Number 4</a>
									</td>                         
                                    <td>Completed</td>    
                                </tr>
                                <tr class="row0_content with_subcontent last_row">
                               		<td class="with_subcontent">
                                    	<a href="#" class="status_task_ontrack">Deliverable 5</a>
                                    </td>
                                    <td><p>Completed</p></td>    
                                </tr>
                                <tr class="collapsed">
                                    <td><a class="closeEl" href="#">&nbsp;</a><span class="completedLabel">Definition</span></td>
                                    <td>08/05/2008</td>    
                                </tr>
                                <tr class="collapsed">
                                    <td><a class="closeEl" href="#">&nbsp;</a><span class="completedLabel">Construct</span></td>
                                    <td>02/05/2009</td>    
                                </tr>

                                </tbody>
                       	</table>
                    	</div>
                    </div>
                </div>
                <!--END widget-->
                <div class="groupItem" id="widgetR2">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide5"><img src="global/images/icn_action_approve.png"  /></a>
					</div>
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">Content</a>
						</div>
						<div class="column_one">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetR2" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                            <div class="column_one no_width">&nbsp;</div>
                             <div class="column_two no_width">
                            	Show
                                <select>
                                	<option>Important</option>
                               	</select>
                            </div>
                        </div>
                        <div class="widget_content">
                        <table id="p2" class="widget">
                            <tbody>
                            	<tr>
                                    <td class="icon_cell"><img src="global/images/part.png" /></td>
                                    <td class="no_left_border">
                       					 <a href="#">NCR00001</a><br />
                                         Latest for 2009 governmental regulations and rules
                                    </td>
                                    <td class="icon_cell"><img src="global/images/icn_action_attachment.png" title="Attachment" /></td>
                                </tr>
                                <tr>
                                    <td class="icon_cell"><img src="global/images/non-conformance_report.png" /></td>
                                    <td class="no_left_border">
                           				<a href="#">007-100</a><br />
                                        Screen for the massess available for international consumption in a variety of colors.
                                    </td>
                                    <td class="icon_cell"><img src="global/images/icn_action_attachment.png" title="Attachment" /></td>
                                </tr>
                            	<tr class="last">
                                    <td class="icon_cell"><img src="global/images/part.png" /></td>
                                    <td class="no_left_border">
                       					 <a href="#">102-1911-004</a><br />
                                         SCHEMATIC RCRA.
                                    </td>
                                    <td class="icon_cell"><img src="global/images/icn_action_attachment.png" title="Attachment" /></td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <!--END widget-->
                
                <div class="groupItem" id="widgetR3">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide6"><img src="global/images/icn_action_approve.png"  /></a>
					</div>
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">News</a>
						</div>
						<div class="column_one">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetR3" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                            <div class="column_one no_width">
                             <a href="#" title="Edit" class="button"><span>Add</span></a>
                             <a href="#" title="Edit" class="button"><span>Remove</span></a>
                            </div>
                        </div>
                        <div class="widget_content">
                            <table class="news">
								<tr>
									<td>
										<p><a href="#">Latest on Acquisition for Acme</a></p>
										<p>News from the top suggest that the latest reports of aquisition are leanning 
                                        towards the autumn of this year.</p>
										<p><span style="float: left;">by: <a href="#">JWilliams</a></span> <span style="float: right; padding-right: 5px;">Posted:04/10/2008</span></p>
									</td>
								</tr>
								<tr class="last">
									<td>
									<p><a href="#">New Supplier Available</a></p>
                                    <p>Announcing a new supplier for Acme based i our own area.  Long time associate
                                       Kenneth B. Bower has partnered up with L.C. Struthers - largest suppliers
                                       available in the country</p>
                                     <p ><span style="float: left;">by: <a href="#">JWilliams</a></span> <span style="float: right; padding-right: 5px;">Posted:04/10/2008</span></p>									
									</td>
								</tr>
							</table>
                        </div>
                    </div>
                </div>
                <!--END widget-->
                
                <div class="groupItem" id="widgetR4">
					<div id="edit1" class="widget_editor">
						<a href="#"><img src="global/images/arrow_up.png"  /></a>
						<a href="#"><img src="global/images/arrow_down.png"  /></a>
						<a href="#" id="cmdHide7"><img src="global/images/icn_action_approve.png"  /></a>
					</div>
                    <div class="itemHeader" style="-moz-user-select: none;" id="ddHandle">
						<div class="column_zero">
	                        <a class="closeEl expanded" href="#">&nbsp;</a>
	                        <a href="#">Team Contact Info</a>
						</div>
						<div class="column_one">
	                        <a class="cmdC" href="#"><span><em class="dasboard_dropdown">&nbsp;</em>&nbsp;</span></a>
	                        <a class="cmdA" href="#">&nbsp;</a>
	                        <a id="cmdB_widgetR4" class="cmdB" href="#">&nbsp;</a>
						</div>
                    </div>
                    <div class="itemContent">
                    	<div class="widget_actions">
                            <div class="column_one  no_width">
                            	Go To
                                <select>
                                	<option>J</option>
                               	</select>
                            </div>
                            <div class="column_two  no_width">
                            	205 Contacts.
                            </div>
                        </div>
                        <div class="widget_content contact_info">       
                            <table id="p2" class="widget">
                                <tbody>
                                    <tr>
                                        <td class="icon_cell"><img src="global/images/mail_unread.png" title="View" onclick="alert('Do something...')" /></td>
                                        <td class="no_left_border">
                                            <p><a href="#">Joel William Joseph Nave III</a></p>
                                            <p>Manager, User Experience</p>
                                            <p>(650) 555-3212</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="icon_cell"><img src="global/images/mail_unread.png" title="View" onclick="alert('Do something...')" /></td>
                                        <td class="no_left_border">
                                            <p><a href="#">Joel William Joseph Nave III</a></p>
                                            <p>Manager, User Experience</p>
                                            <p>(650) 555-3212</p>
                                        </td>
                                    </tr>
                                    <tr class="last">
                                        <td class="icon_cell"><img src="global/images/mail_unread.png" title="View" onclick="alert('Do something...')" /></td>
                                        <td class="no_left_border">
                                            <p><a href="#">Joel William Joseph Nave III</a></p>
                                            <p>Manager, User Experience</p>
                                            <p>(650) 555-3212</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!--END widget-->
                
		</div><!-- end right column -->
    </div>
        
		<div id="proxyWidget">&nbsp;</div>
		<div id="protoWidget" class="testWidget">&nbsp;</div>
		<div id="dropSlot" class="dropSlot">&nbsp;</div>
	</div>
</div>
