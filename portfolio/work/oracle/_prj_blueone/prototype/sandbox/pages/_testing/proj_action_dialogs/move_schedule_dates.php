<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script><script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="move_schedule_dates.php.js"></script>
	<title>Move Schedule Dates</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Move Schedule Dates</h2>
                <p>Program &bull; New Product Introduction</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Move the dates for selected activities by providing a new start or end date, or specify a number of days to move them forward or backward.</p>
        
        </div>
	</div>


	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset>
        		<legend>Move dates by</legend>
				<dl class="side_by_side_mixed with_top_margin">
					<dt class="left"><input id="radio_00" type="radio" name="move_date"  checked="checked" /> <label for="radio_00">Start Date:</label></dt>
					<dd>
						<input type="text" id="input00" class="medium_width" value="11/29/2006" />
						<a id="icon_00" href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                        <span class="error_msg hidden">Error message...</span>
					</dd>
                    <dt class="left"><input id="radio_01" type="radio" name="move_date"  /> <label for="radio_01">End Date:</label></dt>
					<dd>
						<input type="text" id="input01" class="medium_width" value="" />
						<a id="icon_01" href="#" class="button" ><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                        <span class="error_msg hidden">Error message...</span>
					</dd>
                   <dt class="left"><input id="radio_02" type="radio" name="move_date"/> <label for="radio_02">Forward: </label></dt>
					<dd >
						<input type="text" id="input02" class="medium_width" value=""/>
                        <span >&nbsp;days</span>
                        <span class="error_msg hidden">Error message...</span>
					</dd>
                    <dt class="left"><input id="radio_03" type="radio" name="move_date"   /> <label for="radio_03">Back: </label></dt>
					<dd>
						<input type="text" id="input03" class="medium_width" value="" />
                        <span >&nbsp;days</span>
                        <span class="error_msg hidden">Error message...</span>
					</dd>
				</dl>
		</fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
