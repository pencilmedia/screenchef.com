<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="add_modify_partners.php.css" />	
	<script type="text/javascript" src="global/js/jquery/jquery-1.2.6.min.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.dimensions.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.tooltip.js"></script>
   	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="view_conversion_rates.php.js"></script>
	<title>Add / Modify Partners</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>View Conversion Rates</h2>
                <p>Sourcing Project &bull; PRJ00123</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Update to current rates.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<div class="page_controls">
        	<p>Project Currency : <strong>United States Dollar</strong></p>
        </div>
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" id="update_rates" class="button"><span>Update</span></a>
                </p>
            </div>
        </div>
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <table class="rbr" cellpadding="0" cellspacing="0">
            <tr class="header">
                <td class="handle"></td>
                <td>Currencies Used</td>
                <td>Project Rates</td>
                <td>Current System Rates</td>
                <td>Last Modified Date</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>CAD</td>
                <td></td>
                <td></td>
                <td>10/29/2008 02:33:46 AM IST</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>USA</td>
                <td id="rate1"class="rate_outdated">0.75</td>
                <td>1.00</td>
                <td>10/29/2008 02:33:46 AM IST</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>EUR</td>
                <td id="rate2" class="rate_outdated">0.2816</td>
                <td>0.4816</td>
                <td>10/29/2008 02:33:46 AM IST</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">&nbsp;</div>
     	<div class="column_three">
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
	    </div>
	</div>
</body>
</html>