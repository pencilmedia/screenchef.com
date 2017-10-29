<div id="Header" class="header">
    <!--************************************
        HEADER
    *************************************-->
	<div class="header_wrapper">
		<div class="breadcrumb_wrapper">
	        <ul class="breadcrumbs">
	        	<li><a href="#">ZAP PDA with Voice Recognition</a></li>
			</ul>
		</div>
		<div class="column_one layout">
			<h2>ZAP PDA with Voice Recognition</h2>
				<p><strong>Program</strong> &bull; Five Phase New Product Development and Introduction</p>
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
            <a href="#" class="button"><span><em class="summary">&nbsp;</em> Summary</span></a>
            <a href="#" class="button"><span><em class="view_gannt">&nbsp;</em> Gantt Chart</span></a>
            <a href="#" class="button"><span><em class="comment">&nbsp;</em> Comment</span></a>
            <a href="#" class="button"><span><em class="lock">&nbsp;</em> Lock</span></a>
            <a href="#" class="button"><span><em class="add">&nbsp;</em> Navigator</span></a>
            <a href="#" class="button"><span>Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
		</div>
	</div>
    <!--************************************
        TABS
    *************************************-->
    <div class="tabs_container skin_default">
        <ul class="tabs">
            <li class="first_tab selected"><a href="#"><span>General Info<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Schedule<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Dependencies<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Team<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Content<em>&nbsp;</em></span></a></li>
            <li><a href="#"><span>Workflow<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>Discussions<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>News<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_06/form_attachments/attachments.php','loadAttachmentsMenu()');"><span>Attachments<em>&nbsp;</em></span></a></li>
            <li class="indicator_gray"><a href="#"><span>History</span></a></li>
        </ul>
    </div>
    <!--************************************
        MESSAGES
    *************************************-->
	<?php include("dms/dms.php"); ?>
    <!--************************************
        PAGE CONTROLS
    *************************************-->
    <div class="page_controls">
        <p class="button_controls"><a href="#" class="button" onclick="doSave();"><span>Save</span></a> <a href="#" onclick="agile.ux.xhr.get('car_content','pages/sprint_05/car_templates/obj_ppm_general_info.php');" class="button"><span>Cancel</span></a></p>
    </div>
</div>
<div id="PaneContent">
    <div class="ObjectFull">
        <div class="container obj_form">
        <form id="form_dialogs" name="frm1_edit" action="">
       
            <h3>Special Section</h3>
            <p style="margin-bottom: 10px;">
            	Duration Type:
                <select id="duration_type">
                    <option value="effort">Effort</option>
                	<option value="fixed">Fixed</option>
                </select>
				Days Effort: <input type="text" id="input_00a" value="556" class="grid_short_width"/>
                Percent Complete: <input type="text" id="input_00b" value="21" class="grid_short_width" />
            </p>
            <!--************************************
                TABLE
            *************************************-->
            <table cellpadding="0" cellspacing="0" class="grid edit_mode">
                <thead>
                    <tr>
                        <th colspan="4">&nbsp;</th>
                        <th colspan="3" class="center_text">Variance Work Days</th>
                        <th colspan="3" class="center_text">Variance Calendar Days</th>
                    </tr>
                    <tr>
                        <th width="10%">&nbsp;</th>
                        <th width="10%">Start</th>
                        <th width="10%">Finish</th>
                        <th width="10%">Duration</th>
                        <th width="10%">Start</th>
                        <th width="10%">Finish</th>
                        <th width="10%">Duration</th>
                        <th width="10%">Start</th>
                        <th width="10%">Finish</th>
                        <th width="10%">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Schedule</strong></td>
                        <td class="date_cell">
						    <input type="text" id="input_00" class="medium_width" value="8/1/2006" />
						    <a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>                    
                        </td>
                        <td class="date_cell">
						    <input type="text" id="input_01" class="medium_width" value="2/13/2007" />
						    <a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>                    
                        </td>
                        <td>
	                        <input type="text" id="input_02" class="medium_width" value="141" /> days
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Estimated</strong></td>
                        <td class="date_cell">
						    <input type="text" id="input_03" class="medium_width" value="8/1/2006" />
						    <a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>                    
                        </td>
                        <td class="date_cell">
						    <input type="text" id="input_04" class="medium_width" value="2/13/2007" />
						    <a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>                    
                        </td>
                        <td>
	                        <input type="text" id="input_05" class="medium_width" value="141" /> days
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><strong>Actual</strong></td>
                        <td class="date_cell">
						    <input type="text" id="input_09" class="medium_width" value="8/1/2006" />
						    <a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>                    
                        </td>
                        <td>&nbsp;</td>
                        <td>
	                        <input type="text" id="input_10" class="medium_width" value="42" /> days
                        </td>
                        <td>
                            <span class="positive_variance">18</span> days
                        </td>
                        <td>&nbsp;</td>
                        <td>
                            <span class="negative_variance">-99</span> days
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <h3>Page 1</h3>
                <dl class="side_by_side_text">
                    <dt>Auto Number:</dt>
                        <dd>Text</dd>
                    <dt>Type Menu:</dt>
                        <dd>Text</dd>
                    <dt>Single-Select User:</dt>
                        <dd><a href="#">User Link</a></dd>
                    <dt>Single Select User:</dt>
                        <dd>&nbsp;</dd>
                    <dt>Text Input:</dt>
                        <dd>Text</dd>
                    <dt>Textarea:</dt>
                        <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</dd>
                    <dt>Text Link:</dt>
                        <dd>&nbsp;</dd>
                    <dt>Text Link 2:</dt>
                        <dd>&nbsp;</dd>
                    <dt>Menu Text:</dt>
                        <dd>&nbsp;</dd>
                </dl>
            <h3>Page 2</h3>
                <dl class="side_by_side_text">
                    <dt>Menu:</dt>
                        <dd>List Value</dd>
                    <dt>Multi-Select Menu:</dt>
                        <dd>Value 1; Value 2</dd>
                    <dt>Text:</dt>
                        <dd>Text typed in here</dd>
                </dl>
        </form>
        </div>
    </div>
</div>