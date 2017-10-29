<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<title>Assignments</title>
	<style>
		.view_controls.assign
		{
			margin-top:5px;
		}
		.view_controls.assign h4
		{
			margin-top:23px;
		}
		.view_controls.assign h4+p
		{
			margin-bottom:3px;
		}
	</style>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Activity Assignments</h2>
                <p>Internal User Group &bull; wewer</p>
            </div>		
        </div>
        <div id="page_message" class="message info">           
            <p class="text">Requested allocation is 100%. You can allocate this work to one or multiple resources.</p>
        </div>
		<div class="view_controls assign">
        <h4>Apple Group 1</h4>
			<p>
	            <input id="include_allocations" type="checkbox" style="vertical-align:middle;">&nbsp;<label for="include_allocations">Include proposed project allocations</label>    
          	</p>
            <p>
                <label for="pendingFilter">Reporting Intervals:</label>
                <select name="interval" id="interval" class="short_width">
                	<option value="0">Day</option>
                    <option value="1">Week</option>
                    <option value="2">Month</option>
                    <option value="3">Quarter</option>
                    <option value="4" selected="selected">Year</option>
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
                <p></p>
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
                <td>Allocate</td>
              <td>03/18 - 03/18</td>
                <td>03/19 - 03/19</td>
          </tr>
            <tr>
                <td class="handle"></td>
                <td>Anthony Moquette</td>
                <td><input type="text" class="medium_width" /></td>
<td>100%</td>
                <td>50%</td>
          </tr>
            <tr>
                <td class="handle"></td>
                <td>Ralph A. Garcia</td>
                <td><input type="text" class="medium_width" /></td>
<td>80%</td>
                <td>100%</td>
          </tr>
            <tr>
              <td class="handle"></td>
              <td>Joel Nave</td>
              <td><input type="text" class="medium_width" /></td>
              <td>40%</td>
              <td>60%</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>Phanee Mandala</td>
                <td><input type="text" class="medium_width" /></td>
<td>25%</td>
                <td>20%</td>
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