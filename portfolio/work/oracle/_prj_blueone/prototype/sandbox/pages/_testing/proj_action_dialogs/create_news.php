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
	<title>Create News</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create News</h2>
                <p>Tasks &bull; Complete Safari Testing</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Enter a title and the news information.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_bottom_margin">
            
            

                <!-- TEXT CONTROL -->
                <dt class="required"><label for="txt_field_00">Title:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="long_width" />
                	<span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- Character Counter w/ Autoexpand Multi-text -->
                <dt><label for="multitext_counter">News:</label></dt>
                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>   
			</dl>
            <dl  class="side_by_side_mixed with_top_margin">
                	<!-- SINGLE SELECT LIST -->
                    <dt><label for="ssl_00">Owner:</label></dt>
                    <dd>
                        <div class="list_control single_list long_width">
                            <input type="text" id="ssl_00" autocomplete="off" value="Administrator, Agile (admin)" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_00"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_ssl_00" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                    </dd> 

                
                <dt class="mixed_text"><label for="autoNumber">Create Date:</label></dt>
                <dd class="mixed_text"><p>01/10/2007 06:15:15 PM PST</p></dd>
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
