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
	<title>Create Action Item</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Action Item</h2>
                <p>Task &bull; Complete Safari Testing</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Enter required information to create an Action Item.  By default, the status will be &quot;Not Accepted.&quot;</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_bottom_margin">
                <!-- TEXT CONTROL -->
                <dt class="required form_error_label"><label for="txt_field_00" class="">Subject with long label:</label></dt>
                <dd>
                	<input type="text" id="txt_field_00" class="long_width" />
                	<span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- Character Counter w/ Autoexpand Multi-text -->
                <dt><label for="multitext_counter">Description:</label></dt>
                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>   


                <!-- Required Select -->
                <dt><label for="req_sel_00">Priority:</label></dt>
                <dd>
                    <select id="req_sel_00" class="medium_width">
						<option value="1 - critical">1 - Critical</option>
						<option value="2 - high"> 2 - High</option>
						<option value="3 - regular" selected="selected"> 3 - Regular</option>
						<option value="4 - low"> 4 - Low</option>
                    </select>
                </dd>
          	</dl>

            <dl class="side_by_side_mixed">


                                
                <!-- SINGLE SELECT LIST -->
                <dt class="required"><label for="ssl_00">Owner:</label></dt>
                <dd>
                    <div class="list_control single_list medium_width">
                        <input type="text" id="ssl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                        </div>
                    </div>
                    <a href="#" id="cmd_ssl_00" class="button"><span><em class="view_details">&nbsp;</em></span></a>
                </dd> 
                


				<!-- DATE CONTROL -->
                <dt><label for="start_date">Due Date:</label></dt>
                <dd>
                    <input type="text" id="start_date" class="short_width" value="" />
                    <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                    <span class="error_msg hidden">Error message...</span>
                </dd>


                <!-- Required Select -->
                <dt><label for="req_sel_00">Status:</label></dt>
                <dd>
                    <select id="req_sel_00" class="medium_width">
						<option value="accepted">Accepted</option>
						<option value="canceled">Canceled</option>
						<option value="complete">Complete</option>
						<option value="in progress">In Progress</option>
						<option value="not accepted" selected="selected">Not Accepted</option>
						<option value="rejected">Rejected</option>
                    </select>
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
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Create</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
