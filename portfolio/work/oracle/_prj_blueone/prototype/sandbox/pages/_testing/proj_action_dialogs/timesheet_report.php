<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	
    <script type="text/javascript" src="global/js/action_dialogs_report_output_common.js"></script>
    <script type="text/javascript" src="bookmarks.php.js"></script>
	<script type="text/javascript" src="timesheet_report.php.js"></script>
    <title>Timesheet</title>
</head>
<body class="action_dialog wizard idd">
	<div id="wrapper_action_dialog_header" class="header rfq">
        <!--************************************
            HEADER
        *************************************-->	
		<div class="header_wrapper">
            <div class="column_one">
                <h2>Timesheet</h2>
				<p>Administrator, Test(admin)</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p id="step_message" style="max-width: 800px;">Choose User, Programs, Date Between and Transaction IDs.  Separate multiple Transaction IDs by semi-colons.  Select Search 
			for your report contents. By selecting Clear, all fields will be emptied.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<div class="search_options">
			<div style="overflow: hidden; height: 100px;"  id="basic_search_table_content" class="basic_search_table_content basic">
				<div class ="two_column_side_by_side">
					<dl class ="side_by_side">
						<dt ><label for="ui_users">Users:</label></dt>
						<dd> 
								<input type="text" id="ui_users" value="" class="long_width" />
								<span class="error_msg hidden">Error message...</span>
						</dd>
						<dt><label for="ui_start_date">Date Between:</label></dt>
						<dd>
							<input type="text" id="ui_start_date" class="medium_width" value="11/29/2008" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
							<span class="error_msg">Error message...</span>
						</dd>
						<dt class="place_holder"></dt>
						<dd>
							<input type="text" id="ui_start_date" class="medium_width" value="12/17/2008" />
							<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
							<span class="error_msg">Error message...</span>
						</dd>
					</dl>
				</div>
				<div class ="two_column_side_by_side">
					<dl class="side_by_side">
						<dt><label for="ui_programs">Programs:</label></dt>
						<dd> 
								<input type="text" id="ui_programs" value="" class="long_width" />
								<span class="error_msg hidden">Error message...</span>
						</dd>
						<dt><label for="ui_transaction_id">Transaction IDs:</label></dt>
						<dd> 
								<input type="text" id="ui_transaction_id" value="" class="long_width" />
								<span class="error_msg hidden">Error message...</span>
						</dd>                     
					</dl>
				</div>
			</div>
			<div id="search_expand_wrapper" class="search_expand_wrapper" title="Expand">
				<div id="search_expand" class="search_expand">&nbsp;</div>
				<span class="search_expand_text">Click to show search controls</span>
			</div>
			<div id="search_collapse_wrapper_basic" class="search_collapse_wrapper" title="Collapse">
				<div style="min-width:0px;"class="column_one"><p>&nbsp;</p></div>
				<div id="search_collapse" class="search_collapse column_two">&nbsp;</div>
				<div style="padding:0px;" class="column_three">
					<p>
						<a href="#" class="button"><span>Search</span></a>
						<a href="#" class="button"><span>Clear</span></a>
					</p>
				</div>
			</div>
			<div style="background-color: #fff;">
				<p>&nbsp;</p>
				<table style="overflow: auto; width: 99.9%;margin-left: 0px;" class="rbr" cellpadding="0" cellspacing="0">
					<tr>
						<th class="w250">Name</th>
						<th class="w75">Number</th>
						<th >Old Value</th>
						<th >New Value</th>
						<th >Delta</th>
						<th class="w125">User</th>
						<th class="w125">Change By</th>
						<th>Timestamp</th>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">AaSetup SDR Generator</a></td>
						<td class="w75"><a href="#">T00611</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">James Jones</td>
						<td class="w125">Alex Koorkov</td>
						<td>03/21/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">AaSetup SDR Generator A</a></td>
						<td class="w75"><a href="#">T90293</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">1</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Gerge Thorogood</td>
						<td class="w125">James Jones</td>
						<td>04/12/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ALPHA Hardware samples</a></td>
						<td class="w75"><a href="#">PGM00711</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Rajesh Singh</td>
						<td class="w125">James Jones</td>
						<td>04/13/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Documentation Checkpoint/</a></td>
						<td class="w75"><a href="#">G11191</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Beth Marx</td>
						<td class="w125">James Jones</td>
						<td>04/20/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">ePHASE 123-4</a></td>
						<td class="w75"><a href="#">PGM22715</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">9</td>
						<td class="w125">Joel Nave</td>
						<td class="w125">James Jones</td>
						<td>04/21/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">FALPA Hardware samples received</a></td>
						<td class="w75"><a href="#">PH55666</a></td>
						<td class="algn_cntr">5</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">5</td>
						<td class="w125">Anthony Moquette</td>
						<td class="w125">Joel Nave</td>
						<td>04/21/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">GPice Part A-REV ECO Released</a></td>
						<td class="w75"><a href="#">G44322</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Alex Koorkov</td>
						<td class="w125">Anthony Moquette</td>
						<td>04/21/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">hBETA Hardware Samples received</a></td>
						<td class="w75"><a href="#">T76252</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Charles Heston</td>
						<td class="w125">Charles Heston</td>
						<td>04/27/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">IFD Release from Database</a></td>
						<td class="w75"><a href="#">T00223</a></td>
						<td class="algn_cntr">7</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">7</td>
						<td class="w125">Tammy Hribek</td>
						<td class="w125">Charles Heston</td>
						<td>04/27/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_gate.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">JDesign Specification Checkpoint</a></td>
						<td class="w75"><a href="#">G445544</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Lisa Ouillette</td>
						<td class="w125">Charles Heston</td>
						<td>04/27/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Ka_Request part Numbers</a></td>
						<td class="w75"><a href="#">T11233</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Randall O'Dowd</td>
						<td class="w125">Randall O'Dowd</td>
						<td>04/29/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_phase.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">LPHASE 100110</a></td>
						<td class="w75"><a href="#">PH775009</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Sally Struthers</td>
						<td class="w125">Alex Koorkov</td>
						<td>05/01/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_action_item.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 002-300</a></td>
						<td class="w75"><a href="#">PGM88298</a></td>
						<td class="algn_cntr">10</td>
						<td class="algn_cntr">10</td>
						<td class="algn_cntr">10</td>
						<td class="w125">Somerset Maugham</td>
						<td class="w125">James Jones</td>
						<td>05/01/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_program.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">PROGRAM 007-ISTN</a></td>
						<td class="w75"><a href="#">PGM22001</a></td>
						<td class="algn_cntr">4</td>
						<td class="algn_cntr">0</td>
						<td class="algn_cntr">4</td>
						<td class="w125">China Mieville</td>
						<td class="w125">James Jones</td>
						<td>03/21/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Quick Conduct BOM Review</a></td>
						<td class="w75"><a href="#">T62541</a></td>
						<td class="algn_cntr">0</td>
						<td class="algn_cntr">0</td>
						<td class="algn_cntr">0</td>
						<td class="w125">Jackie Bergeron</td>
						<td class="w125">Jackie Bergeron</td>
						<td>05/01/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Repropose ECO II</a></td>
						<td class="w75"><a href="#">T40897</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">0</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Yvonne Hill</td>
						<td class="w125">Anthony Moquette</td>
						<td>05/01/2008 08:24:52 PM GMT</td>
					</tr>
					<tr>
						
						<td class="w250"><img src="global/images/icn_obj_task.png" alt="file" style="float: left; margin-right: 5px;" /><a href="#">Shall KIT be purchased or duplicated</a></td>
						<td class="w75"><a href="#">T42098</a></td>
						<td class="algn_cntr">8</td>
						<td class="algn_cntr">5</td>
						<td class="algn_cntr">8</td>
						<td class="w125">Arin McNoffler</td>
						<td class="w125">Anthony Moquette</td>
						<td>06/01/2008 08:24:52 PM GMT</td>
					</tr>
				</table>
			</div>
		</div>
    </div>
	<div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
		    <a href="#" id="cmdSend" class="button"><span>Print</span></a> 
		    <a href="#" id="cmdSend" class="button"><span>Export</span></a>
        </div>
	</div>
</body>
</html>
