<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

    <script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
    <script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
    <script type="text/javascript" src="create_baseline.php.js"></script>
	<title>Create Baseline</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Baseline</h2>
                <p>Program &bull; 7600 Series Router</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Enter the baseline Description and click save.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">
                <dt class="mixed_text"><label>Version:</label></dt>
                <dd class="mixed_text"><p>1</p></dd>
                <dt class="mixed_text"><label>Create Date:</label></dt>
                <dd class="mixed_text"><p>01/10/2007 06:15:15 PM PST</p></dd>
                <dt class="required"><label for="multitext_counter">Description:</label></dt>
                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>   
            </dl>
            <dl class="side_by_side_mixed">
                <dt class="mixed_text">&nbsp;</dt>
                <dd class="mixed_text"><input id="kick_baseline" type="checkbox" name="" value="" class="form_selectors" /> <label for="kick_baseline">Kick-off Baseline</label></dd>
                <dt class="mixed_text">&nbsp;</dt>
                <dd class="mixed_text"><input id="plan_record" type="checkbox" name="" value="" class="form_selectors" /> <label for="plan_record">Plan of Record</label></dd>
                <dt class="mixed_text">&nbsp;</dt>
                <dd class="mixed_text"><label for="3" class="inline_dropdown">As of <select id="as_of" class="medium_width"><option>Product Launch</option></select></label></dd>
            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Create</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
