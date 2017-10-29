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
    <script type="text/javascript" src="approve.php.js"></script>
    <title>Remove Approvers and Observers</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Remove Approvers and Observers</h2>
                <p>Change &bull; C00223</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Select and delete reviewers that are no longer appropriate.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic with_bottom_margin">
			<dl class="side_by_side_mixed">
                <!-- Required Select -->
                <dt><label for="req_sel_00">Remove from Status:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">CCB</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>
                
			</dl>
      	</fieldset>
        
        <fieldset class="dynamic">
			<dl class="side_by_side_mixed">
               
                <!-- MULTI SELECT LIST -->
                <dt><label for="msl_00">Approvers</label></dt>
                <dd class="with_bottom_margin">
                    <div class="list_control multi_list long_width">
                        <div class="pill_container no_input" tabindex="-1">
                            <ul id="pillbox_00">
                            	<li>test <a href="#">&nbsp;</a></li>
                            </ul>
                      	</div>
                    </div>
                </dd>


                <dt><label for="msl_01">Observers</label></dt>
                <dd class="with_bottom_margin">
                    <div class="list_control multi_list long_width">
                        <div class="pill_container no_input" tabindex="-1">
                            <ul id="pillbox_00">
                            	<li>test <a href="#">&nbsp;</a></li>
                            </ul>
                      	</div>
                    </div>
                </dd>

                <!-- COMMENTS TEXT AREA -->   
                <dt><label for="multitext_counter">Comments:</label></dt>
                <dd>
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
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
    	<input type="checkbox" id="optional" /> <label for="optional">Send notification as urgent</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
