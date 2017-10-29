<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link rel="stylesheet" type="text/css" href="global/css/default.css" />
    <script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="change_status.php.js"></script>
	<title>Change Status</title>
</head>
<body class="action_dialog">
	
    <div id="wrapper_action_dialog_header" class="header">
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Change Status to CCB</h2>
                <p>Change &bull; C01701</p>
            </div>		
        </div>
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        </div>
	</div>
    
	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
            <fieldset>
             <legend>Reviewers</legend>
                <dl class="side_by_side_mixed with_top_margin">

                    <!-- MULTI SELECT LIST -->
                    <dt class="required"><label for="msl_00">Approvers:</label></dt>
                    <dd>
                        <div class="list_control multi_list long_width">
                            <input type="text" id="msl_00" autocomplete="off" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_00"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                    </dd>
    
                    <!-- MULTI SELECT LIST -->
                    <dt><label for="msl_01">Observers:</label></dt>
                    <dd>
                        <div class="list_control multi_list long_width">
                            <input type="text" id="msl_01" autocomplete="off" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
                                <ul id="pillbox_01"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_msl_01" class="button"><span><em class="iconic view_details">&nbsp;</em>&nbsp;</span></a>
                    </dd>
    			</dl>
            </fieldset>


            <fieldset>
            <legend>Notify</legend>
    
                <dl class="side_by_side_mixed chk_group with_top_margin">
                    <dt class="required"><label>To:</label></dt>
                    <dd>
                        <input id="change_analyst" type="checkbox" name="" class="form_selectors" /> <label for="change_analyst">Change Analyst</label>
                    </dd>
                    <dt class="place_holder">Blank</dt>
                    <dd>
    
                        <input id="ui_originator" type="checkbox" name="" class="form_selectors" /> <label for="ui_originator">Originator</label>
                    </dd>
                    <dt class="place_holder">Blank</dt>
                    <dd>
                        <input id="ui_reviews" type="checkbox" name="" class="form_selectors" /> <label for="ui_reviews">Reviewers</label>
                    </dd>
    
                </dl>
                <dl class="side_by_side_mixed">
                    <!-- MULTI SELECT LIST -->
                    <dt><label for="msl_00">&nbsp;</label></dt>
                    <dd class="with_bottom_margin">
                        <div class="list_control multi_list long_width">
                            <input type="text" id="msl_00" autocomplete="off" />
                            <div class="auto_complete_results"></div>
                            <div class="pill_container" tabindex="-1">
    
                                <ul id="pillbox_00"></ul>
                            </div>
                        </div>
                        <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
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
    <div id="wrapper_action_dialog_footer" class="footer">
        <div class="column_one">
            <input type="checkbox" id="optional" /> <label for="optional">Send notification as urgent</label>
        </div>
    	<div class="column_three">
	        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Finish</span></a> 
    	    <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
	    </div>
	</div>
</body>
</html>