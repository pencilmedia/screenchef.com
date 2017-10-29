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

	<title>Share</title>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Share with Users</h2>
                <p>Part &bull; P00034</p>
            </div>	
        </div>
        <div id="page_message" class="message info">
            <p>Add users with sharing roles.</p>
        </div>
        <div class="view_controls">
            <h4>Users</h4>
        </div>
        <div class="table_actions" style="margin-top: 15px;">
            <div class="column_one no_width">
                <p>
                    <a href="#" onclick="getDialog('add_users.php',525,375);return false;" title="Share" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Remove</span></a>
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
                <td>Name</td>
                <td>Roles</td>
            </tr>
        </table>
        <div class="blank_table_space"/>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">

	    </div>
     	<div class="column_three"> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Close</span></a>
	    </div>
	</div>
</body>
</html>