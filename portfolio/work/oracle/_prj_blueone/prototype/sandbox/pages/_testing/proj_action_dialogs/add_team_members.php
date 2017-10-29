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
	<title>Add Team Members</title>
	<style>
    dl.side_by_side_mixed dt { width:27%; }
    /******************************************************************************
    CONTROLS WITH DUAL AND EXTRA BUTTONS
    ******************************************************************************/
    /* Extra bottom button */
    dd.single_button.with_bottom_button,
    dd.dual_button.with_bottom_button { padding-bottom:25px; }
    dd.single_button p,
    dd.dual_button p {  text-align: right; padding-top:6px; white-space:nowrap; }
    </style>
</head>
<body class="action_dialog">
	<div id="wrapper_action_dialog_header" class="header">
        <!--************************************
            HEADER
        *************************************-->	
        <div class="header_wrapper">
            <div class="column_one">
                <h2>Add Team Members</h2>
                <p>Program &bull; New Product Development</p>
            </div>		
        </div>
        <!--************************************
            MESSAGES
        *************************************-->
        <div id="page_message" class="message info">
            <p>Select users to add and specify their percent allocation and roles.</p>
        </div>
	</div>

	<div id="wrapper_action_dialog_content" class="content">
		<form id="form1" name="form1" action="#">
        <fieldset class="dynamic">
            <dl class="side_by_side_mixed with_bottom_margin">
            
                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="amo_00">New Members:</label></dt>
                <dd class="single_button with_bottom_button ">
                    <div class="list_control multi_list long_width">
                        <input type="text" id="amo_00" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                      	<p class="bottom_buttons"><a href="#" id="cmd_amo_00" class="button"><span>Utilization Report</span></a></p>
                    </div>
                    <a href="#" id="cmd_amo_00" class="button"><span><em class="iconic addressbook">&nbsp;</em>&nbsp;</span></a>
                </dd>      
                
                <dt class="required"><label for="amo_02">Allocation:</label></dt>
                <dd>
                 <input id="percent" type="radio" name="for_allocation" class="form_selectors" checked="checked" /> 
                   <label for="percent"> <input id="amo_03" name="" value="100" size="2" class="short_width inline_box" /> &nbsp;percent</label>
                 </dd>
                 <dt class="place_holder">Blank</dt>
                   <dd>
                  <input id="team_member" type="radio" name="for_allocation" class="form_selectors" /> <label for="team_member">As a team member only</label>
               	 </dd>           
                <!-- MULTI SELECT LIST -->
                <dt class="required"><label for="amo_01">Roles:</label></dt>
                <dd>
                    <div class="list_control multi_list long_width">
                        <input type="text" id="amo_01" autocomplete="off" />
                        <div class="auto_complete_results"></div>
                        <div class="pill_container" tabindex="-1">
                            <ul id="pillbox_00"></ul>
                      	</div>
                    </div>
                    <a href="#" id="cmd_amo_01" class="button"><span><em class="iconic action_list">&nbsp;</em>&nbsp;</span></a>
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
    	<input type="checkbox" id="optional" /> <label for="optional">Apply to this level and below</label>
    </div>
    <div class="column_three">
        <a href="#" id="cmdSend" class="button"><span><em class="save_dialog">&nbsp;</em>Add</span></a> 
        <a href="#" id="cmdCancel" class="button"><span><em class="cancel">&nbsp;</em>Cancel</span></a>
    </div>
</div>
</body>
</html>
