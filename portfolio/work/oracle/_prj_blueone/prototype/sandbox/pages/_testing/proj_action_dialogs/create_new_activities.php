<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

         <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
	<link rel="stylesheet" type="text/css" href="global/css/default.css" />
<link rel="stylesheet" type="text/css" href="global/css/multi_list.css" />
   	<link rel="stylesheet" type="text/css" href="global/css/multi_select_cascade_list_tree.css" />
	<link rel="stylesheet" type="text/css" href="create_new_activities.php.css" />
    	<script type="text/javascript" src="global/js/jquery/jquery.js"></script>

	<script type="text/javascript" src="global/js/jquery/plugins/jquery.colors.js"></script><script src="http://dev.jquery.com/view/trunk/plugins/ui/ui.mouse.js"></script>
  	<script src="http://dev.jquery.com/view/trunk/plugins/ui/ui.draggable.js"></script>
	<script src="http://dev.jquery.com/view/trunk/plugins/ui/ui.resizable.js"></script>
	<script type="text/javascript" src="global/js/action_dialogs_common.js"></script>
    <script type="text/javascript" src="global/js/multi_counter_expander.js"></script>
	<script type="text/javascript" src="create_new_activities.php.js"></script>
	<title>Create New...</title>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Create New</h2>
                <p>Activities</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <!--<div id="dms" class="dms message"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p></div>-->
        <div id="page_message" class="message info">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas nonummy augue ut magna. Cras id turpis in lacus tempor fringilla. Morbi placerat felis in nisl. Curabitur sed urna quis augue eleifend rutrum.</p>
        
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed">

                <!-- SELECT CONTROL -->
                <dt class="required"><label for="req_sel_00">Type:</label></dt>
                <dd>
                    <select id="req_sel_00" class="long_width">
                        <option value="">Program</option>
                        <option value="">Phase</option>
                        <option value="">Tasks</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- TEXT CONTROL -->
                <dt class="required hidden"><label for="txt_field_00">Name:</label></dt>
                <dd class="hidden">
                	<input type="text" id="txt_field_00" class="long_width" />
                	<span class="error_msg hidden">Error message...</span>
                </dd>

				<!-- DESCRIPTION TEXT AREA -->
                <dt class="hidden"><label for="multitext_counter">Description:</label></dt>
                <dd class="hidden">
                    <textarea id="multitext_counter" wrap="physical" cols="20" rows="3" class="long_width counter150" onkeydown="mce.counter('multiText',this,document.form1.multitext_char_counter,150)" onkeyup="mce.counter('multiText',this,document.form1.multitext_char_counter,150)"></textarea>
                    <input readonly="readonly" type="text" id="multitext_char_counter" class="counter" size="3" maxlength="3" value="150">
                </dd>                


                <!-- MULTI SELECT LIST -->
                <dt class="hidden"><label for="msl_00">Designated Owners:</label></dt>
                <dd class="hidden">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="msl_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_msl_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                </dd>

                <!-- SELECT CONTROL -->
                <dt class="required hidden"><label for="req_sel_01">Template:</label></dt>
                <dd class="hidden">
                    <select id="req_sel_01" class="short_width">
                        <option value="">Active</option>
                        <option value="">Proposed</option>
                        <option value="">Template</option>
                    </select>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

            </dl>
        </fieldset>
        
		<fieldset id="schedule" class="last_set hidden" style="padding-bottom: 10px;">
			<legend>Schedule</legend>
			<dl class="side_by_side_mixed with_top_margin">


				<dt id="ui_duration_type_dt"><label for="ui_duration_type">Duration Type:</label></dt>
				<dd>
					<select id="ui_duration_type" class="short_width" onchange="ui_duration_type_onchange(this);" >
						<option value="fixed">Fixed</option>
						<option value="effort">Effort</option>
					</select>                    
				</dd>

				<!-- DATE CONTROL -->
                <dt class="required"><label for="start_date">Start Date:</label></dt>
                <dd>
                    <input type="text" id="start_date" class="short_width" value="##/##/####" />
                    <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                    <span class="error_msg hidden">Error message...</span>
                </dd>

                <!-- TEXT CONTROL -->
                <dt class="required"><label for="effort_duration" id="effort_duration">Duration Type:</label></dt>
                <dd>
                	<input type="text" id="effort_duration" class="short_width" value="1" />
                    <span class="error_msg hidden">Error message...</span>
                </dd>

    			<!-- DATE CONTROL -->
                <dt class="required"><label for="end_date">End Date:</label></dt>
                <dd>
                    <input type="text" id="end_date" class="short_width" value="#/##/####" />
                    <a href="#" class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
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
        <div class="column_one">
            <input type="checkbox" id="optional" /> <label for="optional">Continue creation in wizard</label>
        </div>
        <div class="column_three">
            <a href="#" id="cmdSave" class="button"><span><em class="save_dialog">&nbsp;</em>Save</span></a> 
            <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
        </div>
    </div>

</body>
</html>
