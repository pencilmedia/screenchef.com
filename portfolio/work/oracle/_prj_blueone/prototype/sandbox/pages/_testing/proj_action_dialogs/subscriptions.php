<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
	<script type="text/javascript" src="subscriptions.php.js"></script>
	<title>Subscriptions</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Subscriptions</h2>
                <p>Change &bull; C01701</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
	</div>
	
    <div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset class="input_lists">
                <legend>Status Options</legend>
                <ul class="column_one">	
                    <li><input id="first_field" type="checkbox" name="" value="" class="form_selectors" /> <label for="first_field">Status change</label></li>
    
                </ul>
            </fieldset>
            <fieldset id="field_options" class="input_lists">
                <legend>Field Options</legend>
                <ul class="column_one">	
                    <li><input id="ui_select_all" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_select_all">Select all</label></li>
                    <li><input id="ui_page_two_cm" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_page_two_cm">Page Two CM visibility</label></li>
    
                </ul>
                <ul class="column_two">
                    <li><input id="ui_page_two_explanation" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_page_two_explanation">Page Two Explanation for Change</label></li>
                </ul>
            </fieldset>
            <fieldset class="input_lists">
                <legend>File Options</legend>
    
                <ul class="column_one">	
                    <li><input id="ui_add_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_add_file">Add file</label></li>
                    <li><input id="ui_delete_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_delete_file">Delete file</label></li>
                    <li><input id="ui_checkin_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_checkin_file">Checkin file</label></li>
                </ul>
                <ul class="column_two">
    
                    <li><input id="ui_checkout_file" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_checkout_file">Checkout file</label></li>
                    <li><input id="ui_cancel_checkout" type="checkbox" name="" value="" class="form_selectors" /> <label for="ui_cancel_checkout">Cancel Checkout</label></li>
                </ul>
            </fieldset>
		</form>
	</div>
    
    <div id="wrapper_action_dialog_footer" class="footer">
    	<div class="column_three">
	        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Send</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>