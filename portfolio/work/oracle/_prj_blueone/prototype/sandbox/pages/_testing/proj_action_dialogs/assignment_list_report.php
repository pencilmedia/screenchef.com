<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<title>Assignment List Report</title>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Assignment List Report</h2>
                <p>Internal User Group &bull; wewer</p>
            </div>		
        </div>
        <div id="page_message" class="message">           
            <p class="text">&nbsp;</p>
        </div>
		<div class="view_controls">
        <h4>Apple Group 1</h4>
	<p>
	
            <label for="pendingFilter">Assignment:</label>
            <select name="pendingFilter" id="pendingFilter" class="short_width" onchange="
                jQuery(this).bind('click', function(){ 
                    
                    var s = this[this.selectedIndex].value;
                    if (s=='1') { 
                        jQuery('#column_three').show() 
                    }
                    else
                    if (s=='2' || s=='3') {
                        jQuery('#column_three').hide() 
                    }
                })  
            ">
            	<option value="1" selected="selected">Pending</option>
                <option value="2">Assigned</option>
                <option value="3">Show All</option>
            </select>
          </p>
        </div>
        <div class="table_actions">
            <div class="column_one no_width">
                <p><!--
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>-->
                </p>
            </div>
            <div id="column_three" class="column_three">
                <p>
                    <label for="assignmentFilter">Display Due in:</label>
                    <select name="assignmentFilter" id="assignmentFilter" class="short_width">
                        <option value="0" selected="selected">All</option>
                        <option value="1">1 Week</option>
                        <option value="2">2 Weeks</option>
                        <option value="3">3 Weeks</option>
                        <option value="5">1 Month</option>
                        <option value="6">2 Months</option>
                        <option value="7">3 Months</option>
                        <option value="8">6 Months</option>
                    </select>
                </p>
            </div>
        </div>

	</div>
	<div id="wrapper_action_dialog_content" class="content">
        <!--************************************
            TABLE ACTIONS
        *************************************-->

        <table class="rbr" cellpadding="0" cellspacing="0">
            <tr class="header">
                <td class="handle"></td>
                <td>Resource</td>
                <td>% Allocated</td>
                <td>Name</td>
<td>Root Name</td>
                <td>Scheduled Start</td>
                <td>Scheduled End</td>
                <td>Status</td>
</tr>
            <tr>
                <td class="handle"></td>
                <td>Pending</td>
                <td>100</td>
<td>Activity 123</td>
<td>Activity 123</td>
                <td>02/05/09</td>
                <td>02/05/10</td>
                <td>In Process</td>
</tr>
            <tr>
                <td class="handle"></td>
                <td>Pending</td>
                <td>100</td>
<td>New Product Development</td>
<td>New Product Development</td>
                <td>06/05/08</td>
                <td>02/05/09</td>
                <td>Not Started</td>
</tr>
            <tr>
                <td class="handle"></td>
                <td>Assigned</td>
                <td>100</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
                <td>11/05/09</td>
                <td>05/05/12</td>
                <td>Not Started</td>
</tr>
        </table>
</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">
	    </div>
     	<div class="column_three">
	        <a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>