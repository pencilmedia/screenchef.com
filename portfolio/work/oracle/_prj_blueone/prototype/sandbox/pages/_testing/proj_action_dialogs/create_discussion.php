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
    <script type="text/javascript" src="reject.php.js"></script>
    <title>Create Discussion</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create Discussion</h2>
                <p>Program &bull; New Product Development</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Enter your discussion message and select users to be notified.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
			<dl class="side_by_side_mixed">
                <!-- Required Select -->
                <dt class="required"><label for="first_field">Discussion Type:</label></dt>
                <dd>
                    <select id="first_field" class="medium_width">
                        <option value="" selected="selected"></option>
                        <option value="">Contract</option>
                        <option value="">Published Price</option>
                  	</select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
            
                <dt class="required"><label for="req_sel_00">Subject:</label></dt>
                <dd>
					<input type="text" value="" class="long_width" id="ui_control_id_45f08466a1dd79.07322989"/>                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- COMMENTS TEXT AREA -->   
                <dt><label for="multitext_counter">Message:</label></dt>
                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>

                <dt><label for="first_field">Priority:</label></dt>
                <dd>
                    <select id="first_field" class="medium_width">
                        <option value="" selected="selected"></option>
                        <option value="">Contract</option>
                        <option value="">Published Price</option>
                  	</select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- MULTI SELECT LIST -->
                <dt><label for="msl_00">Notify List</label></dt>
                <dd class="with_bottom_margin">
						<div class="controlOuterContainer long_width" id="mssContainer">
                            <input type="text" autocomplete="off" class="search_query" id="target_query"/>
							<div tabindex="-1" class="selected_container " id="mss_targetContainer">
								<ul id="mss_pillbox"><li title="Joel Nave">Joel Nave<a href="#"><span>x</span></a></li></ul>
							  </div>
						</div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                </dd>

            </dl>
        </fieldset>
		</form>
	</div>
<!--************************************
	FOOTER
*************************************-->    
<div id="wrapper_action_dialog_footer" class="footer">
    <div class="column_one">
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
