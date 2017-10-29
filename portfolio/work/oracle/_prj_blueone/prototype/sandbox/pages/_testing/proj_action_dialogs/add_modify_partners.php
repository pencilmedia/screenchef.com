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
	<title>Add / Modify Partners</title>
</head>
<body class="action_dialog record_by_record">
	<div id="wrapper_action_dialog_header" class="header" style="min-width:620px;">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Assign Partners</h2>
                <p>Sourcing Project &bull; SRP10043</p>
            </div>		
        </div>
        <div class="record_by_record">
            <h2 class="left">P00253 &bull; <span style="font-weight:normal">Description of part goes here.</span></h2>
            <h2 class="right">Record 3 of 5</h2>
        </div>
        <div id="page_message" class="message info">
            <p>Add Partners by adding them and specifyig a split percentage.  To modify a split percentage double click the split percentage value.</p>
        </div>

        <div class="table_actions" style="margin-top: 15px;">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>
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
                <td>Partner / Supplier</td>
                <td>Split Percentage (%)</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>ACME2 - CTRMR00101</td>
                <td>100</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>Broker - AUTO70966815</td>
                <td>100</td>
            </tr>
            <tr>
                <td class="handle"></td>
                <td>Broker - AUTO709512392</td>
                <td>100</td>
            </tr>
        </table>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_one">
    		<input type="checkbox" id="optional" /> <label for="optional">Apply to remaining records</label>
	    </div>
     	<div class="column_three">
	        <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Previous Record</span></a> 
    	    <a href="#" id="cmdNext" class="button"><span>Next Record <em class="arrow_next">&nbsp;</em></span></a>
	        <a href="#" id="cmdFinish" class="button"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>