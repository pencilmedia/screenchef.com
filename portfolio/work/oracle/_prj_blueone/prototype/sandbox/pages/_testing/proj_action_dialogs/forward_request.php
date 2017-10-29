<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script><script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="send.php.js"></script>
	<title>Forward Request</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Forward Request</h2>
                <p>RFQ Response &bull; RFQ00123</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Select a coworker to forward the access and responsibility of this request.</p>
        </div>
	</div>
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset class="dynamic">
                <dl class="side_by_side_mixed">
                    <dt class="required"><label for="msl_00">Notify:</label></dt>
                    <dd>
                    	<select class="medium_width">
                        	<option></option>
                        </select>
                    </dd>                
                    <dt class="required"><label for="comments">Comments:</label></dt>
                    <dd class="">
                        <textarea id="comments" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter_00,150)"></textarea>
                        <input readonly="readonly" type="text" id="multitext_char_counter_00" class="counter" size="3" maxlength="3" value="150">
                    </dd>                
                </dl>
            </fieldset>
		</form>
	</div>
    <div id="wrapper_action_dialog_footer" class="footer">
        <div class="column_one">
            &nbsp;
        </div>
    	<div class="column_three">
	        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Send</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>