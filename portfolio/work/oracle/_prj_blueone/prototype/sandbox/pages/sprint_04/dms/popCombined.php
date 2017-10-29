<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/yui/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="global/js/common.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs.js"></script>
	<title>Reminder : Complex</title>
</head>
<body class="action_dialog" onload="shiftFocus('close_button')";>
<!--************************************
	HEADER
*************************************-->
<div id="header" class="header">
    <div class="header_wrapper">
        <div class="column_one">
            <h2>Error and Warning Details</h2>
            <p>Dialog or Page Title</p>
        </div>		
    </div>
<!--************************************
	MESSAGES
*************************************-->
<div id="page_message" class="message error_notext">&nbsp;</div>   
</div>
<!--************************************
	CONTENT
*************************************-->
<div id="wrapper_action_dialog_content" class="content messaging_dialog">
        <p>The submission can not continue until the following issues are addressed.</p>
        <p class="graydiag">Errors</p>
        <ul class="reminder">
            <li>The following required fields are missing: 0050,000 / Affected items New Rev</li>
            <li>The following required fields are missing: TEST031707 / Affected items New Rev</li>
        </ul>
        <p class="graydiag">Warnings</p>
        <ul class="reminder">
            <li>Unreleased child: 0050, 000 (152S0006)</li>
            <li>Not all approvers responded</li>
        </ul>
</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="footer" class="footer">
    <div class="column_one"></div>
    <div class="column_three">
        <a href="#" class="button"><span><em class="save_dialog">&nbsp;</em> Print</span></a>
        <a href="#" onclick="window.close();" class="button" id="close_button"><span><em class="cancel">&nbsp;</em> Close</span></a>
    </div>
</div>
</body>
</html>