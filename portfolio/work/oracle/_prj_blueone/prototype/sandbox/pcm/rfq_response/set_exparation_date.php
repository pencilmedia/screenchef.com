<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="add_modify_partners.php.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="add_modify_partners.php.js"></script>
	<title>Set Expiration Date</title>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Set Expiration Date</h2>
                <p>RFQ Response &bull; RFQ1234</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Select a date to set as expiration for all selected response lines.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
        <!--************************************
            TABLE ACTIONS
        *************************************-->
			<!-- Joels rogue style for lonely forms -->
			<dl class="side_by_side_mixed with_top_margin" style="padding-top:30px">
				<dt id="dynamic_require" class="required"><label for="ui_start_date">Date:</label></dt>

				<dd class="dually required">
					<!-- 1st field element and button -->
					<input type="text" id="ui_start_date" class="medium_width" />
					<a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
					<span class="error_msg hidden">Error message...</span>
				</dd>
			</dl>

	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">
	    </div>
     	<div class="column_three">
	        <a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Set</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>